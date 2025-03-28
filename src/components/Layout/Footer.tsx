'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaRss } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/hexiaoyi95', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: FaLinkedin },
  { name: 'Email', href: 'mailto:your.email@example.com', icon: FaEnvelope },
  { name: 'RSS', href: '/rss.xml', icon: FaRss },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Xiaoyi He / 何晓艺. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-primary-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 