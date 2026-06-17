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
      

<aside className="w-64 border-r border-white/5 bg-neutral-950/50 hidden md:flex flex-col justify-between h-full shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:music-note-slider-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">ZES<span className="text-neutral-500 font-normal">STUDIO</span></span>
</div>
</div>

<nav className="p-4 space-y-1">
<div className="px-2 pb-2 text-xs font-medium text-neutral-500 tracking-wider uppercase">Menu</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-md border border-white/5" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:vinyl-record-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    My Library
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:upload-track-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Distribution
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Royalties
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Collaborations
                </a>
<div className="px-2 pt-6 pb-2 text-xs font-medium text-neutral-500 tracking-wider uppercase">Tools</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Voice Morph
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Music Video Gen
                </a>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer group">
<img alt="Profile" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=zes"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate flex items-center gap-1">
                        Alex Rivera
                        <iconify-icon className="text-blue-400" icon="solar:verified-check-linear" width="12"></iconify-icon>
</p>
<p className="text-[10px] text-neutral-500 truncate">Official Artist</p>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-neutral-950">

<header className="h-16 glass sticky top-0 z-30 flex items-center justify-between px-6 shrink-0">

<div className="relative w-64 hidden md:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Search tracks, tools, genres..." type="text"/>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center gap-4">

<div className="flex items-center gap-3 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full animate-glow">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-yellow-400" icon="solar:bolt-circle-bold" width="16"></iconify-icon>
<span className="text-xs font-semibold text-white tracking-wide">480 ZES</span>
</div>
<div className="h-3 w-px bg-white/10"></div>
<span className="text-[10px] text-indigo-300 font-medium">+30 Daily</span>
</div>

<button className="relative text-neutral-400 hover:text-white">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-black"></span>
</button>
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-md hover:bg-neutral-200 transition-colors">
<span>Upgrade</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">

<div className="glass rounded-xl p-6 border border-white/5 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                                    AI Studio <span className="text-xs font-normal text-neutral-500 bg-white/5 px-2 py-0.5 rounded ml-2">Engine V8</span>
</h2>
<div className="flex gap-2">
<button className="text-xs text-neutral-400 hover:text-white px-3 py-1 rounded-full border border-white/10 hover:bg-white/5">Advanced</button>
<button className="text-xs text-neutral-400 hover:text-white px-3 py-1 rounded-full border border-white/10 hover:bg-white/5">History</button>
</div>
</div>
<div className="space-y-4">

<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Description / Lyrics / Emotion</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 resize-none transition-all" placeholder="A moody synthwave track about driving at night in Tokyo, female vocals, 120bpm..." rows="3"></textarea>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Genre</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded-md py-2 px-3 text-xs text-white appearance-none focus:border-indigo-500/50">
<option>Synthwave</option>
<option>Hip Hop</option>
<option>Lo-Fi</option>
<option>Cinematic</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Mood</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded-md py-2 px-3 text-xs text-white appearance-none focus:border-indigo-500/50">
<option>Melancholic</option>
<option>Energetic</option>
<option>Chill</option>
<option>Dark</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Duration</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded-md py-2 px-3 text-xs text-white appearance-none focus:border-indigo-500/50">
<option>02:30</option>
<option>03:00</option>
<option>04:00</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Voice</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded-md py-2 px-3 text-xs text-white appearance-none focus:border-indigo-500/50">
<option>Female (Pop)</option>
<option>Male (Rap)</option>
<option>Duet (Mixed)</option>
<option>Instrumental</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="pt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<label className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-4 bg-indigo-500/20 rounded-full relative">
<div className="w-2 h-2 bg-indigo-400 rounded-full absolute top-1 right-1"></div>
</div>
<span className="text-[10px] text-neutral-400">Auto-Mastering</span>
</label>
<label className="flex items-center gap-2 cursor-pointer ml-4">
<div className="w-8 h-4 bg-white/5 rounded-full relative">
<div className="w-2 h-2 bg-neutral-600 rounded-full absolute top-1 left-1"></div>
</div>
<span className="text-[10px] text-neutral-400">Official Video</span>
</label>
</div>
<button className="group flex items-center gap-2 bg-white text-black pl-4 pr-5 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
<iconify-icon className="text-indigo-600 group-hover:rotate-12 transition-transform" icon="solar:stars-minimalistic-bold"></iconify-icon>
                                        Generate Song
                                        <span className="text-[10px] bg-black/10 px-1.5 py-0.5 rounded font-medium ml-1">-10 ZES</span>
</button>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between px-1">
<h3 className="text-sm font-medium text-white">Your Masterpieces</h3>
<a className="text-xs text-indigo-400 hover:text-indigo-300" href="#">View All</a>
</div>

<div className="glass border border-white/5 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">

<div className="w-full md:w-24 h-24 rounded-lg bg-neutral-800 relative overflow-hidden group shrink-0">
<img alt="Cover" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
<iconify-icon icon="solar:pause-bold" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 w-full min-w-0">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-sm font-medium text-white truncate">Neon Nights (V3)</h4>
<p className="text-xs text-neutral-400">Synthwave • 120 BPM</p>
</div>
<div className="flex gap-2">
<button className="text-neutral-500 hover:text-white" title="Download">
<iconify-icon icon="solar:download-minimalistic-linear" width="18"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-red-500" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="h-8 flex items-center gap-[2px] w-full opacity-80 mb-3">

<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '40%', animationDuration: '0.6s'}}></div>
<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '70%', animationDuration: '0.8s'}}></div>
<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '50%', animationDuration: '0.5s'}}></div>
<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '90%', animationDuration: '0.7s'}}></div>
<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '60%', animationDuration: '0.9s'}}></div>
<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '30%', animationDuration: '0.6s'}}></div>
<div className="w-1 bg-indigo-500 rounded-full bar" style={{height: '80%', animationDuration: '0.8s'}}></div>
<div className="w-1 bg-indigo-400/50 rounded-full bar" style={{height: '50%', animationDuration: '1.0s'}}></div>
<div className="w-1 bg-indigo-400/50 rounded-full bar" style={{height: '40%', animationDuration: '0.7s'}}></div>
<div className="w-1 bg-indigo-400/50 rounded-full bar" style={{height: '20%', animationDuration: '0.9s'}}></div>
<div className="w-1 bg-neutral-700 rounded-full h-1"></div> 
<div className="w-full h-[2px] bg-neutral-800 rounded-full relative">
<div className="absolute left-0 top-0 h-full w-1/3 bg-indigo-500"></div>
</div>
</div>
<div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono">
<span>01:12</span>
<span>03:45</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="glass border border-white/5 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Global Distribution</h3>
<span className="bg-green-500/10 text-green-400 text-[10px] px-2 py-0.5 rounded border border-green-500/20">Active</span>
</div>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                                Release your AI tracks to Spotify, Apple Music &amp; TikTok. You own 100% of royalties.
                            </p>
<div className="flex gap-2 mb-5 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="logos:spotify-icon" width="20"></iconify-icon>
<iconify-icon icon="logos:apple-music-icon" width="20"></iconify-icon>
<iconify-icon icon="logos:youtube-icon" width="20"></iconify-icon>
<iconify-icon icon="logos:tiktok-icon" width="20"></iconify-icon>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-xs text-white transition-colors">
<iconify-icon icon="solar:cloud-upload-linear" width="16"></iconify-icon>
                                New Release
                            </button>
</div>

<div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 rounded-xl p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Estimated Earnings</h3>
<iconify-icon className="text-green-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2 mb-4">
<span className="text-2xl font-semibold text-white tracking-tight">$1,240.50</span>
<span className="text-xs text-green-500 mb-1 font-medium">+12%</span>
</div>

<div className="flex items-end justify-between gap-1 h-16 w-full">
<div className="w-full bg-neutral-800 rounded-t-sm hover:bg-indigo-500 transition-colors h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm hover:bg-indigo-500 transition-colors h-[60%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm hover:bg-indigo-500 transition-colors h-[30%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm hover:bg-indigo-500 transition-colors h-[75%]"></div>
<div className="w-full bg-indigo-600 rounded-t-sm shadow-[0_0_10px_rgba(79,70,229,0.5)] h-[90%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-600">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
</div>
</div>

<div className="glass border border-white/5 rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10">
<iconify-icon icon="solar:medal-star-bold" width="60"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Official Artist</h3>
<p className="text-xs text-neutral-400 mb-3">Verify on YouTube &amp; Spotify</p>
<div className="w-full bg-neutral-800 h-1.5 rounded-full mb-2 overflow-hidden">
<div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full w-3/4 rounded-full"></div>
</div>
<p className="text-[10px] text-neutral-500 text-right">Step 3 of 4</p>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:stars-linear"></iconify-icon>
                        Next-Gen Features
                    </h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group bg-neutral-900/50 border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-bold-duotone" width="18"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-white mb-1">AI Duet Mode</h4>
<p className="text-[10px] text-neutral-500 leading-tight">Merge voices globally</p>
</div>

<div className="group bg-neutral-900/50 border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-bold-duotone" width="18"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-white mb-1">Emotion Engine</h4>
<p className="text-[10px] text-neutral-500 leading-tight">Mood-to-song gen</p>
</div>

<div className="group bg-neutral-900/50 border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-bold-duotone" width="18"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-white mb-1">Auto Music Video</h4>
<p className="text-[10px] text-neutral-500 leading-tight">Synced lyric visuals</p>
</div>

<div className="group bg-neutral-900/50 border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shop-bold-duotone" width="18"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-white mb-1">Remix Market</h4>
<p className="text-[10px] text-neutral-500 leading-tight">Sell your stems</p>
</div>

<div className="group bg-neutral-900/50 border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cup-star-bold-duotone" width="18"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-white mb-1">Song Battle</h4>
<p className="text-[10px] text-neutral-500 leading-tight">Win ZES prizes</p>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</div>
</main>

    </>
  );
}
