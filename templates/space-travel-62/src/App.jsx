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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center">
<div className="w-full max-w-md relative h-full">
<div className="absolute top-[-5%] left-[-20%] w-[70%] h-[40%] bg-orange-600/10 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[10%] right-[-20%] w-[60%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
</div>

<main className="w-full max-w-md relative flex flex-col shadow-2xl shadow-black">

<header className="flex justify-between items-center p-6 pt-10 z-10">
<div className="text-xl font-medium tracking-tighter text-white uppercase flex items-center gap-2">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:planet-linear"></iconify-icon>
                A R E S
            </div>
<button className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center backdrop-blur-md transition-colors hover:bg-white/[0.05]">
<iconify-icon className="text-lg text-slate-200" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<section className="relative flex justify-center items-center py-10 px-6 z-0">

<div className="w-56 h-56 rounded-full relative overflow-hidden flex items-center justify-center shadow-[0_0_80px_rgba(234,88,12,0.15)]" style={{background: 'radial-gradient(circle at 35% 35%, #f97316, #c2410c, #431407, #000000)'}}>

<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '6px 6px'}}></div>

<div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]"></div>
</div>

<div className="absolute left-4 top-16 bg-[#0a0a0f]/80 border border-white/[0.06] backdrop-blur-xl rounded-2xl p-3 flex flex-col gap-1 shadow-lg">
<span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Gravity</span>
<span className="text-sm font-medium text-slate-200 flex items-center gap-1.5">
<iconify-icon className="text-orange-500" icon="solar:arrow-down-linear"></iconify-icon> 
                    3.72 m/s²
                </span>
</div>
<div className="absolute right-4 bottom-14 bg-[#0a0a0f]/80 border border-white/[0.06] backdrop-blur-xl rounded-2xl p-3 flex flex-col gap-1 shadow-lg">
<span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Surface</span>
<span className="text-sm font-medium text-slate-200 flex items-center gap-1.5">
<iconify-icon className="text-blue-400" icon="solar:thermometer-linear"></iconify-icon> 
                    -62°C avg
                </span>
</div>
</section>

<section className="px-6 mb-8 mt-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100 mb-4">Trajectory</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-5 flex flex-col gap-3 backdrop-blur-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full transition-colors group-hover:bg-blue-500/10"></div>
<iconify-icon className="text-2xl text-slate-400" icon="solar:routing-2-linear"></iconify-icon>
<div>
<div className="text-xs text-slate-500 mb-0.5">Distance</div>
<div className="text-lg font-medium text-slate-200">225M km</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-5 flex flex-col gap-3 backdrop-blur-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-bl-full transition-colors group-hover:bg-orange-500/10"></div>
<iconify-icon className="text-2xl text-slate-400" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<div className="text-xs text-slate-500 mb-0.5">Duration</div>
<div className="text-lg font-medium text-slate-200">7 Months</div>
</div>
</div>
</div>
</section>

<section className="mb-8">
<div className="px-6 flex justify-between items-end mb-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Module Class</h2>
<button className="text-xs text-orange-500 hover:text-orange-400 font-medium transition-colors">Compare</button>
</div>

<div className="flex gap-4 overflow-x-auto px-6 pb-4 no-scrollbar snap-x">

<div className="snap-center shrink-0 w-[65%] bg-white/[0.01] border border-white/[0.04] rounded-[2rem] p-6 flex flex-col gap-6 backdrop-blur-sm transition-all opacity-60 hover:opacity-100">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center">
<iconify-icon className="text-xl text-slate-400" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-200 mb-1">Solo Pod</h3>
<p className="text-xs text-slate-500 leading-relaxed">Minimalist transport. Cryo-stasis optimized for single occupants.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[65%] bg-orange-500/[0.03] border border-orange-500/30 rounded-[2rem] p-6 flex flex-col gap-6 backdrop-blur-md relative shadow-[0_0_30px_rgba(249,115,22,0.05)]">
<div className="absolute top-5 right-5 w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)]">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
<iconify-icon className="text-xl text-orange-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-orange-50 mb-1">Crew Habitat</h3>
<p className="text-xs text-orange-200/60 leading-relaxed">Spacious communal living area. Active gravity simulation.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[65%] bg-white/[0.01] border border-white/[0.04] rounded-[2rem] p-6 flex flex-col gap-6 backdrop-blur-sm transition-all opacity-60 hover:opacity-100">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center">
<iconify-icon className="text-xl text-slate-400" icon="solar:crown-star-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-200 mb-1">Astra Prime</h3>
<p className="text-xs text-slate-500 leading-relaxed">Panoramic quartz dome. Michelin-grade synthetic dining.</p>
</div>
</div>
</div>
</section>

<section className="px-6 mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-100 mb-4">Configurations</h2>
<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-slate-300">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-200">EVA Pro Suit</div>
<div className="text-xs text-slate-500">Enhanced radiation shielding</div>
</div>
</div>

<div className="w-11 h-6 bg-orange-500 rounded-full relative cursor-pointer border border-orange-400/50">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white/[0.01] border border-white/[0.03] rounded-2xl opacity-70">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-slate-400">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-300">Infinite O₂ Loop</div>
<div className="text-xs text-slate-500">Self-sustaining biospheres</div>
</div>
</div>

<div className="w-11 h-6 bg-white/10 rounded-full relative cursor-pointer border border-white/5">
<div className="absolute left-1 top-1 w-4 h-4 bg-slate-400 rounded-full"></div>
</div>
</div>
</div>
</section>

<div className="h-10"></div>

<div className="fixed bottom-0 w-full max-w-md p-6 bg-[#050508]/80 backdrop-blur-2xl border-t border-white/[0.04] z-50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Total Provision</span>
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-1">
<iconify-icon className="text-slate-400 text-base" icon="solar:wallet-money-linear"></iconify-icon>
                    4.2M <span className="text-sm text-slate-500 font-normal">CR</span>
</span>
</div>
<button className="bg-slate-100 hover:bg-white text-[#050508] px-6 py-3.5 rounded-2xl font-medium text-sm transition-all active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Initialize Sequence
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
