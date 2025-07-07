// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

// This will run Clerk on every route (except your static assets)
export default clerkMiddleware();

export const config = {
  // Exclude _next/static, _next/image, favicon.ico
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};