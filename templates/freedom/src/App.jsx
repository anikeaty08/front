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
      
<div className="flex flex-1 overflow-hidden p-2 gap-2">

<aside className="hidden md:flex w-80 flex-col gap-2 h-full">

<div className="bg-neutral-900/80 backdrop-blur-md rounded-lg p-5 flex flex-col gap-5 border border-neutral-800/50">
<div className="flex items-center gap-1 text-white mb-2">
<span className="text-xl font-semibold tracking-tighter">FREEDOM-MUSIC</span>
</div>
<nav className="flex flex-col gap-4">
<a className="flex items-center gap-4 text-white transition-colors" href="#">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm">Home</span>
</a>
<a className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm">Search</span>
</a>
</nav>
</div>

<div className="flex-1 bg-neutral-900/80 backdrop-blur-md rounded-lg p-2 flex flex-col border border-neutral-800/50 overflow-hidden">
<div className="p-3 flex items-center justify-between text-neutral-400 hover:text-white transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:library-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm">Your Library</span>
</div>
<div className="flex gap-2">
<button className="hover:bg-neutral-800 p-1 rounded-full transition"><iconify-icon className="" icon="solar:add-circle-linear" width="20"></iconify-icon></button>
<button className="hover:bg-neutral-800 p-1 rounded-full transition"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="flex gap-2 px-3 pb-3 mt-1">
<button className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-full text-xs font-medium transition text-white">Playlists</button>
<button className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-full text-xs font-medium transition text-white">Artists</button>
</div>
<div className="flex-1 overflow-y-auto mt-2 pr-2 pl-2 space-y-1">

<div className="flex items-center gap-3 p-2 hover:bg-neutral-800 rounded-md cursor-pointer group">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Liked Songs</span>
<span className="text-xs text-neutral-400">Playlist • 432 songs</span>
</div>
</div>

<div className="flex items-center gap-3 p-2 hover:bg-neutral-800 rounded-md cursor-pointer group">
<div className="w-12 h-12 bg-neutral-800 rounded flex items-center justify-center overflow-hidden">
<img alt="Cover" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Deep Focus</span>
<span className="text-xs text-neutral-400">Playlist • Spotify</span>
</div>
</div>

<div className="flex items-center gap-3 p-2 hover:bg-neutral-800 rounded-md cursor-pointer group">
<div className="w-12 h-12 bg-neutral-800 rounded flex items-center justify-center overflow-hidden">
<img alt="Cover" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Discover Weekly</span>
<span className="text-xs text-neutral-400">Playlist • Spotify</span>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 bg-neutral-900/90 rounded-lg overflow-y-auto relative border border-neutral-800/50">

<header className="sticky top-0 z-20 bg-neutral-900/60 backdrop-blur-xl px-6 py-4 flex items-center justify-between transition-all">
<div className="flex gap-2">
<button className="bg-black/40 hover:bg-black/60 w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="bg-black/40 hover:bg-black/60 w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block hover:scale-105 transition-transform text-xs font-semibold text-black bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4">Freakie?</button>
<button className="hidden sm:flex items-center gap-2 bg-black/50 hover:bg-neutral-800 pr-3 pl-1 py-1 rounded-full text-xs font-medium transition text-white">
<div className="flex text-[10px] font-bold text-black bg-emerald-500 w-6 h-6 rounded-full items-center justify-center">F</div>
</button>
</div>
</header>

<div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-emerald-900/40 via-neutral-900/20 to-neutral-900 pointer-events-none z-0"></div>
<div className="relative z-10 px-6 pb-24">

<h2 className="text-2xl font-semibold tracking-tight text-white mb-5 mt-2">Good afternoon</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">

<div className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center group cursor-pointer h-16 sm:h-20">
<div className="h-full w-16 sm:w-20 bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-white opacity-60" icon="solar:heart-bold" width="24"></iconify-icon>
</div>
<span className="font-semibold text-sm px-4 text-white line-clamp-2">Liked Songs</span>
<div className="ml-auto mr-4 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center group cursor-pointer h-16 sm:h-20">
<img alt="Mix" className="h-full w-16 sm:w-20 object-cover shrink-0" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<span className="font-semibold text-sm px-4 text-white line-clamp-2">Electronic Mix</span>
<div className="ml-auto mr-4 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center group cursor-pointer h-16 sm:h-20">
<img alt="Mix" className="h-full w-16 sm:w-20 object-cover shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-semibold text-sm px-4 text-white line-clamp-2">Daily Drive</span>
<div className="ml-auto mr-4 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center group cursor-pointer h-16 sm:h-20">
<img alt="Mix" className="h-full w-16 sm:w-20 object-cover shrink-0" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<span className="font-semibold text-sm px-4 text-white line-clamp-2">Podcast Charts</span>
<div className="ml-auto mr-4 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center group cursor-pointer h-16 sm:h-20">
<img alt="Mix" className="h-full w-16 sm:w-20 object-cover shrink-0" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<span className="font-semibold text-sm px-4 text-white line-clamp-2">On Repeat</span>
<div className="ml-auto mr-4 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center group cursor-pointer h-16 sm:h-20">
<img alt="Mix" className="h-full w-16 sm:w-20 object-cover shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="font-semibold text-sm px-4 text-white line-clamp-2">Jazz Vibes</span>
<div className="ml-auto mr-4 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white hover:underline cursor-pointer">Made for You</h2>
<span className="text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer uppercase tracking-wider">Show all</span>
</div>
<div className="playlist-grid gap-5 mb-10">

<div className="bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition duration-300 group cursor-pointer flex flex-col gap-3">
<div className="relative aspect-square rounded-md overflow-hidden shadow-xl">
<img alt="Art" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform scale-100 active:scale-95">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white truncate">Daily Mix 1</span>
<span className="text-xs text-neutral-400 line-clamp-2">Made for you based on your recent listening.</span>
</div>
</div>

<div className="bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition duration-300 group cursor-pointer flex flex-col gap-3">
<div className="relative aspect-square rounded-md overflow-hidden shadow-xl">
<img alt="Art" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform scale-100 active:scale-95">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white truncate">Discover Weekly</span>
<span className="text-xs text-neutral-400 line-clamp-2">New music, updated every Monday.</span>
</div>
</div>

<div className="bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition duration-300 group cursor-pointer flex flex-col gap-3">
<div className="relative aspect-square rounded-md overflow-hidden shadow-xl">
<img alt="Art" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform scale-100 active:scale-95">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white truncate">Release Radar</span>
<span className="text-xs text-neutral-400 line-clamp-2">Catch up on the latest releases from artists.</span>
</div>
</div>

<div className="bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition duration-300 group cursor-pointer flex flex-col gap-3">
<div className="relative aspect-square rounded-md overflow-hidden shadow-xl">
<img alt="Art" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform scale-100 active:scale-95">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white truncate">On Repeat</span>
<span className="text-xs text-neutral-400 line-clamp-2">Songs you love right now.</span>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white hover:underline cursor-pointer">Recently Played</h2>
<span className="text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer uppercase tracking-wider">Show all</span>
</div>
<div className="playlist-grid gap-5">

<div className="bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition duration-300 group cursor-pointer flex flex-col gap-3">
<div className="relative aspect-square rounded-md overflow-hidden shadow-xl">
<img alt="Art" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform scale-100 active:scale-95">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white truncate">Late Night Jazz</span>
<span className="text-xs text-neutral-400 line-clamp-2">Soft instrumentals for late hours.</span>
</div>
</div>

<div className="bg-neutral-800/40 p-4 rounded-lg hover:bg-neutral-800 transition duration-300 group cursor-pointer flex flex-col gap-3">
<div className="relative aspect-square rounded-md overflow-hidden shadow-xl">
<img alt="Art" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform scale-100 active:scale-95">
<iconify-icon className="text-black ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white truncate">Indie Vibes</span>
<span className="text-xs text-neutral-400 line-clamp-2">The best of the new indie scene.</span>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>
</div>

<footer className="h-20 bg-black border-t border-neutral-800 px-4 grid grid-cols-3 items-center z-50">

<div className="flex items-center gap-4 min-w-0">
<div className="w-14 h-14 rounded overflow-hidden shadow-sm relative group cursor-pointer">
<img alt="Current Track" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex flex-col justify-center min-w-0">
<a className="text-sm font-medium hover:underline text-white truncate" href="#">Midnight City</a>
<a className="text-[11px] text-neutral-400 hover:text-white hover:underline truncate" href="#">M83</a>
</div>
<button className="text-emerald-500 hover:scale-110 transition ml-2">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</button>
</div>

<div className="flex flex-col items-center max-w-lg w-full justify-self-center gap-1">
<div className="flex items-center gap-5 mb-1">
<button className="text-neutral-400 hover:text-white transition cursor-default sm:cursor-pointer">
<iconify-icon icon="solar:shuffle-linear" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition">
<iconify-icon icon="solar:skip-previous-linear" width="24"></iconify-icon>
</button>
<button className="bg-white rounded-full text-black w-8 h-8 flex items-center justify-center hover:scale-105 transition active:scale-95">
<iconify-icon className="ml-0.5" icon="solar:play-bold" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition">
<iconify-icon icon="solar:skip-next-linear" width="24"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition cursor-default sm:cursor-pointer">
<iconify-icon icon="solar:repeat-linear" width="20"></iconify-icon>
</button>
</div>
<div className="w-full flex items-center gap-2 text-xs font-medium text-neutral-400 group">
<span>0:42</span>
<div className="relative flex-1 h-1 bg-neutral-600 rounded-full group hover:h-1.5 transition-all cursor-pointer">
<div className="absolute top-0 left-0 h-full w-1/3 bg-white rounded-full hover:bg-emerald-500 transition-colors"></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" max="100" min="0" type="range" value="33"/>
</div>
<span>4:03</span>
</div>
</div>

<div className="flex items-center justify-end gap-3 text-neutral-400">
<button className="hover:text-white transition hidden sm:block">
<iconify-icon icon="solar:microphone-2-linear" width="18"></iconify-icon>
</button>
<button className="hover:text-white transition hidden sm:block">
<iconify-icon icon="solar:playlist-linear" width="18"></iconify-icon>
</button>
<button className="hover:text-white transition">
<iconify-icon icon="solar:devices-linear" width="18"></iconify-icon>
</button>
<div className="flex items-center gap-2 w-24 group">
<iconify-icon icon="solar:volume-small-linear" width="20"></iconify-icon>
<div className="relative flex-1 h-1 bg-neutral-600 rounded-full group hover:h-1.5 transition-all cursor-pointer">
<div className="absolute top-0 left-0 h-full w-2/3 bg-white rounded-full hover:bg-emerald-500 transition-colors"></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" max="100" min="0" type="range" value="66"/>
</div>
</div>
<button className="hover:text-white transition hidden sm:block">
<iconify-icon icon="solar:full-screen-linear" width="18"></iconify-icon>
</button>
</div>
</footer>

    </>
  );
}
