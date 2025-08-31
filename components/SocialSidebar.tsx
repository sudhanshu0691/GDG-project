import React from 'react';

const socialLinks = [
  { 
    href: 'https://discord.gg/gdg', 
    label: 'Join our Discord Community', 
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317,3.648c-1.348-0.708-2.808-1.2-4.32-1.481C15.84,2.2,15.59,2.33,15.54,2.48c-0.54,1.38-1.12,3.02-1.6,4.24C12.8,6.56,11.58,6.56,10.4,6.72c-0.48-1.22-1.06-2.86-1.6-4.24C8.75,2.33,8.5,2.2,8.34,2.22C6.82,2.44,5.36,2.94,4.01,3.648C3.98,3.66,3.96,3.68,3.95,3.71C2.73,6.2,2,9.32,2,12.52c0,4.7,2.5,8.8,6.34,10.2c0.16,0.06,0.32,0,0.4-0.16c0.46-1.16,0.94-2.3,1.36-3.48c0.04-0.12,0-0.24-0.14-0.3c-0.78-0.34-1.46-0.84-2.04-1.44c-0.06-0.06-0.06-0.16,0-0.22c0.68-0.64,1.3-1.34,1.86-2.1c0.06-0.08,0.16-0.08,0.22,0C11.56,15.5,13,15.82,14.48,15.82c1.48,0,2.92-0.32,4.16-1.12c0.06,0,0.16,0,0.22,0.08c0.56,0.76,1.18,1.46,1.86,2.1c0.06,0.06,0.06,0.16,0,0.22c-0.58,0.6-1.26,1.1-2.04,1.44c-0.14,0.06-0.18,0.18-0.14,0.3c0.42,1.18,0.9,2.32,1.36,3.48c0.08,0.16,0.24,0.22,0.4,0.16c3.84-1.4,6.34-5.5,6.34-10.2C22.3,9.32,21.57,6.2,20.317,3.648z M9.46,14.04c-0.8,0-1.44-0.7-1.44-1.56s0.64-1.56,1.44-1.56s1.44,0.7,1.44,1.56S10.26,14.04,9.46,14.04z M14.86,14.04c-0.8,0-1.44-0.7-1.44-1.56s0.64-1.56,1.44-1.56s1.44,0.7,1.44,1.56S15.66,14.04,14.86,14.04z" /></svg>,
    color: 'hover:text-indigo-400'
  },
  { 
    href: 'https://linkedin.com/company/gdg-student-club', 
    label: 'Connect on LinkedIn', 
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    color: 'hover:text-blue-500'
  },
  { 
    href: 'https://x.com/gdg_student_club', 
    label: 'Follow us on X', 
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>,
    color: 'hover:text-slate-900 dark:hover:text-white'
  },
  { 
    href: 'https://wa.me/+1234567890', 
    label: 'WhatsApp Community', 
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42s2.41 3.63 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.13c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.99s-.29.17-.54.06c-.25-.12-1.06-.39-2.02-1.25s-1.45-1.94-1.61-2.27c-.17-.33 0-.51.11-.64s.25-.29.37-.44c.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.68.29s-.91.89-.91 2.17.93 2.52 1.06 2.69c.12.17 1.81 2.78 4.39 3.89 2.58 1.1 2.58.74 3.04.71.46-.03 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18s-.25-.11-.5-.23z"/></svg>,
    color: 'hover:text-green-500'
  },
  { 
    href: 'https://instagram.com/gdg_student_club', 
    label: 'Follow on Instagram', 
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.543.01-4.782.06-2.694.122-3.876 1.3-3.998 3.998-.052 1.238-.06 1.602-.06 4.782s.008 3.544.06 4.782c.122 2.698 1.304 3.876 3.998 3.998 1.24.052 1.612.06 4.782.06s3.543-.008 4.782-.06c2.698-.122 3.876-1.3 3.998-3.998.052-1.238.06-1.602.06-4.782s-.008-3.544-.06-4.782c-.122-2.698-1.304-3.876-3.998-3.998C15.543 3.613 15.171 3.604 12 3.604zm0 4.865a3.532 3.532 0 100 7.064 3.532 3.532 0 000-7.064zm0 5.622a2.088 2.088 0 110-4.176 2.088 2.088 0 010 4.176zm4.965-7.728a.96.96 0 100 1.92.96.96 0 000-1.92z"/></svg>,
    color: 'hover:text-pink-500'
  },
];

const SocialSidebar: React.FC = () => {
  const animationDelay = '800ms';
  
  return (
    <div 
      className="fixed left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center opacity-0 animate-fade-in-up"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      {/* Social Links Container */}
      <div className="relative bg-white/20 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl p-4 border border-white/30 dark:border-slate-700/50 shadow-xl">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-slate-800/20 dark:to-transparent rounded-2xl"></div>
        
        <div className="relative flex flex-col items-center space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`
                relative p-3 rounded-xl text-slate-600 dark:text-slate-400 
                ${link.color} transition-all duration-300 transform 
                hover:scale-125 hover:shadow-xl
                bg-white/60 dark:bg-slate-800/60 hover:bg-white/90 dark:hover:bg-slate-700/90
                border border-white/50 dark:border-slate-600/50 hover:border-slate-200 dark:hover:border-slate-500
                group backdrop-blur-sm
              `}
              style={{
                animationDelay: `${900 + index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-google-blue/30 via-google-red/20 to-google-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
              
              {/* Icon */}
              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-900/95 dark:bg-slate-800/95 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-slate-700/50 backdrop-blur-sm z-50">
                {link.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-slate-900/95 dark:border-r-slate-800/95"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="relative mt-6">
        <div className="w-px h-16 bg-gradient-to-b from-slate-400 via-slate-300 to-transparent dark:from-slate-500 dark:via-slate-600 dark:to-transparent opacity-60"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-google-blue/40 rounded-full animate-pulse"></div>
      </div>
      
      {/* Follow Text */}
      <div className="mt-0 text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-[0.2em] opacity-70 transform -rotate-90 origin-center">
        <span className="block whitespace-nowrap relative">
          FOLLOW
          <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-google-blue/50 to-transparent"></div>
        </span>
      </div>
    </div>
  );
};

export default SocialSidebar;
