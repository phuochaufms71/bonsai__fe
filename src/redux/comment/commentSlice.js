import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getComments = createAsyncThunk('comment/getComments', async ({ accessToken, bonsaiId }) => {
    try {
        const { data } = await createApi(accessToken).get(`/comment/${bonsaiId}`);
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
});

export const createComment = createAsyncThunk('comment/createComment', async ({accessToken, newComment}) => {
    try {
        await createApi(accessToken).post('/comment/create', { ...newComment})
        localStorage.setItem("comment", JSON.stringify(newComment))
        notification[NOTIFICATION_TYPES.success]({
            message: "Đăng bình luận thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const updateComment = createAsyncThunk('comment/updateComment', async ({accessToken, id, updateComment}) => {
    try {
        await createApi(accessToken).put(`/comment/${id}`, {...updateComment})
        localStorage.setItem("comment", JSON.stringify(updateComment))
        notification[NOTIFICATION_TYPES.success]({
            message: "Bình luận được cập nhật"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteComment = createAsyncThunk('comment/deleteComment', async ({accessToken, id}) => {
    try {
        await createApi(accessToken).delete(`/comment/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Xóa bình luận thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    comments: localStorage.getItem("comment") ? JSON.parse(localStorage.getItem("comment")) : [],
}

const commentSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.comments = action.payload
        })
    }
})

export default commentSlice.reducer;