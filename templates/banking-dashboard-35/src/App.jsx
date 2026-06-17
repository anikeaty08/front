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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="text-2xl font-bold tracking-tighter text-red-700">WF</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="text-slate-900" href="#">Accounts</a>
<a className="hover:text-slate-900 transition-colors" href="#">Transfer &amp; Pay</a>
<a className="hover:text-slate-900 transition-colors" href="#">Brokerage</a>
<a className="hover:text-slate-900 transition-colors" href="#">Planning</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
<input className="bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:ring-1 focus:ring-red-500/20 outline-none" placeholder="Search transactions..." type="text"/>
</div>
<button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
<iconify-icon icon="solar:bell-linear" style={{fontSize: '1.4rem'}}></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-slate-200">
<div className="text-right">
<p className="text-xs font-semibold">Dorah April</p>
<p className="text-[10px] text-slate-400 uppercase tracking-widest">Premier Member</p>
</div>
<div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs">DA</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-8 space-y-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Total Available Balance</span>
<div className="flex gap-2">
<span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-semibold rounded-full border border-green-100">STABLE</span>
</div>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-8">$9,000,347.00</h1>
<div className="flex gap-4">
<button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2">
<iconify-icon icon="solar:transfer-horizontal-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                            Send Money
                        </button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2">
<iconify-icon icon="solar:bill-list-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                            Pay Bills
                        </button>
</div>
</div>
<div className="absolute -right-12 -top-12 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"></div>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 flex justify-between items-center">
<h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
</button>
<button className="text-xs font-medium text-red-600 hover:underline">Download Statement</button>
</div>
</div>
<div className="max-h-[500px] overflow-y-auto custom-scrollbar">
<table className="w-full text-left">
<thead className="bg-slate-50 sticky top-0 z-10">
<tr>
<th className="px-6 py-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Transaction</th>
<th className="px-6 py-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:bank-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold">Wire Transfer to Chase Bank</p>
<p className="text-[10px] text-slate-400">Ref: #WF-9022110</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 w-fit">
<iconify-icon className="animate-spin" icon="solar:refresh-linear"></iconify-icon>
                                        Processing
                                    </span>
</td>
<td className="px-6 py-4 text-xs font-semibold text-slate-900 text-right">-$250,000.00</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold">Bill Pay: American Express</p>
<p className="text-[10px] text-slate-400">Scheduled Payment</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 w-fit">
<iconify-icon className="animate-spin" icon="solar:refresh-linear"></iconify-icon>
                                        Processing
                                    </span>
</td>
<td className="px-6 py-4 text-xs font-semibold text-slate-900 text-right">-$12,450.00</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:rounded-magnifer-zoom-in-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold">Dividend Credit</p>
<p className="text-[10px] text-slate-400">Equity Portfolio</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">Completed</span>
</td>
<td className="px-6 py-4 text-xs font-semibold text-green-600 text-right">+$4,200.50</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold">Apple Store Premium</p>
<p className="text-[10px] text-slate-400">Cupertino, CA</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 22, 2023</td>
<td className="px-6 py-4">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">Completed</span>
</td>
<td className="px-6 py-4 text-xs font-semibold text-slate-900 text-right">-$5,499.00</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold">Zelle Transfer: Interior Design</p>
<p className="text-[10px] text-slate-400">Dorah April Personal</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 21, 2023</td>
<td className="px-6 py-4">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">Completed</span>
</td>
<td className="px-6 py-4 text-xs font-semibold text-slate-900 text-right">-$18,000.00</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:card-receive-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold">Internal Transfer</p>
<p className="text-[10px] text-slate-400">From Savings *0911</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 20, 2023</td>
<td className="px-6 py-4">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">Completed</span>
</td>
<td className="px-6 py-4 text-xs font-semibold text-green-600 text-right">+$1,500,000.00</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-slate-50 text-center">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">View All Transactions</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-6">

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative h-56 bg-slate-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="text-white">
<p className="text-[10px] opacity-60 uppercase tracking-widest font-medium">Premier Debit</p>
<iconify-icon className="text-amber-400 mt-2" icon="solar:chip-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<div className="text-white text-xl font-bold tracking-tighter">WF</div>
</div>
<div className="relative z-10">
<p className="text-white text-lg tracking-[0.2em] mb-4">•••• •••• •••• 8842</p>
<div className="flex justify-between items-end">
<div>
<p className="text-[8px] text-white/40 uppercase mb-1">Card Holder</p>
<p className="text-xs text-white font-medium uppercase tracking-wider">Dorah April</p>
</div>
<div>
<p className="text-[8px] text-white/40 uppercase mb-1">Expires</p>
<p className="text-xs text-white font-medium">10/34</p>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 space-y-4">
<h3 className="text-sm font-semibold mb-4">Card Settings</h3>
<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Lock Card</span>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-600"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
<iconify-icon icon="solar:globus-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">International Use</span>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-600"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6">
<h3 className="text-sm font-semibold mb-6">Quick Transfer</h3>
<div className="flex gap-4 mb-6">
<div className="flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:border-red-500 hover:text-red-500 transition-all">
<iconify-icon icon="solar:add-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-500">New</span>
</div>
<div className="flex flex-col items-center gap-2">
<img alt="" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://ui-avatars.com/api/?name=James+Wilson&amp;background=f1f5f9&amp;color=64748b"/>
<span className="text-[10px] font-medium text-slate-500">James</span>
</div>
<div className="flex flex-col items-center gap-2">
<img alt="" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://ui-avatars.com/api/?name=Estate+Mgmt&amp;background=fef2f2&amp;color=dc2626"/>
<span className="text-[10px] font-medium text-slate-500">Estate</span>
</div>
</div>
<div className="space-y-4">
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-lg font-semibold outline-none focus:ring-1 focus:ring-red-500/20" placeholder="0.00" type="text"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">USD</span>
</div>
<button className="w-full bg-slate-900 text-white text-xs font-semibold py-4 rounded-2xl hover:bg-slate-800 transition-all">Execute Transfer</button>
</div>
</div>

<div className="bg-red-700 rounded-3xl p-6 text-white overflow-hidden relative group cursor-pointer">
<div className="relative z-10">
<iconify-icon className="text-red-200 mb-4" icon="solar:chart-square-linear" style={{fontSize: '2rem'}}></iconify-icon>
<h4 className="text-sm font-semibold mb-1">Portfolio Analysis</h4>
<p className="text-xs text-red-100 opacity-80 leading-relaxed">Your high-yield portfolio grew by 4.2% this quarter. View detailed breakdown.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:diagram-up-linear" style={{fontSize: '8rem'}}></iconify-icon>
</div>
</div>
</div>
</main>

<footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-slate-400 gap-4">
<div className="text-[10px] uppercase tracking-widest font-medium">
            © 2023 Wells Fargo Premier Banking Services
        </div>
<div className="flex gap-6 text-[10px] font-semibold uppercase tracking-widest">
<a className="hover:text-red-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-red-600 transition-colors" href="#">Security</a>
<a className="hover:text-red-600 transition-colors" href="#">Terms</a>
<a className="hover:text-red-600 transition-colors" href="#">FDIC Insured</a>
</div>
</footer>

    </>
  );
}
