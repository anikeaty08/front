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
      

<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-[#Fdfdfb]">
<div className="text-xs uppercase tracking-widest font-light">
            ( Drafio © )
        </div>
<div className="flex gap-8 text-xs uppercase tracking-widest font-light">
<a className="hover:opacity-50 transition-opacity duration-300" href="#work">Index</a>
<a className="hover:opacity-50 transition-opacity duration-300" href="#about">Studio</a>
<a className="hover:opacity-50 transition-opacity duration-300" href="#contact">Contact</a>
</div>
</nav>

<header className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">

<div className="opacity-0 animate-fade-up flex flex-col items-center justify-center mb-12 relative">

<div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[1px] border-zinc-900 flex items-center justify-center">

<div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-[1px] border-zinc-900 flex items-center justify-center">

<span className="font-['Playfair_Display'] text-3xl md:text-5xl tracking-tighter text-zinc-900">
                        DD
                    </span>
</div>
</div>
</div>

<h1 className="opacity-0 animate-fade-up delay-200 text-center max-w-2xl mx-auto">
<span className="block font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-normal text-zinc-900">
                Drafting the Future <br/> <span className="italic text-zinc-500 font-light">of Digital.</span>
</span>
</h1>
<div className="opacity-0 animate-fade-up delay-500 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
<span className="iconify text-zinc-400" data-height="16" data-icon="lucide:arrow-down" data-width="16"></span>
</div>
</header>

<section className="px-6 py-24 md:px-12 md:py-40 bg-[#Fdfdfb]" id="work">
<div className="flex justify-between items-end mb-24 border-b border-zinc-200 pb-6">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl tracking-tight text-zinc-900">Selected Works</h2>
<span className="text-xs uppercase tracking-widest text-zinc-500 hidden md:block">2023 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full">

<div className="group cursor-pointer md:mt-0">
<div className="w-full aspect-[3/4] overflow-hidden bg-zinc-100 relative">
<img alt="Interior Design Website" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-6">
<div>
<h3 className="font-['Playfair_Display'] text-2xl italic tracking-tight text-zinc-900 group-hover:pl-4 transition-all duration-500">Maison Arch.</h3>
<p className="text-xs text-zinc-500 mt-1 font-light tracking-wide uppercase">Art Direction / Web Design</p>
</div>
<span className="iconify opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="group cursor-pointer md:mt-32">
<div className="w-full aspect-square overflow-hidden bg-zinc-100 relative">
<img alt="Fashion Portfolio" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-6">
<div>
<h3 className="font-['Playfair_Display'] text-2xl italic tracking-tight text-zinc-900 group-hover:pl-4 transition-all duration-500">Vogue Collective</h3>
<p className="text-xs text-zinc-500 mt-1 font-light tracking-wide uppercase">Brand Identity / Development</p>
</div>
<span className="iconify opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] overflow-hidden bg-zinc-100 relative">
<img alt="Minimalist Store" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-6">
<div>
<h3 className="font-['Playfair_Display'] text-2xl italic tracking-tight text-zinc-900 group-hover:pl-4 transition-all duration-500">Aesop Redesign</h3>
<p className="text-xs text-zinc-500 mt-1 font-light tracking-wide uppercase">E-Commerce / UI/UX</p>
</div>
<span className="iconify opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="w-full aspect-[3/4] overflow-hidden bg-zinc-100 relative">
<img alt="Furniture Design" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-6">
<div>
<h3 className="font-['Playfair_Display'] text-2xl italic tracking-tight text-zinc-900 group-hover:pl-4 transition-all duration-500">Studio Mono</h3>
<p className="text-xs text-zinc-500 mt-1 font-light tracking-wide uppercase">Strategy / Web Design</p>
</div>
<span className="iconify opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 md:py-32 bg-[#Fdfdfb] border-t border-zinc-200">
<div className="max-w-5xl mx-auto">
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl tracking-tight text-zinc-900 mb-20 text-center">Services &amp; Expertise</h2>
<div className="flex flex-col">

<div className="group py-10 border-t border-zinc-300 flex flex-col md:flex-row justify-between items-baseline hover:bg-zinc-100 transition-colors duration-500 px-4">
<span className="text-xs text-zinc-400 font-mono mb-4 md:mb-0">01</span>
<h3 className="font-['Playfair_Display'] text-2xl md:text-4xl text-zinc-900 w-full md:w-1/2">Art Direction</h3>
<p className="text-sm font-light text-zinc-500 w-full md:w-1/3 leading-relaxed">Defining the visual language and aesthetic tone for luxury brands in the digital space.</p>
</div>

<div className="group py-10 border-t border-zinc-300 flex flex-col md:flex-row justify-between items-baseline hover:bg-zinc-100 transition-colors duration-500 px-4">
<span className="text-xs text-zinc-400 font-mono mb-4 md:mb-0">02</span>
<h3 className="font-['Playfair_Display'] text-2xl md:text-4xl text-zinc-900 w-full md:w-1/2">Interface Design</h3>
<p className="text-sm font-light text-zinc-500 w-full md:w-1/3 leading-relaxed">Crafting intuitive, pixel-perfect user interfaces that prioritize whitespace and typography.</p>
</div>

<div className="group py-10 border-t border-b border-zinc-300 flex flex-col md:flex-row justify-between items-baseline hover:bg-zinc-100 transition-colors duration-500 px-4">
<span className="text-xs text-zinc-400 font-mono mb-4 md:mb-0">03</span>
<h3 className="font-['Playfair_Display'] text-2xl md:text-4xl text-zinc-900 w-full md:w-1/2">Development</h3>
<p className="text-sm font-light text-zinc-500 w-full md:w-1/3 leading-relaxed">Bespoke frontend engineering focusing on performance, interaction, and fluid motion.</p>
</div>
</div>
</div>
</section>

<footer className="px-6 py-24 md:px-12 md:py-32 bg-[#Fdfdfb] min-h-[70vh] flex flex-col justify-between" id="contact">
<div className="flex flex-col items-center justify-center flex-grow">
<p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">Have a project in mind?</p>
<a className="group relative block overflow-hidden" href="mailto:hello@drafio.com">
<span className="block font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl text-zinc-900 tracking-tighter group-hover:-translate-y-full transition-transform duration-700 ease-in-out">
                    Let's Talk
                </span>
<span className="absolute top-0 left-0 block font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl text-zinc-900 italic tracking-tighter translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                    Let's Talk
                </span>
</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-200 pt-8 mt-12">
<div className="mb-6 md:mb-0">
<div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center mb-4">
<span className="font-['Playfair_Display'] text-lg">D</span>
</div>
<p className="text-xs text-zinc-400 font-light max-w-[200px]">
                    Award-winning digital craftsmanship for the modern era.
                </p>
</div>
<div className="flex gap-12 text-xs uppercase tracking-widest text-zinc-900 font-light">
<div className="flex flex-col gap-2">
<span className="text-zinc-400">Socials</span>
<a className="hover:underline decoration-zinc-300 underline-offset-4" href="#">Instagram</a>
<a className="hover:underline decoration-zinc-300 underline-offset-4" href="#">LinkedIn</a>
<a className="hover:underline decoration-zinc-300 underline-offset-4" href="#">Awwwards</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-zinc-400">Legal</span>
<a className="hover:underline decoration-zinc-300 underline-offset-4" href="#">Privacy</a>
<a className="hover:underline decoration-zinc-300 underline-offset-4" href="#">Impressum</a>
</div>
</div>
<div className="w-full md:w-auto mt-8 md:mt-0 text-right md:text-right">
<p className="text-[10px] text-zinc-300 uppercase tracking-widest">© 2024 Drafio Design. All Rights Reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
