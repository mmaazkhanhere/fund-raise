/*An api endpoint responsible for creating a payout using the Stripe API */

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-10-16",
});

export const POST = async (request: Request) => {

    try {

        const { userId } = auth(); //get the current user

        if (!userId) {
            //If no userId is provided, return an unauthorized response
            return new NextResponse('Not Authenticated', { status: 401 })
        }

        const body = await request.json(); //get the body from the request
        const { fundReceived, stripeAccountId } = body; //extract data from the body


        const payout = await stripe.payouts.create({
            amount: fundReceived * 100,
            currency: 'USD',
            destination: stripeAccountId as string
        }); /*use the stripe client to create a payout with the specified amount 
        and destination*/


        if (payout) {
            return new NextResponse(`Payout created successfully with ID: ${payout.id}`, { status: 200 });
        }
    } catch (error) {
        console.error('STRIPE_PAYOUT ERROR_API', error);
        return new NextResponse('Failed to create payout', { status: 500 });
    }
}