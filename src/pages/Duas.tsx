import { useState } from "react";
import { DUAS, DUA_FOLDER, type Dua } from "../data/special";
import { previewUrl, openUrl } from "../data/books";
import { SectionTitle } from "../components/ui";
import { Arrow, Download, Book } from "../components/icons";

export default function Duas() {
  const [active, setActive] = useState<Dua | null>(null);

  if (active) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <button onClick={() => setActive(null)} className="inline-flex items-center gap-2 text-sm text-gold hover:underline">
            <Arrow className="h-4 w-4 rotate-180" /> گەڕانەوە بۆ بەشى دوعا
          </button>
          <a href={openUrl(active.fileId)} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-4 py-2 text-sm text-cream hover:bg-gold/10">
            <Download className="h-4 w-4" /> کردنەوە / دابەزاندن
          </a>
        </div>
        <div className="mb-4 text-center">
          <p className="font-quran text-xl text-gold-soft">بسم اللە الرحمن الرحیم</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-cream">{active.title}</h1>
          <p className="mt-1 text-sm text-gold/70">{active.subtitle}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-gold/25 bg-charcoal shadow-2xl">
          <iframe src={previewUrl(active.fileId)} title={active.title} className="h-[78vh] w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        kicker="دوعا و تەسبیحات"
        title="بەشى دوعا"
        sub="کۆکراوەی تەسبیحات و دوعا پیرۆزەکان — بۆ پەیوەندیی هەمیشەیی لەگەڵ خواى گەورە."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {DUAS.map((d) => (
          <button
            key={d.id}
            onClick={() => setActive(d)}
            className="group flex flex-col overflow-hidden rounded-3xl border-2 border-gold/20 bg-gradient-to-br from-olive-deep/30 via-charcoal to-ink p-8 text-right transition-all hover:border-gold/50 hover:-translate-y-1"
          >
            <div className="absolute inset-0 geo-pattern opacity-20" />
            <div className="relative flex items-start gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-3xl text-gold">☾</span>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-cream">{d.title}</h3>
                <p className="mt-1 text-sm text-gold/70">{d.subtitle}</p>
              </div>
            </div>
            <p className="relative mt-5 text-sm text-beige/70 leading-loose">{d.desc}</p>
            <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-5 py-2 text-xs font-semibold text-ink transition group-hover:brightness-110">
              <Book className="h-3.5 w-3.5" /> کردنەوە و خوێندنەوە
            </span>
          </button>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-beige/50">
        هەموو فایلەکان لە کتێبخانەی فەرمیی{" "}
        <a href={DUA_FOLDER} target="_blank" rel="noreferrer" className="text-gold hover:underline">
          بارانی نوور لە گووگڵ درایڤ
        </a>
        ـەوە دێن.
      </p>
    </div>
  );
}
