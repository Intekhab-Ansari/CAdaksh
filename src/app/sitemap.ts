import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dakshdesaiassociates.com';

  const routes = [
    '',
    '/about',
    '/team',
    '/services',
    '/services/income-tax',
    '/services/gst',
    '/services/audit',
    '/services/accounting',
    '/services/cfo-advisory',
    '/services/corporate-law',
    '/services/international-tax',
    '/contact',
    '/faq',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.6,
  }));
}

