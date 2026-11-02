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

    // 3. Create persistent authenticated session with device info
    const userAgent = request.headers.get('user-agent') || '';
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = (forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip')) || '127.0.0.1';
    const session = await createAdminSession(userAgent, ip);

    return NextResponse.json({
      success: true,
      message: passkeyUpdated
        ? 'Security verification successful! New Admin Passkey has been updated.'
        : 'Security verification successful! Welcome back CA Daksh Desai.',
      sessionToken: session.token,
      session,
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

