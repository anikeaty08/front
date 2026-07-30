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
      

<div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

<div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col relative overflow-hidden">

<div className="flex items-start justify-between mb-10">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Unified Project Dashboard</h1>
<p className="text-sm text-gray-500 mt-1.5">Centralized view of all active experiences</p>
</div>
<div className="h-10 w-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
<iconify-icon height="22" icon="solar:widget-linear" width="22"></iconify-icon>
</div>
</div>

<div className="mb-12">
<div className="flex items-end justify-between mb-6">
<div>
<div className="text-sm font-medium text-gray-400 mb-1">Global Engagement</div>
<div className="text-4xl font-medium tracking-tight text-gray-900 flex items-baseline gap-2">
                            84,290
                            <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full flex items-center gap-1 -translate-y-1">
<iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
                                12.5%
                            </span>
</div>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium text-gray-900 bg-gray-100 px-3 py-1.5 rounded-full cursor-pointer">1Y</span>
<span className="text-xs font-medium text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-full cursor-pointer transition-colors">30D</span>
</div>
</div>

<div className="w-full h-40 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewBox="0 0 500 120">
<defs>
<lineargradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#f3f4f6" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="500" y1="30" y2="30"></line>
<line stroke="#f3f4f6" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="500" y1="75" y2="75"></line>
<line stroke="#f3f4f6" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="500" y1="120" y2="120"></line>

<path d="M0,100 C50,80 150,110 250,70 C350,30 420,40 500,20 L500,120 L0,120 Z" fill="url(#blueGradient)"></path>

<path className="chart-line" d="M0,100 C50,80 150,110 250,70 C350,30 420,40 500,20" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>

<circle className="shadow-sm" cx="500" cy="20" fill="#ffffff" r="4" stroke="#3b82f6" strokeWidth="2"></circle>
</svg>
</div>
</div>

<div className="mt-auto">
<div className="flex items-center justify-between mb-5">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Recent Activity</h3>
<button className="text-xs text-blue-500 font-medium hover:text-blue-600 flex items-center gap-1">
                        View all
                        <iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-5">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 border border-blue-100/50">
<iconify-icon height="20" icon="solar:monitor-smartphone-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-900 tracking-tight">Webpage updated</p>
<span className="text-xs text-gray-400">2h ago</span>
</div>
<p className="text-xs text-gray-500 mt-0.5">Marketing landing page v2.4 deployed to production.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 shrink-0 border border-pink-100/50">
<iconify-icon height="20" icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 pt-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-gray-900 tracking-tight">Booth published</p>
<span className="text-xs text-gray-400">5h ago</span>
</div>
<p className="text-xs text-gray-500 mt-0.5">TechCon 2024 Virtual Hub is now live for attendees.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

<div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between flex-1">

<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight text-gray-900">Brand Assets</h2>
<p className="text-xs text-gray-500 mt-1">Global theming controls</p>
</div>
<button className="text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 p-2 rounded-full">
<iconify-icon height="18" icon="solar:pallete-2-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-6">

<div>
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-3">Primary Colors</span>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 ring-4 ring-blue-50 shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-8 h-8 rounded-full bg-pink-400 ring-4 ring-pink-50 shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-8 h-8 rounded-full bg-gray-900 ring-4 ring-gray-100 shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-8 h-8 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 cursor-pointer transition-colors ml-1">
<iconify-icon height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-3">Typography</span>
<div className="flex items-center justify-between border border-gray-200 bg-gray-50/50 rounded-2xl px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-900 shadow-sm">Aa</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900 tracking-tight">Inter</span>
<span className="text-xs text-gray-500">Primary Font Family</span>
</div>
</div>
<iconify-icon className="text-gray-400" height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<button className="mt-8 w-full bg-pink-400 hover:bg-pink-500 text-white text-sm font-medium py-3.5 rounded-2xl transition-all shadow-[0_4px_14px_rgba(244,114,182,0.4)] hover:shadow-[0_6px_20px_rgba(244,114,182,0.5)] flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                    Apply Globally
                </button>
</div>

<div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between flex-1">

<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight text-gray-900">Lead Sources</h2>
<p className="text-xs text-gray-500 mt-1">Cross-platform origins</p>
</div>
<div className="h-8 w-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
<iconify-icon height="16" icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between gap-6 h-full">

<div className="relative w-28 h-28 shrink-0">

<svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">

<circle cx="60" cy="60" fill="transparent" r="46" stroke="#f3f4f6" strokeWidth="14"></circle>


<circle cx="60" cy="60" fill="transparent" r="46" stroke="#3b82f6" strokeDasharray="187.8 289" strokeDashoffset="0" strokeLinecap="round" strokeWidth="14"></circle>



<circle cx="60" cy="60" fill="transparent" r="46" stroke="#f472b6" strokeDasharray="85 289" strokeDashoffset="-196" strokeLinecap="round" strokeWidth="14"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-medium text-gray-900 tracking-tight">4.2k</span>
<span className="text-xs text-gray-400 mt-0.5">Total</span>
</div>
</div>

<div className="flex flex-col gap-4 flex-1">

<div className="flex items-center justify-between group cursor-default">
<div className="flex items-center gap-2.5">
<div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform"></div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Booth</span>
</div>
<span className="text-sm font-medium text-gray-900 tracking-tight">65%</span>
</div>

<div className="flex items-center justify-between group cursor-default">
<div className="flex items-center gap-2.5">
<div className="w-3 h-3 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.4)] group-hover:scale-110 transition-transform"></div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Webpage</span>
</div>
<span className="text-sm font-medium text-gray-900 tracking-tight">35%</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
