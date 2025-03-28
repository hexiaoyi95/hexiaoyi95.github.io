'use client';

import { FaDownload } from 'react-icons/fa';

// Sample resume data - replace with your actual information
const education = [
  {
    degree: 'Master of Science',
    field: 'Computer Science',
    institution: 'Your University',
    location: 'Shanghai, China',
    period: '2020 - Present',
    description: 'Focus on machine learning and data visualization. Thesis: "Your Thesis Title".',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'Your Previous University',
    location: 'Your Previous Location',
    period: '2016 - 2020',
    description: 'Graduated with honors. Senior project: "Your Project Title".',
  },
];

const experience = [
  {
    position: 'Research Assistant',
    company: 'Research Lab',
    location: 'Shanghai, China',
    period: 'Jun 2021 - Present',
    description: [
      'Conduct research on [Specific Research Areas]',
      'Developed and implemented algorithms for [Specific Task]',
      'Published papers in [Relevant Conferences/Journals]',
      'Collaborated with a team of X researchers on [Project/Topic]',
    ],
  },
  {
    position: 'Software Engineering Intern',
    company: 'Tech Company',
    location: 'Location',
    period: 'May 2020 - Aug 2020',
    description: [
      'Developed and maintained [Specific Features/Systems]',
      'Improved performance of [Specific System] by X%',
      'Collaborated with a team using [Technologies/Methodologies]',
    ],
  },
];

const skills = {
  technical: [
    'Programming Languages: Python, Java, C++, JavaScript',
    'Machine Learning: TensorFlow, PyTorch, Scikit-learn',
    'Web Development: React, Node.js, HTML/CSS',
    'Data Analysis: Pandas, NumPy, SQL',
    'DevOps: Git, Docker, CI/CD',
  ],
  languages: [
    'Chinese (Native)',
    'English (Fluent)',
    'Other Language (Basic)',
  ],
};

export default function ResumePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Xiaoyi He</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
              Master Student in Computer Science
            </h2>
            <div className="text-gray-700 dark:text-gray-300">
              <p>Shanghai, China</p>
              <p>your.email@example.com</p>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <button className="btn">
            <FaDownload className="mr-2" /> Download CV
          </button>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
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
                  <div className="text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{edu.location}</div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="text-primary-600 dark:text-primary-400">
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

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Languages</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {skills.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 