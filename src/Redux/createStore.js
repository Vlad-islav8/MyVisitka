import { configureStore } from "@reduxjs/toolkit";
import AdminReducer  from './AdminReducer'  
import initReducer from './initReducer'
const rootReducer = {
    admin: AdminReducer,
    init: initReducer   
}

const store = configureStore({
    reducer: rootReducer
})

if (process.env.NODE_ENV === 'development') {
    window.store = store;
}

export default store