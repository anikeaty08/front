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
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-[#165d31]">
<iconify-icon icon="solar:steering-wheel-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg tracking-tighter font-semibold text-gray-900">SAUDI<span className="text-[#165d31]">RIDE</span></span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Drivers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:car-linear" width="20"></iconify-icon>
                    Vehicles
                </a>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Operations</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#165d31] bg-[#165d31]/5 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
                    Eligibility
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon>
                    Service Types
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                    Regions &amp; Zones
                </a>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">System</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                    Settings
                </a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#165d31] font-medium text-xs">
                        AD
                    </div>
<div>
<p className="text-sm font-medium text-gray-900">Admin User</p>
<p className="text-xs text-gray-500">Super Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="flex items-center gap-2 text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Operations</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-medium text-gray-900">Eligibility Management</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#165d31] focus:border-[#165d31] w-64 bg-gray-50 placeholder-gray-400" placeholder="Search drivers, vehicles..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Driver &amp; Vehicle Eligibility</h1>
<p className="text-sm text-gray-500 mt-1">Manage service tiers, assign rules, and monitor compliance status.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                            Filters
                        </button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-[#165d31] rounded-md hover:bg-[#124d29] shadow-sm flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
                            Apply Rules Template
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Drivers</span>
<iconify-icon className="text-gray-400" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">2,453</div>
<div className="flex items-center gap-1 mt-1 text-xs text-emerald-600">
<iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon>
<span>+12% this month</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pending Review</span>
<iconify-icon className="text-gray-400" icon="solar:clipboard-check-linear" width="18"></iconify-icon>
</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">48</div>
<div className="text-xs text-gray-500 mt-1">Requiring manual approval</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Eligible (Standard)</span>
<iconify-icon className="text-gray-400" icon="solar:verified-check-linear" width="18"></iconify-icon>
</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">1,890</div>
<div className="text-xs text-gray-500 mt-1">92% Compliance rate</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Non-Compliant</span>
<iconify-icon className="text-gray-400" icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">112</div>
<div className="flex items-center gap-1 mt-1 text-xs text-red-600">
<span>Expiring documents</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

<div className="px-5 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<button className="text-sm font-medium text-[#165d31] border-b-2 border-[#165d31] pb-4 -mb-4 px-1">Drivers</button>
<button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-4 -mb-4 px-1 transition-colors">Vehicles</button>
<button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-4 -mb-4 px-1 transition-colors">Service Config</button>
</div>
<div className="flex items-center gap-2">

<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100">
<span>Service Type: All</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>

<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100">
<span>Region: Riyadh</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="px-5 py-3 bg-gray-50/50 border-b border-gray-100 flex items-center gap-2 flex-wrap">
<span className="text-xs font-medium text-gray-500 mr-2">Active Filters:</span>
<div className="flex items-center gap-1 pl-2 pr-1 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 shadow-sm">
<span>Rating &gt; 4.5</span>
<button className="hover:text-red-500"><iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon></button>
</div>
<div className="flex items-center gap-1 pl-2 pr-1 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 shadow-sm">
<span>Region: Riyadh</span>
<button className="hover:text-red-500"><iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon></button>
</div>
<button className="text-xs text-[#165d31] hover:underline font-medium ml-2">Clear all</button>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100">
<th className="px-5 py-3 w-10">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Driver / Vehicle</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Service Eligibility</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-5 py-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">

<img alt="avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Ahmed Al-Sayed</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
                                                    Toyota Camry <span className="text-gray-300">|</span> 2023
                                                </div>
</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex gap-2 flex-wrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Standard</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">Family</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm text-gray-700">4.9</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm text-gray-600">Verified</span>
</div>
</td>
<td className="px-5 py-4 text-right">
<button className="text-gray-400 hover:text-[#165d31] transition-colors p-1">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-1">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group bg-orange-50/20">
<td className="px-5 py-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">
<img alt="avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Omar"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Omar Khalid</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
                                                    Hyundai Sonata <span className="text-gray-300">|</span> 2021
                                                </div>
</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex gap-2 flex-wrap items-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Standard</span>
<span className="text-xs text-gray-400">+ Add</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm text-gray-700">4.6</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2 group relative cursor-pointer">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm text-orange-700 font-medium">Doc Expiring</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-xs rounded shadow-lg z-20">
                                                Insurance expires in 3 days.
                                            </div>
</div>
</td>
<td className="px-5 py-4 text-right">
<button className="text-gray-400 hover:text-[#165d31] transition-colors p-1">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-1">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-5 py-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">
<img alt="avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fahad"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Fahad Abdullah</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
                                                    Lexus ES <span className="text-gray-300">|</span> 2024
                                                </div>
</div>
</div>
</td>
<td className="px-5 py-4">
<div className="flex gap-2 flex-wrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Standard</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-900 text-white border border-gray-800">Premium</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Airport</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm text-gray-700">5.0</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm text-gray-600">Verified</span>
</div>
</td>
<td className="px-5 py-4 text-right">
<button className="text-gray-400 hover:text-[#165d31] transition-colors p-1">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-1">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="bg-red-50/30 hover:bg-red-50/50 transition-colors group">
<td className="px-5 py-4">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-all">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0 grayscale opacity-80">
<img alt="avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Salim"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Salim Jaber</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
                                                    Kia Optima <span className="text-gray-300">|</span> 2018
                                                </div>
</div>
</div>
</td>
<td className="px-5 py-4">
<span className="text-xs text-gray-400 italic">No eligible services</span>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-1">
<iconify-icon className="text-gray-300" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm text-gray-500">3.8</span>
</div>
</td>
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-red-600 font-medium">Below Standards</span>
</div>
</td>
<td className="px-5 py-4 text-right">
<button className="text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 px-3 py-1 rounded text-xs font-medium transition-colors">
                                            Review
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 1 to 4 of 2,453 entries</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-[#165d31] bg-[#165d31] text-white text-xs font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-medium">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-medium">...</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-medium">24</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-8">
<h2 className="text-lg font-medium tracking-tight text-gray-900 mb-4">Eligibility Rules</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:car-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Standard Tier</h3>
<p className="text-xs text-gray-500">Global Baseline</p>
</div>
</div>
<div className="relative relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-gray-600">
<span>Min Vehicle Year</span>
<span className="font-medium">2018</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-600">
<span>Min Rating</span>
<span className="font-medium">4.2</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
<div className="bg-[#165d31] h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-gray-400">Compliance</span>
<span className="text-[10px] text-[#165d31]">98%</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Premium Tier</h3>
<p className="text-xs text-gray-500">Luxury Fleet</p>
</div>
</div>
<div className="relative relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle2"></label>
</input></div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-gray-600">
<span>Min Vehicle Year</span>
<span className="font-medium">2022</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-600">
<span>Min Rating</span>
<span className="font-medium">4.8</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
<div className="bg-orange-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-gray-400">Compliance</span>
<span className="text-[10px] text-orange-600">85%</span>
</div>
</div>
</div>

<button className="border border-dashed border-gray-300 rounded-xl p-5 flex flex-col items-center justify-center text-gray-500 hover:border-[#165d31] hover:text-[#165d31] hover:bg-emerald-50/10 transition-all">
<iconify-icon className="mb-2 opacity-50" icon="solar:add-circle-linear" width="32"></iconify-icon>
<span className="text-sm font-medium">Create New Rule Set</span>
</button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
