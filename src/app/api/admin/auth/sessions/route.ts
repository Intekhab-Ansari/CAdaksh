import { NextResponse } from 'next/server';
import {
  validateAdminKey,
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

    const { sessions, total } = await listActiveSessions(token);

    return NextResponse.json({
      success: true,
      sessions,
      totalDevices: total,
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
