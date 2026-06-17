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
          colors: {
            linear: {
              bg: '#101014',
              card: '#1a1a1f',
              accent: '#5e6ad2',
              text: '#e2e2e2',
              subdued: '#8a8f98'
            }
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
      
<div className="max-w-md w-full">

<div className="bg-linear-card rounded-xl overflow-hidden border border-white/5 shadow-xl">

<div className="p-5 flex justify-between items-center border-b border-white/5">
<div>
<h3 className="font-medium text-sm">Flight Details</h3>
<p className="text-linear-subdued text-xs">Confirmation #A12BCD</p>
</div>
<div className="bg-linear-accent/10 text-linear-accent px-3 py-1 rounded-full text-xs font-medium">
          Confirmed
        </div>
</div>

<div className="p-5 flex items-center justify-between">
<div className="text-center">
<p className="text-2xl font-semibold">SFO</p>
<p className="text-linear-subdued text-xs mt-1">San Francisco</p>
</div>
<div className="flex-1 flex flex-col items-center px-4">
<div className="w-full flex items-center">
<div className="h-[1px] flex-1 bg-white/10"></div>
<svg className="h-4 w-4 text-linear-subdued mx-2 rotate-90" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<p className="text-linear-subdued text-xs mt-1">4h 35m</p>
</div>
<div className="text-center">
<p className="text-2xl font-semibold">NYC</p>
<p className="text-linear-subdued text-xs mt-1">New York</p>
</div>
</div>

<div className="p-5 grid grid-cols-3 gap-4 border-t border-white/5">
<div>
<p className="text-linear-subdued text-xs">Date</p>
<p className="font-medium mt-1">Nov 24, 2023</p>
</div>
<div>
<p className="text-linear-subdued text-xs">Departure</p>
<p className="font-medium mt-1">07:45 AM</p>
</div>
<div>
<p className="text-linear-subdued text-xs">Arrival</p>
<p className="font-medium mt-1">04:20 PM</p>
</div>
</div>

<div className="p-5 flex justify-between items-center border-t border-white/5">
<div>
<p className="text-linear-subdued text-xs">Passenger</p>
<p className="font-medium mt-1">Alex Morgan</p>
</div>
<div>
<p className="text-linear-subdued text-xs">Seat</p>
<p className="font-medium mt-1 text-center">14A</p>
</div>
<div>
<p className="text-linear-subdued text-xs">Class</p>
<p className="font-medium mt-1">Business</p>
</div>
</div>

<div className="p-5 flex justify-between items-center border-t border-white/5 bg-linear-bg/40">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-linear-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="text-xs text-linear-subdued">Check-in opens</p>
<p className="text-sm font-medium">24h before departure</p>
</div>
</div>
<button className="bg-linear-accent hover:bg-linear-accent/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Manage
        </button>
</div>
</div>
</div>

    </>
  );
}
