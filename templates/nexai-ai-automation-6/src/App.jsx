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



        // Initialize Lucide icons with custom settings
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<svg className="lucide lucide-zap w-5 h-5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Nexai</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors font-geist" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Solutions</a>
<a className="text-sm font-medium hover:text-white transition-colors font-geist" href="#workflow" style={{transition: 'outline 0.1s ease-in-out'}}>Workflow</a>
<a className="text-sm font-medium hover:text-white transition-colors font-geist" href="#results" style={{transition: 'outline 0.1s ease-in-out'}}>Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Log in</a>
<a className="px-5 py-2 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 text-sm font-medium text-white transition-all duration-300 font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Book Demo
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-40 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
<div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
<h1 className="md:text-7xl leading-[1.1] text-5xl text-white mb-8 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>Take Control of Your <br className=""/> <span className="bg-clip-text font-semibold text-transparent font-geist bg-gradient-to-r from-emerald-400 to-teal-200" style={{transition: 'outline 0.1s ease-in-out'}}>Business Intelligence</span></h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Deploy autonomous AI agents to handle complex workflows. Instant deployment, optimized efficiency, and premium reliability for scaling enterprises.
            </p>
<div className="flex flex-col items-center gap-6">

<button className="shiny-cta">
<span className="font-geist">
                        Start Automating
                        <svg className="lucide lucide-arrow-up-right ml-1" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</button>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2">
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Trusted by 500+ innovators</span>
<div className="flex gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-white text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-white text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-white text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-white text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-white text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-4 mt-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent z-20"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10 group">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0F1012]">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-[1px] bg-white/10 mx-2"></div>
<span className="text-xs font-medium text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Mission Control / Agents</span>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-mic w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
<svg className="lucide lucide-search w-3 h-3 text-zinc-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs text-zinc-500 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Search agents...</span>
</div>
</div>
</div>

<div className="flex h-[500px]">

<div className="w-64 hidden md:flex flex-col border-r border-white/5 bg-[#0a0a0a] p-4 gap-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white cursor-pointer">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-sm font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-sm font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Active Agents</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="text-sm font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Analytics</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Settings</span>
</div>
<div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-emerald-900/20 to-transparent border border-emerald-500/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-emerald-400 font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>System Status</span>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</div>
<div className="text-xs text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>All systems operational</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-[#0C0C0C] relative">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

<div className="lg:col-span-2 flex flex-col gap-6">
<div className="bg-[#111] rounded-xl border border-white/5 p-6 flex-1 flex flex-col justify-between group/card hover:border-white/10 transition-colors">
<div className="flex justify-between items-start">
<div>
<p className="text-zinc-500 text-sm mb-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Total Savings</p>
<h3 className="text-3xl text-white font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>$24,193.05 <span className="text-emerald-400 text-sm font-normal ml-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>+12.5%</span></h3>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 rounded-full bg-white/5 text-xs text-white border border-white/5 hover:bg-white/10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>1D</button>
<button className="px-3 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-400 border border-emerald-500/20 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>7D</button>
<button className="px-3 py-1 rounded-full bg-white/5 text-xs text-white border border-white/5 hover:bg-white/10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>1M</button>
</div>
</div>

<div className="h-48 w-full mt-8 relative">

<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent clip-path-chart"></div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 80 C 20 70, 30 90, 40 60 S 60 40, 80 50 S 100 20, 100 20" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="animate-pulse" cx="100" cy="20" fill="#10b981" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="3;6;3"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>
</svg>

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-[1px] bg-white/5"></div>
<div className="w-full h-[1px] bg-white/5"></div>
<div className="w-full h-[1px] bg-white/5"></div>
<div className="w-full h-[1px] bg-white/5"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#111] rounded-xl border border-white/5 p-5 hover:border-white/10 transition-colors">
<h4 className="text-sm text-zinc-400 mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Agent Performance</h4>
<div className="space-y-4">
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Data Scraper</span>
<span className="text-xs text-emerald-400 flex items-center gap-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-arrow-up w-3 h-3" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg> 98%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Email Outreach</span>
<span className="text-xs text-emerald-400 flex items-center gap-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-arrow-up w-3 h-3" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg> 84%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full w-[84%]"></div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between group/link cursor-pointer">
<span className="text-xs text-zinc-500 group-hover/link:text-white transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>View details</span>
<svg className="lucide lucide-chevron-right w-3 h-3 text-zinc-500 group-hover/link:text-white transition-colors" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="bg-[#111] rounded-xl border border-white/5 p-5 flex-1 hover:border-white/10 transition-colors relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full"></div>
<h4 className="text-sm text-zinc-400 mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Automation Confidence</h4>
<div className="flex justify-between items-end mb-2">
<span className="text-2xl text-white font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>High</span>
<span className="text-sm text-emerald-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>92%</span>
</div>

<div className="relative w-full h-2 bg-zinc-800 rounded-full mt-4">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full w-[92%]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[92%] w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<p className="text-xs text-zinc-600 mt-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Threshold for autonomous execution without human review.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl text-white mb-4 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>Complete Automation Suite</h2>
<p className="text-lg text-zinc-400 max-w-lg font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Powerful tools designed to replace repetitive tasks with intelligent, learning agents.</p>
</div>
<a className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                    View all capabilities <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-[#0F1012] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-brain-circuit w-6 h-6 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Cognitive Processing</h3>
<p className="text-zinc-400 leading-relaxed font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Agents that understand context, sentiment, and nuance, allowing for complex decision making without supervision.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#0F1012] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-share-2 w-6 h-6 text-white" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Workflow Integration</h3>
<p className="text-zinc-400 leading-relaxed font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Seamlessly connects with Slack, Jira, Salesforce, and 5000+ other tools via native API integrations.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#0F1012] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-shield-check w-6 h-6 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Enterprise Security</h3>
<p className="text-zinc-400 leading-relaxed font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>SOC2 compliant data handling with end-to-end encryption and granular permission controls.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl text-white mb-4 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>Effortless Deployment</h2>
<p className="text-lg text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Go from manual to autonomous in three simple steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#0F1012] border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative group">
<span className="text-2xl text-white group-hover:text-emerald-400 transition-colors font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>01</span>
<div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/50 rounded-full transition-all duration-500 scale-110"></div>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Connect Sources</h3>
<p className="text-zinc-400 font-light max-w-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Link your existing data lakes and communication channels securely.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#0F1012] border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative group">
<span className="text-2xl text-white group-hover:text-emerald-400 transition-colors font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>02</span>
<div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/50 rounded-full transition-all duration-500 scale-110"></div>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Configure Agents</h3>
<p className="text-zinc-400 font-light max-w-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Set objectives and guardrails using our natural language interface.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#0F1012] border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative group">
<span className="text-2xl text-white group-hover:text-emerald-400 transition-colors font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>03</span>
<div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/50 rounded-full transition-all duration-500 scale-110"></div>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Watch It Scale</h3>
<p className="text-zinc-400 font-light max-w-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Monitor performance as AI handles thousands of tasks simultaneously.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[#050505]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px]"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-3xl bg-[#0F1012] border border-white/5 p-12 overflow-hidden">

<div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-emerald-500/50 to-transparent"></div>
<div>
<h2 className="text-4xl md:text-5xl text-white mb-6 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>Ready to upgrade your infrastructure?</h2>
<p className="text-lg text-zinc-400 mb-8 font-light font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Join forward-thinking companies saving an average of 40 hours per week per employee.</p>
<div className="flex gap-4">
<button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Get Started
                        </button>
<button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Contact Sales
                        </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-black/40 p-6 rounded-2xl border border-white/5">
<div className="text-4xl text-emerald-400 mb-1 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>10x</div>
<div className="text-sm text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>ROI in 30 days</div>
</div>
<div className="bg-black/40 p-6 rounded-2xl border border-white/5">
<div className="text-4xl text-emerald-400 mb-1 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>24/7</div>
<div className="text-sm text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Uptime operation</div>
</div>
<div className="bg-black/40 p-6 rounded-2xl border border-white/5">
<div className="text-4xl text-emerald-400 mb-1 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>0.1s</div>
<div className="text-sm text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Latency speed</div>
</div>
<div className="bg-black/40 p-6 rounded-2xl border border-white/5">
<div className="text-4xl text-emerald-400 mb-1 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>100%</div>
<div className="text-sm text-zinc-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Data encryption</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-black">
<svg className="lucide lucide-zap w-4 h-4 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-medium text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Nexai</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Building the intelligent infrastructure for the next generation of business.</p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="text-white font-medium mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Features</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Integrations</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>About</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>© 2024 Nexai Inc. All rights reserved.</p>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-github w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 text-zinc-500 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
