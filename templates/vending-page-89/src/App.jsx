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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-500/10 blur-[120px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-white/40 blur-[80px]"></div>
</div>

<main className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl shadow-slate-200/50 rounded-[3rem] overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[600px] m-4">

<div className="w-full md:w-1/2 bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 flex flex-col relative border-r border-white/40">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="flex items-center gap-3 relative z-10">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
<span className="font-bold tracking-tighter text-xl">SW</span>
</div>
<div className="flex flex-col">
<span className="text-base font-bold tracking-tight text-slate-900 leading-none">Saylani Welfare</span>
<span className="text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">Trust Vending</span>
</div>
</div>

<div className="flex-1 flex items-center justify-center relative my-8">

<div className="absolute w-64 h-64 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute w-48 h-48 border border-dashed border-emerald-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="relative z-10 grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-2 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
<span className="iconify text-blue-500" data-icon="lucide:droplets" data-width="32"></span>
<span className="text-[10px] font-semibold text-slate-600">Hydration</span>
</div>
<div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-2 transform translate-y-4 rotate-3 hover:rotate-0 transition-transform duration-500">
<span className="iconify text-orange-500" data-icon="lucide:cookie" data-width="32"></span>
<span className="text-[10px] font-semibold text-slate-600">Snacks</span>
</div>
<div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-2 transform -translate-y-2 -rotate-3 hover:rotate-0 transition-transform duration-500">
<span className="iconify text-emerald-500" data-icon="lucide:apple" data-width="32"></span>
<span className="text-[10px] font-semibold text-slate-600">Fresh</span>
</div>
<div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-2 transform rotate-6 hover:rotate-0 transition-transform duration-500">
<span className="iconify text-purple-500" data-icon="lucide:cup-soda" data-width="32"></span>
<span className="text-[10px] font-semibold text-slate-600">Drinks</span>
</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-2 bg-white/80 border border-slate-200/60 backdrop-blur-sm px-4 py-2 rounded-full self-start">
<span className="iconify text-emerald-500" data-icon="lucide:heart-handshake" data-width="16"></span>
<span className="text-xs font-medium text-slate-600">Non-Profit Initiative</span>
</div>
</div>

<div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white/40">
<div className="mb-2">
<span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100 mb-4">
                    Now Active
                </span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-4">
                Smart Vending. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Social Impact.</span>
</h1>
<p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
                Experience the new automated Saylani Trust Shop. Quality refreshments at subsidized rates, accessible 24/7 at Zaitoon Ashraf IT Park.
            </p>

<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-800">Subsidized Prices</h3>
<p className="text-xs text-slate-500">Affordable rates for everyone.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<span className="iconify text-blue-600" data-icon="lucide:zap" data-width="12"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-800">Instant Access</h3>
<p className="text-xs text-slate-500">Quick and easy NFC &amp; Cash payments.</p>
</div>
</div>
</div>

<div className="mt-auto pt-6 border-t border-slate-200/60 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Scan to Download App</span>
<div className="flex gap-1">
<div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
<div className="w-6 h-6 bg-slate-900 rounded-sm opacity-50"></div>
<div className="w-6 h-6 bg-slate-900 rounded-sm opacity-25"></div>
</div>
</div>
<button className="group relative px-6 py-3 bg-slate-900 text-white rounded-xl font-medium text-sm tracking-wide shadow-xl shadow-slate-900/20 overflow-hidden hover:scale-105 transition-transform">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-2">
                        Touch to Start
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
</div>
</div>
</main>

<div className="fixed bottom-6 text-center w-full text-xs text-slate-400 font-medium tracking-tight">
        Designed for Community Welfare • Saylani Welfare Trust
    </div>

    </>
  );
}
