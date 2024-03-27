
import Stripe from 'stripe'
import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2023-10-16",
});

export const POST = async (request: Request) => {

    const body = await request.text();

    async function getSignature() {
        const signature = request.headers.get('Stripe-Signature') as string;
        return new Promise<string>((resolve) =>
            setTimeout(() => {
                resolve(signature);
            }, 1000)
        );
    };

    const signature = await getSignature();

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET_KEY!
        )

    } catch (error) {
        console.error('STRIPE_WEBHOOK_ERROR', error);
        return new NextResponse(`Stripe Webhook Error`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    console.log(event.type)

    if (event.type === 'checkout.session.completed') {

        const metadata = session.metadata!
        const campaignId = metadata.campaignId;
        const amount_total = Number(metadata.donation)


        if (!session || !metadata || !campaignId || !amount_total) {

            return new NextResponse("Invalid session data", { status: 400 });
        }

        // Ensure that the amount received is greater than 0
        if (amount_total <= 0) {
            return new NextResponse("Invalid amount received", { status: 400 });
        }

        const campaignFunds = await prismadb.campaign.findUnique({
            where: {
                id: campaignId,
            },
            select: {
                fundReceived: true,
            }
        })

        const updatedFunds = campaignFunds?.fundReceived as number + amount_total;


        await prismadb.fundReceivedLog.create({
            data: {
                amount: amount_total as number,
                campaignId: campaignId as string
            }
        });

        await prismadb.campaign.update({
            where: {
                id: campaignId as string,
            },
            data: {
                fundReceived: updatedFunds
            }
        });

        return new NextResponse("Webhook processed successfully", { status: 200 });
    }

}