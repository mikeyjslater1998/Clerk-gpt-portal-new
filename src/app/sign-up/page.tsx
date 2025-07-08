"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "1rem" }}>
      <h1>Create an account</h1>
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
