import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import vinesh from '../src/assets/vinesh.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <AnimatedSection className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Hi, I’m VINESH GAIKAWAD <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-sky-500 dark:text-sky-400 mb-4">
                Frontend Developer | React | JavaScript | UI/UX Enthusiast
              </p>
              <p className="mb-8 text-slate-600 dark:text-slate-300">
                I'm a passionate frontend developer with 3+ years of experience in creating beautiful, responsive, and user-friendly web applications. My expertise lies in the React ecosystem, and I love bringing ideas to life in the browser.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link to="/#projects" className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all">
                  View My Work
                </Link>
                <Link to="/#contact" className="px-6 py-3 bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 font-semibold rounded-lg shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={vinesh}
                alt="VINESH GAIKAWAD" 
                className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-sky-500/50"
              />
            </div>
          </div>
        </AnimatedSection>
        <style>{`
          .animate-wave {
              display: inline-block;
              animation: wave-animation 2.5s infinite;
              transform-origin: 70% 70%;
          }
          @keyframes wave-animation {
              0% { transform: rotate(0.0deg) }
              10% { transform: rotate(14.0deg) }
              20% { transform: rotate(-8.0deg) }
              30% { transform: rotate(14.0deg) }
              40% { transform: rotate(-4.0deg) }
              50% { transform: rotate(10.0deg) }
              60% { transform: rotate(0.0deg) }
              100% { transform: rotate(0.0deg) }
          }
        `}</style>
      </div>

      <section id="about" className="py-16 md:py-24">
        <About />
      </section>
      <section id="skills" className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-800/50">
        <Skills />
      </section>
      <section id="projects" className="py-16 md:py-24">
        <Projects />
      </section>
      <section id="experience" className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-800/50">
        <Experience />
      </section>
      <section id="contact" className="py-16 md:py-24">
        <Contact />
      </section>
    </>
  );
};

export default Home;