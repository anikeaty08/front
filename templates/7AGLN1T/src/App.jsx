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
<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
<span className="text-lg font-semibold">A</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight">Your Library</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="flex gap-2 mb-6">
<button className="hover:bg-slate-800/70 transition-colors text-sm font-medium bg-slate-700/50 rounded-full pt-2 pr-4 pb-2 pl-4">Recently played</button>
<button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full text-sm font-medium transition-colors text-black">Playlists</button>
<button className="hover:bg-slate-800/70 transition-colors text-sm font-medium bg-slate-700/50 rounded-full pt-2 pr-4 pb-2 pl-4">Artists</button>
</div>

<div className="flex items-center justify-between mb-4">
<button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm">Recently played</span>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="px-6 mb-6">
<div className="grid grid-cols-2 gap-2">
<div className="flex hover:bg-slate-800/50 transition-colors cursor-pointer bg-slate-700/30 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<div className="w-12 h-12 flex bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg mr-3 items-center justify-center">
<svg className="w-6 h-6 text-white" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate">Liked Songs</p>
</div>
</div>
<div className="flex hover:bg-slate-800/50 transition-colors cursor-pointer bg-slate-700/30 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<div className="w-12 h-12 flex bg-gradient-to-tl from-blue-400 to-cyan-400 rounded-lg mr-3 items-center justify-center">
<svg className="lucide lucide-download w-[24px] h-[24px]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate">Downloaded</p>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-lg font-bold tracking-tight mb-4">Made for you</h2>
<div className="space-y-3">
<div className="flex gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-16 h-16 object-cover rounded-lg" src="https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Discover Weekly</p>
<p className="text-xs text-slate-400 truncate">Your weekly mixtape of fresh music</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer">
<div className="w-16 h-16 flex bg-[url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?w=1080&amp;q=80)] bg-cover rounded-lg items-center justify-center">
<svg className="w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Release Radar</p>
<p className="text-xs text-slate-400 truncate">Catch all the latest music from artists you follow</p>
</div>
<button className="hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 rounded-full pt-2 pr-2 pb-2 pl-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-lg font-semibold tracking-tight mb-4">Recently played</h2>
<div className="space-y-3">
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-16 h-16 object-cover rounded-lg" src="https://images.unsplash.com/photo-1676022763096-a1ad12b2e370?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Midnight Vibes</p>
<p className="text-xs text-slate-400 truncate">Playlist • 127 songs</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-16 h-16 object-cover rounded-lg" src="https://images.unsplash.com/photo-1696550580343-4f339143b465?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Electronic Dreams</p>
<p className="text-xs text-slate-400 truncate">Album • Luna Martinez</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-16 h-16 object-cover rounded-lg" src="https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Chill Hip-Hop</p>
<p className="text-xs text-slate-400 truncate">Playlist • 84 songs</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<div className="w-16 h-16 flex bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=1080&amp;q=80)] bg-cover rounded-lg items-center justify-center">
<svg className="w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="truncate text-sm font-semibold mb-1">Tech Talk Daily</p>
<p className="text-xs text-slate-400 truncate">Podcast • 142 episodes</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-16 h-16 object-cover rounded-lg" src="https://images.unsplash.com/photo-1673951284213-2a3550681b7d?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Summer Road Trip</p>
<p className="text-xs text-slate-400 truncate">Playlist • 56 songs</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-16 h-16 object-cover rounded-lg" src="https://images.unsplash.com/photo-1673861561475-e0415df68554?w=1080&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold mb-1 truncate">Focus Flow</p>
<p className="text-xs text-slate-400 truncate">Playlist • 73 songs</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="px-6 mb-20">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Artists</h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors">Show all</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate">Luna Martinez</p>
<p className="text-xs text-slate-400 truncate">Artist</p>
</div>
<button className="px-4 py-1 bg-slate-800/50 hover:bg-slate-800/70 rounded-full text-xs font-medium transition-colors opacity-0 group-hover:opacity-100">Follow</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate">Alex Rivers</p>
<p className="text-xs text-slate-400 truncate">Artist</p>
</div>
<button className="px-4 py-1 bg-green-500 hover:bg-green-600 rounded-full text-xs font-medium transition-colors text-black opacity-0 group-hover:opacity-100">Following</button>
</div>
<div className="flex items-center gap-3 hover:bg-slate-800/30 rounded-lg p-2 transition-colors cursor-pointer group">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold truncate">Maya Chen</p>
<p className="text-xs text-slate-400 truncate">Artist</p>
</div>
<button className="px-4 py-1 bg-slate-800/50 hover:bg-slate-800/70 rounded-full text-xs font-medium transition-colors opacity-0 group-hover:opacity-100">Follow</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
<div className="flex items-center justify-around py-3">
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
</svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
</svg>
<span className="text-xs">Search</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-blue-400">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
</svg>
<span className="text-xs font-medium">Library</span>
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
