import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Get the user's authentication status from cookies or session
  const isAuthenticated = req.cookies.get('auth_token'); // Adjust according to your authentication method

  // Define the URLs to protect
  const loginURL = new URL('/auth/login', req.url);
  const registerURL = new URL('/auth/register', req.url);

  // Check if the user is authenticated
  if (isAuthenticated) {
    // Redirect to home if authenticated
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Continue to the requested page if not authenticated
  return NextResponse.next();
}
