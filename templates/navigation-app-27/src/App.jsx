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
      

<main className="relative h-screen w-full max-w-md overflow-hidden bg-zinc-950 shadow-2xl sm:h-[850px] sm:max-h-[95vh] sm:rounded-[2.5rem] sm:border-[6px] sm:border-zinc-900">

<div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0c] to-[#121214]">

<div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>

<svg className="absolute h-full w-full" fill="none" style={{transform: 'rotateX(20deg) scale(1.1)', transformOrigin: 'center'}} viewbox="0 0 400 800">

<path d="M 80 800 C 120 650, 40 550, 220 400 C 350 250, 280 150, 180 0" stroke="#27272a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>

<path className="animate-pulse" d="M 80 800 L 160 620 L 120 500 L 260 320 L 180 0" stroke="url(#cutta-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" style={{filter: 'drop-shadow(0 0 12px rgba(220, 38, 38, 0.9))'}}></path>
<defs>
<lineargradient id="cutta-gradient" x1="0" x2="0" y1="1" y2="0">
<stop offset="0%" stop-color="#dc2626"></stop> 
<stop offset="50%" stop-color="#f43f5e"></stop> 
<stop offset="100%" stop-color="#a855f7"></stop> 
</lineargradient>
</defs>
</svg>

<div className="absolute bottom-[20%] left-[38%] z-10 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-red-500 bg-black shadow-[0_0_25px_rgba(220,38,38,0.8)]">
<div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping"></div>
<div className="absolute h-2.5 w-2.5 rounded-full bg-red-500"></div>

<div className="absolute -top-6 h-8 w-8 opacity-40" style={{background: 'conic-gradient(from 180deg at 50% 100%, transparent 0deg, rgba(220,38,38,0.8) 45deg, transparent 90deg)'}}></div>
</div>

<div className="absolute top-[8%] left-[45%] z-10 flex flex-col items-center">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.6)]">
<iconify-icon className="text-sm" icon="solar:flag-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="mt-1 h-1 w-1 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
</div>
</div>

<header className="absolute left-0 right-0 top-0 z-40 px-4 pt-12 sm:pt-6">
<div className="flex items-center justify-between gap-3 rounded-full border border-white/5 bg-black/40 p-2 pr-3 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl">

<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-purple-600 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
<span className="text-xs font-semibold tracking-tighter text-white">CTTA</span>
</div>

<div className="flex flex-1 items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent text-sm font-medium text-zinc-100 placeholder-zinc-500 outline-none" placeholder="Where to in Delhi-NCR?" readonly="" type="text" value="Cyber Hub via Nathupur Galli"/>
</div>

<button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800/80 border border-white/10 text-zinc-300 transition-transform hover:scale-105">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<div className="absolute left-1/2 top-32 z-40 flex w-max -translate-x-1/2 items-center gap-2 rounded-full border border-red-500/20 bg-black/60 px-4 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(220,38,38,0.15)]">
<div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,1)] animate-pulse"></div>
<span className="text-xs font-medium tracking-tight text-zinc-200">Police checking reported 1.2km ahead</span>
</div>

<div className="absolute right-4 top-48 z-30 flex flex-col gap-4">

<div className="flex flex-col items-center gap-3 rounded-[2rem] border border-white/5 bg-black/40 py-3 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl">

<button className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-red-600/10 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.2)] transition-all hover:bg-red-600/20">
<iconify-icon className="text-xl" icon="solar:bicycle-linear" strokeWidth="1.5"></iconify-icon>

<div className="absolute -left-16 hidden rounded-lg border border-white/10 bg-zinc-900/90 px-2.5 py-1.5 backdrop-blur-md group-hover:block">
<span className="text-xs font-medium text-white">Galli</span>
</div>
</button>

<button className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/5 hover:text-zinc-100">
<iconify-icon className="text-xl" icon="solar:routing-3-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/5 hover:text-zinc-100">
<iconify-icon className="text-xl" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-black/40 text-zinc-300 backdrop-blur-2xl transition-all hover:bg-white/5 hover:text-white shadow-lg">
<iconify-icon className="text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-black/40 text-yellow-500 backdrop-blur-2xl transition-all hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="absolute bottom-[360px] right-4 z-30">
<button className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-zinc-900 text-white shadow-[0_8px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:w-36 hover:justify-start hover:px-4">
<iconify-icon className="shrink-0 text-xl text-purple-400" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="ml-2 hidden whitespace-nowrap text-sm font-medium tracking-tight group-hover:block">Draw Cutta</span>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 z-40 flex flex-col rounded-t-[2.5rem] border-t border-white/10 bg-black/60 p-6 pt-4 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_-20px_50px_rgba(0,0,0,0.7)]">

<div className="mx-auto mb-6 h-1 w-10 rounded-full bg-zinc-700"></div>

<div className="mb-6 flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white drop-shadow-md">
                        14 <span className="text-xl font-medium text-zinc-400">min</span>
</h2>
<div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-red-500 tracking-tight">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span>Saves 12 mins via user Cutta</span>
</div>
</div>
<div className="text-right">
<p className="text-lg font-semibold tracking-tight text-white drop-shadow-md">4.2 <span className="text-sm font-medium text-zinc-400">km</span></p>
<p className="mt-1 text-xs font-medium text-zinc-500">ETA 18:42</p>
</div>
</div>

<div className="mb-5 flex items-center justify-between px-1">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Force Extreme Galli</span>
<span className="text-xs text-zinc-500">Includes extremely narrow shortcuts</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="peer h-6 w-11 rounded-full border border-white/10 bg-zinc-800 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-zinc-300 after:transition-all after:content-[''] peer-checked:border-red-500/50 peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:bg-white focus:outline-none shadow-inner"></div>
</label>
</div>

<div className="mb-6 flex items-center justify-between overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-black p-4 relative shadow-[0_0_20px_rgba(168,85,247,0.1)]">

<div className="absolute -left-10 top-0 h-20 w-20 bg-purple-500/20 blur-2xl"></div>
<div className="relative z-10 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
<iconify-icon className="text-lg" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-purple-300">₹99/mo Premium</p>
<p className="text-xs font-medium text-zinc-400">VIP shortcuts &amp; Offline packs</p>
</div>
</div>
<button className="relative z-10 rounded-full bg-purple-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform hover:scale-105">
                    Upgrade
                </button>
</div>

<div className="flex gap-3 mb-2">
<button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-zinc-900 text-zinc-300 shadow-md transition-colors hover:bg-zinc-800">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-base font-semibold tracking-tight text-white shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-transform hover:scale-[1.02] active:scale-95">
<iconify-icon className="text-xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
                    Start Cutta
                </button>
</div>

<nav className="mt-6 flex justify-between border-t border-white/5 pt-4 px-2">
<button className="flex flex-col items-center gap-1.5 text-red-500 transition-colors">
<iconify-icon className="text-2xl drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Map</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:bookmark-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Saved</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:shield-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Rank</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Settings</span>
</button>
</nav>
</div>
</main>

    </>
  );
}
