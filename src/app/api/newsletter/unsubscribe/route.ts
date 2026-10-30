import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function sanitize(str: unknown, maxLen: number): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLen);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 });
    }

    const cleanEmail = sanitize(email, 120).toLowerCase();

    if (!supabase) {
      return NextResponse.json({ error: 'Database service unavailable.' }, { status: 503 });
    }

    const { error } = await supabase
      .from('subscribers')
      .update({
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString(),
      })
      .eq('email', cleanEmail);

    if (error) {
      console.error('Unsubscribe error:', error);
      return NextResponse.json({ error: 'Failed to update preferences.' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed from technical bulletins.',
    });
  } catch (err) {
    console.error('Unsubscribe handler error:', err);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}

