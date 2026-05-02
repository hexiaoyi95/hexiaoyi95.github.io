import '@/styles/globals.css';
import Layout from '@/components/Layout/Layout';
import { siteConfig } from '@/config/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} - Real-Time Video AI`,
  description: siteConfig.tagline,
  openGraph: {
    title: `${siteConfig.name} - Real-Time Video AI`,
    description: siteConfig.tagline,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 
