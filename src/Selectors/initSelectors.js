import { createSelector } from "@reduxjs/toolkit"

export const getInit = (state) => {
    return state.init
}

export const getActiveTheme = createSelector([getInit], (init) => {
    return init.activeTheme
})