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
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      
<div className="flex min-h-screen">

<aside className="w-64 border-r border-zinc-800/50 bg-black flex flex-col fixed h-full z-20 hidden md:flex">
<div className="p-6 pb-8 border-b border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<i className="text-white w-5 h-5 stroke-[1.5]" data-lucide="scan-face"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Peer</span>
</div>
</div>
<nav className="flex-1 px-4 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-900/50 text-white border border-zinc-800 shadow-sm transition-all group" href="#">
<i className="w-5 h-5 text-indigo-400 stroke-[1.5]" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="git-pull-request"></i>
<span className="text-sm font-medium">Runs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="box"></i>
<span className="text-sm font-medium">Repositories</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Security</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="settings"></i>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>
<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden ring-1 ring-zinc-700">
<img alt="User" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://github.com/shadcn.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Anirban S.</span>
<span className="text-xs text-zinc-500">Pro Plan</span>
</div>
<i className="w-4 h-4 text-zinc-600 ml-auto" data-lucide="chevron-up"></i>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 relative bg-black">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-zinc-950/50 to-black pointer-events-none"></div>

<header className="sticky top-0 z-10 glass-panel border-b border-zinc-800/50 px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">anirbansantra748</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-xs font-medium text-zinc-400">
<i className="w-3.5 h-3.5" data-lucide="book"></i>
<span>Docs</span>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell"></i>
</button>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto space-y-8 pb-20">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Dashboard</h1>
<p className="text-base text-zinc-500">Real-time insights into your code quality and automated reviews.</p>
</div>
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-medium text-emerald-500">System Operational</span>
</div>
</div>

<div className="relative group rounded-xl bg-zinc-900/20 border border-zinc-800/60 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
<i className="w-5 h-5 text-yellow-500 fill-yellow-500/20 stroke-[1.5]" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-200">Token Usage</h3>
<p className="text-sm text-zinc-500">Monthly allocation for LLM analysis</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300">Free Plan</span>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors">Upgrade</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
<div className="col-span-2 space-y-2">
<div className="flex justify-between text-sm">
<span className="text-zinc-400">0 Used</span>
<span className="text-zinc-400">1,000 Limit</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[0%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
<div className="text-right">
<span className="block text-3xl font-semibold text-white tracking-tight">1,000</span>
<span className="text-sm text-zinc-500">Tokens Remaining</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="git-merge"></i>
</div>
<span className="text-xs font-medium text-zinc-500">Last 30 days</span>
</div>
<div className="space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">3</span>
<p className="text-sm text-zinc-500">Total PRs Analyzed</p>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-400 group-hover:text-orange-400 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="alert-circle"></i>
</div>
</div>
<div className="space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">39</span>
<p className="text-sm text-zinc-500">Issues Detected</p>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">0</span>
<p className="text-sm text-zinc-500">Issues Auto-Fixed</p>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-400 group-hover:text-indigo-400 transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="link"></i>
</div>
</div>
<div className="space-y-1">
<span className="text-3xl font-semibold text-white tracking-tight">29</span>
<p className="text-sm text-zinc-500">Connected Repos</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/30">
<h3 className="text-base font-medium text-zinc-200 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="sliders-horizontal"></i>
                                    Configuration
                                </h3>
<span className="flex h-2 w-2">
<span className="animate-pulse inline-flex h-full w-full rounded-full bg-emerald-500"></span>
</span>
</div>
<div className="p-6 space-y-6">

<div className="flex items-center justify-between p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://github.com/shadcn.png"/>
</div>
<div>
<h4 className="text-base font-medium text-white">anirbansantra748</h4>
<p className="text-sm text-zinc-500">29 repositories connected</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium tracking-wide">ACTIVE</span>
<button className="p-2 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
</div>

<div className="flex items-center justify-between">
<div className="space-y-1">
<h4 className="text-base font-medium text-zinc-200">Auto-Merge</h4>
<p className="text-sm text-zinc-500">Automatically merge PRs when all checks pass</p>
</div>
<label className="relative inline-flex items-center cursor-pointer group">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
</div>

<div className="h-px w-full bg-zinc-800"></div>

<div className="space-y-3">
<h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider text-xs">Auto-Fix Severities</h4>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors">CRITICAL</button>
<button className="px-3 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium hover:bg-orange-500/20 transition-colors">HIGH</button>
<button className="px-3 py-1.5 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium hover:bg-yellow-500/20 transition-colors">MEDIUM</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-500 text-xs font-medium hover:text-zinc-300 transition-colors">LOW</button>
</div>
<p className="text-sm text-emerald-500/80 flex items-center gap-2 mt-2">
<i className="w-3 h-3" data-lucide="check"></i>
                                        Configuration synced
                                    </p>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden min-h-[300px]">
<div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/30">
<h3 className="text-base font-medium text-zinc-200 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="activity"></i>
                                    Recent Activity
                                </h3>
</div>
<div className="divide-y divide-zinc-800/50">

<div className="p-4 hover:bg-zinc-900/40 transition-colors group cursor-pointer flex items-start gap-4">
<div className="mt-1">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<i className="w-4 h-4 text-emerald-400 stroke-2" data-lucide="check"></i>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-200">test/repo</span>
<span className="text-zinc-600 text-sm">#11</span>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">AUTO-MERGE</span>
</div>
<p className="text-xs text-zinc-500">Completed analysis • 10m ago</p>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="bug"></i>
                                                18 Issues
                                            </div>
<div className="h-1 w-1 bg-zinc-700 rounded-full"></div>
<div className="flex gap-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">2 Medium</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">11 Low</span>
</div>
<div className="ml-auto flex items-center gap-1 text-xs text-zinc-600 font-mono">
<i className="w-3 h-3" data-lucide="git-commit"></i>
                                                99cba29
                                            </div>
</div>
</div>
</div>

<div className="p-4 hover:bg-zinc-900/40 transition-colors group cursor-pointer flex items-start gap-4">
<div className="mt-1">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<i className="w-4 h-4 text-emerald-400 stroke-2" data-lucide="check"></i>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-zinc-200">test/repo</span>
<span className="text-zinc-600 text-sm">#10</span>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 tracking-wide">AUTO-COMMIT</span>
</div>
<p className="text-xs text-zinc-500">Completed analysis • 2h ago</p>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-1 text-xs text-zinc-400">
<i className="w-3 h-3" data-lucide="bug"></i>
                                                15 Issues
                                            </div>
<div className="h-1 w-1 bg-zinc-700 rounded-full"></div>
<div className="flex gap-1">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">5 Medium</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">2 Low</span>
</div>
<div className="ml-auto flex items-center gap-1 text-xs text-zinc-600 font-mono">
<i className="w-3 h-3" data-lucide="git-commit"></i>
                                                a1b2c3d
                                            </div>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-zinc-800 bg-zinc-900/30 text-center">
<button className="text-xs font-medium text-zinc-500 hover:text-white transition-colors">View All Activity</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/30">
<h3 className="text-base font-medium text-zinc-200">Repository Stats</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500 font-medium">
<tr>
<th className="px-6 py-3">Repo</th>
<th className="px-6 py-3 text-right">Success</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" data-lucide="folder"></i>
<span className="text-sm text-zinc-300">test/repo</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400">100%</span>
</td>
</tr>
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" data-lucide="folder"></i>
<span className="text-sm text-zinc-300">api/core</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/10 text-yellow-400">85%</span>
</td>
</tr>
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" data-lucide="folder"></i>
<span className="text-sm text-zinc-300">ui/web</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400">92%</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded-xl border border-zinc-800 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-indigo-500" data-lucide="cpu"></i>
</div>
<h3 className="text-base font-medium text-white mb-2 relative z-10">Integration Healthy</h3>
<p className="text-sm text-zinc-400 mb-4 relative z-10">The analyzer worker is running optimally. 2 jobs queued.</p>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                Worker: v2.4.1
                             </div>
</div>
</div>
</div>
</div>

<footer className="border-t border-zinc-800/50 mt-auto bg-black py-12">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<i className="text-indigo-500 w-5 h-5" data-lucide="scan-face"></i>
<span className="text-lg font-semibold tracking-tight text-white">Peer</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">AI-powered code review and automated fixes for your GitHub repositories. Ship better code, faster.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Dashboard</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Repositories</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Installations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Audit Logs</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Keys</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Subscription</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Support &amp; Help</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 Peer. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span>All systems normal</span>
</div>
<span>v1.0.2</span>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
