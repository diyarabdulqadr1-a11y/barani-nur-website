export default function PrayerCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/25 via-charcoal to-ink p-7 text-center shadow-2xl shadow-black/30 geo-pattern sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-transparent via-gold to-transparent" aria-hidden />
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-center gap-3 text-gold">
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          <span className="font-display text-xl font-bold">نزایەک</span>
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
        </div>

        <div className="space-y-5 text-cream leading-loose fs-base">
          <p className="font-quran text-xl text-gold-soft" dir="rtl">
            يا الله، يا رحمن، يا رحيم، يا فرد، يا حي، يا قيوم، يا حكم، يا عدل، يا قدوس!
          </p>

          <p>
            تو حەققی ئیسمی ئەعزەم و حورمەتی قورئانی خاوەن ئیعجازی بەیان و ڕێزی پێغەمبەری ئەکرەم،
            صلى الله عليه وسلم: هەموو ئەو کەسانەی کە ئەم کۆمەڵە پەیامەیان بە چاپ گەیاندووە و
            یارمەتیدەرە بەڕێزەکانیشیان بە بەهەشتی فیردەوس و بەختەوەریی هەمیشەیی شاد بفەرموو.
            <Amin />
          </p>

          <PrayerLine>هەمیشە و بەردەوام لە خزمەتی ئیمان و قورئاندا تەوفیقیان بدە.</PrayerLine>

          <PrayerLine>
            له بەرامبەر هەر پیتێکی کتێبی (وتەکان)ەوە هەزار کردەوەی چاك لە لاپەڕەی کردەوە چاکەکانیاندا بنووسە.
          </PrayerLine>

          <PrayerLine>
            بە فەزل و میهرەبانیی خۆت دامەزراوی و بەردەوامییان لە بڵاوکردنەوەی پەیامەکانی نووردا پێببەخشە.
          </PrayerLine>

          <PrayerLine>یا ارحم الراحمين! سەرجەمی قوتابییانی پەیامەکانی نوور لە هەردوو دنیادا بەختەوەر بفەرموو.</PrayerLine>

          <PrayerLine>له شەڕی شەیتانەکانی ئینس و جینیان بپارێزە.</PrayerLine>

          <PrayerLine>له قسوور و گوناهەکانی ئەم «سەعید»ە دەستەوسان و بێچارەیەش خۆش ببە.</PrayerLine>
        </div>
      </div>
    </section>
  );
}

function PrayerLine({ children }: { children: React.ReactNode }) {
  return (
    <p>
      {children}
      <Amin />
    </p>
  );
}

function Amin() {
  return <span className="mr-1 font-quran text-gold-soft">ئامین..</span>;
}