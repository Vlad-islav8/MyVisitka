import { createSlice } from "@reduxjs/toolkit";
import github from '../Images/github.svg';
import vk from "./../Images/vk.svg";
import telefon from '../Images/telefon.svg';
import telegram from '../Images/telegram.svg';
import gmail from '../Images/gmail.svg';
import { colorSetter } from "../Utils/ColorUtils";
import html from '../Images/TechIcons/html.svg'
import css from '../Images/TechIcons/css.svg'
import sass from '../Images/TechIcons/sass.svg'
import js from '../Images/TechIcons/js.svg'
import react from '../Images/TechIcons/react.svg'
import redux from '../Images/TechIcons/redux.svg'
import api from '../Images/TechIcons/api.svg'
import typescript from '../Images/TechIcons/typescript.svg'
import avtoMob from '../Images/PortFolio/avtoMob.png'
import stroika from '../Images/PortFolio/stroika.png'
import furniture from '../Images/PortFolio/furniture.png'
import neon from '../Images/PortFolio/neon.png'
import calculator from '../Images/PortFolio/calculator.png'
import konstruct from '../Images/PortFolio/konstruct.png'
import ujjo from '../Images/PortFolio/ujjo.png'
import todo from '../Images/PortFolio/todo.png'
import Investolazlo from '../Images/PortFolio/Investolazlo.png'
const initialState = {
    contactsLink: [
        { name: "telegram", link: "https://t.me/mylitlezummer", icon: telegram },
        { name: "vk", link: 'https://vk.com/vlados.fedorov', icon: vk },
        { name: "gitHub", link: "https://github.com/Vlad-islav8", icon: github },
        { name: "phoneNumber", link: '9956517257', icon: telefon },
        { name: "gmail", link: 'vladfedevg@gmail.com', icon: gmail },
    ],
    activeContactsLink: ["telegram", "gitHub"],
    colors: {
        mainWhite: "#d8d8d8ff",
        mainGrey: "#1a1a1aff",
        mainGreen: "#21d13f",
        mainPurple: "#5021d1",
        btnGray: "#454a4e",
        btnWhite: "#e0e0f4",
    },
    colorVars: {
        textColor: "#f5f5f5",
        bgColor: "#202020",
        mainGreen: "#21d13f",
        mainPurple: "#5021d1",
        btnBgc: "#454a4e",
        btnText: "e0e0f4 "
    },
    cursorPosition: {
        x: 0,
        y: 0,
    },
    contactsModal: false,
    technologies: [
        {
            name: "html", 
            title: "Язык гипертекстовой разметки", 
            icon: html, 
            info: "HTML это язык разметки для создания веб страниц. Он определяет структуру и содержание сайта, например текст, ссылки, изображения. Без HTML браузеры не смогут правильно отображать информацию. Основа веб разработки."
        },
        {
            name: "css", 
            title: "Стилизация приложения", 
            icon: css, 
            info: "CSS — язык стилей для оформления веб-страниц. Задает внешний вид HTML-элементов: шрифты, цвета, расположение. Отделяет дизайн от структуры. Зачем: Без CSS сайты выглядят как простой текст. Позволяет адаптировать дизайн под разные устройства."
        },
        {
            name: "sass", 
            title: "Препроцессор для удобсвта использолвания Css", 
            icon: sass, 
            info: "Sass это препроцессор CSS. Добавляет функции вроде переменных, вложенных правил и миксинов. Компилируется в обычный CSS. Облегчает написание стилей, делает код чище и удобнее для больших проектов. Позволяет повторно использовать код и упрощает поддержку."
        },
        {
            name: "js", 
            title: "Мой основной язык програмирования", 
            icon: js,
            info: "JavaScript — язык программирования для веб-разработки. Позволяет создавать интерактивные элементы на странице, обрабатывать действия пользователя и динамически изменять контент без перезагрузки страницы. Работает в браузере и на сервере, поддерживает асинхронные операции и взаимодействие с API. Основа современной фронтенд-разработки."
        },
        {
            name: "React", 
            title: "Основная библиотека для разработки интерфейсов", 
            icon: react, 
            info: "React — JavaScript-библиотека для создания пользовательских интерфейсов. Использует компонентный подход и виртуальный DOM для эффективного обновления отображения. Позволяет разрабатывать сложные SPA с высокой производительностью и переиспользуемыми компонентами. Широко применяется в современной фронтенд-разработке."
        },
        {
            name: "Redux", 
            title: "Стейт менеджмент", 
            icon: redux, 
            info: "Redux — библиотека для управления состоянием JavaScript-приложений. Основан на принципах единого источника истины и неизменяемости состояния. Используется для централизованного хранения и предсказуемого обновления данных, особенно в больших приложениях. Часто применяется с React."
        },
        {
            name: "API / REST API", 
            title: "Взаимодействие клиента с сервером", 
            icon: api, 
            info: "API — интерфейс для взаимодействия между программами. Определяет запросы и ответы для обмена данными. REST API — архитектурный стиль API, использующий HTTP-методы. Работает с ресурсами через URL, возвращает данные в JSON/XML. Используется для связи фронтенда с бэкендом, интеграции сервисов и доступа к данным."
        },
        {
            name: "TypeScript", 
            title: "Типизированный Js для крупных проектов", 
            icon: typescript, 
            info: "TypeScript — строго типизированный язык программирования, расширяющий JavaScript. Добавляет статическую проверку типов, интерфейсы и другие возможности. Компилируется в обычный JavaScript. Улучшает поддержку кода, помогает избегать ошибок на этапе разработки. Популярен в крупных проектах."
        },

    ],
    portfolio: [
        {
            name: 'avtoMob', 
            link: 'https://vlad-islav8.github.io/avtoMob/', 
            prev: avtoMob, 
            title: 'Сайт по подбору авто. Выполнен на React + Redux toolkit. Сайт имеет функционал поиска, фильтрации, сортировки авто. Он отлично показывает мои способности работы с Redux'
        },
        {
            name: 'stroika', 
            link: 'https://vlad-islav8.github.io/StroikaMirSite-Myltipage-/', 
            prev: stroika, 
            title: 'Трех страничный лендинг сайта строительных интсрументов, выполнен на чистом React'
        },
        {
            name: 'furniture', 
            link: 'https://vlad-islav8.github.io/furnitureSite-Myltipage-/', 
            prev: furniture, 
            title: 'Трех страничный лендинг сайта мебельной фурнитуры, выполнен на чистом React'
        },
        {
            name: 'neon', 
            link: 'https://vlad-islav8.github.io/Neon-bricks/', 
            prev: neon, 
            title: 'Личный сайт браузерной игры. Разработан в стилистике самой игры. Сайт показыват мои навыки работы с Cookies'
        },
        {
            name: 'calculator', 
            link: 'https://vlad-islav8.github.io/Xiaomi-calculator-app/', 
            prev: calculator, 
            title: 'Точная копия калькулятора с телефонов xiaomi выполнен в 1 файле. Логика написанна на чистом js'
        },
        {
            name: 'konstruct', 
            link: 'https://vlad-islav8.github.io/-Konstruck/#', 
            prev: konstruct, 
            title: 'Одна из первых моих успешных работ. Лендинг выполнен на html, css'
        },
        {
            name: 'ujjo', 
            link: 'https://vlad-islav8.github.io/-ujjo/#', 
            prev: ujjo, 
            title: 'Красивый лендинг ресторана'
        },
        {
            name: 'todo', 
            link: 'https://vlad-islav8.github.io/TODO-LIST/', 
            prev: todo, 
            title: 'TODO Трекер задач. Написан на чистом React. Сохраняет задачи в локальное хранилище брузера. Имеет функционал добавления, удаления, сортировки задач. Готовую можно отметить как выполненную. Так же задачи можно редактировать '
        },
        {
            name: 'Investolazlo', 
            link: 'https://vlad-islav8.github.io/Investolazlo/', 
            prev: Investolazlo, 
            title: 'Лендинг для бизнесса. Струкртура и дизайн сайта отлично показывают мои навыки в работе с grid / flex'
        },
    ]
}

const AdminReducer = createSlice({
    name: 'AdminReducer',
    initialState: initialState,
    reducers: {
        setNewColor(state, action) {
            const CV = state.colorVars
            const SC = state.colors
            if (action.payload === 'dark') {
                CV.bgColor = SC.mainGrey
                CV.textColor = SC.mainWhite
                CV.btnBgc = SC.btnGray
                CV.btnText = SC.btnWhite
                localStorage.setItem("them", 'dark')
            } else if (action.payload === 'light') {
                CV.bgColor = SC.mainWhite
                CV.textColor = SC.mainGrey
                CV.btnBgc = SC.btnWhite
                CV.btnText = SC.btnGray
                localStorage.setItem("them", 'light')
            }
            colorSetter(CV)
        },
        setMousePosition(state, action) {
            state.cursorPosition = action.payload
        },
        setDisplayCurrent(state, action) {
            state.displayCurrent = action.payload
        },
        setContactsModal(state,action) {
            state.contactsModal = action.payload
        }
    }
})

export const { setNewColor, setMousePosition, setDisplayCurrent, setContactsModal } = AdminReducer.actions

export default AdminReducer.reducer