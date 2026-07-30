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
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
</svg>
</div>
<div className="">
<h1 className="text-lg font-medium tracking-tight">Good evening</h1>
<p className="text-xs text-slate-400">Alex</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-5 5-5-5h5zm0 0V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800/50 rounded-xl p-3 flex items-center gap-3 hover:bg-slate-800/70 transition-colors cursor-pointer">
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1719090024421-f29c83ab4034?w=200&q=80" />
<div className="">
<p className="text-sm font-semibold">Liked Songs</p>
<p className="text-xs text-slate-400">127 songs</p>
</div>
</div>
<div className="bg-slate-800/50 rounded-xl p-3 flex items-center gap-3 hover:bg-slate-800/70 transition-colors cursor-pointer">
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1724515543157-e2ed5385d1a6?w=200&q=80" />
<div className="">
<p className="text-sm font-semibold">Recently Played</p>
<p className="text-xs text-slate-400">43 songs</p>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Recently Played</h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors">See all</button>
</div>
<div className="flex gap-4 overflow-x-auto pb-2">
<div className="flex-shrink-0 w-32 cursor-pointer group">
<div className="relative mb-3">
<img alt="" className="w-32 h-32 rounded-xl object-cover" src="https://images.unsplash.com/photo-1677586883848-695b3ad692b4?w=300&q=80" />
<button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
<svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
<p className="text-sm font-semibold mb-1">Midnight Vibes</p>
<p className="text-xs text-slate-400">Collection</p>
</div>
<div className="flex-shrink-0 w-32 cursor-pointer group">
<div className="relative mb-3">
<img alt="" className="w-32 h-32 rounded-xl object-cover" src="https://images.unsplash.com/photo-1629948618343-0d33f97a3091?w=300&q=80" />
<button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
<svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
<p className="text-sm font-semibold mb-1">Chill Beats</p>
<p className="text-xs text-slate-400">Playlist</p>
</div>
<div className="flex-shrink-0 w-32 cursor-pointer group">
<div className="relative mb-3">
<img alt="" className="w-32 h-32 rounded-xl object-cover" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=300&q=80" />
<button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
<svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
<p className="text-sm font-semibold mb-1">Electronic Pulse</p>
<p className="text-xs text-slate-400">Album</p>
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Made For You</h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors">See all</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<img alt="" className="w-14 h-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=200&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold mb-1">Daily Mix 1</p>
<p className="text-xs text-slate-400">Luna Martinez, Zara Phoenix and more</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<img alt="" className="w-14 h-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=200&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold mb-1">Discover Weekly</p>
<p className="text-xs text-slate-400">Your weekly mixtape of fresh music</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<img alt="" className="w-14 h-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1711861982584-b7493627213c?w=200&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold mb-1">Release Radar</p>
<p className="text-xs text-slate-400">Catch all the latest music from artists you follow</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="px-6 mb-20">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Top Charts</h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors">See all</button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<span className="text-sm font-bold text-slate-400 w-6">1</span>
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1719090024421-f29c83ab4034?w=200&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold">Cosmic Dreams</p>
<p className="text-xs text-slate-400">Luna Martinez</p>
</div>
<span className="text-xs text-slate-500">4:32</span>
<button className="p-1 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<span className="text-sm font-bold text-slate-400 w-6">2</span>
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1724515543157-e2ed5385d1a6?w=200&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold">Neon Nights</p>
<p className="text-xs text-slate-400">Zara Phoenix</p>
</div>
<span className="text-xs text-slate-500">3:47</span>
<button className="p-1 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<span className="text-sm font-bold text-slate-400 w-6">3</span>
<img alt="" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1677586883848-695b3ad692b4?w=200&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold">Electric Pulse</p>
<p className="text-xs text-slate-400">Marcus Chen</p>
</div>
<span className="text-xs text-slate-500">4:12</span>
<button className="p-1 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
<div className="flex items-center justify-around py-3">
<button className="flex flex-col items-center gap-1 p-2 text-blue-400">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
</svg>
<span className="text-xs font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Search</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Library</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
