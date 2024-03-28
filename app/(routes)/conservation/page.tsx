import React from 'react'
import RoutesHomepage from '@/components/routes-homepage'
import ConservationCampaigns from './components/conservations-campaign'
import WaterConservationCampaigns from '../water-conservation/components/water-conservation-campaigns'

type Props = {}

const ConservationProjects = (props: Props) => {
    return (
        <React.Fragment>
            <RoutesHomepage
                mainHeading='Protecting Our Planet: Join Our Conservation Efforts Today'
                subHeading="Together, Let' s Preserve Earth's Natural Wonders for Future Generations"
                imageURL='conservation-projects.jpg'
                backgroundImagePosition='center'
                quote={`Nature's beauty is not guaranteed forever. Our actions today determine the fate of tomorrow's landscapes. Let's awaken to the urgency of conservation before it's too late.`}
            />
            <ConservationCampaigns />
        </React.Fragment>
    )
}

export default ConservationProjects