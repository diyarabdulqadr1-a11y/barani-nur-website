import { useState } from "react";
import { useApp } from "../hooks/useApp";
import { TOPICS, ARTICLES, MEDIA } from "../data/content";
import { SectionTitle, Card, Divider } from "../components/ui";
import Logo from "../components/Logo";
import { Arrow, Bell, Clock, Play, Book } from "../components/icons";
import { IKHLAS } from "../data/special";
import EditableImage from "../components/EditableImage";
import PrayerCard from "../components/PrayerCard";
import { useI18n } from "../i18n";

const IKHLAS_SECTIONS = [
  {
    title: "یەکەم: باسێکی کورتی پەیامی ئیخلاص",
    paragraphs: [
      "ئەم پەیامە نەخشەڕێگایەکی مەعنەوییە کە فێرمان دەکات چۆن کارەکانمان تەنها و تەنها بۆ ڕەزامەندی خوای گەورە بێت.",
      "لە پەیامەکەدا مامۆستا باسی ئەوە دەکات کە ئیخلاس (دڵسۆزی و پاکی نیەت بۆ خوا):",
    ],
    bullets: [
      "بەهێزترین هێزە.",
      "بەرزترین پەناگەیە.",
      "کورتترین ڕێگایە بەرەو حەقیقەت.",
      "گیراوترین نزای مەعنەوییە.",
    ],
    afterBullets:
      "هەروەها پەیامەکە کۆمەڵێک «دەستوور» (یاسا) و «ڕێگر» (بەربەست) دیاری دەکات. فێرمان دەکات کە پێویست ناکات بەدوای ناوبانگ، پێشوازی خەڵک، یان پیاهەڵدانیاندا بگەڕێین، چونکە ئەگەر خودا لێمان ڕازی بێت، تەنانەت ئەگەر هەموو دنیاش پشتمان تێبکات، هیچ زیانێکمان پێ ناگات.",
  },
  {
    title: "دووەم: بۆچی ئەوەندە گرنگە؟",
    paragraphs: ["گرنگی ئەم پەیامە لەوەدایە کە باس لە «ڕۆح»ـی کردەوەکان دەکات."],
    numbered: [
      {
        head: "بێ ئیخلاس کردەوەکان مردوون",
        body: "وەک چۆن جەستەیەک بێ ڕۆح تەنها گۆشت و ئێسقانێکی بۆگەنە، گەورەترین کاری خێر، نوێژ، یان خزمەتی ئایینیش ئەگەر «ئیخلاس»ـی تێدا نەبێت و بۆ ڕیاکاری و ناو دەرکردن بێت، لای خودا هیچ بەهایەکی نییە و پووچەڵە.",
      },
      {
        head: "نهێنی سەرکەوتنی برایەتییە",
        body: "لە کاری بەکۆمەڵ و بانگەوازدا، زۆرجار کێبڕکێ، حەسودی، و حەزی خۆدەرخستن دروست دەبێت. ئەم پەیامە چەمکی «فەنابوون لەناو برایاندا» (تفاني في الإخوان) دەهێنێتە ئاراوە؛ واتە مرۆڤ واز لە «من»ـی خۆی بهێنێت و شانازی بە سەرکەوتنی براکەیەوە بکات وەک ئەوەی سەرکەوتنی خۆی بێت.",
      },
      {
        head: "پاراستن لە فێڵەکانی نەفس",
        body: "نەفسی مرۆڤ حەز بە پیاهەڵدان و پۆست و پلە دەکات. ئەم پەیامە ئەو بتە ناوەکییانە دەشکێنێت.",
      },
    ],
  },
  {
    title: "سێیەم: بۆچی مامۆستا جەختی کردووەتەوە کە «بەلای کەمەوە پازدە ڕۆژ جارێک بخوێنرێتەوە»؟",
    paragraphs: [
      "لە سەرەتای پەیامەکەدا مامۆستا نوورسی بە ڕوونی دەنووسێت: (بە لای کەمەوە پازدە ڕۆژ جارێک ئەم «بریسکەیە» بخوێنرێتەوە). هۆکارە شاراوە و مەعنەوییەکانی ئەم ئامۆژگارییە ئەمانەن:",
    ],
    numbered: [
      {
        head: "مرۆڤ لەبیرکەرە (النسيان)",
        body: "مرۆڤ زوو ئامانجە سەرەکییەکەی لەبیر دەچێتەوە. لەوانەیە کارێک بە نیەتێکی پاک بۆ خودا دەست پێبکەیت، بەڵام دوای مانگێک، کە بینیت خەڵک ستایشت دەکەن، وردە وردە نیەتەکە دەگۆڕێت بۆ حەزی خۆدەرخستن. خوێندنەوەی ئەم پەیامە هەموو ١٥ ڕۆژ جارێک، وەک «زەنگی ئاگادارکردنەوە» وایە بۆ نوێکردنەوەی نیەت.",
      },
      {
        head: "نەفس و شەیتان هەرگیز نانوون",
        body: "شەیتان و نەفسی ئەممارە بەردەوام هێرش دەهێننە سەر «ئیخلاس»ـی مرۆڤ. ئەوان ناتوانن باوەڕدارێک لە نوێژ بکەن، بەڵام دەتوانن وای لێبکەن نوێژەکەی بۆ ڕیاکاری بێت! خوێندنەوەی ئەم پەیامە وەک «ڤاکسین» وایە کە بەرگری ڕۆح دژی ڤایرۆسی ڕیاکاری و خۆبەزلزانی بەهێز دەکات.",
      },
      {
        head: "نەخۆشییە شاراوەکانی دڵ (الشرك الخفي)",
        body: "خۆشەویستی ناوبانگ، حەزی باڵادەستی بەسەر هاوڕێکاندا، و چاوەڕوانیی پاداشتی دنیایی لەسەر کاری ئایینی، نەخۆشی زۆر شاراوەن کە وەک مێروولەی ڕەش لەسەر بەردی ڕەش لە شەوی تاریکدا وان. ئەگەر مرۆڤ زوو زوو خۆی پشکنین (محاسبة) نەکات، تووشی دەبێت. ئەم پەیامە ئاوێنەیەکە، هەر ١٥ ڕۆژ جارێک سەیری خۆتی تێدا دەکەیت بزانیت نەخۆش نەکەوتوویت.",
      },
      {
        head: "پاراستنی ڕێکخستن و خزمەت",
        body: "مامۆستا دەیزانی ئەگەر ئیخلاس لە نێوان قوتابییەکانیدا نەمێنێت، شیرازەی خزمەتەکەیان هەڵدەوەشێتەوە و دەکەونە دژایەتی یەکتر. بۆیە ئەمەی کردە یاسایەکی حەتمی تا هەمیشە وەک یەک جەستەی پەیوەست بەیەکەوە بمێننەوە.",
      },
    ],
  },
];

const IKHLAS_SUMMARY =
  "بە کورتی: پەیامی ئیخلاس تەنها بۆ زانیاری و تێگەیشتن نییە، بەڵکوو «دەرمانی ڕۆحە». وەک چۆن مرۆڤ ناتوانێت بڵێت «من جارێک نانم خواردووە و ئیتر پێویستم پێی نییە»، ڕۆحیش بەردەوام پێویستی بەم دەرمانەیە بۆ ئەوەی زیندوو، پاک، و ڕاستگۆ بمێنێتەوە لەگەڵ پەروەردگاریدا.";

export default function Home({ onRead }: { onRead: (id: number) => void }) {
  const { navigate } = useApp();
  const { t } = useI18n();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <EditableImage imageKey="hero" alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink pointer-events-none" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:py-28">
          <p className="font-quran mb-8 text-2xl text-gold-soft sm:text-3xl animate-fadeup">
            {t("heroBismillah")}
          </p>
          <div className="animate-glow"><Logo size={150} /></div>
          <h1 className="mt-6 font-display text-5xl font-bold text-cream sm:text-7xl animate-fadeup">{t("brand")}</h1>
          <p className="mt-5 max-w-2xl text-beige/85 fs-lg leading-loose animate-fadeup">
            {t("heroSubtitle")}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => navigate("daily")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-8 py-4 text-sm font-semibold text-ink shadow-lg transition hover:brightness-110 active:scale-95">
              {t("heroPrimary")} <Arrow className="h-4 w-4" />
            </button>
            <button onClick={() => navigate("topics")}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-sm text-cream backdrop-blur-sm transition hover:bg-gold/10 active:scale-95">
              {t("heroSecondary")}
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {/* FEATURED INSPIRATION */}
        <section className="-mt-12 mb-20">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-charcoal via-ink to-navy geo-pattern p-8 shadow-2xl sm:p-12">
            <div className="absolute inset-0 light-arch opacity-40" aria-hidden />
            <div className="relative text-center">
              <div className="mb-6 flex items-center justify-center gap-2 text-gold">
                <span>✦</span>
                <span className="font-display text-lg tracking-widest">پەیامەکانی نوور</span>
                <span>✦</span>
              </div>
              
              <div className="mx-auto max-w-3xl space-y-6">
                <p className="font-display text-2xl leading-loose text-cream sm:text-3xl">
                  «هەر کەسێک هەیت ببە.. بەڵام چاو بکەرەوە و بڕوانە و ڕاستى ببینە و ئیمانەکەت ڕزگار بکە، کە کلیلى "بەختەوەریى هەمیشەیى"یە!»
                </p>
                
                <p className="text-beige/80 leading-loose fs-base text-right sm:text-center">
                  پەیامەکانى نوور لە پێشدا هەوڵى ئەوە دەدەن قەناعەت بە دەروونى دانەرەکەیان ببەخشن، ئنجا لەگەڵ کەسانى تردا دەدوێن. لەبەر ئەوە، ئەو وانەیەى کە بە تەواوى قەناعەتى بە دەروونى بەدخوازى دانەریان بەخشى و توانیى وەسوەسەکانى بە یەکجارى نەهێڵێت، بێ هیچ گومانێک وانەیەکى هێندە بەهێز و بێگەردە کە بە تەنها خۆى دەتوانێت ببێت بە بەربەست لە ڕووى تەوژمى گومڕایى سەردەمدا، کە بەهۆى پێکهاتە و ڕێکخراوە بەکۆمەڵەکانیەوە شێوەى "کەسێتى‏‌یەکى مەعنەوى"ى وەرگرتووە، تەنانەت ئەم پەیامەکانە دەتوانن بەرەنگارى ئەم گومڕاییە ببنەوە و بە سەریشیدا سەربکەون.
                </p>

                <div className="pt-4">
                  <p className="text-gold font-display text-xl">م. سەعیدی نوورسی</p>
                  <p className="text-xs text-gold/60 tracking-wide mt-1">کتێبی پاشبەندەكان _ ١٣٩</p>
                </div>

                <div className="mt-10">
                  <button 
                    onClick={() => navigate("daily")}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-8 py-4 text-sm font-semibold text-ink shadow-lg transition hover:brightness-110 active:scale-95"
                  >
                    پەیامی ئەمڕۆی نوور بخوێنەوە <Arrow className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PEYAMI IKHLAS — کارتێکی شکۆدار لەگەڵ ڕوونکردنەوەی فراوان */}
        <section className="mb-20">
          <IkhlasCard />
        </section>

        {/* TOPICS */}
        <section className="mb-20">
          <SectionTitle kicker={t("topicsKicker")} title={t("topicsTitle")} sub={t("topicsSub")} />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TOPICS.slice(0, 8).map((t) => (
              <button key={t.key} onClick={() => navigate("topics")}
                className="group flex flex-col items-center rounded-2xl border border-gold/15 bg-charcoal/50 paper-texture p-5 text-center transition-all hover:border-gold/40 hover:-translate-y-1">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                  style={{ background: `${t.accent}22`, color: t.accent }}>{t.icon}</span>
                <span className="font-display text-lg text-cream">{t.title}</span>
                <span className="mt-1 text-xs text-beige/50">{t.desc}</span>
                <span className="mt-2 text-[11px] text-gold/60">{t.count} پەیام</span>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button onClick={() => navigate("topics")} className="text-sm text-gold hover:underline">هەموو بابەتەکان ببینە ←</button>
          </div>
        </section>

        <Divider />

        {/* LATEST ARTICLES */}
        <section className="mb-20">
          <SectionTitle kicker={t("latestKicker")} title={t("latestTitle")} />
          <div className="grid gap-6 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <Card key={a.id} className="flex flex-col p-6">
                <span className="mb-3 w-fit rounded-full bg-olive/15 px-3 py-1 text-xs text-olive">
                  {TOPICS.find((t) => t.key === a.topic)?.title}
                </span>
                <h3 className="font-display text-xl text-cream">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-beige/60 leading-relaxed">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-gold/10 pt-4 text-xs text-beige/50">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.readTime} خولەک خوێندنەوە</span>
                  <button onClick={() => navigate("articles")} className="text-gold hover:underline">بخوێنەوە ←</button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* MEDIA */}
        <section className="mb-20">
          <SectionTitle kicker={t("mediaKicker")} title={t("mediaTitle")} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA.slice(0, 3).map((m) => (
              <button key={m.id} onClick={() => navigate("media")}
                className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-br from-navy via-charcoal to-ink p-5 text-right transition-all hover:border-gold/40">
                <div className="absolute inset-0 geo-pattern opacity-40" />
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold backdrop-blur-sm">
                  {m.type === "audio" ? "♫" : m.type === "video" ? <Play className="h-5 w-5" /> : "🖼"}
                </span>
                <div className="relative">
                  <span className="text-xs text-gold/70">{m.type === "audio" ? "دەنگ" : m.type === "video" ? "ڤیدیۆ" : "پۆستەر"} {m.duration && `· ${m.duration}`}</span>
                  <h3 className="font-display text-lg text-cream">{m.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="mb-12">
          <div className="overflow-hidden rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/40 via-charcoal to-ink p-8 text-center geo-pattern sm:p-12">
            <Bell className="mx-auto h-10 w-10 text-gold" />
            <h3 className="mt-4 font-display text-2xl text-cream sm:text-3xl">{t("newsletterTitle")}</h3>
            <p className="mx-auto mt-3 max-w-lg text-beige/70 leading-relaxed">
              {t("newsletterText")}
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("سوپاس! تۆ بەشداربوویت لە ئاگادارکردنەوەی ڕۆژانە."); }}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder={t("emailPlaceholder")}
                className="flex-1 rounded-full border border-gold/25 bg-ink/60 px-5 py-3 text-sm text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none" />
              <button type="submit" className="rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink active:scale-95">{t("subscribe")}</button>
            </form>
          </div>
        </section>

        <section className="mb-12">
          <PrayerCard />
        </section>
      </div>
    </div>
  );
}

/* -------------------- کارتی پەیامی ئیخلاص -------------------- */
function IkhlasCard() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  return (
    <article className="relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-olive-deep/40 via-charcoal to-ink shadow-2xl shadow-black/40">
      <div className="absolute inset-0 geo-pattern opacity-25" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold/0 via-gold to-gold/0" aria-hidden />

      {/* HEADER */}
      <div className="relative px-6 pt-12 pb-8 text-center sm:px-12 sm:pt-16">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ink/60 text-3xl text-gold backdrop-blur-sm">
          ✦
        </div>
        <h2 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">{t("ikhlasTitle")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gold/90 leading-loose sm:text-lg">
          {t("ikhlasLine")}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://drive.google.com/file/d/${IKHLAS.fileId}/view`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink shadow-lg transition hover:brightness-110 active:scale-95"
          >
            <Book className="h-4 w-4" /> {t("ikhlasRead")}
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm text-cream transition hover:bg-gold/10 active:scale-95"
          >
            {open ? t("ikhlasHide") : t("ikhlasExplain")}
            <Arrow className={`h-4 w-4 transition-transform ${open ? "rotate-90" : "-rotate-90"}`} />
          </button>
        </div>
      </div>

      {/* EXPANDED CONTENT */}
      {open && (
        <div className="relative animate-fadeup border-t border-gold/20 bg-ink/40 px-6 py-10 sm:px-12 sm:py-14">
          <div className="mx-auto max-w-3xl space-y-12">
            {IKHLAS_SECTIONS.map((sec, i) => (
              <section key={i}>
                {/* Section title */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-sm font-bold text-ink shadow-md">
                    {["١", "٢", "٣"][i]}
                  </span>
                  <h3 className="font-display text-xl font-bold text-cream sm:text-2xl">{sec.title}</h3>
                </div>

                {/* Paragraphs */}
                {sec.paragraphs?.map((p, k) => (
                  <p key={k} className="mb-3 text-beige/85 leading-loose">
                    {p}
                  </p>
                ))}

                {/* Bullet list */}
                {sec.bullets && (
                  <ul className="my-5 space-y-2 rounded-2xl border border-gold/15 bg-charcoal/40 p-5">
                    {sec.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-cream">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.afterBullets && <p className="mt-4 text-beige/85 leading-loose">{sec.afterBullets}</p>}

                {/* Numbered detailed list */}
                {sec.numbered && (
                  <div className="mt-5 space-y-4">
                    {sec.numbered.map((n, k) => (
                      <div key={k} className="rounded-2xl border border-gold/15 bg-charcoal/50 p-5 transition hover:border-gold/30">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-olive/25 text-xs font-bold text-gold">
                            {["١", "٢", "٣", "٤"][k]}
                          </span>
                          <h4 className="font-display text-lg font-bold text-gold-soft">{n.head}</h4>
                        </div>
                        <p className="text-beige/80 leading-loose">{n.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Final summary */}
            <div className="rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-olive-deep/30 to-charcoal p-6 sm:p-8">
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
                <span className="font-display text-sm font-bold tracking-widest text-gold">پوختە</span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
              </div>
              <p className="text-center text-cream leading-loose">{IKHLAS_SUMMARY}</p>
            </div>

            {/* CTA at end */}
            <div className="text-center">
              <a
                href={`https://drive.google.com/file/d/${IKHLAS.fileId}/view`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-8 py-4 text-sm font-semibold text-ink shadow-lg transition hover:brightness-110 active:scale-95"
              >
                <Book className="h-4 w-4" /> ئێستا پەیامی ئیخلاص بخوێنەوە
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
