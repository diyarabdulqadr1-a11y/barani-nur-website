import { useState } from "react";
import type { Quote } from "../data/content";
import { useApp } from "../hooks/useApp";
import { Heart, Share, Copy, Play, Download, Book } from "./icons";
import { cn } from "../utils/cn";
import { VOLUMES, openUrl } from "../data/books";

export default function QuoteCard({ quote, onShare }: { quote: Quote; onShare?: (q: Quote) => void }) {
  const { isFavorite, toggleFavorite } = useApp();
  const [copied, setCopied] = useState(false);
  const [playing, setPlaying] = useState(false);
  const fav = isFavorite(quote.id);

  const copy = () => {
    navigator.clipboard?.writeText(`${quote.text}\n\n— م. سەعیدی نوورسی، ${quote.volume}, ${quote.page}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const listen = () => {
    if (!("speechSynthesis" in window)) { setPlaying((p) => !p); return; }
    if (playing) { speechSynthesis.cancel(); setPlaying(false); return; }
    const u = new SpeechSynthesisUtterance(quote.text);
    u.lang = "ar"; u.rate = 0.9;
    u.onend = () => setPlaying(false);
    speechSynthesis.speak(u); setPlaying(true);
  };

  return (
    <article className="group flex flex-col rounded-2xl border border-gold/15 bg-charcoal/60 paper-texture p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-gold/40 hover:shadow-black/40">
      <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-olive/15 px-3 py-1 text-xs text-olive">
        ◈ {quote.arabic ? "قورئان و حیکمەت" : "حیکمەت"}
      </span>
      {quote.arabic && (
        <p className="font-quran mb-4 text-center text-xl text-gold-soft" dir="rtl">{quote.arabic}</p>
      )}
      <p className="mb-4 flex-1 text-cream fs-lg leading-loose">«{quote.text}»</p>
      <div className="mb-3 text-xs text-gold/70">— م. سەعیدی نوورسی · {quote.volume} · {quote.page}</div>
      {(() => {
        const v = VOLUMES.find((x) => x.id === quote.bookId);
        return v ? (
          <a href={openUrl(v.fileId)} target="_blank" rel="noreferrer"
            className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/20 px-3 py-1 text-xs text-cream transition hover:bg-gold/10">
            <Book className="h-3.5 w-3.5" /> لە کتێبی «{v.title}»دا بیخوێنەوە
          </a>
        ) : null;
      })()}
      <div className="flex items-center gap-2 border-t border-gold/10 pt-4">
        <ActionBtn onClick={() => toggleFavorite(quote.id)} active={fav} label={fav ? "لابردن لە دڵخوازەکان" : "پاشەکەوتکردن"}>
          <Heart className="h-4 w-4" filled={fav} />
        </ActionBtn>
        <ActionBtn onClick={() => onShare?.(quote)} label="هاوبەشکردن"><Share className="h-4 w-4" /></ActionBtn>
        <ActionBtn onClick={copy} active={copied} label="کۆپیکردن"><Copy className="h-4 w-4" /></ActionBtn>
        <ActionBtn onClick={listen} active={playing} label="گوێگرتن"><Play className="h-4 w-4" /></ActionBtn>
        <ActionBtn onClick={() => onShare?.(quote)} label="دابەزاندنی کارت"><Download className="h-4 w-4" /></ActionBtn>
        {copied && <span className="mr-auto text-xs text-olive">کۆپی کرا ✓</span>}
      </div>
    </article>
  );
}

function ActionBtn({ children, onClick, active, label }: { children: React.ReactNode; onClick?: () => void; active?: boolean; label: string }) {
  return (
    <button onClick={onClick} aria-label={label} title={label}
      className={cn("flex h-9 w-9 items-center justify-center rounded-full border transition-all active:scale-90",
        active ? "border-gold bg-gold/20 text-gold" : "border-gold/15 text-beige/60 hover:border-gold/40 hover:text-gold")}>
      {children}
    </button>
  );
}
