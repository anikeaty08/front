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
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-emerald-800">
<iconify-icon icon="solar:steering-wheel-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">MASAR.</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Drivers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
                Passengers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
                Roles &amp; Permissions
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                Zones &amp; Cities
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
                Analytics
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors w-full">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
<span className="text-xs font-semibold">MA</span>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-semibold text-slate-900">Mohammed A.</span>
<span className="text-[10px] text-slate-400">Super Admin</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center text-sm text-slate-400 gap-2">
<a className="hover:text-slate-600" href="#">Settings</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-medium text-slate-900">Roles Management</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 shadow-sm transition-all">
<iconify-icon icon="solar:export-linear" width="16"></iconify-icon>
                    Export Log
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-emerald-700 rounded-md hover:bg-emerald-800 shadow-sm shadow-emerald-200 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Add New Role
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

<div className="lg:col-span-4 flex flex-col gap-4 h-full">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">System Roles</h2>
<span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">8 Active</span>
</div>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-slate-300" placeholder="Search roles..." type="text"/>
</div>
<div className="flex-1 overflow-y-auto space-y-2 pr-1">

<div className="p-4 bg-white border border-emerald-500 shadow-sm rounded-xl cursor-pointer ring-1 ring-emerald-100 relative overflow-hidden group">
<div className="absolute w-1 h-full bg-emerald-600 left-0 top-0"></div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold text-slate-900">Riyadh Region Manager</h3>
<iconify-icon className="text-slate-400 hover:text-emerald-600" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-3 line-clamp-2">Manages driver onboarding and ride disputes within Riyadh city limits.</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=33"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=47"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-medium text-slate-500">+4</div>
</div>
<span className="text-[10px] text-slate-400">Assigned Users</span>
</div>
</div>

<div className="p-4 bg-white border border-gray-200 hover:border-emerald-200 rounded-xl cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">Support Agent (L1)</h3>
</div>
<p className="text-xs text-slate-400 mb-3">Limited access to ride history and user tickets. No PII access.</p>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:global-linear" width="10"></iconify-icon>
                                    Global
                                </span>
<span className="text-[10px] text-slate-400">124 Users</span>
</div>
</div>

<div className="p-4 bg-white border border-gray-200 hover:border-emerald-200 rounded-xl cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">Jeddah Dispatcher</h3>
</div>
<p className="text-xs text-slate-400 mb-3">Zone specific monitoring for Jeddah Corniche and Airport.</p>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon>
                                    Zone Restricted
                                </span>
<span className="text-[10px] text-slate-400">3 Users</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">

<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<div>
<h2 className="text-base font-semibold text-slate-900">Configure Role</h2>
<p className="text-xs text-slate-500">Set permissions and geographic boundaries for "Riyadh Region Manager".</p>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-red-600 hover:text-red-700 px-3 py-1.5 rounded hover:bg-red-50 transition-colors">Delete Role</button>
<button className="text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-1.5 rounded-lg shadow-sm transition-colors">Save Changes</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Role Name</label>
<input className="w-full text-sm border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 py-2 px-3 bg-slate-50/50" type="text" value="Riyadh Region Manager"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Description</label>
<input className="w-full text-sm border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 py-2 px-3 bg-slate-50/50" type="text" value="Manages driver onboarding and ride disputes..."/>
</div>
</div>
<div className="border-t border-gray-100"></div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:map-point-wave-linear"></iconify-icon>
                                        Geographic Scope
                                    </h3>
<p className="text-xs text-slate-500 mt-0.5">Determine which rides and drivers this role can access.</p>
</div>

<div className="bg-slate-100 p-1 rounded-lg inline-flex">
<button className="px-3 py-1 text-xs font-medium text-slate-500 rounded-md hover:text-slate-900">National</button>
<button className="px-3 py-1 text-xs font-medium text-emerald-700 bg-white shadow-sm rounded-md ring-1 ring-black/5">City Level</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 rounded-md hover:text-slate-900">Zone Level</button>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-gray-100">
<label className="text-xs font-medium text-slate-700 mb-3 block">Selected Cities</label>
<div className="flex flex-wrap gap-2 mb-4">
<div className="flex items-center gap-1.5 pl-2 pr-1 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded border border-emerald-200">
                                        Riyadh
                                        <button className="hover:bg-emerald-200 rounded p-0.5 transition-colors"><iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon></button>
</div>
<button className="flex items-center gap-1.5 px-2 py-1 bg-white text-slate-500 text-xs font-medium rounded border border-gray-200 hover:border-emerald-300 hover:text-emerald-700 transition-colors border-dashed">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                        Add City
                                    </button>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-900">Riyadh Zones</span>
<button className="text-[10px] text-emerald-600 font-medium hover:underline">Select All</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
<label className="flex items-center gap-2 p-2 border border-emerald-100 bg-emerald-50/30 rounded cursor-pointer transition-colors">
<div className="relative flex items-center">
<input checked="" className="peer h-3.5 w-3.5 appearance-none rounded border border-gray-300 checked:bg-emerald-600 checked:border-emerald-600 focus:ring-1 focus:ring-emerald-200" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[1px] top-[1px]" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-slate-700">North Riyadh</span>
</label>
<label className="flex items-center gap-2 p-2 border border-gray-100 rounded hover:bg-gray-50 cursor-pointer transition-colors">
<div className="relative flex items-center">
<input className="peer h-3.5 w-3.5 appearance-none rounded border border-gray-300 checked:bg-emerald-600 checked:border-emerald-600 focus:ring-1 focus:ring-emerald-200" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[1px] top-[1px]" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-slate-700">Olaya District</span>
</label>
<label className="flex items-center gap-2 p-2 border border-gray-100 rounded hover:bg-gray-50 cursor-pointer transition-colors">
<div className="relative flex items-center">
<input checked="" className="peer h-3.5 w-3.5 appearance-none rounded border border-gray-300 checked:bg-emerald-600 checked:border-emerald-600 focus:ring-1 focus:ring-emerald-200" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[1px] top-[1px]" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-slate-700">Airport Road</span>
</label>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-100"></div>

<div className="space-y-4">
<div>
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:shield-warning-linear"></iconify-icon>
                                    Data Limits &amp; Privacy
                                </h3>
<p className="text-xs text-slate-500 mt-0.5">Control data visibility and export capabilities.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Mask PII Data</span>
<span className="text-[10px] text-slate-400">Hide phone numbers &amp; emails</span>
</div>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</input></div>
</div>

<div className="flex items-center justify-between p-3 border border-emerald-100 bg-emerald-50/20 rounded-lg">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Allow Bulk Export</span>
<span className="text-[10px] text-slate-400">Download CSV reports</span>
</div>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300 right-0 border-emerald-600" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-emerald-600 cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</input></div>
</div>
</div>

<div className="pt-2">
<div className="flex justify-between mb-1">
<label className="text-xs font-medium text-slate-700" htmlFor="limit-range">Max Records Viewable (Daily)</label>
<span className="text-xs font-semibold text-emerald-700">500 Records</span>
</div>
<input className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" id="limit-range" type="range" value="50"/>
<div className="flex justify-between mt-1 text-[10px] text-slate-400">
<span>100</span>
<span>Unlimited</span>
</div>
</div>
</div>
<div className="border-t border-gray-100"></div>

<div className="space-y-4 pb-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:folder-with-files-linear"></iconify-icon>
                                    Module Access
                                </h3>
</div>
<div className="border border-gray-200 rounded-lg overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200 text-xs text-slate-500 uppercase tracking-wide">
<th className="px-4 py-3 font-medium">Module</th>
<th className="px-4 py-3 font-medium text-center w-20">Read</th>
<th className="px-4 py-3 font-medium text-center w-20">Write</th>
<th className="px-4 py-3 font-medium text-center w-20">Delete</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">

<tr className="bg-white hover:bg-slate-50">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-indigo-50 text-indigo-600"><iconify-icon icon="solar:user-id-linear"></iconify-icon></div>
<span className="font-medium text-slate-700 text-xs">Driver Profiles</span>
</div>
</td>
<td className="px-4 py-3 text-center">
<input checked="" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center">
<input checked="" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
</tr>

<tr className="bg-white hover:bg-slate-50">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-orange-50 text-orange-600"><iconify-icon icon="solar:routing-2-linear"></iconify-icon></div>
<span className="font-medium text-slate-700 text-xs">Live Trips</span>
</div>
</td>
<td className="px-4 py-3 text-center">
<input checked="" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center">
<input className="rounded border-gray-100 bg-gray-50 text-gray-300 h-4 w-4 cursor-not-allowed" disabled="" type="checkbox"/>
</td>
</tr>

<tr className="bg-white hover:bg-slate-50">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-green-50 text-green-600"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon></div>
<span className="font-medium text-slate-700 text-xs">Financials</span>
</div>
</td>
<td className="px-4 py-3 text-center">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
<td className="px-4 py-3 text-center">
<input className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4" type="checkbox"/>
</td>
</tr>
</tbody>
</table>
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
