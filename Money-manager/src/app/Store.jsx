import { configureStore } from "@reduxjs/toolkit";
import  moneyadd  from "../configure/Budgetslice";
import  {depmon}  from "../configure/Expenseslice";

export const store = configureStore({
    reducer:{
        creditKey : moneyadd,
        depositKey : depmon.reducer
    } 
})