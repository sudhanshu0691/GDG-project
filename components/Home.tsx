
import React, { useState, useEffect } from 'react';
import GdgHeroLogo from './GdgHeroLogo';
import { HOME_GALLERY_IMAGES } from '../constants';

interface HomeProps {
    onNavClick: (linkId: string) => void;
}

// --- Reusable SVG Icons & Shapes ---
const ScrollDownIcon: React.FC = () => (
  <div className="relative w-8 h-14 border-2 border-slate-500 dark:border-slate-400 rounded-full">
    <div className="absolute top-2 left-1/2 w-1 h-3 -ml-0.5 bg-slate-500 dark:bg-slate-400 rounded-full animate-bounce"></div>
  </div>
);

const FloatingShape: React.FC<{ className: string; children?: React.ReactNode; animationDelay?: string }> = ({ className, children, animationDelay }) => (
  <div className={`absolute select-none pointer-events-none animate-float ${className}`} style={{ animationDelay }}>
    <div className="w-full h-full text-google-blue/20 dark:text-google-blue/10">
      {children}
    </div>
  </div>
);

const TechIcon: React.FC<{ children: React.ReactNode; name: string }> = ({ children, name }) => (
  <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1">
    <div className="w-12 h-12 text-slate-700 dark:text-slate-300">{children}</div>
    <span className="text-sm font-medium">{name}</span>
  </div>
);

// --- List of Tech Stacks ---

const techStacks = [
  { name: 'Android', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.2,6.4C18.4,5.8,17.4,5.4,16.4,5.4L16.4,5.4C16,5.4,15.6,5.4,15.2,5.5L14,2.9C13.8,2.4,13.2,2,12.6,2H11.4 C10.8,2,10.2,2.4,10,2.9L8.8,5.5C8.4,5.4,8,5.4,7.6,5.4C6.6,5.4,5.6,5.8,4.8,6.4C3.2,7.5,2.6,9.5,3.1,11.3L5,17.8C5,17.9,5.1,18,5.2,18H18.8C18.9,18,19,17.9,19,17.8L20.9,11.3C21.4,9.5,20.8,7.5,19.2,6.4z M7,14C6.4,14,6,13.6,6,13C6,12.4,6.4,12,7,12S8,12.4,8,13C8,13.6,7.6,14,7,14z M17,14C16.4,14,16,13.6,16,13C16,12.4,16.4,12,17,12S18,12.4,18,13C18,13.6,17.6,14,17,14z M18.8,10H5.2C5.1,9.8,5,9.7,5,9.5C5,8.7,5.7,8,6.5,8H17.5C18.3,8,19,8.7,19,9.5C19,9.7,18.9,9.8,18.8,10z"/></svg> },
  { name: 'Cloud', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35,10.04C18.67,6.59,15.64,4,12,4C9.11,4,6.6,5.64,5.35,8.04C2.34,8.36,0,10.91,0,14C0,17.31,2.69,20,6,20H19 C21.76,20,24,17.76,24,15C24,12.36,21.95,10.22,19.35,10.04z"/></svg> },
  { name: 'Firebase', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.17,11.17l5.42,1.54L4.17,3.34L2,4.5V11C2,11,4.17,11.17,4.17,11.17z M9.58,12.71L4.17,11.17C4.17,11.17,2,11,2,11V17.5L4.17,18.66L9.58,12.71z M10.5,12.41L15.3,1.5L5.08,3.75L10.5,12.41z M11.42,13.11L5.08,22.25L15.3,24.5L11.42,13.11z M16.21,23.5L22,12.5L16.21,1.5L16.21,23.5z"/></svg> },
  { name: 'Flutter', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.3,11.7L8.9,6.3L14.4,0.8L22.9,9.3C24.1,10.5,24.1,12.5,22.9,13.7L19.4,17.2L14.3,11.7z M12.8,13.2L17.9,18.3L12.4,23.8L1.1,12.5C-0.4,11-0.4,8.5,1.1,7L5.6,2.5L12.8,9.7V13.2z M12.8,9.7L8.9,13.6L5.6,10.3L10.7,5.2L12.8,7.3V9.7z"/></svg> },
  { name: 'TensorFlow', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5,12.1L12,14.5L17.5,12.1V7.1L12,4.5L6.5,7.1V12.1z M12,2L1,7.5V16.5L12,22L23,16.5V7.5L12,2z M11,16.5 L11,19L13,19L13,16.5L17,14.3L17,10.8L13,12.9L13,15.5L11,15.5L11,12.9L7,10.8L7,14.3L11,16.5z"/></svg> },
  { name: 'Web', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22C17.52,22,22,17.52,22,12C22,6.48,17.52,2,12,2z M11,19.93 C7.05,19.44,4,16.08,4,12C4,11.38,4.08,10.78,4.21,10.21L9,15V16C9,17.1,9.9,18,11,18V19.93z M17.9,17.39C17.64,16.58,16.9,16,16,16 H15V13C15,12.45,14.55,12,14,12H8V10H10C10.55,10,11,9.55,11,9V7H13C13.55,7,14,6.55,14,6V5C14,4.45,13.55,4,13,4H11C9.9,4,9,4.9,9,6V7 C9,7.55,8.55,8,8,8H6C5.45,8,5,8.45,5,9V12C5,13.1,5.9,14,7,14H7.1C7.04,14.33,7,14.66,7,15C7,16.42,7.7,17.68,8.69,18.5C9.6,19.3,10.74,19.83,12,19.97V18C12,16.9,12.9,16,14,16H14.1C14.7,15.2,15.5,14.5,16.41,14.12L17.9,17.39z"/></svg> },
];

// --- Main Home Component ---

const Home: React.FC<HomeProps> = ({ onNavClick }) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="overflow-x-hidden">
            {/* --- Hero Section --- */}
            <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center p-4">

                <div 
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[28vw] sm:text-[25vw] lg:text-[22vw] font-black text-slate-100 dark:text-slate-900 select-none pointer-events-none transition-transform duration-100 ease-out"
                  style={{ transform: `translateY(calc(-50% + ${scrollY * 0.2}px))` }}
                  aria-hidden="true"
                >
                  GDG
                </div>

                {/* Floating Shapes */}
                <FloatingShape className="w-16 h-16 top-[15%] left-[10%] rotate-12" animationDelay="0s">
                  <svg viewBox="0 0 100 100"><path d="M50 0L100 28.87V86.6L50 115.47L0 86.6V28.87L50 0ZM50 7.7L8.6 32.2V83.2L50 107.7L91.4 83.2V32.2L50 7.7Z" fill="currentColor"/></svg>
                </FloatingShape>
                 <FloatingShape className="w-12 h-12 top-[20%] right-[12%] rotate-45" animationDelay="1s">
                  <svg viewBox="0 0 100 100"><path d="M50 0L61.8 38.2L100 38.2L69.1 61.8L80.9 100L50 76.4L19.1 100L30.9 61.8L0 38.2L38.2 38.2L50 0Z" fill="currentColor"/></svg>
                </FloatingShape>
                <FloatingShape className="w-20 h-20 bottom-[15%] right-[15%]" animationDelay="2s">
                  <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
                </FloatingShape>
                <FloatingShape className="w-10 h-10 bottom-[25%] left-[15%] rotate-[-30deg]" animationDelay="3s">
                   <svg viewBox="0 0 100 100"><path d="M50 0L100 50L50 100L0 50L50 0Z" fill="currentColor"/></svg>
                </FloatingShape>

                <div className="relative z-10 space-y-4 sm:space-y-6 animate-fade-in-up px-4 sm:px-6">
                    <GdgHeroLogo />
                    <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-800 dark:text-slate-100 leading-tight">
                        WHERE <span className="text-google-blue">INNOVATION</span> MEETS <span className="text-google-green">INSPIRATION</span>
                    </h1>
                    <p className="hero-subtitle max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 px-2">
                        A student community for developers to learn, connect, and grow with Google technologies.
                    </p>
                </div>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                   <a href="#recent-events" aria-label="Scroll to recent events section">
                      <ScrollDownIcon />
                   </a>
                </div>
            </section>
            
            {/* --- Event Gallery Section --- */}
            <section id="recent-events" className="container mx-auto py-20 md:py-24 scroll-mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                        Recent <span className="text-google-blue">Events</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                        Capturing the moments that define our community.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-6xl mx-auto">
                    {HOME_GALLERY_IMAGES.map((image, index) => (
                        <div 
                            key={image.id} 
                            className={`group relative overflow-hidden rounded-xl shadow-lg animate-fade-in-up opacity-0 ${image.className}`}
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute inset-x-0 bottom-0 p-4">
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                    {image.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button onClick={() => onNavClick('gallery-page')} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-google-blue hover:bg-opacity-90 transition-all">
                        View Full Gallery
                    </button>
                </div>
            </section>

            {/* --- About Section --- */}
            <section id="about" className="container mx-auto py-20 md:py-32 scroll-mt-20">
                 <div className="flex flex-col items-center text-center space-y-12">
                    <div className="space-y-6 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                           About <span className="text-google-blue">Us</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            <p>
                               The Google Developer Group (GDG) Student Club is a university-based community for students interested in Google's developer technology. We aim to grow knowledge in a peer-to-peer learning environment and build solutions for local businesses and our community.
                            </p>
                            <p>
                               Our goal is to foster a local ecosystem of passionate developers through hands-on workshops, tech talks, hackathons, and study jams. There's a place for everyone, from beginners to experienced developers.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                        {techStacks.map((tech) => (
                            <TechIcon key={tech.name} name={tech.name}>
                                {tech.icon}
                            </TechIcon>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default Home;