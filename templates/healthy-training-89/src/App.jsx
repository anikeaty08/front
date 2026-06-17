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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0" style="background:
             radial-gradient(1200px 800px at 15% 0%, rgba(255,236,220,1) 0%, rgba(245,214,192,1) 35%, rgba(216,188,164,1) 65%, rgba(186,157,137,1) 100%);
           ">
</div>

<div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-white/30 blur-3xl"></div>
<div className="absolute bottom-10 right-8 w-64 h-64 rounded-full bg-amber-200/20 blur-2xl"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-neutral-100/40 blur-3xl"></div>
</div>

<main className="sm:py-16 w-full pt-10 pr-4 pb-10 pl-4">
<section className="mx-auto max-w-sm">

<div className="sm:p-6 bg-white/70 ring-white/50 ring-1 rounded-[28px] pt-5 pr-5 pb-5 pl-5 shadow-[0_15px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Profile" className="ring-2 ring-white/70 w-9 h-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=96&amp;h=96&amp;q=80"/>
<div className="text-[13px] leading-none">
<p className="text-neutral-700">Hello, Eva</p>
<p className="text-neutral-500 mt-1">Good to see you</p>
</div>
</div>
<button className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/70 ring-1 ring-black/5 hover:bg-white/90 transition">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-neutral-700" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<h1 className="mt-6 text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-tight">
            Your healthy training plan is ready
          </h1>

<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Add to Calendar</span>
</button>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 ring-1 ring-black/5 hover:bg-white/90 transition">
<svg className="lucide lucide-share-2 w-5 h-5 text-neutral-700" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
<img alt="Friend" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/70 -ml-1" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=96&amp;h=96&amp;q=80"/>
</div>

<div className="mt-6 grid grid-cols-2 gap-4">

<div className="rounded-3xl bg-white/80 ring-1 ring-black/5 backdrop-blur p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-amber-50 ring-1 ring-amber-100 flex items-center justify-center">
<svg className="lucide lucide-leaf w-4.5 h-4.5 text-amber-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<p className="text-[13px] text-neutral-600">Yoga</p>
</div>
<p className="mt-4 text-2xl tracking-tight text-neutral-900">45 min</p>
<p className="text-[13px] text-neutral-500 mt-1">Mon, Thu, Fri</p>
</div>

<div className="rounded-3xl bg-white/80 ring-1 ring-black/5 backdrop-blur p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-sky-50 ring-1 ring-sky-100 flex items-center justify-center">
<svg className="lucide lucide-wind w-4.5 h-4.5 text-sky-600" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<p className="text-[13px] text-neutral-600">Breath</p>
</div>
<p className="mt-4 text-2xl tracking-tight text-neutral-900">15 min</p>
<p className="text-[13px] text-neutral-500 mt-1">Every Morning</p>
</div>

<div className="col-span-2 rounded-3xl bg-white/80 ring-1 ring-black/5 backdrop-blur p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-rose-50 ring-1 ring-rose-100 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4.5 h-4.5 text-rose-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<p className="text-[13px] text-neutral-600">Meditation</p>
<p className="text-[12px] text-neutral-500">Every Evening</p>
</div>
<div className="ml-auto text-right">
<p className="text-2xl tracking-tight text-neutral-900">30 min</p>
</div>
</div>

<div className="mt-4">
<div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-neutral-900 to-neutral-700 rounded-full"></div>
</div>
<div className="flex justify-between text-[12px] text-neutral-500 mt-2">
<span>Week 3 of 4</span>
<span>66%</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between text-[12px] text-neutral-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span>Reminders enabled</span>
</div>
<button className="inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-900 transition">
<span className="underline underline-offset-4">Edit plan</span>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>
</main>


    </>
  );
}
