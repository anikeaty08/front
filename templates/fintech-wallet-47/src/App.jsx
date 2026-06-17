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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800/50 bg-[#0A0A0A] flex flex-col flex-shrink-0">
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-black">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-lg">My Wallet</span>
</div>
<nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-900/50 text-zinc-100 text-sm group transition-all duration-200 border border-zinc-800/50" href="#">
<iconify-icon className="text-zinc-100" icon="solar:widget-5-linear" width="18"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 text-sm group transition-all duration-200 border border-transparent" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:transfer-horizontal-linear" width="18"></iconify-icon>
<span>Transactions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 text-sm group transition-all duration-200 border border-transparent" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:card-2-linear" width="18"></iconify-icon>
<span>My Cards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 text-sm group transition-all duration-200 border border-transparent" href="#">
<iconify-icon className="group-hover:text-zinc-200 transition-colors" icon="solar:chart-2-linear" width="18"></iconify-icon>
<span>Analytics</span>
</a>
</nav>
<div className="p-4 border-t border-zinc-800/50">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 text-sm transition-all duration-200" href="#">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
<span>Settings</span>
</a>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium">Alex Morgan</span>
<span className="text-[10px] text-zinc-500">Free Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-[#0A0A0A]">

<header className="h-16 border-b border-zinc-800/50 flex items-center justify-between px-6 md:px-8 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-10">
<h2 className="text-sm font-medium text-zinc-100">Overview</h2>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 text-xs text-zinc-300 bg-zinc-900/50 w-64 border-zinc-800 border rounded-full pt-2 pr-4 pb-2 pl-9" placeholder="Search transactions..." type="text"/>
</div>
<button className="relative p-2 rounded-full hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-zinc-100">
<iconify-icon className="" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-500 rounded-full border border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 p-6 rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/20 to-zinc-900/0 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:wallet-money-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Total Balance</p>
<h1 className="text-4xl text-zinc-50 font-medium tracking-tight mb-4">$24,500.80</h1>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md border border-emerald-400/20">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
                                    +12.5%
                                </span>
<span className="text-xs text-zinc-500">vs last month</span>
</div>
<div className="mt-8 flex gap-3">
<button className="bg-zinc-100 hover:bg-white text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon className="" icon="solar:card-send-linear" width="18"></iconify-icon>
                                    Send
                                </button>
<button className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon className="" icon="solar:add-circle-linear" width="18"></iconify-icon>
                                    Top Up
                                </button>
</div>
</div>
</div>

<div className="p-1 rounded-xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center">
<div className="w-full h-full rounded-lg bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
<div className="flex justify-between items-start relative z-10">
<iconify-icon className="text-zinc-400 rotate-90" icon="solar:sim-card-linear" width="24"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="solar:wifi-router-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="mt-4 relative z-10">
<p className="text-zinc-400 text-xs tracking-widest mb-1">CARD NUMBER</p>
<p className="text-zinc-200 font-mono text-sm tracking-wider">•••• •••• •••• 4289</p>
</div>
<div className="flex justify-between items-end mt-4 relative z-10">
<div className="">
<p className="text-zinc-500 text-[10px] uppercase tracking-wider">Holder</p>
<p className="text-zinc-300 text-xs font-medium">ALEX MORGAN</p>
</div>
<div className="text-right">
<p className="text-zinc-500 text-[10px] uppercase tracking-wider">Exp</p>
<p className="text-zinc-300 text-xs font-medium">12/26</p>
</div>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-4">
<h3 className="text-zinc-100 font-medium">Recent Transactions</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
                                View all <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/50 border-b border-zinc-800">
<tr>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Transaction</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">

<tr className="group hover:bg-zinc-900/40 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:bag-3-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 font-medium text-sm">Apple Store</p>
<p className="text-zinc-500 text-xs">Electronics</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-xs">Oct 24, 2023</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Completed</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-zinc-200">
                                            -$1,299.00
                                        </td>
</tr>

<tr className="group hover:bg-zinc-900/40 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 font-medium text-sm">Sarah Miller</p>
<p className="text-zinc-500 text-xs">Transfer</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-xs">Oct 22, 2023</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-900/30 text-emerald-400 border border-emerald-900/50">Received</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-emerald-400">
                                            +$450.00
                                        </td>
</tr>

<tr className="group hover:bg-zinc-900/40 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:cart-large-2-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 font-medium text-sm">Whole Foods</p>
<p className="text-zinc-500 text-xs">Groceries</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-xs">Oct 21, 2023</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Completed</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-zinc-200">
                                            -$86.40
                                        </td>
</tr>

<tr className="group hover:bg-zinc-900/40 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:plain-2-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 font-medium text-sm">Netflix</p>
<p className="text-zinc-500 text-xs">Subscription</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-400 text-xs">Oct 19, 2023</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Pending</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-zinc-200">
                                            -$15.99
                                        </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">

<div className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/20">
<h3 className="text-zinc-100 font-medium mb-4 text-sm">Quick Transfer</h3>
<div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
<div className="flex flex-col items-center gap-2 cursor-pointer group">
<div className="w-12 h-12 rounded-full border border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:border-zinc-500 transition-all bg-zinc-900">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">Add</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer">
<img alt="User" className="w-12 h-12 rounded-full border border-zinc-800 object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/100?img=33"/>
<span className="text-[10px] text-zinc-400">Mike</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-zinc-100 object-cover" src="https://i.pravatar.cc/100?img=47"/>
<span className="text-[10px] text-zinc-100 font-medium">Anna</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer">
<img alt="User" className="w-12 h-12 rounded-full border border-zinc-800 object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/100?img=12"/>
<span className="text-[10px] text-zinc-400">Tom</span>
</div>
</div>
<div className="relative mb-4">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-7 pr-4 text-zinc-200 text-sm focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" type="number" value="120.00"/>
</div>
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                                Send Money
                            </button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/20">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-emerald-900/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:arrow-left-down-linear" width="12"></iconify-icon>
</div>
<span className="text-[10px] uppercase text-zinc-500 font-medium tracking-wider">Income</span>
</div>
<p className="text-zinc-200 font-medium text-lg">$4,250</p>
<div className="mt-2 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[70%] rounded-full"></div>
</div>
</div>
<div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/20">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-rose-900/20 flex items-center justify-center text-rose-400">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</div>
<span className="text-[10px] uppercase text-zinc-500 font-medium tracking-wider">Expense</span>
</div>
<p className="text-zinc-200 font-medium text-lg">$1,890</p>
<div className="mt-2 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500/50 w-[40%] rounded-full"></div>
</div>
</div>
</div>

<div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear" width="20"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium">Safe Mode</span>
<span className="text-[10px] text-zinc-500">Hide balances</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-100 peer-checked:after:bg-zinc-900 peer-checked:after:border-zinc-900"></div>
</label>
</div>
</div>
</div>
</div>
<footer className="mt-12 text-center text-[10px] text-zinc-600">
<p>© 2023 My Wallet Inc. All rights reserved.</p>
</footer>
</div>
</main>

    </>
  );
}
