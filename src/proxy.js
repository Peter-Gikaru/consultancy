import { NextResponse } from 'next/server';

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const expectedSecret = process.env.ADMIN_SESSION_SECRET || 'derap_admin_secret_session_2026';

    const isAuthenticated = sessionCookie === expectedSecret;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-admin-authenticated', isAuthenticated ? 'true' : 'false');

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
