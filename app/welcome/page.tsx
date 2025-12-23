"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p>You are signed in as {session?.user.email}</p>
      {/* @ts-expect-error - type issue */}
      <p>Referred by: {session?.user.referredBy}</p>

      <button
        onClick={() => {
          authClient.signOut();
          router.replace("/");
        }}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:cursor-pointer mt-4"
      >
        Sign out
      </button>
    </main>
  );
}
