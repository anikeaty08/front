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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      });
    
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
      
<div className="min-h-screen flex items-center justify-center p-4">
<div className="w-full max-w-6xl">
<header className="mb-6">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white/90">Board Layout</h1>
<p className="text-sm md:text-base text-white/60 mt-1">A responsive, accurate recreation with labeled tiles and corner spaces.</p>
</header>

<section className="mx-auto bg-neutral-900/60 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-2xl ring-1 ring-white/10">
<div className="mx-auto aspect-square w-full bg-emerald-50/5 rounded-lg ring-1 ring-white/10 p-2 md:p-3">
<div className="grid grid-cols-11 grid-rows-11 w-full h-full relative">

<div className="col-start-2 col-span-9 row-start-2 row-span-9 relative rounded-md bg-neutral-900/40 ring-1 ring-white/10 overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="rotate-[-14deg]">
<div className="px-6 py-3 md:px-10 md:py-4 bg-red-600 rounded-md shadow-lg shadow-red-900/40 ring-1 ring-white/10">
<div className="text-3xl md:text-5xl font-semibold tracking-tight text-white">MONOPOLY</div>
</div>
</div>
</div>

<div className="absolute left-6 top-6 rotate-6">
<div className="bg-cyan-500/20 border-2 border-cyan-400/60 rounded-md px-3 py-2 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="gift"></i>
<span className="text-xs font-medium text-cyan-100">Community Chest</span>
</div>
</div>
<div className="absolute right-6 bottom-8 -rotate-6">
<div className="bg-orange-500/20 border-2 border-orange-400/60 rounded-md px-3 py-2 flex items-center gap-2">
<i className="w-4 h-4 text-orange-300" data-lucide="help-circle"></i>
<span className="text-xs font-medium text-orange-100">Chance</span>
</div>
</div>
</div>


<div className="col-start-1 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-2 flex items-center justify-center rotate-180">
<div className="text-center">
<i className="w-6 h-6 mx-auto text-red-400" data-lucide="car"></i>
<p className="mt-1 text-[10px] font-medium text-white/80 tracking-tight">FREE</p>
<p className="text-xs font-medium text-white tracking-tight">PARKING</p>
</div>
</div>
</div>

<div className="col-start-11 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-2 flex items-center justify-center rotate-180">
<div className="text-center">
<i className="w-6 h-6 mx-auto text-indigo-300" data-lucide="badge-alert"></i>
<p className="mt-1 text-[10px] font-medium text-white/80 tracking-tight">GO TO</p>
<p className="text-xs font-medium text-white tracking-tight">JAIL</p>
</div>
</div>
</div>

<div className="col-start-1 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-2 flex items-center justify-center">
<div className="text-center">
<i className="w-6 h-6 mx-auto text-amber-300" data-lucide="gavel"></i>
<p className="mt-1 text-[10px] font-medium text-white/80 tracking-tight">IN JAIL /</p>
<p className="text-xs font-medium text-white tracking-tight">JUST VISITING</p>
</div>
</div>
</div>

<div className="col-start-11 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-2 flex items-center justify-center">
<div className="text-center">
<i className="w-6 h-6 mx-auto text-lime-300" data-lucide="corner-right-down"></i>
<p className="mt-1 text-xl font-semibold tracking-tight text-red-400">GO</p>
<p className="text-[10px] text-white/70">Collect 200</p>
</div>
</div>
</div>


<div className="col-start-2 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-red-500 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">KENTUCKY AVE</p>
<p className="text-[10px] text-white/60 mt-1">$220</p>
</div>
</div>
</div>
</div>

<div className="col-start-3 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full border-2 border-orange-400/70 rounded-sm flex flex-col items-center justify-center">
<i className="w-5 h-5 text-orange-300" data-lucide="help-circle"></i>
<p className="mt-1 text-[10px] text-white/80">CHANCE</p>
</div>
</div>
</div>

<div className="col-start-4 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-red-500 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">INDIANA AVE</p>
<p className="text-[10px] text-white/60 mt-1">$220</p>
</div>
</div>
</div>
</div>

<div className="col-start-5 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-red-500 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">ILLINOIS AVE</p>
<p className="text-[10px] text-white/60 mt-1">$240</p>
</div>
</div>
</div>
</div>

<div className="col-start-6 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-white/80" data-lucide="train"></i>
<p className="text-[10px] mt-1 text-white/80">B. & O. RAILROAD</p>
<p className="text-[10px] text-white/60 mt-0.5">$200</p>
</div>
</div>
</div>

<div className="col-start-7 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-yellow-400 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">ATLANTIC AVE</p>
<p className="text-[10px] text-white/60 mt-1">$260</p>
</div>
</div>
</div>
</div>

<div className="col-start-8 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-yellow-400 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">VENTNOR AVE</p>
<p className="text-[10px] text-white/60 mt-1">$260</p>
</div>
</div>
</div>
</div>

<div className="col-start-9 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-sky-300" data-lucide="droplets"></i>
<p className="text-[10px] mt-1 text-white/80">WATER WORKS</p>
<p className="text-[10px] text-white/60 mt-0.5">$150</p>
</div>
</div>
</div>

<div className="col-start-10 row-start-1">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-180">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-yellow-400 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">MARVIN GARDENS</p>
<p className="text-[10px] text-white/60 mt-1">$280</p>
</div>
</div>
</div>
</div>



<div className="col-start-2 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-sky-300 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">CONNECTICUT AVE</p>
<p className="text-[10px] text-white/60 mt-1">$120</p>
</div>
</div>
</div>
</div>

<div className="col-start-3 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-sky-300 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">VERMONT AVE</p>
<p className="text-[10px] text-white/60 mt-1">$100</p>
</div>
</div>
</div>
</div>

<div className="col-start-4 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full border-2 border-orange-400/70 rounded-sm flex flex-col items-center justify-center">
<i className="w-5 h-5 text-orange-300" data-lucide="help-circle"></i>
<p className="mt-1 text-[10px] text-white/80">CHANCE</p>
</div>
</div>
</div>

<div className="col-start-5 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-sky-300 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">ORIENTAL AVE</p>
<p className="text-[10px] text-white/60 mt-1">$100</p>
</div>
</div>
</div>
</div>

<div className="col-start-6 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-white/80" data-lucide="train"></i>
<p className="text-[10px] mt-1 text-white/80">READING RAILROAD</p>
<p className="text-[10px] text-white/60 mt-0.5">$200</p>
</div>
</div>
</div>

<div className="col-start-7 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-amber-300" data-lucide="receipt"></i>
<p className="text-[10px] mt-1 text-white/80">INCOME TAX</p>
<p className="text-[10px] text-white/60 mt-0.5">$200</p>
</div>
</div>
</div>

<div className="col-start-8 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-amber-900 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">BALTIC AVE</p>
<p className="text-[10px] text-white/60 mt-1">$60</p>
</div>
</div>
</div>
</div>

<div className="col-start-9 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full border-2 border-cyan-400/70 rounded-sm flex flex-col items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="gift"></i>
<p className="mt-1 text-[10px] text-white/80">COMMUNITY CHEST</p>
</div>
</div>
</div>

<div className="col-start-10 row-start-11">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-amber-900 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">MEDITERRANEAN AVE</p>
<p className="text-[10px] text-white/60 mt-1">$60</p>
</div>
</div>
</div>
</div>



<div className="col-start-1 row-start-2">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-orange-400 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">NEW YORK AVE</p>
<p className="text-[10px] text-white/60 mt-1">$200</p>
</div>
</div>
</div>
</div>

<div className="col-start-1 row-start-3">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-orange-400 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">TENNESSEE AVE</p>
<p className="text-[10px] text-white/60 mt-1">$180</p>
</div>
</div>
</div>
</div>

<div className="col-start-1 row-start-4">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full border-2 border-cyan-400/70 rounded-sm flex flex-col items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="gift"></i>
<p className="mt-1 text-[10px] text-white/80">COMMUNITY CHEST</p>
</div>
</div>
</div>

<div className="col-start-1 row-start-5">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-orange-400 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">ST. JAMES PLACE</p>
<p className="text-[10px] text-white/60 mt-1">$180</p>
</div>
</div>
</div>
</div>

<div className="col-start-1 row-start-6">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-white/80" data-lucide="train"></i>
<p className="text-[10px] mt-1 text-white/80 text-center">PENNSYLVANIA RAILROAD</p>
<p className="text-[10px] text-white/60 mt-0.5">$200</p>
</div>
</div>
</div>

<div className="col-start-1 row-start-7">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-pink-300 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">VIRGINIA AVE</p>
<p className="text-[10px] text-white/60 mt-1">$160</p>
</div>
</div>
</div>
</div>

<div className="col-start-1 row-start-8">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-pink-300 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">STATES AVE</p>
<p className="text-[10px] text-white/60 mt-1">$140</p>
</div>
</div>
</div>
</div>

<div className="col-start-1 row-start-9">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-yellow-300" data-lucide="zap"></i>
<p className="text-[10px] mt-1 text-white/80">ELECTRIC COMPANY</p>
<p className="text-[10px] text-white/60 mt-0.5">$150</p>
</div>
</div>
</div>

<div className="col-start-1 row-start-10">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-pink-300 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">ST. CHARLES PLACE</p>
<p className="text-[10px] text-white/60 mt-1">$140</p>
</div>
</div>
</div>
</div>


<div className="col-start-11 row-start-2">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-green-500 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">PACIFIC AVE</p>
<p className="text-[10px] text-white/60 mt-1">$300</p>
</div>
</div>
</div>
</div>

<div className="col-start-11 row-start-3">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-green-500 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">N. CAROLINA AVE</p>
<p className="text-[10px] text-white/60 mt-1">$300</p>
</div>
</div>
</div>
</div>

<div className="col-start-11 row-start-4">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full border-2 border-cyan-400/70 rounded-sm flex flex-col items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="gift"></i>
<p className="mt-1 text-[10px] text-white/80">COMMUNITY CHEST</p>
</div>
</div>
</div>

<div className="col-start-11 row-start-5">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-green-500 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">PENNSYLVANIA AVE</p>
<p className="text-[10px] text-white/60 mt-1">$320</p>
</div>
</div>
</div>
</div>

<div className="col-start-11 row-start-6">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-white/80" data-lucide="train"></i>
<p className="text-[10px] mt-1 text-white/80">SHORT LINE</p>
<p className="text-[10px] text-white/60 mt-0.5">$200</p>
</div>
</div>
</div>

<div className="col-start-11 row-start-7">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full border-2 border-orange-400/70 rounded-sm flex flex-col items-center justify-center">
<i className="w-5 h-5 text-orange-300" data-lucide="help-circle"></i>
<p className="mt-1 text-[10px] text-white/80">CHANCE</p>
</div>
</div>
</div>

<div className="col-start-11 row-start-8">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-blue-700 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">PARK PLACE</p>
<p className="text-[10px] text-white/60 mt-1">$350</p>
</div>
</div>
</div>
</div>

<div className="col-start-11 row-start-9">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col items-center justify-center">
<i className="w-5 h-5 text-purple-300" data-lucide="gem"></i>
<p className="text-[10px] mt-1 text-white/80">LUXURY TAX</p>
<p className="text-[10px] text-white/60 mt-0.5">$100</p>
</div>
</div>
</div>

<div className="col-start-11 row-start-10">
<div className="aspect-square bg-neutral-900 ring-1 ring-white/10 rounded-sm p-1 -rotate-90">
<div className="h-full w-full flex flex-col">
<div className="h-3 bg-blue-700 rounded-sm"></div>
<div className="flex-1 px-1 pt-1 text-center">
<p className="text-[10px] text-white/80 leading-tight">BOARDWALK</p>
<p className="text-[10px] text-white/60 mt-1">$400</p>
</div>
</div>
</div>
</div>



</div>
</div>
</section>
</div>
</div>




    </>
  );
}
