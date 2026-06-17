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
      

<aside className="flex w-64 flex-col border-r border-gray-200 bg-white">

<div className="flex h-16 items-center px-6 border-b border-gray-100">
<span className="text-lg font-medium tracking-tight text-gray-900">KOLI</span>
</div>

<nav className="flex-1 space-y-1 p-4 overflow-y-auto custom-scrollbar">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                Orders
            </a>

<a className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg text-violet-600" icon="solar:routing-2-linear"></iconify-icon>
                Logistics &amp; Cargos
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                Customers
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                Treasury
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon>
                Profit
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                Reports
            </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:user-id-linear"></iconify-icon>
                Team
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md px-8 z-10">
<h1 className="text-xl font-medium tracking-tight text-gray-900">Logistics &amp; Cargo Management</h1>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200">
<iconify-icon className="text-base" icon="solar:import-linear"></iconify-icon>
                    Import Weight List
                </button>
<button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600/40 focus:ring-offset-2 focus:ring-offset-white">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                    Create New Cargo
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar p-8 relative">

<div className="absolute top-0 left-0 right-0 h-64 overflow-hidden pointer-events-none z-0">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-200/40 blur-[80px]"></div>
<div className="absolute top-12 right-32 h-64 w-64 rounded-full bg-blue-200/30 blur-[60px]"></div>
</div>

<div className="relative z-10 mb-8 grid grid-cols-3 gap-6">

<div className="flex flex-col rounded-2xl border border-white/60 bg-white/60 p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.08)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium tracking-tight text-gray-900">KOLI-04</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                            Transit ✈️
                        </span>
</div>
<div className="flex items-end justify-between flex-1">
<div>
<p className="text-xs text-gray-500 mb-1">Est. Arrival</p>
<p className="text-base font-medium text-gray-900">12 Nov</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1">Total Weight</p>
<p className="text-base font-medium text-gray-900">450 kg</p>
</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-white/60 bg-white/60 p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.08)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium tracking-tight text-gray-900">KOLI-05</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                            Prep 📦
                        </span>
</div>
<div className="flex items-end justify-between flex-1">
<div>
<p className="text-xs text-gray-500 mb-1">Est. Dispatch</p>
<p className="text-base font-medium text-gray-900">18 Nov</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1">Total Weight</p>
<p className="text-base font-medium text-gray-900">120 kg</p>
</div>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-white/60 bg-white/60 p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.08)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium tracking-tight text-gray-900">KOLI-03</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            Delivered ✅
                        </span>
</div>
<div className="flex items-end justify-between mb-4">
<div>
<p className="text-xs text-gray-500 mb-1">Arrived Date</p>
<p className="text-base font-medium text-gray-900">05 Nov</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1">Status</p>
<p className="text-base font-medium text-gray-900">At Point Relais</p>
</div>
</div>

<div className="mt-auto pt-4 border-t border-gray-200/50">
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-medium text-white shadow-sm transition-all hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:ring-offset-1">
<iconify-icon className="text-sm" icon="solar:bell-bing-linear"></iconify-icon>
                            Notify Clients for Pickup
                        </button>
</div>
</div>
</div>

<div className="flex gap-6 relative z-10">

<div className="flex-1 flex flex-col gap-6">
<div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">

<div className="grid grid-cols-[1fr_1.5fr_0.8fr_1fr_1fr_1.2fr_auto] items-center gap-4 border-b border-gray-100 bg-gray-50/80 px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
<div>Order ID &amp; Client</div>
<div>Product Info</div>
<div>Est. Weight</div>
<div>Real Weight</div>
<div>Price Diff</div>
<div>Wallet Action</div>
<div className="text-center">Alert</div>
</div>

<div className="flex flex-col divide-y divide-gray-100">

<div className="grid grid-cols-[1fr_1.5fr_0.8fr_1fr_1fr_1.2fr_auto] items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">#519004</span>
<span className="text-xs text-gray-500">Amina D.</span>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
<img alt="Jacket" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm text-gray-700 line-clamp-1">Leather Biker Jacket</span>
</div>
<div>
<span className="text-sm text-gray-500">0.5 kg</span>
</div>
<div>
<div className="relative w-24">
<input className="block w-full rounded-lg border-2 border-violet-200 bg-white py-1.5 pl-3 pr-7 text-sm font-medium text-gray-900 outline-none transition-all focus:border-violet-600 focus:ring-0" step="0.1" type="number" value="0.7"/>
<span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-400 pointer-events-none">kg</span>
</div>
</div>
<div>
<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                                        +1,500 FCFA
                                    </span>
</div>
<div>
<span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-white px-2.5 py-1 text-xs font-medium text-red-600 shadow-sm" title="System will automatically deduct from wallet">
<iconify-icon className="text-sm" icon="solar:wallet-money-linear"></iconify-icon>
                                        Auto-Debit Wallet
                                    </span>
</div>
<div>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-green-600 hover:bg-green-50 transition-colors" title="Send WhatsApp Alert">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-[1fr_1.5fr_0.8fr_1fr_1fr_1.2fr_auto] items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">#519005</span>
<span className="text-xs text-gray-500">Samuel E.</span>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 text-xs">
                                        Img
                                    </div>
<span className="text-sm text-gray-700 line-clamp-1">Summer T-Shirt Pack</span>
</div>
<div>
<span className="text-sm text-gray-500">0.4 kg</span>
</div>
<div>
<div className="relative w-24">
<input className="block w-full rounded-lg border-2 border-violet-200 bg-white py-1.5 pl-3 pr-7 text-sm font-medium text-gray-900 outline-none transition-all focus:border-violet-600 focus:ring-0" step="0.1" type="number" value="0.2"/>
<span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-400 pointer-events-none">kg</span>
</div>
</div>
<div>
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                                        -500 FCFA
                                    </span>
</div>
<div>
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-2.5 py-1 text-xs font-medium text-emerald-600 shadow-sm" title="System will automatically refund to wallet">
<iconify-icon className="text-sm" icon="solar:wallet-money-linear"></iconify-icon>
                                        Auto-Refund Wallet
                                    </span>
</div>
<div>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-green-600 hover:bg-green-50 transition-colors" title="Send WhatsApp Alert">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-[1fr_1.5fr_0.8fr_1fr_1fr_1.2fr_auto] items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">#519006</span>
<span className="text-xs text-gray-500">Chloe M.</span>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 text-xs">
                                        Img
                                    </div>
<span className="text-sm text-gray-700 line-clamp-1">Wireless Earbuds</span>
</div>
<div>
<span className="text-sm text-gray-500">0.1 kg</span>
</div>
<div>
<div className="relative w-24">
<input className="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pl-3 pr-7 text-sm text-gray-900 outline-none transition-all focus:border-violet-600 focus:ring-0" step="0.1" type="number" value="0.1"/>
<span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-400 pointer-events-none">kg</span>
</div>
</div>
<div>
<span className="text-sm text-gray-400">-</span>
</div>
<div>
<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-500 shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                                        Settled
                                    </span>
</div>
<div>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-300 pointer-events-none">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mt-2">
<button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F97316] py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#EA580C] hover:shadow focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:ring-offset-2">
                            Apply Adjustments &amp; Notify All
                            <iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</button>
</div>
</div>

<aside className="w-80 flex-shrink-0">
<div className="sticky top-0 flex h-[calc(100vh-140px)] flex-col rounded-2xl border border-gray-200 bg-gray-50/50 shadow-sm overflow-hidden">

<div className="border-b border-gray-200 bg-white px-5 py-4">
<h3 className="text-sm font-medium tracking-tight text-gray-900">Unassigned Packages</h3>
<p className="text-xs text-gray-500 mt-1">Drag items to assign to a cargo flight.</p>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">

<div className="group relative cursor-grab rounded-xl border border-gray-200 bg-white p-3.5 pl-8 shadow-sm transition-all hover:border-violet-300 hover:shadow-md active:cursor-grabbing">

<div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex -space-x-1.5 text-gray-300 group-hover:text-violet-500 transition-colors">
<iconify-icon className="text-base" icon="solar:menu-dots-vertical-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:menu-dots-vertical-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-violet-600">PKG-8892</span>
<span className="text-sm text-gray-900 line-clamp-1">Tech Accessories Box</span>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:scale-linear"></iconify-icon>
                                            3.2 kg
                                        </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                            Douala
                                        </span>
</div>
</div>
</div>

<div className="group relative cursor-grab rounded-xl border border-gray-200 bg-white p-3.5 pl-8 shadow-sm transition-all hover:border-violet-300 hover:shadow-md active:cursor-grabbing">

<div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex -space-x-1.5 text-gray-300 group-hover:text-violet-500 transition-colors">
<iconify-icon className="text-base" icon="solar:menu-dots-vertical-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:menu-dots-vertical-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-violet-600">PKG-8893</span>
<span className="text-sm text-gray-900 line-clamp-1">Cosmetics Wholesale</span>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:scale-linear"></iconify-icon>
                                            1.8 kg
                                        </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                            Yaoundé
                                        </span>
</div>
</div>
</div>

<div className="group relative cursor-grab rounded-xl border border-gray-200 bg-white p-3.5 pl-8 shadow-sm transition-all hover:border-violet-300 hover:shadow-md active:cursor-grabbing">

<div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex -space-x-1.5 text-gray-300 group-hover:text-violet-500 transition-colors">
<iconify-icon className="text-base" icon="solar:menu-dots-vertical-linear"></iconify-icon>
<iconify-icon className="text-base" icon="solar:menu-dots-vertical-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-violet-600">PKG-8894</span>
<span className="text-sm text-gray-900 line-clamp-1">Footwear Collection</span>
<div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:scale-linear"></iconify-icon>
                                            8.5 kg
                                        </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                            Douala
                                        </span>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>

    </>
  );
}
