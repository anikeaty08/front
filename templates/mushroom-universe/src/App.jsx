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
      

<div className="fixed inset-0 bg-noise pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950 pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-950 to-transparent pointer-events-none z-0"></div>

<div className="fixed top-1/4 right-1/4 w-2 h-2 bg-teal-400 rounded-full blur-[2px] opacity-40 float-anim" style={{animationDelay: '0s'}}></div>
<div className="fixed top-3/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full blur-[1px] opacity-30 float-anim" style={{animationDelay: '2s'}}></div>
<div className="fixed top-1/2 left-1/2 w-1 h-1 bg-amber-200 rounded-full blur-[1px] opacity-20 float-anim" style={{animationDelay: '4s'}}></div>
<div className="relative z-10 flex h-screen max-w-[1920px] mx-auto">

<aside className="w-20 lg:w-24 border-r border-white/5 bg-slate-950/50 backdrop-blur-md flex flex-col items-center py-8 z-20">

<div className="mb-12 group cursor-pointer">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
<span className="font-fantasy font-bold text-white text-lg tracking-tight">S</span>
</div>
</div>

<nav className="flex-1 flex flex-col gap-8 w-full">
<button className="relative w-full h-12 flex items-center justify-center text-teal-400 group">
<div className="absolute left-0 h-8 w-0.5 bg-teal-400 rounded-r-full shadow-[0_0_10px_#2dd4bf]"></div>
<span className="iconify w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:home" data-strokeWidth="1.5"></span>
</button>
<button className="w-full h-12 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors group relative">
<span className="iconify w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:swords" data-strokeWidth="1.5"></span>
</button>
<button className="w-full h-12 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors group">
<span className="iconify w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:backpack" data-strokeWidth="1.5"></span>
</button>
<button className="w-full h-12 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors group">
<span className="iconify w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:trophy" data-strokeWidth="1.5"></span>
</button>
<button className="w-full h-12 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors group">
<span className="iconify w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:scroll" data-strokeWidth="1.5"></span>
</button>
</nav>

<div className="flex flex-col gap-6 w-full items-center">
<button className="w-full h-12 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors">
<span className="iconify w-6 h-6" data-icon="lucide:settings" data-strokeWidth="1.5"></span>
</button>
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative group cursor-pointer">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="absolute inset-0 border border-white/20 rounded-full"></div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative">

<header className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-slate-950/30 backdrop-blur-sm sticky top-0 z-30">
<div className="flex items-center gap-4">
<h2 className="font-fantasy font-semibold text-xl tracking-wide text-slate-200">Lobby <span className="text-slate-600 mx-2">/</span> Ranked</h2>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 tracking-wider uppercase">Season 4</span>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-3 bg-black/40 rounded-full px-4 py-1.5 border border-white/5">
<div className="flex items-center gap-2">
<span className="iconify text-teal-400 w-4 h-4" data-icon="lucide:gem"></span>
<span className="text-sm font-medium text-slate-200">2,450</span>
</div>
<div className="w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="iconify text-purple-400 w-4 h-4" data-icon="lucide:flower-2"></span>
<span className="text-sm font-medium text-slate-200">850</span>
</div>
</div>

<button className="relative p-2 text-slate-400 hover:text-white transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:bell" data-strokeWidth="1.5"></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></span>
</button>
</div>
</header>
<div className="p-8 lg:p-12 max-w-7xl mx-auto space-y-12">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 relative group">
<div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500/20 via-purple-500/10 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 w-48 h-48 mb-6 flex items-center justify-center float-anim">

<div className="absolute inset-0 rounded-full border border-teal-500/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-purple-500/30"></div>

<div className="w-32 h-32 rounded-full bg-gradient-to-t from-teal-900 to-slate-900 border border-teal-500/50 shadow-[0_0_40px_rgba(45,212,191,0.2)] flex items-center justify-center relative">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal-500/20 to-transparent rounded-b-full"></div>
<span className="iconify w-16 h-16 text-teal-200 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]" data-icon="lucide:sprout" data-strokeWidth="1"></span>
</div>
<div className="absolute -bottom-2 px-3 py-1 bg-slate-950 border border-teal-500/50 rounded-full text-xs font-bold text-teal-400 tracking-widest uppercase shadow-lg">
                                    Tier IV
                                </div>
</div>
<h1 className="font-fantasy text-3xl text-white font-medium tracking-wide mb-1 glow-text-teal">Mycelial Sentinel</h1>
<p className="text-slate-400 text-sm mb-6">Eastern Sporelands Region</p>
<div className="w-full space-y-2 mb-8">
<div className="flex justify-between text-xs font-medium uppercase tracking-wider text-slate-500">
<span>Progress</span>
<span className="text-teal-400">84 / 100 LP</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 w-[84%] shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 w-full">
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Win Rate</div>
<div className="text-lg font-mono text-white">58.4%</div>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Matches</div>
<div className="text-lg font-mono text-white">142</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col h-full justify-between min-h-[500px] relative rounded-2xl overflow-hidden border border-white/10 group">

<div className="absolute inset-0">
<img alt="Forest Background" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/20"></div>
</div>

<div className="relative z-10 p-8 flex flex-col h-full items-start justify-end pb-12">
<div className="mb-auto w-full flex justify-end">
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all">
<span className="iconify text-slate-300" data-icon="lucide:maximize-2"></span>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all">
<span className="iconify text-slate-300" data-icon="lucide:share-2"></span>
</button>
</div>
</div>
<h2 className="font-fantasy text-4xl lg:text-5xl text-white font-bold tracking-tight mb-2 drop-shadow-2xl">The Fungal Depths</h2>
<p className="text-slate-300 max-w-lg text-lg font-light mb-8 leading-relaxed">
                                Ranked queue is active. Prepare your loadout and gather your spore-mates for the descent.
                            </p>
<div className="flex items-center gap-6">

<button className="group relative px-12 py-4 bg-teal-600 hover:bg-teal-500 transition-all duration-300 clip-path-polygon">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] mix-blend-overlay transition-opacity"></div>
<div className="absolute -inset-1 bg-teal-500 blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
<div className="relative flex items-center gap-3">
<span className="font-fantasy font-bold text-xl text-white tracking-widest uppercase">Find Match</span>
<span className="iconify w-5 h-5 text-teal-100 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</div>

<div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50"></div>
</button>
<button className="px-6 py-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-slate-300 font-medium tracking-wide uppercase text-sm flex items-center gap-2">
<span className="iconify" data-icon="lucide:users"></span> Party Setup
                                </button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-6">
<h3 className="font-fantasy text-xl text-slate-200 tracking-wide">Evolution Path</h3>
<a className="text-xs text-teal-400 hover:text-teal-300 uppercase tracking-widest font-medium border-b border-transparent hover:border-teal-400 transition-all pb-0.5" href="#">View Rewards</a>
</div>
<div className="relative w-full bg-slate-900/40 border border-white/5 rounded-xl p-8 overflow-hidden">

<div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-teal-500/0 via-teal-500 to-teal-500 -translate-y-1/2 shadow-[0_0_10px_#2dd4bf]"></div>
<div className="relative flex justify-between items-center z-10">

<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shadow-lg">
<span className="iconify text-slate-400 w-5 h-5" data-icon="lucide:circle-dot"></span>
</div>
<div className="text-center">
<div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Spore</div>
</div>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
<div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-emerald-700 flex items-center justify-center shadow-[0_0_15px_rgba(4,120,87,0.3)]">
<span className="iconify text-emerald-500 w-6 h-6" data-icon="lucide:sprout"></span>
</div>
<div className="text-center">
<div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Hyphae</div>
</div>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="relative">
<div className="absolute -inset-2 rounded-full border border-teal-500/30 animate-ping opacity-20"></div>
<div className="w-20 h-20 rounded-full bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-teal-400 flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.4)] relative overflow-hidden">
<div className="absolute inset-0 bg-teal-400/10"></div>
<span className="iconify text-teal-300 w-10 h-10 drop-shadow-md" data-icon="lucide:network"></span>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-900 border border-teal-500 rounded-full flex items-center justify-center text-[10px] font-bold text-teal-400">
                                        IV
                                    </div>
</div>
<div className="text-center">
<div className="text-sm font-bold text-teal-300 font-fantasy uppercase tracking-widest glow-text-teal">Sentinel</div>
<div className="text-[10px] text-slate-500 mt-1">Current Tier</div>
</div>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-40 grayscale hover:grayscale-0 transition-all">
<div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center relative">
<span className="iconify text-purple-400 w-8 h-8" data-icon="lucide:umbrella"></span>
<span className="iconify absolute text-slate-600 w-4 h-4 bg-slate-900 rounded-full -top-1 -right-1" data-icon="lucide:lock"></span>
</div>
<div className="text-center">
<div className="text-xs font-bold text-purple-400 uppercase tracking-widest">Apex Cap</div>
</div>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-30">
<div className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center">
<span className="iconify text-amber-400 w-8 h-8" data-icon="lucide:crown"></span>
</div>
<div className="text-center">
<div className="text-xs font-bold text-amber-500 uppercase tracking-widest">Titan</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-900/40 backdrop-blur border border-white/5 p-6 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 blur-3xl rounded-full pointer-events-none"></div>
<h4 className="font-fantasy text-slate-200 mb-6 flex items-center gap-2">
<span className="iconify text-teal-500" data-icon="lucide:activity"></span> Vitality Stats
                        </h4>
<div className="space-y-6">

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-slate-400">
<span>Audio Sens.</span>
<span className="text-white">75%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="75"/>
</div>

<div className="space-y-3">
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-600 bg-slate-900/50 flex items-center justify-center transition-all group-hover:border-teal-500/50">
<span className="iconify text-slate-950 w-3.5 h-3.5 opacity-0 transition-opacity" data-icon="lucide:check"></span>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">Show Spore Particles</span>
</label>
<label className="checkbox-wrapper flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-600 bg-slate-900/50 flex items-center justify-center transition-all group-hover:border-teal-500/50">
<span className="iconify text-slate-950 w-3.5 h-3.5 opacity-0 transition-opacity" data-icon="lucide:check"></span>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">Streamer Mode</span>
</label>
</div>
</div>
</div>

<div className="bg-slate-900/40 backdrop-blur border border-white/5 p-6 rounded-xl flex flex-col">
<h4 className="font-fantasy text-slate-200 mb-6 flex items-center gap-2">
<span className="iconify text-purple-500" data-icon="lucide:gift"></span> Daily Extraction
                        </h4>
<div className="flex-1 flex items-center justify-center">
<div className="relative group cursor-pointer">
<div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
<div className="w-20 h-24 bg-gradient-to-b from-slate-800 to-slate-950 border border-purple-500/30 rounded-lg flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
<span className="iconify text-purple-300 w-10 h-10 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" data-icon="lucide:package"></span>
</div>
</div>
</div>
<button className="mt-6 w-full py-2.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 text-xs font-semibold uppercase tracking-widest text-slate-300 transition-all">
                            Claim Cache
                        </button>
</div>

<div className="bg-slate-900/40 backdrop-blur border border-white/5 p-6 rounded-xl">
<h4 className="font-fantasy text-slate-200 mb-6 flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:users"></span> Squad Online
                        </h4>
<ul className="space-y-4">

<li className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded transition-colors">
<div className="relative">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center border border-white/10">
<span className="font-bold text-xs text-slate-400">JS</span>
</div>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-teal-500 border-2 border-slate-900 rounded-full"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-200 group-hover:text-white">JinxSpore</div>
<div className="text-xs text-teal-400">In Lobby</div>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-white/10 rounded transition-all">
<span className="iconify text-slate-400 w-4 h-4" data-icon="lucide:plus"></span>
</button>
</li>

<li className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded transition-colors">
<div className="relative">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center border border-white/10">
<span className="font-bold text-xs text-slate-400">MK</span>
</div>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 border-2 border-slate-900 rounded-full"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-200 group-hover:text-white">MyceliumKing</div>
<div className="text-xs text-amber-500">Ranked (14:02)</div>
</div>
</li>
</ul>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
