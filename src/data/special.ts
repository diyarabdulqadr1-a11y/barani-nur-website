// دەقە تايبەتەکان لە دەرەوەی نۆ بەرگەکە:
// - پەیامی ئیخلاص (هەموو هەینیەک)
// - بەشی دوعا: تەسبیحاتی نوێژ و جوشن الکبیر

export const IKHLAS = {
  fileId: "1yE6VfJZyof6RJX2iOmJxZYFr3CxfPPTR",
  title: "پەیامی ئیخلاص",
  bismillah: "بسم اللە الرحمن الرحیم",
  note: "پێویستە ئەم پەیامە هەموو هەینیەک بخوێنرێتەوە.",
};

export interface Dua {
  id: string;
  fileId: string;
  title: string;
  subtitle: string;
  desc: string;
}

export const DUAS: Dua[] = [
  {
    id: "tasbihat",
    fileId: "1u4ajNcGjGAUk87sMip1bXpas1rOivoOu",
    title: "تەسبیحاتی نوێژ",
    subtitle: "ذکر و تەسبیحی دوای نوێژەکان",
    desc: "کۆکراوەی تەواوی تەسبیحات و ذکرەکانی دوای هەر پێنج نوێژ، بەپێی پەیامەکانی نوور.",
  },
  {
    id: "joshan",
    fileId: "16gB6EZ8iVhCqQ38gvaC4Nf1R1PRyxSy3",
    title: "جوشن الکبیر",
    subtitle: "دوعای ناودار لە حەزرەتی پێغەمبەر ﷺ",
    desc: "دوعای جوشن الکبیر، کۆکراوەی ١٠٠١ ناوی پیرۆزی خوای گەورە، بە یەک دوعای گەورە.",
  },
];

// لینکی فۆڵدەری دوعاکان لە گووگڵ درایڤ
export const DUA_FOLDER = "https://drive.google.com/drive/folders/1V9rGWBppD8WObbWaQW4OSmGH2EsT-7C_";

// لینکە سۆشیال میدیاکان
export const SOCIAL = {
  telegram: "https://t.me/baraninur",
  instagram: "https://www.instagram.com/baraninur/",
  facebook: "https://www.facebook.com/profile.php?id=100093978197539",
  tiktok: "https://www.tiktok.com/@baraninur",
};

export const CONTACT_EMAIL = "baraninur1@gmail.com";
