"use client"

import LoadingSkeleton from '@/components/loading-skeleton';
import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks';
import { getCampaign } from '@/lib/(redux-store)/(slices)/campaign';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { addDays, differenceInCalendarDays } from 'date-fns';
import DataChart from './data-chart';
import PaymentModal from './payment-modal';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import getStripePromise from '@/lib/stripe';
import { useToast } from '@/components/ui/use-toast'

type Props = {}

const CampaignHomePage = (props: Props) => {

    const campaignId = usePathname().split('/').pop();

    const dispatch = useAppDispatch();
    const campaign = useAppSelector((state) => state.campaign.campaign);
    const loadingState = useAppSelector((state) => state.campaign.isLoading);

    const { toast } = useToast();
    const user = useUser();

    useEffect(() => {
        dispatch(getCampaign(campaignId));
    }, [campaignId, dispatch]);


    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        setProgress(campaign?.fundReceived as number);
    }, [campaign?.fundReceived])

    if (loadingState || !campaign) {
        return (
            <section
                className='max-w-7xl mx-auto w-full flex flex-col items-start 
                justify-center px-4 h-screen gap-16'
            >
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </section>
        )
    }

    const handleWithDrawFund = async () => {
        const stripe = await getStripePromise();
        const fundReceived = campaign.fundReceived;
        console.log(fundReceived)
        const stripeAccountId = campaign.fundsReceiverStripeId;
        console.log(campaign)
        console.log(stripeAccountId)
        try {

            console.log('try block')

            const response = await fetch('/api/stripe-payout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fundReceived, stripeAccountId, campaignId })
            });

            if (response.ok) {
                const data = await response.json();

                console.log(data)

                toast({
                    title: 'Funds Successfully Withdrawn',
                    variant: 'default',
                });
            } else {

                toast({
                    title: 'Activate your Stripe Account',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.log('Error occurred while withdrawing funds:', error);
            toast({
                title: 'Something went wrong',
                variant: 'destructive'
            });
        }

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
                data={campaign?.fundsReceivedLog}
            />

            <div className='grid lg:grid-cols-2 gap-5'>
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
                        <div className='flex items-center gap-x-4'>
                            <span className='font-black uppercase text-[#81f08f] tracking-wider'>
                                {campaign.niche}
                            </span>
                            <span className='font-black uppercase text-[#3a5846] tracking-wider'>
                                {campaign.category}
                            </span>
                        </div>

                        <h1 className='text-2xl lg:text-4xl font-bold mt-6'>
                            {campaign.title}
                        </h1>
                        <p className='lg:text-lg font-normal mt-2'>
                            {campaign.tagline}
                        </p>

                        <p className='mt-6 lg:text-lg'>
                            {campaign.category} by <span className='text-[#3a5846] uppercase text-base font-bold'>
                                {campaign.creator?.firstName} {campaign.creator?.lastName}
                            </span>
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

                    <div className='flex items-center gap-x-4 w-full'>
                        <PaymentModal
                            campaignId={campaignId!}
                        />

                        {
                            user.user?.id == campaign.creatorId && <Button
                                variant='outline'
                                className='hover:scale-95 transition duration-500'
                                onClick={handleWithDrawFund}
                            >
                                Withdraw Funds
                            </Button>
                        }

                    </div>

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

export default CampaignHomePage