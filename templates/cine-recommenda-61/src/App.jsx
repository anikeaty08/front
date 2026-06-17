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
      

<aside className="w-full md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-neutral-800 bg-neutral-950 flex flex-col justify-between z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-neutral-800">
<span className="text-xl tracking-tighter font-semibold text-white">CINE</span>
<span className="ml-auto text-[10px] uppercase tracking-widest text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">Beta</span>
</div>

<nav className="p-4 space-y-1">
<div className="px-2 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Discover</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-neutral-900 rounded-md group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-white" icon="lucide:home" width="18"></iconify-icon>
                    Home
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:clapperboard" width="18"></iconify-icon>
                    Movies
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:tv" width="18"></iconify-icon>
                    TV Series
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-amber-500" icon="lucide:sparkles" width="18"></iconify-icon>
                    For You
                </a>
<div className="mt-6 px-2 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Library</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:clock" width="18"></iconify-icon>
                    History
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:bookmark" width="18"></iconify-icon>
                    Watchlist
                    <span className="ml-auto text-xs text-neutral-600">12</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-neutral-800">
<div className="px-2 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">System Architect</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors text-left">
<iconify-icon className="text-neutral-500" icon="lucide:database" width="18"></iconify-icon>
<span>Schema &amp; API</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-md transition-colors text-left mt-1">
<iconify-icon className="text-neutral-500" icon="lucide:settings-2" width="18"></iconify-icon>
<span>Admin Panel</span>
</button>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-medium text-white">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-200">Jane Doe</span>
<span className="text-xs text-neutral-500">Premium Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative bg-neutral-950 scroll-smooth">

<header className="sticky top-0 z-10 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-6 py-3 flex items-center justify-between">

<div className="relative w-full max-w-md group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all" placeholder="Search titles, genres, or people..." type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-neutral-950"></span>
</button>
</div>
</header>

<section className="relative w-full h-[65vh] min-h-[500px] flex items-end">

<div className="absolute inset-0 z-0">
<img alt="Featured Movie" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>
<div className="relative z-10 px-8 pb-12 w-full max-w-4xl">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">Top Match</span>
<span className="text-green-400 text-xs font-semibold flex items-center gap-1">
<iconify-icon icon="lucide:trending-up" width="14"></iconify-icon> 98% Match
                    </span>
<span className="text-neutral-400 text-xs">2023</span>
<span className="px-1.5 py-0.5 border border-neutral-700 text-neutral-400 text-[10px] rounded">UA</span>
<span className="text-neutral-400 text-xs">2h 34m</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-4 leading-[0.9]">
                    Stellar Horizon
                </h1>
<p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl mb-8 line-clamp-3">
                    In a future where Earth is uninhabitable, a former pilot must lead a desperate mission across the galaxy to find a new home, only to discover that the threat to humanity is closer than they thought.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-neutral-200 transition-colors">
<iconify-icon className="fill-current" icon="lucide:play" width="20"></iconify-icon>
                        Play Now
                    </button>
<button className="flex items-center gap-2 bg-neutral-800/80 backdrop-blur text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-700 transition-colors border border-white/10">
<iconify-icon icon="lucide:info" width="20"></iconify-icon>
                        More Info
                    </button>

<button className="p-3 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white transition-colors bg-black/20 backdrop-blur">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
<button className="p-3 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white transition-colors bg-black/20 backdrop-blur">
<iconify-icon icon="lucide:thumbs-up" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="px-8 py-4 sticky top-16 z-10 bg-neutral-950/95 backdrop-blur border-b border-neutral-900 overflow-x-auto hide-scroll">
<div className="flex items-center gap-3 min-w-max">

<button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-sm text-neutral-300 hover:border-neutral-600 transition-colors">
                    Genres
                    <iconify-icon className="opacity-50" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-sm text-neutral-300 hover:border-neutral-600 transition-colors">
                    Year
                    <iconify-icon className="opacity-50" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-sm text-neutral-300 hover:border-neutral-600 transition-colors">
                    Rating: 7+
                    <iconify-icon className="opacity-50 hover:text-white" icon="lucide:x" width="14"></iconify-icon>
</button>
<div className="w-px h-6 bg-neutral-800 mx-2"></div>

<button className="px-3 py-1.5 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors">Sci-Fi</button>
<button className="px-3 py-1.5 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors">Thriller</button>
<button className="px-3 py-1.5 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors">4K HDR</button>
</div>
</section>

<section className="px-8 py-8 border-b border-neutral-900">
<div className="flex items-baseline justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white">Recommended for You</h2>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-4">

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-green-400 font-medium mb-0.5">96% Match</p>
<p className="text-xs text-white">Action • Sci-Fi</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Cyber Drift</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded text-[10px] text-white border border-white/10">Top 10</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-green-400 font-medium mb-0.5">92% Match</p>
<p className="text-xs text-white">Thriller • Drama</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">The Silent Sea</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-green-400 font-medium mb-0.5">88% Match</p>
<p className="text-xs text-white">Fantasy • Adventure</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Dune Drifters</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-neutral-400 font-medium mb-0.5">Based on your history</p>
<p className="text-xs text-white">Romance • Drama</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Last Summer</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-green-400 font-medium mb-0.5">90% Match</p>
<p className="text-xs text-white">Sci-Fi • Space</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Cosmos One</h3>
</div>
</div>
</section>

<section className="px-8 py-8 border-b border-neutral-900">
<div className="flex items-baseline justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white">Trending Movies</h2>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-4">

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620177088258-c84147ee601f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-red-600 px-1.5 py-0.5 rounded text-[10px] text-white font-bold tracking-wide">NEW</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-neutral-400 font-medium mb-0.5">2h 05m</p>
<p className="text-xs text-white">Mystery • Crime</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">The Architect</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518134559196-805d76d6554a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-white">Action • Noir</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Midnight Rain</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded text-[10px] text-yellow-400 border border-white/10">
<iconify-icon className="fill-current" icon="lucide:star" width="10"></iconify-icon> 9.1
                        </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-white">Sci-Fi • Drama</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Solar Flare</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596727147705-54a7128052a9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-white">Action • Thriller</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Velocity</h3>
</div>

<div className="group relative flex-shrink-0 w-[200px] cursor-pointer">
<div className="aspect-[2/3] bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex gap-2 mb-2">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-white">Nature • Docu</p>
</div>
</div>
<h3 className="mt-2 text-sm font-medium text-neutral-200 group-hover:text-white truncate">Green Earth</h3>
</div>
</div>
</section>

<section className="px-8 py-8 border-b border-neutral-900">
<div className="flex items-baseline justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white">Popular TV Series</h2>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-4">

<div className="group relative flex-shrink-0 w-[280px] cursor-pointer">
<div className="aspect-video bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-neutral-900/80 backdrop-blur px-1.5 py-0.5 rounded text-[10px] text-white border border-white/10">S3 • EP4</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-[10px] text-neutral-400 font-medium mb-0.5">Next Episode</p>
<p className="text-xs text-white">Cyberpunk</p>
</div>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Silicon Valley 2049</h3>
<p className="text-[10px] text-neutral-500">Comedy • Sci-Fi</p>
</div>
<div className="w-16 h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
<div className="w-2/3 h-full bg-blue-500"></div>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-[280px] cursor-pointer">
<div className="aspect-video bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-neutral-900/80 backdrop-blur px-1.5 py-0.5 rounded text-[10px] text-white border border-white/10">S1 • Complete</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-[10px] text-neutral-400 font-medium mb-0.5">Start Watching</p>
<p className="text-xs text-white">Mystery</p>
</div>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Dark Matter</h3>
<p className="text-[10px] text-neutral-500">Mystery • Drama</p>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-[280px] cursor-pointer">
<div className="aspect-video bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-purple-600 px-1.5 py-0.5 rounded text-[10px] text-white font-bold">New Season</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-[10px] text-neutral-400 font-medium mb-0.5">Resume S2:E1</p>
<p className="text-xs text-white">Thriller</p>
</div>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">The System</h3>
<p className="text-[10px] text-neutral-500">Tech • Thriller</p>
</div>
<div className="w-16 h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden">
<div className="w-full h-full bg-purple-500"></div>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-[280px] cursor-pointer">
<div className="aspect-video bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-[10px] text-neutral-400 font-medium mb-0.5">Start S1</p>
<p className="text-xs text-white">Retro</p>
</div>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon className="fill-current ml-0.5" icon="lucide:play" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Neon Nights</h3>
<p className="text-[10px] text-neutral-500">Crime • Drama</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Metadata View</h3>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
<span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
</div>
</div>
<div className="flex gap-6">
<div className="w-32 flex-shrink-0">
<img className="w-full rounded-md shadow-lg mb-3" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="space-y-2">
<button className="w-full py-1.5 bg-white text-black text-xs font-semibold rounded">Watch</button>
<button className="w-full py-1.5 border border-neutral-700 text-neutral-300 text-xs font-medium rounded hover:bg-neutral-800">Trailer</button>
</div>
</div>
<div className="flex-1 space-y-4">
<div>
<h2 className="text-2xl font-bold text-white tracking-tight">Cyber Drift</h2>
<div className="flex items-center gap-3 mt-1 text-xs text-neutral-400">
<span>2024</span>
<span className="border border-neutral-700 px-1 rounded text-[10px]">R</span>
<span>2h 14m</span>
<span>Action, Sci-Fi</span>
</div>
</div>

<div className="flex gap-4 p-3 bg-neutral-950 rounded-lg border border-neutral-800">
<div>
<div className="text-[10px] text-neutral-500 uppercase">IMDb</div>
<div className="text-sm font-semibold text-white flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="12"></iconify-icon> 8.4
                                    </div>
</div>
<div className="w-px bg-neutral-800"></div>
<div>
<div className="text-[10px] text-neutral-500 uppercase">Popularity</div>
<div className="text-sm font-semibold text-white">982 <span className="text-[10px] text-green-500">▲</span></div>
</div>
</div>
<div className="space-y-1">
<p className="text-xs text-neutral-500 uppercase font-medium">Synopsis</p>
<p className="text-sm text-neutral-300 leading-relaxed">In a neon-soaked metropolis, an elite hacker uncovers a corporate conspiracy that threatens to overwrite human consciousness with AI.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-neutral-500 uppercase font-medium">Director</p>
<p className="text-sm text-neutral-200">Elena Vance</p>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase font-medium">Cast</p>
<p className="text-sm text-neutral-200 truncate">K. Reeves, A. de Armas</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 font-mono text-xs flex-1">
<div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
<h3 className="text-neutral-400 uppercase tracking-widest font-sans font-medium">DB Schema: Movies</h3>
<span className="text-emerald-500">PostgreSQL / NoSQL</span>
</div>
<div className="space-y-2 text-neutral-500">
<div className="flex"><span className="w-24 text-purple-400">id</span> UUID PRIMARY KEY</div>
<div className="flex"><span className="w-24 text-blue-400">title</span> VARCHAR(255) NOT NULL</div>
<div className="flex"><span className="w-24 text-blue-400">genres</span> ARRAY['Action', 'Sci-Fi']</div>
<div className="flex"><span className="w-24 text-blue-400">rating_imdb</span> DECIMAL(3,1)</div>
<div className="flex"><span className="w-24 text-blue-400">embedding</span> VECTOR(1536) <span className="text-neutral-600 ml-2">// For RecSys</span></div>
<div className="flex"><span className="w-24 text-blue-400">cast</span> JSONB</div>
<div className="flex"><span className="w-24 text-blue-400">avail_on</span> ARRAY['Netflix', 'Prime']</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex-1">
<div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-sans">Recommendation API Logic</h3>
<span className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-900/50">GET /api/v1/recommendations</span>
</div>
<div className="space-y-3">

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">1</div>
<div className="flex-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Collaborative Filtering</span>
<span className="text-green-500">User History</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[80%]"></div>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">2</div>
<div className="flex-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Content-Based (Vector)</span>
<span className="text-blue-500">Genre/Mood</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[60%]"></div>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">3</div>
<div className="flex-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Trending Weight</span>
<span className="text-orange-500">Global Pop</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[40%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-8 pb-12">
<h2 className="text-lg font-semibold tracking-tight text-white mb-4">User Preferences (Input)</h2>
<div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div>
<label className="block text-xs font-medium text-neutral-400 uppercase mb-3">Favorite Genres</label>
<div className="space-y-2">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 bg-neutral-800 flex items-center justify-center group-hover:border-neutral-400 transition-colors">
<iconify-icon className="text-black hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 peer-checked:text-white">Science Fiction</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden peer" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 bg-neutral-800 flex items-center justify-center group-hover:border-neutral-400 transition-colors">
<iconify-icon className="text-black hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 peer-checked:text-white">Psychological Thriller</span>
</label>
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-400 uppercase mb-3">Era Preference</label>
<div className="px-2">
<input max="2024" min="1990" type="range" value="2010"/>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2 font-mono">
<span>1990</span>
<span>2010</span>
<span>2024</span>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-400 uppercase mb-3">Platforms</label>
<div className="flex gap-2">
<button className="w-8 h-8 rounded bg-red-600 text-white font-bold text-[10px] flex items-center justify-center">N</button>
<button className="w-8 h-8 rounded bg-blue-500 text-white font-bold text-[10px] flex items-center justify-center">P</button>
<button className="w-8 h-8 rounded bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white text-xs flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="px-8 py-8 border-t border-neutral-900 text-center md:text-left">
<div className="flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs">
<p>© 2024 CINE Recommendation Engine. All rights reserved.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">API Docs</a>
<a className="hover:text-neutral-400" href="#">Admin Login</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
