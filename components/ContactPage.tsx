import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="container mx-auto pt-16 md:pt-24 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-google-blue">Contact</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a question, suggestion, or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form & Info */}
        <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div
            className="p-8 rounded-2xl h-full"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Send us a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 focus:ring-google-blue focus:border-google-blue transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 focus:ring-google-blue focus:border-google-blue transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 focus:ring-google-blue focus:border-google-blue transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-google-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-10 pt-8 border-t border-slate-300/20 dark:border-slate-700/50 text-slate-600 dark:text-slate-400">
              <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-google-blue flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div className="flex flex-col">
                    <span>Gyan Ganga College Of Technology, Tilwara Ghat, Besides Bargi Hills, Jabalpur, Madhya Pradesh 482003</span>
                    <a 
                      href="https://maps.app.goo.gl/mQUwm21Tc9aEUPDV8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 text-google-blue hover:text-google-blue/80 transition-colors font-medium inline-flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      View on Google Maps
                    </a>
                  </div>
              </div>
               <div className="flex items-start space-x-4 mt-4">
                  <svg className="w-6 h-6 text-google-blue flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:contact@gdggect.com" className="hover:text-google-blue transition">contact@gdggect.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
           <div className="h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg border border-slate-300/50 dark:border-slate-700/50">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.041261391517!2d79.98124237590215!3d23.168537979072225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a53a0678d2b3%3A0x3a48398a65529f0!2sGyan%20Ganga%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gyan Ganga College of Technology Location"
              ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;