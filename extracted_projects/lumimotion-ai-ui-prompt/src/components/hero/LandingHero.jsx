import React from 'react';
import { Link } from 'react-router-dom';
import SectionFrame from '../ui/SectionFrame';
import HeroMockup from './HeroMockup';
import UnicornScene from "unicornstudio-react";

export default function LandingHero() {
  return (
    <SectionFrame id="hero" className="pt-24 md:pt-32 pb-16 px-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[900px] z-0 pointer-events-none">
        <UnicornScene
          projectId="Gp9cUMaCN53bOLjWagWZ"
          width="1440px"
          height="900px"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js"
        />
      </div>

      <div className="flex flex-col z-10 relative items-center">
        
        <div className="flex flex-col md:flex-row w-full justify-between max-w-6xl mx-auto gap-12 items-end mb-24">
          {/* Left side */}
          <div className="flex flex-col items-start w-full md:w-1/2 text-left">
            <div className="hero-anim-item inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-md text-xs text-white/70 mb-6 rounded-full font-geist tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6f91f] shadow-[0_0_8px_#c6f91f]"></span>
              Stop getting generic AI output
            </div>
            
            <h1 className="hero-anim-item text-4xl md:text-6xl lg:text-7xl text-white max-w-2xl text-balance font-geist font-light tracking-tighter">
              Premium prompt templates for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 font-geist font-light tracking-tighter">
                real product UI.
              </span>
            </h1>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-start md:items-end w-full md:w-1/2 text-left md:text-right">
            <p className="hero-anim-item text-white/50 text-base md:text-lg max-w-md mb-8 text-pretty font-geist tracking-tight">
              Structured, designer-crafted prompt systems that generate usable, high-fidelity interfaces. Built for Claude, Gemini, and Aura. No more AI slop.
            </p>
            
            <div className="hero-anim-item flex flex-wrap items-center gap-4">
              <Link to="/library" className="bg-[#c6f91f] text-black px-6 py-3 text-sm hover:bg-[#aade17] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(198,249,31,0.2)] font-geist tracking-tight font-medium">
                Explore Library
                <iconify-icon icon="solar:arrow-right-linear" />
              </Link>
              <Link to="/pricing" className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-6 py-3 text-sm hover:bg-white/10 hover:border-white/20 transition-all font-geist tracking-tight font-medium">
                Get Full Access
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-anim-item w-full max-w-[1280px] mx-auto z-10 relative">
          <HeroMockup />
        </div>
      </div>
    </SectionFrame>
  );
}