import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/skills', name: 'Skills' },
        { path: '/projects', name: 'Projects' },
        { path: '/experience', name: 'Experience' },
        { path: '/contact', name: 'Contact' },
    ];

    const activeLinkStyle = {
      color: '#38BDF8', // sky-400
      fontWeight: '600',
    };

    return (
        <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-sky-500 dark:text-sky-400">
                            VINESH GAIKAWAD.
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    end
                                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                                    style={({ isActive }) => isActive ? activeLinkStyle : {}}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 focus:ring-sky-500"
                    >
                        {theme === 'dark' ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-slate-700" />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;