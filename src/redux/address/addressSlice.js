import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getAddresses = createAsyncThunk('addresses/getAddresses', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get("/addresses/lists");
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
});

export const createAddress = createAsyncThunk('addresses/createAddress', async ({accessToken, newAddress}) => {
    try {
        await createApi(accessToken).post('/addresses/create', {...newAddress})
        localStorage.setItem("addresses", JSON.stringify(newAddress))
        notification[NOTIFICATION_TYPES.success]({
            message: "Tạo địa chỉ thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const updateAddress = createAsyncThunk('addresses/updateAddress', async ({accessToken, id, updateAddress}) => {
    try {
        await createApi(accessToken).put(`/addresses/${id}`, {...updateAddress})
        localStorage.setItem("addresses", JSON.stringify(updateAddress))
        notification[NOTIFICATION_TYPES.success]({
            message: "Địa chỉ được cập nhật"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteAddress = createAsyncThunk('addresses/deleteAddress', async ({accessToken, id}) => {
    try {
        await createApi(accessToken).delete(`/addresses/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Xóa địa chỉ thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    addresses: localStorage.getItem("addresses") ? JSON.parse(localStorage.getItem("addresses")) : []
}

const addressSlice = createSlice({
    name: "addresses",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAddresses.fulfilled, (state, action) => {
            state.addresses = action.payload
        })
    }
})

export default addressSlice.reducer;