"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

interface LanguageSwitchProps {
  /** Show the [ IDIOMA ] caption next to the switch */
  showLabel?: boolean;
  className?: string;
}

export default function LanguageSwitch({
  showLabel = false,
  className = "",
}: LanguageSwitchProps) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
          {t.header.langLabel}
        </span>
      )}
      <div
        role="group"
        aria-label={t.header.langLabel}
        className="flex items-center border border-bat-border/30 bg-bat-card/40"
      >
        <Globe size={11} className="mx-1.5 text-bat-cyan/50 flex-shrink-0" />
        {LOCALES.map((item) => {
          const active = locale === item.code;
          return (
            <button
              key={item.code}
              onClick={() => setLocale(item.code)}
              aria-pressed={active}
              lang={item.code}
              className={`px-2 py-1 font-mono text-[10px] font-bold tracking-widest transition-colors border-l border-bat-border/30 ${
                active
                  ? "bg-bat-orange text-bat-dark"
                  : "text-white/40 hover:text-bat-cyan hover:bg-bat-cyan/5"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
