import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const DEFAULT_PASSCODE = '2026';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'derap_admin_secret_session_2026';

export async function GET(request) {
  try {
    const sessionCookie = request.cookies.get('admin_session')?.value;
    const isAuthenticated = sessionCookie === SESSION_SECRET;

    return NextResponse.json({ authenticated: isAuthenticated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ authenticated: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { passcode } = body;

    const expectedPasscode = process.env.ADMIN_PASSCODE || DEFAULT_PASSCODE;

    if (!passcode || typeof passcode !== 'string' || passcode.trim() !== expectedPasscode) {
      return NextResponse.json(
        { success: false, error: 'Invalid passcode provided. Please enter default (2026).' },
        { status: 401 }
      );
    }

    const response = NextResponse.json(
      { success: true, message: 'Authentication successful' },
      { status: 200 }
    );

    response.cookies.set({
      name: 'admin_session',
      value: SESSION_SECRET,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error during authentication' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const response = NextResponse.json(
      { success: true, message: 'Session logged out' },
      { status: 200 }
    );

    response.cookies.delete('admin_session');
    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error logging out' },
      { status: 500 }
    );
  }
}
