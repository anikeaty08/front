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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

<div className="mb-12 text-center lg:text-left">
<h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
                Travel <span className="text-sky-400">Intelligence</span>
</h1>
<p className="text-xl text-sky-100/60 max-w-2xl">
                Premium assets designed for agencies, frequent travelers, and families.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(380px,auto)]">

<div className="relative group lg:col-span-2 overflow-hidden rounded-3xl bg-slate-900/40 border border-sky-500/20 backdrop-blur-xl">

<div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-400/30 transition-all duration-700"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-sky-500/10 rounded-xl border border-sky-500/20">
<i className="w-8 h-8 text-sky-300" data-lucide="percent" strokeWidth="1.5"></i>
</div>
<span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-200 text-sm font-medium">90% OFF</span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Industry-Level Discount</h2>
<p className="text-lg text-sky-100/70 leading-relaxed mb-8 max-w-xl">
                        Access pricing reserved for airlines. Exclusive partnerships offer up to 90% off on routes and bulk bookings. Competitive advantage for agencies.
                    </p>

<div className="mt-auto relative w-full h-48 bg-gradient-to-t from-sky-500/10 to-transparent rounded-xl border border-sky-500/20 overflow-hidden flex items-end">
<svg className="w-full h-full absolute bottom-0 left-0" fill="none" preserveaspectratio="none" viewbox="0 0 400 150">
<path d="M0 150 L0 100 C50 100 80 40 150 60 C220 80 250 20 400 10 L400 150 Z" fill="url(#grad1)" fillOpacity="0.3"></path>
<path d="M0 100 C50 100 80 40 150 60 C220 80 250 20 400 10" stroke="#38bdf8" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#0ea5e9', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-md border border-sky-500/30 px-4 py-2 rounded-lg shadow-2xl shadow-sky-500/20">
<span className="block text-xs text-sky-400 uppercase tracking-wider font-semibold">Total Savings</span>
<span className="block text-xl text-white font-medium">$4,250.00</span>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-slate-900/40 border border-sky-500/20 backdrop-blur-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="mb-6">
<div className="inline-flex p-3 bg-sky-500/10 rounded-xl border border-sky-500/20 mb-4">
<i className="w-6 h-6 text-sky-300" data-lucide="luggage" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Holiday Package</h2>
<p className="text-lg text-sky-100/70 leading-relaxed">
                            Complete bundles: flights, hotels, and deals. Save time with hassle-free planning.
                        </p>
</div>

<div className="mt-auto relative h-40 w-full flex justify-center items-center">
<div className="absolute top-4 w-4/5 h-24 bg-slate-800/80 border border-sky-500/10 rounded-xl transform scale-90 -translate-y-4 opacity-60"></div>
<div className="absolute top-8 w-4/5 h-24 bg-slate-800/90 border border-sky-500/20 rounded-xl transform scale-95 -translate-y-2 opacity-80"></div>
<div className="absolute top-12 w-4/5 h-24 bg-slate-900 border border-sky-500/30 rounded-xl flex items-center px-4 shadow-lg shadow-sky-900/20">
<div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center mr-3">
<i className="w-5 h-5 text-sky-300" data-lucide="plane"></i>
</div>
<div>
<div className="w-24 h-2 bg-slate-700 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-slate-800 rounded-full"></div>
</div>
<div className="ml-auto">
<i className="w-5 h-5 text-sky-400" data-lucide="check-circle-2"></i>
</div>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-slate-900/40 border border-sky-500/20 backdrop-blur-xl">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="p-3 bg-sky-500/10 rounded-xl border border-sky-500/20">
<i className="w-6 h-6 text-sky-300" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-semibold tracking-widest uppercase text-sky-300">Premium</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Private Jet Access</h2>
<p className="text-lg text-sky-100/70 leading-relaxed mb-6">
                        Luxury comfort, flexible schedules, and VIP privacy. No crowded airports.
                    </p>

<div className="mt-auto flex justify-center pb-4">
<div className="relative w-48 h-24 overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[12px] border-slate-800 border-t-sky-500 border-r-sky-500/50 border-l-sky-500/50" style={{transform: 'rotate(-45deg)'}}></div>
<div className="absolute bottom-0 left-1/2 w-1 h-20 bg-gradient-to-t from-sky-500 to-transparent origin-bottom transition-transform duration-1000 group-hover:rotate-45" style={{transform: 'rotate(-30deg)'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center mb-1">
<span className="text-xs text-sky-300 uppercase tracking-widest">Mach 0.9</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-slate-900/40 border border-sky-500/20 backdrop-blur-xl">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="mb-6">
<div className="inline-flex p-3 bg-sky-500/10 rounded-xl border border-sky-500/20 mb-4">
<i className="w-6 h-6 text-sky-300" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Easy Return Policy</h2>
<p className="text-lg text-sky-100/70 leading-relaxed">
                            Modify or cancel with minimal effort. Clear refund rules reduce booking anxiety.
                        </p>
</div>

<div className="mt-auto bg-slate-950/50 rounded-xl border border-sky-500/20 p-4">
<div className="flex items-center justify-between mb-3 opacity-50">
<div className="h-2 w-20 bg-slate-700 rounded"></div>
<div className="h-2 w-8 bg-slate-700 rounded"></div>
</div>
<div className="flex items-center justify-between p-3 bg-sky-900/20 rounded-lg border border-sky-500/30 cursor-pointer hover:bg-sky-900/30 transition-colors">
<span className="text-sm text-sky-100">Cancel Booking</span>
<div className="w-10 h-5 bg-sky-500 rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="mt-3 flex items-center text-xs text-sky-400">
<i className="w-3 h-3 mr-1" data-lucide="check"></i> Refund Processed
                        </div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-slate-900/40 border border-sky-500/20 backdrop-blur-xl">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl"></div>
<div className="relative z-10 p-8 h-full flex flex-col">
<div className="mb-6">
<div className="inline-flex p-3 bg-sky-500/10 rounded-xl border border-sky-500/20 mb-4">
<i className="w-6 h-6 text-sky-300" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Children Discount</h2>
<p className="text-lg text-sky-100/70 leading-relaxed">
                            Reduced fares for children. Budget-friendly pricing encouraging family vacations.
                        </p>
</div>

<div className="mt-auto w-full">
<div className="flex items-end justify-between px-4 pb-2 border-b border-sky-500/20">
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-slate-500 mb-1" data-lucide="user"></i>
<span className="text-xs text-slate-500">Adult</span>
</div>
<div className="flex flex-col items-center">
<div className="relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                                        -50%
                                    </div>
<i className="w-6 h-6 text-sky-300 mb-1" data-lucide="baby"></i>
</div>
<span className="text-xs text-sky-300">Child</span>
</div>
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-slate-500 mb-1" data-lucide="user"></i>
<span className="text-xs text-slate-500">Adult</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
