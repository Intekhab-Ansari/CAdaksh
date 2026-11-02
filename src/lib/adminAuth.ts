import crypto from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabase';

const DEFAULT_PASSKEY = process.env.ADMIN_NEWSLETTER_KEY || 'daksh2026';
export const ADMIN_EMAIL = process.env.GMAIL_USER || 'dakshdesai0109@gmail.com';

const AUTH_CACHE_PATH = path.join(process.cwd(), 'data', 'admin-auth.json');
const CONFIG_CACHE_PATH = path.join(process.cwd(), 'data', 'site-config.json');

export interface SessionInfo {
  token: string;
  createdAt: number;
  lastActiveAt: number;
  expiresAt: number;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  deviceLabel: string;
  ip: string;
  isCurrent?: boolean;
}

export interface AuthState {
  customPasskey?: string;
  otpHash?: string;
  otpExpiresAt?: number;
  otpAttempts?: number;
  sessions?: { [token: string]: SessionInfo };
  failedAttempts?: { count: number; lockUntil: number };
}

/**
 * Parses user agent string into human-friendly device name and type.
 */
export function parseDeviceMetadata(userAgent: string): { deviceType: 'desktop' | 'mobile' | 'tablet'; deviceLabel: string } {
  if (!userAgent || typeof userAgent !== 'string') {
    return { deviceType: 'desktop', deviceLabel: 'Web Console' };
  }

  const isMobile = /mobile|iphone|ipod|android.*mobile/i.test(userAgent);
  const isTablet = /ipad|tablet|(android(?!.*mobile))/i.test(userAgent);

  let os = 'Unknown OS';
  if (/windows nt 10/i.test(userAgent)) os = 'Windows 10/11';
  else if (/windows/i.test(userAgent)) os = 'Windows';
  else if (/iphone/i.test(userAgent)) os = 'iPhone';
  else if (/ipad/i.test(userAgent)) os = 'iPad';
  else if (/macintosh|mac os x/i.test(userAgent)) os = 'macOS';
  else if (/android/i.test(userAgent)) os = 'Android';
  else if (/linux/i.test(userAgent)) os = 'Linux';

  let browser = 'Browser';
  if (/edg/i.test(userAgent)) browser = 'Edge';
  else if (/opr|opera/i.test(userAgent)) browser = 'Opera';
  else if (/chrome|crios/i.test(userAgent)) browser = 'Chrome';
  else if (/firefox|fxios/i.test(userAgent)) browser = 'Firefox';
  else if (/safari/i.test(userAgent)) browser = 'Safari';

  return {
    deviceType: isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop',
    deviceLabel: `${browser} on ${os}`,
  };
}

export async function readAuthState(): Promise<AuthState> {
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

export async function saveAuthState(state: AuthState): Promise<void> {
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
 * When a session token is validated, updates its lastActiveAt.
 */
export async function validateAdminKey(key: string, updateActivity = true): Promise<{ valid: boolean; session?: SessionInfo; reason?: string }> {
  if (!key || typeof key !== 'string') {
    return { valid: false, reason: 'No passkey or session token provided' };
  }

  const cleanKey = key.trim();
  const state = await readAuthState();
  const now = Date.now();

  // Check brute force lockout
  if (state.failedAttempts && state.failedAttempts.lockUntil > now) {
    const remainingSecs = Math.ceil((state.failedAttempts.lockUntil - now) / 1000);
    return {
      valid: false,
      reason: `Security lockout: Console locked for ${remainingSecs} seconds. Use Email OTP to unlock.`,
    };
  }

  // 1. Check if it's an active registered session token
  if (state.sessions && state.sessions[cleanKey]) {
    const session = state.sessions[cleanKey];
    if (session.expiresAt > now) {
      if (updateActivity) {
        session.lastActiveAt = now;
        await saveAuthState(state);
      }
      return { valid: true, session };
    } else {
      // Expired: delete
      delete state.sessions[cleanKey];
      await saveAuthState(state);
      return { valid: false, reason: 'Session expired. Please log in again.' };
    }
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

  // 4. Check Default / Env Passkey
  if (cleanKey === DEFAULT_PASSKEY) {
    if (state.failedAttempts?.count) {
      state.failedAttempts = { count: 0, lockUntil: 0 };
      await saveAuthState(state);
    }
    return { valid: true };
  }

  // Failed attempt: record and check lockout
  const currentCount = (state.failedAttempts?.count || 0) + 1;
  const lockUntil = currentCount >= 5 ? now + 15 * 60 * 1000 : 0;
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
    reason: `Invalid Admin Passkey. (${5 - currentCount} attempt(s) remaining)`,
  };
}

/**
 * Registers a new session for a device and returns the token and session object.
 */
export async function createAdminSession(userAgent = '', ip = '127.0.0.1'): Promise<SessionInfo> {
  const token = 'dda_sess_' + crypto.randomBytes(32).toString('hex');
  const now = Date.now();
  const expiresAt = now + 7 * 24 * 60 * 60 * 1000; // 7 days

  const { deviceType, deviceLabel } = parseDeviceMetadata(userAgent);

  const cleanIp = ip.includes('::ffff:') ? ip.replace('::ffff:', '') : ip;

  const session: SessionInfo = {
    token,
    createdAt: now,
    lastActiveAt: now,
    expiresAt,
    deviceType,
    deviceLabel,
    ip: cleanIp || 'Private Network',
  };

  const state = await readAuthState();
  if (!state.sessions) {
    state.sessions = {};
  }

  // Prune expired sessions
  for (const [sToken, sInfo] of Object.entries(state.sessions)) {
    if (sInfo.expiresAt < now) {
      delete state.sessions[sToken];
    }
  }

  state.sessions[token] = session;
  // Clear any failed attempts upon successful login session creation
  state.failedAttempts = { count: 0, lockUntil: 0 };
  await saveAuthState(state);

  return session;
}

/**
 * Returns a list of active sessions with current session marked.
 */
export async function listActiveSessions(currentToken?: string): Promise<{ sessions: SessionInfo[]; total: number }> {
  const state = await readAuthState();
  const now = Date.now();
  const sessions: SessionInfo[] = [];

  if (state.sessions) {
    for (const [token, sInfo] of Object.entries(state.sessions)) {
      if (sInfo.expiresAt > now) {
        sessions.push({
          ...sInfo,
          isCurrent: currentToken ? token === currentToken : false,
        });
      }
    }
  }

  // Sort: current first, then by lastActiveAt descending
  sessions.sort((a, b) => {
    if (a.isCurrent) return -1;
    if (b.isCurrent) return 1;
    return b.lastActiveAt - a.lastActiveAt;
  });

  return { sessions, total: sessions.length };
}

/**
 * Terminates a specific session.
 */
export async function terminateSession(tokenToKill: string): Promise<boolean> {
  const state = await readAuthState();
  if (state.sessions && state.sessions[tokenToKill]) {
    delete state.sessions[tokenToKill];
    await saveAuthState(state);
    return true;
  }
  return false;
}

/**
 * Terminates all sessions except the current session.
 */
export async function terminateAllOtherSessions(currentToken: string): Promise<number> {
  const state = await readAuthState();
  let count = 0;

  if (state.sessions) {
    for (const token of Object.keys(state.sessions)) {
      if (token !== currentToken) {
        delete state.sessions[token];
        count++;
      }
    }
    await saveAuthState(state);
  }

  return count;
}

/**
 * Updates the admin passkey with two options:
 * Option 1: logoutAllDevices = false -> Keep active sessions logged in.
 * Option 2: logoutAllDevices = true  -> Invalidate all other sessions except current.
 */
export async function updateAdminPasskeyWithOptions(
  newPasskey: string,
  currentToken?: string,
  logoutAllDevices = false
): Promise<{ success: boolean; terminatedCount: number }> {
  if (!newPasskey || newPasskey.trim().length < 6) {
    throw new Error('New passkey must be at least 6 characters long.');
  }

  const state = await readAuthState();
  state.customPasskey = newPasskey.trim();
  state.failedAttempts = { count: 0, lockUntil: 0 };

  let terminatedCount = 0;
  if (logoutAllDevices && state.sessions) {
    for (const token of Object.keys(state.sessions)) {
      if (currentToken && token !== currentToken) {
        delete state.sessions[token];
        terminatedCount++;
      } else if (!currentToken) {
        delete state.sessions[token];
        terminatedCount++;
      }
    }
  }

  await saveAuthState(state);

  // Also persist in local site-config.json
  try {
    const raw = await fs.readFile(CONFIG_CACHE_PATH, 'utf-8');
    const cfg = JSON.parse(raw);
    cfg.adminPasskey = newPasskey.trim();
    await fs.writeFile(CONFIG_CACHE_PATH, JSON.stringify(cfg, null, 2), 'utf-8');
  } catch {
    // ignore
  }

  return { success: true, terminatedCount };
}

/**
 * Sets a new custom passkey and clears lockout (backward compatibility).
 */
export async function updateAdminPasskey(newPasskey: string): Promise<boolean> {
  const res = await updateAdminPasskeyWithOptions(newPasskey, undefined, false);
  return res.success;
}

/**
 * Creates and saves a 6-digit OTP with a 10-minute expiry.
 */
export async function createAndSaveOtp(): Promise<{ otp: string; expiresAt: number }> {
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

  // OTP verified! Clear OTP and lockout
  state.otpHash = undefined;
  state.otpExpiresAt = undefined;
  state.otpAttempts = 0;
  state.failedAttempts = { count: 0, lockUntil: 0 };
  await saveAuthState(state);

  return { success: true };
}
