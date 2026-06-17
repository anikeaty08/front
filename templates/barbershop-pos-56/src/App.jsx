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
      

<aside className="w-64 bg-white border-r border-zinc-200 flex flex-col justify-between hidden md:flex z-10">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-200/60">
<span className="text-xl font-semibold tracking-tight text-zinc-900">BRBR.</span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:pie-chart-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-900 bg-zinc-100 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:point-of-sale-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Point of Sale</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Services</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Products</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Transactions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Customers</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-zinc-200/60">
<button className="flex items-center gap-3 w-full px-2 py-2 hover:bg-zinc-50 rounded-lg transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-medium">
                    JD
                </div>
<div className="flex-1 overflow-hidden">
<div className="font-medium text-zinc-900 truncate">John Doe</div>
<div className="text-xs text-zinc-500 truncate">Cashier</div>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-16 bg-white border-b border-zinc-200/60 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-lg font-medium tracking-tight text-zinc-900">New Transaction</h1>
</div>
<div className="flex items-center gap-4 text-zinc-500">
<span className="hidden sm:block text-xs font-medium bg-zinc-100 px-3 py-1.5 rounded-full">Oct 24, 2023 • 02:45 PM</span>
<button className="hover:text-zinc-900 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-zinc-900 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 flex flex-col lg:flex-row overflow-hidden p-4 lg:p-6 gap-6">

<div className="flex-1 flex flex-col min-w-0 h-full gap-4">

<div className="flex flex-col sm:flex-row gap-4 shrink-0">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-shadow" placeholder="Search services or products..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
<kbd className="px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-50 border border-zinc-200 rounded-md">⌘</kbd>
<kbd className="px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-50 border border-zinc-200 rounded-md">K</kbd>
</div>
</div>
<div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
<button className="px-4 py-2 bg-zinc-900 text-white rounded-xl font-medium whitespace-nowrap transition-transform active:scale-95">All Items</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-xl font-medium whitespace-nowrap hover:border-zinc-300 hover:text-zinc-900 transition-colors">Haircuts</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-xl font-medium whitespace-nowrap hover:border-zinc-300 hover:text-zinc-900 transition-colors">Shaves</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-xl font-medium whitespace-nowrap hover:border-zinc-300 hover:text-zinc-900 transition-colors">Products</button>
</div>
</div>

<div className="flex-1 overflow-y-auto pr-2">
<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-20 lg:pb-0">

<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group active:scale-[0.98]">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:scissors-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="font-medium text-zinc-900 leading-tight">Classic Haircut</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 45 min
                                </p>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-semibold text-zinc-900 tracking-tight">$30.00</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group active:scale-[0.98]">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:stars-line-duotone" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="font-medium text-zinc-900 leading-tight">Fade &amp; Beard Combo</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 60 min
                                </p>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-semibold text-zinc-900 tracking-tight">$45.00</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group active:scale-[0.98]">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="font-medium text-zinc-900 leading-tight">Hot Towel Shave</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 30 min
                                </p>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-semibold text-zinc-900 tracking-tight">$25.00</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group active:scale-[0.98]">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:face-scan-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="font-medium text-zinc-900 leading-tight">Kids Haircut</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 30 min
                                </p>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-semibold text-zinc-900 tracking-tight">$20.00</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group active:scale-[0.98]">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:jar-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="font-medium text-zinc-900 leading-tight">Matte Clay Pomade</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon> 15 in stock
                                </p>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-semibold text-zinc-900 tracking-tight">$18.00</span>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:border-zinc-300 hover:shadow-sm transition-all group active:scale-[0.98]">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<div className="mt-auto">
<h3 className="font-medium text-zinc-900 leading-tight">Beard Oil Premium</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon> 8 in stock
                                </p>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-semibold text-zinc-900 tracking-tight">$22.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[420px] bg-white border border-zinc-200 rounded-2xl shadow-sm flex flex-col shrink-0 h-full max-h-[calc(100vh-8rem)]">

<div className="p-4 border-b border-zinc-100 shrink-0">
<button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:user-rounded-linear" width="18"></iconify-icon>
</div>
<div className="text-left">
<div className="font-medium text-zinc-900">Walk-in Customer</div>
<div className="text-xs text-zinc-500 group-hover:text-zinc-700">Click to assign customer</div>
</div>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="flex gap-4 group">
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h4 className="font-medium text-zinc-900 truncate pr-2">Fade &amp; Beard Combo</h4>
<span className="font-medium text-zinc-900">$45.00</span>
</div>
<div className="text-xs text-zinc-500 mb-2">Service • John D. (Barber)</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-lg px-2 py-1 w-fit">
<button className="text-zinc-400 hover:text-zinc-900 disabled:opacity-50"><iconify-icon icon="solar:minus-linear" width="14"></iconify-icon></button>
<span className="w-4 text-center text-xs font-medium">1</span>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:add-linear" width="14"></iconify-icon></button>
</div>
<button className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h4 className="font-medium text-zinc-900 truncate pr-2">Matte Clay Pomade</h4>
<span className="font-medium text-zinc-900">$18.00</span>
</div>
<div className="text-xs text-zinc-500 mb-2">Product</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-lg px-2 py-1 w-fit">
<button className="text-zinc-400 hover:text-zinc-900 disabled:opacity-50"><iconify-icon icon="solar:minus-linear" width="14"></iconify-icon></button>
<span className="w-4 text-center text-xs font-medium">1</span>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:add-linear" width="14"></iconify-icon></button>
</div>
<button className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<button className="w-full py-3 border border-dashed border-zinc-300 rounded-xl text-zinc-500 font-medium hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Add Custom Item
                    </button>
</div>

<div className="bg-zinc-50 p-5 rounded-b-2xl border-t border-zinc-200 shrink-0">
<div className="space-y-2 mb-4">
<div className="flex justify-between text-zinc-500">
<span>Subtotal</span>
<span className="font-medium text-zinc-900">$63.00</span>
</div>
<div className="flex justify-between text-zinc-500">
<span>Tax (10%)</span>
<span className="font-medium text-zinc-900">$6.30</span>
</div>
<div className="flex justify-between text-zinc-500">
<button className="text-zinc-400 hover:text-zinc-900 border-b border-dashed border-zinc-400 hover:border-zinc-900 transition-colors">Add Discount</button>
<span className="font-medium text-zinc-900">-$0.00</span>
</div>
</div>
<div className="border-t border-zinc-200/80 pt-4 mb-5 flex items-end justify-between">
<span className="text-base font-medium text-zinc-900">Total</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-900">$69.30</span>
</div>

<div className="grid grid-cols-3 gap-2 mb-5">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="payment" type="radio"/>
<div className="py-2.5 text-center border border-zinc-200 rounded-lg text-zinc-600 font-medium peer-checked:border-zinc-900 peer-checked:bg-white peer-checked:text-zinc-900 hover:bg-white transition-all">
                                Cash
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="payment" type="radio"/>
<div className="py-2.5 text-center border border-zinc-200 rounded-lg text-zinc-600 font-medium peer-checked:border-zinc-900 peer-checked:bg-white peer-checked:text-zinc-900 hover:bg-white transition-all">
                                Card
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="payment" type="radio"/>
<div className="py-2.5 text-center border border-zinc-200 rounded-lg text-zinc-600 font-medium peer-checked:border-zinc-900 peer-checked:bg-white peer-checked:text-zinc-900 hover:bg-white transition-all">
                                QRIS
                            </div>
</label>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3.5 rounded-xl font-medium tracking-wide transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm">
                        Charge $69.30
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
