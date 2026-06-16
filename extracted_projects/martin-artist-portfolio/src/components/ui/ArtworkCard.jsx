import React from 'react';
import clsx from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ArtworkCard = ({ image, title, year, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={clsx(
        "flex flex-col group fade-in-up",
        isVisible ? "is-visible" : ""
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#1e1b4b] relative rounded-sm">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
        <img 
          src={image} 
          alt={`Artwork: ${title}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
          loading="lazy"
        />
      </div>
      <div className="bg-white p-6 text-center shadow-2xl transform -translate-y-6 mx-4 relative z-20 group-hover:-translate-y-8 transition-transform duration-500 border border-gray-100">
        <h4 className="text-[#e0281c] text-[11px] font-semibold tracking-widest uppercase mb-2">{title}</h4>
        <span className="text-[#12c2e9] text-[10px] font-medium tracking-wider">{year}</span>
      </div>
    </div>
  );
};

export default ArtworkCard;