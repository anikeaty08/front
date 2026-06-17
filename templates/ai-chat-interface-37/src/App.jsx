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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
bg: '#0f0f0f',
sidebar: '#000000',
panel: '#1a1a1a',
border: '#27272a',
primary: '#4d6bfe', /* DeepSeek Blue */
primaryHover: '#3b5bdb',
},
boxShadow: {
'glow': '0 0 20px -5px rgba(77, 107, 254, 0.15)',
}
}
}
}

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
      

<aside className="w-[260px] bg-sidebar border-r border-border hidden md:flex flex-col h-full flex-shrink-0 z-20">

<div className="p-3 pb-0">
<button className="w-full flex items-center gap-3 px-3 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 rounded-lg transition-all group duration-200">
<iconify-icon className="text-zinc-400 group-hover:text-primary transition-colors" icon="solar:add-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">New chat</span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-3 space-y-6 mt-2">
<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 mb-2">Today</h3>
<ul className="space-y-0.5">
<li>
<button className="w-full text-left px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 rounded-md truncate transition-colors group flex items-center gap-2">
<span className="truncate flex-1">R1 Reasoning Logic</span>
</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 rounded-md truncate transition-colors group flex items-center gap-2">
<span className="truncate flex-1">Python Asyncio Fix</span>
</button>
</li>
</ul>
</div>
<div>
<h3 className="px-3 text-xs font-medium text-zinc-500 mb-2">Yesterday</h3>
<ul className="space-y-0.5">
<li>
<button className="w-full text-left px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-900 rounded-md truncate transition-colors">
<span className="truncate">Marketing Copy Draft</span>
</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-900 rounded-md truncate transition-colors">
<span className="truncate">NextJS Config</span>
</button>
</li>
</ul>
</div>
</div>

<div className="p-3 border-t border-border">
<button className="flex items-center gap-3 w-full p-2 hover:bg-zinc-900 rounded-lg transition-colors group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200">
<span className="text-xs font-semibold tracking-wide">US</span>
</div>
<div className="flex-1 text-left min-w-0">
<div className="text-sm font-medium text-zinc-200 truncate">User Account</div>
<div className="text-xs text-zinc-500 truncate">Free Plan</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400" icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative min-w-0 bg-bg">

<div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-bg/95 backdrop-blur z-30 sticky top-0">
<button className="text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="font-medium text-zinc-200">DeepSeek</span>
<button className="text-zinc-400">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="absolute top-4 left-4 z-10 hidden md:block">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-colors text-sm font-medium">
<span className="text-zinc-500">Model</span>
<span className="text-zinc-200">DeepSeek-V3</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto">
<div className="flex flex-col items-center justify-center min-h-full px-4 pb-32">

<div className="w-full max-w-2xl space-y-10 fade-enter">

<div className="flex flex-col items-center gap-6 text-center mt-12">
<div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center shadow-glow">

<span className="font-bold text-3xl tracking-tighter">Ds</span>
</div>
<h1 className="text-2xl font-semibold text-white tracking-tight">
                            Hi, I'm DeepSeek.
                        </h1>
<p className="text-zinc-500 text-sm max-w-md">
                            I can help you with coding, analysis, creative writing, and reasoning tasks.
                        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
<button className="text-left p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group">
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-zinc-500 group-hover:text-primary transition-colors" icon="solar:code-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Code Optimization</span>
</div>
<span className="text-xs text-zinc-500">Refactor a Python script for speed</span>
</button>
<button className="text-left p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group">
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-zinc-500 group-hover:text-primary transition-colors" icon="solar:brain-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Complex Logic</span>
</div>
<span className="text-xs text-zinc-500">Solve a logic puzzle step-by-step</span>
</button>
<button className="text-left p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group">
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-zinc-500 group-hover:text-primary transition-colors" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Summarization</span>
</div>
<span className="text-xs text-zinc-500">Summarize a long article</span>
</button>
<button className="text-left p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all group">
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-zinc-500 group-hover:text-primary transition-colors" icon="solar:pallete-2-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Creative</span>
</div>
<span className="text-xs text-zinc-500">Write a story about space travel</span>
</button>
</div>
</div>
</div>
</div>

<div className="w-full flex justify-center pb-6 pt-2 px-4 fixed bottom-0 md:absolute z-20 pointer-events-none">
<div className="w-full max-w-3xl pointer-events-auto">

<div className="bg-panel border border-border rounded-[24px] shadow-2xl flex flex-col overflow-hidden focus-within:ring-1 focus-within:ring-zinc-700 transition-all">

<textarea className="w-full bg-transparent text-white placeholder-zinc-500 px-5 py-4 text-base focus:outline-none resize-none max-h-48" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="Message DeepSeek..." rows="1" style={{minHeight: '56px'}}></textarea>

<div className="flex items-center justify-between px-3 pb-3 pt-1">

<div className="flex items-center gap-2">

<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors border border-zinc-700/50 group">
<iconify-icon className="text-zinc-400 group-hover:text-primary transition-colors" icon="solar:brain-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">DeepThink (R1)</span>
</button>

<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:globe-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Search</span>
</button>
</div>

<div className="flex items-center gap-3">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon>
</button>

<button className="w-8 h-8 rounded-full bg-zinc-200 hover:bg-white text-black flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="2.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="text-center mt-3">
<p className="text-xs text-zinc-600">DeepSeek generated content may be inaccurate.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
