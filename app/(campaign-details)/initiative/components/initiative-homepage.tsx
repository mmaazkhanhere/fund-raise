"use client"

import LoadingSkeleton from '@/components/loading-skeleton';
import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks';
import { getCampaign } from '@/lib/(redux-store)/(slices)/campaign';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { addDays, differenceInCalendarDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import DataChart from './data-chart';
import PaymentModal from './payment-modal';

type Props = {}

const InitiativeHomepage = (props: Props) => {

    const campaignId = usePathname().split('/').pop();

    const dispatch = useAppDispatch();
    const campaign = useAppSelector((state) => state.campaign.campaign);
    const loadingState = useAppSelector((state) => state.campaign.isLoading);


    useEffect(() => {
        dispatch(getCampaign(campaignId));
    }, [campaignId, dispatch]);


    const [progress, setProgress] = useState<number>(+campaign.fundReceived!);

    if (loadingState || !campaign) {
        return (
            <section
                className='max-w-7xl mx-auto w-full flex flex-col items-start px-4'
            >

                <LoadingSkeleton />
            </section>
        )
    }


    function daysLeft() {
        const endDate = addDays(new Date(campaign.createdAt!), campaign.durationInDays!);
        const daysLeft = differenceInCalendarDays(endDate, new Date());
        return daysLeft;
    }

    return (
        <section
            className='max-w-7xl mx-auto mt-10 px-4 flex flex-col items-start
            gap-10'
        >

            <DataChart
                data={campaign?.fundsReceivedLog!}
            />

            <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                <div className='w-full'>
                    <Image
                        src={campaign.imageUrl!}
                        alt={campaign.title!}
                        width={600}
                        height={600}
                    />
                </div>
                <div
                    className='w-full flex flex-col items-start justify-between '>
                    <div className='flex flex-col items-start'>
                        <span className='font-black uppercase text-[#3a5846] tracking-wider'>
                            {campaign.category}
                        </span>
                        <h1 className='text-2xl lg:text-4xl font-bold mt-6'>
                            {campaign.title}
                        </h1>
                        <p className='lg:text-lg font-normal mt-2'>
                            {campaign.tagline}
                        </p>
                    </div>

                    <div className='flex flex-col items-start w-full mt-5 '>

                        <p className='text-[#0f2417] text-sm font-bold'>
                            <span
                                className='text-4xl lg:text-5xl text-[#81f08f] font-bold'
                            >
                                ${progress}
                            </span> / {campaign.fundGoal} USD raised
                        </p>

                        <div className='flex items-center w-full'>
                            <span className='text-sm text-[#0f2417]/60'>
                                {Number(((progress / campaign.fundGoal!) * 100).toFixed(2))}%
                            </span>
                        </div>
                        <Progress
                            value={Number(((progress / campaign.fundGoal!) * 100).toFixed(2))}
                            className='w-full'
                        />
                        <span className='self-end text-sm text-[#0f2417]/60'>
                            {daysLeft()} days left
                        </span>
                    </div>
                    <PaymentModal />
                </div>
            </div>
            <div className='flex flex-col items-start gap-5'>
                <h3 className='text-2xl uppercase font-bold'>
                    Description
                </h3>
                <p className='text-sm lg:text-base'>
                    {campaign.description}
                </p>
            </div>

        </section>
    )
}

export default InitiativeHomepage