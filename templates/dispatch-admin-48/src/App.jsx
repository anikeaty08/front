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
      

<aside className="w-18 flex-none bg-white border-r border-gray-200 flex flex-col items-center py-5 gap-6 z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
<div className="h-9 w-9 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center rounded-xl font-bold tracking-tighter text-sm shadow-emerald-200 shadow-lg">
            DS
        </div>
<nav className="flex flex-col gap-3 w-full px-3">
<button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all rounded-xl group relative">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2.5 text-emerald-700 bg-emerald-50 rounded-xl shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)] relative">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="absolute right-2 top-2 w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
</button>
<button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all rounded-xl">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all rounded-xl">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all rounded-xl">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</nav>
<div className="mt-auto flex flex-col gap-4 items-center px-3 mb-2">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</div>
<img alt="Admin" className="w-9 h-9 rounded-full ring-2 ring-gray-100 p-0.5 object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
</aside>

<aside className="w-[420px] flex-none flex flex-col bg-white border-r border-gray-200 z-20 hidden lg:flex shadow-[4px_0_12px_rgba(0,0,0,0.01)]">

<div className="px-5 py-5 border-b border-gray-100">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<h2 className="font-semibold text-base tracking-tight text-slate-900">Dispatch Queue</h2>
<span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-gray-200">24</span>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 rounded-md border border-gray-200 shadow-sm transition-colors">
<iconify-icon icon="solar:sort-vertical-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 rounded-md border border-gray-200 shadow-sm transition-colors">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="relative group">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-emerald-600 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-gray-400" placeholder="Search trip ID, driver, vin..." type="text"/>
<div className="absolute right-2 top-2 text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">⌘K</div>
</div>
</div>

<div className="flex items-center gap-4 px-5 border-b border-gray-100 text-xs font-medium text-gray-500 overflow-x-auto no-scrollbar">
<button className="py-3 text-emerald-700 border-b-2 border-emerald-600 whitespace-nowrap">Active (8)</button>
<button className="py-3 hover:text-gray-800 transition-colors whitespace-nowrap">Pending (4)</button>
<button className="py-3 hover:text-gray-800 transition-colors whitespace-nowrap">Completed (124)</button>
<button className="py-3 hover:text-gray-800 transition-colors whitespace-nowrap">Issues <span className="text-red-500 bg-red-50 px-1 rounded ml-1">1</span></button>
</div>

<div className="flex-1 overflow-y-auto">

<div className="p-4 border-l-[3px] border-emerald-600 bg-emerald-50/30 cursor-pointer group hover:bg-emerald-50/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex flex-col">
<span className="font-semibold text-xs text-slate-900 flex items-center gap-1.5">
                            TRIP-CC9289 
                            <iconify-icon className="text-gray-300 hover:text-emerald-600 cursor-copy" icon="solar:copy-linear" width="10"></iconify-icon>
</span>
<span className="text-[10px] text-gray-500 font-mono mt-0.5">Business • Instant</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
<span className="w-1 h-1 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                        Completed
                    </span>
</div>
<div className="relative pl-3 border-l border-emerald-200/50 space-y-3 my-3">
<div className="relative">
<div className="absolute -left-[16.5px] top-1 w-2 h-2 rounded-full border border-emerald-600 bg-white"></div>
<p className="text-xs text-slate-700 truncate font-medium">Grand Hyatt, 3rd Avenue</p>
<p className="text-[10px] text-gray-400">15:46</p>
</div>
<div className="relative">
<div className="absolute -left-[16.5px] top-1 w-2 h-2 rounded-full bg-emerald-600"></div>
<p className="text-xs text-slate-700 truncate font-medium">Financial District, Tower 2</p>
<p className="text-[10px] text-gray-400">17:31</p>
</div>
</div>
<div className="flex justify-between items-center pt-2 border-t border-emerald-100">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/100?img=11"/>
<span className="text-xs text-gray-600">Marcus R.</span>
</div>
<div className="text-right">
<span className="font-semibold text-slate-900 text-xs">$794.74</span>
</div>
</div>
</div>

<div className="p-4 border-l-[3px] border-transparent hover:bg-gray-50 cursor-pointer border-b border-gray-50 transition-all group">
<div className="flex justify-between items-start mb-2">
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-700 group-hover:text-emerald-800 transition-colors">TRIP-XY9988</span>
<span className="text-[10px] text-gray-400 font-mono mt-0.5">Standard • Scheduled</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        En Route
                    </span>
</div>
<div className="relative pl-3 border-l border-dashed border-gray-200 space-y-3 my-3">
<div className="relative">
<div className="absolute -left-[16.5px] top-1 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
<p className="text-xs text-gray-500 truncate">North Station Terminal</p>
</div>
</div>
<div className="flex justify-between items-center pt-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-500">JD</div>
<span className="text-xs text-gray-400">John D.</span>
</div>
<span className="font-medium text-gray-400 text-xs">--</span>
</div>
</div>

<div className="p-4 border-l-[3px] border-transparent hover:bg-gray-50 cursor-pointer border-b border-gray-50 transition-all">
<div className="flex justify-between items-start mb-2">
<div className="flex flex-col">
<span className="font-medium text-xs text-slate-700">TRIP-AB1023</span>
<span className="text-[10px] text-gray-400 font-mono mt-0.5">Premium • Instant</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                        Cancelled
                    </span>
</div>
<div className="flex items-center gap-2 text-gray-400 text-[10px] mt-2">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span>Cancelled by driver at 14:20</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-white/50 overflow-hidden relative">

<header className="h-16 px-6 flex items-center justify-between bg-white border-b border-gray-200 flex-none z-20 shadow-sm">
<div className="flex items-center gap-4">
<button className="lg:hidden text-gray-500 hover:text-emerald-600">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="flex flex-col">
<div className="flex items-center gap-3">
<h1 className="text-lg font-bold tracking-tight text-slate-900">TRIP-CC9289</h1>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm">
<iconify-icon className="mr-1" icon="solar:check-circle-bold" width="12"></iconify-icon> Completed
                        </span>
<div className="h-4 w-px bg-gray-200 mx-1"></div>
<span className="text-xs text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:server-square-linear" width="12"></iconify-icon> Server US-East-1
                         </span>
</div>
<div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium mt-0.5">
<span className="hover:text-emerald-600 cursor-pointer transition-colors">Request ID: #81b9...bda3</span>
<span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
<span>Jan 15, 2026 • 15:46:32 UTC</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center bg-gray-50 p-0.5 rounded-lg border border-gray-200 mr-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white shadow-sm rounded-md border border-gray-200 transition-all">Overview</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-emerald-600 transition-all">Logs</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-emerald-600 transition-all">Timeline</button>
</div>
<button className="px-3 py-2 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="14"></iconify-icon>
                    Invoice
                </button>
<button className="px-3 py-2 text-xs font-medium text-white bg-emerald-600 border border-emerald-700 rounded-lg hover:bg-emerald-700 shadow-sm shadow-emerald-100 transition-all flex items-center gap-2">
<iconify-icon icon="solar:restart-square-linear" width="14"></iconify-icon>
                    Process Refund
                </button>
<button className="p-2 text-gray-400 hover:text-emerald-600 border border-transparent hover:bg-emerald-50 rounded-lg transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
<div className="max-w-[1600px] mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="absolute right-0 top-0 h-full w-1 bg-emerald-500"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2 text-gray-500">
<div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md">
<iconify-icon icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Net Fare</span>
</div>
</div>
<div className="text-2xl font-bold tracking-tight text-slate-900">$794.74</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +12.5%
                            </span>
<span className="text-[10px] text-gray-400">vs avg route</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2 text-gray-500">
<div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
<iconify-icon icon="solar:map-arrow-up-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Distance</span>
</div>
</div>
<div className="text-2xl font-bold tracking-tight text-slate-900">3.72 <span className="text-sm font-normal text-gray-400">km</span></div>
<div className="w-full bg-gray-100 rounded-full h-1 mt-3">
<div className="bg-blue-500 h-1 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2 text-gray-500">
<div className="p-1.5 bg-amber-50 text-amber-600 rounded-md">
<iconify-icon icon="solar:stopwatch-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Duration</span>
</div>
</div>
<div className="text-2xl font-bold tracking-tight text-slate-900">1h 44m</div>
<div className="flex items-center justify-between mt-2 text-[10px] text-gray-400">
<span>Est: 1h 40m</span>
<span className="text-amber-600 font-medium">+4m delay</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2 text-gray-500">
<div className="p-1.5 bg-purple-50 text-purple-600 rounded-md">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium">Trust Score</span>
</div>
<span className="text-[10px] bg-green-100 text-green-700 px-1.5 rounded font-medium">Low Risk</span>
</div>
<div className="text-2xl font-bold tracking-tight text-slate-900">98<span className="text-sm font-normal text-gray-400">/100</span></div>
<div className="text-[10px] text-gray-400 mt-2">Verified device • Matches history</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden relative h-[360px] w-full shadow-sm">
<div className="absolute inset-0 bg-gray-50 map-grid"></div>

<div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
<button className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm text-gray-500 hover:text-emerald-600"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
<button className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm text-gray-500 hover:text-emerald-600"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
</div>
<div className="absolute top-4 left-4 flex gap-2 z-10">
<div className="bg-white/90 backdrop-blur border border-gray-200 rounded-lg px-3 py-2 text-xs shadow-sm flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-slate-700 font-medium">Live Replay Available</span>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">

<path d="M0 100 H 1000 M0 200 H 1000 M0 300 H 1000" stroke="rgba(0,0,0,0.03)" strokeWidth="1"></path>
<path d="M100 0 V 400 M300 0 V 400 M500 0 V 400 M700 0 V 400" stroke="rgba(0,0,0,0.03)" strokeWidth="1"></path>

<path d="M120 280 C 200 280, 250 180, 450 150 S 700 120, 800 80" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeLinecap="round" strokeWidth="8"></path>

<path d="M120 280 C 200 280, 250 180, 450 150 S 700 120, 800 80" fill="none" stroke="#059669" stroke-dasharray="800" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="120" cy="280" fill="white" r="6" stroke="#059669" strokeWidth="3"></circle>
<circle cx="120" cy="280" fill="#059669" r="2"></circle>

<circle cx="800" cy="80" fill="#059669" r="6" stroke="white" strokeWidth="2"></circle>
</svg>

<div className="absolute bottom-6 left-6 right-6 md:w-80 bg-white rounded-lg shadow-lg border border-gray-100 p-3 z-10 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:sedan-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-slate-800">Toyota Camry • GRE-421</div>
<div className="text-[10px] text-gray-500">Telemetry: 42 km/h • Fuel 78%</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-slate-900">Trip Audit Log</h3>
<button className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">Download CSV</button>
</div>
<div className="relative pl-2 space-y-0">

<div className="absolute left-[19px] top-2 bottom-8 w-0.5 bg-gray-100"></div>

<div className="relative flex gap-5 pb-8 group">
<div className="w-6 h-6 rounded-full bg-white border-2 border-emerald-500 z-10 flex-none flex items-center justify-center shadow-[0_0_0_4px_white]">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-4 items-start">
<div className="sm:col-span-2">
<p className="text-xs font-bold text-slate-900 mb-0.5">Pickup Confirmed</p>
<p className="text-xs text-gray-500">Grand Hyatt, 3rd Avenue</p>
</div>
<div className="sm:col-span-2">
<div className="flex items-center gap-2 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded w-fit border border-gray-100">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Lat: 33.5201, Lng: 36.3120
                                            </div>
</div>
<div className="text-right">
<span className="text-xs font-mono text-slate-600 bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-700">15:46:39</span>
</div>
</div>
</div>

<div className="relative flex gap-5 pb-8 group">
<div className="w-6 h-6 rounded-full bg-white border border-gray-300 z-10 flex-none flex items-center justify-center shadow-[0_0_0_4px_white]">
<iconify-icon className="text-gray-400" icon="solar:route-linear" width="12"></iconify-icon>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
<div className="sm:col-span-4">
<p className="text-xs font-medium text-slate-700">Route Deviated (Traffic Avoidance)</p>
<p className="text-[10px] text-gray-400 mt-0.5">System auto-approved route change based on live traffic data.</p>
</div>
<div className="text-right">
<span className="text-xs font-mono text-gray-400">16:12:05</span>
</div>
</div>
</div>

<div className="relative flex gap-5 group">
<div className="w-6 h-6 rounded-full bg-emerald-600 border-2 border-emerald-600 z-10 flex-none flex items-center justify-center shadow-[0_0_0_4px_white]">
<iconify-icon className="text-white" icon="solar:flag-linear" width="12"></iconify-icon>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-4 items-start">
<div className="sm:col-span-2">
<p className="text-xs font-bold text-slate-900 mb-0.5">Trip Completed</p>
<p className="text-xs text-gray-500">Financial District, Tower 2</p>
</div>
<div className="sm:col-span-2">
<div className="flex items-center gap-2 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded w-fit border border-gray-100">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Lat: 33.7910, Lng: 36.3940
                                            </div>
</div>
<div className="text-right">
<span className="text-xs font-mono text-slate-600 bg-gray-100 px-1.5 py-0.5 rounded">17:31:51</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider">Assigned Driver</h3>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</div>
<div className="p-5">
<div className="flex items-start gap-4 mb-5">
<img alt="Driver" className="w-14 h-14 rounded-lg border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=11"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-slate-900 truncate">Marcus Reed</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">Top Rated</span>
<span className="text-[10px] text-gray-500 font-mono">ID: DRV-8821</span>
</div>
<div className="flex items-center gap-1 mt-2 text-xs text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="font-bold text-slate-900">4.96</span>
<span className="text-gray-400 font-normal">(1,204 rides)</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<button className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon> Call
                                    </button>
<button className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon> Message
                                    </button>
</div>
<div className="bg-slate-900 rounded-lg p-3 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10">
<iconify-icon icon="solar:wheel-angle-bold" width="60"></iconify-icon>
</div>
<div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">Vehicle</div>
<div className="text-sm font-bold flex items-center justify-between">
<span>Toyota Camry</span>
<span className="text-emerald-400">GRE-421</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider">Financials</h3>
<div className="flex items-center gap-1 text-[10px] bg-emerald-50 px-2 py-1 rounded text-emerald-700 border border-emerald-100 font-medium">
<iconify-icon icon="solar:card-check-linear"></iconify-icon> Paid • Visa 4242
                                </div>
</div>
<div className="p-5 space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-gray-600">Base Fare</span>
<span className="font-medium text-slate-900">$39.54</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-600">Distance <span className="text-gray-400">(3.72 km)</span></span>
<span className="font-medium text-slate-900">$147.08</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-600">Time <span className="text-gray-400">(104 min)</span></span>
<span className="font-medium text-slate-900">$343.20</span>
</div>
<div className="flex justify-between items-center text-xs py-2 border-t border-dashed border-gray-200">
<span className="flex items-center gap-1.5 text-amber-600 font-medium bg-amber-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:bolt-bold" width="10"></iconify-icon> Surge 1.5x
                                    </span>
<span className="font-medium text-amber-600">+$265.00</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-600">Platform Fee</span>
<span className="text-gray-400">-$42.00</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-600">Tax / VAT</span>
<span className="text-gray-400">$12.33</span>
</div>
<div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
<span className="text-sm font-bold text-slate-900">Total Charged</span>
<span className="text-xl font-bold text-slate-900">$794.74</span>
</div>
</div>
<div className="px-5 py-3 bg-gray-50 border-t border-gray-200 rounded-b-xl">
<div className="flex items-center gap-2 text-[10px] text-gray-500 justify-center">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> Transaction ID: txn_19283749281
                                </div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
<iconify-icon icon="solar:user-bold" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-bold text-gray-900">Customer Details</div>
<div className="text-[10px] text-gray-500">4.8 Rating • 12 Rides</div>
</div>
<button className="text-gray-400 hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
