
import React from 'react';
import type { ExperienceItem } from '../types';
import AnimatedSection from '../components/AnimatedSection';

const TimelineItem: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {/* Vertical line */}
    {!isLast && <div className="absolute top-0 left-4 sm:left-20 w-px h-full bg-slate-300 dark:bg-slate-600 group-hover:bg-sky-500 transition-colors duration-300"></div>}
    
    {/* Dot */}
    <div className="absolute top-6 left-[10px] sm:left-[74px] w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-500 group-hover:bg-sky-500 ring-4 ring-slate-50 dark:ring-slate-900 transition-all duration-300"></div>

    <div className="pl-4">
      <div className="flex flex-col sm:flex-row items-start mb-1 sm:items-center">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{item.role}</h3>
        <span className="sm:ml-4 text-sm font-medium text-sky-500 dark:text-sky-400">{item.company}</span>
      </div>
      <time className="sm:absolute top-6 right-0 text-sm text-slate-500 dark:text-slate-400">{item.period}</time>
      <ul className="list-disc pl-5 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
        {item.description.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experienceData: ExperienceItem[] = [
    {
      role: 'Senior Frontend Developer',
      company: 'YCMS One Digital Technologies',
      period: 'June 2025 - Present',
      description: [
        'Led the development of a new client-facing dashboard using React and TypeScript.',
        'Mentored junior developers and conducted code reviews to maintain code quality.',
        'Improved application performance by 20% through code splitting and lazy loading.',
      ],
    },
    
    {
      role: 'Web Developer Intern',
      company: 'DMS Computers and Technology',
      period: 'May 2000 - Aug 2022',
      description: [
        'Assisted in building and testing new features for a legacy web application.',
        'Gained hands-on experience with HTML, CSS, and jQuery.',
      ],
    },
    {
      role: 'B.Sc. in Computer Science',
      company: 'University of Mumbai',
      period: '2023 - 2026',
      description: [
          'Graduated with honors, focusing on software engineering and human-computer interaction.',
          'Completed a final year project on Digital Student ID.'
      ],
      isEducation: true,
    },
  ];

  return (
    <AnimatedSection>
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-2 text-sky-500 dark:text-sky-400">Experience & Education</h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-12">
                My professional journey and academic background.
            </p>
        </div>
        <div className="relative">
            {experienceData.map((item, index) => (
                <TimelineItem key={index} item={item} isLast={index === experienceData.length - 1} />
            ))}
        </div>
    </AnimatedSection>
  );
};

export default Experience;
