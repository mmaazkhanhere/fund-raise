/*React component that displays a carousel of impact stories of the application
and the campaigns made through the application */

import React from 'react'
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"


type Props = {}

const ImpactStories = (props: Props) => {
    return (
        <section
            className='max-w-7xl mx-auto flex flex-col items-center px-4 my-28'
        >
            {/*Heading */}
            <h2
                className='text-3xl font-semibold uppercase mb-20'
            >
                See the impact
            </h2>

            {/*Carousel */}
            <Carousel
                opts={{
                    align: 'center',
                    loop: true,
                }}
                className='w-full max-w-2xl'
            >
                <CarouselContent

                >
                    {/*1st Carousel Item */}
                    <CarouselItem
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square
                                items-start justify-center bg-gradient-to-tr
                                from-[#8edfff] via-[#b4ebbd] to-[#ffe36c]'
                            >
                                <Image
                                    src='/endangered-species.jpg'
                                    alt='Endangered species'
                                    width={800}
                                    height={600}
                                />

                                <div className='p-3 lg:p-6'>
                                    <blockquote
                                        className='lg:text-xl text-justify'
                                    >
                                        Thanks to this platform, I was able to contribute to a project aimed at protecting endangered species. Seeing the impact our collective efforts had on preserving wildlife was truly inspiring.
                                    </blockquote>

                                    <p className='font-bold uppercase mt-5'>
                                        Sam
                                    </p>
                                </div>


                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*2nd Carousel Item */}
                    <CarouselItem
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square
                                items-start justify-center bg-gradient-to-tr
                                from-[#bdee85] via-[#a7e65d] to-[#4caf50]'
                            >
                                <Image
                                    src='/tree-planting.jpg'
                                    alt='Reforestation'
                                    width={800}
                                    height={600}
                                />

                                <div className='p-3 lg:p-6'>
                                    <blockquote
                                        className='lg:text-xl text-justify'
                                    >
                                        I supported a campaign focused on reforestation, and I&apos;m amazed by the progress we&apos;ve made together. Witnessing trees being planted and habitats restored made me feel fulfilled
                                    </blockquote>

                                    <p
                                        className='font-bold uppercase mt-5'
                                    >
                                        Michael Rodriguez
                                    </p>
                                </div>

                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*3rd Carousel Item */}
                    <CarouselItem
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square
                                items-start justify-center bg-gradient-to-tr
                                from-blue-200 via-blue-400 to-blue-600'
                            >

                                <Image
                                    src='/clean-water.jpg'
                                    alt='Clean Water'
                                    width={800}
                                    height={600}
                                />

                                <div className='p-3 lg:p-6'>
                                    <blockquote
                                        className='lg:text-xl text-justify'
                                    >
                                        I donated to a campaign providing clean water access to under-served communities, and the impact has been life-changing. Knowing that my contribution has improved lives fills me with joy
                                    </blockquote>

                                    <p
                                        className='font-bold uppercase mt-5'
                                    >
                                        David Rodriguez
                                    </p>
                                </div>

                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*4th Carousel Item */}
                    <CarouselItem
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square
                                items-start justify-center bg-gradient-to-tr
                                from-blue-200 via-blue-400 to-blue-600'
                            >

                                <Image
                                    src='/eco-ed.jpg'
                                    alt='Eco Education'
                                    width={800}
                                    height={600}
                                />

                                <div className='p-3 lg:p-6'>
                                    <blockquote
                                        className='lg:text-xl text-justify'
                                    >
                                        Supporting eco-education initiatives through this platform has been incredibly rewarding. Seeing young minds engaged in learning about environment gives me hope for the future.
                                    </blockquote>

                                    <p
                                        className='font-bold uppercase mt-5'
                                    >
                                        David Rodriguez
                                    </p>
                                </div>

                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*5th Carousel Item */}
                    <CarouselItem
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square
                                items-start justify-center bg-gradient-to-tr
                                from-[#7fff00] via-[#ffff00] to-[#87CEEB]'
                            >

                                <Image
                                    src='/renewable-energy.jpg'
                                    alt='Renewable Energy'
                                    width={800}
                                    height={600}
                                />

                                <div className='lg:p-3 p-6'>
                                    <blockquote
                                        className='lg:text-xl text-justify'
                                    >
                                        Being part of a community dedicated to combating climate change has been empowering for me. Through this platform, I&apos;ve funded projects that promote renewable energy and sustainable practices. Together, we&apos;re making strides towards a greener, healthier planet.
                                    </blockquote>

                                    <p
                                        className='font-bold uppercase mt-5'
                                    >
                                        David Lee
                                    </p>
                                </div>


                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section >

    )
}

export default ImpactStories