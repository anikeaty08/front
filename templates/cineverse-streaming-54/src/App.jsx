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



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212',
950: '#0a0a0a',
}
}
}
}
}

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
      

<div className="lg:hidden fixed top-0 w-full z-50 glass-panel border-b border-white/5 p-4 flex justify-between items-center">
<div className="text-white tracking-tighter font-medium text-lg">CINEVERSE</div>
<button className="text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-1 h-screen overflow-hidden pt-16 lg:pt-0">

<aside className="hidden lg:flex flex-col w-64 h-full border-r border-white/5 bg-neutral-950/50 flex-shrink-0 z-20">
<div className="p-6">
<div className="text-white tracking-tighter font-medium text-xl flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                    CINEVERSE
                </div>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
<div className="mb-6">
<p className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Discover</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-lg border border-white/5 group transition-all" href="#">
<iconify-icon className="text-indigo-400" icon="solar:compass-linear" width="20"></iconify-icon>
<span className="font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:fire-linear" width="20"></iconify-icon>
<span>Trending</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:ticket-linear" width="20"></iconify-icon>
<span>Movies</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:clapperboard-play-linear" width="20"></iconify-icon>
<span>Anime</span>
</a>
</div>
<div className="mb-6">
<p className="px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Library</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:bookmark-linear" width="20"></iconify-icon>
<span>Watchlist</span>
<span className="ml-auto text-xs bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:heart-linear" width="20"></iconify-icon>
<span>Favorites</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:history-linear" width="20"></iconify-icon>
<span>History</span>
</a>
</div>
</nav>
<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-white">Alex Morgan</span>
<span className="text-[10px] text-neutral-500">Premium Plan</span>
</div>
<iconify-icon className="ml-auto" icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto relative scroll-smooth">

<div className="sticky top-0 z-30 px-6 py-4 glass-panel border-b border-white/5 w-full flex items-center gap-4">
<div className="relative flex-1 max-w-md">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full bg-neutral-900/50 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/10 focus:bg-neutral-900 transition-all" placeholder="Search movies, anime, directors..." type="text"/>
</div>
<div className="ml-auto flex items-center gap-4">
<button className="relative text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-neutral-950"></span>
</button>
</div>
</div>

<div className="relative w-full h-[550px] lg:h-[600px] group">
<div className="absolute inset-0 w-full h-full">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-12 pb-16">
<div className="max-w-3xl">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] tracking-wide uppercase font-medium">Anime</span>
<span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-neutral-300 text-[10px] tracking-wide uppercase font-medium">Trending #1</span>
<div className="flex items-center gap-1 text-yellow-500 ml-2">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs font-medium text-white">9.8</span>
</div>
</div>
<h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tight mb-4 leading-[1.1]">
                            Cybernetic <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Horizons</span>
</h1>
<p className="text-neutral-300 text-sm lg:text-base font-light leading-relaxed mb-8 max-w-xl line-clamp-3">
                            In a future where humanity has merged with machines, a lone detective uncovers a conspiracy that threatens to unravel the fabric of their synthetic reality. A visual masterpiece of neon and rain.
                        </p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:play-bold" width="18"></iconify-icon>
                                Watch Trailer
                            </button>
<button className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                                Add to List
                            </button>
</div>
</div>
</div>
</div>

<div className="px-6 lg:px-12 py-8 space-y-12">

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white tracking-tight">Continue Watching</h2>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video overflow-hidden">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-indigo-500 w-[65%]"></div>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-white mb-1">Dune: Part One</h3>
<p className="text-xs text-neutral-500">1h 24m remaining</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="relative aspect-video overflow-hidden">
<img alt="Anime" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-indigo-500 w-[30%]"></div>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-white mb-1">Demon Slayer S3</h3>
<p className="text-xs text-neutral-500">Episode 4 • 12m remaining</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300 hidden md:block">
<div className="relative aspect-video overflow-hidden">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-indigo-500 w-[90%]"></div>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-white mb-1">Interstellar</h3>
<p className="text-xs text-neutral-500">2m remaining</p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300 hidden lg:block">
<div className="relative aspect-video overflow-hidden">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-indigo-500 w-[10%]"></div>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-white mb-1">Spirited Away</h3>
<p className="text-xs text-neutral-500">Starting...</p>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<div className="flex items-end gap-4">
<h2 className="text-lg font-medium text-white tracking-tight">For You</h2>
<div className="flex gap-4 border-b border-white/10 pb-1 mb-1">
<button className="text-xs font-medium text-white border-b border-white pb-3 -mb-1.5">All</button>
<button className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors pb-3">Movies</button>
<button className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors pb-3">TV Shows</button>
<button className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors pb-3">Anime</button>
</div>
</div>
<a className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1" href="#">
                            View all <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="10"></iconify-icon> 9.2
                                </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
<button className="w-full py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Details</button>
</div>
</div>
<h3 className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Blade Runner</h3>
<div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1">
<span>Sci-Fi</span>
<span>1982</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="10"></iconify-icon> 8.9
                                </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
<button className="w-full py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Details</button>
</div>
</div>
<h3 className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Akira</h3>
<div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1">
<span>Anime</span>
<span>1988</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="10"></iconify-icon> 8.5
                                </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
<button className="w-full py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Details</button>
</div>
</div>
<h3 className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">The Matrix</h3>
<div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1">
<span>Action</span>
<span>1999</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1627820751275-e44b937c5d33?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="10"></iconify-icon> 9.5
                                </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
<button className="w-full py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Details</button>
</div>
</div>
<h3 className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Your Name</h3>
<div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1">
<span>Anime</span>
<span>2016</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="10"></iconify-icon> 8.7
                                </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
<button className="w-full py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Details</button>
</div>
</div>
<h3 className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Inception</h3>
<div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1">
<span>Thriller</span>
<span>2010</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-medium text-white border border-white/10 flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="10"></iconify-icon> 9.1
                                </div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
<button className="w-full py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Details</button>
</div>
</div>
<h3 className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">Ghost in Shell</h3>
<div className="flex items-center justify-between text-[10px] text-neutral-500 mt-1">
<span>Anime</span>
<span>1995</span>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lg font-medium text-white tracking-tight mb-6">Browse Categories</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
<a className="p-4 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-850 transition-all group flex flex-col items-center justify-center gap-2 h-24" href="#">
<iconify-icon className="text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:ufo-linear" width="24"></iconify-icon>
<span className="text-xs text-neutral-300">Sci-Fi</span>
</a>
<a className="p-4 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-850 transition-all group flex flex-col items-center justify-center gap-2 h-24" href="#">
<iconify-icon className="text-yellow-400 group-hover:scale-110 transition-transform" icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
<span className="text-xs text-neutral-300">Comedy</span>
</a>
<a className="p-4 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-850 transition-all group flex flex-col items-center justify-center gap-2 h-24" href="#">
<iconify-icon className="text-red-400 group-hover:scale-110 transition-transform" icon="solar:ghost-linear" width="24"></iconify-icon>
<span className="text-xs text-neutral-300">Horror</span>
</a>
<a className="p-4 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-850 transition-all group flex flex-col items-center justify-center gap-2 h-24" href="#">
<iconify-icon className="text-pink-400 group-hover:scale-110 transition-transform" icon="solar:heart-linear" width="24"></iconify-icon>
<span className="text-xs text-neutral-300">Romance</span>
</a>
<a className="p-4 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-850 transition-all group flex flex-col items-center justify-center gap-2 h-24" href="#">
<iconify-icon className="text-blue-400 group-hover:scale-110 transition-transform" icon="solar:sword-linear" width="24"></iconify-icon>
<span className="text-xs text-neutral-300">Action</span>
</a>
<a className="p-4 bg-neutral-900 border border-white/5 rounded-xl hover:border-white/20 hover:bg-neutral-850 transition-all group flex flex-col items-center justify-center gap-2 h-24" href="#">
<iconify-icon className="text-green-400 group-hover:scale-110 transition-transform" icon="solar:mask-happly-linear" width="24"></iconify-icon>
<span className="text-xs text-neutral-300">Drama</span>
</a>
</div>
</section>
<footer className="pt-12 pb-6 border-t border-white/5 mt-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p>© 2024 Cineverse. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">API</a>
</div>
</div>
</footer>
</div>
</main>
</div>

    </>
  );
}
