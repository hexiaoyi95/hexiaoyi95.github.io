import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { getAllBlogTags, getPostsByTagSlug, getTagBySlug } from '@/utils/blog';
import { siteConfig } from '@/config/site';

interface BlogTagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({
    tag: tag.slug,
  }));
}

export async function generateMetadata({ params }: BlogTagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    return {
      title: `Blog tag not found | ${siteConfig.name}`,
    };
  }

  return {
    title: `${tag.name} notes | ${siteConfig.name}`,
    description: `Technical notes tagged ${tag.name}.`,
  };
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    notFound();
  }

  return (
    <BlogIndexClient
      posts={getPostsByTagSlug(tagSlug)}
      tags={getAllBlogTags()}
      initialTagSlug={tagSlug}
      title={`${tag.name} Notes`}
      description={`A filtered route for posts tagged ${tag.name}. This page is statically generated for GitLab Pages.`}
    />
  );
}
