import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {
    try {
        const userId = request.nextUrl.pathname.split('/').pop();

        if (!userId) {
            return new NextResponse('Missing user id', { status: 400 });
        }

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