import { Team, Event, Album, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Teams', id: 'teams' },
  { name: 'Events', id: 'events' },
  { name: 'Gallery', id: 'gallery-page' },
  { name: 'Contact', id: 'contact-page' },
];

export const HOME_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: 'https://source.unsplash.com/random/800x600?event,conference',
    alt: 'A conference event with many attendees.',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/random/800x600?workshop,coding',
    alt: 'Students in a coding workshop.',
    className: '',
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/random/800x600?hackathon,team',
    alt: 'A team collaborating during a hackathon.',
    className: '',
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/random/800x600?tech,talk',
    alt: 'A speaker giving a tech talk.',
    className: 'md:col-span-2',
  },
   {
    id: 5,
    src: 'https://source.unsplash.com/random/800x600?community,students',
    alt: 'Students networking at a community event.',
    className: '',
  },
  {
    id: 6,
    src: 'https://source.unsplash.com/random/800x600?presentation,stage',
    alt: 'A presenter on stage.',
    className: '',
  },
];

export const TEAMS: Team[] = [
  {
    name: 'Technical Team',
    members: [
      { name: 'Sudhanshu Singh', role: 'Technical Lead', imageUrl: '/assets/sudhanshusingh.png', socials: { linkedin: 'https://www.linkedin.com/in/sudhanshu-singh-ss2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: '#' } },
      { name: 'Rohan Gupta', role: 'Finance Head', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,person', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'Project Team',
    members: [
      { name: 'Aarav Patel', role: 'Web Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,student', socials: { linkedin: '#', github: '#' } },
      { name: 'Isha Sharma', role: 'Frontend Developer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,female', socials: { linkedin: '#', github: '#' } },
      { name: 'Vikram Reddy', role: 'Backend Developer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,indian', socials: { linkedin: '#', github: '#' } },
      { name: 'Neha Desai', role: 'UI/UX Designer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,designer', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'Designing Team',
    members: [
      { name: 'Zoya Khan', role: 'AI/ML Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,engineer', socials: { linkedin: '#', github: '#' } },
      { name: 'Arjun Mehta', role: 'ML Engineer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,professional', socials: { linkedin: '#', github: '#' } },
      { name: 'Saanvi Rao', role: 'Data Scientist', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,scientist', socials: { linkedin: '#', github: '#' } },
      { name: 'Kabir Verma', role: 'Research Intern', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,researcher', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'General Secretary Team',
    members: [
      { name: 'Aryan Joshi', role: 'App Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,developer', socials: { linkedin: '#', github: '#' } },
      { name: 'Myra Das', role: 'Android Developer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,coder', socials: { linkedin: '#', github: '#' } },
      { name: 'Advik Nair', role: 'iOS Developer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,tech', socials: { linkedin: '#', github: '#' } },
      { name: 'Kiara Iyengar', role: 'Flutter Developer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,creator', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'Event Team',
    members: [
      { name: 'Diya Kapoor', role: 'Event Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,leader', socials: { linkedin: '#', github: '#' } },
      { name: 'Vivaan Malhotra', role: 'Event Coordinator', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,coordinator', socials: { linkedin: '#', github: '#' } },
      { name: 'Anika Reddy', role: 'Logistics Manager', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,manager', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'PR Team',
    members: [
      { name: 'Ishaan Agarwal', role: 'PR Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,social', socials: { linkedin: '#', github: '#' } },
      { name: 'Riya Choudhary', role: 'Social Media Manager', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,media', socials: { linkedin: '#', github: '#' } },
      { name: 'Krish Kumar', role: 'Content Writer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,writer', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'Marketing Team',
    members: [
      { name: 'Ananya Joshi', role: 'Design Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,artist', socials: { linkedin: '#', github: '#' } },
      { name: 'Samarth Patil', role: 'Graphic Designer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,graphic', socials: { linkedin: '#', github: '#' } },
      { name: 'Tara Saxena', role: 'Motion Graphics Artist', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,motion', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'Social Media Team',
    members: [
      { name: 'Ananya Joshi', role: 'Design Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,artist', socials: { linkedin: '#', github: '#' } },
      { name: 'Samarth Patil', role: 'Graphic Designer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,graphic', socials: { linkedin: '#', github: '#' } },
      { name: 'Tara Saxena', role: 'Motion Graphics Artist', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,motion', socials: { linkedin: '#', github: '#' } },
    ],
  },
  {
    name: 'Outreach Team',
    members: [
      { name: 'Ananya Joshi', role: 'Design Lead', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,artist', socials: { linkedin: '#', github: '#' } },
      { name: 'Samarth Patil', role: 'Graphic Designer', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,graphic', socials: { linkedin: '#', github: '#' } },
      { name: 'Tara Saxena', role: 'Motion Graphics Artist', imageUrl: 'https://source.unsplash.com/random/300x300/?portrait,motion', socials: { linkedin: '#', github: '#' } },
    ],
  },
];


export const EVENTS: Event[] = [
  {
    date: '15 OCT',
    title: 'Flutter Forward Extended',
    description: 'A deep dive into the future of Flutter, with live demos and Q&A sessions with experts.',
    status: 'upcoming',
    registerLink: '#',
  },
  {
    date: '28 SEP',
    title: 'Getting Started with Google Cloud',
    description: 'Workshop covering the fundamentals of Google Cloud Platform and its core services.',
    status: 'upcoming',
    registerLink: '#',
  },
  {
    date: '12 SEP',
    title: 'Web Dev Bootcamp - Day 3',
    description: 'Final day of our intensive web development bootcamp. Project presentations and prize distribution.',
    status: 'live',
  },
  {
    date: '05 SEP',
    title: 'Intro to Machine Learning',
    description: 'A beginner-friendly session on the basics of Machine Learning and TensorFlow.',
    status: 'past',
  },
  {
    date: '20 AUG',
    title: 'Android Study Jams Kick-off',
    description: 'The inaugural session for our Android development study group. Setting goals and roadmaps.',
    status: 'past',
  },
  {
    date: '01 AUG',
    title: 'Community Welcome Event',
    description: 'Our first event of the semester! Meet the team, learn about our plans, and enjoy some pizza.',
    status: 'past',
  },
];

export const ALBUMS: Album[] = [
  {
    id: 'flutter-forward-2023',
    title: 'Flutter Forward 2023',
    date: 'September 15, 2023',
    coverImage: 'https://source.unsplash.com/random/800x600?flutter,event',
    images: Array.from({ length: 8 }, (_, i) => ({
      id: i,
      src: `https://source.unsplash.com/random/1200x800?flutter,event,${i}`,
      alt: `Photo from Flutter Forward event ${i + 1}`,
    })),
  },
  {
    id: 'cloud-workshop-2023',
    title: 'Cloud Workshop',
    date: 'August 22, 2023',
    coverImage: 'https://source.unsplash.com/random/800x600?cloud,workshop',
    images: Array.from({ length: 6 }, (_, i) => ({
      id: i,
      src: `https://source.unsplash.com/random/1200x800?cloud,workshop,${i}`,
      alt: `Photo from Cloud Workshop ${i + 1}`,
    })),
  },
  {
    id: 'hackathon-2023',
    title: 'Innovate & Create Hackathon',
    date: 'July 05, 2023',
    coverImage: 'https://source.unsplash.com/random/800x600?hackathon,coding',
    images: Array.from({ length: 12 }, (_, i) => ({
      id: i,
      src: `https://source.unsplash.com/random/1200x800?hackathon,coding,${i}`,
      alt: `Photo from Hackathon ${i + 1}`,
    })),
  },
  {
    id: 'welcome-event-2023',
    title: 'Community Welcome Event',
    date: 'June 10, 2023',
    coverImage: 'https://source.unsplash.com/random/800x600?community,pizza',
    images: Array.from({ length: 7 }, (_, i) => ({
      id: i,
      src: `https://source.unsplash.com/random/1200x800?community,pizza,${i}`,
      alt: `Photo from Welcome Event ${i + 1}`,
    })),
  },
];