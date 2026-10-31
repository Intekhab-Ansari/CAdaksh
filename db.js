const { createClient } = require('@supabase/supabase-js');

// Hostinger automatically injects Supabase environment variables into your app environment.
// Supports SUPABASE_URL, NEXT_PUBLIC_SUPABASE_URL, and anon/service keys.
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_API_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;

module.exports = {
  createClient,
  supabase,
};
