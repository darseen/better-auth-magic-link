"use client";

import { authClient } from "@/lib/auth-client";
import { useState, type FormEvent } from "react";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !referredBy) return;

    try {
      setLoading(true);

      await authClient.signIn.magicLink({
        email,
        callbackURL: "/welcome",
        fetchOptions: { query: { referredBy } },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setEmail("");
      setReferredBy("");
    }
  };

  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        className="rounded-md border-2 border-gray-300 p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Referred By"
        className="rounded-md border-2 border-gray-300 p-2"
        value={referredBy}
        onChange={(e) => setReferredBy(e.target.value)}
      />

      <button
        disabled={loading}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:cursor-pointer mt-4"
      >
        Sign up
      </button>
    </form>
  );
}
