import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  content: string;
  readingTime?: string;
  author?: {
    name: string;
    avatar?: string;
  };
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getBlogSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace(/\.md$/, ''));
}

export function getBlogPostBySlug(slug: string): BlogPost {
  // Get the full path to the markdown file
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    // Read the file content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the frontmatter
    const { data, content } = matter(fileContents);
    
    // Return the post data
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      tags: data.tags || [],
      content,
      readingTime: data.readingTime,
      author: data.author,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    // Return a default object with an error message
    return {
      slug,
      title: 'Post Not Found',
      date: '',
      excerpt: 'This post could not be loaded.',
      tags: [],
      content: '# Post Not Found\n\nSorry, this post could not be loaded.',
    };
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs.map(slug => getBlogPostBySlug(slug));
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
} 