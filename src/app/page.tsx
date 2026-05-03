import Link from 'next/link';
import {
  FaArrowRight,
  FaBookOpen,
  FaEnvelope,
  FaFlagCheckered,
  FaGithub,
  FaLinkedin,
  FaTachometerAlt,
} from 'react-icons/fa';
import { siteConfig } from '@/config/site';

const quickLinks = [
  {
    title: 'Resume',
    href: '/resume',
    icon: <FaFlagCheckered />,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <FaTachometerAlt />,
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <FaBookOpen />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <FaEnvelope />,
  },
];

const technicalFocusAreas = [
  {
    label: 'Motion Generation',
    title: 'Frame generation systems',
    summary: 'Game and video frame generation, including DLSS-related research and NVIDIA Smooth Motion.',
    href: '/projects',
  },
  {
    label: 'Motion Estimation',
    title: 'Optical flow and OFA',
    summary: 'Optical-flow accelerator quality, confidence estimation, and deployment-oriented motion signals.',
    href: '/resume',
  },
  {
    label: 'Visual Quality',
    title: 'Video enhancement pipelines',
    summary: 'Compression-aware enhancement, super resolution, adaptive preprocessing, and quality evaluation.',
    href: '/projects',
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="side-mini-cars" aria-hidden="true">
        <span className="side-car side-car-left side-car-red" />
        <span className="side-car side-car-right side-car-blue" />
      </div>

      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="work-projects-stage p-5 sm:p-7 lg:p-9">
          <div className="dual-lane-rail" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div className="hero-intro">
              <p className="hero-kicker text-xs font-black uppercase tracking-[0.24em] text-racer-flare">
                Video AI Algorithms / Motion / Quality
              </p>
              <h1 className="kinetic-title mt-4 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] text-racer-asphalt sm:text-7xl">
                {siteConfig.name}
                <span className="mt-2 block text-3xl tracking-[-0.04em] text-racer-flare sm:text-5xl">
                  {siteConfig.chineseName}
                </span>
              </h1>
              <p className="mt-4 max-w-3xl text-xl font-black tracking-[-0.045em] text-racer-asphalt sm:text-3xl">
                Senior Video Architect building AI systems for motion and visual quality.
              </p>
              <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-800 sm:text-lg">
                My work connects NVIDIA frame generation and OFA/optical-flow research, Bilibili
                video quality pipelines, Alibaba super-resolution work, and SJTU compressed video
                enhancement research.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {siteConfig.skills.slice(0, 6).map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/projects" className="btn">
                  View projects
                  <FaArrowRight />
                </Link>
                <Link href="/resume" className="btn btn-secondary">
                  Resume
                  <FaFlagCheckered />
                </Link>
                <Link
                  href="https://github.com/hexiaoyi95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-icon"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://linkedin.com/in/xiaoyihe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            <aside className="race-ticket">
              <div className="start-lights" aria-hidden="true">
                <span className="bg-racer-flare" />
                <span className="bg-racer-yellow" />
                <span className="bg-racer-neon" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-racer-flare">
                Technical Focus
              </p>
              <h2 className="mt-3 text-3xl font-black leading-none tracking-[-0.06em] text-racer-asphalt">
                Core areas across recent work
              </h2>
              <div className="reveal-group mt-5 grid gap-3">
                {technicalFocusAreas.map((area, index) => (
                  <Link
                    key={area.title}
                    href={area.href}
                    style={{ '--reveal-index': index } as React.CSSProperties}
                    className="mechanical-card reveal-item rounded-3xl border-2 border-racer-asphalt bg-white p-4 shadow-[4px_4px_0_rgba(7,9,16,0.16)]"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-racer-asphalt/55">
                      {area.label}
                    </p>
                    <h3 className="mt-2 text-xl font-black tracking-[-0.05em] text-racer-asphalt">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                      {area.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div>
              <p className="eyebrow">Recent News</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] text-racer-asphalt sm:text-5xl">
                Recent updates
              </h2>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                Short signals only. Detailed project context lives on the Projects page.
              </p>
              <Link
                href="/projects"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-racer-asphalt transition hover:translate-x-1"
              >
                Project details
                <FaArrowRight />
              </Link>
            </div>

            <div className="reveal-group grid gap-3">
              {siteConfig.news.map((item, index) => (
                <article
                  key={item.title}
                  style={{ '--reveal-index': index } as React.CSSProperties}
                  className="mechanical-card reveal-item rounded-3xl border-2 border-racer-asphalt bg-white/85 p-4 shadow-[4px_4px_0_rgba(7,9,16,0.14)]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-racer-flare">
                        {item.date} / {item.type}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.045em] text-racer-asphalt">
                        {item.title}
                      </h3>
                    </div>
                    {item.href && (
                      <Link
                        href="/projects"
                        className="inline-flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-racer-asphalt transition hover:translate-x-1"
                      >
                        Read more
                        <FaArrowRight />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="eyebrow">Start Here</p>
            <div className="reveal-group mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  style={{ '--reveal-index': index } as React.CSSProperties}
                  className="mechanical-card reveal-item group flex items-center justify-between rounded-3xl border-2 border-racer-asphalt bg-white/85 p-4 shadow-[5px_5px_0_rgba(7,9,16,0.16)]"
                >
                  <span className="flex items-center gap-3 text-lg font-black tracking-[-0.04em] text-racer-asphalt">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-racer-asphalt bg-white text-racer-asphalt shadow-[3px_3px_0_rgba(7,9,16,0.16)]">
                      {item.icon}
                    </span>
                    {item.title}
                  </span>
                  <FaArrowRight className="text-racer-asphalt transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
