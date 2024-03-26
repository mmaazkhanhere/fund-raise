
import Stripe from 'stripe'
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe"
import prismadb from '@/lib/prismadb'

export const POST = async (request: Request) => {

    const body = await request.json();

    async function getSignature() {
        const signature = request.headers.get('Stripe-Signature') as string;
        return new Promise<string>((resolve) =>
            setTimeout(() => {
                resolve(signature);
            }, 1000)
        );
    };

    const signature = await getSignature(); //get signature by calling the getSignature function

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET_KEY!
        )
    } catch (error) {
        return new NextResponse(`Stripe Webhook Error`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    if (event.type === 'checkout.session.completed') {

        if (!session || !session.metadata || !session.metadata.userId || !session.metadata.campaignId || !session.amount_total) {
            return new NextResponse("Invalid session data", { status: 400 });
        }

        // Ensure that the amount received is greater than 0
        if (session.amount_total <= 0) {
            return new NextResponse("Invalid amount received", { status: 400 });
        }


        await prismadb.fundReceivedLog.create({
            data: {
                amount: session.amount_total as number,
                campaignId: session.metadata.campaignId as string
            }
        });

        await prismadb.campaign.update({
            where: {
                id: session.metadata.campaignId as string,
            },
            data: {
                fundReceived: session.amount_total as number,
            }
        });

    }

}