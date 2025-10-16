
import React from 'react';
import type { Project } from '../types';
import AnimatedSection from '../components/AnimatedSection';

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z"></path>
  </svg>
);

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 10.5z" />
  </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 text-xs font-semibold rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            <GitHubIcon className="w-5 h-5" />
            GitHub
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
            <ExternalLinkIcon className="w-5 h-5" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      image: 'https://picsum.photos/seed/project1/400/300',
      title: 'QR Code Generator',
      description: 'Generate and scan QR codes online for free! Create QR codes for URLs, text, phone numbers, and WiFi. Scan QRs instantly using your camera or image upload. No sign-up required — quick, safe, and 100% free QR tool.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Mobile'],
      githubLink: 'https://vinesh-gaikawad.github.io/QR-Code-generator-and-Scanner/',
      liveLink: 'https://vinesh-gaikawad.github.io/QR-Code-generator-and-Scanner/',
    },
    {
      image: 'https://picsum.photos/seed/project2/400/300',
      title: 'E-commerce React Storefront',
      description: 'A modern, responsive e-commerce site featuring a product catalog, shopping cart, and checkout process, built with React, Redux, and Stripe.',
      tags: ['React', 'Redux', 'Stripe API', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      image: 'https://picsum.photos/seed/project3/400/300',
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets using D3.js and React. Features various chart types and real-time data filtering.',
      tags: ['React', 'D3.js', 'Data Viz'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      image: 'https://picsum.photos/seed/project4/400/300',
      title: 'Personal Blog Platform',
      description: 'A full-stack blog created with Next.js and a headless CMS. Includes markdown support, static site generation, and a clean, minimalist design.',
      tags: ['Next.js', 'Headless CMS', 'SSG', 'React'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      image: 'https://picsum.photos/seed/project1/400/300',
      title: 'Digital Student ID App',
      description: 'A cross-platform mobile app built with Flutter and Firebase for college students to access their ID, check schedules, and receive campus notifications.',
      tags: ['Flutter', 'Firebase', 'Dart', 'Mobile'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      image: 'https://picsum.photos/seed/project2/400/300',
      title: 'E-commerce React Storefront',
      description: 'A modern, responsive e-commerce site featuring a product catalog, shopping cart, and checkout process, built with React, Redux, and Stripe.',
      tags: ['React', 'Redux', 'Stripe API', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      image: 'https://picsum.photos/seed/project3/400/300',
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets using D3.js and React. Features various chart types and real-time data filtering.',
      tags: ['React', 'D3.js', 'Data Viz'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      image: 'https://picsum.photos/seed/project4/400/300',
      title: 'Personal Blog Platform',
      description: 'A full-stack blog created with Next.js and a headless CMS. Includes markdown support, static site generation, and a clean, minimalist design.',
      tags: ['Next.js', 'Headless CMS', 'SSG', 'React'],
      githubLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <AnimatedSection>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-sky-500 dark:text-sky-400">My Projects</h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-12">
          Here are a few projects I've worked on. Feel free to explore them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
