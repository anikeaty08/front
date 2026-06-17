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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed md:top-8 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] md:px-10 md:py-5 flex bg-[#F5F5F7]/30 max-w-7xl z-50 border-[#F5F5F7]/10 border pt-4 pr-6 pb-4 pl-6 top-4 left-1/2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg items-center justify-between">
<div className="md:text-2xl uppercase text-xl font-light text-[#F5F5F7] tracking-tighter font-newsreader opacity-100">YUM!</div>
<div className="hidden md:flex gap-16 uppercase text-xs font-light text-[#5A5A5A] tracking-[0.25em] font-montserrat gap-x-16 gap-y-16">
<a className="hover:text-[#0F0F0F] transition-colors duration-500 font-sans bg-slate-50" href="#">Vision</a>
<a className="hover:text-[#0F0F0F] transition-colors duration-500 font-sans bg-slate-50" href="#">Apertures</a>
<a className="hover:text-[#0F0F0F] transition-colors duration-500 font-sans bg-slate-50" href="#">Engineering</a>
</div>
<a className="uppercase border-b-[0.5px] hover:border-[#4B0082] transition-colors duration-300 text-xs font-light text-[#4B0082] tracking-[0.2em] font-sans border-[#4B0082]/40 pb-[2px]" href="#">
            Enquire
        </a>
</nav>

<header className="relative w-full h-screen flex flex-col justify-end pb-24 md:pb-40 px-6 md:px-16 lg:px-24">
<div className="absolute inset-0 z-0">

<img alt="Architectural glass at dusk" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl">
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-light text-[#F5F5F7] tracking-tight font-newsreader mb-8">
                The Art of Living<br/>
<span className="font-light text-[#D4AF37] tracking-tight font-newsreader">Without Boundaries</span>
</h1>
<div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-12">
<p className="text-sm md:text-base font-light max-w-md text-[#F5F5F7]/70 leading-relaxed font-sans">
                    Where structural elegance meets visual silence. Masterpieces of transparency designed to frame your world in cinematic perfection during the twilight hours.
                </p>
<button className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#0F0F0F] bg-[#D4AF37] px-8 py-5 hover:bg-[#F5F5F7] transition-all duration-500 w-fit font-sans">
                    Enter the Sanctuary
                    <iconify-icon className="text-lg transition-transform duration-500 group-hover:translate-x-2" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="py-32 md:py-48 lg:py-64 px-6 md:px-16 lg:px-24 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
<div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1 relative z-10">
<div className="w-12 h-px bg-[#D4AF37] mb-8"></div>
<h2 className="text-3xl md:text-5xl tracking-tight mb-10 leading-tight font-newsreader font-light">Visual <br/><span className="text-[#D4AF37] font-newsreader font-light">Silence.</span></h2>
<p className="text-sm font-light text-[#F5F5F7]/60 leading-loose mb-12 max-w-md font-sans">
                    We strip away the superfluous to reveal the essential. Our frameless installations are not merely windows; they are curated apertures that dissolve the delineation between interior warmth and the encroaching dusk. A testament to uncompromising minimalist architecture.
                </p>
<a className="inline-flex items-center gap-3 text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-light hover:text-[#F5F5F7] transition-colors duration-300 group font-sans" href="#">
                    Read the Manifesto 
                    <iconify-icon className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 relative">
<img alt="Minimalist interior meeting dusk exterior" className="w-full h-auto aspect-[3/4] object-cover opacity-90" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-12 -left-12 w-full h-full border border-[#D4AF37]/20 -z-10 hidden md:block"></div>
</div>
</div>
</section>

<section className="py-32 md:py-48 lg:py-64 bg-[#141414] px-6 md:px-16 lg:px-24">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-6xl tracking-tight mb-32 text-center font-newsreader font-light">Curated <span className="text-[#D4AF37] font-newsreader font-light">Apertures</span></h2>

<div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32 md:mb-48 items-end">
<div className="w-full md:w-5/12 group cursor-pointer">

<div className="relative overflow-hidden mb-8 bg-gradient-to-br from-[#7A7A7A] to-[#2A2A2A] w-full aspect-[4/5] flex items-center justify-center shadow-inner">

<div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
<div className="absolute inset-0 flex items-center justify-center gap-[6px] -skew-x-[20deg] rotate-[-10deg] scale-125 opacity-90">

<div className="w-10 h-[150%] bg-gradient-to-r from-white/20 to-transparent border-l border-white/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"></div>

<div className="w-6 h-[150%] bg-gradient-to-b from-[#87CEEB]/30 to-[#4A90E2]/40 backdrop-blur-sm border-l border-r border-[#87CEEB]/20"></div>

<div className="w-10 h-[150%] bg-gradient-to-r from-white/20 to-transparent border-l border-white/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"></div>

<div className="w-6 h-[150%] bg-gradient-to-b from-[#87CEEB]/30 to-[#4A90E2]/40 backdrop-blur-sm border-l border-r border-[#87CEEB]/20"></div>

<div className="w-10 h-[150%] bg-gradient-to-r from-white/20 to-transparent border-l border-white/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"></div>
</div>
</div>

<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex flex-col gap-8 md:gap-10 mt-12 md:mt-16 w-full">
<div className="flex items-center gap-3">
<div className="w-8 md:w-12 h-px bg-[#F5F5F7]"></div>
<span className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#F5F5F7] drop-shadow-md font-sans">Tempered Glass</span>
</div>
<div className="flex items-center gap-3 ml-12 md:ml-16">
<div className="w-8 md:w-12 h-px bg-[#F5F5F7]"></div>
<span className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#F5F5F7] drop-shadow-md font-sans">Low-E Coating</span>
</div>
<div className="flex items-center gap-3 ml-24 md:ml-32">
<div className="w-8 md:w-12 h-px bg-[#F5F5F7]"></div>
<span className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#F5F5F7] drop-shadow-md font-sans">Warm-Edge Spacer</span>
</div>
</div>
<div className="border-l border-[#F5F5F7] pl-3 pb-1">
<span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] uppercase text-[#F5F5F7] drop-shadow-md font-sans">High-Performance Engineering Core</span>
</div>
</div>
</div>
<div className="flex justify-between items-baseline border-b border-[#F5F5F7]/10 pb-4 group-hover:border-[#D4AF37]/50 transition-colors duration-500">
<span className="text-2xl md:text-3xl tracking-tight text-[#F5F5F7] font-newsreader font-light">Engineering Core</span>
<span className="text-xs font-light text-[#D4AF37] uppercase tracking-[0.2em] font-sans">01</span>
</div>
</div>
<div className="w-full md:w-7/12 md:-translate-y-32 group cursor-pointer">
<div className="overflow-hidden mb-8">
<img alt="Wide living space at dusk" className="w-full aspect-video md:aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-[#F5F5F7]/10 pb-4 group-hover:border-[#D4AF37]/50 transition-colors duration-500">
<span className="text-2xl md:text-3xl tracking-tight text-[#F5F5F7] font-newsreader font-light">Panorama Series</span>
<span className="text-xs font-light text-[#D4AF37] uppercase tracking-[0.2em] font-sans">02</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-start">
<div className="w-full md:w-1/2 group cursor-pointer">
<div className="overflow-hidden mb-8">
<img alt="An extreme close-up, macro photograph focusing on the heavy-duty, aircraft-grade aluminum track and roller mechanism of a sliding glass door system. The composition should be stark, focusing on the fine machining lines, the subtle 'brushed' texture of the metal, and the smooth, precise contact point where a clean, single pane of 12mm glass sits within the frame. Use soft, diffused white light to create a museum-quality, high-design artifact aesthetic. There should be zero 'background noise' in this photo." className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-[#F5F5F7]/10 pb-4 group-hover:border-[#D4AF37]/50 transition-colors duration-500">
<span className="text-2xl md:text-3xl tracking-tight text-[#F5F5F7] font-newsreader font-light">Kinetic Mechanism</span>
<span className="text-xs font-light text-[#D4AF37] uppercase tracking-[0.2em] font-sans">03</span>
</div>
</div>
<div className="w-full md:w-1/3 md:translate-y-40">
<p className="text-sm font-light text-[#F5F5F7]/60 leading-loose mb-16 font-sans">
                        Each pane is precision-engineered to vanish, leaving only the tableau of the outside world framed as living art. We do not build walls; we dissolve them into the ether of the landscape.
                    </p>
<button className="w-full flex justify-between items-center py-6 border-b border-[#F5F5F7]/20 hover:border-[#D4AF37] transition-colors duration-500 group">
<span className="text-xs uppercase tracking-[0.2em] font-light text-[#F5F5F7] font-sans">Explore the Gallery</span>
<iconify-icon className="text-xl text-[#D4AF37] transition-transform duration-500 group-hover:translate-x-3" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 lg:py-64 px-6 md:px-16 lg:px-24">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
<div className="">
<h2 className="text-3xl md:text-5xl tracking-tight mb-12 font-newsreader font-light">Structural <br/><span className="text-[#D4AF37] font-newsreader font-light">Elegance.</span></h2>
<p className="text-sm font-light text-[#F5F5F7]/60 leading-loose max-w-sm font-sans">
                    Beneath the illusion of nothingness lies an uncompromising foundation of precision engineering. Our thermal thresholds and kinetic tracks are recessed invisibly into the architecture.
                </p>
</div>
<div className="flex flex-col gap-10 lg:mt-24">

<div className="group border-t border-[#F5F5F7]/10 pt-8 flex justify-between items-start cursor-pointer hover:border-[#D4AF37]/50 transition-colors duration-500">
<div className="pr-8">
<h3 className="text-xs uppercase tracking-[0.2em] font-light text-[#D4AF37] mb-4 font-sans">Thermal Acoustics</h3>
<p className="text-sm font-light text-[#F5F5F7]/80 leading-relaxed transition-all duration-500 group-hover:text-[#F5F5F7] font-sans">
                            Triple-glazed hermetic seal with argon gas cavity, achieving industry-leading decibel reduction while maintaining absolute thermal neutrality.
                        </p>
</div>
<iconify-icon className="text-2xl text-[#F5F5F7]/30 group-hover:text-[#D4AF37] transition-colors duration-500 group-hover:rotate-90" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="group border-t border-[#F5F5F7]/10 pt-8 flex justify-between items-start cursor-pointer hover:border-[#D4AF37]/50 transition-colors duration-500">
<div className="pr-8">
<h3 className="text-xs uppercase tracking-[0.2em] font-light text-[#D4AF37] mb-4 font-sans">Kinetic Gliding</h3>
<p className="text-sm font-light text-[#F5F5F7]/80 leading-relaxed transition-all duration-500 group-hover:text-[#F5F5F7] font-sans">
                            Frictionless magnetic levitation tracks capable of supporting monumental panes up to 2000kg with the effortless motion of a single touch.
                        </p>
</div>
<iconify-icon className="text-2xl text-[#F5F5F7]/30 group-hover:text-[#D4AF37] transition-colors duration-500 group-hover:rotate-90" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="group border-t border-[#F5F5F7]/10 pt-8 flex justify-between items-start cursor-pointer hover:border-[#D4AF37]/50 transition-colors duration-500">
<div className="pr-8">
<h3 className="text-xs uppercase tracking-[0.2em] font-light text-[#D4AF37] mb-4 font-sans">Minimalist Profile</h3>
<p className="text-sm font-light text-[#F5F5F7]/80 leading-relaxed transition-all duration-500 group-hover:text-[#F5F5F7] font-sans">
                            Ultra-slim 18mm sightlines engineered from aerospace-grade anodized aluminum, completely recessed into floors, walls, and ceilings.
                        </p>
</div>
<iconify-icon className="text-2xl text-[#F5F5F7]/30 group-hover:text-[#D4AF37] transition-colors duration-500 group-hover:rotate-90" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="md:py-32 md:px-16 lg:px-24 bg-[#0A0A0A] border-[#F5F5F7]/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-24 lg:gap-16">
<div className="max-w-sm">
<div className="text-4xl font-light text-[#F5F5F7] tracking-tighter font-newsreader mb-8">MONU CHAT BHANDAR</div>
<p className="text-xs font-light text-[#F5F5F7]/40 leading-loose font-sans">
                    The pinnacle of structural glazing. Designing invisible boundaries for the world's most exclusive residences.
                </p>
</div>
<div className="flex flex-wrap gap-16 md:gap-32 text-xs font-light uppercase tracking-[0.2em]">
<div className="flex flex-col gap-6">
<span className="text-[#D4AF37] mb-2 font-medium font-sans">Studio</span>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Manifesto</a>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Apertures</a>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Engineering</a>
</div>
<div className="flex flex-col gap-6">
<span className="text-[#D4AF37] mb-2 font-medium font-sans">Connect</span>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Enquiries</a>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Press</a>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Journal</a>
</div>
<div className="flex flex-col gap-6">
<span className="text-[#D4AF37] mb-2 font-medium font-sans">Legal</span>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Privacy</a>
<a className="text-[#F5F5F7]/50 hover:text-[#F5F5F7] transition-colors duration-300 font-sans" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-[#F5F5F7]/5 flex justify-between items-center text-[#F5F5F7]/30 text-xs font-light tracking-wide">
<span className="font-sans">© 2024 Aura Architectural. All rights reserved.</span>
<span className="uppercase tracking-[0.2em] font-sans">Crafted in Silence</span>
</div>
</footer>

    </>
  );
}
