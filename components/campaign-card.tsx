"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import { Progress } from "@/components/ui/progress"
import Link from 'next/link'


type Props = {}

const CampaignCard = (props: Props) => {

    const [progress, setProgress] = useState<number>(750)

    return (
        <Link
            href='/campaign'
            className=' max-w-md w-full flex flex-col items-start border'
        >
            <div className='w-ful overflow-hidden'>
                <Image
                    src='/hero.jpg'
                    alt='Dummy'
                    width={550}
                    height={550}
                    className='hover:scale-105 hover:translate-y-2 transition
                    duration-1000'
                />
            </div>

            <div className='flex flex-col p-4 w-full'>
                <span className='uppercase text-lg font-bold text-[#3a58]'>
                    Initiative
                </span>
                <h3 className='text-2xl mt-2'>
                    Help Polar Bears Thrive
                </h3>

                <div className='flex flex-col items-start w-full mt-5'>

                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center'>
                            <p className='text-sm text-[#0f2417]/60'>
                                <span className='font-bold text-[#0f2417] text-base'>${progress}</span> USD raised
                            </p>
                        </div>

                        <span className='text-sm text-[#0f2417]/60'>
                            {(progress / 500) * 100}%
                        </span>
                    </div>
                    <Progress
                        value={(progress / 500) * 100}
                        className='w-full'
                    />
                </div>

            </div>


        </Link>
    )
}

export default CampaignCard