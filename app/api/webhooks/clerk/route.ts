import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import prismadb from '@/lib/prismadb'


export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
    }

    const headerPayload = headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', { status: 400 });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', { status: 400 });
    }

    const { id } = evt.data;
    const eventType = evt.type;

    try {
        if (eventType === 'user.created') {
            // Handle user signup event
            await handleUserSignup(evt.data);
        } else if (eventType === 'user.updated') {
            // Handle user update event
            await handleUserUpdate(evt.data);
        }
    } catch (error) {
        console.error('Error handling webhook event:', error);
        return new Response('Error handling webhook event', { status: 500 });
    }

    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log('Webhook body:', body);

    return new Response('', { status: 200 });
}

async function handleUserSignup(userData: any) {

    const fullName = `${userData.first_name} ${userData.last_name}`;

    // Insert user data into the database using Prisma
    await prismadb.user.create({
        data: {
            id: userData.id,
            firstName: userData.first_name,
            lastName: userData.last_name,
            fullName: fullName,
            username: userData.username,
            email: userData.email_addresses[0].email_address,
            profileImage: userData.image_url
        },
    });
}

async function handleUserUpdate(userData: any) {

    const fullName = `${userData.first_name} ${userData.last_name}`;

    // Update user data in the database using Prisma
    await prismadb.user.update({
        where: {
            id: userData.id
        },
        data: {
            firstName: userData.first_name,
            lastName: userData.last_name,
            fullName: fullName,
            username: userData.username,
            email: userData.email_addresses[0].email_address,
            profileImage: userData.image_url
        },
    });
}
