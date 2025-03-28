'use client';

import Link from 'next/link';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';

// Sample blog posts data
const posts = [
  {
    id: 'post-1',
    title: 'Sample Blog Post 1',
    date: 'January 15, 2023',
    excerpt: 'This is a brief summary of the blog post. It should be concise yet informative, giving readers a taste of what the full article contains.',
    tags: ['Research', 'Machine Learning'],
    slug: '/blog/post-1',
  },
  {
    id: 'post-2',
    title: 'Sample Blog Post 2',
    date: 'February 20, 2023',
    excerpt: 'This is a brief summary of the blog post. It should be concise yet informative, giving readers a taste of what the full article contains.',
    tags: ['Web Development', 'JavaScript'],
    slug: '/blog/post-2',
  },
  {
    id: 'post-3',
    title: 'Sample Blog Post 3',
    date: 'March 10, 2023',
    excerpt: 'This is a brief summary of the blog post. It should be concise yet informative, giving readers a taste of what the full article contains.',
    tags: ['Data Science', 'Python'],
    slug: '/blog/post-3',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <article key={post.id} className="card p-6">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={post.slug} className="hover:text-primary-600 dark:hover:text-primary-400">
                {post.title}
              </Link>
            </h2>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <FaCalendarAlt className="mr-2" />
              <span className="mr-4">{post.date}</span>
              
              <div className="flex items-center">
                <FaTag className="mr-2" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            
            <Link 
              href={post.slug} 
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 