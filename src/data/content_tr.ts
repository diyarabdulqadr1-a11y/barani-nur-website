import { Topic, Quote, Article, Media, IndexEntry } from "./content";

export const TOPICS_TR: Topic[] = [
  { key: "iman", title: "İman", icon: "✦", desc: "Kalbin ve hayatın nurunun temeli", count: 142, accent: "#6f8c44" },
  { key: "quran", title: "Kur'an-ı Kerim", icon: "❖", desc: "Tüm marifetin kaynağı", count: 168, accent: "#c9a44c" },
  { key: "newej", title: "Namaz", icon: "☾", desc: "Yaratıcıyla günlük bağ", count: 96, accent: "#5b7637" },
  { key: "hiwa", title: "Ümit", icon: "✧", desc: "Karanlıkta bir nur", count: 88, accent: "#d9bd78" },
  { key: "sebr", title: "Sabır", icon: "◈", desc: "Zorluklarda içsel güç", count: 74, accent: "#6b513a" },
  { key: "dlniyayi", title: "Tevekkül", icon: "❉", desc: "Allah'a güven", count: 65, accent: "#6f8c44" },
  { key: "ixlas", title: "İhlas", icon: "✺", desc: "Niyetin safiyeti", count: 58, accent: "#c9a44c" },
  { key: "merg", title: "Ölüm ve Ahiret", icon: "✤", desc: "Sonsuzluğa yeni bir başlangıç", count: 71, accent: "#5b7637" },
  { key: "tobe", title: "Tövbe", icon: "❀", desc: "Allah'ın nuruna dönüş", count: 49, accent: "#d9bd78" },
  { key: "zanyari", title: "İlim", icon: "✦", desc: "Aklın ve marifetin nuru", count: 103, accent: "#6b513a" },
  { key: "lawan", title: "Gençlik", icon: "✧", desc: "Yeni nesle özel bir mesaj", count: 54, accent: "#6f8c44" },
  { key: "xezan", title: "Evlilik", icon: "❖", desc: "Sağlıklı toplumun temeli", count: 42, accent: "#c9a44c" },
  { key: "exlaq", title: "Ahlak", icon: "◈", desc: "Davranış ve adabın güzelliği", count: 87, accent: "#5b7637" },
  { key: "jiyan", title: "Hayatın Anlamı", icon: "❉", desc: "Neden geldik ve nereye gidiyoruz", count: 79, accent: "#d9bd78" },
];

export const QUOTES_TR: Quote[] = [
  {
    id: 1, text: "«Ey günahlarla yüklü nefsim! Rahmeti sonsuz olan Rabbinin merhametinden ümit kesme, zira O'nun rahmetinden daha büyük bir günah yoktur. Allah'ın rahmetinden ümitvâr olmak başlı başına bir ibadettir.»",
    source: "Risale-i Nur", volume: "Lem'alar", bookId: 3, page: "26. Lem'a, 1. Rica", topic: "hiwa", arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ"
  },
  {
    id: 2, text: "«İman tevhidi, tevhid teslimi, teslim tevekkülü, tevekkül saadet-i dareyni iktiza eder. Hakiki imanı elde eden adam kâinata meydan okuyabilir.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "23. Söz, 1. Mebhas", topic: "iman", arabic: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا"
  },
  {
    id: 3, text: "«Namaz dinin direğidir. Müminin miracıdır. Namaz bütün iyiliklerin anahtarıdır ve Rabbin hazinelerinin de anahtarıdır.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "4. Söz", topic: "newej", arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ"
  },
  {
    id: 4, text: "«Sabır başarının anahtarıdır. Sabreden için en büyük meseleler bile kolaylaşır. Allah sabredenlerle beraberdir; sabret ve zafere ulaş.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "21. Söz", topic: "sebr", arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
  },
  {
    id: 5, text: "«Kur'an, şu büyük kâinat kitabının ezelî bir tercümesidir; tekvini ayetlerin sırlarını ortaya çıkaran manevi bir müelliftir.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "25. Söz", topic: "quran", arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ"
  },
  {
    id: 6, text: "«Ölüm hiçlik değil, yokluk değil; ölüm bir vazifenin sonu ve nurani bir âleme geçiştir. Mümin, ölümle beden hapishanesinden kurtulur.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "28. Söz", topic: "merg", arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ"
  },
  {
    id: 7, text: "«Ey gençler! Gençlik dönemi geniştir; ancak geçici olduğu için lezzetleri çok çabuk kaybolur, geriye ağır günahlar ve daimi acılar bırakır.»",
    source: "Risale-i Nur", volume: "Lem'alar", bookId: 3, page: "26. Lem'a, 8. Rica (Gençlik Rehberi)", topic: "lawan", arabic: "وَبَشِّرِ الَّذِينَ آمَنُوا"
  },
  {
    id: 8, text: "«Güzel ahlak imanın meyvesidir; iman, meyvesi güzel davranışlar olan bir ağaç gibidir. İnsanın imanı ne kadar derin olursa, davranışları da o kadar latif olur.»",
    source: "Risale-i Nur", volume: "Mesnevi-i Nuriye", bookId: 8, page: "Ahlak Bölümü", topic: "exlaq", arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ"
  },
  {
    id: 9, text: "«Bismillah her hayrın başıdır; Bismillah her şeyin üzerindeki nurani bir işarettir. Büyük bir sır barındıran o mübarek kelime, onunla başlanan her vazife için bir yücelik işaretidir.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "1. Söz", topic: "iman", arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
  },
  {
    id: 10, text: "«Şu kâinat, Rabbin büyük bir kitabıdır; içindeki her mahluk bir kelime ve her zerre, Yüce Allah'ın güzel isimlerini gösteren bir harftir.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "30. Söz", topic: "jiyan", arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ"
  },
  {
    id: 11, text: "«Tevekkül, esbab-ı zahiriyeye teşebbüs ettikten sonra Allah'a güvenmektir; tevekkül esbabı reddetmek değil, neticeyi Allah'ın kudretine bırakmaktır.»",
    source: "Risale-i Nur", volume: "Sözler", bookId: 1, page: "23. Söz", topic: "dlniyayi", arabic: "وَعَلَى اللَّهِ فَتَوَكَّلُوا"
  },
  {
    id: 12, text: "«Tövbe her zaman açık bir kapıdır; günah ne kadar büyük olursa olsun, Allah'ın rahmeti daha büyüktür. Allah'a dönmek için asla çok geç değildir.»",
    source: "Risale-i Nur", volume: "Lem'alar", bookId: 3, page: "21. Lem'a", topic: "tobe", arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ"
  },
  {
    id: 13, text: "«İlim, sadece bilgi toplamak değil, manayı keşfetmektir; insanı Allah'a yaklaştırmayan her ilim, nur değil kalp üzerinde bir yüktür.»",
    source: "Risale-i Nur", volume: "Şualar", bookId: 4, page: "15. Şua", topic: "zanyari", arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا"
  },
  {
    id: 14, text: "«İhlas, bütün amellerin ruhudur; ihlas olmadan en büyük ameller bile posa gibidir, ihlas ile en küçük amel ahiret hazinesi olur.»",
    source: "Risale-i Nur", volume: "Lem'alar", bookId: 3, page: "20. Lem'a (İhlas Risalesi)", topic: "ixlas", arabic: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ"
  },
  {
    id: 15, text: "«Şu kâinat Yüce Allah'ın büyük bir mescidi ve yeryüzü O'nun nimetler sofrasıdır; mümin ona gurur gözüyle değil, şükür gözüyle bakar.»",
    source: "Risale-i Nur", volume: "Mektubat", bookId: 2, page: "28. Mektup", topic: "iman", arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ"
  },
  {
    id: 16, text: "«Ahiret için olan kardeşlik mukaddestir; bu bağ, kalpleri birleştirir ve maneviyatı derinleştirir. Dünyevi menfaatler için kin ve düşmanlık müminin ruhuna yakışmaz.»",
    source: "Risale-i Nur", volume: "Mektubat", bookId: 2, page: "22. Mektup", topic: "exlaq", arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ"
  }
];

export const ARTICLES_TR: Article[] = [
  {
    id: 1, topic: "iman", readTime: 7, source: "Tarihçe-i Hayat — 777", title: "Dünya Boğucu Bir Kriz İçinde",
    excerpt: "Batı toplumunun bedenine yayılan ve manevi direklerini sarsan hastalık, korkunç bir veba gibidir.",
    body: [
      "Dünya boğucu bir kriz ve büyük bir manevi endişe içinden geçiyor.",
      "Batı toplumunun bedenine yayılan ve manevi direklerini sarsan hastalık, korkunç bir veba gibidir.",
      "İslam toplumunun bu korkunç salgın hastalıkla yüzleşmesi için çareler nelerdir? Acaba 'Batı'nın' çürük ve haksız reçeteleriyle mi, yoksa İslam kalesinin canlı temeli olan 'İman' esaslarıyla mı?",
      "Liderlerin gaflete daldığını görüyorum; 'iman kaleleri' asla küfrün çürük direkleriyle ayakta tutulamaz. Bu yüzden bütün çaba ve mücadelem sadece iman yolundadır ve bütün acılarımı, yorgunluğumu tamamen iman uğrunda harcadım.",
      "Onlar 'Risale-i Nur' mesajlarını anlamıyorlar ya da anlamak istemiyorlar. Beni bir medrese hocası sanıyorlar; dünyanın maddi işlerinden habersiz olduğumu düşünüyorlar!",
      "Hâlbuki ben müspet ilimlerle ve bütün çağdaş felsefelerle meşgul oldum, en karmaşık meselelerini analiz ettim, hatta bu konularda kitaplar yazdım.",
      "Fakat mantık oyunlarını kabul etmiyor ve felsefenin hilelerine kulak asmıyorum. Toplum hayatının özü, manevi varlık, vicdan ve iman hep dilimdedir. Bütün meşguliyetimi Kur'an'ın tesis ettiği Tevhid ve iman temellerine hasrettim. Emin olunuz ki İslam toplumunun ana direği sadece budur; eğer sarsılırsa, toplum helak olur."
    ]
  },
  {
    id: 2, topic: "iman", readTime: 4, source: "Lem'alar — 311", title: "Ey Ehl-i Hak!",
    excerpt: "Şu Kur'ani yüksek düstur ile amel edip bu korkunç hastalığı (ihtilaf hastalığını) ortadan kaldırmaya çalışın.",
    body: [
      "Ey Ehl-i Hak!",
      "Ey ehl-i hakikat, şeriat ve tarikat!",
      "Ey sadece hak için hakkı arayanlar!",
      "Şu yüksek ve muazzam Kur'ani düstur ile amel ederek bu korkunç ihtilaf hastalığını ortadan kaldırmaya çalışın: (Boş bir söz işittiklerinde ondan vakarla yüz çevirirler)...",
      "Kardeşlerinizin hatalarını görmezden gelin, kusurlarını bağışlayın, birbirinizin ayıplarına göz yumun ve iç tartışmalarınızı şimdilik bir kenara bırakın. Çünkü dış düşmanlar her taraftan size saldırıyor...",
      "Ayrıca ehl-i hakkı mağlubiyetten ve zilletten kurtarmayı, en önemli vazifeniz ve ahiret sorumluluğunuz olarak kabul edin...",
      "Sizi kardeşliğe, sevgiye ve yardımlaşmaya çağıran o yüzlerce ayet ve hadisi kendi içinizde tatbik edin."
    ]
  },
  {
    id: 3, topic: "jiyan", readTime: 5, source: "Mektubat", title: "Ey Gafil!",
    excerpt: "Senin için yaratılmış bir daldan sana bir nar uzatanın müdahalesinden mahfuz olduğundan şüphen mi var?",
    body: [
      "Ey Gafil!",
      "Senin için yaratılmış bir daldan sana bir nar uzatan ve senin için olgunlaştırılmış bir asmadan sana bir kavun verenin müdahalesinden korunduğundan ve mahfuz olduğundan şüphen mi var?",
      "Kavunu Yaratan'ın, onu yiyenden habersiz olduğunu zannetmen senin gafletindendir... Nar Sani'inin, meyve yiyenler ve bu sanata hayret edip: 'Beni bu güzel surette ve nakışta yaratan Allah'ı tesbih ederim!' diyenler için o narla ve içindeki suyuyla yaptığı işin farkında olmayan kör bir kuvvet olduğunu varsayman senin körlüğündendir!",
      "Ayrıca narın incecik zarına bakıp: ﴿Yaratanların en güzeli olan Allah ne yücedir!﴾ (Mü'minun: 14) diyenler için... Ve var gücüyle haykıran bu nizamlı düzene bakıp: ﴿Yaratan bilmez mi? O, en ince işleri görüp bilendir, her şeyden haberdardır﴾ (Mülk: 14) diyenler için de?",
      "Yoksa ey cahil! İhtiyaçlarımızı gidermek için bütün bu meyveleri gönderenin bizi görmediğini ve tanımadığını mı sanıyorsun?",
      "Yahut evcil hayvanları ve diğer mahlukatı bizim menfaatimiz için emrimize veren, onları evlerimizde ve barınaklarımızda hizmetimize sunanın bizi görmediğini mi düşünüyorsun?"
    ]
  },
  {
    id: 4, topic: "iman", readTime: 6, source: "Sözler", title: "Bil ki! Çok çirkin bir iş yapıyorsun",
    excerpt: "Bil ki! Bu dünyanın yıkılmasından sonra seninle kalmayacak bir şeye kalbini bağlarsan çok çirkin bir iş yapmış olursun.",
    body: [
      "Bil ki! Bu dünyanın yıkılmasından sonra seninle kalmayacak, hatta dünyanın harab olmasıyla senden ayrılacak bir şeye kalbini bağlarsan çok çirkin bir iş yapmış olursun. Zira insan, kalbini fani bir şeye bağlarsa akıllıca davranmış olmaz!",
      "Kaldı ki, içinde yaşadığın dönemin bitmesiyle seni bırakacak ve sana sırtını dönecek o şey! Barzah (kabir) yolculuğunda sana eşlik etmeyecek olan o şey! Sadece kabrinin kapısına kadar seninle gelecek olan o şey! Bir veya iki yıl sonra seni tamamen ve ebediyen terk edip, günahını boynunda bırakacak olan o şey! Hatta onunla sevindiğin o anda seni bırakıp terk edecek olan o şey!",
      "Eğer kendini akıllı ve şuurlu görüyorsan, bunlara aldırış etme ve onlara üzülme. Ebedi yolculukta sana yoldaş olamayacak, dünya değişikliklerinin, berzah olaylarının ve kıyamet patlamalarının baskısı altında helak olup yok olacak şeylerin hepsini bırak.",
      "Görmüyor musun ki, 'Beka' ve 'Ebedi olan'dan başka hiçbir şeye asla razı olmayan, ondan başkasına bakmayan ve boyun eğmeyen nazik ve ince bir tarafın var? Öyle ki bütün dünya ona verilse, senin o fıtri ihtiyacın yine tatmin olmaz ve huzur bulmaz? İşte 'beka'yı isteyen ve 'ebediyet'e âşık olan o taraf, duygularının ve ince hissiyatının gücüdür. Öyleyse sen de, Hakîm Yaratıcının emirlerine itaatkâr ve boyun eğmiş olan o ince taraflarının emirlerine ve isteklerine itaat et. Evet, o taraflarına itaat et ve bu sayede kendini bütün hüzünlerden kurtar."
    ]
  }
];

export const MEDIA_TR: Media[] = [
  { id: 1, type: "video", title: "İhlas Risalesi Dersi", duration: "18:42", desc: "Risale-i Nur'dan 20. Lem'a okuması." },
  { id: 2, type: "audio", title: "10. Söz'ü Dinlemek (Haşir)", duration: "42:15", desc: "10. Söz'ün sesli okuması." },
  { id: 3, type: "poster", title: "Lem'alar'dan Alıntı", desc: "Nursî'nin metinlerinden günlük poster." },
];

export const TOPIC_INDEX_TR: IndexEntry[] = [
  { topic: "İsm-i A'zam", refs: [{ book: "Lem'alar", section: "30. Lem'a" }] },
  { topic: "Sabır", refs: [{ book: "Mektubat", section: "23. Mektup" }, { book: "Sözler", section: "21. Söz" }] },
  { topic: "İçtihat", refs: [{ book: "Sözler", section: "27. Söz" }] },
  { topic: "İhlas", refs: [{ book: "Lem'alar", section: "20. Lem'a" }, { book: "Lem'alar", section: "21. Lem'a" }] },
  { topic: "İlham ve Vahiy", refs: [{ book: "Mektubat", section: "19. Mektup" }] },
  { topic: "Avrupa", refs: [{ book: "Lem'alar", section: "17. Lem'a" }] },
  { topic: "Peygamberlere İman", refs: [{ book: "Sözler", section: "19. Söz" }, { book: "Şualar", section: "7. Şua" }] },
  { topic: "Ahirete İman", refs: [{ book: "Sözler", section: "10. Söz" }, { book: "Şualar", section: "9. Şua" }] },
  { topic: "Kadere İman", refs: [{ book: "Sözler", section: "26. Söz" }] },
  { topic: "Meleklere İman", refs: [{ book: "Sözler", section: "29. Söz" }] },
  { topic: "Kardeşlik (Uhuvvet)", refs: [{ book: "Mektubat", section: "22. Mektup" }] },
  { topic: "Deprem (Zelzele)", refs: [{ book: "Sözler", section: "14. Söz Zeyli" }] },
  { topic: "Allah'ın Birliği", refs: [{ book: "Lem'alar", section: "23. Lem'a" }] },
  { topic: "Bela ve Musibet", refs: [{ book: "Şualar", section: "2. Şua" }] },
  { topic: "Cennet", refs: [{ book: "Sözler", section: "28. Söz" }] },
  { topic: "Taziye", refs: [{ book: "Mektubat", section: "17. Mektup" }] },
  { topic: "Tesettür", refs: [{ book: "Lem'alar", section: "24. Lem'a" }] },
  { topic: "İhtiyarlar", refs: [{ book: "Lem'alar", section: "26. Lem'a" }] },
  { topic: "Peygamberlik (Risalet)", refs: [{ book: "Sözler", section: "19. Söz" }] },
  { topic: "İbadet", refs: [{ book: "Sözler", section: "3. Söz" }] },
  { topic: "Risale-i Nur", refs: [{ book: "Tarihçe-i Hayat", section: "Isparta Hayatı" }] },
  { topic: "Korku", refs: [{ book: "Mektubat", section: "29. Mektup" }] },
  { topic: "Kudret", refs: [{ book: "Şualar", section: "15. Şua" }] },
  { topic: "Tarikatlar ve Tasavvuf", refs: [{ book: "Mektubat", section: "29. Mektup" }] },
  { topic: "Namaz Tesbihatı", refs: [{ book: "Kastamonu Lâhikası", section: "Sayfa 193" }] },
  { topic: "Takva", refs: [{ book: "Lem'alar", section: "2. Lem'a" }] },
  { topic: "Tevekkül", refs: [{ book: "Sözler", section: "23. Söz" }] },
  { topic: "İmanın Güzellikleri", refs: [{ book: "Sözler", section: "23. Söz" }] },
  { topic: "Cihat", refs: [{ book: "Emirdağ Lâhikası 1", section: "Sayfa 604" }] },
  { topic: "Haset", refs: [{ book: "Mektubat", section: "22. Mektup" }] },
  { topic: "Haşir", refs: [{ book: "Sözler", section: "10. Söz" }] },
  { topic: "Rüya Tabiri", refs: [{ book: "Mektubat", section: "28. Mektup" }] },
  { topic: "Adalet", refs: [{ book: "Lem'alar", section: "30. Lem'a" }] },
  { topic: "Yalan", refs: [{ book: "İşarat-ül İ'caz", section: "Bakara Suresi" }] },
  { topic: "Dünya", refs: [{ book: "Lem'alar", section: "26. Lem'a" }] },
  { topic: "Dua", refs: [{ book: "Mektubat", section: "24. Mektup" }] },
  { topic: "Cehennem", refs: [{ book: "Sözler", section: "28. Söz" }] },
  { topic: "Deccal", refs: [{ book: "Şualar", section: "5. Şua" }] },
  { topic: "İktisat", refs: [{ book: "Lem'alar", section: "19. Lem'a" }] },
  { topic: "Ruh ve Maneviyat", refs: [{ book: "Sözler", section: "29. Söz" }] },
  { topic: "Oruç", refs: [{ book: "Mektubat", section: "29. Mektup" }] },
  { topic: "Irkçılık", refs: [{ book: "Mektubat", section: "26. Mektup" }] },
  { topic: "İlim", refs: [{ book: "Şualar", section: "15. Şua" }] },
  { topic: "Zekat", refs: [{ book: "Mektubat", section: "22. Mektup" }] },
  { topic: "Kadın", refs: [{ book: "Lem'alar", section: "24. Lem'a" }] },
  { topic: "Hayat", refs: [{ book: "Lem'alar", section: "30. Lem'a" }] },
  { topic: "Kabir Hayatı", refs: [{ book: "Sözler", section: "13. Söz" }] },
  { topic: "Tabiat", refs: [{ book: "Lem'alar", section: "23. Lem'a" }] },
  { topic: "Süfyan", refs: [{ book: "Şualar", section: "5. Şua" }] },
  { topic: "Peygamberin Sünneti ﷺ", refs: [{ book: "Lem'alar", section: "11. Lem'a" }] },
  { topic: "Siyaset", refs: [{ book: "Şualar", section: "11. Şua" }] },
  { topic: "Salavat", refs: [{ book: "Lem'alar", section: "28. Lem'a" }] },
  { topic: "Şükür", refs: [{ book: "Mektubat", section: "28. Mektup" }] },
  { topic: "Şefkat", refs: [{ book: "Mektubat", section: "8. Mektup" }] },
  { topic: "Şeytan", refs: [{ book: "Lem'alar", section: "13. Lem'a" }] }
];
