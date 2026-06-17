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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-0"></div>
<main className="flex-1 w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 relative z-10">

<header className="w-full max-w-lg mx-auto mb-8">
<div className="text-xl font-medium tracking-tighter text-zinc-100 flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-white text-xs" icon="solar:play-linear"></iconify-icon>
</div>
                YLCD
            </div>
</header>

<section className="w-full max-w-lg bg-[#121214]/80 border border-white/5 rounded-2xl shadow-2xl backdrop-blur-md p-6 sm:p-8 relative overflow-hidden">

<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Clip Downloader</h1>
<p className="text-sm text-zinc-400">Extract and download specific segments from live or recorded streams.</p>
</div>

<form className="space-y-5" onsubmit="event.preventDefault();">

<div>
<label className="block text-xs font-medium text-zinc-300 mb-2" htmlFor="url">YouTube Livestream URL</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:link-linear"></iconify-icon>
<input className="w-full bg-[#09090b] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-white/20 shadow-sm" id="url" placeholder="https://youtube.com/watch?v=..." required="" type="url"/>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2" htmlFor="start-time">Start Time</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<input className="w-full bg-[#09090b] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-white/20 shadow-sm" id="start-time" placeholder="00:00:00" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2" htmlFor="end-time">End Time</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:stopwatch-linear"></iconify-icon>
<input className="w-full bg-[#09090b] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-white/20 shadow-sm" id="end-time" placeholder="00:05:00" required="" type="text"/>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 mt-[-0.5rem] tracking-wide">Format: HH:MM:SS or total seconds. Max duration: 1 hour.</p>

<div className="grid grid-cols-2 gap-4 pt-2">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2" htmlFor="quality">Quality</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg pointer-events-none" icon="solar:video-frame-linear"></iconify-icon>
<select className="w-full bg-[#09090b] border border-white/10 rounded-xl py-3 pl-10 pr-10 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-white/20 shadow-sm appearance-none cursor-pointer" id="quality">
<option value="auto">Auto (Best)</option>
<option value="1080p">1080p</option>
<option value="720p">720p</option>
</select>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2" htmlFor="format">Format</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg pointer-events-none" icon="solar:document-text-linear"></iconify-icon>
<select className="w-full bg-[#09090b] border border-white/10 rounded-xl py-3 pl-10 pr-10 text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-white/20 shadow-sm appearance-none cursor-pointer" id="format">
<option value="mp4">MP4 (Video)</option>
<option value="mp3">MP3 (Audio)</option>
</select>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-medium py-3.5 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 text-sm group active:scale-[0.99]" type="submit">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:download-minimalistic-linear"></iconify-icon>
                    Download Clip
                </button>
</form>
</section>

<section className="w-full max-w-lg mt-6 bg-[#121214]/60 border border-indigo-500/20 rounded-2xl p-5 backdrop-blur-md shadow-lg relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 animate-pulse z-0"></div>
<div className="relative z-10 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
<iconify-icon className="text-indigo-400 animate-pulse" icon="solar:clapperboard-play-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Trimming video...</p>
<p className="text-xs text-zinc-500">LoFi Radio 24/7 - Beats to Relax/Study to</p>
</div>
</div>
<span className="text-sm font-medium text-indigo-400">45%</span>
</div>

<div className="w-full h-1.5 bg-[#09090b] border border-white/5 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[45%] rounded-full relative transition-all duration-300">
<div className="absolute inset-0 bg-white/20" style={{backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.2) 50%, rgba(255,255,255,.2) 75%, transparent 75%, transparent)', backgroundSize: '1rem 1rem', animation: 'stripemove 1s linear infinite'}}></div>
</div>
</div>
<div className="flex items-center justify-between mt-1 text-xs text-zinc-500">
<span>ETA: 1m 12s</span>
<span>14.2 MB / 31.5 MB</span>
</div>
</div>
<style>
                @keyframes stripemove {
                    0% { background-position: 1rem 0; }
                    100% { background-position: 0 0; }
                }
            </style>
</section>
<footer className="mt-12 text-center text-xs text-zinc-600">
<p>Protected against abuse • Rate limits apply • Auto-deletes temp files</p>
</footer>
</main>

    </>
  );
}
