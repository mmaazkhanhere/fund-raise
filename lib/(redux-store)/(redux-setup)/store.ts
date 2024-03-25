import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../(slices)/userSlice'
import campaignListSlice from '../(slices)/campaignListSlice'
import campaignSlice from '../(slices)/campaignSlice'

export const store = configureStore({
    reducer: {
        users: userSlice,
        campaignList: campaignListSlice,
        campaign: campaignSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch