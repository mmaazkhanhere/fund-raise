import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../(slices)/userSlice'
import campaignListSlice from '../(slices)/campaignListSlice'

export const store = configureStore({
    reducer: {
        users: userSlice,
        campaignList: campaignListSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch