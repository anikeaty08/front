import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
},
slate: {
850: '#1e293b',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'drawer': '-4px 0 24px rgba(0,0,0,0.08)',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20 hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<span className="font-semibold text-slate-900 tracking-tight">BrickFlat Manager</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">

<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="home"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="bar-chart-2"></i>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="building"></i>
                    Properties
                </a>
</div>

<div>
<div className="flex items-center justify-between px-3 mb-2">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Finance</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="wallet"></i>
                        Incomes
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="receipt"></i>
                        Expenses
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="file-spreadsheet"></i>
                        Transactions Log
                    </a>
</div>
</div>

<div>
<div className="flex items-center justify-between px-3 mb-2">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Management</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="check-square"></i>
                        Tasks
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="calendar"></i>
                        Calendar
                    </a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-900 bg-gray-100 rounded-md group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-900" data-lucide="clipboard-list"></i>
                            Work Orders
                        </div>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="wrench"></i>
                        Maintenance
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900 transition-colors group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="users"></i>
                        Team
                    </a>
</div>
</div>
</nav>

<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
<img alt="User" className="w-9 h-9 rounded-full object-cover border border-gray-200" src="https://i.pravatar.cc/150?u=kate"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Kate Moore</p>
<div className="flex items-center gap-1">
<p className="text-xs text-slate-500 truncate">Customer Support</p>
<i className="w-3 h-3 text-blue-500 fill-current" data-lucide="badge-check"></i>
</div>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="more-vertical"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-white min-w-0 relative">

<header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white z-10">
<div className="flex items-center gap-4">
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Work Orders</h1>
<div className="hidden sm:flex items-center gap-2">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium border border-gray-200">42 Open</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-white border border-gray-200 rounded-md shadow-subtle hover:bg-gray-50 transition-all">
<i className="w-4 h-4 text-slate-500" data-lucide="download"></i>
                    Export
                </button>
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-md shadow-subtle hover:bg-slate-800 transition-all ring-offset-2 focus:ring-2 ring-slate-900">
<i className="w-4 h-4" data-lucide="plus"></i>
                    Create Work Order
                </button>
</div>
</header>

<div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row gap-4 items-center justify-between">
<div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 no-scrollbar">

<div className="relative group w-64 min-w-[200px]">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-slate-600" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400 text-slate-700" placeholder="Search orders, units, vendors..." type="text"/>
</div>
<div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>

<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-slate-600 hover:border-gray-300 hover:text-slate-900 transition-colors whitespace-nowrap">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="filter"></i>
                    Status
                    <i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-slate-600 hover:border-gray-300 hover:text-slate-900 transition-colors whitespace-nowrap">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="alert-circle"></i>
                    Priority
                    <i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-slate-600 hover:border-gray-300 hover:text-slate-900 transition-colors whitespace-nowrap">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="calendar-days"></i>
                    Date Range
                </button>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-gray-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
<button className="p-2 text-slate-900 bg-white border border-gray-200 rounded-md shadow-sm">
<i className="w-4 h-4" data-lucide="list"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-auto bg-white custom-scrollbar relative">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
<tr>
<th className="py-3 pl-6 pr-3 w-10">
<input className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition" type="checkbox"/>
</th>
<th className="py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Work Order</th>
<th className="py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Property / Unit</th>
<th className="py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
<th className="py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Assigned Vendor</th>
<th className="py-3 px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Created</th>
<th className="py-3 pl-3 pr-6 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50 transition-colors bg-blue-50/30">
<td className="py-4 pl-6 pr-3">
<input checked="" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition" type="checkbox"/>
</td>
<td className="py-4 px-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">#WO-3049</span>
<span className="text-xs text-slate-500">Leaking pipe in kitchen</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 text-[10px] font-bold">SV</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700">Sunset Valley</span>
<span className="text-xs text-slate-500">Unit 4B</span>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                High
                            </span>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                                In Progress
                            </span>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-gray-200" src="https://i.pravatar.cc/150?u=mike"/>
<span className="text-sm text-slate-600">Mike's Plumbing</span>
</div>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-500">Oct 24, 2023</span>
</td>
<td className="py-4 pl-3 pr-6 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-4 pl-6 pr-3">
<input className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition" type="checkbox"/>
</td>
<td className="py-4 px-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">#WO-3048</span>
<span className="text-xs text-slate-500">HVAC maintenance check</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px] font-bold">GH</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700">Green Heights</span>
<span className="text-xs text-slate-500">Common Area</span>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                Low
                            </span>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                Completed
                            </span>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 border border-gray-200">AC</div>
<span className="text-sm text-slate-600">AirCool Inc.</span>
</div>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-500">Oct 23, 2023</span>
</td>
<td className="py-4 pl-3 pr-6 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-4 pl-6 pr-3">
<input className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition" type="checkbox"/>
</td>
<td className="py-4 px-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">#WO-3047</span>
<span className="text-xs text-slate-500">Broken window latch</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 text-[10px] font-bold">SV</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700">Sunset Valley</span>
<span className="text-xs text-slate-500">Unit 2A</span>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                Medium
                            </span>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200/60">
                                Open
                            </span>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-400 italic">Unassigned</span>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-500">Oct 22, 2023</span>
</td>
<td className="py-4 pl-3 pr-6 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-4 pl-6 pr-3">
<input className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition" type="checkbox"/>
</td>
<td className="py-4 px-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">#WO-3046</span>
<span className="text-xs text-slate-500">Pest control service</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-orange-700 text-[10px] font-bold">OH</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700">Oakwood Heights</span>
<span className="text-xs text-slate-500">Unit 12C</span>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                Low
                            </span>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                                In Progress
                            </span>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-gray-200" src="https://i.pravatar.cc/150?u=pest"/>
<span className="text-sm text-slate-600">BugBusters Ltd.</span>
</div>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-500">Oct 20, 2023</span>
</td>
<td className="py-4 pl-3 pr-6 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-4 pl-6 pr-3">
<input className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition" type="checkbox"/>
</td>
<td className="py-4 px-3">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">#WO-3045</span>
<span className="text-xs text-slate-500">Replace lobby lighting</span>
</div>
</td>
<td className="py-4 px-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 text-[10px] font-bold">SV</div>
<div className="flex flex-col">
<span className="text-sm text-slate-700">Sunset Valley</span>
<span className="text-xs text-slate-500">Lobby</span>
</div>
</div>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                Medium
                            </span>
</td>
<td className="py-4 px-3">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200/60">
                                Open
                            </span>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-400 italic">Unassigned</span>
</td>
<td className="py-4 px-3">
<span className="text-sm text-slate-500">Oct 19, 2023</span>
</td>
<td className="py-4 pl-3 pr-6 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>

<div className="border-t border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between sticky bottom-0">
<p className="text-xs text-slate-500">Showing <span className="font-medium text-slate-900">1-5</span> of <span className="font-medium text-slate-900">42</span> orders</p>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">Previous</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md hover:bg-gray-50">Next</button>
</div>
</div>
</div>


<div className="absolute inset-0 z-30 flex justify-end pointer-events-none">


<div className="w-[480px] bg-white h-full shadow-drawer pointer-events-auto border-l border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out">

<div className="px-6 py-4 border-b border-gray-200 flex items-start justify-between bg-white">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">#WO-3049</h2>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">In Progress</span>
</div>
<p className="text-sm text-slate-500">Created Oct 24, 2023</p>
</div>
<div className="flex gap-2">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-gray-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="share-2"></i>
</button>
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-gray-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Description</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                            Tenant reported active leak under kitchen sink. Water accumulating in cabinet. Requires immediate inspection of plumbing connections and potential trap replacement. Tenant will be home after 2PM.
                        </p>
</div>

<div className="p-4 rounded-lg border border-gray-200 bg-gray-50 flex items-start gap-3">
<div className="p-2 bg-white rounded border border-gray-200 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Sunset Valley Apartments</h4>
<p className="text-xs text-slate-500 mt-0.5">Unit 4B • 1234 Sunset Blvd, Los Angeles</p>
<div className="flex items-center gap-2 mt-2">
<div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-bold">JD</div>
<span className="text-xs text-slate-600">Tenant: John Doe</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500">Assigned Vendor</label>
<div className="flex items-center gap-2 p-2 border border-gray-200 rounded-md bg-white hover:border-gray-300 cursor-pointer transition">
<img className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?u=mike"/>
<span className="text-sm text-slate-700">Mike's Plumbing</span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500">Priority</label>
<div className="flex items-center gap-2 p-2 border border-gray-200 rounded-md bg-white">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm text-slate-700">High</span>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Financials</h3>
<div className="flex items-center justify-between py-2 border-b border-gray-100">
<span className="text-sm text-slate-500">Estimated Cost</span>
<span className="text-sm font-medium text-slate-900">$250.00</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-gray-100">
<span className="text-sm text-slate-500">Incurred Cost</span>
<span className="text-sm font-medium text-slate-900">$0.00</span>
</div>
<button className="text-sm text-blue-600 font-medium hover:text-blue-700 mt-1 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="plus-circle"></i> Add Quote or Invoice
                        </button>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-wide">Activity Log</h3>
<div className="relative pl-4 border-l-2 border-gray-100 space-y-6">

<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Status changed to In Progress</span>
<span className="text-xs text-slate-500">Today at 10:23 AM by Kate Moore</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-300 ring-4 ring-white"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Work Order Created</span>
<span className="text-xs text-slate-500">Oct 24, 9:00 AM by System</span>
</div>
</div>
</div>

<div className="mt-4 flex gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
<img alt="User" src="https://i.pravatar.cc/150?u=kate"/>
</div>
<div className="flex-1">
<textarea className="w-full text-sm border border-gray-200 rounded-md p-2 focus:ring-1 focus:ring-slate-900 focus:outline-none min-h-[80px]" placeholder="Add a note or comment..."></textarea>
<div className="flex justify-end mt-2">
<button className="bg-white border border-gray-200 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-gray-50 mr-2">Attach</button>
<button className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-slate-800">Post Comment</button>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-3">
<button className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition shadow-sm">Mark Complete</button>
<button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition shadow-sm">Save Changes</button>
</div>
</div>
</div>
</main>


    </>
  );
}
