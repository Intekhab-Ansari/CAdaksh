import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, consent } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields or consent' },
        { status: 400 }
      );
    }

    // In production, integrate with nodemailer, SendGrid, or AWS SES:
    // console.log('Contact submission received:', { firstName, lastName, email, phone, subject, message });

    return NextResponse.json({
      success: true,
      message: 'Enquiry received pursuant to ICAI Code of Ethics and DPDP Act 2023.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
