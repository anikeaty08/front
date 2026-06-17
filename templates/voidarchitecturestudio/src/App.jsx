import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Interactions
        document.addEventListener('DOMContentLoaded', () => {
            const heroContent = document.getElementById('hero-content');
            const bgText = document.getElementById('bg-text');
            const blackOverlay = document.getElementById('black-overlay');
            
            const fadeOutDistance = 400; // pixels scrolled before hero text disappears
            const fadeInStart = 100;    // pixels scrolled before big text and overlay start appearing
            const fadeInDistance = 500;  // pixels scrolled over which big text fades in fully

            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;

                // 1. Hero Content Fade Out & Parallax Up
                if (heroContent) {
                    const heroOpacity = Math.max(0, 1 - (scrollY / fadeOutDistance));
                    const heroTranslateY = scrollY * 0.25; 
                    
                    heroContent.style.opacity = heroOpacity;
                    heroContent.style.transform = `translateY(-${heroTranslateY}px)`;
                }

                // 2. Black overlay fades in to obscure background & High Contrast VOID text emerges on top
                if (bgText && blackOverlay) {
                    let fadeProgress = 0;
                    if (scrollY > fadeInStart) {
                        fadeProgress = Math.min(1, (scrollY - fadeInStart) / fadeInDistance);
                    }
                    
                    // Fade background to almost pure black
                    blackOverlay.style.opacity = fadeProgress * 0.95;
                    
                    // Fade in prominent text and slightly scale
                    const textScale = 1 + (scrollY * 0.0004); 
                    bgText.style.opacity = fadeProgress;
                    bgText.style.transform = `scale(${textScale})`;
                }
            }, { passive: true });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      <div className="fixed bg-center w-full h-screen bg-cover top-0" data-alpha-mask="80" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?w=3840&amp', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed z-[60] flex w-full top-6 md:top-8 px-6 md:px-12 items-center justify-center pointer-events-none transition-all duration-500">
<div className="flex gap-4 sm:gap-6 pointer-events-auto gap-x-4 gap-y-4 items-center">

<a aria-label="Home" className="text-[#E8E4DC] text-2xl font-bold tracking-tighter hover:scale-105 transition-all duration-500 flex-shrink-0 mr-2 hover:text-white" href="#">
            VOID
        </a>

<div className="flex items-center bg-[#1C1917]/60 backdrop-blur-2xl border shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.2)] rounded-full p-1.5 pl-2 relative border-white/10">

<div className="relative group/menu">
<button className="flex items-center gap-3.5 pl-4 pr-5 py-2.5 text-[#F5F2E9] transition-colors h-full rounded-full hover:text-white hover:bg-white/5">
<div className="flex flex-col w-6 gap-x-1.5 gap-y-1.5 justify-center">
<span className="h-[1.5px] transition-transform duration-300 group-hover/menu:-translate-y-0.5 bg-current w-full"></span>
<span className="h-[1.5px] transition-transform duration-300 group-hover/menu:translate-y-0.5 bg-current w-full"></span>
</div>
<span className="text-lg font-medium tracking-wide">Menu</span>
</button>

<div className="absolute top-[calc(100%+0.75rem)] left-0 w-64 bg-[#1C1917]/80 backdrop-blur-3xl border rounded-[28px] p-2.5 opacity-0 translate-y-3 scale-95 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:scale-100 transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] origin-top-left border-white/10">
<div className="flex flex-col gap-1">
<a className="flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all text-base font-medium group/item text-white/70 hover:text-white hover:bg-white/10" href="#">
                            Projects
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="flex items-center justify-between transition-all group/item hover:text-white hover:bg-white/10 text-base font-medium text-white/70 rounded-2xl pt-3.5 pr-4 pb-3.5 pl-4" href="/studio">
                            Studio
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all text-base font-medium group/item text-white/70 hover:text-white hover:bg-white/10" href="#">
                            Expertise
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all text-base font-medium group/item text-white/70 hover:text-white hover:bg-white/10" href="#">
                            Journal
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<div className="h-px my-1 mx-3 bg-white/10"></div>
<a className="flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all text-base font-medium group/item text-white/70 hover:text-white hover:bg-white/10" href="#">
                            Client Portal
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<a className="hover:bg-[#E54202] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center text-base font-medium text-white tracking-wide bg-[#FE4A03] opacity-80 rounded-full ml-2 pt-3 pr-7 pb-3 pl-7 shadow-[0_4px_14px_rgba(254,74,3,0.4)]" href="#">
                Inquire
            </a>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#0A0A0A] z-[30] pointer-events-none opacity-0 transition-opacity duration-75" id="black-overlay"></div>

<div className="fixed flex pointer-events-none z-[40] transition-all duration-75 ease-linear opacity-0 top-0 right-0 bottom-0 left-0 items-center justify-center" id="bg-text">
<h2 className="text-[30vw] leading-none select-none font-bold tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] text-white">
            VOID
        </h2>
</div>
<main className="relative">

<section className="min-h-[85svh] md:h-screen flex flex-col items-center justify-center md:justify-start pt-32 md:pt-52 pb-24 md:pb-0 px-6 relative z-20 pointer-events-none">
<div className="text-center flex flex-col items-center gap-6 md:gap-8 w-full max-w-5xl will-change-[opacity,transform]" id="hero-content">
<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-semibold tracking-tight text-[#E8E4DC] leading-[1.05]">
                    Shaping Empty Space
                </h1>
<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8C877F] font-medium max-w-3xl leading-relaxed tracking-tight">
                    Visionary design. <span className="text-white">Enduring structures.</span> A clear path to build what's next.
                </p>
<a className="mt-4 flex items-center gap-3 bg-[#D4401A] text-[#E8E4DC] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:text-[#0A0A0A] hover:scale-105 transition-all duration-300 group shadow-lg shadow-[#D4401A]/20 pointer-events-auto hover:bg-white" href="#projects">
                    View Projects
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="z-20 flex md:px-12 -mt-16 md:-mt-[45vh] pr-4 pb-20 md:pb-32 pl-4 relative justify-center">
<div className="w-full max-w-[100rem] relative group">

<img alt="Modern Architecture by VOID Studio" className="w-full h-[50vh] md:h-[85vh] object-cover rounded-t-2xl md:rounded-t-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>

<div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
</div>
</section>

<section className="z-[50] flex flex-col bg-[#000000] w-full pt-20 md:pt-32 relative" id="gallery">

<div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
<div className="flex flex-col gap-3 md:gap-4">
<span className="text-[#888888] uppercase tracking-[0.2em] text-xs sm:text-sm font-normal">Selected Works</span>
<h3 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-white leading-none">
                Built <br/>
<span className="text-[#555555]">Environments</span>
</h3>
</div>
<p className="text-[#A3A3A3] text-base md:text-xl font-normal max-w-lg leading-relaxed md:text-right">
            A visual exploration of form, light, and materiality across our most defining architectural projects globally.
        </p>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

<a className="group relative block w-full aspect-square md:aspect-auto md:h-[35rem] lg:col-span-2 overflow-hidden bg-[#111111]" href="#">
<img alt="Cultural Pavilion" className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1768268958426-5cb30e2066ef?w=3840&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

<div className="p-6 md:p-12 flex flex-col absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-end">
<div className="flex -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white/10 opacity-0 w-10 h-10 md:w-12 md:h-12 border-white/20 border rounded-full backdrop-blur-md items-center justify-center">
<svg className="text-white w-4 h-4 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<span className="uppercase block text-sm md:text-base font-normal text-white/70 tracking-[0.15em] mb-2 md:mb-3">Cultural</span>
<h4 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">The Oculus Pavilion</h4>
</div>
</div>
</a>

<a className="group relative block w-full aspect-square md:h-[35rem] lg:col-span-1 overflow-hidden bg-[#111111]" href="#">
<img alt="Residential Brutalism" className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="p-6 md:p-10 flex flex-col absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-end">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/20">
<svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75 opacity-0 translate-y-8">
<span className="text-white/70 text-sm md:text-base font-normal tracking-[0.15em] uppercase mb-2 md:mb-3 block">Residential</span>
<h4 className="text-2xl md:text-3xl text-white font-medium tracking-tight">Villa No. 42</h4>
</div>
</div>
</a>

<a className="group relative block w-full aspect-square md:h-[35rem] lg:col-span-1 overflow-hidden bg-[#111111]" href="#">
<img alt="Interior Geometry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100" src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/20">
<svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100">
<span className="text-white/70 text-sm md:text-base font-normal tracking-[0.15em] uppercase mb-2 md:mb-3 block">Interiors</span>
<h4 className="text-2xl md:text-3xl text-white font-medium tracking-tight">Lightscape Atrium</h4>
</div>
</div>
</a>

<a className="group relative block w-full aspect-square md:h-[35rem] lg:col-span-1 overflow-hidden bg-[#111111]" href="#">
<img alt="Commercial Facade" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/20">
<svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<span className="text-white/70 text-sm md:text-base font-normal tracking-[0.15em] uppercase mb-2 md:mb-3 block">Commercial</span>
<h4 className="text-2xl md:text-3xl text-white font-medium tracking-tight">Apex Tower</h4>
</div>
</div>
</a>

<a className="group relative block w-full aspect-square md:aspect-auto md:h-[35rem] lg:col-span-2 overflow-hidden bg-[#111111]" href="#">
<img alt="Minimalist Space" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/20">
<svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75">
<span className="text-white/70 text-sm md:text-base font-normal tracking-[0.15em] uppercase mb-2 md:mb-3 block">Planning</span>
<h4 className="text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight">Zenith Gallery</h4>
</div>
</div>
</a>

<a className="group relative block w-full aspect-square md:h-[35rem] lg:col-span-1 overflow-hidden bg-[#111111]" href="#">
<img alt="Modern Exterior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
<div className="flex justify-end">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/20">
<svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100">
<span className="text-white/70 text-sm md:text-base font-normal tracking-[0.15em] uppercase mb-2 md:mb-3 block">Residential</span>
<h4 className="text-2xl md:text-3xl text-white font-medium tracking-tight">The Edge Estate</h4>
</div>
</div>
</a>
</div>
</section><section className="z-[50] flex flex-col md:pt-32 md:pb-24 bg-[#0A0A0A] w-full border-white/5 border-t pt-20 pb-16 relative" id="services">

<div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
<h4 className="text-lg md:text-2xl font-medium text-[#E8E4DC] tracking-wide mt-2">Services</h4>
<div className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[#E8E4DC] leading-tight md:text-right">
            How VOID <br/>
<span className="text-[#8C877F]">Transforms Space</span>
</div>
</div>

<div className="w-full flex flex-col border-t border-white/10">

<div className="group relative w-full border-b overflow-hidden cursor-pointer border-white/10">

<div className="absolute inset-0 z-0 pointer-events-none bg-[#0A0A0A] overflow-hidden">
<img alt="Architecture" className="w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-30 group-hover:scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&amp;q=80"/>

<div className="absolute inset-0 bg-[#0A0A0A] origin-right group-hover:scale-x-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
</div>

<div className="z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start lg:items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-4 relative">

<div className="lg:col-span-4 flex flex-col md:flex-row items-start gap-4 md:gap-8">
<div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border text-[#E8E4DC] font-medium text-base md:text-lg shrink-0 group-hover:bg-[#E8E4DC] group-hover:text-[#0A0A0A] transition-all duration-500 border-white/20">
                        1
                    </div>
<p className="text-lg md:text-2xl text-[#E8E4DC]/70 font-medium leading-relaxed group-hover:text-[#E8E4DC] transition-colors duration-500">
                        Comprehensive architectural design from concept to completion, focusing on spatial harmony and enduring structural integrity.
                    </p>
</div>

<div className="lg:col-span-6 flex justify-start lg:justify-center mt-2 md:mt-0">
<div className="relative inline-block">
<h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold tracking-tight text-[#E8E4DC] group-hover:text-white transition-colors duration-500">
                            Architecture
                        </h2>

<span className="absolute -bottom-2 md:-bottom-4 left-0 w-0 h-[2px] md:h-1 bg-[#FE4A03] group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
</div>
</div>

<div className="lg:col-span-2 justify-end hidden lg:flex">
<i className="w-12 h-12 text-[#E8E4DC] opacity-30 group-hover:opacity-100 group-hover:translate-x-8 group-hover:text-[#FE4A03] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="group relative w-full border-b overflow-hidden cursor-pointer border-white/10">

<div className="absolute inset-0 z-0 pointer-events-none bg-[#0A0A0A] overflow-hidden">
<img alt="Interiors" className="w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-30 group-hover:scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&amp;q=80"/>

<div className="absolute inset-0 bg-[#0A0A0A] origin-right group-hover:scale-x-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
</div>

<div className="z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start lg:items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-4 relative">

<div className="lg:col-span-4 flex flex-col md:flex-row items-start gap-4 md:gap-8">
<div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border text-[#E8E4DC] font-medium text-base md:text-lg shrink-0 group-hover:bg-[#E8E4DC] group-hover:text-[#0A0A0A] transition-all duration-500 border-white/20">
                        2
                    </div>
<p className="text-lg md:text-2xl text-[#E8E4DC]/70 font-medium leading-relaxed group-hover:text-[#E8E4DC] transition-colors duration-500">
                        Curated material selection and bespoke detailing that elevates the internal experience, blending elegant form with intuitive daily function.
                    </p>
</div>

<div className="lg:col-span-6 flex justify-start lg:justify-center mt-2 md:mt-0">
<div className="relative inline-block">
<h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold tracking-tight text-[#E8E4DC] group-hover:text-white transition-colors duration-500">
                            Interiors
                        </h2>

<span className="absolute -bottom-2 md:-bottom-4 left-0 w-0 h-[2px] md:h-1 bg-[#FE4A03] group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
</div>
</div>

<div className="lg:col-span-2 justify-end hidden lg:flex">
<i className="w-12 h-12 text-[#E8E4DC] opacity-30 group-hover:opacity-100 group-hover:translate-x-8 group-hover:text-[#FE4A03] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="group relative w-full border-b overflow-hidden cursor-pointer border-white/10">

<div className="absolute inset-0 z-0 pointer-events-none bg-[#0A0A0A] overflow-hidden">
<img alt="Planning" className="w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-30 group-hover:scale-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&amp;q=80"/>

<div className="absolute inset-0 bg-[#0A0A0A] origin-right group-hover:scale-x-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
</div>

<div className="z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start lg:items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-4 relative">

<div className="lg:col-span-4 flex flex-col md:flex-row items-start gap-4 md:gap-8">
<div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border text-[#E8E4DC] font-medium text-base md:text-lg shrink-0 group-hover:bg-[#E8E4DC] group-hover:text-[#0A0A0A] transition-all duration-500 border-white/20">
                        3
                    </div>
<p className="text-lg md:text-2xl text-[#E8E4DC]/70 font-medium leading-relaxed group-hover:text-[#E8E4DC] transition-colors duration-500">
                        Strategic urban and site development that visualizes the larger context, connecting buildings, natural landscapes, and communities seamlessly.
                    </p>
</div>

<div className="lg:col-span-6 flex justify-start lg:justify-center mt-2 md:mt-0">
<div className="relative inline-block">
<h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl font-semibold tracking-tight text-[#E8E4DC] group-hover:text-white transition-colors duration-500">
                            Planning
                        </h2>

<span className="absolute -bottom-2 md:-bottom-4 left-0 w-0 h-[2px] md:h-1 bg-[#FE4A03] group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
</div>
</div>

<div className="lg:col-span-2 justify-end hidden lg:flex">
<i className="w-12 h-12 text-[#E8E4DC] opacity-30 group-hover:opacity-100 group-hover:translate-x-8 group-hover:text-[#FE4A03] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section><footer className="md:pt-32 md:px-12 z-[50] text-[#0A0A0A] bg-[#FAFAFA] w-full border-black/5 border-t pt-16 pr-6 pb-8 pl-6 relative" style={{backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
<div className="max-w-[100rem] mx-auto w-full">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-32">

<div className="flex flex-col justify-between">
<div className="flex flex-col gap-4 md:gap-5">
<a className="text-base font-semibold tracking-wide uppercase hover:text-[#FE4A03] transition-colors flex items-center group w-fit" href="#">
                        Studio
                        <i className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-base font-semibold tracking-wide uppercase hover:text-[#FE4A03] transition-colors flex items-center group w-fit" href="#">
                        Projects
                        <i className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-base font-semibold tracking-wide uppercase hover:text-[#FE4A03] transition-colors flex items-center group w-fit" href="#">
                        Team
                        <i className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-base font-semibold tracking-wide uppercase hover:text-[#FE4A03] transition-colors flex items-center group w-fit" href="#">
                        Insights
                        <i className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-base font-semibold tracking-wide uppercase hover:text-[#FE4A03] transition-colors flex items-center group w-fit" href="#">
                        Join Us
                        <i className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="text-base font-semibold tracking-wide uppercase hover:text-[#FE4A03] transition-colors flex items-center group w-fit" href="#">
                        Reach Out
                        <i className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="flex flex-col gap-3 mt-12 md:mt-16 text-[#666666]">
<a className="flex items-center gap-3 text-sm font-medium hover:text-[#0A0A0A] transition-colors group w-fit" href="#">
<i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="twitter" strokeWidth="1.5"></i>
                        Twitter
                    </a>
<a className="flex items-center gap-3 text-sm font-medium hover:text-[#0A0A0A] transition-colors group w-fit" href="#">
<i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="figma" strokeWidth="1.5"></i>
                        Figma
                    </a>
<a className="flex items-center gap-3 text-sm font-medium hover:text-[#0A0A0A] transition-colors group w-fit" href="#">
<i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="github" strokeWidth="1.5"></i>
                        GitHub
                    </a>
</div>
</div>

<div className="flex flex-col gap-8 md:gap-12 text-sm text-[#666666] leading-relaxed">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        London
                    </div>
<p className="">100 Liverpool St</p>
<p className="">Floor 2</p>
<p>London, EC2M 2AT</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +44 20 7946 0958
                    </p>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Paris
                    </div>
<p className="">15 Rue de la Paix</p>
<p className="">2nd Floor</p>
<p className="">75002 Paris, France</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +33 1 42 68 53 00
                    </p>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Tokyo
                    </div>
<p className="">1-1-2 Oshiage</p>
<p className="">Sumida City</p>
<p className="">Tokyo 131-8634</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +81 3-5320-1111
                    </p>
</div>
</div>

<div className="flex flex-col gap-8 md:gap-12 text-sm text-[#666666] leading-relaxed">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Berlin
                    </div>
<p className="">Alexanderplatz 1</p>
<p className="">Mitte</p>
<p>10178 Berlin, Germany</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +49 30 1234567
                    </p>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Sydney
                    </div>
<p>100 Harris St</p>
<p className="">Pyrmont</p>
<p>NSW 2009, Australia</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +61 2 9374 4000
                    </p>
</div>
</div>

<div className="flex flex-col gap-8 md:gap-12 text-sm text-[#666666] leading-relaxed">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Toronto
                    </div>
<p>100 King St W</p>
<p>Financial District</p>
<p>Toronto, ON M5X 1A9</p>
<p>Canada</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +1 416-362-2345
                    </p>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 text-[#0A0A0A] font-semibold mb-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Singapore
                    </div>
<p className="">10 Bayfront Ave</p>
<p className="">Marina Bay</p>
<p className="">Singapore 018956</p>
<p className="mt-2 flex items-center gap-2 font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer w-fit">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                        +65 6688 8888
                    </p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 border-t border-black/10 pt-10 pb-4">
<div className="flex items-center gap-3 text-[10px] md:text-xs text-[#666666] uppercase tracking-[0.2em] font-medium hover:text-[#0A0A0A] transition-colors cursor-pointer group">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-black/20 text-[#0A0A0A] group-hover:border-[#0A0A0A] transition-colors bg-white shadow-sm shrink-0">
<i className="w-3.5 h-3.5" data-lucide="link" strokeWidth="1.5"></i>
</div>
<span className="">Digital Product | Designed by Kunal Lonare</span>
</div>
<div className="md:text-9xl lg:text-[10rem] leading-[0.8] select-none uppercase text-7xl font-light text-[#0A0A0A] tracking-tighter ml-[-0.05em] mt-4 md:mt-0">VOID</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
