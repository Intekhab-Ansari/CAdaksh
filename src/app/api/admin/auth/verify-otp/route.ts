import { NextResponse } from 'next/server';
import {
  verifySubmittedOtp,
  updateAdminPasskey,
  createAdminSession,
} from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { otp, newPasskey } = body;

    if (!otp) {
      return NextResponse.json(
        { error: 'Please enter the 6-digit verification code.' },
        { status: 400 }
      );
    }

    // 1. Verify OTP
    const verifyResult = await verifySubmittedOtp(otp);
    if (!verifyResult.success) {
      return NextResponse.json(
        { error: verifyResult.error || 'Invalid verification code.' },
        { status: 401 }
      );
    }

    // 2. If a new passkey was requested, update it
    let passkeyUpdated = false;
    if (newPasskey && typeof newPasskey === 'string' && newPasskey.trim().length >= 6) {
      await updateAdminPasskey(newPasskey.trim());
      passkeyUpdated = true;
    }

    // 3. Create persistent authenticated session
    const sessionToken = await createAdminSession();

    return NextResponse.json({
      success: true,
      message: passkeyUpdated
        ? 'Security verification successful! New Admin Passkey has been updated.'
        : 'Security verification successful! Welcome back CA Daksh Desai.',
      sessionToken,
      passkeyUpdated,
    });
  } catch (err: unknown) {
    console.error('Verify OTP route error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal error during verification.' },
      { status: 500 }
    );
  }
}
