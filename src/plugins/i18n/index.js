import {i18n, languageDetector} from '@services/i18n';
import {initReactI18next} from "react-i18next";

export const init = async ({resources, defaultLang}) => {
    await i18n
        .use(languageDetector)
        .use(initReactI18next)
        .init({
            debug: true,
            fallbackLng: [...Object.keys(resources)],
            supportedLngs: [...Object.keys(resources)],
            resources: {
                ...resources
            },
            keySeparator: false, // we do not use keys in form messages.welcome
            interpolation: {
                escapeValue: false, // react already safes from xss
            },
        })
}

export default {init, i18n}