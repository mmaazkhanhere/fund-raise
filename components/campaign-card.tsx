/*A react component that represent a card displaying information about a campaign,
including its image, category, title, tagline, donation progress, and a progress
bar to visualize the progress towards the fundraising goal */

"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

import { Progress } from "@/components/ui/progress"

import { ICampaign } from '@/interfaces-d'


type Props = {
    campaign: ICampaign //receives a campaign as a prop
}

const CampaignCard = ({ campaign }: Props) => {

    const [progress] = useState<number>(campaign.fundReceived!);

    return (
        <Link
            href={`/${(campaign.category)?.toLowerCase()}/${campaign.id}`}
            className=' max-w-md w-full flex flex-col items-start border'
        >
            <div className='w-ful overflow-hidden'>
                {/*Image of the campaign */}
                <Image
                    src={campaign.imageUrl!}
                    alt={campaign.title!}
                    width={550}
                    height={550}
                    className='hover:scale-105 hover:translate-y-2 transition
                    duration-1000'
                />
            </div>

            <div className='flex flex-col p-4 w-full'>

                {/*Campaign Category */}
                <span className='uppercase text-sm font-bold text-[#3a58]'>
                    {campaign.category}
                </span>

                {/*Campaign Title */}
                <h3 className='text-2xl mt-2'>
                    {campaign.title}
                </h3>

                {/*Campaign Tagline */}
                <p className='text-sm text-[#0f2417]/80 mt-2'>
                    {campaign.tagline}
                </p>


                <div className='flex flex-col items-start w-full mt-5'>

                    <div className='flex items-center justify-between w-full'>

                        {/*Funds raised progress number */}
                        <div className='flex items-center'>
                            <p className='text-sm text-[#0f2417]/60'>
                                <span className='font-bold text-[#0f2417] text-base'>${progress}</span> USD raised
                            </p>
                        </div>

                        {/*Percentage of funding goal achieved */}
                        <span className='text-sm text-[#0f2417]/60'>
                            {Number(((progress / campaign.fundGoal!) * 100).toFixed(2))}%
                        </span>
                    </div>

                    {/*Progress bar */}
                    <Progress
                        value={Number(((progress / campaign.fundGoal!) * 100).toFixed(2))}
                        className='w-full'
                    />
                </div>

            </div>


        </Link>
    )
}

export default CampaignCard