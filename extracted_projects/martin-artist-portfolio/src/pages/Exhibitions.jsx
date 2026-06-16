import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

const exhibitionsData = [
  {
    id: 1,
    title: "The Geometry of Silence",
    location: "The Whitney Museum, NY",
    date: "03 Nov - 15 Jan",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=1200&q=80",
    description: "This landmark exhibition explores the intersection of minimalist architecture and expressionist color fields. Featuring over 40 new works created during Elias's residency in Kyoto, 'The Geometry of Silence' challenges the viewer to find meaning in the negative spaces between structural monoliths. The curation emphasizes a meditative journey through scale and restraint."
  },
  {
    id: 2,
    title: "Form & Void",
    location: "Tate Modern, London",
    date: "21 Jan - 30 Mar",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&q=80",
    description: "Expanding on his pivotal 2023 essay, Elias transforms the Turbine Hall with massive, hanging canvases that redefine the spatial dynamics of the room. This immersive installation invites visitors to walk through a labyrinth of raw textures and bold, chaotic gestures, blurring the line between two-dimensional painting and three-dimensional sculpture."
  },
  {
    id: 3,
    title: "Essence of Light",
    location: "Gagosian Gallery, Paris",
    date: "14 Oct - 20 Nov",
    status: "Past",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&q=80",
    description: "A retrospective of Elias's early career focus on luminosity and atmospheric depth. The exhibition gathered his most significant resin-layered works, demonstrating his meticulous subtractive technique where light is not painted, but revealed through excavation of the canvas surface."
  }
];

const Exhibitions = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <div className="w-full relative pt-32 pb-40 px-6 max-w-5xl mx-auto min-h-screen z-10">
      <div 
        ref={headerRef}
        className={clsx(
          "mb-24 text-center transition-all duration-1000",
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6 tracking-tight">Exhibitions</h1>
        <p className="text-white/60 text-[11px] font-medium tracking-[0.3em] uppercase">Global Viewings</p>
      </div>

      <div className="space-y-24">
        {exhibitionsData.map((exhibition, index) => (
          <ExhibitionItem key={exhibition.id} data={exhibition} index={index} />
        ))}
      </div>
    </div>
  );
};

const ExhibitionItem = ({ data, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref} 
      className={clsx(
        "flex flex-col lg:flex-row gap-8 lg:gap-16 items-start transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        !isEven && "lg:flex-row-reverse"
      )}
    >
      <div className="w-full lg:w-1/2">
        <div className="aspect-[4/3] overflow-hidden bg-[#1e1b4b] border border-white/10 relative group">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          {data.status === 'Upcoming' && (
            <div className="absolute top-4 left-4 bg-[#12c2e9] text-white text-[9px] font-bold tracking-widest px-3 py-1 uppercase">
              Upcoming
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-4 lg:mt-10">
        <span className="text-[#e0281c] text-[10px] font-semibold tracking-widest uppercase mb-4 block">{data.date}</span>
        <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4 tracking-tight">{data.title}</h2>
        <p className="text-white/60 font-serif italic text-lg mb-6">{data.location}</p>
        
        <div 
          className={clsx(
            "overflow-hidden transition-all duration-700 ease-in-out",
            isExpanded ? "max-h-[500px] opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
          )}
        >
          <div className="border-l-2 border-[#12c2e9]/50 pl-4 py-1">
            <p className="text-white/70 font-serif text-sm leading-relaxed text-left">
              {data.description}
            </p>
          </div>
        </div>

        <div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-b border-white/30 text-white text-[11px] uppercase tracking-widest pb-1 hover:border-white hover:text-[#12c2e9] transition-all flex items-center gap-2 mx-auto lg:mx-0 group"
          >
            {isExpanded ? 'Less Information' : 'More Information'}
            <iconify-icon 
              icon="solar:alt-arrow-down-linear" 
              class={clsx("transition-transform duration-500", isExpanded && "rotate-180")}
            ></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;