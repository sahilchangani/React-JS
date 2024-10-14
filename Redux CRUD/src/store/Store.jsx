import { configureStore } from "@reduxjs/toolkit";
import student  from "../slice/Slice";

export const store=configureStore({
    reducer:{
        studentkey:student
    }

    
    
})