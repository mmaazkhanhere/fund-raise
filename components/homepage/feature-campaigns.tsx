import React from 'react'
import CampaignCard from '../campaign-card'

type Props = {}

const FeatureCampaigns = (props: Props) => {
    return (
        <section
            className='max-w-7xl mx-auto w-full flex flex-col items-start px-4'
        >
            <h2 className='uppercase text-3xl font-bold'>
                Feature Campaign and Initiatives
            </h2>

            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-3 w-full gap-10'>
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
            </div>
        </section>
    )
}

export default FeatureCampaigns