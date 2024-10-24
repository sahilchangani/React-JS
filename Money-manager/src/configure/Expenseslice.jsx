import { createSlice } from "@reduxjs/toolkit";

export const depmon = createSlice({
    name: "depmon",
    initialState: {
        depositMoney: []
    },
    
    reducers: {
        depositMoney: (state, action) => {
            console.log(action.payload);
            state.depositMoney.push(action.payload);

        }
    }

});

export const { depositMoney } = depmon.actions;
export default depmon.reducer;