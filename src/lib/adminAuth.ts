import crypto from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabase';

const DEFAULT_PASSKEY = process.env.ADMIN_NEWSLETTER_KEY || 'daksh2026';
export const ADMIN_EMAIL = process.env.GMAIL_USER || 'dakshdesai0109@gmail.com';

const AUTH_CACHE_PATH = path.join(process.cwd(), 'data', 'admin-auth.json');
const CONFIG_CACHE_PATH = path.join(process.cwd(), 'data', 'site-config.json');

interface AuthState {
  customPasskey?: string;
  otpHash?: string;
  otpExpiresAt?: number;
  otpAttempts?: number;
  activeSessions?: { [token: string]: number }; // token -> expiry
  failedAttempts?: { count: number; lockUntil: number };
}

async function readAuthState(): Promise<AuthState> {
  // 1. Try reading from Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('config')
        .eq('id', 'admin_auth_state')
        .maybeSingle();

      if (!error && data?.config) {
        return data.config as AuthState;
      }
    } catch {
      // fallback to file
    }
  }

  // 2. Fallback to local file
  try {
    const raw = await fs.readFile(AUTH_CACHE_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function saveAuthState(state: AuthState): Promise<void> {
  // 1. Write local file
  try {
    const dir = path.join(process.cwd(), 'data');
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(AUTH_CACHE_PATH, JSON.stringify(state, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Local auth state write warning:', err);
  }

  // 2. Write Supabase
  if (supabase) {
    try {
      await supabase
        .from('site_settings')
        .upsert(
          {
            id: 'admin_auth_state',
            config: state,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'id' }
        );
    } catch (err) {
      console.warn('Supabase auth state save warning:', err);
    }
  }
}

function hashValue(val: string): string {
  return crypto.createHash('sha256').update(val.trim()).digest('hex');
}

/**
 * Validates a submitted passkey or session token.
 * Accepts:
 * - Environment passkey (ADMIN_NEWSLETTER_KEY)
 * - Custom user-set passkey
 * - Valid unexpired session token
 */
export async function validateAdminKey(key: string): Promise<{ valid: boolean; reason?: string }> {
  if (!key || typeof key !== 'string') {
    return { valid: false, reason: 'No passkey provided' };
  }

  const cleanKey = key.trim();
  const state = await readAuthState();

  // Check brute force lockout
  const now = Date.now();
  if (state.failedAttempts && state.failedAttempts.lockUntil > now) {
    const remainingSecs = Math.ceil((state.failedAttempts.lockUntil - now) / 1000);
    return {
      valid: false,
      reason: `Too many failed attempts. Console locked for ${remainingSecs} seconds.`,
    };
  }

  // 1. Check Default / Env Passkey
  if (cleanKey === DEFAULT_PASSKEY) {
    // Reset failed counter
    if (state.failedAttempts?.count) {
      state.failedAttempts = { count: 0, lockUntil: 0 };
      await saveAuthState(state);
    }
    return { valid: true };
  }

  // 2. Check Custom Stored Passkey
  if (state.customPasskey && cleanKey === state.customPasskey) {
    if (state.failedAttempts?.count) {
      state.failedAttempts = { count: 0, lockUntil: 0 };
      await saveAuthState(state);
    }
    return { valid: true };
  }

  // 3. Check also in site-config.json
  try {
    const cfgRaw = await fs.readFile(CONFIG_CACHE_PATH, 'utf-8');
    const cfg = JSON.parse(cfgRaw);
    if (cfg?.adminPasskey && cleanKey === cfg.adminPasskey) {
      return { valid: true };
    }
  } catch {
    // ignore
  }

  // 4. Check active session token
  if (state.activeSessions && state.activeSessions[cleanKey]) {
    const expiry = state.activeSessions[cleanKey];
    if (expiry > now) {
      return { valid: true };
    }
  }

  // Failed attempt: record and check lockout
  const currentCount = (state.failedAttempts?.count || 0) + 1;
  const lockUntil = currentCount >= 5 ? now + 15 * 60 * 1000 : 0; // 15 mins lock
  state.failedAttempts = { count: currentCount, lockUntil };
  await saveAuthState(state);

  if (currentCount >= 5) {
    return {
      valid: false,
      reason: 'Security lockout: 5 failed attempts reached. Console locked for 15 minutes. Use OTP reset to unlock immediately.',
    };
  }

  return {
    valid: false,
    reason: `Invalid Admin Passkey. (${5 - currentCount} attempt(s) remaining before security lockout)`,
  };
}

/**
 * Creates and saves a 6-digit OTP with a 10-minute expiry.
 */
export async function createAndSaveOtp(): Promise<{ otp: string; expiresAt: number }> {
  // Generate secure 6-digit numeric OTP
  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

  const state = await readAuthState();
  state.otpHash = hashValue(otp);
  state.otpExpiresAt = expiresAt;
  state.otpAttempts = 0;

  await saveAuthState(state);
  return { otp, expiresAt };
}

/**
 * Verifies submitted OTP.
 */
export async function verifySubmittedOtp(enteredOtp: string): Promise<{ success: boolean; error?: string }> {
  if (!enteredOtp || typeof enteredOtp !== 'string') {
    return { success: false, error: 'Please enter the 6-digit verification code.' };
  }

  const cleanOtp = enteredOtp.trim();
  const state = await readAuthState();
  const now = Date.now();

  if (!state.otpHash || !state.otpExpiresAt) {
    return { success: false, error: 'No active OTP request found. Please request a new verification code.' };
  }

  if (now > state.otpExpiresAt) {
    return { success: false, error: 'Verification code has expired (10-minute limit). Please request a new code.' };
  }

  if ((state.otpAttempts || 0) >= 5) {
    return { success: false, error: 'Too many incorrect attempts on this code. Please request a new OTP.' };
  }

  const submittedHash = hashValue(cleanOtp);
  if (submittedHash !== state.otpHash) {
    state.otpAttempts = (state.otpAttempts || 0) + 1;
    await saveAuthState(state);
    return {
      success: false,
      error: `Incorrect verification code. (${5 - state.otpAttempts} attempts remaining)`,
    };
  }

  // OTP verified! Clear OTP and any failed attempt lockouts
  state.otpHash = undefined;
  state.otpExpiresAt = undefined;
  state.otpAttempts = 0;
  state.failedAttempts = { count: 0, lockUntil: 0 };
  await saveAuthState(state);

  return { success: true };
}

/**
 * Sets a new custom passkey and clears lockout.
 */
export async function updateAdminPasskey(newPasskey: string): Promise<boolean> {
  if (!newPasskey || newPasskey.trim().length < 6) {
    throw new Error('New passkey must be at least 6 characters long.');
  }

  const state = await readAuthState();
  state.customPasskey = newPasskey.trim();
  state.failedAttempts = { count: 0, lockUntil: 0 };
  await saveAuthState(state);

  // Also persist in local site-config.json for convenience
  try {
    const raw = await fs.readFile(CONFIG_CACHE_PATH, 'utf-8');
    const cfg = JSON.parse(raw);
    cfg.adminPasskey = newPasskey.trim();
    await fs.writeFile(CONFIG_CACHE_PATH, JSON.stringify(cfg, null, 2), 'utf-8');
  } catch {
    // ignore
  }

  return true;
}

/**
 * Creates a persistent session token for authenticated admin.
 */
export async function createAdminSession(): Promise<string> {
  const token = 'dda_sess_' + crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days

  const state = await readAuthState();
  if (!state.activeSessions) {
    state.activeSessions = {};
  }
  state.activeSessions[token] = expiresAt;

  // Prune expired sessions
  const now = Date.now();
  for (const [sToken, sExpiry] of Object.entries(state.activeSessions)) {
    if (sExpiry < now) {
      delete state.activeSessions[sToken];
    }
  }

  await saveAuthState(state);
  return token;
}

