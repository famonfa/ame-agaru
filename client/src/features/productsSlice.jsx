import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading:false,
    products: [],
    error: ''
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const response = await axios
        .get('http://localhost:3001/products');
    return response.data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=> {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action)=> {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer