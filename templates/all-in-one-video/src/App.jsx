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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-neutral-100 font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gradient-to-tr from-neutral-100 to-neutral-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                    VELOCITY
                </a>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-light">
<a className="hover:text-neutral-100 transition-colors" href="#features">Features</a>
<a className="hover:text-neutral-100 transition-colors" href="#supported">Platforms</a>
<a className="hover:text-neutral-100 transition-colors" href="#pricing">API</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium bg-neutral-100 text-neutral-900 px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Sign in
                </a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-light text-neutral-300 mb-4 animate-fade-in">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                v2.0 is now live: 8K support added
            </div>

<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                Universal video <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white/80 to-purple-300">archival engine.</span>
</h1>
<p className="text-lg font-light text-neutral-500 max-w-xl mx-auto leading-relaxed">
                Download pristine 4K, UHD, and HD content from YouTube, Instagram, and Twitter instantly. No compression artifacts. No watermarks.
            </p>

<div className="mt-12 relative group max-w-2xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative glass-panel rounded-xl p-2 input-glow transition-all duration-300">
<div className="flex flex-col md:flex-row gap-2">
<div className="flex-grow relative flex items-center">
<iconify-icon className="absolute left-4 text-neutral-500" icon="lucide:link" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-transparent border-none text-neutral-200 text-sm font-light placeholder-neutral-600 pl-11 pr-4 py-4 focus:ring-0 focus:outline-none" placeholder="Paste Instagram, YouTube, or Twitter link..." type="text"/>
</div>
<button className="bg-neutral-100 hover:bg-white text-black px-6 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<span>Download</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<div className="border-t border-white/5 mt-2 pt-3 px-2 flex flex-wrap items-center justify-between gap-4">

<div className="flex items-center gap-3">
<span className="text-xs text-neutral-600 font-medium uppercase tracking-wider">Format</span>
<div className="flex bg-neutral-900/50 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 rounded-md bg-neutral-800 text-neutral-200 text-xs font-medium shadow-sm transition-all border border-white/5">Video</button>
<button className="px-3 py-1 rounded-md text-neutral-500 hover:text-neutral-300 text-xs font-light transition-all">Audio</button>
</div>
</div>

<div className="flex items-center gap-3">
<span className="text-xs text-neutral-600 font-medium uppercase tracking-wider">Quality</span>
<div className="relative group/dropdown">
<button className="flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900/50 hover:bg-neutral-800 border border-white/10 px-3 py-1.5 rounded-lg transition-colors">
<span className="text-emerald-400">●</span> 4K Ultra HD
                                    <iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="12"></iconify-icon>
</button>

<div className="absolute top-full right-0 mt-2 w-32 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-xl overflow-hidden hidden group-hover/dropdown:block z-20">
<div className="py-1">
<a className="block px-4 py-2 text-xs text-emerald-400 hover:bg-white/5 flex items-center justify-between" href="#">
                                            4K UHD <iconify-icon icon="lucide:check" width="12"></iconify-icon>
</a>
<a className="block px-4 py-2 text-xs text-neutral-400 hover:bg-white/5 hover:text-neutral-200" href="#">2K QHD</a>
<a className="block px-4 py-2 text-xs text-neutral-400 hover:bg-white/5 hover:text-neutral-200" href="#">1080p HD</a>
<a className="block px-4 py-2 text-xs text-neutral-400 hover:bg-white/5 hover:text-neutral-200" href="#">720p</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-4 flex items-center justify-center gap-4 opacity-50">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="lucide:shield-check" width="14"></iconify-icon>
<span className="text-xs text-neutral-500">Secure &amp; Private</span>
</div>
<div className="h-1 w-1 bg-neutral-800 rounded-full"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="lucide:zap" width="14"></iconify-icon>
<span className="text-xs text-neutral-500">Fast Processing</span>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-32">
<div className="flex items-center justify-between mb-8 px-2">
<h3 className="text-lg text-white font-medium tracking-tight">Supported Ecosystems</h3>
<span className="text-xs text-neutral-600 border border-white/5 px-2 py-1 rounded bg-neutral-900">Auto-detect</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative p-6 glass-panel rounded-xl hover:bg-white/5 transition-colors duration-300">
<div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-400" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-[#FF0000]/10 flex items-center justify-center mb-4 border border-[#FF0000]/20">
<iconify-icon className="text-[#FF0000]" icon="lucide:youtube" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-neutral-200 font-medium mb-1 tracking-tight">YouTube</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                        Supports Shorts, long-form videos, and playlists. Extract audio tracks or video up to 8K resolution.
                    </p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">MP4</span>
<span className="text-[10px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">WEBM</span>
</div>
</div>

<div className="group relative p-6 glass-panel rounded-xl hover:bg-white/5 transition-colors duration-300">
<div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-400" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-[#E1306C]/10 flex items-center justify-center mb-4 border border-[#E1306C]/20">
<iconify-icon className="text-[#E1306C]" icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-neutral-200 font-medium mb-1 tracking-tight">Instagram</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                        Instant download for Reels, Stories, and carousel posts. Maintains original upload quality and metadata.
                    </p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">Reels</span>
<span className="text-[10px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">Stories</span>
</div>
</div>

<div className="group relative p-6 glass-panel rounded-xl hover:bg-white/5 transition-colors duration-300">
<div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-400" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-[#1DA1F2]/10 flex items-center justify-center mb-4 border border-[#1DA1F2]/20">
<iconify-icon className="text-[#1DA1F2]" icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-neutral-200 font-medium mb-1 tracking-tight">X / Twitter</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                        Archive media from tweets and threads. High-bitrate capture for maximum visual fidelity on gifs and clips.
                    </p>
<div className="mt-4 flex gap-2">
<span className="text-[10px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">GIF</span>
<span className="text-[10px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 rounded text-neutral-400">MP4</span>
</div>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto mt-24">
<h3 className="text-sm text-neutral-500 font-medium mb-4 uppercase tracking-wider text-center">Live Global Downloads</h3>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="lucide:video" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium">Nature_Documentary_4K.mp4</span>
<span className="text-[10px] text-neutral-600">YouTube • 2.4 GB</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Completed</span>
<iconify-icon className="text-neutral-600" icon="lucide:download" width="14"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-neutral-400">
<iconify-icon icon="lucide:music" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-300 font-medium">Indie_Mix_2023.mp3</span>
<span className="text-[10px] text-neutral-600">SoundCloud • 45 MB</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-16 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-2/3"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#030303]">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-500">
<div className="w-4 h-4 bg-neutral-800 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
</div>
<span className="text-xs font-light tracking-tight">© 2023 Velocity Inc. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-xs font-light text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Terms</a>
<a className="text-xs font-light text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
