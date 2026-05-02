'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaBolt, FaTimes } from 'react-icons/fa';
import { isActiveRoute, routes } from '@/config/routes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-racer-asphalt bg-[#fffaf0]/95 shadow-[0_6px_0_rgba(7,9,16,0.12)] backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-racer-flare to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-racer-asphalt bg-white text-racer-asphalt shadow-[4px_4px_0_rgba(7,9,16,0.18)] transition group-hover:bg-racer-yellow">
              <FaBolt className="h-4 w-4 transition group-hover:scale-110" />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.22em] text-racer-asphalt">
                Shawn He
              </span>
              <span className="block text-[10px] font-black uppercase tracking-[0.28em] text-racer-flare">
                Real-Time Video AI
              </span>
            </span>
          </Link>

          <nav className="hidden items-center rounded-full border-2 border-racer-asphalt bg-white p-1 shadow-[5px_5px_0_rgba(7,9,16,0.2)] md:flex">
            {routes.map((item) => {
              const isActive = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                    isActive
                      ? 'bg-racer-asphalt text-white shadow-[3px_3px_0_rgba(7,9,16,0.18)]'
                      : 'text-racer-asphalt/55 hover:bg-[#fff3c4] hover:text-racer-asphalt'
                  }`}
                >
                  {item.shortLabel}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-racer-asphalt bg-white text-racer-asphalt shadow-[4px_4px_0_rgba(7,9,16,0.22)] transition hover:-translate-y-0.5 hover:bg-racer-yellow md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t-2 border-racer-asphalt bg-[#fffaf0] px-4 py-4 md:hidden">
          <nav className="grid gap-2">
            {routes.map((item) => {
              const isActive = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl border px-4 py-3 transition ${
                    isActive
                      ? 'border-racer-asphalt bg-racer-asphalt text-white shadow-[4px_4px_0_rgba(7,9,16,0.18)]'
                      : 'border-racer-asphalt bg-white text-racer-asphalt hover:bg-[#fff3c4]'
                  }`}
                >
                  <span className="block text-sm font-bold">{item.label}</span>
                  <span className="mt-1 block text-xs text-racer-asphalt/60">{item.description}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
