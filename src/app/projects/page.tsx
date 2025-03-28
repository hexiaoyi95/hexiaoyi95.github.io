'use client';

import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Projects data for Xiaoyi He from resume
const projects = [
  {
    id: 'deep-learning-video-compression',
    title: 'Deep Learning Based Video Compression',
    description: 'Proposed a novel CNN utilizing partition information in video encoder to enhance compressed videos (deblocking). Achieved about 10% bitrate saving on benchmark sequences. Paper accepted by ICIP 2019 (oral) and won 2nd prize in ChinaMM 2018 challenge.',
    image: '/images/projects/video-compression.jpg',
    technologies: ['CNN', 'HEVC', 'Python', 'PyTorch', 'Video Processing'],
    links: [
      { type: 'github', url: 'https://github.com/hexiaoyi95/Partition-aware', label: 'GitHub' },
      { type: 'external', url: 'https://arxiv.org/abs/1912.11604', label: 'Paper' },
    ],
    featured: true,
  },
  {
    id: 'intelligent-surveillance-system',
    title: 'Intelligent Surveillance System',
    description: 'Established a dataset for human fall detection. Developed a real-time deep learning based fall detection algorithm with over 80% accuracy. Won "Best Demo of the Year" award at Microsoft Research Asia Symposium in 2017.',
    image: '/images/projects/surveillance.jpg',
    technologies: ['Deep Learning', 'Computer Vision', 'Real-time Detection', 'Python'],
    links: [
      { type: 'external', url: 'https://www.microsoft.com/en-us/research/blog/visual-intelligence-smart-home-security/', label: 'Microsoft Research' },
    ],
    featured: true,
  },
  {
    id: 'lossless-compression-for-skeletons',
    title: 'Lossless Compression for Skeletons Data',
    description: 'Implemented a lossless compression method for skeletons data in videos based on spatial and temporal correlation. Achieved about 84% compression ratio on test surveillance sequences. Published two papers and had one proposal accepted.',
    image: '/images/projects/skeletons-compression.jpg',
    technologies: ['Lossless Compression', 'Skeleton Tracking', 'C++', 'Video Analysis'],
    links: [
      { type: 'external', url: '#', label: 'IEEE MultiMedia' },
    ],
    featured: true,
  },
  {
    id: 'end-to-end-image-video-compression',
    title: 'End-to-end Deep Learning Image/Video Compression',
    description: 'Surveyed on end-to-end deep learning based image/video compression. Implemented novel ideas and experimental verifications for next-generation compression techniques.',
    image: '/images/projects/end-to-end-compression.jpg',
    technologies: ['Neural Networks', 'End-to-end Learning', 'TensorFlow', 'Python'],
    links: [
      { type: 'external', url: '#', label: 'Research Paper' },
    ],
    featured: false,
  },
  {
    id: 'nvidia-smooth-motion',
    title: 'NVIDIA Smooth Motion',
    description: 'Core contributor to NVIDIA\'s driver-level frame generation solution. Researched and improved frame interpolation algorithms and optical flow accelerator algorithms.',
    image: '/images/projects/nvidia-frame-generation.jpg',
    technologies: ['DLSS', 'Frame Generation', 'CUDA', 'C++', 'Optical Flow'],
    links: [
      { type: 'external', url: 'https://www.nvidia.com/en-us/geforce/technologies/dlss/', label: 'NVIDIA DLSS' },
    ],
    featured: false,
  },
  {
    id: 'video-quality-testing',
    title: 'Video Quality Testing Platform',
    description: 'Built a comprehensive video subjective quality blind testing platform, accelerating video algorithm development and verification. The platform includes automated testing, data collection, and statistical analysis.',
    image: '/images/projects/video-quality.jpg',
    technologies: ['FFmpeg', 'Python', 'Web Development', 'Statistics'],
    links: [
      { type: 'external', url: '#', label: 'Demo' },
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto py-8 px-4 sm:py-12 sm:px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Projects</h1>
      
      {/* Featured Projects */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Project Image
              </div>
              {/* Project Details */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex space-x-3">
                  {project.links.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.url}
                      className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {link.type === 'github' && <FaGithub className="mr-1" />}
                      {link.type === 'external' && <FaExternalLinkAlt className="mr-1" />}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Other Projects */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex space-x-3">
                {project.links.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.url}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.type === 'github' && <FaGithub className="mr-1" />}
                    {link.type === 'external' && <FaExternalLinkAlt className="mr-1" />}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 