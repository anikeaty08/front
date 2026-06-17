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
      

<div className="relative w-full max-w-sm bg-neutral-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 overflow-hidden animate-card-entry flex flex-col items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

<div className="relative flex items-center justify-center mb-6">

<div className="absolute w-16 h-16 rounded-full bg-emerald-500/20 pulse-circle"></div>

<div className="relative w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">

<svg fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="check-path" d="M5 13L9 17L19 7" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>

<div className="text-center space-y-1 mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-white">Sent</h1>
<p className="text-xs text-neutral-400 font-medium tracking-wide uppercase opacity-80">Payment Completed</p>
</div>

<div className="mb-8 text-center relative">
<span className="text-5xl font-semibold tracking-tighter text-shimmer">$685.00</span>
</div>

<div className="w-full space-y-4 mb-8">

<div className="flex items-center justify-between pb-3 border-b border-white/5">
<span className="text-xs text-neutral-500 font-medium">Recipient</span>
<span className="text-sm text-neutral-200 font-medium tracking-tight">Nmex Clearance Unit</span>
</div>

<div className="flex items-center justify-between pb-3 border-b border-white/5">
<span className="text-xs text-neutral-500 font-medium">From</span>
<div className="flex items-center gap-2">

<div className="w-4 h-4 rounded-full bg-neutral-700 flex items-center justify-center text-[8px] text-white font-bold">M</div>
<span className="text-sm text-neutral-200 font-medium tracking-tight">Marcus</span>
</div>
</div>

<div className="flex items-center justify-between pb-3 border-b border-white/5">
<span className="text-xs text-neutral-500 font-medium">Method</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:card-linear"></iconify-icon>
<span className="text-sm text-neutral-200 font-medium tracking-tight">Apple Transfer</span>
</div>
</div>

<div className="flex items-center justify-between pb-3 border-b border-white/5">
<span className="text-xs text-neutral-500 font-medium">Reference ID</span>
<span className="text-sm text-neutral-400 font-normal tracking-tight font-mono">APY8X3K9L2M7QC</span>
</div>

<div className="flex items-center justify-between pb-3 border-b border-white/5">
<span className="text-xs text-neutral-500 font-medium">Trans. ID</span>
<span className="text-sm text-neutral-400 font-normal tracking-tight font-mono">TXN5F92K8L1ZQ4</span>
</div>

<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500 font-medium">Date</span>
<span className="text-sm text-neutral-300 font-medium tracking-tight">Feb 19, 2026</span>
</div>
</div>

<div className="w-full flex flex-col gap-3">
<button className="w-full bg-white text-black py-3.5 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-colors duration-300 active:scale-[0.98]">
                Done
            </button>
<button className="w-full text-neutral-400 py-2 rounded-full font-medium text-xs hover:text-white transition-colors duration-300 flex items-center justify-center gap-1 group">
                View Details
                <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

    </>
  );
}
