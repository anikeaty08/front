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
      
<div className="relative w-[360px] rounded-3xl bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white shadow-2xl overflow-hidden">

<div className="h-[700px] overflow-y-auto">

<div className="px-6 pt-8 pb-4">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Search</h1>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="relative mb-6">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input className="w-full placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:bg-slate-800/70 transition-colors text-white bg-slate-700/50 border-0 rounded-xl pt-3 pr-4 pb-3 pl-12" placeholder="What do you want to listen to?" type="text"/>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-lg font-semibold tracking-tight mb-4">Browse all</h2>
<div className="grid grid-cols-2 gap-3">
<div className="relative h-24 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-[url(https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1080&amp;q=80)] bg-cover rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-lg font-semibold">Podcasts</p>
<div className="absolute -bottom-2 -right-2 transform rotate-12">
<svg className="w-12 h-12 opacity-70" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>
<div className="relative h-24 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-[url(https://images.unsplash.com/photo-1684139517679-032b7213ad2e?w=1080&amp;q=80)] bg-cover rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-lg font-semibold">Charts</p>
<div className="absolute -bottom-2 -right-2 transform rotate-12">
<svg className="w-12 h-12 opacity-70" fill="currentColor" viewbox="0 0 24 24">
<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
</svg>
</div>
</div>
<div className="relative h-24 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-[url(https://images.unsplash.com/photo-1672750771479-5ea73e9439ce?w=1080&amp;q=80)] bg-cover rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-lg font-semibold">Hip-Hop</p>
<div className="absolute -bottom-2 -right-2 transform rotate-12">
<svg className="w-12 h-12 opacity-70" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
</svg>
</div>
</div>
<div className="relative h-24 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-[url(https://images.unsplash.com/photo-1637611331620-51149c7ceb94?w=1080&amp;q=80)] bg-cover rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-lg font-semibold">Pop</p>
<div className="absolute -bottom-2 -right-2 transform rotate-12">
<svg className="w-12 h-12 opacity-70" fill="currentColor" viewbox="0 0 24 24">
<path d="M9 11H7v9h2v-9zm4 0h-2v6h2v-6zm4 0h-2v3h2v-3zM5 20h14v2H5z"></path>
</svg>
</div>
</div>
<div className="relative h-24 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-[url(https://images.unsplash.com/photo-1629948618343-0d33f97a3091?w=1080&amp;q=80)] bg-cover rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-lg font-semibold">Rock</p>
<div className="absolute -bottom-2 -right-2 transform rotate-12">
<svg className="w-12 h-12 opacity-70" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
</svg>
</div>
</div>
<div className="relative h-24 overflow-hidden cursor-pointer hover:scale-105 transition-transform bg-[url(https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?w=1080&amp;q=80)] bg-cover rounded-xl pt-4 pr-4 pb-4 pl-4">
<p className="text-lg font-semibold">Electronic</p>
<div className="absolute -bottom-2 -right-2 transform rotate-12">
<svg className="w-12 h-12 opacity-70" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Recent searches</h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors">Clear all</button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Luna Martinez</p>
<p className="text-xs text-slate-400">Artist</p>
</div>
<button className="p-1 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
<svg className="lucide lucide-clock lucide-search w-[20px] h-[20px]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">chill beats</p>
<p className="text-xs text-slate-400">Search</p>
</div>
<button className="p-1 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
<svg className="lucide lucide-clock lucide-album w-[20px] h-[20px]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Electronic Pulse</p>
<p className="text-xs text-slate-400">Album</p>
</div>
<button className="p-1 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-lg font-semibold tracking-tight mb-4">Trending now</h2>
<div className="flex gap-4 overflow-x-auto pb-2">
<div className="flex-shrink-0 w-32 cursor-pointer group">
<div className="relative mb-3">
<img alt="" className="w-32 h-32 object-cover rounded-xl" src="https://images.unsplash.com/photo-1601315488950-3b5047998b38?w=1080&amp;q=80"/>
<button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
<svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
<p className="text-sm font-semibold mb-1">Viral Hits</p>
<p className="text-xs text-slate-400">Playlist</p>
</div>
<div className="flex-shrink-0 w-32 cursor-pointer group">
<div className="relative mb-3">
<img alt="" className="w-32 h-32 object-cover rounded-xl" src="https://images.unsplash.com/photo-1673861561475-e0415df68554?w=1080&amp;q=80"/>
<button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
<svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
<p className="text-sm font-semibold mb-1">Today's Top Hits</p>
<p className="text-xs text-slate-400">Playlist</p>
</div>
<div className="flex-shrink-0 w-32 cursor-pointer group">
<div className="relative mb-3">
<img alt="" className="w-32 h-32 object-cover rounded-xl" src="https://images.unsplash.com/photo-1672080070762-764c74ee1227?w=1080&amp;q=80"/>
<button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
<svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
<p className="text-sm font-semibold mb-1">New Music Friday</p>
<p className="text-xs text-slate-400">Playlist</p>
</div>
</div>
</div>

<div className="px-6 mb-20">
<h2 className="text-lg font-semibold tracking-tight mb-4">Search in</h2>
<div className="flex flex-wrap gap-2">
<button className="hover:bg-slate-800/70 transition-colors text-sm font-medium bg-slate-800/50 rounded-full pt-2 pr-4 pb-2 pl-4">Songs</button>
<button className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800/70 rounded-full text-sm font-medium transition-colors">Artists</button>
<button className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800/70 rounded-full text-sm font-medium transition-colors">Albums</button>
<button className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800/70 rounded-full text-sm font-medium transition-colors">Playlists</button>
<button className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800/70 rounded-full text-sm font-medium transition-colors">Podcasts</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
<div className="flex items-center justify-around py-3">
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
</svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-blue-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
</svg>
<span className="text-xs font-medium">Search</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Library</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Profile</span>
</button>
</div>
</div>
</div>

    </>
  );
}
