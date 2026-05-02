import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { getAllBlogTags, getPostsByTagSlug, getTagBySlug } from '@/utils/blog';
import { siteConfig } from '@/config/site';

interface BlogTagPageProps {
  params: {
    tag: string;
  };
}

export function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({
    tag: tag.slug,
  }));
}

export function generateMetadata({ params }: BlogTagPageProps): Metadata {
  const tag = getTagBySlug(params.tag);

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

export default function BlogTagPage({ params }: BlogTagPageProps) {
  const tag = getTagBySlug(params.tag);

  if (!tag) {
    notFound();
  }

  return (
    <BlogIndexClient
      posts={getPostsByTagSlug(params.tag)}
      tags={getAllBlogTags()}
      initialTagSlug={params.tag}
      title={`${tag.name} Notes`}
      description={`A filtered route for posts tagged ${tag.name}. This page is statically generated for GitLab Pages.`}
    />
  );
}
