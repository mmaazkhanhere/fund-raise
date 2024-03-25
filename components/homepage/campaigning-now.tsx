"use client"

import React, { useEffect } from 'react'
import CampaignCard from '../campaign-card'
import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks'
import { getCampaignList } from '@/lib/(redux-store)/(slices)/campaignListSlice'
import LoadingSkeleton from '../loading-skeleton'

type Props = {}

const CampaigningNow = (props: Props) => {

    const dispatch = useAppDispatch();
    const campaignList = useAppSelector((state) => state.campaignList.campaignList);
    const loadingState = useAppSelector((state) => state.campaignList.isLoading);

    useEffect(() => {
        dispatch(getCampaignList());
    }, [dispatch]);

    if (loadingState || campaignList.length == 0) {
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
                    campaignList.map(campaign => (
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