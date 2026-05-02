import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { withBasePath } from '@/utils/paths';

const archiveProjects = [
  {
    id: 'deep-learning-video-compression',
    title: 'Compressed Video Enhancement',
    description:
      'Research on partition-aware post-processing and deblocking for HEVC compressed videos. The work improved reconstructed video quality, achieved about 10% bitrate saving at similar quality, and led to ICIP 2019 / IEEE TMM publications.',
    image: '/images/projects/video-compression.png',
    technologies: ['Compressed Video Enhancement', 'HEVC', 'CNN', 'Post-processing'],
    links: [
      { type: 'github', url: 'https://github.com/hexiaoyi95/Partition-aware', label: 'GitHub' },
      { type: 'external', url: 'https://arxiv.org/abs/1912.11604', label: 'Paper' },
      { type: 'external', url: 'https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html', label: 'Project Page' },
    ],
  },
  {
    id: 'intelligent-surveillance-system',
    title: 'Intelligent Surveillance System',
    description:
      'Built datasets and real-time deep learning systems for human fall detection and activity recognition, including a Microsoft Research Asia demo award project.',
    image: '/images/projects/surveillance.png',
    technologies: ['Deep Learning', 'Computer Vision', 'Real-time Detection'],
    links: [
      { type: 'external', url: 'https://www.microsoft.com/en-us/research/blog/visual-intelligence-smart-home-security/', label: 'Microsoft Research' },
    ],
  },
  {
    id: 'lossless-compression-for-skeletons',
    title: 'Adaptive Lossless Compression of Skeleton Sequences',
    description:
      'Implemented lossless compression for skeleton data in surveillance video using spatial and temporal correlation, with related papers and standards proposals.',
    image: '/images/projects/skeletons-compression.png',
    technologies: ['Lossless Compression', 'Skeleton Tracking', 'C++'],
    links: [
      { type: 'external', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0923596519306034', label: 'Paper' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-14">
      <section className="work-projects-stage p-5 sm:p-7 lg:p-9">
        <div className="dual-lane-rail" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="max-w-4xl">
          <p className="eyebrow">Video AI Portfolio</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.075em] text-racer-asphalt sm:text-7xl">
            Selected Projects
          </h1>
          <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-800 sm:text-lg">
            The same concise project set highlighted on the homepage, expanded here with links,
            technical tags, and the historical project archive below.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-6">
          {siteConfig.featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`machine-card group flex min-h-[340px] flex-col p-5 sm:p-6 ${
                index === 0
                  ? 'machine-card-red lg:col-span-3'
                  : index === 1
                    ? 'machine-card-blue lg:col-span-3'
                    : 'machine-card-green lg:col-span-6'
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-racer-asphalt/60">
                    {project.machine}
                  </p>
                  <h2 className="mt-2 text-2xl font-black leading-none tracking-[-0.07em] text-racer-asphalt sm:text-4xl">
                    {project.title}
                  </h2>
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

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
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
                {project.ctaLabel}
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6">
          <p className="eyebrow">Archive</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] text-racer-asphalt sm:text-4xl">
            Project Archive
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {archiveProjects.map((project) => (
            <article key={project.id} className="card flex flex-col">
              <div className="relative h-44 overflow-hidden border-b-[3px] border-racer-asphalt bg-white">
                <Image
                  src={withBasePath(project.image)}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-black tracking-[-0.04em] text-racer-asphalt">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm font-bold leading-7 text-slate-700">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="decal-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <Link
                      key={`${project.id}-${link.label}`}
                      href={link.url}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-racer-asphalt bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-racer-asphalt shadow-[3px_3px_0_rgba(7,9,16,0.16)] transition hover:-translate-y-0.5 hover:bg-racer-yellow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type === 'github' ? <FaGithub /> : <FaExternalLinkAlt />}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
