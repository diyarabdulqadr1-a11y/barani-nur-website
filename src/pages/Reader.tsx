import { useMemo, useState } from "react";
import {
  ARABIC_DRIVE_FOLDER,
  ARABIC_VOLUMES,
  DRIVE_FOLDER,
  ENGLISH_DRIVE_FOLDER,
  ENGLISH_VOLUMES,
  TURKISH_DRIVE_FOLDER,
  TURKISH_VOLUMES,
  VOLUMES,
  openUrl,
  previewUrl,
  type Volume,
} from "../data/books";
import { SectionTitle } from "../components/ui";
import { Arrow, Book, Download } from "../components/icons";
import { useI18n } from "../i18n";

type Lang = "ku" | "ar" | "tr" | "en";

const LANG_INFO: Record<Lang, { label: string; title: string; desc: string; folder: string; list: Volume[] }> = {
  ku: {
    label: "کتێبە کوردییەکان",
    title: "کتێبە کوردییەکان",
    desc: "ئەم بەشە تایبەتە بە وەرگێڕانی کوردیی پەیامەکانی نوور. هەر کتێبێک دەتوانرێت ڕاستەوخۆ لەناو پلاتفۆڕمەکەدا بخوێنرێتەوە.",
    folder: DRIVE_FOLDER,
    list: VOLUMES,
  },
  ar: {
    label: "الكتب العربية",
    title: "الكتب العربية",
    desc: "هذا القسم خاص بالنسخ العربية من كتب رسائل النور، مفصولة عن الكتب الكردية لتسهيل القراءة والمراجعة.",
    folder: ARABIC_DRIVE_FOLDER,
    list: ARABIC_VOLUMES,
  },
  tr: {
    label: "Türkçe Kitaplar",
    title: "کتێبە تورکییەکان",
    desc: "ئەم بەشە تایبەتە بە کتێبە تورکییەکانی ڕیسالەی نوور. هەر کتێبێک دەتوانرێت ڕاستەوخۆ لەناو پلاتفۆڕمەکەدا بخوێنرێتەوە.",
    folder: TURKISH_DRIVE_FOLDER,
    list: TURKISH_VOLUMES,
  },
  en: {
    label: "English Books",
    title: "کتێبە ئینگلیزییەکان",
    desc: "ئەم بەشە تایبەتە بە وەرگێڕانی ئینگلیزیی پەیامەکانی نوور. ئەگەر فایلەکان لە فۆڵدەرەکەدا بە public view دەرنەکەون، دەتوانیت ڕاستەوخۆ فۆڵدەرەکە بکەیتەوە.",
    folder: ENGLISH_DRIVE_FOLDER,
    list: ENGLISH_VOLUMES,
  },
};

export default function Reader({ initialId }: { initialId?: number }) {
  const { t } = useI18n();
  const [lang, setLang] = useState<Lang>("ku");
  const [active, setActive] = useState<Volume | null>(
    initialId ? VOLUMES.find((v) => v.id === initialId) ?? null : null
  );

  const info = LANG_INFO[lang];
  const list = useMemo(() => info.list, [info]);
  const folder = info.folder;

  const changeLang = (next: Lang) => {
    setLang(next);
    setActive(null);
  };

  if (active) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <button onClick={() => setActive(null)} className="inline-flex items-center gap-2 text-sm text-gold hover:underline">
            <Arrow className="h-4 w-4 rotate-180" /> گەڕانەوە بۆ کتێبەکان
          </button>
          <a href={openUrl(active.fileId)} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-4 py-2 text-sm text-cream hover:bg-gold/10">
            <Download className="h-4 w-4" /> کردنەوە / دابەزاندن
          </a>
        </div>
        <div className="mb-4 text-center">
          <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs text-gold">
            {active.language === "ar" ? "عەرەبی" : active.language === "tr" ? "تورکی" : active.language === "en" ? "ئینگلیزی" : "کوردی"}
          </span>
          <h1 className="mt-3 font-display text-2xl font-bold text-cream sm:text-3xl">{active.title}</h1>
          <p className="mt-1 text-sm text-gold/70">{active.original}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-gold/25 bg-charcoal shadow-2xl">
          <iframe src={previewUrl(active.fileId)} title={active.title} className="h-[78vh] w-full" allow="autoplay" />
        </div>
        <p className="mt-3 text-center text-xs text-beige/50">
          کتێبەکە ڕاستەوخۆ لێرە دەخوێنرێتەوە لە کتێبخانەی فەرمی بارانی نوورەوە.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle kicker={t("booksKicker")} title={t("booksTitle")} sub={t("booksSub")} />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        {(Object.keys(LANG_INFO) as Lang[]).map((key) => (
          <button
            key={key}
            onClick={() => changeLang(key)}
            className={`rounded-full border px-6 py-2.5 text-sm transition-all ${lang === key ? "border-gold bg-gold/20 text-gold" : "border-gold/20 text-beige/70 hover:border-gold/50 hover:text-cream"}`}
          >
            {key === "ku" ? t("kuBooks") : key === "ar" ? t("arBooks") : key === "tr" ? t("trBooks") : t("enBooks")}
          </button>
        ))}
        <a href={folder} target="_blank" rel="noreferrer" className="rounded-full border border-gold/20 px-5 py-2.5 text-sm text-gold hover:bg-gold/10">
          {t("driveFolder")}
        </a>
      </div>

      <div className="mb-8 rounded-3xl border border-gold/20 bg-charcoal/50 p-6 text-center paper-texture">
        <h2 className="font-display text-2xl font-bold text-cream">
          {lang === "ku" ? t("kuBooks") : lang === "ar" ? t("arBooks") : lang === "tr" ? t("trBooks") : t("enBooks")}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-beige/65 leading-loose">
          {info.desc}
        </p>
      </div>

      {list.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
          {list.map((v) => (
            <BookCard key={`${lang}-${v.id}`} volume={v} onOpen={() => setActive(v)} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-gold/20 bg-charcoal/50 p-10 text-center paper-texture">
          <Book className="mx-auto h-12 w-12 text-gold/70" />
          <h3 className="mt-4 font-display text-2xl font-bold text-cream">فایلەکان لە فۆڵدەرەکەدا ببینە</h3>
          <p className="mx-auto mt-3 max-w-xl text-beige/65 leading-loose">
            لەم کاتەدا فایلەکانی ئەم فۆڵدەرە لە preview ـی public دا دەرناکەون، بەڵام لینکی فۆڵدەرەکە بەردەستە و دەتوانیت ڕاستەوخۆ لە Google Drive بیبینیت.
          </p>
          <a href={folder} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110">
            {t("openFolder")} <Arrow className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}

function BookCard({ volume, onOpen }: { volume: Volume; onOpen: () => void }) {
  const progress = Math.round(((volume.id * 13) % 90) + 5);
  return (
    <button onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-charcoal/50 text-right transition-all hover:-translate-y-1 hover:border-gold/40">
      <div className="relative flex h-48 items-center justify-center p-6 geo-pattern" style={{ background: `linear-gradient(135deg, ${volume.cover}, #14130e)` }}>
        <div className="absolute right-0 top-0 h-full w-1.5 bg-gold/40" />
        <div className="text-center">
          <Book className="mx-auto mb-3 h-8 w-8 text-gold/80" />
          <p className="text-xs text-gold/70">
            {volume.language === "ar" ? "كتاب" : volume.language === "tr" ? "Kitap" : volume.language === "en" ? "Book" : "بەرگ"} {volume.id}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-cream">{volume.title}</h3>
          <p className="mt-1 text-[11px] text-beige/50">{volume.original}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex-1 text-sm text-beige/60 leading-relaxed">{volume.intro}</p>
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-[11px] text-beige/50">
            <span>پێشکەوتنی خوێندنەوە</span><span>{progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-ink">
            <div className="h-full rounded-full bg-gradient-to-l from-gold to-olive" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-olive-deep py-2 text-sm text-cream transition group-hover:bg-olive">
          خوێندنەوە <Arrow className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}