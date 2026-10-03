import { useState } from "react";
import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import { getRandomRealQuote } from "../data/quotes";
import { SectionTitle } from "../components/ui";
import { Arrow, Book, Copy } from "../components/icons";
import { kurdishDate } from "../utils/daily";

type ReadingLevel = "before" | "protect" | "zeal" | "service";

function getLevel(pages: number): { level: ReadingLevel; name: string; color: string; desc: string } {
  if (pages >= 20)
    return { level: "service", name: "خزمەت", color: "text-gold", desc: "خوێندنەوەکەت دەبێتە هۆی خزمەت، پێگەیشتن و گەیاندنی پەیامەکانی نوور بە ژیانی خۆت و دەوروبەرت." };
  if (pages >= 15)
    return { level: "zeal", name: "جۆش و خرۆش", color: "text-gold-soft", desc: "خوێندنەوەکەت تەنها پاراستن نییە؛ بەڵکو جۆش و هێزی زیاتر لە دڵدا دەوروژێنێت." };
  if (pages >= 10)
    return { level: "protect", name: "پاراستنی ئیمان و بیروباوەڕ", color: "text-cream", desc: "بە خوێندنەوەی ڕۆژانەی خۆت هەوڵ دەدەیت ئیمان و بیروباوەڕی خۆت بپارێزیت." };
  return { level: "before", name: "پێش ئاستی پاراستن", color: "text-beige/70", desc: "ئەمە دەستپێکردنە، تۆ هێشتا نەگەیشتووەتە ئاستی پاراستنی ڕۆژانە، بەڵام لە ڕێگادایت." };
}

export default function Daily({ onRead }: { onRead: (id: number) => void }) {
  const { navigate } = useApp();
  const { user, saveReading, getTodayReading, getReadingHistory, setDailyGoal, getDailyGoal, getStreak, getTotalPages } = useAuth();
  const realQuote = getRandomRealQuote();

  const [pages, setPages] = useState("");
  const [bookName, setBookName] = useState("");
  const [saved, setSaved] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [goalInput, setGoalInput] = useState(String(getDailyGoal()));

  const todayPages = user ? getTodayReading() : 0;
  const goal = getDailyGoal();
  const level = getLevel(todayPages);
  const remaining = Math.max(0, goal - todayPages);
  const progress = Math.min(100, Math.round((todayPages / goal) * 100));
  const history = user ? getReadingHistory().slice(0, 10) : [];

  const handleSave = () => {
    if (!user) return;
    const n = parseInt(pages);
    if (!n || n <= 0) return;
    saveReading(n, bookName || undefined);
    setPages("");
    setBookName("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleGoalSave = () => {
    const n = parseInt(goalInput);
    if (n && n > 0) setDailyGoal(n);
  };

  const kurdishDays = ["یەکشەممە", "دووشەممە", "سێشەممە", "چوارشەممە", "پێنجشەممە", "هەینی", "شەممە"];
  const kurdishMonths = ["کانوونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"];

  function formatDate(dateStr: string, timeStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    const dayName = kurdishDays[d.getDay()];
    const day = d.getDate();
    const month = kurdishMonths[d.getMonth()];
    return `${dayName}، ${day}ی ${month}، کاتژمێر ${timeStr}`;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* INSPIRATIONAL QUOTE (Now at top) */}
      <section className="mb-10 rounded-3xl border border-gold/20 bg-olive-deep/15 p-8 text-center">
        <p className="font-display text-lg leading-loose text-cream sm:text-xl">
          «هەر کەسێک هەیت ببە.. بەڵام چاو بکەرەوە و بڕوانە و ڕاستى ببینە و ئیمانەکەت ڕزگار بکە، کە کلیلى &quot;بەختەوەریى هەمیشەیى&quot;یە!»
        </p>
        <p className="mt-3 text-sm text-gold/70">— م. سەعیدی نوورسی</p>
      </section>

      {/* REAL QUOTE SECTION (Now below) */}
      <section className="relative overflow-hidden rounded-3xl border-2 border-gold/30 bg-gradient-to-br from-charcoal via-ink to-navy geo-pattern p-8 shadow-2xl sm:p-12">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-transparent via-gold to-transparent" />
        <div className="mb-2 flex items-center justify-center gap-2 text-gold">
          <span>✦</span>
          <h3 className="font-display text-xl font-bold sm:text-2xl">پەیامی ئەمڕۆی نوور</h3>
          <span>✦</span>
        </div>
        <p className="mb-6 text-center text-xs tracking-wide text-beige/50">{kurdishDate()}</p>

        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="font-display text-2xl leading-loose text-cream sm:text-3xl">
            «{realQuote.text}»
          </blockquote>
          
          <div className="mt-8 pt-6 border-t border-gold/10">
            <p className="text-sm text-gold/70 font-medium">
              سەرچاوە: {realQuote.source}
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-gold/5 border border-gold/10">
              <p className="text-xs text-gold/60 tracking-widest uppercase mb-2">ڕوونکردنەوەی پلاتفۆڕم</p>
              <p className="text-sm text-beige/70 leading-relaxed">ئەم پەیامە پیرۆزە جەخت لەسەر بنەماکانی باوەڕ و ڕاستبینی دەکاتەوە، کە چۆن مرۆڤ دەتوانێت لە ڕێگەی ئیمانەوە مانا بە ژیانی خۆی ببەخشێت.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => onRead(realQuote.bookId)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-105 active:scale-95">
            <Book className="h-4 w-4" /> لە کتێبەکەدا بیخوێنەوە
          </button>
          <button onClick={() => { navigator.clipboard?.writeText(realQuote.text); }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-3 text-sm text-cream transition hover:bg-gold/10 active:scale-95">
            <Copy className="h-4 w-4" /> لەبەرگرتنەوە
          </button>
        </div>
      </section>

      {/* DAILY READING TRACKER */}
      <section className="mt-10">
        <SectionTitle kicker="بەردەوامی" title="خوێندنەوەی ڕۆژانە" sub="خوێندنەوەی ڕۆژانەت تۆمار بکە، بەردەوامییەکەت بپارێزە، و هەر ڕۆژ هەنگاوێک بەرەو نوور بنێ." />

        {!user ? (
          <div className="rounded-3xl border border-gold/20 bg-charcoal/50 p-8 text-center paper-texture">
            <Book className="mx-auto h-12 w-12 text-gold/50" />
            <h3 className="mt-4 font-display text-xl font-bold text-cream">بۆ ئەوەی خوێندنەوەی ڕۆژانەت بپارێزرێت</h3>
            <p className="mx-auto mt-3 max-w-md text-beige/70 leading-loose">
              بۆ ئەوەی خوێندنەوەی ڕۆژانەت بپارێزرێت و تۆمارەکانت لەدەست نەچن، تکایە داخل ببە یان هەژمارێکی نوێ دروست بکە.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => navigate("auth")}
                className="rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-110">
                داخل بوون
              </button>
              <button onClick={() => navigate("auth")}
                className="rounded-full border border-gold/30 px-7 py-3 text-sm text-cream transition hover:bg-gold/10">
                دروستکردنی هەژمار
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/20 via-charcoal to-ink p-8 geo-pattern">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Today's Progress */}
                <div>
                  <h3 className="font-display text-lg font-bold text-gold">پێشکەوتنی ئەمڕۆت</h3>
                  <div className="mt-4">
                    <div className="flex items-end justify-between">
                      <span className="text-4xl font-display font-bold text-cream">{todayPages}</span>
                      <span className="text-sm text-beige/60">لە {goal} لاپەڕە</span>
                    </div>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-ink">
                      <div className="h-full rounded-full bg-gradient-to-l from-gold to-gold-soft transition-all" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="mt-2 text-sm text-beige/60">
                      {remaining > 0 ? `${remaining} لاپەڕەی ماوە تا بگەیتە ئامانجەکەت` : "ئامانجی ئەمڕۆت گەیشتی! ئافەرین!"}
                    </p>
                  </div>
                </div>

                {/* Current Level */}
                <div>
                  <h3 className="font-display text-lg font-bold text-gold">ئاستی خوێندنەوەی ئێستات</h3>
                  <div className="mt-4 rounded-2xl border border-gold/15 bg-ink/40 p-5">
                    <p className={`font-display text-2xl font-bold ${level.color}`}>{level.name}</p>
                    <p className="mt-2 text-sm text-beige/75 leading-loose">{level.desc}</p>
                    <p className="mt-3 text-xs text-gold/60">ئەمڕۆ {todayPages} لاپەڕەت خوێندووەتەوە.</p>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gold/15 pt-6">
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-cream">{getStreak()}</p>
                  <p className="text-xs text-beige/50">ڕۆژانی بەردەوامبوون</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-cream">{getTotalPages()}</p>
                  <p className="text-xs text-beige/50">کۆی لاپەڕە خوێندراوەکان</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-cream">{goal}</p>
                  <p className="text-xs text-beige/50">ئامانجی ڕۆژانە</p>
                </div>
              </div>
            </div>

            {/* Set Goal */}
            <div className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6">
              <h3 className="font-display text-lg font-bold text-cream">ئامانجی ڕۆژانەت دیاری بکە</h3>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {[10, 15, 20].map((n) => (
                  <button key={n} onClick={() => { setGoalInput(String(n)); setDailyGoal(n); }}
                    className={`rounded-full border px-5 py-2 text-sm transition ${goal === n ? "border-gold bg-gold/20 text-gold" : "border-gold/20 text-beige/70 hover:border-gold/50"}`}>
                    {n} لاپەڕە
                  </button>
                ))}
                <input type="number" value={goalInput} onChange={(e) => setGoalInput(e.target.value)}
                  className="w-24 rounded-full border border-gold/20 bg-ink/60 px-4 py-2 text-sm text-cream focus:border-gold focus:outline-none"
                  placeholder="ژمارە" />
                <button onClick={handleGoalSave} className="rounded-full bg-gold/20 px-5 py-2 text-sm text-gold hover:bg-gold/30">پاشەکەوت</button>
              </div>
            </div>

            {/* Log Reading */}
            <div className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6">
              <h3 className="font-display text-lg font-bold text-cream">تۆمارکردنی خوێندنەوە</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-gold/80 mb-1.5">ئەمڕۆ چەند لاپەڕەت خوێندووەتەوە؟</label>
                  <input type="number" value={pages} onChange={(e) => setPages(e.target.value)}
                    className="w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-cream focus:border-gold focus:outline-none"
                    placeholder="ژمارەی لاپەڕە" />
                </div>
                <div>
                  <label className="block text-sm text-gold/80 mb-1.5">ناوی کتێب، ئەگەر دەتەوێت</label>
                  <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)}
                    className="w-full rounded-xl border border-gold/20 bg-ink/60 px-4 py-3 text-cream focus:border-gold focus:outline-none"
                    placeholder="ناوی کتێب" />
                </div>
              </div>
              <button onClick={handleSave}
                className="mt-4 w-full rounded-full bg-gradient-to-l from-gold to-gold-soft py-3 text-sm font-semibold text-ink transition hover:brightness-110 active:scale-95">
                {saved ? "✓ تۆمارکرا" : "تۆمارکردنی خوێندنەوە"}
              </button>
            </div>

            {/* Reading History */}
            <div className="rounded-2xl border border-gold/15 bg-charcoal/50 p-6">
              <button onClick={() => setShowHistory(!showHistory)}
                className="flex w-full items-center justify-between font-display text-lg font-bold text-cream">
                <span>تۆماری خوێندنەوەکانم</span>
                <Arrow className={`h-5 w-5 text-gold transition-transform ${showHistory ? "rotate-90" : "-rotate-90"}`} />
              </button>

              {showHistory && (
                <div className="mt-4 space-y-3">
                  {history.length === 0 ? (
                    <p className="text-center text-sm text-beige/50">هێشتا هیچ تۆمارێک نییە. دەستپێبکە!</p>
                  ) : (
                    history.map((entry) => {
                      const l = getLevel(entry.pages);
                      return (
                        <div key={entry.id} className="flex items-center justify-between rounded-xl border border-gold/10 bg-ink/30 px-4 py-3">
                          <div>
                            <p className="text-sm text-cream">{formatDate(entry.date, entry.time)}</p>
                            {entry.bookName && <p className="text-xs text-beige/50">{entry.bookName}</p>}
                          </div>
                          <div className="text-right">
                            <p className="font-display font-bold text-gold">{entry.pages} لاپەڕە</p>
                            <p className={`text-xs ${l.color}`}>{l.name}</p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            {/* Closing Message */}
            <div className="rounded-3xl border border-gold/20 bg-olive-deep/10 p-8 text-center">
              <p className="text-beige/80 leading-loose">
                خوێندنەوەی ڕۆژانە تەنها زیادکردنی ژمارەی لاپەڕەکان نییە؛ بەڵکو پاراستنی دڵە لە غوباری ڕۆژگار، نوێکردنەوەی ئیمانە، و هەنگاوێکە بەرەو ئەو نوورەی وشەکانی مامۆستا نوورسی بۆی بانگمان دەکەن.
              </p>
              <p className="mt-3 text-sm text-gold/60">هەر لاپەڕەیەک هەنگاوێکە بەرەو نوور.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
