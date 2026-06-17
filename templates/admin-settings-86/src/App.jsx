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
      

<div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 shrink-0">
<div className="text-base font-semibold tracking-tight uppercase">KOLI</div>
<button className="p-2 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<aside className="hidden lg:flex flex-col w-64 border-r border-gray-200 bg-white h-screen shrink-0">
<div className="px-6 py-5 border-b border-gray-200/60">
<div className="text-base font-semibold tracking-tight text-gray-900 uppercase">KOLI</div>
</div>
<div className="px-3 py-5 flex-1 overflow-y-auto">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest px-3 mb-3">Menu</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900 relative" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon> Relay Billing
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon> Agents &amp; Stores
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon> Payout History
                </a>
</nav>
</div>

<div className="p-4 border-t border-gray-200/60">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-gray-50 transition-colors text-left">
<img alt="Admin" className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900 truncate">Alexandre Dubois</div>
<div className="text-xs text-gray-500 truncate">Operations Manager</div>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 h-screen overflow-y-auto">
<div className="max-w-[1200px] mx-auto px-4 py-8 md:px-8 md:py-10">

<div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Relay Billing Dashboard</h1>
<p className="text-sm text-gray-500 mt-0.5">Manage agent commissions, store payouts, and real-time delivery logs.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none transition-colors">
<iconify-icon className="text-base text-gray-400" icon="solar:export-linear" strokeWidth="1.5"></iconify-icon>
                        Export CSV
                    </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none transition-colors">
<iconify-icon className="text-base text-gray-400" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                        Today
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-5 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
<iconify-icon className="text-gray-500 text-lg" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-gray-500">Total Unpaid Commissions</h2>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-1.5">
<span className="text-2xl font-semibold tracking-tight text-gray-900">245,500</span>
<span className="text-sm font-medium text-gray-500">FCFA</span>
</div>
<span className="text-xs text-gray-400">Across 14 pending agents</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-5 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
<iconify-icon className="text-gray-500 text-lg" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-gray-500">Active Pickup Points</h2>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">42</span>
<span className="inline-flex items-center gap-0.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 border border-green-200/60">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="2"></iconify-icon> 3
                            </span>
</div>
<span className="text-xs text-gray-400">Added this week</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-5 flex flex-col justify-between">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
<iconify-icon className="text-gray-500 text-lg" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-gray-500">Total Deliveries Today</h2>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-baseline gap-1.5">
<span className="text-2xl font-semibold tracking-tight text-gray-900">128</span>
</div>
<span className="text-xs text-gray-400">Successful parcel scans</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/80 shadow-sm mb-8 overflow-hidden">
<div className="px-5 py-4 border-b border-gray-200/60 flex items-center justify-between">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">Agent Payouts</h3>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
                        View All <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-gray-50/50">
<th className="px-5 py-3 text-xs font-medium text-gray-500 tracking-tight border-b border-gray-200/60">Agent &amp; Location</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 tracking-tight border-b border-gray-200/60 text-right">Wallet Balance</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 tracking-tight border-b border-gray-200/60 text-right">Parcels Handled</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 tracking-tight border-b border-gray-200/60">Mobile Money</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 tracking-tight border-b border-gray-200/60">Status</th>
<th className="px-5 py-3 text-xs font-medium text-gray-500 tracking-tight border-b border-gray-200/60 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Marc Essomba" className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Marc Essomba</div>
<div className="text-xs text-gray-500">Akwa Central Hub</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="text-sm font-medium text-gray-900">45,000 <span className="text-xs text-gray-400 font-normal">FCFA</span></div>
</td>
<td className="px-5 py-3 text-right">
<div className="text-sm text-gray-600">300</div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
<span className="text-sm font-medium text-gray-600">+237 671 23 45 67</span>
</div>
</td>
<td className="px-5 py-3">
<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200/60">Pending</span>
</td>
<td className="px-5 py-3 text-right">
<button className="inline-flex items-center justify-center rounded-md bg-white border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 focus:outline-none transition-all">
                                        Settle Payout
                                    </button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Sarah Kameni" className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Sarah Kameni</div>
<div className="text-xs text-gray-500">Bonamoussadi Relay</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="text-sm font-medium text-gray-900">22,500 <span className="text-xs text-gray-400 font-normal">FCFA</span></div>
</td>
<td className="px-5 py-3 text-right">
<div className="text-sm text-gray-600">150</div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-sm font-medium text-gray-600">+237 692 34 56 78</span>
</div>
</td>
<td className="px-5 py-3">
<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200/60">Pending</span>
</td>
<td className="px-5 py-3 text-right">
<button className="inline-flex items-center justify-center rounded-md bg-white border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 focus:outline-none transition-all">
                                        Settle Payout
                                    </button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Jean-Paul Mbida" className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Jean-Paul Mbida</div>
<div className="text-xs text-gray-500">Deido Express Store</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="text-sm font-medium text-gray-900">12,000 <span className="text-xs text-gray-400 font-normal">FCFA</span></div>
</td>
<td className="px-5 py-3 text-right">
<div className="text-sm text-gray-600">80</div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
<span className="text-sm font-medium text-gray-600">+237 653 45 67 89</span>
</div>
</td>
<td className="px-5 py-3">
<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 border border-yellow-200/60">Pending</span>
</td>
<td className="px-5 py-3 text-right">
<button className="inline-flex items-center justify-center rounded-md bg-white border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 focus:outline-none transition-all">
                                        Settle Payout
                                    </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-200/60 flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">Real-time Validation Log</h3>
<p className="text-xs text-gray-500 mt-0.5">Live feed of deliveries and agent commissions.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200/60">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Live
                    </div>
</div>
<div className="p-5 md:p-6">
<div className="relative pl-6 sm:pl-8 before:absolute before:inset-y-0 before:left-[11px] sm:before:left-[15px] before:w-px before:bg-gray-200 space-y-6">

<div className="relative group">
<div className="absolute -left-[27px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-white flex items-center justify-center border-2 border-green-500 shadow-sm z-10"></div>
<div className="bg-gray-50/50 border border-gray-100 rounded-lg p-4 transition-colors">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">ORD-518992-CM</span>
<span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 border border-green-200/60">Delivered</span>
</div>
<span className="text-xs font-medium text-gray-400">10:42 AM</span>
</div>
<div className="flex items-start sm:items-center gap-3 mt-3">
<img alt="Marc" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-gray-600">Scanned by <span className="font-medium text-gray-900">Marc Essomba</span> at Akwa Central Hub. <span className="font-medium text-gray-900">+150 FCFA</span> credited.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[27px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-white flex items-center justify-center border-2 border-gray-300 shadow-sm z-10"></div>
<div className="bg-white border border-gray-100 rounded-lg p-4 hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">ORD-518987-CM</span>
<span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 border border-green-200/60">Delivered</span>
</div>
<span className="text-xs font-medium text-gray-400">09:15 AM</span>
</div>
<div className="flex items-start sm:items-center gap-3 mt-3">
<img alt="Sarah" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-gray-600">Scanned by <span className="font-medium text-gray-900">Sarah Kameni</span> at Bonamoussadi Relay. <span className="font-medium text-gray-900">+150 FCFA</span> credited.</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[27px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-white flex items-center justify-center border-2 border-gray-300 shadow-sm z-10"></div>
<div className="bg-white border border-gray-100 rounded-lg p-4 hover:bg-gray-50/50 transition-colors">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">ORD-518942-CM</span>
<span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 border border-green-200/60">Delivered</span>
</div>
<span className="text-xs font-medium text-gray-400">Yesterday, 4:30 PM</span>
</div>
<div className="flex items-start sm:items-center gap-3 mt-3">
<img alt="Jean-Paul" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-gray-600">Scanned by <span className="font-medium text-gray-900">Jean-Paul Mbida</span> at Deido Express Store. <span className="font-medium text-gray-900">+150 FCFA</span> credited.</p>
</div>
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
