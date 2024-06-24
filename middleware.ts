import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
  
  if (!currentUser && !request.nextUrl.pathname.startsWith('/access') && !request.nextUrl.pathname.startsWith('/signup') && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/access', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}