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



    let isPlaying = false;
    const playBtn = document.getElementById('playBtn');
    const miniPlayBtn = document.getElementById('miniPlayBtn');

    function togglePlay() {
      isPlaying = !isPlaying;
      const playIcon = '<svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
      const pauseIcon = '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
      const miniPlayIcon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
      const miniPauseIcon = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
      
      playBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
      miniPlayBtn.innerHTML = isPlaying ? miniPauseIcon : miniPlayIcon;
    }

    playBtn.addEventListener('click', togglePlay);
    miniPlayBtn.addEventListener('click', togglePlay);
  
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
      
<div className="mx-auto flex flex-col lg:flex-row gap-8">

<div className="relative w-[360px] rounded-3xl bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white shadow-2xl overflow-hidden">
<div className="px-6 pt-8">

<div className="flex items-center justify-between mb-8">
<button aria-label="Back" className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="text-center">
<h2 className="text-sm font-semibold">Midnight Vibes</h2>
<span className="text-xs text-slate-400">Collection • 18 tracks</span>
</div>
<button aria-label="More" className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="relative mb-6">
<div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
<img alt="Album Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1719090024421-f29c83ab4034?w=1080&q=80" />
</div>
</div>

<div className="text-center mb-6">
<div className="flex items-center justify-center gap-2 mb-1">
<h3 className="text-xl font-semibold">Cosmic Dreams</h3>
<span className="text-xs px-2 py-1 rounded-full bg-slate-700 font-semibold">NEW</span>
</div>
<p className="text-slate-400">Luna Martinez</p>
</div>

<div className="mb-8">
<div className="relative">
<input className="w-full h-1 appearance-none cursor-pointer slider bg-slate-700 rounded-lg" max="100" min="0" type="range" value="35" />
</div>
<div className="flex justify-between text-xs text-slate-400 mt-2">
<span>2:14</span>
<span>4:32</span>
</div>
</div>

<div className="flex items-center justify-center gap-6 mb-8">
<button aria-label="Shuffle" className="p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button aria-label="Previous" className="p-3 text-white hover:scale-105 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-16 h-16 flex hover:scale-105 transition-transform text-black bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg items-center justify-center" id="playBtn"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg></button>
<button aria-label="Next" className="p-3 text-white hover:scale-105 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button aria-label="Repeat" className="p-2 text-slate-400 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path className="" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex items-center gap-3 mb-6">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input className="flex-1 h-1 appearance-none cursor-pointer slider bg-slate-700 rounded-lg" max="100" min="0" type="range" value="70" />
</div>
</div>
</div>

<div className="relative w-[360px] rounded-3xl bg-black text-white shadow-2xl overflow-hidden">
<div className="bg-gradient-to-t from-[#030406] to-[#202839] pt-8 pr-6 pl-6">

<div className="flex items-center justify-between mb-6">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="text-center">
<div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-2"></div>
<h2 className="text-sm font-semibold">Up Next</h2>
<span className="text-xs text-slate-400">From Midnight Vibes</span>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="mb-4">
<h3 className="uppercase text-xs font-semibold text-slate-400 tracking-wider mb-3">Now Playing</h3>
<div className="flex gap-3 bg-slate-800/50 border-slate-50/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 items-center">
<img alt="" className="w-12 h-12 object-cover rounded-lg" src="https://images.unsplash.com/photo-1719090024421-f29c83ab4034?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-semibold">Cosmic Dreams</p>
<p className="text-xs text-slate-400">Luna Martinez</p>
</div>
<svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
<path className="" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"></path>
</svg>
</div>
</div>

<div className="">
<h3 className="uppercase text-xs font-semibold text-slate-400 tracking-wider mb-3">Next Tracks</h3>
<div className="max-h-80 overflow-y-auto space-y-2">
<div className="flex gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1724515543157-e2ed5385d1a6?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Neon Nights</p>
<p className="text-xs text-slate-400">Zara Phoenix</p>
</div>
<span className="text-xs text-slate-500">3:47</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-slate-800/30 rounded-lg transition-colors cursor-pointer">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1677586883848-695b3ad692b4?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Electric Pulse</p>
<p className="text-xs text-slate-400">Marcus Chen</p>
</div>
<span className="text-xs text-slate-500">4:12</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-slate-800/30 rounded-lg transition-colors cursor-pointer">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1629948618343-0d33f97a3091?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Gravity Falls</p>
<p className="text-xs text-slate-400">Aria Storm</p>
</div>
<span className="text-xs text-slate-500">2:58</span>
</div>
<div className="flex gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Silver Waves</p>
<p className="text-xs text-slate-400">Echo Rivers</p>
</div>
<span className="text-xs text-slate-500">3:29</span>
</div></div>
<div className="flex gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Velvet Sky</p>
<p className="text-xs text-slate-400">Nova James</p>
</div>
<span className="text-xs text-slate-500">4:01</span>
</div><div className="flex gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Crystal Dreams</p>
<p className="text-xs text-slate-400">Kai Winters</p>
</div>
<span className="text-xs text-slate-500">3:15</span>
</div><div className="flex gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer rounded-lg pt-2 pr-2 pb-2 pl-2 items-center">
<img alt="" className="w-10 h-10 object-cover rounded-md" src="https://images.unsplash.com/photo-1711861982584-b7493627213c?w=1080&q=80" />
<div className="flex-1">
<p className="text-sm font-medium">Midnight Rain</p>
<p className="text-xs text-slate-400">Sage Morgan</p>
</div>
<span className="text-xs text-slate-500">3:44</span>
</div></div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl pt-3 pr-3 pb-3 pl-3 backdrop-blur-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 object-cover rounded-lg" src="https://images.unsplash.com/photo-1719090024421-f29c83ab4034?w=1080&q=80" />
<div className="">
<p className="text-sm font-semibold">Cosmic Dreams</p>
<p className="text-xs text-slate-200">Luna Martinez</p>
</div>
</div>
<button className="p-2 hover:scale-110 transition-transform" id="miniPlayBtn"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg></button>
</div>
</div>
</div>
</div>



    </>
  );
}
