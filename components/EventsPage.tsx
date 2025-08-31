
import React from 'react';
import { EVENTS } from '../constants';
import Timeline from './Timeline';

const EventsPage: React.FC = () => {
  return (
    <div id="events" className="container mx-auto pt-16 md:pt-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our <span className="text-google-blue">Events</span> & Schedule
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
        Stay updated with our latest workshops, tech talks, and hackathons. There's always something new to learn and build!
      </p>
      <Timeline events={EVENTS} />
    </div>
  );
};

export default EventsPage;