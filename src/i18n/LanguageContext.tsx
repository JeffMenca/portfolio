"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import translations, { type Locale, type Translations } from "./translations";

const STORAGE_KEY = "portfolio_locale";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  // Restore stored preference after mount (avoids hydration mismatch)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "es" || stored === "en") setLocale(stored);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable — preference is session-only */
    }
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const value: LanguageContextType = {
    locale,
    t: translations[locale],
    setLocale,
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
