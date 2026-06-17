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
      

<aside className="w-[250px] bg-[#1e1e2d] text-white flex-col hidden md:flex h-full shrink-0 transition-all duration-300 relative z-20 shadow-xl">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
<iconify-icon className="text-white text-lg" icon="lucide:layout-dashboard"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
            Boroka
          </span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-blue-400 transition-colors" icon="lucide:home"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Dashboard</span>
</a>

<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-blue-400 transition-colors" icon="lucide:file-text"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Claims</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white group shadow-md shadow-blue-900/20 transition-all" href="#">
<iconify-icon className="text-lg" icon="lucide:upload-cloud"></iconify-icon>
<span className="text-sm font-medium tracking-tight">KSBCL Upload</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-blue-400 transition-colors" icon="lucide:bar-chart-3"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Reports</span>
</a>

<div className="pt-4 mt-4 border-t border-white/5 px-3">
<span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
            System
          </span>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon className="text-lg group-hover:text-blue-400 transition-colors" icon="lucide:settings"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Settings</span>
</a>
</nav>

<div className="p-4 border-t border-white/5 bg-[#1a1a27]">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                JD
              </div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1e1e2d] rounded-full"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                John Doe
              </span>
<span className="text-[10px] text-gray-400">Admin</span>
</div>
</div>
<button className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-md">
<iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8 shrink-0 z-10">

<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-700">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<span className="text-gray-400 text-sm font-medium hidden sm:inline-block">
              Pages /
            </span>
<h1 className="text-lg font-semibold text-slate-800 tracking-tight">
              KSBCL Upload
            </h1>
</div>
</div>

<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-400 hover:text-slate-600 hover:bg-gray-100 rounded-full transition-all">
<iconify-icon icon="lucide:bell" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 border border-gray-200">
              JD
            </div>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-[#f4f6f9] p-6 md:p-8">
<div className="max-w-[1600px] mx-auto space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm shadow-blue-100">
<iconify-icon icon="lucide:upload-cloud" width="20"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold text-slate-800">
                    Upload KSBCL Report
                  </h2>
<p className="text-xs text-gray-500">Import daily sales data</p>
</div>
</div>
<div className="space-y-6 flex-1">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-600">
                    Report Date
                  </label>
<input className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-700" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-600">
                    Report File
                  </label>
<div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-blue-300 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="lucide:file-up" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700">
                      Click to upload or drag &amp; drop
                    </p>
<p className="text-xs text-gray-400 mt-1">
                      .xlsx, .csv (Max 10MB)
                    </p>
</div>
</div>
<button className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm shadow-blue-600/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
<iconify-icon icon="lucide:upload" width="16"></iconify-icon>
                  Upload &amp; Process
                </button>
<div className="mt-4 pt-4 border-t border-gray-100">
<div className="bg-green-50 border border-green-100 rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-green-600" icon="lucide:check-circle"></iconify-icon>
<span className="text-sm font-semibold text-green-800">
                        Upload Successful
                      </span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="text-xs text-green-700/70 block font-medium">
                          Total Records
                        </span>
<span className="text-lg font-bold text-green-800 tracking-tight">
                          14,205
                        </span>
</div>
<div>
<span className="text-xs text-green-700/70 block font-medium">
                          Boroka Records
                        </span>
<span className="text-lg font-bold text-green-800 tracking-tight">
                          248
                        </span>
</div>
</div>
</div>
<div className="mt-3 bg-yellow-50 border border-yellow-100 rounded-lg p-3 flex items-start gap-3">
<iconify-icon className="text-yellow-600 mt-0.5 shrink-0" icon="lucide:alert-triangle"></iconify-icon>
<div>
<span className="text-xs font-semibold text-yellow-800 block mb-0.5">
                        3 Formatting Issues
                      </span>
<span className="text-[10px] text-yellow-700 leading-tight block">
                        Rows 45, 92, 104 have invalid outlet codes.
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm shadow-purple-100">
<iconify-icon icon="lucide:git-compare" width="20"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold text-slate-800">
                    Run Reconciliation
                  </h2>
<p className="text-xs text-gray-500">Match claims against data</p>
</div>
</div>
<div className="space-y-6 flex-1">
<div className="prose prose-sm text-slate-600">
<p className="text-sm leading-relaxed">
                    Compare pending claims against the uploaded KSBCL data.
                    Matches are based on
                    <strong>Outlet Code</strong>
                    ,
                    <strong>Date</strong>
                    , and
                    <strong>Quantity</strong>
                    .
                  </p>
<div className="flex items-center gap-2 mt-3 text-xs text-gray-500 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-100">
<iconify-icon className="text-blue-500" icon="lucide:info"></iconify-icon>
<span>Matches allowed within ±1 day tolerance.</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<button className="py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-sm shadow-purple-600/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
<iconify-icon icon="lucide:play" width="16"></iconify-icon>
                    Run Reconciliation
                  </button>
<button className="py-2.5 px-4 bg-white border border-orange-200 text-orange-700 hover:bg-orange-50 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
<iconify-icon icon="lucide:refresh-cw" width="16"></iconify-icon>
                    Re-check Flagged
                  </button>
</div>
<div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
<h3 className="text-sm font-semibold text-slate-800">
                    Last Run Summary
                  </h3>
<div className="grid grid-cols-3 gap-3">
<div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
<span className="block text-2xl font-bold text-emerald-700 tracking-tight">
                        185
                      </span>
<span className="text-[10px] uppercase font-bold text-emerald-600/80 tracking-wider mt-1 block">
                        Matched
                      </span>
</div>
<div className="p-4 rounded-lg bg-orange-50 border border-orange-100 text-center">
<span className="block text-2xl font-bold text-orange-700 tracking-tight">
                        12
                      </span>
<span className="text-[10px] uppercase font-bold text-orange-600/80 tracking-wider mt-1 block">
                        Partial
                      </span>
</div>
<div className="p-4 rounded-lg bg-red-50 border border-red-100 text-center">
<span className="block text-2xl font-bold text-red-700 tracking-tight">
                        51
                      </span>
<span className="text-[10px] uppercase font-bold text-red-600/80 tracking-wider mt-1 block">
                        Not Found
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
