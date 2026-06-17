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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-b from-orange-500 to-orange-600 flex items-center justify-center shadow-inner shadow-white/20">
<i className="w-3.5 h-3.5 text-white" data-lucide="layers"></i>
</div>
<span className="text-zinc-200 font-medium tracking-tight text-sm">Learneer</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-200 transition-colors" href="#">Marketplace</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Paths</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Creators</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" data-lucide="search"></i>
<input className="bg-zinc-900/50 border border-white/[0.08] rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-800 transition-all w-48" placeholder="Find a skill..." type="text"/>
</div>
<div className="h-4 w-[1px] bg-zinc-800 mx-1"></div>
<button className="text-xs font-medium text-zinc-300 hover:text-white transition-colors">Log in</button>
<button className="bg-zinc-100 hover:bg-white text-black text-xs font-medium px-3 py-1.5 rounded-md transition-colors shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    Sign up
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 max-w-6xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-[10px] font-medium mb-6">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
</span>
                New: AI-Powered Playlist Summaries
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Structure the chaos of <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-500">video learning.</span>
</h1>
<p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
                Turn scattered YouTube videos into professional curriculums. Track progress, take notes, and master skills without the distraction.
            </p>
<div className="flex items-center justify-center gap-3">
<button className="group flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-200 transition-all">
<span>Start Learning Free</span>
<i className="w-4 h-4 text-zinc-600 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span>Watch Demo</span>
</button>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto">

<div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl opacity-20 rounded-full"></div>

<div className="relative bg-[#09090b] border border-white/10 rounded-lg shadow-2xl overflow-hidden">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="ml-4 w-64 h-5 bg-zinc-800/50 rounded flex items-center px-2">
<div className="w-3 h-3 rounded-full bg-zinc-700 mr-2"></div>
<div className="h-1.5 w-20 bg-zinc-700/50 rounded"></div>
</div>
</div>

<div className="grid grid-cols-12 h-[400px]">

<div className="col-span-3 border-r border-white/5 bg-zinc-900/20 p-4 hidden sm:block">
<div className="space-y-4">
<div className="h-2 w-16 bg-zinc-800 rounded mb-6"></div>
<div className="space-y-2">
<div className="h-8 w-full bg-white/5 border border-white/5 rounded-md flex items-center px-3 gap-2">
<div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
<div className="h-1.5 w-12 bg-zinc-600 rounded"></div>
</div>
<div className="h-8 w-full flex items-center px-3 gap-2 opacity-50">
<div className="w-3 h-3 border border-zinc-700 rounded-sm"></div>
<div className="h-1.5 w-16 bg-zinc-700 rounded"></div>
</div>
<div className="h-8 w-full flex items-center px-3 gap-2 opacity-50">
<div className="w-3 h-3 border border-zinc-700 rounded-sm"></div>
<div className="h-1.5 w-10 bg-zinc-700 rounded"></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 sm:col-span-9 p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white font-medium mb-1">Advanced React Patterns</h3>
<p className="text-xs text-zinc-500">Course progress: 65%</p>
</div>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-[#09090b]"></div>
<div className="w-7 h-7 rounded-full bg-zinc-700 border-2 border-[#09090b]"></div>
</div>
</div>

<div className="space-y-2">

<div className="flex items-center gap-4 p-3 bg-zinc-800/30 border border-orange-500/20 rounded-md">
<div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-zinc-300 rounded mb-1.5"></div>
<div className="h-1.5 w-20 bg-zinc-600 rounded"></div>
</div>
<div className="text-xs text-zinc-500 font-mono">12:04</div>
</div>

<div className="flex items-center gap-4 p-3 border border-white/5 rounded-md opacity-60">
<div className="w-5 h-5 rounded-full border-2 border-zinc-700"></div>
<div className="flex-1">
<div className="h-2 w-24 bg-zinc-500 rounded mb-1.5"></div>
<div className="h-1.5 w-16 bg-zinc-700 rounded"></div>
</div>
<div className="text-xs text-zinc-600 font-mono">08:30</div>
</div>

<div className="flex items-center gap-4 p-3 border border-white/5 rounded-md opacity-60">
<div className="w-5 h-5 rounded-full border-2 border-zinc-700"></div>
<div className="flex-1">
<div className="h-2 w-28 bg-zinc-500 rounded mb-1.5"></div>
<div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
</div>
<div className="text-xs text-zinc-600 font-mono">15:45</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#09090b] to-transparent"></div>
</div>
</div>

<div className="mt-24 grid md:grid-cols-3 gap-5">

<div className="group p-5 rounded-lg border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-9 h-9 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-orange-400 transition-colors">
<i className="w-4.5 h-4.5" data-lucide="import"></i>
</div>
<h3 className="text-zinc-200 font-medium mb-2 tracking-tight">One-Click Import</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Paste any YouTube playlist URL. We parse metadata, duration, and chapters automatically.
                </p>
</div>

<div className="group p-5 rounded-lg border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-9 h-9 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-purple-400 transition-colors">
<i className="w-4.5 h-4.5" data-lucide="check-circle-2"></i>
</div>
<h3 className="text-zinc-200 font-medium mb-2 tracking-tight">Progress Tracking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Don't rely on YouTube's history. Mark videos as complete and see your percentage climb.
                </p>
</div>

<div className="group p-5 rounded-lg border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-9 h-9 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-blue-400 transition-colors">
<i className="w-4.5 h-4.5" data-lucide="file-text"></i>
</div>
<h3 className="text-zinc-200 font-medium mb-2 tracking-tight">Contextual Notes</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Take markdown notes timestamped to specific moments in the video for quick review.
                </p>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-12">
<p className="text-center text-xs text-zinc-600 font-medium uppercase tracking-widest mb-8">Supported Platforms</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">

<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="youtube"></i>
<span className="font-semibold tracking-tighter">YouTube</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="monitor-play"></i>
<span className="font-semibold tracking-tighter">Vimeo</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<span className="font-semibold tracking-tighter">Coursera</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="disc"></i>
<span className="font-semibold tracking-tighter">Udemy</span>
</div>
</div>
</div>
</main>


    </>
  );
}
