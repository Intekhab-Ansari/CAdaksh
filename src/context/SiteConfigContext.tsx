'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, defaultSiteConfig } from '@/lib/siteConfig';

interface SiteConfigContextType {
  config: SiteConfig;
  isLoading: boolean;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  refreshConfig: () => Promise<void>;
}

const SiteConfigContext = createContext<SiteConfigContextType>({
  config: defaultSiteConfig,
  isLoading: false,
  updateConfig: () => {},
  refreshConfig: async () => {},
});

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchSettings = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/settings', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.config) {
          setConfig({ ...defaultSiteConfig, ...data.config });
        }
      }
    } catch (err) {
      console.warn('Failed to fetch dynamic site config, using default:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        isLoading,
        updateConfig,
        refreshConfig: fetchSettings,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (!context) {
    return {
      config: defaultSiteConfig,
      isLoading: false,
      updateConfig: () => {},
      refreshConfig: async () => {},
    };
  }
  return context;
}

