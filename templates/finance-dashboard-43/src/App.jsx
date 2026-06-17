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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#2C1F8C',
sidebar: '#0A033B',
bg: '#F7F8FA',
text: {
dark: '#111827',
medium: '#6B7280',
}
},
boxShadow: {
'card': '0 1px 3px rgba(0, 0, 0, 0.05)',
'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
}
}
}
}



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
      

<aside className="w-[260px] bg-sidebar flex-shrink-0 flex flex-col h-full text-white/80 border-r border-white/5 relative z-20">

<div className="px-6 pt-8 pb-8">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-lg bg-indigo-500 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight">Syncgram</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 space-y-8 no-scrollbar">

<div>
<div className="px-3 text-xs font-medium text-[#7A78A6] tracking-wider mb-3">GENERAL</div>
<nav className="space-y-1">

<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-white/10 text-white relative group" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-400 rounded-r-full"></div>
<i className="w-5 h-5 text-indigo-200" data-lucide="layout-dashboard"></i>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors group text-gray-400" href="#">
<i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="users"></i>
                        Subscribers
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors group text-gray-400" href="#">
<i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="clipboard-list"></i>
                        Waitlists
                    </a>
</nav>
</div>

<div>
<div className="px-3 text-xs font-medium text-[#7A78A6] tracking-wider mb-3">MONETIZATION</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors group text-gray-400" href="#">
<i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="credit-card"></i>
                        Subscription Plans
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors group text-gray-400" href="#">
<i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="wallet"></i>
                        Financials
                    </a>
</nav>
</div>

<div>
<div className="px-3 text-xs font-medium text-[#7A78A6] tracking-wider mb-3">PROFILE &amp; SETTINGS</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors group text-gray-400" href="#">
<i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="user"></i>
                        Account Settings
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors group text-gray-400" href="#">
<i className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="headphones"></i>
                        Contact Support
                    </a>
</nav>
</div>
</div>

<div className="p-4 mt-auto">
<div className="bg-white rounded-xl p-5 shadow-lg relative overflow-hidden group">
<h3 className="text-text-dark font-semibold text-sm relative z-10 mb-1">Upgrade to Pro</h3>
<p className="text-text-medium text-xs relative z-10 mb-4 leading-relaxed">Unlock premium features and advanced tools with Pro.</p>
<button className="w-full h-9 bg-sidebar hover:bg-[#1a0f5c] text-white text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors relative z-10">
                    Upgrade to Pro
                    <i className="w-3 h-3" data-lucide="external-link"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto relative bg-white">

<header className="sticky top-0 bg-white z-30 px-10 py-5 border-b border-gray-100">
<div className="max-w-[1200px] mx-auto flex items-center justify-between">
<h1 className="text-xl font-semibold text-text-dark tracking-tight">Dashboard</h1>
<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-8 h-8 rounded-full shadow-sm object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="text-right">
<div className="text-sm font-medium text-text-dark leading-none mb-1">Omotola Joseph</div>
<div className="text-xs text-blue-600 font-medium text-left">Free user</div>
</div>
</div>
</div>
</div>
</header>
<div className="max-w-[1200px] mx-auto px-10 py-10 pb-20">

<div className="mb-8">
<h2 className="text-2xl font-semibold text-text-dark tracking-tight flex items-center gap-2">
                    Good Evening Joseph <span className="text-2xl">🌟</span>
</h2>
</div>

<section className="mb-10">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
<div>
<div className="text-sm font-medium text-text-medium mb-1">Total Balance</div>
<div className="flex items-center gap-3">
<span className="text-5xl font-semibold text-sidebar tracking-tight">$12,500</span>
<button className="text-gray-400 hover:text-sidebar transition-colors">
<i className="w-5 h-5" data-lucide="eye"></i>
</button>
<button className="text-gray-400 hover:text-sidebar transition-colors">
<i className="w-4 h-4" data-lucide="info"></i>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-6 rounded-lg bg-sidebar text-white text-sm font-medium hover:bg-[#1a0f5c] transition-colors shadow-sm">
                            Withdraw
                        </button>
<button className="h-10 px-6 rounded-lg bg-[#F5F4FA] text-sidebar text-sm font-medium hover:bg-[#ebe9f5] transition-colors">
                            Access Code
                        </button>
</div>
</div>
</section>

<section className="mb-8">
<div className="bg-white rounded-xl border border-gray-200 shadow-card">

<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<h3 className="text-lg font-semibold text-text-dark tracking-tight">Quick Stats</h3>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 text-sm text-text-medium hover:bg-gray-50 transition-colors bg-white">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="font-medium">Oct 18 - Nov 18</span>
<span className="text-gray-400 mx-1">•</span>
<span className="font-medium">Monthly</span>
<i className="w-3.5 h-3.5 ml-1 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3">

<div className="p-6 md:border-r border-gray-100">
<div className="text-sm font-medium text-text-medium mb-2">Total Subscribers</div>
<div className="text-3xl font-semibold text-sidebar tracking-tight">2,034</div>
</div>

<div className="p-6 md:border-r border-gray-100">
<div className="text-sm font-medium text-text-medium mb-2">Revenue</div>
<div className="text-3xl font-semibold text-sidebar tracking-tight">$5,000.32</div>
</div>

<div className="p-6">
<div className="text-sm font-medium text-text-medium mb-2">Total Transactions</div>
<div className="text-3xl font-semibold text-sidebar tracking-tight">10,243</div>
</div>
</div>
</div>
</section>

<section>
<div className="bg-white rounded-xl border border-gray-200 shadow-card p-6">

<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-semibold text-text-dark tracking-tight">Recent Trends</h3>
<div className="flex items-center gap-3">
<div className="relative">
<select className="appearance-none h-9 pl-3 pr-9 rounded-md border border-gray-200 text-sm font-medium text-text-dark bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-sidebar/10 cursor-pointer">
<option>2025</option>
<option>2024</option>
</select>
<i className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<button className="h-9 px-4 rounded-md bg-sidebar text-white text-sm font-medium hover:bg-[#1a0f5c] transition-colors shadow-sm">
                                Export Data
                            </button>
</div>
</div>

<div className="w-full h-[320px] relative">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 font-medium z-10 pointer-events-none h-[280px]">
<div className="flex w-full items-center"><span className="w-10">10000</span><div className="w-full h-px bg-gray-100/50 ml-3"></div></div>
<div className="flex w-full items-center"><span className="w-10">8000</span><div className="w-full h-px bg-gray-100/50 ml-3"></div></div>
<div className="flex w-full items-center"><span className="w-10">6000</span><div className="w-full h-px bg-gray-100/50 ml-3"></div></div>
<div className="flex w-full items-center"><span className="w-10">4000</span><div className="w-full h-px bg-gray-100/50 ml-3"></div></div>
</div>

<svg className="absolute inset-0 w-full h-[320px] pl-12 overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2C1F8C" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#2C1F8C" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,280 L50,250 L100,260 L150,220 L200,160 L250,240 L300,260 L350,240 L400,260 L450,220 L500,240 L550,210 L600,230 L650,270 L700,240 L750,180 L800,220 L850,240 L900,220 L950,230 L1000,210 L1050,220 L1050,280 L0,280 Z" fill="url(#chartGradient)"></path>

<path d="M0,280 L50,250 L100,260 L150,220 L200,160 L250,240 L300,260 L350,240 L400,260 L450,220 L500,240 L550,210 L600,230 L650,270 L700,240 L750,180 L800,220 L850,240 L900,220 L950,230 L1000,210 L1050,220" fill="none" stroke="#0A033B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
