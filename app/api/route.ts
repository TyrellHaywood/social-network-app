import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";

// gets session info for server side

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    console.log("GET SESSION: ", session)
    return NextResponse.json({authenticated: !!session})
}