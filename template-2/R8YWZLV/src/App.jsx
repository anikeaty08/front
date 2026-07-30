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
      
<div className="relative w-full max-w-7xl backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden fade-in bg-black/95 border border-white/10">

<div className="absolute inset-y-0 left-0 flex flex-col gap-2 sm:gap-3 sm:py-6 sm:px-3 fade-in fade-in-delay-1 pt-4 pr-2 pb-4 pl-2 items-center bg-gray-950/80 border-r border-white/10">
<button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-purple-600 text-white hover:bg-purple-500">
<i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="pen-tool" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="layout" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="image" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="printer" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-1 flex items-center justify-center transition-all duration-200 mt-auto bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="settings" strokeWidth="1.5"></i>
</button>
</div>

<div className="sm:pl-20 md:pl-24 lg:pl-28 sm:pr-6 md:pr-10 lg:pr-14 sm:pt-6 md:pt-8 sm:pb-10 sm:space-y-8 lg:space-y-10 pt-4 pr-4 pb-6 pl-14 space-y-6">

<div className="flex items-center justify-between fade-in fade-in-delay-2">
<div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
<i className="w-3 h-3 sm:w-4 sm:h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="hidden sm:inline">BookForge AI</span>
<span className="sm:hidden">BookForge</span>
<span className="text-purple-400">Studio</span>
<i className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<h2 className="hidden md:block text-sm font-medium text-gray-500">Create Your Masterpiece</h2>
<button className="flex gap-1 sm:text-sm sm:py-2 sm:px-4 transition-all duration-200 hover:scale-105 text-xs font-medium rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white">
<i className="w-3 h-3 sm:w-4 sm:h-4" data-lucide="zap" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Upgrade</span>
<span className="sm:hidden">Pro</span>
</button>
</div>

<h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight fade-in fade-in-delay-3 max-w-2xl text-2xl tracking-tight font-semibold text-white">
                From Concept to
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-400">Published Book</span> 
                in Minutes
            </h1>

<div className="relative fade-in fade-in-delay-3">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">

<div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-gray-900/50 border-gray-800">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-blue-500 to-purple-500 text-white">
<i className="w-4 h-4 sm:w-5 sm:h-5" data-lucide="git-branch" strokeWidth="1.5"></i>
</div>
<p className="sm:text-lg leading-snug text-base font-normal text-gray-200">Visual storyboarding tools for plot points, character arcs, and world-building elements.</p>
<span className="text-xs sm:text-sm font-medium text-gray-400">Storyboard & Plot Tools</span>
</div>

<div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-gray-900/50 border-gray-800">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br flex items-center justify-center from-pink-500 to-rose-500 text-white">
<i className="w-4 h-4 sm:w-5 sm:h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<p className="sm:text-lg leading-snug text-base font-normal text-gray-200">Pre-designed templates for romance sub-genres: contemporary, historical, fantasy romance.</p>
<span className="text-xs sm:text-sm font-medium text-gray-400">Genre Templates</span>
</div>

<div className="rounded-xl sm:rounded-2xl shadow-md border p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 bg-gray-900/50 border-gray-800">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gradient-to-bl from-orange-500 to-red-500 text-white">
<i className="w-4 h-4 sm:w-5 sm:h-5" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<p className="sm:text-lg leading-snug text-base font-normal text-gray-200">AI-powered cover design from concept to print-ready artwork with multiple style options.</p>
<span className="text-xs sm:text-sm font-medium text-gray-400">Cover Design Studio</span>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto fade-in fade-in-delay-3">
<div className="rounded-xl sm:rounded-2xl flex flex-col gap-3 sm:gap-4 sm:p-4 md:p-6 border pt-3 pr-3 pb-3 pl-3 shadow-lg bg-gray-900/50 border-gray-800">
<div className="flex items-center justify-between text-xs font-medium text-gray-400">
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="wand-2" strokeWidth="1.5"></i>
<span className="hidden sm:inline">AI Book Generator</span>
<span className="sm:hidden">AI Generator</span>
</div>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Powered by GPT-4</span>
<span className="sm:hidden">GPT-4</span>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 shrink-0" data-lucide="book" strokeWidth="1.5"></i>
<input className="flex-1 border-none outline-none placeholder-gray-500 text-sm sm:text-base bg-transparent text-gray-300" placeholder="Describe your book idea... &quot;A contemporary romance about a coffee shop owner who falls for a mysterious regular customer&quot;" type="text" />
<button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 border-gray-700 text-gray-400 hover:bg-gray-800 hover:border-gray-600">
<i className="w-4 h-4" data-lucide="upload" strokeWidth="1.5"></i>
</button>
<button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 hover:scale-105 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white">
<i className="w-3 h-3" data-lucide="heart" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Contemporary Romance</span>
<span className="sm:hidden">Romance</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="castle" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Historical</span>
<span className="sm:hidden">Historical</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Fantasy Romance</span>
<span className="sm:hidden">Fantasy</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="zap" strokeWidth="1.5"></i>
<span className="hidden sm:inline">Sci-Fi Romance</span>
<span className="sm:hidden">Sci-Fi</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ring-1 transition-all duration-200 bg-gray-800 ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 text-gray-300">
<i className="w-3 h-3" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-in fade-in-delay-3">
<div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/30 border border-gray-800">
<div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-semibold">1</div>
<div>
<h3 className="text-sm font-medium text-white">Concept</h3>
<p className="text-xs text-gray-400">AI prompt & planning</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/20 border border-gray-800/50">
<div className="w-8 h-8 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center text-sm font-semibold">2</div>
<div>
<h3 className="text-sm font-medium text-gray-300">Generate</h3>
<p className="text-xs text-gray-500">Content & structure</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/20 border border-gray-800/50">
<div className="w-8 h-8 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center text-sm font-semibold">3</div>
<div>
<h3 className="text-sm font-medium text-gray-300">Design</h3>
<p className="text-xs text-gray-500">Cover & layout</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/20 border border-gray-800/50">
<div className="w-8 h-8 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center text-sm font-semibold">4</div>
<div>
<h3 className="text-sm font-medium text-gray-300">Publish</h3>
<p className="text-xs text-gray-500">Print on demand</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
