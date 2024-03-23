import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

type Props = {}

const ImpactStories = (props: Props) => {
    return (
        <section
            className='max-w-7xl mx-auto flex flex-col items-center px-4 my-28'
        >

            <h2
                className='text-3xl font-semibold uppercase mb-20'
            >
                See the impact
            </h2>

            <Carousel
                opts={{
                    align: 'center',
                    loop: true,
                }}
                className='w-full max-w-xl border'
            >
                <CarouselContent

                >
                    {/*1st Carousel Item */}
                    <CarouselItem
                        className=""
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

                                <div className='p-6'>
                                    <blockquote
                                        className='lg:text-xl text-justify'
                                    >
                                        Thanks to this platform, I was able to contribute to a project aimed at protecting endangered species. Seeing the impact our collective efforts had on preserving wildlife was truly inspiring. I&apos;m grateful for the opportunity to make a difference!
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
                        className=""
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square
                                items-start justify-center bg-gradient-to-tr
                                from-blue-200 via-blue-400 to-blue-600'
                            >
                                <blockquote
                                    className='lg:text-xl text-justify'
                                >
                                    I supported a campaign focused on reforestation, and I&apos;m amazed by the progress we&apos;ve made together. Witnessing trees being planted and habitats restored has strengthened my belief in the power of crowdfunding to enact positive change.
                                </blockquote>

                                <p
                                    className='font-bold uppercase mt-5'
                                >
                                    Michael Rodriguez
                                </p>

                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*3rd Carousel Item */}
                    <CarouselItem
                        className=""
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square p-6
                                items-start justify-center'
                            >
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

                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*4th Carousel Item */}
                    <CarouselItem
                        className=""
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square p-6
                                items-start justify-center'
                            >
                                <blockquote
                                    className='lg:text-xl text-justify'
                                >
                                    I donated to a campaign providing clean water access to under-served communities, and the impact has been life-changing. Knowing that my contribution has improved the lives of others fills me with a sense of fulfillment and purpose
                                </blockquote>

                                <p
                                    className='font-bold uppercase mt-5'
                                >
                                    David Rodriguez
                                </p>

                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {/*5th Carousel Item */}
                    <CarouselItem
                        className=""
                    >
                        <Card>
                            <CardContent
                                className='flex flex-col aspect-square p-6
                                items-start justify-center'
                            >
                                <blockquote
                                    className='lg:text-xl text-justify'
                                >
                                    Supporting eco-education initiatives through this platform has been incredibly rewarding. Seeing young minds engaged in learning about environmental stewardship gives me hope for the future. Together, we&apos;re shaping a more environmentally conscious generation.
                                </blockquote>

                                <p
                                    className='font-bold uppercase mt-5'
                                >
                                    Jessica Smith
                                </p>

                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>

    )
}

export default ImpactStories