import React from 'react'
import RoutesHomepage from '@/components/routes-homepage'
import EcoEducationCampaigns from './components/eco-education-campaigns'

type Props = {}

const EcoEducation = (props: Props) => {
    return (
        <React.Fragment >
            <RoutesHomepage
                mainHeading='Nurturing Stewards of the Earth'
                subHeading="Empowering Minds, Cultivating Sustainability, and Inspiring Environmental Advocacy Through Education"
                imageURL='eco-education.jpg'
                backgroundImagePosition='center'
                quote={`Environmental education isn't just about teaching; it's about igniting a flame of awareness, urging us to take action before the flames of destruction engulf us all.`}
            />

            <EcoEducationCampaigns />
        </React.Fragment>
    )
}

export default EcoEducation