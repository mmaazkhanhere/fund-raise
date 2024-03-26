import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'
import { auth } from "@clerk/nextjs";

export const GET = async () => {

    console.log('GET request')

    try {
        const campaignList = await prismadb.campaign.findMany({
            include: {
                creator: true,
                fundsRecieved: true
            }
        })

        console.log(campaignList);

        return NextResponse.json(campaignList);

    } catch (error) {
        console.error('GET_CAMPAIGN_LIST_API_ERROR', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}


export const POST = async (request: NextRequest) => {
    const body = await request.json();

    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse('Not Authorized', { status: 401 });
        }

        const camapign = await prismadb.campaign.create({
            data: {
                title: body.title,
                tagline: body.tagline,
                imageUrl: body.imageUrl,
                description: body.description,
                category: body.category,
                creatorId: userId,
                niche: body.niche,
                durationInDays: body.durationInDays,
                fundGoal: body.fundGoal,
                fundsReceiver: body.fundsReceiver,
            }
        })

        return NextResponse.json(camapign);

    } catch (error) {
        console.error('NEW_CAMPAIGN_POST_API_ERROR', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}