import { createSlice } from "@reduxjs/toolkit";

export const counter=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        add:(state,action)=>{
            state.count+=1
        },
        minus:(state,action)=>{
            state.count-=1
        }
    }
})

export const{add,minus}=counter.actions
export default counter.reducer