import { useState } from "react";
import { ARTICLES, TOPICS, QUOTES, type Article, type Quote } from "../data/content";
import { SectionTitle, Card, Divider } from "../components/ui";
import { Clock, Arrow } from "../components/icons";
import QuoteCard from "../components/QuoteCard";

export default function Articles({ onShare }: { onShare: (q: Quote) => void }) {
  const [open, setOpen] = useState<Article | null>(null);

  if (open) {
    const related = QUOTES.filter((q) => q.topic === open.topic).slice(0, 2);
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <button onClick={() => setOpen(null)} className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:underline">
          <Arrow className="h-4 w-4 rotate-180" /> گەڕانەوە بۆ وتارەکان
        </button>
        <span className="rounded-full bg-olive/15 px-3 py-1 text-xs text-olive">{TOPICS.find((t) => t.key === open.topic)?.title}</span>
        <h1 className="mt-4 font-display text-3xl font-bold leading-snug text-cream sm:text-4xl">{open.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-xs text-beige/50">
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {open.readTime} خولەک خوێندنەوە</span>
          <span>· سەرچاوە: {open.source}</span>
        </div>
        <Divider />
        <div className="space-y-5 text-cream fs-lg leading-loose">
          {open.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-8 rounded-2xl border border-gold/20 bg-charcoal/50 p-5 text-center text-xs text-gold/70">
          سەرچاوە: {open.source}
        </div>
        {related.length > 0 && (
          <>
            <Divider />
            <h2 className="mb-6 text-center font-display text-2xl text-cream">وتە پەیوەندیدارەکان</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((r) => <QuoteCard key={r.id} quote={r} onShare={onShare} />)}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle kicker="دەقە بناخەییەکان" title="وتارە هەڵبژێردراوەکان"
        sub="هەڵبژاردنێک لە دەقە بناخەییەکانی کتێبەکان، بەبێ زیادکردنی هیچ شرۆڤەیەکی دەرەکی" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a) => (
          <Card key={a.id} className="flex flex-col p-6">
            <span className="mb-3 w-fit rounded-full bg-olive/15 px-3 py-1 text-xs text-olive">{TOPICS.find((t) => t.key === a.topic)?.title}</span>
            <h3 className="font-display text-xl text-cream leading-snug">{a.title}</h3>
            <p className="mt-2 flex-1 text-sm text-beige/60 leading-relaxed">{a.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-gold/10 pt-4 text-xs text-beige/50">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.readTime} خولەک</span>
              <button onClick={() => setOpen(a)} className="text-gold hover:underline">بخوێنەوە ←</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
