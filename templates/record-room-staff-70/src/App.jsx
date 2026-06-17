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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<span className="iconify w-6 h-6 text-indigo-600" data-icon="lucide:archive" data-inline="false" data-strokeWidth="1.5"></span>
<span className="font-bold tracking-tight text-lg">TRACK/REC</span>
</div>
</div>

<nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
<p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Operations</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-colors" href="#">
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-slate-600" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-colors" href="#">
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-slate-600" data-icon="lucide:file-plus" data-strokeWidth="1.5"></span>
                Register File
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-colors" href="#">
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-slate-600" data-icon="lucide:folder-output" data-strokeWidth="1.5"></span>
                Issue Requests
            </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-slate-100 text-slate-900 group relative" href="#">
<span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-full"></span>
<span className="iconify w-5 h-5 text-indigo-600" data-icon="lucide:folder-input" data-strokeWidth="1.5"></span>
                Returns
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-colors" href="#">
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-slate-600" data-icon="lucide:library" data-strokeWidth="1.5"></span>
                Inventory &amp; Audit
            </a>
<p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-2">System</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-colors" href="#">
<span className="iconify w-5 h-5 text-slate-400 group-hover:text-slate-600" data-icon="lucide:search" data-strokeWidth="1.5"></span>
                Search &amp; History
            </a>
</nav>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                    RS
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 truncate">Record Staff #04</p>
<p className="text-xs text-slate-500 truncate">Operational Access</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-slate-50/50">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shrink-0">
<div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Process Returns</h1>
<p className="text-xs text-slate-500">Scan incoming files to determine shelving location</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
<span className="iconify w-4 h-4" data-icon="lucide:alert-circle"></span>
<span className="text-xs font-medium">3 Files Overdue</span>
</div>
<button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:history" data-strokeWidth="1.5"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="p-6">
<label className="block text-sm font-medium text-slate-700 mb-2">Scan Barcode / QR Code</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="iconify w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" data-icon="lucide:scan-barcode" data-strokeWidth="1.5"></span>
</div>
<input autofocus="" className="block w-full pl-11 pr-24 py-4 border border-slate-200 rounded-lg text-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all" placeholder="Ready to scan..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<span className="text-xs font-mono text-slate-400 border border-slate-200 rounded px-2 py-1">Hit Enter</span>
</div>
</div>
</div>
<div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex items-center justify-between">
<span className="text-xs text-slate-500 flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                Scanner Connected
                            </span>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">Switch to Manual Entry</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden relative">

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500"></div>
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 mb-3">
<span className="iconify w-3 h-3" data-icon="lucide:check-circle-2"></span>
                                        File Identified
                                    </div>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">ENG-2023-4402</h2>
<p className="text-sm text-slate-500 mt-1">Expansion of West Wing Facilities</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Borrowed By</p>
<p className="text-sm font-medium text-slate-900 mt-1">John Doe (Engineering)</p>
<p className="text-xs text-slate-500 mt-0.5">Checked out 3 days ago</p>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Return to Location</p>
<div className="flex items-center gap-4">
<div className="flex-1 bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
<p className="text-xs text-slate-400">Rack</p>
<p className="text-2xl font-bold text-slate-900 mt-1">04</p>
</div>
<span className="iconify text-slate-300 w-5 h-5" data-icon="lucide:arrow-right"></span>
<div className="flex-1 bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
<p className="text-xs text-slate-400">Shelf</p>
<p className="text-2xl font-bold text-slate-900 mt-1">02</p>
</div>
<span className="iconify text-slate-300 w-5 h-5" data-icon="lucide:arrow-right"></span>
<div className="flex-1 bg-white p-3 rounded-lg border border-slate-200 text-center shadow-sm">
<p className="text-xs text-slate-400">Box</p>
<p className="text-2xl font-bold text-indigo-600 mt-1">12</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all font-medium text-sm">
<span className="iconify w-4 h-4 text-rose-500" data-icon="lucide:alert-triangle"></span>
                                    Report Damage
                                </button>
<button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 shadow-sm transition-all font-medium text-sm">
<span className="iconify w-4 h-4" data-icon="lucide:archive-restore"></span>
                                    Confirm Shelving
                                </button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs font-medium text-slate-500 uppercase">Received</p>
<p className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">18</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<p className="text-xs font-medium text-slate-500 uppercase">Pending</p>
<p className="text-2xl font-semibold text-amber-600 mt-1 tracking-tight">4</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-280px)]">
<div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between shrink-0">
<h3 className="font-semibold text-slate-900 text-sm">Recent Returns</h3>
<button className="text-slate-400 hover:text-slate-600">
<span className="iconify w-4 h-4" data-icon="lucide:filter" data-strokeWidth="1.5"></span>
</button>
</div>
<div className="overflow-y-auto flex-1 p-2 space-y-1">

<div className="group p-3 rounded-lg bg-indigo-50 border border-indigo-100 flex items-start gap-3 cursor-pointer">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-semibold text-slate-900 truncate">ENG-2023-4402</p>
<span className="text-[10px] font-mono text-indigo-600 bg-white px-1.5 py-0.5 rounded border border-indigo-100">Scanning</span>
</div>
<p className="text-xs text-slate-500 truncate">Returned by John Doe</p>
<div className="mt-2 flex items-center gap-2 text-xs">
<span className="px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">Rack 04</span>
</div>
</div>
</div>

<div className="group p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors flex items-start gap-3 cursor-pointer">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-medium text-slate-900 truncate">LEG-2023-1109</p>
<span className="text-[10px] text-slate-400">10:42 AM</span>
</div>
<p className="text-xs text-slate-500 truncate">Legal Dept • Sarah Smith</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">R:01 | S:05</span>
<button className="text-[10px] font-medium text-indigo-600 hover:text-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity">Shelve</button>
</div>
</div>
</div>

<div className="group p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors flex items-start gap-3 cursor-pointer">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-medium text-slate-900 truncate">FIN-2023-8821</p>
<span className="text-[10px] text-slate-400">10:15 AM</span>
</div>
<p className="text-xs text-slate-500 truncate">Finance • Accounts Team</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">R:12 | S:01</span>
<button className="text-[10px] font-medium text-indigo-600 hover:text-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity">Shelve</button>
</div>
</div>
</div>

<div className="group p-3 rounded-lg opacity-60 hover:opacity-100 hover:bg-slate-50 border border-transparent transition-all flex items-start gap-3">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<p className="text-sm font-medium text-slate-900 truncate line-through decoration-slate-400">HR-2022-005</p>
<span className="text-[10px] text-slate-400">09:30 AM</span>
</div>
<p className="text-xs text-slate-500 truncate">Shelved by You</p>
</div>
</div>
</div>

<div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 w-full py-1">View Full History</button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2 flex justify-around z-50">
<a className="p-2 text-slate-400 flex flex-col items-center gap-1" href="#">
<span className="iconify w-6 h-6" data-icon="lucide:layout-dashboard"></span>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="p-2 text-slate-400 flex flex-col items-center gap-1" href="#">
<span className="iconify w-6 h-6" data-icon="lucide:file-plus"></span>
<span className="text-[10px] font-medium">Add</span>
</a>
<a className="p-2 text-indigo-600 flex flex-col items-center gap-1" href="#">
<span className="iconify w-6 h-6" data-icon="lucide:folder-input"></span>
<span className="text-[10px] font-medium">Returns</span>
</a>
<a className="p-2 text-slate-400 flex flex-col items-center gap-1" href="#">
<span className="iconify w-6 h-6" data-icon="lucide:user"></span>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>

    </>
  );
}
