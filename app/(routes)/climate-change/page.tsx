import RoutesHomepage from '@/components/routes-homepage'
import React from 'react'
import ClimateChangeCampaigns from './components/climate-change-campaigns'

type Props = {}

const ClimateChangePage = (props: Props) => {
    return (
        <React.Fragment>
            <RoutesHomepage
                mainHeading='Join the Fight Against Climate Change'
                subHeading='Together, Let&apos;s Make a Sustainable Difference for Our Planet"'
                imageURL='climate-change.jpg'
                backgroundImagePosition='center'
                quote={`Climate change isn't just a threat to our planet; it's a call to action for humanity's survival. Every degree of warming counts, and every action matters. The time to act is now, before it's too late`}
            />
            <ClimateChangeCampaigns />
        </React.Fragment>
    )
}

export default ClimateChangePage