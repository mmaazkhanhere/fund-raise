import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section
            style={{
                backgroundImage: 'url("/hero.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
            }}
            className='w-full h-[700px] flex items-center justify-start'
        >
            <div
                className='max-w-7xl w-full mx-auto text-[#f8f8f2] flex flex-col 
                items-start justify-center px-4'
            >
                <div className='flex flex-col max-w-3xl gap-y-2'>
                    <h1
                        className='text-5xl lg:text-8xl font-black uppercase leading-tight'
                    >
                        Unite for a Greener Tomorrow
                    </h1>
                    <p
                        className='text-lg lg:text-2xl uppercase font-mono '
                    >
                        Fund the future save the future
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Hero