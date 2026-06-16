import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen flex-col lg:flex-row">

<aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white sticky top-0 z-20 h-auto lg:h-screen flex flex-col justify-between">
<div>
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-gray-900 tracking-tighter font-semibold text-lg">
<div className="w-5 h-5 bg-orange-600 rounded-sm"></div>
                        SCOPE
                    </div>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-orange-50/50 rounded-md ring-1 ring-orange-900/5" href="#">
<iconify-icon className="text-orange-600" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="18"></iconify-icon>
                        Content
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                        Audience
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="18"></iconify-icon>
                        Settings
                    </a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-2 py-2">
<div className="w-8 h-8 rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">John Doe</span>
<span className="text-xs text-gray-500">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="h-16 bg-white border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between px-6 sticky top-0 z-10 gap-4 md:gap-0">

<div className="flex items-center gap-2 text-sm text-gray-500 pt-3 md:pt-0">
<span>Dashboards</span>
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-gray-900 font-medium">Viewer Metrics</span>
</div>

<div className="flex items-center gap-3 pb-3 md:pb-0">

<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 w-48 transition-all" placeholder="Search blog or manual..." type="text"/>
</div>
<div className="h-4 w-px bg-gray-200"></div>

<div className="relative">
<select className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 cursor-pointer font-medium hover:border-gray-300 transition-colors">
<option>All Channels</option>
<option>Sunmi TH Blog</option>
<option>GPOS Blog</option>
<option>GPOS Manual</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</div>

<div className="relative">
<button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-xs rounded-md px-3 py-1.5 hover:bg-gray-50 focus:outline-none focus:border-orange-400 transition-colors">
<iconify-icon className="text-gray-400" icon="lucide:calendar" strokeWidth="1.5" width="14"></iconify-icon>
<span className="font-medium">Last 30 Days</span>
</button>
</div>
</div>
</header>
<div className="p-6 max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between h-32 hover:border-orange-200 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Views</span>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="12"></iconify-icon>
                                12.5%
                            </span>
</div>
<div>
<div className="text-3xl font-medium text-gray-900 tracking-tight">142,308</div>
<div className="text-xs text-gray-400 mt-1">vs. 126,400 last period</div>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between h-32 hover:border-orange-200 transition-colors group">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Most Viewed Content</span>
<iconify-icon className="text-gray-300 group-hover:text-orange-600 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900 line-clamp-1" title="Setting up Sunmi V2 Pro Printer">Setting up Sunmi V2 Pro</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-100">GPOS Manual</span>
<span className="text-xs text-gray-500">8,942 views</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between h-32 hover:border-orange-200 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Avg. Read Time</span>
<span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
<iconify-icon icon="lucide:minus" strokeWidth="1.5" width="12"></iconify-icon>
                                0.2%
                            </span>
</div>
<div>
<div className="text-3xl font-medium text-gray-900 tracking-tight">4m 12s</div>
<div className="text-xs text-gray-400 mt-1">Consistent engagement</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Views Over Time</h3>
<div className="flex gap-2">
<button className="p-1 rounded hover:bg-orange-50 text-gray-400 hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative h-64 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400">
<div className="border-b border-gray-100 w-full h-0 flex items-center"><span className="absolute -left-8">5k</span></div>
<div className="border-b border-gray-100 w-full h-0 flex items-center"><span className="absolute -left-8">4k</span></div>
<div className="border-b border-gray-100 w-full h-0 flex items-center"><span className="absolute -left-8">3k</span></div>
<div className="border-b border-gray-100 w-full h-0 flex items-center"><span className="absolute -left-8">2k</span></div>
<div className="border-b border-gray-100 w-full h-0 flex items-center"><span className="absolute -left-8">1k</span></div>
<div className="border-b border-gray-100 w-full h-0 flex items-center"><span className="absolute -left-8">0</span></div>
</div>

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(249, 115, 22)', stopOpacity: '0.1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(255, 255, 255)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<path d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,50 T100,30 V100 H0 Z" fill="url(#gradient)"></path>

<path d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,50 T100,30" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="opacity-0 hover:opacity-100 transition-opacity" cx="60" cy="40" fill="white" r="1.5" stroke="#f97316" strokeWidth="1"></circle>
<line className="opacity-0 hover:opacity-100 transition-opacity" stroke="#f97316" stroke-dasharray="2 2" strokeWidth="0.5" x1="60" x2="60" y1="40" y2="100"></line>
</svg>

<div className="absolute top-1/4 left-[58%] bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2">
                            3,842 Views
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
</div>
</div>

<div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
<span>Nov 01</span>
<span>Nov 05</span>
<span>Nov 10</span>
<span>Nov 15</span>
<span>Nov 20</span>
<span>Nov 25</span>
<span>Nov 30</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
<h3 className="text-sm font-medium text-gray-900 tracking-tight mb-6">Traffic Source</h3>
<div className="flex flex-col md:flex-row items-center gap-8 h-full justify-center">

<div className="relative w-40 h-40 rounded-full" style={{background: 'conic-gradient(#f97316 0% 45%, #fbbf24 45% 70%, #ef4444 70% 85%, #f3f4f6 85% 100%)'}}>
<div className="absolute inset-0 m-auto w-24 h-24 bg-white rounded-full flex items-center justify-center flex-col shadow-sm">
<span className="text-xs text-gray-400">Total</span>
<span className="text-sm font-semibold text-gray-900">100%</span>
</div>
</div>

<div className="flex flex-col gap-3 w-full md:w-auto">
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-xs text-gray-600">Organic Search</span>
</div>
<span className="text-xs font-medium text-gray-900">45%</span>
</div>
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="text-xs text-gray-600">Direct</span>
</div>
<span className="text-xs font-medium text-gray-900">25%</span>
</div>
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-xs text-gray-600">Referral</span>
</div>
<span className="text-xs font-medium text-gray-900">15%</span>
</div>
<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-gray-100"></div>
<span className="text-xs text-gray-600">Social</span>
</div>
<span className="text-xs font-medium text-gray-900">15%</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Devices &amp; Resolution</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
<span className="text-xs text-gray-500">Active</span>
</div>
</div>
<div className="space-y-5 flex-1 justify-center flex flex-col">

<div className="group">
<div className="flex items-end justify-between text-xs mb-1.5">
<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-orange-50 rounded-md text-orange-400 group-hover:text-orange-600 group-hover:bg-orange-100 transition-colors">
<iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-700">Mobile Portrait</span>
<span className="text-gray-400 scale-95 origin-left">390x844</span>
</div>
</div>
<span className="font-semibold text-gray-900">42%</span>
</div>
<div className="w-full bg-gray-50 rounded-full h-1.5 overflow-hidden">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>

<div className="group">
<div className="flex items-end justify-between text-xs mb-1.5">
<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-400 group-hover:text-amber-500 group-hover:bg-amber-50 transition-colors">
<iconify-icon icon="lucide:monitor" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-700">Desktop Wide</span>
<span className="text-gray-400 scale-95 origin-left">1920x1080</span>
</div>
</div>
<span className="font-semibold text-gray-900">35%</span>
</div>
<div className="w-full bg-gray-50 rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-400 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
</div>

<div className="group">
<div className="flex items-end justify-between text-xs mb-1.5">
<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-400 group-hover:text-red-500 group-hover:bg-red-50 transition-colors">
<iconify-icon icon="lucide:laptop" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-700">Laptop Standard</span>
<span className="text-gray-400 scale-95 origin-left">1366x768</span>
</div>
</div>
<span className="font-semibold text-gray-900">18%</span>
</div>
<div className="w-full bg-gray-50 rounded-full h-1.5 overflow-hidden">
<div className="bg-red-400 h-1.5 rounded-full" style={{width: '18%'}}></div>
</div>
</div>

<div className="group">
<div className="flex items-end justify-between text-xs mb-1.5">
<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-400 group-hover:text-yellow-500 group-hover:bg-yellow-50 transition-colors">
<iconify-icon icon="lucide:tablet" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-700">Tablet</span>
<span className="text-gray-400 scale-95 origin-left">768x1024</span>
</div>
</div>
<span className="font-semibold text-gray-900">5%</span>
</div>
<div className="w-full bg-gray-50 rounded-full h-1.5 overflow-hidden">
<div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '5%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
<h3 className="text-sm font-medium text-gray-900 tracking-tight">Recent Content Performance</h3>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500">Sort by:</span>
<button className="text-xs font-medium text-gray-900 flex items-center gap-1 hover:bg-gray-50 px-2 py-1 rounded">
                                 Views <iconify-icon icon="lucide:arrow-down" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-50/50 border-b border-gray-100">
<th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Title</th>
<th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
<th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Views</th>
<th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Engagement</th>
<th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">

<tr className="group hover:bg-orange-50/30 transition-colors">
<td className="py-3 px-6">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">How to configure GPOS inventory</span>
<span className="text-xs text-gray-400">Published Nov 12</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                            GPOS Manual
                                        </span>
</td>
<td className="py-3 px-6 text-right text-sm text-gray-600 font-medium">12,402</td>
<td className="py-3 px-6 text-right text-sm text-gray-600">4m 20s</td>
<td className="py-3 px-6 text-right">
<button className="text-gray-400 hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-orange-50/30 transition-colors">
<td className="py-3 px-6">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Sunmi T2s Specification Review</span>
<span className="text-xs text-gray-400">Published Nov 10</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                            Sunmi TH Blog
                                        </span>
</td>
<td className="py-3 px-6 text-right text-sm text-gray-600 font-medium">8,105</td>
<td className="py-3 px-6 text-right text-sm text-gray-600">2m 45s</td>
<td className="py-3 px-6 text-right">
<button className="text-gray-400 hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-orange-50/30 transition-colors">
<td className="py-3 px-6">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Troubleshooting Network Errors</span>
<span className="text-xs text-gray-400">Published Nov 08</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                            GPOS Blog
                                        </span>
</td>
<td className="py-3 px-6 text-right text-sm text-gray-600 font-medium">6,220</td>
<td className="py-3 px-6 text-right text-sm text-gray-600">5m 12s</td>
<td className="py-3 px-6 text-right">
<button className="text-gray-400 hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-orange-50/30 transition-colors">
<td className="py-3 px-6">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Setting up Tax Rates in GPOS</span>
<span className="text-xs text-gray-400">Published Nov 05</span>
</div>
</td>
<td className="py-3 px-6">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                            GPOS Manual
                                        </span>
</td>
<td className="py-3 px-6 text-right text-sm text-gray-600 font-medium">4,300</td>
<td className="py-3 px-6 text-right text-sm text-gray-600">1m 30s</td>
<td className="py-3 px-6 text-right">
<button className="text-gray-400 hover:text-orange-600 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<footer className="text-center py-6 text-xs text-gray-400">
                    © 2023 SCOPE Analytics. Internal use only.
                </footer>
</div>
</main>
</div>

    </>
  );
}
