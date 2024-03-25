import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { ICampaignState } from "@/interfaces-d";

const initialState: ICampaignState = {
    campaign: {},
    isLoading: false,
    error: null,
}

export const getCampaign = createAsyncThunk('campaignSlice/getCampaign', async (campaignId?: string) => {
    try {
        const request = await axios.get(`/api/campaign/${campaignId}`);
        const data = await request.data();
        return data
    } catch (error) {

    }
})

const campaignSlice = createSlice({
    name: 'campaign',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCampaign.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(getCampaign.fulfilled, (state, action) => {
            state.isLoading = false;
            state.campaign = action.payload.items
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