import { createContext, createElement, useContext, useEffect, useState } from 'react';
import { locales, defaultLocale } from '../locales';

const STORAGE_KEY = 'lang';

// A saved choice wins, then the browser language if we have it, otherwise Dutch.
function detectLocale() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && locales[saved]) return saved;
    } catch { /* storage unavailable */ }

    const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const browserLang of browserLangs) {
        const code = browserLang?.toLowerCase().split('-')[0];
        if (code && locales[code]) return code;
    }
    return defaultLocale;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(detectLocale);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = (next) => {
        if (!locales[next]) return;
        setLangState(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
    };

    const value = { t: locales[lang].messages, lang, setLang, locales };
    return createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>');
    return context;
}
