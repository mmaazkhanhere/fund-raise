import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsThermometerSun } from 'react-icons/bs'
import { FaHandHoldingWater } from 'react-icons/fa'
import { FaBookOpen, FaMicroscope, FaRecycle } from 'react-icons/fa6'

type Props = {}

const CampaignCategories = (props: Props) => {
    return (
        <section
            className='max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 
            gap-5 my-28 px-4'
        >
            {/*Climate Change Initiatives */}
            <Link
                href='/climate-change'
                className='w-full col-span-2 lg:col-span-4 h-[250px] lg:h-[350px] relative overflow-hidden
                group'
            >
                <div
                    className='absolute top-0 left-0 w-full h-full rounded-lg
                    hover:scale-110 transition-all duration-1000'
                    style={{
                        backgroundImage: 'url("/climate-change.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    className='absolute top-0 left-0 w-full h-full rounded-lg
                    bg-gradient-to-t from-[#81f08f] to-transparent opacity-0
                    hover:opacity-100 transition-opacity duration-1000'
                />
                <div
                    className='absolute top-[35%] lg:top-[40%] left-10 flex flex-col justify-center
                    text-white gap-y-1 group-hover:-translate-y-5 transition
                    duration-1000'
                >
                    <BsThermometerSun className='w-10 lg:w-12 h-10 lg:h-12' />
                    <h2 className='text-xl lg:text-3xl font-medium'>
                        Climate Change Initiatives
                    </h2>
                </div>
            </Link>

            {/* Conservation Projects */}
            <Link
                href='/conservation'
                className='w-full overflow-hidden rounded-xl group border'>
                <div className='relative'>
                    <Image
                        className='hover:scale-110 transition duration-1000'
                        src='/conservation-projects.jpg'
                        alt='Conservation Energy'
                        width={330}
                        height={330}
                    />
                    <div
                        className='absolute top-0 left-0 w-full h-full rounded-lg
                bg-gradient-to-t from-[#81f08f] to-transparent opacity-0
                hover:opacity-100 transition-opacity duration-1000'
                    />
                    <div
                        className='absolute top-[35%] left-5 flex flex-col justify-center
                text-white z-10 group-hover:-translate-y-5 transition
                duration-1000'
                    >
                        <FaRecycle className='w-5 lg:w-7 h-5 lg:h-7' />
                        <h2 className='text-sm lg:text-xl font-medium'>
                            Conservation Projects
                        </h2>
                    </div>
                </div>
            </Link>


            {/*Water Conservation */}
            <Link
                href='/water-conservation'
                className='w-full overflow-hidden rounded-xl group border'>
                <div
                    className='relative'
                >
                    <Image
                        className='hover:scale-110 transition duration-1000'
                        src='/water-conservation.jpg'
                        alt='Water Conservation'
                        width={330}
                        height={330}
                    />
                    <div
                        className='absolute top-0 left-0 w-full h-full rounded-lg
                    bg-gradient-to-t from-[#81f08f] to-transparent opacity-0
                    hover:opacity-100 transition-opacity duration-1000'
                    />
                    <div
                        className='absolute top-[35%] left-5 flex flex-col justify-center
                        text-white z-10 group-hover:-translate-y-5 transition
                    duration-1000'
                    >
                        <FaHandHoldingWater className='w-5 lg:w-7 h-5 lg:h-7' />
                        <h2 className='text-sm lg:text-xl font-medium'>
                            Water Conservation
                        </h2>
                    </div>
                </div>
            </Link>

            {/*Eco-Tech */}
            <Link
                href='/eco-tech'
                className='w-full overflow-hidden rounded-xl group border'>
                <div
                    className='relative'
                >
                    <Image
                        className='hover:scale-110 transition duration-1000'
                        src='/eco-tech.jpg'
                        alt='Eco-Tech'
                        width={330}
                        height={330}
                    />
                    <div
                        className='absolute top-0 left-0 w-full h-full rounded-lg
                    bg-gradient-to-t from-[#81f08f] to-transparent opacity-0
                    hover:opacity-100 transition-opacity duration-1000'
                    />
                    <div
                        className='absolute top-[35%] left-5 flex flex-col justify-center
                        text-white z-10 group-hover:-translate-y-5 transition
                    duration-1000'
                    >
                        <FaMicroscope className='w-5 lg:w-7 h-5 lg:h-7' />
                        <h2 className='text-sm lg:text-xl font-medium'>
                            Eco-Tech
                        </h2>
                    </div>
                </div>
            </Link>

            {/*Eco-Education */}
            <Link
                href='/eco-education'
                className='w-full overflow-hidden rounded-xl group border'>
                <div
                    className='relative'
                >
                    <Image
                        className='hover:scale-110 transition duration-1000'
                        src='/eco-education.jpg'
                        alt='Eco-Education'
                        width={330}
                        height={330}
                    />
                    <div
                        className='absolute top-0 left-0 w-full h-full rounded-lg
                    bg-gradient-to-t from-[#81f08f] to-transparent opacity-0
                    hover:opacity-100 transition-opacity duration-1000'
                    />
                    <div
                        className='absolute top-[35%] left-5 flex flex-col justify-center
                        text-white z-10 group-hover:-translate-y-5 transition
                    duration-1000'
                    >
                        <FaBookOpen className='w-5 lg:w-7 h-5 lg:h-7' />
                        <h2 className='text-sm lg:text-xl font-medium'>
                            Eco-Education
                        </h2>
                    </div>
                </div>
            </Link>

        </section >
    )
}

export default CampaignCategories