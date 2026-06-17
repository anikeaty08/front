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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-purple-600/5 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
<i className="text-white w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-medium text-lg tracking-tight text-white">ChainDesk</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#process">How it works</a>
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-base text-gray-400 hover:text-white transition-colors" href="#docs">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base text-gray-300 hover:text-white transition-colors" href="#">Login</a>
<a className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2" href="#">
                    Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 bg-grid-pattern -z-10 opacity-50"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                New: Multi-signature workflows live
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
                Manage your Web3 treasury <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-200 to-white"></span><br className="hidden md:block"/>
</h1><p className="leading-relaxed text-xl font-light text-gray-400 max-w-2xl mr-auto mb-10 ml-auto">
                Unified multi-wallet tracking, real-time analytics, and automated team payments. The operating system for modern DAOs and crypto startups.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
<input className="sm:w-auto flex-1 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-base text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3 pr-5 pb-3 pl-5" placeholder="founder@startup.xyz" type="email"/>
<button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-medium transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                    Start Dashboard
                </button>
</div>
<p className="text-sm text-gray-500 mb-8">Trusted by innovative teams worldwide</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-lg text-white"><i className="fill-white" data-lucide="triangle"></i> VESTRA</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><i className="fill-white" data-lucide="circle"></i> ORBIT</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><i className="fill-white" data-lucide="hexagon"></i> NEXUS</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><i className="fill-white" data-lucide="box"></i> BLOCK</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><i className="fill-white" data-lucide="diamond"></i> GEMINI</div>
</div>
</div>
</section>

<section className="relative px-4 pb-32">
<div className="max-w-6xl mx-auto">
<div className="rounded-xl p-1 bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#0A0A0A] rounded-lg border border-white/5 shadow-2xl overflow-hidden relative group">

<div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 px-3 py-1 bg-white/5 rounded text-xs text-gray-400 flex items-center gap-2 w-64">
<i className="w-3 h-3" data-lucide="lock"></i> chaindesk.app/dashboard
                        </div>
</div>

<div className="flex h-[600px]">

<div className="w-64 border-r border-white/5 bg-black/20 p-4 hidden md:flex flex-col gap-6">
<div className="">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 px-2">Overview</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-2 py-2 rounded bg-white/10 text-white text-sm font-medium cursor-pointer">
<i className="w-4 h-4 text-orange-400" data-lucide="layout-dashboard"></i> Dashboard
                                    </div>
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/5 text-gray-400 hover:text-gray-200 text-sm font-medium cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="wallet"></i> Wallets
                                    </div>
<div className="flex gap-3 hover:bg-white/5 hover:text-gray-200 cursor-pointer transition-colors text-sm font-medium text-gray-400 rounded pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i> Transactions
                                    </div>
</div>
</div>
<div className="">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 px-2">Management</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/5 text-gray-400 hover:text-gray-200 text-sm font-medium cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="users"></i> Team &amp; Roles
                                    </div>
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/5 text-gray-400 hover:text-gray-200 text-sm font-medium cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="banknote"></i> Payroll
                                    </div>
<div className="flex gap-3 hover:bg-white/5 hover:text-gray-200 cursor-pointer transition-colors text-sm font-medium text-gray-400 rounded pt-2 pr-2 pb-2 pl-2 gap-x-3 gap-y-3 items-center">
<i className="w-4 h-4" data-lucide="file-bar-chart"></i> Reports
                                    </div>
</div>
</div>
</div>

<div className="flex-1 bg-[#050505] p-8 overflow-y-hidden relative">

<div className="flex mb-8 items-end justify-between">
<div>
<p className="text-sm text-gray-400 mb-1">Total Treasury Value</p>
<h2 className="text-4xl font-semibold text-white tracking-tight">$4,293,102.45</h2>
<div className="flex items-center gap-2 mt-2">
<span className="text-green-400 text-sm bg-green-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12.5%
                                        </span>
<span className="text-gray-500 text-sm">vs last month</span>
</div>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm rounded-lg transition-colors">Export CSV</button>
<button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm rounded-lg transition-colors shadow-lg shadow-orange-900/20">New Transfer</button>
</div>
</div>

<div className="grid grid-cols-3 gap-6 mb-8">

<div className="col-span-2 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-gray-200">Asset Allocation</h3>
<i className="text-gray-500 w-4 h-4" data-lucide="more-horizontal"></i>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-gray-400 mb-2">
<span>Ethereum (ETH)</span>
<span className="text-white">45%</span>
</div>
<div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-gray-400 mb-2">
<span>USDC</span>
<span className="text-white">32%</span>
</div>
<div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[32%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-gray-400 mb-2">
<span>Optimism (OP)</span>
<span className="text-white">15%</span>
</div>
<div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-[15%]"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-gray-200">Pending Signatures</h3>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-4 h-4" data-lucide="pen-tool"></i>
</div>
<div>
<div className="text-sm text-white font-medium">Payroll Jan</div>
<div className="text-xs text-gray-500">2/3 Signed</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
<div>
<div className="text-sm text-white font-medium">Vendor Payment</div>
<div className="text-xs text-gray-500">1/2 Signed</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-6">
<h3 className="text-sm font-medium text-gray-200 mb-4">Recent Transactions</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-white/5 text-gray-400"><i className="w-4 h-4" data-lucide="arrow-down-left"></i></div>
<div>
<div className="text-sm text-white font-medium">Received from Kraken</div>
<div className="text-xs text-gray-500">Today, 10:23 AM</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-green-400 font-medium">+ 25.00 ETH</div>
<div className="text-xs text-gray-500">$62,140.22</div>
</div>
</div>
<div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="p-2 rounded bg-white/5 text-gray-400"><i className="w-4 h-4" data-lucide="arrow-up-right"></i></div>
<div>
<div className="text-sm text-white font-medium">Contract Deployment</div>
<div className="text-xs text-gray-500">Yesterday, 4:12 PM</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-white font-medium">- 0.45 ETH</div>
<div className="text-xs text-gray-500">$1,120.05</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-black pt-24 pb-24 relative" id="features">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
<div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-8">
<svg className="lucide lucide-star" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Features
                </div>
<h2 className="text-4xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                    Designed for <br/>
<span className="text-orange-500">operational excellence.</span>
</h2>
</div>
<div className="max-w-xs flex flex-col justify-end items-start md:items-end gap-8 pt-4">
<p className="text-base text-gray-400 md:text-right leading-relaxed font-light">
                    Replace your spreadsheets and fragmented wallet connections with a single, secure command center.
                </p>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Explore Platform
                    <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">

<div className="md:col-span-1 min-h-[420px] p-8 rounded-[32px] bg-white/[0.03] border border-white/5 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300">
<span className="text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors select-none">01.</span>
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white leading-tight">Multi-Wallet<br/>Tracking</h3>
</div>
</div>

<div className="md:col-span-2 min-h-[420px] rounded-[32px] bg-[#080808] border border-white/10 relative overflow-hidden flex flex-col group shadow-2xl shadow-orange-900/10">

<div className="absolute inset-x-0 top-0 h-[60%] w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent z-10"></div>
<svg className="absolute w-[150%] h-full -left-[25%] -top-10 text-orange-500/20 animate-[pulse_8s_infinite]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 50 Q 25 30 50 50 T 100 50 V 0 H 0 Z" fill="url(#gradient)" opacity="0.5"></path>
<path d="M0 50 Q 25 60 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0 45 Q 25 55 50 45 T 100 45" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0 55 Q 25 65 50 55 T 100 55" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="0.5"></path>
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute bottom-0 w-full h-px bg-white/10"></div>
</div>

<div className="mt-auto p-8 relative z-20 bg-gradient-to-t from-black via-black/80 to-transparent pt-24">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black mb-6 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
<svg className="lucide lucide-bar-chart-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Command Global Operations</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-2 max-w-md">
                        Monitor portfolio performance with institutional-grade charts. Track volatility, exposure, and historical PnL without leaving your dashboard.
                    </p>
</div>
</div>

<div className="md:col-span-1 min-h-[420px] flex flex-col group hover:bg-white/[0.05] transition-all duration-300 border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 justify-between">
<span className="text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors select-none">03.</span>
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="leading-tight text-lg font-medium text-white">Eliminate<br/>Silos</h3>
</div>
</div>

<div className="md:col-span-1 min-h-[420px] flex flex-col group hover:bg-white/[0.05] transition-all duration-300 border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 justify-between">
<span className="text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors select-none">04.</span>
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white leading-tight">Scale with<br/>Clarity</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-black/40 relative overflow-hidden" id="process">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black/0 to-black/0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Setup in minutes, save hours weekly</h2>
<p className="text-lg text-gray-400 font-light">Transform your chaotic treasury operations into a streamlined, automated engine.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden min-h-[480px] flex flex-col">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="flex-1 relative flex items-center justify-center p-12">

<div className="absolute w-32 h-32 bg-orange-500/20 blur-[80px] rounded-full"></div>

<div className="relative w-full h-full flex items-center justify-center">
<div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)]">
<i className="w-8 h-8 text-white" data-lucide="wallet"></i>

<div className="absolute -right-16 -top-8 w-10 h-10 rounded-xl bg-[#151515] border border-white/5 flex items-center justify-center opacity-60 animate-[pulse_4s_infinite]">
<i className="w-4 h-4 text-gray-400" data-lucide="gem"></i>
</div>
<div className="absolute -left-12 -bottom-10 w-10 h-10 rounded-xl bg-[#151515] border border-white/5 flex items-center justify-center opacity-60">
<i className="w-4 h-4 text-gray-400" data-lucide="bitcoin"></i>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible -z-10 text-orange-500/30" height="200" width="200">
<path d="M60 20 L100 -20" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M10 50 L-30 80" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>

<div className="p-8 relative z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A] to-transparent pt-12">
<div className="flex items-center gap-3 mb-3">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/20">1</span>
<h3 className="text-xl font-medium text-white tracking-tight">Connect Wallets</h3>
</div>
<p className="text-base text-gray-500 leading-relaxed">
                        Link your Safe, Metamask, or cold storage instantly. We auto-sync your entire transaction history across all chains.
                    </p>
</div>
</div>

<div className="group relative rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden min-h-[480px] flex flex-col">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="flex-1 relative flex items-center justify-center p-8">

<div className="absolute w-40 h-40 bg-orange-600/10 blur-[60px] rounded-full"></div>

<div className="w-full max-w-[240px] flex flex-col gap-3 relative z-10">

<div className="flex items-center gap-3 self-start animate-[fade-in-up_1s_ease-out_forwards]">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-gray-500"></div>
</div>
<div className="px-4 py-2.5 rounded-2xl rounded-tl-sm bg-white/5 border border-white/5 text-xs text-gray-300 backdrop-blur-sm">
                                Set spending limit to 5 ETH
                            </div>
</div>

<div className="h-6 w-px bg-gradient-to-b from-white/10 to-orange-500/50 ml-4"></div>

<div className="self-start ml-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center gap-2 text-xs text-orange-200 shadow-[0_0_15px_-5px_rgba(249,115,22,0.4)]">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                            Rule Activated
                        </div>
</div>
</div>

<div className="p-8 relative z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A] to-transparent pt-12">
<div className="flex items-center gap-3 mb-3">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/20">2</span>
<h3 className="text-xl font-medium text-white tracking-tight">Define Rules</h3>
</div>
<p className="text-base text-gray-500 leading-relaxed">
                        Set granular spending limits, create approval workflows, and assign team roles without complex coding.
                    </p>
</div>
</div>

<div className="group relative rounded-[32px] bg-[#0A0A0A] border border-white/10 overflow-hidden min-h-[480px] flex flex-col">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="flex-1 relative flex items-center justify-center p-8">

<div className="absolute w-40 h-40 bg-orange-500/15 blur-[60px] rounded-full translate-y-10"></div>

<div className="relative w-full h-32 flex items-end justify-center px-4">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F97316" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#F97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" d="M0 50 C 20 50, 20 40, 40 30 C 60 20, 70 25, 100 5" fill="none" stroke="#F97316" strokeWidth="0.5"></path>
<path d="M0 50 C 20 50, 20 40, 40 30 C 60 20, 70 25, 100 5 L 100 50 L 0 50 Z" fill="url(#chartGradient)" opacity="0.2"></path>
</svg>

<div className="absolute top-0 right-4 px-4 py-3 rounded-lg bg-[#111] border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md transform transition-transform group-hover:-translate-y-2 duration-500">
<div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
</div>
<div>
<div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Report Generated</div>
<div className="text-xs text-white">Monthly_Payroll.pdf</div>
</div>
</div>
</div>
</div>

<div className="p-8 relative z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A] to-transparent pt-12">
<div className="flex items-center gap-3 mb-3">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/20">3</span>
<h3 className="text-xl font-medium text-white tracking-tight">Automate Ops</h3>
</div>
<p className="text-base text-gray-500 leading-relaxed">
                        Put your operations on autopilot. Run payroll, pay invoices, and generate monthly reports instantly.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium text-center text-white tracking-tight mb-6">Simple, transparent pricing</h2>
<p className="text-lg text-center text-gray-400 mb-20">Choose the plan that fits your treasury size.</p>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-gray-400 text-sm h-10">For small teams just getting started.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium text-white">$0</span>
<span className="text-gray-500">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Up to 2 Wallets</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Basic Reporting</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> 1 Team Member</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-center text-white font-medium transition-colors border border-white/10" href="#">Start Free</a>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.1)] relative flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<p className="text-gray-400 text-sm h-10">For funded startups scaling operations.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium text-white">$99</span>
<span className="text-gray-500">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Unlimited Wallets</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Advanced Analytics</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Up to 10 Team Members</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-center text-black font-medium transition-colors shadow-lg shadow-orange-500/20" href="#">Get Growth</a>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<p className="text-gray-400 text-sm h-10">Custom solutions for DAOs &amp; protocols.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> SSO &amp; Advanced Security</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Custom Integrations</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Dedicated Account Manager</li>
</ul>
<a className="block w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-center text-white font-medium transition-colors border border-white/10" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium text-white mb-8">Bank-grade security meets Web3 innovation</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-gray-500 mb-3" data-lucide="shield"></i>
<span className="text-sm text-gray-300">Non-custodial</span>
</div>
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-gray-500 mb-3" data-lucide="lock"></i>
<span className="text-sm text-gray-300">SOC2 Compliant</span>
</div>
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-gray-500 mb-3" data-lucide="eye-off"></i>
<span className="text-sm text-gray-300">Private by Design</span>
</div>
<div className="flex flex-col items-center">
<i className="w-8 h-8 text-gray-500 mb-3" data-lucide="file-check"></i>
<span className="text-sm text-gray-300">Audited Smart Contracts</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="layers"></i>
</div>
<span className="font-medium text-white">ChainDesk</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        The financial operating system for the next generation of internet organizations.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2024 ChainDesk Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
