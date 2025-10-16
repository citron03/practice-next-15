import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import manifest from './public/manifest.json';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/manifest.json') {
    return new NextResponse(JSON.stringify(manifest), {
      headers: {
        'Content-Type': 'application/manifest+json',
      },
    });
  }
  return NextResponse.next();
}
