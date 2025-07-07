import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js|json|png|jpg|svg|ico)).*)",
    "/(api|trpc)(.*)",
  ],
};