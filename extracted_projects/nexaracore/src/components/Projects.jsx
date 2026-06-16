import React, { useState } from 'react';
import clsx from 'clsx';

const projectData = {
  '2020': {
    title: 'Neon Horizon',
    subtitle: 'Commercial',
    desc: 'An award-winning commercial spot featuring liquid simulations, kinetic typography, and high-energy pacing.',
    tags: ['3D MOTION', 'ADVERTISING', 'VFX'],
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'
  },
  '2019': {
    title: 'Cyber System',
    subtitle: 'Game Trailer',
    desc: 'A dystopian urban landscape rendered in real-time for the global launch of a major triple-A gaming title.',
    tags: ['ENVIRONMENT', 'UNREAL ENGINE', 'CINEMATIC'],
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_1600w.jpg'
  },
  '2018': {
    title: 'Fluid Identity',
    subtitle: 'Rebranding',
    desc: 'Organic fluid simulations created to represent the dynamic and evolving nature of a fintech startup.',
    tags: ['SIMULATION', 'FLUIDS', 'BRANDING'],
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_1600w.webp'
  },
  '2017': {
    title: 'Digital Mind',
    subtitle: 'Short Film',
    desc: 'An experimental short film exploring the boundaries between digital reality and human consciousness.',
    tags: ['EXPERIMENTAL', 'NARRATIVE', 'ART DIRECTION'],
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80'
  }
};

const yearsList = ['2020', '2019', '2018', '2017'];

export default function Projects() {
  const [activeYear, setActiveYear] = useState('2020');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const data = projectData[activeYear];

  const handleYearChange = (year) => {
    if (year === activeYear || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveYear(year);
      setIsTransitioning(false);
    }, 150);
  };

  const navigateProject = (direction) => {
    const currentIndex = yearsList.indexOf(activeYear);
    let newIndex = currentIndex + direction;
    
    if (newIndex >= yearsList.length) newIndex = 0;
    if (newIndex < 0) newIndex = yearsList.length - 1;
    
    handleYearChange(yearsList[newIndex]);
  };

  return (
    <section className="bg-[#000000]/80 pt-20 pb-20 border-t border-red-900/20 z-20 relative">
      <div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative rounded-xl overflow-hidden aspect-square skeuo-card-inner group p-2">
            <img 
              src={data.img} 
              alt={data.title}
              className={clsx("w-full h-full object-cover rounded-lg aura-img transition-all duration-700 group-hover:scale-105", isTransitioning ? "opacity-50" : "opacity-100")} 
            />
            <div className="absolute inset-0 aura-overlay rounded-xl opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Right Content */}
          <div className="pt-8">
            <div className="flex gap-8 mb-12 border-b border-red-900/30 pb-4 overflow-x-auto">
              {yearsList.map(year => (
                <button 
                  key={year}
                  onClick={() => handleYearChange(year)} 
                  className={clsx(
                    "text-xl md:text-2xl font-medium pb-4 border-b-2 inline-block bg-transparent cursor-pointer focus:outline-none transition-all duration-300",
                    activeYear === year 
                      ? "text-red-500 border-red-500" 
                      : "text-zinc-600 hover:text-zinc-400 border-transparent"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>

            <span className="uppercase block text-[10px] font-medium text-red-400 tracking-widest mb-3">
              Latest Projects
            </span>

            <div className="flex justify-between items-start">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-none mb-8 text-white">
                <span className="block">{data.title}</span>
                <span className="block text-2xl md:text-3xl text-zinc-500 font-light mt-3">{data.subtitle}</span>
              </h2>
              
              <div className="flex gap-3">
                <button onClick={() => navigateProject(-1)} className="flex btn-outline-glow w-10 h-10 rounded-lg items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
                </button>
                <button onClick={() => navigateProject(1)} className="flex btn-gradient w-10 h-10 rounded-lg items-center justify-center text-white transition-transform hover:-translate-y-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {data.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-black/50 border border-red-500/30 text-red-300 text-[9px] font-medium tracking-widest uppercase rounded-sm shadow-[0_0_10px_rgba(220,38,38,0.1)]">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10 max-w-md min-h-[84px]">
              {data.desc}
            </p>

            <div className="flex items-center gap-6">
              <button className="btn-gradient px-8 py-3 rounded-xl text-xs font-medium tracking-wide text-white flex items-center gap-2 cursor-pointer border-none">
                Details
                <iconify-icon icon="solar:alt-arrow-right-linear" class="text-sm"></iconify-icon>
              </button>

              <a href="#" className="text-[10px] font-medium flex items-center gap-2 transition-colors text-zinc-400 hover:text-red-400 tracking-widest uppercase">
                All Projects
                <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}