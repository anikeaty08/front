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
      

<div className="relative w-full max-w-md aspect-[4/5] bg-black overflow-hidden flex flex-col shadow-2xl">


<div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-600/40 to-red-600/20 rounded-full blur-[100px] opacity-60"></div>

<div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-red-900/30 via-pink-900/20 to-transparent rounded-full blur-[120px] opacity-50"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"></div>

<div className="relative z-10 flex flex-col justify-between h-full p-10">

<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">

<i className="text-white w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-100 tracking-tight leading-tight">Vitor Prado</span>
<span className="text-xs text-zinc-500 tracking-wide font-normal">Anúncios e Inteligência</span>
</div>
</div>

<div className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
<span className="text-xs font-medium text-zinc-400 tracking-wide">Growth</span>
</div>
</div>

<div className="flex flex-col gap-6 mt-8">

<div className="self-start inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-red-500/10 backdrop-blur-md">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
</div>
<span className="text-xs font-medium text-pink-200 tracking-wide">30 dias</span>
</div>

<h1 className="text-5xl font-medium text-white tracking-tight leading-[1.05]">
                    De <span className="text-zinc-500">10</span> para <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-red-500 pb-1">+40 matrículas</span>
</h1>

<div className="w-16 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent"></div>

<div className="flex flex-col gap-1 text-xl font-normal text-zinc-400">
<div className="flex items-center gap-3">
<i className="text-zinc-600 w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
<span>Sem promessa.</span>
</div>
<div className="flex items-center gap-3">
<i className="text-zinc-600 w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
<span>Sem milagre.</span>
</div>
<div className="flex items-center gap-3 mt-1">
<i className="text-green-500 w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-white font-medium">Só processo.</span>
</div>
</div>
</div>

<div className="flex items-end justify-between mt-auto pt-8">

<div className="flex gap-1.5 pb-2">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
</div>

<div className="group flex items-center gap-3 pl-5 pr-4 py-3 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-transform duration-300 ease-out">
<span className="text-sm font-medium tracking-tight">Arrasta pra ver mais</span>
<i className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
</div>


    </>
  );
}
