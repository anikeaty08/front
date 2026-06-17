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
      

<header className="w-full flex items-center justify-between px-6 py-4 z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-bold tracking-tighter text-sm">
                VAI
            </div>
<span className="text-xs font-medium text-neutral-500 tracking-wide uppercase">Core v2.4</span>
</div>
<nav className="hidden md:flex items-center gap-6 bg-neutral-900/50 rounded-full px-6 py-2 border border-white/5 backdrop-blur-md">
<a className="text-xs font-medium text-white hover:text-indigo-400 transition-colors" href="#">Assistant</a>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#">Memories</a>
<a className="text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#">Integrations</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:user" data-strokeWidth="1.5" data-width="14"></span>
</div>
</div>
</header>

<main className="flex-1 flex flex-col md:flex-row relative z-10 p-4 gap-4 h-full overflow-hidden">

<aside className="hidden lg:flex flex-col w-64 glass-panel rounded-2xl p-4 transition-all h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Recent Context</h3>
<span className="iconify text-neutral-600 hover:text-white cursor-pointer" data-icon="lucide:more-horizontal" data-width="16"></span>
</div>
<div className="space-y-3 overflow-y-auto flex-1 pr-2">
<div className="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="12"></span>
<span className="text-xs font-medium text-white">Project Omega</span>
</div>
<p className="text-[10px] text-neutral-500 line-clamp-2 leading-relaxed">Analyzing the latest quarterly reports and generating 3D projections.</p>
</div>
<div className="group p-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-neutral-500 group-hover:text-indigo-400" data-icon="lucide:calendar" data-width="12"></span>
<span className="text-xs font-medium text-neutral-300">Schedule Review</span>
</div>
<p className="text-[10px] text-neutral-600 line-clamp-2 leading-relaxed">Rescheduling the meeting with the design team for next Tuesday.</p>
</div>
<div className="group p-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer">
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-neutral-500 group-hover:text-indigo-400" data-icon="lucide:code" data-width="12"></span>
<span className="text-xs font-medium text-neutral-300">Code Analysis</span>
</div>
<p className="text-[10px] text-neutral-600 line-clamp-2 leading-relaxed">Refactoring the authentication middleware for better latency.</p>
</div>
</div>

<div className="mt-4 pt-4 border-t border-white/5">
<div className="flex justify-between items-center text-[10px] text-neutral-500 mb-2">
<span>CPU Load</span>
<span className="text-indigo-400">12%</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[12%] rounded-full"></div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/5">

<div className="absolute top-4 left-0 w-full px-6 flex justify-between items-center z-20">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/5">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
<span className="text-[10px] font-medium text-neutral-400">Online • Listening</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="relative w-96 h-96 flex items-center justify-center avatar-container z-10">

<div className="absolute inset-0 bg-indigo-600/20 blur-[80px] rounded-full"></div>

<div className="orbit-ring w-80 h-80 animate-[spin_10s_linear_infinite]"></div>
<div className="orbit-ring-2 w-64 h-64 animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="w-40 h-40 rounded-full avatar-core relative">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-black/20 blur-sm rounded-full"></div>
</div>
</div>

<div className="absolute bottom-24 w-full max-w-lg text-center space-y-4 px-6 z-20">
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white drop-shadow-xl">
                        "I've optimized your schedule."
                    </h1>
<p className="text-sm text-neutral-400 font-light">Would you like me to send the invites now?</p>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-end gap-1.5 h-12 z-20">
<div className="w-1 bg-white/40 rounded-full audio-bar h-4"></div>
<div className="w-1 bg-white/60 rounded-full audio-bar h-8"></div>
<div className="w-1 bg-indigo-400 rounded-full audio-bar h-12"></div>
<div className="w-1 bg-indigo-300 rounded-full audio-bar h-6"></div>
<div className="w-1 bg-indigo-500 rounded-full audio-bar h-10"></div>
<div className="w-1 bg-white/60 rounded-full audio-bar h-5"></div>
<div className="w-1 bg-white/30 rounded-full audio-bar h-3"></div>
</div>
</div>

<div className="absolute bottom-0 w-full p-6 z-30 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="max-w-2xl mx-auto glass-panel rounded-full p-1.5 flex items-center gap-2 shadow-2xl shadow-indigo-900/10">
<button className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-all shadow-lg shadow-indigo-500/25">
<span className="iconify" data-icon="lucide:mic" data-width="20"></span>
</button>
<input className="flex-1 bg-transparent border-none text-sm text-white placeholder-neutral-500 focus:ring-0 px-2 font-light h-full outline-none" placeholder="Ask VAI anything..." type="text"/>
<button className="p-2.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-up" data-width="18"></span>
</button>
</div>
</div>
</section>

<aside className="hidden xl:flex flex-col w-72 rounded-2xl p-4 gap-4 h-full">

<div className="glass-panel p-5 rounded-2xl flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Interaction Mode</span>
<span className="iconify text-neutral-500" data-icon="lucide:sliders-horizontal" data-width="14"></span>
</div>
<div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
<button className="flex-1 py-1.5 text-xs font-medium text-white bg-neutral-800 rounded-md shadow-sm border border-white/10 text-center">Voice</button>
<button className="flex-1 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-300 text-center transition-colors">Text</button>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Personality</span>
<span className="iconify text-indigo-400" data-icon="lucide:cpu" data-width="14"></span>
</div>

<div className="space-y-3">
<div className="flex justify-between text-[10px] text-neutral-400">
<span>Analytical</span>
<span>Creative</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full w-[65%]"></div>
<div className="absolute top-1/2 left-[65%] w-3 h-3 bg-white rounded-full shadow border border-indigo-500 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex justify-between text-[10px] text-neutral-400">
<span>Concise</span>
<span>Detailed</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute left-0 top-0 h-full bg-purple-500 rounded-full w-[30%]"></div>
<div className="absolute top-1/2 left-[30%] w-3 h-3 bg-white rounded-full shadow border border-purple-500 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl flex-1">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide block mb-4">System</span>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white/5 border border-white/5">
<span className="iconify text-neutral-400" data-icon="lucide:video" data-width="14"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-200">Camera Input</span>
<span className="text-[10px] text-neutral-500">Allow visual analysis</span>
</div>
</div>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-neutral-600 appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer border border-neutral-700" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-white/5 border border-white/5">
<span className="iconify text-neutral-400" data-icon="lucide:globe" data-width="14"></span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-200">Web Access</span>
<span className="text-[10px] text-neutral-500">Real-time data</span>
</div>
</div>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-indigo-500 appearance-none cursor-pointer transition-all duration-300 right-0" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-indigo-500 cursor-pointer border border-indigo-500" htmlFor="toggle2"></label>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
<div className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:zap" data-width="14"></span>
<div>
<h4 className="text-xs font-semibold text-white">Pro Plan Active</h4>
<p className="text-[10px] text-neutral-400 mt-1">Unlimited usage and 4K rendering enabled.</p>
</div>
</div>
</div>
</div>
</div>
</aside>
</main>

    </>
  );
}
