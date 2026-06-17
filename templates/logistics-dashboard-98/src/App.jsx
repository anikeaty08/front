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
      

<aside className="w-64 bg-zinc-50 border-r border-zinc-200 flex flex-col h-full shrink-0 z-20">

<div className="h-16 flex items-center px-6 gap-3 border-b border-transparent shrink-0 mt-2">
<div className="w-7 h-7 bg-zinc-900 text-white rounded flex items-center justify-center font-medium text-sm">
                K
            </div>
<span className="font-medium text-lg tracking-tight">Koli.</span>
</div>
<div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-zinc-400 px-3 mb-2 uppercase tracking-wider">Menu</span>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon> Orders &amp; Purchases
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm bg-white border border-zinc-200 shadow-sm rounded-md text-zinc-900 font-medium transition-colors" href="#">
<iconify-icon className="text-lg text-emerald-500" icon="solar:box-linear"></iconify-icon> Logistics &amp; Cargos
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Clients &amp; Wallets
                </a>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-zinc-400 px-3 mb-2 uppercase tracking-wider">Finance</span>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon> Treasury
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon> Billing
                </a>
</div>
</div>
<div className="p-4 border-t border-zinc-200 flex flex-col gap-1 shrink-0">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-[1000px] overflow-hidden bg-zinc-50/50">

<header className="h-16 px-8 flex items-center justify-between shrink-0 border-b border-zinc-200 bg-white z-10">
<div className="flex items-center gap-2 text-sm">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Logistics &amp; Cargos</a>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="font-medium text-zinc-900">Lot Details</span>
</div>
<div className="flex items-center gap-5">
<button className="relative text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
</button>
<div className="w-px h-5 bg-zinc-200"></div>
<div className="flex items-center gap-2 cursor-pointer group">
<img alt="Admin" className="w-7 h-7 rounded-full object-cover border border-zinc-200" src="https://i.pravatar.cc/150?u=a042581f4e29026701"/>
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">Admin Panel</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</header>

<div className="flex-1 overflow-auto p-8 pt-6 pb-32 relative">

<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm mb-6 flex items-center justify-between">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">KOLI-05</h1>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium">
                            Status : <span className="text-zinc-900 font-semibold flex items-center gap-1"><iconify-icon className="text-emerald-600" icon="solar:map-point-linear"></iconify-icon> At Point Relais</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
                            Notify Customers
                        </button>
<button className="bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
<iconify-icon className="text-lg" icon="solar:printer-linear"></iconify-icon>
                            Print Manifest
                        </button>
</div>
</div>
<div className="flex flex-col gap-2 min-w-[240px] bg-zinc-50 p-4 rounded-lg border border-zinc-100">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 flex items-center gap-1.5"><iconify-icon className="text-zinc-400" icon="solar:weight-linear"></iconify-icon> Total Capacity</span>
<span className="text-zinc-900 font-semibold">500kg <span className="text-zinc-400 font-normal">/ 500kg</span></span>
</div>
<div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden mt-1 relative">
<div className="absolute inset-0 bg-emerald-500 rounded-full" style={{width: '100%'}}></div>
</div>
<p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Cargo fully arrived &amp; weighed
                    </p>
</div>
</div>

<div className="flex flex-col bg-white border border-zinc-200 rounded-xl shadow-sm">

<div className="p-4 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-4 bg-zinc-50/50 rounded-t-xl">
<div className="flex items-center gap-3">

<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-2 text-sm bg-white border border-zinc-200 rounded-lg outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 w-72 placeholder:text-zinc-400 text-zinc-700 shadow-sm transition-all" placeholder="Search by ID, Customer, Location..." type="text"/>
</div>

<button className="px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:map-linear"></iconify-icon>
                            All Locations
                            <iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<button className="px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:box-linear"></iconify-icon>
                            Status: Awaiting Pickup
                            <iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3">
<span className="text-sm text-zinc-500">142 Items Total</span>
<div className="w-px h-5 bg-zinc-300"></div>
<button className="px-4 py-2 bg-zinc-900 border border-zinc-900 rounded-lg text-sm font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-300" icon="solar:users-group-rounded-linear"></iconify-icon> Assign Selected to Agent
                        </button>
</div>
</div>

<div className="bg-indigo-50/50 border-b border-indigo-100 px-4 py-3 flex items-center justify-between text-sm shrink-0">
<div className="flex items-center gap-4">
<span className="font-medium text-indigo-700 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-indigo-600 text-white flex items-center justify-center text-xs">2</div>
                            Items selected
                        </span>
<span className="w-px h-4 bg-indigo-200"></span>
<button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">Select all 142 items in this cargo</button>
</div>
<div className="flex items-center gap-2">
<button className="text-xs font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 px-3 py-1.5 rounded transition-colors border border-indigo-200">Generate Waybills</button>
<button className="text-xs font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 px-3 py-1.5 rounded transition-colors border border-indigo-200">Send SMS Alert</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap min-w-[1000px]">
<thead>
<tr className="border-b border-zinc-200 text-xs text-zinc-500 font-medium tracking-wide uppercase bg-zinc-50/30">
<th className="py-4 px-5 w-12 text-center">
<input className="custom-checkbox mx-auto" type="checkbox"/>
</th>
<th className="py-4 px-5">Product Details</th>
<th className="py-4 px-5">Customer Info</th>
<th className="py-4 px-5">Full Location / Delivery</th>
<th className="py-4 px-5">Weight/Fee</th>
<th className="py-4 px-5">Item Status</th>
<th className="py-4 px-5 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm text-zinc-700 align-top">

<tr className="hover:bg-zinc-50 transition-colors border-b border-zinc-100 bg-indigo-50/10">
<td className="py-4 px-5 text-center">
<input checked="" className="custom-checkbox mx-auto" type="checkbox"/>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-zinc-900">#PKG-9921</span>
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">Electronics</span>
</div>
<span className="text-zinc-600 font-medium">MacBook Pro M3 Max 14"</span>
<span className="text-xs text-zinc-400">Tracking: TRK-882194</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-start gap-3">
<img alt="Customer" className="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0" src="https://i.pravatar.cc/150?u=a042581f4e29026702"/>
<div className="flex flex-col">
<span className="font-medium text-zinc-900">Mariam Diallo</span>
<span className="text-zinc-500 text-xs mt-0.5">+221 77 123 45 67</span>
<span className="text-zinc-400 text-xs mt-0.5">mariam.d@example.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1 w-64 whitespace-normal">
<span className="font-medium text-zinc-900 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon> Dakar, Plateau
                                        </span>
<span className="text-zinc-600 text-xs leading-relaxed">Relais: Boutique ABC, Avenue Pompidou, near main square.</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-900">2.8 kg</span>
<span className="text-xs font-medium text-orange-600 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded w-max">Fee: $14.50 (Unpaid)</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        At Point Relais
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex justify-end items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm">Details</button>
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-900 rounded-md text-xs font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm">Assign</button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors border-b border-zinc-100">
<td className="py-4 px-5 text-center">
<input className="custom-checkbox mx-auto" type="checkbox"/>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-zinc-900">#PKG-9922</span>
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">Apparel</span>
</div>
<span className="text-zinc-600 font-medium">Zara Winter Collection Box</span>
<span className="text-xs text-zinc-400">Tracking: TRK-882195</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-start gap-3">
<img alt="Customer" className="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0" src="https://i.pravatar.cc/150?u=a042581f4e29026704"/>
<div className="flex flex-col">
<span className="font-medium text-zinc-900">Amadou Kane</span>
<span className="text-zinc-500 text-xs mt-0.5">+221 78 987 65 43</span>
<span className="text-zinc-400 text-xs mt-0.5">a.kane88@email.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1 w-64 whitespace-normal">
<span className="font-medium text-zinc-900 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon> Dakar, Almadies
                                        </span>
<span className="text-zinc-600 text-xs leading-relaxed">Relais: Supermarket X, Route de Ngor, next to Pharmacy.</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-900">4.5 kg</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded w-max">Fee: Paid</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        At Point Relais
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex justify-end items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm">Details</button>
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-900 rounded-md text-xs font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm">Assign</button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors border-b border-zinc-100 bg-indigo-50/10">
<td className="py-4 px-5 text-center">
<input checked="" className="custom-checkbox mx-auto" type="checkbox"/>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-zinc-900">#PKG-9923</span>
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">Cosmetics</span>
</div>
<span className="text-zinc-600 font-medium">Sephora Skincare Bundle</span>
<span className="text-xs text-zinc-400">Tracking: TRK-882196</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-start gap-3">
<img alt="Customer" className="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0" src="https://i.pravatar.cc/150?u=a042581f4e29026707"/>
<div className="flex flex-col">
<span className="font-medium text-zinc-900">Fatou Diop</span>
<span className="text-zinc-500 text-xs mt-0.5">+221 70 555 12 34</span>
<span className="text-zinc-400 text-xs mt-0.5">f.diop@company.sn</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1 w-64 whitespace-normal">
<span className="font-medium text-zinc-900 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon> Thies, Centre
                                        </span>
<span className="text-zinc-600 text-xs leading-relaxed">Direct Delivery: Building 4, Rue 10, Apartment 2B.</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-900">1.2 kg</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded w-max">Fee: Paid</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        Assigned to Agent
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex justify-end items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm">Details</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 border border-transparent hover:border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors border-b border-zinc-100">
<td className="py-4 px-5 text-center">
<input className="custom-checkbox mx-auto" type="checkbox"/>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-zinc-900">#PKG-9924</span>
<span className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">Auto Parts</span>
</div>
<span className="text-zinc-600 font-medium">Brembo Brake Pads Set</span>
<span className="text-xs text-zinc-400">Tracking: TRK-882197</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center border border-zinc-300 shrink-0 text-xs font-medium text-zinc-600">
                                            MC
                                        </div>
<div className="flex flex-col">
<span className="font-medium text-zinc-900">Moussa Cisse</span>
<span className="text-zinc-500 text-xs mt-0.5">+221 76 111 22 33</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1 w-64 whitespace-normal">
<span className="font-medium text-zinc-900 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon> Dakar, Parcelles
                                        </span>
<span className="text-zinc-600 text-xs leading-relaxed">Relais: Garage Auto Plus, Unit 15, Main road.</span>
</div>
</td>
<td className="py-4 px-5">
<div className="flex flex-col gap-1">
<span className="font-medium text-zinc-900">5.5 kg</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded w-max">Fee: Paid</span>
</div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        At Point Relais
                                    </span>
</td>
<td className="py-4 px-5 text-right">
<div className="flex justify-end items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm">Details</button>
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-900 rounded-md text-xs font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm">Assign</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-4 border-t border-zinc-200 bg-zinc-50/50 flex items-center justify-between shrink-0 rounded-b-xl">
<span className="text-sm text-zinc-500">Showing 1 to 4 of 142 products in KOLI-05</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-700 rounded transition-colors"><iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-900 font-medium border border-zinc-200 bg-white rounded shadow-sm text-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 rounded transition-colors text-sm">2</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 rounded transition-colors text-sm">3</button>
<span className="w-8 h-8 flex items-center justify-center text-zinc-400">...</span>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 rounded transition-colors text-sm">15</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-700 rounded transition-colors"><iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
