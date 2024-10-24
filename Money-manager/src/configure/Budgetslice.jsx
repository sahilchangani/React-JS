import { createSlice } from "@reduxjs/toolkit";
import { depositMoney } from "./Expenseslice";

export const money = createSlice({
    name: "money",
    initialState: {
        amount: 0,
    },
    reducers: {
        addMoney(state, action) {
            console.log(action.payload);
            state.amount += Number(action.payload);
        }
    },
    
    extraReducers: (builder) => {
        builder.addCase(depositMoney, (state, action) => {
            state.amount -= action.payload.debit; 
        });
    }
});

export const { addMoney } = money.actions;
export default money.reducer;