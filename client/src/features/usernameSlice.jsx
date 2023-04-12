import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading:false,
    username: [],
    error: ''
}

export const fetchUsername = createAsyncThunk('user/fetchUsername', async () => {
    const response = await axios
        .get('http://localhost:3001/user/auth',{
        headers: {
            accessToken:  sessionStorage.getItem("accessToken")
          }})
    return response.data;
})

export const usernameSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsername.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(fetchUsername.fulfilled, (state, action)=> {
            state.loading = false
            state.username = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsername.rejected, (state, action)=> {
            state.loading = false
            state.username = []
            state.error = action.error.message
        })
    }
})

export default usernameSlice.reducer