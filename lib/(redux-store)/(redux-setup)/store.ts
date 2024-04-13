/*This code sets up the Redux store with the reducers from the specified slices, 
allowing state management across the application */

import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../(slices)/userSlice'
import campaignListSlice from '../(slices)/campaignListSlice'
import campaignSlice from '../(slices)/campaign'

export const store = configureStore({
    reducer: {
        users: userSlice,
        campaignList: campaignListSlice,
        campaign: campaignSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch