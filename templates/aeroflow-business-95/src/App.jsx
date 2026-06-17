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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:command" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">ORBIT</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#">Platform</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Enterprise</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 border border-transparent hover:border-slate-700" href="#">Get Demo</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-slate-50 -z-20"></div>
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] -z-10 pointer-events-none opacity-40">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 via-teal-50/30 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">Orbit 2.0: The Operating System for Travel</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Unified control for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700">global business travel.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Manage bookings, payments, and policy compliance in one dashboard. Built for finance teams and modern operations.
                </p>
</div>

<div className="relative max-w-6xl mx-auto">

<div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-emerald-300/10 rounded-[2rem] blur-2xl -z-10"></div>
<div className="bg-white rounded-xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]">

<div className="w-full md:w-64 bg-slate-50/50 border-r border-slate-100 flex flex-col p-4">
<div className="flex items-center gap-3 px-2 mb-8">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Acme Corp</div>
<div className="text-[10px] text-slate-500">Enterprise Plan</div>
</div>
</div>
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-900 bg-white rounded-lg shadow-sm border border-slate-200">
<span className="iconify text-emerald-600" data-icon="lucide:layout-dashboard" data-width="16"></span>
                                Dashboard
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:plane" data-width="16"></span>
                                Bookings
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span>
                                Payments
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
                                Team
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                                Invoices
                            </button>
</div>
<div className="mt-auto pt-4 border-t border-slate-200/60">
<div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-emerald-800">Budget Cap</span>
<span className="text-[10px] font-medium text-emerald-600">82%</span>
</div>
<div className="w-full bg-emerald-200/50 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '82%'}}></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-6 md:p-8 overflow-y-auto">

<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Overview</h2>
<p className="text-xs text-slate-500">Welcome back, operations team.</p>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5">
<span className="iconify text-slate-400 mr-2" data-icon="lucide:search" data-width="14"></span>
<input className="bg-transparent text-xs outline-none w-32 md:w-48 placeholder:text-slate-400" placeholder="Search bookings..." type="text"/>
</div>
<button className="bg-slate-900 text-white p-2 rounded-md hover:bg-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">Monthly Spend</span>
<span className="iconify text-emerald-600" data-icon="lucide:trending-up" data-width="14"></span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">$42,500</div>
<div className="text-[10px] text-slate-400 mt-1">+12% vs last month</div>
</div>
<div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">Active Trips</span>
<span className="iconify text-emerald-600" data-icon="lucide:plane-takeoff" data-width="14"></span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">18</div>
<div className="text-[10px] text-slate-400 mt-1">4 pending approval</div>
</div>
<div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">Travelers</span>
<span className="iconify text-slate-400" data-icon="lucide:users" data-width="14"></span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">124</div>
<div className="text-[10px] text-slate-400 mt-1">Across 3 regions</div>
</div>
</div>

<div className="border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<h3 className="text-xs font-semibold text-slate-700">Recent Transactions</h3>
<button className="text-[10px] font-medium text-emerald-600 hover:text-emerald-700">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-slate-100">
<th className="px-4 py-3 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Employee</th>
<th className="px-4 py-3 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Route</th>
<th className="px-4 py-3 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Date</th>
<th className="px-4 py-3 text-[10px] font-medium text-slate-400 uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-[10px] font-medium text-slate-400 uppercase tracking-wider text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">AS</div>
<span className="text-xs font-medium text-slate-700">Alex Smith</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-slate-600">SFO <span className="text-slate-300 mx-1">→</span> JFK</td>
<td className="px-4 py-3 text-xs text-slate-500">Oct 24</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Confirmed</span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700 text-right">$480.00</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">MJ</div>
<span className="text-xs font-medium text-slate-700">Maria Jones</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-slate-600">LHR <span className="text-slate-300 mx-1">→</span> BER</td>
<td className="px-4 py-3 text-xs text-slate-500">Oct 26</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Pending</span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700 text-right">$225.50</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold">DK</div>
<span className="text-xs font-medium text-slate-700">David Kim</span>
</div>
</td>
<td className="px-4 py-3 text-xs text-slate-600">SIN <span className="text-slate-300 mx-1">→</span> NRT</td>
<td className="px-4 py-3 text-xs text-slate-500">Oct 28</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Confirmed</span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700 text-right">$890.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute -right-12 top-20 bg-white p-4 rounded-lg shadow-xl border border-slate-100 animate-pulse w-48 z-20">
<div className="flex items-center gap-3 mb-2">
<div className="bg-emerald-100 p-1.5 rounded-md">
<span className="iconify text-emerald-600" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
<div className="text-xs">
<div className="font-semibold text-slate-900">Trip Approved</div>
<div className="text-[10px] text-slate-500">Just now</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Orchestrate your entire travel operation.</h2>
<p className="text-slate-500">Orbit replaces fragmented tools with a single, coherent workflow. From request to reconciliation.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute left-[27px] top-8 bottom-8 w-px bg-slate-200"></div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-20 group">
<div className="flex-none">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm z-10 relative group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:sliders" data-width="24"></span>
</div>
</div>
<div className="flex-1 pt-2">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Granular Policy Control</h3>
<p className="text-slate-500 mb-6 max-w-lg leading-relaxed">
                            Set dynamic spending limits by role, department, or region. Prevent out-of-policy bookings before they happen with automated guardrails.
                        </p>

<div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-3 text-xs">
<span className="font-medium text-slate-700">Policy: Engineering Team</span>
<span className="text-emerald-600 font-medium">Active</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs bg-white p-2 border border-slate-100 rounded">
<span className="text-slate-500">Max Flight Cost (Domestic)</span>
<span className="font-mono text-slate-900">$400</span>
</div>
<div className="flex items-center justify-between text-xs bg-white p-2 border border-slate-100 rounded">
<span className="text-slate-500">Hotel Star Rating</span>
<span className="font-mono text-slate-900">4 Stars</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-20 group">
<div className="flex-none">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm z-10 relative group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:wallet" data-width="24"></span>
</div>
</div>
<div className="flex-1 pt-2">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Centralized Billing &amp; Payments</h3>
<p className="text-slate-500 mb-6 max-w-lg leading-relaxed">
                            Issue virtual cards for specific trips or rely on monthly invoices. Eliminate reimbursement paperwork entirely.
                        </p>

<div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-6 bg-slate-900 rounded flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="text-xs font-mono text-slate-600">•••• 4242</div>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full mb-1 overflow-hidden">
<div className="h-full bg-emerald-500 w-2/3"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500">
<span>Spent: $1,240</span>
<span>Limit: $2,000</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
<div className="flex-none">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm z-10 relative group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="24"></span>
</div>
</div>
<div className="flex-1 pt-2">
<h3 className="text-xl font-semibold text-slate-900 mb-3">Real-time Global Visibility</h3>
<p className="text-slate-500 mb-6 max-w-lg leading-relaxed">
                            Track every employee's location and safety status instantly. Comprehensive reporting for finance and HR departments.
                        </p>

<div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md hover:shadow-md transition-shadow">
<div className="flex gap-2">
<div className="flex-1 bg-white p-2 rounded border border-slate-100 text-center">
<div className="text-[10px] text-slate-400 uppercase">Spend YTD</div>
<div className="text-sm font-semibold text-slate-900">$1.2M</div>
</div>
<div className="flex-1 bg-white p-2 rounded border border-slate-100 text-center">
<div className="text-[10px] text-slate-400 uppercase">Savings</div>
<div className="text-sm font-semibold text-emerald-600">$45K</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Enterprise-grade capabilities</h2>
<p className="text-slate-500">Powerful features designed to scale with your organization's needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:percent" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Corporate Rates</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">Unlock pre-negotiated rates with major airlines and hotel chains, saving up to 30%.</p>

<div className="flex items-center gap-2 text-[10px] bg-slate-50 p-2 rounded border border-slate-100">
<span className="line-through text-slate-400">$1,200</span>
<span className="font-bold text-emerald-600">$850 Corporate Rate</span>
</div>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:crown" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Private Fleet Access</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">On-demand charter booking for executives requiring privacy and efficiency.</p>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-slate-300 h-full w-1/3"></div>
</div>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Automated Refunds</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">Cancel bookings in one click with instant credit processing back to your account.</p>
<div className="flex justify-end">
<span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Refund Processed</span>
</div>
</div>

<div className="group md:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center">
<div className="flex-1">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Team &amp; Family Benefits</h3>
<p className="text-xs text-slate-500 leading-relaxed">Extend corporate benefits to employee family travel or large group offsites. Dynamic pricing for groups over 10.</p>
</div>
<div className="flex-none flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-600">+8</div>
</div>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:package-check" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Curated Packages</h3>
<p className="text-xs text-slate-500 leading-relaxed">Flight + Hotel bundles designed for conference attendees and business retreats.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4 text-white">
<div className="w-6 h-6 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:command" data-width="14"></span>
</div>
<span className="text-base font-semibold tracking-tight">ORBIT</span>
</div>
<p className="text-xs leading-relaxed max-w-xs mb-6 text-slate-500">
                        The complete financial and operational platform for modern business travel. Trusted by forward-thinking companies worldwide.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Flights</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Expense Management</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Virtual Cards</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Reporting</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">API Access</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Compliance</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2023 Orbit Technologies Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-[10px] text-emerald-500">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                        Systems Operational
                    </div>
</div>
</div>
</div>
</footer>

    </>
  );
}
