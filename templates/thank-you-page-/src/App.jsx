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
      

<header className="fixed top-0 w-full z-50">

<div className="bg-[#111] border-b border-white/5 h-10 px-6 flex items-center justify-between">

<button className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-white/5">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>

<div className="hidden md:flex items-center gap-8">
<a className="text-[10px] font-bold tracking-widest uppercase text-gray-300 hover:text-white transition-colors" href="#">Book a Class</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-gray-300 hover:text-white transition-colors" href="#">Own a Franchise</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-gray-300 hover:text-white transition-colors" href="#">Contact Us</a>
</div>
</div>

<nav className="flex bg-black h-20 border-white/10 border-b pr-6 pl-6 items-center justify-between">

<a className="flex flex-col items-center justify-center leading-none group" href="#">
<div className="font-heading font-bold italic text-3xl tracking-tighter text-white group-hover:text-cko-yellow transition-colors">CKO</div>
<span className="text-[0.55rem] font-heading font-bold uppercase text-cko-yellow tracking-[0.2em]">Kickboxing</span>
</a>

<div className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
<a className="font-heading font-bold text-sm tracking-widest uppercase text-white hover:text-cko-yellow transition-colors" href="#">Home</a>
<a className="font-heading font-bold text-sm tracking-widest uppercase text-white hover:text-cko-yellow transition-colors" href="#">About</a>
<a className="font-heading font-bold text-sm tracking-widest uppercase text-white hover:text-cko-yellow transition-colors" href="#">Kickboxing</a>
<a className="font-heading font-bold text-sm tracking-widest uppercase text-white hover:text-cko-yellow transition-colors" href="#">Schedule</a>
</div>

<div className="flex items-center gap-4">

<button className="md:hidden text-white hover:text-cko-yellow transition-colors">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
</header>

<main className="relative pt-40 pb-20 min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black"></div>

<div className="opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 w-full">

<div className="flex mb-8 justify-center">
<div className="w-16 h-16 rounded-full bg-cko-yellow/10 border border-cko-yellow/20 flex items-center justify-center animate-pulse">
<svg className="lucide lucide-check w-8 h-8 text-cko-yellow" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>

<div className="text-center mb-12">
<h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-tight leading-none mb-4">
                    You're Officially <span className="text-cko-yellow">In.</span>
</h1>
<p className="text-gray-400 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Your registration is complete. We've secured your bag. Prepare for the best hour of your day.
                </p>
</div>

<div className="bg-neutral-900/60 border border-white/5 backdrop-blur-sm rounded-none p-8 mb-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 mb-6 gap-4">
<div>
<div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Confirmation ID</div>
<div className="font-mono text-cko-yellow text-lg tracking-wider">#CKO-8829-X</div>
</div>
<div className="text-right">
<div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Date Sent</div>
<div className="text-white text-sm">Oct 24, 2023</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="relative">
<div className="flex items-center gap-3 mb-3">
<div className="bg-white/5 p-2 rounded-sm border border-white/5">
<svg className="lucide lucide-mail w-4 h-4 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h3 className="font-heading text-lg text-white uppercase tracking-tight">Check Email</h3>
</div>
<p className="text-xs text-gray-400 font-light leading-relaxed">
                            We sent a confirmation with location details and what to bring. Check your spam folder just in case.
                        </p>
</div>

<div className="relative">
<div className="flex items-center gap-3 mb-3">
<div className="bg-white/5 p-2 rounded-sm border border-white/5">
<svg className="lucide lucide-clock w-4 h-4 text-white" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-heading text-lg text-white uppercase tracking-tight">Arrive Early</h3>
</div>
<p className="text-xs text-gray-400 font-light leading-relaxed">
                            First timer? Arrive 15 minutes early. We'll help you wrap your hands and get comfortable.
                        </p>
</div>

<div className="relative">
<div className="flex gap-3 mb-3 gap-x-3 gap-y-3 items-center">
<div className="bg-white/5 p-2 rounded-sm border border-white/5">
<svg className="lucide lucide-smartphone w-4 h-4 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="font-heading text-lg text-white uppercase tracking-tight">Get The App</h3>
</div>
<p className="leading-relaxed text-xs font-light text-gray-400">
                            Manage bookings and track progress. Download the CKO App before you arrive.
                        </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto uppercase hover:bg-gray-200 transition-colors text-xs font-semibold text-black tracking-widest text-center bg-white w-full pt-3 pr-8 pb-3 pl-8" href="#">
                    Return Home
                </a>
<a className="sm:w-auto uppercase hover:bg-white/5 transition-colors group flex items-center justify-center gap-2 text-xs font-semibold text-white tracking-widest text-center w-full border-white/20 border pt-3 pr-8 pb-3 pl-8" href="#">
<svg className="lucide lucide-calendar w-4 h-4 text-cko-yellow" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Add to Calendar
                </a>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-gray-500 text-xs">
<span>© 2024 CKO Kickboxing</span>
<span className="w-1 h-1 bg-gray-700 rounded-full"></span>
<span>All rights reserved</span>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</footer>


    </>
  );
}
