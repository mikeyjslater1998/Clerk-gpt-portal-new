import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function GPTPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to your GPT Assistant</h1>
      <iframe
        src="https://chat.openai.com/g/gpt-your-id"
        style={{ width: "100%", height: "80vh", border: "none" }}
      />
    </div>
  );
}
