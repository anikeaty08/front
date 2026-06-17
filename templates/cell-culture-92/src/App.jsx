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
            strokeWidth: 1.5
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
      

<aside className="w-20 bg-white border-r border-slate-100 flex flex-col items-center py-8 z-20 shrink-0">

<div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-sm mb-12">
<div className="grid grid-cols-2 gap-0.5">
<div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
</div>

<nav className="flex flex-col gap-6 w-full items-center flex-1">
<button className="relative w-12 h-12 flex items-center justify-center text-slate-900 group">
<div className="absolute inset-0 bg-slate-50 rounded-2xl scale-100 transition-transform"></div>
<i className="w-5 h-5 relative z-10" data-lucide="layout-dashboard"></i>
</button>
<button className="relative w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-900 group transition-colors">
<div className="absolute inset-0 bg-slate-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform"></div>
<i className="w-5 h-5 relative z-10" data-lucide="test-tubes"></i>
</button>
<button className="relative w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-900 group transition-colors">
<div className="absolute inset-0 bg-slate-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform"></div>
<i className="w-5 h-5 relative z-10" data-lucide="bar-chart-2"></i>
</button>
<button className="relative w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-900 group transition-colors">
<div className="absolute inset-0 bg-slate-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform"></div>
<i className="w-5 h-5 relative z-10" data-lucide="file-text"></i>
</button>
</nav>
<button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors mt-auto">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-white rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

<header className="h-24 px-10 flex items-center justify-between shrink-0 relative z-10">

<div className="flex items-center gap-2 bg-white rounded-full p-1.5 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
<button className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium transition-colors">Overview</button>
<button className="px-5 py-2 rounded-full text-slate-500 hover:text-slate-900 text-sm font-normal transition-colors">Analytics</button>
<button className="px-5 py-2 rounded-full text-slate-500 hover:text-slate-900 text-sm font-normal transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="activity"></i> Pulse
                </button>
<button className="px-5 py-2 rounded-full text-slate-500 hover:text-slate-900 text-sm font-normal transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="database"></i> Data
                </button>
</div>

<div className="flex items-center gap-6">

<div className="flex items-center bg-white rounded-full p-1.5 shadow-[0_2px_10px_rgb(0,0,0,0.02)] pl-3">
<div className="flex -space-x-2 mr-3">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden flex items-center justify-center"><i className="w-4 h-4 text-slate-400" data-lucide="user"></i></div>
<div className="w-8 h-8 rounded-full bg-teal-100 border-2 border-white overflow-hidden flex items-center justify-center"><i className="w-4 h-4 text-teal-600" data-lucide="user"></i></div>
<div className="w-8 h-8 rounded-full bg-slate-900 text-white border-2 border-white flex items-center justify-center text-xs font-medium">+2</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors">
<i className="w-4 h-4" data-lucide="share"></i> Shared
                    </button>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-teal-500 rounded-full border-2 border-white"></span>
</button>
<button className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="user"></i>
</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto px-10 pb-12 relative z-10">

<div className="flex items-end justify-between mb-8 mt-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div>
<div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
<i className="w-3.5 h-3.5" data-lucide="folder"></i> Batches <span className="mx-1">/</span> Process A
                        </div>
<h1 className="text-3xl font-medium tracking-tight text-slate-900">Batch 1245 Performance</h1>
</div>
</div>

<div className="flex items-center gap-3">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-colors">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
</button>
<div className="flex items-center bg-slate-900 rounded-full p-1 shadow-[0_4px_14px_rgb(0,0,0,0.1)] ml-2">
<button className="px-4 py-2 bg-slate-700/50 text-white rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4 text-slate-300" data-lucide="calendar"></i> Day 3
                        </button>
<button className="px-4 py-2 text-slate-400 hover:text-white rounded-full text-sm font-normal transition-colors">
                            Day 4
                        </button>
</div>
<button className="ml-2 px-5 py-2.5 bg-white border border-slate-200/60 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Add Note
                    </button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-4 bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-8 relative overflow-hidden flex flex-col justify-between min-h-[340px] border border-white group hover:shadow-[0_12px_50px_rgb(0,0,0,0.05)] transition-shadow duration-500">

<div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-gradient-to-br from-teal-300/20 to-cyan-300/10 blur-[60px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900">Daily Growth</h2>
<p className="text-sm text-slate-500 mt-0.5">24h overview</p>
</div>
<button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="mb-6">
<div className="text-sm text-slate-500 mb-2">TCD Change</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight text-slate-900">+1.45<span className="text-2xl text-slate-400 font-normal ml-1">e6</span></span>
<span className="px-2 py-1 rounded-md bg-teal-50 text-teal-600 text-xs font-medium tracking-wide">cells/mL</span>
</div>
</div>
</div>

<div className="relative z-10 mt-auto">
<div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-slate-100/50 shadow-sm grid grid-cols-2 gap-x-4 gap-y-5">

<div>
<div className="text-xs text-slate-500 mb-1.5 font-medium uppercase tracking-wider">Doubling</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>
<span className="text-sm font-medium text-slate-900">Achieved</span>
</div>
</div>

<div>
<div className="text-xs text-slate-500 mb-1.5 font-medium uppercase tracking-wider">Viability Δ</div>
<div className="flex items-center gap-1.5">
<span className="text-sm font-medium text-slate-900">-0.2%</span>
<i className="w-3.5 h-3.5 text-amber-500" data-lucide="trending-down"></i>
</div>
</div>

<div className="col-span-2 pt-4 border-t border-slate-200/50 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-teal-600" data-lucide="activity"></i>
</div>
<span className="text-sm text-slate-600">Culture Health</span>
</div>
<span className="text-sm font-medium text-teal-600 bg-teal-50/50 px-3 py-1 rounded-full border border-teal-100/50">Optimal</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-6 relative overflow-hidden flex flex-col group hover:shadow-[0_12px_50px_rgb(0,0,0,0.05)] transition-shadow duration-500">
<div className="flex justify-between items-start mb-6 z-10 relative">
<div>
<span className="text-sm font-medium text-slate-900">Total Cell Density</span>
<p className="text-sm text-slate-400 mt-0.5">Current absolute</p>
</div>
<div className="p-2 rounded-xl bg-slate-50 text-slate-400">
<i className="w-4 h-4" data-lucide="microscope"></i>
</div>
</div>
<div className="text-4xl font-medium tracking-tight text-slate-900 mb-1 z-10 relative">4.82<span className="text-xl text-slate-400 font-normal ml-1">e6</span></div>

<div className="mt-auto pt-6 flex items-end gap-2 h-16 opacity-70">
<div className="w-full bg-slate-100 rounded-t-md h-[30%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[45%]"></div>
<div className="w-full bg-slate-100 rounded-t-md h-[60%]"></div>
<div className="w-full bg-slate-200 rounded-t-md h-[80%]"></div>
<div className="w-full bg-slate-800 rounded-t-md h-[100%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded font-medium">Day 3</div>
</div>
</div>
</div>

<div className="bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-6 relative overflow-hidden flex flex-col group hover:shadow-[0_12px_50px_rgb(0,0,0,0.05)] transition-shadow duration-500">
<div className="flex justify-between items-start mb-6 z-10 relative">
<div>
<span className="text-sm font-medium text-slate-900">Viability</span>
<p className="text-sm text-slate-400 mt-0.5">Cell health ratio</p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
                                Target &gt;95%
                            </div>
</div>
<div className="flex items-baseline gap-3 mb-1 z-10 relative">
<span className="text-4xl font-medium tracking-tight text-slate-900">96.8<span className="text-2xl text-slate-400 font-normal">%</span></span>
<span className="flex items-center gap-0.5 text-sm font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="arrow-up"></i> 0.5%
                            </span>
</div>

<div className="mt-auto h-20 -mx-6 -mb-6 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,30 Q25,35 50,20 T100,5" fill="none" stroke="#2dd4bf" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0,30 Q25,35 50,20 T100,5 L100,40 L0,40 Z" fill="url(#viabilityGrad)" opacity="0.2"></path>
<defs>
<lineargradient id="viabilityGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2dd4bf"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-6 relative overflow-hidden flex flex-col group hover:shadow-[0_12px_50px_rgb(0,0,0,0.05)] transition-shadow duration-500">
<div className="flex justify-between items-start mb-6 z-10 relative">
<div>
<span className="text-sm font-medium text-slate-900">Lactate Peak</span>
<p className="text-sm text-slate-400 mt-0.5">Metabolic stress</p>
</div>
<div className="p-2 rounded-xl bg-cyan-50 text-cyan-500">
<i className="w-4 h-4" data-lucide="droplets"></i>
</div>
</div>
<div className="flex items-baseline gap-2 mb-1 z-10 relative">
<span className="text-4xl font-medium tracking-tight text-slate-900">1.38</span>
<span className="text-sm text-slate-400">g/L</span>
</div>

<div className="mt-auto pt-6 w-full">
<div className="flex justify-between text-[10px] text-slate-400 font-medium mb-1.5 px-1">
<span>0</span>
<span>1.0</span>
<span className="text-amber-500">2.0 (Limit)</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-cyan-400 rounded-full" style={{width: '65%'}}></div>

<div className="absolute top-0 bottom-0 left-[85%] w-[2px] bg-amber-300"></div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-8 bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-8 relative">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900">Metabolic Profile &amp; Growth</h2>
<p className="text-sm text-slate-400 mt-1">Multi-variable tracking over 5 days</p>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center bg-slate-50 p-1 rounded-full border border-slate-100/60">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium text-slate-700">
<span className="w-2 h-2 rounded-full bg-slate-800"></span> VCD
                                </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-slate-500 hover:text-slate-700 transition-colors">
<span className="w-2 h-2 rounded-full bg-cyan-400"></span> Lactate
                                </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-slate-500 hover:text-slate-700 transition-colors">
<span className="w-2 h-2 rounded-full bg-slate-300"></span> Glc
                                </button>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 transition-colors ml-2">
<i className="w-4 h-4" data-lucide="expand"></i>
</button>
</div>
</div>

<div className="relative w-full h-[280px] mt-4">

<div className="absolute top-[30%] left-[60%] bg-slate-800 text-white px-2.5 py-1 rounded-lg text-xs font-medium shadow-lg z-10 flex items-center gap-1.5">
                            4.82e6 <span className="text-teal-400">Doubling</span>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<pattern height="25%" id="grid" patternunits="userSpaceOnUse" width="20%">
<line stroke="#f1f5f9" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="0" y2="0"></line>
</pattern>
<lineargradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0f172a" stop-opacity="0.08"></stop>
<stop offset="100%" stop-color="#0f172a" stop-opacity="0"></stop>
</lineargradient>
</defs>

<rect fill="url(#grid)" height="100%" width="100%"></rect>

<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1" x1="20%" x2="20%" y1="0" y2="100%"></line>
<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1" x1="40%" x2="40%" y1="0" y2="100%"></line>
<line stroke="#cbd5e1" strokeWidth="1.5" x1="60%" x2="60%" y1="0" y2="100%"></line> 
<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1" x1="80%" x2="80%" y1="0" y2="100%"></line>

<path d="M0,80% Q10%,78% 20%,70% T40%,50% T60%,40% T80%,55% T100%,60%" fill="none" stroke="#22d3ee" strokeWidth="2.5"></path>

<path d="M0,95% Q10%,90% 20%,75% T40%,40% T60%,35% T80%,15% T100%,10%" fill="none" stroke="#0f172a" strokeWidth="3"></path>
<path d="M0,95% Q10%,90% 20%,75% T40%,40% T60%,35% T80%,15% T100%,10% L100%,100% L0,100% Z" fill="url(#areaGrad)"></path>

<circle cx="20%" cy="75%" fill="white" r="4" stroke="#0f172a" strokeWidth="2"></circle>
<circle cx="40%" cy="40%" fill="white" r="4" stroke="#0f172a" strokeWidth="2"></circle>
<circle className="shadow-sm" cx="60%" cy="35%" fill="#0f172a" r="5" stroke="white" strokeWidth="2"></circle> 
</svg>

<div className="absolute left-0 right-0 -bottom-6 flex justify-between text-xs text-slate-400 font-medium">
<span>Day 0</span>
<span className="pl-4">Day 1</span>
<span className="pl-4">Day 2</span>
<span className="pl-4 text-slate-800 font-semibold bg-slate-100 px-2 py-0.5 rounded-md">Day 3</span>
<span className="pl-4">Day 4</span>
<span>Day 5</span>
</div>
</div>
</div>

<div className="xl:col-span-4 bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-medium tracking-tight text-slate-900">Live Insights</h2>
<span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Analyzing
                        </span>
</div>
<div className="space-y-4 flex-1">

<div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100/50 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
<i className="w-4 h-4 text-amber-500" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Metabolic Shift Detected</h3>
<p className="text-sm text-slate-500 leading-relaxed">Lactate consumption phase starting earlier than predicted. Suggesting a 10% reduction in feed volume.</p>
</div>
</div>
<div className="mt-4 flex gap-2 pl-11">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm">Simulate</button>
<button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm">Apply Adjust</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer flex gap-3">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-teal-600" data-lucide="check"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-0.5">Viability Optimal</h3>
<p className="text-sm text-slate-500">Tracking top 5% of historical runs.</p>
</div>
</div>
</div>
</div>

<div className="xl:col-span-12 bg-white rounded-[28px] shadow-[0_8px_40px_rgb(0,0,0,0.03)] p-8">
<div className="flex items-end justify-between border-b border-slate-100 pb-5 mb-6">
<div className="flex items-center gap-6">

<button className="text-base font-medium text-slate-900 border-b-2 border-slate-900 pb-5 -mb-[21px] flex items-center gap-2">
                                Strain A (CHO-K1) <span className="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-normal text-slate-500">Active</span>
</button>
<button className="text-base font-normal text-slate-400 hover:text-slate-600 transition-colors pb-5 -mb-[21px]">
                                Strain B (DG44)
                            </button>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors">
                            View Full Report <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="w-full">

<div className="grid grid-cols-5 gap-4 px-4 pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
<div className="col-span-2">Feeding Strategy</div>
<div>Peak Density</div>
<div>Predicted Yield</div>
<div>Efficiency Score</div>
</div>

<div className="grid grid-cols-5 gap-4 px-4 py-4 bg-slate-50/80 rounded-2xl items-center border border-slate-100 relative group">

<div className="absolute left-0 top-3 bottom-3 w-1 bg-cyan-400 rounded-r-full"></div>
<div className="col-span-2 flex items-center gap-3 pl-2">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-700 font-medium text-sm">
                                    1
                                </div>
<div>
<div className="text-sm font-medium text-slate-900">Dynamic Fed-Batch v2</div>
<div className="text-xs text-slate-500 mt-0.5">Current run protocol</div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="text-sm font-medium text-slate-900">14.2e6 <span className="text-xs font-normal text-slate-400">c/mL</span></div>

<div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 rounded-full w-[90%]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">3.8 g/L</span>
<span className="text-[10px] font-medium text-teal-700 bg-teal-100/80 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<i className="w-2.5 h-2.5" data-lucide="arrow-up"></i> 12%
                                </span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-900">94</span>
<div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full w-[94%]"></div>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-4 px-4 py-4 items-center border-b border-slate-50 group hover:bg-slate-50/50 transition-colors rounded-2xl">
<div className="col-span-2 flex items-center gap-3 pl-2">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-500 font-medium text-sm">
                                    2
                                </div>
<div>
<div className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Standard Bolus Feed</div>
<div className="text-xs text-slate-400 mt-0.5">Baseline protocol</div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="text-sm font-medium text-slate-700">12.5e6 <span className="text-xs font-normal text-slate-400">c/mL</span></div>
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full w-[75%]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-700">3.2 g/L</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-700">78</span>
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full w-[78%]"></div>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-4 px-4 py-4 items-center group hover:bg-slate-50/50 transition-colors rounded-2xl">
<div className="col-span-2 flex items-center gap-3 pl-2">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-500 font-medium text-sm">
                                    3
                                </div>
<div>
<div className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Continuous Perfusion</div>
<div className="text-xs text-slate-400 mt-0.5">Experimental phase</div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="text-sm font-medium text-slate-700">18.1e6 <span className="text-xs font-normal text-slate-400">c/mL</span></div>
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400/60 rounded-full w-[100%]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-700">4.1 g/L</span>
<span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                    High Cost
                                </span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-700">82</span>
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full w-[82%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
