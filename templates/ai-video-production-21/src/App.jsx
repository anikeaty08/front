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



    lucide.createIcons();
    document.getElementById("year").textContent = new Date().getFullYear();

    const menuBtn = document.getElementById("menuBtn");
    // Simple toggle logic since no nav drawer is explicitly built in this single block (kept simple)
    menuBtn.addEventListener("click", () => {
        alert("Mobile menu would open here");
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
      

<header className="fixed top-0 left-0 right-0 z-50">
<nav className="mx-auto flex items-center justify-between border-b border-white/5 bg-black/60 px-6 py-4 backdrop-blur-md lg:px-12 animate-fade-in">

<a className="flex items-center gap-2 text-lg font-semibold tracking-tight font-sans animate-slide-in-left delay-100" href="#">
<div className="h-6 w-6 rounded bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white text-[10px]">
<svg className="lucide lucide-aperture" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
        Lumina
      </a>

<ul className="hidden items-center gap-8 text-sm font-medium text-gray-400 lg:flex animate-fade-in delay-200">
<li><a className="transition-colors hover:text-white font-sans" href="#work">Work</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#services">Services</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#studio">Studio</a></li>
<li><a className="transition-colors hover:text-white font-sans" href="#">Pricing</a></li>
</ul>

<div className="flex items-center gap-4 animate-slide-in-left delay-300">
<button className="hidden items-center gap-2 text-sm font-medium text-gray-400 hover:text-white lg:flex transition-colors">
          Log in
        </button>
<button className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium transition hover:border-violet-400 hover:bg-white/10 hover:text-white lg:flex font-sans">
          Book Demo
        </button>

<button className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 lg:hidden text-gray-400" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>
</button>
</div>
</nav>
</header>

<section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-32 pb-16" id="hero">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

<div className="absolute inset-0 z-[1] bg-noise mix-blend-overlay"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

<div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-5xl text-center px-6 z-10 relative">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-violet-300 backdrop-blur-sm mb-8 animate-fade-in-up delay-300 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            Generative Video Engine v3.0
        </div>
<h1 className="leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl text-5xl tracking-tight font-instrument-serif font-normal animate-blur-in delay-400 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent pb-4 drop-shadow-2xl">
        Cinematic video<br/>
        at the speed of AI.
      </h1>
<p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg font-sans leading-relaxed animate-fade-in-up delay-600 mix-blend-plus-lighter">
        Create broadcast-quality commercials, music videos, and social content without cameras. From script to final render in minutes, not months.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-800">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200 font-sans shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            Start Creating
            <svg className="lucide lucide-play-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium transition hover:bg-white/10 font-sans backdrop-blur-sm">
            View Showreel
        </button>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 relative z-10 bg-black" id="work">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-instrument-serif font-normal">Featured Productions</h2>
<p className="mt-2 text-gray-400 text-sm">Generated entirely with Lumina Engine</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" href="#">
                View all projects <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="play-btn-group group relative md:col-span-2 overflow-hidden rounded-2xl bg-gray-900 border border-white/10 cursor-pointer">
<img alt="Abstract Sci-Fi" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-overlay absolute inset-0 bg-black/30 transition-opacity duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="play-icon h-16 w-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 text-white">
<svg fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<div className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-wider">Campaign</div>
<h3 className="text-xl font-medium text-white font-instrument-serif">Neon Horizons: Cyberpunk 2099</h3>
</div>
</div>

<div className="play-btn-group group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 cursor-pointer">
<img alt="Automotive" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1533241243577-71e6545d944d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="bg-overlay absolute inset-0 bg-black/30 transition-opacity duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="play-icon h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 text-white">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<div className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-wider">Commercial</div>
<h3 className="text-lg font-medium text-white font-instrument-serif">Velocita EV Launch</h3>
</div>
</div>

<div className="play-btn-group group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 cursor-pointer">
<img alt="Fashion" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1515405295579-ba7b454989ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="bg-overlay absolute inset-0 bg-black/30 transition-opacity duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="play-icon h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 text-white">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<div className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-wider">Fashion</div>
<h3 className="text-lg font-medium text-white font-instrument-serif">Vogue Editorial</h3>
</div>
</div>

<div className="play-btn-group group relative md:col-span-2 overflow-hidden rounded-2xl bg-gray-900 border border-white/10 cursor-pointer">
<img alt="Nature Documentary" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-overlay absolute inset-0 bg-black/30 transition-opacity duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="play-icon h-16 w-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 text-white">
<svg fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<div className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-wider">Documentary</div>
<h3 className="text-xl font-medium text-white font-instrument-serif">Earth: Reborn</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white/[0.02] border-y border-white/5 relative z-10">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-instrument-serif tracking-tight mb-3">Unlimited Visual Styles</h2>
<p className="text-sm text-gray-500">Train custom LoRAs or choose from our curated presets.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-800">
<img className="h-full w-full object-cover transition duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=600"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-semibold text-white">3D Render</span>
</div>
</div>
<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-800">
<img className="h-full w-full object-cover transition duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=600"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-semibold text-white">Anime / 2D</span>
</div>
</div>
<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-800">
<img className="h-full w-full object-cover transition duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=600"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-semibold text-white">Analog Film</span>
</div>
</div>
<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-800">
<img className="h-full w-full object-cover transition duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620021666928-858a7f455320?q=80&amp;w=600"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-semibold text-white">Hyperrealism</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-black" id="services">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-20">
<h2 className="text-3xl sm:text-4xl tracking-tight font-instrument-serif font-normal">A complete production studio in the cloud</h2>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500/30">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 mb-6 text-violet-300">
<svg className="lucide lucide-film" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</div>
<h3 className="relative z-10 text-lg font-medium font-sans mb-2">Script to Storyboard</h3>
<p className="relative z-10 text-sm text-gray-400 leading-relaxed">Paste your script and our LLM agents break it down into scenes, camera angles, and lighting cues.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500/30">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 mb-6 text-violet-300">
<svg className="lucide lucide-wand-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="relative z-10 text-lg font-medium font-sans mb-2">Generative Rendering</h3>
<p className="relative z-10 text-sm text-gray-400 leading-relaxed">High-fidelity video generation at 4K resolution. Consistent characters and controlled camera movements.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500/30">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 mb-6 text-violet-300">
<svg className="lucide lucide-mic-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path><circle cx="17" cy="7" r="5"></circle></svg>
</div>
<h3 className="relative z-10 text-lg font-medium font-sans mb-2">Voice &amp; Lip Sync</h3>
<p className="relative z-10 text-sm text-gray-400 leading-relaxed">Ultra-realistic voice cloning with perfect lip synchronization for multilingual dubbing.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500/30">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 mb-6 text-violet-300">
<svg className="lucide lucide-scissors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" x2="8.12" y1="4" y2="15.88"></line><line x1="14.47" x2="20" y1="14.48" y2="20"></line><line x1="8.12" x2="12" y1="8.12" y2="12"></line></svg>
</div>
<h3 className="relative z-10 text-lg font-medium font-sans mb-2">AI Editor</h3>
<p className="relative z-10 text-sm text-gray-400 leading-relaxed">Automated color grading, pacing adjustment, and B-roll insertion based on audio beats.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500/30">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 mb-6 text-violet-300">
<svg className="lucide lucide-music" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<h3 className="relative z-10 text-lg font-medium font-sans mb-2">Adaptive Soundtrack</h3>
<p className="relative z-10 text-sm text-gray-400 leading-relaxed">Score your video with generative music that reacts dynamically to the visual intensity.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500/30">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10 mb-6 text-violet-300">
<svg className="lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<h3 className="relative z-10 text-lg font-medium font-sans mb-2">Compositing API</h3>
<p className="relative z-10 text-sm text-gray-400 leading-relaxed">Export layers, depth maps, and alpha channels for finishing in After Effects or Nuke.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black py-24 relative z-10">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
<div>
<h2 className="text-3xl tracking-tight font-instrument-serif font-normal text-white">Direct the AI with precision</h2>
<p className="mt-4 text-lg text-gray-400 font-sans">More than just text-to-video. Our node-based editor gives you granular control over camera movement, lighting, and character consistency.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
              Keyframeable camera paths
            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
              Real-time style transfer
            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
              Collaborative timeline editing
            </li>
</ul>
<button className="mt-8 text-sm font-medium text-violet-300 hover:text-violet-200 flex items-center gap-1 transition-colors">
            Try the Studio Editor <svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] p-1 shadow-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent pointer-events-none"></div>

<div className="flex items-center gap-2 border-b border-white/10 bg-black/50 px-4 py-3">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 text-[10px] text-gray-500 font-sans">Lumina Studio Pro</div>
</div>

<div className="flex gap-1 p-2 h-[320px]">

<div className="w-16 flex flex-col gap-3 items-center pt-2 border-r border-white/5">
<div className="h-8 w-8 rounded bg-violet-500/20 text-violet-300 flex items-center justify-center"><svg className="lucide lucide-video" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg></div>
<div className="h-8 w-8 rounded hover:bg-white/5 text-gray-500 flex items-center justify-center"><svg className="lucide lucide-image" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></div>
<div className="h-8 w-8 rounded hover:bg-white/5 text-gray-500 flex items-center justify-center"><svg className="lucide lucide-music" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
</div>

<div className="flex-1 flex flex-col gap-2">

<div className="bg-white/5 rounded p-3 border border-white/5">
<div className="text-[10px] text-gray-400 mb-1">PROMPT</div>
<div className="text-xs text-white font-sans">Cinematic wide shot of a futuristic neon city in rain, reflections on wet pavement, 8k, photorealistic, atmospheric lighting --ar 16:9</div>
</div>

<div className="flex-1 bg-black rounded relative overflow-hidden group-hover:ring-1 ring-violet-500/50 transition-all">
<img alt="Generated Video Frame" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg fill="white" height="16" stroke="none" viewbox="0 0 24 24" width="16"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>

<div className="absolute bottom-2 left-2 right-2 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 w-2/3"></div>
</div>
</div>
</div>

<div className="w-48 border-l border-white/5 p-3 hidden sm:block">
<div className="space-y-4">
<div>
<div className="text-[9px] text-gray-500 uppercase font-semibold mb-2">Aspect Ratio</div>
<div className="flex gap-1">
<div className="h-6 px-2 bg-violet-600 rounded text-[9px] flex items-center text-white">16:9</div>
<div className="h-6 px-2 bg-white/5 rounded text-[9px] flex items-center text-gray-400">9:16</div>
</div>
</div>
<div>
<div className="text-[9px] text-gray-500 uppercase font-semibold mb-2">Motion Scale</div>
<div className="h-1 bg-white/10 rounded-full w-full relative"><div className="absolute left-0 top-0 bottom-0 w-3/4 bg-violet-500 rounded-full"></div></div>
</div>
<div>
<div className="text-[9px] text-gray-500 uppercase font-semibold mb-2">Seed</div>
<div className="text-[10px] text-gray-400 font-mono bg-black/50 p-1 rounded">23948209</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-white/[0.02] py-20 relative z-10">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
<div>
<div className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl font-sans">10x</div>
<div className="mt-2 text-sm text-gray-500 uppercase tracking-wider font-medium">Faster Production</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl font-sans">4K</div>
<div className="mt-2 text-sm text-gray-500 uppercase tracking-wider font-medium">Resolution</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl font-sans">$0</div>
<div className="mt-2 text-sm text-gray-500 uppercase tracking-wider font-medium">Equipment Cost</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl font-sans">2M+</div>
<div className="mt-2 text-sm text-gray-500 uppercase tracking-wider font-medium">Frames Gen'd</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-black">
<div className="mx-auto max-w-5xl px-6">
<h2 className="text-3xl font-instrument-serif tracking-tight text-center mb-16">Traditional Studio vs. Lumina</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-clapperboard" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.5-1.1.5-2.6 1.7-3.1 1.1-.5 2.6.5 3.1 1.6l.6 1.6 3-5.1 1.6.6c1.1.5 1.9 2 1.4 3.1l-.6 1.6 3-5.1 1.6.6c1.1.5 1.9 2 1.4 3.1l-.6 1.6 3-5.1 1.6.6c1.1.5 1.9 2 1.4 3.1l-.6 1.6"></path></svg>
</div>
<h3 className="text-lg font-medium">Traditional Process</h3>
</div>
<ul className="space-y-4 text-sm text-gray-400">
<li className="flex justify-between border-b border-white/5 pb-2"><span>Script &amp; Storyboard</span> <span>2 Weeks</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>Hiring Crew &amp; Gear</span> <span>$15,000+</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>Filming / Production</span> <span>3 Days</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>Editing &amp; VFX</span> <span>2 Weeks</span></li>
<li className="flex justify-between pt-2 font-semibold text-white"><span>Total Time</span> <span>~5 Weeks</span></li>
</ul>
</div>

<div className="relative rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent p-6">
<div className="absolute -top-3 -right-3">
<div className="bg-violet-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New Standard</div>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center text-white">
<svg className="lucide lucide-sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M7 5h4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white">Lumina Process</h3>
</div>
<ul className="space-y-4 text-sm text-gray-300">
<li className="flex justify-between border-b border-white/5 pb-2"><span>AI Script Generation</span> <span>5 Mins</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>Production Cost</span> <span>$29/mo</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>AI Rendering</span> <span>10 Mins</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>Auto-Edit</span> <span>Instant</span></li>
<li className="flex justify-between pt-2 font-bold text-violet-300"><span>Total Time</span> <span>&lt; 1 Hour</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative z-10">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-16 text-center text-3xl tracking-tight font-instrument-serif font-normal">Trusted by visionary creators</h2>
<div className="grid gap-6 md:grid-cols-3">

<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="mb-4 flex gap-1 text-violet-400">
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-gray-300">"We generated our entire Q4 marketing campaign using Lumina. The cinematic quality is indistinguishable from traditional footage."</p>
<div className="mt-6 flex items-center gap-3">
<img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs font-semibold text-white">Sarah Jenkins</div>
<div className="text-xs text-gray-500">Creative Director, Apex</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="mb-4 flex gap-1 text-violet-400">
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-gray-300">"The control over camera movement and lighting is unprecedented. It's like having a Hollywood set on your laptop."</p>
<div className="mt-6 flex items-center gap-3">
<img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs font-semibold text-white">David Chen</div>
<div className="text-xs text-gray-500">Filmmaker</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<div className="mb-4 flex gap-1 text-violet-400">
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="h-4 w-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-gray-300">"We reduced our music video production costs by 90% while actually increasing the visual fidelity."</p>
<div className="mt-6 flex items-center gap-3">
<img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs font-semibold text-white">Elena Rodriguez</div>
<div className="text-xs text-gray-500">Music Producer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-32 bg-black">

<div className="absolute inset-0 z-0 bg-violet-600/10 blur-3xl"></div>
<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-instrument-serif font-normal text-white mb-6">Ready to film the impossible?</h2>
<p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-sans">Join the new wave of directors using Lumina to tell stories without boundaries.</p>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105 font-sans">
            Start Free Trial
            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-12 relative z-10">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
<div className="lg:col-span-2">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tight font-sans text-white mb-4" href="#">
<div className="h-5 w-5 rounded bg-gradient-to-tr from-violet-600 to-indigo-500"></div>
                Lumina
            </a>
<p className="text-sm text-gray-500 font-sans max-w-xs">
                The AI-first video production platform for modern storytellers.
            </p>
</div>
<div>
<h3 className="mb-4 text-sm font-semibold text-white font-sans">Studio</h3>
<ul className="space-y-3 text-sm text-gray-500 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Showcase</a></li>
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h3 className="mb-4 text-sm font-semibold text-white font-sans">Resources</h3>
<ul className="space-y-3 text-sm text-gray-500 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h3 className="mb-4 text-sm font-semibold text-white font-sans">Legal</h3>
<ul className="space-y-3 text-sm text-gray-500 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Copyright</a></li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-gray-500 font-sans">
          © <span id="year">2025</span> Lumina Studio Inc.
        </div>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white" href="#"><svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-gray-500 hover:text-white" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-500 hover:text-white" href="#"><svg className="lucide lucide-youtube" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
