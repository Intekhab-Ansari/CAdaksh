import { NextResponse } from 'next/server';
import { validateAdminKey, updateAdminPasskeyWithOptions, listActiveSessions } from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passkey, newPasskey, logoutAllDevices } = body;

    const authCheck = await validateAdminKey(passkey);
    if (!authCheck.valid) {
      return NextResponse.json(
        { error: authCheck.reason || 'Unauthorized: Invalid credentials.' },
        { status: 401 }
      );
    }

    if (!newPasskey || typeof newPasskey !== 'string' || newPasskey.trim().length < 6) {
      return NextResponse.json(
        { error: 'New passkey must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    const { terminatedCount } = await updateAdminPasskeyWithOptions(
      newPasskey.trim(),
      passkey,
      Boolean(logoutAllDevices)
    );

    const { sessions, total } = await listActiveSessions(passkey);

    const message = logoutAllDevices
      ? `Security passkey updated successfully, and ${terminatedCount} other device(s) have been logged out. Only this device remains active.`
      : 'Security passkey updated successfully. All existing devices remain connected.';

    return NextResponse.json({
      success: true,
      message,
      logoutAllDevices: Boolean(logoutAllDevices),
      terminatedCount,
      sessions,
      totalDevices: total,
    });
  } catch (err: unknown) {
    console.error('Change passkey route error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to update passkey.' },
      { status: 500 }
    );
  }
}
