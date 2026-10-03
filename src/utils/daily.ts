import { QUOTES, type Quote } from "../data/content";

export function dayIndex(offset = 0): number {
  const epoch = new Date(2024, 0, 1).getTime();
  const days = Math.floor((Date.now() - epoch) / 86400000) + offset;
  return ((days % QUOTES.length) + QUOTES.length) % QUOTES.length;
}

export function dailyQuote(offset = 0): Quote {
  return QUOTES[dayIndex(offset)];
}

export function kurdishDate(offset = 0): string {
  const d = new Date(Date.now() + offset * 86400000);
  return d.toLocaleDateString("ckb-IQ", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
