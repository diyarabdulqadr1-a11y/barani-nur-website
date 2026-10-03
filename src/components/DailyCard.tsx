import type { Quote } from "../data/content";
import { useApp } from "../hooks/useApp";
import { Heart, Copy, Book } from "./icons";
import { useState } from "react";
import { useI18n } from "../i18n";

export default function DailyCard({ quote, onRead }: {
  quote: Quote; onRead?: (id: number) => void; dateLabel?: string;
}) {
  const { isFavorite, toggleFavorite } = useApp();
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const fav = isFavorite(quote.id);

  const copyText = () => {
    navigator.clipboard?.writeText(`${quote.text}\n\n— م. سەعیدی نوورسی · ${quote.volume} · ${quote.page}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-charcoal via-ink to-navy geo-pattern p-8 shadow-2xl shadow-black/40 sm:p-12">
      <div className="absolute inset-0 light-arch opacity-60" aria-hidden />
      <div className="relative">
        <div className="mb-2 flex items-center justify-center gap-2 text-gold">
          <span>✦</span>
          <h3 className="font-display text-xl font-bold sm:text-2xl">{t("dailyTitle")}</h3>
          <span>✦</span>
        </div>
        {quote.arabic && (
          <p className="font-quran mb-6 text-center text-2xl text-gold-soft sm:text-3xl">{quote.arabic}</p>
        )}
        <blockquote className="mx-auto max-w-2xl text-center font-display text-2xl leading-loose text-cream sm:text-3xl">
          «{quote.text}»
        </blockquote>

        <p className="mt-7 text-center text-sm text-gold/80">
          م. سەعیدی نوورسی · {quote.volume} · {quote.page}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {onRead && (
            <button onClick={() => onRead(quote.bookId)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-105 active:scale-95">
              <Book className="h-4 w-4" /> {t("readInBook")}
            </button>
          )}
          <button onClick={() => toggleFavorite(quote.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition active:scale-95 ${fav ? "border-gold bg-gold/15 text-gold" : "border-gold/30 text-cream hover:bg-gold/10"}`}>
            <Heart className="h-4 w-4" filled={fav} /> {fav ? t("saved") : t("save")}
          </button>
          <button onClick={copyText}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition active:scale-95 ${copied ? "border-gold bg-gold/15 text-gold" : "border-gold/30 text-cream hover:bg-gold/10"}`}>
            <Copy className="h-4 w-4" /> {copied ? t("copied") : t("copy")}
          </button>
        </div>
      </div>
    </div>
  );
}
