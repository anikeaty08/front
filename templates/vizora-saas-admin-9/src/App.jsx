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
      

<aside className="w-64 bg-[#0a2724] text-slate-300 flex flex-col h-full shrink-0 transition-all duration-300 hidden md:flex">

<div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Vizora</span>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="panel-left-close" strokeWidth="1.5"></i>
</button>
</div>

<div className="px-6 py-5">
<div className="relative group">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-400 transition-colors" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-10 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all" placeholder="Search" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-white/10 px-1.5 py-0.5 rounded">
<span>⌘</span><span>F</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-2 space-y-8">

<div>
<h3 className="px-2 text-sm font-medium text-slate-500 mb-3 tracking-wide">Main Menu</h3>
<nav className="space-y-1">
<a className="flex items-center justify-between px-2 py-2.5 bg-[#133e38] text-white rounded-lg relative group" href="#">
<div className="absolute left-0 top-2 bottom-2 w-1 bg-emerald-400 rounded-r-full"></div>
<div className="flex items-center gap-3 pl-2">
<i className="w-5 h-5 text-emerald-400" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-base font-medium">Dashboard</span>
</div>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="box" strokeWidth="1.5"></i>
<span className="text-base font-medium">Products</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="list-ordered" strokeWidth="1.5"></i>
<span className="text-base font-medium">Order</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base font-medium">Customer</span>
</a>
<a className="flex items-center justify-between px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-base font-medium">Chat</span>
</div>
<span className="bg-emerald-500/20 text-emerald-400 text-sm py-0.5 px-2 rounded-md font-medium">10</span>
</a>
</nav>
</div>

<div>
<h3 className="px-2 text-sm font-medium text-slate-500 mb-3 tracking-wide">Other</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-base font-medium">Email</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="plug" strokeWidth="1.5"></i>
<span className="text-base font-medium">Integration</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-base font-medium">Performance</span>
</a>
</nav>
</div>
</div>

<div className="p-4 mt-auto">
<h3 className="px-2 text-sm font-medium text-slate-500 mb-2 tracking-wide">Account</h3>
<nav className="space-y-1 mb-4">
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="help-circle" strokeWidth="1.5"></i>
<span className="text-base font-medium">Help Center</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
<span className="text-base font-medium">Settings</span>
</a>
</nav>
<div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-lg object-cover ring-2 ring-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">Tony Robert</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-24 shrink-0 px-8 flex items-center justify-between border-b border-slate-200/60 bg-white/50 backdrop-blur-md z-10 sticky top-0">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
<p className="text-base text-slate-500 mt-1">Welcome back Tony</p>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center -space-x-3 hidden sm:flex">
<img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm z-30 hover:z-40 transition-transform hover:scale-110 cursor-pointer" src="https://i.pravatar.cc/150?u=1"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm z-20 hover:z-40 transition-transform hover:scale-110 cursor-pointer" src="https://i.pravatar.cc/150?u=2"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm z-10 hover:z-40 transition-transform hover:scale-110 cursor-pointer" src="https://i.pravatar.cc/150?u=3"/>
<button className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:border-slate-400 transition-colors z-0 ml-2">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
<div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="info" strokeWidth="1.5"></i>
</button>
<button className="text-slate-400 hover:text-slate-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white translate-x-1/3 -translate-y-1/3"></span>
</button>
</div>
<button className="bg-[#0a2724] hover:bg-[#113834] text-white px-4 py-2.5 rounded-lg text-base font-medium flex items-center gap-2 shadow-sm transition-all active:scale-95">
                    Export
                    <i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">New Net Income</h3>
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-baseline gap-3 mb-4">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$53,765</span>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i> 10.5%
                            </span>
</div>
<div className="h-px bg-slate-100 w-full mb-4"></div>
<div className="flex items-center justify-between text-sm text-slate-500">
<span><strong className="font-medium text-slate-700">+$2,156</strong> from last month</span>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Average Sales</h3>
<div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-baseline gap-3 mb-4">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$12,549</span>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i> 13.5%
                            </span>
</div>
<div className="h-px bg-slate-100 w-full mb-4"></div>
<div className="flex items-center justify-between text-sm text-slate-500">
<span><strong className="font-medium text-slate-700">+$4,275</strong> from last month</span>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Order</h3>
<div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-baseline gap-3 mb-4">
<span className="text-3xl font-semibold tracking-tight text-slate-900">13,439</span>
<span className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-down" strokeWidth="2"></i> 0.5%
                            </span>
</div>
<div className="h-px bg-slate-100 w-full mb-4"></div>
<div className="flex items-center justify-between text-sm text-slate-500">
<span><strong className="font-medium text-slate-700">+2,156</strong> from last month</span>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Impression</h3>
<div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-baseline gap-3 mb-4">
<span className="text-3xl font-semibold tracking-tight text-slate-900">349K</span>
<span className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-down" strokeWidth="2"></i> 25.1%
                            </span>
</div>
<div className="h-px bg-slate-100 w-full mb-4"></div>
<div className="flex items-center justify-between text-sm text-slate-500">
<span><strong className="font-medium text-slate-700">-98.5K</strong> from last month</span>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col">
<div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
<div>
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Overall Sales</h3>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$63,332</span>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i> 10.5%
                                    </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                                    Dashboard <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                                    All Categories <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></span> This Period
                                </div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-teal-300"></span> Last Period
                                </div>
</div>
</div>

<div className="relative flex-1 min-h-[250px] w-full mt-auto">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-sm text-slate-400">
<span>$25k</span>
<span>$20k</span>
<span>$15k</span>
<span>$10k</span>
</div>

<div className="absolute left-12 right-0 top-2 bottom-6">

<div className="w-full h-full flex flex-col justify-between">
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
<div className="border-b border-slate-100 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">

<defs>
<lineargradient id="gradientGreen" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#34d399" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#34d399" stop-opacity="0.0"></stop>
</lineargradient>
</defs>

<path d="M0,50 C20,30 40,40 50,10 C60,40 80,10 100,50 L100,100 L0,100 Z" fill="url(#gradientGreen)"></path>

<path d="M0,50 C20,30 40,40 50,10 C60,40 80,10 100,50" fill="none" stroke="#10b981" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path d="M0,80 C20,70 40,85 50,70 C60,65 80,80 100,75" fill="none" stroke="#5eead4" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="50" cy="10" fill="white" r="4" stroke="#10b981" strokeWidth="3" vector-effect="non-scaling-stroke"></circle>
<circle cx="50" cy="70" fill="white" r="4" stroke="#5eead4" strokeWidth="3" vector-effect="non-scaling-stroke"></circle>
<line stroke="#cbd5e1" stroke-dasharray="4" strokeWidth="1" vector-effect="non-scaling-stroke" x1="50" x2="50" y1="0" y2="100"></line>
</svg>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-lg rounded-xl p-3 z-10 w-48 pointer-events-none">
<div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide text-center border-b border-slate-100 pb-2">Net Sales</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2 text-emerald-600 font-medium"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> $53.5k</div>
<span className="text-slate-400">Aug 12, 2024</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2 text-teal-500 font-medium"><span className="w-2 h-2 rounded-full bg-teal-300"></span> $23.3k</div>
<span className="text-slate-400">Aug 12, 2024</span>
</div>
</div>
</div>
</div>

<div className="absolute left-12 right-0 bottom-0 flex justify-between text-sm text-slate-400">
<span>Aug 01, 2024</span>
<span>Aug 32, 2024</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Conversion Rate</h3>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-slate-900">4.55%</span>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i> 0.5%
                                    </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="bar-chart" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex-1 flex flex-col justify-between mt-4">

<div className="group py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Product Views</span>
<span className="text-base font-semibold text-slate-900">6,545</span>
</div>
<span className="text-sm text-slate-500">15%</span>
</div>

<div className="group py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Add to cart</span>
<span className="text-base font-semibold text-slate-900">3,491</span>
</div>
<span className="text-sm text-slate-500">8%</span>
</div>

<div className="group py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Checkout Initiated</span>
<span className="text-base font-semibold text-slate-900">1,342</span>
</div>
<span className="text-sm text-slate-500">4%</span>
</div>

<div className="group py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors mt-auto">
<div className="flex justify-between items-center mb-1">
<span className="text-base font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Completed purchases</span>
<span className="text-base font-semibold text-slate-900">1,200</span>
</div>
<span className="text-sm text-slate-500">1.89%</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Upgrade</h3>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Premium Plan</h2>
</div>
<button className="bg-[#0a2724] hover:bg-[#113834] text-white px-5 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors">
                                    Upgrade
                                </button>
</div>
<p className="text-base text-slate-500 leading-relaxed mb-8">
                                Supercharge your sales management and unlock your full potential for extraordinary success.
                            </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
<div className="text-sm text-slate-500 font-medium mb-1">Performance</div>
<div className="text-lg font-semibold text-emerald-600 flex items-center justify-center gap-1">
<i className="w-4 h-4" data-lucide="arrow-up" strokeWidth="2"></i> 79%
                                </div>
</div>
<div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
<div className="text-sm text-slate-500 font-medium mb-1">Tools</div>
<div className="text-lg font-semibold text-slate-700 flex items-center justify-center gap-1">
<i className="w-4 h-4 text-slate-400" data-lucide="box" strokeWidth="2"></i> 30+
                                </div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col">
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Product List</h3>
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">390</span>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i> 12
                                    </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-slate-50 text-emerald-600 border border-slate-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="box" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="relative max-w-sm w-full sm:w-72">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-sm" placeholder="Search" type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="refresh-cw" strokeWidth="1.5"></i> Refresh
                            </button>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-200 text-sm font-medium text-slate-500">
<th className="pb-3 pl-2 w-8"><input className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer" type="checkbox"/></th>
<th className="pb-3 font-medium">Product Info</th>
<th className="pb-3 font-medium">Price</th>
<th className="pb-3 font-medium">Stock</th>
<th className="pb-3 font-medium">Sold</th>
<th className="pb-3 font-medium text-right pr-4">Active</th>
</tr>
</thead>
<tbody>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4 pl-2"><input className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer" type="checkbox"/></td>
<td className="py-4">
<div className="flex items-center gap-3">
<img alt="Product" className="w-10 h-10 rounded-lg object-cover border border-slate-100" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&amp;h=100&amp;fit=crop"/>
<span className="text-base font-medium text-slate-700">Cooper, Kristin</span>
</div>
</td>
<td className="py-4 text-base text-slate-500">$119.92</td>
<td className="py-4 text-base text-slate-500">34</td>
<td className="py-4 text-base text-slate-500">340</td>
<td className="py-4 text-right pr-4">

<label className="relative inline-flex items-center cursor-pointer justify-end w-full">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-emerald-500 peer-focus:outline-none transition-colors after:content-[''] after:absolute after:top-[2px] after:right-[22px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white shadow-sm inset-y-0 my-auto right-0 absolute"></div>
</label>
</td>
</tr>

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
