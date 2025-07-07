import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "GPT Assistant Portal",
  description: "Secure login for internal assistant",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header style={{ padding: 20, borderBottom: "1px solid #eee" }}>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}