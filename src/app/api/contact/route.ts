import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Simple in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < windowMs);
  if (recent.length >= limit) {
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function sanitize(str: unknown, maxLen: number): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // Strip HTML tags
    .trim()
    .slice(0, maxLen);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'anonymous';

    if (isRateLimited(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before sending another enquiry.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, consent, honeypot } = body;

    // Honeypot check: If bot fills hidden honeypot field, reject silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received.' });
    }

    // Required fields check
    if (!firstName || !lastName || !email || !consent) {
      return NextResponse.json(
        { error: 'Please provide all required fields and accept the consent checkbox.' },
        { status: 400 }
      );
    }

    // Clean and validate inputs
    const cleanFirstName = sanitize(firstName, 80);
    const cleanLastName = sanitize(lastName, 80);
    const cleanEmail = sanitize(email, 120).toLowerCase();
    const cleanPhone = sanitize(phone, 25);
    const cleanSubject = sanitize(subject, 150);
    const cleanMessage = sanitize(message, 3000);

    if (!cleanFirstName || !cleanLastName) {
      return NextResponse.json({ error: 'Valid name is required.' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Record in Supabase if credentials exist
    if (supabase) {
      try {
        await supabase.from('enquiries').insert([
          {
            first_name: cleanFirstName,
            last_name: cleanLastName,
            email: cleanEmail,
            phone: cleanPhone || null,
            subject: cleanSubject || 'General Enquiry',
            message: cleanMessage || '',
            consent: Boolean(consent),
            created_at: new Date().toISOString(),
          },
        ]);
      } catch (dbErr) {
        console.warn('Supabase enquiry insert warning:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry received pursuant to ICAI Code of Ethics and DPDP Act 2023.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process enquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
