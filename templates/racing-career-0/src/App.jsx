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
      

<div className="fixed top-0 left-0 w-full h-96 bg-green-500/5 blur-[120px] pointer-events-none z-0"></div>
<main className="max-w-md mx-auto relative min-h-screen pb-32 pt-8 z-10">

<header className="px-6 mb-6">
<p className="text-xs font-semibold tracking-widest text-green-500 uppercase mb-2">2024 Season</p>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Season Objectives</h1>
</header>

<div className="px-6 grid grid-cols-3 gap-3 mb-8">

<div className="border border-green-500/20 bg-green-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-green-500" height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
<span className="text-3xl font-semibold text-green-500 leading-none tracking-tight">4</span>
<span className="text-xs font-semibold tracking-wider text-green-500/70 uppercase text-center">Season Races</span>
</div>

<div className="border border-purple-500/20 bg-purple-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-purple-400" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
<span className="text-3xl font-semibold text-purple-400 leading-none tracking-tight">87</span>
<span className="text-xs font-semibold tracking-wider text-purple-400/70 uppercase text-center">Total Pts</span>
</div>

<div className="border border-green-500/20 bg-green-500/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-green-500" height="24" icon="solar:target-linear" width="24"></iconify-icon>
<span className="text-3xl font-semibold text-green-500 leading-none tracking-tight">4</span>
<span className="text-xs font-semibold tracking-wider text-green-500/70 uppercase text-center">Total Races</span>
</div>
</div>

<div className="px-6 flex flex-col gap-5">

<div className="border border-zinc-700/80 rounded-[1.5rem] p-8 flex flex-col items-center justify-center bg-zinc-950 shadow-sm text-center">
<h2 className="text-xs font-semibold tracking-widest text-zinc-300 uppercase mb-8">Season Progress</h2>

<div className="relative w-40 h-40 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

<circle className="stroke-zinc-900" cx="18" cy="18" fill="none" r="16" strokeWidth="2.5"></circle>

<circle className="stroke-zinc-400" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="33" strokeLinecap="round" strokeWidth="2.5"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="text-4xl font-semibold text-white tracking-tight">67%</span>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-1">Complete</span>
</div>
</div>

<div className="mt-6 flex flex-col items-center gap-1.5 border-t border-zinc-800/80 pt-5 w-full">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Primary Objective Progress</span>
<span className="text-lg font-semibold text-white tracking-tight">4 / 6 Races Complete</span>
</div>
</div>

<div className="border border-zinc-700/80 rounded-[1.5rem] p-6 bg-zinc-950 shadow-sm">
<h3 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">Primary Objective</h3>
<h4 className="text-xl font-medium text-white tracking-tight mb-2">Complete 6 ASN-Sanctioned Races</h4>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">Participate in six races sanctioned by your national authority to qualify for the next stage.</p>
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-zinc-500">Progress</span>
<span className="text-base font-semibold text-white">4/6</span>
</div>
</div>

<div className="border border-zinc-700/80 rounded-[1.5rem] p-6 bg-zinc-950 shadow-sm">
<h3 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3">Secondary Objective</h3>
<h4 className="text-xl font-medium text-white tracking-tight mb-2">Secure National License</h4>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">Obtain your national racing license from your ASN.</p>
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-zinc-500">Progress</span>
<span className="text-base font-semibold text-white">0/1</span>
</div>
</div>

<div className="border border-zinc-700/80 rounded-[1.5rem] p-6 bg-zinc-950 shadow-sm">
<div className="flex justify-between items-start mb-3">
<h3 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mt-1.5">Secondary Objective</h3>
<span className="border border-zinc-200 text-zinc-100 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-md">Complete</span>
</div>
<h4 className="text-xl font-medium text-white tracking-tight mb-2">Accumulate Championship Points</h4>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">Earn points across championship events this season.</p>
<div className="flex justify-between items-end">
<span className="text-sm font-medium text-zinc-500">Progress</span>
<span className="text-base font-semibold text-white">87pts/25pts</span>
</div>
</div>

<div className="border border-zinc-700/80 rounded-[1.5rem] p-6 bg-zinc-950 shadow-sm">
<h3 className="text-xs font-semibold tracking-widest text-yellow-500/90 uppercase mb-6">Race Participation Log</h3>
<div className="flex flex-col gap-4">

<div className="border border-zinc-800 rounded-2xl p-5 flex justify-between items-center bg-zinc-950">
<div>
<h5 className="text-base font-medium text-white">Brands Hatch Round 1</h5>
<p className="text-sm text-zinc-400 mt-1">Radical Challenge Cup</p>
</div>
<div className="text-right">
<div className="text-base font-semibold text-white">P5</div>
<div className="text-sm text-zinc-400 mt-1">20 pts</div>
</div>
</div>

<div className="border border-zinc-800 rounded-2xl p-5 flex justify-between items-center bg-zinc-950">
<div>
<h5 className="text-base font-medium text-white">Silverstone Sprint</h5>
<p className="text-sm text-zinc-400 mt-1">Radical Challenge Cup</p>
</div>
<div className="text-right">
<div className="text-base font-semibold text-white">P3</div>
<div className="text-sm text-zinc-400 mt-1">30 pts</div>
</div>
</div>

<div className="border border-zinc-800 rounded-2xl p-5 flex justify-between items-center bg-zinc-950">
<div>
<h5 className="text-base font-medium text-white">Donington Park Open</h5>
<p className="text-sm text-zinc-400 mt-1">National Series</p>
</div>
<div className="text-right">
<div className="text-base font-semibold text-white">P8</div>
<div className="text-sm text-zinc-400 mt-1">12 pts</div>
</div>
</div>

<div className="border border-zinc-800 rounded-2xl p-5 flex justify-between items-center bg-zinc-950">
<div>
<h5 className="text-base font-medium text-white">Snetterton Endurance</h5>
<p className="text-sm text-zinc-400 mt-1">Radical Challenge Cup</p>
</div>
<div className="text-right">
<div className="text-base font-semibold text-white">P2</div>
<div className="text-sm text-zinc-400 mt-1">25 pts</div>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800 pb-6 pt-1">
<div className="max-w-md mx-auto flex justify-between px-2">
<button className="flex-1 flex flex-col items-center gap-1.5 py-4 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon height="24" icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Dashboard</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1.5 py-4 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Timeline</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1.5 py-4 text-green-500 relative">

<div className="absolute top-0 w-8 h-[2px] bg-green-500 rounded-b-full shadow-[0_1px_8px_rgba(34,197,94,0.8)]"></div>
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Season</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1.5 py-4 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Badges</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1.5 py-4 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon height="24" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Profile</span>
</button>
</div>
</nav>

    </>
  );
}
