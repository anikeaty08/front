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
      

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#2DD4BF] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

<header className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-20">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-[10px] bg-[#2DD4BF] flex items-center justify-center text-[#09100e]">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-white">Spark Globally</span>
</div>
<div className="text-sm text-gray-500 font-medium">
            1 / 6
        </div>
</header>

<button className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#131b19] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a2421] transition-colors z-20 hidden md:flex">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#131b19] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a2421] transition-colors z-20 hidden md:flex">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-12 z-10 w-full max-w-5xl mx-auto pt-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#131b19]/80 backdrop-blur-sm mb-10">
<i className="w-3.5 h-3.5 text-[#2DD4BF]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-gray-400">UI/UX Design • Lead Generation • Outreach</span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-semibold tracking-tight text-white mb-3">
            Helping Businesses<br/>
<span className="text-[#2DD4BF]">Get More Clients</span>
</h1>
<p className="mt-6 text-xl sm:text-2xl text-gray-400/90 font-medium">
            Without the extra work
        </p>
<div className="mt-16 text-lg text-gray-500 font-medium">
            Mohammad Tanveer — CEO, <span className="text-[#2DD4BF]">Spark Globally</span>
</div>
</main>

<footer className="absolute bottom-8 w-full px-8 flex flex-col sm:flex-row justify-between items-center z-20 gap-6 sm:gap-0">

<div className="hidden sm:block w-[180px]"></div>

<div className="flex items-center gap-3">
<div className="w-8 h-1.5 rounded-full bg-[#2DD4BF]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
</div>

<div className="text-xs text-gray-600 font-medium text-right sm:w-[180px]">
            Use ← → arrows to navigate
        </div>
</footer>


    </>
  );
}
