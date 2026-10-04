import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // For Edge Runtime, we'll do a simple cookie check
  // Full session verification will happen in the page components
  const authCookie = request.cookies.get("better-auth.session_token");
  
  // Protect /app routes
  if (request.nextUrl.pathname.startsWith("/app")) {
    if (!authCookie) {
      const signInUrl = new URL("/sign-in", request.url);
      signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Redirect authenticated users away from auth pages
  if ((request.nextUrl.pathname.startsWith("/sign-in") || request.nextUrl.pathname.startsWith("/sign-up")) && authCookie) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/sign-in/:path*", "/sign-up/:path*"],
};

