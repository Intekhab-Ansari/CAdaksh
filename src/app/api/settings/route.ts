import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabase';
import { defaultSiteConfig, SiteConfig } from '@/lib/siteConfig';
import { validateAdminKey } from '@/lib/adminAuth';
const LOCAL_CONFIG_PATH = path.join(process.cwd(), 'data', 'site-config.json');

async function readLocalConfig(): Promise<Partial<SiteConfig> | null> {
  try {
    const raw = await fs.readFile(LOCAL_CONFIG_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeLocalConfig(cfg: Partial<SiteConfig>): Promise<void> {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(LOCAL_CONFIG_PATH, JSON.stringify(cfg, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Local config file write warning:', err);
  }
}

export async function GET() {
  try {
    let remoteConfig: Partial<SiteConfig> | null = null;

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('site_settings')
          .select('config')
          .eq('id', 'current_config')
          .maybeSingle();

        if (!error && data?.config) {
          remoteConfig = data.config;
        }
      } catch (err) {
        console.warn('Supabase site_settings read warning:', err);
      }
    }

    const localConfig = await readLocalConfig();
    const merged = {
      ...defaultSiteConfig,
      ...(localConfig || {}),
      ...(remoteConfig || {}),
    };

    return NextResponse.json({
      success: true,
      config: merged,
    });
  } catch (err) {
    console.warn('GET /api/settings warning:', err);
    return NextResponse.json({ success: true, config: defaultSiteConfig });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passkey, config } = body;

    const authCheck = await validateAdminKey(passkey);
    if (!authCheck.valid) {
      return NextResponse.json({ error: authCheck.reason || 'Unauthorized: Invalid Admin Passkey.' }, { status: 401 });
    }

    if (!config || typeof config !== 'object') {
      return NextResponse.json({ error: 'Invalid configuration payload.' }, { status: 400 });
    }

    const cleanConfig: Partial<SiteConfig> = { ...config };

    // Always persist to local file system cache
    await writeLocalConfig(cleanConfig);

    // If Supabase is available, upsert to remote database
    let dbSaved = false;
    let dbWarning: string | null = null;

    if (supabase) {
      try {
        const { error: upsertError } = await supabase
          .from('site_settings')
          .upsert(
            {
              id: 'current_config',
              config: cleanConfig,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'id' }
          );

        if (upsertError) {
          dbWarning = `Supabase notice: ${upsertError.message}`;
        } else {
          dbSaved = true;
        }
      } catch (err) {
        dbWarning = err instanceof Error ? err.message : 'Database sync deferred';
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Website settings saved and updated across all pages!',
      dbSaved,
      dbWarning,
      config: { ...defaultSiteConfig, ...cleanConfig },
    });
  } catch (err) {
    console.error('POST /api/settings error:', err);
    return NextResponse.json({ error: 'Internal server error while saving settings.' }, { status: 500 });
  }
}
