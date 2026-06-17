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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">

<div className="bg-white rounded-[32px] p-8 flex flex-col justify-between shadow-sm h-full">

<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-base font-medium text-zinc-900">Total Sales</span>
</div>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex justify-between items-start mb-12">
<div>
<h2 className="text-7xl font-medium tracking-tight text-zinc-900 leading-none">15,984.12</h2>
<p className="text-sm font-medium text-zinc-500 mt-2">USD</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i> 12%
                    </span>
<span className="text-sm font-medium text-zinc-500">7D</span>
</div>
</div>

<div className="border-t border-zinc-100 mb-8"></div>

<div className="grid grid-cols-2 gap-8">

<div className="flex flex-col h-full justify-between">
<div>
<div className="text-5xl font-medium tracking-tight text-zinc-900">246</div>
<div className="text-sm font-medium text-zinc-500 mt-1">USD</div>
</div>
<div className="text-base font-medium text-zinc-900 mt-6">Gross Sales</div>
</div>

<div className="relative border-l border-zinc-100 pl-8 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="text-5xl font-medium tracking-tight text-zinc-900">8</div>
<div className="flex flex-col items-end gap-1">
<span className="bg-zinc-100 text-zinc-600 text-sm font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-down-right"></i> 12%
                            </span>
<span className="text-sm font-medium text-zinc-500">7D</span>
</div>
</div>
<div className="text-base font-medium text-zinc-900 mt-6">Volume Sales</div>
</div>
</div>
</div>

<div className="bg-white rounded-[32px] p-8 flex flex-col shadow-sm h-full">

<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-base font-medium text-zinc-900">Total Sales</span>
</div>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex items-end justify-center gap-3 my-8 h-40">
<div className="w-40 h-40 rounded-full bg-blue-600"></div>
<div className="w-24 h-24 rounded-full bg-zinc-800"></div>
<div className="w-14 h-14 rounded-full bg-zinc-300"></div>
</div>

<div className="space-y-5 mb-6">

<div className="flex items-center justify-between border-b border-zinc-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-blue-600"></div>
<span className="text-xl font-medium tracking-tight text-zinc-900">$4,549.05</span>
</div>
<div className="flex items-center gap-4">
<span className="text-base text-zinc-400">Delivery</span>
<span className="bg-blue-600 text-white text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> 2%
                        </span>
</div>
</div>

<div className="flex items-center justify-between border-b border-zinc-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<span className="text-xl font-medium tracking-tight text-zinc-900">$3,438.94</span>
</div>
<div className="flex items-center gap-4">
<span className="text-base text-zinc-400">Pickup</span>
<span className="bg-zinc-100 text-zinc-600 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> 6%
                        </span>
</div>
</div>

<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<span className="text-xl font-medium tracking-tight text-zinc-900">$2,327.83</span>
</div>
<div className="flex items-center gap-4">
<span className="text-base text-zinc-400">Other</span>
<span className="bg-zinc-100 text-zinc-600 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> 12%
                        </span>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-zinc-100">
<a className="text-base font-medium text-zinc-400 hover:text-zinc-600" href="#">View more</a>
</div>
</div>

<div className="bg-white rounded-[32px] p-8 flex flex-col shadow-sm lg:col-span-2">

<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-base font-medium text-zinc-900">Cancellations</span>
</div>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="flex flex-wrap gap-12 mb-10">
<div className="flex items-center gap-4">
<span className="text-xl text-zinc-300 font-medium">Rate</span>
<span className="text-xl font-medium text-zinc-900">0.84%</span>
<span className="bg-zinc-100 text-zinc-600 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> 1.6%
                    </span>
</div>
<div className="flex items-center gap-4">
<span className="text-xl text-zinc-300 font-medium">Sales</span>
<span className="text-xl font-medium text-zinc-900">-$1,912.50</span>
<span className="bg-zinc-100 text-zinc-600 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> 1.6%
                    </span>
</div>
</div>

<div className="relative w-full h-64 flex items-end gap-2 sm:gap-4 md:gap-5 pb-8">

<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm font-medium text-zinc-400 pb-12 pointer-events-none">
<span>1.0%</span>
<span>0.8%</span>
<span>0.4%</span>
</div>

<div className="flex items-end justify-between w-full h-full pl-10 pr-2 pb-6">

<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[25%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[28%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[32%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[45%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[65%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[88%] hover:opacity-80 transition-opacity relative group">

<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Jul 12</div>
</div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[88%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[65%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[45%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[32%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[28%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[25%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[22%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[25%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[28%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[32%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-zinc-700 rounded-full h-[45%] hover:opacity-80 transition-opacity"></div>
<div className="w-3 sm:w-4 md:w-5 bg-blue-600 rounded-full h-[65%] hover:opacity-80 transition-opacity shadow-lg shadow-blue-200/50"></div>
</div>

<div className="absolute bottom-0 w-full pl-10 pr-2 flex justify-between text-xs font-semibold text-zinc-900 uppercase tracking-wider">
<span className="text-zinc-900">Jul 6</span>
<span className="text-zinc-900 pr-12">12</span>
<span className="text-zinc-900 pl-8">18</span>
<span className="text-zinc-900">24</span>
</div>
</div>
<div className="mt-4 border-t border-zinc-100 pt-4">
<a className="text-base font-medium text-zinc-400 hover:text-zinc-600" href="#">View more</a>
</div>
</div>
</div>


    </>
  );
}
