import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const secretKey = import.meta.env.VITE_SECRET_KEY
const apiUrl = import.meta.env.VITE_API_BASE_URL;

// GET so‘rov uchun createAsyncThunk funksiyasi
export const fetchCategory = createAsyncThunk(
    'news/fetchNews',
    async ({ slug,language }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${apiUrl}/categories/${slug}/`,
                {
                    headers: {
                        'Accept-Language': language, // tilni yuborish
                        'X-Secret': secretKey, // maxfiy kalitni yuborish
                    },
                }
            )
            return response.data
        } catch (error) {
            // Xatolikni qaytarish
            return rejectWithValue(error.response?.data || 'Xatolik yuz berdi')
        }
    }
)

// news slice
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryItem: null, // yangilik ma'lumotlarini saqlash
        loading: false, // yuklanish holati
        error: null, // xatolik holati
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false
                state.categoryItem = action.payload // muvaffaqiyatli yuklanish
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload // xatolikni qayd qilish
            })
    },
})

export default categorySlice.reducer
