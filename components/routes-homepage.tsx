/*A reusable react component for displaying different sections of the application,
displaying the main content with a background image and a quote section */

import React from 'react'
import QuoteSection from './quote-section';

type Props = {
    mainHeading?: string;
    imageURL?: string;
    subHeading?: string;
    backgroundImagePosition?: string;
    quote?: string;
}

const RoutesHomepage = ({ mainHeading, imageURL, subHeading, backgroundImagePosition, quote }: Props) => {
    return (
        <section
            className='px-4 mt-10'
        >
            <section
                style={{
                    backgroundImage: `url("/${imageURL}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${backgroundImagePosition}`,
                }}
                className='w-full h-[600px] lg:h-[700px] flex items-center justify-start'
            >
                <div
                    className='max-w-7xl w-full mx-auto text-[#f8f8f2] flex flex-col 
                    items-start px-4'
                >
                    <div className='flex flex-col max-w-3xl gap-y-2'>

                        {/*Main Heading */}
                        <h1
                            className='text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-tight'
                        >
                            {mainHeading}
                        </h1>

                        {/*Subheading */}
                        <h3
                            className='text-xl lg:text-2xl uppercase font-mono '
                        >
                            {subHeading}
                        </h3>
                    </div>

                </div>
            </section>

            {/*Quote */}
            <section className='max-w-7xl mx-auto'>
                <QuoteSection
                    quote={quote}
                />
            </section>
        </section>
    )
}

export default RoutesHomepage