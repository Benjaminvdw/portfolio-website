import nl from './nl';
import en from './en';

// To add a language: create a file next to this one with the same keys as nl.js and register it here.
// `label` is shown in the language switcher.
export const locales = {
    nl: { label: 'NL', name: 'Nederlands', messages: nl },
    en: { label: 'EN', name: 'English', messages: en },
};

export const defaultLocale = 'nl';
