export interface Member {
  name: string;
  role: string;
  imageUrl: string;
  socials?: {
    linkedin?: string;
    github?: string;
  };
}

export interface Team {
  name: string;
  members: Member[];
}

export interface Event {
  date: string;
  title: string;
  description: string;
  status: 'upcoming' | 'live' | 'past';
  registerLink?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  className?: string;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  images: GalleryImage[];
}