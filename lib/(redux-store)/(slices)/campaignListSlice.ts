import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { ICampaign, ICampaignListState } from "@/interfaces-d";

const initialState: ICampaignListState = {
    campaignList: [],
    isLoading: false,
    error: null,
}

export const createCampaign = createAsyncThunk("camapignListSlice/createCampaign", async (data: ICampaign) => {
    try {
        const response = await axios.post("/api/campaign", data);
        return response.data;

    } catch (error) {
        console.error('CREATE_CAMPAIGN_FUNCTION_CAMPAIGN_LIST_SLICE_ERROR', error);
    }
})

const campaignSlice = createSlice({
    name: 'campaignList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createCampaign.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(createCampaign.fulfilled, (state, action) => {
            state.isLoading = false;
            state.campaignList.push(action.payload);
        });

        builder.addCase(createCampaign.rejected, (state) => {
            state.isLoading = false;
            state.error = 'CREATE_CAMPAIGN_REJECTED_FUNCTION_ERROR';
        })
    }
})

export const { } = campaignSlice.actions;
export const selectIsLoading = (state: RootState) => state.campaignList.isLoading;
export default campaignSlice.reducer;