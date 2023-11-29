import i18next from "i18next";
import language_dk from "./dk/language.json";
import language_en from "./en/language.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      language: language_en,
    },
    dk: {
      language: language_dk,
    },
  },
});
