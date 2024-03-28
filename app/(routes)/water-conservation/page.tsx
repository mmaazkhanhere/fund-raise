import React from 'react'
import RoutesHomepage from '@/components/routes-homepage'
import WaterConservationCampaigns from './components/water-conservation-campaigns'

type Props = {}

const WaterConservation = (props: Props) => {
    return (
        <React.Fragment>
            <RoutesHomepage
                mainHeading='Preserving Our Planet, One Drop at a Time'
                subHeading="Join Us in Safeguarding Earth's Most Precious Resource"
                imageURL='water-conservation.jpg'
                backgroundImagePosition='center'
                quote={`Water is the elixir of life, yet we poison its veins with our negligence. Let us not drown in our own disregard; it's time to stem the tide of water pollution before it engulfs us all.`}
            />

            <WaterConservationCampaigns />
        </React.Fragment>
    )
}

export default WaterConservation