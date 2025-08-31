
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-slate-500 dark:text-slate-400 hover:text-google-blue dark:hover:text-google-blue transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">GDG Student Club</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Building the next generation of developers through community learning, innovation, and collaboration.
            </p>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Location</h3>
            <div className="space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Gyan Ganga College Of Technology<br/>
                Tilwara Ghat, Besides Bargi Hills<br/>
                Jabalpur, Madhya Pradesh 482003
              </p>
              <a 
                href="https://maps.app.goo.gl/mQUwm21Tc9aEUPDV8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-google-blue hover:text-google-blue/80 transition-colors font-medium"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Connect With Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:contact@gdggect.com" 
                className="block text-sm text-slate-600 dark:text-slate-400 hover:text-google-blue transition-colors"
              >
                contact@gdggect.com
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <SocialIcon href="#" label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="#" label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} GDG Student Club. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Built with ❤️ by <a 
                href="https://www.linkedin.com/in/sudhanshu-singh-ss2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-google-blue hover:text-google-blue/80 transition-colors font-medium"
              >
                Sudhanshu Singh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
