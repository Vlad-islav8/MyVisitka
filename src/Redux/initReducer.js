import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    initialized: false,
    activeTheme: 'dark'
}

const initReducer = createSlice({
    name: 'initReducer',
    initialState: initialState,
    reducers: {
        setAppStatred(state, action) {
            state.initialized = true
            let theme = localStorage.getItem("them")
            state.activeTheme = theme
        },
        setActiveTheme(state, action) {
            state.activeTheme = action.payload
        }
    }
})

export const { setAppStatred, setActiveTheme } = initReducer.actions

export default initReducer.reducer