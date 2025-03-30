import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkGfm) // Support GFM (tables, autolinks, strikethrough, etc.)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to HTML syntax tree
    .use(rehypeRaw) // Pass raw HTML through
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeStringify) // Convert HTML syntax tree to string
    .process(markdown);

  return result.toString();
}

export function addClassesToHtml(html: string): string {
  return html
    // Add classes to headings
    .replace(/<h1(.*?)>/g, '<h1$1 class="text-3xl font-bold my-6 text-gray-900 dark:text-gray-100">')
    .replace(/<h2(.*?)>/g, '<h2$1 class="text-2xl font-bold my-5 text-gray-900 dark:text-gray-100">')
    .replace(/<h3(.*?)>/g, '<h3$1 class="text-xl font-bold my-4 text-gray-900 dark:text-gray-100">')
    .replace(/<h4(.*?)>/g, '<h4$1 class="text-lg font-bold my-3 text-gray-900 dark:text-gray-100">')
    
    // Add classes to paragraphs
    .replace(/<p>/g, '<p class="my-4 text-gray-800 dark:text-gray-200">')
    
    // Add classes to links
    .replace(/<a(.*?)>/g, '<a$1 class="text-aurora hover:text-aurora-dark underline">')
    
    // Add classes to lists
    .replace(/<ul>/g, '<ul class="my-4 list-disc ml-6">')
    .replace(/<ol>/g, '<ol class="my-4 list-decimal ml-6">')
    .replace(/<li>/g, '<li class="text-gray-800 dark:text-gray-200 mb-1">')
    
    // Add classes to code blocks
    .replace(/<pre><code>/g, '<pre class="bg-gray-800 text-gray-200 p-4 rounded my-4 overflow-x-auto"><code>')
    
    // Add classes to inline code
    .replace(/<code>/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200 text-sm">')
    .replace(/<\/pre><\/code>/g, '</code></pre>')
    
    // Add classes to blockquotes
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-aurora pl-4 my-4 text-gray-700 dark:text-gray-300 italic">')
    
    // Add classes to tables
    .replace(/<table>/g, '<table class="min-w-full my-4 border-collapse">')
    .replace(/<thead>/g, '<thead class="bg-gray-100 dark:bg-gray-800">')
    .replace(/<th>/g, '<th class="py-2 px-4 text-left font-semibold text-gray-900 dark:text-gray-100">')
    .replace(/<tbody>/g, '<tbody class="divide-y divide-gray-200 dark:divide-gray-700">')
    .replace(/<tr>/g, '<tr class="hover:bg-gray-50 dark:hover:bg-gray-900/20">')
    .replace(/<td>/g, '<td class="py-2 px-4 text-gray-800 dark:text-gray-200">');
} 