'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Northern Lights Background */}
      <section className="relative h-screen flex items-center justify-center mb-16 overflow-hidden">
        {/* Northern Lights Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night-lighter to-aurora-darker z-0">
          {/* Semi-transparent overlay with aurora-like waves */}
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aurora-light via-transparent to-transparent"></div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-3/4 ml-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-aurora via-transparent to-transparent"></div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="h-2/3 w-1/2 mt-24 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-aurora-lighter via-transparent to-transparent"></div>
          </div>
          
          {/* Stars in the night sky */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`
                }}
              ></div>
            ))}
          </div>
          
          {/* Tree silhouettes at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-snow">
            Hello, I'm <span className="text-aurora-lighter">何晓艺</span>
          </h1>
          {/* <h2 className="text-2xl md:text-3xl text-snow mb-8">
            Master Student in Shanghai
          </h2> */}
          {/* <p className="text-xl text-snow max-w-2xl mx-auto mb-10">
            Welcome to my personal website. I'm a researcher and developer passionate about 
            machine learning, data visualization, and human-computer interaction.
          </p> */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/resume" className="btn">
              View Resume <FaFileAlt className="ml-2" />
            </Link>
            <Link href="/projects" className="btn bg-night bg-opacity-70 hover:bg-night">
              Explore Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Moving content sections inside hero */}
          <div className="p-4 sm:p-8 mt-4 sm:mt-8 text-left">
            {/* About Section */}
            <section className="mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 border-b border-aurora pb-2 text-snow text-shadow-sm">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-base sm:text-lg mb-3 sm:mb-4 text-snow text-shadow-sm">
                    I am a Senior Video Architect at Nvidia, focusing on DLSS frame generation research. Previously, I worked 
                    at Bilibili Group implementing video compression technologies.
                  </p>
                  <p className="text-base sm:text-lg mb-3 sm:mb-4 text-snow text-shadow-sm">
                    I received my Master's and Bachelor's degrees in Electronics Engineering from Shanghai Jiao Tong University,
                    specializing in artificial intelligence and deep learning for image/video processing.
                  </p>
                  <p className="text-base sm:text-lg text-snow text-shadow-sm">
                    My work has been recognized with the "Best Demo of The Year" award at Microsoft Research Asia Symposium for 
                    my intelligent surveillance system project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-snow text-shadow-sm">
                    <span className="h-5 w-1 bg-aurora mr-2"></span>
                    Research Interests
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-snow text-shadow-sm">
                    <li>Video Compression & Enhancement</li>
                    <li>Computer Vision & Deep Learning</li>
                    <li>Frame Generation & DLSS</li>
                    <li>Intelligent Surveillance Systems</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-snow text-shadow-sm">
                    <span className="h-5 w-1 bg-aurora mr-2"></span>
                    Connect with me
                  </h3>
                  <div className="flex space-x-4 ml-4">
                    <Link 
                      href="https://github.com/hexiaoyi95" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-snow hover:text-aurora-light"
                    >
                      <FaGithub className="h-8 w-8" />
                    </Link>
                    <Link 
                      href="https://linkedin.com/in/xiaoyihe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-snow hover:text-aurora-light"
                    >
                      <FaLinkedin className="h-8 w-8" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Work Section */}
            <section className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold border-b border-aurora pb-2 text-snow text-shadow-sm">Latest Work</h2>
                <Link href="/projects" className="text-aurora-light hover:text-aurora-lighter flex items-center mt-2 sm:mt-0">
                  View all <FaArrowRight className="ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Project Card 1 */}
                <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                  <div className="h-2 aurora-gradient"></div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">Deep Learning Video Compression</h3>
                    <p className="text-gray-300 mb-4 text-shadow-sm">
                      A novel CNN utilizing partition information to enhance compressed videos, achieving 10% bitrate savings on benchmark sequences.
                    </p>
                    <Link href="/projects/deep-learning-video-compression" className="text-aurora-light hover:text-aurora-lighter flex items-center">
                      Learn more <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Project Card 2 */}
                <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                  <div className="h-2 aurora-gradient"></div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">Intelligent Surveillance System</h3>
                    <p className="text-gray-300 mb-4 text-shadow-sm">
                      Real-time deep learning based fall detection algorithm with over 80% accuracy, winning "Best Demo" at Microsoft Research Asia Symposium.
                    </p>
                    <Link href="/projects/intelligent-surveillance-system" className="text-aurora-light hover:text-aurora-lighter flex items-center">
                      Learn more <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Project Card 3 */}
                <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                  <div className="h-2 aurora-gradient"></div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">Lossless Compression for Skeletons</h3>
                    <p className="text-gray-300 mb-4 text-shadow-sm">
                      Implemented a lossless compression method for skeleton data in videos based on spatial-temporal correlation, achieving 84% compression ratio.
                    </p>
                    <Link href="/projects/lossless-compression-for-skeletons" className="text-aurora-light hover:text-aurora-lighter flex items-center">
                      Learn more <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Add a style for twinkling stars animation and text shadow */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .text-shadow-sm {
          text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        }
      `}</style>
    </div>
  );
} 