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
      

<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
        body { font-family: 'Inter', sans-serif; }
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }
        
        /* Custom Range Slider */
        input[type=range] {
            -webkit-appearance: none;
            background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: #e2e8f0;
            border: 2px solid #0f172a;
            margin-top: -6px;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.1);
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #1e293b;
            border-radius: 2px;
        }
        
        /* Grid Background Pattern */
        .bg-grid {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
    </style>

<body className="bg-slate-950 text-slate-400 font-normal antialiased selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden flex h-screen">

<aside className="w-64 border-r border-slate-800/60 bg-slate-950 flex flex-col justify-between hidden md:flex z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-800/60">
<div className="flex items-center gap-2 text-slate-100 tracking-tight font-medium">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-xs text-white font-bold">E</div>
                    ESKOM<span className="text-slate-500">INTEL</span>
</div>
</div>
<nav className="p-4 space-y-1">
<div className="px-2 pb-2 text-xs font-medium text-slate-600 uppercase tracking-widest">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-200 bg-slate-900/50 rounded-md border border-slate-800 shadow-sm group transition-all" href="#">
<iconify-icon className="text-indigo-400" icon="solar:widget-2-linear" width="18"></iconify-icon>
<span>Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300" icon="solar:chart-square-linear" width="18"></iconify-icon>
<span>Forecasts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300" icon="solar:bolt-circle-linear" width="18"></iconify-icon>
<span>Grid Health</span>
<span className="ml-auto text-xs bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded border border-rose-500/20">Stage 2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300" icon="solar:leaf-linear" width="18"></iconify-icon>
<span>Efficiency</span>
</a>
<div className="mt-8 px-2 pb-2 text-xs font-medium text-slate-600 uppercase tracking-widest">Regional</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Gauteng</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm hover:text-slate-200 hover:bg-slate-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-500 group-hover:text-slate-300" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Western Cape</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-slate-800/60">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-900/50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">JD</div>
<div className="flex flex-col">
<span className="text-sm text-slate-200 font-medium">J. Doe</span>
<span className="text-xs text-slate-600">Grid Analyst</span>
</div>
<iconify-icon className="ml-auto text-slate-600" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-grid">
<div className="absolute inset-0 bg-slate-950/80 pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none z-0"></div>

<header className="h-16 border-b border-slate-800/60 flex items-center justify-between px-8 relative z-10 bg-slate-950/50 backdrop-blur-sm">
<div className="flex items-center gap-4">
<span className="text-slate-500">Dashboards</span>
<span className="text-slate-700">/</span>
<span className="text-slate-200 font-medium">National Consumption</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-slate-300 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-slate-900/50 border border-slate-800 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 placeholder:text-slate-600 transition-all w-64" placeholder="Search grid data..." type="text"/>
</div>
<button className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all relative">
<div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative z-10">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl text-slate-100 font-medium tracking-tight">Grid Performance</h1>
<p className="text-sm text-slate-500 mt-1">Real-time monitoring and AI-driven load forecasting.</p>
</div>
<div className="flex items-center gap-3">
<div className="text-xs text-slate-500 font-medium mr-2">LAST UPDATED: 14:02 PM</div>
<button className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded hover:bg-slate-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export
                        </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 border border-indigo-500 rounded shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> New Scenario
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700/80 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon className="mr-1" icon="solar:trending-down-linear"></iconify-icon> -2.4%
                            </span>
</div>
<div className="text-3xl font-medium text-slate-100 tracking-tight">28,450 <span className="text-lg text-slate-500 font-normal">MW</span></div>
<div className="text-sm text-slate-500 mt-1">Current Demand</div>
</div>

<div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700/80 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-amber-400 transition-colors">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                                Warning
                            </span>
</div>
<div className="text-3xl font-medium text-slate-100 tracking-tight">Stage 2</div>
<div className="text-sm text-slate-500 mt-1">Load Shedding Status</div>
</div>

<div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700/80 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs text-slate-400 bg-slate-800/50 px-1.5 py-0.5 rounded border border-slate-700/50">
                                +120 MW
                            </span>
</div>
<div className="text-3xl font-medium text-slate-100 tracking-tight">98.2%</div>
<div className="text-sm text-slate-500 mt-1">Forecast Accuracy</div>
</div>

<div className="p-5 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700/80 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-rose-400 transition-colors">
<iconify-icon icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                                High Load
                            </span>
</div>
<div className="text-3xl font-medium text-slate-100 tracking-tight">18:00</div>
<div className="text-sm text-slate-500 mt-1">Predicted Peak Time</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-base text-slate-200 font-medium">Load Forecast (7-Day)</h3>
<p className="text-xs text-slate-500">Actual consumption vs AI predicted model</p>
</div>

<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
<span className="text-slate-400">Predicted</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-500"></div>
<span className="text-slate-400">Actual</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-0.5 rounded-full border-t border-dashed border-slate-600 w-4"></div>
<span className="text-slate-400">Capacity</span>
</div>
</div>
</div>

<div className="h-64 w-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-600 font-mono">
<div className="border-b border-slate-800/50 w-full pb-1 relative"><span className="absolute -top-3 left-0">35k</span></div>
<div className="border-b border-slate-800/50 w-full pb-1 relative"><span className="absolute -top-3 left-0">30k</span></div>
<div className="border-b border-slate-800/50 w-full pb-1 relative"><span className="absolute -top-3 left-0">25k</span></div>
<div className="border-b border-slate-800/50 w-full pb-1 relative"><span className="absolute -top-3 left-0">20k</span></div>
<div className="border-b border-slate-800/50 w-full pb-1 relative"><span className="absolute -top-3 left-0">15k</span></div>
</div>

<svg className="absolute inset-0 w-full h-full pt-2 pl-8 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">

<line opacity="0.5" stroke="#475569" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="15" y2="15"></line>

<path className="drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]" d="M0,60 C10,55 15,40 20,35 C25,30 30,50 40,55 C50,60 55,25 60,20 C65,15 70,30 80,35 C90,40 95,25 100,30" fill="none" stroke="#6366f1" strokeWidth="0.8"></path>

<path d="M0,62 L10,58 L20,38 L30,52 L40,58 L50,62 L55,28 L60,22 L65,18 L70,32 L80,38 L90,42 L100,35" fill="none" opacity="0.6" stroke="#94a3b8" strokeWidth="0.8"></path>

<path d="M0,60 C10,55 15,40 20,35 C25,30 30,50 40,55 C50,60 55,25 60,20 C65,15 70,30 80,35 C90,40 95,25 100,30 V100 H0 Z" fill="url(#gradient)" opacity="0.1"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-1/4 left-[60%] w-px h-3/4 bg-slate-600/50"></div>
<div className="absolute top-[15%] left-[60%] -translate-x-1/2 bg-slate-900 border border-slate-700 p-2 rounded shadow-xl z-10">
<div className="text-xs text-slate-400 mb-1">Thu, 18:00</div>
<div className="flex items-center gap-2 text-sm font-medium text-white">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> 32,150 MW
                                </div>
</div>
</div>

<div className="flex justify-between pl-8 pt-4 text-xs text-slate-500 font-mono">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="space-y-6">

<div className="p-6 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
<h3 className="text-base text-slate-200 font-medium mb-4">Regional Load</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Gauteng (Industrial)</span>
<span className="text-rose-400">88%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5">
<div className="bg-rose-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Western Cape</span>
<span className="text-emerald-400">42%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">KwaZulu-Natal</span>
<span className="text-amber-400">65%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-800">
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Load Shifting</h4>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-300">Disable Geysers (Remote)</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
</div>
</div>
</div>

<div className="p-6 rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-amber-400" icon="solar:bell-bing-linear"></iconify-icon>
<h3 className="text-base text-slate-200 font-medium">Active Alerts</h3>
</div>
<div className="space-y-3">
<div className="p-3 rounded border border-slate-800 bg-slate-950/50 flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
<div>
<p className="text-sm text-slate-300 leading-tight">Substation Alpha-4 Overload</p>
<p className="text-xs text-slate-500 mt-1">Temp exceeds 85°C. Maintenance required.</p>
</div>
</div>
<div className="p-3 rounded border border-slate-800 bg-slate-950/50 flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
<div>
<p className="text-sm text-slate-300 leading-tight">Forecast Deviation</p>
<p className="text-xs text-slate-500 mt-1">Actual usage 5% lower than expected due to weather.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/40 backdrop-blur-sm">
<div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
<h3 className="text-sm font-medium text-slate-200">Consumption by Sector</h3>
<div className="flex gap-2">
<button className="p-1 text-slate-500 hover:text-slate-300 transition-colors"><iconify-icon icon="solar:filter-linear" width="16"></iconify-icon></button>
<button className="p-1 text-slate-500 hover:text-slate-300 transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-slate-950/50 text-xs uppercase font-medium text-slate-500">
<tr>
<th className="px-6 py-3 tracking-wider">Sector</th>
<th className="px-6 py-3 tracking-wider">Usage (MW)</th>
<th className="px-6 py-3 tracking-wider">Efficiency Score</th>
<th className="px-6 py-3 tracking-wider">Status</th>
<th className="px-6 py-3 tracking-wider text-right">Trend</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr className="hover:bg-slate-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-200 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:buildings-2-linear" width="16"></iconify-icon>
</div>
                                        Industrial Mining
                                    </td>
<td className="px-6 py-4 font-mono">12,450</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 bg-slate-800 rounded-full h-1">
<div className="bg-amber-500 h-1 rounded-full" style={{width: '60%'}}></div>
</div>
<span className="text-xs">C+</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                            Stable
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<iconify-icon className="text-indigo-400" icon="solar:graph-up-linear" width="20"></iconify-icon>
</td>
</tr>
<tr className="hover:bg-slate-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-200 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:home-linear" width="16"></iconify-icon>
</div>
                                        Residential Metro
                                    </td>
<td className="px-6 py-4 font-mono">8,200</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 bg-slate-800 rounded-full h-1">
<div className="bg-emerald-500 h-1 rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-xs">A</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                            Peaking
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<iconify-icon className="text-indigo-400" icon="solar:graph-up-linear" width="20"></iconify-icon>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</body>

    </>
  );
}
