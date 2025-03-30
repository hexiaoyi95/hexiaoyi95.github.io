# Blog Style Guide

This document outlines the standard formatting, structure, and writing guidelines for all blog posts on my personal website. Following these rules will ensure a consistent reading experience across different posts.

## Front Matter Format

All blog posts must include the following front matter at the very beginning of the markdown file:

```markdown
---
title: "Your Blog Post Title with Title Case"
date: "Month DD, YYYY"  # Example: "March 30, 2025"
excerpt: "A concise 1-2 sentence summary of the blog post that will appear in previews."
coverImage: "/images/blog/your-image-name.jpg"
tags: ["Tag1", "Tag2", "Tag3"]  # 3-5 relevant tags
readingTime: "X min read"  # Approximate reading time
author:
  name: "Shawn He"
  avatar: "/images/profile.jpg"
---
```

## Document Structure

Each blog post should follow this hierarchical structure:

1. **Title (H1)**: Must match the title in the front matter, placed immediately after the front matter section
2. **Introduction**: A compelling opening paragraph that hooks the reader and previews what the post will cover
3. **Main Content Sections (H2)**: Divide your content into logical sections with descriptive H2 headings
4. **Subsections (H3)**: If needed, use H3 headings for subsections within main sections
5. **Conclusion**: A summary paragraph that recaps the key points and may include a call to action

## Formatting Guidelines

### Headings
- Use Title Case for all headings (H1, H2, H3)
- H1 (#) is used only once at the beginning of the post
- H2 (##) for main sections
- H3 (###) for subsections
- Avoid H4 and deeper for simplicity
- Leave a blank line before and after headings

### Paragraphs
- Keep paragraphs brief (3-5 sentences)
- Use a blank line between paragraphs
- Break up large chunks of text for readability

### Code Blocks
- Always specify the language for syntax highlighting
- Use triple backticks for code blocks
- For inline code, use single backticks

```python
# Example Python code block
def hello_world():
    print("Hello, world!")
```

### Lists
- Use ordered lists (1., 2., 3.) for sequential steps or ranked items
- Use unordered lists (bullet points) for non-sequential items
- Maintain consistent punctuation in list items (either all end with periods or none do)

### Images
- Include alt text for all images
- Keep image file sizes optimized (< 200KB when possible)
- Use descriptive filenames for images
- Place images in the `/public/images/blog/` directory

### Links
- Use descriptive anchor text for links (avoid "click here")
- Link to relevant internal content when applicable
- External links should open in a new tab with `target="_blank"`

## Writing Style

### Voice and Tone
- Write in a conversational, professional tone
- Use first person ("I", "we") for a personal touch
- Address the reader directly ("you") to engage them
- Balance technical accuracy with accessibility

### Technical Content
- Define specialized terminology when first introduced
- Avoid unnecessary jargon
- Include code examples for technical concepts
- Prefer visual explanations (diagrams, charts) for complex topics

### Grammar and Mechanics
- Use present tense when possible
- Prefer active voice over passive voice
- Keep sentences concise (15-25 words ideally)
- Use Oxford commas for clarity
- Proofread for spelling and grammar errors

## SEO Considerations

- Include the main keyword in the title, first paragraph, and at least one H2
- Use related keywords naturally throughout the post
- Aim for post length of 1,000-2,000 words for in-depth topics
- Optimize image alt text with descriptive keywords
- Create descriptive, keyword-rich URLs

## Examples

### Good Heading Structure
```markdown
# Building a Personal Website with Next.js

## Project Setup

### Installing Dependencies

## Design Considerations

## Deployment Process
```

### Good Paragraph Structure
```markdown
The PyTorch framework offers several advantages for deep learning practitioners. Its dynamic computation graph makes debugging easier than static graph frameworks. Additionally, its Python-first approach feels natural to most data scientists.

However, these benefits come with some trade-offs. Performance can sometimes lag behind other frameworks, especially for production deployment. Understanding these tradeoffs is essential when choosing the right tool for your project.
```

## Final Check

Before publishing, ensure your blog post:
- Has been proofread for spelling and grammar
- Includes appropriate code examples and explanations
- Has properly formatted and optimized images
- Follows all structural guidelines above
- Provides value to the reader

Following these guidelines will help maintain a professional, consistent, and user-friendly blog that readers will enjoy and return to. 