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
      

<div className="fixed inset-0 bg-noise opacity-30 pointer-events-none z-50"></div>
<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference text-white flex justify-between items-start pointer-events-none">
<div className="pointer-events-auto group cursor-pointer">
<div className="font-display font-medium text-xl tracking-tight leading-none group-hover:italic transition-all">STUDIO®</div>
<div className="font-mono text-xs opacity-50 mt-1">EST. 2024</div>
</div>
<div className="pointer-events-auto flex flex-col items-end gap-1">
<button className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 flex items-center gap-2">
<span>Menu</span>
<i className="w-4 h-4" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">

<section className="min-h-[85vh] px-4 md:px-8 relative flex flex-col justify-between mb-20">

<div className="grid grid-cols-12 gap-4 h-full">

<div className="col-span-12 md:col-span-9 relative z-20 pt-10">
<h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter mix-blend-overlay opacity-50 font-display select-none">
                        DIGITAL
                    </h1>
<div className="relative ml-2 md:ml-20">
<span className="absolute -top-6 -left-6 md:-left-12 font-mono text-xs text-indigo-400 border border-indigo-500/30 px-2 py-1 rounded bg-indigo-950/30 backdrop-blur-sm">FIG. 01 — IDENTITY</span>
<h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter font-serif italic text-white z-10 relative">
                            Reality
                        </h1>
</div>
<h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter font-display text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600 text-right md:text-left md:ml-40">
                        BENDER
                    </h1>
</div>

<div className="hidden md:flex col-span-3 flex-col justify-between items-end text-right border-l border-white/5 pl-8 py-4">
<div className="space-y-6">
<div className="group cursor-pointer">
<h3 className="font-mono text-xs text-neutral-500 mb-1">CURRENT STATUS</h3>
<div className="flex items-center justify-end gap-2 text-sm text-green-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                                Available for Hire
                            </div>
</div>
<div>
<h3 className="font-mono text-xs text-neutral-500 mb-1">LOCAL TIME</h3>
<p className="text-sm font-display">14:02 PM <span className="text-neutral-600">GMT+1</span></p>
</div>
</div>
<div className="animate-spin-slow">
<i className="w-16 h-16 text-neutral-800" data-lucide="asterisk" strokeWidth="1"></i>
</div>
</div>
</div>

<div className="absolute top-1/4 right-[5%] md:right-[20%] w-48 h-64 md:w-72 md:h-96 z-10 pointer-events-none mix-blend-lighten opacity-80">
<img alt="Abstract" className="w-full h-full object-cover rounded-sm grayscale contrast-125 brightness-75 rotate-3" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-0 left-8 hidden md:flex items-center gap-4">
<div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
<span className="text-vertical font-mono text-xs tracking-widest text-neutral-500 uppercase">Scroll to explore</span>
</div>
</section>

<section className="border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden py-4 mb-32">
<div className="flex whitespace-nowrap animate-marquee">
<span className="text-4xl md:text-6xl font-display font-medium text-neutral-800 px-8">UI/UX DESIGN</span>
<span className="text-4xl md:text-6xl font-serif italic text-neutral-600 px-8">Creative Direction</span>
<span className="text-4xl md:text-6xl font-display font-medium text-neutral-800 px-8">INTERACTION</span>
<span className="text-4xl md:text-6xl font-serif italic text-neutral-600 px-8">Brand Strategy</span>
<span className="text-4xl md:text-6xl font-display font-medium text-neutral-800 px-8">DEVELOPMENT</span>
<span className="text-4xl md:text-6xl font-serif italic text-neutral-600 px-8">Motion</span>

<span className="text-4xl md:text-6xl font-display font-medium text-neutral-800 px-8">UI/UX DESIGN</span>
<span className="text-4xl md:text-6xl font-serif italic text-neutral-600 px-8">Creative Direction</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex justify-between items-end mb-12 px-2">
<h2 className="font-display text-4xl leading-tight">Selected<br/><span className="text-neutral-600">Works (19-24)</span></h2>
<div className="hidden md:block text-right">
<p className="font-mono text-xs text-neutral-500 max-w-[200px]">CURATED SELECTION OF DEPLOYED PROJECTS AND EXPERIMENTS</p>
</div>
</div>

<div className="group relative border-t border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-12 py-12 items-center relative z-10 px-4">
<div className="col-span-2 md:col-span-1 font-mono text-xs text-neutral-500">01</div>
<div className="col-span-10 md:col-span-5">
<h3 className="text-3xl md:text-5xl font-serif italic text-neutral-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Chromatika</h3>
</div>
<div className="col-span-12 md:col-span-4 mt-4 md:mt-0 font-display text-sm text-neutral-500 uppercase tracking-wide group-hover:text-neutral-300 transition-colors">
                        WebGL / Audio Reactive / Art Direction
                    </div>
<div className="hidden md:flex col-span-2 justify-end">
<i className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" data-lucide="arrow-right" strokeWidth="1"></i>
</div>
</div>

<div className="absolute inset-y-0 right-[20%] w-[300px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block z-0 overflow-hidden mix-blend-screen">
<img alt="Preview" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group relative border-t border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-12 py-12 items-center relative z-10 px-4">
<div className="col-span-2 md:col-span-1 font-mono text-xs text-neutral-500">02</div>
<div className="col-span-10 md:col-span-5">
<h3 className="text-3xl md:text-5xl font-serif italic text-neutral-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Vortex Finance</h3>
</div>
<div className="col-span-12 md:col-span-4 mt-4 md:mt-0 font-display text-sm text-neutral-500 uppercase tracking-wide group-hover:text-neutral-300 transition-colors">
                        Fintech / Dashboard / React
                    </div>
<div className="hidden md:flex col-span-2 justify-end">
<i className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" data-lucide="arrow-right" strokeWidth="1"></i>
</div>
</div>
<div className="absolute inset-y-0 right-[20%] w-[300px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block z-0 overflow-hidden mix-blend-screen">
<img alt="Preview" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group relative border-t border-b border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-12 py-12 items-center relative z-10 px-4">
<div className="col-span-2 md:col-span-1 font-mono text-xs text-neutral-500">03</div>
<div className="col-span-10 md:col-span-5">
<h3 className="text-3xl md:text-5xl font-serif italic text-neutral-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Mono Architecture</h3>
</div>
<div className="col-span-12 md:col-span-4 mt-4 md:mt-0 font-display text-sm text-neutral-500 uppercase tracking-wide group-hover:text-neutral-300 transition-colors">
                        Editorial / Layout / Typography
                    </div>
<div className="hidden md:flex col-span-2 justify-end">
<i className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" data-lucide="arrow-right" strokeWidth="1"></i>
</div>
</div>
<div className="absolute inset-y-0 right-[20%] w-[300px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block z-0 overflow-hidden mix-blend-screen">
<img alt="Preview" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-8 flex justify-center">
<button className="border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300">
                    View Archive
                </button>
</div>
</section>

<section className="px-4 md:px-8 mb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 md:row-span-2 rounded-2xl border border-white/10 bg-neutral-900/40 p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<i className="w-10 h-10 text-white mb-6" data-lucide="layers" strokeWidth="1"></i>
<h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Holistic Systems</h3>
<p className="text-neutral-400 max-w-md font-light text-lg">We don't just build websites; we construct digital ecosystems that scale. From design systems to component libraries.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-neutral-400">React</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-neutral-400">Figma</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-neutral-400">Tailwind</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<i className="w-8 h-8 text-yellow-200/80" data-lucide="zap" strokeWidth="1.5"></i>
<div>
<h4 className="text-xl font-display text-white mb-2">Performance First</h4>
<p className="text-sm text-neutral-500">100/100 Lighthouse scores. Optimized for every interaction.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/40 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h4 className="text-2xl font-serif italic text-white">Visual Storytelling</h4>
</div>
</div>
</div>
</section>

<footer className="relative px-6 pt-20 pb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 mb-8 border border-white/10 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-mono tracking-widest text-neutral-300">OPEN FOR COLLABORATION</span>
</div>
<h2 className="text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.8] font-display font-medium tracking-tighter text-white mb-12 hover:text-indigo-500 transition-colors duration-700 cursor-pointer group">
                    LET'S TALK
                    <i className="inline-block w-12 h-12 md:w-24 md:h-24 text-neutral-700 group-hover:text-white transition-all duration-500 mb-4 md:mb-12" data-lucide="arrow-up-right" strokeWidth="2"></i>
</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left border-t border-white/10 pt-12">
<div className="md:col-span-2">
<p className="text-neutral-500 text-lg font-light max-w-sm">
                            Creating the future of digital interaction, one pixel at a time. Based in the internet, working worldwide.
                        </p>
</div>
<div>
<h4 className="font-mono text-xs text-neutral-600 mb-4">SOCIALS</h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white hover:underline decoration-indigo-500 underline-offset-4" href="#">Twitter / X</a></li>
<li><a className="hover:text-white hover:underline decoration-indigo-500 underline-offset-4" href="#">LinkedIn</a></li>
<li><a className="hover:text-white hover:underline decoration-indigo-500 underline-offset-4" href="#">Instagram</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-neutral-600 mb-4">LEGAL</h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#">Impressum</a></li>
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li className="text-neutral-600 pt-4">© 2024</li>
</ul>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
