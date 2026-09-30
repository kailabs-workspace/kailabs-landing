import React, { createContext, useContext, useEffect, useState } from "react";
import type { Language, TranslationDictionary } from "./types";
import { en } from "./translations/en";
import { es } from "./translations/es";

const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en,
  es,
};

const STORAGE_KEY = "kai_lang_pref";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "es") {
      return saved;
    }

    const browserLang = navigator.language?.toLowerCase() || "";
    if (browserLang.startsWith("es")) {
      return "es";
    }
  } catch {
    // ignore localStorage errors (e.g. sandboxed iframe or disabled cookies)
  }

  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const initial = getInitialLanguage();
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // ignore
      }
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  const value: I18nContextType = {
    lang,
    setLang,
    toggleLang,
    t: TRANSLATIONS[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      lang: "en",
      setLang: () => {},
      toggleLang: () => {},
      t: en,
    };
  }
  return context;
}
