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
      
<div className="flex h-screen w-full">

<aside className="hidden md:flex flex-col w-64 border-r border-stone-100 bg-white/50 backdrop-blur-xl h-full justify-between p-6">
<div>

<div className="flex items-center gap-2 mb-10">
<div className="size-8 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-400 flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="serif-font text-2xl tracking-tight text-stone-800 italic">Bloom.</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-orange-50 text-orange-700 font-medium transition-all group" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-white transition-all group" href="#">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Cost Planner</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-white transition-all group" href="#">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Suppliers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-white transition-all group" href="#">
<iconify-icon icon="solar:card-recive-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Transactions</span>
</a>
</nav>
</div>

<div>
<div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 mb-4">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-white rounded-lg text-orange-400 shadow-sm">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-stone-800 mb-0.5">Tip of the day</p>
<p className="text-[10px] leading-relaxed text-stone-500">Check your packaging costs, they rose 2% this month.</p>
</div>
</div>
</div>
<button className="flex items-center gap-3 px-2 w-full text-stone-500 hover:text-stone-800 transition-colors">
<img alt="User" className="size-8 rounded-full border border-stone-200 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="text-left">
<p className="text-xs font-semibold text-stone-800">Sarah Jenkins</p>
<p className="text-[10px] text-stone-400">sarah@sunnyside.co</p>
</div>
<iconify-icon className="ml-auto" icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto h-full p-4 md:p-8 relative">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<div className="flex items-center gap-2 text-stone-400 mb-1">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-medium">October 24, 2023</span>
</div>
<h1 className="text-3xl md:text-4xl text-stone-800 tracking-tight leading-none">
                        Good Morning, <span className="italic text-stone-600">Sarah</span>
</h1>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center size-10 rounded-full border border-stone-200 bg-white text-stone-500 hover:border-orange-200 hover:text-orange-500 transition-colors shadow-sm">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-full shadow-lg shadow-stone-200 transition-all text-sm font-medium">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span>New Expense</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">


<div className="col-span-1 md:col-span-4 p-5 rounded-3xl bg-white border border-stone-100 shadow-[0_2px_20px_-4px_rgba(255,247,237,1)] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-yellow-400">
<iconify-icon icon="solar:sun-2-bold" width="80"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="size-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center border border-yellow-100">
<iconify-icon icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-500">Total Income</span>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full bg-green-50 text-green-700">+12%</span>
</div>
<p className="serif-font text-3xl text-stone-800 tracking-tight">$8,240.50</p>
<div className="mt-4 h-1 w-full bg-stone-50 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 w-3/4 rounded-full"></div>
</div>
<p className="text-xs text-stone-400 mt-2">Target: $10k this month</p>
</div>

<div className="col-span-1 md:col-span-4 p-5 rounded-3xl bg-white border border-stone-100 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="size-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100">
<iconify-icon icon="solar:bag-heart-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-500">Expenses</span>
</div>
</div>
<p className="serif-font text-3xl text-stone-800 tracking-tight">$3,105.20</p>

<div className="flex items-end gap-1 h-8 mt-4">
<div className="w-full bg-rose-50 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-rose-100 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-rose-200 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-rose-500 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-rose-200 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-rose-100 h-[30%] rounded-t-sm"></div>
</div>
<p className="text-xs text-stone-400 mt-2">Spending is stable</p>
</div>

<div className="col-span-1 md:col-span-4 p-5 rounded-3xl bg-gradient-to-br from-stone-800 to-stone-900 text-white shadow-lg shadow-stone-200">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 opacity-80">
<iconify-icon icon="solar:stars-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Net Profit</span>
</div>
</div>
<p className="serif-font text-3xl tracking-tight text-white mb-1">$5,135.30</p>
<p className="text-xs text-stone-400 mb-6">Cash in hand after expenses</p>
<button className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium transition-colors">
                        View Details
                    </button>
</div>

<div className="col-span-1 md:col-span-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl text-stone-800 font-medium tracking-tight mb-1">Product Planner</h2>
<p className="text-xs text-stone-400">Simulate costs for your next restock.</p>
</div>
<div className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-wide border border-orange-100">
                            Draft Mode
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="space-y-6">

<div>
<div className="flex justify-between text-xs font-medium text-stone-500 mb-2">
<label>Supplier Unit Cost</label>
<span className="text-stone-800">$12.50</span>
</div>
<div className="relative h-6 flex items-center">
<input max="50" min="1" step="0.50" type="range" value="12.50"/>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium text-stone-500 mb-2">
<label>Shipping &amp; Tax (per unit)</label>
<span className="text-stone-800">$3.20</span>
</div>
<div className="relative h-6 flex items-center">
<input max="20" min="0" step="0.10" type="range" value="3.20"/>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium text-stone-500 mb-2">
<label>Packaging (Box, Sticker, Note)</label>
<span className="text-stone-800">$1.50</span>
</div>
<div className="relative h-6 flex items-center">
<input max="10" min="0" step="0.10" type="range" value="1.50"/>
</div>
</div>

<div className="pt-2">
<label className="block text-xs font-medium text-stone-500 mb-2">Target Selling Price</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-serif italic text-lg">$</span>
<input className="w-full pl-7 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-all font-medium" type="number" value="45.00"/>
</div>
</div>
</div>

<div className="bg-[#FFFCF5] rounded-2xl p-6 border border-yellow-100/50 flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-10 -right-10 size-32 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
<div className="relative z-10">
<p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">Estimated Returns</p>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-500">Total Cost</span>
<span className="font-medium text-stone-800">$17.20</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-yellow-200/50 pb-3">
<span className="text-stone-500">Sell Price</span>
<span className="font-medium text-stone-800">$45.00</span>
</div>
</div>
</div>
<div className="relative z-10 mt-6">
<div className="flex items-baseline gap-1">
<h3 className="serif-font text-5xl text-orange-500 leading-none">$27.80</h3>
<span className="text-orange-400 font-medium text-sm">/ unit</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-md text-[10px] font-bold text-stone-600 shadow-sm border border-stone-100">
                                        61% Margin
                                    </span>
<span className="text-[10px] text-stone-400">Great job! That's healthy.</span>
</div>
</div>
<button className="w-full mt-6 py-2.5 bg-orange-400 hover:bg-orange-500 text-white rounded-xl text-sm font-medium shadow-md shadow-orange-200 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:diskette-linear" width="16"></iconify-icon>
                                Save to Dashboard
                            </button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 flex flex-col gap-4">

<div className="p-5 rounded-3xl bg-white border border-stone-100 shadow-sm flex-1 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-stone-800">Weekly Flow</h3>
<button className="text-stone-400 hover:text-stone-600">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-end gap-2 justify-between px-1">

<div className="w-full bg-stone-100 rounded-t-lg h-[40%] group relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Mon</div>
</div>
<div className="w-full bg-stone-100 rounded-t-lg h-[60%] relative group"></div>
<div className="w-full bg-orange-300 rounded-t-lg h-[80%] relative group shadow-lg shadow-orange-100"></div>
<div className="w-full bg-stone-100 rounded-t-lg h-[50%] relative group"></div>
<div className="w-full bg-stone-100 rounded-t-lg h-[70%] relative group"></div>
<div className="w-full bg-stone-100 rounded-t-lg h-[45%] relative group"></div>
<div className="w-full bg-stone-100 rounded-t-lg h-[30%] relative group"></div>
</div>
<div className="flex justify-between text-[10px] text-stone-400 mt-2 font-medium uppercase tracking-wider">
<span>Mon</span>
<span>Sun</span>
</div>
</div>

<div className="p-5 rounded-3xl bg-white border border-stone-100 shadow-sm">
<h3 className="text-sm font-semibold text-stone-800 mb-4">Latest In/Out</h3>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:shop-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-700">Shopify Payout</span>
<span className="text-[10px] text-stone-400">Today, 10:00 AM</span>
</div>
</div>
<span className="text-xs font-medium text-green-600">+$450.00</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-stone-50 text-stone-500 flex items-center justify-center">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-700">Uline Packaging</span>
<span className="text-[10px] text-stone-400">Yesterday</span>
</div>
</div>
<span className="text-xs font-medium text-stone-800">-$124.50</span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-stone-50 text-stone-500 flex items-center justify-center">
<iconify-icon icon="solar:gallery-send-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-700">Instagram Ads</span>
<span className="text-[10px] text-stone-400">Oct 21</span>
</div>
</div>
<span className="text-xs font-medium text-stone-800">-$50.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 mb-4 text-center">
<p className="serif-font italic text-stone-400 text-lg">"Small steps everyday, Sarah."</p>
</div>
</main>
</div>

    </>
  );
}
