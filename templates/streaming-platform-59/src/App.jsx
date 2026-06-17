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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#080808',
surface: '#121212',
border: 'rgba(255, 255, 255, 0.08)',
accent: '#ffffff',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-neutral-700 to-neutral-900 flex items-center justify-center border border-white/10 shadow-inner">
<iconify-icon className="text-white text-lg" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg">MOVIZONE</span>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="text-sm font-medium text-white px-3 py-1.5 rounded-md bg-white/5 border border-white/5 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors" href="#">Movies</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors" href="#">Series</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors" href="#">New</a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center relative group">
<iconify-icon className="absolute left-3 text-neutral-500 group-focus-within:text-white transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-surface border border-border rounded-full pl-9 pr-4 py-1.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 w-64 transition-all" placeholder="Search titles..." type="text"/>
<div className="absolute right-3 px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-medium text-neutral-500">⌘K</div>
</div>

<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" text-xl=""></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-500 rounded-full border border-background"></span>
</button>
<button className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10 overflow-hidden ml-1">
<img alt="User" className="w-full h-full opacity-80 hover:opacity-100 transition-opacity" src="https://ui-avatars.com/api/?name=User&amp;background=random&amp;color=fff"/>
</button>
</div>
</div>
</nav>

<main className="relative pt-16">

<section className="relative w-full h-[85vh] overflow-hidden flex items-end pb-24">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=2994&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 w-full flex flex-col gap-6">

<div className="flex items-center gap-3 animate-fade-in-up">
<span className="px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium tracking-wide">TOP 10</span>
<span className="text-xs font-medium text-neutral-400 tracking-wide flex items-center gap-1">
<iconify-icon className="text-blue-500" icon="solar:star-linear"></iconify-icon> 4.9 Rating
                    </span>
<span className="text-xs font-medium text-neutral-500">2024</span>
</div>

<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight max-w-3xl drop-shadow-2xl" style={{}}>Beyond the <br/> Horizon</h1>

<div className="max-w-xl space-y-4">
<p className="text-sm md:text-base text-neutral-300 leading-relaxed line-clamp-3">
                        In a future where earth is uninhabitable, a group of explorers must travel through a wormhole in space in an attempt to ensure humanity's survival. A cinematic masterpiece exploring the depths of space and human emotion.
                    </p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
<span className="px-2 py-1 rounded border border-white/10 bg-white/5">Sci-Fi</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5">Drama</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5">2h 49m</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-neutral-300">4K HDR</span>
</div>
</div>

<div className="flex items-center gap-4 pt-4">
<button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-neutral-200 transition-all active:scale-95">
<iconify-icon className="text-lg" icon="solar:play-linear" strokeWidth="2"></iconify-icon>
                        Watch Now
                    </button>
<button className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-white/20 transition-all active:scale-95">
<iconify-icon className="text-lg" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                        More Info
                    </button>
<button className="w-11 h-11 flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-neutral-400 hover:text-white transition-all ml-2">
<iconify-icon className="text-lg" icon="solar:bookmark-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
<div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center gap-2 overflow-x-auto hide-scroll mask-r">
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-black bg-white rounded border border-transparent transition-colors">All</button>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded border border-transparent hover:border-white/10 transition-all">Movies</button>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded border border-transparent hover:border-white/10 transition-all">TV Shows</button>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded border border-transparent hover:border-white/10 transition-all">Documentaries</button>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded border border-transparent hover:border-white/10 transition-all flex items-center gap-1">
<iconify-icon icon="solar:sort-linear"></iconify-icon> Genres
                </button>
</div>
</section>

<div className="space-y-12 py-10 pb-24 relative z-20 bg-background">

<div className="max-w-screen-2xl mx-auto">
<div className="px-6 mb-4 flex items-center justify-between">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:flame-linear"></iconify-icon>
                        Trending Now
                    </h2>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors flex items-center gap-1" href="#">
                        View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="overflow-x-auto hide-scroll px-6 pb-4">
<div className="flex gap-4 w-max">

<div className="w-64 group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-black py-2 rounded text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear"></iconify-icon> Play
                                    </button>
</div>
<div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur rounded text-[10px] font-medium border border-white/10 text-white">HD</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Cyber Drift</h3>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-1">
<span>2024</span>
<span className="w-0.5 h-0.5 bg-neutral-600 rounded-full"></span>
<span>Action</span>
</div>
</div>
</div>

<div className="w-64 group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-black py-2 rounded text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear"></iconify-icon> Play
                                    </button>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">The Deep End</h3>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-1">
<span>2023</span>
<span className="w-0.5 h-0.5 bg-neutral-600 rounded-full"></span>
<span>Thriller</span>
</div>
</div>
</div>

<div className="w-64 group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-black py-2 rounded text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear"></iconify-icon> Play
                                    </button>
</div>
<div className="absolute top-2 left-2 px-1.5 py-0.5 bg-indigo-600 rounded text-[10px] font-semibold text-white shadow-lg shadow-indigo-900/20">NEW</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Silent Echoes</h3>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-1">
<span>2024</span>
<span className="w-0.5 h-0.5 bg-neutral-600 rounded-full"></span>
<span>Drama</span>
</div>
</div>
</div>

<div className="w-64 group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-black py-2 rounded text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear"></iconify-icon> Play
                                    </button>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Neon Nights</h3>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-1">
<span>2023</span>
<span className="w-0.5 h-0.5 bg-neutral-600 rounded-full"></span>
<span>Sci-Fi</span>
</div>
</div>
</div>

<div className="w-64 group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white text-black py-2 rounded text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-200">
<iconify-icon icon="solar:play-linear"></iconify-icon> Play
                                    </button>
</div>
</div>
<div className="mt-3">
<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white truncate">Urban Legend</h3>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 mt-1">
<span>2022</span>
<span className="w-0.5 h-0.5 bg-neutral-600 rounded-full"></span>
<span>Horror</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-screen-2xl mx-auto">
<div className="px-6 mb-4 flex items-center justify-between">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:clock-circle-linear"></iconify-icon>
                        Continue Watching
                    </h2>
<div className="flex gap-2">
<button className="w-7 h-7 rounded border border-white/10 flex items-center justify-center hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-7 h-7 rounded border border-white/10 flex items-center justify-center hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto hide-scroll px-6 pb-4">
<div className="flex gap-4 w-max">

<div className="w-80 group relative cursor-pointer">
<div className="aspect-video w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Continue" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
<iconify-icon className="text-xl ml-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
<div className="h-full bg-indigo-600 w-3/4 relative">
<div className="absolute right-0 -top-0.5 w-2 h-2 rounded-full bg-indigo-600 shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start">
<div>
<h3 className="text-xs font-medium text-neutral-200 group-hover:text-white">Interstellar Voyage</h3>
<p className="text-[10px] text-neutral-500">1h 24m remaining</p>
</div>
<button className="text-neutral-500 hover:text-white">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="w-80 group relative cursor-pointer">
<div className="aspect-video w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img alt="Continue" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
<iconify-icon className="text-xl ml-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
<div className="h-full bg-indigo-600 w-1/4 relative">
<div className="absolute right-0 -top-0.5 w-2 h-2 rounded-full bg-indigo-600 shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
<div className="mt-2 flex justify-between items-start">
<div>
<h3 className="text-xs font-medium text-neutral-200 group-hover:text-white">Mountain Peaks</h3>
<p className="text-[10px] text-neutral-500">42m remaining</p>
</div>
<button className="text-neutral-500 hover:text-white">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-screen-2xl mx-auto pb-10">
<div className="px-6 mb-4 flex items-center justify-between">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:star-linear"></iconify-icon>
                        New Releases
                    </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-6">


<div className="group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-lg transition-colors pointer-events-none"></div>
</div>
<h3 className="text-xs font-medium text-neutral-300 group-hover:text-white mt-2 truncate">Forest Tales</h3>
<p className="text-[10px] text-neutral-500">Fantasy</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-xs font-medium text-neutral-300 group-hover:text-white mt-2 truncate">Dark Matter</h3>
<p className="text-[10px] text-neutral-500">Sci-Fi</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xs font-medium text-neutral-300 group-hover:text-white mt-2 truncate">The Lens</h3>
<p className="text-[10px] text-neutral-500">Documentary</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xs font-medium text-neutral-300 group-hover:text-white mt-2 truncate">Glitch</h3>
<p className="text-[10px] text-neutral-500">Action</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xs font-medium text-neutral-300 group-hover:text-white mt-2 truncate">Paper Walls</h3>
<p className="text-[10px] text-neutral-500">Drama</p>
</div>

<div className="group relative cursor-pointer hidden xl:block">
<div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-surface border border-white/5 relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xs font-medium text-neutral-300 group-hover:text-white mt-2 truncate">System Reboot</h3>
<p className="text-[10px] text-neutral-500">Tech</p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/90 backdrop-blur-md md:hidden z-50">
<div className="flex justify-around items-center h-16">
<a className="flex flex-col items-center gap-1 text-white" href="#">
<iconify-icon className="text-xl" icon="solar:home-linear" strokeWidth="2"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-neutral-500 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium">Search</span>
</a>
<a className="flex flex-col items-center gap-1 text-neutral-500 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:clapperboard-play-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium">Coming</span>
</a>
<a className="flex flex-col items-center gap-1 text-neutral-500 hover:text-white" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>
</div>

    </>
  );
}
