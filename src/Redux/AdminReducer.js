import { createSlice } from "@reduxjs/toolkit";
import github from '../Images/github.svg';
import vk from "./../Images/vk.svg";
import telefon from '../Images/telefon.svg';
import telegram from '../Images/telegram.svg';
import gmail from '../Images/gmail.svg';
import { colorSetter } from "../Utils/ColorUtils";

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
        mainWhite: "#f5f5f5",
        mainGrey: "#202020",
        mainGreen: "#21d13f",
        mainPurple: "#21d13f",
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
        }
    }
})

export const { setNewColor, setMousePosition, setDisplayCurrent } = AdminReducer.actions

export default AdminReducer.reducer