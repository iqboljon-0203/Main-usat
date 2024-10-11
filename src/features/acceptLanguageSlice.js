import { createSlice } from '@reduxjs/toolkit'

// Dastlabki til qiymatini tizim tiliga yoki boshqa qiymatga o'rnatish
const initialState = {
    language: localStorage.getItem('i18nextLng'), // Brauzer tilini olish
}

const acceptLanguageSlice = createSlice({
    name: 'acceptLanguage',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload // Tilni yangilash
        },
    },
})

// Ekspor qilinadigan actions va reducer
export const { setLanguage } = acceptLanguageSlice.actions
export default acceptLanguageSlice.reducer
