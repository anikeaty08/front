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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#05040f]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-600 to-violet-700 flex items-center justify-center shadow-lg shadow-pink-900/20">
<i className="text-white w-5 h-5" data-lucide="feather" strokeWidth="1.5"></i>
</div>
<span className="text-white font-medium text-lg tracking-tight">Rebellion</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors duration-200" href="#">Lore</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors duration-200" href="#">Characters</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors duration-200" href="#">Abilities</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors duration-200" href="#">Patch Notes</a>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:ring-offset-2 focus:ring-offset-[#05040f]" href="#">
                    Play Now
                </a>
</div>
</div>
</nav>
<main className="relative pt-32 pb-16 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[400px] h-[400px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300">
<span className="flex h-2 w-2 rounded-full bg-pink-500"></span>
                    New Cinematic Trailer Available
                </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Fighting for <br/>
<span className="text-gradient-main">Love &amp; Liberty</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                    Join the rebellion to restore the wild magic of Ionia. Master the deadly dance of feathers and charm in an immersive vastayan experience.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="h-12 px-8 rounded-lg bg-gradient-to-r from-pink-600 to-violet-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-pink-900/25 flex items-center gap-2">
<span>Enter the Wild</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="h-12 px-8 rounded-lg glass-panel text-slate-200 font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
<span>Watch Spotlight</span>
</button>
</div>
<div className="pt-8 border-t border-white/5 flex items-center gap-6">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white">12M+</span>
<span className="text-sm text-slate-500">Active Players</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white">4.9/5</span>
<span className="text-sm text-slate-500">Community Rating</span>
</div>
</div>
</div>
<div className="relative z-10 lg:h-[600px] flex items-center justify-center">

<div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-pink-500/50 via-violet-500/20 to-transparent">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent blur-2xl"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/20">
<img alt="Xayah and Rakan" className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-700" src="https://img.youtube.com/vi/u4t2K3P01b4/maxresdefault.jpg"/>

<div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://img.youtube.com/vi/u4t2K3P01b4/maxresdefault.jpg"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<p className="text-sm font-medium text-white">Xayah &amp; Rakan</p>
<span className="text-xs text-pink-400">Synergy Active</span>
</div>

<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-gradient-to-r from-pink-500 to-amber-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Deadly Precision.<br/>Charming Distraction.</h2>
<p className="text-lg text-slate-400 max-w-md">Combine quick attacks with crowd control to dominate the battlefield.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl glass-panel p-1 transition-all hover:bg-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative h-full p-6 flex flex-col">
<div className="w-12 h-12 rounded-lg bg-pink-900/30 border border-pink-700/30 flex items-center justify-center mb-6 text-pink-400">
<i className="w-6 h-6" data-lucide="feather" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Bladecaller</h3>
<p className="text-slate-400 mb-6 flex-1">Recall all feathers, dealing damage and rooting enemies if they are hit by at least 3 feathers.</p>
<div className="flex items-center gap-2 text-sm text-pink-400 font-medium">
<span>View Ability</span>
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="group relative rounded-2xl glass-panel p-1 transition-all hover:bg-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative h-full p-6 flex flex-col">
<div className="w-12 h-12 rounded-lg bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Grand Entrance</h3>
<p className="text-slate-400 mb-6 flex-1">Dash to a location and knock up surrounding enemies after a brief delay.</p>
<div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
<span>View Ability</span>
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="group relative rounded-2xl glass-panel p-1 transition-all hover:bg-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative h-full p-6 flex flex-col">
<div className="w-12 h-12 rounded-lg bg-violet-900/30 border border-violet-700/30 flex items-center justify-center mb-6 text-violet-400">
<i className="w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Battle Dance</h3>
<p className="text-slate-400 mb-6 flex-1">Fly to an allied champion, granting them a shield. Can be re-cast to dash again.</p>
<div className="flex items-center gap-2 text-sm text-violet-400 font-medium">
<span>View Ability</span>
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900/30">
<div className="max-w-4xl mx-auto px-6 text-center mb-12">
<span className="text-amber-400 font-medium tracking-wide uppercase text-xs mb-2 block">Duo Mechanics</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">The Perfect Synergy</h2>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="glass-panel rounded-2xl p-8 md:p-12 border border-white/5 bg-[#080612]">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="w-full md:w-1/3 space-y-8">
<div>
<label className="text-sm font-medium text-slate-300 mb-3 block">Lovers' Recall Sync</label>

<div className="relative w-full h-12 bg-slate-900 rounded-lg p-1 flex cursor-pointer border border-slate-700">
<div className="w-1/2 h-full rounded-md bg-gradient-to-r from-pink-600 to-violet-600 shadow-md"></div>
<div className="absolute inset-0 flex items-center justify-between px-6 text-sm font-medium">
<span className="text-white z-10">Synced</span>
<span className="text-slate-500">Solo</span>
</div>
</div>
</div>
<div>
<label className="text-sm font-medium text-slate-300 mb-3 block">Feather Saturation</label>

<div className="relative w-full h-2 bg-slate-800 rounded-full mt-4">
<div className="absolute left-0 top-0 h-full w-[70%] bg-pink-500 rounded-full"></div>
<div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-pink-500 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-500">
<span>Min</span>
<span>Max</span>
</div>
</div>
<div className="pt-4">
<div className="flex items-center justify-between p-3 rounded-lg border border-pink-500/20 bg-pink-500/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
<span className="text-sm text-pink-200">Bonus Range Active</span>
</div>
<i className="w-4 h-4 text-pink-400" data-lucide="check"></i>
</div>
</div>
</div>

<div className="w-full md:w-2/3 relative h-[300px] rounded-xl overflow-hidden border border-white/10 group">
<img className="w-full h-full object-cover opacity-60 grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" src="https://img.youtube.com/vi/u4t2K3P01b4/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#05040f] via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 max-w-sm">
<h4 className="text-white font-medium text-lg">Recall Together</h4>
<p className="text-sm text-slate-400 mt-1">If either Xayah or Rakan is recalling, they can sync up to return to base instantly together.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020108] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-pink-600 to-violet-700 flex items-center justify-center">
<i className="text-white w-3 h-3" data-lucide="feather"></i>
</div>
<span className="text-white font-medium">Rebellion</span>
</div>
<p className="text-sm text-slate-500">Crafted for the vastayan resistance. <br/>Design inspired by the wild magic.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Game</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-pink-400 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-pink-400 transition-colors" href="#">Champions</a></li>
<li><a className="hover:text-pink-400 transition-colors" href="#">Patch Notes</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Community</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Forums</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Fan Art</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2024 Rebellion Games. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
