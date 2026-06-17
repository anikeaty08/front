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
      

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">

<div className="flex items-center gap-2 text-[#004c8f]">
<span className="iconify" data-height="20" data-icon="lucide:layout-grid" data-width="20"></span>
<span className="text-lg font-semibold tracking-tighter">HDFC BANK</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#004c8f] bg-blue-50 rounded-md group" href="#">
<span className="iconify text-[#004c8f]" data-height="18" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600 transition-colors" data-height="18" data-icon="lucide:wallet-cards" data-strokeWidth="1.5" data-width="18"></span>
                Accounts
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600 transition-colors" data-height="18" data-icon="lucide:arrow-right-left" data-strokeWidth="1.5" data-width="18"></span>
                Transfers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600 transition-colors" data-height="18" data-icon="lucide:credit-card" data-strokeWidth="1.5" data-width="18"></span>
                Cards
                <span className="ml-auto text-[10px] bg-red-50 text-red-600 py-0.5 px-1.5 rounded-full font-medium">Due</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600 transition-colors" data-height="18" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="18"></span>
                Investments
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Settings</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600 transition-colors" data-height="18" data-icon="lucide:user" data-strokeWidth="1.5" data-width="18"></span>
                Profile
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600 transition-colors" data-height="18" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
                Statements
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Aditya K.</span>
<span className="text-xs text-slate-400">Personal Banking</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4 md:hidden">
<button className="text-slate-500">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
<span className="text-lg font-semibold tracking-tighter text-[#004c8f]">HDFC</span>
</div>

<div className="hidden md:flex items-center gap-4 w-full max-w-lg">
<div className="relative w-full group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#004c8f] transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
</span>
<input className="w-full bg-slate-50 border border-slate-200 text-sm text-slate-800 rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004c8f]/10 focus:border-[#004c8f]/50 transition-all placeholder:text-slate-400 font-medium" placeholder="Search transactions, payees..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:help-circle" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Financial Overview</h2>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-500">Last 30 Days</span>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-[#004c8f]">
<span className="iconify" data-height="20" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-height="12" data-icon="lucide:trending-up" data-width="12"></span> +4.5%
                                    </span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-slate-500">Total Balance</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">₹ 8,42,500<span className="text-slate-400 text-lg">.00</span></h3>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<span className="iconify" data-height="20" data-icon="lucide:pie-chart" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-height="12" data-icon="lucide:trending-up" data-width="12"></span> +12%
                                    </span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-slate-500">Investments</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">₹ 12,50,000<span className="text-slate-400 text-lg">.00</span></h3>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-red-50 rounded-lg text-red-600">
<span className="iconify" data-height="20" data-icon="lucide:arrow-down-left" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full flex items-center gap-1">Due in 5d</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-slate-500">Monthly Expenses</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">₹ 45,200<span className="text-slate-400 text-lg">.50</span></h3>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-slate-900">Cash Flow</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#004c8f]"></span>
<span className="text-xs text-slate-500">Income</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-200"></span>
<span className="text-xs text-slate-500">Expense</span>
</div>
</div>
</div>
<div className="h-48 flex items-end justify-between gap-2 md:gap-4 px-2">

<div className="w-full flex flex-col gap-1 items-center group cursor-pointer">
<div className="w-full max-w-[24px] bg-slate-100 h-24 rounded-t-sm relative group-hover:bg-slate-200 transition-colors"></div>
<div className="w-full max-w-[24px] bg-[#004c8f] h-32 rounded-b-sm relative opacity-90 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[10px] text-slate-400 mt-2">Jan</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group cursor-pointer">
<div className="w-full max-w-[24px] bg-slate-100 h-16 rounded-t-sm relative group-hover:bg-slate-200 transition-colors"></div>
<div className="w-full max-w-[24px] bg-[#004c8f] h-28 rounded-b-sm relative opacity-90 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[10px] text-slate-400 mt-2">Feb</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group cursor-pointer">
<div className="w-full max-w-[24px] bg-slate-100 h-20 rounded-t-sm relative group-hover:bg-slate-200 transition-colors"></div>
<div className="w-full max-w-[24px] bg-[#004c8f] h-36 rounded-b-sm relative opacity-90 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[10px] text-slate-400 mt-2">Mar</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group cursor-pointer">
<div className="w-full max-w-[24px] bg-slate-100 h-28 rounded-t-sm relative group-hover:bg-slate-200 transition-colors"></div>
<div className="w-full max-w-[24px] bg-[#004c8f] h-24 rounded-b-sm relative opacity-90 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[10px] text-slate-400 mt-2">Apr</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group cursor-pointer">
<div className="w-full max-w-[24px] bg-slate-100 h-12 rounded-t-sm relative group-hover:bg-slate-200 transition-colors"></div>
<div className="w-full max-w-[24px] bg-[#004c8f] h-40 rounded-b-sm relative opacity-90 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[10px] text-slate-400 mt-2">May</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group cursor-pointer">
<div className="w-full max-w-[24px] bg-slate-100 h-24 rounded-t-sm relative group-hover:bg-slate-200 transition-colors"></div>
<div className="w-full max-w-[24px] bg-[#004c8f] h-32 rounded-b-sm relative opacity-90 group-hover:opacity-100 transition-opacity"></div>
<span className="text-[10px] text-slate-400 mt-2">Jun</span>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Recent Transactions</h3>
<button className="text-xs font-medium text-[#004c8f] hover:text-[#003366] transition-colors">View All</button>
</div>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Transaction</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#E11900]/10 flex items-center justify-center text-[#E11900]">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Netflix Subscription</p>
<p className="text-xs text-slate-500">Entertainment</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Today, 10:42 AM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700">Success</span>
</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900 text-right">- ₹ 649.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#004c8f]">
<span className="iconify" data-icon="lucide:arrow-down-left" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Salary Credit</p>
<p className="text-xs text-slate-500">Infosys Ltd</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Yesterday, 5:00 PM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700">Success</span>
</td>
<td className="px-6 py-4 text-sm font-medium text-green-600 text-right">+ ₹ 1,45,000.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:utensils" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Swiggy</p>
<p className="text-xs text-slate-500">Food &amp; Dining</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-500">Oct 24, 8:30 PM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-600">Pending</span>
</td>
<td className="px-6 py-4 text-sm font-medium text-slate-900 text-right">- ₹ 450.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="md:col-span-4 space-y-6">

<div className="glass-card rounded-xl p-6 text-white relative overflow-hidden group">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 blur-xl"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<p className="text-xs text-white/70 font-medium">HDFC Regalia</p>
<p className="text-xs text-white/50 tracking-wider">PLATINUM</p>
</div>
<span className="iconify text-white/80" data-height="24" data-icon="lucide:contactless" data-width="24"></span>
</div>
<div className="space-y-4 relative z-10">
<div className="flex items-center gap-2">
<span className="text-lg font-mono tracking-widest">4522</span>
<span className="text-xs">••••</span>
<span className="text-xs">••••</span>
<span className="text-lg font-mono tracking-widest">9018</span>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">Card Holder</p>
<p className="text-sm font-medium tracking-wide">ADITYA K.</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">Expires</p>
<p className="text-sm font-medium tracking-wide">12/26</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Transfer</h3>
<div className="flex gap-3 mb-6 overflow-x-auto hide-scrollbar py-1">
<div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer group">
<div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 group-hover:border-[#004c8f] group-hover:text-[#004c8f] transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</div>
<span className="text-[10px] font-medium text-slate-500">Add New</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer">
<img className="w-12 h-12 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=1"/>
<span className="text-[10px] font-medium text-slate-600">Sarah</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer">
<img className="w-12 h-12 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=2"/>
<span className="text-[10px] font-medium text-slate-600">Mom</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer relative">
<div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
<img className="w-12 h-12 rounded-full border-2 border-[#004c8f]" src="https://i.pravatar.cc/150?u=3"/>
<span className="text-[10px] font-semibold text-[#004c8f]">Rahul</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer">
<img className="w-12 h-12 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=4"/>
<span className="text-[10px] font-medium text-slate-600">Rent</span>
</div>
</div>
<div className="space-y-4">
<div className="relative">
<label className="block text-xs font-medium text-slate-500 mb-1.5">Amount</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-8 pr-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004c8f]/20 focus:border-[#004c8f] transition-all" type="number" value="5000"/>
</div>
</div>
<button className="w-full bg-[#004c8f] hover:bg-[#003366] text-white text-sm font-medium py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                                    Send Money
                                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-5 text-white shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
<div className="relative z-10">
<span className="bg-white/20 text-[10px] font-semibold px-2 py-0.5 rounded text-white mb-3 inline-block">OFFER</span>
<h4 className="text-sm font-semibold mb-1">Personal Loan @ 10.5%</h4>
<p className="text-xs text-indigo-100 mb-3 leading-relaxed">Pre-approved limit up to ₹5L for you.</p>
<button className="text-xs bg-white text-indigo-600 font-semibold py-1.5 px-3 rounded shadow-sm hover:bg-indigo-50 transition-colors">Apply Now</button>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-12 border-t border-slate-200 py-6 text-center">
<p className="text-xs text-slate-400">
                    © 2023 HDFC Bank Ltd. All rights reserved. <br/>
<span className="opacity-70">Licensed by Reserve Bank of India.</span>
</p>
</footer>
</div>
</main>

    </>
  );
}
