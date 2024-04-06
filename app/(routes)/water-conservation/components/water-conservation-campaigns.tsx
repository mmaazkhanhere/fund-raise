/*A react component that fetches campaigns related to water conservation education 
niche, displays a loading skeleton while waiting for data, and renders campaign cards once
the data is available. Each campaign card displays information about a specific
campaign belonging to that niche*/

"use client"

import React, { useEffect } from 'react'

import CampaignCard from '@/components/campaign-card';
import LoadingSkeleton from '@/components/loading-skeleton';

import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks'
import { getNicheSpecificCampaign } from '@/lib/(redux-store)/(slices)/campaignListSlice';

type Props = {}

const WaterConservationCampaigns = (props: Props) => {

    const dispatch = useAppDispatch(); /*Redux hook to dispatch action to Redux
    store that changes state of the Redux store */

    const campaignList = useAppSelector((state) => state.campaignList.campaignList);
    /*Extract list of campaigns from Redux store */

    const loadingState = useAppSelector((state) => state.campaignList.isLoading);

    useEffect(() => {
        /*dispatch the action to get campaigns specific to water conservation niche */
        dispatch(getNicheSpecificCampaign('Water Conservation'));
    }, [dispatch]);


    if (loadingState || campaignList?.length == 0) {

        /*Display a loading skeleton while in loading state or data being fetched
        but not completed */

        return (
            <section
                className='max-w-7xl mx-auto w-full flex flex-col items-start px-4'
            >
                <h2 className='uppercase text-3xl font-bold mb-16'>
                    Campaigning Now
                </h2>
                <LoadingSkeleton />
            </section>
        )
    }

    return (
        <section
            className='max-w-7xl mx-auto w-full flex flex-col items-start px-4'
        >
            <h2 className='uppercase text-3xl font-bold'>
                Campaigning Now
            </h2>

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

export default WaterConservationCampaigns