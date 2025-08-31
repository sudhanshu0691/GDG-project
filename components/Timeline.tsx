import React from 'react';
import { Event } from '../types';

interface TimelineProps {
  events: Event[];
}

const StatusBadge: React.FC<{ status: Event['status'] }> = ({ status }) => {
  if (status === 'upcoming') {
    return <span className="text-xs font-bold uppercase tracking-wider bg-google-blue/20 text-google-blue py-1 px-2 rounded-full">Upcoming</span>;
  }
  if (status === 'live') {
    return (
      <span className="flex items-center space-x-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-red-500">Live</span>
      </span>
    );
  }
  return null;
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative max-w-4xl mx-auto py-4">
      {/* The vertical timeline bar */}
      <div className="absolute top-0 left-[11px] md:left-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700 -translate-x-1/2"></div>
      
      {events.map((event, index) => {
        const isRightAlignedOnDesktop = index % 2 !== 0;

        return (
          <div key={index} className={`relative mb-12 md:flex ${isRightAlignedOnDesktop ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Spacer for alternating layout on desktop */}
            <div className="hidden md:block md:w-1/2"></div>
            
            {/* Timeline Dot */}
            <div className="absolute top-1 left-[11px] md:left-1/2 w-6 h-6 bg-slate-200 dark:bg-slate-800 border-4 border-google-blue rounded-full -translate-x-1/2"></div>

            {/* Content Card */}
            <div 
              className="w-full md:w-1/2 pl-10 md:px-6 animate-fade-in-up opacity-0" 
              style={{animationDelay: `${index * 150}ms`, animationFillMode: 'forwards'}}
            >
              <div 
                className={`
                  p-6 rounded-lg shadow-lg
                  bg-white/5 dark:bg-slate-900/20 backdrop-blur-md 
                  border border-slate-300/50 dark:border-slate-700/50
                  ${!isRightAlignedOnDesktop ? 'md:text-right' : ''}
                  ${event.status === 'past' ? 'opacity-70 saturate-50' : ''}
                `}
              >
                <div className={`flex items-center mb-2 ${!isRightAlignedOnDesktop ? 'justify-between md:flex-row-reverse' : 'justify-between'}`}>
                  <time className="text-lg font-bold text-google-blue">{event.date}</time>
                  <StatusBadge status={event.status} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{event.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{event.description}</p>
                {event.status === 'upcoming' && event.registerLink && (
                  <a 
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-google-blue text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
