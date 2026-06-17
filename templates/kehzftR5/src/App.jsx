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
      
<div className="w-[430px] max-w-full bg-[#111624] rounded-3xl shadow-2xl px-7 py-8 relative font-inter">

<button className="absolute top-5 right-7 w-10 h-10 rounded-full bg-[#181f32]/90 border border-white/10 flex items-center justify-center hover:scale-105 transition">
<svg fill="none" height="18" viewbox="0 0 16 16" width="18"><path d="M4 4l8 8M12 4l-8 8" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>

<div className="mt-7">
<div className="text-white text-opacity-60 text-lg">Let’s get started</div>
<div className="text-white text-2xl font-bold mt-1 mb-3">How your free trial works</div>

<div className="flex items-center rounded-2xl py-2.5 px-4 w-fit mb-7">
<svg className="mr-1" fill="none" height="16" width="16"><path d="M8 2.5l1.76 3.5 3.89.57-2.81 2.74.67 3.88L8 10.88l-3.48 1.84.67-3.88-2.81-2.74 3.89-.57L8 2.5z" stroke="#fff" strokeWidth="1"></path></svg>
<span className="text-white text-opacity-70 text-sm mr-3">4.9</span>
<span className="inline-block w-0.5 h-4 mx-2 bg-white opacity-10"></span>
<span className="text-white text-opacity-70 text-sm">1,648 reviews</span>
</div>

<div className="bg-[#191d2b] border border-white/10 rounded-3xl px-5 py-7 mb-10">
<div className="flex items-start space-x-4 mb-7">
<div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#22283c] border border-white/10">

<svg fill="none" height="22" viewbox="0 0 22 22" width="22">
<rect fill="none" height="8" rx="2.5" stroke="#fff" strokeWidth="1.6" width="11" x="5.5" y="10"></rect>
<path d="M7 10V7A4 4 0 0 1 15 7v3" stroke="#fff" strokeLinecap="round" strokeWidth="1.6"></path>
<circle cx="11" cy="14.5" fill="#fff" r="1.3"></circle>
<path d="M11 15.8v1.2" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
</svg>
</div>
<div>
<div className="text-white text-base font-medium mb-0.5">Today</div>
<div className="text-white text-opacity-60 text-[15px]">Dive into your personalized health dashboard and set your goals.</div>
</div>
</div>
<div className="flex items-start space-x-4 mb-7">
<div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#22283c] border border-white/10">
<svg fill="none" height="18" width="18"><path d="M9 15a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2zm5-3V8a5 5 0 0 0-10 0v4l-1 1v1h12v-1l-1-1z" stroke="#fff" strokeWidth="1.5"></path></svg>
</div>
<div>
<div className="text-white text-base font-medium mb-0.5">Day 5</div>
<div className="text-white text-opacity-60 text-[15px]">We'll send a friendly reminder that your trial is wrapping up.</div>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#22283c] border border-white/10">
<svg fill="none" height="16" width="16"><path d="M8 2.5l1.76 3.5 3.89.57-2.81 2.74.67 3.88L8 10.88l-3.48 1.84.67-3.88-2.81-2.74 3.89-.57L8 2.5z" stroke="#fff" strokeWidth="1"></path></svg>
</div>
<div>
<div className="text-white text-base font-medium mb-0.5">Day 7</div>
<div className="text-white text-opacity-60 text-[15px]">Decide to continue with a subscription, or cancel hassle-free.</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="text-white text-base font-semibold mb-4">Select a plan that works for you</div>
<div className="flex gap-4">

<div className="flex-1 rounded-xl bg-[#22283c] border border-white/10 px-4 py-6 flex flex-col items-start relative">
<div className="mb-2">
<span className="text-white text-[17px] font-semibold">$90 / year</span>
<div className="text-white text-opacity-60 text-sm">$7.50 per month, billed yearly</div>
</div>
<span className="absolute top-3 right-3 px-2 py-0.5 bg-blue-600 rounded text-xs text-white font-medium">SAVE 40%</span>
</div>

<div className="flex-1 rounded-xl bg-[#22283c] border border-white/10 px-4 py-6 flex flex-col items-start">
<div className="mb-1">
<span className="text-white text-[17px] font-semibold">$13.50 / month</span>
<div className="text-white text-opacity-60 text-sm">$162 per year, billed monthly</div>
</div>
</div>
</div>
</div>

<div>
<button className="w-full h-12 rounded-2xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-base flex items-center justify-center transition mb-3">
            Start 7-day trial
            <svg className="ml-2" fill="none" height="16" viewbox="0 0 16 16" width="16">
<path d="M6 4l4 4-4 4" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="text-center text-white text-opacity-70 text-xs">
            You won’t be charged until Mar 15. Cancel anytime up to 24hrs before your trial ends.
          </div>
</div>
</div>
</div>

    </>
  );
}
