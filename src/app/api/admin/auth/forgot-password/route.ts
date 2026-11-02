import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createAndSaveOtp, ADMIN_EMAIL } from '@/lib/adminAuth';

const GMAIL_USER = process.env.GMAIL_USER || 'dakshdesai0109@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || '';

export async function POST() {
  try {
    if (!GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Email service credentials not configured on server.' },
        { status: 500 }
      );
    }

    // 1. Generate 6-digit OTP and store state
    const { otp, expiresAt } = await createAndSaveOtp();

    // 2. Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const formattedTime = new Date().toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
    });

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Security Verification Code</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 580px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 16px rgba(11, 21, 40, 0.06);" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Top Header -->
          <tr>
            <td style="background-color: #0B1528; padding: 24px 32px; border-bottom: 3px solid #C5A059;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #C5A059; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 4px;">
                      ✦ OFFICIAL PRACTICE SECURITY DISPATCH
                    </div>
                    <div style="font-size: 20px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.01em;">
                      Daksh Desai &amp; Associates
                    </div>
                    <div style="font-size: 12px; color: #94A3B8; margin-top: 3px; font-family: monospace;">
                      CHARTERED ACCOUNTANTS · MUMBAI · FRN: 165505W
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 36px 32px 28px 32px;">
              <div style="font-size: 13px; font-weight: 700; color: #B45309; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
                SECURITY PASSKEY RESET REQUEST
              </div>
              <h1 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 800; color: #0B1528; line-height: 1.3;">
                Admin Verification Passcode
              </h1>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #334155;">
                A security passkey reset request was initiated for the master administration console of <strong>Daksh Desai &amp; Associates</strong> at <strong>${formattedTime} IST</strong>.
              </p>

              <!-- OTP Callout Box -->
              <div style="background-color: #F8FAFC; border: 2px dashed #C5A059; border-radius: 10px; padding: 24px; text-align: center; margin: 24px 0;">
                <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px;">
                  Your 6-Digit One-Time Security Code
                </div>
                <div style="font-size: 38px; font-weight: 900; letter-spacing: 0.25em; color: #0B1528; font-family: monospace; padding: 6px 0;">
                  ${otp}
                </div>
                <div style="font-size: 12px; color: #B45309; font-weight: 600; margin-top: 6px;">
                  ⏱ Valid for 10 minutes (expires at ${new Date(expiresAt).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })} IST)
                </div>
              </div>

              <div style="background-color: #FEF3C7; border-left: 3px solid #D97706; padding: 12px 16px; border-radius: 0 6px 6px 0; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 13px; color: #92400E; line-height: 1.5;">
                  <strong>Security Advisory:</strong> If you did not initiate this request, please disregard this email. Your master administration console remains protected by your existing passkey.
                </p>
              </div>

              <p style="margin: 0; font-size: 14px; color: #64748B; line-height: 1.6;">
                Enter this code on the website's admin portal to verify your identity and instantly set a new security passkey.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #060E1A; padding: 20px 32px; border-top: 1px solid #1E293B;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 12px; font-weight: 700; color: #FFFFFF;">
                      Daksh Desai &amp; Associates, Chartered Accountants
                    </div>
                    <div style="font-size: 11px; color: #64748B; margin-top: 3px; line-height: 1.5;">
                      Proprietor: CA Daksh Desai (M. No. 648747) · FRN: 165505W<br/>
                      501, Fly Edge, SV Rd, Borivali West, Mumbai – 400092
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 3. Send email to authorized admin
    await transporter.sendMail({
      from: `"Daksh Desai & Associates · Practice Security" <${GMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `Security Verification Code: ${otp} · Daksh Desai & Associates Admin Console`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: `Security OTP sent successfully to registered address (${ADMIN_EMAIL.replace(/^(.{3}).*@/, '$1***@')}).`,
      emailTarget: ADMIN_EMAIL,
    });
  } catch (err: unknown) {
    console.error('Forgot password OTP dispatch error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to send security OTP. Please try again.' },
      { status: 500 }
    );
  }
}

