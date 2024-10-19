import { NextResponse } from 'next/server';

export const middleware = async () => {
  // console.log('middleware', request.url);
  return NextResponse.next();
};

export const config = {
  matcher: ['/api/:path*'],
};
