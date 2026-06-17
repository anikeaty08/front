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
      

<aside className="w-64 border-r border-zinc-800/60 bg-zinc-900/30 flex flex-col justify-between hidden md:flex backdrop-blur-xl shrink-0">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-800/60">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white text-xs font-bold tracking-tighter shadow-inner">
<iconify-icon className="text-emerald-500" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<span className="text-zinc-100 font-semibold tracking-tight text-sm">SENTINEL</span>
</div>
</div>

<nav className="p-4 space-y-1">
<div className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Main</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-800/50 rounded-md border border-zinc-700/50 transition-all shadow-sm" href="#">
<iconify-icon className="text-emerald-400" icon="solar:widget-2-linear" width="18"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:radar-2-linear" width="18"></iconify-icon>
<span className="font-normal">Process Monitor</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:code-scan-linear" width="18"></iconify-icon>
<span className="font-normal">Heuristics</span>
</a>
<div className="px-3 pb-2 pt-6 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Analysis</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:history-linear" width="18"></iconify-icon>
<span className="font-normal">Logs &amp; Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="font-normal">User Sessions</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-zinc-800/60 bg-zinc-900/50">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-zinc-800 transition-colors text-left group">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 text-xs font-medium">
                        JD
                    </div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-zinc-900 rounded-full"></div>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-zinc-200 font-medium group-hover:text-white">Admin Account</span>
<span className="text-[10px] text-zinc-500">v2.4.0-stable</span>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-zinc-950">

<header className="h-16 border-b border-zinc-800/60 flex items-center justify-between px-6 bg-zinc-900/20 backdrop-blur-md z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500">System</span>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-200 font-medium">Overview</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs font-medium text-emerald-500">Engine Active</span>
</div>
<div className="h-4 w-px bg-zinc-800 mx-1"></div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-zinc-900"></div>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex items-start justify-between">
<div>
<h2 className="text-zinc-100 text-lg font-semibold tracking-tight flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
                                        System Protected
                                    </h2>
<p className="text-zinc-500 text-xs mt-1.5 font-light">Real-time heuristics engine is monitoring active threads.</p>
</div>
<div className="px-3 py-1 rounded bg-zinc-800/50 border border-zinc-700 text-xs font-mono text-zinc-300">
                                    UPTIME: 14:02:21
                                </div>
</div>
<div className="mt-8 grid grid-cols-3 gap-8">
<div>
<div className="text-3xl text-zinc-100 font-light tracking-tight">0</div>
<div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Active Threats</div>
</div>
<div>
<div className="text-3xl text-zinc-100 font-light tracking-tight">1,429</div>
<div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Files Scanned</div>
</div>
<div>
<div className="text-3xl text-emerald-500 font-light tracking-tight">99.9%</div>
<div className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Health Score</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between scan-overlay">
<div>
<h3 className="text-zinc-100 text-xs font-semibold uppercase tracking-wider mb-4">Protection Modules</h3>
<div className="space-y-2">

<label className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-pointer group">
<span className="text-xs text-zinc-300">Memory Integrity</span>
<div className="relative w-8 h-4 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-zinc-600 transition-colors">
<input checked="" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" type="checkbox"/>
<div className="w-2 h-2 rounded-full bg-zinc-500 peer-checked:bg-emerald-500 absolute top-1 left-1 transition-all peer-checked:left-5 shadow-sm"></div>
</div>
</label>

<label className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-pointer group">
<span className="text-xs text-zinc-300">Kernel Hooks</span>
<div className="relative w-8 h-4 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-zinc-600 transition-colors">
<input checked="" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" type="checkbox"/>
<div className="w-2 h-2 rounded-full bg-zinc-500 peer-checked:bg-emerald-500 absolute top-1 left-1 transition-all peer-checked:left-5 shadow-sm"></div>
</div>
</label>
</div>
</div>
<button className="mt-4 w-full py-2 rounded bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-tight transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-100/10">
<iconify-icon icon="solar:scanner-linear" width="16"></iconify-icon>
                            Initiate Deep Scan
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">CPU Load</span>
<iconify-icon className="text-zinc-600" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-xl text-zinc-200 font-medium">12.4%</span>
<span className="text-xs text-emerald-500 mb-1">↓ 2%</span>
</div>
<div className="w-full bg-zinc-800/50 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[12%] rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Memory</span>
<iconify-icon className="text-zinc-600" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-xl text-zinc-200 font-medium">2.1 GB</span>
<span className="text-xs text-zinc-600 mb-1">/ 16 GB</span>
</div>
<div className="w-full bg-zinc-800/50 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[35%] rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Network</span>
<iconify-icon className="text-zinc-600" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-xl text-zinc-200 font-medium">45 KB/s</span>
<span className="text-xs text-emerald-500 mb-1">Stable</span>
</div>
<div className="w-full bg-zinc-800/50 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[15%] rounded-full"></div>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Queued</span>
<iconify-icon className="text-zinc-600" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-xl text-zinc-200 font-medium">0</span>
<span className="text-xs text-zinc-500 mb-1">Items</span>
</div>
<div className="w-full bg-zinc-800/50 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-zinc-700 h-full w-0 rounded-full"></div>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-zinc-200 text-sm font-medium">System Load History</h3>
</div>
<select className="bg-transparent text-xs text-zinc-500 border-none outline-none cursor-pointer hover:text-zinc-300 transition-colors">
<option>Last 10 Minutes</option>
<option>Last Hour</option>
</select>
</div>

<div className="h-32 flex items-end justify-between gap-1">

<div className="w-full bg-emerald-500/20 rounded-t-sm h-[20%] graph-bar" style={{animationDelay: '0ms'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[35%] graph-bar" style={{animationDelay: '50ms'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[45%] graph-bar" style={{animationDelay: '100ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[30%] graph-bar" style={{animationDelay: '150ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[60%] graph-bar" style={{animationDelay: '200ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[55%] graph-bar" style={{animationDelay: '250ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[40%] graph-bar" style={{animationDelay: '300ms'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[25%] graph-bar" style={{animationDelay: '350ms'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[35%] graph-bar" style={{animationDelay: '400ms'}}></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[75%] graph-bar" style={{animationDelay: '450ms'}}></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[85%] graph-bar" style={{animationDelay: '500ms'}}></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[65%] graph-bar" style={{animationDelay: '550ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[45%] graph-bar" style={{animationDelay: '600ms'}}></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[30%] graph-bar" style={{animationDelay: '650ms'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[20%] graph-bar" style={{animationDelay: '700ms'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[25%] graph-bar" style={{animationDelay: '750ms'}}></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-600 font-mono">
<span>T-10m</span>
<span>T-5m</span>
<span>Now</span>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:list-check-linear"></iconify-icon>
<h3 className="text-zinc-200 text-sm font-medium">Live Process Monitor</h3>
</div>
<div className="flex gap-2">
<button className="p-1.5 rounded hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead>
<tr className="text-zinc-500 border-b border-zinc-800/50 text-[10px] uppercase tracking-wider font-semibold bg-zinc-900/20">
<th className="px-6 py-3">Process</th>
<th className="px-6 py-3">PID</th>
<th className="px-6 py-3">Signature</th>
<th className="px-6 py-3">Integrity</th>
<th className="px-6 py-3 text-right">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/40">

<tr className="hover:bg-zinc-800/30 transition-colors group">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:gamepad-linear"></iconify-icon>
</div>
<div>
<div className="text-zinc-200 font-medium text-xs">valorant-win64.exe</div>
<div className="text-zinc-600 text-[10px]">Riot Games, Inc</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-500 font-mono text-xs">8942</td>
<td className="px-6 py-3.5"><span className="text-zinc-400 text-xs">Verified</span></td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-emerald-500 text-xs font-medium">Valid</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs font-mono">10:42:05</td>
</tr>

<tr className="hover:bg-zinc-800/30 transition-colors group bg-amber-500/5">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<div className="text-zinc-200 font-medium text-xs">unknown_injector.dll</div>
<div className="text-zinc-600 text-[10px]">Unknown Publisher</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-500 font-mono text-xs">1022</td>
<td className="px-6 py-3.5"><span className="text-amber-500 text-xs">Unsigned</span></td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-amber-500 text-xs font-medium">Flagged</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs font-mono">10:41:58</td>
</tr>

<tr className="hover:bg-zinc-800/30 transition-colors group">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
</div>
<div>
<div className="text-zinc-200 font-medium text-xs">svchost.exe</div>
<div className="text-zinc-600 text-[10px]">Microsoft Corporation</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-500 font-mono text-xs">3341</td>
<td className="px-6 py-3.5"><span className="text-zinc-400 text-xs">System</span></td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-zinc-500 text-xs font-medium">Idle</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs font-mono">10:40:12</td>
</tr>

<tr className="hover:bg-zinc-800/30 transition-colors group">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div>
<div className="text-zinc-200 font-medium text-xs">discord.exe</div>
<div className="text-zinc-600 text-[10px]">Discord Inc.</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-500 font-mono text-xs">4120</td>
<td className="px-6 py-3.5"><span className="text-zinc-400 text-xs">Verified</span></td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-emerald-500 text-xs font-medium">Valid</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs font-mono">10:38:22</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<footer className="mt-12 mb-2 flex items-center justify-center">
<div className="flex items-center gap-2 text-[10px] text-zinc-600">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>Sentinel Engine v2.4.0</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Encrypted Connection</span>
</div>
</footer>
</div>
</main>

    </>
  );
}
