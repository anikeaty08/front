import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: "01",
    title: "Concrete Isolation",
    year: "2023",
    description: "An exploration of scale and solitude within brutalist architecture across Eastern Europe. Stripping away the color allows the viewer to focus entirely on texture, light, and monumental forms.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Nordic Silence",
    year: "2022",
    description: "Captured over three months during the perpetual twilight of the Arctic winter. This series examines the fragile line between the harsh reality of the environment and its breathtaking beauty.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "The Human Gaze",
    year: "2021",
    description: "Studio portraits exploring vulnerability. Each subject was photographed using a large-format 8x10 camera, demanding a slower, more deliberate connection between photographer and subject.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Series() {
  return (
    <div className="min-h-screen border-b border-black/10 pb-24">
      <div className="px-6 md:px-12 pt-24 pb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-zinc-900">
          Series
        </h1>
        <p className="max-w-xl text-zinc-500 leading-relaxed md:text-lg">
          Curated collections of photographic essays. Each series represents a deep dive into specific themes, technical challenges, or geographic locations.
        </p>
      </div>

      <div className="flex flex-col border-t border-black/10">
        {collections.map((collection, index) => (
          <div key={collection.id} className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 group cursor-pointer">
            {/* Visual */}
            <div className={`relative overflow-hidden h-[500px] lg:h-[700px] ${index % 2 !== 0 ? 'lg:order-2 border-l border-black/10' : 'border-r border-black/10'}`}>
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Text Content */}
            <div className={`p-8 md:p-16 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-2xl text-black/30 font-light">{collection.id}</span>
                <div className="h-px w-12 bg-black/20"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Vol. {collection.year}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-900 group-hover:text-sky-600 transition-colors">
                {collection.title}
              </h2>
              
              <p className="text-zinc-500 leading-relaxed mb-12 max-w-md">
                {collection.description}
              </p>
              
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black group-hover:text-sky-600 transition-colors mt-auto">
                Explore Series
                <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}