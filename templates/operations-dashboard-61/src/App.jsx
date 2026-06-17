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
      

<aside className="w-[260px] h-full bg-[#F9FAFB] border-r border-slate-200 flex flex-col z-20 shrink-0 hidden md:flex">

<div className="p-6 pb-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-medium text-xs tracking-tighter">
                    K
                </div>
<span className="text-xl font-medium tracking-tight text-slate-900">Koli.</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-3 py-4">
<p className="px-3 text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">Menu</p>
<nav className="space-y-1">
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-slate-900 border border-slate-200/60 font-medium transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-purple-600" icon="solar:widget-linear"></iconify-icon>
<span className="text-sm">Dashboard</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-sm font-medium">Orders &amp; Purchases</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:routing-linear"></iconify-icon>
<span className="text-sm font-medium">Logistics &amp; Cargos</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium">Clients &amp; Wallets</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm font-medium">Inspiration Catalog</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:wad-of-money-linear"></iconify-icon>
<span className="text-sm font-medium">Treasury &amp; Profit</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-sm font-medium">Data &amp; Insights</span>
</div>
</a>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600" icon="solar:headphones-round-linear"></iconify-icon>
<span className="text-sm font-medium">Quality &amp; Support</span>
</div>
</a>
</nav>
</div>

<div className="p-4 border-t border-slate-200 mt-auto space-y-1 bg-white/50 backdrop-blur-sm">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all font-medium" href="#">
<iconify-icon className="text-lg text-slate-400" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm">Settings &amp; Rates</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all font-medium group" href="#">
<iconify-icon className="text-lg text-slate-400 group-hover:text-red-500" icon="solar:logout-2-linear"></iconify-icon>
<span className="text-sm">Log out</span>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.02)] md:rounded-tl-2xl relative z-10 border-l border-slate-200/50">

<header className="h-16 px-4 md:px-8 border-b border-slate-200 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-30">

<button className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="hidden md:block flex-1"></div>

<div className="flex items-center gap-4 flex-1 justify-end">

<div className="relative group hidden sm:block w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400 group-focus-within:text-purple-600 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-100/50 border border-slate-200 rounded-lg py-1.5 pl-9 pr-14 text-sm focus:outline-none focus:border-purple-300 focus:bg-white focus:ring-4 focus:ring-purple-50 transition-all placeholder:text-slate-400" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
<kbd className="px-1 py-0.5 text-[10px] bg-white rounded text-slate-400 font-sans border border-slate-200 shadow-sm">⌘</kbd>
<kbd className="px-1 py-0.5 text-[10px] bg-white rounded text-slate-400 font-sans border border-slate-200 shadow-sm">K</kbd>
</div>
</div>
<div className="w-px h-5 bg-slate-200 hidden sm:block"></div>

<button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
</button>

<button className="flex items-center gap-2.5 p-1 pr-2 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
<img alt="Admin" className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200" src="https://api.dicebear.com/7.x/notionists/svg?seed=Khadija"/>
<div className="hidden md:flex flex-col items-start">
<span className="text-sm font-medium text-slate-900 leading-none">Khadija W.</span>
</div>
<iconify-icon className="text-sm text-slate-400 hidden md:block" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="max-w-[1400px] mx-auto w-full p-6 md:p-8 space-y-8 pb-24">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">Hello, Khadija!</h1>
<p className="text-sm md:text-base text-slate-500 mt-1">Here's what's happening with your operations today.</p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:export-linear"></iconify-icon>
                            Export
                        </button>
<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all flex items-center justify-center gap-2 border border-purple-700">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                            Add Group
                        </button>
</div>
</div>

<div className="flex items-center justify-between p-3.5 px-4 bg-white border border-slate-200 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] relative overflow-hidden group">
<div className="absolute inset-y-0 left-0 w-1 bg-purple-500"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-purple-600" icon="solar:stars-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-medium text-slate-900">System updated successfully</span>
<span className="text-sm text-slate-500 hidden sm:inline-block ml-1">Enjoy the new advanced routing features.</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-purple-600 hover:text-purple-700 hidden sm:block" href="#">Learn More →</a>
<button className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 items-start">

<div className="xl:col-span-2 flex flex-col gap-6 lg:gap-8">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-slate-900">Overview performance</h2>

<div className="flex bg-slate-100/80 p-1 rounded-lg border border-slate-200/60">
<button className="px-3 py-1 text-xs font-medium rounded text-slate-500 hover:text-slate-900 transition-colors">Day</button>
<button className="px-3 py-1 text-xs font-medium rounded bg-white text-slate-900 shadow-sm border border-slate-200/50">Week</button>
<button className="px-3 py-1 text-xs font-medium rounded text-slate-500 hover:text-slate-900 transition-colors">Month</button>
<button className="px-3 py-1 text-xs font-medium rounded text-slate-500 hover:text-slate-900 transition-colors">Year</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-purple-200 transition-colors relative overflow-hidden group shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-slate-500 font-medium">Total Revenue</span>
<div className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100 flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon> 40%
                                        </div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-900">5.094M <span className="text-sm lg:text-base text-slate-400 font-normal">XAF</span></div>
<div className="text-xs text-slate-400 mt-1">From 3.63M (last 7 days)</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-purple-200 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-slate-500 font-medium">Active Groups</span>
<div className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100 flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon> 33%
                                        </div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-900">794</div>
<div className="text-xs text-slate-400 mt-1">From 598 (last 7 days)</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-orange-200 transition-colors shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-slate-500 font-medium">Orders Processed</span>
<div className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100 flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon> 34%
                                        </div>
</div>
<div>
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-900">1,234</div>
<div className="text-xs text-slate-400 mt-1">From 920 (last 7 days)</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-red-200 transition-colors relative shadow-sm">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-50 pointer-events-none"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-sm text-slate-500 font-medium">Wallet Debt</span>
<div className="px-2 py-0.5 rounded bg-red-50 text-red-600 text-xs font-medium border border-red-100 flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon> High
                                        </div>
</div>
<div className="relative z-10">
<div className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-900">150k <span className="text-sm lg:text-base text-slate-400 font-normal">XAF</span></div>
<div className="text-xs text-red-500 mt-1.5 font-medium cursor-pointer hover:text-red-600 transition-colors flex items-center gap-1 w-max">
                                            View debtors <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900 mb-1">Treasury Overview</h2>
<div className="text-sm text-slate-500">You gained <span className="text-emerald-600 font-medium">+420k XAF</span> this month</div>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<div className="text-xs text-slate-400 mb-1">Today</div>
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tight text-slate-900">38.7k XAF</span>
<div className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">
                                                2.4%
                                            </div>
</div>
</div>

<button className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-slate-50 transition-colors">
                                        Last Year <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="w-full h-[240px] relative">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-slate-400 font-mono w-8">
<span>400k</span>
<span>300k</span>
<span>200k</span>
<span>100k</span>
<span>0</span>
</div>

<div className="ml-10 h-[calc(100%-1.5rem)] w-[calc(100%-2.5rem)] relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 200">

<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="0" y2="0"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
<line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="1000" y1="200" y2="200"></line>

<path d="M 0 150 L 100 120 L 200 140 L 300 80 L 400 90 L 500 50 L 600 70 L 700 20 L 800 100 L 900 60 L 1000 40 L 1000 200 L 0 200 Z" fill="url(#chart-fill)"></path>

<line stroke="#cbd5e1" stroke-dasharray="4 4" strokeWidth="1" x1="700" x2="700" y1="20" y2="200"></line>
<circle cx="700" cy="20" fill="white" r="4" stroke="#8b5cf6" strokeWidth="2"></circle>

<path className="animate-chart" d="M 0 150 L 100 120 L 200 140 L 300 80 L 400 90 L 500 50 L 600 70 L 700 20 L 800 100 L 900 60 L 1000 40" fill="none" stroke="#8b5cf6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<defs>
<lineargradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ede9fe" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute -bottom-6 left-10 right-0 flex justify-between text-[10px] text-slate-400 font-medium uppercase tracking-wider">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:gap-8">

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg font-medium tracking-tight text-slate-900">System Alerts</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">View All</button>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all group cursor-pointer">
<div className="flex gap-4">
<div className="mt-0.5 w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 leading-tight">3 Packages Blocked</h3>
<p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Action required before next dispatch to clear customs at origin.</p>
<span className="text-xs font-medium text-orange-600 mt-3 inline-block group-hover:translate-x-1 transition-transform">Resolve Issue →</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg font-medium tracking-tight text-slate-900">Logistics</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Details</button>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm">
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400" icon="solar:route-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Active Transit</span>
</div>
<span className="text-sm font-medium text-slate-900">450</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border-t border-slate-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-slate-400" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Delivered</span>
</div>
<span className="text-sm font-medium text-slate-900">120</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer border-t border-slate-100 group">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-red-400 group-hover:text-red-500" icon="solar:stop-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700 group-hover:text-red-700">Held at Customs</span>
</div>
<span className="text-sm font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded">3</span>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg font-medium tracking-tight text-slate-900">Activity Log</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">View All</button>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-5">
<div className="flex gap-3">
<img className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 shrink-0" src="https://api.dicebear.com/7.x/notionists/svg?seed=David"/>
<div className="flex flex-col">
<p className="text-sm text-slate-700"><span className="font-medium text-slate-900">David Elson</span> initiated group buy.</p>
<span className="text-xs text-slate-400 mt-0.5">6 mins ago</span>
</div>
</div>
<div className="flex gap-3">
<img className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 shrink-0" src="https://api.dicebear.com/7.x/notionists/svg?seed=Kurt"/>
<div className="flex flex-col">
<p className="text-sm text-slate-700"><span className="font-medium text-slate-900">Kurt Bates</span> cleared wallet debt.</p>
<span className="text-xs text-slate-400 mt-0.5">15 mins ago</span>
</div>
</div>
<div className="flex gap-3">
<img className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 shrink-0" src="https://api.dicebear.com/7.x/notionists/svg?seed=Eddie"/>
<div className="flex flex-col">
<p className="text-sm text-slate-700"><span className="font-medium text-slate-900">Eddie Lake</span> submitted new purchase.</p>
<span className="text-xs text-slate-400 mt-0.5">20 mins ago</span>
</div>
</div>
<div className="flex gap-3">
<img className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 shrink-0" src="https://api.dicebear.com/7.x/notionists/svg?seed=Patricia"/>
<div className="flex flex-col">
<p className="text-sm text-slate-700"><span className="font-medium text-slate-900">Patricia Sanders</span> contacted support.</p>
<span className="text-xs text-slate-400 mt-0.5">30 mins ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</main>
</div>

    </>
  );
}
