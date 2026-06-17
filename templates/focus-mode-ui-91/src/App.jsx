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
      


<div className="absolute inset-0 z-0">
<img alt="Focus Background" className="w-full h-full object-cover opacity-60 saturate-0 scale-105" src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-50/90 via-neutral-50/80 to-neutral-50/90"></div>

<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 bg-noise pointer-events-none z-0 mix-blend-overlay"></div>

<header className="z-10 flex w-full pt-6 pr-8 pb-6 pl-8 relative items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex items-center gap-2 backdrop-blur-md border px-3 py-1.5 rounded-full shadow-lg bg-white/40 border-black/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-700">Deep Work</span>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 opacity-70 hidden md:block">
<span className="text-sm font-medium tracking-tight flex items-center gap-2 drop-shadow-md text-neutral-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar-clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
                Free until 14:30
            </span>
</div>

<button className="group p-2 rounded-full transition-colors duration-300 backdrop-blur-sm hover:bg-black/10 text-neutral-600 hover:text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</header>

<main className="z-10 flex-1 flex flex-col w-full max-w-5xl mr-auto ml-auto pr-8 pl-8 relative gap-x-12 items-center justify-center gap-y-6">

<section className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 text-center w-full space-y-6 items-center">

<div className="flex items-center gap-4 text-xs font-medium tracking-wide uppercase drop-shadow-sm text-neutral-600">
</div>

<p className="leading-relaxed text-lg font-normal max-w-xl drop-shadow-md md:text-sm text-neutral-600">Изучить как работают трассировки в готовых решениях</p><h1 className="md:text-5xl lg:text-6xl leading-tight text-glow text-4xl font-semibold tracking-tight max-w-3xl drop-shadow-xl text-black">Изучить какие эвристики по трассировкам есть в faro</h1>

</section>

<section className="flex flex-col w-full pt-4 pb-4 space-y-4 items-center">

<div className="relative group cursor-default">
<div className="text-7xl font-light tabular-nums tracking-tighter select-none drop-shadow-2xl md:text-8xl lg:text-8xl text-black/90">
                    25:00
                </div>

<div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 text-neutral-500 transition-colors hover:text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rotate-ccw" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></g></svg>
</button>
</div>
</div>

<div className="overflow-hidden w-64 h-2 rounded-full mt-2 backdrop-blur-sm bg-black/10">
<div className="h-full w-full rounded-full origin-left scale-x-0 transition-transform duration-1000 bg-black/80"></div>
</div>

<span className="text-sm font-medium text-neutral-500 tracking-wide">Ready to Focus</span>
</section>

<section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full mt-4">

<button className="order-2 md:order-1 px-8 py-4 rounded-2xl backdrop-blur-xl border transition-all duration-200 flex items-center gap-3 min-w-[200px] justify-center group shadow-lg bg-white/40 border-black/10 text-neutral-600 hover:text-black hover:bg-white/60 hover:border-black/20">
<svg aria-hidden="true" className="iconify group-hover:text-blue-400 transition-colors iconify--lucide" data-icon="lucide:help-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<span className="text-sm font-medium">Decompose task</span>
</button>

<button className="order-1 md:order-2 px-12 py-5 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3 min-w-[220px] justify-center bg-black text-white hover:bg-neutral-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:play" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base font-semibold tracking-tight">Start Focus</span>
</button>

<button className="order-3 md:order-3 px-8 py-4 rounded-2xl bg-transparent border border-transparent text-neutral-500 transition-all duration-200 flex items-center gap-3 min-w-[200px] justify-center backdrop-blur-sm hover:bg-black/5 hover:text-neutral-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-sm font-medium">Postpone</span>
</button>
</section>
</main>

<footer className="z-10 flex w-full pt-6 pb-6 relative justify-center">
<div className="flex items-center gap-3 px-4 py-2 rounded-lg border backdrop-blur-md text-amber-500/80 shadow-lg bg-amber-50/30 border-amber-100/30">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
<span className="text-xs font-medium tracking-wide">Previous block overran by +12m</span>
</div>
</footer>

    </>
  );
}
