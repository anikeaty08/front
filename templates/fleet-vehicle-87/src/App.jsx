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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-50">
<div className="flex items-center gap-2 text-slate-900 tracking-tighter font-semibold text-lg">
<div className="w-6 h-6 saudi-green-bg rounded-md flex items-center justify-center text-white text-xs">R</div>
                    ROAM<span className="text-slate-400">SA</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Drivers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm saudi-green-text bg-green-50/50 font-medium rounded-lg" href="#">
<iconify-icon icon="solar:wheel-angle-linear" width="20"></iconify-icon>
                    Vehicles
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                    Live Map
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
                    Fares &amp; Pricing
                </a>
</nav>
<div className="p-4 border-t border-gray-50">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-lg hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                    Settings
                </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="flex text-sm font-medium text-slate-500">
<span className="hover:text-slate-900 cursor-pointer">Fleet</span>
<span className="mx-2 text-slate-300">/</span>
<span className="saudi-green-text">Configuration</span>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200">
<iconify-icon icon="solar:export-linear" width="18"></iconify-icon>
                        Export
                    </button>
<button className="saudi-green-bg text-white text-sm font-medium px-4 py-1.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Add Type
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-7xl mx-auto space-y-10">

<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900">Vehicle Management</h1>
<p className="text-slate-500 text-sm mt-1">Manage service types, approved manufacturers, and fleet regulations.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Total Fleet</p>
<h3 className="text-2xl font-medium text-slate-900 mt-2 tracking-tight">2,405</h3>
</div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:car-linear" width="22"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Active Now</p>
<h3 className="text-2xl font-medium text-emerald-600 mt-2 tracking-tight">1,832</h3>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:bolt-linear" width="22"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Pending Approval</p>
<h3 className="text-2xl font-medium text-amber-600 mt-2 tracking-tight">45</h3>
</div>
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:clipboard-check-linear" width="22"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Vehicle Types</p>
<h3 className="text-2xl font-medium text-slate-900 mt-2 tracking-tight">5</h3>
</div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:layers-linear" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-slate-800">Vehicle Types</h2>
<button className="text-xs font-medium text-slate-500 hover:text-[#006C35]">Manage Hierarchy</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="group relative bg-white border saudi-green-border p-4 rounded-xl shadow-sm cursor-pointer transition-all">
<div className="absolute top-3 right-3 text-[#006C35]">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#006C35] flex items-center justify-center mb-3">
<iconify-icon icon="solar:sedan-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 text-sm">Standard</h3>
<p className="text-xs text-slate-400 mt-1">4 Seats • Economy</p>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
<span className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">1,204 active</span>
</div>
</div>

<div className="group relative bg-white border border-gray-200 p-4 rounded-xl hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-slate-600 flex items-center justify-center mb-3 group-hover:bg-slate-100">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 text-sm">Premium</h3>
<p className="text-xs text-slate-400 mt-1">4 Seats • Luxury</p>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
<span className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">450 active</span>
</div>
</div>

<div className="group relative bg-white border border-gray-200 p-4 rounded-xl hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-gray-50 text-slate-600 flex items-center justify-center mb-3 group-hover:bg-slate-100">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 text-sm">Family XL</h3>
<p className="text-xs text-slate-400 mt-1">7 Seats • Large</p>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
<span className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">320 active</span>
</div>
</div>
</div>
</section>

<section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-base font-medium text-slate-800">Approved Models</h2>
<p className="text-xs text-slate-400 mt-0.5">Vehicles permitted for <span className="font-medium text-[#006C35]">Standard</span> class.</p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006C35]/20 focus:border-[#006C35] w-full sm:w-64 transition-shadow" placeholder="Search make or model..." type="text"/>
</div>
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-slate-600">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
<button className="p-2 bg-slate-900 rounded-lg hover:bg-slate-800 text-white">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50 text-slate-500 font-medium border-b border-gray-100">
<tr>
<th className="px-5 py-3 font-medium">Manufacturer</th>
<th className="px-5 py-3 font-medium">Model</th>
<th className="px-5 py-3 font-medium">Year Limit</th>
<th className="px-5 py-3 font-medium">Capacity</th>
<th className="px-5 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50 text-slate-700">
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-slate-800" icon="simple-icons:toyota" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Toyota</span>
</div>
</td>
<td className="px-5 py-3.5">Camry</td>
<td className="px-5 py-3.5"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">2018+</span></td>
<td className="px-5 py-3.5 text-slate-500">4 Pass + 2 Bags</td>
<td className="px-5 py-3.5 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-slate-800" icon="simple-icons:hyundai" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Hyundai</span>
</div>
</td>
<td className="px-5 py-3.5">Sonata</td>
<td className="px-5 py-3.5"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">2019+</span></td>
<td className="px-5 py-3.5 text-slate-500">4 Pass + 2 Bags</td>
<td className="px-5 py-3.5 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-slate-800" icon="simple-icons:honda" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Honda</span>
</div>
</td>
<td className="px-5 py-3.5">Accord</td>
<td className="px-5 py-3.5"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">2018+</span></td>
<td className="px-5 py-3.5 text-slate-500">4 Pass + 2 Bags</td>
<td className="px-5 py-3.5 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-5 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-slate-800" icon="simple-icons:nissan" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Nissan</span>
</div>
</td>
<td className="px-5 py-3.5">Altima</td>
<td className="px-5 py-3.5"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">2020+</span></td>
<td className="px-5 py-3.5 text-slate-500">4 Pass + 2 Bags</td>
<td className="px-5 py-3.5 text-right">
<button className="text-slate-400 hover:text-[#006C35] transition-colors"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-5 py-3 border-t border-gray-100 bg-gray-50/30 flex justify-center">
<button className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1">
                                        View all 24 models <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-6">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sticky top-24">
<div className="flex items-center gap-2 mb-6">
<div className="p-2 bg-emerald-50 rounded-lg text-[#006C35]">
<iconify-icon icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900 text-sm">Class Configuration</h3>
<p className="text-xs text-slate-400">Settings for "Standard"</p>
</div>
</div>
<form className="space-y-6">

<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">Require Inspection</span>
<span className="text-xs text-slate-400">Monthly vehicle check</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 transition-all duration-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">Branding Sticker</span>
<span className="text-xs text-slate-400">Must have logo decal</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 transition-all duration-300" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
</div>
<hr className="border-gray-100"/>

<div className="space-y-4">
<div>
<label className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
<span>Max Vehicle Age</span>
<span className="text-[#006C35]">5 Years</span>
</label>
<input className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#006C35]" max="10" min="1" type="range" value="5"/>
<div className="flex justify-between text-[10px] text-slate-400 mt-1">
<span>1 Year</span>
<span>10 Years</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Trunk Capacity (Min)</label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg focus:ring-[#006C35] focus:border-[#006C35] block p-2.5 outline-none transition-shadow">
<option>2 Large Suitcases</option>
<option>3 Large Suitcases</option>
<option>4 Large Suitcases</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<hr className="border-gray-100"/>

<div>
<h4 className="text-xs font-medium text-slate-900 uppercase tracking-wide mb-3">Required Documents</h4>
<div className="space-y-2">
<label className="flex items-center p-2 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
<input checked="" className="w-4 h-4 text-[#006C35] bg-gray-100 border-gray-300 rounded focus:ring-[#006C35]" type="checkbox"/>
<span className="ml-2 text-sm text-slate-600">Vehicle Registration (Istimara)</span>
</label>
<label className="flex items-center p-2 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
<input checked="" className="w-4 h-4 text-[#006C35] bg-gray-100 border-gray-300 rounded focus:ring-[#006C35]" type="checkbox"/>
<span className="ml-2 text-sm text-slate-600">Insurance Policy</span>
</label>
<label className="flex items-center p-2 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
<input className="w-4 h-4 text-[#006C35] bg-gray-100 border-gray-300 rounded focus:ring-[#006C35]" type="checkbox"/>
<span className="ml-2 text-sm text-slate-600">Cleanliness Certificate</span>
</label>
</div>
</div>
<div className="pt-2">
<button className="w-full saudi-green-bg text-white font-medium text-sm rounded-lg py-2.5 shadow-sm hover:opacity-90 transition-opacity">
                                            Save Changes
                                        </button>
</div>
</form>
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
