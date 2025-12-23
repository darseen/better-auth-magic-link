import { Metadata } from "next";
import SignUpForm from "./_components/sign-up-form";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up page",
};

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 gap-4">
      <h1 className="text-4xl font-bold">Sign up</h1>
      <SignUpForm />
    </main>
  );
}
