import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function GPTPage() {
<<<<<<< HEAD
  const { userId } = auth();
=======
  const { userId } = await auth();
>>>>>>> 1108845 (💥 Clean reset without node_modules)

  if (!userId) redirect("/sign-in");

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