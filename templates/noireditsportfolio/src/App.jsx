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
      

<nav className="fixed top-0 w-full z-50 border-b border-orange-800/50 bg-orange-950/90 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="hover:text-white transition-colors text-4xl font-normal text-orange-100 tracking-tighter" href="#">Noir Edits </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-orange-400">
<a className="hover:text-orange-100 transition-colors" href="#work">
            Work
          </a>
<a className="hover:text-orange-100 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-orange-100 transition-colors" href="#stack">
            Stack
          </a>
</div>
<a className="group flex items-center gap-2 text-sm font-normal text-orange-100 bg-orange-900 border border-orange-700/50 px-4 py-2 rounded-full hover:bg-orange-800 hover:border-orange-600 transition-all" href="mailto:hello@example.com">
<span>Contact</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<main className="max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">

<section className="mb-24 relative">

<div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-10 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative animate-fade-in opacity-0">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-900 to-orange-900/50 border border-orange-700/50 text-xs font-medium text-orange-300 mb-6 shadow-lg shadow-orange-950/50">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Available for new projects
          </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal text-white tracking-tighter font-poppins mb-6">Cinematic edits that feel, not just look good.<br className="hidden md:block"/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500">
              products with purpose.
            </span></h1>
<p className="leading-relaxed text-lg text-orange-500 font-poppins max-w-xl mb-8">Noir Edits is a cinematic video editing brand focused on reels, shorts, and storytelling edits that capture attention and emotion.</p>
<div className="flex flex-wrap gap-4">
<a className="group inline-flex items-center gap-2 animate-cta-float hover:translate-y-[-1px] transition-transform text-base font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md" href="#work">
<span className="animate-cta-pulse">View Portfolio</span>
<svg className="size-4 transition-transform group-hover:translate-x-0.5" fill="none" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
<span className="absolute inset-0 animate-shimmer"></span>
</span>
</a>
</div>
</div>
</section>

<section className="animate-fade-in delay-100 opacity-0 mb-24" id="work">
<h2 className="uppercase text-2xl font-normal text-orange-400 tracking-[0.2em] font-manrope mb-8">Featured work </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative bg-gradient-to-br from-orange-900/60 to-orange-900/30 border border-orange-800/80 rounded-2xl overflow-hidden hover:border-orange-700 transition-all duration-300 shadow-xl shadow-orange-950/50">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="md:col-span-1 bg-gradient-to-br from-orange-900/60 to-orange-900/30 border border-orange-800/80 rounded-2xl p-8 flex flex-col justify-between hover:border-orange-700 transition-colors shadow-xl shadow-orange-950/50">
<div className="">
<h3 className="text-2xl font-normal text-orange-100 tracking-tight font-merriweather mb-2">
                About Me
              </h3><div className="w-16 h-16 bg-gradient-to-br from-orange-700 to-orange-800 rounded-full mb-6 overflow-hidden border-2 border-orange-600/50 shadow-lg">
<svg className="w-full h-full text-neutral-600 fill-current" viewbox="0 0 100 100">
<rect fill="#262626" height="100" width="100"></rect>
<circle cx="50" cy="40" opacity="0.5" r="20"></circle>
<path d="M10 100 Q 50 50 90 100" opacity="0.5"></path>
</svg>
</div>
<p className="leading-relaxed text-lg text-orange-400 font-poppins">I’m Noir Edits, a video editor specializing in cinematic and short-form content. I focus on emotion, pacing, and clean visuals to create edits that truly connect with viewers.</p>
</div><div className="mt-8">
<a className="relative h-12 overflow-hidden transition-all duration-500 group inline-flex rounded-lg pr-8 pl-8 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 cursor-pointer" href="#" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>
<div className="relative flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
</div>
<style>
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
      50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.2); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes text-glow {
      0%, 100% { filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.4)); }
      50% { filter: drop-shadow(0 0 16px rgba(99, 102, 241, 0.6)); }
    }
    @keyframes arrow-pulse {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(2px); }
    }
    #aura-emf54cqzx:active {
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }
    #aura-emf54cqzx:hover {
      animation-play-state: paused;
    }
  </style>
</a>
</div>
</div>


<div className="md:col-span-2 bg-gradient-to-br from-orange-900/60 to-orange-900/30 border border-orange-800/80 rounded-2xl p-8 hover:border-orange-700 transition-colors shadow-xl shadow-orange-950/50" id="stack">
<h3 className="text-4xl font-semibold text-orange-100 tracking-tight font-montserrat mb-6">What I use </h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex gap-3 hover:border-orange-700/50 transition-colors bg-orange-900/80 border-orange-800/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-semibold text-orange-300 font-poppins">Capcut </span>
</div>
<div className="flex gap-3 hover:border-orange-700/50 transition-colors bg-orange-900/80 border-orange-800/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-semibold text-orange-300 font-poppins">Pinterest </span>
</div>
<div className="flex gap-3 hover:border-orange-700/50 transition-colors bg-orange-900/80 border-orange-800/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-semibold text-orange-300 font-poppins">Alight Motion </span>
</div>
<div className="flex gap-3 hover:border-orange-700/50 transition-colors bg-orange-900/80 border-orange-800/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-semibold text-orange-300 font-poppins">Eleven Labs </span>
</div>
<div className="flex gap-3 hover:border-orange-700/50 transition-colors bg-orange-900/80 border-orange-800/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
<span className="text-sm font-semibold text-orange-300 font-poppins">Pixabay </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl animate-fade-in delay-200 opacity-0 mb-24">
<div className="space-y-6">


</div>
</section>

<footer className="animate-fade-in delay-300 opacity-0 border-orange-800/50 border-t pt-12">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="text-center md:text-left">
<span className="block text-3xl font-normal text-orange-100 tracking-tighter font-manrope">Noir Edits </span>
<span className="text-sm italic text-orange-500 font-poppins">Edits filled with precision </span>
</div>
<div className="flex gap-6">
<a className="text-orange-500 hover:text-orange-200 transition-colors" href="#">
</a>
<a className="text-orange-500 hover:text-orange-200 transition-colors" href="#">
</a>
<a className="text-orange-500 hover:text-orange-200 transition-colors" href="#">
</a>
</div>
</div><div className="text-xs text-orange-600 tracking-wide text-center mt-12">© 2025 Noir edits  — All rights reserved.</div>
</footer>
</main>

    </>
  );
}
