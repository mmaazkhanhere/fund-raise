import React from 'react'

import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer
            className='bg-[#3a5846] text-[#f8f8f2] py-20 mt-20'
        >
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                gap-10 md:gap-16 lg:gap-4"
                >
                    {/* Grid 1 */}
                    <div className='order-2 lg:order-1'>
                        <h2 className="text-xl font-bold mb-4">
                            About Us
                        </h2>
                        <ul
                            className="text-gray-300 text-sm"
                        >
                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer'
                            >
                                Our Mission
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Our Team
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Testimonials
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Contact Us
                            </li>
                        </ul>
                    </div>

                    {/* Grid 2 */}
                    <div className='order-3 lg:order-2'>
                        <h2 className="text-xl font-bold mb-4">
                            Campaigns
                        </h2>
                        <ul
                            className="text-gray-300 text-sm"
                        >
                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Current Campaigns
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Completed Campaigns
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                How It Works
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Success Stories
                            </li>
                        </ul>
                    </div>

                    {/* Grid 3 */}
                    <div className='order-4 lg:order-3'>
                        <h2 className="text-xl font-bold mb-4">
                            Resources
                        </h2>
                        <ul
                            className="text-gray-300 text-sm"
                        >
                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Blogs
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                FAQs
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Press Kit
                            </li>

                            <li
                                className='hover:underline hover:text-[#f8f8f2] 
                                cursor-pointer mt-2'
                            >
                                Terms of Services
                            </li>
                        </ul>
                    </div>

                    {/* Grid 4 */}
                    <div className='order-1 lg:order-4'>
                        <h1
                            className="text-3xl font-bold text-[#f8f8f2] mb-4
                            uppercase"
                        >
                            FundRaise
                        </h1>
                        <p className="text-gray-300 text-sm">
                            Empowering eco-friendly projects by connecting passionate
                            individuals with impactful causes. Join us today!
                        </p>

                        <div className='flex items-center gap-x-1 mt-2'>
                            <FaFacebookSquare
                                className='w-6 h-6 cursor-pointer hover:opacity-80'
                            />
                            <FaLinkedin
                                className='w-6 h-6 cursor-pointer hover:opacity-80'
                            />
                            <FaTwitterSquare
                                className='w-6 h-6 cursor-pointer hover:opacity-80'
                            />
                            <FaYoutube
                                className='w-7 h-7 cursor-pointer hover:opacity-80'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer