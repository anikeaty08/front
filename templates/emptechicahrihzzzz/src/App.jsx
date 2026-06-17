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
      

<div className="fixed inset-0 z-50 pointer-events-none crt-glow mix-blend-hard-light opacity-50"></div>
<div className="fixed inset-0 z-50 pointer-events-none scanlines opacity-20"></div>

<div className="relative z-10 flex h-full w-full flex-col max-w-7xl mx-auto md:p-4 lg:p-6 overflow-hidden">

<header className="flex items-center justify-between px-4 py-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-b-xl md:rounded-2xl shadow-lg shrink-0 mb-4">

<div className="flex items-center gap-4">
<div className="h-10 w-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg pixel-corners flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
<span className="font-retro text-xl text-white font-bold tracking-tight">P1</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-white">DevExplorer</span>
<span className="px-1.5 py-0.5 bg-slate-800 text-cyan-400 text-[10px] font-retro tracking-widest uppercase rounded border border-slate-700">Lvl 11</span>
</div>

<div className="w-32 h-2 bg-slate-800 mt-1 relative border border-slate-700">
<div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 w-[65%] shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9InJnYmEoMCwwLDAsMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30"></div>
</div>
</div>
</div>

<div className="flex items-center gap-6">

<div className="hidden md:flex flex-col items-end">
<span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Production</span>
<span className="font-retro text-lg text-green-400 drop-shadow-sm">+345 TP/s</span>
</div>

<div className="flex items-center gap-3 bg-slate-950/50 px-4 py-1.5 rounded-lg border border-slate-800 shadow-inner">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
<div className="flex flex-col items-end leading-none">
<span className="font-retro text-2xl text-yellow-400 tracking-wide pixel-text-shadow">14,520</span>
<span className="text-[10px] text-slate-500 font-bold tracking-tight">TECH POINTS</span>
</div>
</div>

<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex gap-4 min-h-0 relative">

<div className="flex-1 relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group select-none">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="absolute top-10 left-10 opacity-30">
<div className="w-16 h-16 border-2 border-slate-700 rounded-lg transform rotate-12"></div>
</div>
<div className="absolute bottom-20 right-20 opacity-30">
<div className="w-24 h-24 border-2 border-dashed border-slate-700 rounded-full"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative z-20 flex flex-col items-center animate-sprite">
<div className="w-10 h-14 bg-transparent relative">


<div className="absolute top-0 left-1 w-8 h-8 bg-cyan-200 border-2 border-slate-900 shadow-sm rounded-sm"></div>

<div className="absolute top-3 left-2 w-1.5 h-1.5 bg-slate-900"></div>
<div className="absolute top-3 left-6 w-1.5 h-1.5 bg-slate-900"></div>

<div className="absolute top-8 left-0 w-10 h-6 bg-cyan-600 border-2 border-slate-900 rounded-sm"></div>

<div className="absolute top-13 left-1 w-3 h-3 bg-slate-800"></div>
<div className="absolute top-13 left-6 w-3 h-3 bg-slate-800"></div>
</div>
<div className="mt-1 bg-black/40 w-8 h-2 rounded-full blur-sm"></div> 
<div className="absolute -top-8 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white backdrop-blur-sm border border-white/10 whitespace-nowrap">You</div>
</div>

<div className="absolute top-1/3 right-1/4 z-10 flex flex-col items-center animate-float">

<div className="absolute -top-16 -right-12 bg-white text-slate-900 p-3 rounded-xl rounded-bl-none shadow-lg border-2 border-slate-200 w-40">
<p className="font-retro text-sm leading-tight">Use your <span className="text-pink-500">TP</span> to upgrade the AI server!</p>
</div>

<div className="w-10 h-14 relative">
<div className="absolute top-0 left-1 w-8 h-8 bg-pink-200 border-2 border-slate-900 rounded-sm"></div> 
<div className="absolute top-3 left-2 w-4 h-1 bg-slate-900 opacity-50"></div> 
<div className="absolute top-8 left-0 w-10 h-6 bg-pink-600 border-2 border-slate-900 rounded-sm"></div> 
</div>
<div className="mt-1 bg-black/40 w-8 h-2 rounded-full blur-sm"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-y-12 translate-x-8 animate-bounce opacity-80 pointer-events-none">
<span className="font-retro text-yellow-400 text-lg shadow-black drop-shadow-md">+10 TP</span>
</div>
</div>

<div className="absolute bottom-6 left-6 block md:hidden opacity-50 hover:opacity-100 transition-opacity">
<div className="w-24 h-24 rounded-full border-2 border-slate-500 bg-slate-800/30 backdrop-blur relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-400/50 rounded-full shadow-lg"></div>
</div>
</div>

<div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded pixel-corners shadow-lg">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="font-retro text-sm text-slate-300 uppercase tracking-widest">Game Hub</span>
</div>
</div>
</div>

<aside className="hidden lg:flex w-80 flex-col bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
<div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-pink-400" icon="solar:graph-up-linear"></iconify-icon>
<h2 className="font-retro text-lg text-white tracking-wide">Tycoon Station</h2>
</div>
<span className="text-[10px] text-slate-500 font-mono">IDLE MODE</span>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="group relative bg-slate-950 border border-slate-800 p-3 rounded-lg hover:border-cyan-500/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-cyan-900/30 rounded border border-cyan-800 flex items-center justify-center text-cyan-400">
<iconify-icon className="text-xl" icon="solar:monitor-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-sm text-slate-200">Retro PC</h3>
<div className="text-[10px] text-cyan-400 font-retro">Lvl 5 • +5 TP/s</div>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<div className="text-xs text-slate-500 font-mono">Cost: <span className="text-yellow-500">75 TP</span></div>
<button className="bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-300 text-[10px] uppercase font-bold py-1.5 px-3 rounded shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all border border-slate-700">
                                Upgrade
                            </button>
</div>

<div className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 w-1/3 group-hover:w-full transition-all duration-500"></div>
</div>

<div className="bg-slate-950 border border-slate-800 p-3 rounded-lg opacity-75 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-pink-900/30 rounded border border-pink-800 flex items-center justify-center text-pink-400">
<iconify-icon className="text-xl" icon="solar:wi-fi-router-linear"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-sm text-slate-200">Fiber WiFi</h3>
<div className="text-[10px] text-pink-400 font-retro">Lvl 2 • +12 TP/s</div>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<div className="text-xs text-slate-500 font-mono">Cost: <span className="text-yellow-500">128 TP</span></div>
<button className="bg-slate-800 hover:bg-pink-600 hover:text-white text-slate-300 text-[10px] uppercase font-bold py-1.5 px-3 rounded shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all border border-slate-700">
                                Upgrade
                            </button>
</div>
</div>

<div className="bg-slate-950/50 border border-slate-800/50 border-dashed p-3 rounded-lg flex items-center justify-center gap-2 text-slate-600 py-6">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-xs font-retro">Unlock AI at Lvl 15</span>
</div>
</div>

<div className="p-3 bg-slate-950 border-t border-slate-800">
<div className="flex justify-between text-xs text-slate-400 mb-1">
<span>Automation</span>
<span className="text-green-400">12%</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-600 w-[12%]"></div>
</div>
</div>
</aside>
</main>

<nav className="mt-4 flex justify-center pb-2">
<div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 px-2 py-2 rounded-2xl flex items-center gap-1 shadow-2xl relative z-20">

<button className="group flex flex-col items-center gap-1 w-16 p-2 rounded-xl bg-slate-800 border border-slate-600 relative top-[-4px] shadow-[0_4px_0_0_#1e293b]">
<iconify-icon className="text-cyan-400 text-xl group-hover:scale-110 transition-transform" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-[10px] font-medium text-slate-200">Hub</span>
</button>

<button className="group flex flex-col items-center gap-1 w-16 p-2 rounded-xl hover:bg-slate-800/50 transition-all text-slate-400 hover:text-pink-400">
<iconify-icon className="text-xl mb-0.5 group-hover:-translate-y-1 transition-transform" icon="solar:server-square-linear"></iconify-icon>
<span className="text-[10px] font-medium">Tycoon</span>
</button>

<button className="group flex flex-col items-center gap-1 w-16 p-2 rounded-xl hover:bg-slate-800/50 transition-all text-slate-400 hover:text-purple-400">
<iconify-icon className="text-xl mb-0.5 group-hover:-translate-y-1 transition-transform" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-[10px] font-medium">Quiz</span>
</button>

<button className="group flex flex-col items-center gap-1 w-16 p-2 rounded-xl hover:bg-slate-800/50 transition-all text-slate-400 hover:text-amber-400">
<iconify-icon className="text-xl mb-0.5 group-hover:-translate-y-1 transition-transform" icon="solar:hammer-linear"></iconify-icon>
<span className="text-[10px] font-medium">Mine</span>
</button>

<button className="group flex flex-col items-center gap-1 w-16 p-2 rounded-xl hover:bg-slate-800/50 transition-all text-slate-400 hover:text-yellow-400">
<iconify-icon className="text-xl mb-0.5 group-hover:-translate-y-1 transition-transform" icon="solar:cup-star-linear"></iconify-icon>
<span className="text-[10px] font-medium">Rank</span>
</button>
</div>
</nav>

<div className="absolute top-20 right-4 z-40 animate-bounce">
<div className="bg-slate-900 border border-green-500/30 text-green-400 px-4 py-2 rounded shadow-lg flex items-center gap-3 backdrop-blur-md">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
<div className="flex flex-col">
<span className="font-retro text-sm uppercase tracking-wider">Daily Streak</span>
<span className="text-[10px] text-slate-400">Rewards collected!</span>
</div>
</div>
</div>
</div>


<div className="hidden absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
<div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6">
<h2 className="font-retro text-xl text-white mb-6 border-b border-slate-800 pb-2">System Settings</h2>
<div className="space-y-6">

<div>
<div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
<span>Master Volume</span>
<span className="font-retro text-cyan-400">80%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="80"/>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-slate-300">Retro CRT Filter</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer pixel-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-slate-700 rounded-sm border-2 border-slate-600 peer-focus:outline-none transition-colors">
<span className="absolute top-[4px] left-[4px] bg-white border border-slate-300 h-3 w-3 rounded-sm transition-transform shadow-sm"></span>
</div>
</label>
</div>
</div>
</div>
</div>

    </>
  );
}
