'use client';

import Link from 'next/link';
import { FaExternalLinkAlt, FaFilePdf, FaCode } from 'react-icons/fa';

// Sample publications data - replace with your actual information
const publications = [
  {
    title: 'Your Publication Title 1',
    authors: 'He, X., Author, A., & Author, B.',
    conference: 'Conference Name 2023',
    year: '2023',
    abstract: 'This paper presents a novel approach to solving [specific problem]. We demonstrate that our method achieves state-of-the-art results on [specific benchmark] with [specific improvements].',
    links: [
      { type: 'pdf', url: '#', label: 'PDF' },
      { type: 'external', url: '#', label: 'DOI' },
      { type: 'code', url: '#', label: 'Code' },
    ],
  },
  {
    title: 'Your Publication Title 2',
    authors: 'Author, A., He, X., & Author, C.',
    conference: 'Journal Name, Vol. X, No. Y',
    year: '2022',
    abstract: 'In this paper, we introduce a new framework for [specific task]. Our experiments show significant improvements over existing methods in terms of [specific metrics].',
    links: [
      { type: 'pdf', url: '#', label: 'PDF' },
      { type: 'external', url: '#', label: 'DOI' },
    ],
  },
  {
    title: 'Your Publication Title 3',
    authors: 'He, X., & Author, D.',
    conference: 'Conference Name 2021',
    year: '2021',
    abstract: 'We propose a novel method for [specific problem] that addresses the limitations of previous approaches. Our method demonstrates improved performance on [specific datasets].',
    links: [
      { type: 'pdf', url: '#', label: 'PDF' },
      { type: 'external', url: '#', label: 'DOI' },
      { type: 'code', url: '#', label: 'Code' },
    ],
  },
];

export default function PublicationsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Publications</h1>
        
        <div className="space-y-10">
          {publications.map((pub, index) => (
            <div key={index} className="card p-6">
              <h2 className="text-2xl font-bold mb-2">{pub.title}</h2>
              <p className="text-lg text-primary-600 dark:text-primary-400 mb-1">{pub.authors}</p>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700 dark:text-gray-300">{pub.conference}</span>
                <span className="text-gray-600 dark:text-gray-400">{pub.year}</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Abstract</h3>
                <p className="text-gray-700 dark:text-gray-300">{pub.abstract}</p>
              </div>
              
              <div className="flex space-x-3">
                {pub.links.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.url}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.type === 'pdf' && <FaFilePdf className="mr-1" />}
                    {link.type === 'external' && <FaExternalLinkAlt className="mr-1" />}
                    {link.type === 'code' && <FaCode className="mr-1" />}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 