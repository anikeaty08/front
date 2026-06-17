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
      

<aside className="flex flex-col hidden md:flex shrink-0 w-64 border-r justify-between bg-neutral-950 border-neutral-800">
<div className="">

<div className="p-4 pt-6">
<div className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg bg-neutral-100 text-black shadow-white/5" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-white">Kashio</p>
<p className="text-xs text-neutral-500" style={{}}>Production</p>
</div>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<nav className="px-2 mt-4 space-y-8">

<div className="space-y-1">
<p className="px-3 text-xs font-medium text-neutral-500 mb-2" style={{}}>GENERAL</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm border rounded-md shadow-sm text-white bg-neutral-900/50 border-neutral-800" href="#" style={{}}>
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
                        Analytics
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        Customers
                    </a>
</div>

<div className="space-y-1">
<p className="px-3 text-xs font-medium text-neutral-500 mb-2" style={{}}>MONETIZATION</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-dollar-sign w-4 h-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        Payments
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                        Invoices
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-snowflake w-4 h-4" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
                        Tax
                    </a>
</div>

<div className="space-y-1">
<p className="px-3 text-xs font-medium text-neutral-500 mb-2" style={{}}>DEVELOPERS</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-terminal-square w-4 h-4" data-lucide="terminal-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 11 2-2-2-2"></path><path d="M11 13h4"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
                        API Keys
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all text-neutral-400 hover:text-white hover:bg-neutral-900/30" href="#" style={{}}>
<svg className="lucide lucide-webhook w-4 h-4" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
                        Webhooks
                    </a>
</div>
</nav>
</div>

<div className="p-4 border-t border-neutral-800" style={{}}>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full ring-2 bg-neutral-800 ring-neutral-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alicia" style={{}}/>
<div className="overflow-hidden">
<p className="text-sm font-medium truncate text-white">Alicia Morin</p>
<p className="text-xs text-neutral-500 truncate" style={{}}>alicia@kashio.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-black">

<header className="flex sticky z-20 h-16 border-b pr-6 pl-6 top-0 backdrop-blur-md items-center justify-between bg-black/50 border-neutral-800" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-500" style={{}}>
<span className="cursor-pointer transition-colors hover:text-neutral-300" style={{}}>Kashio</span>
<span className="text-neutral-700" style={{}}>/</span>
<span className="font-medium text-white">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="border text-sm rounded-lg pl-10 pr-4 py-1.5 w-64 focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700 transition-all placeholder:text-neutral-600 bg-neutral-900 border-neutral-800 text-neutral-300" placeholder="Search or type a command" style={{}} type="text"/>
</div>
<button className="text-sm font-medium px-4 py-1.5 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center gap-2 hover:bg-blue-500 text-white bg-blue-600" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Space</span>
</button>
<button className="transition-colors relative text-neutral-400 hover:text-white" style={{}}>
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full border-2 border-black" style={{}}></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto md:p-8 pt-6 pr-6 pb-6 pl-6 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 gap-x-4 gap-y-4 justify-between">
<h1 className="text-3xl font-medium tracking-tight text-white">Overview</h1>
<div className="flex border rounded-lg p-1 self-start sm:self-auto bg-neutral-900 border-neutral-800" style={{}}>
<button className="transition-colors text-xs font-medium pt-1 pr-3 pb-1 pl-3 hover:text-white text-neutral-400">7d</button>
<button className="px-3 py-1 text-xs font-medium rounded shadow-sm text-white bg-neutral-800" style={{}}>30d</button>
<button className="px-3 py-1 text-xs font-medium transition-colors text-neutral-400 hover:text-white" style={{}}>90d</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="border rounded-xl p-5 transition-all bg-neutral-900/50 border-neutral-800 hover:border-neutral-700" style={{}}>
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-neutral-400" style={{}}>Gross Volume</span>
<svg className="lucide lucide-more-vertical w-4 h-4 cursor-pointer text-neutral-600 hover:text-neutral-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<div className="flex items-end justify-between">
<span className="text-3xl font-medium tracking-tight text-white">$42,805</span>
<span className="text-xs font-medium px-2 py-1 rounded-md border bg-blue-500/10 border-blue-500/20 text-blue-400" style={{}}>+12.5%</span>
</div>
</div>

<div className="border rounded-xl p-5 transition-all bg-neutral-900/50 border-neutral-800 hover:border-neutral-700" style={{}}>
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-neutral-400" style={{}}>Net Revenue</span>
<svg className="lucide lucide-more-vertical w-4 h-4 cursor-pointer text-neutral-600 hover:text-neutral-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<div className="flex items-end justify-between">
<span className="text-3xl font-medium tracking-tight text-white">$36,210</span>
<span className="text-xs font-medium px-2 py-1 rounded-md border bg-blue-500/10 border-blue-500/20 text-blue-400" style={{}}>+8.2%</span>
</div>
</div>

<div className="border rounded-xl p-5 transition-all bg-neutral-900/50 border-neutral-800 hover:border-neutral-700" style={{}}>
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-neutral-400" style={{}}>Active Subscribers</span>
<svg className="lucide lucide-more-vertical w-4 h-4 cursor-pointer text-neutral-600 hover:text-neutral-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<div className="flex items-end justify-between">
<span className="text-3xl font-medium tracking-tight text-white">1,429</span>
<span className="text-xs font-medium px-2 py-1 rounded-md border bg-blue-500/10 border-blue-500/20 text-blue-400" style={{}}>+4.1%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 border rounded-xl p-6 relative group overflow-hidden bg-neutral-900/50 border-neutral-800" style={{}}>
<div className="flex justify-between items-start mb-1">
<div className="">
<p className="text-sm font-medium text-neutral-400" style={{}}>Revenue Over Time</p>
<h2 className="text-3xl font-medium tracking-tight mt-1 text-white">$164,230.00</h2>
<p className="text-xs mt-1 text-neutral-600" style={{}}>Total revenue for selected period</p>
</div>
<div className="flex items-center gap-1 px-2 py-1 rounded-md border bg-blue-500/10 border-blue-500/20 text-blue-400" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium">2.1%</span>
</div>
</div>

<div className="relative h-64 mt-6 w-full">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs font-medium text-neutral-600" style={{}}>
<span>50k</span>
<span>40k</span>
<span>30k</span>
<span>20k</span>
<span>10k</span>
</div>

<svg className="absolute left-8 right-0 top-0 w-[calc(100%-2rem)] h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#262626" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="0" y2="0"></line>
<line stroke="#262626" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="25%" y2="25%"></line>
<line stroke="#262626" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%"></line>
<line stroke="#262626" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="100%" y1="75%" y2="75%"></line>

<path className="" d="M0,85 C50,85 80,80 120,70 C160,60 200,40 240,30 C280,20 320,35 360,35 C400,35 440,30 480,45 C520,60 560,55 600,65 L600,100 L0,100 Z" fill="url(#chartGradient)"></path>
<path d="M0,85 C50,85 80,80 120,70 C160,60 200,40 240,30 C280,20 320,35 360,35 C400,35 440,30 480,45 C520,60 560,55 600,65" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<path d="M0,90 C50,90 100,85 150,80 C200,75 250,55 300,60 C350,65 400,70 450,68 C500,66 550,70 600,72" fill="none" stroke="#f59e0b" stroke-dasharray="4 4" stroke-opacity="0.5" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute left-[55%] top-[15%] flex flex-col items-center">
<div className="border rounded py-1 px-2 mb-2 bg-neutral-800 border-neutral-700" style={{}}>
<span className="text-[10px] whitespace-nowrap text-neutral-300" style={{}}>Thu, 25 Jun 2025, 10:45</span>
</div>
<div className="w-3 h-3 rounded-full border-2 z-10 bg-neutral-900 border-blue-400" style={{}}></div>
<div className="w-px h-32 border-l border-dashed border-neutral-600" style={{}}></div>
</div>

<div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs font-medium px-2 text-neutral-600" style={{}}>
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
</div>
</div>
</div>

<div className="border rounded-xl p-6 flex flex-col bg-neutral-900/50 border-neutral-800" style={{}}>
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Recent Activity</h3>
<svg className="lucide lucide-more-vertical w-4 h-4 cursor-pointer text-neutral-600 hover:text-neutral-400" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors text-blue-500 group-hover:border-blue-500/30 bg-neutral-800/50 border-neutral-700/50" style={{}}>
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div>
<p className="text-sm font-medium text-neutral-200" style={{}}>Stripe Payout</p>
<p className="text-xs text-neutral-500" style={{}}>Today, 9:41 AM</p>
</div>
</div>
<span className="text-sm font-medium text-blue-400" style={{}}>+$1,420.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center group-hover:border-neutral-600 transition-colors bg-neutral-800/50 border-neutral-700/50 text-neutral-400" style={{}}>
<svg className="lucide lucide-server w-5 h-5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div>
<p className="text-sm font-medium text-neutral-200" style={{}}>AWS Invoice</p>
<p className="text-xs text-neutral-500" style={{}}>Yesterday</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$64.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center group-hover:border-neutral-600 transition-colors bg-neutral-800/50 border-neutral-700/50 text-neutral-400" style={{}}>
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div>
<p className="text-sm font-medium text-neutral-200" style={{}}>Slack</p>
<p className="text-xs text-neutral-500" style={{}}>Oct 24, 2024</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$12.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center group-hover:border-neutral-600 transition-colors bg-neutral-800/50 border-neutral-700/50 text-neutral-400" style={{}}>
<svg className="lucide lucide-info w-5 h-5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-neutral-200" style={{}}>Notion</p>
<p className="text-xs text-neutral-500" style={{}}>Oct 22, 2024</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$18.00</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-8">

<div className="border rounded-xl p-6 flex flex-col justify-between bg-neutral-900/50 border-neutral-800" style={{}}>
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Expenses</h3>
<button className="text-xs text-neutral-500 transition-colors hover:text-white" style={{}}>View all</button>
</div>
<div className="">
<div className="flex items-end gap-3 mb-1">
<span className="text-3xl font-medium tracking-tight text-white">$12,402</span>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="bg-cyan-500/10 text-xs font-medium px-1.5 py-0.5 rounded border border-cyan-500/20 text-cyan-400" style={{}}>+4.2%</span>
<span className="text-xs text-neutral-500" style={{}}>vs last month</span>
</div>

<div className="flex w-full h-2 rounded-full overflow-hidden mb-3">
<div className="bg-cyan-500 w-[45%]" style={{}}></div>
<div className="bg-yellow-500 w-[30%]" style={{}}></div>
<div className="bg-yellow-500 w-[25%]" style={{}}></div>
</div>
<div className="flex justify-between text-xs text-neutral-500 font-medium" style={{}}>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-cyan-500" style={{}}></div>Servers</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-yellow-500" style={{}}></div>Ads</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-yellow-500" style={{}}></div>Tools</div>
</div>
</div>
</div>

<div className="border rounded-xl p-6 flex flex-col justify-between bg-neutral-900/50 border-neutral-800" style={{}}>
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Income</h3>
<button className="text-xs text-neutral-500 transition-colors hover:text-white" style={{}}>View all</button>
</div>
<div className="">
<div className="flex items-end gap-3 mb-1">
<span className="text-3xl font-medium tracking-tight text-white">$84,230</span>
</div>
<div className="flex items-center gap-2 mb-6">
<span className="text-xs font-medium px-1.5 py-0.5 rounded border bg-blue-500/10 border-blue-500/20 text-blue-400" style={{}}>+12.4%</span>
<span className="text-xs text-neutral-500" style={{}}>vs last month</span>
</div>

<div className="flex w-full h-2 rounded-full overflow-hidden mb-3">
<div className="w-[60%] bg-blue-500" style={{}}></div>
<div className="bg-teal-500 w-[25%]" style={{}}></div>
<div className="w-[15%] bg-blue-500" style={{}}></div>
</div>
<div className="flex justify-between text-xs text-neutral-500 font-medium" style={{}}>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" style={{}}></div>Subs</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-teal-500" style={{}}></div>API</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" style={{}}></div>One-time</div>
</div>
</div>
</div>

<div className="border rounded-xl p-6 flex flex-col justify-between bg-neutral-900/50 border-neutral-800" style={{}}>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-sm font-medium mb-1 text-neutral-400" style={{}}>Total Balance</h3>
<div className="flex items-center gap-2">
<img className="w-4 h-3 rounded-sm opacity-70" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"/>
<span className="text-xs font-medium text-neutral-500" style={{}}>USD</span>
</div>
</div>
<div className="w-8 h-8 rounded-lg border flex items-center justify-center bg-neutral-800 border-neutral-700" style={{}}>
<svg className="lucide lucide-wallet w-4 h-4 text-neutral-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight text-white">$385,430</span>
<span className="text-4xl font-medium tracking-tight text-neutral-600" style={{}}>.00</span>
</div>
<div className="flex gap-3">
<button className="flex-1 text-sm font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors bg-white hover:bg-neutral-200 text-black" style={{}}>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            Transfer
                        </button>
<button className="flex-1 border text-sm font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-all bg-neutral-800 hover:bg-neutral-700 border-neutral-700 hover:border-neutral-600 text-white" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add Funds
                        </button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
