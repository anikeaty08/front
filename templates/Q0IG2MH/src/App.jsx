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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Manrope', 'sans-serif'],
            body: ['Inter', 'sans-serif']
          },
          letterSpacing: {
            tightest: '-0.045em'
          }
        }
      }
    }
  
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
      
<div className="w-full h-screen flex items-center justify-center bg-gray-100">
<div className="bg-gray-100/90 rounded-3xl w-full max-w-6xl px-10 py-14 md:px-20 md:py-20 flex flex-col items-center">

<h1 className="font-heading text-[64px] md:text-[80px] font-light tracking-tightest text-gray-900 text-center leading-none mb-5">
        Effortless Features
      </h1>

<p className="font-body text-base md:text-lg text-gray-500 text-center max-w-2xl mb-12">
        Everything you need for modern data management, designed with clarity and focus. Simple, effective, and beautiful.
      </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

<div className="flex flex-col items-center bg-white/80 rounded-xl p-7 shadow-xl">
<div className="mb-5">

<svg className="w-12 h-12 text-indigo-500" fill="none" viewbox="0 0 48 48">
<circle cx="12" cy="12" fill="currentColor" opacity="0.18" r="5"></circle>
<circle cx="36" cy="12" fill="currentColor" opacity="0.18" r="5"></circle>
<circle cx="24" cy="36" fill="currentColor" opacity="0.18" r="5"></circle>
<circle cx="12" cy="12" fill="currentColor" r="3"></circle>
<circle cx="36" cy="12" fill="currentColor" r="3"></circle>
<circle cx="24" cy="36" fill="currentColor" r="3"></circle>
<line stroke="currentColor" strokeWidth="2" x1="14" x2="22" y1="14" y2="34"></line>
<line stroke="currentColor" strokeWidth="2" x1="34" x2="26" y1="14" y2="34"></line>
</svg>
</div>
<h3 className="font-heading text-2xl font-light tracking-tightest text-gray-900 mb-2 text-center">Visual Mapping</h3>
<p className="font-body text-[15px] text-gray-500 text-center">
            Build and update entity relationships with drag-and-drop simplicity.
          </p>
</div>

<div className="flex flex-col items-center bg-white/80 rounded-xl p-7 shadow-xl">
<div className="mb-5">

<svg className="w-12 h-12 text-purple-500" fill="none" viewbox="0 0 48 48">
<rect fill="currentColor" height="9" opacity="0.18" rx="4.5" width="16" x="6" y="24"></rect>
<rect fill="currentColor" height="9" opacity="0.18" rx="4.5" width="16" x="26" y="15"></rect>
<rect fill="currentColor" height="5" rx="2.5" width="16" x="6" y="24"></rect>
<rect fill="currentColor" height="5" rx="2.5" width="16" x="26" y="15"></rect>
<path d="M22 29l4-5" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-heading text-2xl font-light tracking-tightest text-gray-900 mb-2 text-center">Dependency Insights</h3>
<p className="font-body text-[15px] text-gray-500 text-center">
            Instantly see table dependencies and maintain data integrity with ease.
          </p>
</div>

<div className="flex flex-col items-center bg-white/80 rounded-xl p-7 shadow-xl">
<div className="mb-5">

<svg className="w-12 h-12 text-pink-500" fill="none" viewbox="0 0 48 48">
<circle cx="24" cy="24" fill="currentColor" opacity="0.18" r="10"></circle>
<circle cx="24" cy="24" fill="currentColor" r="6"></circle>
<path d="M24 9v3M24 36v3M9 24h3M36 24h3M16.22 16.22l-2.12-2.12M33.9 33.9l-2.12-2.12M16.22 31.78l-2.12 2.12M33.9 14.1l-2.12 2.12" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-heading text-2xl font-light tracking-tightest text-gray-900 mb-2 text-center">Schema Optimization</h3>
<p className="font-body text-[15px] text-gray-500 text-center">
            Actionable recommendations to keep your schema lean and performant.
          </p>
</div>
</div>

<div className="mt-12 flex justify-center">
<a className="inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-full text-white font-body font-medium text-[16px] shadow" href="#">
          Get Started
          <svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>

    </>
  );
}
