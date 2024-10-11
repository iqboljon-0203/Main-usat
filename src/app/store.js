import { configureStore } from '@reduxjs/toolkit'
import allNewsReducer from "../features/allNewsSlice";
import getNewsReducer from "../features/newsSlice";
import acceptLanguageReducer from "../features/acceptLanguageSlice";
const store = configureStore({
    reducer: {
        allNews: allNewsReducer,
        getNews: getNewsReducer,
        acceptLanguage:acceptLanguageReducer,
    },
})

export default store
