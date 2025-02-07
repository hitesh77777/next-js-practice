import { NextResponse, type NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(`hello ~ file: middleware.ts:5 ~ middleware ~ request:`, request);
  if (request.nextUrl.pathname === "/events") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/events/:path*",  
};
