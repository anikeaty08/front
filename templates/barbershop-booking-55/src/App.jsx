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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
<div className="max-w-md mx-auto md:max-w-3xl lg:max-w-5xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-cover bg-center border border-neutral-800 shadow-inner" style={{backgroundImage: 'url(\'https://assets.alteg.io/general/c/ce/ced6a54528e06de_20251028031902.jpeg\')'}}></div>
<div>
<h1 className="font-bold text-lg leading-tight tracking-tight">S&amp;D <span className="text-brand">BarberShop</span></h1>
<p className="text-xs text-neutral-400 flex items-center gap-1">
<iconify-icon className="text-brand" icon="solar:map-point-linear"></iconify-icon>
                        Mihai Eminescu 54
                    </p>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow pt-20 pb-24 px-4">
<div className="max-w-md mx-auto md:max-w-2xl">

<div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 mb-8 shadow-2xl">

<div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage: 'url(\'https://assets.alteg.io/general/c/ce/ced6a54528e06de_20251028031902.jpeg\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
<div className="relative z-10 p-6 md:p-8 text-center">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wide text-brand bg-brand/10 border border-brand/20 rounded-full">
                        PROGRAMĂRI ONLINE
                    </span>
<h2 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight">Bine ați venit la S&amp;D</h2>
<p className="text-neutral-300 text-sm mb-6 max-w-xs mx-auto">Experiență premium de frizerie în inima orașului. Alegeți meșterul preferat mai jos.</p>
</div>
</div>

<div className="flex items-center justify-between mb-6 px-2">
<h3 className="text-lg font-semibold text-white">Alege Meșterul</h3>
<span className="text-xs text-neutral-500 font-medium">Pasul 1 din 3</span>
</div>

<div className="flex flex-col gap-3">

<label className="group relative flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand/50 hover:bg-neutral-800/80 transition-all cursor-pointer">
<input className="peer sr-only" name="master" type="radio"/>

<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700 text-neutral-400 group-hover:text-brand transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>

<div className="flex-grow">
<h4 className="font-medium text-white text-base group-hover:text-brand transition-colors">Oricare profesionist disponibil</h4>
<p className="text-xs text-neutral-500 mt-0.5">Selectare automată pentru cel mai rapid loc</p>
</div>

<div className="shrink-0">
<div className="w-5 h-5 rounded-full border border-neutral-600 peer-checked:bg-brand peer-checked:border-brand flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
</div>

<div className="absolute inset-0 border-2 border-brand rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>

<label className="group relative flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand/50 hover:bg-neutral-800/80 transition-all cursor-pointer">
<input className="peer sr-only" name="master" type="radio"/>

<div className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-neutral-700" style={{backgroundImage: 'url(\'https://assets.alteg.io/masters/sm/7/72/72588779dd4cf62_20260120173442.jpeg\')'}}></div>

<div className="flex-grow">
<h4 className="font-medium text-white text-base">Adrian</h4>
<p className="text-xs text-neutral-400 mt-0.5">Top Barber</p>

<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-brand text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[11px] text-neutral-500 font-medium">3 recenzii</span>
</div>
</div>

<div className="flex items-center gap-3 shrink-0">

<button className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" type="button">
<iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon>
</button>

<div className="w-5 h-5 rounded-full border border-neutral-600 peer-checked:bg-brand peer-checked:border-brand flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
</div>

<div className="absolute inset-0 border-2 border-brand rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>

<label className="group relative flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand/50 hover:bg-neutral-800/80 transition-all cursor-pointer">
<input className="peer sr-only" name="master" type="radio"/>

<div className="w-12 h-12 rounded-full bg-cover bg-center shrink-0 border border-neutral-700" style={{backgroundImage: 'url(\'https://assets.alteg.io/masters/sm/4/45/458ab655d9f3c21_20251027154925.jpeg\')'}}></div>

<div className="flex-grow">
<h4 className="font-medium text-white text-base">Draguțan Vitalie</h4>
<p className="text-xs text-neutral-400 mt-0.5">Top Barber</p>

<div className="flex items-center gap-1 mt-1.5">
<div className="flex text-brand text-[10px]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[11px] text-neutral-500 font-medium">2 recenzii</span>
</div>
</div>

<div className="flex items-center gap-3 shrink-0">

<button className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" type="button">
<iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon>
</button>

<div className="w-5 h-5 rounded-full border border-neutral-600 peer-checked:bg-brand peer-checked:border-brand flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
</div>

<div className="absolute inset-0 border-2 border-brand rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
</div>

<div className="mt-8">
<button className="w-full py-3.5 px-6 rounded-lg bg-brand text-neutral-950 font-semibold text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2">
                    Continuă
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="mt-auto border-t border-neutral-900 bg-neutral-950 py-8">
<div className="max-w-md mx-auto md:max-w-2xl text-center px-4">
<div className="flex items-center justify-center gap-2 mb-4 text-neutral-500">
<iconify-icon className="text-neutral-600" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs">Rezervare securizată</span>
</div>
<p className="text-xs text-neutral-600">
                © 2025 S&amp;D BarberShop. Toate drepturile rezervate.<br/>
                Powered by Altegio
            </p>
</div>
</footer>

    </>
  );
}
