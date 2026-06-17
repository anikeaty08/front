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



    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.slide-in-up').forEach(el => {
        el.style.opacity = '1';
      });
    });
  
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
      

<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
<div className="orb orb1"></div>
<div className="orb orb2"></div>
<div className="orb orb3"></div>
<div className="orb orb4"></div>
<div className="orb orb5"></div>
<div className="absolute inset-0 bg-grid"></div>
</div>

<section className="relative z-10 py-24 px-4 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4" style={{fontFamily: '\'Inter\', sans-serif'}}>
      Powerful Features
    </h2>
<p className="text-lg md:text-xl text-white/80 max-w-2xl text-center mb-12">
      Discover how our platform can supercharge your workflow and help you achieve more with less effort.
    </p>

<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-6 w-full max-w-6xl auto-rows-fr">

<div className="bg-white/10 rounded-2xl shadow-xl pt-14 pb-10 px-10 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 row-span-2 col-span-2 slide-in-up delay-0">
<div className="mb-6">
<svg className="w-16 h-16 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-2 text-center">Real-Time Analytics</h3>
<p className="text-base text-white/80 text-center">Get instant insights and make data-driven decisions with live reporting and customizable dashboards.</p>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl pt-12 pb-7 px-7 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 slide-in-up delay-1">
<div className="mb-3">
<svg className="w-10 h-10 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M15.59 14.37a9 9 0 11-1.18-1.18l3.7 3.7a.84.84 0 001.19-1.19l-3.7-3.7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-1 text-center">Smart Search</h4>
<p className="text-sm text-white/80 text-center">Find what you need fast with AI-powered search.</p>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 slide-in-up delay-2">
<div className="mb-3">
<svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 4.75v14.5M19.25 12H4.75" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-1 text-center">Easy Integration</h4>
<p className="text-sm text-white/80 text-center">Seamlessly connect with your favorite tools.</p>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 slide-in-up delay-3">
<div className="mb-3">
<svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-1 text-center">Collaboration</h4>
<p className="text-sm text-white/80 text-center">Work together in real time with your team.</p>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 slide-in-up delay-4">
<div className="mb-3">
<svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-1 text-center">Security</h4>
<p className="text-sm text-white/80 text-center">Your data is safe with enterprise-grade security.</p>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl p-7 flex flex-col items-center justify-center backdrop-blur-md border border-white/10 slide-in-up delay-5">
<div className="mb-3">
<svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-white mb-1 text-center">Automation</h4>
<p className="text-sm text-white/80 text-center">Automate repetitive tasks and save time.</p>
</div>
</div>
</section>


    </>
  );
}
