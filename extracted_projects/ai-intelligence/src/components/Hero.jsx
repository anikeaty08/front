import React, { useEffect, useRef } from 'react';
import UnicornScene from 'unicornstudio-react';

const Hero = () => {
  const heroBgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroBgRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        heroBgRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900 text-[#F2F0EB]">
      {/* Background (component) added by Aura/Unicorn */}
      <div 
        className="top-0 w-full h-screen mix-blend-screen saturate-0 z-10 pointer-events-none absolute" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
        }}
      >
        <div className="top-0 w-full -z-10 absolute h-full">
          <div className="absolute w-full h-full left-0 top-0 -z-10">
             <UnicornScene projectId="7WRlj4TRuUxuldc6GVDM" />
          </div>
        </div>
      </div>

      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          ref={heroBgRef}
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c55b9091-b0ca-4842-92d7-7be239f76440_1600w.webp" 
          alt="Serene Portrait" 
          className="absolute left-0 -top-[10%] h-[120%] w-full object-cover opacity-60 mix-blend-overlay will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navbar */}
      <nav className="flex md:px-12 w-full z-10 pt-8 pr-6 pb-8 pl-6 relative items-center justify-between">
        <div className="flex items-center gap-2 reveal-item delay-100">
          <iconify-icon icon="solar:tornado-small-outline" width="30" height="30" style={{ color: 'rgb(242, 240, 235)' }}></iconify-icon>
          <span className="text-2xl text-white font-dm-sans font-light tracking-tighter">Etheria</span>
        </div>

        <div className="hidden items-center gap-12 text-sm font-medium tracking-wide text-white/80 md:flex">
          <a href="#" className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-200">Expertise</a>
          <a href="#" className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-300">Solutions</a>
          <a href="#" className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-400">Research</a>
          <a href="#" className="hover:text-white transition-colors tracking-tighter font-sans reveal-item delay-500">Insights</a>
        </div>

        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/70 md:flex reveal-item delay-500">
          <span className="tracking-tighter font-sans">+1-800-ETHERIA</span>
          <span className="tracking-tighter font-sans">San Francisco, CA</span>
          <a href="#" className="group flex items-center gap-1 text-white hover:opacity-80 tracking-tighter font-sans">
            Consult With Us
            <iconify-icon icon="solar:arrow-right-up-linear" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></iconify-icon>
          </a>
        </div>
        
        <button className="md:hidden text-white reveal-item">
          <iconify-icon icon="solar:hamburger-menu-linear" className="text-3xl"></iconify-icon>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="z-10 flex h-[calc(100vh-100px)] flex-col md:px-12 md:pb-20 pr-6 pb-12 pl-6 relative justify-end">
        {/* Top Tags */}
        <div className="mb-auto flex w-full justify-between pt-12 text-xs font-medium tracking-wider text-white/40 reveal-item delay-300">
          <span className="uppercase tracking-tighter font-sans">// Exclusive intelligence for the future of business.</span>
          <span className="tracking-tighter font-sans">©2026</span>
        </div>

        <div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">
          {/* Headline */}
          <h1 className="leading-[1.1] md:max-w-4xl md:text-7xl lg:text-8xl text-5xl font-light text-white tracking-tighter font-dm-sans reveal-item delay-100">
            Engineering the <span className="text-white/90 font-dm-sans font-light tracking-tighter">Sovereign Intelligence Layer</span> for Global Enterprise.
          </h1>

          {/* Right Description & Button */}
          <div className="flex max-w-sm flex-col gap-8 reveal-item delay-300">
            <p className="text-lg leading-relaxed text-white/80 tracking-tighter font-sans">
              Intelligence is not just data processing—it is an art, a strategy, and the finest investment for your future.
            </p>
            <a href="#" className="group flex w-fit items-center gap-3 rounded-full bg-[#F2F0EB] px-8 py-4 text-sm text-stone-900 transition-all hover:bg-white hover:shadow-lg hover:scale-105 tracking-tighter font-sans">
              Explore Intelligence
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg transition-transform group-hover:rotate-45"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;