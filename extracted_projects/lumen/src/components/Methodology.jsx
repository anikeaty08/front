import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b relative group border-black/10 bg-zinc-50">
      {/* Left: Visual Content */}
      <div className="relative min-h-[500px] lg:min-h-[700px] border-r overflow-hidden border-black/10">
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2564&auto=format&fit=crop" 
          alt="Camera Lens" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent from-zinc-50 via-zinc-50/20"></div>
        
        {/* Floating Data Card */}
        <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 backdrop-blur-xl border p-6 z-10 transition-colors duration-300 bg-white/80 border-black/10 hover:bg-white">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">Current Gear</span>
            <iconify-icon icon="solar:camera-square-bold" style={{ fontSize: '16px' }} class="text-zinc-500"></iconify-icon>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider font-semibold text-black/50">Body: Leica M11</p>
            <p className="text-lg font-medium tracking-tight">Summilux 35mm f/1.4</p>
          </div>
        </div>
      </div>

      {/* Right: Philosophy & Interactive List */}
      <div className="flex flex-col">
        {/* Header */}
        <div className="p-8 md:p-16 flex-1 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <iconify-icon icon="solar:aperture-bold-duotone" class="w-[120px] h-[120px] text-[120px]"></iconify-icon>
          </div>

          <p className="text-[10px] uppercase flex items-center gap-3 font-bold text-sky-600 tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-600"></span>
            Vision
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none mb-6 text-zinc-900">
            Frame, Focus & <span className="text-black/30">Feel</span>
          </h2>
          <p className="leading-relaxed md:text-base text-sm text-zinc-500 max-w-md">
            Photography is not just about capturing reality, but interpreting it. We strip away the color to reveal the essential structure of light, texture, and emotion.
          </p>
        </div>

        {/* Accordion / List Items */}
        <div className="border-t divide-y border-black/10 divide-black/10 bg-white">
          
          <a href="#" className="group block md:px-12 md:py-8 transition-colors duration-300 hover:bg-black/5 pt-6 pr-6 pb-6 pl-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs transition-colors text-sky-600/50 group-hover:text-sky-600">01</span>
                <div className="flex flex-col">
                  <h3 className="group-hover:text-black transition-colors text-lg font-medium text-black/80 tracking-tight">Pre-Visualization</h3>
                  <span className="text-xs mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0 text-black/40">Scouting locations and understanding light</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all border-black/10 group-hover:border-sky-600/50 group-hover:bg-sky-600/10">
                <ArrowUpRight className="w-4 h-4 stroke-[1.5] text-black/50 group-hover:text-sky-600" />
              </div>
            </div>
          </a>

          <a href="#" className="group block p-6 md:px-12 md:py-8 transition-colors duration-300 hover:bg-black/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs transition-colors text-sky-600/50 group-hover:text-sky-600">02</span>
                <div className="flex flex-col">
                  <h3 className="group-hover:text-black transition-colors text-lg font-medium text-black/80 tracking-tight">The Capture</h3>
                  <span className="group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform group-hover:translate-y-0 text-xs text-black/40 opacity-0 h-0 mt-1 translate-y-2">Manual exposure and composition</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all border-black/10 group-hover:border-sky-600/50 group-hover:bg-sky-600/10">
                <ArrowUpRight className="w-4 h-4 stroke-[1.5] text-black/50 group-hover:text-sky-600" />
              </div>
            </div>
          </a>

          <a href="#" className="group block p-6 md:px-12 md:py-8 transition-colors duration-300 hover:bg-black/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs transition-colors text-sky-600/50 group-hover:text-sky-600">03</span>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium tracking-tight group-hover:text-black transition-colors text-black/80">Post-Production</h3>
                  <span className="text-xs mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-2 group-hover:translate-y-0 text-black/40">Grading, dodging, and burning</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border flex items-center justify-center transition-all border-black/10 group-hover:border-sky-600/50 group-hover:bg-sky-600/10">
                <ArrowUpRight className="w-4 h-4 stroke-[1.5] text-black/50 group-hover:text-sky-600" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}