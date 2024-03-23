import React from 'react'

import { RiCommunityFill, RiMenu4Line, RiShareForwardFill } from "react-icons/ri";
import { FaMoneyBillWave, FaRecycle } from "react-icons/fa6";
import { BsThermometerSun } from "react-icons/bs";
import { FaDonate, FaHandHoldingWater, FaQuestionCircle, FaTree } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { GiSwapBag, GiWindTurbine } from "react-icons/gi";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';


type Props = {}

const MobileNavbar = (props: Props) => {
    return (
        <Sheet>
            <SheetTrigger aria-label='Menu Button'>
                <RiMenu4Line className='w-7 h-7' />
            </SheetTrigger>
            <SheetContent className='w-screen overflow-scroll'>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <section className='flex flex-col justify-center w-full'>

                    {/*Campaigns */}
                    <div
                        className='flex flex-col justify-center w-full
                        mt-8 gap-y-4'
                    >
                        <h2
                            className='py-2 font-bold uppercase self-start'
                        >
                            Campaigns
                        </h2>

                        {/*Climate Change Initiatives */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <BsThermometerSun className='w-8 h-8 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Climate Change Initiatives</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Actions to reduce greenhouse gas emission and
                                    protect forests
                                </p>
                            </div>

                        </Link>

                        {/*Conservation Projects */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >

                            <FaRecycle className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Conservation Projects</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Efforts to protect and restore natural habitats
                                </p>
                            </div>

                        </Link>

                        {/*Water Conservation */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >

                            <FaHandHoldingWater className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Water Conservation</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Efforts to protect and conserve water resources
                                </p>
                            </div>

                        </Link>

                        {/*Eco-Tech */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >

                            <FaMicroscope className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Eco-tech</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Fund and promote eco-friendly technologies
                                </p>
                            </div>

                        </Link>

                        {/*Eco-Education */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >

                            <FaBookOpen className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Eco-Education</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Programs to educate about environmental issues
                                </p>
                            </div>


                        </Link>

                    </div>


                    {/*Initiatives */}
                    <div
                        className='flex flex-col justify-center w-full
                        mt-8 gap-y-4'
                    >
                        <h2
                            className='py-2 font-bold uppercase self-start'
                        >
                            Initiatives
                        </h2>

                        {/*Green Energy */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <GiWindTurbine className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Green Energy</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Promoting renewable and clean energy resources
                                </p>
                            </div>

                        </Link>

                        {/*Reforestation */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <FaTree className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Reforestation</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Planting trees to restore forests and capture carbon
                                </p>
                            </div>

                        </Link>


                        {/*Plastic Reduction */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <GiSwapBag className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Plastic Reduction</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Initiatives to reduce plastic waste
                                </p>
                            </div>

                        </Link>

                        {/*Community Projects*/}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <RiCommunityFill className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Community Projects</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Local initiatives for environmental issues
                                </p>
                            </div>

                        </Link>
                    </div>

                    {/*How it works */}
                    <div
                        className='flex flex-col justify-center w-full
                        mt-8 gap-y-4'
                    >

                        <h2
                            className='py-2 font-bold uppercase self-start'
                        >
                            How it works
                        </h2>

                        {/*Withdrawal of funds*/}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <FaMoneyBillWave className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Withdrawal of funds</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    How to withdraw funds?
                                </p>
                            </div>

                        </Link>

                        {/*Share a Campaign */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <RiShareForwardFill className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Share a Campaign</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Increase your visibility by sharing on social media
                                </p>
                            </div>

                        </Link>

                        {/*Post Donation Process */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <FaDonate className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>Post Donation Process</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    What happens after a donation is made?
                                </p>
                            </div>

                        </Link>

                        {/*FAQs */}
                        <Link
                            href='/'
                            className='flex items-center hover:scale-95 transition
                            duration-500 gap-x-6'
                        >
                            <FaQuestionCircle className='w-6 h-6 text-[#81f084]' />

                            <div className='flex flex-col'>
                                <span>FAQs</span>
                                <p className='text-sm text-[#0f2417]/60'>
                                    Answers to common questions about crowdfunding process
                                </p>
                            </div>

                        </Link>

                        {/*Success Stories */}
                        <Link
                            href='/'
                            className='mt-2 py-2 font-bold uppercase self-start'
                        >
                            Success Stories
                        </Link>

                        {/*About Us */}
                        <Link
                            href='/'
                            className='mt-2 py-2 font-bold uppercase self-start'
                        >
                            About Us
                        </Link>
                    </div>
                </section>


            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar