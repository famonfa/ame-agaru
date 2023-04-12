import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    status: 'idle',
    orders:[],
    error: null
}


export const createOrder = createAsyncThunk('order/createOrder', async (OrderData) => {
    const response = await axios
        .post('http://localhost:3001/order/', OrderData);
    return response.data;
})

export const getOrders = createAsyncThunk('order/getOrders',async (user) => {
    const response = await axios 
    .get(`http://localhost:3001/order/${user}`)
    return response.data
} )

export const OrderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state)=> {
            state.status = 'loading'
        })
        builder.addCase(createOrder.fulfilled, (state)=> {
            state.status = 'succeeded'
        })
        builder.addCase(createOrder.rejected, (state, action)=> {
            state.status='failed',
            state.error = action.error.message
        })
        builder.addCase(getOrders.pending, (state)=> {
            state.status = 'loading'
        })
        builder.addCase(getOrders.fulfilled, (state, action)=> {
            state.status = 'succeeded'
            state.orders = action.payload
        })
        builder.addCase(getOrders.rejected, (state, action)=> {
            state.status='failed',
            state.orders=[]
            state.error = action.error.message
        })
    }
})

export default OrderSlice.reducer