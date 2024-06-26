import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, password, school } = await request.json();

    // hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        school,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create user" }, { status: 400 });
  }
}
