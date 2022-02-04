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
                'project': 'VIPHO.Hotel',
                'homePage': 'Главная',
                'guestsPage': 'Гости',
                'booksPage': 'Брони',
                'settingsPage': 'Настройки',
                'months': ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                'room': 'Номер',
                'timeline': 'Таймлайн',
                'firstName': 'Имя',
                'lastName': 'Фамилия',
                'status': 'Статус',
                'statusLiving': 'Проживает',
                'bookingService': 'Сервис',
                'dates': 'Даты',
                'userNickname': 'Никнейм',
                'userNicknamePlaceholder': 'mynick',
                'userPassword': 'Пароль',
                'userPasswordPlaceholder': '• • •',
                'signIn': 'Войти',
                'toSearch': 'Искать',
                'search': 'Поиск',
                'toBook': 'Забронировать',
                'booking': 'Бронирование',
                'listOfBooks': 'Список броней',
            }
        },
    }
})

export const t = (key: string, ...options: any) : string => {
    return i18next.t(key, ...options)
}