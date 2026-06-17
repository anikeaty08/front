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
      

<div className="max-w-[375px] mx-auto bg-gray-50 min-h-screen relative shadow-2xl border-x border-gray-200">

<header className="px-4 pt-5 pb-3 flex justify-between items-center bg-gray-50 sticky top-0 z-20">
<h1 className="text-xl font-semibold tracking-tight text-gray-900">My Hub Inventory</h1>
<div className="flex items-center gap-3">
<button className="relative text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon className="w-5 h-5" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-gray-50"></div>
</button>
<button className="relative w-8 h-8 rounded-full border border-gray-200 overflow-hidden bg-white flex shrink-0">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</button>
</div>
</header>

<div className="sticky top-[64px] z-10 bg-gray-50/95 backdrop-blur-md px-4 pb-4 border-b border-gray-200/80">

<div className="relative flex items-center mb-3">
<iconify-icon className="absolute left-3 text-gray-400 w-4 h-4" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-9 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all shadow-sm" placeholder="Search by Customer or Order ID..." type="text"/>
<button className="absolute right-2 p-1.5 text-gray-400 hover:text-gray-600 bg-gray-50 rounded border border-gray-100">
<iconify-icon className="w-3.5 h-3.5" icon="solar:tuning-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex space-x-2 overflow-x-auto hide-scrollbar">
<button className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 whitespace-nowrap flex items-center gap-1.5 transition-colors">
                    All Stock
                    <span className="bg-gray-100 border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded text-xs">42</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-sm font-medium text-purple-800 bg-purple-50 shadow-sm border border-purple-100 whitespace-nowrap flex items-center gap-1.5">
                    Ready for Pickup
                    <span className="bg-purple-100 text-purple-700 border border-purple-200 px-1.5 py-0.5 rounded text-xs">15</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 whitespace-nowrap flex items-center gap-1.5 transition-colors">
                    Overdue
                    <span className="bg-red-50 text-red-600 border border-red-100 px-1.5 py-0.5 rounded text-xs">3</span>
</button>
</div>
</div>

<main className="px-4 py-4 space-y-3">

<div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-sm">

<div className="flex justify-between items-start mb-3">
<div className="flex items-start gap-2.5">

<div className="mt-0.5 w-4 h-4 rounded border flex items-center justify-center bg-purple-600 border-purple-600 text-white shrink-0 shadow-sm">
<iconify-icon className="w-3 h-3" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900 tracking-tight">#KLI-8941</span>
<span className="text-xs text-gray-500 font-medium mt-0.5">Oct 24, 2023 • 14:35</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-purple-50 border border-purple-100 rounded-md shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
<span className="text-xs font-medium text-purple-800 tracking-tight">Ready for Pickup</span>
</div>
</div>

<div className="flex justify-between items-center mb-3 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
<div className="flex items-center gap-2.5">
<img alt="Customer" className="w-7 h-7 rounded-full bg-gray-200 border border-gray-200" src="https://i.pravatar.cc/150?u=mariam"/>
<span className="text-sm font-medium text-gray-800">Mariam Diallo</span>
<button className="text-emerald-600 bg-emerald-50 rounded-full p-1 border border-emerald-100 hover:bg-emerald-100 transition-colors flex items-center justify-center">
<iconify-icon className="w-3.5 h-3.5" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs font-medium text-gray-600">Lot KOLI-12</span>
<span className="text-xs font-semibold px-1.5 py-0.5 bg-gray-900 text-white rounded tracking-tight">AIR</span>
</div>
</div>

<div className="mb-3.5 p-2.5 bg-purple-50 border border-purple-100 rounded-lg flex items-center gap-2 text-purple-800">
<iconify-icon className="w-4 h-4 shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Shelf A-4, Bin 12</span>
</div>

<div className="flex gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium shadow-sm transition-colors text-center tracking-tight">
                        Mark Handover
                    </button>
<button className="px-3 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium shadow-sm transition-colors text-center tracking-tight">
                        Notify Customer
                    </button>
<button className="px-2.5 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-lg shadow-sm transition-colors flex items-center justify-center shrink-0">
<iconify-icon className="w-4 h-4" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-3">
<div className="flex items-start gap-2.5">
<div className="mt-0.5 w-4 h-4 rounded border border-gray-300 flex items-center justify-center bg-white shrink-0 shadow-sm"></div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900 tracking-tight">#KLI-8930</span>
<span className="text-xs text-gray-500 font-medium mt-0.5">Oct 24, 2023 • 09:15</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-purple-50 border border-purple-100 rounded-md shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
<span className="text-xs font-medium text-purple-800 tracking-tight">Ready for Pickup</span>
</div>
</div>
<div className="flex justify-between items-center mb-3 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
<div className="flex items-center gap-2.5">
<img alt="Customer" className="w-7 h-7 rounded-full bg-gray-200 border border-gray-200" src="https://i.pravatar.cc/150?u=amadou"/>
<span className="text-sm font-medium text-gray-800">Amadou Kane</span>
<button className="text-emerald-600 bg-emerald-50 rounded-full p-1 border border-emerald-100 hover:bg-emerald-100 transition-colors flex items-center justify-center">
<iconify-icon className="w-3.5 h-3.5" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs font-medium text-gray-600">Lot KOLI-12</span>
<span className="text-xs font-semibold px-1.5 py-0.5 bg-gray-900 text-white rounded tracking-tight">AIR</span>
</div>
</div>
<div className="mb-3.5 p-2.5 bg-purple-50 border border-purple-100 rounded-lg flex items-center gap-2 text-purple-800">
<iconify-icon className="w-4 h-4 shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Shelf A-4, Bin 15</span>
</div>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium shadow-sm transition-colors text-center tracking-tight">
                        Mark Handover
                    </button>
<button className="px-3 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium shadow-sm transition-colors text-center tracking-tight">
                        Notify Customer
                    </button>
<button className="px-2.5 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-lg shadow-sm transition-colors flex items-center justify-center shrink-0">
<iconify-icon className="w-4 h-4" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex items-start gap-2.5">
<div className="mt-0.5 w-4 h-4 rounded border flex items-center justify-center bg-purple-600 border-purple-600 text-white shrink-0 shadow-sm">
<iconify-icon className="w-3 h-3" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900 tracking-tight">#KLI-8802</span>
<span className="text-xs text-red-500 font-medium mt-0.5">Oct 10, 2023 • 11:20</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-red-50 border border-red-100 rounded-md shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-medium text-red-700 tracking-tight">Overdue</span>
</div>
</div>
<div className="flex justify-between items-center mb-3 p-2.5 bg-gray-50 rounded-lg border border-gray-100">
<div className="flex items-center gap-2.5">
<img alt="Customer" className="w-7 h-7 rounded-full bg-gray-200 border border-gray-200" src="https://i.pravatar.cc/150?u=fatou"/>
<span className="text-sm font-medium text-gray-800">Fatou Diop</span>
<button className="text-emerald-600 bg-emerald-50 rounded-full p-1 border border-emerald-100 hover:bg-emerald-100 transition-colors flex items-center justify-center">
<iconify-icon className="w-3.5 h-3.5" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs font-medium text-gray-600">Lot KOLI-11</span>
<span className="text-xs font-semibold px-1.5 py-0.5 bg-teal-800 text-white rounded tracking-tight">SEA</span>
</div>
</div>
<div className="mb-3.5 p-2.5 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-700">
<iconify-icon className="w-4 h-4 shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Shelf C-2, Bin 04</span>
</div>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium shadow-sm transition-colors text-center tracking-tight">
                        Mark Handover
                    </button>
<button className="px-3 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium shadow-sm transition-colors text-center tracking-tight">
                        Notify Customer
                    </button>
<button className="px-2.5 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-lg shadow-sm transition-colors flex items-center justify-center shrink-0">
<iconify-icon className="w-4 h-4" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</main>

<div className="fixed bottom-6 left-0 right-0 px-4 z-30 flex justify-center max-w-[375px] mx-auto pointer-events-none">
<div className="bg-gray-900 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-2 w-full border border-gray-700 pointer-events-auto">
<div className="flex items-center justify-between px-2 pt-1.5 pb-2">
<div className="flex items-center gap-2">
<div className="bg-purple-600 text-white text-xs font-medium px-1.5 py-0.5 rounded">2</div>
<span className="text-sm font-medium tracking-tight">Items selected</span>
</div>
<button className="text-gray-400 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon className="w-4 h-4" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 rounded-xl py-2.5 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm tracking-tight">
<iconify-icon className="w-4 h-4" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
                        Bulk Remind
                    </button>
<button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white rounded-xl py-2.5 text-sm font-medium flex items-center justify-center gap-1.5 border border-gray-700 transition-colors tracking-tight">
<iconify-icon className="w-4 h-4" icon="solar:printer-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                        Print Receipt
                    </button>
</div>
</div>
</div>
</div>

    </>
  );
}
