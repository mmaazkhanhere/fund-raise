"use client"

import CampaignCard from '@/components/campaign-card';
import LoadingSkeleton from '@/components/loading-skeleton';
import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks'
import { getNicheSpecificCampaign } from '@/lib/(redux-store)/(slices)/campaignListSlice';
import React, { useEffect } from 'react'

type Props = {}

const ConservationCampaigns = (props: Props) => {

    const dispatch = useAppDispatch();
    const campaignList = useAppSelector((state) => state.campaignList.campaignList);
    const loadingState = useAppSelector((state) => state.campaignList.isLoading);

    useEffect(() => {
        dispatch(getNicheSpecificCampaign('Conservation'));
    }, [dispatch]);


    if (loadingState || campaignList?.length == 0) {
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

    console.log(campaignList)

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

export default ConservationCampaigns