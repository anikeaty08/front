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
gray: {
850: '#1f2937',
900: '#111827',
925: '#0f1218',
950: '#09090b',
},
orange: {
450: '#f97316',
550: '#ea580c',
}
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
      

<aside className="w-64 flex flex-col border-r border-zinc-800/60 bg-zinc-950/50 pt-6 pb-4 hidden md:flex h-full relative z-20">
<div className="px-5 mb-8 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-zinc-100 font-medium tracking-tight text-base">CY • SECURE</span>
</div>
<div className="px-4 mb-6 flex gap-2">
<button className="flex-1 bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white text-sm font-medium py-2 rounded shadow-lg shadow-orange-900/20 transition-all flex items-center justify-center gap-2 border border-orange-400/20">
                New Operation
            </button>
<button className="w-9 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50 flex items-center justify-center transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 opacity-70 group-hover:opacity-100" data-lucide="layout-grid"></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 opacity-70 group-hover:opacity-100" data-lucide="scan-line"></i>
                Vulnerabilities
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-900/80 rounded-md shadow-sm shadow-black/40 border border-zinc-800/50 group" href="#">
<i className="w-4 h-4 text-orange-500" data-lucide="siren"></i>
                Threats
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 opacity-70 group-hover:opacity-100" data-lucide="shield-check"></i>
                Compliance
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 opacity-70 group-hover:opacity-100" data-lucide="lock"></i>
                Secure Vault
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 opacity-70 group-hover:opacity-100" data-lucide="workflow"></i>
                API Integrations
            </a>
</nav>
<div className="mt-auto px-4 space-y-4">
<a className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="life-buoy"></i>
                Support &amp; Docs
            </a>
<div className="pt-4 border-t border-zinc-800/60 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-900 to-indigo-600 flex items-center justify-center text-xs text-white font-medium border border-zinc-700">
                    SJ
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Sarah Jenkins</p>
<p className="text-xs text-zinc-500 truncate">@sjenkins_sec</p>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-down"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-950 relative">

<div className="absolute top-0 left-0 w-full h-96 bg-orange-900/10 blur-[100px] pointer-events-none z-0"></div>

<header className="h-16 flex items-center justify-between px-8 border-b border-zinc-800/40 z-10 shrink-0">
<div className="flex items-center gap-2 text-sm">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#"><i className="w-4 h-4" data-lucide="home"></i></a>
<span className="text-zinc-700">/</span>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Threats</a>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">THR-5910</span>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:bg-zinc-900 rounded bg-zinc-950 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i>
                    Export Report
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 z-10">
<h1 className="text-2xl font-medium text-zinc-100 tracking-tight mb-6">Threat Analysis</h1>

<div className="glass-panel rounded-xl p-0 mb-6 overflow-hidden">
<div className="p-6 pb-8 border-b border-zinc-800/50">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div>
<h2 className="text-xl font-medium text-zinc-100 tracking-tight mb-4 flex items-center gap-3">
                                Threat - 5910
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">Critical</span>
</h2>
<div className="flex items-center gap-12">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Analyst</p>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">?</div>
<span className="text-sm text-zinc-300">Unassigned</span>
<i className="w-3 h-3 text-zinc-600" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Detected</p>
<span className="text-sm text-zinc-300">2025-05-14</span>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">SLA Target</p>
<span className="text-sm text-zinc-300">4h remaining</span>
</div>
<div className="hidden lg:block">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Last Update</p>
<span className="text-sm text-zinc-300">12m ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 rounded-md border border-zinc-700/50 bg-zinc-800/30 text-zinc-300 text-sm flex items-center gap-2 hover:bg-zinc-800 transition-colors">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                                Active
                                <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
<button className="px-3 py-1.5 rounded-md border border-red-900/30 bg-red-500/10 text-red-400 text-sm flex items-center gap-2 hover:bg-red-500/20 transition-colors">
<div className="w-2 h-2 rounded-sm bg-red-500"></div>
                                Critical
                                <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>

<div className="px-6 bg-zinc-900/30 flex gap-6 items-center h-12">
<button className="h-8 px-4 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium shadow-sm">Overview</button>
<button className="h-8 px-2 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors">Vectors</button>
<button className="h-8 px-2 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors">Timeline</button>
<button className="h-8 px-2 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors">Logs <span className="ml-1 text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">24</span></button>
<button className="h-8 px-2 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors">Mitigation</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 glass-panel rounded-xl p-6 flex flex-col justify-between">
<div>
<h3 className="text-base font-medium text-zinc-200 mb-6">Threat Metadata</h3>
<div className="space-y-5">
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
<span className="text-sm text-zinc-500">Classification</span>
<span className="text-sm text-zinc-200 font-medium">Zero-day Exploit</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
<span className="text-sm text-zinc-500">Status</span>
<span className="text-sm text-orange-400 font-medium">Escalating</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
<span className="text-sm text-zinc-500">Source Origin</span>
<span className="text-sm text-zinc-200 font-medium">Cluster-EU-West</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-zinc-500">Affected Assets</span>
<span className="text-sm text-zinc-200 font-medium">7</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-2 relative z-10">
<h3 className="text-base font-medium text-zinc-200">Attack Surface Map</h3>
<div className="flex gap-4 text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500"></span>Current Impact</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-zinc-600"></span>Projected</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-600"></span>Risk Level</div>
</div>
</div>

<div className="w-full h-64 flex items-center justify-center relative">

<span className="absolute top-2 text-xs text-zinc-500 font-medium">Authentication</span>
<span className="absolute bottom-2 text-xs text-zinc-500 font-medium">Data Exfiltration</span>
<span className="absolute left-4 top-1/3 text-xs text-zinc-500 font-medium text-right w-20">Network<br/>Access</span>
<span className="absolute right-4 top-1/3 text-xs text-zinc-500 font-medium text-left w-20">Privilege<br/>Escalation</span>
<span className="absolute left-4 bottom-1/3 text-xs text-zinc-500 font-medium text-right w-20">Defense<br/>Evasion</span>
<span className="absolute right-4 bottom-1/3 text-xs text-zinc-500 font-medium text-left w-20">Asset<br/>Exposure</span>
<svg className="w-64 h-64 overflow-visible" viewbox="0 0 200 200">

<polygon fill="none" points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#27272a" strokeWidth="1"></polygon>
<polygon fill="none" points="100,40 152,70 152,130 100,160 48,130 48,70" stroke="#27272a" strokeWidth="1"></polygon>
<polygon fill="none" points="100,60 135,80 135,120 100,140 65,120 65,80" stroke="#27272a" strokeWidth="1"></polygon>

<line stroke="#27272a" strokeWidth="1" x1="100" x2="100" y1="100" y2="20"></line>
<line stroke="#27272a" strokeWidth="1" x1="100" x2="170" y1="100" y2="60"></line>
<line stroke="#27272a" strokeWidth="1" x1="100" x2="170" y1="100" y2="140"></line>
<line stroke="#27272a" strokeWidth="1" x1="100" x2="100" y1="100" y2="180"></line>
<line stroke="#27272a" strokeWidth="1" x1="100" x2="30" y1="100" y2="140"></line>
<line stroke="#27272a" strokeWidth="1" x1="100" x2="30" y1="100" y2="60"></line>

<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(249, 115, 22)', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(234, 88, 12)', stopOpacity: '0.1'}}></stop>
</lineargradient>
</defs>
<polygon className="drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" fill="url(#grad1)" points="100,30 160,70 135,125 100,170 40,135 60,65" stroke="#f97316" strokeWidth="1.5"></polygon>

<polygon fill="none" opacity="0.7" points="100,45 145,75 160,135 100,150 50,130 55,75" stroke="#ef4444" stroke-dasharray="3,3" strokeWidth="1"></polygon>
</svg>
</div>
</div>

<div className="lg:col-span-4 glass-panel rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-medium text-zinc-200">Vulnerabilities</h3>
<div className="flex gap-3 text-[10px] text-zinc-500">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>Misconfig</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Injection</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>Malware</span>
</div>
</div>
<div className="flex justify-center items-center h-48 relative">
<svg className="w-48 h-48 -rotate-90" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="45" stroke="#27272a" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="#27272a" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="15" stroke="#27272a" strokeWidth="0.5"></circle>

<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="5"></line>
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="95" y1="50" y2="50"></line>
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="95"></line>
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="5" y1="50" y2="50"></line>
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="82" y1="50" y2="18"></line> 
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="82" y1="50" y2="82"></line>
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="18" y1="50" y2="82"></line>
<line stroke="#27272a" strokeWidth="0.5" x1="50" x2="18" y1="50" y2="18"></line>


<path d="M50 50 L50 10 A40 40 0 0 1 85 30 Z" fill="rgba(249, 115, 22, 0.4)" stroke="#f97316" strokeWidth="0.5"></path>
<path d="M50 50 L85 30 A40 40 0 0 1 90 50 Z" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" strokeWidth="0.5"></path>

<path d="M50 50 L50 90 A40 40 0 0 0 85 75 Z" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" strokeWidth="0.5"></path>

<path d="M50 50 L20 20 A40 40 0 0 1 50 10 Z" fill="rgba(202, 138, 4, 0.2)" stroke="#ca8a04" strokeWidth="0.5"></path>
</svg>
</div>
</div>

<div className="lg:col-span-8 glass-panel rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-medium text-zinc-200">Affected Entities</h3>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">Sort by Risk</span>
<i className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300" data-lucide="chevron-down"></i>
</div>
</div>
<div className="w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800/50">
<th className="py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">ID</th>
<th className="py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Type</th>
<th className="py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">CVSS Score</th>
<th className="py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">IP / Hex</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-zinc-800/20 transition-colors border-b border-zinc-800/30">
<td className="py-4 text-zinc-400 font-mono text-xs">001</td>
<td className="py-4 text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600" data-lucide="monitor"></i>
                                        Production Server
                                    </td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="text-red-400 font-medium">9.2</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[92%] h-full bg-red-500"></div>
</div>
</div>
</td>
<td className="py-4 text-zinc-500 font-mono text-xs text-right group-hover:text-zinc-300">192.168.10.45</td>
</tr>
<tr className="group hover:bg-zinc-800/20 transition-colors border-b border-zinc-800/30">
<td className="py-4 text-zinc-400 font-mono text-xs">002</td>
<td className="py-4 text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600" data-lucide="database"></i>
                                        SQL Database
                                    </td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="text-orange-400 font-medium">7.4</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[74%] h-full bg-orange-500"></div>
</div>
</div>
</td>
<td className="py-4 text-zinc-500 font-mono text-xs text-right group-hover:text-zinc-300">10.0.52.112</td>
</tr>
<tr className="group hover:bg-zinc-800/20 transition-colors">
<td className="py-4 text-zinc-400 font-mono text-xs">003</td>
<td className="py-4 text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600" data-lucide="smartphone"></i>
                                        Admin Endpoint
                                    </td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="text-yellow-500 font-medium">5.8</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[58%] h-full bg-yellow-600"></div>
</div>
</div>
</td>
<td className="py-4 text-zinc-500 font-mono text-xs text-right group-hover:text-zinc-300">172.16.0.22</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
