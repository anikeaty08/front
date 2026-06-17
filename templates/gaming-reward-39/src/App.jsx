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
      

<div className="w-full max-w-[400px] bg-gradient-to-b from-purple-400 to-indigo-600 rounded-[3rem] p-3 shadow-[0_12px_0_theme(colors.indigo.900),0_24px_40px_rgba(0,0,0,0.4)] relative border-[6px] border-purple-200 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-[2.5rem]"></div>

<div className="flex justify-between items-center px-4 pt-4 pb-2 relative z-10">
<button className="w-12 h-12 rounded-full bg-gradient-to-b from-fuchsia-400 to-purple-500 border-4 border-fuchsia-200 shadow-[0_4px_0_theme(colors.purple.800)] flex items-center justify-center text-white active:translate-y-1 active:shadow-[0_0px_0_theme(colors.purple.800)] transition-all">
<iconify-icon className="text-2xl drop-shadow-sm" icon="solar:info-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-gradient-to-b from-fuchsia-400 to-purple-500 border-4 border-fuchsia-200 shadow-[0_4px_0_theme(colors.purple.800)] flex items-center justify-center text-white active:translate-y-1 active:shadow-[0_0px_0_theme(colors.purple.800)] transition-all">
<iconify-icon className="text-2xl drop-shadow-sm" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</div>

<div className="px-2 pb-6 relative z-10 flex flex-col">

<div className="flex flex-col items-center mt-0 mb-6 relative">
<div className="w-24 h-24 bg-gradient-to-b from-yellow-300 to-orange-500 rounded-full border-4 border-yellow-100 shadow-[0_6px_0_theme(colors.orange.700)] flex items-center justify-center -rotate-3 relative z-10 group hover:rotate-0 transition-transform">

<div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_theme(colors.orange.400)_120%)] rounded-full animate-[spin_10s_linear_infinite] opacity-50"></div>
<iconify-icon className="text-5xl text-white drop-shadow-[0_4px_4px_rgba(194,65,12,0.6)] relative z-10" icon="solar:cup-star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="-mt-5 bg-gradient-to-b from-pink-400 to-rose-500 px-6 py-1.5 rounded-full border-4 border-pink-200 shadow-[0_4px_0_theme(colors.rose.800)] rotate-2 z-20">
<h1 className="text-2xl font-semibold tracking-tight text-white uppercase" style={{textShadow: '0 3px 0 #9f1239, 0 -1px 0 #fbcfe8'}}>Disco Nights</h1>
</div>
</div>

<div className="bg-gradient-to-b from-sky-300 to-blue-500 rounded-[2rem] p-4 border-4 border-sky-100 shadow-[0_8px_0_theme(colors.blue.800)] relative overflow-visible mt-2">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-[0_4px_0_theme(colors.sky.300)] border-2 border-sky-100 whitespace-nowrap z-20">
<h3 className="text-sm font-semibold tracking-tight text-blue-600 uppercase">Grand Reward!</h3>
</div>
<div className="flex justify-between items-center relative bg-blue-900/15 rounded-2xl p-3 border-t-4 border-blue-900/20 mt-3 shadow-inner">

<div className="absolute inset-0 flex justify-evenly items-center pointer-events-none px-4">
<iconify-icon className="text-xl text-white/50 drop-shadow-sm" icon="solar:add-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<iconify-icon className="text-xl text-white/50 drop-shadow-sm" icon="solar:add-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>

<div className="flex flex-col items-center gap-1.5 relative z-10">
<div className="w-14 h-14 rounded-full bg-gradient-to-b from-amber-200 to-orange-400 border-4 border-white shadow-[0_4px_0_theme(colors.orange.600)] flex items-center justify-center -rotate-6 hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-orange-900" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-sm font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">500K GC</span>
</div>

<div className="flex flex-col items-center gap-1.5 relative z-10">
<div className="w-14 h-14 rounded-full bg-gradient-to-b from-emerald-200 to-green-400 border-4 border-white shadow-[0_4px_0_theme(colors.green.700)] flex items-center justify-center rotate-6 hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-green-900" icon="solar:banknote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-sm font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">250 SC</span>
</div>

<div className="flex flex-col items-center gap-1.5 relative z-10">
<div className="w-14 h-14 rounded-full bg-gradient-to-b from-fuchsia-200 to-purple-400 border-4 border-white shadow-[0_4px_0_theme(colors.purple.700)] flex items-center justify-center -rotate-3 hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-purple-900" icon="solar:crown-star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-sm font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">5K SC</span>
</div>
</div>
</div>

<div className="mt-5 bg-indigo-950/60 rounded-[2.5rem] p-2.5 border-t-[6px] border-indigo-950 shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)] flex gap-2.5">

<div className="flex flex-col gap-3 flex-1">

<div className="h-[104px] bg-gradient-to-b from-lime-400 to-green-500 rounded-[2rem] p-3 border-4 border-lime-200 shadow-[0_6px_0_theme(colors.green.700)] flex flex-col justify-center relative active:translate-y-1.5 active:shadow-[0_0px_0_theme(colors.green.700)] transition-all cursor-pointer">
<div className="flex items-center gap-2 relative z-10">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-[0_3px_0_theme(colors.green.800)] border-2 border-lime-100">
<iconify-icon className="text-xl text-green-600" icon="solar:gamepad-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<p className="text-sm font-semibold text-white leading-tight drop-shadow-[0_2px_1px_rgba(21,128,61,0.8)]">Play SC 50<br/>on Buffalo</p>
</div>

<div className="mt-2.5 relative z-10">
<div className="h-5 bg-green-900/50 rounded-full w-full p-1 border-2 border-green-900 shadow-inner flex items-center relative">
<span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white drop-shadow-md z-10">0%</span>

<div className="w-0 h-full bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full shadow-[inset_0_-2px_0_rgba(234,88,12,0.4)]"></div>
</div>
</div>
</div>

<div className="h-[104px] bg-gradient-to-b from-slate-400 to-slate-600 rounded-[2rem] border-4 border-slate-300 shadow-[0_6px_0_theme(colors.slate.800)] flex items-center justify-center relative">
<div className="w-12 h-12 rounded-full bg-slate-800/40 shadow-inner flex items-center justify-center border-t-2 border-slate-700/50">
<iconify-icon className="text-2xl text-slate-300/80 drop-shadow-md" icon="solar:lock-keyhole-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>

<div className="h-[104px] bg-gradient-to-b from-slate-400 to-slate-600 rounded-[2rem] border-4 border-slate-300 shadow-[0_6px_0_theme(colors.slate.800)] flex items-center justify-center relative">
<div className="w-12 h-12 rounded-full bg-slate-800/40 shadow-inner flex items-center justify-center border-t-2 border-slate-700/50">
<iconify-icon className="text-2xl text-slate-300/80 drop-shadow-md" icon="solar:lock-keyhole-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col gap-3 w-[88px] relative items-center">

<div className="absolute top-10 bottom-10 w-4 bg-indigo-900 rounded-full border-x-2 border-indigo-950 shadow-inner z-0"></div>

<div className="h-[104px] w-full bg-gradient-to-b from-pink-400 to-rose-500 rounded-[2rem] flex flex-col items-center justify-center gap-1 border-4 border-pink-200 shadow-[0_6px_0_theme(colors.rose.800)] relative z-10 active:translate-y-1.5 active:shadow-[0_0px_0_theme(colors.rose.800)] transition-all cursor-pointer">
<div className="bg-white/20 p-2 rounded-full shadow-inner mb-0.5">
<iconify-icon className="text-2xl text-white drop-shadow-md" icon="solar:glass-wine-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-xs font-semibold text-white drop-shadow-[0_1px_1px_rgba(159,18,57,0.8)]">1 Martini</span>
</div>

<div className="h-[104px] w-full bg-gradient-to-b from-slate-400 to-slate-600 rounded-[2rem] flex flex-col items-center justify-center gap-1 border-4 border-slate-300 shadow-[0_6px_0_theme(colors.slate.800)] relative z-10 opacity-90">
<div className="bg-slate-800/20 p-2 rounded-full shadow-inner mb-0.5">
<iconify-icon className="text-2xl text-slate-200" icon="solar:glass-wine-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-200 drop-shadow-sm">1 Martini</span>
</div>

<div className="h-[104px] w-full bg-gradient-to-b from-slate-400 to-slate-600 rounded-[2rem] flex flex-col items-center justify-center gap-1 border-4 border-slate-300 shadow-[0_6px_0_theme(colors.slate.800)] relative z-10 opacity-90">
<div className="bg-slate-800/20 p-2 rounded-full shadow-inner mb-0.5">
<iconify-icon className="text-2xl text-slate-200" icon="solar:glass-wine-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-200 drop-shadow-sm">1 Martini</span>
</div>
</div>
</div>

<div className="mt-8 flex flex-col items-center gap-5">

<button className="w-full max-w-[260px] bg-gradient-to-b from-yellow-300 to-amber-500 text-amber-950 rounded-full py-4 px-8 text-2xl font-semibold tracking-tight border-[5px] border-yellow-100 shadow-[0_10px_0_theme(colors.amber.700),0_15px_20px_rgba(0,0,0,0.3)] transition-all hover:brightness-105 active:translate-y-2.5 active:shadow-[0_0px_0_theme(colors.amber.700),0_0px_0px_rgba(0,0,0,0)] uppercase" style={{textShadow: '0 2px 0 rgba(255,255,255,0.6)'}}>
                    LET'S GO!
                </button>

<div className="bg-indigo-900 text-sky-200 text-sm font-semibold py-2 px-6 rounded-full border-[3px] border-indigo-950 shadow-inner flex items-center gap-2">
<iconify-icon className="text-lg text-yellow-400 animate-pulse" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    22:36:04
                </div>
</div>
</div>
</div>

    </>
  );
}
