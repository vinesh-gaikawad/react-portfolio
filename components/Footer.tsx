import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          <p>Copyright © {new Date().getFullYear()} VINESH GAIKAWAD</p>
          <p>❤️ </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;