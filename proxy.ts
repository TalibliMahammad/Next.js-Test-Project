import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";


export function proxy(request:NextRequest){

    const token = request.cookies.get('auth-token')
    const {pathname}= request.nextUrl

    if(pathname.startsWith('./app/dashboard') && ! token){
         return NextResponse.redirect(
            new URL('./app/login', request.url)
         )
    }

    if(pathname === './app/login' && token){
        return NextResponse.redirect(
            new URL('/app/dashboard',request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
  ]
}