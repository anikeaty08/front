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
      
<div className="mb-8 text-center">
<h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Developer Documentation</h1>
<p className="text-gray-300 max-w-xl mx-auto">All the resources you need to build, integrate, and troubleshoot.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-4">

<div className="rounded-xl bg-gradient-to-tr from-[#1e293b]/80 via-[#181925]/90 to-[#00b7e9]/30 shadow-lg p-8 flex flex-col items-start transition hover:scale-105 duration-200 ring-1 ring-[#00b7e9]/10 hover:ring-[#00b7e9]/40">
<div className="mb-4 bg-[#00b7e9]/20 rounded-full p-3">

<svg className="w-7 h-7 text-[#00b7e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 7H20v13M4 4.5v15A2.5 2.5 0 0 0 6.5 22H20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Getting Started</h3>
<p className="text-gray-300 opacity-90 mb-2">Set up in minutes. Learn the basics and start building quickly.</p>
<a className="text-xs text-[#00b7e9] font-medium mt-auto hover:underline" href="#">Read Guide →</a>
</div>

<div className="rounded-xl bg-gradient-to-tr from-[#00b7e9]/10 via-[#181925]/90 to-[#1e293b]/40 shadow-lg p-8 flex flex-col items-start transition hover:scale-105 duration-200 ring-1 ring-[#00b7e9]/10 hover:ring-[#00b7e9]/40">
<div className="mb-4 bg-[#1fcdfc]/20 rounded-full p-3">

<svg className="w-7 h-7 text-[#1fcdfc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1">API Reference</h3>
<p className="text-gray-300 opacity-90 mb-2">Comprehensive details for every endpoint, request, and response.</p>
<a className="text-xs text-[#1fcdfc] font-medium mt-auto hover:underline" href="#">Browse API →</a>
</div>

<div className="rounded-xl bg-gradient-to-tr from-[#1fcdfc]/10 via-[#181925]/90 to-[#00b7e9]/20 shadow-lg p-8 flex flex-col items-start transition hover:scale-105 duration-200 ring-1 ring-[#00b7e9]/10 hover:ring-[#00b7e9]/40">
<div className="mb-4 bg-[#015c6e]/20 rounded-full p-3">

<svg className="w-7 h-7 text-[#015c6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<rect height="18" rx="2" strokeWidth="2" width="14" x="5" y="3"></rect>
<line strokeWidth="2" x1="9" x2="15" y1="7" y2="7"></line>
<line strokeWidth="2" x1="9" x2="15" y1="11" y2="11"></line>
<line strokeWidth="2" x1="9" x2="13" y1="15" y2="15"></line>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Guides & Tutorials</h3>
<p className="text-gray-300 opacity-90 mb-2">Step-by-step instructions for common use cases and workflows.</p>
<a className="text-xs text-[#015c6e] font-medium mt-auto hover:underline" href="#">Explore Guides →</a>
</div>

<div className="rounded-xl bg-gradient-to-tr from-[#1fcdfc]/20 via-[#181925]/90 to-[#00b7e9]/40 shadow-lg p-8 flex flex-col items-start transition hover:scale-105 duration-200 ring-1 ring-[#00b7e9]/10 hover:ring-[#00b7e9]/40">
<div className="mb-4 bg-[#1fcdfc]/20 rounded-full p-3">

<svg className="w-7 h-7 text-[#1fcdfc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 10a4 4 0 1 1 8 0c0 2-2 3-2 3m-2 4h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1">FAQ & Support</h3>
<p className="text-gray-300 opacity-90 mb-2">Find answers to common questions or reach out for help.</p>
<a className="text-xs text-[#1fcdfc] font-medium mt-auto hover:underline" href="#">View FAQ →</a>
</div>
</div>

    </>
  );
}
