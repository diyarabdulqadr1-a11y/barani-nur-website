import { useState } from "react";
import { ARABIC_VOLUMES, ENGLISH_VOLUMES, TURKISH_VOLUMES, openUrl, previewUrl, type Volume } from "../data/books";
import { CONTACT_EMAIL, SOCIAL } from "../data/special";
import { useApp } from "../hooks/useApp";
import { type Lang, useI18n } from "../i18n";
import Logo from "../components/Logo";
import { Arrow, Book, Download, SocialIcon } from "../components/icons";

type TextPack = {
  homeTitle: string;
  homeSubtitle: string;
  primary: string;
  secondary: string;
  dailyTitle: string;
  dailyVerse: string;
  dailyQuote: string;
  dailySource: string;
  readBook: string;
  copy: string;
  copied: string;
  saved: string;
  ikhlasTitle: string;
  ikhlasBody: string;
  topicsTitle: string;
  topicsBody: string;
  booksTitle: string;
  booksBody: string;
  mediaTitle: string;
  mediaBody: string;
  guideTitle: string;
  guideBody: string;
  nursiTitle: string;
  nursiBody: string;
  aboutTitle: string;
  aboutBody: string[];
  libraryTitle: string;
  libraryBody: string;
  duasTitle: string;
  duasBody: string;
  favoritesTitle: string;
  favoritesBody: string;
  contactTitle: string;
  openFolder: string;
  noFiles: string;
  back: string;
  download: string;
  read: string;
};

const TEXT: Record<Exclude<Lang, "ckb">, TextPack> = {
  ar: {
    homeTitle: "براني نور",
    homeSubtitle: "نداء معرفي وروحي يحمل رسائل الأستاذ سعيد النورسي إلى القلوب الباحثة عن الإيمان والرجاء والسكينة والنور.",
    primary: "اقرأ رسالة اليوم",
    secondary: "استكشف الموضوعات",
    dailyTitle: "رسالة نور اليوم",
    dailyVerse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    dailyQuote: "الصبر مفتاح الفرج، وأعظم وسيلة لطمأنينة القلب؛ فمن صبر ظفر، ومن التجأ إلى الله لم يَخِب.",
    dailySource: "الأستاذ سعيد النورسي · الكلمات · الكلمة الحادية والعشرون",
    readBook: "اقرأها في الكتاب",
    copy: "نسخ النص",
    copied: "تم النسخ",
    saved: "حفظ في المفضلة",
    ikhlasTitle: "رسالة الإخلاص",
    ikhlasBody: "الإخلاص روح الأعمال الصالحة وسر قوتها. هذه الرسالة ترسم طريق العمل لله وحده، وتعلّم القلب أن يطلب رضا الله لا مدح الناس.",
    topicsTitle: "الموضوعات المعرفية",
    topicsBody: "هنا تُرتّب رسائل النور بحسب حاجات القلب والحياة: الإيمان، القرآن، الصلاة، الصبر، الرجاء، التوبة، الأخلاق، العلم ومعنى الحياة.",
    booksTitle: "الكتب",
    booksBody: "اقرأ كتب رسائل النور بلغات متعددة، وافتح كل كتاب مباشرة داخل المنصة أو من مجلد Google Drive.",
    mediaTitle: "مركز الوسائط",
    mediaBody: "صور وتصاميم رسمية مرتبطة بقناة براني نور، تُفتح مباشرة من القنوات الاجتماعية الرسمية.",
    guideTitle: "دليل المنصة",
    guideBody: "هذا الدليل يشرح كيف يستفيد القارئ من المنصة: يبدأ برسالة اليوم، ثم ينتقل إلى الكتب والموضوعات والمكتبة والمفضلة والمشاركة.",
    nursiTitle: "الأستاذ سعيد النورسي",
    nursiBody: "بديع الزمان سعيد النورسي عالم كردي مسلم ومؤلف رسائل النور. كرّس حياته لخدمة حقائق الإيمان والقرآن في العصر الحديث.",
    aboutTitle: "عن براني نور",
    aboutBody: [
      "براني نور مطرٌ معنوي للقلوب التي لا تزال تبحث عن نافذة نور وسط غبار الحياة وتعبها وظلامها.",
      "المشروع يسعى إلى إيصال رسائل الأستاذ سعيد النورسي، المكتوبة في ضوء القرآن الكريم، بأسلوب منظم وجميل إلى القارئ المعاصر.",
      "نحن لا نبحث عن الكلمات الجميلة فحسب، بل عن الكلمات التي تُشعل النور في القلب وتقرب الإنسان من الإيمان والقرآن ومعنى الحياة.",
    ],
    libraryTitle: "مكتبة النصوص",
    libraryBody: "مستودع مختار للنصوص والرسائل، يمكن قراءته وحفظه ونسخه والرجوع إليه بسهولة.",
    duasTitle: "الأدعية والتسبيحات",
    duasBody: "قسم خاص للتسبيحات بعد الصلاة وجوشن الكبير، لتظل الصلة بالله حية في اليوم والليلة.",
    favoritesTitle: "المفضلة",
    favoritesBody: "احفظ الرسائل التي أثّرت فيك، وارجع إليها متى احتجت إلى تذكير وطمأنينة.",
    contactTitle: "التواصل والقنوات",
    openFolder: "فتح المجلد",
    noFiles: "افتح مجلد Google Drive للاطلاع على الملفات المتاحة.",
    back: "العودة إلى الكتب",
    download: "فتح / تنزيل",
    read: "قراءة",
  },
  tr: {
    homeTitle: "Barani Nur",
    homeSubtitle: "Üstad Said Nursî'nin mesajlarını iman, ümit, huzur ve nur arayan kalplere ulaştıran manevi ve ilmî bir çağrı.",
    primary: "Bugünün mesajını oku",
    secondary: "Konuları keşfet",
    dailyTitle: "Bugünün Nur Mesajı",
    dailyVerse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    dailyQuote: "Sabır, ferahlığın anahtarı ve kalbin sükunet yoludur; sabreden kazanır, Allah'a dayanan mahcup olmaz.",
    dailySource: "Üstad Said Nursî · Sözler · Yirmi Birinci Söz",
    readBook: "Kitapta oku",
    copy: "Metni kopyala",
    copied: "Kopyalandı",
    saved: "Kaydet",
    ikhlasTitle: "İhlas Risalesi",
    ikhlasBody: "İhlas, salih amellerin ruhu ve kuvvetinin sırrıdır. Bu risale, işi yalnız Allah rızası için yapmanın yolunu gösterir.",
    topicsTitle: "Marifet konuları",
    topicsBody: "Risale-i Nur mesajları kalbin ve hayatın ihtiyaçlarına göre düzenlenir: iman, Kur'an, namaz, sabır, ümit, tövbe, ahlak, ilim ve hayatın manası.",
    booksTitle: "Kitaplar",
    booksBody: "Risale-i Nur kitaplarını farklı dillerde oku; her kitabı doğrudan platform içinde veya Google Drive klasöründen aç.",
    mediaTitle: "Medya Merkezi",
    mediaBody: "Barani Nur'un resmi kanallarına bağlı görseller ve tasarımlar burada derli toplu sunulur.",
    guideTitle: "Platform Rehberi",
    guideBody: "Bu rehber, okuyucunun platformdan nasıl faydalanacağını anlatır: günlük mesaj, kitaplar, konular, kütüphane, favoriler ve paylaşım.",
    nursiTitle: "Üstad Said Nursî",
    nursiBody: "Bediüzzaman Said Nursî, Risale-i Nur Külliyatı'nın müellifi olan Kürt İslam alimi ve mütefekkiridir. Hayatını iman ve Kur'an hakikatlerine hizmete adamıştır.",
    aboutTitle: "Barani Nur Hakkında",
    aboutBody: [
      "Barani Nur, hayatın yorgunluğu, tozu ve karanlığı içinde hâlâ bir nur penceresi arayan kalpler için manevi bir yağmurdur.",
      "Bu proje, Kur'an'ın ışığında yazılmış Risale-i Nur mesajlarını düzenli, güzel ve anlaşılır bir dille okuyucuya ulaştırmayı amaçlar.",
      "Biz yalnızca güzel sözlerin değil, kalpte nur yakan ve insanı iman, Kur'an ve hayatın manasına yaklaştıran sözlerin peşindeyiz.",
    ],
    libraryTitle: "Metin Kütüphanesi",
    libraryBody: "Seçilmiş metin ve mesajların kolayca okunabildiği, kaydedilebildiği ve kopyalanabildiği düzenli bir alan.",
    duasTitle: "Dualar ve Tesbihat",
    duasBody: "Namaz sonrası tesbihat ve Cevşenü'l-Kebir için özel bölüm; gün ve gece boyunca Allah ile bağı diri tutmak için.",
    favoritesTitle: "Favoriler",
    favoritesBody: "Kalbine dokunan mesajları kaydet ve ihtiyaç duyduğunda kolayca geri dön.",
    contactTitle: "İletişim ve kanallar",
    openFolder: "Klasörü aç",
    noFiles: "Mevcut dosyaları görmek için Google Drive klasörünü aç.",
    back: "Kitaplara dön",
    download: "Aç / indir",
    read: "Oku",
  },
  en: {
    homeTitle: "Barani Nur",
    homeSubtitle: "A refined spiritual knowledge platform carrying Ustad Said Nursi’s messages to hearts searching for faith, hope, peace, and light.",
    primary: "Read today’s message",
    secondary: "Explore topics",
    dailyTitle: "Today’s Nur Message",
    dailyVerse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    dailyQuote: "Patience is the key to relief and the path to tranquility; whoever endures gains, and whoever relies on Allah is never abandoned.",
    dailySource: "Ustad Said Nursi · The Words · Twenty-First Word",
    readBook: "Read it in the book",
    copy: "Copy text",
    copied: "Copied",
    saved: "Save",
    ikhlasTitle: "The Message of Ikhlas",
    ikhlasBody: "Sincerity is the soul of righteous action and the secret of its strength. This message teaches the heart to act for Allah’s pleasure alone.",
    topicsTitle: "Spiritual Knowledge Topics",
    topicsBody: "The messages are arranged according to the needs of the heart and life: faith, Qur’an, prayer, patience, hope, repentance, character, knowledge, and meaning.",
    booksTitle: "Books",
    booksBody: "Read the Risale-i Nur books in multiple languages, directly inside the platform or through the Google Drive folder.",
    mediaTitle: "Media Center",
    mediaBody: "Official Barani Nur images and designs, connected to the project’s social channels.",
    guideTitle: "Platform Guide",
    guideBody: "This guide explains how readers can benefit from the platform: the daily message, books, topics, library, favorites, and sharing tools.",
    nursiTitle: "Ustad Said Nursi",
    nursiBody: "Bediuzzaman Said Nursi was a Kurdish Muslim scholar and the author of the Risale-i Nur Collection, dedicating his life to serving the truths of faith and the Qur’an.",
    aboutTitle: "About Barani Nur",
    aboutBody: [
      "Barani Nur is a spiritual rain for hearts still searching for a window of light amid the dust, fatigue, and darkness of life.",
      "This project seeks to present the messages of Ustad Said Nursi, written in the light of the Holy Qur’an, in a beautiful, organized, and accessible form.",
      "We do not seek beautiful words alone; we seek words that kindle light in the heart and bring the human being closer to faith, the Qur’an, and the meaning of life.",
    ],
    libraryTitle: "Text Library",
    libraryBody: "A curated archive of messages and texts that can be read, saved, copied, and revisited with ease.",
    duasTitle: "Duas and Tasbihat",
    duasBody: "A dedicated section for post-prayer tasbihat and Jawshan al-Kabir, keeping the bond with Allah alive throughout the day and night.",
    favoritesTitle: "Favorites",
    favoritesBody: "Save the messages that touch your heart and return to them whenever you need remembrance and peace.",
    contactTitle: "Contact and channels",
    openFolder: "Open folder",
    noFiles: "Open the Google Drive folder to view the available files.",
    back: "Back to books",
    download: "Open / download",
    read: "Read",
  },
};

export default function TranslatedPage({ page }: { page: string }) {
  const { lang } = useI18n();
  const { navigate } = useApp();
  const text = TEXT[(lang === "ckb" ? "en" : lang) as Exclude<Lang, "ckb">];

  if (page === "books") return <TranslatedBooks text={text} />;

  const content = getContent(page, text);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12" dir={lang === "ar" ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/25 via-charcoal to-ink p-8 text-center geo-pattern sm:p-14">
        <Logo size={94} className="mx-auto" />
        <h1 className="mt-6 font-display text-4xl font-bold text-cream sm:text-5xl">{content.title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-beige/80 leading-loose fs-lg">{content.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate("daily")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110">
            {text.primary} <Arrow className="h-4 w-4" />
          </button>
          <button onClick={() => navigate("books")} className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-7 py-3 text-sm text-cream transition hover:bg-gold/10">
            {text.booksTitle} <Book className="h-4 w-4" />
          </button>
        </div>
      </section>

      {page === "home" && <TranslatedHomeBlocks text={text} />}
      {page === "daily" && <TranslatedDaily text={text} />}
      {page === "about" && <TranslatedAbout text={text} />}
      {page === "media" && <TranslatedContact text={text} />}
    </div>
  );
}

function getContent(page: string, t: TextPack) {
  if (page === "daily") return { title: t.dailyTitle, body: t.dailyQuote };
  if (page === "topics") return { title: t.topicsTitle, body: t.topicsBody };
  if (page === "library") return { title: t.libraryTitle, body: t.libraryBody };
  if (page === "duas") return { title: t.duasTitle, body: t.duasBody };
  if (page === "favorites") return { title: t.favoritesTitle, body: t.favoritesBody };
  if (page === "guide") return { title: t.guideTitle, body: t.guideBody };
  if (page === "nursi") return { title: t.nursiTitle, body: t.nursiBody };
  if (page === "about") return { title: t.aboutTitle, body: t.aboutBody[0] };
  if (page === "media") return { title: t.mediaTitle, body: t.mediaBody };
  return { title: t.homeTitle, body: t.homeSubtitle };
}

function TranslatedHomeBlocks({ text }: { text: TextPack }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {[text.dailyTitle, text.ikhlasTitle, text.topicsTitle].map((title, i) => (
        <div key={title} className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6 paper-texture">
          <h3 className="font-display text-xl font-bold text-gold">{title}</h3>
          <p className="mt-3 text-beige/75 leading-loose">{[text.dailyQuote, text.ikhlasBody, text.topicsBody][i]}</p>
        </div>
      ))}
    </div>
  );
}

function TranslatedDaily({ text }: { text: TextPack }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(`${text.dailyQuote}\n\n— ${text.dailySource}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section className="mt-10 rounded-3xl border-2 border-gold/25 bg-charcoal/50 p-8 text-center geo-pattern">
      <p className="font-quran text-2xl text-gold-soft">{text.dailyVerse}</p>
      <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-loose text-cream">“{text.dailyQuote}”</blockquote>
      <p className="mt-5 text-sm text-gold/70">{text.dailySource}</p>
      <button onClick={copy} className="mt-7 rounded-full border border-gold/35 px-6 py-3 text-sm text-cream hover:bg-gold/10">
        {copied ? text.copied : text.copy}
      </button>
    </section>
  );
}

function TranslatedAbout({ text }: { text: TextPack }) {
  return (
    <div className="mt-10 space-y-5">
      {text.aboutBody.map((p) => (
        <p key={p} className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6 text-beige/80 leading-loose paper-texture">{p}</p>
      ))}
    </div>
  );
}

function TranslatedContact({ text }: { text: TextPack }) {
  return (
    <section className="mt-10 rounded-3xl border border-gold/20 bg-charcoal/50 p-8 text-center">
      <h2 className="font-display text-2xl font-bold text-gold">{text.contactTitle}</h2>
      <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 block text-beige/70 hover:text-gold">{CONTACT_EMAIL}</a>
      <div className="mt-5 flex justify-center gap-3">
        {[
          { name: "Telegram" as const, url: SOCIAL.telegram },
          { name: "Instagram" as const, url: SOCIAL.instagram },
          { name: "Facebook" as const, url: SOCIAL.facebook },
          { name: "TikTok" as const, url: SOCIAL.tiktok },
        ].map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold hover:bg-gold/10">
            <SocialIcon name={s.name} className="h-5 w-5" />
          </a>
        ))}
      </div>
    </section>
  );
}

function TranslatedBooks({ text }: { text: TextPack }) {
  const { lang } = useI18n();
  const [active, setActive] = useState<Volume | null>(null);
  const list = lang === "ar" ? ARABIC_VOLUMES : lang === "tr" ? TURKISH_VOLUMES : ENGLISH_VOLUMES;

  if (active) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8" dir={lang === "ar" ? "rtl" : "ltr"}>
        <button onClick={() => setActive(null)} className="mb-4 text-sm text-gold hover:underline">{text.back}</button>
        <h1 className="mb-4 text-center font-display text-3xl text-cream">{active.title}</h1>
        <div className="overflow-hidden rounded-2xl border-2 border-gold/25 bg-charcoal shadow-2xl">
          <iframe src={previewUrl(active.fileId)} title={active.title} className="h-[78vh] w-full" />
        </div>
        <a href={openUrl(active.fileId)} target="_blank" rel="noreferrer" className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-gold/30 px-5 py-2 text-sm text-cream hover:bg-gold/10">
          <Download className="h-4 w-4" /> {text.download}
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12" dir={lang === "ar" ? "rtl" : "ltr"}>
      <section className="mb-8 text-center">
        <h1 className="font-display text-4xl font-bold text-cream">{text.booksTitle}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-beige/75 leading-loose">{text.booksBody}</p>
      </section>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v) => (
          <button key={v.fileId} onClick={() => setActive(v)} className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6 text-start transition hover:-translate-y-1 hover:border-gold/40">
            <Book className="mb-4 h-8 w-8 text-gold" />
            <h3 className="font-display text-xl font-bold text-cream">{v.title}</h3>
            <p className="mt-2 text-sm text-beige/60 leading-relaxed">{v.intro}</p>
            <span className="mt-5 inline-flex rounded-full bg-olive-deep px-5 py-2 text-sm text-cream">{text.read}</span>
          </button>
        ))}
      </div>
    </div>
  );
}