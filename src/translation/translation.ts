import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./languages/en.json";
import arTranslation from "./languages/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: "en", // Set the default language
  fallbackLng: "en", // Set the fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
