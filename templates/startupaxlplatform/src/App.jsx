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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#020412',
surface: '#0B0E16',
surfaceHighlight: '#151923',
accent: '#6366f1', // Indigo-500ish
border: 'rgba(255, 255, 255, 0.08)',
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
      

<nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex cursor-pointer gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center rounded-lg text-white shadow-lg shadow-indigo-500/20">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="leading-none text-sm font-bold text-white tracking-tight cursor-pointer" onclick="window.location.href='https://staxlplat-landing.aura.build'" role="button">STARTUP<br className=""/>ACCELERATOR<br className=""/>PLATFORM</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Innovation Hub</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="/deal-room">Deal Room</a>
<a className="text-sm font-medium text-white relative" href="#">
                    Marketplace
                    <span className="absolute -bottom-[29px] left-0 w-full h-[2px] bg-indigo-500"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Regulatory</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-border">
<div className="text-right hidden sm:block">
<p className="leading-none text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-slate-500 mt-1">Orbit Financial</p>
</div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium ring-2 ring-surfaceHighlight">
                        SJ
                    </div>
</div>
</div>
</div>
</nav>

<main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div className="">
<div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-2">
<svg className="lucide lucide-package w-4 h-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="">Ecosystem Perks</span>
</div>
<h1 className="text-4xl text-white font-medium tracking-tight">Marketplace</h1>
<p className="text-lg text-slate-400 mt-2 max-w-2xl">
                    Essential products, toolkits, and services to simplify your operations.
                </p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:bg-surfaceHighlight text-white transition-all text-sm font-medium">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                    Partner Portal
                </button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black hover:bg-indigo-50 transition-all text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    AI Advisor
                </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
<div className="mb-3 flex items-center gap-2">
<svg className="lucide lucide-bot w-5 h-5 text-indigo-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<h3 className="text-white font-medium text-sm">AI Guided Advisor</h3>
</div>
<p className="text-slate-300 text-xs mb-4">Describe your business challenge to get tailored toolkit recommendations.</p>
<div className="relative">
<input className="w-full bg-background/50 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-colors" placeholder="e.g., I need to automate payroll..." type="text"/>
<button className="absolute right-1 top-1 p-1 text-indigo-400 hover:text-white">
<svg className="w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-medium text-base tracking-tight">My Stack</h3>
<span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">Active</span>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#FF9900] flex items-center justify-center text-white text-xs font-bold">aw</div>
<div>
<p className="text-white text-xs font-medium">AWS Activate</p>
<p className="text-slate-500 text-[10px]">Credits: $8,500 left</p>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#635BFF] flex items-center justify-center text-white text-xs font-bold">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="M8 12h8"></path></svg>
</div>
<div>
<p className="text-white text-xs font-medium">Stripe Atlas</p>
<p className="text-slate-500 text-[10px]">Active Plan</p>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>

<div className="flex items-center justify-between opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#E01E5A] flex items-center justify-center text-white text-xs font-bold">N</div>
<div>
<p className="text-white text-xs font-medium">Notion</p>
<p className="text-slate-500 text-[10px]">Expiring in 3d</p>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
</div>
</div>
<div className="mt-5 pt-5 border-t border-border">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-slate-400">Monthly Savings</span>
<span className="text-sm text-emerald-400 font-medium">$4,250</span>
</div>
<button className="w-full mt-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-colors">Manage Subscriptions</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-6">
<h3 className="text-white font-medium text-sm mb-4">Categories</h3>
<div className="space-y-1">
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-600 bg-transparent checked:bg-indigo-500 focus:ring-0 focus:ring-offset-0 accent-indigo-500" type="checkbox"/>
<span className="text-slate-400 text-sm group-hover:text-white">Cloud &amp; Hosting</span>
<span className="ml-auto text-xs text-slate-600">24</span>
</label>
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-600 bg-transparent checked:bg-indigo-500 focus:ring-0 focus:ring-offset-0 accent-indigo-500" type="checkbox"/>
<span className="text-slate-400 text-sm group-hover:text-white">Legal &amp; Compliance</span>
<span className="ml-auto text-xs text-slate-600">12</span>
</label>
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-600 bg-transparent checked:bg-indigo-500 focus:ring-0 focus:ring-offset-0 accent-indigo-500" type="checkbox"/>
<span className="text-slate-400 text-sm group-hover:text-white">Marketing &amp; Sales</span>
<span className="ml-auto text-xs text-slate-600">18</span>
</label>
<label className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-600 bg-transparent checked:bg-indigo-500 focus:ring-0 focus:ring-offset-0 accent-indigo-500" type="checkbox"/>
<span className="text-slate-400 text-sm group-hover:text-white">Finance &amp; HR</span>
<span className="ml-auto text-xs text-slate-600">9</span>
</label>
</div>
</div>

<div className="p-5 border border-dashed border-slate-700 rounded-xl bg-transparent text-center">
<h4 className="text-white text-sm font-medium mb-2">For Service Providers</h4>
<p className="text-slate-500 text-xs mb-4">Launch your offering to our ecosystem of 500+ startups.</p>
<button className="text-indigo-400 text-xs font-medium hover:text-indigo-300 flex items-center justify-center gap-1">
                        List your service <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</aside>

<div className="lg:col-span-9 space-y-8">

<div className="relative rounded-xl overflow-hidden border border-border">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-background z-0"></div>
<div className="relative z-10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="max-w-xl">
<span className="inline-block px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/30 mb-3">Featured Campaign</span>
<h2 className="text-2xl text-white font-bold mb-2">AWS Jumpstart for Fintech</h2>
<p className="text-slate-300 text-sm leading-relaxed">
                                Exclusive for accelerator cohort members: Get up to $100,000 in AWS credits and 1:1 technical mentorship for 6 months.
                            </p>
</div>
<button className="bg-white text-indigo-950 px-6 py-3 rounded-lg font-medium text-sm hover:bg-indigo-50 transition-colors shadow-lg whitespace-nowrap">
                            Claim Offer
                        </button>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4 border-b border-border">
<div className="relative w-full md:w-96">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-surface border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Search products, services, or toolkits..." type="text"/>
</div>
<div className="flex gap-2 w-full md:w-auto overflow-x-auto">
<button className="px-4 py-2 rounded-lg bg-white/5 text-white text-sm font-medium border border-white/10 whitespace-nowrap">All Offers</button>
<button className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium hover:bg-white/5 border border-transparent whitespace-nowrap">New Arrivals</button>
<button className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium hover:bg-white/5 border border-transparent whitespace-nowrap">Trending</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

<div className="bg-surface border border-border rounded-xl p-5 hover:border-indigo-500/30 transition-all group flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden p-1">

<svg className="w-8 h-8 text-black" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
</div>
<div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wide">Deal</div>
</div>
<div className="mb-4">
<h3 className="text-white font-medium text-lg">Google Cloud</h3>
<p className="text-slate-400 text-sm mt-1">Cloud Infrastructure</p>
</div>
<div className="bg-background/50 rounded-lg p-3 mb-4 border border-border border-dashed">
<p className="text-sm text-slate-300"><span className="text-white font-medium">$200,000</span> in credits for 2 years + technical support.</p>
</div>
<div className="mt-auto flex gap-3 pt-2">
<button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Get Deal</button>
<button className="p-2 border border-border rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-5 hover:border-indigo-500/30 transition-all group flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-[#5865F2] flex items-center justify-center text-white">
<svg className="lucide lucide-group" data-icon-replaced="true" data-icon-set="lucide" data-lucide="group" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5c0-1.1.9-2 2-2h2"></path><path d="M17 3h2c1.1 0 2 .9 2 2v2"></path><path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path><path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path><rect height="5" rx="1" width="7" x="7" y="7"></rect><rect height="5" rx="1" width="7" x="10" y="12"></rect></svg>
</div>
<div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wide">Toolkit</div>
</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white" style={{}}>Community Manager</h3>
<p className="text-slate-400 text-sm mt-1">Communication</p>
</div>
<div className="bg-background/50 rounded-lg p-3 mb-4 border border-border border-dashed">
<p className="text-sm text-slate-300">Setup guide + Bot templates to manage your startup community.</p>
</div>
<div className="mt-auto flex gap-3 pt-2">
<button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Install Kit</button>
<button className="p-2 border border-border rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-5 hover:border-indigo-500/30 transition-all group flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-slate-700">
<svg className="text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wide">Service</div>
</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Legal Consult</h3>
<p className="text-sm text-slate-400 mt-1">Legal &amp; IP</p>
</div>
<div className="bg-background/50 rounded-lg p-3 mb-4 border border-border border-dashed">
<p className="text-sm text-slate-300"><span className="text-white font-medium">15% Off</span> incorporation packages and trademark filing.</p>
</div>
<div className="mt-auto flex gap-3 pt-2">
<button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Get Deal</button>
<button className="p-2 border border-border rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-5 hover:border-indigo-500/30 transition-all group flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                                H
                            </div>
<div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wide">Deal</div>
</div>
<div className="mb-4">
<h3 className="text-white font-medium text-lg">HubSpot</h3>
<p className="text-slate-400 text-sm mt-1">CRM &amp; Sales</p>
</div>
<div className="bg-background/50 rounded-lg p-3 mb-4 border border-border border-dashed">
<p className="text-sm text-slate-300"><span className="text-white font-medium">90% Off</span> for the first year for eligible seed-stage startups.</p>
</div>
<div className="mt-auto flex gap-3 pt-2">
<button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Get Deal</button>
<button className="p-2 border border-border rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-5 hover:border-indigo-500/30 transition-all group flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
</div>
<div className="mb-4">
<h3 className="text-white font-medium text-lg">Zoom</h3>
<p className="text-slate-400 text-sm mt-1">Video Conferencing</p>
</div>
<div className="bg-background/50 rounded-lg p-3 mb-4 border border-border border-dashed">
<p className="text-sm text-slate-300"><span className="text-white font-medium">50% Off</span> annual Pro plans for up to 10 licenses.</p>
</div>
<div className="mt-auto flex gap-3 pt-2">
<button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Get Deal</button>
<button className="p-2 border border-border rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>

<div className="bg-surface border border-border rounded-xl p-5 hover:border-indigo-500/30 transition-all group flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-pink-600 flex items-center justify-center text-white font-bold text-lg">
                                D
                            </div>
<div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wide">Toolkit</div>
</div>
<div className="mb-4">
<h3 className="text-white font-medium text-lg">Design System Kit</h3>
<p className="text-slate-400 text-sm mt-1">Product Design</p>
</div>
<div className="bg-background/50 rounded-lg p-3 mb-4 border border-border border-dashed">
<p className="text-sm text-slate-300">Access to premium UI kits, Figma templates, and icon sets.</p>
</div>
<div className="mt-auto flex gap-3 pt-2">
<button className="flex-1 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Install Kit</button>
<button className="p-2 border border-border rounded-lg text-slate-400 hover:text-white hover:border-white/20 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-border mt-12 py-8 bg-surface">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-sm">© 2025 Startup Accelerator Platform. All rights reserved.</p>
<div className="flex gap-6 text-sm">
<a className="text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Help Center</a>
</div>
</div>
</footer>


    </>
  );
}
