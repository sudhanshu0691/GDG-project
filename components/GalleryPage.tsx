
import React, { useState } from 'react';
import { ALBUMS } from '../constants';
import { Album } from '../types';
import Carousel from './Carousel';
import AlbumCard from './AlbumCard';
import AlbumDetailView from './AlbumDetailView';

const GalleryPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  // For the top carousel, let's pick some highlight images from various albums
  const highlightImages = ALBUMS.flatMap(album => album.images.slice(0, 2)).slice(0, 5);

  const handleSelectAlbum = (album: Album) => {
    setSelectedAlbum(album);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="gallery" className="container mx-auto pt-16 md:pt-24 scroll-mt-20">
      {!selectedAlbum ? (
        <>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event <span className="text-google-blue">Gallery</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A glimpse into our vibrant community moments, workshops, and events.
            </p>
          </div>

          <div className="mb-16">
            <Carousel images={highlightImages} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALBUMS.map((album, index) => (
              <div key={album.id} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}>
                <AlbumCard album={album} onSelect={() => handleSelectAlbum(album)} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <AlbumDetailView album={selectedAlbum} onBack={handleBackToAlbums} />
      )}
    </div>
  );
};

export default GalleryPage;
