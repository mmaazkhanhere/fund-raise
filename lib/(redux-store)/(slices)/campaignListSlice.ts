/*Redux slice that facilitates fetching campaign data asynchronously from the server,
creating new campaigns, and manages the loading state and errors associated with
these operations. It provides selector to access loading state and errors from the
redux store */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../(redux-setup)/store";
import axios from "axios";
import { ICampaign, ICampaignListState } from "@/interfaces-d";

/*Initial state of the campaign */
const initialState: ICampaignListState = {
    campaignList: [],
    isLoading: false,
    error: null,
}

/*An async thunk that is responsible for fetching list of campaign by making a
GET request to the specified endpoint */
export const getCampaignList = createAsyncThunk("campaignListSlice/getCampaignList", async () => {
    try {
        const response = await axios.get('/api/campaign');
        return response.data;
    } catch (error) {
        console.error('GET_CAMPAIGN_LIST_FUNCTION_ERROR', error);
    }
})

/*An async thunk that is responsible for fetching campaigns of specific niche
by making a GET HTTP request along with niche name passed in the request
url */
export const getNicheSpecificCampaign = createAsyncThunk('campaignSlice/getNicheSpecificCampaign', async (nicheName?: string) => {
    try {
        const request = await axios.get(`/api/campaign/niche/${nicheName}`);
        return request.data;
    } catch (error) {
        console.error('GET_NICHE_SPECIFIC_CAMPAIGN_REDUX_STORE_FUNCTION_ERROR', error);
    }
})

/*An async thunk that makes a POST HTTP request to the specified point along with
the payload to create a new campaign */
export const createCampaign = createAsyncThunk("campaignListSlice/createCampaign", async (data: ICampaign) => {
    try {
        const response = await axios.post("/api/campaign", data);
        return response.data;

    } catch (error) {
        console.error('CREATE_CAMPAIGN_FUNCTION_CAMPAIGN_LIST_SLICE_ERROR', error);
    }
})

const campaignListSlice = createSlice({
    name: 'campaignList', //name of the slice
    initialState, //initial state of the slice
    reducers: {},

    //handles actions dispatched outside of the slice. 
    extraReducers: (builder) => {

        /*Cases for getCampaignList asyncThunk */

        builder.addCase(getCampaignList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(getCampaignList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.campaignList = action.payload;
            state.error = null;
        });

        builder.addCase(getCampaignList.rejected, (state) => {
            state.isLoading = false;
            state.error = 'GET_ALL_CAMPAIGN_REJECTED_FUNCTION_ERROR';
        })


        /*Cases for getNicheSpecificCampaign asyncThunk */

        builder.addCase(getNicheSpecificCampaign.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(getNicheSpecificCampaign.fulfilled, (state, action) => {
            state.isLoading = false;
            state.campaignList = action.payload;
            state.error = null;
        });

        builder.addCase(getNicheSpecificCampaign.rejected, (state) => {
            state.isLoading = false;
            state.error = 'GET_NICHE_CAMPAIGN_REJECTED_FUNCTION_ERROR';
        })


        /*Cases for createCampaign asyncThunk */

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