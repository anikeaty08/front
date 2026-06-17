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
      
<div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-5 space-y-6 lg:pr-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-medium tracking-wide shadow-sm">
<iconify-icon height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
                Automated Reporting
            </div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
                Board &amp; Funder Reporting
            </h1>
<p className="text-base text-gray-500 leading-relaxed font-normal">
                Board packs and funder reports delivered early, built from live numbers with clear narrative and backup.
            </p>
<div className="pt-4 flex flex-col gap-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
<iconify-icon className="text-green-600" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-600 font-normal">Always synced to live actuals</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
<iconify-icon className="text-green-600" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-600 font-normal">Contextual narrative formatting</span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/40 via-transparent to-teal-50/40 blur-3xl -z-10 rounded-full pointer-events-none"></div>

<div className="relative w-full rounded-2xl bg-white border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col">

<div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/80 gap-4">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white font-medium tracking-tighter text-sm shadow-sm">
                            PI
                        </div>
<div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                Q3 Funder Update
                                <span className="px-2 py-0.5 rounded-md bg-green-50 border border-green-100 text-green-700 text-xs font-medium inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Live
                                </span>
</div>
<div className="text-xs text-gray-400 mt-0.5 font-normal">Last updated just now</div>
</div>
</div>
<div className="flex gap-2 self-start sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50 transition-colors flex items-center gap-1.5 shadow-sm">
<iconify-icon height="14" icon="solar:link-linear" width="14"></iconify-icon>
                            Copy Link
                        </button>
<button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm">
                            Export PDF
                        </button>
</div>
</div>

<div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white flex-grow">

<div className="md:col-span-7 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" height="16" icon="solar:pen-new-square-linear" width="16"></iconify-icon>
                                Executive Summary
                            </h3>
<div className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon height="14" icon="solar:user-circle-linear" width="14"></iconify-icon>
                                Editing
                            </div>
</div>

<div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm h-full group hover:border-gray-300 transition-colors min-h-[160px]">
<p className="text-sm text-gray-600 leading-relaxed font-normal">
                                Program execution in Q3 accelerated significantly, utilizing <span className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 text-gray-900 px-1.5 py-0.5 rounded font-medium text-xs cursor-pointer hover:bg-gray-200 transition-colors" title="Linked to live data"><iconify-icon className="text-gray-400" height="10" icon="solar:database-linear" width="10"></iconify-icon>$245k</span> of the allocated funding. 
                                <br/><br/>
                                The slight underspend in specific program areas is due to delayed vendor billing and will normalize in Q4. All primary impact metrics remain firmly on track against our annual targets.
                            </p>

<div className="absolute bottom-4 left-44 w-[1px] h-4 bg-blue-500 animate-pulse"></div>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-4">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
                            Live Highlights
                        </h3>

<div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-gray-500 font-normal">Grant Utilization</div>
<iconify-icon className="text-gray-400" height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">$245,000</div>

<div className="w-full bg-gray-200 rounded-full h-1.5 mt-3 mb-1 overflow-hidden">
<div className="bg-gray-900 h-1.5 rounded-full w-[75%]"></div>
</div>
<div className="text-xs text-gray-400 font-normal text-right">75% of Budget</div>
</div>

<div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-2 relative z-10">
<div className="text-xs text-gray-500 font-normal">Spend Variance</div>
<div className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-medium">On Track</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900 relative z-10">-$4,200</div>
<div className="text-xs text-gray-500 mt-1 font-normal relative z-10">Favorable vs Expected</div>

<svg className="absolute bottom-0 left-0 w-full text-green-500/10" preserveaspectratio="none" style={{height: '40px'}} viewbox="0 0 100 30">
<path d="M0 30 L 20 20 L 40 25 L 60 10 L 80 15 L 100 5 L 100 30 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>

<div className="bg-white border-t border-gray-100 px-5 py-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-gray-500 font-normal cursor-pointer hover:text-gray-800 transition-colors">
<iconify-icon height="16" icon="solar:folder-with-files-linear" width="16"></iconify-icon>
                        3 automated schedules attached
                    </div>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-600 font-medium z-20">AL</div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-xs text-blue-600 font-medium z-10">CJ</div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs text-gray-400 font-normal z-0">
<iconify-icon height="14" icon="solar:add-circle-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
