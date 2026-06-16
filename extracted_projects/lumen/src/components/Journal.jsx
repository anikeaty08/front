import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Journal() {
  return (
    <section className="border-b border-black/10 bg-zinc-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
        
        {/* Left: Featured Article (Large Visual) */}
        <div className="group relative min-h-[600px] flex flex-col justify-end p-8 md:p-12 overflow-hidden cursor-pointer">
          {/* Background Image with Zoom Effect */}
          <img 
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2574&auto=format&fit=crop" 
            alt="Darkroom" 
            className="group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" 
          />
          <div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-zinc-50 via-zinc-50/60"></div>
          
          {/* Content Overlay */}
          <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 border text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border-sky-500/30 bg-sky-500/10 text-sky-600">Featured Diary</span>
              <span className="text-xs font-mono tracking-tight text-black/50">OCT 24, 2024</span>
            </div>
            
            <h3 className="md:text-7xl uppercase text-5xl font-bold tracking-tighter mb-8 text-zinc-900">
              The Art of <span className="font-normal text-black/40">Printing</span>
            </h3>
            
            <p className="leading-relaxed line-clamp-2 md:text-lg text-zinc-600 max-w-md mb-8">
              Exploring the meditative process of darkroom printing, where digital noise fades and chemistry brings images to life.
            </p>
            
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors text-black group-hover:text-sky-600">
              Read Full Entry
              <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:text-white transition-all duration-300 border-black/20 group-hover:bg-sky-600 group-hover:border-sky-600">
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Editorial List & Header */}
        <div className="flex flex-col h-full">
          {/* Section Header */}
          <div className="p-8 md:p-12 border-b flex items-center justify-between bg-white/[0.02] border-black/10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2 text-zinc-900">Journal</h2>
              <p className="text-xs uppercase tracking-widest text-black/40">Behind the Lens</p>
            </div>
            <a href="#" className="px-5 py-2.5 border text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border-black/10 hover:bg-black hover:text-zinc-100">
              Archive
              <BookOpen className="w-[14px] h-[14px] stroke-[2]" />
            </a>
          </div>
          
          {/* Article List */}
          <div className="flex-1 divide-y divide-black/10">
            {/* Item 1 */}
            <a href="#" className="group block p-8 md:px-12 transition-colors relative overflow-hidden hover:bg-black/5">
              <div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-sky-500"></div>
              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Gear</span>
                    <span className="w-1 h-1 rounded-full bg-black/20"></span>
                    <span className="text-[10px] uppercase tracking-widest text-black/40">Review</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-black transition-colors text-black/90">Leica M11 Monochrom</h4>
                  <p className="text-sm group-hover:text-black/70 transition-colors text-black/40">Why I switched to a black and white only sensor for my latest project.</p>
                </div>
                <div className="flex hidden md:flex transition-colors w-20 h-20 border items-center justify-center bg-black/5 border-black/10 group-hover:bg-sky-100 text-sky-600">
                    <iconify-icon icon="solar:camera-add-bold-duotone" class="text-2xl"></iconify-icon>
                </div>
              </div>
            </a>
            
            {/* Item 2 */}
            <a href="#" className="group block md:px-12 transition-colors overflow-hidden pt-8 pr-8 pb-8 pl-8 relative hover:bg-black/5">
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-sky-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Travel</span>
                    <span className="w-1 h-1 rounded-full bg-black/20"></span>
                    <span className="text-[10px] uppercase tracking-widest text-black/40">Location</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-black transition-colors text-black/90">Iceland's Black Beaches</h4>
                  <p className="text-sm group-hover:text-black/70 transition-colors text-black/40">Scouting the alien landscapes of Vík for the 'Nordic Silence' series.</p>
                </div>
                <div className="flex hidden md:flex transition-colors w-20 h-20 border items-center justify-center bg-black/5 border-black/10 group-hover:bg-sky-100 text-sky-600">
                    <iconify-icon icon="solar:map-point-bold-duotone" class="text-2xl"></iconify-icon>
                </div>
              </div>
            </a>
            
            {/* Item 3 */}
            <a href="#" className="group block p-8 md:px-12 transition-colors relative overflow-hidden hover:bg-black/5">
              <div className="absolute right-0 top-0 bottom-0 w-1 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-sky-500"></div>
              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Tutorial</span>
                    <span className="w-1 h-1 rounded-full bg-black/20"></span>
                    <span className="text-[10px] uppercase tracking-widest text-black/40">Technique</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-black transition-colors text-black/90">Mastering High Contrast</h4>
                  <p className="text-sm group-hover:text-black/70 transition-colors text-black/40">Lighting techniques to achieve dramatic shadows in studio portraiture.</p>
                </div>
                <div className="w-20 h-20 border flex items-center justify-center hidden md:flex transition-colors bg-black/5 border-black/10 group-hover:bg-sky-100 text-sky-600">
                    <iconify-icon icon="solar:lightbulb-bolt-bold-duotone" class="text-2xl"></iconify-icon>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}