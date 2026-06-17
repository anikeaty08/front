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
      
<div className="noise-overlay"></div>
<div className="scanlines"></div>

<div className="fixed bottom-8 right-8 z-50 pointer-events-none text-zinc-600 hidden md:block">
<span className="osd-text text-[10px] uppercase">Tape Status: Ready</span>
</div>
<nav className="fixed flex w-full z-40 p-6 md:p-8 top-0 left-0 items-center justify-between">
<div className="vhs-click cursor-pointer font-bold tracking-tighter text-sm uppercase z-50 text-white">
            Shalev Maymoni
        </div>
<div className="hidden md:flex flex-row space-x-12 text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
<a className="vhs-click transition-colors duration-200 relative group hover:text-white" href="#work">Projects</a>
<a className="vhs-click transition-colors duration-200 relative group hover:text-white" href="#about">Vision</a>
<a className="vhs-click transition-colors duration-200 relative group hover:text-white" href="#contact">Contact</a>
</div>
<button className="md:hidden z-50 text-white vhs-click">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</nav>

<section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#080808]">
<div className="flex flex-col z-10 text-center w-full max-w-7xl mx-auto px-6 relative items-center">
<div className="space-y-6">
<h1 className="reveal-up delay-100 md:text-8xl lg:text-9xl leading-none vhs-click text-6xl font-bold text-white tracking-tighter uppercase">
                    Young Minds
                </h1>
<p className="reveal-up delay-200 text-[10px] md:text-xs uppercase text-zinc-500 tracking-[0.4em] font-mono">Before the Trend</p>
</div>
<div className="mt-16 reveal-up delay-300">
<div className="h-12 w-[1px] bg-gradient-to-b from-zinc-700 to-transparent"></div>
</div>
</div>
</section>

<section className="md:py-40 border-y bg-black border-zinc-900/50 py-24 px-6 relative" id="about">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-4 space-y-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-600 text-sm" icon="solar:clapperboard-linear"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Vision 002</span>
</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white uppercase leading-none">Visual Artifacts</h3>
<p className="text-xs text-zinc-500 font-mono tracking-tight uppercase leading-relaxed max-w-xs">
                    We translate raw frequencies into visual narratives. This sequence represents our core aesthetic — a synthesis of analog nostalgia and digital precision.
                </p>
</div>
<div className="md:col-span-8">
<div className="relative group aspect-video bg-zinc-900/20 border border-zinc-800/50 overflow-hidden shadow-2xl">
<div className="absolute inset-0 z-30 pointer-events-none bg-black/10"></div>
<div className="absolute top-4 left-4 z-40 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
<span className="osd-text text-[9px] text-white/70 font-mono tracking-widest uppercase">Live Feed</span>
</div>
<div className="video-clean-container grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
<iframe allow="autoplay; encrypted-media" frameborder="0" src="https://www.youtube.com/embed/FGiOZgCOPS0?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=FGiOZgCOPS0&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;iv_load_policy=3&amp;showinfo=0&amp;disablekb=1"></iframe>
</div>
<div className="absolute bottom-4 right-4 z-40">
<span className="osd-text text-[9px] text-white/40 font-mono">SP — 0:00:24</span>
</div>
</div>
</div>
</div>
</section>
<section className="relative bg-black" id="work">
<div className="group relative border-b border-zinc-900/50 block cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:h-screen">
<div className="relative overflow-hidden bg-zinc-900/20 vhs-image-container border-r border-zinc-900/50">
<img alt="Project" className="opacity-50 w-full h-full object-cover absolute inset-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center p-8 md:p-20 bg-zinc-950/20 group-hover:bg-zinc-900/20 transition-colors">
<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Volume 01 — 2024</span>
<h3 className="vhs-click text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">Dark<br/>Matter</h3>
<p className="text-xs text-zinc-500 font-mono tracking-tight uppercase max-w-xs">Branding &amp; Motion Direction for the next generation of creative rebels.</p>
</div>
</div>
</div>
</section>
<section className="relative py-24 md:py-40 px-6 bg-black" id="contact">
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">
<div>
<h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    Transmission
                </h2>
<h3 className="vhs-click text-5xl md:text-8xl font-bold tracking-tighter text-white mb-10 uppercase">Connect</h3>
<div className="space-y-4">
<a className="vhs-click block text-lg md:text-xl text-zinc-400 hover:text-white transition-colors font-mono tracking-tight" href="mailto:hello@shalevmaymoni.com">
                        hello@shalevmaymoni.com
                    </a>
</div>
</div>
<div className="flex flex-col justify-end">
<div className="border-t border-zinc-900 pt-12">
<div className="grid grid-cols-2 gap-8">
<div>
<span className="text-[10px] font-mono text-zinc-600 uppercase block mb-4">Social</span>
<ul className="space-y-2 text-xs uppercase tracking-widest text-zinc-400">
<li><a className="vhs-click hover:text-white" href="#">Instagram</a></li>
<li><a className="vhs-click hover:text-white" href="#">Vimeo</a></li>
</ul>
</div>
<div>
<span className="text-[10px] font-mono text-zinc-600 uppercase block mb-4">Location</span>
<p className="text-xs uppercase tracking-widest text-zinc-400">Global / Remote</p>
</div>
</div>
</div>
</div>
</div>
<footer className="max-w-6xl mx-auto w-full mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[9px] text-zinc-700 font-mono uppercase tracking-[0.2em]">
<p>© 2024 Shalev Maymoni productions</p>
<p className="mt-4 md:mt-0">All rights reserved</p>
</footer>
</section>

    </>
  );
}
