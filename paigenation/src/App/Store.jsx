import { configureStore } from "@reduxjs/toolkit";
import  Slice1  from "../Features/CounterSlice";
export const store = configureStore({
    reducer:{
        pageKey : Slice1
    }
})