import { useApp } from "../hooks/useApp";
import Logo from "./Logo";
import { Divider } from "./ui";
import { CONTACT_EMAIL, SOCIAL } from "../data/special";
import { SocialIcon } from "./icons";
import { useI18n } from "../i18n";

const SOCIALS = [
  { name: "Telegram", url: SOCIAL.telegram },
  { name: "Instagram", url: SOCIAL.instagram },
  { name: "Facebook", url: SOCIAL.facebook },
  { name: "TikTok", url: SOCIAL.tiktok },
] as const;

export default function Footer() {
  const { navigate } = useApp();
  const { t } = useI18n();
  return (
    <footer className="mt-20 border-t border-gold/15 bg-ink/80 paper-texture">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Divider />
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Logo size={56} />
              <div>
                <p className="font-display text-xl font-bold text-cream">{t("brand")}</p>
                <p className="text-xs tracking-widest text-gold/70">{t("brandLatin")}</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-beige/70 leading-loose">
              {t("footerText")}
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display text-gold">{t("footerLinks")}</h4>
            <ul className="space-y-2 text-sm text-beige/60">
              {[["daily",t("navDaily")],["books",t("navBooks")],["duas",t("navDuas")],["topics",t("navIndex")],["nursi",t("navNursi")],["guide",t("navGuide")],["audiobooks",t("navAudiobooks")],["media",t("navMedia")],["about",t("navAbout")]].map(([k,l]) => (
                <li key={k}><button onClick={() => navigate(k)} className="hover:text-gold">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-display text-gold">{t("contact")}</h4>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" title={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold">
                  <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 block text-xs text-beige/50 transition-colors hover:text-gold">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-beige/40">
          © {new Date().getFullYear()} بارانی نوور — هەموو مافەکان پارێزراون · بە ڕێزەوە بۆ مەعریفە و ڕووناکی
        </p>
      </div>
    </footer>
  );
}
