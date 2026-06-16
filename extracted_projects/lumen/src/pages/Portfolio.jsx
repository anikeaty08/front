import React from 'react';

const works = [
  { id: 1, title: "Silent Echo", category: "Portrait", url: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 2, title: "Urban Density", category: "Architecture", url: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 3, title: "Northern Wind", category: "Landscape", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[1/1]" },
  { id: 4, title: "Form Study", category: "Abstract", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 5, title: "Movement", category: "Editorial", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[4/3]" },
  { id: 6, title: "Steel & Glass", category: "Architecture", url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24 pb-32 border-b border-black/10">
      <div className="px-6 md:px-12 mb-16 md:mb-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-zinc-900">
          Portfolio
        </h1>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <button className="px-4 py-2 border border-black/10 rounded-full bg-black text-white transition-colors">All Works</button>
          <button className="px-4 py-2 border border-black/10 rounded-full bg-white text-black/60 hover:text-black hover:border-black/30 transition-colors">Portrait</button>
          <button className="px-4 py-2 border border-black/10 rounded-full bg-white text-black/60 hover:text-black hover:border-black/30 transition-colors">Architecture</button>
          <button className="px-4 py-2 border border-black/10 rounded-full bg-white text-black/60 hover:text-black hover:border-black/30 transition-colors">Landscape</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
        {works.map((work) => (
          <div key={work.id} className="group relative overflow-hidden bg-zinc-200 cursor-pointer">
            <div className={`w-full ${work.aspect} overflow-hidden`}>
              <img 
                src={work.url} 
                alt={work.title} 
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {work.category}
              </span>
              <h3 className="text-2xl font-semibold text-white tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-24">
        <button className="px-8 py-4 border border-black/20 text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
          Load More Works
        </button>
      </div>
    </div>
  );
}