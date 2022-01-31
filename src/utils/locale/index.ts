import i18next from 'i18next';

const DEFAULT_LANG = 'ru'

export const setLang = (lang: string) => {
    localStorage.setItem('lang', lang)
}

export const getLang = () : string => {
    let lang = localStorage.getItem('lang')
    if (lang === null) {
        lang = DEFAULT_LANG
        setLang(lang)
    }
    return lang
}

i18next.init({
    lng: getLang(),
    debug: process.env.NODE_ENV !== 'production',
    resources: {
        ru: {
            translation: {
                'hello': 'Hello world!',
                'project': 'HotelMan',
                'home-page': 'Главная',
                'guests-page': 'Гости',
                'settings-page': 'Настройки',
                'months': ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                'room': 'Номер',
            }
        },
    }
})

export const t = (key: string, ...options: any) : string => {
    return i18next.t(key, ...options)
}