"use client"

import { useAppSelector } from '@/lib/(redux-store)/(redux-setup)/hooks';
import { getCampaign } from '@/lib/(redux-store)/(slices)/campaign';
import React from 'react'

type Props = {}

const InitiativeHomepage = (props: Props) => {

    const data = getCampaign();

    return (
        <section>
            Initiative Homepage
        </section>
    )
}

export default InitiativeHomepage