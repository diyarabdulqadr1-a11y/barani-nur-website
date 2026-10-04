import { type Lang } from "../i18n";

export type TextPack = {
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

export const TEXT: Record<Lang, TextPack> = {
  ckb: {
    homeTitle: "?????? ????",
    homeSubtitle: "??????????? ??????? ? ?????? ?? ?????????? ?. ?????? ?????? ?????????? ??? ?????? ?? ???? ?????? ?????? ?????? ? ?????? ???????.",
    primary: "?????? ????? ????????",
    secondary: "????????? ?????",
    dailyTitle: "?????? ?????? ????",
    dailyVerse: "????? ??????? ???? ?????????????",
    dailyQuote: "????????? ????? ?????????. ????? ?????? ?????? ????????? ???????????? ?? ????? ?????.",
    dailySource: "?. ?????? ?????? � ??????",
    readBook: "?????????? ?? ??????",
    copy: "????????? ???",
    copied: "???????",
    saved: "???????????",
    ikhlasTitle: "?????? ??????",
    ikhlasBody: "?????? ???? ????? ??????? ??????? ???? ?????? ????????? ??????? ??? ???? ???????? ? ?? ?????? ????????? ????? ?????? ?????? ???????.",
    topicsTitle: "?????? ????????????",
    topicsBody: "?????? ?????????? ???? ?? ??? ??????? ?? ? ???? ????????: ?????? ??????? ????? ?????????? ????? ????? ??????.",
    booksTitle: "????????",
    booksBody: "???? ???????? ??????? ?? ??????? ? ???????? ???? ? ????????? ?????????? ????.",
    mediaTitle: "?????? ?????? ????",
    mediaBody: "???? ? ????? ? ??????????? ?????? ????.",
    guideTitle: "??????? ????????",
    guideBody: "?? ?????? ??????? ??????????? ???????? ???????????.",
    nursiTitle: "?. ?????? ??????",
    nursiBody: "???? ? ???????? ?????? ??????? ?????? ?????????? ????.",
    aboutTitle: "???????? ?????? ????",
    aboutBody: [
      "?????? ???? ??????????? ??????? ? ??????.",
      "??????? ???????? ?????????? ????? ?? ???????? ??????? ? ????."
    ],
    libraryTitle: "??????? ???????",
    libraryBody: "?????? ?????? ?? ???????.",
    duasTitle: "??????",
    duasBody: "??????? ????? ?????.",
    favoritesTitle: "??????????",
    favoritesBody: "?????? ?????????????????.",
    contactTitle: "????????",
    openFolder: "???????? ??????",
    noFiles: "??? ?????? ????.",
    back: "????????",
    download: "?????????",
    read: "?????????",
  },
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
