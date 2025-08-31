
import React, { useState } from 'react';
import { useTheme } from '../App';

interface NavLink {
  name: string;
  id: string;
}

interface HeaderProps {
  navLinks: NavLink[];
  onNavClick: (sectionId: string) => void;
  activeLink: string;
}

const GDGLogo = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center space-x-3">
      {/* GDG Icon - colored boxes */}
      <div className="flex items-center">
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          {/* Top row */}
    <img 
        src="/assets/GDG%20logo.png" 
        alt="GDG Logo" 
        className="mx-auto h-8 w-auto md:h-30"
    />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col">
        <span className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>
          Google Developer Group
        </span>
        <span className={`font-semibold text-sm md:text-base -mt-1 transition-colors duration-300 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          GGCT
        </span>
      </div>
    </div>
  );
};

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

// Enhanced Theme Toggle Component
const ThemeToggle = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600' 
          : 'bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500'
      }`}></div>
      
      {/* Toggle circle */}
      <div className={`relative inline-block w-5 h-5 bg-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out ${
        theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
      }`}>
        {/* Icon container with rotation effect */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === 'dark' ? 'rotate-180' : 'rotate-0'
        }`}>
          {theme === 'light' ? (
            <div className="text-yellow-500 transition-all duration-300">
              <SunIcon />
            </div>
          ) : (
            <div className="text-indigo-600 transition-all duration-300">
              <MoonIcon />
            </div>
          )}
        </div>
      </div>
      
      {/* Background icons for extra visual feedback */}
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <div className={`transition-opacity duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-40'}`}>
          <div className="text-yellow-300">
            <SunIcon />
          </div>
        </div>
        <div className={`transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-40'}`}>
          <div className="text-slate-500">
            <MoonIcon />
          </div>
        </div>
      </div>
    </button>
  );
};

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ navLinks, onNavClick, activeLink }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNavClick = (linkId: string) => {
    onNavClick(linkId);
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-4 z-50 mx-4 sm:mx-6 lg:mx-8">
      <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-full shadow-lg">
        <div className="container mx-auto px-6 sm:px-6 lg:px-5">
          <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => onNavClick('home')} aria-label="Go to homepage">
              <GDGLogo />
            </button>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 relative group
                  ${activeLink === link.id
                    ? 'text-google-blue dark:text-google-blue'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-google-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                  ${activeLink === link.id ? 'scale-x-100' : ''}`}></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="#" className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-google-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue transition-all">
              Join Community
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden mt-2 mx-4 sm:mx-6 lg:mx-8">
          <div className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg">
            <div className="px-4 pt-4 pb-3 space-y-1 sm:px-6">
               {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleMobileNavClick(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium 
                    ${activeLink === link.id
                      ? 'bg-google-blue/10 text-google-blue'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                    }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="p-2">
                 <a href="#" className="w-full sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-google-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue transition-all">
                    Join Community
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;