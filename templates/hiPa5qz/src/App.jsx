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
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 12h18M3 6h18M3 18h12" strokeLinecap="round"></path>
<path d="M15 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="ml-3 text-lg font-medium tracking-tight">TaskFlow</span>
</div>
<div className="hidden md:flex space-x-8 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Templates</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div>
<button className="text-sm border border-gray-800 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
          Sign in
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-black z-0"></div>

<div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-16 md:mb-0 md:pr-12">
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-['Satoshi'] font-bold tracking-tight mb-6 leading-[1.1]">
            Simplify your workflow. Maximize your time.
          </h1>
<p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg font-normal leading-relaxed">
            Organize, prioritize, and complete your tasks with a powerful platform designed for high-performance teams.
          </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="bg-white text-black font-medium rounded-md px-5 py-2.5 text-sm hover:bg-gray-100 transition-all">
              Start for free
            </button>
<button className="bg-transparent border border-gray-800 rounded-md px-5 py-2.5 text-sm hover:bg-white/5 transition-all">
              See how it works
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in">

<div className="task-card relative flex h-32 w-[20rem] select-none flex-col justify-between rounded-xl border border-white/10 bg-[#101010] px-4 py-3 transition-all duration-500 [grid-area:stack] hover:-translate-y-8 hover:border-white/20">
<div className="flex items-center gap-2">
<span className="relative inline-block rounded-full bg-emerald-950 p-1">
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</span>
<p className="text-sm font-medium text-emerald-400">Completed</p>
</div>
<p className="text-base font-medium">Finalize Q3 marketing plan</p>
<p className="text-gray-500 text-sm">Yesterday, 5:30 PM</p>
</div>

<div className="task-card relative flex h-32 w-[20rem] select-none flex-col justify-between rounded-xl border border-white/10 bg-[#101010] px-4 py-3 transition-all duration-500 [grid-area:stack] translate-x-14 translate-y-8 hover:translate-y-0 hover:border-white/20">
<div className="flex items-center gap-2">
<span className="relative inline-block rounded-full bg-amber-950 p-1">
<svg className="text-amber-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
</svg>
</span>
<p className="text-sm font-medium text-amber-400">In Progress</p>
</div>
<p className="text-base font-medium">Client onboarding process</p>
<p className="text-gray-500 text-sm">Due today, 3:00 PM</p>
</div>

<div className="task-card relative flex h-32 w-[20rem] select-none flex-col justify-between rounded-xl border border-white/10 bg-[#101010] px-4 py-3 transition-all duration-500 [grid-area:stack] translate-x-28 translate-y-16 hover:translate-y-8 hover:border-white/20">
<div className="flex items-center gap-2">
<span className="relative inline-block rounded-full bg-blue-950 p-1">
<svg className="text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</span>
<p className="text-sm font-medium text-blue-400">Upcoming</p>
</div>
<p className="text-base font-medium">Product roadmap review</p>
<p className="text-gray-500 text-sm">Tomorrow, 9:00 AM</p>
</div>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-all">
<p className="text-3xl font-medium mb-1">85%</p>
<p className="text-gray-500 text-sm">Increased productivity</p>
</div>
<div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-all">
<p className="text-3xl font-medium mb-1">15k+</p>
<p className="text-gray-500 text-sm">Active teams</p>
</div>
<div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-all">
<p className="text-3xl font-medium mb-1">30%</p>
<p className="text-gray-500 text-sm">Less meetings</p>
</div>
<div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-all">
<p className="text-3xl font-medium mb-1">50M+</p>
<p className="text-gray-500 text-sm">Tasks completed</p>
</div>
</div>
</div>
</div>

    </>
  );
}
