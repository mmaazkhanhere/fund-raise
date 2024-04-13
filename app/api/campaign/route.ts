/*An api endpoint handling two apis routes; one to fetch all the campaigns and 
another to create a campaign using prisma query */

import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'
import { auth } from "@clerk/nextjs";

export const GET = async () => {

    try {

        /*get top 6 campaigns ordered by the fund received and return in json
        format */
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

    const body = await request.json(); //get the body from the request

    try {
        const { userId } = auth(); //get the current user id that is currently logged in

        if (!userId) {
            //if no logged in user, return an unauthenticated response 
            return new NextResponse('Not Authorized', { status: 401 });
        }

        /*create a new campaign and log of funds received by that campaign and return
        in json response */

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