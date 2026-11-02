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
      return NextResponse.json({ error: 'Supabase connection not initialized.' }, { status: 503 });
    }

    const { data: subscribers, error, count } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to fetch subscribers:', error);
      return NextResponse.json({ error: 'Database query failed.' }, { status: 500 });
    }

    const activeCount = subscribers?.filter(s => s.status === 'active').length || 0;
    const unsubCount = (count || 0) - activeCount;

    return NextResponse.json({
      success: true,
      total: count || 0,
      activeCount,
      unsubCount,
      subscribers: subscribers || [],
    });
  } catch (err) {
    console.error('Admin subscribers error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

