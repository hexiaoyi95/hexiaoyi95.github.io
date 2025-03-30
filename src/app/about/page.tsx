'use client';

import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaCode, FaFlask } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="relative w-full aspect-square mb-4">
            {/* Replace with your actual profile image */}
            <div className="rounded-lg bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
              Profile Image
            </div>
            {/* Uncomment when you have an actual image
            <Image
              src="/images/about-profile.jpg"
              alt="Shawn He"
              fill
              className="rounded-lg object-cover"
            />
            */}
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Quick Info</h2>
            <ul className="space-y-2">
              <li><strong>Name:</strong> Shawn He / 何晓艺</li>
              <li><strong>Location:</strong> Shanghai, China</li>
              <li><strong>Email:</strong> xiaoyi.he@outlook.com</li>
              <li><strong>Languages:</strong> Chinese (Native), English (Fluent)</li>
              <li><strong>Interests:</strong> Video Compression, Computer Vision, Deep Learning</li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="mb-4">
              I am a Senior Video Architect at Nvidia, focusing on DLSS frame generation research and optical flow 
              accelerator algorithm improvement. I previously worked at Bilibili Group, where I designed and 
              implemented video compression adaptive preprocessing engines that achieved 10% bitrate savings.
            </p>
            <p className="mb-4">
              With a strong foundation in Electronics Engineering and extensive experience in deep learning, 
              I specialize in developing advanced algorithms for video compression, enhancement, and frame generation.
              My work spans both academic research and industry applications.
            </p>
            <p>
              My research has been published in respected journals and conferences, including IEEE Transactions on Multimedia
              and the International Conference on Image Processing (ICIP), and has been recognized with multiple awards.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaGraduationCap className="mr-2" /> Education
            </h2>
            <div className="timeline">
              <div className="timeline-item mb-6">
                <div className="text-lg font-semibold">Master of Engineering in Electronics Engineering</div>
                <div className="text-primary-600 dark:text-primary-400">Shanghai Jiao Tong University • 2017 - 2020</div>
                <div className="mt-2">
                  Specialized in artificial intelligence and deep learning for image/video processing and compression.
                  Research focus on developing CNN-based video enhancement and compression algorithms.
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="text-lg font-semibold">Bachelor of Engineering in Electronics Engineering</div>
                <div className="text-primary-600 dark:text-primary-400">Shanghai Jiao Tong University • 2013 - 2017</div>
                <div className="mt-2">
                  Foundation in electronics engineering with focus on signal processing and computer vision.
                  Coursework in programming, algorithms, and signal processing.
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaBriefcase className="mr-2" /> Experience
            </h2>
            <div className="timeline">
              <div className="timeline-item mb-6">
                <div className="text-lg font-semibold">Senior Video Architect</div>
                <div className="text-primary-600 dark:text-primary-400">Nvidia • May 2021 - Present</div>
                <div className="mt-2">
                  Core contributor to Nvidia Smooth Motion, a driver-level frame generation solution.
                  Conducting research on DLSS frame generation and optical flow accelerator algorithm improvements.
                </div>
              </div>
              
              <div className="timeline-item mb-6">
                <div className="text-lg font-semibold">Algorithm Engineer</div>
                <div className="text-primary-600 dark:text-primary-400">Bilibili Group • Apr 2020 - May 2021</div>
                <div className="mt-2">
                  Designed and implemented video compression adaptive preprocessing engines using FFmpeg and TensorRT.
                  Built video subjective quality testing platforms and encoder testing visualization platforms.
                  Implemented C/C++ algorithms for denoising and enhancement.
                </div>
              </div>
              
              <div className="timeline-item mb-6">
                <div className="text-lg font-semibold">Research Assistant</div>
                <div className="text-primary-600 dark:text-primary-400">Shanghai Jiao Tong University • 2015 - 2019</div>
                <div className="mt-2">
                  Worked under Prof. Weiyao Lin on Action Recognition, DL-based Video Compression, and Features Compression.
                  Developed algorithms for image/video enhancement and compression using deep learning.
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="text-lg font-semibold">Intern</div>
                <div className="text-primary-600 dark:text-primary-400">Intel Asia-Pacific R&D Ltd • Mar 2017 - Sep 2017</div>
                <div className="mt-2">
                  Implemented a cross-framework test tool for deep learning frameworks (TensorFlow & Chainer).
                  Developed applications for layer accuracy, convergence, and performance testing.
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaCode className="mr-2" /> Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Programming</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>CUDA</li>
                  <li>Matlab</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Deep Learning</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Caffe</li>
                  <li>TensorRT</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Video Technology</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>FFmpeg</li>
                  <li>H.264/H.265</li>
                  <li>Video Processing</li>
                  <li>Frame Interpolation</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Research Areas</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Computer Vision</li>
                  <li>Video Compression</li>
                  <li>Frame Generation</li>
                  <li>Optical Flow</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Tools</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>Jupyter Notebooks</li>
                </ul>
              </div>
              
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Languages</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Chinese (Native)</li>
                  <li>English (Fluent)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 