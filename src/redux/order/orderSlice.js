import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getOrders = createAsyncThunk('orders/getOrders', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get('/orders/lists');
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})


export const createOrder = createAsyncThunk('orders/createOrder', async ({accessToken, newOrder}) => {
    try {
        await createApi(accessToken).post('/orders/create', {...newOrder})
        notification[NOTIFICATION_TYPES.success]({
            message: "Tạo order thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    orders: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload
        })
    }
})

export default orderSlice.reducer;

