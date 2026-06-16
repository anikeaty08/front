import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-10">
<div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="bg-red-600 text-white p-1 rounded-md">
<span className="font-bold text-lg tracking-tight px-1">TJX</span>
</div>
<h1 className="text-slate-900 font-semibold text-lg tracking-tight">System Health</h1>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-slate-600 tracking-wide">Executive Dashboard</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-6 w-px bg-gray-200 hidden lg:block"></div>
<button className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Last 15 minutes
                    <svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</header>
<main className="max-w-8xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 space-y-8">

<section className="">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Executive KPIs</h2>
<div className="text-xs font-medium text-slate-400">Today vs. Yesterday</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Overall App Status</span>
<svg className="lucide lucide-activity w-4 h-4 text-emerald-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold text-emerald-600 tracking-tight flex items-center gap-2">
                            Healthy
                        </div>
<div className="flex items-center gap-2 mt-1">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                99.96%
                            </span>
<span className="text-xs text-slate-400">No critical incidents</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Conversion Rate</span>
<svg className="lucide lucide-trending-up w-4 h-4 text-slate-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">3.4%</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+0.3 pts</span>
</div>
<div className="text-xs text-slate-400 mt-1">vs 3.1% same time yesterday</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Revenue (60m)</span>
<svg className="lucide lucide-dollar-sign w-4 h-4 text-slate-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">$1.2M</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+6.8%</span>
</div>
<div className="text-xs text-slate-400 mt-1">Estimated across TJM</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-500">Checkout Success</span>
<svg className="lucide lucide-shopping-bag w-4 h-4 text-slate-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">97.9%</span>
<span className="text-xs font-medium text-red-600 bg-red-50 px-1.5 py-0.5 rounded">-0.5 pts</span>
</div>
<div className="text-xs text-slate-400 mt-1">Completed vs Initiated</div>
</div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Endpoint Health</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Akamai CDN</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Healthy
                        </span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div>
<span className="text-slate-400 block mb-0.5">Latency</span>
<span className="text-slate-700 font-medium">42 ms</span>
</div>
<div>
<span className="text-slate-400 block mb-0.5">Availability</span>
<span className="text-slate-700 font-medium">99.99%</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Core Network</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Healthy
                        </span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div>
<span className="text-slate-400 block mb-0.5">Latency</span>
<span className="text-slate-700 font-medium">18 ms</span>
</div>
<div>
<span className="text-slate-400 block mb-0.5">Packet loss</span>
<span className="text-slate-700 font-medium">0.02%</span>
</div>
</div>
</div>

<div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 shadow-sm ring-1 ring-amber-100">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Synchrony (Credit)</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            Degraded
                        </span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div>
<span className="text-slate-500 block mb-0.5">Latency</span>
<span className="text-amber-700 font-medium">380 ms</span>
</div>
<div>
<span className="text-slate-500 block mb-0.5">Availability</span>
<span className="text-amber-700 font-medium">98.7%</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">WorldPay</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Healthy
                        </span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="">
<span className="text-slate-400 block mb-0.5">Latency</span>
<span className="text-slate-700 font-medium">210 ms</span>
</div>
<div>
<span className="text-slate-400 block mb-0.5">Availability</span>
<span className="text-slate-700 font-medium">99.9%</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Digital Journey <span className="text-slate-400 font-normal normal-case ml-1">— Home to Checkout</span></h2>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-1 overflow-x-auto">
<div className="grid grid-cols-6 min-w-[1000px] divide-x divide-gray-100">

<div className="p-5">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Home</span>
<span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Entry</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">100%</div>
<div className="text-xs text-slate-400">Sessions</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-700">22%</div>
<div className="text-xs text-slate-400">Bounce</div>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '100%'}}></div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Category</span>
<span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Browse</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">68%</div>
<div className="text-xs text-slate-400">Reach</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-700">10%</div>
<div className="text-xs text-slate-400">Drop-off</div>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '68%'}}></div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Product</span>
<span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Intent</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">41%</div>
<div className="text-xs text-slate-400">Reach</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-700">12%</div>
<div className="text-xs text-slate-400">ATC</div>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '41%'}}></div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Cart</span>
<span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Pre-Chk</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">19%</div>
<div className="text-xs text-slate-400">Reach</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-700">8%</div>
<div className="text-xs text-slate-400">Abandon</div>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '19%'}}></div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Checkout</span>
<span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Pay</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">9%</div>
<div className="text-xs text-slate-400">Reach</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-700">2.1%</div>
<div className="text-xs text-slate-400">Failures</div>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '9%'}}></div>
</div>
</div>

<div className="p-5 bg-gray-50/50">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-medium text-slate-900">Ordered</span>
<span className="text-[10px] uppercase font-bold text-emerald-600 border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 rounded">Done</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">3.4%</div>
<div className="text-xs text-slate-400">Reach</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-700">$8.24</div>
<div className="text-xs text-slate-400">Rev/Sess</div>
</div>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '3.4%'}}></div>
</div>
</div>
</div>
</div>
<div className="text-right mt-2">
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center justify-end gap-1" href="#">
                    Full diagnostics available in Engineering Dashboard
                    <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Payment Diagnostics</h2>
<div className="text-xs font-medium text-slate-400">Last 15m Real-time Analysis</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-full">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-sm font-medium text-slate-900">Top Success Payment Types</h3>
</div>
<span className="text-xs text-slate-400">Count</span>
</div>
<div className="flex-1 p-0 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50/50">
<tr>
<th className="py-2.5 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider w-full">Payment Type</th>
<th className="py-2.5 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Count</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="py-2.5 px-5 text-slate-700 font-medium">TJXCreditCard</td>
<td className="py-2.5 px-5 text-right font-mono text-slate-600">
<div className="flex items-center justify-end gap-2">
<div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '100%'}}></div>
</div>
<span>2021</span>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="py-2.5 px-5 text-slate-700 font-medium">TJXGiftCard</td>
<td className="py-2.5 px-5 text-right font-mono text-slate-600">
<div className="flex items-center justify-end gap-2">
<div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '34%'}}></div>
</div>
<span>687</span>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="py-2.5 px-5 text-slate-700 font-medium">TJXPayPal</td>
<td className="py-2.5 px-5 text-right font-mono text-slate-600">
<div className="flex items-center justify-end gap-2">
<div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-300" style={{width: '17%'}}></div>
</div>
<span>343</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-full">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-x-circle w-4 h-4 text-red-500" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<h3 className="text-sm font-medium text-slate-900">Top Failure Payment Types</h3>
</div>
<span className="text-xs text-slate-400">Count</span>
</div>
<div className="flex-1 p-0 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50/50">
<tr>
<th className="py-2.5 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider w-full">Payment Type</th>
<th className="py-2.5 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Count</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="bg-red-50/30 hover:bg-red-50/50 transition-colors group">
<td className="py-2.5 px-5 text-slate-700 font-medium">TJXCreditCard</td>
<td className="py-2.5 px-5 text-right font-mono text-red-600 font-medium">
<div className="flex items-center justify-end gap-2">
<div className="h-1.5 w-16 bg-red-100 rounded-full overflow-hidden">
<div className="h-full bg-red-500" style={{width: '98%'}}></div>
</div>
<span>241</span>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors group">
<td className="py-2.5 px-5 text-slate-700 font-medium">TJXPayPal</td>
<td className="py-2.5 px-5 text-right font-mono text-slate-600">
<div className="flex items-center justify-end gap-2">
<div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-red-300" style={{width: '2%'}}></div>
</div>
<span>4</span>
</div>
</td>
</tr>

<tr className="h-10"><td></td><td></td></tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-full lg:row-span-1">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-amber-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<h3 className="text-sm font-medium text-slate-900">Top Failure Reasons</h3>
</div>
<span className="text-xs text-slate-400">Count</span>
</div>
<div className="flex-1 p-0 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50/50">
<tr>
<th className="py-2.5 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider w-full">Reason Code</th>
<th className="py-2.5 px-5 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Count</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="bg-amber-50/30 hover:bg-amber-50/50 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="VantivOrderAVSNetworkError">VantivOrderAVSNetworkError</td>
<td className="py-2 px-5 text-right font-mono text-slate-700 font-medium">91</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="DeclinedGenericDeclinedDoNotHonor">DeclinedGenericDeclinedDoNotHonor</td>
<td className="py-2 px-5 text-right font-mono text-slate-600">63</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="DeclinedInsufficientFunds">DeclinedInsufficientFunds</td>
<td className="py-2 px-5 text-right font-mono text-slate-600">31</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="DeclinedUnknownResponseCode">DeclinedUnknownResponseCode</td>
<td className="py-2 px-5 text-right font-mono text-slate-600">20</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="UnknownDeclineReasonWithGiftcards">UnknownDeclineReasonWithGiftcards</td>
<td className="py-2 px-5 text-right font-mono text-slate-600">17</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="DeclinedCVV2ValueMismatch">DeclinedCVV2ValueMismatch</td>
<td className="py-2 px-5 text-right font-mono text-slate-600">16</td>
</tr>
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-2 px-5 font-mono text-xs text-slate-600 truncate max-w-[180px]" title="DeclinedInvalidCVV">DeclinedInvalidCVV</td>
<td className="py-2 px-5 text-right font-mono text-slate-600">9</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Site Operations Jobs</h2>
<span className="text-xs bg-gray-100 text-slate-500 px-2 py-0.5 rounded-full border border-gray-200">Top 7 Jobs</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/50">
<th className="py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider w-1/3">Job Name</th>
<th className="py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Frequency</th>
<th className="py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider">Last Run</th>
<th className="py-3 px-6 text-xs font-medium text-slate-400 uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-sm font-medium text-slate-700">Inventory Sync</td>
<td className="py-3 px-6 text-sm text-slate-500">Every 5 min</td>
<td className="py-3 px-6 text-sm text-slate-500 font-mono">00:03 ago</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> OK
                                    </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-sm font-medium text-slate-700">Pricing Updates</td>
<td className="py-3 px-6 text-sm text-slate-500">Hourly</td>
<td className="py-3 px-6 text-sm text-slate-500 font-mono">00:21 ago</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> OK
                                    </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-sm font-medium text-slate-700">Order Export to ERP</td>
<td className="py-3 px-6 text-sm text-slate-500">Continuous</td>
<td className="py-3 px-6 text-sm text-slate-500 font-mono">00:02 ago</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> OK
                                    </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-3 px-6 text-sm font-medium text-slate-700">Fraud Screening</td>
<td className="py-3 px-6 text-sm text-slate-500">Real-time</td>
<td className="py-3 px-6 text-sm text-slate-500 font-mono">&lt;10 sec</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> OK
                                    </span>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors bg-amber-50/30">
<td className="py-3 px-6 text-sm font-medium text-slate-700">Email Confirmation Queue</td>
<td className="py-3 px-6 text-sm text-slate-500">Every 2 min</td>
<td className="py-3 px-6 text-sm text-slate-500 font-mono">00:07 ago</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Delay
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Executive Notes</h2>
<span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">At-a-glance</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-alert-circle w-4 h-4 text-indigo-500" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="text-sm font-semibold text-slate-900">Key Callout</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Overall system health is <span className="font-medium text-emerald-600">green</span>. Slight degradation in <span className="font-medium text-amber-600">Synchrony</span> payment latency; watch for any further impact on checkout completion.
                            </p>
</div>
<div className="h-px bg-gray-100"></div>
<div>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-bar-chart-2 w-4 h-4 text-slate-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="text-sm font-semibold text-slate-900">Conversion Trend</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Currently <span className="font-medium text-slate-900">3.4%</span>, trending positively versus yesterday. Alert threshold set at <span className="font-medium text-slate-900">3.0%</span>.
                            </p>
</div>
<div className="h-px bg-gray-100"></div>
<div>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-fast-forward w-4 h-4 text-slate-400" data-lucide="fast-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path></svg>
<span className="text-sm font-semibold text-slate-900">Next Actions</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Engineering reviewing Synchrony latency, monitoring email backlog, and validating Akamai cache policies.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
