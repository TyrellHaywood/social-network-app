"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-40 m-1 rounded bg-white text-black flex justify-center">
        <Link href="/login">Log In</Link>
      </div>
      <div className="w-40 m-1 rounded bg-white text-black flex justify-center">
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
