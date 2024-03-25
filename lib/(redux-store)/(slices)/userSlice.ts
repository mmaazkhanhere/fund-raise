import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { IUserState } from "@/interfaces-d";

const initialState: IUserState = {
    userData: {},
    isLoading: false,
    error: null
}

export const getCurrentUser = createAsyncThunk('userSlice/getCurrentUser', async () => {
    try {
        const request = await axios.get('/api/users');
        const data = await request.data;
        return data
    } catch (error) {
        console.error(`GET_CURRENT_USER_USER_SLICE_ERROR`)
    }
})