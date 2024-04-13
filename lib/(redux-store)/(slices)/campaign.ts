/*A redux slice that facilitates fetching data for an individual campaign 
asynchronously from the server. It manages the loading state, errors associated
with this operation and provides a selector to access the loading state from
the Redux store */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { ICampaignState } from "@/interfaces-d";


//initial state of the redux store
const initialState: ICampaignState = {
    campaign: {},
    isLoading: false,
    error: null,
}

/*an async thunk action creator that fetches data for a specific campaign using
the provided campaignId parameter from the server */
export const getCampaign = createAsyncThunk('campaignSlice/getCampaign', async (campaignId?: string) => {
    try {
        const request = await axios.get(`/api/campaign/${campaignId}`);
        return request.data;
    } catch (error) {
        console.error('GET_CAMPAIGN_REDUX_STORE_FUNCTION_ERROR', error);
    }
})



const campaignSlice = createSlice({
    name: 'campaign', //name of the slice
    initialState, //initial state of the slice
    reducers: {},

    //manages actions outside the store
    extraReducers: (builder) => {
        builder.addCase(getCampaign.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(getCampaign.fulfilled, (state, action) => {
            state.isLoading = false;
            state.campaign = action.payload;
            state.error = null;
        });

        builder.addCase(getCampaign.rejected, (state) => {
            state.isLoading = false;
            state.error = 'GET_CAMPAIGN_REJECTED_FUNCTION_ERROR';
        })

    }
})

export const { } = campaignSlice.actions;
export const selectIsLoading = (state: RootState) => state.campaign.isLoading;
export default campaignSlice.reducer;