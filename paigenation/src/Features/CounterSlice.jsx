import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchApi = createAsyncThunk("api",async ()=>{
    let response = await axios.get('https://fakestoreapi.com/products')
    let res = response.data
    return res
 })

export const Slice1 = createSlice({
    name: "Slice1",
    initialState : { data:[],loading:true},
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled , (state,action)=>{
            state.loading = false
            state.data = action.payload
        })


    }
    
})

export default Slice1.reducer