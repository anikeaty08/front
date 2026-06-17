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
      

<div className="max-w-7xl mx-auto space-y-6">

<div className="mb-10 text-center md:text-left">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-400 mb-4">
                Exclusive Travel Assets
            </h1>
<p className="text-lg text-slate-400 max-w-2xl">
                Premium infrastructure for the modern traveler. Unlock industry-level pricing and luxury experiences.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

<div className="lg:col-span-4 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a051e] shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-900/20 via-transparent to-transparent opacity-50"></div>
<div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/30 blur-[100px] rounded-full"></div>
<div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/20">
<i className="text-violet-300 w-6 h-6" data-lucide="trending-down"></i>
</div>
<span className="text-sm font-medium tracking-wide text-violet-300 uppercase">Pricing Tier</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-3">Industry-Level 90% Discount</h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                            Unlock pricing usually reserved for airlines. Access discounts up to 90% on selected routes and bulk bookings through exclusive partnerships.
                        </p>

<div className="flex flex-wrap gap-3 mt-6">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">Massive Savings</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">Agency Level</span>
</div>
</div>

<div className="mt-10 relative h-48 w-full border border-white/5 bg-white/5 rounded-xl overflow-hidden backdrop-blur-md">
<div className="absolute inset-0 flex items-end px-4 pb-0">

<svg className="w-full h-32 overflow-visible" preserveaspectratio="none" viewbox="0 0 400 100">
<defs>
<lineargradient id="gradientLine" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#a78bfa" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#a78bfa" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C50,80 80,20 120,20 C160,20 200,60 250,50 C300,40 350,10 400,5" fill="url(#gradientLine)" stroke="none"></path>
<path d="M0,80 C50,80 80,20 120,20 C160,20 200,60 250,50 C300,40 350,10 400,5" fill="none" stroke="#a78bfa" strokeLinecap="round" strokeWidth="2"></path>

<circle className="animate-pulse" cx="120" cy="20" fill="#fff" r="3"></circle>
<circle cx="400" cy="5" fill="#fff" r="4" stroke="#8b5cf6" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute top-4 left-4 bg-[#1a1625] border border-white/10 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-medium text-white">-90% Applied</span>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-slate-500/20 via-slate-600/5 to-transparent backdrop-blur-sm rounded-tl-[2rem] border-t border-l border-white/10 z-20"></div>
</div>

<div className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a051e] shadow-2xl flex flex-col">

<div className="absolute bottom-0 right-0 w-full h-2/3 bg-gradient-to-t from-violet-900/30 to-transparent opacity-60"></div>
<div className="relative z-10 p-8 flex flex-col h-full">
<div className="mb-auto">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
<i className="text-blue-300 w-6 h-6" data-lucide="package"></i>
</div>
<span className="text-sm font-medium tracking-wide text-blue-300 uppercase">All-in-One</span>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">Holiday Package</h2>
<p className="text-lg text-slate-400">
                            Complete packages including flights, destinations, and deals. Book everything without switching.
                        </p>
</div>

<div className="relative mt-8 h-48 flex justify-center items-center">

<div className="absolute top-0 w-3/4 h-24 bg-slate-800/40 rounded-xl border border-white/5 transform scale-90 -translate-y-4 opacity-50"></div>

<div className="absolute top-4 w-3/4 h-24 bg-slate-700/60 rounded-xl border border-white/5 transform scale-95 -translate-y-2 backdrop-blur-sm flex items-center justify-between px-4">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="h-2 w-20 bg-white/10 rounded"></div>
</div>

<div className="absolute top-8 w-3/4 h-28 bg-gradient-to-br from-[#1e1b2e] to-[#13111c] rounded-xl border border-white/10 shadow-xl flex flex-col justify-center px-5 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<div className="bg-violet-500 rounded p-1"><i className="w-4 h-4 text-white" data-lucide="plane"></i></div>
<div className="h-2 w-16 bg-white/20 rounded"></div>
</div>
<div className="flex items-center gap-3">
<div className="bg-blue-500 rounded p-1"><i className="w-4 h-4 text-white" data-lucide="hotel"></i></div>
<div className="h-2 w-24 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-slate-500/20 via-slate-600/5 to-transparent backdrop-blur-sm rounded-tl-3xl border-t border-l border-white/10 z-20"></div>
</div>

<div className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a051e] shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/20"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex items-center justify-between mb-4">
<i className="text-amber-200 w-8 h-8" data-lucide="crown"></i>
<span className="text-xs border border-amber-500/30 text-amber-200 px-2 py-1 rounded bg-amber-500/10">VIP Only</span>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Private Jet Access</h2>
<p className="text-lg text-slate-400 mb-6">
                        Luxury-level comfort with flexible schedules and no waiting.
                    </p>

<div className="mt-auto relative w-full h-32 flex justify-center items-end overflow-hidden">

<div className="w-48 h-24 border-[12px] border-slate-800 rounded-t-full border-b-0 relative box-content">

<div className="absolute inset-[-12px] w-[calc(100%+24px)] h-[calc(100%+12px)] border-[12px] border-violet-500 rounded-t-full border-b-0 border-l-transparent border-r-transparent transform rotate-[-45deg] origin-bottom shadow-[0_0_20px_rgba(139,92,246,0.5)]"></div>
</div>

<div className="absolute bottom-0 w-1 h-20 bg-gradient-to-t from-white to-transparent origin-bottom transform rotate-45 z-10"></div>
<div className="absolute bottom-0 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] z-20"></div>

<div className="absolute top-0 w-full h-full flex justify-between px-4 opacity-30">
<div className="w-[1px] h-full bg-gradient-to-b from-transparent to-slate-500"></div>
<div className="w-[1px] h-full bg-gradient-to-b from-transparent to-slate-500"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-slate-500/20 via-slate-600/5 to-transparent backdrop-blur-sm rounded-tl-2xl border-t border-l border-white/10 z-20"></div>
</div>

<div className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a051e] shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="mb-4">
<i className="text-emerald-300 w-8 h-8" data-lucide="refresh-cw"></i>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Easy Returns</h2>
<p className="text-lg text-slate-400 mb-6">
                        Modify or cancel bookings with minimal effort. Stress-free refunds.
                    </p>

<div className="mt-auto flex flex-col gap-3">

<div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-sm text-slate-300">Cancel Flight</span>
</div>
<div className="relative w-10 h-6 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center px-1">
<div className="w-4 h-4 bg-emerald-400 rounded-full shadow-lg transform translate-x-4"></div>
</div>
</div>

<div className="flex items-center gap-2 mt-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-xs text-emerald-400 font-medium">Refund Processed Instantly</span>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-slate-500/20 via-slate-600/5 to-transparent backdrop-blur-sm rounded-tl-2xl border-t border-l border-white/10 z-20"></div>
</div>

<div className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a051e] shadow-2xl">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-500/20 blur-[60px] rounded-full"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex items-center gap-3 mb-4">
<i className="text-pink-300 w-8 h-8" data-lucide="smile"></i>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Children Discount</h2>
<p className="text-lg text-slate-400 mb-6">
                        Special fares for families. Making vacations budget-friendly.
                    </p>

<div className="mt-auto relative h-32 w-full flex items-center justify-center">

<div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative z-10 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="user"></i>
</div>
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="user"></i>
</div>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-pink-500/20 flex items-center justify-center transform -translate-y-2">
<span className="text-xs font-bold text-white">-50%</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-slate-500/20 via-slate-600/5 to-transparent backdrop-blur-sm rounded-tl-2xl border-t border-l border-white/10 z-20"></div>
</div>
</div>
</div>


    </>
  );
}
