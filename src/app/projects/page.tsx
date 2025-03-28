'use client';

import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Sample projects data - replace with your actual information
const projects = [
  {
    id: 'project-1',
    title: 'Project Name 1',
    description: 'A brief description of the project, explaining its purpose and main features.',
    image: '/images/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    links: [
      { type: 'github', url: 'https://github.com/username/project1', label: 'GitHub' },
      { type: 'external', url: 'https://project1-demo.example.com', label: 'Live Demo' },
    ],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Project Name 2',
    description: 'A brief description of the project, explaining its purpose and main features.',
    image: '/images/projects/project2.jpg',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    links: [
      { type: 'github', url: 'https://github.com/username/project2', label: 'GitHub' },
    ],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Project Name 3',
    description: 'A brief description of the project, explaining its purpose and main features.',
    image: '/images/projects/project3.jpg',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    links: [
      { type: 'github', url: 'https://github.com/username/project3', label: 'GitHub' },
      { type: 'external', url: 'https://project3-demo.example.com', label: 'Live Demo' },
    ],
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Project Name 4',
    description: 'A brief description of the project, explaining its purpose and main features.',
    image: '/images/projects/project4.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    links: [
      { type: 'github', url: 'https://github.com/username/project4', label: 'GitHub' },
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Project Image
              </div>
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
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
        <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="card p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              
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