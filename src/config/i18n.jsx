
import i18 from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost = import.meta.env.MODE === "dev" ? "http://localhost:3000" : "https://jsusito.github.io/restaurant-web-multilanguage";

i18
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .init(
        {
            
            backend: {
                loadPath: `${getCurrentHost}/locales/{{lng}}/{{ns}}.json`,
                fallbackLng: "en" 
            }})
