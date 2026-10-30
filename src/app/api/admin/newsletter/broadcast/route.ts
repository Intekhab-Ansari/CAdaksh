import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';

const ADMIN_PASSKEY = process.env.ADMIN_NEWSLETTER_KEY || 'daksh2026';
const GMAIL_USER = process.env.GMAIL_USER || 'dakshdesai0109@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || '';

function generateEmailHtml(title: string, message: string, recipientEmail: string): string {
  const unsubscribeUrl = `https://dakshdesaiassociates.com/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;
  
  // Format message lines into HTML paragraphs
  const formattedBody = message
    .split('\n\n')
    .map(p => `<p style="margin: 0 0 16px 0; line-height: 1.65; color: #1E293B; font-size: 15px;">${p.replace(/\n/g, '<br/>')}</p>`)
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 16px rgba(11, 21, 40, 0.06);" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Sovereign Top Banner -->
          <tr>
            <td style="background-color: #0B1528; padding: 24px 32px; border-bottom: 3px solid #C5A059;">
              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; color: #C5A059; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 4px;">
                      ✦ ICAI REGISTERED PRACTICE CIRCULAR
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

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 36px 32px 28px 32px;">
              <h1 style="margin: 0 0 20px 0; font-size: 22px; font-weight: 800; color: #0B1528; line-height: 1.3; letter-spacing: -0.01em;">
                ${title}
              </h1>
              
              <div style="background-color: #FDFBF7; border-left: 3px solid #C5A059; padding: 12px 16px; margin-bottom: 24px; border-radius: 0 6px 6px 0;">
                <span style="font-size: 12px; font-weight: 700; color: #8C651F; text-transform: uppercase; letter-spacing: 0.05em;">
                  Statutory Practice &amp; Regulatory Notice
                </span>
              </div>

              ${formattedBody}

              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
                <div style="font-size: 14px; font-weight: 750; color: #0B1528;">Daksh Desai, ACA (M. No. 648747)</div>
                <div style="font-size: 13px; color: #64748B;">Proprietor &amp; Principal · Daksh Desai &amp; Associates</div>
                <div style="font-size: 12px; color: #64748B; margin-top: 4px;">Chambers: Nariman Point &amp; Borivali West, Mumbai</div>
              </div>
            </td>
          </tr>

          <!-- Statutory Disclaimer Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 24px 32px; border-top: 1px solid #E2E8F0; font-size: 11px; line-height: 1.6; color: #64748B;">
              <p style="margin: 0 0 10px 0;">
                <strong>ICAI STATUTORY PROTOCOL &amp; DPDP ACT 2023 NOTICE:</strong> This technical bulletin is circulated strictly pursuant to the Code of Ethics issued by the Institute of Chartered Accountants of India (ICAI) upon your specific opt-in request. It contains objective regulatory information and does not constitute a commercial solicitation or guaranteed advisory opinion.
              </p>
              <p style="margin: 0 0 12px 0;">
                You are registered with the email: <span style="color: #0B1528; font-weight: 600;">${recipientEmail}</span>.
              </p>
              <div>
                <a href="${unsubscribeUrl}" style="color: #8C651F; text-decoration: underline; font-weight: 600;">
                  Unsubscribe from technical circulars
                </a>
                &nbsp;·&nbsp;
                <a href="https://dakshdesaiassociates.com/privacy" style="color: #64748B; text-decoration: underline;">
                  Privacy Policy
                </a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passkey, subject, heading, content, testOnly } = body;

    // Verify Admin Passkey
    if (!passkey || passkey !== ADMIN_PASSKEY) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Admin Passkey.' }, { status: 401 });
    }

    if (!subject || !content) {
      return NextResponse.json({ error: 'Subject and Content are required fields.' }, { status: 400 });
    }

    // Verify Gmail configuration
    if (!GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          error:
            'GMAIL_APP_PASSWORD is not set in environment variables. Please add a 16-character Google App Password in Hostinger / .env.local.',
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer Gmail Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const displayTitle = heading || subject;

    // If Test Mode: send only to the admin/owner email
    if (testOnly) {
      const testEmailHtml = generateEmailHtml(displayTitle, content, GMAIL_USER);
      await transporter.sendMail({
        from: `"Daksh Desai & Associates" <${GMAIL_USER}>`,
        to: GMAIL_USER,
        subject: `[TEST PREVIEW] ${subject}`,
        html: testEmailHtml,
      });

      return NextResponse.json({
        success: true,
        testMode: true,
        message: `Test email sent successfully to ${GMAIL_USER}. Check your inbox!`,
      });
    }

    // Live Broadcast Mode: Fetch active subscribers
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase database client not initialized.' }, { status: 503 });
    }

    const { data: subscribers, error: dbError } = await supabase
      .from('subscribers')
      .select('email')
      .eq('status', 'active');

    if (dbError) {
      console.error('Failed to query subscribers for broadcast:', dbError);
      return NextResponse.json({ error: 'Failed to retrieve subscribers list.' }, { status: 500 });
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No active subscribers found in the database. When visitors subscribe, they will appear here.',
      }, { status: 400 });
    }

    let successCount = 0;
    let failureCount = 0;

    // Dispatch email to each subscriber with their unique unsubscribe token
    for (const sub of subscribers) {
      try {
        const emailHtml = generateEmailHtml(displayTitle, content, sub.email);
        await transporter.sendMail({
          from: `"Daksh Desai & Associates" <${GMAIL_USER}>`,
          to: sub.email,
          subject: subject,
          html: emailHtml,
        });
        successCount++;
      } catch (err) {
        console.error(`Failed to send newsletter to ${sub.email}:`, err);
        failureCount++;
      }
    }

    return NextResponse.json({
      success: true,
      sentCount: successCount,
      failedCount: failureCount,
      totalSubscribers: subscribers.length,
      message: `Broadcast complete: Sent to ${successCount} subscriber(s).`,
    });
  } catch (err: unknown) {
    console.error('Newsletter broadcast error:', err);
    const errMsg = err instanceof Error ? err.message : 'Broadcast failed.';
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

