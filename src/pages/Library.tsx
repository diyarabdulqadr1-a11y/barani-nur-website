import { useMemo, useState } from "react";
import { QUOTES, TOPICS, type Quote } from "../data/content";
import QuoteCard from "../components/QuoteCard";
import { Search } from "../components/icons";
import { cn } from "../utils/cn";

export default function Library({ onShare, initialTopic }: { onShare: (q: Quote) => void; initialTopic?: string }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string>(initialTopic || "all");

  const results = useMemo(() => {
    return QUOTES.filter((q) => {
      const matchT = topic === "all" || q.topic === topic;
      const matchQ = !query || (q.text + q.volume + q.page).includes(query);
      return matchT && matchQ;
    });
  }, [query, topic]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">کتێبخانەی وتەکان</h1>
        <p className="mt-2 text-beige/60">گەڕان لەناو هەموو وتە و پەیامەکاندا بەپێی وشە، بابەت، و بەرگ</p>
      </div>

      <div className="relative mx-auto mb-6 max-w-xl">
        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-beige/40" />
        <input value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="بگەڕێ بەدوای وشە، بابەت، یان بەرگ..."
          className="w-full rounded-full border border-gold/20 bg-charcoal/60 py-3.5 pr-12 pl-5 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none" />
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Chip active={topic === "all"} onClick={() => setTopic("all")}>هەموو</Chip>
        {TOPICS.map((t) => (
          <Chip key={t.key} active={topic === t.key} onClick={() => setTopic(t.key)}>{t.title}</Chip>
        ))}
      </div>

      <p className="mb-6 text-center text-sm text-beige/50">{results.length} ئەنجام دۆزرایەوە</p>

      {results.length === 0 ? (
        <div className="py-20 text-center text-beige/50">
          <p className="text-4xl">✦</p>
          <p className="mt-4">هیچ ئەنجامێک نەدۆزرایەوە. وشەیەکی تر تاقیبکەرەوە.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((q) => <QuoteCard key={q.id} quote={q} onShare={onShare} />)}
        </div>
      )}
    </div>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      className={cn("rounded-full border px-4 py-1.5 text-sm transition-colors",
        active ? "border-gold bg-gold/20 text-gold" : "border-gold/15 text-beige/60 hover:border-gold/40 hover:text-cream")}>
      {children}
    </button>
  );
}
