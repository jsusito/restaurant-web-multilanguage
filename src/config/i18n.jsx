
import i18 from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .init(
        {
            backend: {
                loadPath: "https://jsusito.github.io/restaurant-web-multilanguage/locales/{{lng}}/{{ns}}.json"
            }})
