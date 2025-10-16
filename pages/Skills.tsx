
import React from 'react';
import type { Skill } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
        <span className="text-sm font-medium text-sky-500 dark:text-sky-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
        <div
          className="bg-sky-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
    const skillCategories: { title: string; skills: Skill[] }[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React & Next.js', level: 92 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'Flutter', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js & Express', level: 70 },
        { name: 'Firebase', level: 80 },
        { name: 'REST APIs', level: 88 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'Webpack & Vite', level: 78 },
        { name: 'Jest & Testing Library', level: 70 },
      ],
    },
  ];

  return (
    <AnimatedSection>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-sky-500 dark:text-sky-400">My Skills</h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-12">
            A look at the technologies and tools I'm proficient with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <div key={category.title} className="bg-slate-100/50 dark:bg-slate-800/50 p-6 rounded-xl shadow-md backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
            <div>
              {category.skills.map(skill => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
