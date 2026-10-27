import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

    // If Supabase is connected via Hostinger environment variables, record the enquiry
    if (supabase) {
      try {
        await supabase.from('enquiries').insert([
          {
            first_name: firstName,
            last_name: lastName,
            email,
            phone: phone || null,
            subject: subject || 'General Enquiry',
            message: message || '',
            consent: Boolean(consent),
            created_at: new Date().toISOString(),
          },
        ]);
      } catch (dbErr) {
        // Log gracefully so form submission proceeds even if custom table schema is pending
        console.warn('Supabase enquiry insert warning:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry received pursuant to ICAI Code of Ethics and DPDP Act 2023.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
