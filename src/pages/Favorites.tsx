import { useApp } from "../hooks/useApp";
import { useAuth } from "../hooks/useAuth";
import { QUOTES, type Quote } from "../data/content";
import QuoteCard from "../components/QuoteCard";
import { Bell, Heart } from "../components/icons";

export default function Favorites({ onShare, onBrowse }: { onShare: (q: Quote) => void; onBrowse: () => void }) {
  const { favorites } = useApp();
  const { user, getStreak, getTotalPages, getTodayReading, getDailyGoal } = useAuth();
  const saved = QUOTES.filter((q) => favorites.includes(q.id));

  if (!user) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-cream mb-6">هەژماری من</h1>
        <p className="text-beige/60 mb-8 max-w-md mx-auto">بۆ بینینی زانیارییەکانی هەژمارەکەت و پاراستنی تۆمارەکانت، تکایە داخل ببە.</p>
        <button onClick={() => window.location.hash = "#auth"} className="rounded-full bg-gold/20 px-8 py-3 text-gold hover:bg-gold/30 transition-all">داخل بوون</button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">هەژماری من</h1>
        <p className="mt-2 text-beige/60">بەخێربێیتەوە {user.name}، هەنگاوەکانت بەرەو نوور بەردەوامن.</p>
      </div>

      <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="کۆى لاپەڕەکان" value={getTotalPages()} icon="📚" />
        <Stat label="ڕۆژانی بەردەوامبوون" value={`${getStreak()} ڕۆژ`} icon="🔥" />
        <Stat label="خوێندنەوەی ئەمڕۆ" value={getTodayReading()} icon="📖" />
        <Stat label="ئامانجی ڕۆژانە" value={getDailyGoal()} icon="🎯" />
      </div>

      <div className="mb-10 rounded-2xl border border-gold/20 bg-charcoal/50 p-6">
        <div className="flex items-center gap-3">
          <Bell className="h-6 w-6 text-gold" />
          <div>
            <h3 className="font-display text-lg text-cream">ڕێکخستنی بیرخستنەوەی ڕۆژانە</h3>
            <p className="text-sm text-beige/60">کاتی ئاگادارکردنەوەی پەیامی نوور دیاری بکە</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input type="time" defaultValue="07:00"
            className="rounded-full border border-gold/25 bg-ink/60 px-4 py-2 text-sm text-cream focus:border-gold focus:outline-none" />
          <button onClick={() => alert("بیرخستنەوەی ڕۆژانە چالاک کرا ✓")}
            className="rounded-full bg-gradient-to-l from-gold to-gold-soft px-6 py-2 text-sm font-semibold text-ink">چالاککردن</button>
        </div>
      </div>

      <h2 className="mb-6 font-display text-2xl text-cream">پەیامە دڵخوازەکانم</h2>
      {saved.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gold/20 py-20 text-center">
          <Heart className="mx-auto h-12 w-12 text-gold/40" />
          <p className="mt-4 text-beige/60">هێشتا هیچ پەیامێکت پاشەکەوت نەکردووە.</p>
          <button onClick={onBrowse} className="mt-4 rounded-full bg-olive-deep px-6 py-2.5 text-sm text-cream hover:bg-olive">گەڕان لە کتێبەکان</button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((q) => <QuoteCard key={q.id} quote={q} onShare={onShare} />)}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: string | number; icon: string }) {
  return (
    <div className="rounded-2xl border border-gold/15 bg-charcoal/50 paper-texture p-6 text-center">
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 font-display text-3xl font-bold text-gold">{value}</div>
      <div className="mt-1 text-sm text-beige/60">{label}</div>
    </div>
  );
}
