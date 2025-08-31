
import React, { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, goToNext, goToPrevious]);

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in-up"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl h-full max-h-[80vh] p-4" onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentImage.src} 
          alt={currentImage.alt} 
          className="w-full h-full object-contain" 
        />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white font-mono bg-black/50 px-2 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button onClick={onClose} className="absolute top-4 right-4 text-white text-4xl hover:text-slate-300 transition-colors" aria-label="Close lightbox">&times;</button>
      
      <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white text-3xl transition-colors" aria-label="Previous image">&#10094;</button>
      
      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white text-3xl transition-colors" aria-label="Next image">&#10095;</button>
    </div>
  );
};

export default Lightbox;
