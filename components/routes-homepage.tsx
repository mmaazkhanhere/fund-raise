import React from 'react'
import QuoteSection from './quote-section';

type Props = {
    mainHeading?: string;
    imageURL?: string;
    subHeading?: string;
    backgroundImagePosition?: string;
}

const RoutesHomepage = ({ mainHeading, imageURL, subHeading, backgroundImagePosition }: Props) => {
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
                className='w-full h-[700px] hidden md:flex items-center justify-start'
            >
                <div
                    className='max-w-7xl w-full mx-auto text-[#f8f8f2] flex flex-col 
                    items-start justify-center px-4'
                >
                    <div className='flex flex-col max-w-3xl gap-y-2'>
                        <h1
                            className='md:text-6xl lg:text-8xl font-black uppercase leading-tight'
                        >
                            {mainHeading}
                        </h1>
                        <p
                            className='text-xl lg:text-2xl uppercase font-mono '
                        >
                            {subHeading}
                        </p>
                    </div>

                </div>
            </section>
            <section className='max-w-7xl mx-auto'>
                <QuoteSection
                    quote={`Climate change isn't just a threat to our planet; it's a call to action for humanity's survival. Every degree of warming counts, and every action matters. The time to act is now, before it's too late`}
                />
            </section>
        </section>
    )
}

export default RoutesHomepage