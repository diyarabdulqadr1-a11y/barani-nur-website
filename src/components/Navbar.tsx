import { useState } from "react";
import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import Logo from "./Logo";
import { Sun, Moon, Heart, Menu, Close } from "./icons";
import { cn } from "../utils/cn";
import { useI18n } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV = [
  { key: "home", label: "navHome" },
  { key: "daily", label: "navDaily" },
  { key: "books", label: "navBooks" },

  { key: "topics", label: "navIndex" },
  { key: "media", label: "navMedia" },
  { key: "audiobooks", label: "navAudiobooks" },
  { key: "nursi", label: "navNursi" },
  { key: "guide", label: "navGuide" },
  { key: "about", label: "navAbout" },
];

export default function Navbar() {
  const { page, navigate, theme, toggleTheme, fontSize, setFontSize, favorites } = useApp();
  const { user, logout } = useAuth();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-full items-center justify-between gap-2 px-4 py-3">
        <button onClick={() => navigate("home")} className="flex items-center gap-2 shrink-0">
          <Logo size={40} />
          <div className="text-right">
            <p className="font-display text-base font-bold leading-tight text-cream whitespace-nowrap">بارانی نوور</p>
            <p className="text-[9px] tracking-widest text-gold/70 leading-none">{t("brandLatin")}</p>
          </div>
        </button>

        <nav className="hidden items-center gap-0.5 xl:flex flex-1 justify-center">
          {NAV.map((n) => (
            <button key={n.key} onClick={() => navigate(n.key)}
              className={cn("rounded-full px-2.5 py-2 text-xs transition-colors whitespace-nowrap",
                page === n.key ? "bg-olive/20 text-gold" : "text-beige/70 hover:text-cream")}>
              {t(n.label as any)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><LanguageSwitcher /></div>
          {/* font size */}
          <div className="hidden items-center gap-1 rounded-full border border-gold/15 px-2 py-1 sm:flex">
            {(["sm", "base", "lg"] as const).map((f, i) => (
              <button key={f} onClick={() => setFontSize(f)} title="قەبارەی فۆنت"
                className={cn("rounded-full px-1.5 transition-colors", fontSize === f ? "text-gold" : "text-beige/50 hover:text-cream")}
                style={{ fontSize: `${0.7 + i * 0.18}rem` }}>أ</button>
            ))}
          </div>
          <button onClick={() => navigate("favorites")} title="دڵخوازەکان"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-beige/70 hover:text-gold">
            <Heart className="h-5 w-5" filled={page === "favorites"} />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -left-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">{favorites.length}</span>
            )}
          </button>
          <button onClick={toggleTheme} title="گۆڕینی ڕووناکی"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-beige/70 hover:text-gold">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          {user ? (
            <div className="hidden items-center gap-3 sm:flex">
              <button onClick={() => navigate("favorites")} className="text-sm text-gold/80 hover:text-gold transition-colors font-medium border-b border-gold/30 pb-0.5">{user.name}</button>
              <button onClick={() => { logout(); navigate("home"); }}
                className="rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs text-beige/70 hover:border-gold/40 hover:text-gold transition-all">
                چوونە دەرەوە
              </button>
            </div>
          ) : (
            <button onClick={() => navigate("auth")}
              className="hidden rounded-full bg-gold/15 border border-gold/20 px-5 py-2 text-xs font-semibold text-gold hover:bg-gold/25 sm:block transition-all shadow-lg shadow-gold/5">
              چوونەژوورەوە / خۆتۆمارکردن
            </button>
          )}
          <button onClick={() => setOpen((o) => !o)} title="مێنیو"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-cream lg:hidden">
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid grid-cols-2 gap-2 border-t border-gold/15 bg-ink/95 p-4 lg:hidden">
          {NAV.map((n) => (
            <button key={n.key} onClick={() => { navigate(n.key); setOpen(false); }}
              className={cn("rounded-xl px-4 py-3 text-right text-sm",
                page === n.key ? "bg-olive/20 text-gold" : "text-beige/70 hover:bg-charcoal")}>
              {t(n.label as any)}
            </button>
          ))}
          <div className="col-span-2 mt-2"><LanguageSwitcher /></div>
          {user ? (
            <button onClick={() => { logout(); navigate("home"); setOpen(false); }}
              className="col-span-2 rounded-xl border border-gold/20 px-4 py-3 text-sm text-beige/70 hover:bg-charcoal">
              چوونەدەرەوە ({user.name})
            </button>
          ) : (
            <button onClick={() => { navigate("auth"); setOpen(false); }}
              className="col-span-2 rounded-xl bg-gold/20 px-4 py-3 text-sm text-gold hover:bg-gold/30">
              داخل بوون / خۆتۆمارکردن
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
