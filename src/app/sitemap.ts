import type { MetadataRoute } from 'next';
import { NAV_LINKS, SEO } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV_LINKS.map((item) => ({
    url: `${SEO.siteUrl}${item.href === '/' ? '' : item.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
