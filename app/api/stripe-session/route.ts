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
            return new NextResponse("Unauthorized", { status: 401 });
        }


        const body = await request.json();

        const { fullName, emailAddress, donation } = body.values;
        const { campaignId } = body;

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'USD',
                        product_data: {
                            name: 'FundRaise',
                            description: 'Contribute to saving the Earth with every penny you pay!'
                        },
                        unit_amount: donation * 100
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                fullName, emailAddress, donation, campaignId
            },
            success_url: `${request.headers.get("origin")}/success`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`
        })

        return new NextResponse(JSON.stringify({ url: session.url })); //stripe session url returned
    }

    catch (error) {
        console.log("STRIPE_SESSION_API_ERROR", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}