import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogHeading, BlogPost, BlogPostSummary, BlogTag } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');
const publicDirectory = path.join(process.cwd(), 'public');
const wordsPerMinute = 220;

function getPostPath(slug: string): string {
  return path.join(postsDirectory, `${slug}.md`);
}

function safeDate(date: unknown): Date {
  if (typeof date !== 'string') {
    return new Date(0);
  }

  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function formatDisplayDate(date: Date, fallback: string): string {
  if (date.getTime() === 0) {
    return fallback;
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function countWords(content: string): number {
  const englishWords = content.match(/[A-Za-z0-9_]+(?:[-'][A-Za-z0-9_]+)*/g) ?? [];
  const cjkCharacters = content.match(/[\u4e00-\u9fff]/g) ?? [];
  return englishWords.length + cjkCharacters.length;
}

function createExcerpt(content: string): string {
  return content
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#>*_`[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180);
}

function stripMarkdown(value: string): string {
  return value
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_~]/g, '')
    .trim();
}

function slugify(value: string): string {
  return stripMarkdown(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractHeadings(content: string): BlogHeading[] {
  const seen = new Map<string, number>();
  const headings: BlogHeading[] = [];
  const headingPattern = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = headingPattern.exec(content)) !== null) {
    const depth = match[1].length;
    const text = stripMarkdown(match[2]);
    const baseId = slugify(text);

    if (!baseId) {
      continue;
    }

    const count = seen.get(baseId) ?? 0;
    seen.set(baseId, count + 1);

    headings.push({
      id: count === 0 ? baseId : `${baseId}-${count}`,
      text,
      depth,
    });
  }

  return headings;
}

function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) {
    return [];
  }

  return tags
    .filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0)
    .map((tag) => tag.trim());
}

function resolveCoverImage(coverImage: unknown): string | undefined {
  if (typeof coverImage !== 'string' || !coverImage.startsWith('/')) {
    return undefined;
  }

  const imagePath = path.join(publicDirectory, coverImage);
  return fs.existsSync(imagePath) ? coverImage : undefined;
}

export function tagToSlug(tag: string): string {
  return slugify(tag);
}

export function getTagHref(tag: string): string {
  return `/blog/tag/${tagToSlug(tag)}`;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => filename.replace(/\.md$/, ''))
    .sort();
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const fullPath = getPostPath(slug);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const parsedDate = safeDate(data.date);
  const wordCount = countWords(content);
  const readingMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return {
    slug,
    href: `/blog/${slug}`,
    title: typeof data.title === 'string' ? data.title : slug,
    date: typeof data.date === 'string' ? data.date : '',
    isoDate: parsedDate.getTime() === 0 ? '' : parsedDate.toISOString(),
    displayDate: formatDisplayDate(parsedDate, typeof data.date === 'string' ? data.date : ''),
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : createExcerpt(content),
    coverImage: resolveCoverImage(data.coverImage),
    tags: normalizeTags(data.tags),
    content,
    readingTime: typeof data.readingTime === 'string' ? data.readingTime : `${readingMinutes} min read`,
    readingMinutes,
    wordCount,
    author:
      data.author && typeof data.author === 'object' && typeof data.author.name === 'string'
        ? {
            name: data.author.name,
            avatar: resolveCoverImage(data.author.avatar),
          }
        : undefined,
    headings: extractHeadings(content),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => safeDate(b.date).getTime() - safeDate(a.date).getTime());
}

export function toBlogPostSummary(post: BlogPost): BlogPostSummary {
  const { content, headings, ...summary } = post;
  return summary;
}

export function getAllBlogPostSummaries(): BlogPostSummary[] {
  return getAllBlogPosts().map(toBlogPostSummary);
}

export function getAllBlogTags(): BlogTag[] {
  const counts = new Map<string, { name: string; count: number }>();

  getAllBlogPosts().forEach((post) => {
    post.tags.forEach((tag) => {
      const slug = tagToSlug(tag);
      const current = counts.get(slug);

      counts.set(slug, {
        name: current?.name ?? tag,
        count: (current?.count ?? 0) + 1,
      });
    });
  });

  return Array.from(counts.entries())
    .map(([slug, tag]) => ({
      name: tag.name,
      slug,
      href: `/blog/tag/${slug}`,
      count: tag.count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getPostsByTagSlug(tagSlug: string): BlogPostSummary[] {
  return getAllBlogPostSummaries().filter((post) =>
    post.tags.some((tag) => tagToSlug(tag) === tagSlug),
  );
}

export function getTagBySlug(tagSlug: string): BlogTag | undefined {
  return getAllBlogTags().find((tag) => tag.slug === tagSlug);
}

export function getAdjacentBlogPosts(slug: string): {
  newer?: BlogPostSummary;
  older?: BlogPostSummary;
} {
  const posts = getAllBlogPosts();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {};
  }

  return {
    newer: posts[currentIndex - 1] ? toBlogPostSummary(posts[currentIndex - 1]) : undefined,
    older: posts[currentIndex + 1] ? toBlogPostSummary(posts[currentIndex + 1]) : undefined,
  };
}
