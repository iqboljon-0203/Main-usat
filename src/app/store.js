import { configureStore } from '@reduxjs/toolkit'
import allNewsReducer from "../features/allNewsSlice";
import getNewsReducer from "../features/newsSlice";
import acceptLanguageReducer from "../features/acceptLanguageSlice";
import allCategoriesReducer from "../features/categoriesAllSlice";
import categoryReducer from "../features/categorySlice";
const store = configureStore({
    reducer: {
        allNews: allNewsReducer,
        getNews: getNewsReducer,
        acceptLanguage:acceptLanguageReducer,
        allCategories: allCategoriesReducer,
        category: categoryReducer,
    },
})

export default store
