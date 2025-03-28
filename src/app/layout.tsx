import { Inter, Merriweather } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/Layout/Layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata = {
  title: 'Xiaoyi He - Personal Website',
  description: 'Personal website for Xiaoyi He, featuring resume, publications, projects, and blog posts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 