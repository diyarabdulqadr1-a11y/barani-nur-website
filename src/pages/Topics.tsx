import { useMemo, useState } from "react";
import { TOPIC_INDEX } from "../data/content";
import { VOLUMES, openUrl } from "../data/books";
import { SectionTitle } from "../components/ui";
import { Search, Book, Arrow } from "../components/icons";

// مەپێکی ناوی بەرگ → فایلی گووگڵ درایڤ
function findVolume(name: string) {
  return VOLUMES.find((v) => v.title === name || name.includes(v.title));
}

// یەکەم پیتی ئەلفبا بۆ پۆلێنکردن
function firstLetter(s: string) {
  const t = s.replace(/^[«»\s"]+/, "").trim();
  return t.charAt(0);
}

export default function Topics(_props: { onSelect?: (key: string) => void }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q) return TOPIC_INDEX;
    const needle = q.trim();
    return TOPIC_INDEX.filter(
      (e) => e.topic.includes(needle) || e.refs.some((r) => r.section.includes(needle) || r.book.includes(needle))
    );
  }, [q]);

  // پۆلێنکردن بەپێی یەکەم پیت
  const grouped = useMemo(() => {
    const m = new Map<string, typeof TOPIC_INDEX>();
    filtered.forEach((e) => {
      const k = firstLetter(e.topic);
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(e);
    });
    return Array.from(m.entries()).sort(([a], [b]) => a.localeCompare(b, "ar"));
  }, [filtered]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        kicker="پێرستى گشتى"
        title="پێڕستی گشتیی بابەتەکانی ناو کتێبەکانی پەیامەکانی نوور"
        sub="ئاسانكارى دەكات بۆ خوێنەر كە لە چ شوێنێكى پەيامەكانى نووردا ئەو بابەتە هەيە كە بەشوێنيدا دەگەڕێ. کلیک لەسەر هەر کتێبێک بکە بۆ خوێندنەوەی ڕاستەوخۆ."
      />

      {/* گەڕان */}
      <div className="relative mx-auto mb-10 max-w-xl">
        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-beige/40" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="بگەڕێ بەدوای بابەت، یان بەشێکی کتێب..."
          className="w-full rounded-full border border-gold/20 bg-charcoal/60 py-3.5 pr-12 pl-5 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none"
        />
      </div>

      <p className="mb-8 text-center text-sm text-beige/50">
        {filtered.length} بابەت دۆزرایەوە لە {filtered.reduce((s, e) => s + e.refs.length, 0)} سەرچاوەی پەیوەندیدار
      </p>

      <div className="space-y-10">
        {grouped.map(([letter, entries]) => (
          <section key={letter}>
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft font-display text-2xl font-bold text-ink shadow-lg">
                {letter}
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold/40 via-gold/15 to-transparent" />
              <span className="text-xs text-beige/40">{entries.length} بابەت</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {entries.map((e) => (
                <article
                  key={e.topic}
                  className="group rounded-2xl border border-gold/15 bg-charcoal/50 paper-texture p-5 transition-all hover:border-gold/40"
                >
                  <h3 className="mb-3 flex items-center gap-2 font-display text-lg text-cream">
                    <span className="text-gold">◈</span> {e.topic}
                  </h3>
                  <ul className="space-y-2">
                    {e.refs.map((r, i) => {
                      const v = findVolume(r.book);
                      return (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 text-gold/60">↩</span>
                          <div className="flex-1">
                            {v ? (
                              <a
                                href={openUrl(v.fileId)}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-olive-deep/30 px-2 py-0.5 text-olive-soft transition hover:bg-olive-deep/60 hover:text-cream"
                                style={{ color: "#d9bd78" }}
                              >
                                <Book className="h-3 w-3" />
                                {r.book}
                              </a>
                            ) : (
                              <span className="text-gold/70">{r.book}</span>
                            )}
                            <span className="mr-1 text-beige/65"> : {r.section}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-beige/50">
          <p className="text-4xl">✦</p>
          <p className="mt-4">هیچ بابەتێک نەدۆزرایەوە، وشەیەکی تر تاقیبکەرەوە.</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2 text-sm text-gold transition hover:bg-gold/10"
        >
          <Arrow className="h-4 w-4 -rotate-90" /> سەرەوە
        </a>
      </div>
    </div>
  );
}
