import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// In-memory rate limiting map (IP -> timestamps)
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
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLen);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'anonymous';

    if (isRateLimited(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many subscription requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, consent, honeypot } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Subscription confirmed.' });
    }

    if (!email) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Please accept the consent checkbox to receive statutory circulars under the DPDP Act 2023.' },
        { status: 400 }
      );
    }

    const cleanEmail = sanitize(email, 120).toLowerCase();

    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please provide a valid email format.' }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database service is currently initializing. Please try again shortly.' },
        { status: 503 }
      );
    }

    // Check if subscriber already exists
    const { data: existing, error: checkError } = await supabase
      .from('subscribers')
      .select('id, email, status')
      .eq('email', cleanEmail)
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') {
      console.warn('Supabase subscribers select warning:', checkError);
    }

    if (existing) {
      if (existing.status === 'active') {
        return NextResponse.json({
          success: true,
          message: 'You are already subscribed to statutory updates and tax circulars.',
        });
      }

      // Reactivate previously unsubscribed email
      const { error: updateError } = await supabase
        .from('subscribers')
        .update({
          status: 'active',
          consent: true,
          unsubscribed_at: null,
          created_at: new Date().toISOString(),
        })
        .eq('id', existing.id);

      if (updateError) {
        console.error('Failed to reactivate subscriber:', updateError);
        return NextResponse.json({ error: 'Unable to update subscription. Please try again.' }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: 'Your subscription has been successfully reactivated.',
      });
    }

    // Insert new subscriber
    const { error: insertError } = await supabase.from('subscribers').insert([
      {
        email: cleanEmail,
        status: 'active',
        consent: Boolean(consent),
        created_at: new Date().toISOString(),
      },
    ]);

    if (insertError) {
      console.error('Failed to insert subscriber:', insertError);
      return NextResponse.json({ error: 'Unable to register subscription. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing. You will receive official statutory alerts and regulatory bulletins.',
    });
  } catch (err) {
    console.error('Newsletter subscribe error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
