import { NextResponse } from 'next/server';
import { validateAdminKey, updateAdminPasskey } from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passkey, newPasskey } = body;

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

    await updateAdminPasskey(newPasskey.trim());

    return NextResponse.json({
      success: true,
      message: 'Admin passkey updated successfully. Please note this for your next login.',
    });
  } catch (err: unknown) {
    console.error('Change passkey route error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to update passkey.' },
      { status: 500 }
    );
  }
}

