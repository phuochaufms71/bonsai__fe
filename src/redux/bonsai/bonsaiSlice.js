import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getBonsais = createAsyncThunk('bonsais/getBonsais', async () => {
    try {
        const { data } = await createApi().get('/bonsais/admin-bonsai/lists');
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const getBonsaiDetail = createAsyncThunk('bonsais/getBonsaiDetail', async ({accessToken, id}) => {
    try {
        const { data } = await createApi(accessToken).get(`/bonsais/shopping/${id}`)
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const createBonsai = createAsyncThunk('bonsais/createBonsai', async ({newBonsai}) => {
    try {
        await createApi().post('/bonsais/admin-bonsai/create', {...newBonsai})
        notification[NOTIFICATION_TYPES.success]({
            message: "Tạo bonsai thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const updateBonsai = createAsyncThunk('bonsais/updateBonsai', async ({id, updateData}) => {
    try {
        await createApi().put(`/bonsais/admin-bonsai/lists/${id}`, {...updateData})
        notification[NOTIFICATION_TYPES.success]({
            message: "Chỉnh sửa bonsai thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteBonsai = createAsyncThunk('bonsais/deleteBonsai', async ({id}) => {
    try {
        await createApi().delete(`/bonsais/admin-bonsai/lists/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Xóa bonsai thành công"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    bonsais: [],
    bonsai: {}
}

const bonsaiSlice = createSlice({
    name: 'bonsai',
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.bonsai = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBonsais.fulfilled, (state, action) => {
            state.bonsais = action.payload
        })

        builder.addCase(getBonsaiDetail.fulfilled, (state, action) => {
            state.bonsai = action.payload
        })
    }
})

export const getBonsaisFromStore = state => state.bonsai.bonsais;
export const getBonsaiFromStore = state => state.bonsai.bonsai;

export default bonsaiSlice.reducer;

