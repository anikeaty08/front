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
      

<div className="bg-white w-full max-w-5xl rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] border border-slate-200/60 overflow-hidden flex flex-col md:flex-row min-h-[600px]">

<div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 p-6 lg:p-8 flex flex-col bg-slate-50/30">

<button className="group mb-8 inline-flex items-center text-xs font-medium text-slate-400 hover:text-slate-800 transition-colors w-fit">
<div className="p-1 rounded-full border border-slate-200 bg-white mr-2 group-hover:border-slate-300 transition-colors shadow-sm">
<iconify-icon height="16" icon="solar:arrow-left-linear" width="16"></iconify-icon>
</div>
                Back
            </button>

<div className="mb-6">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center text-slate-900 font-semibold tracking-tight text-lg shadow-sm mb-4">
                    JS
                </div>
<p className="text-sm font-medium text-slate-500 mb-1">Jordan Smith</p>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Product Design Sync</h1>
</div>

<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" height="18" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">30 min</span>
</div>
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" height="18" icon="solar:videocamera-record-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Google Meet</span>
</div>
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-slate-400" height="18" icon="solar:global-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">UTC -07:00 (PDT)</span>
</div>
</div>

<div className="mt-auto">
<p className="text-sm leading-relaxed text-slate-500">
                    Reviewing the latest high-fidelity mockups for the dashboard redesign. Please have your Figma files ready.
                </p>
</div>

<div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2">
<span className="text-xs font-semibold text-slate-900 tracking-tighter">ACME</span>
<span className="text-xs text-slate-400">Scheduling</span>
</div>
</div>

<div className="w-full md:w-2/3 flex flex-col sm:flex-row">

<div className="flex-1 p-6 lg:p-8">

<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium text-slate-900">October 2023</h2>
<div className="flex gap-1">
<button className="p-1.5 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-1.5 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-7 mb-2">
<div className="text-center text-xs font-medium text-slate-400 py-2">S</div>
<div className="text-center text-xs font-medium text-slate-400 py-2">M</div>
<div className="text-center text-xs font-medium text-slate-400 py-2">T</div>
<div className="text-center text-xs font-medium text-slate-400 py-2">W</div>
<div className="text-center text-xs font-medium text-slate-400 py-2">T</div>
<div className="text-center text-xs font-medium text-slate-400 py-2">F</div>
<div className="text-center text-xs font-medium text-slate-400 py-2">S</div>
</div>

<div className="grid grid-cols-7 gap-y-2 gap-x-1">

<div className="aspect-square"></div>
<div className="aspect-square"></div>

<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-400 line-through decoration-slate-300 opacity-50 cursor-not-allowed">1</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-400 line-through decoration-slate-300 opacity-50 cursor-not-allowed">2</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-400 line-through decoration-slate-300 opacity-50 cursor-not-allowed">3</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-400 line-through decoration-slate-300 opacity-50 cursor-not-allowed">4</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-400 line-through decoration-slate-300 opacity-50 cursor-not-allowed">5</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">6</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">7</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">8</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">9</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">10</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">11</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">12</button>

<button className="relative aspect-square flex items-center justify-center text-sm font-medium text-white bg-slate-900 rounded-full shadow-md shadow-slate-900/20">
                        13
                        <span className="absolute -bottom-1 w-1 h-1 bg-slate-900 rounded-full"></span>
</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">14</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">15</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">16</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">17</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">18</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">19</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">20</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">21</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">22</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">23</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">24</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">25</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">26</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">27</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">28</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">29</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">30</button>
<button className="aspect-square flex items-center justify-center text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-full transition-colors">31</button>
</div>
<div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-900"></span>Selected</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-200"></span>Available</span>
</div>
</div>

<div className="w-full sm:w-64 border-t sm:border-t-0 sm:border-l border-slate-100 p-6 flex flex-col bg-white">
<h3 className="text-sm font-medium text-slate-500 mb-4 fade-enter">Friday, Oct 13</h3>
<div className="overflow-y-auto no-scrollbar flex-1 -mr-2 pr-2 fade-enter" style={{animationDelay: '0.1s'}}>
<div className="space-y-2.5">
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            09:00 AM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            09:30 AM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            10:00 AM
                        </button>

<div className="flex gap-2 w-full">
<button className="flex-1 py-2.5 px-4 rounded-lg bg-slate-900 text-white text-sm font-medium shadow-md shadow-slate-900/10 transition-transform active:scale-95 text-center">
                                10:30 AM
                            </button>
<button className="flex-shrink-0 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-white shadow-md hover:bg-slate-800 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            11:00 AM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            11:30 AM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            01:00 PM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            01:30 PM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            02:00 PM
                        </button>
<button className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-800 hover:text-slate-900 hover:shadow-sm transition-all duration-200 flex justify-center items-center group bg-white">
                            02:30 PM
                        </button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
