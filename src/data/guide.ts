export type GuideSection = {
  id: number;
  title: string;
  english?: string;
  body: string[];
  usage?: string[];
  benefit: string;
  page?: string;
};

export const GUIDE_SECTIONS = {
  ckb: [
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
      title: "دەربارە",
      page: "about",
      body: [
        "بەشی دەربارە ناسنامەی پلاتفۆڕمەکە ڕوون دەکاتەوە. لێرەدا خوێنەر تێدەگات بارانی نوور بۆچی دروستکراوە، ئامانجی چییە، و چ پەیامێک دەیەوێت بگەیەنێت.",
      ],
      benefit: "متمانە دروست دەکات و پلاتفۆڕمەکە لە پەیجێکی ئاسایی جیا دەکاتەوە؛ چونکە خوێنەر دەزانێت لێرە پەیام، سەرچاوە، ڕێز و مەعریفت بە یەکەوە کۆبوونەتەوە.",
    },
  ],
  ar: [
    {
      id: 1,
      title: "الرئيسية",
      page: "home",
      body: [
        "قسم الرئيسية هو البوابة الأساسية للمنصة. هنا يفهم القارئ بشكل عام ما هو براني نور ولماذا أُنشئ وكيف يستفيد منه.",
        "من خلال الرئيسية يمكنك الوصول بسرعة إلى رسالة اليوم، أهم الموضوعات، الكتب، الوسائط وغيرها.",
      ],
      benefit: "القارئ يدرك من نظرة واحدة من أين يبدأ وما هي الرسالة لهذا اليوم.",
    },
    {
      id: 2,
      title: "رسالة اليوم",
      page: "daily",
      body: [
        "هذا القسم هو من أهم الأقسام. هنا تُعرض رسالة مختارة من رسائل النور يومياً.",
        "هذه الرسائل ليست مجرد نصوص عادية، بل نصوص أصلية من رسائل النور مع المصادر الدقيقة.",
      ],
      usage: [
        "قم بزيارة هذا القسم يومياً، اقرأ الرسالة وتفكر فيها.",
        "إن أثرت فيك، احفظها أو شاركها مع غيرك.",
      ],
      benefit: "رسالة قصيرة وعميقة تريح القلب وتعيد الإنسان إلى جوهر الإيمان.",
    },
    {
      id: 3,
      title: "القراءة اليومية",
      page: "daily",
      body: [
        "قسم القراءة اليومية لمتابعة وتسجيل قراءاتك والحفاظ على استمراريتها.",
        "هنا يمكنك إدخال عدد الصفحات التي قرأتها اليوم وتسجيلها.",
      ],
      usage: [
        "سجل دخولك وحدد هدفك اليومي.",
        "سجل عدد الصفحات المقروءة يومياً.",
      ],
      benefit: "القراءة اليومية ليست مجرد زيادة صفحات بل وسيلة للحفاظ على القلب وتجديد الإيمان.",
    },
    {
      id: 4,
      title: "حسابي",
      page: "favorites",
      body: [
        "قسم حسابي هو المكان الشخصي للمستخدم. إذا سجلت دخولك، ستُحفظ جميع قراءاتك هنا.",
        "هنا يمكنك رؤية بياناتك، سجل القراءة، والرسائل المحفوظة.",
      ],
      usage: [
        "أنشئ حساباً لحفظ رسائلك.",
        "تابع تقدمك واستمرارك.",
      ],
      benefit: "براني نور يتحول من منصة عامة إلى رفيق شخصي لك.",
    },
    {
      id: 5,
      title: "الكتب",
      page: "books",
      body: [
        "قسم الكتب مخصص لتنظيم كتب رسائل النور لتتمكن من قراءتها وتصفحها.",
      ],
      usage: [
        "إذا أردت معرفة الرسائل من مصادرها، ابدأ هنا.",
      ],
      benefit: "القارئ يعرف المصدر الأصلي للرسالة ولا يكتفي بالاقتباس.",
    },
    {
      id: 6,
      title: "الموضوعات",
      page: "topics",
      body: [
        "هذا القسم يرتب رسائل النور حسب احتياجات الإنسان مثل الإيمان، القرآن، الصبر والموت.",
      ],
      usage: [
        "إذا احتجت إلى الأمل، افتح قسم الأمل والإيمان.",
      ],
      benefit: "القارئ يصل إلى ما يحتاجه مباشرة ولا يضيع وسط النصوص.",
    },
    {
      id: 7,
      title: "المفضلة",
      page: "favorites",
      body: [
        "قسم المفضلة لحفظ الرسائل التي ترغب في العودة إليها لاحقاً.",
      ],
      usage: [
        "عندما تعجبك رسالة، اضغط على زر الحفظ.",
      ],
      benefit: "تستطيع إنشاء مكتبة صغيرة خاصة بك من رسائل النور.",
    },
    {
      id: 8,
      title: "الوسائط",
      page: "media",
      body: [
        "قسم للصور والفيديو والتسجيلات الصوتية المتعلقة ببراني نور.",
      ],
      usage: [
        "شاهد الصور واستمع للصوتيات وشاركها.",
      ],
      benefit: "وصول رسائل النور عبر وسائل أخرى مثل الصوت والصورة.",
    },
    {
      id: 9,
      title: "الأستاذ النورسي",
      page: "nursi",
      body: [
        "قسم خاص للتعريف بحياة ورسالة الأستاذ بديع الزمان سعيد النورسي.",
      ],
      usage: [
        "إذا كنت تسمع باسم النورسي لأول مرة، ابدأ هنا.",
      ],
      benefit: "معرفة صاحب الرسائل وفهم بيئته وهدفه.",
    },
    {
      id: 10,
      title: "الدليل",
      page: "guide",
      body: [
        "الدليل هو هذه الصفحة التي تشرح كيفية استخدام المنصة وأقسامها.",
      ],
      usage: [
        "اقرأ الدليل لتعرف كيف تستفيد من كل قسم.",
      ],
      benefit: "تعلم استخدام المنصة بسرعة وسهولة.",
    },
    {
      id: 11,
      title: "عن المنصة",
      page: "about",
      body: [
        "هذا القسم يشرح هوية المنصة ولماذا تم إنشاؤها وأهدافها.",
      ],
      benefit: "بناء الثقة ومعرفة أن المنصة تهدف إلى نشر المعرفة والإيمان.",
    },
  ],
  tr: [
    {
      id: 1,
      title: "Ana Sayfa",
      page: "home",
      body: [
        "Ana sayfa platformun ana kapısıdır. Okuyucu burada Barani Nur'un ne olduğunu ve ondan nasıl faydalanacağını anlar.",
        "Buradan bugünün mesajına, kitaplara ve diğer bölümlere hızlıca ulaşabilirsiniz.",
      ],
      benefit: "Okuyucu nereden başlayacağını ve bugünün mesajının ne olduğunu hemen görür.",
    },
    {
      id: 2,
      title: "Bugünün Mesajı",
      page: "daily",
      body: [
        "En önemli bölümlerden biridir. Her gün Risale-i Nur'dan seçilmiş bir mesaj gösterilir.",
        "Bu mesajlar doğrudan orijinal metinlerden alınmış ve kaynakları belirtilmiştir.",
      ],
      usage: [
        "Her gün bu bölümü ziyaret edin ve mesajı okuyup üzerinde düşünün.",
        "Etkilendiğiniz mesajları kaydedin veya paylaşın.",
      ],
      benefit: "Kısa ama derin bir mesaj kalbi rahatlatır ve insanı imana geri döndürür.",
    },
    {
      id: 3,
      title: "Günlük Okuma",
      page: "daily",
      body: [
        "Okumalarınızı takip etmeniz ve devamlılığı sağlamanız içindir.",
        "Bugün kaç sayfa okuduğunuzu ve hangi kitabı okuduğunuzu kaydedebilirsiniz.",
      ],
      usage: [
        "Giriş yapın ve günlük hedefinizi belirleyin.",
        "Her gün okuduğunuz sayfa sayısını girin.",
      ],
      benefit: "Sadece sayfa sayısını artırmak değil, kalbi korumak ve imanı tazelemek için bir yoldur.",
    },
    {
      id: 4,
      title: "Hesabım",
      page: "favorites",
      body: [
        "Kullanıcının kişisel alanıdır. Giriş yaptığınızda tüm okumalarınız ve kayıtlarınız burada tutulur.",
        "Burada okuma geçmişinizi ve favori mesajlarınızı görebilirsiniz.",
      ],
      usage: [
        "Mesajlarınızı ve okumalarınızı kaydetmek için bir hesap oluşturun.",
      ],
      benefit: "Barani Nur genel bir platform olmaktan çıkıp kişisel okuma arkadaşınız olur.",
    },
    {
      id: 5,
      title: "Kitaplar",
      page: "books",
      body: [
        "Risale-i Nur kitaplarını düzenli bir şekilde tanıtmak ve okumanızı sağlamak içindir.",
      ],
      usage: [
        "Mesajları kaynağından okumak isterseniz buradan başlayın.",
      ],
      benefit: "Okuyucu mesajın hangi kaynaktan geldiğini bilir.",
    },
    {
      id: 6,
      title: "Konular",
      page: "topics",
      body: [
        "Risale-i Nur mesajlarını insan hayatının ve kalbinin ihtiyaçlarına göre (iman, Kuran, sabır, umut vb.) düzenler.",
      ],
      usage: [
        "Umuda ihtiyacınız varsa umut bölümünü açın.",
      ],
      benefit: "Okuyucu metinler arasında kaybolmaz, ihtiyacı olan mesaja ulaşır.",
    },
    {
      id: 7,
      title: "Favoriler",
      page: "favorites",
      body: [
        "Daha sonra tekrar dönmek istediğiniz mesajları kaydetmek içindir.",
      ],
      usage: [
        "Bir mesaj kalbinize dokunduğunda favorilere ekle düğmesine basın.",
      ],
      benefit: "Kendi küçük Risale-i Nur kütüphanenizi oluşturabilirsiniz.",
    },
    {
      id: 8,
      title: "Medya",
      page: "media",
      body: [
        "Barani Nur'un görselleri, videoları ve ses kayıtları için ayrılmış bölümdür.",
      ],
      usage: [
        "Görselleri inceleyin, videoları izleyin ve paylaşın.",
      ],
      benefit: "Nur mesajları sadece yazıyla değil, görsel ve işitsel olarak da insanlara ulaşır.",
    },
    {
      id: 9,
      title: "Üstad Nursî",
      page: "nursi",
      body: [
        "Üstad Bediüzzaman Said Nursî'nin hayatını ve mesajını kısaca tanıtan bölümdür.",
      ],
      usage: [
        "Nursî'nin adını ilk defa duyuyorsanız buradan başlayın.",
      ],
      benefit: "Mesajların kimden geldiğini ve amacını anlamanızı sağlar.",
    },
    {
      id: 10,
      title: "Rehber",
      page: "guide",
      body: [
        "Platformun nasıl kullanılacağını anlatan bu sayfadır.",
      ],
      usage: [
        "Platformu nasıl kullanacağınızı öğrenmek için okuyun.",
      ],
      benefit: "Platformun tüm bölümlerinden en iyi şekilde faydalanmanızı sağlar.",
    },
    {
      id: 11,
      title: "Hakkında",
      page: "about",
      body: [
        "Platformun kimliğini, neden kurulduğunu ve amacını açıklar.",
      ],
      benefit: "Güven oluşturur ve platformun amacını okuyucuya aktarır.",
    },
  ],
  en: [
    {
      id: 1,
      title: "Home",
      page: "home",
      body: [
        "The home page is the main gateway to the platform. Here, the reader understands what Barani Nur is, why it was created, and how to benefit from it.",
        "From the home page, you can quickly access today's message, topics, books, and media.",
      ],
      benefit: "The reader understands at a glance where to start and what today's message is.",
    },
    {
      id: 2,
      title: "Today's Message",
      page: "daily",
      body: [
        "One of the most important sections. A selected message from the Risale-i Nur is shown here every day.",
        "These messages are original texts from the Risale-i Nur, complete with precise sources.",
      ],
      usage: [
        "Visit this section daily, read the message, and reflect on it.",
        "If it resonates with you, save it or share it.",
      ],
      benefit: "A short but profound message can calm the heart and bring one back to the essence of faith.",
    },
    {
      id: 3,
      title: "Daily Reading",
      page: "daily",
      body: [
        "This section is for tracking your reading progress and maintaining consistency.",
        "Here you can log how many pages you read today and which book.",
      ],
      usage: [
        "Log in and set your daily reading goal.",
        "Enter the number of pages read every day.",
      ],
      benefit: "Daily reading is not just about increasing pages; it is a way to protect the heart and renew faith.",
    },
    {
      id: 4,
      title: "My Account",
      page: "favorites",
      body: [
        "The personal space of the user. If you log in, all your progress and records are saved here.",
        "Here you can see your reading history, streaks, and saved messages.",
      ],
      usage: [
        "Create an account to save your messages and readings.",
      ],
      benefit: "Barani Nur turns from a public platform into your personal reading companion.",
    },
    {
      id: 5,
      title: "Books",
      page: "books",
      body: [
        "Dedicated to organizing the books of the Risale-i Nur so you can explore and read them.",
      ],
      usage: [
        "If you want to read the messages from their original sources, start here.",
      ],
      benefit: "The reader knows the exact source of the message.",
    },
    {
      id: 6,
      title: "Topics",
      page: "topics",
      body: [
        "This section organizes the Risale-i Nur messages according to the needs of the heart (faith, Quran, patience, hope, etc.).",
      ],
      usage: [
        "If you need hope, open the hope section.",
      ],
      benefit: "The reader does not get lost among texts but finds exactly what they need.",
    },
    {
      id: 7,
      title: "Favorites",
      page: "favorites",
      body: [
        "A place to save the messages you want to return to later.",
      ],
      usage: [
        "When a message touches your heart, click the save button.",
      ],
      benefit: "You can create your own personalized library of Risale-i Nur messages.",
    },
    {
      id: 8,
      title: "Media",
      page: "media",
      body: [
        "A section for images, videos, and audio related to Barani Nur.",
      ],
      usage: [
        "View images, listen to audio, and share them.",
      ],
      benefit: "The messages of Nur reach people not only through text but also visually and audibly.",
    },
    {
      id: 9,
      title: "Ustad Nursi",
      page: "nursi",
      body: [
        "A brief introduction to the life and message of Ustad Bediuzzaman Said Nursi.",
      ],
      usage: [
        "If you are hearing the name Nursi for the first time, start here.",
      ],
      benefit: "Helps you understand who the author is and the purpose of his works.",
    },
    {
      id: 10,
      title: "Guide",
      page: "guide",
      body: [
        "This very page, which explains how to use the platform and its sections.",
      ],
      usage: [
        "Read the guide to learn how to fully benefit from the platform.",
      ],
      benefit: "Quickly learn how to navigate and use the platform effectively.",
    },
    {
      id: 11,
      title: "About",
      page: "about",
      body: [
        "Explains the identity, purpose, and goals of the platform.",
      ],
      benefit: "Builds trust and helps the reader understand the mission of Barani Nur.",
    },
  ],
};
