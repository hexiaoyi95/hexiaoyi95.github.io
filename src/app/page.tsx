'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-primary-600">Xiaoyi He</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            Master Student
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Welcome to my personal website. I'm a researcher and developer passionate about
            [Your Research Interests]. Currently based in Shanghai, I focus on [Your Main Focus Area].
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/resume" className="btn">
              View Resume <FaFileAlt className="ml-2" />
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              Explore Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Replace with your actual profile image */}
            <div className="rounded-full bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
              Profile Image
            </div>
            {/* Uncomment when you have an actual image
            <Image
              src="/images/profile.jpg"
              alt="Xiaoyi He"
              fill
              className="rounded-full object-cover shadow-lg"
              priority
            />
            */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I am a [Your Position] at [Your Institution/Company], where I work on [Brief Description of Work].
              My research interests include [Research Area 1], [Research Area 2], and [Research Area 3].
            </p>
            <p className="text-lg mb-4">
              Previously, I [Brief Background or Previous Experience]. I received my [Previous Education] from
              [Previous Institution].
            </p>
            <p className="text-lg">
              When I'm not working, I enjoy [Hobbies or Personal Interests].
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Research Interests</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Research Area 1</li>
              <li>Research Area 2</li>
              <li>Research Area 3</li>
              <li>Research Area 4</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Connect with me</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/hexiaoyi95" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                <FaGithub className="h-8 w-8" />
              </Link>
              <Link 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                <FaLinkedin className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold border-b pb-2">Latest Work</h2>
          <Link href="/projects" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
            View all <FaArrowRight className="ml-1" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A brief description of the project and what technologies were used.
            </p>
            <Link href="/projects/project-1" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
              Learn more <FaArrowRight className="ml-1" />
            </Link>
          </div>
          
          {/* Project Card 2 */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A brief description of the project and what technologies were used.
            </p>
            <Link href="/projects/project-2" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
              Learn more <FaArrowRight className="ml-1" />
            </Link>
          </div>
          
          {/* Project Card 3 */}
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-2">Project Title 3</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A brief description of the project and what technologies were used.
            </p>
            <Link href="/projects/project-3" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
              Learn more <FaArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 