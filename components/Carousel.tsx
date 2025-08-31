
import React, { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '../types';

interface CarouselProps {
  images: GalleryImage[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20">
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors" aria-label="Previous image">
        &#10094;
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors" aria-label="Next image">
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
