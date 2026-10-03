import { useState } from "react";
import { LANGS, useI18n } from "../i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = LANGS.find(l => l.code === lang) || LANGS[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-[11px] font-semibold text-gold hover:bg-gold/10 transition-all"
      >
        <span>{currentLang.label}</span>
        <svg className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-[120px] overflow-hidden rounded-xl border border-gold/20 bg-ink shadow-2xl z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center px-4 py-2 text-right text-[11px] transition-colors ${
                lang === l.code ? "bg-gold/20 text-gold" : "text-beige/60 hover:bg-gold/5 hover:text-cream"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}