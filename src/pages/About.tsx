import Logo from "../components/Logo";
import { Divider } from "../components/ui";
import { CONTACT_EMAIL, SOCIAL } from "../data/special";
import { useApp } from "../hooks/useApp";
import { Book, Arrow, SocialIcon } from "../components/icons";
import PrayerCard from "../components/PrayerCard";

export default function About() {
  const { navigate } = useApp();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* HERO */}
      <div className="text-center">
        <div className="mx-auto w-fit"><Logo size={120} /></div>
        <h1 className="mt-6 font-display text-4xl font-bold text-cream sm:text-5xl">دەربارەی بارانی نوور</h1>
        <p className="mt-3 text-gold-soft fs-lg">بارانێک بۆ دڵانی تینوو بە نوور</p>
      </div>

      <Divider />

      {/* MAIN STATEMENT */}
      <section className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/30 via-charcoal to-ink p-8 sm:p-12 geo-pattern">
        <p className="text-center text-cream fs-lg leading-loose sm:text-xl">
          <span className="font-bold text-gold">بارانی نوور</span>: بارانێکە بۆ ئەو دڵانەی لە ناو غوبار و
          ماندوویی و تاریکی ژیاندا، هێشتا بەدوای پەنجەرەیەکی نووردا دەگەڕێن.
        </p>
      </section>

      <Divider />

      {/* PROJECT VISION */}
      <section className="space-y-5">
        <h2 className="font-display text-2xl font-bold text-gold sm:text-3xl">ئامانجی پڕۆژە</h2>
        <p className="text-cream fs-lg leading-loose">
          ئەم پڕۆژەیە هەوڵێکە بۆ ئەوەی پەیامەکانی م. سەعیدی نوورسی، کە لە ژێر ڕووناکی قورئانی پیرۆزدا
          نووسراون، بە زمانی کوردی و بە شێوەیەکی جوان و ڕێکخراو، بگاتە دڵی خوێنەران؛ نەک تەنها بۆ
          خوێندنەوە، بەڵکو بۆ وەستان، بیرکردنەوە، تێگەیشتن و گەڕانەوە بۆ ناوەڕۆکی ئیمان.
        </p>
      </section>

      <Divider />

      {/* THREE-POINT POEM */}
      <section className="space-y-5">
        <h2 className="font-display text-2xl font-bold text-gold sm:text-3xl">بانگەوازێکە بۆ دڵ</h2>
        <p className="text-cream leading-loose">
          <span className="font-bold text-gold-soft">بارانی نوور بانگەوازێکە بۆ دڵ؛</span>
        </p>
        <ul className="space-y-3">
          {[
            "کە مرۆڤ لە ناو قەرەباڵغی دونیادا بیر لە ئەبەد بکاتەوە،",
            "لە ناو تاریکی گوماندا ڕووناکی ئیمان ببینێت،",
            "لە ناو ترس و ماندووبووندا هیوای ڕەحمەتی خوای گەورە بدۆزێتەوە.",
          ].map((line, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border-r-2 border-gold/40 bg-charcoal/40 px-5 py-3 text-beige/85 leading-loose">
              <span className="mt-1 text-gold">✦</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <Divider />

      {/* SEARCH STATEMENT */}
      <section className="space-y-5">
        <h2 className="font-display text-2xl font-bold text-gold sm:text-3xl">ئێمە بەدوای چی دەگەڕێین؟</h2>
        <div className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6 paper-texture">
          <p className="text-cream leading-loose">
            ئێمە لە پەیامەکانی نووردا بەدوای وشە جوانەکان <span className="text-gold">ناگەڕێین؛</span>
          </p>
          <p className="mt-4 text-beige/85 leading-loose">
            بەدوای ئەو وشانەدا دەگەڕێین کە <span className="text-gold-soft">نوور لە دڵدا دادەگیرسێنن،</span>
          </p>
          <p className="mt-4 text-beige/85 leading-loose">
            ئەو مەعنایەی مرۆڤ لە خۆی، لە ژیان، لە مەرگ، لە ئیمان، و لە قورئان نزیکتر دەکاتەوە.
          </p>
        </div>
      </section>

      <Divider />

      {/* DAILY MESSAGE */}
      <section className="space-y-5">
        <h2 className="font-display text-2xl font-bold text-gold sm:text-3xl">پەیامێکی ڕۆژانە</h2>
        <p className="text-cream leading-loose">
          <span className="font-bold text-gold-soft">بارانی نوور پەیامێکی ڕۆژانەیە بۆ ئەو دڵانەی دەزانن:</span>
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: "❉", text: "دونیا تەنها شوێنی مانەوە نییە،" },
            { icon: "✶", text: "بەڵکو قوتابخانەیەکە بۆ ناسینی خوای گەورە،" },
            { icon: "✦", text: "هەر وشەیەک لەناو پەیامەکانی نووردا، کلیلێکە کە دەرگای حەقیقەت دەکاتەوە." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-gold/15 bg-gradient-to-br from-charcoal/70 to-ink p-6 text-center transition hover:border-gold/40">
              <span className="text-3xl text-gold">{c.icon}</span>
              <p className="mt-3 text-cream leading-loose">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* VALUES GRID */}
      <section>
        <h2 className="mb-6 text-center font-display text-2xl font-bold text-gold sm:text-3xl">بنەماکانمان</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            ["✔ دروستی سەرچاوە", "هەموو وتەیەک بەپێی بەرگ، لاپەڕە و بەش ئاماژەی پێ دەکرێت بۆ دڵنیایی خوێنەر."],
            ["📖 سیاسەتی ئەدیتۆریاڵ", "هەمیشە سەرچاوە دەخرێتە ڕوو کاتێک بەردەستە، و ڕوونکردنەوەکان بە زمانێکی ڕوون و بەڕێز دەنووسرێن."],
            ["🌱 زمانی سادە", "زمانی کوردیی ڕوون بەکاردێت بۆ ئەوەی هەموو کەس سوود ببینێت."],
            ["🤍 ڕێزی ڕۆحی", "شکۆ و بەرزی ڕۆحی و زانستی پڕۆژەکە دەپارێزرێت و دوور دەکەوینەوە لە سیاسیکردن."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-gold/15 bg-charcoal/50 p-5">
              <h3 className="font-display text-lg text-cream">{t}</h3>
              <p className="mt-2 text-sm text-beige/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/30 to-ink p-8 text-center geo-pattern">
        <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">دەستی پێ بکە</h3>
        <p className="mx-auto mt-3 max-w-lg text-beige/75 leading-loose">
          چوونە ناو کتێبخانەی پەیامەکانی نوور یان پەیامی ئەمڕۆ بخوێنەوە.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate("books")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110">
            <Book className="h-4 w-4" /> کتێبخانە
          </button>
          <button onClick={() => navigate("daily")}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 text-sm text-cream transition hover:bg-gold/10">
            پەیامی ئەمڕۆ <Arrow className="h-4 w-4" />
          </button>
        </div>
      </section>

      <Divider />

      {/* CONTACT */}
      <section className="text-center">
        <h2 className="font-display text-2xl font-bold text-gold">پەیوەندی</h2>
        <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block text-beige/60 transition-colors hover:text-gold">
          {CONTACT_EMAIL}
        </a>
        <div className="mt-4 flex justify-center gap-3">
          {[
            { url: SOCIAL.telegram, name: "Telegram" as const },
            { url: SOCIAL.instagram, name: "Instagram" as const },
            { url: SOCIAL.facebook, name: "Facebook" as const },
            { url: SOCIAL.tiktok, name: "TikTok" as const },
          ].map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" title={s.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold">
              <SocialIcon name={s.name} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </section>

      <Divider />

      <PrayerCard />
    </div>
  );
}
