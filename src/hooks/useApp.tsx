import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type FontSize = "sm" | "base" | "lg";

interface AppState {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  theme: "dark" | "light";
  toggleTheme: () => void;
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  streak: number;
  page: string;
  navigate: (p: string) => void;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem("bn_favs") || "[]"); } catch { return []; }
  });
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("bn_theme") as "dark" | "light") || "dark");
  const [fontSize, setFontSizeState] = useState<FontSize>(() => (localStorage.getItem("bn_fs") as FontSize) || "base");
  const [streak, setStreak] = useState(1);
  const [page, setPage] = useState("home");

  useEffect(() => { localStorage.setItem("bn_favs", JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => {
    localStorage.setItem("bn_theme", theme);
    document.documentElement.classList.toggle("light-mode", theme === "light");
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("bn_fs", fontSize);
    const root = document.documentElement;
    root.style.setProperty("--bn-scale", fontSize === "sm" ? "0.92" : fontSize === "lg" ? "1.12" : "1");
  }, [fontSize]);

  useEffect(() => {
    const today = new Date().toDateString();
    const last = localStorage.getItem("bn_lastvisit");
    let s = parseInt(localStorage.getItem("bn_streak") || "0", 10);
    if (last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      s = last === yesterday ? s + 1 : 1;
      localStorage.setItem("bn_lastvisit", today);
      localStorage.setItem("bn_streak", String(s));
    }
    setStreak(s || 1);
  }, []);

  const toggleFavorite = (id: number) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const isFavorite = (id: number) => favorites.includes(id);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const setFontSize = (s: FontSize) => setFontSizeState(s);
  const navigate = (p: string) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <Ctx.Provider value={{ favorites, toggleFavorite, isFavorite, theme, toggleTheme, fontSize, setFontSize, streak, page, navigate }}>
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useApp must be used within AppProvider");
  return c;
}
