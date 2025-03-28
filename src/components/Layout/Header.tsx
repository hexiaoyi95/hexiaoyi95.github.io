'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Publications', href: '/publications' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white dark:bg-night backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 shadow-sm sticky top-0 z-10">
      {/* Aurora accent line at bottom of header */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 aurora-gradient"></div>
      
      <div className="container mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-xl font-bold text-aurora dark:text-aurora-light">Xiaoyi He</span>
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'nav-link-active'
                    : 'nav-link'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-aurora hover:bg-gray-100 dark:hover:bg-night-lighter focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? 'bg-aurora bg-opacity-10 dark:bg-night-lighter text-aurora dark:text-aurora-light'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-night-light hover:text-aurora dark:hover:text-aurora-light'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
} 