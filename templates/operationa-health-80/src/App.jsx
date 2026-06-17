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
      

<header className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-white glow-text">OPS//HEALTH</span>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm font-normal text-neutral-500">
<a className="text-neutral-200 transition-colors" href="#">Overview</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Firewall</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Interfaces</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Logs</a>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-2 py-1 bg-neutral-900 border border-white/5 rounded-md text-xs text-neutral-400">
<span className="iconify text-emerald-500" data-icon="lucide:circle-dot" data-width="12"></span>
<span>System Operational</span>
</div>
<div className="h-8 w-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400">
<span className="iconify" data-icon="lucide:bell" data-width="14"></span>
</div>
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10"></div>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-medium text-white tracking-tight mb-1">Firewall Operations</h1>
<p className="text-sm text-neutral-500">Real-time telemetry and health status for cluster <span className="text-neutral-300 font-mono">FW-US-EAST-01</span></p>
</div>

<div className="flex items-center bg-neutral-900 rounded-lg border border-white/5 p-1">
<button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">1h</button>
<button className="px-3 py-1 text-xs font-medium text-white bg-neutral-800 rounded-md shadow-sm">6h</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">24h</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">7d</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="group relative bg-neutral-900/40 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Control Plane CPU</span>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">14%</span>
<span className="text-xs text-neutral-500">avg</span>
</div>
</div>
<span className="iconify text-neutral-600 group-hover:text-neutral-400 transition-colors" data-icon="lucide:cpu" data-width="18"></span>
</div>

<div className="h-8 w-full mb-3">
<svg className="w-full h-full text-emerald-500/20" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L0 10 L10 12 L20 8 L30 15 L40 10 L50 14 L60 5 L70 12 L80 10 L90 8 L100 12 L100 20 Z" fill="currentColor"></path>
<path d="M0 10 L10 12 L20 8 L30 15 L40 10 L50 14 L60 5 L70 12 L80 10 L90 8 L100 12" fill="none" stroke="#10b981" strokeWidth="1.5"></path>
</svg>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{width: '14%'}}></div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Memory Usage</span>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">48%</span>
<span className="text-xs text-emerald-500">-2%</span>
</div>
</div>
<span className="iconify text-neutral-600 group-hover:text-neutral-400 transition-colors" data-icon="lucide:memory-stick" data-width="18"></span>
</div>
<div className="h-8 w-full flex items-end gap-1 mb-3">

<div className="w-1/6 bg-neutral-800 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-neutral-800 h-[60%] rounded-sm"></div>
<div className="w-1/6 bg-neutral-800 h-[45%] rounded-sm"></div>
<div className="w-1/6 bg-neutral-800 h-[50%] rounded-sm"></div>
<div className="w-1/6 bg-neutral-800 h-[55%] rounded-sm"></div>
<div className="w-1/6 bg-emerald-500/50 h-[48%] rounded-sm"></div>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{width: '48%'}}></div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Active Sessions</span>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">12,405</span>
</div>
</div>
<span className="iconify text-neutral-600 group-hover:text-neutral-400 transition-colors" data-icon="lucide:activity" data-width="18"></span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs text-neutral-400">Peak: 14.2k</span>
<span className="flex-1 border-b border-dashed border-neutral-800"></span>
<span className="text-xs text-neutral-400">Limit: 1M</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full rounded-full" style={{width: '12%'}}></div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Conn Table</span>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">8.5%</span>
<span className="text-xs text-neutral-500">utilization</span>
</div>
</div>
<span className="iconify text-neutral-600 group-hover:text-neutral-400 transition-colors" data-icon="lucide:table-2" data-width="18"></span>
</div>
<div className="grid grid-cols-2 gap-2 mt-4">
<div className="bg-neutral-800/50 rounded p-2 border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">TCP</p>
<p className="text-sm font-medium text-neutral-200">8,210</p>
</div>
<div className="bg-neutral-800/50 rounded p-2 border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase">UDP</p>
<p className="text-sm font-medium text-neutral-200">4,195</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<div className="lg:col-span-1 bg-neutral-900/40 border border-white/5 rounded-xl p-6 flex flex-col justify-between">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200">High Availability &amp; Config</h3>
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<div className="flex items-center justify-center gap-6 mb-8 relative">

<div className="flex flex-col items-center gap-2 z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white">Active</div>
<div className="text-[10px] text-neutral-500 font-mono">NODE-01</div>
</div>
</div>

<div className="flex-1 h-px bg-neutral-700 w-full absolute top-6 left-0 right-0 -z-0"></div>
<div className="z-10 bg-neutral-900 px-2 text-xs text-neutral-500 flex flex-col items-center">
<span className="iconify text-emerald-500 mb-1" data-icon="lucide:check-circle-2" data-width="14"></span>
                        SYNCED
                    </div>

<div className="flex flex-col items-center gap-2 z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400">
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<div className="text-center">
<div className="text-xs font-medium text-neutral-400">Standby</div>
<div className="text-[10px] text-neutral-500 font-mono">NODE-02</div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
<span className="text-neutral-500">Config Checksum</span>
<span className="font-mono text-neutral-300">0x8F2A...9C1</span>
</div>
<div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
<span className="text-neutral-500">Drift Status</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">None</span>
</div>
<div className="flex justify-between items-center text-xs pt-1">
<span className="text-neutral-500">Last Sync</span>
<span className="text-neutral-300">14s ago</span>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-neutral-900/40 border border-white/5 rounded-xl p-0 overflow-hidden flex flex-col">
<div className="p-6 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-neutral-200">Interface Telemetry</h3>
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
                        View All <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[11px] uppercase tracking-wider text-neutral-500 border-b border-white/5">
<th className="px-6 py-3 font-medium">Interface</th>
<th className="px-6 py-3 font-medium">Throughput (In/Out)</th>
<th className="px-6 py-3 font-medium">Errors</th>
<th className="px-6 py-3 font-medium">Drops</th>
<th className="px-6 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300">

<tr className="group border-b border-white/5 hover:bg-neutral-800/30 transition-colors">
<td className="px-6 py-3 font-mono text-xs">eth0 (WAN)</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="text-neutral-400">↓ 450M</span>
<span className="text-neutral-600">|</span>
<span className="text-neutral-400">↑ 120M</span>
</div>
</td>
<td className="px-6 py-3 text-neutral-500">0</td>
<td className="px-6 py-3 text-neutral-500">12</td>
<td className="px-6 py-3 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs border border-emerald-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> UP
                                    </span>
</td>
</tr>

<tr className="group border-b border-white/5 hover:bg-neutral-800/30 transition-colors">
<td className="px-6 py-3 font-mono text-xs">eth1 (LAN)</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="text-neutral-400">↓ 120M</span>
<span className="text-neutral-600">|</span>
<span className="text-neutral-400">↑ 440M</span>
</div>
</td>
<td className="px-6 py-3 text-neutral-500">0</td>
<td className="px-6 py-3 text-neutral-500">0</td>
<td className="px-6 py-3 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs border border-emerald-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> UP
                                    </span>
</td>
</tr>

<tr className="group border-b border-white/5 hover:bg-neutral-800/30 transition-colors">
<td className="px-6 py-3 font-mono text-xs">eth2 (DMZ)</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="text-neutral-400">↓ 12M</span>
<span className="text-neutral-600">|</span>
<span className="text-neutral-400">↑ 5M</span>
</div>
</td>
<td className="px-6 py-3 text-amber-500 font-medium">45</td>
<td className="px-6 py-3 text-amber-500 font-medium">120</td>
<td className="px-6 py-3 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs border border-amber-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> DEGRADED
                                    </span>
</td>
</tr>

<tr className="group hover:bg-neutral-800/30 transition-colors">
<td className="px-6 py-3 font-mono text-xs text-neutral-500">eth3 (MGMT)</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="text-neutral-500">↓ 0.5M</span>
<span className="text-neutral-600">|</span>
<span className="text-neutral-500">↑ 0.1M</span>
</div>
</td>
<td className="px-6 py-3 text-neutral-500">0</td>
<td className="px-6 py-3 text-neutral-500">0</td>
<td className="px-6 py-3 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs border border-emerald-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> UP
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-900/40 border border-white/5 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200">Log Ingestion</h3>
<span className="iconify text-neutral-600" data-icon="lucide:database" data-width="16"></span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<div className="text-[10px] text-neutral-500 uppercase mb-1">Ingestion Lag</div>
<div className="text-xl font-medium text-white tracking-tight">120ms</div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase mb-1">Missed Logs</div>
<div className="text-xl font-medium text-white tracking-tight">0.01%</div>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Syslog Rate</span>
<span className="text-white">2.4k/sec</span>
</div>

<div className="flex items-end h-6 gap-1">
<div className="flex-1 bg-neutral-800 h-[30%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[50%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[40%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[70%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[60%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[80%] rounded-sm"></div>
<div className="flex-1 bg-blue-500 h-[75%] rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200">Disk Storage</h3>
<span className="iconify text-neutral-600" data-icon="lucide:hard-drive" data-width="16"></span>
</div>
<div className="flex items-center gap-4 mb-4">

<div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-neutral-800" style={{background: 'conic-gradient(#f59e0b 82%, #262626 0)'}}>
<div className="absolute w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
<span className="text-xs font-bold text-white">82%</span>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">/var/log</span>
<span className="text-xs text-amber-500">Warning Threshold</span>
</div>
</div>
<div className="space-y-3 pt-2 border-t border-white/5">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Total Space</span>
<span className="text-neutral-300">512 GB</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Used</span>
<span className="text-neutral-300">419 GB</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Free</span>
<span className="text-neutral-300">93 GB</span>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200">Alert Queue</h3>
<div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-neutral-800 border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-neutral-400">Processing</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<div className="text-[10px] text-neutral-500 uppercase mb-1">Queue Depth</div>
<div className="text-xl font-medium text-white tracking-tight">4</div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase mb-1">Avg Delay</div>
<div className="text-xl font-medium text-white tracking-tight">1.2s</div>
</div>
</div>
<div className="space-y-3 mt-4">

<div className="flex items-start gap-3 p-2 rounded hover:bg-neutral-800/50 transition-colors cursor-pointer">
<div className="mt-0.5 text-rose-500">
<span className="iconify" data-icon="lucide:alert-circle" data-width="14"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs text-neutral-200 truncate">High CPU Load &gt; 90% (Core 2)</p>
<p className="text-[10px] text-neutral-500">2 mins ago</p>
</div>
</div>

<div className="flex items-start gap-3 p-2 rounded hover:bg-neutral-800/50 transition-colors cursor-pointer">
<div className="mt-0.5 text-amber-500">
<span className="iconify" data-icon="lucide:triangle-alert" data-width="14"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs text-neutral-200 truncate">Interface eth2 errors detected</p>
<p className="text-[10px] text-neutral-500">14 mins ago</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-6 mt-6">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-neutral-600">
<div>
                © 2023 OpsMonitor Inc. v2.4.1
            </div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> API Connected</span>
<span>Latency: 14ms</span>
</div>
</div>
</footer>

    </>
  );
}
