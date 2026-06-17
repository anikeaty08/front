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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
<div className="h-14 flex items-center px-6 border-b border-transparent">

<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:layers" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900 uppercase">Brikflat</span>
</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-700" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-700" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="18"></span>
                Properties
            </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group transition-colors" href="#">
<span className="iconify text-gray-900" data-icon="lucide:wrench" data-strokeWidth="1.5" data-width="18"></span>
                Maintenance
                <span className="ml-auto bg-gray-200 text-gray-600 py-0.5 px-2 rounded-full text-[10px] font-medium">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-700" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
                Vendors
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-700" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="18"></span>
                Finances
            </a>
<div className="pt-4 mt-4 border-t border-gray-100">
<h3 className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Organization</h3>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-700" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
                    Reports
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-700" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="18"></span>
                    Settings
                </a>
</div>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full bg-gray-200 border border-gray-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Alex Morgan</span>
<span className="text-xs text-gray-500">Property Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-gray-50">

<header className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4">
<div className="flex items-center justify-between mb-4">
<h1 className="text-xl font-medium tracking-tight text-gray-900">Maintenance Tasks &amp; Schedules</h1>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                        Export
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 border border-transparent rounded-md text-sm font-medium text-white hover:bg-gray-800 shadow-sm transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                        Create Maintenance Task
                    </button>
</div>
</div>

<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2 flex-1 max-w-2xl">

<div className="flex p-0.5 bg-gray-100 rounded-lg border border-gray-200">
<button className="flex items-center justify-center p-1.5 rounded-md bg-white shadow-sm text-gray-900">
<span className="iconify" data-icon="lucide:list" data-strokeWidth="2" data-width="16"></span>
</button>
<button className="flex items-center justify-center p-1.5 rounded-md text-gray-500 hover:text-gray-700">
<span className="iconify" data-icon="lucide:calendar" data-strokeWidth="2" data-width="16"></span>
</button>
<button className="flex items-center justify-center p-1.5 rounded-md text-gray-500 hover:text-gray-700">
<span className="iconify" data-icon="lucide:kanban" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
<div className="h-6 w-px bg-gray-200 mx-1"></div>

<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
<span className="iconify text-gray-400 group-focus-within:text-gray-600" data-icon="lucide:search" data-width="16"></span>
</div>
<input className="block w-full pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-400 transition-all" placeholder="Search tasks, properties, vendors..." type="text"/>
</div>

<button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                        Status
                    </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50">
<span className="iconify" data-icon="lucide:building-2" data-width="14"></span>
                        Property
                    </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:bg-gray-50">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
                        Vendor
                    </button>
</div>

<div className="flex items-center gap-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-md px-1 py-1">
<button className="p-1 hover:bg-gray-100 rounded">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<span className="px-2 font-medium">October 2023</span>
<button className="p-1 hover:bg-gray-100 rounded">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 overflow-auto custom-scrollbar relative">
<table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-0">
<thead className="bg-gray-50 sticky top-0 z-10 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
<tr>
<th className="relative px-6 py-3 text-left w-12 bg-gray-50" scope="col">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 cursor-pointer group" scope="col">
<div className="flex items-center gap-1">
                                    Task ID &amp; Name
                                    <span className="iconify text-gray-400 opacity-0 group-hover:opacity-100" data-icon="lucide:arrow-down" data-width="12"></span>
</div>
</th>
<th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50" scope="col">
                                Property
                            </th>
<th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50" scope="col">
                                Priority
                            </th>
<th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50" scope="col">
                                Status
                            </th>
<th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50" scope="col">
                                Assigned To
                            </th>
<th className="px-6 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50" scope="col">
                                Scheduled
                            </th>
<th className="px-6 py-2.5 relative bg-gray-50" scope="col">
<span className="sr-only">Edit</span>
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-100">

<tr className="hover:bg-gray-50 transition-colors bg-blue-50/30">
<td className="px-6 py-3 whitespace-nowrap">
<input checked="" className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">HVAC Inspection</span>
<span className="text-xs text-gray-500 font-mono mt-0.5">MT-2049</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Sunset Heights</span>
<span className="text-xs text-gray-500">Unit 4B</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="iconify text-orange-500" data-icon="lucide:signal-high" data-width="14"></span>
<span className="text-sm text-gray-700">High</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                    In Progress
                                </span>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full bg-gray-100" src="https://i.pravatar.cc/150?u=tech1"/>
<span className="text-sm text-gray-700">Mike R.</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="text-sm text-gray-900">Oct 24, 2023</div>
<div className="text-xs text-gray-500">10:00 AM</div>
</td>
<td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-3 whitespace-nowrap">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Leaking Faucet Repair</span>
<span className="text-xs text-gray-500 font-mono mt-0.5">MT-2048</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Highland Lofts</span>
<span className="text-xs text-gray-500">Unit 102</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="iconify text-gray-400" data-icon="lucide:signal-medium" data-width="14"></span>
<span className="text-sm text-gray-700">Medium</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                    Scheduled
                                </span>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-700">AP</div>
<span className="text-sm text-gray-700">Acme Plumbing</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="text-sm text-gray-900">Oct 26, 2023</div>
<div className="text-xs text-gray-500">02:30 PM</div>
</td>
<td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-3 whitespace-nowrap">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Smoke Detector Battery</span>
<span className="text-xs text-gray-500 font-mono mt-0.5">MT-2047</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Riverside Apts</span>
<span className="text-xs text-gray-500">Common Area</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="iconify text-gray-300" data-icon="lucide:signal-low" data-width="14"></span>
<span className="text-sm text-gray-700">Low</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                    Overdue
                                </span>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-400 italic">Unassigned</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="text-sm text-red-600 font-medium">Oct 20, 2023</div>
</td>
<td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors opacity-60">
<td className="px-6 py-3 whitespace-nowrap">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900 line-through">Lobby Painting</span>
<span className="text-xs text-gray-500 font-mono mt-0.5">MT-2045</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Highland Lofts</span>
<span className="text-xs text-gray-500">Lobby</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="iconify text-gray-300" data-icon="lucide:signal-low" data-width="14"></span>
<span className="text-sm text-gray-700">Low</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                    Completed
                                </span>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700">CP</div>
<span className="text-sm text-gray-700">Color Pro Inc.</span>
</div>
</td>
<td className="px-6 py-3 whitespace-nowrap">
<div className="text-sm text-gray-900">Oct 18, 2023</div>
</td>
<td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<aside className="w-[420px] bg-white border-l border-gray-200 flex flex-col shadow-xl slide-panel relative z-20">

<div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between bg-white">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">MT-2049</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                In Progress
                            </span>
</div>
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">HVAC Inspection</h2>
</div>
<div className="flex items-center gap-2">
<button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-50 transition-colors">
<span className="iconify" data-icon="lucide:maximize-2" data-width="16"></span>
</button>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-50 transition-colors">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">

<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
<span className="iconify" data-icon="lucide:check-circle" data-width="16"></span>
                            Complete
                        </button>
<button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
<span className="iconify" data-icon="lucide:message-square" data-width="16"></span>
                            Message
                        </button>
<button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-500">
<span className="iconify" data-icon="lucide:more-vertical" data-width="16"></span>
</button>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Property</p>
<div className="flex items-start gap-2">
<div className="p-1.5 bg-gray-100 rounded text-gray-500 mt-0.5">
<span className="iconify" data-icon="lucide:home" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Sunset Heights</p>
<p className="text-xs text-gray-500">Unit 4B, Res.</p>
</div>
</div>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Assigned To</p>
<div className="flex items-center gap-2 mt-1.5">
<img alt="Tech" className="w-7 h-7 rounded-full border border-gray-100" src="https://i.pravatar.cc/150?u=tech1"/>
<div>
<p className="text-sm font-medium text-gray-900">Mike R.</p>
<p className="text-xs text-gray-500">HVAC Tech</p>
</div>
</div>
</div>
</div>

<div className="p-3 bg-gray-50 rounded-lg border border-gray-100 space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:calendar-clock" data-width="16"></span>
<span className="text-sm text-gray-600">Scheduled for</span>
</div>
<span className="text-sm font-medium text-gray-900">Oct 24, 10:00 AM</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:timer" data-width="16"></span>
<span className="text-sm text-gray-600">Est. Duration</span>
</div>
<span className="text-sm font-medium text-gray-900">2h 30m</span>
</div>
</div>

<div className="space-y-2">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Description</p>
<p className="text-sm text-gray-700 leading-relaxed">
                            Tenant reported strange noise coming from the AC unit in the master bedroom. Please inspect the compressor and fan belt. Preventive maintenance check required for filters as well.
                        </p>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Work Checklist</p>
<span className="text-xs text-gray-400">1/3 Completed</span>
</div>
<div className="space-y-2">
<label className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
<input checked="" className="custom-checkbox mt-0.5" type="checkbox"/>
<span className="text-sm text-gray-700 line-through text-opacity-60">Check air filters</span>
</label>
<label className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<span className="text-sm text-gray-700">Inspect compressor unit</span>
</label>
<label className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<span className="text-sm text-gray-700">Test thermostat response</span>
</label>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-gray-100">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Activity</p>
<div className="relative pl-4 border-l border-gray-200 space-y-6">

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500"></div>
<div className="flex flex-col">
<span className="text-sm text-gray-900">Status changed to <b>In Progress</b></span>
<span className="text-xs text-gray-400">Today, 10:05 AM by Mike R.</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-gray-300"></div>
<div className="flex flex-col">
<span className="text-sm text-gray-900">Task created</span>
<span className="text-xs text-gray-400">Oct 22, 4:30 PM by Alex Morgan</span>
</div>
</div>
</div>

<div className="flex gap-3 items-start mt-4">
<div className="flex-1 relative">
<input className="w-full text-sm border-gray-200 rounded-md focus:border-gray-400 focus:ring-0 bg-gray-50 px-3 py-2" placeholder="Add a comment..." type="text"/>
<button className="absolute right-2 top-1.5 text-gray-400 hover:text-gray-600">
<span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
