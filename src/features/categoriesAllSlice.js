import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const secretKey=import.meta.env.VITE_SECRET_KEY;

// GET so'rovini createAsyncThunk bilan yaratamiz
export const fetchAllCategories = createAsyncThunk(
    'data/fetchData',
    async ({language }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${apiUrl}/categories/all/`, {
                headers: {
                    'X-Secret': secretKey,
                    'Accept-Language': language,
                },
            })
            return response.data // So'rov muvaffaqiyatli bo'lsa, javob qaytariladi
        } catch (error) {
            // Xato bo'lsa, rejectWithValue orqali xato holatni qaytaramiz
            return rejectWithValue(error.response.data)
        }
    }
)

// slice yaratamiz
const dataCategoriesSlice = createSlice({
    name: 'data',
    initialState: {
        data: JSON.parse(localStorage.getItem('categoriesData'))||null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategories.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                localStorage.setItem('categoriesData', JSON.stringify(state.data));
            })
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Something went wrong'
            })
    },
})

export default dataCategoriesSlice.reducer
