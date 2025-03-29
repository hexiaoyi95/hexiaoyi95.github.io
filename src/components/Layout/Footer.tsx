'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaRss } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/hexiaoyi95', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/xiaoyihe', icon: FaLinkedin },
  { name: 'Email', href: 'mailto:xiaoyi.he@outlook.com', icon: FaEnvelope },
  { name: 'RSS', href: '/rss.xml', icon: FaRss },
];

export default function Footer() {
  return (
    <footer className="bg-night-lighter py-6 sm:py-8 mt-8 sm:mt-12 relative overflow-hidden">
      {/* Aurora accent at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 aurora-gradient"></div>
      
      {/* Subtle aurora glow in footer */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-aurora via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Xiaoyi He. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Generated with ❤️ using <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-aurora-light hover:text-aurora-lighter transition-colors">Cursor</a> - The AI-first code editor
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-aurora-light transition-colors p-2 -m-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6 sm:h-5 sm:w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 