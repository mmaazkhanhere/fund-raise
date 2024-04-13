/*React component that is responsible for displaying a list of campaigns that
are currently active or being campaigned */

"use client"

import React, { useEffect } from 'react'

import CampaignCard from '../campaign-card'
import LoadingSkeleton from '../loading-skeleton'

import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks'
import { getCampaignList } from '@/lib/(redux-store)/(slices)/campaignListSlice'


type Props = {}

const CampaigningNow = (props: Props) => {

    const dispatch = useAppDispatch();/*Function to pass actions to the Redux
    store for state management */

    const campaignList = useAppSelector((state) => state.campaignList.campaignList);
    /*Get the list of campaign in the database using the Redux hook */

    const loadingState = useAppSelector((state) => state.campaignList.isLoading);
    //loading state of the Redux store

    useEffect(() => {
        dispatch(getCampaignList()); /*Get the list of campaigns when the 
        component is mounted */
    }, [dispatch]);


    /*Display a loading skeleton while the data is being fetched ro when the
    Redux store is in the loading state */
    if (loadingState || campaignList?.length == 0) {
        return (
            <section
                className='max-w-7xl mx-auto w-full flex flex-col items-start px-4'
            >
                {/*Heading */}
                <h2 className='uppercase text-3xl font-bold mb-16'>
                    Campaigning Now
                </h2>

                {/*Loading Skeleton */}
                <LoadingSkeleton />
            </section>
        )
    }

    return (
        <section
            className='max-w-7xl mx-auto w-full flex flex-col items-start px-4'
        >
            {/*Heading */}
            <h2 className='uppercase text-3xl font-bold'>
                Campaigning Now
            </h2>

            {/*Campaign List */}
            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-3 w-full gap-10'>

                {
                    campaignList?.map(campaign => (
                        <CampaignCard
                            key={campaign.id}
                            campaign={campaign}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default CampaigningNow