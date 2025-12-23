import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-bold">Better Auth Magic Links</h1>
        <p className="text-xl">with custom fields</p>
      </div>

      <Link
        href="/sign-up"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:cursor-pointer mt-4"
      >
        Sign up
      </Link>
    </main>
  );
}
