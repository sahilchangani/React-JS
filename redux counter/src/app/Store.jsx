import { configureStore } from "@reduxjs/toolkit";
import counter  from "../Slice/Slice";

export const store=configureStore({
    reducer:{
        Counterkey:counter

    }
})