import { useState } from "react";
import { Divider } from "../components/ui";
import { Arrow, Search, Heart, Share, Book } from "../components/icons";
import { useApp } from "../hooks/useApp";

type GuideSection = {
  id: number;
  title: string;
  english?: string;
  body: string[];
  usage?: string[];
  benefit: string;
  page?: string;
};

const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: 1,
    title: "سەرەتا",
    page: "home",
    body: [
      "بەشی سەرەتا دەرگای سەرەکی پلاتفۆڕمەکەیە. لێرەدا خوێنەر بە شێوەیەکی گشتی تێدەگات کە بارانی نوور چییە، بۆچی دروستکراوە، و چۆن دەتوانێت لە ناوەڕۆکەکانی سوود وەربگرێت.",
      "لە سەرەتا دەتوانیت بە خێرایی بگەیتە پەیامی ئەمڕۆ، بابەتە گرنگەکان، کتێبەکان، میدیا، ڕێنمایی و بەشەکانی تری پلاتفۆڕمەکە.",
    ],
    benefit: "خوێنەر بە یەک نگاه تێدەگات لە کوێ دەستپێبکات و چ پەیامێکی نوور بۆ ئەمڕۆی هەیە.",
  },
  {
    id: 2,
    title: "پەیامی ئەمڕۆی نوور",
    page: "daily",
    body: [
      "بەشی پەیامی ئەمڕۆی نوور یەکێکە لە گرنگترین بەشەکانی پلاتفۆڕمەکە. لێرەدا هەموو ڕۆژ پەیامێکی هەڵبژێردراو لە پەیامەکانی نوور پیشان دەدرێت.",
      "ئەم پەیامانە نابێت دەقی دروستکراوی لەخۆوە بن؛ بەڵکو پێویستە دەقی ڕاستەقینەی ناو کتێبەکانی پەیامەکانی نوور بن، لەگەڵ سەرچاوەی ڕوون، وەک ناوی کتێب، بەرگ، بابەت یان لاپەڕە.",
    ],
    usage: [
      "هەموو ڕۆژ سەردانی ئەم بەشە بکە، پەیامی ڕۆژانە بخوێنەوە، لەسەری بوەستە، بیر لە واتاکەی بکەوە.",
      "ئەگەر کاریگەریی لەسەرت کرد، بیپارێزە یان هاوبەشی بکە.",
    ],
    benefit: "پەیامێکی کورت، بەڵام قووڵ، دەتوانێت دڵ ئارام بکاتەوە، بیر ڕوون بکاتەوە، و مرۆڤ بگەڕێنێتەوە بۆ ناوەڕۆکی ئیمان.",
  },
  {
    id: 3,
    title: "خوێندنەوەی ڕۆژانە",
    page: "daily",
    body: [
      "بەشی خوێندنەوەی ڕۆژانە بۆ ئەوەیە کە بەکارهێنەر بتوانێت خوێندنەوەی خۆی تۆمار بکات و بەردەوامییەکەی بپارێزێت.",
      "لەم بەشەدا دەتوانیت بنووسیت ئەمڕۆ چەند لاپەڕەت خوێندووەتەوە، ناوی کتێبەکە دیاری بکەیت، و تۆمارەکەت بە بەروار و کاتەوە بپارێزیت.",
    ],
    usage: [
      "داخل ببە بە هەژمارەکەت و ئامانجی ڕۆژانەت دیاری بکە (١٠، ١٥ یان ٢٠ لاپەڕە).",
      "هەموو ڕۆژ ژمارەی لاپەڕە خوێندراوەکانت بنووسە و تۆمارکردن بکە.",
      "پێشکەوتن و ئاستەکەت ببینە (پێش ئاستی پاراستن، پاراستنی ئیمان، جۆش و خرۆش، خزمەت).",
    ],
    benefit: "خوێندنەوەی ڕۆژانە تەنها زیادکردنی ژمارەی لاپەڕەکان نییە؛ بەڵکو ڕێگایەکە بۆ بەردەوامبوون، پاراستنی دڵ و نوێکردنەوەی ئیمان.",
  },
  {
    id: 4,
    title: "هەژماری من",
    page: "favorites",
    body: [
      "بەشی هەژماری من شوێنی تایبەتی بەکارهێنەرە. ئەگەر خۆت تۆمار بکەیت و داخل ببیت، هەموو پێشکەوتن و تۆمارەکانت لەم بەشەدا دەپارێزرێن.",
      "لێرەدا دەتوانیت زانیاریی هەژمار، تۆماری خوێندنەوە، ئاستی خوێندنەوە، پەیامە پاشەکەوتکراوەکان و ڕۆژانی بەردەوامبوونت ببینیت.",
    ],
    usage: [
      "هەژمارێک دروست بکە و داخل ببە بۆ پاراستنی پەیامەکان و خوێندنەوەکانت.",
      "هەموو جارێک دەگەڕێیتەوە، پێشکەوتنی خۆت لەم بەشەدا ببینەوە.",
    ],
    benefit: "بارانی نوور لە پلاتفۆڕمێکی گشتییەوە دەبێتە هاوڕێیەکی تایبەتی بۆ خوێندنەوە و بەردەوامیی تۆ.",
  },
  {
    id: 5,
    title: "کتێبەکان",
    page: "books",
    body: [
      "بەشی کتێبەکان تایبەتە بە ناساندن و ڕێکخستنی کتێب و بەرگەکانی پەیامەکانی نوور. لێرەدا خوێنەر دەتوانێت بە شێوەیەکی ڕێکخراو نزیک ببێتەوە لە سەرچاوەکانی مامۆستا نوورسی.",
      "هەر کتێب یان بەرگ دەتوانێت ناساندنێکی کورت، بابەتەکانی ناوی، و پەیامە هەڵبژێردراوەکانی خۆی هەبێت.",
    ],
    usage: [
      "ئەگەر دەتەوێت پەیامەکان لە ڕیشە و سەرچاوەوە بناسیت، لەم بەشە دەستپێبکە.",
      "کتێبەکان ببینە، ناوەڕۆکیان بناسە، و پەیامە پەیوەندیدارەکان بخوێنەوە.",
    ],
    benefit: "خوێنەر تەنها وتەیەک نابینێت؛ بەڵکو دەزانێت ئەو پەیامە لە چ سەرچاوەیەکەوە هاتووە.",
  },
  {
    id: 6,
    title: "بابەتەکان",
    page: "topics",
    body: [
      "بەشی بابەتەکان پەیامەکانی نوور بە پێی پێویستی دڵ و ژیانی مرۆڤ ڕێکدەخات. وەک: ئیمان، قورئان، نوێژ، هیوا، سەبر، تۆبە، مەرگ، ئەخلاق و لاوان.",
    ],
    usage: [
      "ئەگەر پێویستیت بە هیوا هەیە یان گومان لە دڵتدا هەیە، بەشەکانی هیوا و ئیمان بکەرەوە.",
      "ئەگەر دەتەوێت دڵت ئارام ببێت، بابەتەکانی سەبر، نوێژ و قورئان ببینە.",
    ],
    benefit: "خوێنەر لە ناو زۆری ناوەڕۆکدا ون نابێت؛ بەڵکو بە پێی پێویستی خۆی دەگاتە پەیامی گونجاو.",
  },

  {
    id: 9,
    title: "پاشەکەوت و دڵخوازەکان",
    page: "favorites",
    body: [
      "بەشی پاشەکەوت و دڵخوازەکان بۆ ئەو پەیامانەیە کە دەتەوێت جارێکی تر بگەڕێیتەوە بۆیان.",
      "هەندێک پەیام جارێک ناخوێندرێتەوە و تەواو نابێت؛ دەبێت بپارێزرێت تا لە کاتێکی تر دووبارە بخوێندرێتەوە.",
    ],
    usage: [
      "کاتێک پەیامێک لە دڵت دادەگیرسێت، دوگمەی پاشەکەوت یان دڵخواز بکە.",
      "دواتر لە هەژماری خۆتدا دەتوانیت بگەڕێیتەوە بۆی.",
    ],
    benefit: "خوێنەر دەتوانێت کتێبخانەیەکی بچووکی تایبەت بە خۆی دروست بکات لە پەیامەکانی نوور.",
  },
  {
    id: 10,
    title: "میدیا",
    page: "media",
    body: [
      "بەشی میدیا بۆ وێنە، ڤیدیۆ، دەنگ، پۆست، ستۆری و ناوەڕۆکی بینراوی بارانی نوورە.",
      "ئەم بەشە یارمەتی دەدات پەیامەکانی نوور تەنها بە نووسین نەبن، بەڵکو بە شێوەی بینراو و بیستراویش بگەنە دڵی خەڵک.",
    ],
    usage: [
      "پۆستەکان ببینە، ڤیدیۆکان یان دەنگەکان گوێ بگرە.",
      "ئەو ناوەڕۆکانەی گونجاون هاوبەشیان بکە بۆ بڵاوکردنەوەی نوور.",
    ],
    benefit: "پەیامەکانی نوور بە زمانێکی تر دەگەنە خەڵک؛ زمانی وێنە، دەنگ و ڤیدیۆ.",
  },
  {
    id: 11,
    title: "مامۆستا نوورسی",
    page: "nursi",
    body: [
      "بەشی مامۆستا نوورسی تایبەتە بە ناساندنی ژیان، پەیام، بیر و خزمەتی م. سەعیدی نوورسی بە شێوەیەکی کورت، ڕێزدار و مەعریفی.",
    ],
    usage: [
      "ئەگەر بۆ یەکەم جار ناوی مامۆستا نوورسی دەبیستیت، یان دەتەوێت زیاتر بناسیت، لەم بەشە دەستپێبکە.",
    ],
    benefit: "خوێنەر دەزانێت ئەم پەیامانە لە کێوە هاتوون، و چ فەزا و ئامانجێکیان هەیە.",
  },
  {
    id: 12,
    title: "ڕێنما",
    page: "guide",
    body: [
      "بەشی ڕێنما ئەم لاپەڕەیەیە کە یارمەتی خوێنەر دەدات بزانێت هەر بەشێکی پلاتفۆڕمەکە چییە و چۆن بەکاریبهێنرێت.",
    ],
    usage: [
      "ئەگەر لە پلاتفۆڕمەکەدا نەتزانی لە کوێ دەستپێبکەیت و چۆن بەکاری بهێنیت، بەشی ڕێنما بخوێنەوە.",
    ],
    benefit: "خوێنەر بە خێرایی فێر دەبێت چۆن پلاتفۆڕمەکە بەکاربهێنێت و سوود لە هەموو بەشەکانی وەربگرێت.",
  },
  {
    id: 13,
    title: "دەربارە",
    page: "about",
    body: [
      "بەشی دەربارە ناسنامەی پلاتفۆڕمەکە ڕوون دەکاتەوە. لێرەدا خوێنەر تێدەگات بارانی نوور بۆچی دروستکراوە، ئامانجی چییە، و چ پەیامێک دەیەوێت بگەیەنێت.",
    ],
    benefit: "متمانە دروست دەکات و پلاتفۆڕمەکە لە پەیجێکی ئاسایی جیا دەکاتەوە؛ چونکە خوێنەر دەزانێت لێرە پەیام، سەرچاوە، ڕێز و مەعریفت بە یەکەوە کۆبوونەتەوە.",
  },
];

export default function Guide() {
  const { navigate } = useApp();
  const [active, setActive] = useState<number | null>(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <section className="relative overflow-hidden rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/30 via-charcoal to-ink p-8 text-center geo-pattern sm:p-14">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-transparent via-gold to-transparent" />
        <p className="text-xs tracking-[0.35em] text-gold/70">ڕێنمایی پلاتفۆڕم</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-cream sm:text-5xl">
          ڕوونکردنەوەی بەشەکانی پلاتفۆڕمی بارانی نوور
        </h1>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-beige/80 leading-loose">
          <p>
            پلاتفۆڕمی بارانی نوور بە شێوەیەک ڕێکخراوە کە هەموو خوێنەرێک، چ کەسێکی ئاسایی بێت و چ کەسێکی ئیختیساسی، بتوانێت بە ئاسانی بگاتە پەیامەکانی نوور، لێی تێبگات، بیخوێنێتەوە، بیپارێزێت و لە ژیانی ڕۆژانەیدا سوودی لێ وەربگرێت.
          </p>
          <p>
            ئەم پلاتفۆڕمە تەنها بۆ بینینی پۆست و وتە نییە؛ بەڵکو شوێنێکی ڕێکخراوە بۆ خوێندنەوە، بیرکردنەوە، گەڕانەوە بۆ ناوەڕۆکی ئیمان، و تێگەیشتن لە پەیامە قووڵەکانی م. سەعیدی نوورسی لە ژێر ڕووناکی قورئانی پیرۆزدا.
          </p>
        </div>
      </section>

      <Divider />

      <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-gold/20 bg-charcoal/50 p-4 paper-texture">
            <h2 className="mb-4 px-2 font-display text-xl font-bold text-cream">پێڕستی ڕێنمایی</h2>
            <div className="max-h-[70vh] space-y-2 overflow-y-auto pr-1">
              {GUIDE_SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(active === s.id ? null : s.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-right text-sm transition-all ${
                    active === s.id
                      ? "border-gold/50 bg-gold/15 text-gold"
                      : "border-gold/10 text-beige/70 hover:border-gold/30 hover:text-cream"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/70 text-xs font-bold">
                    {toKurdishNumber(s.id)}
                  </span>
                  <span className="flex-1">{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="space-y-5">
          {GUIDE_SECTIONS.map((section) => (
            <GuideCard key={section.id} section={section} open={active === section.id} onToggle={() => setActive(active === section.id ? null : section.id)} onGo={(page) => navigate(page)} />
          ))}
        </main>
      </section>

      <Divider />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-gold/25 bg-charcoal/50 p-8 paper-texture">
          <h2 className="font-display text-2xl font-bold text-gold">چۆن خوێنەر سوود لە پلاتفۆڕمەکە وەربگرێت؟</h2>
          <div className="mt-5 space-y-4 text-beige/80 leading-loose">
            <p>باشترین شێوەی بەکارهێنانی بارانی نوور ئەوەیە کە خوێنەر هەموو ڕۆژ چەند خولەکێک بۆی تەرخان بکات.</p>
            <p>سەرەتا پەیامی ئەمڕۆ بخوێنێتەوە، دواتر لەسەر واتاکەی بیر بکاتەوە، ئەگەر پەیوەندی بە ژیانی خۆیەوە هەبوو بیپارێزێت، و ئەگەر پێی وابوو کەسوکار یان هاوڕێیەک پێویستی پێیە، هاوبەشی بکات.</p>
            <p>بارانی نوور بۆ خوێندنەوەی خێراشە و بۆ تێگەیشتنی قووڵیشە؛ واتە هەم کەسێکی ئاسایی دەتوانێت سوودی لێ وەربگرێت، هەم کەسێکی ئیختیساسی دەتوانێت بە شێوەیەکی ڕێکخراو پەیامەکان بدۆزێتەوە و بەکاریانبهێنێت.</p>
          </div>
        </div>
        <div className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/35 via-charcoal to-ink p-8 geo-pattern">
          <h2 className="font-display text-2xl font-bold text-gold">کورتەی پەیام</h2>
          <div className="mt-5 space-y-4 text-cream leading-loose">
            <p>پلاتفۆڕمی بارانی نوور شوێنێکە بۆ ئەوەی پەیامەکانی نوور بە ئاسانی بگەنە دڵ و بیر و ژیانی خەڵک.</p>
            <p>ئەم پلاتفۆڕمە ڕێگایەکە بۆ خوێندنەوە، وەستان، بیرکردنەوە، پاراستنی پەیامەکان، هاوبەشکردنیان، و گەڕانەوە بۆ ڕووناکی ئیمان.</p>
            <p className="font-display text-2xl text-gold-soft">بارانی نوور دەیەوێت هەر سەردانێک ببێتە هەنگاوێک بەرەو نوور.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => navigate("daily")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110">
              پەیامی ئەمڕۆ <Arrow className="h-4 w-4" />
            </button>
            <button onClick={() => navigate("books")} className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm text-cream transition hover:bg-gold/10">
              کتێبەکان <Book className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function GuideCard({ section, open, onToggle, onGo }: { section: GuideSection; open: boolean; onToggle: () => void; onGo: (page: string) => void }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-gold/15 bg-charcoal/50 paper-texture transition-all hover:border-gold/35">
      <button onClick={onToggle} className="flex w-full items-center gap-4 p-6 text-right sm:p-7">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft font-display text-lg font-bold text-ink">
          {toKurdishNumber(section.id)}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-bold text-cream">
            {section.title} {section.english && <span className="text-gold/70">| {section.english}</span>}
          </h3>
        </div>
        <Arrow className={`h-5 w-5 text-gold transition-transform ${open ? "rotate-90" : "-rotate-90"}`} />
      </button>

      {open && (
        <div className="animate-fadeup border-t border-gold/15 px-6 pb-7 sm:px-7">
          <div className="mt-6 space-y-4 text-beige/85 leading-loose">
            {section.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {section.usage && (
            <div className="mt-6 rounded-2xl border border-gold/15 bg-ink/40 p-5">
              <h4 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-gold-soft">
                <Search className="h-4 w-4" /> چۆن بەکاریبهێنرێت؟
              </h4>
              <ul className="space-y-2">
                {section.usage.map((u, i) => (
                  <li key={i} className="flex items-start gap-2 text-beige/80 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-6 rounded-2xl border border-olive/25 bg-olive-deep/15 p-5">
            <h4 className="mb-2 flex items-center gap-2 font-display text-lg font-bold text-gold-soft">
              <Heart className="h-4 w-4" /> سوودی ئەم بەشە
            </h4>
            <p className="text-cream leading-loose">{section.benefit}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {section.page && (
              <button onClick={() => onGo(section.page!)} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110">
                چوون بۆ ئەم بەشە <Arrow className="h-4 w-4" />
              </button>
            )}
            {section.id === 10 && (
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-sm text-gold">
                <Share className="h-4 w-4" /> لەسەر هەر کارتی پەیامێک بەردەستە
              </span>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

function toKurdishNumber(n: number) {
  return String(n).replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}