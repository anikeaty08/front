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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 border-b bg-[#09090b]/80 backdrop-blur-xl border-black/5">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-8 md:gap-12">
<a className="text-xl font-semibold tracking-tighter hover:opacity-80 transition-opacity text-black" href="#">
                        HCN
                    </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium transition-colors text-black" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-zinc-600 hover:text-black" href="#">Movies</a>
<a className="text-sm font-medium transition-colors text-zinc-600 hover:text-black" href="#">TV Shows</a>
<a className="text-sm font-medium transition-colors text-zinc-600 hover:text-black" href="#">New</a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500 text-lg group-focus-within:text-zinc-300 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full sm:w-64 pl-10 pr-3 py-1.5 border rounded-full leading-5 placeholder-zinc-500 focus:outline-none focus:bg-zinc-900 focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all text-sm border-zinc-200 bg-zinc-100/50 text-zinc-700" placeholder="Search movies, shows..." type="text"/>
</div>
<button className="p-2 sm:hidden transition-colors text-zinc-600 hover:text-black">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="p-1 rounded-full border overflow-hidden transition-all border-black/10 hover:border-black/20 bg-zinc-100">
<img alt="User profile" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-40 lg:pt-56 lg:pb-64 overflow-hidden border-b border-black/5">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover object-top opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/40 to-transparent"></div>
</div>

<div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm border bg-black/10 text-black border-black/10">Movie</span>
<span className="text-sm font-medium text-zinc-600">2024</span>
<span className="text-sm font-medium flex items-center gap-1 text-zinc-600">
<iconify-icon className="text-yellow-500" icon="solar:star-linear"></iconify-icon>
                        8.9
                    </span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6 text-black">
                    Echoes of Eternity
                </h1>
<p className="text-base lg:text-lg mb-8 leading-relaxed max-w-xl text-zinc-600">
                    When a deep-space exploration vessel discovers a derelict station at the edge of the known universe, the crew uncovers a secret that could rewrite the history of humanity.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] gap-2 text-white bg-black hover:bg-zinc-800">
<iconify-icon className="text-lg" icon="solar:play-linear"></iconify-icon>
                        Watch Trailer
                    </button>
<button className="inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-full backdrop-blur-sm transition-colors gap-2 border-black/10 text-black bg-black/5 hover:bg-black/10">
<iconify-icon className="text-lg text-zinc-600" icon="solar:add-circle-linear"></iconify-icon>
                        Add to List
                    </button>
</div>
</div>
</div>
</header>

<main className="relative z-10 -mt-20 lg:-mt-32 pb-24 space-y-16">

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-black">Trending Now</h2>
<p className="text-sm text-zinc-500 mt-1">Most watched this week</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border transition-all border-black/5 bg-zinc-100/50 text-zinc-600 hover:text-black hover:bg-zinc-200">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="p-2 rounded-full border transition-all border-black/5 bg-zinc-100/50 text-zinc-600 hover:text-black hover:bg-zinc-200">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto hide-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">

<a className="w-36 sm:w-48 lg:w-56 shrink-0 group block" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden border mb-3 shadow-lg bg-zinc-100 border-black/5">
<img alt="Poster" className="object-cover w-full h-full group-hover:scale-105 group-hover:opacity-50 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border bg-black/20 border-black/30 text-black">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 backdrop-blur-md px-1.5 py-0.5 rounded text-xs font-medium border bg-white/60 text-black border-black/10">
                            HD
                        </div>
</div>
<h3 className="text-sm font-medium group-hover:text-white transition-colors truncate text-zinc-800">Neon Genesis</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">Sci-Fi</span>
</div>
</a>

<a className="w-36 sm:w-48 lg:w-56 shrink-0 group block" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden border mb-3 shadow-lg bg-zinc-100 border-black/5">
<img alt="Poster" className="object-cover w-full h-full group-hover:scale-105 group-hover:opacity-50 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border bg-black/20 border-black/30 text-black">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-sm font-medium group-hover:text-white transition-colors truncate text-zinc-800">The Last Symphony</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">2023</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">Drama</span>
</div>
</a>

<a className="w-36 sm:w-48 lg:w-56 shrink-0 group block" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden border mb-3 shadow-lg bg-zinc-100 border-black/5">
<img alt="Poster" className="object-cover w-full h-full group-hover:scale-105 group-hover:opacity-50 transition-all duration-500" src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border bg-black/20 border-black/30 text-black">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 backdrop-blur-md px-1.5 py-0.5 rounded text-xs font-medium border bg-white/60 text-black border-black/10">
                            4K
                        </div>
</div>
<h3 className="text-sm font-medium group-hover:text-white transition-colors truncate text-zinc-800">Midnight Protocol</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">Thriller</span>
</div>
</a>

<a className="w-36 sm:w-48 lg:w-56 shrink-0 group block" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden border mb-3 shadow-lg bg-zinc-100 border-black/5">
<img alt="Poster" className="object-cover w-full h-full group-hover:scale-105 group-hover:opacity-50 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border bg-black/20 border-black/30 text-black">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-sm font-medium group-hover:text-white transition-colors truncate text-zinc-800">Wanderlust</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">2022</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">Adventure</span>
</div>
</a>

<a className="w-36 sm:w-48 lg:w-56 shrink-0 group block" href="#">
<div className="relative aspect-[2/3] rounded-xl overflow-hidden border mb-3 shadow-lg bg-zinc-100 border-black/5">
<div className="absolute inset-0 bg-gradient-to-br z-10 from-indigo-100/40 to-zinc-100"></div>
<img alt="Poster" className="object-cover w-full h-full group-hover:scale-105 group-hover:opacity-50 transition-all duration-500" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
<div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border bg-black/20 border-black/30 text-black">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-sm font-medium group-hover:text-white transition-colors truncate text-zinc-800">Abstract Reality</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500">2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-500">Documentary</span>
</div>
</a>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-xl font-semibold tracking-tight mb-6 text-black">Continue Watching</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl border transition-colors bg-zinc-100/30 border-black/5 hover:bg-zinc-100/60" href="#">
<div className="relative w-full sm:w-40 aspect-video rounded-lg overflow-hidden shrink-0 bg-zinc-200">
<img alt="Thumbnail" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>

<div className="absolute bottom-0 left-0 w-full h-1 backdrop-blur-sm bg-zinc-200/80">
<div className="h-full w-2/3 bg-black"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40">
<iconify-icon className="text-3xl text-black" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium truncate text-zinc-900">Echoes of Eternity</h3>
<p className="text-xs text-zinc-500 mt-1">S1:E4 "The Anomaly"</p>
<p className="text-xs mt-2 text-zinc-600">42m remaining</p>
</div>
</a>

<a className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl border transition-colors bg-zinc-100/30 border-black/5 hover:bg-zinc-100/60" href="#">
<div className="relative w-full sm:w-40 aspect-video rounded-lg overflow-hidden shrink-0 bg-zinc-200">
<img alt="Thumbnail" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-0 left-0 w-full h-1 backdrop-blur-sm bg-zinc-200/80">
<div className="h-full w-1/4 bg-black"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40">
<iconify-icon className="text-3xl text-black" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium truncate text-zinc-900">Neon Genesis</h3>
<p className="text-xs text-zinc-500 mt-1">Feature Film</p>
<p className="text-xs mt-2 text-zinc-600">1h 15m remaining</p>
</div>
</a>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-xl font-semibold tracking-tight mb-6 text-black">Explore Genres</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<a className="px-4 py-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 group border-black/5 bg-zinc-100/40 hover:bg-zinc-200 hover:border-black/10" href="#">
<iconify-icon className="text-2xl group-hover:text-white transition-colors text-zinc-600" icon="solar:rocket-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors text-zinc-700">Action</span>
</a>
<a className="px-4 py-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 group border-black/5 bg-zinc-100/40 hover:bg-zinc-200 hover:border-black/10" href="#">
<iconify-icon className="text-2xl group-hover:text-white transition-colors text-zinc-600" icon="solar:ghost-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors text-zinc-700">Horror</span>
</a>
<a className="px-4 py-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 group border-black/5 bg-zinc-100/40 hover:bg-zinc-200 hover:border-black/10" href="#">
<iconify-icon className="text-2xl group-hover:text-white transition-colors text-zinc-600" icon="solar:masks-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors text-zinc-700">Comedy</span>
</a>
<a className="px-4 py-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 group border-black/5 bg-zinc-100/40 hover:bg-zinc-200 hover:border-black/10" href="#">
<iconify-icon className="text-2xl group-hover:text-white transition-colors text-zinc-600" icon="solar:heart-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors text-zinc-700">Romance</span>
</a>
<a className="px-4 py-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 group border-black/5 bg-zinc-100/40 hover:bg-zinc-200 hover:border-black/10" href="#">
<iconify-icon className="text-2xl group-hover:text-white transition-colors text-zinc-600" icon="solar:planet-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors text-zinc-700">Sci-Fi</span>
</a>
<a className="px-4 py-6 rounded-xl border transition-all flex flex-col items-center justify-center gap-2 group border-black/5 bg-zinc-100/40 hover:bg-zinc-200 hover:border-black/10" href="#">
<iconify-icon className="text-2xl group-hover:text-white transition-colors text-zinc-600" icon="solar:map-point-wave-linear"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white transition-colors text-zinc-700">Adventure</span>
</a>
</div>
</section>
</main>

<footer className="border-t bg-[#09090b] pt-12 pb-8 border-black/5">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-black">HCN</span>
<span className="text-sm text-zinc-400">© 2024. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-zinc-500 transition-colors hover:text-black" href="#">Terms</a>
<a className="text-sm text-zinc-500 transition-colors hover:text-black" href="#">Privacy</a>
<a className="text-sm text-zinc-500 transition-colors hover:text-black" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 transition-colors hover:text-black" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
<a className="text-zinc-500 transition-colors hover:text-black" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
