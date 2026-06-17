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
      

<div className="flex h-screen w-full overflow-hidden">

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="text-lg font-semibold tracking-tighter text-slate-900 uppercase">KuchenWelt</span>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-md group" href="#">
<iconify-icon className="text-slate-900" icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Afspraken
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Klanten
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:magnet-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Leads
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:file-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Offertes
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Opdrachten
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Rapportages
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Team
                </a>
<div className="pt-4 mt-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Instellingen
                    </a>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50/50">

<header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-slate-200 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-10 pr-4 py-1.5 text-sm w-64 border border-slate-200 rounded-md focus:outline-none focus:border-slate-400 focus:ring-0 placeholder:text-slate-400 bg-slate-50" placeholder="Search..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative text-slate-500 hover:text-slate-800 transition-colors">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
<div className="flex items-center gap-3 cursor-pointer">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-slate-900">Stefan W.</p>
<p className="text-[10px] text-slate-500">Admin</p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-[1600px] mx-auto space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:border-slate-300 transition-colors">
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Open Quotes</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">24</h3>
<p className="text-xs text-slate-400 mt-1">Total value: €124k</p>
</div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:border-slate-300 transition-colors">
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Accepted Quotes</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">12</h3>
<p className="text-xs text-slate-400 mt-1">Total value: €86k</p>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:border-slate-300 transition-colors">
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Appointments</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">8</h3>
<p className="text-xs text-slate-400 mt-1">This week</p>
</div>
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between hover:border-slate-300 transition-colors">
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Tasks Due</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">5</h3>
<p className="text-xs text-slate-400 mt-1">Priority High</p>
</div>
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:clipboard-list-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col">
<div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="font-semibold text-slate-900 tracking-tight">Sales Team Results</h3>
<div className="flex items-center gap-2">
<select className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1.5 focus:outline-none text-slate-600">
<option>This Month</option>
<option>This Week</option>
<option>Last Month</option>
</select>
<button className="flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-100 hover:bg-green-100 px-3 py-1.5 rounded transition-colors">
<iconify-icon icon="solar:file-download-linear" width="14"></iconify-icon>
                                        Export Excel
                                    </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-slate-400 border-b border-slate-100">
<th className="px-5 py-3 font-medium uppercase tracking-wider">Rank / Agent</th>
<th className="px-5 py-3 font-medium uppercase tracking-wider text-right">Orders / Gross</th>
<th className="px-5 py-3 font-medium uppercase tracking-wider text-right">Provision</th>
<th className="px-5 py-3 font-medium uppercase tracking-wider text-right">Avg. Margin</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-6 text-center font-bold text-slate-300 group-hover:text-yellow-500 transition-colors">1</div>
<img alt="Agent" className="w-8 h-8 rounded-full border border-slate-100" src="https://i.pravatar.cc/150?u=1"/>
<span className="font-medium text-slate-800">Sarah Weber</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="font-medium text-slate-800">12 Orders</div>
<div className="text-xs text-slate-400">€245,000</div>
</td>
<td className="px-5 py-3 text-right font-medium text-slate-700">€4,250</td>
<td className="px-5 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                    44.5%
                                                </span>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-6 text-center font-bold text-slate-300 group-hover:text-slate-500 transition-colors">2</div>
<img alt="Agent" className="w-8 h-8 rounded-full border border-slate-100" src="https://i.pravatar.cc/150?u=2"/>
<span className="font-medium text-slate-800">Mark Jansen</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="font-medium text-slate-800">9 Orders</div>
<div className="text-xs text-slate-400">€180,000</div>
</td>
<td className="px-5 py-3 text-right font-medium text-slate-700">€3,100</td>
<td className="px-5 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                                    39.2%
                                                </span>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-6 text-center font-bold text-slate-300 group-hover:text-slate-500 transition-colors">3</div>
<img alt="Agent" className="w-8 h-8 rounded-full border border-slate-100" src="https://i.pravatar.cc/150?u=3"/>
<span className="font-medium text-slate-800">Lisa Klein</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="font-medium text-slate-800">7 Orders</div>
<div className="text-xs text-slate-400">€142,000</div>
</td>
<td className="px-5 py-3 text-right font-medium text-slate-700">€2,400</td>
<td className="px-5 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                                    34.0%
                                                </span>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-6 text-center font-bold text-slate-300 group-hover:text-slate-500 transition-colors">4</div>
<img alt="Agent" className="w-8 h-8 rounded-full border border-slate-100" src="https://i.pravatar.cc/150?u=4"/>
<span className="font-medium text-slate-800">Tom Berg</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="font-medium text-slate-800">5 Orders</div>
<div className="text-xs text-slate-400">€90,000</div>
</td>
<td className="px-5 py-3 text-right font-medium text-slate-700">€1,200</td>
<td className="px-5 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                                    28.5%
                                                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 flex flex-col gap-6">
<h3 className="font-semibold text-slate-900 tracking-tight">Forecast</h3>

<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Exp. Quotes</span>
<iconify-icon className="text-slate-400" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900">18</span>
<span className="text-xs font-medium text-emerald-600 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                                        +12%
                                    </span>
</div>
<p className="text-xs text-slate-400 mt-1">vs. last week</p>
</div>

<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Exp. Sales</span>
<iconify-icon className="text-slate-400" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900">€65k</span>
<span className="text-xs font-medium text-rose-600 flex items-center">
<iconify-icon icon="solar:arrow-right-down-linear" width="12"></iconify-icon>
                                        -5%
                                    </span>
</div>
<p className="text-xs text-slate-400 mt-1">vs. last week</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-slate-900 tracking-tight">Installation Analysis</h3>
</div>
<div className="flex items-center justify-center mb-6 relative">
<div className="pie-chart"></div>
<div className="absolute text-center">
<span className="block text-2xl font-bold text-slate-900">65%</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wide">Installed</span>
</div>
</div>
<div className="flex justify-center gap-6 text-xs">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-900"></span>
<span className="text-slate-600">With Installation (84)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-200"></span>
<span className="text-slate-600">Without (46)</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs font-medium text-slate-500">Only Accepted Quotes</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-300 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle"></label>
</input></div>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-4">
<h3 className="font-semibold text-slate-900 tracking-tight">Quote KPI</h3>
<div className="flex items-center gap-2">
<select className="text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1.5 focus:outline-none text-slate-600">
<option>This Week</option>
<option>This Month</option>
</select>
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded transition-colors">
                                        Export
                                    </button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="space-y-1">
<p className="text-xs text-slate-500">Amount Quotes</p>
<p className="text-xl font-semibold text-slate-900">42</p>
<p className="text-xs text-slate-400">€420,500</p>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-500">Amount Accepted</p>
<p className="text-xl font-semibold text-slate-900">14</p>
<p className="text-xs text-slate-400">€145,200</p>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-500">Avg. Conversion</p>
<p className="text-xl font-semibold text-emerald-600">33.3%</p>
<p className="text-xs text-emerald-600/70">Target: 30%</p>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-500">Avg. Quote Amount</p>
<p className="text-xl font-semibold text-slate-900">€10,011</p>
</div>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-600">Quotes with Installation</span>
<span className="text-sm font-semibold text-slate-900">78%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2">
<div className="bg-slate-800 h-2 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
<div className="p-5 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-semibold text-slate-900 tracking-tight">Upcoming Appointments</h3>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</button>
</div>
<div className="p-0">
<div className="flex items-center p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mr-4">
<span className="text-xs font-bold">14</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Consultation: Familie Müller</p>
<p className="text-xs text-slate-500 truncate">14:00 - 15:30 • Showroom A</p>
</div>
<div className="ml-4">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-slate-100 text-slate-600">Today</span>
</div>
</div>
<div className="flex items-center p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center flex-shrink-0 mr-4">
<span className="text-xs font-bold">15</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Measurements: Herr Schmidt</p>
<p className="text-xs text-slate-500 truncate">09:00 - 10:00 • On Site</p>
</div>
<div className="ml-4">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-slate-100 text-slate-600">Tomorrow</span>
</div>
</div>
<div className="flex items-center p-4 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center flex-shrink-0 mr-4">
<span className="text-xs font-bold">15</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Design Review: Frau Wagner</p>
<p className="text-xs text-slate-500 truncate">11:30 - 12:30 • Online</p>
</div>
<div className="ml-4">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-slate-100 text-slate-600">Tomorrow</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
<div className="p-5 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-semibold text-slate-900 tracking-tight">My Tasks</h3>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Add Task</button>
</div>
<div className="p-2 space-y-1">
<label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-md cursor-pointer group transition-colors">
<input className="custom-checkbox mt-0.5 w-4 h-4 border border-slate-300 rounded appearance-none checked:bg-slate-900 checked:border-slate-900 focus:outline-none transition-all" type="checkbox"/>
<div className="flex-1">
<p className="text-sm font-medium text-slate-800 group-hover:text-slate-900">Prepare quote for Project #492</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 font-medium">High</span>
<span className="text-[10px] text-slate-400">Due Today</span>
</div>
</div>
</label>
<label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-md cursor-pointer group transition-colors">
<input className="custom-checkbox mt-0.5 w-4 h-4 border border-slate-300 rounded appearance-none checked:bg-slate-900 checked:border-slate-900 focus:outline-none transition-all" type="checkbox"/>
<div className="flex-1">
<p className="text-sm font-medium text-slate-800 group-hover:text-slate-900">Call back lead: K. Fischer</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 font-medium">Medium</span>
<span className="text-[10px] text-slate-400">Due Tomorrow</span>
</div>
</div>
</label>
<label className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-md cursor-pointer group transition-colors">
<input checked="" className="custom-checkbox mt-0.5 w-4 h-4 border border-slate-300 rounded appearance-none checked:bg-slate-900 checked:border-slate-900 focus:outline-none transition-all opacity-50" type="checkbox"/>
<div className="flex-1 opacity-50">
<p className="text-sm font-medium text-slate-800 line-through">Send invoice #2023-88</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">Done</span>
</div>
</div>
</label>
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
