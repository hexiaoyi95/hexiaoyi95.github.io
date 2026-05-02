import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaFlagCheckered,
  FaTag,
} from 'react-icons/fa';
import ReadingProgress from '@/components/blog/ReadingProgress';
import {
  getAdjacentBlogPosts,
  getAllBlogTags,
  getBlogPostBySlug,
  getBlogSlugs,
  getTagHref,
} from '@/utils/blog';
import { addClassesToHtml, markdownToHtml } from '@/utils/markdown';
import { siteConfig } from '@/config/site';
import { withBasePath } from '@/utils/paths';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: `Post not found | ${siteConfig.name}`,
    };
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.isoDate,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = addClassesToHtml(await markdownToHtml(post.content));
  const adjacentPosts = getAdjacentBlogPosts(post.slug);
  const tags = getAllBlogTags();

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <article>
        <header className="container mx-auto px-4 py-10 sm:py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-racer-neon hover:text-white"
          >
            <FaArrowLeft />
            Back to Technical Notes
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="eyebrow">Article / {post.tags[0] ?? 'Engineering'}</p>
              <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.055em] text-white sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{post.excerpt}</p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <FaCalendarAlt className="text-racer-flare" />
                  {post.displayDate}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <FaClock className="text-racer-neon" />
                  {post.readingTime}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <FaFlagCheckered className="text-racer-yellow" />
                  {post.wordCount.toLocaleString()} words
                </span>
              </div>
            </div>

            <div className="track-card overflow-hidden">
              {post.coverImage ? (
                <div className="relative h-72">
                  <Image
                    src={withBasePath(post.coverImage)}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
              ) : (
                <div className="tech-plate h-72" />
              )}
            </div>
          </div>
        </header>

        <div className="container mx-auto grid gap-8 px-4 pb-16 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="track-card overflow-hidden p-5 sm:p-8">
            <div className="blog-prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            {post.headings.length > 0 && (
              <div className="track-card p-5">
                <p className="eyebrow">Contents</p>
                <nav className="mt-4 space-y-3">
                  {post.headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block text-sm leading-6 text-slate-400 transition hover:text-racer-neon ${
                        heading.depth === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="track-card p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                <FaTag className="text-racer-flare" />
                Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={getTagHref(tag)}>
                    <span className="tag-chip">
                      {tag}
                      <span>{tags.find((item) => item.name === tag)?.count ?? 1}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <footer className="container mx-auto grid gap-4 px-4 pb-16 md:grid-cols-2">
          {adjacentPosts.older && (
            <Link href={adjacentPosts.older.href} className="track-card group p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Older post</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="font-bold text-white group-hover:text-racer-yellow">
                  {adjacentPosts.older.title}
                </span>
                <FaArrowRight className="text-racer-neon" />
              </div>
            </Link>
          )}
          {adjacentPosts.newer && (
            <Link href={adjacentPosts.newer.href} className="track-card group p-5 md:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Newer post</p>
              <div className="mt-3 flex items-center justify-between gap-4 md:flex-row-reverse">
                <span className="font-bold text-white group-hover:text-racer-yellow">
                  {adjacentPosts.newer.title}
                </span>
                <FaArrowLeft className="text-racer-neon" />
              </div>
            </Link>
          )}
        </footer>
      </article>
    </div>
  );
}
