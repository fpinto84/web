import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import type { Locale } from '../types';
import { loadTranslations, type TranslationKeys } from '../i18n/locales';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'fidc_preferred_locale';
const LOCALE_COOKIE_NAME = 'fidc_locale';

// Translation cache to avoid reloading
const translationsCache: Partial<Record<Locale, TranslationKeys>> = {};

// Set cookie helper
const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Get cookie helper
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Priority: 1) localStorage, 2) Cookie, 3) Navigator, 4) Default
    const supportedLocales: Locale[] = ['en', 'es', 'ca', 'fr'];

    // Try localStorage first
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && supportedLocales.includes(stored)) {
      return stored;
    }

    // Try cookie
    const cookieLocale = getCookie(LOCALE_COOKIE_NAME) as Locale | null;
    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      return cookieLocale;
    }

    // Fallback to browser language
    const browserLang = navigator.language.split('-')[0];
    if (supportedLocales.includes(browserLang as Locale)) {
      return browserLang as Locale;
    }

    return 'es'; // Default to Spanish
  });

  const [currentTranslations, setCurrentTranslations] = useState<TranslationKeys>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for current locale
  useEffect(() => {
    const loadLocale = async () => {
      setIsLoading(true);

      try {
        // Check cache first
        if (translationsCache[locale]) {
          setCurrentTranslations(translationsCache[locale]!);
          setIsLoading(false);
          return;
        }

        // Load from module
        const translations = await loadTranslations(locale);
        translationsCache[locale] = translations;
        setCurrentTranslations(translations);
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error);
        // Fallback to Spanish on error
        if (locale !== 'es') {
          const fallback = await loadTranslations('es');
          translationsCache.es = fallback;
          setCurrentTranslations(fallback);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadLocale();
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);

    // Persist to localStorage
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);

    // Persist to cookie (for SSR/prerender)
    setCookie(LOCALE_COOKIE_NAME, newLocale);

    // Update html lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  useEffect(() => {
    // Ensure html lang is set on mount
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback((key: string): string => {
    // Return key if still loading
    if (isLoading) {
      return key;
    }

    const translation = currentTranslations[key];

    if (translation === undefined) {
      // Report missing key in development
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${key} for locale: ${locale}`);
      }
      return key;
    }

    return translation;
  }, [currentTranslations, isLoading, locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
