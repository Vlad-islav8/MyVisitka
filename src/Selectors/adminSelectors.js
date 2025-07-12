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

