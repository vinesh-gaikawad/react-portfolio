import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const TechIcon: React.FC<{ icon: string; name: string }> = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg transition-transform hover:scale-110">
    <div className="text-4xl text-sky-500 dark:text-sky-400" dangerouslySetInnerHTML={{ __html: icon }} />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

const About: React.FC = () => {
    const techStack = [
        { name: 'HTML5', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M3 3h18v18H3V3zm16.5 1.5L12 9.555 4.5 4.5v12.37L12 11.424l7.5 5.446V4.5zM12 12.51l-7.5 5.446V18h15v-.044L12 12.51z"/></svg>' },
        { name: 'CSS3', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M3 3h18v18H3z" fill-opacity=".5"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>' },
        { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>' },
        { name: 'React', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/></svg>' },
        { name: 'Flutter', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M12.94 2.06L3.8 11.2a.983.983 0 0 0 0 1.38l6.09 6.09L12 16.58l-4.71-4.7 9.15-9.14.5-.5z"/><path d="M12.94 2.06L22.2 11.2a.983.983 0 0 1 0 1.38L12 22.78l-2.06-2.07 7.29-7.29-9.15-9.14.5-.5z"/></svg>' },
        { name: 'Firebase', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M4.14 2.14l1.45-1.45L18 13.14V7h-5.14L4.14 2.14zM18 14v-2.86L6.59 2.41 5.14 3.86 18 16.72V14zM18 17.14l-4.29-4.29-8.57 8.57L6.59 23l11.41-11.41V17.14z"/></svg>' },
        { name: 'TailwindCSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" class="w-10 h-10"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.523 3.922 2.034 5.4 4.05 1.8 2.4 3.15 5.4 6.3 5.4 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.523-3.922-2.034-5.4-4.05-1.8-2.4-3.15-5.4-6.3-5.4zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.523 3.922 2.034 5.4 4.05 1.8 2.4 3.15 5.4 6.3 5.4 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.523-3.922-2.034-5.4-4.05-1.8-2.4-3.15-5.4-6.3-5.4z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v33H0z"/></clipPath></defs></svg>'},
        { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10"><path d="M20.2 6.6l-8-3.5c-.7-.3-1.5-.3-2.2 0l-8 3.5c-.7.3-1.1 1-1.1 1.7v7.2c0 .8.5 1.5 1.2 1.8l8 3.5c.3.1.6.2.9.2s.6-.1.9-.2l8-3.5c.7-.3 1.2-1 1.2-1.8V8.3c0-.8-.5-1.5-1.1-1.7zm-9.3 12.3l-6.8-3V9.2l6.8 3v6.7zm1-6.8l-7.2-3.2 7.2-3.1 7.2 3.1-7.2 3.2zm7.2 3.8l-6.8 3V12.2l6.8-3v6.7z"/></svg>'},
    ];
    
  return (
    <AnimatedSection>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-sky-500 dark:text-sky-400">About Me</h2>
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 mb-12">
          Hello! I'm Vinesh, a frontend developer based in Creative City. I have a knack for building clean, efficient, and visually appealing web applications. My journey into web development started back in college, and since then, I've been hooked on crafting seamless digital experiences. When I'm not coding, you can find me exploring new hiking trails or experimenting with new recipes in the kitchen.
        </p>

        <h3 className="text-2xl font-bold mb-6">My Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto mb-12">
            {techStack.map(tech => <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />)}
        </div>

        <a 
          href="#" 
          download 
          className="inline-block px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all"
        >
          Download Resume
        </a>
      </div>
    </AnimatedSection>
  );
};

export default About;