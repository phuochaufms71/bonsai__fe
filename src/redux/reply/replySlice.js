import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getReply = createAsyncThunk('reply/getReply', async ({ accessToken, commentId }) => {
    try {
        const { data } = await createApi(accessToken).get(`/reply/${commentId}`);
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
});

export const createReply = createAsyncThunk('reply/createReply', async ({accessToken, newReply}) => {
    try {
        await createApi(accessToken).post('/reply/create', { ...newReply})
        localStorage.setItem("reply", JSON.stringify(newReply))
        notification[NOTIFICATION_TYPES.success]({
            message: "Đã trả lời"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const updateReply = createAsyncThunk('reply/updateReply', async ({accessToken, id, updateReply}) => {
    try {
        await createApi(accessToken).put(`/reply/${id}`, {...updateReply})
        localStorage.setItem("reply", JSON.stringify(updateReply))
        notification[NOTIFICATION_TYPES.success]({
            message: "Trả lời được cập nhật"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteReply = createAsyncThunk('reply/deleteReply', async ({accessToken, id}) => {
    try {
        await createApi(accessToken).delete(`/reply/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Xóa trả lời thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    reply: localStorage.getItem("reply") ? JSON.parse(localStorage.getItem("reply")) : [],
}

const replySlice = createSlice({
    name: "reply",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getReply.fulfilled, (state, action) => {
            state.reply = action.payload
        })
    }
})

export default replySlice.reducer;