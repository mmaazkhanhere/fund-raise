import RoutesHomepage from '@/components/routes-homepage'
import React from 'react'

type Props = {}

const ClimateChangePage = (props: Props) => {
    return (
        <React.Fragment>
            <RoutesHomepage
                mainHeading='Join the Fight Against Climate Change'
                subHeading='Together, Let&apos;s Make a Sustainable Difference for Our Planet"'
                imageURL='climate-change.jpg'
                backgroundImagePosition='center'
            />
        </React.Fragment>
    )
}

export default ClimateChangePage