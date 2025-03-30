import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft } from 'react-icons/fa';
import { getBlogPostBySlug, getBlogSlugs } from '@/utils/blog';
import { markdownToHtml, addClassesToHtml } from '@/utils/markdown';

// Generate static paths for all blog posts
export function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);
  
  // If post not found, show 404-like message
  if (post.title === 'Post Not Found') {
    return (
      <div className="container mx-auto py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="inline-flex items-center text-aurora hover:text-aurora-dark">
            <FaArrowLeft className="mr-2" /> Back to all posts
          </Link>
        </div>
      </div>
    );
  }
  
  // Process Markdown to HTML with proper styling
  const htmlContent = await markdownToHtml(post.content);
  const styledHtmlContent = addClassesToHtml(htmlContent);

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-aurora hover:text-aurora-dark mb-6">
          <FaArrowLeft className="mr-2" /> Back to all posts
        </Link>
        
        <article className="bg-white dark:bg-night-lighter shadow-sm rounded-lg overflow-hidden">
          {post.coverImage && (
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                className="object-cover"
                fill
                priority
              />
            </div>
          )}
          
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm mb-6 gap-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-aurora" />
                <span>{post.date}</span>
              </div>
              
              {post.readingTime && (
                <div className="flex items-center">
                  <FaClock className="mr-2 text-aurora" />
                  <span>{post.readingTime}</span>
                </div>
              )}
              
              {post.author && (
                <div className="flex items-center">
                  <FaUser className="mr-2 text-aurora" />
                  <span>{post.author.name}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
              <div dangerouslySetInnerHTML={{ __html: styledHtmlContent }} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 