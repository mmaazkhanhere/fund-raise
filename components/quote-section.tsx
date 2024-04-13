/*React component that is responsible for displaying quote that is received
as a prop*/

import React from 'react'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ['400'] });

type Props = {
    quote?: string
}

const QuoteSection = ({ quote }: Props) => {

    return (
        <div
            className='w-full max-w-7xl mx-auto flex items-center justify-center
            my-20 lg:my-32 px-4'
        >
            <h2
                className={`${bebas.className} text-5xl lg:text-6xl text-red-500 text-center
            uppercase`}
            >
                {quote}
            </h2>
        </div>
    )
}

export default QuoteSection
