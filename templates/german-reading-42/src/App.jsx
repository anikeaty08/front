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
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden md:flex w-24 flex-col items-center py-8 bg-[#13111b] border-r border-white/5 z-20">

<div className="mb-10">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="text-white font-semibold text-lg tracking-tight">B</span>
</div>
</div>

<nav className="flex-1 flex flex-col gap-8 w-full px-4">
<button className="group flex flex-col items-center gap-1 relative">
<div className="absolute inset-0 bg-indigo-500/10 rounded-xl blur-sm opacity-100 transition-opacity"></div>
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#201d2e] text-indigo-400 relative z-10 shadow-inner shadow-white/5 border border-white/5">
<span className="lucide lucide-home text-xl" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] font-medium text-indigo-300 mt-1">Home</span>
<div className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-1 bg-indigo-500 rounded-r-full"></div>
</button>
<button className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="h-12 w-12 flex items-center justify-center rounded-xl hover:bg-[#201d2e] text-slate-400 transition-colors">
<span className="lucide lucide-flame text-xl" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] font-medium text-slate-500 group-hover:text-slate-300">Popular</span>
</button>
<button className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="h-12 w-12 flex items-center justify-center rounded-xl hover:bg-[#201d2e] text-slate-400 transition-colors">
<span className="lucide lucide-headphones text-xl" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] font-medium text-slate-500 group-hover:text-slate-300">Audiobooks</span>
</button>
<button className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="h-12 w-12 flex items-center justify-center rounded-xl hover:bg-[#201d2e] text-slate-400 transition-colors">
<span className="lucide lucide-library text-xl" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] font-medium text-slate-500 group-hover:text-slate-300">Library</span>
</button>
<button className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="h-12 w-12 flex items-center justify-center rounded-xl hover:bg-[#201d2e] text-slate-400 transition-colors">
<span className="lucide lucide-user text-xl" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-[0.65rem] font-medium text-slate-500 group-hover:text-slate-300">Profile</span>
</button>
</nav>

<div className="mt-auto flex flex-col gap-6">
<button className="group opacity-60 hover:opacity-100 transition-opacity">
<div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-[#201d2e] text-slate-400 transition-colors">
<span className="lucide lucide-settings text-xl" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="sr-only">Settings</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-[#0b0914]">

<header className="flex items-center justify-between px-8 py-6 z-10">

<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="h-12 w-12 rounded-2xl object-cover border-2 border-[#201d2e]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-[#0b0914]"></div>
</div>
<div className="flex flex-col">
<h1 className="text-base font-semibold text-white tracking-tight">Hi, Alexander</h1>
<p className="text-xs text-slate-400">What book do you want to read?</p>
</div>
</div>

<div className="flex items-center gap-4">

<div className="hidden lg:flex relative group w-80">
<span className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-400" style={{strokeWidth: '1.5'}}></span>
<input className="w-full bg-[#161321] text-sm text-slate-200 rounded-2xl py-3.5 pl-11 pr-4 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 placeholder:text-slate-500 transition-all border border-transparent focus:border-indigo-500/30" placeholder="Search title, author or ISBN..." type="text"/>
</div>

<button className="h-12 w-12 rounded-2xl bg-[#161321] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#201d2e] transition-colors relative">
<span className="lucide lucide-bell text-lg" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-3.5 right-4 h-2 w-2 rounded-full bg-rose-500"></span>
</button>

<div className="hidden xl:flex items-center gap-3 bg-[#161321] rounded-2xl py-2 px-4 border border-white/5">
<div className="h-8 w-8 relative">
<span className="lucide lucide-cloud-sun text-amber-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white">22°C</span>
<span className="text-[0.65rem] text-slate-400">Berlin, DE</span>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden px-8 pb-10 scroll-smooth">

<section className="mb-10">
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-semibold text-white tracking-tight">Popular Books</h2>
<button className="text-xs text-slate-500 hover:text-indigo-400 transition-colors">See all</button>
</div>
<div className="flex gap-6 overflow-x-auto pb-4 -mx-8 px-8 snap-x">

<div className="flex flex-col gap-3 min-w-[160px] md:min-w-[180px] snap-start group cursor-pointer">
<div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-lg shadow-black/40">
<img alt="Book Cover" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1">
<span className="text-[0.65rem] font-semibold text-white">4.8</span>
<span className="lucide lucide-star text-[0.65rem] text-amber-400 fill-amber-400"></span>
</div>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-white truncate pr-2">The Alchemist</h3>
<span className="border border-slate-700 rounded text-[0.6rem] px-1 text-slate-400">B1</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="lucide lucide-clock text-[0.7rem]" style={{strokeWidth: '1.5'}}></span>
<span>198 pages</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3 min-w-[160px] md:min-w-[180px] snap-start group cursor-pointer">
<div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-lg shadow-black/40">
<img alt="Book Cover" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1">
<span className="text-[0.65rem] font-semibold text-white">4.5</span>
<span className="lucide lucide-star text-[0.65rem] text-amber-400 fill-amber-400"></span>
</div>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-white truncate pr-2">Dune</h3>
<span className="border border-slate-700 rounded text-[0.6rem] px-1 text-slate-400">C1</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="lucide lucide-clock text-[0.7rem]" style={{strokeWidth: '1.5'}}></span>
<span>896 pages</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3 min-w-[160px] md:min-w-[180px] snap-start group cursor-pointer">
<div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-lg shadow-black/40">
<img alt="Book Cover" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1">
<span className="text-[0.65rem] font-semibold text-white">4.9</span>
<span className="lucide lucide-star text-[0.65rem] text-amber-400 fill-amber-400"></span>
</div>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-white truncate pr-2">Atomic Habits</h3>
<span className="border border-slate-700 rounded text-[0.6rem] px-1 text-slate-400">A2</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="lucide lucide-headphones text-[0.7rem]" style={{strokeWidth: '1.5'}}></span>
<span>5h 35m</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3 min-w-[160px] md:min-w-[180px] snap-start group cursor-pointer">
<div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-lg shadow-black/40">
<img alt="Book Cover" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1">
<span className="text-[0.65rem] font-semibold text-white">4.7</span>
<span className="lucide lucide-star text-[0.65rem] text-amber-400 fill-amber-400"></span>
</div>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-white truncate pr-2">Thinking Fast</h3>
<span className="border border-slate-700 rounded text-[0.6rem] px-1 text-slate-400">C1</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="lucide lucide-clock text-[0.7rem]" style={{strokeWidth: '1.5'}}></span>
<span>499 pages</span>
</div>
</div>
</div>

<div className="flex flex-col gap-3 min-w-[160px] md:min-w-[180px] snap-start group cursor-pointer">
<div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-lg shadow-black/40">
<img alt="Book Cover" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1">
<span className="text-[0.65rem] font-semibold text-white">4.2</span>
<span className="lucide lucide-star text-[0.65rem] text-amber-400 fill-amber-400"></span>
</div>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-white truncate pr-2">Midnight Library</h3>
<span className="border border-slate-700 rounded text-[0.6rem] px-1 text-slate-400">B2</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="lucide lucide-clock text-[0.7rem]" style={{strokeWidth: '1.5'}}></span>
<span>304 pages</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-10">
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-semibold text-white tracking-tight">Category</h2>
<button className="text-xs text-slate-500 hover:text-indigo-400 transition-colors">See all</button>
</div>
<div className="flex gap-4 overflow-x-auto -mx-8 px-8 pb-2 snap-x">

<div className="relative min-w-[200px] h-[110px] rounded-2xl overflow-hidden cursor-pointer group snap-start">
<img alt="Fiction" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1626618012641-bfbca5a3123c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#0b0914]/40 group-hover:bg-[#0b0914]/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base font-semibold text-white tracking-wide">Fiction</span>
</div>
</div>

<div className="relative min-w-[200px] h-[110px] rounded-2xl overflow-hidden cursor-pointer group snap-start">
<img alt="Thriller" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#0b0914]/40 group-hover:bg-[#0b0914]/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base font-semibold text-white tracking-wide">Thriller</span>
</div>
</div>

<div className="relative min-w-[200px] h-[110px] rounded-2xl overflow-hidden cursor-pointer group snap-start">
<img alt="Sci-Fi" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#0b0914]/40 group-hover:bg-[#0b0914]/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base font-semibold text-white tracking-wide">Sci-Fi</span>
</div>
</div>

<div className="relative min-w-[200px] h-[110px] rounded-2xl overflow-hidden cursor-pointer group snap-start">
<img alt="Romance" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#0b0914]/40 group-hover:bg-[#0b0914]/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base font-semibold text-white tracking-wide">Romance</span>
</div>
</div>

<div className="relative min-w-[200px] h-[110px] rounded-2xl overflow-hidden cursor-pointer group snap-start">
<img alt="History" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-[#0b0914]/40 group-hover:bg-[#0b0914]/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base font-semibold text-white tracking-wide">History</span>
</div>
</div>
</div>
</section>

<section className="mb-6">
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-semibold text-white tracking-tight">Coming Soon</h2>
</div>
<div className="flex gap-6 overflow-x-auto -mx-8 px-8 pb-4">

<div className="min-w-[260px] h-[140px] rounded-3xl overflow-hidden relative cursor-pointer group">
<img alt="Preview 1" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-[#0b0914]/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-sm font-semibold text-white">The Lost World</p>
<p className="text-[0.65rem] text-slate-400">September 2024</p>
</div>
<div className="absolute top-4 right-4 bg-rose-500 rounded-full p-1.5 shadow-lg shadow-rose-500/30">
<span className="lucide lucide-bell text-white text-xs block" style={{strokeWidth: '2'}}></span>
</div>
</div>

<div className="min-w-[260px] h-[140px] rounded-3xl overflow-hidden relative cursor-pointer group">
<img alt="Preview 2" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-[#0b0914]/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-sm font-semibold text-white">Digital Minimalism</p>
<p className="text-[0.65rem] text-slate-400">October 2024</p>
</div>
<div className="absolute top-4 right-4 bg-white/10 backdrop-blur rounded-full p-1.5 hover:bg-white/20 transition-colors">
<span className="lucide lucide-bell text-white text-xs block" style={{strokeWidth: '2'}}></span>
</div>
</div>

<div className="min-w-[260px] h-[140px] rounded-3xl overflow-hidden relative cursor-pointer group">
<img alt="Preview 3" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-[#0b0914]/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-sm font-semibold text-white">Cosmos II</p>
<p className="text-[0.65rem] text-slate-400">Coming this winter</p>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
