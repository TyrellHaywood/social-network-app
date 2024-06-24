"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div>
      <form action={dispatch}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="text-black"
        />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  );
}
