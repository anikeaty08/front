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
      

<main className="w-full max-w-5xl mx-auto">

<div className="text-center mb-16 md:mb-20">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                Current Opportunities
            </h1>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
                Explore open roles offering growth, impact, and opportunities to contribute skills within a collaborative, forward thinking environment.
            </p>
</div>

<div className="relative w-full">

<div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-[2rem] blur opacity-40"></div>
<div className="relative bg-white rounded-[1.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 md:gap-12">

<div className="flex-1 text-center md:text-left space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-2">
<i className="w-4 h-4 text-slate-500" data-lucide="sparkles"></i>
<span>Hiring Now</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                            Join our team
                        </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                            We use ADP to manage our applications. Visit our recruitment portal to view all open positions, including Aircraft Technicians, Managers, and Schedulers.
                        </p>
</div>

<div className="flex-shrink-0">
<a className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium px-8 py-5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ring-offset-2 focus:ring-2 focus:ring-slate-900" href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=2da3850d-62c9-4de2-af31-2c8943b68b0d" rel="noopener noreferrer" target="_blank">
<span>View Open Positions</span>
<i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="h-1.5 w-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100"></div>
</div>

<p className="text-center text-slate-400 mt-8 text-sm font-medium">
                Powered by ADP Workforce Now®
            </p>
</div>
</main>


    </>
  );
}
