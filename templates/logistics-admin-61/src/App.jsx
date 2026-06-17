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
      

<main className="flex-1 flex flex-col h-full relative z-0 overflow-hidden">

<header className="bg-white border-b border-gray-200 px-8 py-6 flex-shrink-0 flex justify-between items-start">
<div>
<h1 className="text-2xl font-semibold text-violet-700 tracking-tight">Relay Point Directory</h1>
<p className="text-sm text-gray-500 mt-1">Manage physical pickup points, inventory, and authorized agents.</p>
</div>
<button className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                Add New Relay Point
            </button>
</header>

<div className="px-8 py-4 bg-gray-50/80 backdrop-blur-md border-b border-gray-200 flex-shrink-0 flex items-center justify-between gap-4 sticky top-0 z-10">

<div className="relative w-full max-w-md">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 text-lg" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-sm transition-colors shadow-sm" placeholder="Search by Store Name, City, or Agent WhatsApp" type="text"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-violet-600 transition-colors" title="Scan Barcode ID">
<iconify-icon className="text-lg" icon="solar:barcode-scan-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3">
<div className="relative inline-block text-left">
<select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-9 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
<option value="">All Cities</option>
<option value="douala">Douala</option>
<option value="yaounde">Yaoundé</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative inline-block text-left">
<select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-9 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
<option value="">All Statuses</option>
<option value="active">Active</option>
<option value="inactive">Inactive</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-auto bg-white">
<table className="w-full whitespace-nowrap text-left border-collapse">
<thead className="bg-gray-50 sticky top-0 z-10 border-b border-gray-200">
<tr>
<th className="px-8 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Relay Point &amp; ID</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Physical Address</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Authorized Agents</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Live Stock</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Commission</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Status</th>
<th className="px-8 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="hover:bg-gray-50/50 transition-colors bg-violet-50/30">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Akwa Central Hub</p>
<p className="text-xs text-gray-500 mt-0.5">#RP-001</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-700">Boulevard de la Liberté</p>
<p className="text-xs text-gray-500 mt-0.5">Douala</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-[10px] font-medium text-blue-700" title="Marc O.">M</div>
<div className="h-6 w-6 rounded-full ring-2 ring-white bg-green-100 flex items-center justify-center text-[10px] font-medium text-green-700" title="Sara T.">S</div>
</div>
<span className="text-xs text-gray-500">+1</span>
</div>
</td>
<td className="px-6 py-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700">
                                42
                            </div>
</td>
<td className="px-6 py-4 text-sm text-gray-700">
                            150 FCFA <span className="text-gray-400 text-xs">/scan</span>
</td>
<td className="px-6 py-4">

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-violet-500"></div>
</label>
</td>
<td className="px-8 py-4 text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors">
                                Manage
                            </button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Bastos Express Delivery</p>
<p className="text-xs text-gray-500 mt-0.5">#RP-045</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-700">Rue Principale, Face SNI</p>
<p className="text-xs text-gray-500 mt-0.5">Yaoundé</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full ring-2 ring-white bg-orange-100 flex items-center justify-center text-[10px] font-medium text-orange-700" title="Jean B.">J</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700">
                                12
                            </div>
</td>
<td className="px-6 py-4 text-sm text-gray-700">
                            150 FCFA <span className="text-gray-400 text-xs">/scan</span>
</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-violet-500"></div>
</label>
</td>
<td className="px-8 py-4 text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-violet-700 hover:bg-violet-50 focus:outline-none transition-colors">
                                Manage
                            </button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors opacity-75">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:shop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-700">Bonamoussadi Pickup</p>
<p className="text-xs text-gray-400 mt-0.5">#RP-022</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-600">Carrefour Maire</p>
<p className="text-xs text-gray-400 mt-0.5">Douala</p>
</td>
<td className="px-6 py-4">
<span className="text-xs text-gray-400 italic">No agents assigned</span>
</td>
<td className="px-6 py-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-400">
                                0
                            </div>
</td>
<td className="px-6 py-4 text-sm text-gray-500">
                            120 FCFA <span className="text-gray-300 text-xs">/scan</span>
</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-violet-500"></div>
</label>
</td>
<td className="px-8 py-4 text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-violet-700 hover:bg-violet-50 focus:outline-none transition-colors">
                                Manage
                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</main>

<div className="fixed inset-0 bg-gray-900/10 backdrop-blur-[2px] z-40 transition-opacity"></div>

<aside className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-gray-200 flex flex-col transform transition-transform translate-x-0">

<div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700 uppercase tracking-wider">Active</span>
<span className="text-xs text-gray-500 font-mono">#RP-001</span>
</div>
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">Akwa Central Hub</h2>
<p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    Boulevard de la Liberté, Douala
                </p>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                        Live Inventory Flow
                    </h3>
</div>
<div className="grid grid-cols-3 gap-3">

<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex flex-col justify-between h-24">
<span className="text-xs font-medium text-gray-500 leading-tight">Pending<br/>Scan</span>
<div className="flex items-end justify-between mt-2">
<span className="text-xl font-semibold text-gray-900 tracking-tight">08</span>
<iconify-icon className="text-gray-300 text-lg mb-1" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-violet-50 border border-violet-100 rounded-lg p-3 flex flex-col justify-between h-24 ring-1 ring-violet-200/50">
<span className="text-xs font-medium text-violet-600 leading-tight">At<br/>Relay</span>
<div className="flex items-end justify-between mt-2">
<span className="text-xl font-semibold text-violet-700 tracking-tight">42</span>
<iconify-icon className="text-violet-300 text-lg mb-1" icon="solar:archive-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex flex-col justify-between h-24">
<span className="text-xs font-medium text-gray-500 leading-tight">Withdrawn<br/>History</span>
<div className="flex items-end justify-between mt-2">
<span className="text-xl font-semibold text-gray-900 tracking-tight">1,204</span>
<iconify-icon className="text-gray-300 text-lg mb-1" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>
<hr className="border-gray-100"/>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                        Agent Security &amp; Access
                    </h3>
<span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">3 Authorized</span>
</div>

<ul className="space-y-2 mb-4">
<li className="flex items-center justify-between p-3 rounded-md border border-gray-200 bg-white shadow-sm group">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium text-xs">MA</div>
<div>
<p className="text-sm font-medium text-gray-900">Marc Awono</p>
<p className="text-xs text-gray-500 font-mono mt-0.5">+237 699 12 34 56</p>
</div>
</div>
<button className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1" title="Revoke Access">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</li>
<li className="flex items-center justify-between p-3 rounded-md border border-gray-200 bg-white shadow-sm group">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-medium text-xs">ST</div>
<div>
<p className="text-sm font-medium text-gray-900">Sara Talla</p>
<p className="text-xs text-gray-500 font-mono mt-0.5">+237 677 88 99 00</p>
</div>
</div>
<button className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1" title="Revoke Access">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</li>
<li className="flex items-center justify-between p-3 rounded-md border border-gray-200 bg-white shadow-sm group">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-medium text-xs">PE</div>
<div>
<p className="text-sm font-medium text-gray-900">Paul Ekambi</p>
<p className="text-xs text-gray-500 font-mono mt-0.5">+237 655 44 33 22</p>
</div>
</div>
<button className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1" title="Revoke Access">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</button>
</li>
</ul>

<div className="mt-4 p-4 rounded-md border border-dashed border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors group cursor-pointer">
<div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 group-hover:text-violet-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:user-plus-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        Assign New Agent
                    </div>
<div className="mt-3 hidden group-hover:block transition-all">

<div className="flex gap-2">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-8 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500" placeholder="WhatsApp Number" type="text"/>
</div>
<button className="bg-violet-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-violet-700 transition-colors">Add</button>
</div>
</div>
</div>
<p className="text-xs text-gray-400 mt-2 text-center">Agents must use the Koli Flash app linked to this WhatsApp number to scan parcels.</p>
</section>
</div>

<div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                Generate QR Code
            </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-black transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Save Changes
            </button>
</div>
</aside>

    </>
  );
}
