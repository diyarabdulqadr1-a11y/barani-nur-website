import { useState } from "react";
import {
  NURSI_INFO,
  NURSI_INTRO,
  PHASES,
  TIMELINE,
  TRAITS,
  FAMOUS_QUOTES,
  LANGUAGES,
  IMPACT_STATS,
} from "../data/nursi";
import { SectionTitle, Divider } from "../components/ui";
import { useApp } from "../hooks/useApp";
import { Book } from "../components/icons";
import EditableImage from "../components/EditableImage";

export default function Nursi() {
  const { navigate } = useApp();
  const [phase, setPhase] = useState(PHASES[0].key);
  const active = PHASES.find((p) => p.key === phase)!;

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/15">
        <div className="absolute inset-0">
          <EditableImage imageKey="nursiHero" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink pointer-events-none" />
          <div className="absolute inset-0 geo-pattern opacity-20 pointer-events-none" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
          <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">
            {/* Portrait */}
            <div className="mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/30 to-olive-deep/30 blur-2xl" />
                <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-gold/40 shadow-2xl shadow-black/50">
                  <EditableImage imageKey="nursi" alt="م. سەعیدی نوورسی" className="h-full w-full object-cover" style={{ width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center md:text-right">
              <p className="text-xs tracking-[0.3em] text-gold/70">دەربارەی مامۆستا</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
                م. سەعیدی نوورسی
              </h1>
              <p className="mt-2 font-display text-xl text-gold-soft">{NURSI_INFO.alias}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-2">
                <InfoChip label="لەدایکبوون" value={NURSI_INFO.born} />
                <InfoChip label="کۆچی دوایی" value={NURSI_INFO.died} />
                <InfoChip label="شوێنی لەدایکبوون" value={NURSI_INFO.birthplace} />
                <InfoChip label="شوێنی وەفات" value={NURSI_INFO.deathplace} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-5 rounded-3xl border border-gold/15 bg-charcoal/40 paper-texture p-8 sm:p-12">
          {NURSI_INTRO.map((p, i) => (
            <p key={i} className={`leading-loose ${i === 0 ? "text-cream fs-lg" : "text-beige/80"}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {IMPACT_STATS.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gold/20 bg-gradient-to-br from-olive-deep/20 to-charcoal/60 p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs text-beige/70 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* PHASES */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          kicker="سێ قۆناغی ژیان"
          title="ژیانی م. سەعیدی نوورسی"
          sub="ژیانی نوورسی بە سێ قۆناغدا تێپەڕیوە — هەر قۆناغێک شکۆ و وانەی تایبەتی خۆی هەیە"
        />

        {/* Phase tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {PHASES.map((p) => (
            <button
              key={p.key}
              onClick={() => setPhase(p.key)}
              className={`rounded-full border px-6 py-2.5 text-sm transition-all ${
                phase === p.key
                  ? "border-gold bg-gold/20 text-gold shadow-lg shadow-gold/10"
                  : "border-gold/20 text-beige/70 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active phase content */}
        <div className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/20 via-charcoal to-ink p-8 sm:p-12 geo-pattern animate-fadeup">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-3xl font-bold text-cream sm:text-4xl">{active.title}</h3>
            <span className="rounded-full border border-gold/30 bg-ink/60 px-4 py-1.5 text-sm text-gold">
              {active.period}
            </span>
          </div>
          <p className="mb-6 text-beige/85 leading-loose fs-lg">{active.desc}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {active.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-gold/15 bg-ink/40 p-4">
                <span className="mt-1 text-gold">◈</span>
                <span className="text-cream leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* TIMELINE */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <SectionTitle
          kicker="هێڵی کات"
          title="ڕووداوە سەرەکییەکانی ژیان"
          sub="گەشتێک لە نێو بەکارهێنانی کات لە ١٨٧٨ تا ١٩٦٠"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent sm:right-1/2" />

          <div className="space-y-6">
            {TIMELINE.map((t, i) => (
              <div
                key={i}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Year bubble */}
                <div className="relative z-10 sm:w-1/2 sm:px-8">
                  <div
                    className={`flex ${i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"} justify-start`}
                  >
                    <span className="inline-flex h-12 min-w-16 items-center justify-center rounded-full border-2 border-gold/40 bg-gradient-to-br from-gold to-gold-soft px-4 font-display text-sm font-bold text-ink shadow-lg">
                      {t.year}
                    </span>
                  </div>
                </div>

                {/* Dot on the line */}
                <div className="absolute right-6 top-5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-md sm:right-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-1/2" />

                {/* Card */}
                <div className="mr-16 sm:mr-0 sm:w-1/2 sm:px-8">
                  <div className="rounded-2xl border border-gold/15 bg-charcoal/50 p-5 paper-texture transition hover:border-gold/40">
                    <h4 className="font-display text-lg font-bold text-cream">{t.title}</h4>
                    <p className="mt-1 text-sm text-beige/70 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* TRAITS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle kicker="تایبەتمەندییەکان" title="بیر و توانای ناوازە" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAITS.map((t, i) => (
            <div key={i} className="group rounded-2xl border border-gold/15 bg-charcoal/50 paper-texture p-6 transition-all hover:border-gold/40 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-2xl text-gold">
                {t.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-cream">{t.title}</h3>
              <p className="mt-2 text-sm text-beige/70 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* FAMOUS QUOTES */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <SectionTitle kicker="وتە بەناوبانگەکان" title="چەند وتەیەکی ناودار لە مامۆستا" />
        <div className="space-y-5">
          {FAMOUS_QUOTES.map((q, i) => (
            <blockquote
              key={i}
              className="relative rounded-3xl border-r-4 border-gold bg-charcoal/50 p-7 paper-texture"
            >
              <span className="absolute right-4 top-2 font-display text-5xl text-gold/40">»</span>
              <p className="font-display text-xl text-cream leading-loose sm:text-2xl">«{q.text}»</p>
              <p className="mt-3 text-xs text-gold/70">— {q.note}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <Divider />

      {/* WORKS & TRANSLATIONS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          kicker="کاریگەری جیهانی"
          title="پەیامەکانی نوور لە ڕووی جیهان"
          sub="پەیامەکانی نوور بۆ زیاتر لە ١٨ زمان وەرگێڕدراون و لە چەندان زانکۆی جیهاندا بە دەرس دەخوێنرێن."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Languages */}
          <div className="rounded-3xl border border-gold/20 bg-charcoal/50 p-7 paper-texture">
            <h3 className="mb-4 font-display text-xl font-bold text-cream">زمانە وەرگێڕدراوەکان</h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-gold/20 bg-ink/40 px-3 py-1 text-xs text-beige/80"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Universities */}
          <div className="rounded-3xl border border-gold/20 bg-charcoal/50 p-7 paper-texture">
            <h3 className="mb-4 font-display text-xl font-bold text-cream">لە زانکۆ جیهانییەکاندا</h3>
            <ul className="space-y-3">
              {[
                "زانکۆی ئەزهەری میسر — بەشی دکتۆرای تەفسیر",
                "زانکۆی محمد الخامس لە مەغریب",
                "زانکۆی ئیسلامی جیهانی لە مالیزیا",
                "زانکۆکانی فەڕەنسا، ئەڵمانیا و ئەستەمبوڵ",
              ].map((u, i) => (
                <li key={i} className="flex items-start gap-2 text-beige/80 leading-relaxed">
                  <span className="mt-1 text-gold">✦</span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-olive-deep/40 via-charcoal to-ink p-10 text-center geo-pattern">
          <h3 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            کتێبەکانی پەیامەکانی نوور بخوێنەوە
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-beige/75 leading-loose">
            بەشدار بە لە گەشتێکی مەعنەوی بەناو وتە و پەیامەکانی مامۆستاوە — تەنها دەقی ڕاستەقینەی نوورسی.
          </p>
          <button
            onClick={() => navigate("books")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110 active:scale-95"
          >
            <Book className="h-4 w-4" /> چوونە کتێبخانە
          </button>
        </div>
      </section>

      {/* Source */}
      <p className="pb-8 text-center text-xs text-beige/40">سەرچاوە: ویکیپیدیای کوردی · کۆکراوەی پەیامەکانی نوور · نووسینی حبیب محمد سعید</p>
    </div>
  );
}

function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gold/15 bg-charcoal/50 px-3 py-2.5">
      <p className="text-[10px] tracking-widest text-gold/70">{label}</p>
      <p className="mt-1 text-sm text-cream">{value}</p>
    </div>
  );
}
