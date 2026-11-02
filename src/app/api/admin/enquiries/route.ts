import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { validateAdminKey } from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passkey } = body;

    const authCheck = await validateAdminKey(passkey);
    if (!authCheck.valid) {
      return NextResponse.json({ error: authCheck.reason || 'Unauthorized: Invalid Admin Passkey.' }, { status: 401 });
    }

    if (!supabase) {
      return NextResponse.json({ error: 'Database service unavailable.' }, { status: 503 });
    }

    const { data: enquiries, error, count } = await supabase
      .from('enquiries')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to fetch enquiries:', error);
      return NextResponse.json({ error: 'Database query failed.' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      total: count || 0,
      enquiries: enquiries || [],
    });
  } catch (err) {
    console.error('Admin enquiries error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

