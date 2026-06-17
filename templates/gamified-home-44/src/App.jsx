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
      

<nav className="fixed top-0 left-0 w-full bg-white border-b-2 border-black z-50 px-4 py-3 md:px-8">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black flex items-center justify-center text-white font-semibold tracking-tighter text-lg">
                    PL
                </div>
<span className="font-semibold tracking-tight text-lg hidden sm:block">PROPLEVEL</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end leading-none">
<span className="text-xs font-semibold tracking-tight text-stone-500 uppercase">Current Value</span>
<span className="font-bold tracking-tight">$450,200</span>
</div>
<div className="h-8 w-[2px] bg-stone-200 hidden md:block"></div>
<div className="flex items-center gap-3 bg-yellow-100 border-2 border-black px-3 py-1.5 hard-shadow-sm rounded-full">
<i className="w-4 h-4 text-black" data-lucide="crown"></i>
<span className="font-bold text-sm tracking-tight">LVL 4</span>
</div>
</div>
</div>
</nav>

<main className="pt-24 pb-20 px-4 md:px-8 max-w-4xl mx-auto overflow-hidden">

<header className="mb-20 text-center">
<div className="inline-block mb-6 relative group cursor-pointer">

<div className="w-24 h-24 bg-purple-300 border-2 border-black rounded-full mx-auto flex items-center justify-center relative hard-shadow overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-8 bg-black rounded-b-full translate-y-2"></div> 
<div className="absolute top-8 left-6 w-3 h-3 bg-black rounded-full"></div> 
<div className="absolute top-8 right-6 w-3 h-3 bg-black rounded-full"></div> 
</div>
</div>
<div className="absolute -top-2 -right-6 bg-red-400 border-2 border-black text-xs font-bold px-2 py-0.5 rotate-12 hard-shadow-sm">
                    HOUSE HERO
                </div>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-6">
                LEVEL UP<br/>YOUR ASSET
            </h1>
<p className="text-lg md:text-xl font-medium text-stone-600 max-w-xl mx-auto mb-8 leading-snug">
                Track maintenance, unlock value, and master homeownership. Your property is currently <span className="bg-green-200 px-1 border border-black">Healthy</span>.
            </p>

<div className="max-w-md mx-auto relative group">
<div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
<span>XP Progress</span>
<span>1,250 / 2,000 XP</span>
</div>
<div className="h-6 w-full bg-white border-2 border-black rounded-full overflow-hidden relative hard-shadow-sm">
<div className="h-full bg-stripes bg-green-300 w-[62%] border-r-2 border-black"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '10px 10px'}}></div>
</div>
<button className="mt-8 bg-black text-white px-8 py-3 font-semibold tracking-tight text-lg hover:bg-stone-800 transition-colors border-2 border-transparent hover:border-black hard-shadow-hover">
                    View Quests
                </button>
</div>
</header>

<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-black transform md:-translate-x-1/2 z-0"></div>

<div className="relative z-10 mb-16 md:flex justify-between items-center w-full">
<div className="hidden md:block w-[45%]"></div>

<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center transform -translate-x-1/2 z-20">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
<div className="pl-12 md:pl-0 md:w-[45%]">
<div className="bg-white border-2 border-black p-6 hard-shadow relative group hover:-translate-y-1 transition-transform duration-200">
<div className="absolute -top-3 -right-3 bg-blue-300 border-2 border-black w-10 h-10 flex items-center justify-center rounded-full z-10">
<i className="w-5 h-5" data-lucide="key"></i>
</div>
<span className="text-xs font-bold tracking-tight uppercase text-stone-500 mb-1 block">Oct 12, 2021</span>
<h3 className="text-xl font-semibold tracking-tight mb-2">Acquired Asset</h3>
<p className="text-sm font-medium text-stone-600 mb-4">
                            Keys collected. Base valuation established at $380k. The journey begins.
                        </p>
<div className="inline-flex items-center gap-1 text-xs font-bold bg-stone-100 px-2 py-1 border border-black rounded">
<i className="w-3 h-3" data-lucide="award"></i>
<span>+500 XP</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 mb-16 md:flex justify-between items-center w-full flex-row-reverse">
<div className="hidden md:block w-[45%]"></div>

<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-yellow-200 border-2 border-black rounded-full flex items-center justify-center transform -translate-x-1/2 z-20">
<i className="w-4 h-4" data-lucide="wrench"></i>
</div>
<div className="pl-12 md:pl-0 md:w-[45%]">
<div className="bg-yellow-50 border-2 border-black p-6 hard-shadow relative group hover:-translate-y-1 transition-transform duration-200">
<span className="text-xs font-bold tracking-tight uppercase text-stone-500 mb-1 block">Feb 14, 2022</span>
<h3 className="text-xl font-semibold tracking-tight mb-2">HVAC System Tune-up</h3>
<div className="flex gap-4 mb-4">

<div className="flex-1 bg-white border border-black p-2 text-center">
<span className="block text-xs text-stone-400 uppercase">Efficiency</span>
<span className="font-bold text-lg text-red-400">72%</span>
</div>
<div className="flex flex-col justify-center">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 bg-white border border-black p-2 text-center">
<span className="block text-xs text-stone-400 uppercase">Efficiency</span>
<span className="font-bold text-lg text-green-500">94%</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 border-t border-dashed border-stone-300 pt-3">
<span className="text-sm font-bold">Cost: $180</span>
<div className="inline-flex items-center gap-1 text-xs font-bold bg-yellow-200 px-2 py-1 border border-black rounded">
<i className="w-3 h-3" data-lucide="zap"></i>
<span>+150 XP</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 mb-16 md:flex justify-between items-center w-full">
<div className="hidden md:block w-[45%]"></div>

<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-green-300 border-2 border-black rounded-full flex items-center justify-center transform -translate-x-1/2 z-20">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</div>
<div className="pl-12 md:pl-0 md:w-[45%]">
<div className="bg-green-50 border-2 border-black p-6 hard-shadow relative group hover:-translate-y-1 transition-transform duration-200">
<span className="text-xs font-bold tracking-tight uppercase text-stone-500 mb-1 block">Aug 05, 2023</span>
<h3 className="text-xl font-semibold tracking-tight mb-2">Smart Home Integration</h3>
<p className="text-sm font-medium text-stone-600 mb-4">
                            Installed Ecobee thermostat, Ring security, and smart locks. Property modernization score increased.
                        </p>

<div className="grid grid-cols-2 gap-2 mb-4">
<div className="bg-white border border-black p-2 flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs font-bold">Security +10</span>
</div>
<div className="bg-white border border-black p-2 flex items-center gap-2">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span className="text-xs font-bold">Value +1.2%</span>
</div>
</div>
<div className="w-full bg-stone-200 h-2 rounded-full border border-black overflow-hidden">
<div className="bg-green-400 h-full w-[85%]"></div>
</div>
<p className="text-[10px] text-right mt-1 font-mono uppercase">Upgrade Complete</p>
</div>
</div>
</div>

<div className="relative z-10 mb-16 md:flex justify-between items-center w-full flex-row-reverse">
<div className="hidden md:block w-[45%]"></div>

<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-red-400 border-2 border-black rounded-full flex items-center justify-center transform -translate-x-1/2 z-20 animate-pulse">
<i className="w-4 h-4 text-white" data-lucide="alert-circle"></i>
</div>
<div className="pl-12 md:pl-0 md:w-[45%]">
<div className="bg-white border-2 border-red-500 border-dashed p-6 relative">
<div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 border border-black uppercase tracking-wider">
                            Active Quest
                        </div>
<h3 className="text-xl font-semibold tracking-tight mt-2 mb-2">Gutter Cleaning</h3>
<p className="text-sm text-stone-500 mb-4">Prevent water damage. Recommended every 6 months.</p>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 border-black bg-white peer-checked:bg-black transition-colors"></div>
<i className="w-4 h-4 text-white absolute left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
<div className="flex-1">
<span className="font-bold text-sm block group-hover:text-red-500 transition-colors">Mark as Complete</span>
<span className="text-xs text-stone-400">Reward: 100 XP + Water Shield Badge</span>
</div>
</label>
</div>
</div>
</div>

<div className="relative z-10 pb-12 w-full text-center">
<div className="inline-block bg-black text-white text-sm font-bold py-2 px-6 rounded-full border-2 border-white hard-shadow-sm mb-4">
                    NEXT LEVEL AT 2,000 XP
                 </div>
<div className="flex justify-center">
<div className="p-4 bg-stone-100 border-2 border-stone-300 border-dashed rounded-lg">
<i className="w-6 h-6 text-stone-400 mx-auto mb-2" data-lucide="lock"></i>
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Locked: Kitchen Reno</span>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 md:hidden z-40">
<button className="w-14 h-14 bg-black text-white border-2 border-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>

<footer className="border-t-2 border-black bg-white py-12">
<div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h4 className="font-bold tracking-tight text-xl mb-1">PROPLEVEL</h4>
<p className="text-sm text-stone-500">Gamifying the mundane for better living.</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-purple-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-purple-200 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
