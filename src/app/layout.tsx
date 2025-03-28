import '@/styles/globals.css';
import Layout from '@/components/Layout/Layout';

// Removed Google Font imports due to connection issues
// Using system fonts as fallbacks

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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 