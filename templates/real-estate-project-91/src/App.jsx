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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
950: '#030712',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 flex-shrink-0 z-20">

<div className="w-8 h-8 bg-gray-900 text-white rounded-md flex items-center justify-center mb-8 cursor-pointer">
<span className="text-sm font-semibold tracking-tighter">NM</span>
</div>

<nav className="flex flex-col gap-4 w-full px-2">
<a className="w-full aspect-square rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" title="Dashboard">
<iconify-icon height="20" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full aspect-square rounded-lg flex items-center justify-center bg-gray-100 text-gray-900 transition-colors" href="#" title="Projects">
<iconify-icon height="20" icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full aspect-square rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" title="Contacts">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full aspect-square rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" title="Documents">
<iconify-icon height="20" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</nav>

<div className="mt-auto flex flex-col gap-4 w-full px-2">
<a className="w-full aspect-square rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" title="Settings">
<iconify-icon height="20" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<div className="w-8 h-8 rounded-full bg-gray-200 mx-auto overflow-hidden cursor-pointer border border-gray-300 mt-2">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Nester&amp;backgroundColor=e5e7eb"/>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-gray-50">

<header className="bg-white border-b border-gray-200 px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-10">
<div>
<nav aria-label="Breadcrumb" className="flex text-xs text-gray-500 mb-1">
<ol className="flex items-center space-x-2">
<li><a className="hover:text-gray-900 transition-colors" href="#">Projects</a></li>
<li>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</li>
<li aria-current="page" className="text-gray-900 font-medium">Riverside Residences</li>
</ol>
</nav>
<div className="flex items-center gap-3">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Riverside Residences</h1>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Active</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm">
<iconify-icon height="16" icon="solar:printer-linear" width="16"></iconify-icon>
                    Report
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-sm">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Add Unit
                </button>
</div>
</header>

<div className="bg-white border-b border-gray-200 px-6 lg:px-8">
<nav aria-label="Tabs" className="-mb-px flex space-x-6 overflow-x-auto">
<a aria-current="page" className="border-gray-900 text-gray-900 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
                    Overview
                </a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                    Units <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">45</span>
</a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                    Listings
                </a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                    Leads <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">128</span>
</a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                    Marketing
                </a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                    Documents
                </a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                    Stakeholders
                </a>
</nav>
</div>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Total Units</span>
<iconify-icon className="text-gray-400" height="18" icon="solar:buildings-linear" width="18"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">45</span>
</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Available</span>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">12</span>
<span className="text-xs text-gray-500">26%</span>
</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Reserved</span>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">8</span>
<span className="text-xs text-gray-500">17%</span>
</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Sold</span>
<div className="w-2 h-2 rounded-full bg-gray-400"></div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">25</span>
<span className="text-xs text-green-600 font-medium flex items-center">
<iconify-icon className="mr-1" height="12" icon="solar:trend-up-linear" width="12"></iconify-icon>
                                +2 this week
                            </span>
</div>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-500">Est. Volume (Sold)</span>
<iconify-icon className="text-gray-400" height="18" icon="solar:wad-of-money-linear" width="18"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">€14.2M</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '55%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

<div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
<h2 className="text-base font-semibold text-gray-900 tracking-tight">Unit Overview</h2>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-full sm:w-48 transition-shadow" placeholder="Search units..." type="text"/>
</div>

<button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon height="14" icon="solar:filter-linear" width="14"></iconify-icon>
                                    Status
                                    <iconify-icon className="text-gray-400" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-white border-b border-gray-200">
<th className="py-3 px-4 w-10">

<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 cursor-pointer transition-colors" type="checkbox"/>
<iconify-icon className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0.5 top-0.5" height="12" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Listed</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Details</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Target Price</th>
<th className="py-3 px-4 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 cursor-pointer transition-colors" type="checkbox"/>
<iconify-icon className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0.5 top-0.5" height="12" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</td>
<td className="py-3 px-4">
<div className="font-medium text-gray-900">A-101</div>
<div className="text-xs text-gray-500">Ground Floor</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                                                Available
                                            </span>
</td>
<td className="py-3 px-4">

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</td>
<td className="py-3 px-4 text-right">
<div className="text-gray-900">85 sqm</div>
<div className="text-xs text-gray-500">3 Rooms</div>
</td>
<td className="py-3 px-4 text-right">
<div className="font-medium text-gray-900">€ 450,000</div>
<div className="text-xs text-gray-500">€ 5,294/sqm</div>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon height="18" icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 cursor-pointer transition-colors" type="checkbox"/>
<iconify-icon className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0.5 top-0.5" height="12" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</td>
<td className="py-3 px-4">
<div className="font-medium text-gray-900">A-102</div>
<div className="text-xs text-gray-500">Ground Floor</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                                                Reserved
                                            </span>
</td>
<td className="py-3 px-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</td>
<td className="py-3 px-4 text-right">
<div className="text-gray-900">110 sqm</div>
<div className="text-xs text-gray-500">4 Rooms</div>
</td>
<td className="py-3 px-4 text-right">
<div className="font-medium text-gray-900">€ 580,000</div>
<div className="text-xs text-gray-500">€ 5,272/sqm</div>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon height="18" icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 cursor-pointer transition-colors" type="checkbox"/>
<iconify-icon className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0.5 top-0.5" height="12" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</td>
<td className="py-3 px-4">
<div className="font-medium text-gray-900 text-gray-500">A-201</div>
<div className="text-xs text-gray-400">1st Floor</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                                Sold
                                            </span>
</td>
<td className="py-3 px-4">
<label className="relative inline-flex items-center cursor-not-allowed opacity-50">
<input className="sr-only peer" disabled="" type="checkbox"/>
<div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</td>
<td className="py-3 px-4 text-right text-gray-500">
<div>85 sqm</div>
<div className="text-xs">3 Rooms</div>
</td>
<td className="py-3 px-4 text-right text-gray-500">
<div className="font-medium line-through">€ 465,000</div>
<div className="text-xs">Sold at € 460k</div>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon height="18" icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-gray-900 checked:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 cursor-pointer transition-colors" type="checkbox"/>
<iconify-icon className="absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0.5 top-0.5" height="12" icon="solar:check-read-linear" strokeWidth="2" width="12"></iconify-icon>
</div>
</td>
<td className="py-3 px-4">
<div className="font-medium text-gray-900">P-501</div>
<div className="text-xs text-gray-500">Penthouse</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                                                Available
                                            </span>
</td>
<td className="py-3 px-4">

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</td>
<td className="py-3 px-4 text-right">
<div className="text-gray-900">180 sqm</div>
<div className="text-xs text-gray-500">5 Rooms + Terrace</div>
</td>
<td className="py-3 px-4 text-right">
<div className="font-medium text-gray-900">€ 1,250,000</div>
<div className="text-xs text-gray-500">€ 6,944/sqm</div>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon height="18" icon="solar:menu-dots-bold" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-gray-200 bg-gray-50/50 flex items-center justify-between text-xs text-gray-500">
<span>Showing 4 of 45 units</span>
<div className="flex gap-1">
<button className="px-2 py-1 border border-gray-200 rounded hover:bg-white disabled:opacity-50">Prev</button>
<button className="px-2 py-1 border border-gray-200 rounded bg-white hover:bg-gray-50">Next</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:chart-square-linear"></iconify-icon>
                                Lead Sources
                            </h3>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-700 font-medium">Project Website</span>
<span className="text-gray-500">45% (58)</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-700 font-medium">ImmoScout24</span>
<span className="text-gray-500">30% (38)</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-600 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-700 font-medium">Company Website</span>
<span className="text-gray-500">15% (19)</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-400 h-1.5 rounded-full" style={{width: '15%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-700 font-medium">Organic / Referrals</span>
<span className="text-gray-500">10% (13)</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-300 h-1.5 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight mb-3">Project Tools</h3>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all group text-left">
<span className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:letter-linear"></iconify-icon>
                                        Mass Email Leads
                                    </span>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all group text-left">
<span className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:magic-stick-3-linear"></iconify-icon>
                                        Match Leads to Units
                                    </span>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all group text-left">
<span className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:folder-with-files-linear"></iconify-icon>
                                        Project Documents
                                    </span>
<iconify-icon className="text-gray-300 group-hover:text-gray-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
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
