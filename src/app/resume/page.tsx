'use client';

import { FaDownload, FaUser, FaGraduationCap, FaBriefcase, FaCode, FaNewspaper, FaTrophy } from 'react-icons/fa';
import React from 'react';

// Resume data for Xiaoyi He from CV
const education = [
  {
    degree: 'Master of Engineering',
    field: 'Electronics Engineering (EE)',
    institution: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: '2017 - 2020',
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics Engineering (EE)',
    institution: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: '2013 - 2017',
  },
];

const experience = [
  {
    position: 'Senior Video Architect',
    company: 'Nvidia',
    location: 'Shanghai, China',
    period: 'May 2021 - Present',
    description: [
      'DLSS frame generation research. Core contributor of Nvidia Smooth Motion, a driver-level frame generation solution',
      'Optical flow acceletor algorithm research and improvement',
    ]
  },
  {
    position: 'Algorithm Engineer',
    company: 'Bilibili Group',
    location: 'Shanghai, China',
    period: 'Apr 2020 - May 2021',
    description: [
      'Design, optimization and implementation of video compression adaptive preprocessing engine (FFmpeg+TensorRT), involving technologies such as quality assessment, denoising, enhancement, etc. For UGC videos, it saves approximately 10% bitrate at the same quality level.',
      'Familiar with C/C++ implementation of various denoising and enhancement algorithms, and their integration with FFmpeg.',
      'In-depth understanding of video coding standards (H.264, H.265) and algorithms, participated in assembly optimization of encoders.',
      'Built a video subjective quality blind testing platform to accelerate video algorithm development and verification.',
      'Built a video encoder testing visualization platform to accelerate encoder development and algorithm verification.'
    ],
  },
  {
    position: 'Research Assistant',
    company: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: '2015 - 2019',
    description: [
      'Advisor: Prof. Weiyao Lin',
      'Focused on Action Recognition, DL-based Video Compression, and Features Compression',
      'Developed algorithms for image/video enhancement and compression using deep learning',
      'Conducted research on intelligent surveillance systems and human activity recognition',
    ],
  },
  {
    position: 'Algorithm Engineer Intern',
    company: 'Alibaba Cloud',
    location: 'Shanghai, China',
    period: 'Jul 2019 - Sep 2019',
    description: [
      'Research and development of super-resolution algorithms',
      'Applied deep learning techniques to enhance low-resolution images and videos',
    ],
  },
  {
    position: 'Intern',
    company: 'Intel Asia-Pacific R&D Ltd',
    location: 'Shanghai, China',
    period: 'Mar 2017 - Sep 2017',
    description: [
      'Implemented a cross-framework test tool for deep learning frameworks (TensorFlow & Chainer)',
      'Developed applications for layer accuracy, convergence, and performance testing',
      'Enabled daily testing based on Jenkins and cluster infrastructure',
    ],
  },
];

const projects = [
  {
    title: 'End-to-end Deep Learning Based Image/Video Compression',
    period: '2019 - 2020',
    description: 'Surveyed on end-to-end deep learning based image/video compression. Implemented novel ideas and experimental verifications.',
  },
  {
    title: 'Lossless Compression for Skeletons Data in Surveillance Videos',
    period: '2018 - 2019',
    description: 'Implemented a lossless compression method for skeletons data in videos based on spatial and temporal correlation. Achieved about 84% compression ratio on test surveillance sequences. Published two papers and had one proposal accepted.',
  },
  {
    title: 'Deep Learning Based Video Compression',
    period: '2017 - 2018',
    description: 'Proposed a novel CNN utilizing partition information in video encoder to enhance compressed videos (deblocking). Achieved about 10% bitrate saving on benchmark sequences. Paper accepted by ICIP 2019 (oral) and won 2nd prize in ChinaMM 2018 challenge.',
  },
  {
    title: 'Intelligent Surveillance',
    period: '2016 - 2017',
    description: 'Established a dataset for human fall detection. Developed a real-time deep learning based fall detection algorithm with over 80% accuracy. Won "Best Demo of the Year" award at Microsoft Research Asia Symposium in 2017.',
  },
];

const publications = [
  {
    title: 'Enhancing HEVC Compressed Videos with a Partition-Masked Convolutional Neural Network',
    venue: 'International Conference on Image Processing (ICIP)',
    year: '2018',
    authors: 'He, Xiaoyi, et al.',
    note: 'Oral presentation, 33 citations',
    link: 'https://arxiv.org/abs/1805.03894',
  },
  {
    title: 'A Multimodal Lossless Coding Method for Skeletons in Videos',
    venue: 'IEEE International Conference on Multimedia & Expo Workshop (ICME)',
    year: '2019',
    authors: 'He, Xiaoyi, et al.',
  },
  {
    title: 'Partition-aware Adaptive Switching Networks for Post-processing in HEVC',
    venue: 'IEEE Transactions on Multimedia',
    year: '2020',
    authors: 'Lin Weiyao, He Xiaoyi, et al.',
    link: 'https://arxiv.org/abs/1912.11604',
    code: 'https://github.com/hexiaoyi95/Partition-aware',
  },
  {
    title: 'Key-point Sequence Lossless Compression for Intelligent Video Analysis',
    venue: 'IEEE MultiMedia',
    year: '2020',
    authors: 'Lin Weiyao, He Xiaoyi, et al.',
  },
  {
    title: 'Deep Residual Network Based HEVC Compressed Videos Enhancement',
    venue: 'Computer Science',
    year: '2019',
    authors: 'He Xiao-yi, et al.',
  },
];

const skills = {
  technical: [
    'Programming Languages: Python, C++, Matlab',
    'Deep Learning Frameworks: TensorFlow, PyTorch, Caffe',
    'Simulation: Labview',
    'Research Areas: Computer Vision, Video Compression, Deep Learning',
  ],
  achievements: [
    'Second prize in "Deep-learning based Post Processing for Compressed Images" challenge (ChinaMM 2018)',
    <a href="https://www.microsoft.com/en-us/research/blog/visual-intelligence-smart-home-security/" target="_blank" rel="noopener noreferrer">Best Demo of The Year Award at Microsoft Research Asia Symposium</a>,
    'Merit Student of Shanghai Jiao Tong University',
    'National Encouragement Scholarship',
  ],
};

export default function ResumePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">何晓艺/Shawn He</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
              {/*Software Engineer*/}
            </h2>
            <div className="text-gray-700 dark:text-gray-300">
              <p>Shanghai, China</p>
              <p>xiaoyi.he@outlook.com</p>
            </div>
          </div>
          <button className="btn">
            <FaDownload className="mr-2" /> Download CV
          </button>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-aurora flex items-center">
            <FaGraduationCap className="mr-2 text-aurora" /> Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="text-xl font-semibold">
                    {edu.degree} in {edu.field}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="text-aurora dark:text-aurora-light">
                    {edu.institution}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-aurora flex items-center">
            <FaBriefcase className="mr-2 text-aurora" /> Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="text-aurora dark:text-aurora-light">
                    {exp.company}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{exp.location}</div>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Research Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-aurora flex items-center">
            <FaCode className="mr-2 text-aurora" /> Research Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{project.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-aurora flex items-center">
            <FaNewspaper className="mr-2 text-aurora" /> Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white dark:bg-night-lighter p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                <p className="text-aurora dark:text-aurora-light">{pub.authors}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {pub.venue}, {pub.year} {pub.note && <span className="font-medium text-aurora-dark dark:text-aurora-light">({pub.note})</span>}
                </p>
                <div className="mt-1 space-x-3">
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-aurora hover:text-aurora-dark">
                      [Paper]
                    </a>
                  )}
                  {pub.code && (
                    <a href={pub.code} target="_blank" rel="noopener noreferrer" className="text-sm text-aurora hover:text-aurora-dark">
                      [Code]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-aurora flex items-center">
            <FaCode className="mr-2 text-aurora" /> Skills & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="h-4 w-1 bg-aurora mr-2"></span>
                Technical Skills
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                {skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="h-4 w-1 bg-aurora mr-2"></span>
                <FaTrophy className="mr-2 text-aurora-light" /> Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                {skills.achievements.map((achievement, index) => (
                  <li key={index}>{React.isValidElement(achievement) ? achievement : achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 