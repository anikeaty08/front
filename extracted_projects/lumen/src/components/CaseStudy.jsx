import React, { useState } from 'react';

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState('darkroom');

  return (
    <section className="relative border-b border-black/10">
      {/* Tabs */}
      <div className="absolute top-0 left-0 md:left-1/4 flex z-20">
        <button 
          onClick={() => setActiveTab('darkroom')}
          className={`text-sm font-semibold border-r pt-3 pr-8 pb-3 pl-8 backdrop-blur-sm bg-white/50 border-black/10 transition-colors ${activeTab === 'darkroom' ? 'text-zinc-900' : 'text-black/50 hover:text-black'}`}
        >
          The Darkroom
        </button>
        <button 
          onClick={() => setActiveTab('studio')}
          className={`text-sm font-semibold pt-3 pr-8 pb-3 pl-8 transition-colors ${activeTab === 'studio' ? 'text-zinc-900' : 'text-black/50 hover:text-black'}`}
        >
          Studio A
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="md:p-12 md:pt-32 flex flex-col border-black/10 border-r pt-24 pr-6 pb-6 pl-6 relative justify-center">
          <h2 className="md:text-7xl uppercase text-5xl font-bold tracking-tighter mb-8 text-zinc-900">
            Process
          </h2>

          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-2">Analog Workflow</h4>
            <h5 className="text-lg text-black/70 mb-6">Silver Gelatin Print</h5>
            <p className="leading-relaxed text-sm text-zinc-500 max-w-sm">
              Every print is hand-developed in our private darkroom. We believe in the tactile relationship between the artist and the medium, preserving the chemical magic of photography.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-black/10">
            <div>
              <p className="text-[10px] font-bold uppercase mb-1 text-sky-600">
                Format
              </p>
              <p className="text-2xl font-bold font-mono">120mm</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase mb-1 text-sky-600">
                Paper
              </p>
              <p className="text-2xl font-bold font-mono">Fiber</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase mb-1 text-sky-600">
                Editions
              </p>
              <p className="text-2xl font-bold font-mono">1/10</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px] md:h-auto overflow-hidden">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b64a0436-0ae9-40c8-9036-da022ed50341_1600w.webp" 
            alt="Process"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" 
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent from-zinc-50/20"></div>
        </div>
      </div>
    </section>
  );
}