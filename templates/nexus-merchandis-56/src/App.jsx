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
      

<aside className="w-[4rem] lg:w-[15rem] flex-shrink-0 flex flex-col border-r border-[hsl(var(--border-subtle))] glass-tier-2 transition-all duration-300 z-30 relative">

<div className="h-14 flex items-center justify-between px-4 border-b border-transparent">
<div className="hidden lg:flex items-center gap-2 text-lg font-medium tracking-tighter">
<div className="w-6 h-6 rounded bg-[hsl(var(--foreground))] flex items-center justify-center">
<span className="text-[hsl(var(--background))] text-xs font-semibold">N</span>
</div>
                NEXUS
            </div>
<div className="lg:hidden w-8 h-8 mx-auto rounded bg-[hsl(var(--foreground))] flex items-center justify-center">
<span className="text-[hsl(var(--background))] text-xs font-semibold">N</span>
</div>
<button className="hidden lg:flex items-center justify-center w-6 h-6 rounded-md hover:bg-[hsl(var(--surface-2))] text-[hsl(var(--foreground-muted))] transition-colors">
<iconify-icon className="text-sm" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">

<button className="relative w-full flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-md text-sm font-medium text-[hsl(var(--foreground))] bg-[hsl(var(--surface-2))] transition-all group">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[hsl(var(--foreground))] rounded-r-md"></div>
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Command Center</span>
</button>
<button className="w-full flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-md text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-2))] transition-all">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Orders</span>
<span className="hidden lg:flex ml-auto text-[0.65rem] font-medium px-1.5 py-0.5 rounded-sm bg-[hsl(var(--surface-3))] text-[hsl(var(--foreground-subtle))]">148</span>
</button>
<button className="w-full flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-md text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-2))] transition-all">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">TNA Calendar</span>
</button>
<button className="w-full flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-md text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-2))] transition-all">
<iconify-icon className="text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Vendors</span>
</button>
<div className="my-2 border-t border-[hsl(var(--border-subtle))] mx-3"></div>
<button className="w-full flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-md text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-2))] transition-all">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Reports</span>
</button>
</div>

<div className="p-3 border-t border-[hsl(var(--border-subtle))]">
<button className="w-full flex items-center justify-center lg:justify-start gap-3 p-1.5 rounded-md hover:bg-[hsl(var(--surface-2))] transition-colors">
<div className="w-7 h-7 rounded-full bg-[hsl(var(--surface-3))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div className="hidden lg:flex flex-col items-start min-w-0">
<span className="text-xs font-medium text-[hsl(var(--foreground))] truncate">Sarah Jenkins</span>
<span className="text-[0.65rem] text-[hsl(var(--foreground-muted))] truncate">Head of Sourcing</span>
</div>
<iconify-icon className="hidden lg:block ml-auto text-xs text-[hsl(var(--foreground-muted))]" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 bg-transparent">

<header className="h-14 flex-shrink-0 flex items-center justify-between px-6 border-b border-[hsl(var(--border-subtle))] glass-tier-2 z-40 sticky top-0">
<div className="flex items-center gap-2 text-sm text-[hsl(var(--foreground-muted))]">
<span className="hover:text-[hsl(var(--foreground))] cursor-pointer transition-colors">Dashboard</span>
<span className="text-[hsl(var(--border))]">/</span>
<span className="text-[hsl(var(--foreground))] font-medium">Command Center</span>
</div>
<div className="flex items-center gap-4">

<button className="hidden md:flex items-center gap-2 px-3 py-1.5 h-8 w-[15rem] bg-[hsl(var(--surface-1))] border border-[hsl(var(--border))] rounded-md text-xs text-[hsl(var(--foreground-muted))] hover:border-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--foreground))] transition-colors text-left group">
<iconify-icon className="text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="flex-1">Search orders, vendors...</span>
<kbd className="hidden lg:inline-flex items-center px-1.5 h-5 rounded-[4px] bg-[hsl(var(--surface-3))] text-[0.65rem] font-sans font-medium text-[hsl(var(--foreground-subtle))] border border-[hsl(var(--border-subtle))]">⌘K</kbd>
</button>

<div className="flex items-center gap-1 border-l border-[hsl(var(--border-subtle))] pl-4">
<button className="relative w-8 h-8 flex items-center justify-center rounded-md text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--foreground))] transition-colors">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[hsl(var(--status-delayed))] rounded-full ring-2 ring-[hsl(var(--surface-1))]"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--foreground))] transition-colors">
<iconify-icon className="text-lg" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<main className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-[72rem] mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl tracking-tighter font-medium text-[hsl(var(--foreground))]">Command Center</h1>
<p className="text-sm text-[hsl(var(--foreground-subtle))] mt-1">Real-time merchandising operations overview.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 h-8 flex items-center gap-2 rounded-md text-xs font-medium bg-[hsl(var(--surface-2))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--surface-3))] transition-colors">
<iconify-icon icon="solar:import-linear"></iconify-icon> Import CSV
                            </button>
<button className="px-3 py-1.5 h-8 flex items-center gap-2 rounded-md text-xs font-medium bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon> Add Order
                            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-tier-1 p-4 relative group hover:-translate-y-0.5 transition-transform duration-200">
<div className="flex justify-between items-start mb-3">
<span className="text-label text-[hsl(var(--foreground-muted))]">Total Orders</span>
<div className="p-1.5 rounded-md bg-[hsl(var(--surface-2))] border border-[hsl(var(--border-subtle))]">
<iconify-icon className="text-[hsl(var(--foreground-muted))]" icon="solar:box-linear"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between">
<div className="text-3xl tracking-tighter font-medium">148</div>
<div className="flex items-center gap-1 text-[0.6875rem] font-medium text-[hsl(var(--status-completed))] bg-[hsl(var(--status-completed-bg))] px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12
                                </div>
</div>
</div>

<div className="glass-tier-1 p-4 relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-200 lg:scale-[1.02] z-10 before:absolute before:inset-0 before:border-2 before:border-[hsl(var(--status-delayed)/0.2)] before:rounded-[inherit] before:animate-pulse">
<div className="absolute left-0 top-0 w-[3px] h-full bg-[hsl(var(--status-delayed))]"></div>
<div className="flex justify-between items-start mb-3 pl-1">
<span className="text-label text-[hsl(var(--foreground-muted))]">Delayed</span>
<div className="p-1.5 rounded-md bg-[hsl(var(--status-delayed-bg))]">
<iconify-icon className="text-[hsl(var(--status-delayed))]" icon="solar:danger-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between pl-1">
<div className="text-3xl tracking-tighter font-medium text-[hsl(var(--foreground))]">23</div>
<div className="flex items-center gap-1 text-[0.6875rem] font-medium text-[hsl(var(--status-delayed))] bg-[hsl(var(--status-delayed-bg))] px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 5
                                </div>
</div>

<svg className="absolute bottom-4 right-4 w-12 h-6 opacity-40" fill="none" stroke="hsl(var(--status-delayed))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 48 24">
<polyline points="0,20 10,18 20,22 30,12 40,15 48,4"></polyline>
</svg>
</div>

<div className="glass-tier-1 p-4 relative group hover:-translate-y-0.5 transition-transform duration-200">
<div className="absolute left-0 top-0 w-[3px] h-full bg-[hsl(var(--status-at-risk))] opacity-50"></div>
<div className="flex justify-between items-start mb-3 pl-1">
<span className="text-label text-[hsl(var(--foreground-muted))]">At Risk</span>
<div className="p-1.5 rounded-md bg-[hsl(var(--surface-2))] border border-[hsl(var(--border-subtle))]">
<iconify-icon className="text-[hsl(var(--foreground-muted))]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between pl-1">
<div className="text-3xl tracking-tighter font-medium text-[hsl(var(--foreground))]">31</div>
<div className="flex items-center gap-1 text-[0.6875rem] font-medium text-[hsl(var(--status-at-risk))] bg-[hsl(var(--status-at-risk-bg))] px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 3
                                </div>
</div>
</div>

<div className="glass-tier-1 p-4 relative group hover:-translate-y-0.5 transition-transform duration-200">
<div className="absolute left-0 top-0 w-[3px] h-full bg-[hsl(var(--status-on-track))] opacity-50"></div>
<div className="flex justify-between items-start mb-3 pl-1">
<span className="text-label text-[hsl(var(--foreground-muted))]">On Track</span>
<div className="p-1.5 rounded-md bg-[hsl(var(--surface-2))] border border-[hsl(var(--border-subtle))]">
<iconify-icon className="text-[hsl(var(--foreground-muted))]" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between pl-1">
<div className="text-3xl tracking-tighter font-medium text-[hsl(var(--foreground))]">94</div>
<div className="flex items-center gap-1 text-[0.6875rem] font-medium text-[hsl(var(--foreground-muted))] bg-[hsl(var(--surface-2))] px-1.5 py-0.5 rounded border border-[hsl(var(--border))]">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 8
                                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-[hsl(var(--foreground))]">Orders Requiring Attention</h2>
<button className="text-xs font-medium text-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--foreground))] transition-colors flex items-center gap-1">
                                    View all <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="glass-tier-1 overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-[hsl(var(--border))]">
<th className="w-10 px-4 py-3">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-[hsl(var(--border))] rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-[hsl(var(--background))] text-xs opacity-0 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</th>
<th className="px-4 py-3 text-xs font-medium text-[hsl(var(--foreground-muted))] uppercase tracking-wider">Order ID</th>
<th className="px-4 py-3 text-xs font-medium text-[hsl(var(--foreground-muted))] uppercase tracking-wider">Buyer</th>
<th className="px-4 py-3 text-xs font-medium text-[hsl(var(--foreground-muted))] uppercase tracking-wider">Product / Stage</th>
<th className="px-4 py-3 text-xs font-medium text-[hsl(var(--foreground-muted))] uppercase tracking-wider">TNA Progress</th>
<th className="px-4 py-3 text-xs font-medium text-[hsl(var(--foreground-muted))] uppercase tracking-wider text-right">ETA</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-[hsl(var(--border-subtle))] hover:bg-[hsl(var(--surface-1))] transition-colors group cursor-pointer">
<td className="px-4 py-3">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-[hsl(var(--border))] rounded group-hover:border-[hsl(var(--foreground-subtle))] flex items-center justify-center transition-colors">
<iconify-icon className="text-[hsl(var(--background))] text-xs opacity-0 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="px-4 py-3 font-mono text-xs text-[hsl(var(--foreground-muted))] group-hover:text-[hsl(var(--foreground))] transition-colors">ORD-2847</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center text-[0.65rem] font-medium border border-[hsl(var(--border))]">ZA</div>
<span>Zara UK</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex flex-col gap-1">
<span className="text-[hsl(var(--foreground))] truncate max-w-[12rem]">Linen Overshirt SS25</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded w-fit text-[0.65rem] font-medium bg-[hsl(var(--status-delayed-bg))] text-[hsl(var(--status-delayed))] border border-[hsl(var(--status-delayed))/0.2]">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> Sampling
                                                    </span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-[hsl(var(--surface-3))] rounded-full overflow-hidden">
<div className="h-full bg-[hsl(var(--status-delayed))] w-[22%]"></div>
</div>
<span className="text-xs text-[hsl(var(--foreground-muted))] w-6 text-right">22%</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center justify-end gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-[hsl(var(--status-delayed-bg))] text-[hsl(var(--status-delayed))] border border-[hsl(var(--status-delayed))/0.2]">
                                                    -4d <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--status-delayed))] animate-pulse"></span>
</span>
</td>
</tr>

<tr className="border-b border-[hsl(var(--border-subtle))] hover:bg-[hsl(var(--surface-1))] transition-colors group cursor-pointer">
<td className="px-4 py-3">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-[hsl(var(--border))] rounded group-hover:border-[hsl(var(--foreground-subtle))] flex items-center justify-center transition-colors">
<iconify-icon className="text-[hsl(var(--background))] text-xs opacity-0 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="px-4 py-3 font-mono text-xs text-[hsl(var(--foreground-muted))] group-hover:text-[hsl(var(--foreground))] transition-colors">ORD-2901</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center text-[0.65rem] font-medium border border-[hsl(var(--border))]">HM</div>
<span>H&amp;M EU</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex flex-col gap-1">
<span className="text-[hsl(var(--foreground))] truncate max-w-[12rem]">Jersey Polo 3-Pack</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded w-fit text-[0.65rem] font-medium bg-[hsl(var(--status-at-risk-bg))] text-[hsl(var(--status-at-risk))] border border-[hsl(var(--status-at-risk))/0.2]">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Production
                                                    </span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-[hsl(var(--surface-3))] rounded-full overflow-hidden">
<div className="h-full bg-[hsl(var(--status-at-risk))] w-[61%]"></div>
</div>
<span className="text-xs text-[hsl(var(--foreground-muted))] w-6 text-right">61%</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center justify-end gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-[hsl(var(--status-at-risk-bg))] text-[hsl(var(--status-at-risk))] border border-[hsl(var(--status-at-risk))/0.2]">
                                                    2d <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--status-at-risk))] animate-pulse"></span>
</span>
</td>
</tr>

<tr className="hover:bg-[hsl(var(--surface-1))] transition-colors group cursor-pointer">
<td className="px-4 py-3">
<label className="custom-checkbox relative flex items-center justify-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-[hsl(var(--border))] rounded group-hover:border-[hsl(var(--foreground-subtle))] flex items-center justify-center transition-colors">
<iconify-icon className="text-[hsl(var(--background))] text-xs opacity-0 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
</td>
<td className="px-4 py-3 font-mono text-xs text-[hsl(var(--foreground-muted))] group-hover:text-[hsl(var(--foreground))] transition-colors">ORD-2923</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center text-[0.65rem] font-medium border border-[hsl(var(--border))]">PR</div>
<span>Primark</span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex flex-col gap-1">
<span className="text-[hsl(var(--foreground))] truncate max-w-[12rem]">Organic Cotton Tee 6-Pack</span>
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded w-fit text-[0.65rem] font-medium bg-[hsl(var(--surface-2))] text-[hsl(var(--foreground-muted))] border border-[hsl(var(--border))]">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Production
                                                    </span>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-[hsl(var(--surface-3))] rounded-full overflow-hidden">
<div className="h-full bg-[hsl(var(--status-on-track))] w-[55%]"></div>
</div>
<span className="text-xs text-[hsl(var(--foreground-muted))] w-6 text-right">55%</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center justify-end gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-[hsl(var(--status-on-track-bg))] text-[hsl(var(--status-on-track))] border border-[hsl(var(--status-on-track))/0.2]">
                                                    +14d
                                                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="xl:col-span-4 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-[hsl(var(--foreground))]">Active Alerts</h2>
<span className="px-1.5 py-0.5 rounded-full bg-[hsl(var(--status-delayed-bg))] text-[hsl(var(--status-delayed))] text-[0.65rem] font-medium">3 New</span>
</div>
<div className="glass-tier-1 p-2 space-y-1">

<div className="flex gap-3 p-2.5 rounded-lg hover:bg-[hsl(var(--surface-2))] cursor-pointer group transition-all relative">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[hsl(var(--status-delayed-bg))] shrink-0 border border-[hsl(var(--status-delayed))/0.2]">
<iconify-icon className="text-[hsl(var(--status-delayed))] text-sm" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<p className="text-xs font-medium text-[hsl(var(--foreground))] truncate">Sample submission overdue by 4 days</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[0.65rem] text-[hsl(var(--foreground-muted))] font-mono">ORD-2847</span>
<span className="w-1 h-1 rounded-full bg-[hsl(var(--border))]"></span>
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">Zara UK</span>
</div>
</div>
<div className="flex items-center">
<button className="w-6 h-6 rounded-md flex items-center justify-center text-[hsl(var(--foreground-subtle))] opacity-0 group-hover:opacity-100 hover:bg-[hsl(var(--surface-3))] transition-all">
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="h-px w-[calc(100%-3.5rem)] ml-auto bg-[hsl(var(--border-subtle))]"></div>

<div className="flex gap-3 p-2.5 rounded-lg hover:bg-[hsl(var(--surface-2))] cursor-pointer group transition-all relative">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[hsl(var(--status-at-risk-bg))] shrink-0 border border-[hsl(var(--status-at-risk))/0.2]">
<iconify-icon className="text-[hsl(var(--status-at-risk))] text-sm" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<p className="text-xs font-medium text-[hsl(var(--foreground))] truncate">Vendor Apex Fabrics — 72h no update</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[0.65rem] text-[hsl(var(--foreground-muted))] font-mono">ORD-2901</span>
<span className="w-1 h-1 rounded-full bg-[hsl(var(--border))]"></span>
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">H&amp;M EU</span>
</div>
</div>
<div className="flex items-center">
<button className="w-6 h-6 rounded-md flex items-center justify-center text-[hsl(var(--foreground-subtle))] opacity-0 group-hover:opacity-100 hover:bg-[hsl(var(--surface-3))] transition-all">
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="h-px w-[calc(100%-3.5rem)] ml-auto bg-[hsl(var(--border-subtle))]"></div>

<div className="flex gap-3 p-2.5 rounded-lg hover:bg-[hsl(var(--surface-2))] cursor-pointer group transition-all relative">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-[hsl(var(--status-at-risk-bg))] shrink-0 border border-[hsl(var(--status-at-risk))/0.2]">
<iconify-icon className="text-[hsl(var(--status-at-risk))] text-sm" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<p className="text-xs font-medium text-[hsl(var(--foreground))] truncate">Approval delay pushing shipment</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[0.65rem] text-[hsl(var(--foreground-muted))] font-mono">ORD-2799</span>
<span className="w-1 h-1 rounded-full bg-[hsl(var(--border))]"></span>
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">ASOS</span>
</div>
</div>
<div className="flex items-center">
<button className="w-6 h-6 rounded-md flex items-center justify-center text-[hsl(var(--foreground-subtle))] opacity-0 group-hover:opacity-100 hover:bg-[hsl(var(--surface-3))] transition-all">
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:flex w-[20rem] flex-shrink-0 border-l border-[hsl(var(--border-subtle))] glass-tier-2 flex-col z-20 shadow-[-8px_0_24px_rgba(0,0,0,0.2)]">
<div className="h-14 flex items-center justify-between px-4 border-b border-[hsl(var(--border-subtle))] flex-shrink-0">
<span className="text-sm font-medium text-[hsl(var(--foreground))]">Activity Feed</span>
<button className="text-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--foreground))] transition-colors">
<iconify-icon className="text-sm" icon="solar:slider-vertical-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="space-y-4 relative">
<div className="text-label text-[hsl(var(--foreground-subtle))] sticky top-0 bg-[hsl(var(--surface-1)/0.9)] backdrop-blur py-1 z-10">Today</div>

<div className="flex gap-3 relative group">

<div className="absolute left-3 top-7 bottom-[-1rem] w-px bg-[hsl(var(--border))] group-last:hidden"></div>
<div className="w-6 h-6 rounded-full bg-[hsl(var(--surface-3))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-[0.65rem] text-[hsl(var(--status-on-track))]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pb-1">
<p className="text-xs text-[hsl(var(--foreground))] leading-relaxed"><span className="font-medium">Apex Fabrics</span> marked <span className="text-[hsl(var(--foreground-muted))]">Lab Dip Approval</span> as complete.</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">12 mins ago</span>
<span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--foreground-muted))]">ORD-2834</span>
</div>
</div>
</div>

<div className="flex gap-3 relative group">
<div className="absolute left-3 top-7 bottom-[-1rem] w-px bg-[hsl(var(--border))] group-last:hidden"></div>
<div className="w-6 h-6 rounded-full bg-[hsl(var(--status-delayed-bg))] border border-[hsl(var(--status-delayed))/0.2] flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-[0.65rem] text-[hsl(var(--status-delayed))]" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pb-1">
<p className="text-xs text-[hsl(var(--foreground))] leading-relaxed"><span className="font-medium">System Alert:</span> Deadline missed for <span className="text-[hsl(var(--foreground-muted))]">Sample Submission</span>.</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">2 hrs ago</span>
<span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--foreground-muted))]">ORD-2847</span>
</div>
</div>
</div>

<div className="flex gap-3 relative group">
<div className="absolute left-3 top-7 bottom-[-1rem] w-px bg-[hsl(var(--border))] group-last:hidden"></div>
<div className="w-6 h-6 rounded-full bg-[hsl(var(--surface-3))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0 z-10 overflow-hidden">
<img alt="Alex" className="w-full h-full opacity-80 mix-blend-luminosity" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex"/>
</div>
<div className="flex-1 min-w-0 pb-1">
<p className="text-xs text-[hsl(var(--foreground))] leading-relaxed"><span className="font-medium">Alex Buyer</span> commented on TNA timeline.</p>
<div className="mt-1.5 p-2 rounded-md bg-[hsl(var(--surface-2))] border border-[hsl(var(--border-subtle))] text-xs text-[hsl(var(--foreground-muted))]">
                                    "Please expedite the trim sourcing, we are falling behind schedule on this stage."
                                </div>
<div className="flex items-center gap-2 mt-1.5">
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">5 hrs ago</span>
</div>
</div>
</div>
</div>

<div className="space-y-4 relative">
<div className="text-label text-[hsl(var(--foreground-subtle))] sticky top-0 bg-[hsl(var(--surface-1)/0.9)] backdrop-blur py-1 z-10">Yesterday</div>

<div className="flex gap-3 relative group">
<div className="absolute left-3 top-7 bottom-[-1rem] w-px bg-[hsl(var(--border))] group-last:hidden"></div>
<div className="w-6 h-6 rounded-full bg-[hsl(var(--surface-3))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0 z-10">
<iconify-icon className="text-[0.65rem] text-[hsl(var(--foreground-muted))]" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pb-1">
<p className="text-xs text-[hsl(var(--foreground))] leading-relaxed"><span className="font-medium">Sarah Jenkins</span> uploaded <span className="text-[hsl(var(--foreground-muted))]">Tech_Pack_v2.pdf</span>.</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[0.65rem] text-[hsl(var(--foreground-subtle))]">Yesterday, 14:30</span>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>

    </>
  );
}
