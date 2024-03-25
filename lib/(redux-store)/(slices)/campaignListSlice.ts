import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { ICampaign, ICampaignListState } from "@/interfaces-d";

const initialState: ICampaignListState = {
    campaignList: [],
    isLoading: false,
    error: null,
}

export const getCampaignList = createAsyncThunk("campaignListSlice/getCampaignList", async () => {
    try {
        const response = await axios.get('/api/campaign');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('GET_CAMPAIGN_LIST_FUNCTION_ERROR', error);
    }
})

export const createCampaign = createAsyncThunk("campaignListSlice/createCampaign", async (data: ICampaign) => {
    try {
        const response = await axios.post("/api/campaign", data);
        return response.data;

    } catch (error) {
        console.error('CREATE_CAMPAIGN_FUNCTION_CAMPAIGN_LIST_SLICE_ERROR', error);
    }
})

const campaignListSlice = createSlice({
    name: 'campaignList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getCampaignList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(getCampaignList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.campaignList = action.payload;
            state.error = null;
        });

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

export const { } = campaignListSlice.actions;
export const selectIsLoading = (state: RootState) => state.campaignList.isLoading;
export default campaignListSlice.reducer;