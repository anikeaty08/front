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
      
<div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden">

<div className="px-8 pt-8 pb-4">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Property Insights &amp; Analytics</h1>

<div className="flex overflow-x-auto border-b border-gray-200 gap-8 hide-scrollbar">
<button className="flex items-center gap-2 pb-4 border-b-2 border-indigo-600 text-indigo-600 font-medium text-base whitespace-nowrap">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i> Valuation
                </button>
<button className="flex items-center gap-2 pb-4 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition-colors font-normal text-base whitespace-nowrap">
<i className="w-5 h-5" data-lucide="person-standing"></i> Walk Score
                </button>
<button className="flex items-center gap-2 pb-4 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition-colors font-normal text-base whitespace-nowrap">
<i className="w-5 h-5" data-lucide="triangle-alert"></i> Climate Risks
                </button>
<button className="flex items-center gap-2 pb-4 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition-colors font-normal text-base whitespace-nowrap">
<i className="w-5 h-5" data-lucide="trophy"></i> Lifestyle Match
                </button>
</div>
</div>

<div className="p-8 pt-6">

<div className="border border-gray-100 rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">

<div className="flex items-center gap-3 mb-6">
<i className="w-6 h-6 text-indigo-600" data-lucide="home"></i>
<h2 className="text-xl font-medium tracking-tight text-gray-900">Property Valuation</h2>
<span className="bg-amber-100 text-amber-800 text-sm font-medium px-2.5 py-0.5 rounded-full ml-1">Estimated Data</span>
<button className="text-gray-400 hover:text-gray-600 transition-colors ml-1">
<i className="w-5 h-5" data-lucide="info"></i>
</button>
</div>

<div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden shadow-lg border border-gray-800">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="text-gray-400 font-medium text-sm tracking-wide uppercase">Estimated Value</span>
<span className="text-5xl font-medium tracking-tight text-white mt-3 mb-2">$1,126,112</span>
<span className="text-gray-400 text-sm">Range: $1,013,501 - $1,238,723</span>
<div className="w-full max-w-xl mt-12 mb-2">
<div className="flex justify-between items-end mb-3 px-1">
<span className="text-xs text-gray-500 font-medium">$1.01M</span>
<div className="flex flex-col items-center">
<span className="text-xs font-medium text-indigo-300 mb-1">Confidence: 75%</span>
<div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-indigo-400"></div>
</div>
<span className="text-xs text-gray-500 font-medium">$1.24M</span>
</div>
<div className="relative w-full h-2.5 bg-gray-800/80 rounded-full border border-gray-700/50 overflow-visible backdrop-blur-sm">
<div className="absolute left-[15%] right-[15%] h-full bg-gray-700/60 rounded-full"></div>
<div className="absolute left-[15%] w-[35%] h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"></div>
<div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-[3px] border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10 ring-4 ring-gray-900"></div>
</div>
</div>
</div>
</div>

<div className="mt-4 p-5 border border-gray-200 rounded-xl flex flex-col items-center justify-center bg-gray-50/50 shadow-sm">
<span className="text-sm text-gray-500 font-medium">Price per Sq Ft</span>
<span className="text-xl font-medium text-gray-900 mt-1">$379</span>
</div>

<div className="mt-10">
<h3 className="text-base font-medium text-gray-900 mb-4">Value Factors</h3>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium">
<i className="w-4 h-4 text-emerald-600" data-lucide="trending-up"></i> Location
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium">
<i className="w-4 h-4 text-emerald-600" data-lucide="trending-up"></i> Square Footage
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium">
<i className="w-4 h-4 text-emerald-600" data-lucide="trending-up"></i> Bedrooms
                        </span>
</div>
</div>

<div className="mt-12">
<h3 className="text-base font-medium text-gray-900 border-b border-gray-200 pb-3 mb-2">Recent Comparable Sales</h3>
<div className="flex flex-col">
<div className="flex justify-between items-start py-5 border-b border-gray-100 last:border-0">
<div>
<h4 className="text-base font-medium text-gray-900">334 Oak Street, Salida, CO</h4>
<p className="text-sm text-gray-500 mt-1.5">3bd 3ba | 3,041 sqft | 2 mi away | Sold 2026-02-05</p>
</div>
<span className="text-base font-medium text-gray-900">$1,172,412</span>
</div>
<div className="flex justify-between items-start py-5 border-b border-gray-100 last:border-0">
<div>
<h4 className="text-base font-medium text-gray-900">380 Maple Avenue, Salida, CO</h4>
<p className="text-sm text-gray-500 mt-1.5">3bd 3ba | 2,968 sqft | 0.3 mi away | Sold 2026-01-14</p>
</div>
<span className="text-base font-medium text-gray-900">$1,149,110</span>
</div>
<div className="flex justify-between items-start py-5 border-b border-gray-100 last:border-0">
<div>
<h4 className="text-base font-medium text-gray-900">1031 Pine Road, Salida, CO</h4>
<p className="text-sm text-gray-500 mt-1.5">3bd 3ba | 2,875 sqft | 2.2 mi away | Sold 2026-02-24</p>
</div>
<span className="text-base font-medium text-gray-900">$1,116,276</span>
</div>
</div>
</div>
<p className="mt-8 text-xs text-gray-400 leading-relaxed pt-6 border-t border-gray-100">
                    This is an estimate based on recent sales data and market trends. Actual value may vary based on condition and other factors.
                </p>
</div>

<div className="mt-8 border border-gray-100 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="bg-indigo-50/30 px-6 py-4 border-b border-gray-50">
<h3 className="text-base font-medium text-gray-900">Sale History</h3>
</div>
<div className="p-6 bg-white">
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-gray-900">Active <span className="text-gray-400 font-normal ml-1">(36 days on market)</span></span>
</div>
<span className="text-sm text-gray-400">Viewing now</span>
</div>
<div className="bg-gray-50 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex justify-between sm:w-1/4 items-center">
<span className="text-sm text-gray-500">Feb 1, 2026</span>
<span className="text-sm font-medium text-gray-900 sm:hidden">$1,290,000</span>
</div>
<span className="text-sm font-medium text-gray-900 sm:flex-1">Listed For Sale</span>
<span className="text-sm font-medium text-gray-900 hidden sm:block w-1/5 text-right">$1,290,000</span>
<div className="flex items-center justify-between sm:justify-end gap-4 sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-gray-200/60">
<div className="flex flex-col items-start sm:items-end text-xs text-gray-400">
<span>MLS® #</span>
<span>REC3739564</span>
</div>
<img alt="Listing thumbnail" className="w-[72px] h-[48px] rounded-md object-cover border border-gray-200/80 shadow-sm" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&amp;fit=crop&amp;q=80&amp;w=120&amp;h=80"/>
</div>
</div>
</div>
</div>

<div className="mt-12">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-6">Similar properties</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] bg-white flex flex-col group hover:border-gray-200 transition-colors">
<div className="relative h-[200px] w-full bg-gray-100 overflow-hidden">
<img alt="Property interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full p-1.5 text-gray-500 hover:text-gray-900 shadow-sm transition-colors border border-gray-100">
<i className="w-4 h-4" data-lucide="maximize-2"></i>
</button>
</div>
<div className="p-5 flex flex-col gap-3.5">
<div className="flex items-baseline gap-2.5">
<span className="text-xl font-medium tracking-tight text-gray-900">$1,240,000</span>
<span className="text-xs text-gray-400">36 days on market</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-600">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed"></i> 3
                                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath"></i> 2
                                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="ruler"></i> 2,100 ft²
                                </div>
</div>
<div className="flex items-center justify-between mt-1 pt-1">
<div className="flex items-center gap-1.5 text-xs text-gray-500 truncate pr-4">
<i className="w-3.5 h-3.5 shrink-0 text-gray-400" data-lucide="map-pin"></i>
<span className="truncate">13405 County Road 190, Sali...</span>
</div>
<button className="text-gray-300 hover:text-red-500 transition-colors shrink-0">
<i className="w-[18px] h-[18px]" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] bg-white flex flex-col group hover:border-gray-200 transition-colors">
<div className="relative h-[200px] w-full bg-gray-100 overflow-hidden">
<img alt="Property exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full p-1.5 text-gray-500 hover:text-gray-900 shadow-sm transition-colors border border-gray-100">
<i className="w-4 h-4" data-lucide="maximize-2"></i>
</button>
</div>
<div className="p-5 flex flex-col gap-3.5">
<div className="flex items-baseline gap-2.5">
<span className="text-xl font-medium tracking-tight text-gray-900">$1,350,000</span>
<span className="text-xs text-gray-400">94 days on market</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-600">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bed"></i> 3
                                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="bath"></i> 2
                                </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-gray-400" data-lucide="ruler"></i> 1,107 ft²
                                </div>
</div>
<div className="flex items-center justify-between mt-1 pt-1">
<div className="flex items-center gap-1.5 text-xs text-gray-500 truncate pr-4">
<i className="w-3.5 h-3.5 shrink-0 text-gray-400" data-lucide="map-pin"></i>
<span className="truncate">8742 County Road 175, Sali...</span>
</div>
<button className="text-gray-300 hover:text-red-500 transition-colors shrink-0">
<i className="w-[18px] h-[18px]" data-lucide="heart"></i>
</button>
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
