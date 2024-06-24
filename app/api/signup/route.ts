import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create user" }, { status: 400 });
  }
}
