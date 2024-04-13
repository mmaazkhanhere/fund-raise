/*This API route serves as an endpoint for retrieving user data and their associated
camapaigns */

import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {
    try {
        const userId = request.nextUrl.pathname.split('/').pop(); /*get the user
        id from the request path */

        if (!userId) {
            //if no userId, return missing details response and error message
            return new NextResponse('Missing user id', { status: 400 });
        }

        //find the user and return in json response
        const user = await prismadb.user.findUnique({
            where: {
                id: userId
            },
            include: {
                campaigns: true
            }
        })

        return NextResponse.json(user);

    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}