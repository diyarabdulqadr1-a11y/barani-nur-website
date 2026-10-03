import type { Quote } from "../data/content";
import { Close, SocialIcon } from "./icons";

const SOCIALS = [
  { name: "Facebook", color: "#1877F2" },
  { name: "Telegram", color: "#229ED9" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Instagram", color: "#C13584" },
] as const;

export default function ShareModal({ quote, onClose }: { quote: Quote | null; onClose: () => void }) {
  if (!quote) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md animate-fadeup" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="داخستن"
          className="absolute -top-3 -left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-cream border border-gold/30">
          <Close className="h-5 w-5" />
        </button>

        {/* Generated card preview */}
        <div className="overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-charcoal via-ink to-navy p-8 geo-pattern shadow-2xl">
          <div className="mb-5 flex items-center justify-center gap-2 text-gold">
            <span>✦</span><span className="font-display text-sm tracking-widest">بارانی نوور</span><span>✦</span>
          </div>
          {quote.arabic && <p className="font-quran mb-4 text-center text-lg text-gold-soft">{quote.arabic}</p>}
          <p className="text-center font-display text-xl leading-loose text-cream">«{quote.text}»</p>
          <div className="mt-6 text-center text-xs text-gold/70">
            م. سەعیدی نوورسی<br />{quote.volume} · {quote.page}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-gold/15 bg-charcoal/80 p-4">
          <p className="mb-3 text-center text-sm text-beige/70">هاوبەشی بکە لەگەڵ:</p>
          <div className="flex justify-center gap-3">
            {SOCIALS.map((s) => (
              <button key={s.name} title={s.name}
                onClick={() => alert(`هاوبەشکردن لە ${s.name} (نموونە)`)}
                className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
                style={{ background: s.color }}>
                <SocialIcon name={s.name} className="h-5 w-5" />
              </button>
            ))}
          </div>
          <button onClick={() => alert("کارتی وێنە دابەزێنرا (نموونە)")}
            className="mt-4 w-full rounded-full bg-gradient-to-l from-gold to-gold-soft py-2.5 text-sm font-semibold text-ink">
            ⬇ دابەزاندنی کارتی وێنە
          </button>
        </div>
      </div>
    </div>
  );
}
