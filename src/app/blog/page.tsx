import type { Metadata } from 'next';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { getAllBlogPostSummaries, getAllBlogTags } from '@/utils/blog';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Technical Notes | ${siteConfig.name}`,
  description:
    'Technical notes from Shawn He on video AI, deep learning, web tooling, and engineering practice.',
};

export default function BlogPage() {
  return (
    <BlogIndexClient
      posts={getAllBlogPostSummaries()}
      tags={getAllBlogTags()}
    />
  );
}
