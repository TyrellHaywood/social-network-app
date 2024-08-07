"use server";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <pre>{JSON.stringify(session)}</pre>
      <div className="w-40 m-1 rounded bg-white text-black flex justify-center">
        <Link href="/login">Log In</Link>
      </div>
      <div className="w-40 m-1 rounded bg-white text-black flex justify-center">
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
