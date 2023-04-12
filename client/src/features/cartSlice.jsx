import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    status: 'idle',
    error: null
}


export const createCart = createAsyncThunk('cart/createCart', async (cartData) => {
    const response = await axios
        .post('http://localhost:3001/cart/add', cartData);
    return response.data;
})


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createCart.pending, (state)=> {
            state.status = 'loading'
        })
        builder.addCase(createCart.fulfilled, (state)=> {
            state.status = 'succeeded'
        })
        builder.addCase(createCart.rejected, (state, action)=> {
            state.status='failed',
            state.error = action.error.message
        })
    }
})

export default CartSlice.reducer