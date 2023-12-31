import { configureStore } from "@reduxjs/toolkit";

// heroes import as default reducer form heroesSlice file
import heroes from "../components/heroesList/heroesSlice";

import filters from "../reducers/filters";

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === "string") {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;