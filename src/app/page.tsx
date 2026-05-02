import Link from 'next/link';
import {
  FaArrowRight,
  FaBookOpen,
  FaCodeBranch,
  FaFire,
  FaFlagCheckered,
  FaGithub,
  FaLinkedin,
  FaTachometerAlt,
} from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { getAllBlogPostSummaries } from '@/utils/blog';

export default function HomePage() {
  const latestPosts = getAllBlogPostSummaries().slice(0, 2);

  return (
    <div>
      <div className="side-mini-cars" aria-hidden="true">
        <span className="side-car side-car-left side-car-red" />
        <span className="side-car side-car-right side-car-blue" />
      </div>

      <section className="container mx-auto px-4 py-6 sm:py-8">
        <div className="identity-strip">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-racer-flare">
              SH-AI-95 / Video AI Garage
            </p>
            <h1 className="mt-2 text-xl font-black tracking-[-0.055em] text-racer-asphalt sm:text-4xl">
              {siteConfig.name} · {siteConfig.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link href="/resume" className="poster-button poster-button-dark">
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
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="work-projects-stage p-5 sm:p-7 lg:p-9">
          <div className="dual-lane-rail" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="poster-hero-grid">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border-2 border-racer-asphalt bg-racer-yellow px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-racer-asphalt shadow-[5px_5px_0_rgba(7,9,16,0.24)]">
                <FaFire className="text-racer-flare" />
                Video AI Portfolio
              </div>
              <h2 className="mt-5 max-w-5xl text-4xl font-black leading-[0.9] tracking-[-0.085em] text-racer-asphalt sm:text-7xl lg:text-8xl">
                Selected Projects
              </h2>
              <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-800 sm:text-lg">
                A concise overview of production and research work across frame generation,
                optical flow, real-time graphics, and video compression systems.
              </p>
            </div>

            <div className="race-ticket lg:col-span-2 xl:col-span-1">
              <div className="start-lights" aria-hidden="true">
                <span className="bg-racer-flare" />
                <span className="bg-racer-yellow" />
                <span className="bg-racer-neon" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-racer-flare">
                Technical Scope
              </p>
              <p className="mt-3 text-2xl font-black tracking-[-0.055em] text-racer-asphalt sm:text-4xl">
                Real-time AI video systems.
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-700">
                Frame generation, optical flow, and production video pipelines.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {siteConfig.stats.slice(1, 4).map((stat) => (
                  <span key={stat.label} className="scope-chip">
                    {stat.value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-6">
            {siteConfig.featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className={`machine-card group flex min-h-[360px] flex-col p-5 sm:p-6 ${
                  index === 0
                    ? 'machine-card-red lg:col-span-3'
                    : index === 1
                      ? 'machine-card-blue lg:col-span-3'
                    : 'machine-card-green lg:col-span-6'
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-racer-asphalt/60">
                      {project.machine}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-none tracking-[-0.07em] text-racer-asphalt sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="self-start rounded-full border-2 border-racer-asphalt bg-racer-yellow px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-racer-asphalt">
                    {project.decal}
                  </span>
                </div>

                <div className="mt-6 mini-car-stripe" aria-hidden="true" />

                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-racer-asphalt/70">
                  {project.label}
                </p>
                <p className="mt-3 flex-1 text-[15px] font-bold leading-7 text-slate-800">
                  {project.description}
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border-2 border-racer-asphalt bg-white/85 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-racer-asphalt shadow-[3px_3px_0_rgba(7,9,16,0.22)] sm:text-xs"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="decal-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-racer-asphalt transition hover:translate-x-1"
                >
                  Open project
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-5 px-4 py-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="track-card p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.06em] text-white">
                Experience Track
              </h2>
            </div>
            <FaTachometerAlt className="h-8 w-8 text-racer-yellow" />
          </div>

          <div className="mt-7 grid gap-4">
            {siteConfig.timeline.map((item, index) => (
              <article key={item.company} className="timeline-lap">
                <div className="timeline-lap-number">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-racer-yellow">
                    {item.period} · {item.speed}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                    {item.company}
                  </h3>
                  <p className="mt-1 font-bold text-racer-neon">{item.role}</p>
                  <p className="mt-3 leading-7 text-slate-400">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="track-card p-6">
            <p className="eyebrow">Profile</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.055em] text-white">
              {siteConfig.chineseName}
            </h2>
            <p className="mt-4 leading-8 text-slate-300">{siteConfig.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <span key={skill} className="tag-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="track-card p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Latest Writing</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] text-white">
                  Latest Writing
                </h2>
              </div>
              <FaBookOpen className="h-8 w-8 text-racer-yellow" />
            </div>

            <div className="grid gap-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.href}
                  className="rounded-3xl border border-white/10 bg-black/20 p-4 transition hover:border-racer-neon/40 hover:bg-black/30"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <span>{post.displayDate}</span>
                    <span className="h-1 w-1 rounded-full bg-racer-flare" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-2 font-black text-white">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-racer-neon hover:text-white"
            >
              View all posts
              <FaCodeBranch />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
