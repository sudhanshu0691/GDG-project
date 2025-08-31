import React, { useState, useEffect } from 'react';

const Background: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle: React.CSSProperties = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  } as React.CSSProperties;


  return (
    <div
      style={backgroundStyle}
      className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 transition-all duration-700 ease-in-out overflow-hidden"
    >
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-100/50 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-800/50 transition-all duration-700 ease-in-out"></div>
      
      {/* Colored Blobs with enhanced transitions */}
      <div className="absolute top-[-150px] left-[-200px] w-[500px] h-[500px] bg-google-blue/60 dark:bg-google-blue/15 rounded-full filter blur-3xl opacity-40 animate-blob-float transition-all duration-700 ease-in-out"></div>
      <div className="absolute top-[-100px] right-[-150px] w-[500px] h-[500px] bg-google-red/60 dark:bg-google-red/15 rounded-full filter blur-3xl opacity-40 animate-blob-float transition-all duration-700 ease-in-out" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-[-200px] left-[10%] w-[400px] h-[400px] bg-google-yellow/50 dark:bg-google-yellow/12 rounded-full filter blur-3xl opacity-50 animate-blob-float transition-all duration-700 ease-in-out" style={{animationDelay: '12s'}}></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-google-green/50 dark:bg-google-green/12 rounded-full filter blur-3xl opacity-50 animate-blob-float transition-all duration-700 ease-in-out" style={{animationDelay: '18s'}}></div>
      
      {/* Programming Language and Tool Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GitHub Logo */}
        <div className="absolute top-20 left-20 opacity-10 dark:opacity-5 animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-slate-600 dark:text-slate-400">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>

        {/* React Logo */}
        <div className="absolute top-40 right-32 opacity-15 dark:opacity-8 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" className="text-blue-500">
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <path d="M20.2 7c-.5-2.4-2.1-4.3-4.5-5.3-1.2-.5-2.5-.7-3.8-.7s-2.6.2-3.8.7C5.7 2.7 4.1 4.6 3.6 7c-.5 2.4-.1 4.9 1.2 7 1.3 2.1 3.3 3.6 5.7 4.3 1.2.4 2.5.5 3.8.5s2.6-.1 3.8-.5c2.4-.7 4.4-2.2 5.7-4.3 1.3-2.1 1.7-4.6 1.2-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
          </svg>
        </div>

        {/* MongoDB Logo */}
        <div className="absolute bottom-32 left-16 opacity-12 dark:opacity-6 animate-pulse" style={{animationDelay: '4s', animationDuration: '5s'}}>
          <svg width="65" height="65" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 2.568c.26-.138.54-.138.8 0 .26.138.44.384.44.664v17.536c0 .28-.18.526-.44.664-.26.138-.54.138-.8 0-.26-.138-.44-.384-.44-.664V3.232c0-.28.18-.526.44-.664z"/>
            <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
          </svg>
        </div>

        {/* TypeScript Logo */}
        <div className="absolute top-60 left-1/4 opacity-10 dark:opacity-5 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>
          <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
            <rect width="24" height="24" fill="currentColor" rx="2"/>
            <text x="12" y="16" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">TS</text>
          </svg>
        </div>

        {/* Node.js Logo */}
        <div className="absolute bottom-20 right-20 opacity-15 dark:opacity-8 animate-pulse" style={{animationDelay: '3s', animationDuration: '6s'}}>
          <svg width="75" height="75" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
            <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"/>
          </svg>
        </div>

        {/* JavaScript Logo */}
        <div className="absolute top-32 right-16 opacity-12 dark:opacity-6 animate-bounce" style={{animationDelay: '5s', animationDuration: '3.5s'}}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
            <rect width="24" height="24" fill="currentColor" rx="2"/>
            <text x="12" y="16" textAnchor="middle" fontSize="12" fill="black" fontWeight="bold">JS</text>
          </svg>
        </div>

        {/* Python Logo */}
        <div className="absolute bottom-40 left-1/3 opacity-10 dark:opacity-5 animate-pulse" style={{animationDelay: '6s', animationDuration: '4.5s'}}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-blue-400">
            <path d="M12 0C8.686 0 6 2.686 6 6v3h6v1H3c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3h3v-3c0-1.657 1.343-3 3-3h6c1.657 0 3-1.343 3-3V6c0-3.314-2.686-6-6-6z" fill="currentColor"/>
            <circle cx="9" cy="4" r="1" fill="white"/>
          </svg>
        </div>

        {/* Docker Logo */}
        <div className="absolute top-16 left-1/2 opacity-8 dark:opacity-4 animate-bounce" style={{animationDelay: '7s', animationDuration: '5s'}}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
            <path d="M13.983 11.078h2.119c.31 0 .579.014.672.014v1.956c0 .29-.062.338-.297.338h-4.603v-2.308h2.109z"/>
            <path d="M11.693 11.078h2.119c.31 0 .579.014.672.014v1.956c0 .29-.062.338-.297.338h-4.603v-2.308h2.109z"/>
            <path d="M9.403 11.078h2.119c.31 0 .579.014.672.014v1.956c0 .29-.062.338-.297.338H7.294v-2.308h2.109z"/>
          </svg>
        </div>

      </div>

      {/* Enhanced background grid and mouse effect */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:36px_36px] transition-all duration-700 ease-in-out"></div>
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_400px_at_var(--mouse-x)_var(--mouse-y),rgba(66,133,244,0.15),transparent_80%)] dark:bg-[radial-gradient(circle_400px_at_var(--mouse-x)_var(--mouse-y),rgba(66,133,244,0.08),transparent_80%)] transition-all duration-500 ease-in-out"></div>
    </div>
  );
};

export default Background;