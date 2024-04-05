"use client"

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { addDays, differenceInCalendarDays } from 'date-fns';

import { Progress } from "@/components/ui/progress"
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button';
import LoadingSkeleton from '@/components/loading-skeleton';

import DataChart from './data-chart';
import PaymentModal from './payment-modal';

import getStripePromise from '@/lib/stripe';
import { useAppDispatch, useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks';
import { getCampaign } from '@/lib/(redux-store)/(slices)/campaign';


type Props = {}

const CampaignHomePage = (props: Props) => {

    const campaignId = usePathname().split('/').pop(); /*Get the campaign id
    from the route url */

    const [progress, setProgress] = useState<number>(0); /*progress bar showing 
    the status of funds received */

    const dispatch = useAppDispatch(); /*dispatch actions to the Redux store, which
    trigger state change */

    const campaign = useAppSelector((state) => state.campaign.campaign);/*get the 
    campaign data from the redux state */

    const loadingState = useAppSelector((state) => state.campaign.isLoading); /*
    get the loading state of the redux store */

    const { toast } = useToast(); //toast function for displaying toast
    const user = useUser(); //get the current user data

    useEffect(() => {
        dispatch(getCampaign(campaignId)); /*get the campaign data when the component
        mounts or the campaign id changes */

        setProgress(campaign?.fundReceived as number);/*update the progress state
        when campaign fundReceived changes */

    }, [campaign?.fundReceived, campaignId, dispatch]);


    if (loadingState || !campaign) {

        /*display a loading skeleton while the stat is in loading state and while
        campaign details are being fetched */
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


    /*a function to handle fund withdrawl */
    const handleWithDrawFund = async () => {

        const fundReceived = campaign.fundReceived; /*get the amount received for
        the fund */
        const stripeAccountId = campaign.fundsReceiverStripeId; /*get the stripe
        account id associated with the campaign for receiving the funds */

        try {

            const response = await fetch('/api/stripe-payout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fundReceived, stripeAccountId, campaignId })
            });
            /*make a POST HTTP request at the specified endpoint passing relevant
            data in the request payload */

            if (response.ok) {

                /*display a success notification if the response is successful or
                else display an error notification
                */
                const data = await response.json();

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
            console.error('Error occurred while withdrawing funds:', error);
            toast({
                title: 'Something went wrong',
                variant: 'destructive'
            });
        }

    }

    /*Define a function to calculate the number of days left for the campaign*/
    function daysLeft() {
        const endDate = addDays(new Date(campaign.createdAt!), campaign.durationInDays!);
        /*calculate the end date of the campaign */

        const daysLeft = differenceInCalendarDays(endDate, new Date()); /*calculate the
        difference in days between end date and current date */
        return daysLeft;
    }

    return (
        <section
            className='max-w-7xl mx-auto mt-10 px-4 flex flex-col items-start
            gap-10'
        >

            {/*Data visualization chart */}
            <DataChart
                data={campaign?.fundsReceivedLog}
            />

            <div className='grid lg:grid-cols-2 gap-5'>

                <div className='w-full'>

                    {/*Image of the campaign */}
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
                            {/*Niche of the campaign */}
                            <span className='font-black uppercase text-[#81f08f] tracking-wider'>
                                {campaign.niche}
                            </span>

                            {/*Category of the campaign */}
                            <span className='font-black uppercase text-[#3a5846] tracking-wider'>
                                {campaign.category}
                            </span>
                        </div>

                        {/*Title of the campaign */}
                        <h1 className='text-2xl lg:text-4xl font-bold mt-6'>
                            {campaign.title}
                        </h1>

                        {/*Tagline of the campaign */}
                        <p className='lg:text-lg font-normal mt-2'>
                            {campaign.tagline}
                        </p>

                        {/*Campaign category and creator name */}
                        <p className='mt-6 lg:text-lg'>
                            {campaign.category} by <span className='text-[#3a5846] uppercase text-base font-bold'>
                                {campaign.creator?.firstName} {campaign.creator?.lastName}
                            </span>
                        </p>
                    </div>

                    <div className='flex flex-col items-start w-full mt-5 '>

                        {/*funds recieved */}
                        <p className='text-[#0f2417] text-sm font-bold'>
                            <span
                                className='text-4xl lg:text-5xl text-[#81f08f] font-bold'
                            >
                                ${progress}
                            </span> / {campaign.fundGoal} USD raised
                        </p>

                        {/*Percentage raised */}
                        <div className='flex items-center w-full'>
                            <span className='text-sm text-[#0f2417]/60'>
                                {
                                    Number(((progress / campaign.fundGoal!) * 100).toFixed(2))
                                }%
                            </span>
                        </div>

                        {/*Progress bar */}
                        <Progress
                            value={Number(((progress / campaign.fundGoal!) * 100).toFixed(2))}
                            className='w-full'
                        />

                        {/*days left in the campaign */}
                        <span className='self-end text-sm text-[#0f2417]/60'>
                            {daysLeft()} days left
                        </span>
                    </div>

                    <div className='flex items-center gap-x-4 w-full'>
                        {/*Payment modal */}
                        <PaymentModal
                            campaignId={campaignId!}
                        />

                        {/*Withdraw button */}
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

            {/*Campaign Description */}
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