# Personal Website for Shawn He

This is a personal website built with Next.js, TypeScript, and Tailwind CSS. It serves as a platform to showcase professional information, projects, publications, and blog posts.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- TypeScript support for better development experience
- Easy to customize and extend
- GitHub Pages deployment ready

## Pages

- **Home**: Introduction and overview
- **Resume**: Detailed professional experience
- **Publications**: Research papers and articles
- **Projects**: Showcase of projects
- **Blog**: Articles and thoughts
- **Contact**: Information and contact form

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hexiaoyi95/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Update your personal information by editing the content in the following files:

- `src/app/page.tsx` - Home page content
- `src/app/resume/page.tsx` - Resume details
- `src/app/publications/page.tsx` - Publication list
- `src/app/projects/page.tsx` - Project showcase
- `src/app/contact/page.tsx` - Contact information

### Styling

This project uses Tailwind CSS for styling. You can customize the theme by editing:

- `tailwind.config.js` - Customize colors, fonts, etc.
- `src/styles/globals.css` - Global styles

### Adding Images

Place your images in the `public/images` directory and reference them in your components.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages. Follow these steps:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

3. Your site will be available at `https://hexiaoyi95.github.io/`

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/) 