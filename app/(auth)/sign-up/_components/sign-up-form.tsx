"use client";

import type { FormEvent } from "react";

export default function SignUpForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        className="rounded-md border-2 border-gray-300 p-2"
      />
      <input
        type="text"
        placeholder="Referred By"
        className="rounded-md border-2 border-gray-300 p-2"
      />

      <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:cursor-pointer mt-4">
        Sign up
      </button>
    </form>
  );
}
