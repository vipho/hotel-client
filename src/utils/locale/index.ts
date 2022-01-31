import i18next from 'i18next';

const DEFAULT_LANG = "ru"

export const setLang = (lang: string) => {
    localStorage.setItem("lang", lang)
}

export const getLang = () : string => {
    let lang = localStorage.getItem("lang")
    if (lang === null) {
        lang = DEFAULT_LANG
        setLang(lang)
    }
    return lang
}

export const initLang = () => {
    i18next.init({
        lng: getLang(),
        debug: process.env.NODE_ENV !== "production",
        resources: {
            en: {
                translation: {
                    "key1": "Hello world!"
                }
            },
            ru: {
                translation: {
                    "key1": "Привет мир!"
                }
            },
        }
    })
}

export const t = (key: string) : string => {
    return i18next.t(key)
}