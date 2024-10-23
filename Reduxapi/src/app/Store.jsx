import { configureStore } from "@reduxjs/toolkit";
import Api  from "../configure/Apislice";

export const store=configureStore({
    reducer:{
        userkey: Api
        }
})