import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getBlogs = createAsyncThunk('blogs/getBlogs', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get('/blogs/admin-blog/lists');
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const getBlogDetail = createAsyncThunk('blogs/getBlogDetail', async ({accessToken, id}) => {
    try {
        const { data } = await createApi(accessToken).get(`/blogs/blog/${id}`)
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const createBlog = createAsyncThunk('blogs/createBlog', async ({accessToken, newBlog}) => {
    try {
        await createApi(accessToken).post('/blogs/admin-blog/create', {...newBlog})
        localStorage.setItem("blogs", JSON.stringify(newBlog))
        notification[NOTIFICATION_TYPES.success]({
            message: "Create new blog successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async ({accessToken, id}) => {
    try {
        await createApi(accessToken).delete(`/blogs/admin-blog/lists/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Delete blog successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    blogs: [],
    blog: {}
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        removeSelectedBlog: (state) => {
            state.blog = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(getBlogDetail.fulfilled, (state, action) => {
            state.blog = action.payload
        })
    }
})

// export const { removeSelectedMovie } = foodSlice.actions;
export const getBlogsFromStore = state => state.blog.blogs;
export const getBlogFromStore = state => state.blog.blog;

export default blogSlice.reducer;

