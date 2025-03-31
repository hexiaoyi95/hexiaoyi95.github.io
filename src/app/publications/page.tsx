'use client';

import Link from 'next/link';
import { FaExternalLinkAlt, FaFilePdf, FaCode, FaDesktop, FaQuoteRight, FaBook, FaCertificate } from 'react-icons/fa';
import publications, { PublicationItem } from '@/data/publications';

export default function PublicationsPage() {
  // Filter and sort publications
  const academicPublications = publications
    .filter(item => item.type === 'publication')
    .sort((a, b) => (b.citations || 0) - (a.citations || 0));
  
  // Filter and sort patents by year (newest first)
  const patents = publications
    .filter(item => item.type === 'patent')
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  // Publication component that can be reused
  const PublicationItem = ({ pub, index }: { pub: PublicationItem; index: number }) => (
    <div key={index} className="card p-4 sm:p-6 bg-white dark:bg-night-lighter rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">{pub.title}</h2>
      <p className="text-base sm:text-lg text-aurora dark:text-aurora-light mb-1">{pub.authors}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-2 text-gray-700 dark:text-gray-300">
        <span className="text-sm sm:text-base">{pub.venue}</span>
        <span className="text-sm sm:text-base mt-1 sm:mt-0 font-medium">
          {pub.year} 
          {pub.note && <span className="text-aurora-dark dark:text-aurora-light ml-1">({pub.note})</span>}
        </span>
      </div>
      
      {pub.citations !== undefined && (
        <div className="flex items-center text-sm text-aurora-dark dark:text-aurora-light mb-4">
          <FaQuoteRight className="mr-1" />
          <span>{pub.citations} citation{pub.citations !== 1 ? 's' : ''}</span>
        </div>
      )}
      
      {pub.abstract && (
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Abstract</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{pub.abstract}</p>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {pub.links && pub.links.length > 0 ? (
          pub.links.map((link: { type: string; url: string; label: string }, idx: number) => (
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
              {link.type === 'project' && <FaDesktop className="mr-1" />}
              {link.type === 'patent' && <FaCertificate className="mr-1" />}
              {link.label}
            </Link>
          ))
        ) : (
          <>
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                <FaExternalLinkAlt className="mr-1" /> Paper
              </a>
            )}
            {pub.code && (
              <a href={pub.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                <FaCode className="mr-1" /> Code
              </a>
            )}
            {pub.project && (
              <a href={pub.project} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                <FaDesktop className="mr-1" /> Project Page
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );

  // Patent component 
  const PatentItem = ({ patent, index }: { patent: PublicationItem; index: number }) => (
    <div key={index} className="card p-4 sm:p-6 bg-white dark:bg-night-lighter rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">{patent.title}</h2>
      <p className="text-base sm:text-lg text-aurora dark:text-aurora-light mb-1">{patent.authors}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-2 text-gray-700 dark:text-gray-300">
        <span className="text-sm sm:text-base">
          Patent {patent.patentNumber}
          {patent.status && <span className="ml-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">{patent.status}</span>}
        </span>
        <span className="text-sm sm:text-base mt-1 sm:mt-0 font-medium">{patent.year}</span>
      </div>
      
      {patent.abstract && (
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Abstract</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{patent.abstract}</p>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {patent.links && patent.links.map((link: { type: string; url: string; label: string }, idx: number) => (
          <Link 
            key={idx} 
            href={link.url}
            className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {/* <FaCertificate className="mr-1" /> */}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Publications & Patents</h1>
        
        {/* Publications Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <FaBook className="mr-3 text-aurora-dark dark:text-aurora-light" />
            <h2 className="text-2xl sm:text-3xl font-bold">Academic Publications</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {academicPublications.map((pub, index) => (
              <PublicationItem key={index} pub={pub} index={index} />
            ))}
          </div>
        </div>
        
        {/* Patents Section */}
        {patents.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <FaCertificate className="mr-3 text-aurora-dark dark:text-aurora-light" />
              <h2 className="text-2xl sm:text-3xl font-bold">Patents</h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {patents.map((patent, index) => (
                <PatentItem key={index} patent={patent} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 