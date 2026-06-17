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
      

<div className="max-w-md mx-auto min-h-screen bg-gray-50 relative flex flex-col pb-24">

<header className="bg-white px-6 pt-12 pb-4 sticky top-0 z-20 border-b border-gray-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
<div className="flex items-center justify-between mb-6">
<button className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors">
<i className="w-6 h-6 text-gray-700" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold tracking-tighter text-sm">G</div>
<span className="font-semibold text-lg tracking-tight">GoKwik</span>
</div>
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-xs font-semibold text-gray-600">JD</span>
</button>
</div>

<div className="flex p-1 bg-gray-100/80 rounded-xl">
<button className="flex-1 py-2 px-4 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-900 transition-all">Upcoming</button>
<button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">Pay All</button>
<button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">History</button>
</div>
</header>

<main className="flex-1 px-5 pt-6 space-y-6">

<div className="flex items-end justify-between px-1">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">January 2025</h1>
<p className="text-sm text-gray-500 mt-1">2 payments due</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Due</p>
<p className="text-xl font-semibold tracking-tight text-gray-900">₹1,400</p>
</div>
</div>

<div className="space-y-5">

<div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
<div className="p-5">

<div className="flex items-start justify-between mb-5">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<span className="font-semibold text-gray-400 text-xs">FOX</span>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Foxtale Sunscreen</h3>
<p className="text-sm text-gray-500 mt-0.5">Order #88392 • Foxtale</p>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-semibold tracking-tight text-gray-900">₹700</span>
</div>
</div>

<div className="mb-5">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-blue-600">EMI 2 of 3</span>
<span className="text-gray-400">66% Paid</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 w-2/3 rounded-full"></div>
</div>
</div>

<div className="flex items-center gap-2 text-sm text-gray-600 mb-5 bg-gray-50 p-3 rounded-xl border border-gray-100/50">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
<span>Due on <span className="font-medium text-gray-900">2 Dec 2025</span></span>
</div>

<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border border-amber-100 p-4 mb-5">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-full -mr-8 -mt-8 blur-xl"></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-amber-200 flex items-center justify-center shadow-inner ring-4 ring-white/30">
<i className="w-5 h-5 text-amber-700 fill-amber-400/20" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-amber-900">Earn Gold on this EMI</h4>
<p className="text-xs text-amber-700/80 mt-0.5">Get <span className="font-semibold">5% gold</span> worth ₹35 instantly</p>
</div>
</div>
</div>

<div className="grid grid-cols-[1fr_auto] gap-3">
<button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3.5 px-4 rounded-xl shadow-md shadow-blue-200 transition-all flex items-center justify-center gap-2">
<span>Pay ₹700</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-4 py-3.5 text-gray-500 font-medium text-sm hover:bg-gray-50 rounded-xl transition-colors">
                                Details
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
<div className="p-5">

<div className="flex items-start justify-between mb-5">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<span className="font-semibold text-gray-400 text-xs">BOAT</span>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">boAt Soundbar</h3>
<p className="text-sm text-gray-500 mt-0.5">Order #22145 • boAt</p>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-semibold tracking-tight text-gray-900">₹700</span>
</div>
</div>

<div className="mb-5">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-blue-600">EMI 2 of 3</span>
<span className="text-gray-400">66% Paid</span>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 w-2/3 rounded-full"></div>
</div>
</div>

<div className="flex items-center gap-2 text-sm text-amber-700 mb-5 bg-amber-50 p-3 rounded-xl border border-amber-100/50">
<i className="w-4 h-4 text-amber-600" data-lucide="clock"></i>
<span>Due soon: <span className="font-semibold">2 Dec 2025</span></span>
</div>

<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border border-amber-100 p-4 mb-5">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-b from-white/40 to-transparent rounded-full -mr-8 -mt-8 blur-xl"></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-amber-200 flex items-center justify-center shadow-inner ring-4 ring-white/30">
<i className="w-5 h-5 text-amber-700 fill-amber-400/20" data-lucide="coins"></i>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-amber-900">Unlock Gold Reward</h4>
<p className="text-xs text-amber-700/80 mt-0.5">Guaranteed <span className="font-semibold">₹35 Gold</span> on payment</p>
</div>
</div>
</div>

<div className="grid grid-cols-[1fr_auto] gap-3">
<button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3.5 px-4 rounded-xl shadow-md shadow-blue-200 transition-all flex items-center justify-center gap-2">
<span>Pay ₹700</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-4 py-3.5 text-gray-500 font-medium text-sm hover:bg-gray-50 rounded-xl transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
</div>

<div className="h-20"></div>
</main>

<div className="fixed bottom-[72px] left-0 right-0 z-30 flex justify-center px-4 w-full max-w-md mx-auto">
<div className="w-full bg-gray-900 text-white rounded-2xl shadow-xl shadow-gray-200 p-4 flex items-center justify-between border border-gray-800">
<div>
<p className="text-xs text-gray-400 mb-0.5">Total Payable</p>
<p className="text-xl font-semibold tracking-tight">₹1,200 <span className="text-xs font-normal text-gray-400 line-through ml-1">₹1400</span></p>
</div>
<button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2.5 px-6 rounded-xl transition-colors flex items-center gap-2">
                    Pay All
                    <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40 pb-safe pt-2 max-w-md mx-auto">
<div className="grid grid-cols-4 h-16">
<button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="clipboard-list"></i>
<span className="text-[10px] font-medium">Orders</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-gray-600">
<i className="w-6 h-6" data-lucide="clock"></i>
<span className="text-[10px] font-medium">Pending</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 text-blue-600 relative">
<div className="absolute top-1.5 right-6 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
<i className="w-6 h-6 fill-current" data-lucide="pie-chart"></i>
<span className="text-[10px] font-medium">EMI</span>
</button>
</div>
</nav>
</div>


    </>
  );
}
