'use client';

import { FaDownload, FaUser, FaGraduationCap, FaBriefcase, FaCode, FaNewspaper, FaTrophy, FaCertificate } from 'react-icons/fa';
import React, { useRef } from 'react';
import publications from '@/data/publications';
import { generatePDF } from '@/utils/pdfGenerator';

// Resume data for Shawn He from CV
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

// Let's add the proper TypeScript interface
interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  period: string;
  description: {
    text: string;
    subItems: string[];
  }[];
}

// Use the interface for the experience array
const experience: ExperienceItem[] = [
  {
    position: 'Senior Video Architect',
    company: 'Nvidia',
    location: 'Shanghai, China',
    period: 'May 2021 - Present',
    description: [
      {
        text: 'DLSS frame generation research. Core contributor of Nvidia Smooth Motion',
        subItems: []
        // subItems: [
        //   'Researched and implemented first driver-level frame generation model with shippable quality ',
        //   'Continously contributed to quality improvement and performance optimization',
        // ]
      },
      
      {
        text: 'Video frame generation research',
        subItems: []
      },
      {
        text: 'Efficient frame generation for autonomous driving with Nvidia OFA hardware',
        subItems: []
      },
      {
        text: 'Optical flow acceletor algorithm research and improvement',
        subItems: []
        // subItems: [
        //   'Efficient e2e optical flow estimation network design and implementation',
        //   'Hybrid optical flow estimation method design and implementation: learnable matching cost, confidence prediction',
        // ]
      },
    ]
  },
  {
    position: 'Algorithm Engineer',
    company: 'Bilibili Group',
    location: 'Shanghai, China',
    period: 'Apr 2020 - May 2021',
    description: [
      {
        text: 'Design, implementation and optimization of video compression adaptive preprocessing engine (FFmpeg+TensorRT)',
        subItems: [
          'involving technologies such as quality assessment, denoising, enhancement, etc',
          'For UGC videos, it saves approximately 10% bitrate at the same quality level',
        ]
      },
      {
        text: 'Familiar with C/C++ implementation of various denoising and enhancement algorithms, and their integration with FFmpeg.',
        subItems: []
      },
      {
        text: 'Participated in assembly optimization of video encoders',
        subItems: []
      },
      {
        text: 'Built a video subjective quality blind testing platform to accelerate video algorithm development and verification.',
        subItems: []
      },
      {
        text: 'Built a video encoder testing visualization platform to accelerate encoder development and algorithm verification.',
        subItems: []
      }
    ],
  },
  {
    position: 'Research Assistant',
    company: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: '2015 - 2019',
    description: [
      {
        text: 'Advisor: Prof. Weiyao Lin. Focused on Action Recognition, DL-based Video Compression, and Features Compression',
        subItems: []
      },
      {
        text: 'Developed algorithms for lossless skeleton data compression',
        subItems: []
      },
      {
        text: 'Developed algorithms for compressed video enhancement using deep learning',
        subItems: []
      },
      {
        text: 'Participated in intelligent surveillance systems and developed human activity recognition algorithms',
        subItems: []
      },
    ],
  },
  {
    position: 'Algorithm Engineer Intern',
    company: 'Alibaba Cloud',
    location: 'Shanghai, China',
    period: 'Jul 2019 - Sep 2019',
    description: [
      {
        text: 'Research and development of super-resolution algorithms',
        subItems: []
      },
      {
        text: 'Applied deep learning techniques to enhance low-resolution images and videos',
        subItems: []
      },
    ],
  },
  {
    position: 'Intern',
    company: 'Intel Asia-Pacific R&D Ltd',
    location: 'Shanghai, China',
    period: 'Mar 2017 - Sep 2017',
    description: [
      {
        text: 'Implemented a cross-framework test tool for deep learning frameworks (TensorFlow & Chainer)',
        subItems: []
      },
      {
        text: 'Developed applications for layer accuracy, convergence, and performance testing',
        subItems: []
      },
      {
        text: 'Enabled daily testing based on Jenkins and cluster infrastructure',
        subItems: []
      },
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
    description: 'Proposed a novel CNN utilizing partition information in video encoder to enhance compressed videos (deblocking). Achieved about 10% bitrate saving on benchmark sequences. Paper accepted by ICIP 2019 (oral), IEEE Transactions on Multimedia 2020 and won 2nd prize in ChinaMM 2018 challenge.',
  },
  {
    title: 'Intelligent Surveillance',
    period: '2016 - 2017',
    description: 'Established a dataset for human fall detection. Developed a real-time deep learning based fall detection algorithm with over 80% accuracy. Won "Best Demo of the Year" award at Microsoft Research Asia Symposium in 2017.',
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
    'One paper about frame generation is accepted by NVIDIA internal conference (NTech 2024, 200/900+ submissions)',
    'Second prize in "Deep-learning based Post Processing for Compressed Images" challenge (ChinaMM 2018)',
    <a href="https://www.microsoft.com/en-us/research/blog/visual-intelligence-smart-home-security/" target="_blank" rel="noopener noreferrer" className="text-aurora hover:text-aurora-dark">Best Demo of The Year Award at Microsoft Research Asia Symposium</a>,
    'Merit Student of Shanghai Jiao Tong University',
    'National Encouragement Scholarship',
  ],
};

export default function ResumePage() {
  // Sort publications by citation count (highest first)
  const sortedPublications = [...publications]
    .filter(item => item.type === 'publication')
    .sort((a, b) => (b.citations || 0) - (a.citations || 0));
  
  // Get patents sorted by year (newest first)
  const patents = [...publications]
    .filter(item => item.type === 'patent')
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));
  
  // Reference to the resume content container
  const resumeRef = useRef<HTMLDivElement>(null);
  
  // State for tracking PDF generation
  const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false);
  const [pdfError, setPdfError] = React.useState<string | null>(null);
  const [pdfSuccess, setPdfSuccess] = React.useState<boolean>(false);
  const [pdfFilename, setPdfFilename] = React.useState<string>('');
  
  // Function to handle PDF generation
  const handleDownloadPDF = async () => {
    if (resumeRef.current && !isGeneratingPDF) {
      try {
        setPdfError(null);
        setPdfSuccess(false);
        setPdfFilename('');
        setIsGeneratingPDF(true);
        
        // Clone the content to prevent modifications to the actual DOM
        const clonedContent = resumeRef.current.cloneNode(true) as HTMLElement;
        
        // Remove the download button from the cloned content
        const downloadButton = clonedContent.querySelector('.download-btn');
        if (downloadButton && downloadButton.parentNode) {
          downloadButton.parentNode.removeChild(downloadButton);
        }
        
        // Create a timestamp for the filename
        const now = new Date();
        const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;
        const filename = `Xiaoyi_He_CV_${timestamp}.pdf`;
        
        // Generate the PDF
        const success = await generatePDF(clonedContent, filename);
        
        if (!success) {
          setPdfError('Failed to generate PDF. Please try again.');
        } else {
          setPdfSuccess(true);
          setPdfFilename(filename);
        }
      } catch (error) {
        console.error('Error generating PDF:', error);
        setPdfError('An error occurred while generating the PDF.');
      } finally {
        setIsGeneratingPDF(false);
      }
    }
  };
  
  // Clear error after some time
  React.useEffect(() => {
    if (pdfError) {
      const timer = setTimeout(() => {
        setPdfError(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [pdfError]);
  
  // Clear success message after some time
  React.useEffect(() => {
    if (pdfSuccess) {
      const timer = setTimeout(() => {
        setPdfSuccess(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [pdfSuccess]);
  
  return (
    <div className="container mx-auto py-8 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto" ref={resumeRef}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">何晓艺/Shawn He</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
              {/*Software Engineer*/}
            </h2>
            <div className="text-gray-700 dark:text-gray-300">
              <p>Shanghai, China</p>
              <p>xiaoyi.he@outlook.com</p>
            </div>
          </div>
          <button 
            onClick={handleDownloadPDF}
            className="btn mt-4 sm:mt-0 inline-flex items-center download-btn"
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <FaDownload className="mr-2" /> Download CV
              </>
            )}
          </button>
        </div>
        
        {/* Error message */}
        {pdfError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">{pdfError}</span>
          </div>
        )}
        
        {/* Success message */}
        {pdfSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">
              PDF generated successfully! Your file <strong>{pdfFilename}</strong> is being downloaded.
            </span>
          </div>
        )}

        {/* Education Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-aurora flex items-center">
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
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-aurora flex items-center">
            <FaBriefcase className="mr-2 text-aurora" /> Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
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
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-1 pdf-list-item">
                      <span className="pdf-main-point">{item.text}</span>
                      {item.subItems && item.subItems.length > 0 && (
                        <ul className="pdf-sub-list ml-6 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {item.subItems.map((subItem, subIdx) => (
                            <li key={subIdx} className="pdf-sub-item ml-2">
                              <span>• {subItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Research Projects Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-aurora flex items-center">
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
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-aurora flex items-center">
            <FaNewspaper className="mr-2 text-aurora" /> Publications
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {sortedPublications.map((pub, index) => (
              <div key={index} className="bg-white dark:bg-night-lighter p-3 sm:p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                <p className="text-aurora dark:text-aurora-light">{pub.authors}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {pub.venue}, {pub.year} {pub.note && <span className="font-medium text-aurora-dark dark:text-aurora-light">({pub.note})</span>}
                  {pub.citations !== undefined && <span className="ml-2 text-aurora-dark">• {pub.citations} citation{pub.citations !== 1 ? 's' : ''}</span>}
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
                  {pub.project && (
                    <a href={pub.project} target="_blank" rel="noopener noreferrer" className="text-sm text-aurora hover:text-aurora-dark">
                      [Project Page]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patents Section */}
        {patents.length > 0 && (
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-aurora flex items-center">
              <FaCertificate className="mr-2 text-aurora" /> Patents
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {patents.map((patent, index) => (
                <div key={index} className="bg-white dark:bg-night-lighter p-3 rounded-lg pdf-list-item">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold">{patent.title}</h3>
                      <p className="text-sm text-aurora dark:text-aurora-light">{patent.authors}</p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 sm:text-right">
                      <div className="flex items-center gap-2">
                        <span>{patent.patentNumber}</span>
                        {patent.status && (
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                            {patent.status}
                          </span>
                        )}
                      </div>
                      <span>{patent.year}</span>
                    </div>
                  </div>
                  {patent.links && patent.links.length > 0 && (
                    <div className="mt-1 space-x-2">
                      {patent.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs text-aurora hover:text-aurora-dark"
                        >
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b border-aurora flex items-center">
            <FaCode className="mr-2 text-aurora" /> Skills & Achievements
          </h2>
          <div className="space-y-6">
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