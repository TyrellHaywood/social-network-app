import { NextResponse } from "next/server"
import { NextRequest } from "next/server";
import prisma from "@/lib/prisma"

export async function POST(request: NextRequest) {
    const res = await request.json()
    const {title, content} = res;
    console.log({res})

    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {create: {
                name: 'Tyrell'
            }}
        }
    })

    return NextResponse.json({result})
}