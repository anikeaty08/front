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
      

<aside className="w-[250px] flex-shrink-0 border-r border-white/[0.04] bg-[#121214] hidden lg:flex flex-col relative z-10">

<div className="h-16 px-5 flex items-center gap-2.5 border-b border-transparent">
<div className="w-6 h-6 bg-white rounded-[6px] flex items-center justify-center">
<iconify-icon className="text-black text-sm" icon="solar:globus-linear"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-zinc-100">AGENTS</span>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6">

<div>
<div className="bg-white/[0.02] rounded-lg flex items-center px-3 py-2 gap-2 border border-white/[0.04] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] focus-within:border-white/10 focus-within:bg-white/[0.04] transition-all">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-zinc-200 placeholder-zinc-500 w-full font-normal" placeholder="Search deployments..." type="text"/>
</div>
</div>

<nav className="space-y-0.5">
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-100 bg-white/[0.04] text-sm font-medium transition-all" href="#">
<iconify-icon className="text-base" icon="solar:widget-5-linear"></iconify-icon> Base Dashboard
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:pulse-linear"></iconify-icon> Diagnostics
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:server-square-linear"></iconify-icon> Execution Actions
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:branching-paths-linear"></iconify-icon> Routings
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:code-square-linear"></iconify-icon> Programming
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:chat-square-linear"></iconify-icon> Spoolings
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:refresh-circle-linear"></iconify-icon> Environments
                </a>
</nav>

<nav className="space-y-0.5 pt-4 border-t border-white/[0.04]">
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:cart-large-minimalistic-linear"></iconify-icon> Shop
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:pie-chart-2-linear"></iconify-icon> Appendages
                </a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.02] text-sm font-normal transition-all" href="#">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon> Systematics
                </a>
</nav>
</div>

<div className="p-4 border-t border-white/[0.04]">
<div className="flex items-center gap-3 px-2">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-200 truncate">Admin Workspace</div>
<div className="text-xs font-light text-zinc-500 truncate">Pro Plan</div>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-up-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 relative">

<header className="h-16 flex items-center justify-between px-8 border-b border-white/[0.04] bg-[#0E0E11]/80 backdrop-blur-md sticky top-0 z-20">
<h1 className="text-lg font-medium tracking-tight text-zinc-100">Overview</h1>
<div className="flex items-center gap-3">

<div className="hidden sm:flex items-center gap-2 bg-white/[0.02] rounded-full px-3 py-1 border border-white/[0.04]">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs font-normal text-zinc-400">System Normal</span>
</div>
<div className="w-px h-4 bg-white/[0.08] mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] transition-all">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] transition-all">
<iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-[#121214] rounded-xl p-5 border border-white/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-normal text-zinc-400">Readiness</span>
<iconify-icon className="text-emerald-500 text-base" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-100 mb-1 leading-none">91.4%</div>
<div className="flex items-center gap-1.5 text-xs font-normal text-zinc-500">
<span className="text-emerald-500 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.1%</span>
<span>A/B avg since 5285</span>
</div>
</div>
</div>

<div className="bg-[#121214] rounded-xl p-5 border border-white/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-normal text-zinc-400">Deployment Preparedness</span>
<iconify-icon className="text-blue-500 text-base" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-100 mb-1 leading-none">885</div>
<div className="flex items-center gap-1.5 text-xs font-normal text-zinc-500">
<span className="text-blue-500 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12</span>
<span>Avg target 2023</span>
</div>
</div>
</div>

<div className="bg-[#121214] rounded-xl p-5 border border-white/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-normal text-zinc-400">Usage Activity</span>
<iconify-icon className="text-purple-500 text-base" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-100 mb-1 leading-none">955%</div>
<div className="flex items-center gap-1.5 text-xs font-normal text-zinc-500">
<span className="text-purple-500 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 4.3%</span>
<span>F8C targets 2023</span>
</div>
</div>
</div>
</div>

<div className="bg-[#121214] rounded-xl border border-white/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden">
<div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-100 tracking-tight">Overall Pipeline Status</h2>
<button className="text-xs text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors">
                        View details <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="p-6 flex flex-col lg:flex-row items-center gap-10">

<div className="flex items-center gap-8 w-full lg:w-1/2">

<div className="relative w-28 h-28 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90">
<circle cx="56" cy="56" fill="none" r="48" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
<circle cx="56" cy="56" fill="none" r="48" stroke="#3b82f6" stroke-dasharray="301.59" stroke-dashoffset="30" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-medium tracking-tight text-zinc-100 leading-none mb-1">99.9</span>
<span className="text-xs text-zinc-500">Uptime</span>
</div>
</div>

<div className="flex-1 space-y-3">
<div className="flex justify-between items-end border-b border-white/[0.04] pb-2">
<span className="text-xs font-normal text-zinc-500">Deployments</span>
<span className="text-sm font-medium text-zinc-200">13%</span>
</div>
<div className="flex justify-between items-end border-b border-white/[0.04] pb-2">
<span className="text-xs font-normal text-zinc-500">Errors</span>
<span className="text-sm font-medium text-zinc-200">Started</span>
</div>
<div className="flex justify-between items-end border-b border-white/[0.04] pb-2">
<span className="text-xs font-normal text-zinc-500">Failures</span>
<span className="text-sm font-medium text-zinc-200">4.2s</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs font-normal text-zinc-500">System</span>
<span className="text-sm font-medium text-emerald-500">Operational</span>
</div>
</div>
</div>

<div className="hidden lg:block w-px h-24 bg-white/[0.06]"></div>

<div className="w-full lg:w-1/2">
<div className="text-xs font-normal text-zinc-500 mb-4">Network Latency (ms)</div>
<div className="space-y-4">

<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-400 w-12">US-East</span>
<div className="flex-1 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
<div className="h-full w-[35%] bg-blue-500 rounded-full"></div>
</div>
<span className="text-xs font-normal text-zinc-300 w-8 text-right">100</span>
</div>

<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-400 w-12">EU-West</span>
<div className="flex-1 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-amber-500 rounded-full"></div>
</div>
<span className="text-xs font-normal text-zinc-300 w-8 text-right">473</span>
</div>

<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-400 w-12">AP-South</span>
<div className="flex-1 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
<div className="h-full w-[45%] bg-emerald-500 rounded-full"></div>
</div>
<span className="text-xs font-normal text-zinc-300 w-8 text-right">188</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#121214] rounded-xl border border-white/[0.04] shadow-[0_1px_2px_rgba(0,0,0,0.2)] h-[320px] flex flex-col">
<div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-100 tracking-tight">Traffic Volume</h2>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.04] cursor-pointer hover:bg-white/[0.08]">1D</span>
<span className="text-xs px-2 py-1 rounded text-zinc-500 cursor-pointer hover:text-zinc-300">7D</span>
<span className="text-xs px-2 py-1 rounded text-zinc-500 cursor-pointer hover:text-zinc-300">1M</span>
</div>
</div>
<div className="flex-1 relative w-full p-6">

<div className="absolute left-6 top-6 bottom-8 w-6 flex flex-col justify-between text-[10px] text-zinc-500 font-normal">
<span>6k</span>
<span>4k</span>
<span>2k</span>
<span>0</span>
</div>

<div className="absolute left-14 right-6 top-7 bottom-9 flex flex-col justify-between">
<div className="w-full border-b border-white/[0.03] border-dashed"></div>
<div className="w-full border-b border-white/[0.03] border-dashed"></div>
<div className="w-full border-b border-white/[0.03] border-dashed"></div>
<div className="w-full border-b border-white/[0.03] border-dashed"></div>
</div>

<div className="absolute left-14 right-6 bottom-3 h-4 flex justify-between items-end text-[10px] text-zinc-500 font-normal">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>

<div className="absolute left-14 right-6 top-6 bottom-9">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0.2)"></stop>
<stop offset="100%" stop-color="rgba(59, 130, 246, 0)"></stop>
</lineargradient>
</defs>

<path d="M 0,80 L 16,50 L 33,60 L 50,20 L 66,40 L 83,10 L 100,30 L 100,100 L 0,100 Z" fill="url(#chartGradient)"></path>

<path d="M 0,80 L 16,50 L 33,60 L 50,20 L 66,40 L 83,10 L 100,30" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>
</main>

<aside className="w-[320px] flex-shrink-0 bg-[#121214] border-l border-white/[0.04] hidden xl:flex flex-col relative z-10">
<div className="h-16 px-6 flex items-center border-b border-white/[0.04]">
<h2 className="text-sm font-medium text-zinc-100 tracking-tight">Team Activity</h2>
</div>
<div className="flex-1 overflow-y-auto p-6">
<div className="relative">

<div className="absolute left-[15px] top-2 bottom-4 w-[1px] bg-white/[0.06]"></div>

<div className="mb-8">
<div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-5 bg-[#121214] inline-block relative z-10 pr-2">Today</div>
<div className="space-y-6">

<div className="relative pl-10">
<img alt="User" className="absolute left-0 top-0.5 w-8 h-8 rounded-full object-cover ring-[3px] ring-[#121214] z-10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<div>
<div className="text-sm text-zinc-200 font-medium">Atietana Dongn</div>
<div className="text-xs text-zinc-400 mt-0.5">Authenticated token auge 6v1</div>
<div className="flex items-center gap-1.5 mt-2 text-xs text-amber-500/90 font-medium bg-amber-500/10 w-max px-2 py-1 rounded border border-amber-500/20">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Phishing threat
                                </div>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-white/[0.05] ring-[3px] ring-[#121214] z-10 flex items-center justify-center text-zinc-400 border border-white/[0.08]">
<iconify-icon className="text-sm" icon="solar:branching-paths-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">System Merge</div>
<div className="text-xs text-zinc-400 mt-0.5">Automated push accepted</div>
<div className="text-[11px] text-zinc-500 mt-1">2 mins ago</div>
</div>
</div>
</div>
</div>

<div>
<div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-5 bg-[#121214] inline-block relative z-10 pr-2">Yesterday</div>
<div className="space-y-6">

<div className="relative pl-10">
<img alt="User" className="absolute left-0 top-0.5 w-8 h-8 rounded-full object-cover ring-[3px] ring-[#121214] z-10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3">
<div className="flex items-center justify-between mb-1">
<div className="text-sm text-zinc-100 font-medium">Limerontry So</div>
<iconify-icon className="text-zinc-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="text-xs text-zinc-400">Invited 3 new members to workspace</div>
<div className="text-[11px] text-zinc-500 mt-2">10:00 AM</div>
</div>
</div>

<div className="relative pl-10">
<img alt="User" className="absolute left-0 top-0.5 w-8 h-8 rounded-full object-cover ring-[3px] ring-[#121214] z-10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<div>
<div className="text-sm text-zinc-200 font-medium">Gornio Oumon</div>
<div className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5">
                                    Generated API key <iconify-icon className="text-zinc-500" icon="solar:key-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-emerald-500/10 ring-[3px] ring-[#121214] z-10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">Deployment Success</div>
<div className="text-xs text-zinc-400 mt-0.5">Production build completed</div>
</div>
</div>
</div>
</div>
</div>
</div>
</aside>

    </>
  );
}
