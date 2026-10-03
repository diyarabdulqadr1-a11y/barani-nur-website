import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface ReadingEntry {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  pages: number;
  bookName?: string;
}

export interface DailyGoal {
  userId: string;
  targetPages: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  saveReading: (pages: number, bookName?: string) => void;
  getTodayReading: () => number;
  getReadingHistory: () => ReadingEntry[];
  setDailyGoal: (target: number) => void;
  getDailyGoal: () => number;
  getStreak: () => number;
  getTotalPages: () => number;
}

const AuthCtx = createContext<AuthContextType | null>(null);

function getUsers(): Record<string, { password: string; user: User }> {
  try {
    return JSON.parse(localStorage.getItem("bn_users") || "{}");
  } catch {
    return {};
  }
}

function saveUsers(users: Record<string, { password: string; user: User }>) {
  localStorage.setItem("bn_users", JSON.stringify(users));
}

function getEntries(): ReadingEntry[] {
  try {
    return JSON.parse(localStorage.getItem("bn_entries") || "[]");
  } catch {
    return [];
  }
}

function saveEntries(entries: ReadingEntry[]) {
  localStorage.setItem("bn_entries", JSON.stringify(entries));
}

function getGoals(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem("bn_goals") || "{}");
  } catch {
    return {};
  }
}

function saveGoals(goals: Record<string, number>) {
  localStorage.setItem("bn_goals", JSON.stringify(goals));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("bn_current_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("bn_current_user");
      }
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = getUsers();
    const entry = Object.values(users).find((u) => u.user.email === email && u.password === password);
    if (entry) {
      setUser(entry.user);
      localStorage.setItem("bn_current_user", JSON.stringify(entry.user));
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    const users = getUsers();
    if (Object.values(users).some((u) => u.user.email === email)) {
      return false;
    }
    const newUser: User = {
      id: `user_${Date.now()}`,
      name,
      email,
      createdAt: new Date().toISOString(),
    };
    users[newUser.id] = { password, user: newUser };
    saveUsers(users);
    setUser(newUser);
    localStorage.setItem("bn_current_user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("bn_current_user");
  };

  const saveReading = (pages: number, bookName?: string) => {
    if (!user) return;
    const now = new Date();
    const entry: ReadingEntry = {
      id: `entry_${Date.now()}`,
      userId: user.id,
      date: now.toISOString().split("T")[0],
      time: now.toTimeString().slice(0, 5),
      pages,
      bookName,
    };
    const entries = getEntries();
    entries.push(entry);
    saveEntries(entries);
  };

  const getTodayReading = (): number => {
    if (!user) return 0;
    const today = new Date().toISOString().split("T")[0];
    return getEntries()
      .filter((e) => e.userId === user.id && e.date === today)
      .reduce((sum, e) => sum + e.pages, 0);
  };

  const getReadingHistory = (): ReadingEntry[] => {
    if (!user) return [];
    return getEntries()
      .filter((e) => e.userId === user.id)
      .sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time));
  };

  const setDailyGoal = (target: number) => {
    if (!user) return;
    const goals = getGoals();
    goals[user.id] = target;
    saveGoals(goals);
  };

  const getDailyGoal = (): number => {
    if (!user) return 10;
    return getGoals()[user.id] || 10;
  };

  const getStreak = (): number => {
    if (!user) return 0;
    const entries = getEntries().filter((e) => e.userId === user.id);
    if (entries.length === 0) return 0;
    const uniqueDays = new Set(entries.map((e) => e.date));
    return uniqueDays.size;
  };

  const getTotalPages = (): number => {
    if (!user) return 0;
    return getEntries()
      .filter((e) => e.userId === user.id)
      .reduce((sum, e) => sum + e.pages, 0);
  };

  return (
    <AuthCtx.Provider
      value={{
        user,
        login,
        register,
        logout,
        saveReading,
        getTodayReading,
        getReadingHistory,
        setDailyGoal,
        getDailyGoal,
        getStreak,
        getTotalPages,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
