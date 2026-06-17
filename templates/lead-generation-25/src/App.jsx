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
      

<header className="w-full flex justify-between items-center px-6 md:px-10 py-8 absolute top-0 z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#2dd4bf] flex items-center justify-center text-[#0b0f15]">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="font-medium text-lg text-slate-100">Spark Globally</span>
</div>
<div className="text-sm font-medium text-slate-500 tracking-wide">4 / 6</div>
</header>

<button className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-8 w-12 h-12 rounded-full bg-[#131821] border border-slate-800/60 items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all z-10">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="hidden lg:flex fixed top-1/2 -translate-y-1/2 right-8 w-12 h-12 rounded-full bg-[#131821] border border-slate-800/60 items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all z-10">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>

<main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 w-full max-w-7xl mx-auto pt-32 pb-24">

<div className="text-center mb-16 md:mb-20">
<h2 className="text-[#f97316] font-medium tracking-widest text-sm mb-5 uppercase">Slide 3</h2>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                How It <span className="text-[#f97316]">Works</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400">Simple. Scalable. Effective.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">

<div className="relative bg-[#131821] border border-slate-800/80 rounded-[2rem] p-8 md:p-10 pt-12 md:pt-14 mt-4 transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -top-4 left-8 bg-[#f97316] text-[#0b0f15] px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-orange-500/20">
                    Step 01
                </div>
<div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#f97316] mb-8 ring-1 ring-orange-500/20">
<i className="w-7 h-7" data-lucide="search"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-100 mb-6">UI/UX Optimization</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
<i className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" data-lucide="arrow-right"></i>
<span>Quick audit of website / landing page</span>
</li>
<li className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
<i className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" data-lucide="arrow-right"></i>
<span>Conversion-focused improvements</span>
</li>
</ul>
</div>

<div className="relative bg-[#131821] border border-slate-800/80 rounded-[2rem] p-8 md:p-10 pt-12 md:pt-14 mt-4 transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -top-4 left-8 bg-[#f97316] text-[#0b0f15] px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-orange-500/20">
                    Step 02
                </div>
<div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#f97316] mb-8 ring-1 ring-orange-500/20">
<i className="w-7 h-7" data-lucide="database"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-100 mb-6">Lead Research</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
<i className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" data-lucide="arrow-right"></i>
<span>Industry + location-based leads</span>
</li>
<li className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
<i className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" data-lucide="arrow-right"></i>
<span>Clean, verified data (email / LinkedIn)</span>
</li>
</ul>
</div>

<div className="relative bg-[#131821] border border-slate-800/80 rounded-[2rem] p-8 md:p-10 pt-12 md:pt-14 mt-4 transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -top-4 left-8 bg-[#f97316] text-[#0b0f15] px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-orange-500/20">
                    Step 03
                </div>
<div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#f97316] mb-8 ring-1 ring-orange-500/20">
<i className="w-7 h-7" data-lucide="send"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-100 mb-6">Outreach System</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
<i className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" data-lucide="arrow-right"></i>
<span>Personalized messaging</span>
</li>
<li className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
<i className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" data-lucide="arrow-right"></i>
<span>Follow-ups to increase reply rate</span>
</li>
</ul>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full p-8 flex justify-center items-center pointer-events-none">

<div className="flex gap-2.5 items-center pointer-events-auto">
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-6 h-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_10px_rgba(45,212,191,0.4)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
</div>

<div className="hidden md:block absolute right-10 text-sm font-medium text-slate-600">
            Use ← → arrows to navigate
        </div>
</div>


    </>
  );
}
