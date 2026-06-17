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
      

<div className="px-4 pt-4 pb-2 bg-slate-50">
<div className="flex items-center justify-between gap-2">
<div className="flex gap-2 flex-1">
<button className="bg-blue-50 text-blue-600 rounded-md px-4 py-2 font-medium text-sm leading-relaxed hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            All
          </button>
<button className="bg-blue-50 text-blue-600 rounded-md px-4 py-2 font-medium text-sm leading-relaxed hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            Appointments
          </button>
</div>

<div className="flex items-center gap-2">
<span className="font-normal text-sm text-slate-800">July</span>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>

<button className="ml-2 p-2 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="3" width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
</button>
</div>
</div>

<div className="px-4 pt-2 pb-3 overflow-x-auto no-scrollbar">
<div className="flex gap-4 min-w-max">

<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Mon</span>
<div className="bg-blue-600 text-white rounded-md w-10 h-12 flex flex-col items-center justify-center font-bold text-base tracking-tight mt-1 shadow-sm">
<span className="leading-tight">4</span>
<span className="text-xs">•</span>
</div>
</div>
<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Tue</span>
<div className="bg-white text-slate-600 rounded-md w-10 h-12 flex flex-col items-center justify-center font-normal text-sm mt-1 border border-slate-200">
<span className="leading-tight">5</span>
</div>
</div>
<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Wed</span>
<div className="bg-white text-slate-600 rounded-md w-10 h-12 flex flex-col items-center justify-center font-normal text-sm mt-1 border border-slate-200">
<span className="leading-tight">6</span>
</div>
</div>
<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Thu</span>
<div className="bg-white text-slate-600 rounded-md w-10 h-12 flex flex-col items-center justify-center font-normal text-sm mt-1 border border-slate-200">
<span className="leading-tight">7</span>
</div>
</div>
<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Fri</span>
<div className="bg-white text-slate-600 rounded-md w-10 h-12 flex flex-col items-center justify-center font-normal text-sm mt-1 border border-slate-200">
<span className="leading-tight">8</span>
</div>
</div>
<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Sat</span>
<div className="bg-white text-slate-600 rounded-md w-10 h-12 flex flex-col items-center justify-center font-normal text-sm mt-1 border border-slate-200">
<span className="leading-tight">9</span>
</div>
</div>
<div className="flex flex-col items-center w-10">
<span className="font-semibold text-xs text-slate-600 tracking-tight">Sun</span>
<div className="bg-white text-slate-600 rounded-md w-10 h-12 flex flex-col items-center justify-center font-normal text-sm mt-1 border border-slate-200">
<span className="leading-tight">10</span>
</div>
</div>
</div>
</div>

<div className="relative mx-4 rounded-xl overflow-hidden bg-slate-200" style={{height: '36vh', minHeight: '180px', maxHeight: '320px'}}>

<div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-200"></div>


<div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
<div className="w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center shadow-sm relative">
<span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
<svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7"></circle></svg>
</div>
</div>

<div className="absolute left-2/3 top-1/3 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
<div className="w-8 h-8 bg-blue-600 border-2 border-blue-600 rounded-full flex items-center justify-center shadow-sm relative">
<span className="text-white text-xs font-bold">2</span>
</div>
</div>

<div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
<div className="w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center shadow-sm relative">
<span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
<svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 16 16"><circle cx="8" cy="8" r="7"></circle></svg>
</div>
</div>

<div className="absolute left-[70%] top-2/4 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
<div className="w-8 h-8 bg-blue-600 border-2 border-blue-600 rounded-full flex items-center justify-center shadow-sm relative">
<span className="text-white text-xs font-bold">4</span>
</div>
</div>
</div>

<main className="px-4 pt-4 pb-20">
<div className="flex flex-col gap-2">

<div className="p-4 bg-white rounded-lg shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-center">
<h3 className="font-medium text-base text-slate-800 leading-relaxed">321 Pine Lane, Cedarville, WA</h3>
<span className="text-xs text-slate-600">8:00 am</span>
</div>
<div className="flex gap-2 mt-1">
<span className="text-xs font-normal bg-amber-100 text-amber-700 rounded-sm px-2 py-1 uppercase leading-tight">Unsigned</span>
<span className="text-xs font-normal bg-amber-100 text-amber-700 rounded-sm px-2 py-1 uppercase leading-tight">Unpaid</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-normal text-slate-600 leading-tight px-2 py-1 bg-slate-100 rounded-sm">2538</span>
<div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center font-bold text-white text-sm leading-tight">1</div>
<span className="font-bold text-sm text-orange-500 leading-snug">Joe S</span>
</div>
</div>

<div className="p-4 bg-white rounded-lg shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-center">
<h3 className="font-medium text-base text-slate-800 leading-relaxed">142 Maple Ave, Springfield, WA</h3>
<span className="text-xs text-slate-600">9:15 am</span>
</div>
<div className="flex gap-2 mt-1">
<span className="text-xs font-normal bg-amber-100 text-amber-700 rounded-sm px-2 py-1 uppercase leading-tight">Unscheduled</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-normal text-slate-600 leading-tight px-2 py-1 bg-slate-100 rounded-sm">2632</span>
<div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white text-sm leading-tight">2</div>
<span className="font-bold text-sm text-blue-600 leading-snug">Mia L</span>
</div>
</div>

<div className="p-4 bg-white rounded-lg shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-center">
<h3 className="font-medium text-base text-slate-800 leading-relaxed">88 Willow Rd, Easton, WA</h3>
<span className="text-xs text-slate-600">11:00 am</span>
</div>
<div className="flex gap-2 mt-1">
<span className="text-xs font-normal bg-slate-800 text-slate-100 rounded-sm px-2 py-1 uppercase leading-tight">Unscheduled</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-normal text-slate-600 leading-tight px-2 py-1 bg-slate-100 rounded-sm">2741</span>
<div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center font-bold text-white text-sm leading-tight">3</div>
<span className="font-bold text-sm text-orange-500 leading-snug">Sam B</span>
</div>
</div>

<div className="p-4 bg-white rounded-lg shadow-sm flex flex-col gap-1">
<div className="flex justify-between items-center">
<h3 className="font-medium text-base text-slate-800 leading-relaxed">410 Cedar Dr, Newbury, WA</h3>
<span className="text-xs text-slate-600">1:00 pm</span>
</div>
<div className="flex gap-2 mt-1">
<span className="text-xs font-normal bg-amber-100 text-amber-700 rounded-sm px-2 py-1 uppercase leading-tight">Unsigned</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-normal text-slate-600 leading-tight px-2 py-1 bg-slate-100 rounded-sm">3020</span>
<div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white text-sm leading-tight">4</div>
<span className="font-bold text-sm text-blue-600 leading-snug">Alex T</span>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-200 flex justify-around items-center z-50">
<button className="flex flex-col items-center text-slate-600 text-xs focus:outline-none">

<svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 12l9-9 9 9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 21H6a3 3 0 0 1-3-3v-7m15 10h-3a3 3 0 0 1-3-3v-4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Home</span>
</button>
<button className="flex flex-col items-center text-slate-600 text-xs focus:outline-none">

<svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="4" rx="2" width="6" x="9" y="2"></rect>
<path d="M15 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M9 10h6M9 14h6"></path>
</svg>
<span>Inspections</span>
</button>
<button className="flex flex-col items-center text-slate-600 text-xs focus:outline-none">

<svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="8" r="4"></circle>
<path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"></path>
</svg>
<span>People</span>
</button>
<button className="flex flex-col items-center text-blue-600 text-xs focus:outline-none">

<svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="3" width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
<span>Calendar</span>
</button>
</nav>

    </>
  );
}
