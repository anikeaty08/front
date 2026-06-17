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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08e480d7-4f62-4f15-9fd5-4643f68ebd03_3840w.png")'}}></div>

<div className="relative w-full h-screen overflow-hidden bg-slate-900">

<div className="absolute inset-0 w-full h-full">
<img alt="Clean and bright living room" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb00948d-53d1-47c9-9e85-6b7face48223_3840w.jpg" style={{}}/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-sky-900/20 to-slate-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<nav className="absolute top-0 w-full z-50 border-b border-white/10 backdrop-blur-sm">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-semibold text-white tracking-tight"></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Residential</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Commercial</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="hover:bg-slate-100 transition-all text-sm font-medium text-slate-900 bg-white rounded-full pt-2 pr-4 pb-2 pl-4">
                        Get a Quote
                    </button>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="flex flex-col text-center h-full max-w-5xl z-20 mr-auto ml-auto pt-16 pr-6 pl-6 relative items-center justify-center">

<div className="inline-flex gap-2 animate-fade-in-up bg-white/10 border-white/20 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
<span className="text-sm font-medium text-white tracking-wide" style={{}}>Available in All of the Bay Area</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6 drop-shadow-sm">
                The Perfect Clean  You Deserve.
            </h1>

<p className="text-lg md:text-xl text-sky-50/90 max-w-2xl mb-10 leading-relaxed font-normal">
                Premium residential and commercial cleaning services with impeccable attention to detail. Transform your space today.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="group relative w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2">
                    Book Now
                    <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</main>

<div className="absolute bottom-0 w-full z-20 bg-gradient-to-t from-black/80 to-transparent pb-6 pt-12">
</div>
</div>



    </>
  );
}
