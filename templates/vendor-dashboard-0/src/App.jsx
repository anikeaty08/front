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
      

<input className="peer/sidebar hidden" id="sidebar-toggle" type="checkbox"/>
<input className="peer/toast hidden" id="toast-trigger" type="checkbox"/>
<input className="peer/item-modal hidden" id="item-modal" type="checkbox"/>

<div className="flex h-screen w-full">

<aside className="w-64 peer-checked/sidebar:w-16 transition-all duration-300 ease-in-out border-r border-[#0b4a61] bg-[#062530] flex flex-col z-20 shrink-0 group">

<div className="h-16 flex items-center px-4 border-b border-[#0b4a61] justify-between overflow-hidden shrink-0">
<span className="font-semibold text-lg tracking-tight text-white transition-opacity duration-200 peer-checked/sidebar:opacity-0 peer-checked/sidebar:w-0 whitespace-nowrap overflow-hidden">
                    VNDR
                </span>
<label className="cursor-pointer text-[#75d6f8] hover:text-white transition-colors flex shrink-0 p-1 rounded-md hover:bg-[#0b4a61]" htmlFor="sidebar-toggle">
<iconify-icon className="text-xl transition-transform duration-300 peer-checked/sidebar:rotate-180" icon="solar:double-alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</label>
</div>

<nav className="flex-1 p-3 space-y-1 overflow-hidden">
<label className="cursor-pointer flex items-center gap-3 px-2 py-2 rounded-md text-white bg-[#0b4a61] font-medium transition-colors relative group/nav" htmlFor="tab-orders">
<iconify-icon className="text-xl shrink-0" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<span className="transition-opacity duration-200 peer-checked/sidebar:opacity-0 whitespace-nowrap overflow-hidden">Orders Board</span>
<div className="absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover/nav:peer-checked/sidebar:opacity-100 transition-opacity z-50 whitespace-nowrap">
                        Orders Board
                    </div>
</label>
<label className="cursor-pointer flex items-center gap-3 px-2 py-2 rounded-md text-[#a3e4fa] hover:bg-[#0b4a61]/50 hover:text-white font-medium transition-colors relative group/nav" htmlFor="tab-reports">
<iconify-icon className="text-xl shrink-0" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="transition-opacity duration-200 peer-checked/sidebar:opacity-0 whitespace-nowrap overflow-hidden">Reports</span>
<div className="absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover/nav:peer-checked/sidebar:opacity-100 transition-opacity z-50 whitespace-nowrap">
                        Reports
                    </div>
</label>
</nav>

<div className="p-3 border-t border-[#0b4a61] overflow-hidden shrink-0">
<div className="flex items-center gap-3 px-1">
<div className="w-8 h-8 rounded-full bg-[#0b4a61] border border-[#107091] flex items-center justify-center text-white font-semibold text-xs shrink-0 shadow-sm">
                        S
                    </div>
<div className="flex-col transition-opacity duration-200 peer-checked/sidebar:opacity-0 whitespace-nowrap overflow-hidden">
<div className="text-sm font-semibold text-white tracking-tight leading-tight">SULLAM</div>
<div className="text-xs text-[#75d6f8]">Vendor ID</div>
</div>
</div>
</div>
</aside>

<input checked="" className="peer/orders hidden" id="tab-orders" name="main-tab" type="radio"/>
<input className="peer/reports hidden" id="tab-reports" name="main-tab" type="radio"/>

<main className="hidden peer-checked/orders:flex flex-1 flex-col min-w-0 bg-neutral-100 overflow-hidden relative">
<header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
<div className="flex items-center gap-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Purchase Orders</h1>
<div className="h-4 w-px bg-zinc-200"></div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon className="text-base animate-[spin_4s_linear_infinite] text-[#1ABAF2]" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Live Data
                    </div>
</div>
<div className="flex items-center gap-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Order</label>
<div className="relative group">
<select className="appearance-none bg-neutral-50 border border-zinc-200 text-slate-800 text-sm font-medium rounded-md pl-3 pr-9 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1ABAF2]/20 focus:border-[#1ABAF2] transition-colors cursor-pointer min-w-[140px] shadow-sm">
<option selected="" value="2593">PO #2593</option>
<option value="2594">PO #2594</option>
<option value="2595">PO #2595</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform group-hover:translate-y-px" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</header>
<div className="flex-1 overflow-auto p-6 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-6">
<div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-zinc-200 bg-white flex justify-between items-center">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-900">Order Items &amp; Production Stages</h2>
<p className="text-xs text-slate-500 mt-1">Tracking SKUs for Purchase Order 2593</p>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end">
<span className="text-xs text-slate-500 mb-1">Overall Progress</span>
<div className="w-32 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-[#1ABAF2] rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div className="h-8 w-px bg-zinc-200"></div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e8f8fe] text-[#1595c2] text-xs font-medium border border-[#d1f1fd]">
<span className="w-1.5 h-1.5 rounded-full bg-[#1ABAF2] animate-pulse"></span>
                                    In Production
                                </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-neutral-50/50 border-b border-zinc-200">
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Item Details</th>
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Specs (L×W)</th>
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Stage</th>
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Update Progress</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-neutral-50 transition-colors group">
<td className="px-6 py-4">

<label className="flex items-center gap-4 cursor-pointer group/item" htmlFor="item-modal">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-slate-400 group-hover/item:border-[#47c8f5] group-hover/item:text-[#1ABAF2] group-hover/item:bg-[#e8f8fe] transition-colors shrink-0">
<iconify-icon className="text-xl" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 tracking-tight group-hover/item:text-[#1595c2] transition-colors flex items-center gap-1.5">
                                                        0259600100
                                                        <iconify-icon className="text-[#1ABAF2] opacity-0 group-hover/item:opacity-100 transition-opacity text-xs" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-xs text-slate-500 mt-0.5">TESTSPECIAITEM</span>
</div>
</label>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
                                                120 × 80
                                            </div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-neutral-100 text-slate-600 text-xs font-medium border border-zinc-200">
                                                    Cutting
                                                </span>
<span className="text-xs text-slate-400">20%</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="relative">
<select className="appearance-none bg-white border border-zinc-200 text-slate-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1ABAF2]/20 focus:border-[#1ABAF2] transition-colors cursor-pointer w-36 shadow-sm hover:border-zinc-300">
<option disabled="" selected="" value="">Select Stage...</option>
<option value="WASHING">Washing</option>
<option value="STITCHING">Stitching</option>
<option value="PACKING">Packing</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 bg-white text-slate-500 hover:text-[#1595c2] hover:border-[#a3e4fa] hover:bg-[#e8f8fe] transition-all shadow-sm" title="Upload Proof Image">
<iconify-icon className="text-lg" icon="solar:camera-add-linear" strokeWidth="1.5"></iconify-icon>
</button>
<label className="cursor-pointer px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-1.5" htmlFor="toast-trigger">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                                    Update
                                                </label>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50 transition-colors group">
<td className="px-6 py-4">
<label className="flex items-center gap-4 cursor-pointer group/item" htmlFor="item-modal">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-slate-400 group-hover/item:border-[#47c8f5] group-hover/item:text-[#1ABAF2] group-hover/item:bg-[#e8f8fe] transition-colors shrink-0">
<iconify-icon className="text-xl" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 tracking-tight group-hover/item:text-[#1595c2] transition-colors flex items-center gap-1.5">
                                                        0259600101
                                                        <iconify-icon className="text-[#1ABAF2] opacity-0 group-hover/item:opacity-100 transition-opacity text-xs" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-xs text-slate-500 mt-0.5">TESTSPECIAITEM</span>
</div>
</label>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
                                                120 × 80
                                            </div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#e8f8fe] text-[#1595c2] text-xs font-medium border border-[#d1f1fd]">
                                                    Washing
                                                </span>
<span className="text-xs text-slate-400">45%</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="relative">
<select className="appearance-none bg-white border border-zinc-200 text-slate-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1ABAF2]/20 focus:border-[#1ABAF2] transition-colors cursor-pointer w-36 shadow-sm hover:border-zinc-300">
<option disabled="" selected="" value="">Select Stage...</option>
<option value="STITCHING">Stitching</option>
<option value="PACKING">Packing</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 bg-white text-slate-500 hover:text-[#1595c2] hover:border-[#a3e4fa] hover:bg-[#e8f8fe] transition-all shadow-sm" title="Upload Proof Image">
<iconify-icon className="text-lg" icon="solar:camera-add-linear" strokeWidth="1.5"></iconify-icon>
</button>
<label className="cursor-pointer px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-1.5" htmlFor="toast-trigger">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                                    Update
                                                </label>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<main className="hidden peer-checked/reports:flex flex-1 flex-col min-w-0 bg-neutral-100 overflow-hidden relative">
<header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
<div className="flex items-center gap-4">
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Production Reports</h1>
</div>
<button className="px-3 py-1.5 bg-white border border-zinc-200 text-slate-700 hover:bg-neutral-50 text-sm font-medium rounded-md shadow-sm transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
                    Export CSV
                </button>
</header>
<div className="flex-1 overflow-auto p-6 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
<div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Active Orders</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">12</div>
<div className="text-xs text-green-600 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:trend-up-linear" strokeWidth="1.5"></iconify-icon>
                                +2 this week
                            </div>
</div>
<div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
<div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Units in Production</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">8,450</div>
<div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                Across 4 stages
                            </div>
</div>
<div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
<div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Completed (MTD)</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">3,210</div>
<div className="text-xs text-green-600 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:trend-up-linear" strokeWidth="1.5"></iconify-icon>
                                14% vs last month
                            </div>
</div>
<div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200">
<div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Defect Rate</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">0.8%</div>
<div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                Well below 2% target
                            </div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-zinc-200 bg-white">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Purchase Order Summary</h2>
<p className="text-xs text-slate-500 mt-1">Aggregated completion metrics by order</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-neutral-50/50 border-b border-zinc-200">
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">PO Number</th>
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Items</th>
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Completion Progress</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-6 py-4 font-semibold text-sm text-slate-900 tracking-tight">PO #2593</td>
<td className="px-6 py-4 text-sm text-slate-600">5,000 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#e8f8fe] text-[#1595c2] text-xs font-medium border border-[#d1f1fd]">
                                                In Production
                                            </span>
</td>
<td className="px-6 py-4 w-1/3">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-[#1ABAF2] rounded-full" style={{width: '45%'}}></div>
</div>
<span className="text-xs font-medium text-slate-600 w-8">45%</span>
</div>
</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-6 py-4 font-semibold text-sm text-slate-900 tracking-tight">PO #2594</td>
<td className="px-6 py-4 text-sm text-slate-600">2,450 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium border border-amber-100">
                                                Cutting
                                            </span>
</td>
<td className="px-6 py-4 w-1/3">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '15%'}}></div>
</div>
<span className="text-xs font-medium text-slate-600 w-8">15%</span>
</div>
</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="px-6 py-4 font-semibold text-sm text-slate-900 tracking-tight">PO #2595</td>
<td className="px-6 py-4 text-sm text-slate-600">1,000 units</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium border border-green-100">
                                                Completed
                                            </span>
</td>
<td className="px-6 py-4 w-1/3">
<div className="flex items-center gap-3">
<div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
</div>
<span className="text-xs font-medium text-slate-600 w-8">100%</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed bottom-6 right-6 z-50 transition-all duration-300 translate-y-[150%] opacity-0 peer-checked/toast:translate-y-0 peer-checked/toast:opacity-100 pointer-events-none peer-checked/toast:pointer-events-auto">
<div className="bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 min-w-[300px]">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium tracking-tight">Success</span>
<span className="text-xs text-slate-300">Production stage updated successfully.</span>
</div>
<label className="cursor-pointer text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors ml-2" htmlFor="toast-trigger">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</label>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none peer-checked/item-modal:opacity-100 peer-checked/item-modal:pointer-events-auto transition-all duration-300">

<label className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer" htmlFor="item-modal"></label>

<div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 flex flex-col scale-95 peer-checked/item-modal:scale-100 transition-transform duration-300 border border-zinc-200 overflow-hidden">

<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Item Specifications</h3>
<label className="cursor-pointer text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-md hover:bg-neutral-100 flex items-center justify-center" htmlFor="item-modal">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</label>
</div>

<div className="p-6 overflow-y-auto max-h-[70vh]">

<div className="flex gap-5 mb-6">
<div className="w-20 h-20 rounded-xl bg-neutral-50 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-slate-400 shrink-0">
<iconify-icon className="text-3xl" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-1">
<span className="text-xl font-semibold tracking-tight text-slate-900">0259600100</span>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#e8f8fe] text-[#1595c2] border border-[#d1f1fd]">PO #2593</span>
</div>
<span className="text-sm text-slate-500">TESTSPECIAITEM - Premium Grade</span>
</div>
</div>

<div className="grid grid-cols-2 gap-x-4 gap-y-5 bg-neutral-50 rounded-xl p-5 border border-zinc-100 mb-6">
<div>
<span className="block text-xs font-medium text-slate-500 mb-1">Dimensions (L×W)</span>
<span className="block text-sm font-semibold text-slate-900">120cm × 80cm</span>
</div>
<div>
<span className="block text-xs font-medium text-slate-500 mb-1">Target Quantity</span>
<span className="block text-sm font-semibold text-slate-900">2,500 units</span>
</div>
<div>
<span className="block text-xs font-medium text-slate-500 mb-1">Material</span>
<span className="block text-sm font-semibold text-slate-900">Cotton Canvas Blend</span>
</div>
<div>
<span className="block text-xs font-medium text-slate-500 mb-1">Color Code</span>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-900"></span>
<span className="text-sm font-semibold text-slate-900">Navy (#1A2B4C)</span>
</div>
</div>
</div>

<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Current Status</h4>
<div className="border border-zinc-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#1ABAF2] animate-pulse"></span>
<span className="text-sm font-medium text-slate-900">In Production: Cutting Stage</span>
</div>
<span className="text-sm font-semibold text-[#1595c2]">20% Complete</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-[#1ABAF2] rounded-full transition-all duration-500" style={{width: '20%'}}></div>
</div>
<p className="text-xs text-slate-500">Last updated: Today, 10:45 AM by Vendor Admin</p>
</div>
</div>

<div className="px-6 py-4 bg-neutral-50 border-t border-zinc-100 flex items-center justify-end gap-3 rounded-b-2xl">
<label className="cursor-pointer px-4 py-2 bg-white border border-zinc-200 text-slate-700 hover:bg-neutral-50 text-sm font-medium rounded-lg shadow-sm transition-colors" htmlFor="item-modal">
                    Close
                </label>
<button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Download Tech Pack
                </button>
</div>
</div>
</div>

    </>
  );
}
