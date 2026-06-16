import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = 3;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="md:pt-24 md:pb-32 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-0 border-b pt-16 pr-6 pb-20 pl-6 relative gap-x-0 gap-y-0 border-black/10">
      {/* Abstract Video Background */}
      <video 
        src="https://cdn.coverr.co/videos/coverr-shadows-of-leaves-on-a-wall-3536/1080p.mp4" 
        autoPlay loop muted playsInline 
        className="z-10 opacity-[0.08] w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
      ></video>
      
      {/* Left Col */}
      <div className="col-span-1 flex flex-col z-20 h-full relative justify-between">
        <div className="mb-16">
          <p className="text-[10px] uppercase md:text-xs font-semibold tracking-widest mb-2 text-sky-600">
            Focus: Light & Geometry
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-4">
            LUMEN
            <span className="text-sky-500 text-6xl align-top">+</span>
          </h1>
          <div className="h-px w-full bg-gradient-to-r to-transparent my-6 from-black/20"></div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="group cursor-pointer">
            <iconify-icon icon="solar:camera-minimalistic-bold-duotone" class="text-4xl mb-4 group-hover:text-sky-600 transition-colors text-zinc-800"></iconify-icon>
            <h3 className="text-sm font-semibold leading-tight mb-2">
              Editorial &<br />Commercial
            </h3>
            <div className="w-4 h-0.5 group-hover:w-8 transition-all bg-sky-500"></div>
          </div>
          <div className="group cursor-pointer">
            <iconify-icon icon="solar:gallery-wide-bold-duotone" class="text-4xl mb-4 group-hover:text-sky-600 transition-colors text-zinc-800"></iconify-icon>
            <h3 className="leading-tight text-sm font-semibold mb-2">
              Fine Art<br />Prints
            </h3>
            <div className="w-4 h-0.5 group-hover:w-8 transition-all bg-sky-500"></div>
          </div>
        </div>

        <div className="flex gap-12 mt-auto text-xs font-medium tracking-wide text-zinc-600">
          <a href="#" className="flex items-center gap-2 transition-colors hover:text-black">
            View Galleries
            <ChevronRight className="w-3 h-3" />
          </a>
          <a href="#" className="flex items-center gap-2 transition-colors hover:text-black">
            Book Studio
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Center Visual (3D Carousel) */}
      <div className="col-span-1 md:col-span-2 flex md:py-0 pt-10 pb-10 relative items-center justify-center">
        <div className="aspect-[3/4] group overflow-hidden md:aspect-auto md:h-[600px] w-full relative">
          
          {/* Slider Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-full h-full"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {/* Slide 1: Portrait */}
            <div className="flex-shrink-0 z-10 w-full h-full relative">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/feb67f29-4bdc-4631-af01-58eb137bfb45_1600w.webp" alt="Portrait" className="w-full h-full object-cover grayscale contrast-125" />
              <div className="bg-gradient-to-t via-transparent to-transparent z-10 absolute inset-0 from-zinc-900/50"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2 z-20">
                  <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded border text-[10px] font-mono uppercase backdrop-blur-md border-white/20 bg-white/10 text-white">Portraiture</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-1 text-white">The Human Gaze</h3>
                  <p className="text-sm line-clamp-1 text-white/70">Raw emotion captured in monochrome.</p>
              </div>
            </div>

            {/* Slide 2: Architecture */}
            <div className="w-full h-full flex-shrink-0 relative">
              <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover grayscale contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-zinc-900/50"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2 z-20">
                  <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded border border-white/20 bg-white/10 text-[10px] font-mono uppercase backdrop-blur-md text-white">Form</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-1 text-white">Concrete Dreams</h3>
                  <p className="text-sm line-clamp-1 text-white/70">Brutalist structures and urban geometry.</p>
              </div>
            </div>

            {/* Slide 3: Nature */}
            <div className="w-full h-full flex-shrink-0 relative">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop" alt="Landscape" className="w-full h-full object-cover grayscale contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-zinc-900/50"></div>
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2 z-20">
                  <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded border border-white/20 bg-white/10 text-[10px] font-mono uppercase backdrop-blur-md text-white">Landscape</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-1 text-white">Silent Peaks</h3>
                  <p className="text-sm line-clamp-1 text-white/70">The grandeur of untouched horizons.</p>
              </div>
            </div>

          </div>

          {/* Navigation Overlay */}
          <div className="flex gap-3 z-20 absolute right-8 bottom-8 items-center">
              <div className="px-3 py-1.5 rounded-full backdrop-blur-xl border text-xs font-mono mr-2 shadow-lg bg-black/80 border-white/10 text-white">
                  <span>{String(index + 1).padStart(2, '0')}</span><span className="mx-1 text-white/30">/</span>03
              </div>

              <div className="flex gap-2">
                  <button onClick={prevSlide} className="w-10 h-10 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all duration-300 group/btn shadow-lg border-white/10 bg-black/50 text-white hover:bg-white hover:text-black">
                      <ArrowLeft className="w-[18px] h-[18px] stroke-[1.5] group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>
                  <button onClick={nextSlide} className="w-10 h-10 rounded-full border backdrop-blur-xl flex items-center justify-center transition-all duration-300 group/btn shadow-lg border-white/10 bg-black/50 text-white hover:bg-white hover:text-black">
                      <ArrowRight className="w-[18px] h-[18px] stroke-[1.5] group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
              </div>
          </div>
        </div>
      </div>

      {/* Right Col */}
      <div className="col-span-1 flex flex-col md:items-end z-20 md:pt-0 h-full pt-8 relative items-start pl-6 md:pl-0">
        <p className="text-[10px] uppercase font-semibold text-zinc-400 tracking-widest mb-1">
          Projects Archived:
        </p>
        <span className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900">
          214
        </span>
      </div>
    </section>
  );
}