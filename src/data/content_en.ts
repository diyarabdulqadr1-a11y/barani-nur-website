import { Topic, Quote, Article, Media, IndexEntry } from "./content";

export const TOPICS_EN: Topic[] = [
  { key: "iman", title: "Faith", icon: "✦", desc: "The foundation of the heart and life's light", count: 142, accent: "#6f8c44" },
  { key: "quran", title: "Holy Quran", icon: "❖", desc: "The source of all knowledge", count: 168, accent: "#c9a44c" },
  { key: "newej", title: "Prayer", icon: "☾", desc: "Daily connection with the Creator", count: 96, accent: "#5b7637" },
  { key: "hiwa", title: "Hope", icon: "✧", desc: "Light in the darkness", count: 88, accent: "#d9bd78" },
  { key: "sebr", title: "Patience", icon: "◈", desc: "Inner strength during hardship", count: 74, accent: "#6b513a" },
  { key: "dlniyayi", title: "Tawakkul", icon: "❉", desc: "Trust in Allah", count: 65, accent: "#6f8c44" },
  { key: "ixlas", title: "Sincerity", icon: "✺", desc: "Purity of intention for Allah", count: 58, accent: "#c9a44c" },
  { key: "merg", title: "Death & Hereafter", icon: "✤", desc: "Reflecting on the end and new beginning", count: 71, accent: "#5b7637" },
  { key: "tobe", title: "Repentance", icon: "❀", desc: "Returning to the light of Allah", count: 49, accent: "#d9bd78" },
  { key: "zanyari", title: "Knowledge", icon: "✦", desc: "The light of the mind and wisdom", count: 103, accent: "#6b513a" },
  { key: "lawan", title: "Youth", icon: "✧", desc: "A special message for the new generation", count: 54, accent: "#6f8c44" },
  { key: "xezan", title: "Marriage", icon: "❖", desc: "The foundation of a healthy society", count: 42, accent: "#c9a44c" },
  { key: "exlaq", title: "Morality", icon: "◈", desc: "The beauty of behavior and ethics", count: 87, accent: "#5b7637" },
  { key: "jiyan", title: "Meaning of Life", icon: "❉", desc: "Why we came and where we are going", count: 79, accent: "#d9bd78" },
];

export const QUOTES_EN: Quote[] = [
  {
    id: 1, text: "«O my sinful soul! Do not despair of the mercy of the All-Compassionate Lord, for no sin is greater than His mercy. Hoping in God's mercy is an act of worship itself.»",
    source: "Risale-i Nur", volume: "The Flashes", bookId: 3, page: "26th Flash, 1st Hope", topic: "hiwa", arabic: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ"
  },
  {
    id: 2, text: "«Belief is both light and power. Yes, the one who attains true belief can challenge the universe. Through the power of belief, they acquire a strength to stand against any disaster.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "23rd Word, 1st Point", topic: "iman", arabic: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا"
  },
  {
    id: 3, text: "«Prayer is the pillar of religion. It is the ascension of the believer. Prayer is the key to all goodness and the key to the Lord's treasury.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "4th Word", topic: "newej", arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ"
  },
  {
    id: 4, text: "«Patience is the key to success. For the one who has patience, even the greatest matters become easy. Allah is with the patient; so be patient, and you will be victorious.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "21st Word", topic: "sebr", arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
  },
  {
    id: 5, text: "«The Holy Quran is the eternal translator of this great book of the universe; it is the spiritual author that reveals the different secrets of the creational verses.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "25th Word", topic: "quran", arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ"
  },
  {
    id: 6, text: "«Death is not non-existence, nor is it destruction; death is the end of a duty and a transition to a world of light. Through death, a believing person is freed from the prison of the body.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "28th Word", topic: "merg", arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ"
  },
  {
    id: 7, text: "«O youth! The period of youth is expansive; because it passes, its pleasures are lost very quickly, leaving behind severe sins and eternal pain.»",
    source: "Risale-i Nur", volume: "The Flashes", bookId: 3, page: "26th Flash, 8th Hope", topic: "lawan", arabic: "وَبَشِّرِ الَّذِينَ آمَنُوا"
  },
  {
    id: 8, text: "«Good character is the result of faith; faith is like a tree whose fruit is beautiful behavior. The deeper a person's faith, the more graceful their behavior.»",
    source: "Risale-i Nur", volume: "Mathnawi al-Nuriye", bookId: 8, page: "Morality Section", topic: "exlaq", arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ"
  },
  {
    id: 9, text: "«Bismillah is the start of all things; Bismillah is a sign of light on everything. That blessed word, which holds great distinction, is a sign of elevation and greatness for any duty that begins with it.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "1st Word", topic: "iman", arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
  },
  {
    id: 10, text: "«This universe is a great book of the Lord; every creature is a word and every atom is a letter that shows the beautiful names of Almighty Allah.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "30th Word", topic: "jiyan", arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ"
  },
  {
    id: 11, text: "«Tawakkul means trusting in Allah after one has done their best with apparent means; so tawakkul is not rejecting action and causes, but entrusting the outcome to the power of Allah.»",
    source: "Risale-i Nur", volume: "The Words", bookId: 1, page: "23rd Word", topic: "dlniyayi", arabic: "وَعَلَى اللَّهِ فَتَوَكَّلُوا"
  },
  {
    id: 12, text: "«Repentance is an always-open door; no matter how great the sin, Allah's mercy is greater. It is never too late to return to Allah.»",
    source: "Risale-i Nur", volume: "The Flashes", bookId: 3, page: "21st Flash", topic: "tobe", arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ"
  },
  {
    id: 13, text: "«Knowledge is a means of discovering meaning, not just gathering information; any knowledge that does not bring a person closer to Allah is a burden on the heart, not a light.»",
    source: "Risale-i Nur", volume: "The Rays", bookId: 4, page: "15th Ray", topic: "zanyari", arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا"
  },
  {
    id: 14, text: "«Sincerity is the soul of all good deeds; without sincerity, the greatest deeds appear as dregs, and with sincerity, the smallest deed becomes a treasure for the hereafter.»",
    source: "Risale-i Nur", volume: "The Flashes", bookId: 3, page: "20th Flash (Sincerity)", topic: "ixlas", arabic: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ"
  },
  {
    id: 15, text: "«This world is a great mosque of Almighty Allah and the surface of the earth is a table of His blessings; so a believer looks at it with an eye of gratitude, not pride.»",
    source: "Risale-i Nur", volume: "The Letters", bookId: 2, page: "28th Letter", topic: "iman", arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ"
  },
  {
    id: 16, text: "«Brotherhood for the sake of the hereafter is sacred; that connection makes hearts one and deepens spirituality. Hatred and enmity for worldly interests are unworthy of the believer's soul.»",
    source: "Risale-i Nur", volume: "The Letters", bookId: 2, page: "22nd Letter", topic: "exlaq", arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ"
  }
];

export const ARTICLES_EN: Article[] = [
  {
    id: 1, topic: "iman", readTime: 7, source: "Biography — 777", title: "The World in a Suffocating Crisis",
    excerpt: "The disease that has spread in the body of Western society and shaken its spiritual pillars is like a terrible plague.",
    body: [
      "The world is going through a suffocating crisis and immense spiritual anxiety.",
      "The disease that has spread in the body of Western society and shaken its spiritual pillars is like a terrible plague.",
      "What are the remedies for the Islamic society to confront this terrifyingly spreading disease? Is it with the rotten and unjust recipes of the 'West', or with the living foundations of 'Faith' which belong to the fortress-like society of Islam?",
      "I see the leaders drowning in heedlessness; the 'fortresses of faith' can never be supported by the decayed pillars of disbelief. That is why all my efforts and struggles are solely through faith, and I have dedicated all my suffering and hard work entirely to the cause of faith.",
      "They do not understand the 'Risale-i Nur' messages, or they do not want to understand. They think I am a religious school teacher and that I am dry and unaware of the material affairs of the world!",
      "In reality, I have worked with pure sciences and all modern philosophies, analyzing their most complex issues, even authoring books on them.",
      "But I do not acknowledge the tricks of logic, nor do I listen to the deceit of philosophy. Rather, the anthem of the essence of society's life, spiritual existence, conscience, and faith is on my lips. I have focused all my preoccupations on the foundation of Tawhid (monotheism) and faith established by the Quran. Be assured that the main pillar of the Islamic society is only this; if it shakes, the society perishes."
    ]
  },
  {
    id: 2, topic: "iman", readTime: 4, source: "The Flashes — 311", title: "O People of Truth!",
    excerpt: "Try to eradicate this terrifying disease (the disease of discord) by acting upon this high and great Quranic principle.",
    body: [
      "O People of Truth!",
      "O people of Reality, Sharia, and Tariqa!",
      "O those who seek truth only for the sake of truth!",
      "Try to eradicate this terrifying disease (the disease of discord) by acting upon this high and great Quranic principle which states: (And when they pass by vain talk, they pass by with dignity)...",
      "Overlook the mistakes of your brothers, forgive their shortcomings, close your eyes to each other's faults, and put aside your internal disputes for now. Because external enemies are attacking you from all sides...",
      "Also, consider saving the people of truth from defeat and humiliation as your most important duty and your responsibility for the hereafter...",
      "Implement within yourselves those hundreds of verses and hadiths that call for brotherhood, love, and mutual assistance."
    ]
  },
  {
    id: 3, topic: "jiyan", readTime: 5, source: "The Letters", title: "O Heedless One!",
    excerpt: "Do you doubt that you are protected from the interference of the One who handed you a pomegranate on a branch?",
    body: [
      "O Heedless One!",
      "Do you doubt that you are protected from the interference of the One who handed you a pomegranate on a branch created for you, and gives you a melon on a vine ripened for you?",
      "It is out of your heedlessness that you think the Creator of the melon is unaware of its eater... and it is your blindness that makes you assume the Maker of the pomegranate is a blind force, unaware of His work, which He accomplishes with that pomegranate and its juiciness for the fruit eaters and for those amazed by this craft, who say: 'Glory be to Allah, who created me in this beautiful form and pattern!'",
      "Also for those who reflect on the softness and delicacy of the pomegranate and say: ﴿So blessed is Allah, the best of creators﴾ (Al-Mu'minun: 14). And for those who ponder the arranged order that proclaims with all its might: ﴿Does He who created not know, while He is the Subtle, the Acquainted?﴾ (Al-Mulk: 14)?",
      "Or do you think—O ignorant one!—that the One who sends all these fruits to eliminate our needs does not see or know us?",
      "Or that the One who subjugates domesticated mammals and other animals for our benefit, placing them in our homes and shelters, does not see us?"
    ]
  },
  {
    id: 4, topic: "iman", readTime: 6, source: "The Words", title: "Know this! You are doing something very wrong",
    excerpt: "Know this! You are doing something very wrong if you attach your heart to something that will not stay with you after the destruction of this world.",
    body: [
      "Know this! You are doing something very wrong if you attach your heart to something that will not stay with you after the destruction of this world, even separating from you when the world falls apart. Because a person does not act wisely if they attach their heart to something perishable!",
      "Let alone that thing which, at the end of the era you live in, will abandon you and turn its back on you! Let alone that thing which will not accompany you on the journey of the intermediate realm (Barzakh)! Let alone that thing which will only come with you to the door of your grave! Let alone a thing that, after a year or two, will leave you completely and forever, leaving its sin on your neck! Let alone a thing that, at the very moment you rejoice in it, leaves you and abandons you!",
      "If you consider yourself smart and aware, do not pay attention to these things and do not worry about them. Let go of all those things that cannot accompany you on the eternal journey, those that perish and vanish under the pressure of worldly changes, the events of Barzakh, and the explosions of the Day of Judgment.",
      "Do you not see that you have a delicate and sensitive side that is never satisfied with anything other than 'forever' and the 'eternal', and it does not look at or submit to anything else? To the point that if the whole world were given to it, that natural need of yours would still not be satisfied and reassured? This side, which demands 'forever' and is fond of 'eternity', is the power of your feelings and delicate aspects. So, obey the commands and demands of these delicate sides, which themselves are obedient and submissive to the commands of their Wise Creator. Yes, obey those sides and thereby save yourself from all sorrows."
    ]
  }
];

export const MEDIA_EN: Media[] = [
  { id: 1, type: "video", title: "Lesson on the Message of Ikhlas", duration: "18:42", desc: "Reading the 20th Flash from Risale-i Nur." },
  { id: 2, type: "audio", title: "Listening to the 10th Word (Resurrection)", duration: "42:15", desc: "Audio reading of the 10th Word." },
  { id: 3, type: "poster", title: "Quote from The Flashes", desc: "Daily poster from Nursi's texts." },
];

export const TOPIC_INDEX_EN: IndexEntry[] = [
  { topic: "The Greatest Name of Allah", refs: [{ book: "The Flashes", section: "30th Flash" }] },
  { topic: "Patience", refs: [{ book: "The Letters", section: "23rd Letter, 4th Question" }, { book: "The Words", section: "21st Word" }] },
  { topic: "Ijtihad", refs: [{ book: "The Words", section: "27th Word" }] },
  { topic: "Sincerity (Ikhlas)", refs: [{ book: "The Flashes", section: "20th Flash" }, { book: "The Flashes", section: "21st Flash" }] },
  { topic: "Inspiration and Revelation", refs: [{ book: "The Letters", section: "19th Letter" }] },
  { topic: "Europe", refs: [{ book: "The Flashes", section: "17th Flash" }] },
  { topic: "Belief in the Prophets", refs: [{ book: "The Words", section: "19th Word" }, { book: "The Rays", section: "7th Ray" }] },
  { topic: "Belief in the Hereafter", refs: [{ book: "The Words", section: "10th Word" }, { book: "The Rays", section: "9th Ray" }] },
  { topic: "Belief in Destiny (Qadar)", refs: [{ book: "The Words", section: "26th Word" }] },
  { topic: "Belief in Angels", refs: [{ book: "The Words", section: "29th Word" }] },
  { topic: "Brotherhood", refs: [{ book: "The Letters", section: "22nd Letter" }] },
  { topic: "Earthquake", refs: [{ book: "The Words", section: "14th Word Appendix" }] },
  { topic: "Oneness of Allah", refs: [{ book: "The Flashes", section: "23rd Flash" }] },
  { topic: "Calamity and Disaster", refs: [{ book: "The Rays", section: "2nd Ray" }] },
  { topic: "Paradise", refs: [{ book: "The Words", section: "28th Word" }] },
  { topic: "Condolence", refs: [{ book: "The Letters", section: "17th Letter" }] },
  { topic: "Modesty", refs: [{ book: "The Flashes", section: "24th Flash" }] },
  { topic: "Elderly People", refs: [{ book: "The Flashes", section: "26th Flash" }] },
  { topic: "Prophethood (Risalat)", refs: [{ book: "The Words", section: "19th Word" }] },
  { topic: "Worship", refs: [{ book: "The Words", section: "3rd Word" }] },
  { topic: "Risale-i Nur", refs: [{ book: "Biography", section: "Isparta Life" }] },
  { topic: "Fear", refs: [{ book: "The Letters", section: "29th Letter" }] },
  { topic: "Power (Qudrah)", refs: [{ book: "The Rays", section: "15th Ray" }] },
  { topic: "Tariqas and Sufism", refs: [{ book: "The Letters", section: "29th Letter" }] },
  { topic: "Post-Prayer Tasbihat", refs: [{ book: "Kastamonu Appendix", section: "Page 193" }] },
  { topic: "Piety (Taqwa)", refs: [{ book: "The Flashes", section: "2nd Flash" }] },
  { topic: "Tawakkul", refs: [{ book: "The Words", section: "23rd Word" }] },
  { topic: "Beauties of Faith", refs: [{ book: "The Words", section: "23rd Word" }] },
  { topic: "Jihad", refs: [{ book: "Emirdag Appendix 1", section: "Page 604" }] },
  { topic: "Envy", refs: [{ book: "The Letters", section: "22nd Letter" }] },
  { topic: "Resurrection (Hashr)", refs: [{ book: "The Words", section: "10th Word" }] },
  { topic: "Dream Interpretation", refs: [{ book: "The Letters", section: "28th Letter" }] },
  { topic: "Justice", refs: [{ book: "The Flashes", section: "30th Flash" }] },
  { topic: "Lying", refs: [{ book: "Signs of Miraculousness", section: "Al-Baqarah" }] },
  { topic: "The World", refs: [{ book: "The Flashes", section: "26th Flash" }] },
  { topic: "Supplication (Dua)", refs: [{ book: "The Letters", section: "24th Letter" }] },
  { topic: "Hell", refs: [{ book: "The Words", section: "28th Word" }] },
  { topic: "Antichrist (Dajjal)", refs: [{ book: "The Rays", section: "5th Ray" }] },
  { topic: "Frugality", refs: [{ book: "The Flashes", section: "19th Flash" }] },
  { topic: "Spirit and Spirituality", refs: [{ book: "The Words", section: "29th Word" }] },
  { topic: "Fasting", refs: [{ book: "The Letters", section: "29th Letter" }] },
  { topic: "Racism", refs: [{ book: "The Letters", section: "26th Letter" }] },
  { topic: "Knowledge", refs: [{ book: "The Rays", section: "15th Ray" }] },
  { topic: "Zakat", refs: [{ book: "The Letters", section: "22nd Letter" }] },
  { topic: "Women", refs: [{ book: "The Flashes", section: "24th Flash" }] },
  { topic: "Life", refs: [{ book: "The Flashes", section: "30th Flash" }] },
  { topic: "Life in the Grave", refs: [{ book: "The Words", section: "13th Word" }] },
  { topic: "Nature", refs: [{ book: "The Flashes", section: "23rd Flash" }] },
  { topic: "Sufyan", refs: [{ book: "The Rays", section: "5th Ray" }] },
  { topic: "Sunnah of the Prophet ﷺ", refs: [{ book: "The Flashes", section: "11th Flash" }] },
  { topic: "Politics", refs: [{ book: "The Rays", section: "11th Ray" }] },
  { topic: "Salawat on the Prophet ﷺ", refs: [{ book: "The Flashes", section: "28th Flash" }] },
  { topic: "Gratitude (Shukr)", refs: [{ book: "The Letters", section: "28th Letter" }] },
  { topic: "Compassion", refs: [{ book: "The Letters", section: "8th Letter" }] },
  { topic: "Satan", refs: [{ book: "The Flashes", section: "13th Flash" }] }
];
