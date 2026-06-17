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
sans: ['DM Sans', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
navy: {
950: '#020408', // Deepest background
900: '#050a14', // Panel background
800: '#0b1629', // Borders
},
gold: {
400: '#D4A574', // Primary Accent
500: '#B88A5C',
900: '#3D2D1A',
},
status: {
success: '#10B981',
error: '#EF4444',
warning: '#F59E0B',
info: '#3B82F6',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'flow': 'flow 20s linear infinite',
},
keyframes: {
flow: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}

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
      

<aside className="w-64 border-r border-white/5 bg-navy-900 flex flex-col justify-between z-20 transition-all duration-300">

<div className="p-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-navy-950 shadow-[0_0_15px_rgba(212,165,116,0.3)]">
<iconify-icon icon="solar:bolt-bold" width="20"></iconify-icon>
</div>
<div>
<h1 className="font-display font-bold text-lg tracking-tight text-white leading-none">FlashX<span className="text-gold-400">402</span></h1>
<span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">Orchestrator</span>
</div>
</div>

<button className="mt-6 w-full flex items-center justify-between p-2 rounded-lg border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">A</div>
<span className="text-sm font-medium text-gray-300 group-hover:text-white">Agentia AI</span>
</div>
<iconify-icon className="text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-2 mt-2">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-lg border border-white/5 shadow-sm group" href="#">
<iconify-icon className="text-gold-400" icon="solar:widget-2-linear"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-gold-400 transition-colors" icon="solar:transfer-horizontal-linear"></iconify-icon>
                Transactions
                <span className="ml-auto text-[10px] bg-white/10 text-gray-300 px-1.5 py-0.5 rounded-full">Live</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-gold-400 transition-colors" icon="solar:layers-minimalistic-linear"></iconify-icon>
                Endpoints &amp; Rules
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-gold-400 transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
                Balances
            </a>
<div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-2 mt-6">Developers</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-gold-400 transition-colors" icon="solar:code-square-linear"></iconify-icon>
                API Keys
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-gold-400 transition-colors" icon="solar:webhook-linear"></iconify-icon>
                Webhooks
            </a>
</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10"></div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Dev Team</p>
<p className="text-xs text-gray-500 truncate">dev@agentia.ai</p>
</div>
<iconify-icon className="text-gray-500 hover:text-white cursor-pointer" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#020408] relative overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 z-10 glass-panel sticky top-0">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-gray-500">
<span>Projects</span>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-white font-medium">Production (Mainnet)</span>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="status-dot bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-emerald-500 font-mono">SYSTEM OPERATIONAL</span>
</div>
</div>

<div className="flex items-center gap-4">

<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-white/5 border border-white/5 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/50 placeholder-gray-600 w-64 transition-all" placeholder="Search tx hash, req ID..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="text-[10px] text-gray-600 font-mono bg-white/5 px-1 rounded">⌘</kbd>
<kbd className="text-[10px] text-gray-600 font-mono bg-white/5 px-1 rounded">K</kbd>
</div>
</div>
<button className="relative p-2 text-gray-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold-400 rounded-full border border-navy-900"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6 z-0">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gross Volume (24h)</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">$12,405.00</h3>
</div>
<div className="p-2 bg-white/5 rounded-lg text-gold-400">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-emerald-400 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12%
                        </span>
<span className="text-gray-600">vs yesterday</span>
</div>
</div>

<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Paid Requests</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">84,392</h3>
</div>
<div className="p-2 bg-white/5 rounded-lg text-purple-400">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-emerald-400 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 8.4%
                        </span>
<span className="text-gray-600">conversion rate</span>
</div>
</div>

<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Avg Settlement</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">1.2s</h3>
</div>
<div className="p-2 bg-white/5 rounded-lg text-blue-400">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-full bg-white/10 rounded-full h-1 mt-2">
<div className="bg-blue-400 h-1 rounded-full" style={{width: '85%'}}></div>
</div>
<p className="text-[10px] text-gray-500 mt-2">Base &amp; Polygon dominant</p>
</div>

<div className="glass-card p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Agents</p>
<h3 className="text-2xl font-display font-bold text-white mt-1">1,204</h3>
</div>
<div className="p-2 bg-white/5 rounded-lg text-emerald-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex -space-x-2 overflow-hidden mt-1">
<div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#020408] bg-gray-600"></div>
<div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#020408] bg-gray-500"></div>
<div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#020408] bg-gray-400"></div>
<div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#020408] bg-gray-300 flex items-center justify-center text-[8px] text-black font-bold">+1k</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-card rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-6">
<h3 className="font-display font-semibold text-lg">Payment Lifecycle Flow</h3>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-md">1h</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-white transition">24h</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-white transition">7d</button>
</div>
</div>

<div className="relative h-64 w-full flex items-center justify-between px-4">

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-gray-800 via-gold-400/30 to-emerald-500/30 -z-10 transform -translate-y-1/2"></div>

<div className="flex flex-col items-center gap-3">
<div className="text-xs text-gray-500 font-mono mb-1">Total Hits</div>
<div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center relative z-10 shadow-lg">
<span className="font-bold text-gray-400">402</span>
</div>
<div className="text-sm font-bold mt-1">142k</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="text-xs text-gray-500 font-mono mb-1">Signatures</div>
<div className="w-12 h-12 rounded-full bg-navy-900 border border-gold-400 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(212,165,116,0.2)]">
<iconify-icon className="text-gold-400" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="text-sm font-bold text-gold-400">92k</div>
<div className="text-[10px] text-gray-500">65% conv</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="text-xs text-gray-500 font-mono mb-1">Settled</div>
<div className="w-12 h-12 rounded-full bg-navy-900 border border-indigo-500 flex items-center justify-center relative z-10">
<iconify-icon className="text-indigo-500" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="text-sm font-bold text-indigo-400">91.8k</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="text-xs text-gray-500 font-mono mb-1">200 OK</div>
<div className="w-12 h-12 rounded-full bg-emerald-900/50 border border-emerald-500 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="text-sm font-bold text-emerald-500">91.8k</div>
<div className="text-[10px] text-emerald-600/80">99.9% success</div>
</div>
</div>

<div className="grid grid-cols-4 gap-4 mt-4 border-t border-white/5 pt-4">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-blue-400 text-xs" icon="solar:globus-linear"></iconify-icon>
<span className="text-[10px] font-bold text-gray-400">BASE</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[60%]"></div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-purple-400 text-xs" icon="solar:polygon-linear"></iconify-icon>
<span className="text-[10px] font-bold text-gray-400">POLYGON</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[25%]"></div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-gray-400 text-xs" icon="solar:bitcoin-circle-linear"></iconify-icon>
<span className="text-[10px] font-bold text-gray-400">ETH</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gray-400 w-[10%]"></div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-yellow-400 text-xs" icon="solar:database-linear"></iconify-icon>
<span className="text-[10px] font-bold text-gray-400">BSC</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 w-[5%]"></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-0 flex flex-col h-96 overflow-hidden border border-gold-400/20">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<h3 className="font-display font-semibold text-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live Ingest
                        </h3>
<span className="font-mono text-[10px] text-gray-500">WS: CONNECTED</span>
</div>
<div className="flex-1 overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#020408] to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#020408] to-transparent z-10 pointer-events-none"></div>

<div className="space-y-0 text-xs font-mono p-4">

<div className="flex gap-3 py-2 border-b border-white/5 opacity-100">
<span className="text-gray-500">14:02:41</span>
<div className="flex-1 truncate">
<span className="text-blue-400">BASE</span>
<span className="text-gray-400 mx-1">→</span>
<span className="text-gold-400">0.05 USDC</span>
<span className="text-gray-600 mx-1">from</span>
<span className="text-gray-400">0x71c...9a2</span>
</div>
<span className="text-emerald-500">200 OK</span>
</div>

<div className="flex gap-3 py-2 border-b border-white/5 opacity-80">
<span className="text-gray-500">14:02:39</span>
<div className="flex-1 truncate">
<span className="text-purple-400">POLY</span>
<span className="text-gray-400 mx-1">→</span>
<span className="text-gold-400">0.01 USDT</span>
<span className="text-gray-600 mx-1">from</span>
<span className="text-gray-400">0x3b1...f11</span>
</div>
<span className="text-emerald-500">200 OK</span>
</div>

<div className="flex gap-3 py-2 border-b border-white/5 opacity-60">
<span className="text-gray-500">14:02:35</span>
<div className="flex-1 truncate">
<span className="text-gray-400">BASE</span>
<span className="text-gray-400 mx-1">→</span>
<span className="text-gray-600">Challenge</span>
<span className="text-gray-600 mx-1">for</span>
<span className="text-gray-400">/v1/generate</span>
</div>
<span className="text-yellow-500">402 REQ</span>
</div>

<div className="flex gap-3 py-2 border-b border-white/5 opacity-40">
<span className="text-gray-500">14:02:31</span>
<div className="flex-1 truncate">
<span className="text-blue-400">BASE</span>
<span className="text-gray-400 mx-1">→</span>
<span className="text-gold-400">1.00 USDC</span>
<span className="text-gray-600 mx-1">from</span>
<span className="text-gray-400">0xa99...22b</span>
</div>
<span className="text-emerald-500">200 OK</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-4">
<h2 className="font-display text-xl font-bold">Transactions</h2>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                    </button>
<button className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export
                    </button>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden border border-white/5">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02] text-xs uppercase text-gray-500 font-mono tracking-wider">
<th className="p-4 w-10"><input className="custom-checkbox" type="checkbox"/></th>
<th className="p-4">Status</th>
<th className="p-4">Request / Endpoint</th>
<th className="p-4">Chain / Token</th>
<th className="p-4">Amount</th>
<th className="p-4">Payer</th>
<th className="p-4">Type</th>
<th className="p-4">Settlement</th>
<th className="p-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="p-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-4">
<span className="status-pill bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="status-dot bg-emerald-500"></span> Served
                                    </span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="font-mono text-xs text-gray-300">req_8k2...9a</span>
<span className="text-xs text-gray-500">GET /api/v1/image/gen</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:globus-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold text-gray-300">USDC</span>
</div>
</td>
<td className="p-4">
<div className="font-mono text-white font-medium">0.50 <span className="text-gray-500 text-[10px]">USDC</span></div>
<div className="text-[10px] text-gray-600">Fee: $0.005</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
<span className="font-mono text-xs text-gray-400 group-hover:text-gold-400 transition-colors">0x71c...9a2</span>
</div>
</td>
<td className="p-4">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400 font-mono">EIP-3009</span>
</td>
<td className="p-4">
<div className="flex items-center gap-1 text-xs text-gray-500">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                        12 confs
                                    </div>
</td>
<td className="p-4 text-right">
<button className="text-gray-500 hover:text-white"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer bg-gold-400/[0.02]">
<td className="p-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-4">
<span className="status-pill bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
<span className="status-dot bg-yellow-500 animate-pulse"></span> Settling
                                    </span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="font-mono text-xs text-gray-300">req_3m1...b2</span>
<span className="text-xs text-gray-500">POST /api/v2/chat</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
<iconify-icon icon="solar:polygon-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold text-gray-300">USDT</span>
</div>
</td>
<td className="p-4">
<div className="font-mono text-white font-medium">0.02 <span className="text-gray-500 text-[10px]">USDT</span></div>
<div className="text-[10px] text-gray-600">Gas sponsored</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
<span className="font-mono text-xs text-gray-400 group-hover:text-gold-400 transition-colors">0x3b1...f11</span>
</div>
</td>
<td className="p-4">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400 font-mono">Permit</span>
</td>
<td className="p-4">
<div className="flex items-center gap-1 text-xs text-yellow-500">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                        Mempool
                                    </div>
</td>
<td className="p-4 text-right">
<button className="text-gray-500 hover:text-white"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer opacity-70">
<td className="p-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="p-4">
<span className="status-pill bg-gray-500/10 text-gray-400 border border-gray-500/20">
<span className="status-dot bg-gray-500"></span> Challenged
                                    </span>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="font-mono text-xs text-gray-300">req_9p0...xx</span>
<span className="text-xs text-gray-500">GET /api/v1/forecast</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-500/20 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:bitcoin-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold text-gray-500">-</span>
</div>
</td>
<td className="p-4">
<div className="font-mono text-gray-500 font-medium">0.10 <span className="text-[10px]">USDC</span></div>
<div className="text-[10px] text-gray-600">Pending sig</div>
</td>
<td className="p-4">
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-gray-700"></div>
<span className="font-mono text-xs text-gray-500">Unknown</span>
</div>
</td>
<td className="p-4">
<span className="text-[10px] text-gray-600 font-mono">-</span>
</td>
<td className="p-4">
<div className="text-xs text-gray-600">Waiting...</div>
</td>
<td className="p-4 text-right">
<button className="text-gray-500 hover:text-white"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
<div>Showing 1-3 of 84,392</div>
<div className="flex gap-2">
<button className="px-3 py-1 bg-white/5 rounded hover:bg-white/10 text-white">Previous</button>
<button className="px-3 py-1 bg-white/5 rounded hover:bg-white/10 text-white">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

<div className="lg:col-span-3">
<h3 className="font-display font-semibold text-lg mb-4">Latest 402 Header Inspection</h3>
<div className="glass-card rounded-xl border border-white/5 overflow-hidden">
<div className="bg-[#0b0e14] p-2 flex items-center gap-2 border-b border-white/5">
<div className="flex gap-1.5 ml-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs font-mono text-gray-500 ml-4">Response Headers</span>
</div>
<div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto bg-[#050a14]">
<div className="text-yellow-500 font-bold mb-2">HTTP/1.1 402 Payment Required</div>
<div className="text-gray-400"><span className="text-purple-400">Content-Type:</span> application/json</div>
<div className="text-gray-400"><span className="text-gold-400">X-Flash-Payment-Address:</span> 0x71C7656EC7ab88b098defB751B7401B5f6d8976F</div>
<div className="text-gray-400"><span className="text-gold-400">X-Flash-Token-Contract:</span> 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 <span className="text-gray-600">// Base USDC</span></div>
<div className="text-gray-400"><span className="text-gold-400">X-Flash-Amount:</span> 0.500000</div>
<div className="text-gray-400"><span className="text-gold-400">X-Flash-Chain-ID:</span> 8453</div>
<div className="text-gray-400"><span className="text-gold-400">X-Flash-Methods:</span> EIP-3009, EIP-2612</div>
<br/>
<div className="text-gray-500">
                                {
                                  "error": "Payment required",
                                  "invoice_id": "inv_9k29a...",
                                  "currency": "USDC"
                                }
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
