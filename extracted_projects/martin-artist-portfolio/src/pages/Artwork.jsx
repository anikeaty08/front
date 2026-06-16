import React from 'react';
import ArtworkCard from '../components/ui/ArtworkCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

const artworks = [
  { id: 1, title: 'Horizon', year: '2018', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80' },
  { id: 2, title: 'Structure', year: '2020', image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80' },
  { id: 3, title: 'Fracture', year: '2022', image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80' },
  { id: 4, title: 'Resonance', year: '2023', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80' },
  { id: 5, title: 'Echo', year: '2021', image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80' },
  { id: 6, title: 'Void', year: '2019', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80' },
];

const Artwork = () => {
  const [headerRef, isVisible] = useScrollReveal();

  return (
    <div className="w-full relative pt-32 pb-40 px-6 max-w-7xl mx-auto min-h-screen">
      <div 
        ref={headerRef}
        className={clsx(
          "mb-24 text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6 tracking-tight">Complete Works</h1>
        <p className="text-white/60 text-[11px] font-medium tracking-[0.3em] uppercase">2018 — Present</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {artworks.map((art, index) => (
          <ArtworkCard 
            key={art.id}
            title={art.title}
            year={art.year}
            image={art.image}
            delay={(index % 3) * 150}
          />
        ))}
      </div>
    </div>
  );
};

export default Artwork;