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
      

<div className="w-full max-w-3xl bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/80 overflow-hidden flex flex-col">

<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
<div className="flex items-center gap-3">
<h1 className="text-lg font-medium tracking-tight text-gray-900">Email Message</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Sent
                </span>
</div>
<div className="flex items-center gap-2 text-gray-400">
<button className="p-2 hover:bg-gray-50 rounded-md transition-colors hover:text-gray-600">
</button>
</div>
</div>

<div className="bg-white px-6 py-5 space-y-4">

<div className="">
<h2 className="text-lg font-semibold text-gray-900 tracking-tight leading-snug">OrgOne - Stall application update - Waitlist</h2>
</div>

<div className="h-px bg-gray-100 w-full"></div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

<div className="flex items-center gap-3">
<span className="text-sm font-medium text-gray-500 w-5">To</span>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
<span className="text-[10px] font-bold">VB</span>
</div>
<span className="text-sm font-medium text-gray-900">veronikabucsanyi@bigpond.com</span>
</div>
</div>

<div className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span className="">Jan 27, 2026 at 11:55 AM</span>
</div>
</div>
</div>

<div className="bg-gray-50/80 p-6 sm:p-10 border-t border-gray-100 flex-grow">

<div className="sm:p-10 bg-white max-w-2xl border-gray-200/60 border rounded-lg mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="space-y-6 text-base text-gray-600 leading-7">
<p className="text-gray-900">Hi Veronika,</p>
<p className="">
                        Your recent stall application has been processed. Unfortunately, we are not able to accept you for the following dates. We have added you to our waitlist, and will be in contact if a position becomes available.
                    </p>

<div className="bg-gray-50 rounded-md border border-gray-100 p-5 my-6">
<h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="clipboard-list"></i>
                            Waitlist Details
                        </h3>
<div className="space-y-1">
<p className="text-gray-900 font-medium">1st Mount Waverley Market</p>
<p className="text-gray-500 flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
                                16/02/2026
                            </p>
</div>
</div>
<p className="">Please contact us if you have any questions.</p>
<div className="pt-4 border-t border-gray-100 mt-8">
<p className="text-gray-900 font-medium">Regards,</p>
<p className="text-gray-600 mt-1">Aaron Busary</p>
<p className="text-gray-900 font-semibold mt-0.5">OrgOne</p>
</div>
</div>
</div>

</div>
</div>


    </>
  );
}
