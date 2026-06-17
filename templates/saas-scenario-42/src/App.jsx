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
      
<div className="w-full max-w-[56rem] mx-auto flex flex-col gap-8">

<div className="w-full bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm flex flex-col">

<div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4 flex-wrap">
<h2 className="text-xl md:text-[22px] font-medium tracking-tight text-slate-900">Active Operating Model</h2>
<span className="bg-[#C6F6D5]/60 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded">Active</span>
<span className="text-slate-500 text-base">01 Jul 2024 - 31 Dec 2024</span>
</div>
<div className="flex items-center gap-4 text-slate-400">
<i className="w-5 h-5 cursor-pointer hover:text-slate-600 transition-colors" data-lucide="wand-2" strokeWidth="1.5"></i>
<i className="w-5 h-5 cursor-pointer hover:text-slate-600 transition-colors" data-lucide="file-text" strokeWidth="1.5"></i>
<i className="w-5 h-5 cursor-pointer hover:text-slate-600 transition-colors" data-lucide="edit" strokeWidth="1.5"></i>
</div>
</div>
<div className="w-full h-px bg-slate-200/60"></div>

<div className="px-6 py-5 flex items-end gap-6 w-full overflow-hidden">
<div className="h-2.5 bg-[#94A3B8] rounded-full w-[45%] shrink-0"></div>
<div className="h-2.5 bg-[#E2E8F0] rounded-full w-[35%] shrink-0"></div>
<div className="flex flex-col gap-2 w-[15%] shrink-0 ml-auto">
<div className="h-2.5 bg-[#E2E8F0] rounded-full w-full"></div>
<div className="flex justify-between w-full text-[10px] uppercase font-medium text-slate-900 tracking-wider px-1">
<span>Jul</span>
<span>Dec</span>
</div>
</div>
</div>
<div className="w-full h-px bg-slate-200/60"></div>

<div className="px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center w-full gap-6 sm:gap-0">

<div className="flex flex-col gap-3 flex-1 px-4 first:pl-0 sm:border-r border-slate-200/60 last:border-0">
<span className="text-base font-medium text-slate-900">Total Budget</span>
<div className="flex items-center gap-3">
<svg className="w-5 h-5 -rotate-90 text-slate-400" viewbox="0 0 36 36">
<path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="20, 100" strokeWidth="4"></path>
</svg>
<div className="flex flex-col gap-2 w-full max-w-[120px]">
<div className="h-2 bg-[#E2E8F0] rounded-full w-full"></div>
<div className="h-2 bg-[#E2E8F0] rounded-full w-[60%]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 flex-1 px-4 sm:border-r border-slate-200/60 last:border-0">
<span className="text-base font-medium text-slate-900">Committed Spend</span>
<div className="flex items-center gap-3">
<svg className="w-5 h-5 -rotate-90 text-slate-400" viewbox="0 0 36 36">
<path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="45, 100" strokeWidth="4"></path>
</svg>
<div className="flex flex-col gap-2 w-full max-w-[120px]">
<div className="h-2 bg-[#E2E8F0] rounded-full w-[85%]"></div>
<div className="h-2 bg-[#E2E8F0] rounded-full w-[45%]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 flex-1 px-4 sm:border-r border-slate-200/60 last:border-0">
<span className="text-base font-medium text-slate-900">Projected Burn</span>
<div className="flex items-center gap-3">
<svg className="w-5 h-5 -rotate-90 text-slate-400" viewbox="0 0 36 36">
<path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="4"></path>
</svg>
<div className="flex flex-col gap-2 w-full max-w-[120px]">
<div className="h-2 bg-[#E2E8F0] rounded-full w-[95%]"></div>
<div className="h-2 bg-[#E2E8F0] rounded-full w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm flex flex-col pt-10 pb-12 px-8 md:px-12">

<div className="flex items-center gap-4 mb-8 text-slate-900">
<i className="w-8 h-8 md:w-10 md:h-10" data-lucide="sparkles" strokeWidth="1.5"></i>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight">AI Scenario Forecast</h1>
</div>
<div className="w-full h-px bg-slate-200/60 mb-8"></div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
<h2 className="text-[22px] md:text-2xl font-medium tracking-tight text-slate-900">Cash Runway &amp; Burn</h2>
<span className="text-slate-500 text-lg">01 Jul 2024 - 31 Dec 2024</span>
</div>

<div className="w-full border-2 border-slate-200/60 rounded-[1.5rem] p-6 md:p-10 flex flex-col gap-10">

<div className="flex flex-col gap-4 w-full">
<div className="h-3.5 bg-[#E2E8F0]/70 rounded-full w-full"></div>
<div className="h-3.5 bg-[#E2E8F0]/70 rounded-full w-[95%]"></div>
<div className="h-3.5 bg-[#E2E8F0]/70 rounded-full w-[70%]"></div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"></div>
<span className="text-lg text-slate-500"><span className="text-slate-700">Avg Burn Rate:</span> $42.5k/mo</span>
</div>
<div className="h-3 bg-[#E2E8F0]/70 rounded-full w-32 ml-5.5 pl-[22px]"></div>
</div>

<div className="w-full md:w-[90%]">
<p className="text-lg text-slate-500 leading-relaxed">
<span className="font-medium text-slate-900">Hiring Scenario:</span> Delaying 4 new field staff hires until Q4 reduces Q3 burn by $35k, extending the overall projected runway to 20 months while maintaining grant compliance.
                    </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"></div>
<span className="text-lg text-slate-500"><span className="text-slate-700">Projected Runway:</span> 18 months</span>
</div>
<div className="h-3 bg-[#E2E8F0]/70 rounded-full w-40 ml-5.5 pl-[22px]"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
