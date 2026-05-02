'use client';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffaf0] text-racer-asphalt">
      <Header />
      <main className="race-surface flex-grow">{children}</main>
      <Footer />
    </div>
  );
} 
