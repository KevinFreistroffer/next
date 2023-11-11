import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/linear-regression",
};

export function middleware(request: NextRequest) {
  console.log("middleware", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/linear-regression")) {
    return NextResponse.rewrite(new URL("/abcdfasdf-2", request.url));
  }
}
