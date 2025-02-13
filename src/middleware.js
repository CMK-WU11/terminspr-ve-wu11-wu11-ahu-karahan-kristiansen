import { NextResponse } from "next/server"

export function middleware(request) {
	if (!request.cookies.has("dance_token") || !request.cookies.has("dance_uid")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/kalender/:path*" 
}