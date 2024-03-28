import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-10-16",
});

export const POST = async (request: Request) => {

    console.log('called')

    try {

        console.log('try block')

        const { userId } = auth();
        console.log(userId)

        if (!userId) {
            return new NextResponse('Not Authenticated', { status: 401 })
        }

        const body = await request.json();
        const { fundReceived, stripeAccountId } = body;

        console.log(fundReceived)
        console.log(stripeAccountId)

        const payout = await stripe.payouts.create({
            amount: fundReceived * 100,
            currency: 'USD',
            destination: stripeAccountId as string
        });

        console.log(payout)


        if (payout) {
            return new NextResponse(`Payout created successfully with ID: ${payout.id}`, { status: 200 });
        }
    } catch (error) {
        console.error('STRIPE_PAYOUT ERROR_API', error);
        return new NextResponse('Failed to create payout', { status: 500 });
    }
}