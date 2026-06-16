import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 h-14 flex items-center justify-between px-4 lg:px-6 shrink-0 z-20">
<div className="flex items-center gap-6">

<div className="font-semibold text-lg tracking-tighter text-[#008751] flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-xl" icon="solar:route-square-linear"></iconify-icon>
                NAQEL
            </div>
<div className="h-4 w-px bg-gray-300"></div>

<div className="flex items-center gap-2 text-sm text-gray-600">
<button className="hover:text-gray-900 flex items-center gap-1 transition-colors">
                    Saudi Arabia
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<span className="text-gray-400">/</span>
<button className="font-medium text-gray-900 flex items-center gap-1 transition-colors">
                    Riyadh Province
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-500 mr-2 flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
                Unpublished changes
            </span>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 transition-colors">
                Discard
            </button>
<button className="text-sm font-medium bg-[#008751] text-white px-4 py-1.5 rounded-md hover:bg-[#007043] transition-colors shadow-sm ring-1 ring-inset ring-[#008751]/20 flex items-center gap-2">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
                Publish Map
            </button>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-72 bg-white border-r border-gray-200 flex flex-col shrink-0 z-10 flex-1 lg:flex-none max-w-[280px]">
<div className="p-4 border-b border-gray-100 space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Zones</h2>
<button className="text-gray-400 hover:text-[#008751] transition-colors p-1" title="Add New Zone">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-all" placeholder="Search zones..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto py-2">

<div className="px-3 mb-1">
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1 px-2">Core City</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left group">
<span className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:map-point-linear"></iconify-icon>
                                    Riyadh Central
                                </span>
<span className="text-xs text-gray-400 border border-gray-200 px-1.5 rounded bg-white">Active</span>
</button>
</li>
<li>

<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm bg-[#008751]/5 text-[#008751] font-medium transition-colors text-left border border-[#008751]/10">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#008751]" icon="solar:map-point-linear"></iconify-icon>
                                    Riyadh North (Diriyah)
                                </span>
<div className="w-1.5 h-1.5 rounded-full bg-[#008751]"></div>
</button>
</li>
<li>
<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left group">
<span className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:map-point-linear"></iconify-icon>
                                    Riyadh South
                                </span>
<span className="text-xs text-gray-400 border border-gray-200 px-1.5 rounded bg-white">Active</span>
</button>
</li>
</ul>
</div>

<div className="px-3 mt-4 mb-1">
<div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1 px-2">Special Zones</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left group">
<span className="flex items-center gap-2">
<iconify-icon className="text-purple-400 group-hover:text-purple-500" icon="solar:routing-2-linear"></iconify-icon>
                                    KKIA Airport
                                </span>
<span className="text-xs text-purple-600 bg-purple-50 border border-purple-100 px-1.5 rounded">Queue</span>
</button>
</li>
<li>
<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left group">
<span className="flex items-center gap-2">
<iconify-icon className="text-red-400 group-hover:text-red-500" icon="solar:forbidden-circle-linear"></iconify-icon>
                                    Diplomatic Quarter
                                </span>
<span className="text-xs text-red-600 bg-red-50 border border-red-100 px-1.5 rounded">Restricted</span>
</button>
</li>
</ul>
</div>
</div>
</aside>

<main className="flex-1 relative map-pattern min-w-0 flex flex-col">

<div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-white rounded-lg shadow-sm border border-gray-200 p-1">
<button className="p-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors" title="Select">
<iconify-icon icon="solar:cursor-linear"></iconify-icon>
</button>
<button className="p-2 rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" title="Draw Polygon">
<iconify-icon icon="solar:polygon-linear"></iconify-icon>
</button>
<button className="p-2 rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" title="Edit Points">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</button>
<div className="h-px bg-gray-200 my-1"></div>
<button className="p-2 rounded-md text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors" title="Delete Zone">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-4 right-4 z-10">
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1.5 flex items-center w-64">
<iconify-icon className="text-gray-400 ml-1 mr-2" icon="solar:map-arrow-linear"></iconify-icon>
<input className="w-full text-sm outline-none placeholder-gray-400" placeholder="Find location..." type="text"/>
</div>
</div>

<div className="absolute inset-0 overflow-hidden flex items-center justify-center cursor-crosshair">
<svg className="transform scale-125 origin-center" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

<path d="M 100 0 L 150 800 M 300 -100 L 250 800 M 0 200 L 800 150 M -100 400 L 900 450" fill="none" stroke="#e2e8f0" strokeWidth="6"></path>
<path d="M 100 0 L 150 800 M 300 -100 L 250 800" fill="none" stroke="#f1f5f9" strokeWidth="4"></path>

<g transform="translate(100, 50)">
<polygon className="cursor-move transition-all duration-300 hover:fill-opacity-20" fill="#008751" fillOpacity="0.12" points="250,150 450,180 500,350 380,450 200,380 180,250" stroke="#008751" stroke-dasharray="0" strokeWidth="2"></polygon>

<circle className="cursor-pointer hover:scale-125 transition-transform" cx="250" cy="150" fill="white" r="4.5" stroke="#008751" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:scale-125 transition-transform" cx="450" cy="180" fill="white" r="4.5" stroke="#008751" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:scale-125 transition-transform" cx="500" cy="350" fill="white" r="4.5" stroke="#008751" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:scale-125 transition-transform" cx="380" cy="450" fill="white" r="4.5" stroke="#008751" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:scale-125 transition-transform" cx="200" cy="380" fill="white" r="4.5" stroke="#008751" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:scale-125 transition-transform" cx="180" cy="250" fill="white" r="4.5" stroke="#008751" strokeWidth="2"></circle>

<rect fill="white" fillOpacity="0.9" height="24" rx="4" stroke="#e5e7eb" strokeWidth="1" width="85" x="300" y="280"></rect>
<text fill="#4b5563" fontFamily="Inter" fontSize="10" font-weight="500" text-anchor="middle" x="342" y="296">42.5 sq km</text>
</g>
</svg>
</div>

<div className="absolute bottom-6 right-6 z-10 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
<button className="p-2 text-gray-600 hover:bg-gray-50 transition-colors border-b border-gray-100 flex items-center justify-center">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
<button className="p-2 text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
</div>
</main>

<aside className="w-96 bg-white border-l border-gray-200 flex flex-col shrink-0 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.02)] z-20 overflow-hidden">

<div className="px-5 py-4 border-b border-gray-100 bg-white">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">Riyadh North (Diriyah)</h3>
<div className="flex items-center gap-2">

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer z-10 top-0.5 left-0.5 transition-all duration-200 peer" id="zone-status" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200" htmlFor="zone-status"></label>
</input></div>
</div>
</div>
<p className="text-xs text-gray-500 font-normal">Manage geofence properties, pricing logic, and active fleets for this area.</p>
</div>

<div className="flex border-b border-gray-200 px-2 bg-gray-50/50">
<button className="px-4 py-2.5 text-sm font-medium text-[#008751] border-b-2 border-[#008751] relative z-10">General</button>
<button className="px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors border-b-2 border-transparent">Pricing</button>
<button className="px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors border-b-2 border-transparent flex items-center gap-1.5">
                    Fleets
                    <span className="bg-gray-100 text-gray-600 py-0.5 px-1.5 rounded-full text-[10px] leading-none">3</span>
</button>
<button className="px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors border-b-2 border-transparent">Rules</button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-8">

<section>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Zone Information</h4>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Internal Name</label>
<input className="w-full text-sm text-gray-900 border border-gray-200 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-shadow shadow-sm" type="text" value="Riyadh North (Diriyah)"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Display Name (User App)</label>
<input className="w-full text-sm text-gray-900 border border-gray-200 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-shadow shadow-sm" type="text" value="North Riyadh"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Zone Type</label>
<div className="relative">
<select className="w-full text-sm text-gray-900 border border-gray-200 rounded-md py-1.5 pl-3 pr-8 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] shadow-sm">
<option selected="" value="operational">Standard Operational</option>
<option value="airport">Airport (Queue System)</option>
<option value="restricted">Restricted Area</option>
<option value="promotional">Promotional Hub</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section>
<div className="flex items-center justify-between mb-3">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Permitted Models</h4>
<span className="text-xs text-[#008751] font-medium cursor-pointer hover:underline">Select All</span>
</div>
<div className="space-y-2 border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">

<div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon className="text-lg" icon="solar:smart-home-linear"></iconify-icon> 
</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-tight">Economy</p>
<p className="text-[11px] text-gray-500 mt-0.5">Standard rides</p>
</div>
</div>

<div className="relative inline-block w-7 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer z-10 top-[2px] left-[2px] transition-all duration-200" id="t_eco" name="toggle_eco" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4.5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200" htmlFor="t_eco"></label>
</input></div>
</div>

<div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon className="text-lg" icon="solar:key-square-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-tight">Comfort</p>
<p className="text-[11px] text-gray-500 mt-0.5">Newer cars, more legroom</p>
</div>
</div>
<div className="relative inline-block w-7 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer z-10 top-[2px] left-[2px] transition-all duration-200" id="t_comf" name="toggle_comf" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4.5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200" htmlFor="t_comf"></label>
</input></div>
</div>

<div className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors opacity-70">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-400">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-tight">Executive</p>
<p className="text-[11px] text-gray-500 mt-0.5">Luxury vehicles</p>
</div>
</div>
<div className="relative inline-block w-7 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer z-10 top-[2px] left-[2px] transition-all duration-200" id="t_exec" name="toggle_exec" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4.5 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200" htmlFor="t_exec"></label>
</input></div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Zone Multipliers</h4>
<div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">

<div>
<div className="flex justify-between items-center mb-2">
<label className="block text-xs font-medium text-gray-700">Demand Surcharge (Surge)</label>
<span className="text-xs font-semibold text-[#008751]">1.2x</span>
</div>
<div className="relative w-full h-1.5 bg-gray-200 rounded-full">
<div className="absolute top-0 left-0 h-1.5 bg-[#008751] rounded-full w-1/3"></div>
<div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white border-2 border-[#008751] rounded-full -translate-x-1/2 -translate-y-1/2 cursor-grab shadow-sm"></div>
</div>
<div className="flex justify-between text-[10px] text-gray-400 mt-1.5 font-medium">
<span>1.0x (Default)</span>
<span>3.0x (Max)</span>
</div>
</div>
<div className="h-px bg-gray-200"></div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[11px] font-medium text-gray-600 mb-1">Base Fare Addition</label>
<div className="relative">
<span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-medium">SAR</span>
<input className="w-full text-sm text-gray-900 border border-gray-300 rounded-md py-1.5 pl-9 pr-2 focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751]" type="text" value="5.00"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-gray-600 mb-1">Min. Fare Override</label>
<div className="relative">
<span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-medium">SAR</span>
<input className="w-full text-sm text-gray-900 border border-gray-300 rounded-md py-1.5 pl-9 pr-2 focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751]" type="text" value="15.00"/>
</div>
</div>
</div>
</div>
</section>

<div className="pt-2 pb-6">
<button className="w-full bg-white border border-gray-200 text-gray-700 font-medium text-sm py-2 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
                        Revert to Global Settings
                    </button>
</div>
</div>
</aside>
</div>

    </>
  );
}
