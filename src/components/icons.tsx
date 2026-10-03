interface P { className?: string }
const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Heart = ({ className, filled }: P & { filled?: boolean }) => (
  <svg className={className} viewBox="0 0 24 24" {...s} fill={filled ? "currentColor" : "none"}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
export const Share = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
);
export const Copy = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);
export const Play = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);
export const Sun = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
);
export const Search = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);
export const Download = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
);
export const Menu = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const Close = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const Arrow = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M19 12H5m7-7-7 7 7 7" /></svg>
);
export const Bell = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" /></svg>
);
export const Clock = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Book = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...s}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg>
);

export const TelegramIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M21.8 4.2 18.5 20c-.2 1-.8 1.2-1.6.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6.2 13.5 1.3 12c-1.1-.3-1.1-1.1.2-1.6L20.6 3c.9-.3 1.6.2 1.2 1.2Z" />
  </svg>
);

export const InstagramIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 8.2V6.7c0-.7.5-.9 1-.9h2V2.3C16.6 2.2 15.5 2 14.2 2c-2.8 0-4.7 1.7-4.7 4.8v1.4H6.4V12h3.1v10h3.8V12h3.1l.5-3.8H14Z" />
  </svg>
);

export const TikTokIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16 2c.4 2.3 1.8 3.8 4 4.1v3.4c-1.5 0-2.8-.5-4-1.3v6.7c0 4.2-2.7 6.9-6.6 6.9A6 6 0 0 1 3.2 16c0-3.4 2.6-6 6.3-6 .5 0 .9 0 1.3.1v3.6a3.2 3.2 0 0 0-1.3-.3c-1.6 0-2.7 1-2.7 2.6 0 1.5 1.1 2.6 2.6 2.6 1.7 0 2.7-1 2.7-3V2h3.9Z" />
  </svg>
);

export const WhatsAppIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a9.8 9.8 0 0 0-8.5 14.8L2.3 22l5.3-1.4A9.8 9.8 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-4-1.1l-.3-.2-3.1.8.8-3-.2-.3a7.8 7.8 0 1 1 6.8 3.8Zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.5.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.3-.6-.4Z" />
  </svg>
);

export function SocialIcon({ name, className }: P & { name: "Telegram" | "Instagram" | "Facebook" | "TikTok" | "WhatsApp" }) {
  if (name === "Telegram") return <TelegramIcon className={className} />;
  if (name === "Instagram") return <InstagramIcon className={className} />;
  if (name === "Facebook") return <FacebookIcon className={className} />;
  if (name === "WhatsApp") return <WhatsAppIcon className={className} />;
  return <TikTokIcon className={className} />;
}
