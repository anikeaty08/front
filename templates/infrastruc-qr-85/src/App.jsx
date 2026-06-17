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
      


<div className="relative w-full max-w-sm shrink-0 flex flex-col">
<div className="mb-4 text-center">
<h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Access Portal (Field)</h2>
<p className="text-xs text-slate-400">View: Scan &amp; Associate (QR-01)</p>
</div>

<div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-slate-900/5">
<div className="bg-white rounded-[2rem] overflow-hidden h-[800px] flex flex-col relative w-full">

<header className="bg-white border-b border-slate-100 p-5 pt-8 flex items-center justify-between sticky top-0 z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:qr-code-scan-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">i-OPIQ Portal</span>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto custom-scroll bg-slate-50/50">

<div className="p-5 pb-2">
<div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
<div className="bg-white p-1.5 rounded-full text-emerald-600 shadow-sm">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-emerald-900">QR Code Detected</h3>
<p className="text-xs text-emerald-700 mt-1 leading-relaxed">Tag ID: <span className="font-mono">IPNX-QR-8842</span><br/>Status: <span className="font-medium">Unassigned</span></p>
</div>
</div>
</div>

<div className="px-5">
<div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
<div className="mb-5">
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Associate Asset</h1>
<p className="text-xs text-slate-500 mt-1">Link this QR tag to physical infrastructure.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Infrastructure Type</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block p-2.5 pr-8">
<option>Fiber Distribution Hub (FDH)</option>
<option>Manhole</option>
<option>Splice Closure</option>
<option>Cabinet</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Infrastructure Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
<iconify-icon icon="solar:tag-linear" width="16"></iconify-icon>
</div>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block w-full pl-9 p-2.5" placeholder="e.g. FDH-VI-004" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">GIS DC Feature ID</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block w-full pl-9 p-2.5" placeholder="e.g. GIS-99201" type="text"/>
</div>
<p className="text-[10px] text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                                        Required for SAFE FME reconciliation.
                                    </p>
</div>

<div className="pt-2">
<div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:gps-linear" width="16"></iconify-icon>
<span className="text-xs text-slate-600">Location captured</span>
</div>
<span className="text-[10px] font-mono text-slate-400">6.4281° N, 3.4219° E</span>
</div>
</div>

<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3 mt-4 flex items-center justify-center gap-2 shadow-sm transition-colors" type="button">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon>
                                    Associate &amp; Activate
                                </button>
</form>
</div>
</div>

<div className="px-5 mt-6 pb-20">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Your Recent Scans</h4>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">Manhole-LEK-02</p>
<p className="text-[10px] text-slate-400">Processed • 2 hrs ago</p>
</div>
<div className="text-xs font-medium text-slate-900">View</div>
</div>
</div>
</div>
</main>

<nav className="bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center absolute bottom-0 w-full">
<button className="flex flex-col items-center gap-1 text-indigo-600">
<iconify-icon icon="solar:qr-code-scan-bold" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Scan</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:history-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-[1200px] flex flex-col h-full">
<div className="mb-4">
<h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Management App (SCM/Admin)</h2>
<p className="text-xs text-slate-400">View: Dashboard &amp; Inventory Tracking</p>
</div>
<div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden flex min-h-[800px]">

<aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-slate-200/50 bg-white">
<div className="flex items-center gap-2 text-indigo-600">
<iconify-icon icon="solar:layers-minimalistic-bold" width="24"></iconify-icon>
<span className="text-base font-bold tracking-tight text-slate-900">i-OPIQ Manager</span>
</div>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 px-2">Main</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:widget-linear" width="18"></iconify-icon>
                            Dashboard
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-white text-indigo-600 rounded-lg shadow-sm ring-1 ring-slate-200" href="#">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
                            Inventory
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:scooter-linear" width="18"></iconify-icon>
                            Dispatch &amp; Issues
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:clipboard-check-linear" width="18"></iconify-icon>
                            Audits &amp; Logs
                        </a>
</nav>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 mt-8 px-2">System</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                            Users (AD Sync)
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:settings-linear" width="18"></iconify-icon>
                            Settings
                        </a>
</nav>
</div>
<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-xs">
                            SC
                        </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-slate-900 truncate">S. Olawale</p>
<p className="text-[10px] text-slate-500 truncate">SCM Officer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 border-b border-slate-200 flex items-center justify-between px-8">
<div className="flex items-center gap-4">
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Tag Inventory</h1>
<span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-medium border border-slate-200">GIE DB Sync: Active</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<input className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900" placeholder="Search batch ID or Asset..." type="text"/>
<iconify-icon className="absolute left-2.5 top-2 text-slate-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="16"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="p-8 pb-0">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Total Tags (Sync)</span>
<iconify-icon className="text-slate-400" icon="solar:database-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">12,450</div>
<span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +150 new from GIE
                                </span>
</div>
</div>

<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Under Production</span>
<iconify-icon className="text-orange-400" icon="solar:printer-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">850</div>
<span className="text-[10px] text-slate-400 font-medium mt-1">Batch #4421 Dispatched</span>
</div>
</div>

<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Field Inventory (Issued)</span>
<iconify-icon className="text-indigo-400" icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">3,200</div>
<span className="text-[10px] text-slate-400 font-medium mt-1">Held by Field Teams</span>
</div>
</div>

<div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Active / Assigned</span>
<iconify-icon className="text-emerald-500" icon="solar:link-circle-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">8,400</div>
<span className="text-[10px] text-emerald-600 font-medium mt-1">98% Reconciliation Rate</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter Status
                            </button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon> Sort
                            </button>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 rounded-lg border border-transparent bg-indigo-50 text-xs font-medium text-indigo-700 hover:bg-indigo-100 flex items-center gap-2">
<iconify-icon icon="solar:archive-up-minimlistic-linear"></iconify-icon> Dispatch to Producer
                            </button>
<button className="px-3 py-1.5 rounded-lg border border-transparent bg-slate-900 text-xs font-medium text-white hover:bg-slate-800 flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:user-hand-up-linear"></iconify-icon> Issue to Team
                            </button>
</div>
</div>
</div>

<div className="flex-1 overflow-x-auto custom-scroll px-8 pb-8">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-200">
<th className="py-3 px-2 w-10"><input className="custom-checkbox" type="checkbox"/></th>
<th className="py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider">QR Tag ID</th>
<th className="py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider">Lifecycle Status</th>
<th className="py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider">Assigned / Loc</th>
<th className="py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider">Asset Ref</th>
<th className="py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider">Last Update</th>
<th className="py-3 px-2 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm text-slate-700">

<tr className="group hover:bg-slate-50 border-b border-slate-100 transition-colors">
<td className="py-3 px-2"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-2 font-mono text-xs font-medium">IPNX-QR-9001</td>
<td className="py-3 px-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Received
                                    </span>
</td>
<td className="py-3 px-2 text-xs text-slate-500">Warehouse A</td>
<td className="py-3 px-2 text-xs text-slate-400 italic">--</td>
<td className="py-3 px-2 text-xs text-slate-500">Oct 24, 10:00 AM</td>
<td className="py-3 px-2 text-right">
<button className="text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-slate-50 border-b border-slate-100 transition-colors">
<td className="py-3 px-2"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-2 font-mono text-xs font-medium">IPNX-QR-9002</td>
<td className="py-3 px-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-orange-50 text-orange-600 border border-orange-100">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div> Under Production
                                    </span>
</td>
<td className="py-3 px-2 text-xs text-slate-500">Vendor: PrintCo</td>
<td className="py-3 px-2 text-xs text-slate-400 italic">--</td>
<td className="py-3 px-2 text-xs text-slate-500">Oct 23, 04:30 PM</td>
<td className="py-3 px-2 text-right">
<button className="text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-slate-50 border-b border-slate-100 transition-colors">
<td className="py-3 px-2"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-2 font-mono text-xs font-medium">IPNX-QR-8842</td>
<td className="py-3 px-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Issued Tags
                                    </span>
</td>
<td className="py-3 px-2 text-xs text-slate-500">Team: Field Ops B (Lekki)</td>
<td className="py-3 px-2 text-xs text-slate-400 italic">--</td>
<td className="py-3 px-2 text-xs text-slate-500">Oct 22, 09:15 AM</td>
<td className="py-3 px-2 text-right">
<button className="text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-slate-50 border-b border-slate-100 transition-colors bg-emerald-50/10">
<td className="py-3 px-2"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-2 font-mono text-xs font-medium">IPNX-QR-7012</td>
<td className="py-3 px-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Processed
                                    </span>
</td>
<td className="py-3 px-2 text-xs text-slate-500">Lat: 6.421, Long: 3.442</td>
<td className="py-3 px-2 text-xs font-medium text-slate-700">Manhole-VI-001</td>
<td className="py-3 px-2 text-xs text-slate-500">Oct 20, 02:00 PM</td>
<td className="py-3 px-2 text-right">
<button className="text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-slate-50 border-b border-slate-100 transition-colors opacity-60">
<td className="py-3 px-2"><input className="custom-checkbox" disabled="" type="checkbox"/></td>
<td className="py-3 px-2 font-mono text-xs font-medium text-slate-400 line-through">IPNX-QR-1004</td>
<td className="py-3 px-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-red-50 text-red-600 border border-red-100">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Retired
                                    </span>
</td>
<td className="py-3 px-2 text-xs text-slate-500">Damaged during Install</td>
<td className="py-3 px-2 text-xs text-slate-400 italic">--</td>
<td className="py-3 px-2 text-xs text-slate-500">Sep 15, 11:00 AM</td>
<td className="py-3 px-2 text-right">
<button className="text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 px-8 border-t border-slate-200 flex items-center justify-between">
<span className="text-xs text-slate-500">Showing <span className="font-medium text-slate-900">1-5</span> of <span className="font-medium text-slate-900">12,450</span></span>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="px-2 py-1 rounded border border-slate-200 text-slate-500 hover:bg-slate-50">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
