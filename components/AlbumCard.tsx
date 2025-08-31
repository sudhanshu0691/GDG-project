
import React from 'react';
import { Album } from '../types';

interface AlbumCardProps {
  album: Album;
  onSelect: () => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onSelect }) => {
  return (
    <div 
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onSelect()}
    >
      <img 
        src={album.coverImage} 
        alt={`Cover for ${album.title}`} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white tracking-tight">{album.title}</h3>
        <p className="text-sm text-slate-300 font-mono">{album.date}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-google-blue transition-all duration-300 transform group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
       <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(66,133,244,0)] group-hover:shadow-[0_0_25px_rgba(66,133,244,0.6)] transition-shadow duration-300"></div>
    </div>
  );
};

export default AlbumCard;
