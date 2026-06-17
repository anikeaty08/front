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
      

<div className="relative w-full min-h-screen flex flex-col lg:flex-row">

<div className="relative w-full lg:w-[45%] flex flex-col justify-between bg-white z-10">

<div className="absolute inset-y-0 left-0 hidden lg:flex items-center justify-center pointer-events-none overflow-hidden w-full z-0 opacity-[0.03]">
<h1 className="text-[12rem] font-bold leading-none tracking-tighter text-zinc-900 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                    EMMA FIT
                </h1>
</div>

<div className="relative z-20 flex items-center justify-between p-6 lg:p-8 border-b border-zinc-100/50 lg:border-none">
<div className="flex items-center gap-2">
<div className="bg-lime-400 p-1.5 rounded-sm rotate-3">
<i className="w-5 h-5 text-zinc-900 stroke-[1.5]" data-lucide="dumbbell"></i>
</div>
<span className="text-xl font-bold tracking-tight uppercase">Emma</span>
</div>
<button className="flex items-center gap-2 text-sm font-medium hover:text-lime-600 transition-colors">
<i className="w-5 h-5 stroke-[1.5] text-lime-500" data-lucide="menu"></i>
                    MENU
                </button>
</div>

<div className="relative z-20 flex-1 flex flex-col justify-center px-6 lg:px-16 py-12">

<div className="flex items-center gap-3 mb-6">
<span className="bg-zinc-900 text-white text-xs font-semibold px-2 py-1 rounded-sm uppercase tracking-wide">New</span>
<span className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">Start your transformation today</span>
</div>

<h1 className="text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-zinc-900 mb-6">
                    Transform <br/>
                    Your Body &amp; <br/>
                    Lifestyle<span className="text-lime-400">.</span>
</h1>

<p className="text-lg text-zinc-500 mb-10 max-w-md leading-relaxed">
                    NASM CPT, CES, CNC. Your ultimate fitness &amp; nutrition guide. Become the best version of yourself with a lifestyle transformation wizard.
                </p>

<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-lime-400 hover:bg-lime-500 text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all shadow-lg shadow-lime-400/20 rounded-sm" href="https://forms.gle/YzjGfDagazCpEHQK6">
                        Apply for Coaching
                    </a>
<button className="inline-flex items-center justify-center bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all rounded-sm gap-2 group">
<div className="rounded-full border border-zinc-900 p-0.5 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-3 h-3 fill-current" data-lucide="play"></i>
</div>
                        Training Demo
                    </button>
</div>
</div>

<div className="relative z-20 hidden lg:flex items-center gap-8 px-6 lg:px-16 py-6 border-t border-zinc-100 text-xs font-medium text-zinc-500 uppercase tracking-wide overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="text-lime-500">•</span>
<span>Over 500+ Lives Changed</span>
</div>
<div className="flex items-center gap-2">
<span className="text-lime-500">•</span>
<span>Custom Nutrition Plans</span>
</div>
<div className="flex items-center gap-2">
<span className="text-lime-500">•</span>
<span>1-on-1 Online Coaching</span>
</div>
</div>
</div>

<div className="relative w-full lg:w-[55%] h-[50vh] lg:h-auto bg-zinc-100 overflow-hidden group">

<img alt="Emma Fitness Coach" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/461348a7-59fc-4044-9b34-888f7594a7af_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-60"></div>

<div className="absolute top-6 right-6 lg:top-8 lg:right-8">
<button className="bg-lime-400 hover:bg-lime-500 text-zinc-900 text-xs font-bold px-5 py-3 uppercase tracking-wider rounded-sm shadow-xl transition-colors">
                    Join Us Now
                </button>
</div>

<div className="absolute bottom-0 right-0 flex">

<div className="bg-lime-400 w-24 h-24 lg:w-32 lg:h-32 flex flex-col items-center justify-center text-zinc-900 cursor-pointer hover:bg-lime-500 transition-colors">
<span className="text-xs font-bold uppercase tracking-widest mb-1">Prev</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-left"></i>
</div>

<div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-zinc-800 overflow-hidden cursor-pointer group/next">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/next:opacity-70 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a99e5cd-4397-4c6a-9d51-654e3882e3bb_320w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
<span className="text-xs font-bold uppercase tracking-widest mb-1">Next</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="lg:hidden bg-zinc-50 py-4 px-6 border-t border-zinc-100 overflow-hidden">
<div className="flex items-center gap-6 text-xs font-medium text-zinc-500 uppercase tracking-wide whitespace-nowrap animate-marquee">
<span>Over 500+ Lives Changed</span>
<span className="text-lime-500">•</span>
<span>Custom Nutrition</span>
<span className="text-lime-500">•</span>
<span>Lifestyle Wizard</span>
</div>
</div>
</div>


    </>
  );
}
