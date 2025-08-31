
import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { NAV_LINKS } from './constants';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TeamDisplay from './components/TeamDisplay';
import SocialSidebar from './components/SocialSidebar';
import EventsPage from './components/EventsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [currentPage, setCurrentPage] = useState('home');
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    // Default to light mode instead of checking system preference
    const initialTheme = storedTheme || 'light';
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    // Add comprehensive smooth transition styles
    const root = document.documentElement;
    root.style.setProperty('--theme-transition-duration', '600ms');
    root.style.setProperty('--theme-transition-timing', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)');
    
    // Apply transition class to body for smoother effect
    document.body.classList.add('theme-transitioning');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    
    // Remove transitioning class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      root.style.removeProperty('--theme-transition-duration');
      root.style.removeProperty('--theme-transition-timing');
    }, 600);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // Add a subtle page-wide transition effect
    document.body.style.transform = 'scale(0.98)';
    document.body.style.opacity = '0.85';
    
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
      
      // Reset transform after theme change
      setTimeout(() => {
        document.body.style.transform = '';
        document.body.style.opacity = '';
      }, 100);
    }, 150);
  }, []);

  const handleNavClick = useCallback((linkId: string) => {
    setActiveLink(linkId);
    const homePageSections = ['home', 'about', 'recent-events'];

    if (homePageSections.includes(linkId)) {
      const scrollToSection = () => {
        document.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth' });
      };

      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Use a timeout to ensure the Home component is rendered before scrolling
        setTimeout(scrollToSection, 100);
      } else {
        scrollToSection();
      }
    } else {
      // For full-page navigation
      const pageId = linkId.replace('-page', '');
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);
  
  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavClick={handleNavClick}/>;
      case 'teams':
        return <TeamDisplay />;
      case 'events':
        return <EventsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home onNavClick={handleNavClick}/>;
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative text-slate-800 dark:text-slate-200 min-h-screen font-sans transition-all duration-500 ease-in-out">
        {/* Theme transition overlay */}
        <div className={`fixed inset-0 z-0 transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
        }`}></div>
        
        <div className="relative z-10">
          <Background />
          <Header navLinks={NAV_LINKS} onNavClick={handleNavClick} activeLink={activeLink} />
          <SocialSidebar />
          <main className="relative z-10 px-4 sm:px-6 lg:px-8 transition-all duration-300">
            {renderContent()}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;