import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      
<div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-purple-800">Agent Payout History &amp; Ledger</h1>
<p className="text-sm text-gray-500 mt-1">Manage and track all relay agent transactions and balances.</p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
<div className="relative w-full sm:w-80 lg:w-96">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" height="18" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full pl-9 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-sm transition-shadow" placeholder="Search by Agent Name, Store ID, or Transaction ID" type="text"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-600 transition-colors focus:outline-none" title="Scan Barcode">
<iconify-icon height="18" icon="solar:scanner-linear" width="18"></iconify-icon>
</button>
</div>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all shadow-sm whitespace-nowrap">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" width="18"></iconify-icon>
                    Download Statement
                </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="custom-select-wrapper">
<select className="w-full bg-white border border-gray-200 rounded-lg pl-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-shadow">
<option disabled="" selected="" value="">Select Agent</option>
<option>All Agents</option>
<option>Marc Essomba</option>
<option>Aline Njoya</option>
<option>Jean Pierre</option>
</select>
<div className="custom-select-icon text-gray-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="custom-select-wrapper">
<select className="w-full bg-white border border-gray-200 rounded-lg pl-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-shadow">
<option disabled="" selected="" value="">City</option>
<option>All Cities</option>
<option>Douala</option>
<option>Yaoundé</option>
<option>Bafoussam</option>
</select>
<div className="custom-select-icon text-gray-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="custom-select-wrapper">
<select className="w-full bg-white border border-gray-200 rounded-lg pl-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-shadow">
<option disabled="" selected="" value="">Status</option>
<option>All Statuses</option>
<option>Pending</option>
<option>Settled</option>
<option>Reversed</option>
</select>
<div className="custom-select-icon text-gray-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<input className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-shadow cursor-pointer" placeholder="Custom Date Range" readonly="" type="text" value="Feb 1, 2026 - Feb 28, 2026"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex-grow">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead className="bg-gray-50/50 border-b border-gray-200">
<tr>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date &amp; Time</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Agent / Pickup Point</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Activity Description</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Provider &amp; Account</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Amount (FCFA)</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Wallet Balance</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-4 py-3 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">20 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">11:15 AM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Marc Essomba" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="font-medium text-gray-900">Marc Essomba</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Akwa Central
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8942</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 77 88 99 00</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">45,150</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">20 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">09:40 AM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Marc Essomba" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="font-medium text-gray-900">Marc Essomba</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Akwa Central
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8935</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 77 88 99 00</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">45,000</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">19 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">04:30 PM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Marc Essomba" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="font-medium text-gray-900">Marc Essomba</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Akwa Central
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-purple-50/80 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100/50">
<iconify-icon height="16" icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600 font-medium">Manual Payout</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 77 88 99 00</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-red-600">-45,000</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">44,850</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">19 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">09:12 AM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Aline Njoya" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=5"/>
<div>
<div className="font-medium text-gray-900">Aline Njoya</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Mvan Sud
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8941</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ffcc00] text-black font-semibold text-xs tracking-tighter shadow-sm">MTN</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">MTN MoMo</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 50 11 22 33</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">12,450</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200/60">Pending</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">18 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">02:20 PM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Aline Njoya" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=5"/>
<div>
<div className="font-medium text-gray-900">Aline Njoya</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Mvan Sud
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-purple-50/80 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100/50">
<iconify-icon height="16" icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600 font-medium">Manual Payout</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ffcc00] text-black font-semibold text-xs tracking-tighter shadow-sm">MTN</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">MTN MoMo</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 50 11 22 33</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-red-600">-10,000</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">12,300</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">18 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">10:05 AM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 shadow-sm">
<iconify-icon height="16" icon="solar:server-square-linear" width="16"></iconify-icon>
</div>
<div>
<div className="font-medium text-gray-900 text-gray-500">System</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:server-linear" width="12"></iconify-icon>
                                            Internal Adjustment
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-500">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 border border-gray-200/50">
<iconify-icon height="16" icon="solar:refresh-circle-linear" width="16"></iconify-icon>
</div>
<span>Reversal: Order <span className="font-medium">#ORD-8910</span></span>
</div>
</td>
<td className="px-4 py-3 text-gray-400">
<div className="flex items-center gap-2.5 opacity-60">
<div className="w-6 h-6 rounded flex items-center justify-center bg-gray-200 text-gray-600 font-semibold text-xs tracking-tighter shadow-sm">-</div>
<span className="font-mono text-xs tracking-tight">N/A</span>
</div>
</td>
<td className="px-4 py-3 text-right opacity-60">
<span className="font-semibold text-red-600 line-through">-150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">22,300</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Reversed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">17 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">01:15 PM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Jean Pierre" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=8"/>
<div>
<div className="font-medium text-gray-900">Jean Pierre</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Deido Express
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8902</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ffcc00] text-black font-semibold text-xs tracking-tighter shadow-sm">MTN</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">MTN MoMo</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 52 33 44 55</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">8,150</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">16 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">05:00 PM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Paul Ndi" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=12"/>
<div>
<div className="font-medium text-gray-900">Paul Ndi</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Bonamoussadi
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-purple-50/80 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100/50">
<iconify-icon height="16" icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600 font-medium">Manual Payout</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 90 22 11 00</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-red-600">-50,000</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">1,000</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">16 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">08:20 AM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Paul Ndi" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=12"/>
<div>
<div className="font-medium text-gray-900">Paul Ndi</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Bonamoussadi
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8888</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 90 22 11 00</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">51,000</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">15 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">02:10 PM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Marie Curie" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=9"/>
<div>
<div className="font-medium text-gray-900">Marie B.</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Bastos Center
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8871</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ffcc00] text-black font-semibold text-xs tracking-tighter shadow-sm">MTN</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">MTN MoMo</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 70 88 12 12</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">2,150</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">14 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">04:45 PM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Alain Traore" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=13"/>
<div>
<div className="font-medium text-gray-900">Alain Traore</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Omnisport
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-purple-50/80 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100/50">
<iconify-icon height="16" icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600 font-medium">Manual Payout</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 91 22 33 44</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-red-600">-5,000</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">4,500</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors relative">
<td className="px-4 py-3 text-gray-600">
<div className="font-medium text-gray-900">14 Feb 2026</div>
<div className="text-xs text-gray-400 mt-0.5">11:30 AM</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img alt="Alain Traore" className="w-8 h-8 rounded-full border border-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/150?img=13"/>
<div>
<div className="font-medium text-gray-900">Alain Traore</div>
<div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear" width="12"></iconify-icon>
                                            Omnisport
                                        </div>
</div>
</div>
</td>
<td className="px-4 py-3 text-gray-600">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-md bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
<iconify-icon height="16" icon="solar:qr-code-linear" width="16"></iconify-icon>
</div>
<span className="text-gray-600">QR Scan: Order <span className="text-gray-900 font-medium">#ORD-8840</span></span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#ff6600] text-white font-semibold text-xs tracking-tighter shadow-sm">OM</div>
<div className="flex flex-col">
<span className="text-gray-900 font-medium text-xs">Orange Money</span>
<span className="text-gray-500 font-mono text-xs tracking-tight">+237 6 91 22 33 44</span>
</div>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="font-semibold text-green-600">+150</span>
</td>
<td className="px-4 py-3 text-right font-medium text-gray-900">9,500</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-gray-400 hover:text-purple-600 rounded-md hover:bg-purple-50 focus:outline-none" title="View Receipt">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50/30 sm:px-6">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-sm text-gray-500">
                            Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">12</span> of <span className="font-medium text-gray-900">1,200</span> entries
                        </p>
</div>
<div>
<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors" href="#">
<span className="sr-only">Previous</span>
<iconify-icon height="18" icon="solar:alt-arrow-left-linear" width="18"></iconify-icon>
</a>
<a aria-current="page" className="z-10 bg-purple-50 border-purple-500 text-purple-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">1</a>
<a className="bg-white border-gray-200 text-gray-600 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors" href="#">2</a>
<a className="bg-white border-gray-200 text-gray-600 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors" href="#">3</a>
<span className="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-sm font-medium text-gray-400">...</span>
<a className="bg-white border-gray-200 text-gray-600 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors" href="#">100</a>
<a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors" href="#">
<span className="sr-only">Next</span>
<iconify-icon height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</nav>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
