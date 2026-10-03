import { useState } from "react";
import { SectionTitle } from "../components/ui";
import { Play } from "../components/icons";
import { useI18n } from "../i18n";

type AudioLang = "ku" | "ar" | "tr" | "en";

interface Audiobook {
  id: string;
  title: string;
  narrator: string;
  youtubeUrl: string;
  cover: string;
  lang: AudioLang;
}

const DRIVE_IMG = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

const AUDIOBOOKS: Audiobook[] = [
  {
    id: "words-ku",
    title: "کتێبی وتەکان",
    narrator: "دەنگ: شیخ فاتح محمد",
    youtubeUrl: "https://www.youtube.com/embed/9pORfKQz3IU?list=PL9rEBFdvE8E6_Ou3cRrnFhyHgH8hK0fSB",
    cover: DRIVE_IMG("1UjUBXrteEIaM-Z7RmX7-ZogCbWxthcP1"),
    lang: "ku",
  },
  {
    id: "letters-ku",
    title: "کتێبی مەکتوبات",
    narrator: "دەنگ: شیخ فاتح محمد",
    youtubeUrl: "https://www.youtube.com/embed/CR8Dve3vlnA?list=PL9rEBFdvE8E7rKaFhFxU-jh4-ENiJKBnk",
    cover: DRIVE_IMG("1izJqTrnBqLoRQu7ab8MaA2V-CWY1h6_k"),
    lang: "ku",
  },
  {
    id: "flashes-ku",
    title: "کتێبی بریسکەکان",
    narrator: "دەنگ: شیخ فاتح محمد",
    youtubeUrl: "https://www.youtube.com/embed/WRB_oBTyays?list=PL9rEBFdvE8E5tBuElEeOwlA-OEhkARLU5",
    cover: DRIVE_IMG("1_dceX6xSK3fHRKEK7HlItQo-ZvKseEm4"),
    lang: "ku",
  },
  {
    id: "sick-ku",
    title: "کتێبی پەیامی بیماران",
    narrator: "دەنگ: شیخ فاتح محمد",
    youtubeUrl: "https://www.youtube.com/embed/dL61qHBgRjA",
    cover: DRIVE_IMG("1k8XuTi7NbWxUbEm8rjOPAXvHI35hjF9g"),
    lang: "ku",
  },
  {
    id: "ramadan-ku",
    title: "کتێبی پەیامی ڕەمەزان",
    narrator: "دەنگ: شیخ فاتح محمد",
    youtubeUrl: "https://www.youtube.com/embed/ftha3p1w8Xk",
    cover: DRIVE_IMG("1k8XuTi7NbWxUbEm8rjOPAXvHI35hjF9g"), // Using sick cover as placeholder since 5th image wasn't in the folder, or reuse one.
    lang: "ku",
  },
];

const LANG_LABELS: Record<AudioLang, string> = {
  ku: "کوردی",
  ar: "العربية",
  tr: "Türkçe",
  en: "English",
};

export default function Audiobooks() {
  useI18n();
  const [lang, setLang] = useState<AudioLang>("ku");
  const [active, setActive] = useState<Audiobook | null>(null);

  const filtered = AUDIOBOOKS.filter((b) => b.lang === lang);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle
        kicker="گوێبیستبوون"
        title="کتێبەکان بەدەنگ"
        sub="کتێبە دەنگییەکانی پەیامەکانی نوور بە دەنگی شیخ فاتح محمد — گوێبگرە و دڵ ئارام بکەرەوە"
      />

      {/* Language Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {(Object.keys(LANG_LABELS) as AudioLang[]).map((l) => (
          <button
            key={l}
            onClick={() => { setLang(l); setActive(null); }}
            className={`rounded-full border px-6 py-2.5 text-sm transition-all ${
              lang === l
                ? "border-gold bg-gold/20 text-gold"
                : "border-gold/20 text-beige/70 hover:border-gold/50 hover:text-cream"
            }`}
          >
            {LANG_LABELS[l]}
          </button>
        ))}
      </div>

      {/* Active Player */}
      {active && (
        <div className="mb-12 overflow-hidden rounded-3xl border-2 border-gold/30 bg-charcoal shadow-2xl">
          <div className="flex items-center justify-between border-b border-gold/15 bg-ink/50 px-6 py-4">
            <div>
              <h3 className="font-display text-xl font-bold text-cream">{active.title}</h3>
              <p className="text-sm text-gold/70">{active.narrator}</p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="rounded-full border border-gold/30 px-4 py-2 text-sm text-cream hover:bg-gold/10"
            >
              داخستن ✕
            </button>
          </div>
          <div className="aspect-video w-full bg-black">
            <iframe
              src={active.youtubeUrl}
              title={active.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Books Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((book) => (
            <div
              key={book.id}
              className="group overflow-hidden rounded-2xl border border-gold/15 bg-charcoal/50 transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.classList.add("flex", "items-center", "justify-center", "bg-gradient-to-br", "from-olive-deep", "to-ink");
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="text-center p-6"><div class="text-4xl mb-4">🎧</div><h3 class="font-display text-xl text-cream">${book.title}</h3></div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-cream">{book.title}</h3>
                <p className="mt-1 text-sm text-gold/70">{book.narrator}</p>
                <button
                  onClick={() => setActive(book)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft py-3 text-sm font-semibold text-ink transition hover:brightness-110"
                >
                  <Play className="h-4 w-4" /> گوێبگرە
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-gold/20 bg-charcoal/50 p-12 text-center paper-texture">
          <Play className="mx-auto h-12 w-12 text-gold/50" />
          <h3 className="mt-4 font-display text-2xl font-bold text-cream">بەم زووانە زیاد دەکرێت</h3>
          <p className="mx-auto mt-3 max-w-xl text-beige/65 leading-loose">
            کتێبە دەنگییەکانی ئەم زمانە بەم زووانە زیاد دەکرێن. تکایە چاوەڕوان بە.
          </p>
        </div>
      )}
    </div>
  );
}
