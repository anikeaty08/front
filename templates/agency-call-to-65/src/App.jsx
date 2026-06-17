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
      

<header className="flex justify-between items-center p-6 w-full absolute top-0 left-0 z-20">
<div className="flex items-center gap-2.5">
<div className="bg-[#2CE5AC] text-[#0B1115] p-1 rounded-md flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-base text-white">Spark Globally</span>
</div>
<div className="text-slate-500 text-sm">6 / 6</div>
</header>

<button className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#161D21] items-center justify-center text-slate-400 hover:text-white hover:bg-[#1E262B] transition-colors z-20">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>

<button className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#161D21] items-center justify-center text-slate-400 hover:text-white hover:bg-[#1E262B] transition-colors z-20">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<main className="flex-1 flex flex-col items-center justify-center px-6 py-24 w-full max-w-5xl mx-auto relative z-10">
<div className="flex flex-col items-center w-full text-center">

<span className="text-[#00C97B] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Slide 5</span>

<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
                Call To <span className="text-[#2CE5AC]">Action</span>
</h1>

<p className="text-2xl sm:text-3xl font-medium text-white mb-10">Let's start small.</p>

<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00C97B]/10 border border-[#00C97B]/20 mb-10">
<div className="bg-[#00C97B] rounded-sm p-[1px] flex items-center justify-center">
<i className="w-3 h-3 text-[#0B1115]" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="font-medium text-base text-[#00C97B]">Pilot project</span>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#151C20] border border-white/5">
<i className="w-4 h-4 text-[#2CE5AC]" data-lucide="circle-check" strokeWidth="1.5"></i>
<span className="text-base text-slate-200 font-medium">10–15 targeted leads</span>
</div>
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#151C20] border border-white/5">
<i className="w-4 h-4 text-[#2CE5AC]" data-lucide="circle-check" strokeWidth="1.5"></i>
<span className="text-base text-slate-200 font-medium">UI/UX quick wins</span>
</div>
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#151C20] border border-white/5">
<i className="w-4 h-4 text-[#2CE5AC]" data-lucide="circle-check" strokeWidth="1.5"></i>
<span className="text-base text-slate-200 font-medium">No long-term commitment</span>
</div>
</div>

<div className="flex items-center gap-3 text-slate-400 text-lg mb-14">
<span className="text-xl leading-none">👉</span>
<span>If it works, we scale.</span>
</div>

<div className="w-full max-w-2xl h-px bg-white/5 mb-12"></div>

<div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">

<button className="group flex items-center justify-center gap-2.5 bg-[#2CE5AC] text-[#0B1115] px-7 py-3.5 rounded-xl font-semibold text-lg hover:bg-[#2CE5AC]/90 transition-all w-full md:w-auto">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
                    Start a Conversation
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>

<div className="flex flex-col items-center md:items-end text-center md:text-right">
<p className="text-slate-400 text-base mb-2">Open to a short conversation to explore this?</p>
<p className="text-white text-xl font-medium mb-0.5">Mohammad Tanveer</p>
<p className="text-[#00C97B] text-base font-medium">CEO — Spark Globally</p>
</div>
</div>
</div>
</main>

<footer className="absolute bottom-6 w-full px-6 flex justify-center md:justify-between items-center z-20">
<div className="hidden md:block w-32"></div> 
<div className="flex gap-2.5 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-8 h-1.5 rounded-full bg-[#00C97B]"></div>
</div>
<div className="text-xs text-slate-600 hidden md:block w-32 text-right">
            Use ← → arrows to navigate
        </div>
</footer>


    </>
  );
}
