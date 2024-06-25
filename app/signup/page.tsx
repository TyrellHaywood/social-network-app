"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchUniversities } from "../lib/universities";

export default async function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, school }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } else {
      alert("Password must match");
    }
  };

  const universities = await fetchUniversities();

  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-black my-1 rounded block"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-black my-1 rounded block"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="text-black my-1 rounded block"
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="text-black my-1 rounded block"
        />
        <input
          type="search"
          id="university"
          name="university"
          required
          className="text-black my-1 rounded block "
          placeholder="University / College"
          list="universities-list"
        />
        <datalist id="universities-list">
          {universities.map((university) => (
            <option key={university.name} value={university.name}>
              {university.name} ({university.country})
            </option>
          ))}
        </datalist>
        {error && <p>{error}</p>}
        <button type="submit" className="text-black my-1 bg-white rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
