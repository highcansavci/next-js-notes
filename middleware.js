import {NextResponse} from "next/server";

export function middleware(request) {
    console.log("middleware ran")
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/api/users/:path*"]
}