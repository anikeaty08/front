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
      

<nav className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-2xl tracking-tight font-medium text-slate-900" href="#">afnan.</a>
</div>
<div className="hidden md:flex items-center gap-10 text-lg font-normal text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 text-slate-900 hover:border-orange-500 hover:text-orange-600 transition-all text-lg font-medium group" href="#">
            Started Now
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden p-2 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<main className="relative w-full max-w-screen-2xl mx-auto px-6 lg:px-12 mt-8 lg:mt-16 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

<div className="lg:col-span-4 flex flex-col justify-center pt-8 lg:pt-16 z-10">

<div className="flex items-center gap-4 mb-4">
<div className="w-8 h-[1px] bg-orange-400"></div>
<span className="text-orange-500 text-xl font-normal italic">Afnan Albalooshi</span>
</div>

<div className="flex flex-col leading-[0.9]">
<h1 className="font-serif-italic text-6xl lg:text-8xl text-orange-500 tracking-tight mb-2">
                        Clarity
                    </h1>
<h1 className="lg:text-8xl text-outline uppercase text-6xl font-medium tracking-tight mb-2">
                        Confidence
                    </h1>
<h1 className="text-6xl lg:text-8xl tracking-tight font-medium text-slate-900 uppercase">
                        Career
                    </h1>
</div>

<p className="mt-10 text-xl text-slate-500 font-normal max-w-md leading-relaxed">
                    Helping professionals find direction and growth through CIPD-certified coaching strategies.
                </p>

<div className="mt-10">
<button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-orange-500/20 group">
                        Book a Free Call
                        <div className="bg-white/20 rounded-full p-1">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 text-white group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</div>

<div className="lg:col-span-4 relative flex justify-center items-end h-[500px] lg:h-[700px] bg-slate-50 rounded-t-full rounded-b-lg overflow-hidden mt-8 lg:mt-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

<img alt="Afnan Albalooshi Career Coach" className="lg:scale-110 object-top w-full h-full object-cover z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61ca6181-97a8-4232-b55e-73812fcc9492_1600w.jpg"/>
</div>

<div className="lg:col-span-4 flex flex-col justify-between h-full py-4 lg:py-16 pl-0 lg:pl-12">

<div className="flex flex-col gap-6">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-slate-900 leading-tight">
                        Top Career  Coach –  2025
                    </h2>
<div className="flex gap-4 border-l border-slate-300 pl-4 mt-2">
<p className="text-lg text-slate-500 leading-relaxed">
                            Career Guidance • Interview Support • Resume Review
                        </p>
</div>
</div>

<div className="mt-12 lg:mt-auto flex flex-col gap-4">
<div className="flex items-center -space-x-3">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-orange-600 font-medium text-xs">
                            +2k
                        </div>
</div>
<div>
<h3 className="text-4xl tracking-tight font-medium text-slate-900">10k+</h3>
<p className="text-lg text-slate-500 mt-1">Loved By Professionals Globally</p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
