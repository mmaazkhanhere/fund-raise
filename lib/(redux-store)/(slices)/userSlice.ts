import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { IUserState } from "@/interfaces-d";

const initialState: IUserState = {
    userData: {},
    isLoading: false,
    error: null
}

export const getCurrentUser = createAsyncThunk('userSlice/getCurrentUser', async (userId?: string) => {
    try {
        const request = await axios.get(`/api/users/${userId}`);
        const data = await request.data;
        return data
    } catch (error) {
        console.error(`GET_CURRENT_USER_USER_SLICE_ERROR`)
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userData = action.payload.items;
            state.error = null;
        });

        builder.addCase(getCurrentUser.rejected, (state) => {
            state.isLoading = false;
            state.error = 'GET_CURRENT_USER_USER_SLICE_REDUCER_ERROR';
        });
    }
})

export const { } = userSlice.actions;
export const selectIsLoading = (state: RootState) => state.users.isLoading;
export default userSlice.reducer;