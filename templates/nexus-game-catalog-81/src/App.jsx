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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<span className="font-semibold text-lg tracking-tighter">N</span>
</div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="text-white hover:text-indigo-400 transition-colors" href="#">Catalog</a>
<a className="hover:text-white transition-colors" href="#">News</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white"><i className="w-5 h-5" data-lucide="bell"></i></button>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>
</nav>
<main className="pt-24 pb-20">

<div className="relative h-[500px] w-full border-b border-white/5">
<div className="absolute inset-0">
<img alt="Cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 w-full">
<div className="max-w-7xl mx-auto px-6 pb-10">
<div className="flex items-center gap-3 mb-4">
<span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-[0_0_10px_rgba(99,102,241,0.5)]">Editor's Choice</span>
<span className="bg-white/10 backdrop-blur text-white border border-white/10 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">RPG</span>
</div>
<h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 shadow-black drop-shadow-lg">Cyber Odyssey: <br/>The Neon Frontier</h1>
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mt-6">
<button className="bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-xl shadow-white/5">
<i className="w-5 h-5" data-lucide="play-circle"></i> Play Now
                        </button>
<div className="flex items-center gap-8">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 uppercase tracking-wider">User Score</span>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-500 fill-yellow-500" data-lucide="star"></i>
<span className="text-xl font-bold text-white">9.4</span>
</div>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 uppercase tracking-wider">Status</span>
<span className="text-sm font-medium text-emerald-400 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Service
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-12">

<section>
<h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="info"></i> About
                    </h2>
<p className="text-neutral-400 leading-relaxed mb-6">
                        Enter a sprawling metropolis controlled by megacorporations in the year 2077. Cyber Odyssey combines deep narrative choices with fluid combat mechanics. Customize your neural implants, hack into secure mainframes, and forge alliances with the underground resistance. The Neon Frontier update expands the map to the radioactive wastelands, introducing vehicle combat and survival mechanics.
                    </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-48 md:h-64">
<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl border border-white/5 cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<i className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100" data-lucide="maximize-2"></i>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl border border-white/5 cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="relative group overflow-hidden rounded-xl border border-white/5 cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="col-span-2 relative group overflow-hidden rounded-xl border border-white/5 cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-white backdrop-blur">+8 more</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-10">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-white flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="scroll-text"></i> NEXUS Critique
                        </h2>
<span className="text-xs text-neutral-500">Based on v2.4 Patch</span>
</div>
<div className="glass-panel rounded-2xl p-6 md:p-8">
<div className="flex flex-col md:flex-row gap-8 mb-8 border-b border-white/5 pb-8">

<div className="flex flex-col items-center justify-center min-w-[120px]">
<div className="text-5xl font-bold text-white tracking-tighter mb-1">9.2</div>
<div className="flex gap-0.5 mb-2">
<i className="w-4 h-4 text-indigo-500 fill-indigo-500" data-lucide="star"></i>
<i className="w-4 h-4 text-indigo-500 fill-indigo-500" data-lucide="star"></i>
<i className="w-4 h-4 text-indigo-500 fill-indigo-500" data-lucide="star"></i>
<i className="w-4 h-4 text-indigo-500 fill-indigo-500" data-lucide="star"></i>
<i className="w-4 h-4 text-indigo-500 fill-indigo-500" data-lucide="star-half"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-indigo-300 font-semibold">Exceptional</span>
</div>

<div className="border-l border-white/10 pl-0 md:pl-8">
<h3 className="text-white font-medium mb-2">"A masterpiece of visual storytelling."</h3>
<p className="text-sm text-neutral-400 leading-relaxed italic">
                                    "Cyber Odyssey sets a new benchmark for the genre. While the launch was rocky, the 2.0 update has transformed the experience into the RPG we were promised. The narrative depth is unmatched, though some inventory management systems remain clunky on controllers."
                                </p>
<div className="mt-4 flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-xs text-neutral-500">Review by <span className="text-white">Alex Chen</span>, Senior Editor</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i> The Good
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
                                        Incredible world-building and atmosphere
                                    </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
                                        Deeply branching narrative choices
                                    </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" data-lucide="check"></i>
                                        Overhauled combat system in v2.0
                                    </li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="thumbs-down"></i> The Bad
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" data-lucide="x"></i>
                                        Occasional frame drops in dense areas
                                    </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" data-lucide="x"></i>
                                        Stealth AI can be inconsistent
                                    </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-10">
<h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="package-plus"></i> Latest Expansion
                    </h2>
<div className="relative rounded-xl overflow-hidden border border-purple-500/30 group">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent"></div>
</div>
<div className="relative p-6 md:p-8 flex items-center justify-between">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">Major DLC</span>
<span className="text-xs text-neutral-400">Released 2 days ago</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">The Void Walker</h3>
<p className="text-sm text-neutral-400 max-w-md mb-6">Adds a new playable class, 20 hours of story content, and the mysterious 'Void' dimension.</p>
<button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded text-xs font-medium transition-colors backdrop-blur">
                                    View Details ($19.99)
                                </button>
</div>
<div className="hidden md:block">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur group-hover:scale-110 transition-transform cursor-pointer">
<i className="w-5 h-5 text-white" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</section>
</div>

<aside className="lg:col-span-4 space-y-8">

<div className="bg-neutral-900/30 border border-white/5 rounded-xl p-6">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-6">Game Info</h3>
<div className="space-y-5">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-neutral-400 group-hover:text-indigo-400 transition-colors">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="text-sm">Release Date</span>
</div>
<span className="text-sm text-white">Oct 24, 2023</span>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-neutral-400 group-hover:text-indigo-400 transition-colors">
<i className="w-4 h-4" data-lucide="code-2"></i>
<span className="text-sm">Developer</span>
</div>
<a className="text-sm text-white hover:underline decoration-neutral-600 underline-offset-4" href="#">Neon Forge</a>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-neutral-400 group-hover:text-indigo-400 transition-colors">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span className="text-sm">Publisher</span>
</div>
<span className="text-sm text-white">NEXUS Interactive</span>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3 text-neutral-400 group-hover:text-indigo-400 transition-colors">
<i className="w-4 h-4" data-lucide="monitor"></i>
<span className="text-sm">Platforms</span>
</div>
<div className="flex gap-2">
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="monitor"></i>
<span className="text-xs text-neutral-500">|</span>
<span className="text-xs text-neutral-300 font-mono">PS5</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Tags</h4>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-neutral-400 bg-neutral-800 border border-neutral-700 px-2 py-1 rounded hover:text-white hover:border-neutral-500 transition-colors cursor-pointer">Cyberpunk</span>
<span className="text-xs text-neutral-400 bg-neutral-800 border border-neutral-700 px-2 py-1 rounded hover:text-white hover:border-neutral-500 transition-colors cursor-pointer">Open World</span>
<span className="text-xs text-neutral-400 bg-neutral-800 border border-neutral-700 px-2 py-1 rounded hover:text-white hover:border-neutral-500 transition-colors cursor-pointer">Sci-Fi</span>
<span className="text-xs text-neutral-400 bg-neutral-800 border border-neutral-700 px-2 py-1 rounded hover:text-white hover:border-neutral-500 transition-colors cursor-pointer">Story Rich</span>
<span className="text-xs text-neutral-400 bg-neutral-800 border border-neutral-700 px-2 py-1 rounded hover:text-white hover:border-neutral-500 transition-colors cursor-pointer">Singleplayer</span>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Related News</h3>
<a className="text-[10px] text-indigo-400 hover:text-indigo-300" href="#">View all</a>
</div>
<div className="space-y-3">

<a className="block group bg-neutral-900/30 hover:bg-neutral-800/50 border border-white/5 hover:border-white/10 p-3 rounded-lg transition-all" href="#">
<div className="flex gap-3">
<div className="w-16 h-16 rounded bg-neutral-800 overflow-hidden shrink-0">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h4 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-indigo-400 transition-colors line-clamp-2">Patch Notes v2.4: Balancing adjustments &amp; bug fixes</h4>
<span className="text-[10px] text-neutral-500">12 hours ago • Update</span>
</div>
</div>
</a>

<a className="block group bg-neutral-900/30 hover:bg-neutral-800/50 border border-white/5 hover:border-white/10 p-3 rounded-lg transition-all" href="#">
<div className="flex gap-3">
<div className="w-16 h-16 rounded bg-neutral-800 overflow-hidden shrink-0">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-white leading-snug mb-1 group-hover:text-indigo-400 transition-colors line-clamp-2">Dev Diary: Creating the Wastelands soundscape</h4>
<span className="text-[10px] text-neutral-500">2 days ago • Behind Scenes</span>
</div>
</div>
</a>
</div>
</div>

<div className="bg-gradient-to-b from-indigo-900/20 to-neutral-900/30 border border-indigo-500/20 rounded-xl p-5 text-center mt-6">
<p className="text-xs text-indigo-300 font-medium mb-3">Available in Library</p>
<div className="grid grid-cols-2 gap-3">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors shadow-lg shadow-indigo-900/20">
                            Launch
                        </button>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white border border-white/5 text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="share-2"></i> Share
                        </button>
</div>
<div className="mt-3 pt-3 border-t border-white/5">
<p className="text-[10px] text-neutral-500">Last played: Yesterday</p>
</div>
</div>
</aside>
</div>
</main>

<footer className="border-t border-white/5 bg-neutral-950 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="flex items-center gap-2 mb-4 opacity-50">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white">
<span className="font-semibold text-xs">N</span>
</div>
<span className="text-base font-semibold tracking-tight text-white">NEXUS</span>
</div>
<p className="text-xs text-neutral-600">© 2024 NEXUS. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
