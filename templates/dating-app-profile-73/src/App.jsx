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
      

<div className="w-full max-w-sm bg-[#FCFBF9] rounded-[2rem] shadow-2xl shadow-stone-900/10 border border-stone-300/50 overflow-hidden flex flex-col h-[85vh] max-h-[850px] relative">

<header className="absolute top-0 w-full z-20 flex justify-between items-center p-5 bg-gradient-to-b from-[#FCFBF9] to-transparent pointer-events-none">
<div className="font-['Playfair_Display'] font-semibold tracking-tighter text-2xl text-stone-900">Values</div>
<button className="w-8 h-8 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 hover:bg-stone-50 transition pointer-events-auto">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>

<main className="flex-1 min-h-0 overflow-y-auto pb-32">

<div className="px-6 pt-24 pb-4 flex items-center gap-5">
<div className="relative w-24 h-24 shrink-0">
<img alt="Profile picture" className="object-cover w-full h-full rounded-full border border-stone-200 shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h1 className="text-3xl font-['Playfair_Display'] font-semibold tracking-tight text-stone-900 mb-1.5">Elena, 28</h1>
<div className="flex flex-col gap-1 text-xs font-medium text-stone-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:case-minimalistic-linear"></iconify-icon> Senior Architect
                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> San Francisco (1.2m)
                        </span>
</div>
</div>
</div>
<div className="p-6 pt-2 flex flex-col gap-8">

<section className="flex flex-col gap-3">
<h2 className="text-xs font-semibold text-stone-400 tracking-wider uppercase pl-1">Primary Alignment</h2>
<div className="flex flex-col gap-4 mt-1">

<div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">

<div className="absolute -top-3 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-stone-200 text-emerald-600 text-xs font-semibold shadow-sm z-10">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Match
                            </div>
<div className="w-12 h-12 rounded-full bg-[#F5F4F0] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-stone-700" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 font-semibold uppercase tracking-wider mb-0.5">Timeline</p>
<p className="text-base font-semibold text-stone-900 tracking-tight">Looking to marry in 1-2 years</p>
</div>
</div>

<div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">

<div className="absolute -top-3 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-stone-200 text-emerald-600 text-xs font-semibold shadow-sm z-10">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Match
                            </div>
<div className="w-12 h-12 rounded-full bg-[#F5F4F0] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-stone-700" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 font-semibold uppercase tracking-wider mb-0.5">Family Planning</p>
<p className="text-base font-semibold text-stone-900 tracking-tight">Wants 2 children</p>
</div>
</div>

<div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">

<div className="absolute -top-3 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-stone-200 text-rose-500 text-xs font-semibold shadow-sm z-10">
<iconify-icon className="text-sm" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Differs
                            </div>
<div className="w-12 h-12 rounded-full bg-[#F5F4F0] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-stone-700" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 font-semibold uppercase tracking-wider mb-0.5">Lifestyle Structure</p>
<p className="text-base font-semibold text-stone-900 tracking-tight">Prefers dual-income household</p>
</div>
</div>
</div>
</section>

<section className="p-6 rounded-2xl bg-stone-800 text-[#FCFBF9] relative overflow-hidden shadow-inner mt-2">
<div className="absolute -top-2 -right-2 p-4 opacity-5 pointer-events-none">
<iconify-icon className="text-8xl" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="relative z-10">
<p className="text-xs font-medium text-stone-400 mb-3 uppercase tracking-widest">A non-negotiable for me is...</p>
<p className="text-lg font-['Playfair_Display'] italic font-medium leading-relaxed">"Shared financial transparency and prioritizing family time on weekends. Ambition is great, but building a life together comes first."</p>
</div>
</section>

<section className="flex flex-col gap-3">
<h2 className="text-xs font-semibold text-stone-400 tracking-wider uppercase pl-1">Perspectives</h2>
<div className="grid grid-cols-2 gap-3">
<div className="p-4 rounded-xl border border-stone-200/80 bg-[#F5F4F0]/50 flex flex-col gap-2">
<iconify-icon className="text-lg text-stone-500" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Politics</p>
<p className="text-sm font-semibold text-stone-900">Moderate</p>
</div>
</div>
<div className="p-4 rounded-xl border border-stone-200/80 bg-[#F5F4F0]/50 flex flex-col gap-2">
<iconify-icon className="text-lg text-stone-500" icon="solar:church-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Religion</p>
<p className="text-sm font-semibold text-stone-900">Christian</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-3">
<h2 className="text-xs font-semibold text-stone-400 tracking-wider uppercase pl-1">Interests &amp; Hobbies</h2>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
<iconify-icon className="text-base text-stone-400" icon="solar:plane-linear" strokeWidth="1.5"></iconify-icon> International Travel
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
<iconify-icon className="text-base text-stone-400" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon> Interior Design
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
<iconify-icon className="text-base text-stone-400" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon> Pilates
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-sm font-medium text-stone-600 shadow-sm">
<iconify-icon className="text-base text-stone-400" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> Non-fiction reading
                        </span>
</div>
</section>
</div>
</main>

<div className="absolute bottom-0 w-full p-5 pt-4 bg-gradient-to-t from-[#FCFBF9] via-[#FCFBF9]/95 to-[#FCFBF9]/80 backdrop-blur-md border-t border-stone-200/50 flex flex-col gap-3 z-20 pointer-events-none">

<div className="flex items-center justify-center gap-2">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
</div>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">3 Connects Today</span>
</div>
<div className="flex gap-3 pointer-events-auto">
<button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:bg-[#F5F4F0] hover:text-stone-900 transition-colors font-semibold text-sm shadow-sm cursor-pointer">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Pass
                </button>
<button className="flex-[1.5] flex items-center justify-center gap-2 py-3.5 rounded-full bg-stone-800 text-[#FCFBF9] hover:bg-stone-900 transition-colors font-semibold text-sm shadow-md cursor-pointer">
<iconify-icon className="text-xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
                    Connect
                </button>
</div>
</div>
</div>

    </>
  );
}
