import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {

    const nicheName = request.nextUrl.pathname.split('/').pop();

    try {

        if (!nicheName) {
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