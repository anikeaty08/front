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
      

<div className="noise"></div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6">

<nav className="flex items-center justify-between py-8 relative z-20">
<a className="text-sm tracking-tighter font-medium text-white hover:opacity-80 transition-opacity flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center shadow-inner">
<span className="font-bold text-xs text-neutral-200">K</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 bg-neutral-900/50 p-1 rounded-full border border-neutral-800/50 backdrop-blur-md">
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all" href="#videos">Episodes</a>
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all" href="#gear">Stack</a>
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all" href="#about">Manifesto</a>
</div>
<a className="group hidden md:flex items-center gap-2 text-[11px] font-medium text-neutral-400 hover:text-white transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse"></span>
<span>Online</span>
</a>
</nav>

<header className="mt-16 mb-32 relative">

<div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

<div className="flex flex-col gap-8">
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-[10px] font-medium uppercase tracking-widest text-neutral-500">
<i className="w-3 h-3 text-neutral-400" data-lucide="sparkles"></i>
<span>Creator OS v2.4</span>
</div>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-600 text-glow">
                    Digital <br/>
                    Alchemist.
                </h1>

<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden mt-8 shadow-2xl shadow-black/50">

<div className="md:col-span-5 bg-[#080808] p-8 flex flex-col justify-between min-h-[200px]">
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Documenting the nuanced journey of engineering, aesthetic design, and building software products in public.
                        </p>
<div className="mt-6 flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-all border border-neutral-700" href="#">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
                                Watch Showreel
                            </a>
</div>
</div>

<div className="md:col-span-4 bg-[#080808] p-8 flex flex-col justify-between group cursor-default">
<div className="flex justify-between items-start">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 font-medium">Community Growth</span>
<i className="w-4 h-4 text-neutral-600 group-hover:text-green-500 transition-colors" data-lucide="trending-up"></i>
</div>
<div className="flex items-end gap-4 mt-4">
<div>
<div className="text-3xl font-medium text-white tracking-tight">254.8K</div>
<div className="text-[10px] text-neutral-500 mt-1">Active Subscribers</div>
</div>
<div className="h-8 w-px bg-neutral-800"></div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">12M+</div>
<div className="text-[10px] text-neutral-500 mt-1">Total Impressions</div>
</div>
</div>
</div>

<div className="md:col-span-3 bg-[#080808] p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<span className="text-[10px] uppercase tracking-wider text-neutral-600 font-medium flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Latest Deploy
                            </span>
<div className="mt-4">
<div className="text-sm text-white font-medium truncate">Fixing Legacy Debt</div>
<div className="flex items-center gap-2 mt-2 text-[10px] text-neutral-500 font-mono">
<span className="bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">TS</span>
<span className="bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">React</span>
</div>
</div>
</div>
<i className="absolute bottom-8 right-8 w-4 h-4 text-neutral-700 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</header>

<section className="mb-32" id="videos">
<div className="flex items-end justify-between mb-8 pb-4 border-b border-neutral-900">
<h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Selected Works</h2>
<a className="text-xs text-neutral-600 hover:text-white transition-colors flex items-center gap-1" href="#">
                    Archive <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block" href="#">
<div className="relative aspect-video bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden mb-4 transition-all group-hover:border-neutral-700 group-hover:shadow-2xl group-hover:shadow-neutral-900/50">
<div className="absolute inset-0 bg-neutral-800/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3">
<i className="w-5 h-5 text-white fill-current" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-2 py-1 rounded border border-neutral-800 text-[10px] font-medium text-neutral-300">12:04</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors tracking-tight leading-snug">
                                Refactoring a Legacy Codebase
                            </h3>
<p className="text-xs text-neutral-500 mt-1 line-clamp-1">Strategies for technical debt and cleanup.</p>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="relative aspect-video bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden mb-4 transition-all group-hover:border-neutral-700 group-hover:shadow-2xl group-hover:shadow-neutral-900/50">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black"></div>
<div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-2 py-1 rounded border border-neutral-800 text-[10px] font-medium text-neutral-300">08:22</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors tracking-tight leading-snug">
                                My Minimal Desk Setup 2024
                            </h3>
<p className="text-xs text-neutral-500 mt-1 line-clamp-1">Productivity centered workspace tour.</p>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="relative aspect-video bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden mb-4 transition-all group-hover:border-neutral-700 group-hover:shadow-2xl group-hover:shadow-neutral-900/50">
<div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black"></div>
<div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-2 py-1 rounded border border-neutral-800 text-[10px] font-medium text-neutral-300">15:45</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors tracking-tight leading-snug">
                                Why I Switched to Vim
                            </h3>
<p className="text-xs text-neutral-500 mt-1 line-clamp-1">Optimizing developer workflows.</p>
</div>
</div>
</a>
</div>
</section>

<section className="mb-32" id="gear">
<div className="flex items-end justify-between mb-8 pb-4 border-b border-neutral-900">
<h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Hardware Stack</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-96">

<div className="md:col-span-2 md:row-span-2 relative group bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 rounded-xl p-6 flex flex-col justify-between transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/80"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800/50 border border-neutral-700/50 rounded-lg flex items-center justify-center mb-4 text-neutral-300 backdrop-blur-md">
<i className="w-5 h-5" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Sony FX3 Cinema</h3>
<p className="text-sm text-neutral-500 mt-2 font-light">The visual core of the channel. Full frame 4K 120fps capability with exceptional dynamic range.</p>
</div>
<div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] uppercase tracking-wider font-medium text-neutral-400 group-hover:text-white transition-colors">
<span>Technical Specs</span>
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 flex flex-col justify-between group transition-colors">
<div className="flex justify-between items-start">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="mic"></i>
<span className="text-[10px] text-neutral-600 font-mono">AUDIO</span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Shure SM7B</h4>
<p className="text-[10px] text-neutral-500 mt-1">Broadcast Standard</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 flex flex-col justify-between group transition-colors">
<div className="flex justify-between items-start">
<i className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="monitor"></i>
<span className="text-[10px] text-neutral-600 font-mono">VISUAL</span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Pro Display XDR</h4>
<p className="text-[10px] text-neutral-500 mt-1">Retina 6K</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 flex items-center justify-between group transition-colors relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-neutral-800/10 to-transparent"></div>
<div className="relative z-10 flex flex-col justify-center h-full">
<h4 className="text-sm font-medium text-white">MacBook Pro M3 Max</h4>
<p className="text-[10px] text-neutral-500 mt-1">Space Black, 64GB Unified Memory</p>
</div>
<div className="relative z-10 h-10 w-10 bg-neutral-800/50 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="bg-gradient-to-b from-neutral-900/40 to-black border border-neutral-800 rounded-2xl p-1 relative overflow-hidden">
<div className="bg-[#0A0A0A] rounded-xl px-8 py-16 md:px-16 text-center relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>
<div className="relative z-10 max-w-lg mx-auto">
<div className="w-12 h-12 bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center mx-auto mb-8 text-white shadow-lg shadow-black/50">
<i className="w-5 h-5" data-lucide="mail-plus"></i>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">Join the inner circle</h2>
<p className="text-sm text-neutral-400 font-light mb-8">
                            Weekly insights on creator economy, coding tips, and exclusive behind-the-scenes content.
                        </p>
<form className="flex flex-col sm:flex-row gap-2">
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 focus:border-neutral-700 transition-all" placeholder="email@address.com" type="email"/>
<button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
                                Subscribe
                            </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center">
<span className="font-bold text-[10px] text-neutral-500">K</span>
</div>
<span className="text-neutral-500 font-medium tracking-tight">KAIRO © 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#">X (Twitter)</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">YouTube</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">GitHub</a>
</div>
</footer>
</div>


    </>
  );
}
