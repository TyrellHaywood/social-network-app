import { signIn } from "next-auth/react";
import bcrypt, { compare } from "bcrypt";

export default function loginPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // submit logic
  };

  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <form
        // action={authenticate}
        className="flex items-center justify-center flex-col"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="text-black my-1 rounded block"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="text-black my-1 rounded block"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
