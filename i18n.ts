import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json'; // Your default language file
import fr from './locales/fr.json'; // Add more languages as needed
import es from './locales/es.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // RNLocalize.getLocales()[0].languageCode, // Set the initial language
    fallbackLng: 'en', // Fallback language if a translation key is missing
    debug: false, // Enable logging for debugging (set to false in production)
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
