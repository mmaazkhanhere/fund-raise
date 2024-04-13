/*An api endpoint that makes a GET HTTP request to get all the campaigns of a
specific niche and return in json format */

import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {

    const nicheName = decodeURIComponent(request.nextUrl.pathname.split('/').pop() as string);
    /*get the niche name from the request url and decoding it */

    try {

        if (!nicheName) {
            //if no nicheName is specified, return missing information error message
            return new NextResponse('Missing required niche name', { status: 400 })
        }

        const campaignList = await prismadb.campaign.findMany({
            where: {
                niche: nicheName
            }
        })

        return NextResponse.json(campaignList);

    } catch (error) {
        console.error('GET_CAMPAIGN_LIST_API_ERROR', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}