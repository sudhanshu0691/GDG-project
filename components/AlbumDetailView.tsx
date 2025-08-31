
import React, { useState } from 'react';
import { Album, GalleryImage } from '../types';
import Lightbox from './Lightbox';

interface AlbumDetailViewProps {
  album: Album;
  onBack: () => void;
}

const AlbumDetailView: React.FC<AlbumDetailViewProps> = ({ album, onBack }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="animate-fade-in-up">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-google-blue dark:hover:text-google-blue font-semibold mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Albums
      </button>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{album.title}</h2>
        <p className="text-slate-500 dark:text-slate-400 font-mono mt-2">{album.date}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {album.images.map((image, index) => (
          <div
            key={image.id}
            className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={album.images}
          startIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default AlbumDetailView;
