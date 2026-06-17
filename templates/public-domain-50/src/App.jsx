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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-8">
<a className="text-white text-xl tracking-tighter font-medium hover:text-red-500 transition-colors uppercase" href="#">
                        MELVIN STUDIO.
                    </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
<a className="text-white hover:text-red-400 transition-colors" href="#">Home</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#browse">Movies</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Collections</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">Legal &amp; About</a>
</div>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<div className="h-8 w-8 rounded bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-xs font-medium cursor-pointer">
                        JD
                    </div>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2059&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>


<div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
<div className="max-w-2xl space-y-6">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 border border-white/20 rounded text-[10px] uppercase tracking-wider text-white bg-white/5 backdrop-blur-sm">Public Domain</span>
<span className="text-red-500 text-xs font-medium tracking-wide flex items-center gap-1">
<iconify-icon icon="solar:flame-linear" width="14"></iconify-icon> Trending #1
                    </span>
</div>
<h1 className="text-5xl sm:text-7xl font-medium text-white tracking-tight leading-none">
                    Metropolis
                </h1>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<span className="text-green-400 font-medium">98% Match</span>
<span>1927</span>
<span className="border border-neutral-600 px-1.5 py-0.5 rounded text-[10px]">HD</span>
<span>2h 33m</span>
<span>Sci-Fi / Drama</span>
</div>
<p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-lg line-clamp-3">
                    In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded hover:bg-neutral-200 transition-colors font-medium text-sm z-30 relative">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
                        Play Now
                    </button>
<button className="flex items-center gap-2 bg-neutral-600/30 backdrop-blur-md text-white px-6 py-3 rounded hover:bg-neutral-600/50 transition-colors font-medium text-sm border border-white/10 z-30 relative">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
                        More Info
                    </button>
</div>
</div>
</div>
</header>


<main className="relative z-20 -mt-24 space-y-12 pb-20">

<div className="pl-4 sm:pl-6 lg:pl-8">
<h2 className="flex items-center gap-2 text-lg font-medium text-white tracking-tight mb-4">
                Popular Classics
                <iconify-icon className="text-neutral-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</h2>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 pr-8 snap-x">

<div className="min-w-[200px] sm:min-w-[240px] snap-start group cursor-pointer relative">
<div className="aspect-[2/3] rounded-lg overflow-hidden relative bg-neutral-800 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=1925&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<div className="flex items-center gap-2 mb-2">
<button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
</button>
<button className="h-8 w-8 rounded-full border border-white/30 bg-black/50 backdrop-blur text-white flex items-center justify-center hover:border-white transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-white text-sm font-medium">Night of the Living Dead</h3>
<p className="text-xs text-neutral-400 mt-1">1968 • Horror</p>
</div>
</div>
</div>

<div className="min-w-[200px] sm:min-w-[240px] snap-start group cursor-pointer relative">
<div className="aspect-[2/3] rounded-lg overflow-hidden relative bg-neutral-800 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<h3 className="text-white text-sm font-medium">The General</h3>
<p className="text-xs text-neutral-400 mt-1">1926 • Comedy</p>
</div>
</div>
</div>

<div className="min-w-[200px] sm:min-w-[240px] snap-start group cursor-pointer relative">
<div className="aspect-[2/3] rounded-lg overflow-hidden relative bg-neutral-800 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<h3 className="text-white text-sm font-medium">His Girl Friday</h3>
<p className="text-xs text-neutral-400 mt-1">1940 • Romance</p>
</div>
</div>
</div>

<div className="min-w-[200px] sm:min-w-[240px] snap-start group cursor-pointer relative">
<div className="aspect-[2/3] rounded-lg overflow-hidden relative bg-neutral-800 border border-white/5">
<img alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<h3 className="text-white text-sm font-medium">Charade</h3>
<p className="text-xs text-neutral-400 mt-1">1963 • Mystery</p>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/5" id="browse">
<div className="flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="text-white text-sm font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon> Filters
                        </h3>
<div className="space-y-4">

<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-neutral-500">Genres</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 appearance-none border border-neutral-700 rounded bg-neutral-900 checked:bg-red-600 checked:border-red-600 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Film Noir</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-neutral-700 rounded bg-neutral-900 checked:bg-red-600 checked:border-red-600 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Silent Films</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-neutral-700 rounded bg-neutral-900 checked:bg-red-600 checked:border-red-600 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Comedy</span>
</label>
</div>
</div>

<div className="space-y-2 pt-4 border-t border-white/5">
<label className="text-xs font-medium uppercase tracking-wider text-neutral-500">Decade</label>
<select className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-red-500/50">
<option>All Decades</option>
<option>1920s</option>
<option>1930s</option>
<option>1940s</option>
<option>1950s</option>
</select>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-6">
<h2 className="text-white font-medium text-xl">Browse Library</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort by:</span>
<button className="text-sm text-white flex items-center gap-1 hover:text-red-400 transition-colors">
                                Popularity <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">

<div className="group cursor-pointer">
<div className="aspect-[2/3] bg-neutral-800 rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white border border-white/10">8.2</div>
</div>
<h4 className="text-neutral-200 text-sm font-medium group-hover:text-white truncate">The Man Who Knew Too Much</h4>
<div className="flex justify-between items-center mt-1">
<span className="text-xs text-neutral-500">1934</span>
<iconify-icon className="text-neutral-500 hover:text-red-500 transition-colors" icon="solar:download-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[2/3] bg-neutral-800 rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white border border-white/10">7.9</div>
</div>
<h4 className="text-neutral-200 text-sm font-medium group-hover:text-white truncate">Plan 9 from Outer Space</h4>
<div className="flex justify-between items-center mt-1">
<span className="text-xs text-neutral-500">1959</span>
<iconify-icon className="text-neutral-500 hover:text-red-500 transition-colors" icon="solar:download-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[2/3] bg-neutral-800 rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white border border-white/10">8.5</div>
</div>
<h4 className="text-neutral-200 text-sm font-medium group-hover:text-white truncate">Detour</h4>
<div className="flex justify-between items-center mt-1">
<span className="text-xs text-neutral-500">1945</span>
<iconify-icon className="text-neutral-500 hover:text-red-500 transition-colors" icon="solar:download-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[2/3] bg-neutral-800 rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img alt="Movie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h4 className="text-neutral-200 text-sm font-medium group-hover:text-white truncate">Carnival of Souls</h4>
<div className="flex justify-between items-center mt-1">
<span className="text-xs text-neutral-500">1962</span>
<iconify-icon className="text-neutral-500 hover:text-red-500 transition-colors" icon="solar:download-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
<div className="bg-neutral-900/30 rounded-2xl border border-white/5 overflow-hidden">

<div className="relative aspect-video w-full bg-black group">
<img alt="Player Preview" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 flex items-center justify-center">
<button className="h-20 w-20 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_40px_rgba(220,38,38,0.5)]">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">

<div className="w-full h-1 bg-neutral-700 rounded-full mb-4 relative cursor-pointer group/track">
<div className="absolute top-0 left-0 h-full w-[30%] bg-red-600 rounded-full">
<div className="absolute right-0 -top-1.5 h-4 w-4 bg-white rounded-full opacity-0 group-hover/track:opacity-100 transition-opacity shadow"></div>
</div>
</div>
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-6">
<button><iconify-icon icon="solar:pause-bold" width="24"></iconify-icon></button>
<button><iconify-icon icon="solar:rewind-10-seconds-bold" width="24"></iconify-icon></button>
<span className="text-xs font-medium tracking-wide">24:10 / 2:33:00</span>
</div>
<div className="flex items-center gap-4">
<button><iconify-icon icon="solar:settings-linear" width="24"></iconify-icon></button>
<button><iconify-icon icon="solar:full-screen-bold" width="24"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="p-8 md:p-10 flex flex-col md:flex-row gap-10">
<div className="flex-1 space-y-6">
<div>
<h2 className="text-3xl font-medium text-white mb-2">Metropolis</h2>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<span>1927</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>2h 33m</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>Sci-Fi</span>
<span className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded text-xs ml-2 border border-white/5">IMDb 8.3</span>
</div>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                            Metropolis is a pioneering 1927 German expressionist science-fiction silent film directed by Fritz Lang. Set in a futuristic urban dystopia, it follows the attempts of Freder, the wealthy son of the city master, and Maria, a saintly figure to the workers, to overcome the vast gulf separating the classes in their city. It is regarded as one of the most influential films ever made.
                        </p>

<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Director</span>
<span className="text-sm text-white">Fritz Lang</span>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Starring</span>
<span className="text-sm text-white">Alfred Abel, Brigitte Helm</span>
</div>
</div>
</div>

<div className="w-full md:w-80 bg-neutral-950 rounded-xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl h-fit">
<div className="flex items-center justify-between pb-4 border-b border-white/5">
<h3 className="text-white font-medium">Download</h3>
<span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Legal &amp; Free</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors group">
<div>
<div className="text-sm text-white font-medium">1080p Full HD</div>
<div className="text-xs text-neutral-500">MP4 • 2.4 GB</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded bg-neutral-800 text-neutral-300 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:download-minimalistic-bold" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors group">
<div>
<div className="text-sm text-white font-medium">720p HD</div>
<div className="text-xs text-neutral-500">MP4 • 1.1 GB</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded bg-neutral-800 text-neutral-300 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:download-minimalistic-bold" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors group">
<div>
<div className="text-sm text-white font-medium">Original Cut</div>
<div className="text-xs text-neutral-500">MKV • 3.2 GB</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded bg-neutral-800 text-neutral-300 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:download-minimalistic-bold" width="16"></iconify-icon>
</button>
</div>
</div>
<p className="text-[10px] text-neutral-600 leading-snug text-center pt-2">
                            By downloading, you agree to our Terms. This film is in the Public Domain under US Copyright Law.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 border-t border-white/5 py-12" id="about">
<div className="max-w-4xl mx-auto px-4 text-center space-y-6">
<iconify-icon className="text-neutral-500" icon="solar:copyright-linear" width="40"></iconify-icon>
<h2 className="text-2xl font-medium text-white tracking-tight">100% Legal Public Domain Movies</h2>
<p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    Our library consists exclusively of films that have fallen into the public domain. This means their copyright has expired, was never renewed, or they were released freely by their creators. You can stream, download, and share these masterpieces legally without any restrictions.
                </p>
<div className="flex justify-center gap-6 pt-4 text-sm font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">DMCA</a>
<a className="hover:text-white transition-colors" href="#">Contact Support</a>
</div>
</div>
</section>
</main>
<footer className="bg-neutral-950 border-t border-white/5 py-8 text-center text-xs text-neutral-600">
<p>© 2023 Melvin Studio. Designed with care for cinema history.</p>
</footer>

    </>
  );
}
