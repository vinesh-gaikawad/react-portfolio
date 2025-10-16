import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900/50 hover:text-sky-500 dark:hover:text-sky-400 transition-all">
        {icon}
    </a>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z"></path>
    </svg>
);
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.801 4.649-.6.164-1.23.204-1.86.084.608 1.953 2.378 3.285 4.478 3.325-1.79 1.4-4.053 2.24-6.52 2.24-.42 0-.83-.024-1.23-.074 2.318 1.493 5.078 2.358 8.04 2.358 8.49 0 13.59-7.02 13.25-13.915.91-.656 1.7-1.474 2.32-2.4z"/>
    </svg>
);


const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! (This is a demo form)');
    };
    
    return (
    <AnimatedSection>
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-2 text-sky-500 dark:text-sky-400">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-12">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-100/50 dark:bg-slate-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" id="name" required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" id="email" required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea id="message" rows={4} required className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold mb-4">...or find me on social media</h3>
                <div className="flex gap-4">
                    <SocialLink href="#" label="GitHub" icon={<GitHubIcon className="w-6 h-6" />} />
                    <SocialLink href="#" label="LinkedIn" icon={<LinkedInIcon className="w-6 h-6" />} />
                    <SocialLink href="#" label="Twitter" icon={<TwitterIcon className="w-6 h-6" />} />
                </div>
                <div className="mt-8 text-slate-600 dark:text-slate-300">
                    <p className="font-semibold">Email</p>
                    <a href="mailto:vineshgaikawad@ycms.in" className="hover:text-sky-500">vineshgaikawad123@ycms.in</a>
                    <p className="font-semibold mt-4">Location</p>
                    <p>Mumbai, India</p>
                </div>
            </div>
        </div>
    </AnimatedSection>
  );
};

export default Contact;