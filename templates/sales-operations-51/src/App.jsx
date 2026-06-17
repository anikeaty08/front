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



        lucide.createIcons();
    
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
      
<div className="flex h-screen w-full overflow-hidden">



<aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white flex flex-col justify-between hidden md:flex">
<div>
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="h-8 w-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3 shadow-sm">
<i className="text-white h-5 w-5" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold text-gray-900 tracking-tight">PanelOS</span>
</div>
<div className="px-3 py-6 space-y-1">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Workspace</p>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-50 text-gray-900 ring-1 ring-gray-900/5" href="#">
<i className="h-4 w-4" data-lucide="layout-grid"></i>
                        Dashboard
                    </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="filter"></i>
                        Leads &amp; Funnel
                    </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="file-text"></i>
                        Quotations
                    </a>
</div>


<div className="px-3 py-2 space-y-1">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Admin Controls</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="container"></i>
                        Import &amp; Logistics
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="wallet"></i>
                        Finance &amp; EMI
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="check-circle"></i>
                        Approve Requests <span className="ml-auto bg-orange-100 text-orange-600 py-0.5 px-2 rounded-full text-xs font-medium">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="users"></i>
                        Sales Team
                    </a>
</div>

</div>
<div className="p-4 border-t border-gray-100 bg-gray-50/50">
<div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
<img alt="User" className="h-9 w-9 rounded-full ring-2 ring-white shadow-sm" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=0f172a&amp;color=fff"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Admin User</span>
<span className="text-xs text-gray-400">Super Admin</span>
</div>
<i className="h-4 w-4 text-gray-400 ml-auto" data-lucide="settings"></i>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200 px-8 py-4 flex items-center justify-between">
<div>

<h1 className="text-xl font-semibold text-gray-900 tracking-tight">Executive Overview</h1>
<p className="text-sm text-gray-500 mt-1">Real-time insight into business performance.</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm hover:border-gray-300 transition-colors cursor-pointer group">
<i className="h-4 w-4 text-gray-500 group-hover:text-gray-700" data-lucide="calendar"></i>
<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">This Month</span>
<i className="h-3 w-3 text-gray-400 ml-1" data-lucide="chevron-down"></i>
</div>
<button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute top-2.5 right-2.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
</div>
</header>
<div className="p-8 space-y-8 max-w-[1600px] mx-auto">

<div className="bg-orange-50 border border-orange-200/60 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
<div className="p-2 bg-orange-100 rounded-full shrink-0">
<i className="h-5 w-5 text-orange-600" data-lucide="alert-octagon"></i>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-gray-900">Action Required: 4 Pending Approvals</h3>
<p className="text-sm text-gray-600 mt-0.5">2 Conveyance bills and 2 Commission payouts need your authorization.</p>
</div>
<div className="flex gap-3 w-full sm:w-auto mt-2 sm:mt-0">
<button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 shadow-sm">Dismiss</button>
<button className="flex-1 sm:flex-none px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 shadow-sm shadow-orange-200">Review</button>
</div>
</div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<i className="h-5 w-5 text-gray-700" data-lucide="banknote"></i>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
<i className="h-3 w-3" data-lucide="trending-up"></i> 12.5%
                            </span>
</div>
<p className="text-sm font-medium text-gray-500">Total Revenue</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">৳ 4,850,000</h3>
<p className="text-xs text-gray-400 mt-2">Target: ৳ 6.5M (74%)</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<i className="h-5 w-5 text-gray-700" data-lucide="clock"></i>
</div>
<span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                                14 Clients
                            </span>
</div>
<p className="text-sm font-medium text-gray-500">EMI &amp; Dues Outstanding</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">৳ 1,240,500</h3>
<p className="text-xs text-gray-400 mt-2">Collections due within 7 days</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<i className="h-5 w-5 text-gray-700" data-lucide="plane"></i>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                                High Cost
                            </span>
</div>
<p className="text-sm font-medium text-gray-500">Logistics Expense</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">৳ 890,000</h3>
<p className="text-xs text-gray-400 mt-2">Includes Customs &amp; C&amp;F</p>
</div>


<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-gray-300 transition-all">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<i className="h-5 w-5 text-gray-700" data-lucide="zap"></i>
</div>
<span className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                                8 Closing Soon
                            </span>
</div>
<p className="text-sm font-medium text-gray-500">Active Quotations</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">34</h3>
<p className="text-xs text-gray-400 mt-2">Pipeline Value: ৳ 9.5M</p>
</div>
</div>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-base font-semibold text-gray-900">Profitability Analysis</h3>
<p className="text-sm text-gray-500">Revenue vs. Logistics/Import Costs (Feb 2025)</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-gray-900"></span>
<span className="text-xs font-medium text-gray-600">Net Sales</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-gray-200"></span>
<span className="text-xs font-medium text-gray-600">Total Cost</span>
</div>
</div>
</div>

<div className="h-64 w-full flex items-end justify-between gap-6 px-2">

<div className="w-full flex flex-col items-center gap-3 group">
<div className="relative w-full flex items-end justify-center h-full gap-1.5">
<div className="w-4 sm:w-8 bg-gray-200 rounded-t-sm h-[40%] group-hover:bg-gray-300 transition-colors relative group-hover:shadow-lg"></div>
<div className="w-4 sm:w-8 bg-gray-900 rounded-t-sm h-[65%] group-hover:bg-gray-800 transition-colors relative group-hover:shadow-lg"></div>
</div>
<span className="text-xs text-gray-400 font-medium">Week 1</span>
</div>

<div className="w-full flex flex-col items-center gap-3 group">
<div className="relative w-full flex items-end justify-center h-full gap-1.5">
<div className="w-4 sm:w-8 bg-gray-200 rounded-t-sm h-[55%] group-hover:bg-gray-300 transition-colors"></div>
<div className="w-4 sm:w-8 bg-gray-900 rounded-t-sm h-[80%] group-hover:bg-gray-800 transition-colors"></div>
</div>
<span className="text-xs text-gray-400 font-medium">Week 2</span>
</div>

<div className="w-full flex flex-col items-center gap-3 group">
<div className="relative w-full flex items-end justify-center h-full gap-1.5">
<div className="w-4 sm:w-8 bg-gray-200 rounded-t-sm h-[30%] group-hover:bg-gray-300 transition-colors"></div>
<div className="w-4 sm:w-8 bg-gray-900 rounded-t-sm h-[45%] group-hover:bg-gray-800 transition-colors"></div>
</div>
<span className="text-xs text-gray-400 font-medium">Week 3</span>
</div>

<div className="w-full flex flex-col items-center gap-3 group">
<div className="relative w-full flex items-end justify-center h-full gap-1.5">
<div className="w-4 sm:w-8 bg-gray-200 rounded-t-sm h-[70%] group-hover:bg-gray-300 transition-colors"></div>
<div className="w-4 sm:w-8 bg-gray-900 rounded-t-sm h-[92%] group-hover:bg-gray-800 transition-colors"></div>
</div>
<span className="text-xs text-gray-400 font-medium">Week 4</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold text-gray-900">Conversion Funnel</h3>
<button className="text-gray-400 hover:text-gray-600"><i className="h-4 w-4" data-lucide="maximize-2"></i></button>
</div>
<div className="space-y-6">
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600 font-medium flex items-center gap-2">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="user-plus"></i> New Leads
                                    </span>
<span className="text-gray-900 font-bold">142</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gray-900 h-2.5 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600 font-medium flex items-center gap-2">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="send"></i> Proposal Sent
                                    </span>
<span className="text-gray-900 font-bold">86</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
</div>
<div className="mt-1 text-xs text-gray-400 text-right">60% Conversion</div>
</div>
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600 font-medium flex items-center gap-2">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="users"></i> Negotiation
                                    </span>
<span className="text-gray-900 font-bold">45</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-violet-500 h-2.5 rounded-full" style={{width: '31%'}}></div>
</div>
</div>
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600 font-medium flex items-center gap-2">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="check-circle-2"></i> Closed Won
                                    </span>
<span className="text-gray-900 font-bold">18</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-emerald-500 h-2.5 rounded-full" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>
</div>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
<div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-gray-500" data-lucide="gavel"></i>
<h3 className="text-base font-semibold text-gray-900">Pending Approvals</h3>
</div>
<span className="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium">4 Action Items</span>
</div>
<div className="divide-y divide-gray-100 overflow-y-auto max-h-[350px]">

<div className="p-4 hover:bg-gray-50 transition-colors group">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="h-9 w-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
<i className="h-4 w-4" data-lucide="bus"></i>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Conveyance Bill</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs text-gray-500">Salesman: Rafiqul</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-xs text-gray-400">Dhaka Client Visit</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-gray-900">৳ 1,200</p>
</div>
</div>
<div className="flex justify-end gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100">Reject</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-black">Approve</button>
</div>
</div>

<div className="p-4 hover:bg-gray-50 transition-colors group">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="h-9 w-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shrink-0">
<i className="h-4 w-4" data-lucide="percent"></i>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Commission Payout</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-xs text-gray-500">Salesman: Karim</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-xs text-gray-400">Sale #INV-2092</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-gray-900">৳ 5,000</p>
</div>
</div>
<div className="flex justify-end gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100">Reject</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-black">Approve</button>
</div>
</div>
</div>
<div className="p-3 border-t border-gray-100 mt-auto bg-gray-50 text-center">
<a className="text-xs font-medium text-gray-600 hover:text-gray-900" href="#">View All Requests →</a>
</div>
</div>
<div className="lg:col-span-2 space-y-6">


<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-5">
<h3 className="text-base font-semibold text-gray-900">Top Performers (February)</h3>
<div className="flex gap-2">
<span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">Amount</span>
<span className="px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-600 cursor-pointer">Deals Closed</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg bg-gray-50/30 hover:bg-white hover:shadow-md transition-all group">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="" className="h-10 w-10 rounded-full" src="https://ui-avatars.com/api/?name=Tanvir+H&amp;background=10b981&amp;color=fff"/>
<div className="absolute -bottom-1 -right-1 bg-yellow-400 border border-white rounded-full p-0.5">
<i className="h-2.5 w-2.5 text-white fill-current" data-lucide="crown"></i>
</div>
</div>
<div>
<p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Tanvir Hasan</p>
<p className="text-xs text-gray-500">12 Sales · Dhaka Zone</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-gray-900">৳ 3.2M</p>
<p className="text-xs text-emerald-600 font-medium">+15% vs Target</p>
</div>
</div>

<div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg bg-gray-50/30 hover:bg-white hover:shadow-md transition-all group">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full" src="https://ui-avatars.com/api/?name=Nusrat+J&amp;background=6366f1&amp;color=fff"/>
<div>
<p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Nusrat Jahan</p>
<p className="text-xs text-gray-500">8 Sales · Ctg Zone</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-gray-900">৳ 2.1M</p>
<p className="text-xs text-gray-400">On Track</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
<h3 className="text-base font-semibold text-gray-900 mb-5">Lead Distribution (By District)</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="w-20 text-sm font-medium text-gray-700">Dhaka</span>
<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 w-[75%] rounded-r-full"></div>
</div>
<span className="w-10 text-sm text-right text-gray-900 font-semibold">75%</span>
</div>
<div className="flex items-center gap-4">
<span className="w-20 text-sm font-medium text-gray-700">Chittagong</span>
<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-500 w-[45%] rounded-r-full"></div>
</div>
<span className="w-10 text-sm text-right text-gray-900 font-semibold">45%</span>
</div>
<div className="flex items-center gap-4">
<span className="w-20 text-sm font-medium text-gray-700">Sylhet</span>
<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-300 w-[30%] rounded-r-full"></div>
</div>
<span className="w-10 text-sm text-right text-gray-900 font-semibold">30%</span>
</div>
</div>
</div>
</div>
</div>




<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/30">
<div>
<h3 className="text-base font-semibold text-gray-900">Sales &amp; Logistics Tracker</h3>
<p className="text-xs text-gray-500 mt-0.5">Monitor client orders, shipping status and payment collections.</p>
</div>
<div className="flex gap-2">
<div className="relative">
<i className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-48" placeholder="Search Invoice..." type="text"/>
</div>
<button className="px-3 py-1.5 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 shadow-sm flex items-center gap-2">
<i className="h-4 w-4" data-lucide="plus"></i> New Quote
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Client Details</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product &amp; Warranty</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Logistics Status</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">EMI &amp; Payment</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Total Value</th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs border border-indigo-100">GA</div>
<div>
<p className="text-sm font-medium text-gray-900">Green Academy</p>
<p className="text-xs text-gray-500">Salesman: Tanvir</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-900">86" Interactive Panel</p>
<p className="text-xs text-gray-500 inline-flex items-center gap-1"><i className="h-3 w-3" data-lucide="shield-check"></i> 3 Years Warranty</p>
</td>
<td className="px-6 py-4">
<div className="flex flex-col gap-1">
<span className="inline-flex items-center w-fit gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<i className="h-3 w-3" data-lucide="plane"></i> Air Transit
                                            </span>
<span className="text-[10px] text-gray-400">ETA: 3 Days (Dhaka Airport)</span>
</div>
</td>
<td className="px-6 py-4">
<div className="w-24 bg-gray-100 rounded-full h-1.5 mb-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '50%'}}></div>
</div>
<p className="text-xs text-red-500 font-medium">Due: ৳ 125k (2/4 EMI)</p>
</td>
<td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">
                                        ৳ 250,000
                                    </td>
<td className="px-6 py-4 text-center">
<button className="p-1 rounded-md hover:bg-gray-200 text-gray-400 hover:text-gray-900 transition-colors">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs border border-teal-100">TC</div>
<div>
<p className="text-sm font-medium text-gray-900">Tech Corp Ltd.</p>
<p className="text-xs text-gray-500">Salesman: Nusrat</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-900">75" Smart Board (x2)</p>
<p className="text-xs text-gray-500 inline-flex items-center gap-1"><i className="h-3 w-3" data-lucide="shield"></i> 1 Yr Service</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center w-fit gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<i className="h-3 w-3" data-lucide="check-check"></i> Delivered
                                        </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                            Paid Full
                                        </span>
</td>
<td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">
                                        ৳ 480,000
                                    </td>
<td className="px-6 py-4 text-center">
<button className="p-1 rounded-md hover:bg-gray-200 text-gray-400 hover:text-gray-900 transition-colors">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs border border-rose-100">BS</div>
<div>
<p className="text-sm font-medium text-gray-900">Blue Sky Intl.</p>
<p className="text-xs text-gray-500">Salesman: Rafiqul</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-gray-900">86" Interactive Panel</p>
<p className="text-xs text-rose-500">Damaged on arrival</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center w-fit gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100">
<i className="h-3 w-3" data-lucide="rotate-ccw"></i> Return Process
                                        </span>
</td>
<td className="px-6 py-4">
<p className="text-xs text-gray-400 italic">Refund Pending Approval</p>
</td>
<td className="px-6 py-4 text-sm font-semibold text-gray-900 text-right">
                                        ৳ 250,000
                                    </td>
<td className="px-6 py-4 text-center">
<button className="p-1 rounded-md hover:bg-gray-200 text-gray-400 hover:text-gray-900 transition-colors">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<footer className="px-8 py-6 border-t border-gray-200 mt-4 bg-gray-50/50">
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
<span>© 2025 PanelOS Management System.</span>
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> System Operational
                    </span>
</div>
</footer>
</main>
</div>


    </>
  );
}
