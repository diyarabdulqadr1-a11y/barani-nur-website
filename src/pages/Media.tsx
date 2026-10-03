import { useState } from "react";
import { SectionTitle } from "../components/ui";
import { Play, Arrow, SocialIcon } from "../components/icons";
import { cn } from "../utils/cn";
import { SOCIAL } from "../data/special";
import { useI18n } from "../i18n";

const TABS = [
  { key: "telegram", label: "تەلیگرام", iconName: "Telegram" },
  { key: "instagram", label: "ئینستاگرام", iconName: "Instagram" },
  { key: "facebook", label: "فەیسبووک", iconName: "Facebook" },
  { key: "tiktok", label: "تیکتۆک", iconName: "TikTok" },
] as const;
type TabKey = typeof TABS[number]["key"];

const SOCIAL_URLS: Record<TabKey, string> = {
  telegram: SOCIAL.telegram,
  instagram: SOCIAL.instagram,
  facebook: SOCIAL.facebook,
  tiktok: SOCIAL.tiktok,
};

export default function Media() {
  const [tab, setTab] = useState<TabKey>("telegram");
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle
        kicker={t("mediaKicker")}
        title={t("mediaTitle")}
        sub="وێنە و دیزاینە فەرمییەکانی بارانی نوور، هاوپێچ بە کەناڵەکانی پڕۆژەوە"
      />

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition-colors",
              tab === t.key
                ? "border-gold bg-gold/20 text-gold"
                : "border-gold/15 text-beige/60 hover:border-gold/40"
            )}
          >
            <SocialIcon name={t.iconName} className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      {tab === "telegram" && <TelegramFeed />}
      {tab !== "telegram" && (
        <ExternalSocial url={SOCIAL_URLS[tab]} name={TABS.find((t) => t.key === tab)!.label} />
      )}
    </div>
  );
}

/* -------------------- تەلیگرام -------------------- */
function TelegramFeed() {
  // تەنها پۆستە وێنەییەکانی کەناڵ. پۆستە تێکستی و ڤیدیۆکان بە ئەنقەست لێرە دانەنراون.
  // ئەم ID ـانە پۆستە دیزاین/وێنەییەکانن و لە پۆستەکانی "Media is too big" جیاکراونەتەوە.
  const imagePosts = [242, 241, 239, 237, 236, 235, 234, 233, 232, 228, 227, 224];
  const channel = "baraninur";

  return (
    <div>
      <div className="mb-6 flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-charcoal/50 p-6 text-center sm:flex-row sm:justify-between sm:text-right">
        <div>
          <p className="font-display text-xl text-cream">کەناڵی فەرمیی بارانی نوور لە تەلیگرام</p>
          <p className="mt-1 text-sm text-beige/60">
            تەنها وێنە و دیزاینە فەرمییەکانی کەناڵ لێرە هاوپێچ کراون — بۆ بینینی هەموو ناوەڕۆکەکان کەناڵەکە بکەرەوە.
          </p>
        </div>
        <a
          href={`https://t.me/${channel}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-105"
        >
          ✈ کەناڵەکە بکەوە
        </a>
      </div>

      {/* گەلەریی تەنها-وێنە بە iframe-ی فەرمیی Telegram */}
      <div className="grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,360px))]">
        {imagePosts.map((id) => (
          <TelegramImagePost key={id} channel={channel} postId={id} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-beige/50">
        بۆ بینینی هەموو ناوەڕۆکەکان،{" "}
        <a href={`https://t.me/${channel}`} target="_blank" rel="noreferrer" className="text-gold hover:underline">
          سەردانی کەناڵەکە بکە لە تەلیگرام
        </a>
      </p>
    </div>
  );
}

function TelegramImagePost({ channel, postId }: { channel: string; postId: number }) {
  // single=1 یارمەتی دەدات ئەگەر پۆستەکە لە ئەلبومێکدا بوو، تەنها وێنەی ئەو پۆستە نیشان بدرێت.
  const src = `https://t.me/${channel}/${postId}?embed=1&single=1&dark=1`;
  return (
    <a
      href={`https://t.me/${channel}/${postId}`}
      target="_blank"
      rel="noreferrer"
      className="group w-full overflow-hidden rounded-2xl border border-gold/15 bg-charcoal/50 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-gold/40"
      title="کردنەوە لە تەلیگرام"
    >
      <iframe
        src={src}
        title={`@${channel}/${postId}`}
        loading="lazy"
        className="pointer-events-none block w-full bg-[#102033]"
        style={{ height: 420, border: 0, colorScheme: "dark" }}
        scrolling="no"
      />
      <div className="flex items-center justify-between border-t border-gold/10 px-4 py-3 text-xs text-beige/60">
        <span>وێنەی کەناڵی بارانی نوور</span>
        <span className="text-gold transition group-hover:translate-x-[-3px]">کردنەوە ↗</span>
      </div>
    </a>
  );
}

/* -------------------- باقی سۆشیال میدیا -------------------- */
function ExternalSocial({ url, name }: { url: string; name: string }) {
  return (
    <div className="rounded-3xl border-2 border-gold/25 bg-gradient-to-br from-olive-deep/30 via-charcoal to-ink p-10 text-center geo-pattern">
      <Play className="mx-auto h-12 w-12 text-gold" />
      <h3 className="mt-4 font-display text-3xl text-cream">کەناڵی {name}</h3>
      <p className="mx-auto mt-3 max-w-md text-beige/70 leading-relaxed">
        دوای کلیک کردن، ڕاستەوخۆ دەچیتە سەر کەناڵی فەرمیی بارانی نوور لە {name} و دەتوانیت هەموو ناوەڕۆکەکان ببینیت.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-soft px-7 py-3 text-sm font-semibold text-ink transition hover:brightness-105"
      >
        کەناڵەکە بکەوە <Arrow className="h-4 w-4" />
      </a>
    </div>
  );
}
