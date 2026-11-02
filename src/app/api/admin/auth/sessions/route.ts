import { NextResponse } from 'next/server';
import {
  validateAdminKey,
  createAdminSession,
  listActiveSessions,
  terminateSession,
  terminateAllOtherSessions,
} from '@/lib/adminAuth';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token =
      searchParams.get('token') ||
      request.headers.get('authorization')?.replace('Bearer ', '') ||
      request.headers.get('x-admin-key') ||
      '';

    const authCheck = await validateAdminKey(token);
    if (!authCheck.valid) {
      return NextResponse.json(
        { error: authCheck.reason || 'Unauthorized: Invalid session token.' },
        { status: 401 }
      );
    }

    const userAgent = request.headers.get('user-agent') || '';
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = (forwarded ? forwarded.split(',')[0].trim() : realIp) || '127.0.0.1';

    let activeToken = token;
    let newSessionToken: string | undefined;

    const initialResult = await listActiveSessions(token);
    const hasCurrent = initialResult.sessions.some((s) => s.isCurrent);

    // If current token is not a registered session token (e.g. user logged in with raw passkey daksh2026),
    // or if no active sessions exist, automatically register this authenticated device!
    if (!hasCurrent) {
      const createdSession = await createAdminSession(userAgent, ip);
      activeToken = createdSession.token;
      newSessionToken = createdSession.token;
    }

    const { sessions, total } = await listActiveSessions(activeToken);

    return NextResponse.json({
      success: true,
      sessions,
      totalDevices: Math.max(1, total),
      newSessionToken,
    });
  } catch (err: unknown) {
    console.error('List sessions error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to retrieve active sessions.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, action, targetToken } = body;

    const authCheck = await validateAdminKey(token);
    if (!authCheck.valid) {
      return NextResponse.json(
        { error: authCheck.reason || 'Unauthorized.' },
        { status: 401 }
      );
    }

    if (action === 'terminate_all_others') {
      const count = await terminateAllOtherSessions(token);
      const { sessions, total } = await listActiveSessions(token);
      return NextResponse.json({
        success: true,
        message: `Successfully disconnected ${count} other device(s). Only this device remains logged in.`,
        terminatedCount: count,
        sessions,
        totalDevices: total,
      });
    }

    if (action === 'terminate' && targetToken) {
      const ok = await terminateSession(targetToken);
      const { sessions, total } = await listActiveSessions(token);
      return NextResponse.json({
        success: ok,
        message: ok ? 'Device session terminated successfully.' : 'Session not found.',
        sessions,
        totalDevices: total,
      });
    }

    return NextResponse.json({ error: 'Invalid session action specified.' }, { status: 400 });
  } catch (err: unknown) {
    console.error('Manage session error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to manage session.' },
      { status: 500 }
    );
  }
}

