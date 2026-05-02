import { getAllBlogPostSummaries } from '@/utils/blog';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const posts = getAllBlogPostSummaries();
  const items = posts
    .map((post) => {
      const url = `${siteUrl}${post.href}/`;

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${post.isoDate ? new Date(post.isoDate).toUTCString() : new Date().toUTCString()}</pubDate>
          <description>${escapeXml(post.excerpt)}</description>
        </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteConfig.name)} - Technical Notes</title>
        <link>${siteUrl}/blog/</link>
        <description>${escapeXml(siteConfig.tagline)}</description>
        <language>en</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
