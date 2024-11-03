import { NextResponse, NextRequest } from 'next/server'

 
export function redirectHomePageMiddleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/pages/client-pages/home-page', request.url))
}
 