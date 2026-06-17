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
      
<div className="flex flex-col space-y-6">

<div className="bg-blue-500 rounded-3xl p-6 md:p-10">
<div className="mb-8">
<h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Craft Excellence.<br/>
                    Design Impact. Pure Innovation.
                </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex flex-col space-y-4">
<div className="w-12 h-12 flex items-center justify-center">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-black text-lg font-medium">Studio Craft is built for brands that don't settle for ordinary.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex flex-col space-y-4">
<div className="w-12 h-12 flex items-center justify-center">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-black text-lg font-medium">Strategy, creativity, and execution in one seamless experience.</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-100 rounded-3xl p-6 md:p-10">
<div className="mb-6">
<h2 className="text-2xl md:text-3xl font-bold text-black">Our Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex flex-col space-y-4">
<div className="w-12 h-12 flex items-center justify-center">
<svg className="w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-gray-600 font-medium">Brand Design</p>
<p className="text-3xl font-bold text-black">Identity &amp; Strategy</p>
</div>
<button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-2">
                            View Portfolio
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm">
<div className="flex flex-col space-y-4">
<div className="w-12 h-12 flex items-center justify-center">
<svg className="w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="space-y-1">
<p className="text-gray-600 font-medium">Digital Experience</p>
<p className="text-3xl font-bold text-black">Web &amp; Mobile</p>
</div>
<button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-2">
                            View Portfolio
                        </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
