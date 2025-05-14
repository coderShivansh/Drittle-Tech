import { log } from 'console';
import httpStatus from 'http-status';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const clientIp = req.headers.get('x-forwarded-for');

  log(clientIp);

  return NextResponse.json(
    { message: `Hello from Server\nRequested IP: ${clientIp}` },
    { status: httpStatus.OK }
  );
};
