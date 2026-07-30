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
      

<nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
<div className="flex items-center justify-between">
<div className="">
<span className="text-lg sm:text-xl tracking-tight text-white">Simplifi Football</span>
</div>
<div className="hidden md:flex space-x-6 sm:space-x-10 text-xs sm:text-sm text-slate-300">
<a className="hover:text-green-400 transition-colors" href="#">Guide</a>
<a className="hover:text-green-400 transition-colors" href="#">How it Works</a>
<a className="hover:text-green-400 transition-colors" href="#">About</a>
<a className="hover:text-green-400 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="text-xs sm:text-sm border border-zinc-800 rounded-md px-3 sm:px-4 py-2 bg-neutral-900 hover:bg-neutral-900 transition-all text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-[inset_0_1px_6px_rgba(0,0,0,0.32)]">
          Download Guide
        </button>
</div>
</div>
</nav>
<div className="h-px bg-zinc-900"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#1f5410]/40 via-[#004e2b]/40 to-black z-0"></div>

<div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-10 sm:mb-12 md:mb-0 md:pr-8">
<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-5 sm:mb-6 leading-tight text-white">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-slate-300">Season 2025/2026 Essentials</span><br />
            for Football Investment
          </h1>
<p className="xs:text-lg sm:text-xl md:text-2xl sm:mb-8 max-w-lg text-base text-slate-300 tracking-wide font-extralight mb-7">
<span className="font-semibold text-white">Are you in it to lose money or retain you capital?</span><br />
            Discover how Simplifi is transforming football analytics by focusing on market movements, risk management, and responsible inestment behaviors. Download your step by step guide to disciplined, data-driven football investing.
          </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none">
<a className="bg-green-500 text-black font-light rounded-md px-4 sm:px-6 py-3 text-center hover:bg-green-400 transition-all border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-[inset_0_1px_6px_rgba(0,0,0,0.32)]" href="#">
              Download the Guide (.pdf)
            </a>
<button className="bg-[#111111] border border-zinc-800 text-slate-300 rounded-md px-4 sm:px-6 py-3 hover:bg-neutral-900 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-[inset_0_1px_6px_rgba(0,0,0,0.32)]">
              Learn More
            </button>
</div>
</div>

<div className="md:w-1/2 relative flex justify-center items-center">
<div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-[#1f5410]/20 to-[#004e2b]/20 rounded-full blur-3xl z-0"></div>
<img alt="Simplifi Football Guide Cover" className="relative z-10 w-full h-auto rounded-xl shadow-lg border border-zinc-800" src="https://i.postimg.cc/4yw5Ft95/SIMPLIFI-AD-POSTS-1.jpg" style={{display: `block`}} />
</div>
</div>
</div>
<div className="h-px bg-zinc-900 my-12 sm:my-16"></div>

<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
<div className="bg-[#111111] rounded-md border border-zinc-800 p-5 sm:p-6 shadow-[inset_0_1px_6px_rgba(0,0,0,0.32)]">
<p className="text-base sm:text-lg font-light mb-2 tracking-tight text-white">Market-Driven Analytics</p>
<p className="text-slate-300 font-extralight text-sm sm:text-base">Move beyond player stats. Learn to interpret football market trends for smarter, more disciplined investments.</p>
</div>
<div className="bg-[#111111] rounded-md border border-zinc-800 p-5 sm:p-6 shadow-[inset_0_1px_6px_rgba(0,0,0,0.32)]">
<p className="text-base sm:text-lg font-light mb-2 tracking-tight text-white">Risk Management & Capital Retention</p>
<p className="text-slate-300 font-extralight text-sm sm:text-base">Discover principles for budgeting and protecting your capital, modeled after leading investment platforms.</p>
</div>
<div className="bg-[#111111] rounded-md border border-zinc-800 p-5 sm:p-6 shadow-[inset_0_1px_6px_rgba(0,0,0,0.32)]">
<p className="text-base sm:text-lg font-light mb-2 tracking-tight text-white">Transparent & Responsible</p>
<p className="text-slate-300 font-extralight text-sm sm:text-base">Embrace a user-friendly, transparent approach that encourages thoughtful, less frequent engagement with betting platforms.</p>
</div>
</div>
<div className="h-px bg-zinc-900 my-12 sm:my-16"></div>

<div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-16">
<div className="flex-shrink-0 mb-3 sm:mb-0">
<img alt="Damilola Akin-Britto" className="rounded-full w-16 sm:w-24 h-16 sm:h-24 border-4 border-green-500 shadow-lg" src="https://ui-avatars.com/api/?name=Damilola+Akin-Britto&background=1f5410&color=fff&size=128" />
</div>
<div>
<h2 className="text-xl sm:text-2xl font-light tracking-tight mb-2 text-white">Meet the Founder</h2>
<p className="text-slate-300 font-extralight text-sm sm:text-base mb-2">Damilola Akin-Britto, data analyst and founder of Simplifi, is dedicated to making football investment as accessible and disciplined as the stock market. His vision: empower every football investor with tools to make informed, responsible decisions.</p>
</div>
</div>
</div>
</div>

    </>
  );
}
