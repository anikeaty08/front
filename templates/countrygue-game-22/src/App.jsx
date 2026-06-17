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



        // Initialize Lucide Icons
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
      


<div className="globe-bg flex overflow-hidden z-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="absolute inset-0 grid-overlay pointer-events-none"></div>

<div className="relative w-[80vh] h-[80vh] rounded-full opacity-40 border border-indigo-500/20 shadow-[0_0_100px_rgba(56,189,248,0.1)] flex items-center justify-center animate-spin-slow">
<div className="bg-center opacity-30 mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover rounded-full absolute top-0 right-0 bottom-0 left-0 invert">
</div>

<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative">
<span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
<div className="relative bg-emerald-500 p-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] text-zinc-950">
<svg className="lucide lucide-map-pin w-5 h-5 stroke-[2]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
<div className="mt-2 backdrop-blur-md border px-3 py-1 rounded-full text-xs font-medium shadow-xl bg-zinc-900/80 border-zinc-800">
                    Italy
                </div>
</div>
</div>

<div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
<button className="w-10 h-10 rounded-xl backdrop-blur-md border flex items-center justify-center transition-colors bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white">
<svg className="lucide lucide-settings-2 w-5 h-5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
<button className="w-10 h-10 rounded-xl backdrop-blur-md border flex items-center justify-center transition-colors bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</button>
</div>
<div className="absolute top-6 left-6 flex items-center gap-3 z-10 pointer-events-none">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-globe-2 w-6 h-6" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h1 className="font-semibold tracking-tight leading-none text-white">CountryGuessr</h1>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-500 font-medium px-1.5 py-0.5 rounded border bg-zinc-900/50 border-zinc-800">Score: 1,450</span>
<span className="text-xs text-zinc-500 font-medium px-1.5 py-0.5 rounded border bg-zinc-900/50 border-zinc-800">Att: 2</span>
</div>
</div>
</div>
</div>

<div className="absolute z-20 inset-x-0 bottom-0 md:top-0 md:right-auto md:left-0 md:w-[420px] md:h-full md:border-r md:border-t-0 border-t backdrop-blur-xl shadow-2xl flex flex-col transition-all duration-500 ease-out max-h-[65dvh] md:max-h-full rounded-t-3xl md:rounded-none border-white/10 bg-zinc-950/80">

<div className="w-full flex justify-center pt-3 pb-1 md:hidden cursor-grab active:cursor-grabbing">
<div className="w-12 h-1.5 rounded-full bg-zinc-800"></div>
</div>

<div className="px-6 pt-4 pb-4 border-b shrink-0 border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-zinc-400">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs font-medium uppercase tracking-wider">Find: Mystery Country</span>
</div>
<button className="text-xs transition-colors font-medium flex items-center gap-1 text-rose-400 hover:text-rose-300">
<svg className="lucide lucide-flag w-3 h-3" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg> Give Up
                </button>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-5 h-5 text-zinc-500 group-focus-within:text-zinc-200 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="block w-full pl-10 pr-12 py-3 border rounded-xl text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all shadow-inner bg-zinc-900/50 border-zinc-800 text-white" placeholder="Type a country name..." type="text" value=""/>
<button className="absolute inset-y-1 right-1 aspect-square rounded-lg flex items-center justify-center transition-all bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden md:p-6 pt-4 pr-4 pb-4 pl-4 space-y-3">
<div className="flex items-center justify-between px-1 pb-2">
<span className="text-sm font-medium text-zinc-400">History</span>
<span className="text-xs text-zinc-600">2 Guesses</span>
</div>

<div className="group relative border rounded-2xl p-4 transition-all duration-300 bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/60">

<div className="absolute -inset-px bg-gradient-to-r from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-inner border bg-zinc-800 border-zinc-700">
                            🇮🇹
                        </div>
<div>
<h3 className="text-base font-medium leading-tight text-zinc-100">Italy</h3>
<span className="text-xs flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Best Guess
                            </span>
</div>
</div>
<div className="h-8 w-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<span className="text-xs font-semibold">92%</span>
</div>
</div>

<div className="grid grid-cols-2 gap-2 relative z-10">

<div className="rounded-lg p-2.5 border flex flex-col gap-1 bg-zinc-950/50 border-zinc-800/50">
<div className="flex items-center gap-2 text-emerald-400">
<svg className="lucide lucide-move-horizontal w-3.5 h-3.5" data-lucide="move-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 8 4 4-4 4"></path><path d="M2 12h20"></path><path d="m6 8-4 4 4 4"></path></svg>
<span className="text-xs font-medium">Distance</span>
</div>
<span className="text-sm font-medium text-zinc-200">923 km</span>
<div className="w-full h-1 rounded-full mt-1 overflow-hidden bg-zinc-800">
<div className="bg-emerald-500 h-full rounded-full" style={{width: '85%'}}></div>
</div>
</div>

<div className="rounded-lg p-2.5 border flex flex-col gap-1 bg-zinc-950/50 border-zinc-800/50">
<div className="flex items-center gap-2 text-rose-400">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium">Population</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-medium text-zinc-200">58.2M</span>
<span className="text-[10px] font-medium text-rose-400">+Diff</span>
</div>
<div className="w-full h-1 rounded-full mt-1 overflow-hidden bg-zinc-800">
<div className="bg-rose-500 h-full rounded-full" style={{width: '40%'}}></div>
</div>
</div>

<div className="rounded-lg p-2.5 border flex flex-col gap-1 bg-zinc-950/50 border-zinc-800/50">
<div className="flex items-center gap-2 text-rose-400">
<svg className="lucide lucide-scaling w-3.5 h-3.5" data-lucide="scaling" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>
<span className="text-xs font-medium">Area</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-medium text-zinc-200">301k km²</span>
<svg className="lucide lucide-arrow-up w-3 h-3 text-rose-400" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
</div>

<div className="rounded-lg p-2.5 border flex flex-col gap-1 bg-zinc-950/50 border-zinc-800/50">
<div className="flex items-center gap-2 text-rose-400">
<svg className="lucide lucide-languages w-3.5 h-3.5" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span className="text-xs font-medium">Language</span>
</div>
<span className="text-sm font-medium truncate text-zinc-200">Italian</span>
</div>
</div>
</div>

<div className="group relative border rounded-2xl p-4 transition-all duration-300 opacity-75 hover:opacity-100 bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700">
<div className="flex items-center justify-between mb-3 relative z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-inner border bg-zinc-800 border-zinc-700">
                            🇵🇹
                        </div>
<div>
<h3 className="text-base font-medium leading-tight text-zinc-100">Portugal</h3>
<span className="text-xs text-zinc-500">1st attempt</span>
</div>
</div>
<div className="h-8 w-8 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-400">
<span className="text-xs font-semibold">45%</span>
</div>
</div>

<div className="grid grid-cols-4 gap-2 relative z-10">
<div className="flex flex-col items-center justify-center p-2 rounded border bg-zinc-950/30 border-zinc-800/30">
<svg className="lucide lucide-move-horizontal w-3 h-3 mb-1 text-amber-400" data-lucide="move-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 8 4 4-4 4"></path><path d="M2 12h20"></path><path d="m6 8-4 4 4 4"></path></svg>
<span className="text-[10px] text-zinc-400">1.6k</span>
</div>
<div className="flex flex-col items-center justify-center p-2 rounded border bg-zinc-950/30 border-zinc-800/30">
<svg className="lucide lucide-users w-3 h-3 mb-1 text-amber-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[10px] text-zinc-400">10M</span>
</div>
<div className="flex flex-col items-center justify-center p-2 rounded border bg-zinc-950/30 border-zinc-800/30">
<svg className="lucide lucide-scaling w-3 h-3 mb-1 text-rose-400" data-lucide="scaling" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>
<span className="text-[10px] text-zinc-400">92k</span>
</div>
<div className="flex flex-col items-center justify-center p-2 rounded border bg-zinc-950/30 border-zinc-800/30">
<svg className="lucide lucide-languages w-3 h-3 mb-1 text-rose-400" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span className="text-[10px] text-zinc-400">No</span>
</div>
</div>
</div>

<div className="border border-dashed rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 mt-4 border-zinc-800">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-900">
<svg className="lucide lucide-compass w-4 h-4 text-zinc-500" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="text-xs text-zinc-500 max-w-[200px]">
                    Use the distance metric to triangulate the next location on the map.
                </p>
</div>
</div>

<div className="h-8 bg-gradient-to-t to-transparent pointer-events-none absolute bottom-0 inset-x-0 md:hidden from-zinc-950 via-zinc-950/80"></div>
</div>


    </>
  );
}
