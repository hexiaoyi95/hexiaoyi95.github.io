'use client';

import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa';
import { routes } from '@/config/routes';
import { siteConfig } from '@/config/site';

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
  RSS: FaRss,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-[3px] border-racer-asphalt bg-[#fffaf0] py-10 text-racer-asphalt shadow-[0_-6px_0_rgba(7,9,16,0.1)]">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-racer-flare to-transparent" />
      <div className="absolute -bottom-24 right-8 h-48 w-48 rounded-full bg-racer-blue/10 blur-3xl" />

      <div className="container relative mx-auto grid gap-8 px-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-racer-asphalt">
            {siteConfig.name} / {siteConfig.chineseName}
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-racer-asphalt/70">{siteConfig.tagline}</p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-racer-asphalt/50">
            Static export ready for GitLab Pages. &copy; {new Date().getFullYear()} Shawn He.
          </p>
        </div>

        <div className="space-y-5">
          <nav className="flex flex-wrap gap-2 md:justify-end">
            {routes.map((route) => (
              <Link key={route.id} href={route.href} className="tag-chip">
                {route.shortLabel}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            {siteConfig.socials.map((item) => {
              const Icon = iconMap[item.name as keyof typeof iconMap];

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-racer-asphalt bg-white text-racer-asphalt shadow-[4px_4px_0_rgba(7,9,16,0.2)] transition hover:-translate-y-0.5 hover:bg-racer-yellow"
                  aria-label={item.name}
                >
                  {Icon ? <Icon className="h-5 w-5" /> : item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
