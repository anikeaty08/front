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
      

<header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-xl text-zinc-900">KOLI</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300 shadow-sm">
<img alt="Admin" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;h=150&amp;fit=crop&amp;q=80"/>
</div>
</div>
</header>
<main className="max-w-[1440px] mx-auto p-6 flex flex-col gap-6">

<div className="flex flex-col gap-4">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="relative w-full md:max-w-md flex-1">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-11 pr-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 shadow-sm transition-all" placeholder="Search by Phone, Order ID, or Name..." type="text"/>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 shadow-sm transition-colors">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
                        More Filters
                        <iconify-icon className="text-zinc-400 ml-1" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium shadow-sm shadow-violet-600/10 transition-all">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
                        Create Order
                    </button>
</div>
</div>

<div className="flex items-center overflow-x-auto pb-2 md:pb-0 hide-scrollbar border-b border-zinc-200">
<div className="flex gap-6 min-w-max">
<button className="px-1 py-3 text-sm font-medium text-zinc-900 border-b-2 border-zinc-900">
                        All Orders
                    </button>
<button className="px-1 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 border-b-2 border-transparent hover:border-zinc-300 transition-colors flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Urgent (To Buy)
                        <span className="bg-zinc-100 text-zinc-600 px-1.5 rounded text-xs">12</span>
</button>
<button className="px-1 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 border-b-2 border-transparent hover:border-zinc-300 transition-colors flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        Partially Purchased
                    </button>
<button className="px-1 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700 border-b-2 border-transparent hover:border-zinc-300 transition-colors flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Fully Purchased
                    </button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col">

<div className="px-5 py-3 bg-violet-50/50 border-b border-zinc-200 flex items-center justify-between">
<div className="flex items-center gap-3 text-sm">
<span className="font-medium text-violet-700">2 items selected</span>
<span className="w-px h-4 bg-violet-200"></span>
<button className="text-zinc-500 hover:text-zinc-700 transition-colors">Clear selection</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm font-medium shadow-sm transition-colors">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Confirm Selected
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-600 rounded-md text-sm font-medium shadow-sm transition-colors">
<iconify-icon icon="solar:export-linear" strokeWidth="1.5"></iconify-icon>
                        Export
                    </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">

<thead className="bg-zinc-50 border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500 font-medium">
<tr>
<th className="py-3 px-5 w-12 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-300 bg-white flex items-center justify-center transition-all">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</th>
<th className="py-3 px-5 align-middle">Order Details</th>
<th className="py-3 px-5 align-middle">Customer</th>
<th className="py-3 px-5 align-middle">Amount &amp; Items</th>
<th className="py-3 px-5 align-middle">Shipping</th>
<th className="py-3 px-5 align-middle">Status</th>
<th className="py-3 px-5 align-middle text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-zinc-50 transition-colors bg-violet-50/30">
<td className="py-4 px-5 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-300 bg-white flex items-center justify-center transition-all">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-zinc-700 w-6 h-6 flex items-center justify-center rounded-md hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col">
<span className="font-medium text-sm text-zinc-900">#KOLI-8942</span>
<span className="text-xs text-zinc-500 mt-0.5">Oct 24, 2023</span>
</div>
</div>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center gap-3">
<img alt="Mariam" className="w-9 h-9 rounded-full object-cover border border-zinc-200 shadow-sm flex-shrink-0" src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&amp;h=150&amp;fit=crop&amp;q=80"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-800">Mariam Diallo</span>
<div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
<span>+221 77 123 45 67</span>
<a className="text-emerald-500 hover:text-emerald-600 transition-colors flex items-center" href="#" title="Chat on WhatsApp">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-zinc-900">34,500 FCFA</span>
<span className="text-xs text-zinc-500">4 Items</span>
</div>
</td>
<td className="py-4 px-5 align-middle">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                                    Cargo #12
                                </span>
</td>
<td className="py-4 px-5 align-middle">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200/60">
                                    Urgent (To Buy)
                                </span>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center justify-end gap-3">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-32 pl-8 pr-3 py-1.5 bg-white border border-zinc-200 rounded-md text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 shadow-sm transition-all" placeholder="Tracking #" type="text"/>
</div>
<button className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm font-medium shadow-sm transition-colors">
                                        Confirm
                                    </button>
<button className="text-zinc-400 hover:text-zinc-700 p-1.5 rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="bg-zinc-50/50 border-b border-zinc-200">
<td className="p-0" colspan="7">
<div className="pl-[68px] pr-5 py-4 border-l-2 border-violet-400 bg-white">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-100 text-xs uppercase tracking-wider text-zinc-400 font-medium">
<th className="pb-3 px-4 w-10 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-3.5 h-3.5 rounded-[3px] border border-zinc-300 bg-white flex items-center justify-center transition-all">
<iconify-icon className="text-white text-[10px] opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</th>
<th className="pb-3 px-4 align-middle">Item Details</th>
<th className="pb-3 px-4 align-middle">Variant</th>
<th className="pb-3 px-4 align-middle">Unit Price</th>
<th className="pb-3 pl-4 align-middle text-right">Link</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-50">
<tr className="hover:bg-zinc-50/80 transition-colors group">
<td className="py-3 px-4 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-3.5 h-3.5 rounded-[3px] border border-zinc-300 bg-white flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-violet-500/30">
<iconify-icon className="text-white text-[10px] opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex items-center gap-3">
<img alt="Dress" className="w-9 h-9 rounded-md object-cover bg-zinc-100 border border-zinc-200 flex-shrink-0" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&amp;q=80"/>
<span className="text-sm font-medium text-zinc-800">Elegant Summer Midi Dress Flowy</span>
</div>
</td>
<td className="py-3 px-4 align-middle">
<span className="bg-zinc-100 px-2.5 py-1 rounded-md text-xs border border-zinc-200 text-zinc-600 font-medium">M / Beige</span>
</td>
<td className="py-3 px-4 align-middle text-sm font-medium text-zinc-900">12,500 FCFA</td>
<td className="py-3 pl-4 align-middle text-right">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 border border-orange-200/60 hover:bg-orange-100 rounded-md text-xs font-medium transition-colors" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
                                                        Shein
                                                    </a>
</td>
</tr>
<tr className="hover:bg-zinc-50/80 transition-colors group">
<td className="py-3 px-4 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-3.5 h-3.5 rounded-[3px] border border-zinc-300 bg-white flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-violet-500/30">
<iconify-icon className="text-white text-[10px] opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="py-3 px-4 align-middle">
<div className="flex items-center gap-3">
<img alt="Bag" className="w-9 h-9 rounded-md object-cover bg-zinc-100 border border-zinc-200 flex-shrink-0" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&amp;q=80"/>
<span className="text-sm font-medium text-zinc-800">Quilted Crossbody Leather Bag</span>
</div>
</td>
<td className="py-3 px-4 align-middle">
<span className="bg-zinc-100 px-2.5 py-1 rounded-md text-xs border border-zinc-200 text-zinc-600 font-medium">OS / Black</span>
</td>
<td className="py-3 px-4 align-middle text-sm font-medium text-zinc-900">22,000 FCFA</td>
<td className="py-3 pl-4 align-middle text-right">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 border border-orange-200/60 hover:bg-orange-100 rounded-md text-xs font-medium transition-colors" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
                                                        Shein
                                                    </a>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors">
<td className="py-4 px-5 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-300 bg-white flex items-center justify-center transition-all">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-zinc-700 w-6 h-6 flex items-center justify-center rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col">
<span className="font-medium text-sm text-zinc-900">#KOLI-8941</span>
<span className="text-xs text-zinc-500 mt-0.5">Oct 23, 2023</span>
</div>
</div>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center gap-3">
<img alt="Amadou" className="w-9 h-9 rounded-full object-cover border border-zinc-200 shadow-sm flex-shrink-0" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&amp;h=150&amp;fit=crop&amp;q=80"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-800">Amadou Kane</span>
<div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
<span>+221 76 987 65 43</span>
<a className="text-emerald-500 hover:text-emerald-600 transition-colors flex items-center" href="#" title="Chat on WhatsApp">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-zinc-900">15,200 FCFA</span>
<span className="text-xs text-zinc-500">1 Item</span>
</div>
</td>
<td className="py-4 px-5 align-middle">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                                    Single Purchase
                                </span>
</td>
<td className="py-4 px-5 align-middle">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200/60">
                                    Partially Purchased
                                </span>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center justify-end gap-3">
<button className="px-3 py-1.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-md text-sm font-medium shadow-sm transition-colors">
                                        Review
                                    </button>
<button className="text-zinc-400 hover:text-zinc-700 p-1.5 rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors bg-violet-50/30">
<td className="py-4 px-5 text-center align-middle">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-300 bg-white flex items-center justify-center transition-all">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-zinc-700 w-6 h-6 flex items-center justify-center rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col">
<span className="font-medium text-sm text-zinc-900">#KOLI-8940</span>
<span className="text-xs text-zinc-500 mt-0.5">Oct 21, 2023</span>
</div>
</div>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center gap-3">
<img alt="Fatou" className="w-9 h-9 rounded-full object-cover border border-zinc-200 shadow-sm flex-shrink-0" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&amp;h=150&amp;fit=crop&amp;q=80"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-800">Fatou Diop</span>
<div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
<span>+221 78 456 12 30</span>
<a className="text-emerald-500 hover:text-emerald-600 transition-colors flex items-center" href="#" title="Chat on WhatsApp">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-zinc-900">55,000 FCFA</span>
<span className="text-xs text-zinc-500">3 Items</span>
</div>
</td>
<td className="py-4 px-5 align-middle">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                                    Cargo #12
                                </span>
</td>
<td className="py-4 px-5 align-middle">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                    Fully Purchased
                                </span>
</td>
<td className="py-4 px-5 align-middle">
<div className="flex items-center justify-end gap-3">
<button className="px-3 py-1.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-md text-sm font-medium shadow-sm transition-colors">
                                        Review
                                    </button>
<button className="text-zinc-400 hover:text-zinc-700 p-1.5 rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-zinc-50/80 border-t border-zinc-200 px-5 py-4 flex items-center justify-between">
<span className="text-sm text-zinc-500 font-medium">Showing 1 to 3 of 42 entries</span>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 transition-colors disabled:opacity-50" disabled="">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md bg-white border border-zinc-200 text-sm font-medium text-zinc-900 shadow-sm">1</button>
<button className="w-8 h-8 rounded-md text-sm font-medium text-zinc-500 hover:bg-zinc-200 transition-colors">2</button>
<button className="w-8 h-8 rounded-md text-sm font-medium text-zinc-500 hover:bg-zinc-200 transition-colors">3</button>
<span className="text-sm text-zinc-400 mx-1">...</span>
<button className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
