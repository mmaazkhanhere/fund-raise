/*React component that is responsible for rendering the hero section of a webpage.
It consists of two sections, one for large screen and one for small screens*/

import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <React.Fragment>

            {/*Hero Section for Large Screen */}
            <section
                style={{
                    backgroundImage: 'url("/hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center bottom',
                }}
                className='w-full h-[700px] hidden md:flex items-center justify-start'
            >
                <div
                    className='max-w-7xl w-full mx-auto text-[#f8f8f2] flex flex-col 
                    items-start justify-center px-4'
                >
                    <div className='flex flex-col max-w-3xl gap-y-2'>

                        {/*Heading */}
                        <h1
                            className='md:text-6xl lg:text-8xl font-black uppercase leading-tight'
                        >
                            Unite for a Greener Tomorrow
                        </h1>

                        {/*Tagline */}
                        <p
                            className='text-xl lg:text-2xl uppercase font-mono '
                        >
                            Fund the future save the future
                        </p>
                    </div>

                </div>
            </section>

            {/*Hero Section for Small Screen */}
            <section
                style={{
                    backgroundImage: 'url("/hero-mobile-2.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className='w-full h-[700px] flex md:hidden items-center justify-start'
            >
                <div
                    className='max-w-7xl w-full mx-auto text-[#0f2417] flex flex-col 
                    items-start justify-center px-4'
                >
                    <div className='flex flex-col max-w-3xl gap-y-2'>

                        {/*Heading */}
                        <h1
                            className='text-5xl font-black uppercase leading-tight'
                        >
                            Unite for a Greener Tomorrow
                        </h1>

                        {/*Tagline */}
                        <p
                            className='text-lg uppercase font-mono '
                        >
                            Fund the future save the future
                        </p>
                    </div>

                </div>
            </section>
        </React.Fragment>

    )
}

export default Hero