import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';
 
export default createMiddleware(routing);
 
export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)', '/([\\w-]+)?/users/(.+)']
}; 