import { NextResponse } from 'next/server';
import { validateAdminKey, createAdminSession, listActiveSessions } from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passkey } = body;

    if (!passkey || typeof passkey !== 'string') {
      return NextResponse.json({ error: 'Please enter your Admin Passkey.' }, { status: 400 });
    }

    const authCheck = await validateAdminKey(passkey, false);
    if (!authCheck.valid) {
      return NextResponse.json({ error: authCheck.reason || 'Invalid Admin Passkey.' }, { status: 401 });
    }

    // Extract device metadata
    const userAgent = request.headers.get('user-agent') || '';
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = (forwarded ? forwarded.split(',')[0].trim() : realIp) || '127.0.0.1';

    // Register active device session
    const session = await createAdminSession(userAgent, ip);
    const { total } = await listActiveSessions(session.token);

    return NextResponse.json({
      success: true,
      message: 'Authenticated successfully! New device session registered.',
      sessionToken: session.token,
      session,
      totalDevices: total,
    });
  } catch (err: unknown) {
    console.error('Admin login error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal login error.' },
      { status: 500 }
    );
  }
}
