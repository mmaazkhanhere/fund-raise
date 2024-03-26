import { auth, currentUser } from "@clerk/nextjs"
import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export const POST = async (request: NextRequest) => {
    try {
        const { userId } = auth();
        const signInUser = await currentUser();

        if (!userId || !signInUser) {
            return new NextResponse("Unauthorised", { status: 401 });
        }

        const { name, email, campaignId, amount } = await request.json();

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            billing_address_collection: 'auto',
            customer_email: signInUser.emailAddresses[0].emailAddress,
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'USD',
                        product_data: {
                            name: 'FundRaise',
                            description: 'Contribute to saving the Earth with every penny you pay!'
                        },
                        unit_amount: amount
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                userId, name, email, campaignId
            },
            success_url: `${request.headers.get("origin")}/success`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`
        })

        return new NextResponse(JSON.stringify({ url: session.url }))
    } catch (error) {
        console.log("STRIPE_SESSION_ERROR", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}