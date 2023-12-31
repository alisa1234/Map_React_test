import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    map: 'Map',
                    table: 'Table',
                    langEn: 'English',
                    name: 'Name',
                    lat: 'Latitude',
                    long: 'Longitude',
                    add: 'Add'
                }
            },
            ukr: {
                translations: {
                    map: 'Мапа',
                    table: 'Таблиця',
                    langEn: 'Українська',
                    name: 'Назва',
                    lat: 'Широта',
                    long: 'Довгота',
                    add: 'Додати'
                }
            }
        },
        fallbackLng: "ukr",
        debug: true,

        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;