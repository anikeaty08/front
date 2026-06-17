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
      

<aside className="w-20 bg-white border-r border-gray-100/50 flex flex-col items-center py-8 z-30 flex-shrink-0">

<div className="mb-12">
<div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
</div>

<nav className="flex flex-col gap-8 w-full items-center">

<button className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center transition-all">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="layers"></i>
</button>
</nav>

<div className="mt-auto flex flex-col gap-6 items-center">
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden ring-2 ring-white">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-y-auto relative scroll-smooth">

<header className="pt-8 pb-4 px-12 flex items-center justify-between bg-[#F8F9FB] z-20">

<div className="p-1 bg-white rounded-full shadow-sm border border-gray-100 flex items-center gap-1">
<button className="px-6 py-2.5 bg-slate-900 rounded-full text-xs font-medium text-white shadow-sm transition-all">
                    AI Predictive Strategy
                </button>
<button className="px-6 py-2.5 rounded-full text-xs font-medium text-gray-400 hover:text-slate-600 transition-colors">
                    My Campaigns
                </button>
<button className="px-6 py-2.5 rounded-full text-xs font-medium text-gray-400 hover:text-slate-600 transition-colors">
                    Creative Build
                </button>
</div>

<div className="flex items-center gap-4">
<div className="text-right mr-2 hidden xl:block">
<p className="text-[10px] font-semibold text-slate-800 uppercase tracking-wide">Status</p>
<p className="text-xs text-emerald-500 font-medium flex items-center justify-end gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live
                    </p>
</div>
<button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-slate-900 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-slate-900 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
</div>
</header>
<div className="flex-1 px-16 py-6 w-full max-w-[1600px] mx-auto flex flex-col">

<div className="text-center w-full mb-10 relative fade-up">
<h1 className="text-[42px] font-light text-slate-900 tracking-tight leading-tight">
                    AI PREDICTIVE STRATEGY
                </h1>
<p className="text-sm text-gray-400 font-light mt-2 mb-8 tracking-wide">
                    Real-time campaign performance &amp; predictive analytics
                </p>

<div className="flex items-center justify-between w-full max-w-5xl mx-auto relative h-10">

<div className="flex-1"></div>

<div className="flex items-center gap-3 pl-1.5 pr-5 py-1.5 bg-white rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 absolute left-1/2 -translate-x-1/2">
<div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-white">
<svg className="w-3.5 h-3.5" fill="currentColor" viewbox="0 0 24 24"><path d="M21.5 5.5c-2.5 1-6 2.5-9 3.5-3.5 1-7 1.5-10.5 1.5 1.5-1.5 3-3.5 5.5-4.5 3.5-1.5 8-2 14-.5z"></path></svg>
</div>
<span className="text-xs font-semibold text-slate-800 tracking-tight">Nike, Inc</span>
<i className="w-3 h-3 text-gray-400 ml-1" data-lucide="chevron-down"></i>
</div>

<div className="flex-1 flex justify-end gap-3">
<button className="px-4 py-1.5 bg-white border border-gray-200 text-slate-600 rounded-full text-[11px] font-medium flex items-center gap-2 hover:border-gray-300 transition-colors">
                            Last Month <i className="w-3 h-3 text-gray-400" data-lucide="x"></i>
</button>
<button className="px-4 py-1.5 bg-white border border-gray-200 text-slate-600 rounded-full text-[11px] font-medium flex items-center gap-2 hover:border-gray-300 transition-colors">
                            Global <i className="w-3 h-3 text-gray-400" data-lucide="x"></i>
</button>
</div>
</div>
</div>

<div className="relative w-full flex-1 min-h-[400px] mb-8 fade-up delay-100">

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="relative w-[600px] h-[400px] flex items-center justify-center">

<div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-emerald-100/40 border border-emerald-100/50 backdrop-blur-[1px] flex items-center justify-center z-10 transition-transform hover:scale-105 duration-700 ease-out">
<div className="text-center">
<span className="block text-3xl font-light text-slate-800 tracking-tighter">101,785</span>
<span className="block text-[10px] font-semibold uppercase tracking-widest text-emerald-600/70 mt-1">Impressions</span>
</div>

<div className="absolute top-16 left-16 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"></div>
</div>

<div className="absolute left-1/2 top-1/2 translate-x-[20%] -translate-y-[60%] w-[260px] h-[260px] rounded-full border border-slate-200 pattern-dots opacity-60 flex items-center justify-center z-0">
<div className="text-center bg-[#F8F9FB]/80 px-2 py-1 rounded backdrop-blur-sm">
<span className="block text-2xl font-light text-slate-700 tracking-tighter">50,784</span>
<span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-1">Uniques</span>
</div>
</div>

<div className="absolute left-1/2 top-1/2 translate-x-[15%] translate-y-[30%] w-[200px] h-[200px] rounded-full bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] border border-white z-20 flex items-center justify-center transition-transform hover:scale-105 duration-500">
<div className="text-center">
<span className="block text-2xl font-light text-slate-800 tracking-tighter">345</span>
<span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-1">Clicks</span>
</div>

<div className="absolute bottom-10 right-8 w-2 h-2 bg-emerald-400 rounded-full"></div>
</div>

<div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-60"></div>
<div className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-60"></div>
</div>
</div>

<div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 bg-white rounded-2xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 z-20">
<div className="flex justify-between items-center mb-5">
<h3 className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider">Top Locations</h3>
<div className="p-1 bg-emerald-50 rounded text-emerald-500">
<i className="w-3 h-3" data-lucide="map"></i>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-800"></div>
<span className="text-xs font-medium text-slate-600">New York</span>
</div>
<span className="text-xs font-semibold text-slate-900">47%</span>
</div>
<div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full w-[47%] bg-slate-800"></div>
</div>
<div className="flex items-center justify-between group pt-1">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium text-slate-600">London</span>
</div>
<span className="text-xs font-semibold text-slate-900">20%</span>
</div>
<div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full w-[20%] bg-emerald-400"></div>
</div>
<div className="flex items-center justify-between group pt-1">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-600">Tokyo</span>
</div>
<span className="text-xs font-semibold text-slate-900">7%</span>
</div>
<div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full w-[7%] bg-slate-300"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-6 w-full h-48 fade-up delay-200">

<div className="bg-white rounded-2xl p-5 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
<div className="flex justify-between items-start">
<h3 className="text-[11px] font-medium text-gray-500">Creative Size</h3>
<span className="text-[10px] text-emerald-500 font-medium">+12.4%</span>
</div>
<div className="mb-2">
<div className="text-xl font-medium text-slate-900 tracking-tight">17,786</div>
</div>

<div className="h-16 w-full relative overflow-hidden -mx-1">
<svg className="w-[105%] h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,40 L0,20 Q25,5 50,25 T100,15 L100,40 Z" fill="#D1FAE5"></path>
<path d="M0,20 Q25,5 50,25 T100,15" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-2xl p-5 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
<div className="flex justify-between items-start">
<h3 className="text-[11px] font-medium text-gray-500">Impressions vs Clicks</h3>
<i className="w-3 h-3 text-gray-300" data-lucide="trending-up"></i>
</div>
<div className="mb-2">
<div className="text-xl font-medium text-slate-900 tracking-tight">2.4M</div>
</div>

<div className="h-16 w-full relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">

<line stroke="#f1f5f9" stroke-dasharray="2,2" strokeWidth="1" x1="0" x2="100" y1="20" y2="20"></line>

<path d="M0,30 L20,35 L40,15 L60,25 L80,10 L100,20" fill="none" stroke="#CBD5E1" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M0,35 L20,30 L40,25 L60,15 L80,20 L100,5" fill="none" stroke="#10B981" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-2xl p-5 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="text-[11px] font-medium text-gray-500">Gender Distribution</h3>
</div>
<div className="flex-1 flex flex-col justify-center gap-6">

<div>
<div className="flex justify-between text-[10px] mb-1.5">
<span className="text-slate-500">Male</span>
<span className="font-semibold text-slate-800">62%</span>
</div>
<div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 w-[62%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[10px] mb-1.5">
<span className="text-slate-500">Female</span>
<span className="font-semibold text-slate-800">38%</span>
</div>
<div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[38%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
<div className="flex justify-between items-start">
<h3 className="text-[11px] font-medium text-gray-500">Age Distribution</h3>
<span className="text-[10px] text-gray-400">25-34</span>
</div>
<div className="mb-2">
<div className="text-xl font-medium text-slate-900 tracking-tight">Top: 25-34</div>
</div>

<div className="h-16 w-full relative overflow-hidden -mx-2">
<svg className="w-[110%] h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="ageGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#34D399', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#34D399', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,40 L10,35 L30,38 L50,10 L70,25 L90,30 L100,40 Z" fill="url(#ageGrad)"></path>
<path d="M0,40 L10,35 L30,38 L50,10 L70,25 L90,30 L100,40" fill="none" stroke="#10B981" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
