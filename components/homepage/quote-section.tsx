import React from 'react'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ['400'] });

type Props = {}

const QuoteSection = (props: Props) => {
    return (
        <div
            className='w-full max-w-7xl mx-auto flex items-center justify-center
            py-32 px-4'
        >
            <h2
                className={`${bebas.className} text-5xl lg:text-6xl text-red-500 text-center
            uppercase`}
            >
                The Earth is what we all have in common. It&apos;s our only home. And unless we protect it, we will not survive.
            </h2>
        </div>
    )
}

export default QuoteSection