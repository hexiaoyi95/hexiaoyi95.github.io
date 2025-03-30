import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaTag, FaClock, FaUser } from 'react-icons/fa';
import { getAllBlogPosts } from '@/utils/blog';

export default function BlogPage() {
  // Get all blog posts using our utility function
  const blogPosts = getAllBlogPosts();

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {post.coverImage && (
                  <div className="md:w-1/3 relative h-56 md:h-auto">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="w-full h-full relative overflow-hidden">
                        <Image 
                          src={post.coverImage} 
                          alt={post.title}
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={blogPosts.indexOf(post) < 2}
                        />
                      </div>
                    </Link>
                  </div>
                )}
                
                <div className={`p-5 sm:p-6 flex flex-col justify-between ${post.coverImage ? 'md:w-2/3' : 'w-full'}`}>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-aurora">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm mb-4 gap-3 sm:gap-4">
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
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-aurora hover:text-aurora-dark font-medium"
                    >
                      Read more <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 