import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'
import { auth } from "@clerk/nextjs";

export const GET = async () => {

    try {
        const campaignList = await prismadb.campaign.findMany({
            include: {
                creator: true,
                fundsReceivedLog: true
            },
            take: 6,
            orderBy: {
                fundReceived: 'asc'
            }
        })

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

        const campaign = await prismadb.campaign.create({
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
                fundsReceivedLog: { create: [] },
                fundsReceiverStripeId: body.stripeAccountId,
            }
        })

        await prismadb.fundReceivedLog.create({
            data: {
                amount: 0,
                campaignId: campaign.id
            }
        })

        return NextResponse.json(campaign);

    } catch (error) {
        console.error('NEW_CAMPAIGN_POST_API_ERROR', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}