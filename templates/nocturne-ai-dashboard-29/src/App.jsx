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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
750: '#2b2b2b',
850: '#1f1f1f',
900: '#1e1e1e',
925: '#121212',
}
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
      

<aside className="w-64 flex flex-col border-r border-white/5 bg-[#121212] h-full flex-shrink-0 relative transition-all duration-300">

<div className="h-16 flex items-center px-5 shrink-0">
<div className="flex items-center gap-2.5 text-white">
<div className="w-6 h-6 rounded bg-gradient-to-br from-neutral-100 to-neutral-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-bold" width="16"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-neutral-200">Nocturne AI</span>
</div>
</div>

<nav className="flex-1 px-3 space-y-1 overflow-y-auto mt-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-200 transition-all group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Overview</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-white transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Tasks</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-200 transition-all group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Calendar</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-200 transition-all group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:stopwatch-play-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Focus</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-200 transition-all group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-200 transition-all group" href="#">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-300 transition-colors" icon="solar:link-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Connect</span>
</a>
</nav>

<div className="p-3 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 mb-1 rounded-lg hover:bg-white/5 hover:text-neutral-200 transition-all text-neutral-400">
<iconify-icon icon="solar:download-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Install App</span>
</button>

<div className="flex items-center gap-3 px-3 py-2 mt-2 rounded-lg hover:bg-white/5 cursor-pointer group">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[10px] text-white font-bold tracking-tight">
                    K
                </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-neutral-300 truncate group-hover:text-white transition-colors">kleiochild@gmail.com</p>
</div>
</div>
<button className="w-full flex items-center gap-3 px-3 py-2 mt-1 rounded-lg hover:text-red-400 transition-all text-neutral-500">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium">Sign Out</span>
</button>

<button className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#121212] border border-white/10 rounded-full flex items-center justify-center text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#171717] overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-8 border-b border-white/5 shrink-0 bg-[#171717]/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-3">
<h1 className="text-lg font-medium tracking-tight text-white">Tasks</h1>
<span className="bg-neutral-800 border border-white/5 text-neutral-300 text-[10px] font-bold px-1.5 py-0.5 rounded min-w-[20px] text-center">1</span>
</div>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5 group" href="#">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:add-circle-linear" width="16"></iconify-icon>
                Manual Add
            </a>
</header>

<div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

<div className="flex items-center p-1 bg-[#1e1e1e] border border-white/5 rounded-lg w-max">
<button className="px-3 py-1.5 rounded-md bg-[#2a2a2a] text-white text-xs font-medium shadow-sm transition-all">
                    All <span className="text-neutral-500 ml-1">1</span>
</button>
<button className="px-3 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-all">
                    Manual <span className="text-neutral-600 ml-1">1</span>
</button>
<button className="px-3 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-all">
                    Calendar <span className="text-neutral-600 ml-1">0</span>
</button>
<button className="px-3 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-all">
                    Canvas <span className="text-neutral-600 ml-1">0</span>
</button>
</div>

<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/5 hover:bg-white/5 hover:border-white/10 text-neutral-400 hover:text-white transition-all text-xs font-medium">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
                Smart Sort
            </button>
</div>

<div className="flex-1 overflow-y-auto px-8 pb-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

<div className="group relative bg-[#1e1e1e] border border-white/5 rounded-xl p-8 flex flex-col h-full hover:border-white/10 transition-colors duration-300">
<div className="flex items-center gap-2 mb-8">
<div className="p-1.5 bg-neutral-800 rounded text-white">
<iconify-icon icon="solar:target-linear" width="16"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-white">Big Plan</h2>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-6">
<div className="w-24 h-24 rounded-full bg-gradient-to-b from-neutral-800 to-transparent flex items-center justify-center mb-6 relative">
<div className="absolute inset-0 bg-red-500/5 blur-xl rounded-full"></div>
<iconify-icon className="text-white relative z-10 opacity-80" icon="solar:target-bold-duotone" width="48"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white text-center mb-6 tracking-tight">What do you want to plan?</h3>
<div className="flex flex-wrap justify-center gap-2 mb-8">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-400 hover:text-white hover:border-white/20 cursor-pointer transition-all">Train for a marathon</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-400 hover:text-white hover:border-white/20 cursor-pointer transition-all">Learn Spanish</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-400 hover:text-white hover:border-white/20 cursor-pointer transition-all">Build a mobile app</span>
</div>
</div>
<div className="relative mt-auto">
<input className="w-full bg-[#171717] border border-white/10 rounded-lg py-3 pl-4 pr-20 text-sm text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none transition-all" placeholder="e.g., Train for a marathon" type="text"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-white text-black hover:bg-neutral-200 text-xs font-semibold rounded-md transition-colors flex items-center justify-center">
                            Next
                        </button>
</div>
</div>

<div className="group relative bg-[#1e1e1e] border border-white/5 rounded-xl p-8 flex flex-col h-full hover:border-white/10 transition-colors duration-300">
<div className="flex items-center gap-2 mb-8">
<div className="p-1.5 bg-neutral-800 rounded text-white">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-white">AI Task Breakdown</h2>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-6">
<div className="w-24 h-24 rounded-full bg-gradient-to-b from-neutral-800 to-transparent flex items-center justify-center mb-6 relative">
<div className="absolute inset-0 bg-purple-500/5 blur-xl rounded-full"></div>
<iconify-icon className="text-white relative z-10 opacity-80" icon="solar:stars-minimalistic-bold-duotone" width="48"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white text-center mb-2 tracking-tight">Break it down</h3>
<p className="text-xs text-neutral-500 text-center max-w-xs mb-8">Let AI help you deconstruct complex projects into manageable steps.</p>
</div>
<div className="mt-auto">
<div className="relative">
<textarea className="w-full bg-[#171717] border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder-neutral-600 focus:border-neutral-500 focus:outline-none transition-all resize-none min-h-[46px]" placeholder="Describe the task you need to complete..." rows="1"></textarea>
<button className="absolute right-2 top-2 p-1.5 text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:plain-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
