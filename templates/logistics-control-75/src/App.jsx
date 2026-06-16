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
      

<header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-semibold text-lg tracking-tighter">
                K
            </div>
<span className="font-semibold text-lg tracking-tighter text-gray-900">KOLI</span>
</div>

<div className="flex items-center gap-3">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon height="22" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=f3f4f6&amp;color=374151"/>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-[1920px] mx-auto p-6 md:p-8 flex flex-col gap-6 relative">

<div>
<h1 className="text-xl tracking-tight font-semibold text-gray-900">Logistics Control Center</h1>
<p className="text-sm text-gray-500 mt-1">Manage global shipments, assignments, and warehouse operations.</p>
</div>

<section className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">

<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-violet-500/20 focus:outline-none">
<iconify-icon className="text-gray-400" height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>All Locations</span>
<iconify-icon className="text-gray-400 ml-1" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-violet-500/20 focus:outline-none">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span>Status: Delivered/Awaiting</span>
<iconify-icon className="text-gray-400 ml-1" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-violet-500/20 focus:outline-none">
<iconify-icon className="text-gray-400" height="18" icon="solar:plain-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Cargo: Air/Sea</span>
<iconify-icon className="text-gray-400 ml-1" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>

<div className="w-px h-6 bg-gray-200 mx-1 hidden lg:block"></div>

<button className="flex items-center gap-2 px-3 py-2 bg-violet-50 border border-violet-100 rounded-lg text-sm text-violet-700 hover:bg-violet-100 transition-colors font-medium focus:ring-2 focus:ring-violet-500/20 focus:outline-none">
<iconify-icon height="18" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Target: Akwa Hub</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3 w-full lg:w-auto">
<div className="relative w-full lg:w-72">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all placeholder:text-gray-400" placeholder="Search Order ID, Tracking..." type="text"/>
</div>
<button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors shadow-sm focus:ring-2 focus:ring-violet-500/20 focus:outline-none">
<iconify-icon height="18" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Bulk Assign
                </button>
</div>
</section>

<section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead className="bg-gray-50/80 border-b border-gray-200">
<tr>
<th className="py-3 px-4 w-12 text-center">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 tracking-wider">Product Identity</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 tracking-wider">Customer</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 tracking-wider">Distribution</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 tracking-wider">Weight &amp; Fee</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors bg-violet-50/30">
<td className="py-3 px-4 text-center align-top">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer mt-1">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">#PKG-9921</span>
<span className="text-xs text-gray-500 mt-0.5">Electronics • TRK-8X92M</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-700 font-medium text-xs">
                                        AE
                                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Amine El-Khatib</span>
<span className="text-xs text-gray-500 mt-0.5">+237 6 99 88 77 66</span>
</div>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Akwa Hub Central</span>
<span className="text-xs text-gray-500 mt-0.5">Self-Pickup</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-gray-900">4.2 kg</span>
<span className="inline-flex mt-1 items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                        Fee Unpaid
                                    </span>
</div>
</td>
<td className="py-3 px-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Awaiting Transfer
                                </span>
</td>
<td className="py-3 px-4 align-top text-right">
<div className="flex items-center justify-end gap-2 mt-0.5">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">Details</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">Assign</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4 text-center align-top">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer mt-1">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">#PKG-9922</span>
<span className="text-xs text-gray-500 mt-0.5">Apparel • TRK-7Y21K</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex-shrink-0 flex items-center justify-center text-rose-700 font-medium text-xs">
                                        MC
                                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Marie Claire</span>
<span className="text-xs text-gray-500 mt-0.5">marie@example.com</span>
</div>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Douala Port</span>
<span className="text-xs text-gray-500 mt-0.5">Home Delivery</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-gray-900">1.5 kg</span>
<span className="inline-flex mt-1 items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        Fee Paid
                                    </span>
</div>
</td>
<td className="py-3 px-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    At Warehouse
                                </span>
</td>
<td className="py-3 px-4 align-top text-right">
<div className="flex items-center justify-end gap-2 mt-0.5">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">Details</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">Assign</button>
</div>
</td>
</tr>


<tr className="hover:bg-gray-50/50 transition-colors border-b-0 border-l-2 border-l-violet-500 bg-violet-50/10">
<td className="py-3 px-4 text-center align-top">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer mt-1">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">#PKG-9923</span>
<span className="text-xs text-gray-500 mt-0.5">Auto Parts • TRK-2B44Z</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden flex-shrink-0">
<img alt="Avatar" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Jean+Paul&amp;background=f3f4f6&amp;color=374151"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Jean Paul</span>
<span className="text-xs text-gray-500 mt-0.5">+237 6 11 22 33 44</span>
</div>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Akwa Hub Central</span>
<span className="text-xs text-gray-500 mt-0.5">Self-Pickup</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-rose-600">12.5 kg</span>
<span className="inline-flex mt-1 items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        Fee Paid
                                    </span>
</div>
</td>
<td className="py-3 px-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    At Warehouse
                                </span>
</td>
<td className="py-3 px-4 align-top text-right">
<div className="flex items-center justify-end gap-2 mt-0.5">
<button className="px-2 py-1.5 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 rounded">
<iconify-icon height="16" icon="solar:alt-arrow-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="bg-gray-50/80 border-l-2 border-l-violet-500">
<td className="p-0 border-t border-gray-100" colspan="7">
<div className="px-6 py-4 flex gap-6 items-start">

<div className="w-24 h-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
<iconify-icon className="text-gray-300" height="32" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>

<div className="flex-1 bg-white border border-rose-100 rounded-lg p-4 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
<iconify-icon className="text-rose-500" height="16" icon="solar:scale-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                                    Weight Intelligence Alert
                                                </h4>
<div className="flex items-center gap-6 mt-2 text-sm">
<div className="flex flex-col">
<span className="text-xs text-gray-500">Estimated Weight</span>
<span className="font-medium text-gray-900">10.0 kg</span>
</div>
<iconify-icon className="text-gray-300" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-gray-500">Actual Weight</span>
<span className="font-medium text-rose-600">12.5 kg</span>
</div>
<div className="flex flex-col border-l border-gray-200 pl-6 ml-2">
<span className="text-xs text-gray-500">Variance Fee</span>
<span className="font-medium text-gray-900">$12.50</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 focus:ring-2 focus:ring-rose-500/20 focus:outline-none">
<iconify-icon height="16" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                                    Auto-Debit Wallet
                                                </button>
<span className="text-xs text-gray-500">Customer wallet balance: $45.00</span>
</div>
</div>
</div>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-4 text-center align-top">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer mt-1">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">#PKG-9924</span>
<span className="text-xs text-gray-500 mt-0.5">Cosmetics • TRK-1A22C</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-700 font-medium text-xs">
                                        SO
                                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Sarah Olinga</span>
<span className="text-xs text-gray-500 mt-0.5">+237 6 55 44 33 22</span>
</div>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Yaounde Hub</span>
<span className="text-xs text-gray-500 mt-0.5">Self-Pickup</span>
</div>
</td>
<td className="py-3 px-4 align-top">
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-gray-900">0.8 kg</span>
<span className="inline-flex mt-1 items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        Fee Paid
                                    </span>
</div>
</td>
<td className="py-3 px-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    At Warehouse
                                </span>
</td>
<td className="py-3 px-4 align-top text-right">
<div className="flex items-center justify-end gap-2 mt-0.5">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">Details</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">Assign</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between mt-auto">
<span className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900">1-4</span> of <span className="font-medium text-gray-900">142</span> items</span>
<div className="flex items-center gap-1">
<button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" disabled="">
<iconify-icon height="18" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="flex items-center">
<button className="w-8 h-8 flex items-center justify-center text-sm font-medium bg-gray-900 text-white rounded-lg">1</button>
<button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">3</button>
<span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400">...</span>
<button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">15</button>
</div>
<button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
<iconify-icon height="18" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl">
<div className="bg-gray-900 rounded-full shadow-2xl border border-gray-700/50 p-2 pl-6 flex items-center justify-between backdrop-blur-md bg-opacity-95">
<div className="flex items-center gap-4 text-sm">
<div className="flex items-center justify-center w-6 h-6 bg-gray-800 rounded-full text-white font-medium text-xs">
                    2
                </div>
<span className="text-gray-300">Items Selected for <span className="font-medium text-white">Akwa Hub</span></span>
<span className="text-gray-500">|</span>
<span className="text-gray-300">Total Weight: <span className="font-medium text-white">16.7 kg</span></span>
</div>
<button className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-full text-sm font-medium transition-colors shadow-sm shadow-violet-900/50 focus:ring-2 focus:ring-violet-500/50 focus:outline-none">
<iconify-icon height="18" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Generate Transfer QR &amp; PDF
            </button>
</div>
</div>

<div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col relative">

<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors bg-white rounded-full p-1 z-10">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<div className="px-8 pt-8 pb-6 border-b border-gray-100 text-center">
<div className="mx-auto w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-gray-900" height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h2 className="text-xl tracking-tight font-semibold text-gray-900">Akwa Hub Transfer</h2>
<div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500">
<span>Oct 24, 2023</span>
<span>•</span>
<span className="font-medium text-gray-700">#KOLI-05</span>
</div>
</div>

<div className="p-8 flex flex-col items-center justify-center border-b border-gray-100 bg-gray-50/50">
<div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm mb-4">

<iconify-icon className="text-gray-900" height="120" icon="solar:qr-code-linear" style={{strokeWidth: '1.2'}} width="120"></iconify-icon>
</div>
<p className="text-xs text-gray-500 text-center max-w-[200px]">Agent scan to receive 2 items at Akwa Hub destination.</p>
</div>

<div className="p-6 max-h-48 overflow-y-auto">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Transfer Manifest</h3>
<ul className="space-y-1">
<li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-gray-900">#PKG-9921</span>
</div>
<span className="text-sm text-gray-500">Amine El-Khatib</span>
</li>
<li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-gray-900">#PKG-9923</span>
</div>
<span className="text-sm text-gray-500">Jean Paul</span>
</li>
</ul>
</div>

<div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
<button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-medium transition-colors shadow-sm focus:ring-2 focus:ring-gray-200 focus:outline-none">
<iconify-icon height="18" icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Download PDF
                </button>
<button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-colors shadow-sm focus:ring-2 focus:ring-gray-900/50 focus:outline-none">
<iconify-icon height="18" icon="solar:printer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Print Label
                </button>
</div>
</div>
</div>

    </>
  );
}
