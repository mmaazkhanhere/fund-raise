/*An api route that fetches campaign details from the database, ensuring authentication
and proper error handling along the way */

import { NextRequest, NextResponse } from "next/server";
import primsadb from '@/lib/prismadb'
import { auth } from "@clerk/nextjs";

export const GET = async (request: NextRequest) => {

    const campaignId = request.nextUrl.pathname.split('/').pop();
    //get the campaign id from the request url

    try {

        const currentUser = auth(); //get the current user logged in

        if (!currentUser) {
            //if no current user, return an unauthenticated error message
            return new NextResponse('Not authenticated', { status: 401 });
        }

        if (!campaignId) {
            //if no campaign id, return missing details error message
            return new NextResponse('Missing details', { status: 401 });
        }

        //get the campaign with the campaign id and return in json
        const campaign = await primsadb.campaign.findUnique({
            where: {
                id: campaignId
            },
            include: {
                fundsReceivedLog: true,
                creator: true
            }
        })

        return NextResponse.json(campaign);

    } catch (error) {
        console.error('GET_CAMPAIGN_DETAIL_API_ERROR', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }

}