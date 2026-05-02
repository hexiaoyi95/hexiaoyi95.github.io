'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaClock, FaFlagCheckered, FaSearch, FaTag } from 'react-icons/fa';
import type { BlogPostSummary, BlogTag } from '@/types/blog';
import { withBasePath } from '@/utils/paths';

interface BlogIndexClientProps {
  posts: BlogPostSummary[];
  tags: BlogTag[];
  initialTagSlug?: string;
  title?: string;
  description?: string;
}

export default function BlogIndexClient({
  posts,
  tags,
  initialTagSlug,
  title = 'Technical Notes',
  description = 'Technical writing about AI video systems, web tooling, and engineering details that are easy to forget.',
}: BlogIndexClientProps) {
  const [query, setQuery] = useState('');
  const [activeTagSlug, setActiveTagSlug] = useState<string | undefined>(initialTagSlug);

  const activeTag = tags.find((tag) => tag.slug === activeTagSlug);
  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesTag = activeTagSlug
        ? post.tags.some((tag) => tags.find((item) => item.name === tag)?.slug === activeTagSlug)
        : true;

      const searchableText = [
        post.title,
        post.excerpt,
        post.displayDate,
        post.tags.join(' '),
        post.author?.name ?? '',
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = normalizedQuery ? searchableText.includes(normalizedQuery) : true;
      return matchesTag && matchesQuery;
    });
  }, [activeTagSlug, posts, query, tags]);

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">Blog / Technical Writing</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="track-card p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Post Count</p>
                <p className="mt-2 text-3xl font-black text-white">{filteredPosts.length}</p>
                <p className="text-sm text-slate-400">
                  {activeTag ? `Posts tagged ${activeTag.name}` : 'Indexed markdown posts'}
                </p>
              </div>
              <FaFlagCheckered className="h-10 w-10 text-racer-yellow" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <label className="track-card flex items-center gap-3 px-4 py-3">
              <FaSearch className="text-racer-neon" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search notes..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </label>

            <div className="track-card p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                <FaTag className="text-racer-flare" />
                Tags
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTagSlug(undefined)}
                  className={`tag-chip ${!activeTagSlug ? 'tag-chip-active' : ''}`}
                >
                  All
                  <span>{posts.length}</span>
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag.slug}
                    type="button"
                    onClick={() => setActiveTagSlug(tag.slug)}
                    className={`tag-chip ${activeTagSlug === tag.slug ? 'tag-chip-active' : ''}`}
                  >
                    {tag.name}
                    <span>{tag.count}</span>
                  </button>
                ))}
              </div>
              {activeTagSlug && (
                <Link href={`/blog/tag/${activeTagSlug}`} className="mt-4 inline-flex text-xs text-racer-neon hover:text-white">
                  Open permanent tag route
                </Link>
              )}
            </div>
          </aside>

          <div className="grid gap-5">
            {filteredPosts.map((post, index) => (
              <article key={post.slug} className="track-card group overflow-hidden">
                <div className="grid md:grid-cols-[240px_1fr]">
                  <Link href={post.href} className="relative block min-h-56 overflow-hidden bg-racer-pit">
                    {post.coverImage ? (
                      <Image
                        src={withBasePath(post.coverImage)}
                        alt={post.title}
                        fill
                        className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 240px"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="tech-plate h-full min-h-56" />
                    )}
                    <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-racer-yellow">
                      Post {String(index + 1).padStart(2, '0')}
                    </div>
                  </Link>

                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                      <span>{post.displayDate}</span>
                      <span className="h-1 w-1 rounded-full bg-racer-flare" />
                      <span className="inline-flex items-center gap-2">
                        <FaClock className="text-racer-neon" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white transition group-hover:text-racer-yellow">
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <p className="mt-3 leading-7 text-slate-300">{post.excerpt}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link key={tag} href={`/blog/tag/${tags.find((item) => item.name === tag)?.slug ?? tag}`}>
                          <span className="tag-chip">{tag}</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={post.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-racer-neon hover:text-white"
                    >
                      Read note
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {filteredPosts.length === 0 && (
              <div className="track-card p-10 text-center">
                <p className="text-2xl font-black text-white">No posts found.</p>
                <p className="mt-2 text-slate-400">Clear the search or switch tags.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
