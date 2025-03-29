'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Northern Lights Background */}
      <section className="relative min-h-screen flex items-center justify-center mb-8 sm:mb-16 overflow-hidden">
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
          
          {/* Stars in the night sky - limited number on mobile */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
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
          <div className="absolute bottom-0 left-0 right-0 h-[10vh] sm:h-1/6 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto relative z-20 text-center px-4 py-4 sm:py-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-snow">
            Hello, I'm <span className="text-aurora-lighter">何晓艺</span>
          </h1>
          {/* <h2 className="text-2xl md:text-3xl text-snow mb-8">
            Master Student in Shanghai
          </h2> */}
          {/* <p className="text-xl text-snow max-w-2xl mx-auto mb-10">
            Welcome to my personal website. I'm a researcher and developer passionate about 
            machine learning, data visualization, and human-computer interaction.
          </p> */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Link href="/resume" className="btn text-sm sm:text-base">
              View Resume <FaFileAlt className="ml-1 sm:ml-2" />
            </Link>
            <Link href="/projects" className="btn bg-night bg-opacity-70 hover:bg-night text-sm sm:text-base">
              Explore Projects <FaArrowRight className="ml-1 sm:ml-2" />
            </Link>
          </div>

          {/* Moving content sections inside hero */}
          <div className="p-3 sm:p-4 md:p-8 mt-4 sm:mt-8 text-left">
            {/* About Section */}
            <section className="mb-6 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 border-b border-aurora pb-2 text-snow text-shadow-sm">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div>
                  <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-snow text-shadow-sm">
                    Senior Video Architect at Nvidia working on DLSS frame generation and optical flow algorithms. Previously built video compression systems at Bilibili that achieved 10% bitrate savings.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-snow text-shadow-sm">
                    Electronics Engineering graduate from Shanghai Jiao Tong University with research publications in video compression and computer vision.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center text-snow text-shadow-sm">
                    <span className="h-4 sm:h-5 w-1 bg-aurora mr-2"></span>
                    Expertise
                  </h3>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 mb-4 sm:mb-6 ml-2 sm:ml-4 text-sm sm:text-base text-snow text-shadow-sm">
                    <li>Frame Generation & DLSS</li>
                    <li>Video Compression</li>
                    <li>Computer Vision & Deep Learning</li>
                  </ul>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center text-snow text-shadow-sm">
                    <span className="h-4 sm:h-5 w-1 bg-aurora mr-2"></span>
                    Connect with me
                  </h3>
                  <div className="flex space-x-4 ml-2 sm:ml-4">
                    <Link 
                      href="https://github.com/hexiaoyi95" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-snow hover:text-aurora-light p-1 touch-target"
                    >
                      <FaGithub className="h-6 w-6 sm:h-8 sm:w-8" />
                    </Link>
                    <Link 
                      href="https://linkedin.com/in/xiaoyihe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-snow hover:text-aurora-light p-1 touch-target"
                    >
                      <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Work Section */}
            <section className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold border-b border-aurora pb-2 text-snow text-shadow-sm mb-2 sm:mb-0">Latest Work</h2>
                <Link href="/projects" className="text-aurora-light hover:text-aurora-lighter flex items-center text-sm sm:text-base">
                  View all <FaArrowRight className="ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {/* Project Card 1 */}
                <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                  <div className="h-2 aurora-gradient"></div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">NVIDIA DLSS 4 Frame Generation</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 text-shadow-sm">
                      Core contributor to NVIDIA's next-generation frame generation technology. Part of the research team for DLSS 4's Multi Frame Generation, enabling significant performance improvements and visual fidelity in real-time graphics.
                    </p>
                    <Link href="https://research.nvidia.com/labs/adlr/DLSS4/" className="text-aurora-light hover:text-aurora-lighter flex items-center text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                      View Research <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Project Card 2 - NEW */}
                <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                  <div className="h-2 aurora-gradient"></div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">NVIDIA Smooth Motion</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 text-shadow-sm">
                      Developed driver-based AI model that enhances gameplay by inferring additional frames between rendered frames, now available in the NVIDIA App. Works across DirectX 11 and 12 games without requiring DLSS integration.
                    </p>
                    <Link href="https://www.nvidia.com/en-us/geforce/news/nvidia-app-update-dlss-overrides-and-more/" className="text-aurora-light hover:text-aurora-lighter flex items-center text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                      View Feature <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Project Card 3 */}
                <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                  <div className="h-2 aurora-gradient"></div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">Video Compression Engine</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 text-shadow-sm">
                      Designed and optimized an adaptive preprocessing engine for video compression using FFmpeg+TensorRT, achieving 10% bitrate savings for user-generated content.
                    </p>
                    <Link href="/projects/video-quality-testing" className="text-aurora-light hover:text-aurora-lighter flex items-center text-sm sm:text-base">
                      Learn more <FaArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Project Card 4 - Hidden but preserved in code */}
                <div className="hidden">
                  <div className="card group hover:shadow-lg transition-all duration-300 bg-night-lighter bg-opacity-30 backdrop-blur-sm rounded-lg border border-aurora-darker border-opacity-30">
                    <div className="h-2 aurora-gradient"></div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-aurora-light transition-colors text-snow text-shadow-sm">Video Quality Testing Platform</h3>
                      <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 text-shadow-sm">
                        Built comprehensive platforms for video subjective quality blind testing and encoder testing visualization to accelerate video algorithm development and verification.
                      </p>
                      <Link href="/projects/video-quality-testing" className="text-aurora-light hover:text-aurora-lighter flex items-center text-sm sm:text-base">
                        Learn more <FaArrowRight className="ml-1" />
                      </Link>
                    </div>
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
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          /* Reduce animation complexity for better performance */
          @keyframes twinkle {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          
          /* Ensure page doesn't overflow horizontally */
          body {
            overflow-x: hidden;
            width: 100%;
          }
          
          /* Ensure proper tap targets */
          a, button {
            min-height: 44px;
            min-width: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
} 