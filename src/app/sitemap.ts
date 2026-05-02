import type { MetadataRoute } from 'next';
import { routes } from '@/config/routes';
import { getAllBlogPostSummaries, getAllBlogTags } from '@/utils/blog';

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';
}

function toAbsoluteUrl(baseUrl: string, href: string): string {
  if (href === '/') {
    return `${baseUrl}/`;
  }

  return `${baseUrl}${href}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const staticRoutes = routes.map((route) => ({
    url: toAbsoluteUrl(baseUrl, route.href),
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPostSummaries().map((post) => ({
    url: toAbsoluteUrl(baseUrl, post.href),
    lastModified: post.isoDate ? new Date(post.isoDate) : new Date(),
  }));

  const tagRoutes = getAllBlogTags().map((tag) => ({
    url: toAbsoluteUrl(baseUrl, tag.href),
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...tagRoutes];
}
