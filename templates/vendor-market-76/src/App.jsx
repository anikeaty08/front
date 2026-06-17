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
      
<div className="w-full max-w-[760px] space-y-8">

<div className="text-center space-y-2">
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Confirm Your Attendance for</h1>
<p className="text-3xl font-bold text-blue-600">Saturday, Oct 24, 2024</p>
</div>

<div className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 overflow-hidden">

<div className="p-8 pb-10 flex flex-col items-center">
<p className="uppercase text-xs font-semibold text-slate-400 tracking-widest mb-6">Time Left to Confirm</p>
<div className="flex items-center gap-4 sm:gap-6">

<div className="flex flex-col items-center gap-3">
<div className="w-20 h-24 sm:w-24 sm:h-24 bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm flex items-center justify-center">
<span className="text-4xl sm:text-5xl font-semibold text-blue-600 tracking-tight">02</span>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Hours</span>
</div>
<span className="text-2xl font-medium text-slate-300 pb-8">:</span>

<div className="flex flex-col items-center gap-3">
<div className="w-20 h-24 sm:w-24 sm:h-24 bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm flex items-center justify-center">
<span className="text-4xl sm:text-5xl font-semibold text-blue-600 tracking-tight">45</span>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Min</span>
</div>
<span className="text-2xl font-medium text-slate-300 pb-8">:</span>

<div className="flex flex-col items-center gap-3">
<div className="w-20 h-24 sm:w-24 sm:h-24 bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm flex items-center justify-center">
<span className="text-4xl sm:text-5xl font-semibold text-blue-600 tracking-tight">12</span>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sec</span>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>

<div className="p-8 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Casual Attendance</h2>
<i className="text-slate-400 w-6 h-6" data-lucide="store" strokeWidth="1.5"></i>
</div>
<p className="leading-relaxed text-base text-slate-500">Join the pool for available daily spaces. A Bingo number will be assigned to determine your place in the queue.</p>
<button className="hover:bg-blue-700 transition-colors text-base font-medium text-white bg-blue-600 w-full rounded-xl pt-4 pb-4 shadow-sm cursor-pointer" onclick="window.location.href='/casual-trader-pool-joined'" role="button">
                    Join Casual Pool
                </button>
</div>
</div>

<div className="bg-white rounded-3xl shadow-sm ring-1 ring-slate-200 p-8 space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-1">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Tomorrow’s Market Overview</h2>
<p className="text-base text-slate-500">Capacity monitoring for October 24</p>
</div>
<div className="flex items-baseline gap-1.5">
<span className="text-5xl font-semibold tracking-tight text-blue-600">84</span>
<span className="text-base font-medium text-slate-400">/ 100 Total Capacity</span>
</div>
</div>

<div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
<div className="bg-blue-600 h-full" style={{width: '52%'}}></div>
<div className="bg-blue-400 h-full" style={{width: '32%'}}></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-slate-50 rounded-2xl p-6 flex items-start gap-4">
<div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl shrink-0">
<i className="w-5 h-5" data-lucide="calendar-check" strokeWidth="1.5"></i>
</div>
<div className="space-y-1">
<p className="uppercase text-xs font-semibold text-slate-400 tracking-widest">Regular Traders</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900">52</p>
<p className="text-sm text-slate-500">Confirmed</p>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 flex items-start gap-4">
<div className="bg-blue-100 text-blue-400 p-2.5 rounded-xl shrink-0">
<i className="w-5 h-5" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<div className="space-y-1">
<p className="uppercase text-xs font-semibold text-slate-400 tracking-widest">Casual Traders</p>
<p className="text-3xl font-semibold tracking-tight text-slate-900">32</p>
<p className="text-sm text-slate-500">Waiting in pool</p>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
