import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payments: localStorage.getItem("payments") ? JSON.parse(localStorage.getItem("payments")) : []
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addPayment: (state, action) => {
            state.payments.push(action.payload)
            localStorage.setItem("payments", JSON.stringify(state.payments))
        }
    }
})

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;