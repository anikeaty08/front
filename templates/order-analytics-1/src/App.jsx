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
      

<aside className="w-64 border-r border-zinc-100 flex flex-col bg-zinc-50/30 hidden md:flex">
<div className="h-16 flex items-center px-6">
<div className="h-8 w-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<span className="ml-3 font-medium tracking-tight text-lg">Nexus</span>
</div>
<nav className="flex-1 px-3 py-6 space-y-1">
<a className="flex items-center px-3 py-2.5 text-base font-medium text-zinc-900 bg-white border border-zinc-200 shadow-sm rounded-lg group transition-all" href="#">
<i className="w-5 h-5 mr-3 text-zinc-900" data-lucide="clock"></i>
                Pending Orders
            </a>
<a className="flex items-center px-3 py-2.5 text-base font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-zinc-600" data-lucide="check-circle-2"></i>
                Assigned Orders
            </a>
<a className="flex items-center px-3 py-2.5 text-base font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-zinc-600" data-lucide="layers"></i>
                Category
            </a>
</nav>
<div className="p-4 border-t border-zinc-100">
<a className="flex items-center px-3 py-2 text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-zinc-400" data-lucide="log-out"></i>
                Sign out
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 border-b border-zinc-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">

<button className="md:hidden text-zinc-500">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="hidden md:flex items-center text-sm text-zinc-500">
<span>Dashboard</span>
<span className="mx-2 text-zinc-300">/</span>
<span className="text-zinc-900 font-medium">Pending Orders</span>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
<div className="h-8 w-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 overflow-hidden">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Pending Order</h1>
<p className="text-lg text-zinc-500 mt-1">Overview of your current order status and distribution.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-zinc-900">Paid Orders</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
<i className="w-3 h-3 mr-1" data-lucide="arrow-up"></i> 40%
                            </span>
</div>
<div className="flex items-end justify-between">
<div className="text-4xl font-semibold tracking-tight text-zinc-900">2,420</div>
<div className="w-24 h-10">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 35 Q20 35 40 20 T100 5" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0 35 Q20 35 40 20 T100 5 V 40 H 0 Z" fill="url(#gradientGreen)" opacity="0.1"></path>
<defs>
<lineargradient id="gradientGreen" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#ffffff"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-zinc-900">Unpaid Orders</h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
<i className="w-3 h-3 mr-1" data-lucide="arrow-up"></i> 20%
                            </span>
</div>
<div className="flex items-end justify-between">
<div className="text-4xl font-semibold tracking-tight text-zinc-900">1,210</div>
<div className="w-24 h-10">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 35 Q30 35 50 25 T100 10" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-zinc-900">Partially Paid</h3>
<span className="text-sm text-zinc-400">Last Month</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900">312</div>
<div className="mt-2 inline-flex items-center text-sm font-medium text-rose-600">
<i className="w-4 h-4 mr-1" data-lucide="arrow-down"></i> 10%
                                </div>
</div>
<div className="w-24 h-10">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 10 Q30 40 60 25 T100 35" fill="none" stroke="#f43f5e" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">

<div className="lg:col-span-2 flex flex-col rounded-xl border border-zinc-200 shadow-sm bg-white overflow-hidden">
<div className="p-6 border-b border-zinc-100 flex items-center justify-between">
<h2 className="text-lg font-medium text-zinc-900">Regional Performance</h2>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-50/50 border-b border-zinc-100">
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-zinc-500 w-16">S.No</th>
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-zinc-500">State</th>
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-zinc-500 text-right">Total Qty</th>
</tr>
</thead>
<tbody className="text-base divide-y divide-zinc-100">
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">01</td>
<td className="py-4 px-6 font-medium text-zinc-900">Goa</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">230</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">02</td>
<td className="py-4 px-6 font-medium text-zinc-900">Uttar Pradesh</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">340</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">03</td>
<td className="py-4 px-6 font-medium text-zinc-900">Ladakh</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">450</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">04</td>
<td className="py-4 px-6 font-medium text-zinc-900">Rajasthan</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">123</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">05</td>
<td className="py-4 px-6 font-medium text-zinc-900">Meghalaya</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">423</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">06</td>
<td className="py-4 px-6 font-medium text-zinc-900">Lakshadweep</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">453</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-4 px-6 text-zinc-500">07</td>
<td className="py-4 px-6 font-medium text-zinc-900">Assam</td>
<td className="py-4 px-6 text-zinc-600 text-right tabular-nums">234</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-zinc-100 bg-zinc-50/30 flex justify-center">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
                                View all states <i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="lg:col-span-1 rounded-xl border border-zinc-200 shadow-sm bg-white flex flex-col h-full min-h-[400px]">
<div className="p-6 border-b border-zinc-100">
<h2 className="text-lg font-medium text-zinc-900">State-wise Distribution</h2>
</div>
<div className="flex-1 relative bg-zinc-50 p-6 flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>

<div className="relative w-full h-full max-w-[300px] flex items-center justify-center">

<svg className="w-full h-auto drop-shadow-xl" fill="none" viewbox="0 0 400 500">

<path className="fill-zinc-200 stroke-white stroke-2" d="M140,50 L180,20 L220,50 L240,100 L280,120 L320,150 L300,200 L340,220 L300,300 L280,350 L220,450 L180,480 L140,400 L100,350 L60,300 L80,200 L40,150 L100,100 Z"></path>

<path className="fill-zinc-800 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" d="M140,150 L160,140 L180,160 L160,180 Z"></path>
<path className="fill-zinc-600 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" d="M220,250 L240,240 L260,260 L240,280 Z"></path>
<path className="fill-zinc-700 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" d="M100,300 L120,290 L140,310 L120,330 Z"></path>

<circle className="fill-white stroke-zinc-900 stroke-[3px]" cx="160" cy="160" r="6"></circle>
<circle className="fill-zinc-900" cx="240" cy="260" r="4"></circle>
<circle className="fill-zinc-900" cx="120" cy="310" r="4"></circle>

<g transform="translate(170, 140)">
<rect className="shadow-lg" fill="#18181b" height="30" rx="6" width="80" x="0" y="0"></rect>
<text fill="white" fontSize="10" font-weight="500" text-anchor="middle" x="40" y="20">Rajasthan</text>
</g>
</svg>
</div>

<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur border border-zinc-200 rounded-lg p-3 shadow-sm text-xs">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
<span className="text-zinc-600">High Volume (&gt;400)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-300"></span>
<span className="text-zinc-600">Low Volume (&lt;200)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
