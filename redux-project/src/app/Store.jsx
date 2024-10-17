import { configureStore } from "@reduxjs/toolkit";
import count from "../slice/Slice";

export const store = configureStore({
    reducer: {
        taskKey: count
    }
})