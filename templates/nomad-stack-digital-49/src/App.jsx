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
      

<aside className="w-64 bg-[#FAFAFA] border-r border-zinc-200 flex flex-col hidden lg:flex h-screen sticky top-0">

<div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">N</div>
<span className="font-medium text-base tracking-tight text-zinc-900">Nomad Stack</span>
</div>
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 rounded-md hover:bg-zinc-100 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-6">

<div className="bg-emerald-50 rounded-lg p-1.5 flex items-center gap-2 border border-emerald-100">
<div className="w-2 h-2 rounded-full bg-emerald-500 ml-1.5"></div>
<span className="text-sm font-medium text-emerald-700">Tracking Mode</span>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-2">Overview</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-2 bg-zinc-100 rounded-md text-zinc-900" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center justify-between px-2 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Visa &amp; Status</span>
</div>
<span className="bg-amber-100 text-amber-700 text-xs font-medium px-1.5 py-0.5 rounded-md">1</span>
</a>
<a className="flex items-center justify-between px-2 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="plane" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Trip Log</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></div>
</a>
<a className="flex items-center justify-between px-2 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Tax Navigator</span>
</div>
<span className="bg-amber-100 text-amber-700 text-xs font-medium px-1.5 py-0.5 rounded-md">1</span>
</a>
<a className="flex items-center justify-between px-2 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Expenses</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></div>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Documents</span>
</a>
</nav>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-2">Tools</h3>

</div>
</div>

<div className="p-4 border-t border-zinc-200 flex flex-col gap-4">

<div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-zinc-700">Data health</span>
<span className="text-sm font-medium text-red-600">43%</span>
</div>
<div className="w-full bg-zinc-200 rounded-full h-1 mb-2">
<div className="bg-red-500 h-1 rounded-full" style={{width: '43%'}}></div>
</div>
<span className="text-xs text-zinc-500">4 items need attention</span>
</div>
<a className="flex items-center gap-3 px-2 py-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Settings</span>
</a>

<div className="flex items-center gap-3 px-2 pt-2">
<div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-semibold">L</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">User</span>
<span className="text-xs text-zinc-500 flex items-center gap-1">🇺🇸 US passport</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 lg:px-8 shrink-0 z-10 sticky top-0">
<div className="flex items-center gap-6">
<h1 className="text-lg font-semibold tracking-tight text-zinc-900 hidden sm:block">Dashboard</h1>

<div className="flex bg-zinc-100 p-0.5 rounded-lg border border-zinc-200/50">
<button className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-700 rounded-md transition-colors">Planning</button>
<button className="px-3 py-1.5 text-sm font-medium text-emerald-700 bg-white shadow-sm ring-1 ring-zinc-900/5 rounded-md flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        Tracking
                    </button>
</div>
</div>

<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors shadow-sm text-sm font-medium text-zinc-700">
<span>🇬🇪</span>
<span>Tbilisi</span>
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</header>

<div className="bg-amber-50 border-b border-amber-100 px-6 lg:px-8 py-3 flex items-start sm:items-center justify-between gap-4">
<div className="flex items-start sm:items-center gap-3">
<i className="w-4 h-4 text-amber-600 mt-0.5 sm:mt-0 shrink-0" data-lucide="triangle-alert" strokeWidth="1.5"></i>
<p className="text-sm text-amber-800">
<span className="font-semibold">Schengen alert:</span> You have <span className="font-semibold">14 days</span> remaining in your 90-day window (76/90 used). Plan your exit before June 12th.
                </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="text-sm font-medium text-zinc-900 bg-white border border-zinc-200 shadow-sm px-3 py-1.5 rounded-md hover:bg-zinc-50 transition-colors flex items-center gap-1.5">
                    View visa
                    <i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="text-amber-600 hover:text-amber-800 p-1">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-[1200px] mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                            Tracking Mode
                        </div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Monitor Your Status</h2>
<p className="text-base text-zinc-500 mt-1">Stay on top of your visa, days, and compliance</p>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-600 shadow-sm">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Tbilisi, Georgia
                    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2 text-zinc-900 font-medium">
<div className="p-1.5 bg-zinc-100 rounded-md text-zinc-600">
<i className="w-4 h-4" data-lucide="file-badge-2" strokeWidth="1.5"></i>
</div>
                                Visa Status
                            </div>
<span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
<span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                                No visa
                            </span>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-500 mb-4">No visa tracked</p>
<div className="w-8 h-1 bg-red-500 rounded-full mb-6"></div>
</div>
<div className="flex items-center gap-2 mt-auto">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors">View</button>
<button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-medium px-4 py-1.5 rounded-md transition-colors">Renew</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2 text-zinc-900 font-medium">
<div className="p-1.5 bg-zinc-100 rounded-md text-zinc-600">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
                                Current Stay
                            </div>
<span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                No active stay
                            </span>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-500 mb-4">Log a trip to track</p>
<div className="w-8 h-1 bg-zinc-300 rounded-full mb-6"></div>
</div>
<div className="flex items-center gap-2 mt-auto">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors">Log Departure</button>
<button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-medium px-4 py-1.5 rounded-md transition-colors">View</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex flex-col">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2 text-zinc-900 font-medium">
<div className="p-1.5 bg-zinc-100 rounded-md text-zinc-600">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
</div>
                                Schengen Zone
                            </div>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
<i className="w-3 h-3 text-amber-500 fill-amber-500" data-lucide="triangle-alert" strokeWidth="0"></i>
                                75d left
                            </span>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-500 mb-2">90/180-day rolling window</p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-semibold tracking-tight text-amber-600">15</span>
<span className="text-xl font-medium text-zinc-400">/90</span>
<span className="text-sm text-zinc-500 ml-1">days used</span>
<span className="text-sm font-medium text-zinc-400 ml-auto">17%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5 mb-6 overflow-hidden">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '17%'}}></div>
</div>
</div>
<div className="flex items-center gap-2 mt-auto">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors">Timeline</button>
<button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-medium px-4 py-1.5 rounded-md transition-colors">History</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm flex flex-col">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2 text-zinc-900 font-medium">
<div className="p-1.5 bg-zinc-100 rounded-md text-emerald-600">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
                                Compliance
                            </div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
<i className="w-3 h-3" data-lucide="check" strokeWidth="2"></i>
                                All Clear
                            </span>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-500 mb-2">Overall travel rules adherence</p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-semibold tracking-tight text-emerald-600">2/2</span>
<span className="text-sm text-zinc-500 ml-1">checks passed</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5 mb-6 overflow-hidden">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div className="flex items-center gap-2 mt-auto">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors">View Issues</button>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 shadow-sm transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="plus" strokeWidth="1.5"></i>
                        Log Trip
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 shadow-sm transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="file-badge-2" strokeWidth="1.5"></i>
                        Add Visa
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 shadow-sm transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="eye" strokeWidth="1.5"></i>
                        View Compliance
                    </button>
</div>

<div className="bg-[#0A0A0A] border border-zinc-800 rounded-xl h-72 relative overflow-hidden flex flex-col justify-end p-4">

<div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
<div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-zinc-700 rounded-full flex items-center justify-center opacity-50">
<div className="w-6 h-6 rounded-full bg-zinc-600/50 flex items-center justify-center border border-zinc-500">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
</div>

<div className="relative z-10 flex items-center gap-4 text-xs font-medium text-zinc-400">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            Current
                        </div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                            Visited
                        </div>
<div className="flex items-center gap-1.5">
<div className="w-4 border-b border-dashed border-zinc-600"></div>
                            Route
                        </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold text-zinc-900 tracking-tight">Upcoming Trips</h3>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                                View all <i className="w-3.5 h-3.5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="space-y-4">

<div className="flex items-start gap-4 p-2 -mx-2 rounded-lg hover:bg-zinc-50 transition-colors">
<div className="text-2xl mt-0.5">🇵🇹</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Lisbon</h4>
<p className="text-sm text-zinc-500 mt-0.5">Apr 13 — Jul 25 <span className="text-zinc-300 mx-1">•</span> 103d</p>
</div>
</div>

<div className="flex items-start gap-4 p-2 -mx-2 rounded-lg hover:bg-zinc-50 transition-colors">
<div className="text-2xl mt-0.5">🇵🇹</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Lisbon</h4>
<p className="text-sm text-zinc-500 mt-0.5">Apr 2 — Apr 16 <span className="text-zinc-300 mx-1">•</span> 14d</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<h3 className="text-base font-semibold text-zinc-900 tracking-tight mb-4">Travel Metrics</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

<div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
<i className="w-4 h-4 text-blue-500" data-lucide="globe" strokeWidth="1.5"></i>
                                    Countries
                                </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">1</span>
<span className="text-sm text-zinc-500">visited</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
<i className="w-4 h-4 text-blue-500" data-lucide="calendar" strokeWidth="1.5"></i>
                                    Days Abroad
                                </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">117</span>
<span className="text-sm text-zinc-500">total</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
<i className="w-4 h-4 text-blue-500" data-lucide="shield" strokeWidth="1.5"></i>
                                    Active Visas
                                </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">0/0</span>
<span className="text-sm text-zinc-500">valid</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle" strokeWidth="1.5"></i>
                                    Compliance
                                </div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">100%</span>
<span className="text-sm text-zinc-500">all clear</span>
</div>
</div>
</div>
<button className="w-full py-3 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-blue-600 hover:bg-zinc-50 shadow-sm transition-colors">
                            View Full Compliance
                        </button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
