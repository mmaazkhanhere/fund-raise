
import React from 'react'
import RoutesHomepage from '@/components/routes-homepage'
import EchoTechCampaigns from './components/echo-tech-campaigns'

type Props = {}

const EchoTech = (props: Props) => {
    return (
        <React.Fragment >
            <RoutesHomepage
                mainHeading='Empowering a Greener Future with Eco-Tech Innovations'
                subHeading="Discover Sustainable Solutions Driving Environmental Change"
                imageURL='eco-tech.jpg'
                backgroundImagePosition='center'
                quote={`Embrace Eco-Tech today, for tomorrow's breath depends on it. Let's awaken to the urgency of sustainable innovation, safeguarding our planet for generations to come.`}
            />
            <EchoTechCampaigns />

        </React.Fragment>
    )
}

export default EchoTech