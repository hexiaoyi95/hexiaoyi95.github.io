export interface BlogAuthor {
  name: string;
  avatar?: string;
}

export interface BlogHeading {
  id: string;
  text: string;
  depth: number;
}

export interface BlogPost {
  slug: string;
  href: string;
  title: string;
  date: string;
  isoDate: string;
  displayDate: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  content: string;
  readingTime: string;
  readingMinutes: number;
  wordCount: number;
  author?: BlogAuthor;
  headings: BlogHeading[];
}

export type BlogPostSummary = Omit<BlogPost, 'content' | 'headings'>;

export interface BlogTag {
  name: string;
  slug: string;
  href: string;
  count: number;
}
