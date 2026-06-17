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



    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
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
      
<div className="mx-auto flex h-screen w-full max-w-md flex-col overflow-hidden bg-[#F4F7F9] relative">

<div className="flex items-center justify-between px-6 pt-4 pb-2 shrink-0">
<div className="text-sm font-medium tracking-tight text-slate-900">9:41</div>
<div className="flex items-center gap-1.5 text-slate-900">
<i className="size-4" data-lucide="signal"></i>
<i className="size-4" data-lucide="wifi"></i>
<div className="relative h-3 w-6 rounded-sm border border-slate-900 flex items-center p-[1px]">
<div className="h-full w-4/5 rounded-[1px] bg-slate-900"></div>
<div className="absolute -right-[2px] h-1 w-[1.5px] rounded-r-sm bg-slate-900"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-5 pt-2 shrink-0">
<button className="inline-flex items-center gap-1 rounded-full bg-slate-100/80 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
<span>GPT-4</span>
<i className="size-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center justify-center rounded-full p-2 text-slate-400">
<i className="size-5" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-5 pt-6 pb-24 no-scrollbar">

<div className="flex flex-col items-center mb-8">

<div className="relative mb-6">
<div className="relative flex size-20 items-center justify-center rounded-[2rem] rounded-bl-xl bg-[#cbe1ed]">

<div className="flex gap-2.5 translate-y-[-2px]">
<div className="size-3 rounded-full bg-white"></div>
<div className="size-3 rounded-full bg-white"></div>
</div>

<div className="absolute bottom-5 left-1/2 w-8 -translate-x-1/2 h-0.5 rounded-full bg-white/40"></div>
</div>

<div className="absolute -bottom-1 -left-1 size-3 rounded-full bg-[#cbe1ed]"></div>
</div>
<h1 className="text-6xl font-medium tracking-tight bg-gradient-to-b from-[#a1bccc] to-[#F4F7F9]/10 bg-clip-text text-transparent pb-1">
          Let’s Work
        </h1>
</div>

<div className="space-y-3">

<button className="flex w-full items-center gap-4 rounded-3xl bg-white p-3.5 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.98]">
<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#f0f3f5] text-slate-700">

<div className="relative flex items-center justify-center">
<div className="size-4 rounded-full bg-slate-700"></div>
<div className="absolute -bottom-1 -right-1 h-0.5 w-3 origin-top-left rotate-45 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="text-base font-medium leading-snug text-slate-800">
            Difference between Nuclear and Atomic energy <span className="text-sm font-normal text-slate-400 ml-0.5 uppercase tracking-wide">· NINJA-1</span>
</div>
</button>

<button className="flex w-full items-center gap-4 rounded-3xl bg-white p-3.5 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.98]">
<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e3f4ea] text-[#22c55e]">
<i className="size-5" data-lucide="pencil"></i>
</div>
<div className="text-base font-medium leading-snug text-slate-800">
            Write me an essay on San Francisco with sources <span className="text-sm font-normal text-slate-400 ml-0.5 uppercase tracking-wide">· GPT-4</span>
</div>
</button>

<button className="flex w-full items-center gap-4 rounded-3xl bg-white p-3.5 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.98]">
<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#ffefe3] text-[#f59e0b]">
<i className="size-5" data-lucide="lightbulb"></i>
</div>
<div className="text-base font-medium leading-snug text-slate-800">
            Give me 50 examples of idioms <span className="text-sm font-normal text-slate-400 ml-0.5 uppercase tracking-wide">· NINJA-1</span>
</div>
</button>

<button className="flex w-full items-center gap-4 rounded-3xl bg-white p-3.5 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform active:scale-[0.98]">
<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#fbebf4] text-[#ec4899]">
<i className="size-5" data-lucide="align-left"></i>
</div>
<div className="text-base font-medium leading-snug text-slate-800">
            Can you explain me quantum theory please? <span className="text-sm font-normal text-slate-400 ml-0.5 uppercase tracking-wide">· GPT-3.5</span>
</div>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#F4F7F9] via-[#F4F7F9] to-transparent pt-10 pb-8 px-5">
<div className="flex items-center gap-3">

<button className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8eced]/80 text-slate-500 backdrop-blur-md">
<i className="size-5" data-lucide="command"></i>
</button>

<div className="flex h-12 flex-1 items-center rounded-full bg-[#e8eced]/80 pl-4 pr-1.5 backdrop-blur-md border border-white/40 shadow-sm">

<div className="mr-2.5 h-5 w-[2px] rounded-full bg-[#00A3FF]"></div>
<div className="flex-1 text-base font-normal text-slate-500 placeholder-slate-400">Aa..</div>

<button className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#00A3FF] text-white shadow-sm transition-transform active:scale-95">
<i className="size-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center pb-1">
<div className="h-1.5 w-32 rounded-full bg-slate-900"></div>
</div>
</div>
<style>
    /* Utility to hide scrollbar for clean look */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>


    </>
  );
}
