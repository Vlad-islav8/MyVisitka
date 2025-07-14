import { createSelector } from "@reduxjs/toolkit"

export const getAdminData = (state) => {
    return state.admin
}

export const getContacts = createSelector(getAdminData, (admin) => {
    return admin.contactsLink
})

export const getActiveContacts = createSelector(getAdminData, (admin) => {
    return admin.activeContactsLink
})

export const getMousePosition = createSelector(getAdminData, (admin) => {
    return admin.cursorPosition
})
export const getcontactsModal = createSelector(getAdminData, (admin) => {
    return admin.contactsModal
})

export const getTechnologies = createSelector(getAdminData, (admin) => {
    return admin.technologies
})
export const getPortfolio = createSelector(getAdminData, (admin) => {
    return admin.portfolio
})


