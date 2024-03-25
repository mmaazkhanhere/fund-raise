import { clerkClient } from "@clerk/nextjs/server";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import prismadb from '@/lib/prismadb';

type EventType = "user.created" | "user.updated" | "user.deleted" | "*";

type Event = {
    data: Record<string, string | number>;
    object: "event";
    type: EventType;
};

export async function POST(request: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
    }

    const payload = await request.json();

    const headersList = headers();
    const heads = {
        "svix-id": headersList.get("svix-id"),
        "svix-timestamp": headersList.get("svix-timestamp"),
        "svix-signature": headersList.get("svix-signature"),
    };


    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: Event | null = null;

    try {
        evt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as Event;
    } catch (err) {
        console.error((err as Error).message);
        return NextResponse.json({}, { status: 400 });
    }


    const eventType: EventType = evt.type;

    try {
        if (eventType === 'user.created') {
            // Handle user signup event
            await handleUserSignup(evt.data);
        } else if (eventType === 'user.updated') {
            // Handle user update event
            await handleUserUpdate(evt.data);
        }
        else if (eventType === 'user.deleted') {
            //handle user deleted event
            await handleDeleteUser(evt.data);
        }
    } catch (error) {
        console.error('Error handling webhook event:', error);
        return new Response('Error handling webhook event', { status: 500 });
    }

    return new Response('', { status: 200 });
}

async function handleUserSignup(userData: any) {

    try {
        await prismadb.user.create({
            data: {
                id: userData.id,
                firstName: userData.first_name,
                lastName: userData.last_name,
                username: userData.username,
                email: userData.email_addresses[0].email_address,
                profileImage: userData.image_url
            },

        });
    } catch (error) {
        console.error('Error inserting user data:', error);
        throw error;
    }
}

async function handleUserUpdate(userData: any) {
    try {
        await prismadb.user.update({
            where: {
                id: userData.id
            },
            data: {
                firstName: userData.first_name,
                lastName: userData.last_name,
                username: userData.username,
                email: userData.email_addresses[0].email_address,
                profileImage: userData.image_url
            },
        });
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
    }
}

async function handleDeleteUser(userData: any) {
    try {
        await prismadb.user.deleteMany({
            where: {
                id: userData.id
            }
        });
    } catch (error) {
        console.error('Error deleting user data:', error);
        throw error;
    }
}
