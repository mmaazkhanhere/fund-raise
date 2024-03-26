import { NextRequest, NextResponse } from "next/server";
import primsadb from '@/lib/prismadb'
import { auth } from "@clerk/nextjs";

export const GET = async (request: NextRequest) => {

    const campaignId = request.nextUrl.pathname.split('/').pop();

    try {

        const currentUser = auth();

        if (!currentUser) {
            return new NextResponse('Not authenticated', { status: 401 });
        }

        if (!campaignId) {
            return new NextResponse('Missing details', { status: 401 });
        }

        const campaign = await primsadb.campaign.findUnique({
            where: {
                id: campaignId
            },
            include: {
                fundsRecieved: true
            }
        })

        return NextResponse.json(campaign);

    } catch (error) {
        console.error('GET_CAMPAIGN_DETAIL_API_ERROR', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }

}