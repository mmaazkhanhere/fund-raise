/*Redux slice that allows fetching the user data asynchronously from the server
and manages the loading state and errors associated with the fetch operation. It provides
selectors to access the loading state from the Redux store */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { IUserState } from "@/interfaces-d";

/*defines the initial state for the user slice. It includes different properties including
the loading state, errors faced and user data. */
const initialState: IUserState = {
    userData: {},
    isLoading: false,
    error: null
}

/*An async thunk action that fetches data from the server using an HTTP get request
to the specified api endpoint */
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
    name: 'users', //slice name
    initialState, //initial state of the slice
    reducers: {},

    /*Handles the actions dispatched outside of the users slice. It handles
    the getCurrentUser async thunk here */
    extraReducers: (builder) => {

        /*When the getCurrentUser is in pending state, the state of slice is
        in loading */
        builder.addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        /*When the getCurrentUser is fulfilled, the user data is the payload
        actions */
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