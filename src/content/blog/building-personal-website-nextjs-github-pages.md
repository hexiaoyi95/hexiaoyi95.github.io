---
title: "Building a Personal Website with Next.js and GitHub Pages Using Cursor AI"
date: "March 30, 2025"
excerpt: "A behind-the-scenes look at how I created my entire personal website with the assistance of Cursor AI, from initial setup to deployment on GitHub Pages."
coverImage: "/images/blog/nextjs-github-cursor.jpeg"
tags: ["Web Development", "Next.js", "GitHub", "CI/CD", "Cursor AI"]
readingTime: "12 min read"
author:
  name: "Shawn He"
  avatar: "/images/profile.jpg"
---

# Building a Personal Website with Next.js and GitHub Pages Using Cursor AI

**Fun fact: The website you're browsing right now—including this very blog post and cover image —was created entirely with the assistance of Cursor AI.** As you read through this article, you're experiencing content that was collaboratively written between a human developer (me) and an AI assistant.

In this post, I'll take you behind the scenes to show how Cursor AI helped me create this personal website from scratch, analyze the project structure, and overcome several technical challenges along the way.

## What is Cursor AI?

Before diving in, let me briefly explain what Cursor AI is. Cursor is an IDE built on VSCode that integrates powerful AI capabilities directly into your development workflow. It can help with code generation, debugging, refactoring, and even content creation like blog posts.

What makes Cursor particularly powerful is its ability to understand the context of your entire project. It can reference existing code, understand your coding style and preferences, and make suggestions that are consistent with the rest of your codebase.

Throughout this project, Cursor served as my pair programmer, helping me make architectural decisions, generate code, fix bugs, and create content—dramatically accelerating the development process.

## My Experience Pair Programming with Cursor AI

As someone with a background in video compression and machine learning rather than web development, I found Cursor AI to be an invaluable partner in this project. While I had basic knowledge of React and JavaScript, building a complete Next.js website with proper deployment would have taken me significantly longer without assistance.

My typical workflow with Cursor looked something like this:

1. **Ideation**: I'd describe a feature or component I wanted to build
2. **Implementation**: Cursor would suggest code to implement it
3. **Refinement**: I'd review, modify, and integrate the code
4. **Learning**: I'd ask follow-up questions to understand why certain approaches were used

This collaborative approach allowed me to learn about Next.js and modern web development practices while making rapid progress on the site.

## Project Overview

This personal website serves multiple purposes:
- Showcase my professional background and skills
- Display my portfolio of projects
- Share my thoughts through a blog
- Provide contact information

The technology stack includes:
- **Next.js**: React framework for building the UI
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **GitHub Pages**: For hosting
- **GitHub Actions**: For CI/CD

## Getting Started: The First Conversation

When I first opened Cursor to start this project, I had a simple prompt:

```
I want to create a personal website using Next.js and deploy it to GitHub Pages. I'm a researcher in computer vision and video compression. What would be a good way to set this up?
```

Cursor provided detailed steps for setting up the project:

```bash
# Create a new Next.js project with TypeScript, Tailwind CSS, and ESLint
npx create-next-app@latest personal-website --typescript --tailwind --eslint

# Navigate into the project directory
cd personal-website

# Install additional dependencies for GitHub Pages deployment
npm install --save-dev gh-pages
```

It then suggested modifying the `next.config.js` file for GitHub Pages compatibility and walked me through creating a GitHub Actions workflow for automatic deployment.

What impressed me was that Cursor didn't just provide commands but explained why each step was necessary and how the pieces fit together. It felt like having a senior developer guiding me through the process.

## Project Structure Analysis

Cursor helped me set up a clean, maintainable project structure. When I asked about organizing the codebase, it provided not just a list of folders but reasoning for each organizational choice:

```
personal_website/
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml          # Deployment automation
├── public/                     # Static assets
│   └── images/                 # Image files
├── src/
│   ├── app/                    # Next.js app directory (App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog pages
│   │   ├── projects/           # Projects page
│   │   ├── publications/       # Publications page
│   │   ├── resume/             # Resume page
│   │   └── contact/            # Contact page
│   ├── components/             # Reusable UI components
│   │   ├── Layout/             # Layout components (Header, Footer)
│   │   └── ui/                 # UI components (Cards, Buttons)
│   ├── content/                # Content files
│   │   └── blog/               # Markdown blog posts
│   ├── data/                   # Static data files
│   ├── utils/                  # Utility functions
│   │   ├── blog.ts             # Blog data handling
│   │   └── markdown.ts         # Markdown processing
│   └── styles/                 # Global styles
└── next.config.js              # Next.js configuration
```

"This structure follows the App Router pattern introduced in Next.js 13," Cursor explained. "It organizes code by feature rather than by type, making it easier to maintain as the project grows."

This insight was valuable to me as I wasn't familiar with the latest Next.js conventions. Cursor even suggested creating a `tsconfig.json` that properly configured path aliases for cleaner imports.

## Major Challenges and How We Overcame Them

Throughout the development process, we encountered several significant challenges that tested our problem-solving abilities. Here are some of the most memorable ones:

### Challenge 1: TypeScript Errors with Third-Party Libraries

One of the first major issues arose when integrating Chart.js for the analytics dashboard. TypeScript was throwing errors because the library's type definitions didn't match how I was using it:

```
Type error: Property 'responsive' does not exist on type 'ChartOptions<"bar">'.
```

I asked Cursor for help, and it proposed a solution that involved creating custom type declarations:

```typescript
// src/@types/chart.js/index.d.ts
import { ChartOptions } from 'chart.js';

declare module 'chart.js' {
  interface ChartOptions<TType extends ChartType = ChartType> {
    responsive?: boolean;
    plugins?: {
      legend?: {
        position?: 'top' | 'left' | 'right' | 'bottom' | 'center' | 'chartArea';
      };
      title?: {
        display?: boolean;
        text?: string;
      };
    };
  }
}
```

Cursor explained, "This creates a declaration merging that extends the original types from Chart.js with the properties you need. It's a pattern often used when third-party libraries have incomplete type definitions."

This solution not only fixed the immediate error but taught me a valuable TypeScript pattern I've used multiple times since.

### Challenge 2: Markdown Processing Complexity

Initially, I wanted to use a simple regex approach to parse Markdown for the blog. Cursor helped implement this:

```typescript
// Initial approach with regex
const formattedContent = post.content
  .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6">$1</h1>')
  .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-5">$1</h2>')
  // More regex replacements...
```

But when I tried rendering nested lists and code blocks with syntax highlighting, this approach quickly fell apart. Cursor recognized the limitations and suggested a better approach:

```
The regex approach works for basic Markdown, but it's brittle for complex cases like nested lists, code blocks with backticks inside them, and tables. Let's use a proper Markdown parser instead.
```

It then suggested using the unified ecosystem with remark and rehype plugins:

```typescript
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
```

After implementing this solution, I encountered a new issue: the HTML was being rendered without any styling. Cursor recognized this and suggested a two-step approach:

1. First, convert Markdown to HTML with the unified pipeline
2. Then, add Tailwind classes to the generated HTML elements

```typescript
export function addClassesToHtml(html: string): string {
  return html
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold my-6 text-gray-900 dark:text-gray-100">')
    .replace(/<p>/g, '<p class="my-4 text-gray-800 dark:text-gray-200">')
    // More replacements for other elements...
}
```

This solution provided the best of both worlds: proper Markdown parsing and beautiful styling consistent with the rest of the site.

### Challenge 3: Dark Mode Text Contrast Issues

A particularly frustrating issue emerged with dark mode. When users switched to dark mode, some text became nearly unreadable due to poor contrast. Specifically, blog post content had a color that was too similar to the background.

```
There's an issue with text contrast in dark mode - the blog text is too light against the dark background and hard to read.
```

Cursor analyzed the styles and found that I was using Tailwind's default text colors without customizing them for dark mode:

```jsx
<div className="prose prose-lg max-w-none">
  <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
</div>
```

It suggested a more specific approach to ensure good contrast in both light and dark modes:

```jsx
<div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
  <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
</div>
```

But the real insight came when Cursor pointed out that the auto-generated HTML from our Markdown processor needed explicit dark mode classes:

```typescript
// Adding dark mode text colors to generated HTML
.replace(/<h1(.*?)>/g, '<h1$1 class="text-3xl font-bold my-6 text-gray-900 dark:text-gray-100">')
.replace(/<p>/g, '<p class="my-4 text-gray-800 dark:text-gray-200">')
```

This approach fixed all the contrast issues and highlighted the importance of considering both light and dark modes when generating dynamic content.

### Challenge 4: GitHub Actions Deployment Errors

Perhaps the most frustrating issues came during deployment. After setting up GitHub Actions for automatic deployment, I kept getting errors:

```
Error: This request has been automatically failed because it uses a deprecated version of `actions/upload-artifact: v3`.
```

Cursor suggested we needed to update the GitHub Actions workflow file to use the latest versions of all actions:

```yaml
# Before
- name: Upload artifact
  uses: actions/upload-pages-artifact@v2
  
# After
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
```

After fixing this, we encountered another deployment issue: the site was deploying but had no styles. Cursor helped diagnose the problem as a configuration issue in `next.config.js`:

```javascript
// The problem was here
basePath: process.env.NODE_ENV === 'production' ? '/personal_website' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/personal_website' : '',
```

Cursor recognized that since I was using a user GitHub Pages site (username.github.io), I needed empty paths:

```javascript
// The fix
basePath: '',
assetPrefix: '',
```

This was a subtle but critical fix that demonstrated Cursor's understanding of the deployment environment.

### Challenge 5: Build Output in Git Repository

Another deployment issue we faced was accidentally committing the build output to Git:

```
The out directory is still being tracked by Git despite being in .gitignore
```

Cursor explained that this happens when files are already tracked before being added to .gitignore, and suggested the solution:

```bash
git rm -r --cached out
git commit -m "Remove out directory from Git tracking"
```

This cleaned up the repository and ensured our CI/CD pipeline was handling deployments correctly.

## Solving Real Problems: Mobile Optimization

One of the most impressive moments with Cursor came when I was struggling with mobile optimization. The site looked great on desktop but had significant issues on mobile devices:

```
I'm having trouble with my site on mobile. The text is too small, and some elements are overlapping. How can I fix this?
```

Cursor immediately got to work analyzing my codebase. It identified several issues:

1. Missing viewport meta tag in the HTML head
2. Inconsistent use of responsive Tailwind classes
3. Touch targets (buttons, links) that were too small for mobile users

For example, it noticed that I was using fixed pixel values in some places instead of responsive units:

```jsx
// Before: Fixed width causing overflow on mobile
<div className="w-96 p-4">Content</div>

// After: Responsive width that adapts to screen size
<div className="w-full sm:max-w-md p-4">Content</div>
```

Cursor suggested adding a utility class to improve touch targets:

```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

And explained: "This ensures that interactive elements meet the WCAG accessibility guidelines for touch targets, which should be at least 44x44 pixels."

The collaboration went beyond just writing code. Cursor helped me understand the principles of responsive design and accessibility, knowledge I've applied throughout the site.

## Building the Publications Section: A Deep Collaboration

As a researcher, the publications section of my site was particularly important. I wanted to showcase my academic papers with proper citations, abstracts, and links to code repositories.

My initial description to Cursor was fairly vague:

```
I need a publications section that shows my academic papers. Each publication should have the title, authors, venue, year, and links to the paper, code, and project page.
```

Cursor suggested a comprehensive data structure:

```typescript
// src/data/publications.ts
const publications = [
  {
    title: 'Enhancing HEVC Compressed Videos with a Partition-Masked Convolutional Neural Network',
    venue: 'International Conference on Image Processing (ICIP)',
    year: '2018',
    authors: 'He, Xiaoyi, et al.',
    abstract: 'We propose a novel partition-masked convolutional neural network (CNN) that utilizes partition information in video encoder to enhance compressed videos.',
    link: 'https://arxiv.org/abs/1805.03894',
    code: 'https://github.com/hexiaoyi95/Partition-aware',
    project: 'https://min.sjtu.edu.cn/lwydemo/HEVCpostprocessing.html',
    citations: 98,
  },
  // Additional publications...
];
```

It then built a React component that rendered these publications with proper sorting (newest first), filtering capabilities, and responsive design.

What really impressed me was when I mentioned that I wanted to automatically update citation counts. Cursor designed a complete system that would:

1. Fetch current citation counts from Google Scholar
2. Update the publications data file
3. Run this process during the build step to keep counts current

When we encountered rate limiting issues with the API, Cursor suggested implementing caching, exponential backoff for retries, and even rotating user agents to avoid detection.

This level of sophisticated problem-solving went far beyond simple code generation. It felt like working with an experienced developer who understood both the technical requirements and the real-world challenges of implementing them.

## Debugging with Cursor: A TypeError Case Study

Another area where Cursor proved invaluable was debugging. At one point, I encountered a TypeError that was preventing my blog pages from rendering:

```
TypeError: Cannot read properties of undefined (reading 'map')
```

I shared the error and the relevant code with Cursor:

```jsx
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);
  
  // The error was occurring here
  const tags = post.tags.map(tag => (
    <span key={tag} className="tag">{tag}</span>
  ));
}
```

Cursor analyzed the code and quickly identified the issue:

"It looks like `post.tags` is undefined in some cases. Let's add a null check before mapping over the tags array."

```jsx
// Cursor's solution
const tags = post.tags ? post.tags.map(tag => (
  <span key={tag} className="tag">{tag}</span>
)) : [];
```

It then suggested a more comprehensive fix using optional chaining and nullish coalescing to make the code more robust:

```jsx
const tags = post?.tags?.map(tag => (
  <span key={tag} className="tag">{tag}</span>
)) ?? [];
```

This type of defensive programming became a pattern in our collaboration. Cursor would not only fix the immediate issue but suggest improvements to prevent similar problems in the future.

## Creating Content: This Blog Post

Even this blog post itself was created with Cursor's assistance. The process was truly collaborative:

1. I provided an outline of the topics I wanted to cover
2. Cursor suggested an initial draft
3. I refined the content with my personal experiences
4. Cursor helped improve the structure and clarity
5. We iterated together until the post was complete

For example, when I wrote:

```
Cursor helped me fix deployment issues
```

Cursor suggested expanding this into:

```
When deploying to GitHub Pages, I initially faced issues with missing styles and broken links. The site would load, but without any CSS styling.

Cursor analyzed the problem and identified that my `next.config.js` had incorrect settings for GitHub Pages deployment.
```

This back-and-forth resulted in a much more detailed and useful blog post than I would have created on my own.

## The Analytics Dashboard Challenge

One of the most complex features we implemented was an analytics dashboard. I wanted to display visit statistics, geographic distribution, and page popularity using charts and data visualizations.

We began by integrating Chart.js:

```bash
npm install chart.js react-chartjs-2
```

But immediately ran into issues with TypeScript compatibility and theme integration. The charts looked out of place with the rest of the site's design.

Cursor suggested:

```typescript
// Creating a custom theme for Chart.js that matches the site's aurora theme
const chartTheme = {
  backgroundColor: [
    'rgba(136, 192, 208, 0.6)', // Aurora blue
    'rgba(129, 161, 193, 0.6)', // Aurora light blue
    'rgba(94, 129, 172, 0.6)',  // Aurora deep blue
    'rgba(180, 142, 173, 0.6)', // Aurora purple
    'rgba(208, 135, 112, 0.6)', // Aurora orange
  ],
  borderColor: [
    'rgb(136, 192, 208)',
    'rgb(129, 161, 193)',
    'rgb(94, 129, 172)',
    'rgb(180, 142, 173)',
    'rgb(208, 135, 112)',
  ],
}
```

We used this theme across all charts to maintain visual consistency. The most challenging part was making the charts responsive. Initially, they would overflow on mobile devices or appear too small on larger screens.

Cursor suggested a solution using the Chart.js responsive option combined with a container div that used Tailwind's responsive classes:

```jsx
<div className="w-full h-auto aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-64 lg:h-80">
  <Bar 
    data={data} 
    options={{
      responsive: true,
      maintainAspectRatio: true,
      // Other options...
    }} 
  />
</div>
```

This approach made the charts look great on all devices while maintaining the correct proportions.

## Dealing with Limitations

Working with Cursor wasn't without challenges. At times, it would suggest approaches that didn't quite work, especially with the newest features of Next.js that might not have been in its training data.

For instance, when I wanted to implement server-side rendering for certain pages, Cursor initially suggested using the older Pages Router pattern instead of the newer App Router approach. I had to research the current best practices and guide our conversation in that direction.

This highlighted an important aspect of working with AI assistants: they're collaborative tools, not autonomous developers. The best results came from approaching Cursor as a knowledgeable partner with whom I needed to communicate clearly and sometimes gently correct.

## Key Takeaways

Working with Cursor AI on this project has taught me several valuable lessons:

1. **AI as a development multiplier**: Cursor accelerated my development process significantly, handling boilerplate code and suggesting solutions to problems. Tasks that might have taken days were completed in hours.

2. **Learning through collaboration**: Working with Cursor exposed me to best practices and alternative approaches I might not have considered. I learned about Next.js features, accessibility requirements, and deployment strategies.

3. **Focus on higher-level concerns**: With Cursor handling many implementation details, I could focus more on architecture, user experience, and content. This made the development process more enjoyable and creative.

4. **Communication is key**: The quality of Cursor's assistance was directly proportional to the clarity of my prompts. Learning to communicate effectively with AI tools is a skill worth developing.

5. **Human judgment remains essential**: While Cursor provided excellent suggestions, the final decisions about what to implement and how to structure the code were still mine. This human oversight ensured the project maintained coherence and quality.

## Conclusion

Building this personal website with Next.js, GitHub Pages, and Cursor AI has transformed my understanding of what's possible with AI-assisted development. The experience felt less like using a tool and more like working with a knowledgeable teammate who was always available to help.

For developers—especially those working solo or those, like me, who come from backgrounds outside web development—tools like Cursor represent a significant opportunity to build more ambitious projects with less friction. They're not replacements for human developers but powerful amplifiers of human creativity and problem-solving ability.

As AI tools continue to evolve, I'm excited to see how they'll further transform the development process. If my experience is any indication, we're just beginning to explore the possibilities of human-AI collaboration in software development.

What do you think about AI-assisted development? Have you used tools like Cursor in your projects? I'd love to hear your thoughts in the comments!