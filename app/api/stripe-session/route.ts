/*An api route that facilitates the creation of Stripe Checkout sessions, allowing
users to make payments securely */

import { auth, currentUser } from "@clerk/nextjs"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-10-16",
});

export const POST = async (request: NextRequest) => {
    try {
        const { userId } = auth();
        const signInUser = await currentUser();

        if (!userId || !signInUser) {
            //if no logged in user, return unauthorized response and error message
            return new NextResponse("Unauthorized", { status: 401 });
        }


        const body = await request.json(); //get the body from request

        const { donation } = body.values;
        const { campaignId } = body; //extract data from the body

        const session = await stripe.checkout.sessions.create({
            mode: 'payment', //checkout type is payment
            payment_method_types: ['card'], //payment will be made using card
            line_items: [
                {
                    price_data: {
                        currency: 'USD', //currency used
                        product_data: {
                            name: 'FundRaise', //detail of what user is paying for
                            description: 'Contribute to saving the Earth with every penny you pay!'
                        },
                        unit_amount: donation * 100 //amount of payment
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                donation, campaignId
            },
            success_url: `${request.headers.get("origin")}/`, //redirect to homepage if checkout successful
            cancel_url: `${request.headers.get("origin")}/?canceled=true`
        })

        return new NextResponse(JSON.stringify({ url: session.url })); //stripe session url returned
    }

    catch (error) {
        console.error("STRIPE_SESSION_API_ERROR", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}