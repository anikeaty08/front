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
      

<div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:terminal" data-width="20"></span>
<span className="text-white font-medium tracking-tighter text-sm">DEVMODE</span>
</div>
<button className="text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>

<aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-zinc-950/30 h-screen sticky top-0">
<div className="p-6 flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-white shadow-lg shadow-black/50">
<span className="iconify" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="16"></span>
</div>
<span className="text-zinc-100 font-semibold tracking-tight text-sm">DEVMODE</span>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<div className="px-2 mb-2 text-xs font-medium uppercase tracking-wider text-zinc-600">Platform</div>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:layout-grid" data-width="16"></span>
                Overview
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:activity" data-width="16"></span>
                Activity
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:git-branch" data-width="16"></span>
                Deployments
            </a>
<div className="px-2 mt-8 mb-2 text-xs font-medium uppercase tracking-wider text-zinc-600">Settings</div>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-100 bg-white/5 rounded-md transition-all shadow-sm shadow-black/20 ring-1 ring-white/5" href="#">
<span className="iconify text-white" data-icon="lucide:key" data-width="16"></span>
                API Keys
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:shield" data-width="16"></span>
                Security
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:users" data-width="16"></span>
                Team
            </a>
</nav>
<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-white/5 transition-colors">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 flex items-center justify-center text-[10px] text-white font-bold border border-white/10">JD</div>
<div className="flex flex-col items-start">
<span className="text-xs text-zinc-200 font-medium">Jane Doe</span>
<span className="text-[10px] text-zinc-500">Pro Plan</span>
</div>
<span className="iconify ml-auto text-zinc-600" data-icon="lucide:chevrons-up-down" data-width="14"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="hidden md:flex items-center justify-between px-8 py-4 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-40">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">jdoe-org</span>
<span className="iconify" data-icon="lucide:slash" data-width="12"></span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">platform-api</span>
<span className="iconify" data-icon="lucide:slash" data-width="12"></span>
<span className="text-zinc-200 font-medium">Keys</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs border border-white/5 bg-zinc-900/50 px-3 py-1.5 rounded-full hover:border-white/20">
<span className="iconify" data-icon="lucide:book" data-width="12"></span>
                    Documentation
                </button>
<div className="h-4 w-[1px] bg-zinc-800"></div>
<button className="text-zinc-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">API Keys</h1>
<p className="text-sm text-zinc-500 max-w-2xl">Manage API keys to access the platform programmatically. Keys inherit your user permissions.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 border border-white/10 rounded-md hover:bg-zinc-800 hover:text-white transition-all shadow-sm">
                        Revoke All
                    </button>
<button className="px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-md hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                        Create New Key
                    </button>
</div>
</div>

<div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 flex items-start gap-4">
<span className="iconify text-amber-500 mt-0.5" data-icon="lucide:alert-triangle" data-width="18"></span>
<div>
<h4 className="text-sm font-medium text-amber-500 mb-1">Production Environment</h4>
<p className="text-xs text-amber-500/70 leading-relaxed">
                        You are currently viewing keys for the production environment. Be careful when revoking keys as it may interrupt live services.
                    </p>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-zinc-200 tracking-tight">Active Keys</h2>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="bg-zinc-900/50 border border-white/10 text-xs text-zinc-300 rounded-md pl-9 pr-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all placeholder:text-zinc-600" placeholder="Search keys..." type="text"/>
</div>
</div>
<div className="bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden backdrop-blur-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-8">
<div className="flex items-center justify-center">
<input className="appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-800 checked:bg-white checked:border-white focus:outline-none transition-colors cursor-pointer" type="checkbox"/>
</div>
</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Key Hint</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Scope</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Created</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Last Used</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-4 text-center">
<input className="appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-800 checked:bg-white checked:border-white focus:outline-none transition-colors cursor-pointer opacity-0 group-hover:opacity-100" type="checkbox"/>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:laptop" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">MacBook Pro Local</p>
<p className="text-xs text-zinc-600">Development</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<code className="text-xs font-mono text-zinc-500 bg-black/20 px-2 py-1 rounded border border-white/5">pk_live_...93f2</code>
<button className="ml-2 text-zinc-600 hover:text-zinc-300 transition-colors" title="Copy">
<span className="iconify" data-icon="lucide:copy" data-width="12"></span>
</button>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Full Access</span>
</td>
<td className="py-4 px-4 text-xs text-zinc-400">Oct 24, 2023</td>
<td className="py-4 px-4">
<span className="text-xs text-zinc-300">Just now</span>
</td>
<td className="py-4 px-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-4 text-center">
<input className="appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-800 checked:bg-white checked:border-white focus:outline-none transition-colors cursor-pointer opacity-0 group-hover:opacity-100" type="checkbox"/>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
<span className="iconify" data-icon="lucide:server" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">CI/CD Pipeline</p>
<p className="text-xs text-zinc-600">GitHub Actions</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<code className="text-xs font-mono text-zinc-500 bg-black/20 px-2 py-1 rounded border border-white/5">sk_test_...81a0</code>
<button className="ml-2 text-zinc-600 hover:text-zinc-300 transition-colors" title="Copy">
<span className="iconify" data-icon="lucide:copy" data-width="12"></span>
</button>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">Read Only</span>
</td>
<td className="py-4 px-4 text-xs text-zinc-400">Sep 12, 2023</td>
<td className="py-4 px-4">
<span className="text-xs text-zinc-500">2d ago</span>
</td>
<td className="py-4 px-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-4 text-center">
<input className="appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-800 checked:bg-white checked:border-white focus:outline-none transition-colors cursor-pointer opacity-0 group-hover:opacity-100" type="checkbox"/>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:globe" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Vercel Integration</p>
<p className="text-xs text-zinc-600">Production</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<code className="text-xs font-mono text-zinc-500 bg-black/20 px-2 py-1 rounded border border-white/5">pk_live_...22b9</code>
<button className="ml-2 text-zinc-600 hover:text-zinc-300 transition-colors" title="Copy">
<span className="iconify" data-icon="lucide:copy" data-width="12"></span>
</button>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Full Access</span>
</td>
<td className="py-4 px-4 text-xs text-zinc-400">Aug 01, 2023</td>
<td className="py-4 px-4">
<span className="text-xs text-zinc-500">1w ago</span>
</td>
<td className="py-4 px-4 text-right">
<button className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">

<div className="p-6 border border-white/5 rounded-lg bg-zinc-900/20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/5 rounded-md border border-white/5">
<span className="iconify text-zinc-400" data-icon="lucide:globe-lock" data-width="18"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200">IP Restrictions</h3>
<p className="text-xs text-zinc-500">Limit key usage to specific IP addresses.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-zinc-400 border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300" id="ip-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="ip-toggle"></label>
</input></div>
</div>
<div className="space-y-3 pt-2">
<div className="flex gap-2">
<input className="flex-1 bg-zinc-900/50 border border-white/5 text-xs text-zinc-500 rounded px-3 py-2 cursor-not-allowed" disabled="" type="text" value="192.168.1.1"/>
<button className="p-2 text-zinc-500 hover:text-red-400 transition-colors border border-white/5 rounded bg-zinc-900 hover:bg-red-500/10 hover:border-red-500/20">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</button>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-black/20 border border-white/10 text-xs text-zinc-300 rounded px-3 py-2 focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-600" placeholder="Add IP Address (e.g. 10.0.0.1)" type="text"/>
<button className="px-3 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors">
                                Add
                            </button>
</div>
</div>
</div>

<div className="p-6 border border-white/5 rounded-lg bg-zinc-900/20">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/5 rounded-md border border-white/5">
<span className="iconify text-zinc-400" data-icon="lucide:bar-chart-3" data-width="18"></span>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200">Usage Limits</h3>
<p className="text-xs text-zinc-500">Set monthly quotas for API requests.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-zinc-400 border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300" id="limit-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-600 cursor-pointer" htmlFor="limit-toggle"></label>
</input></div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Current Usage</span>
<span className="text-zinc-200 font-mono">842,102 / 1,000,000</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-zinc-500 to-white h-1.5 rounded-full" style={{width: '84%'}}></div>
</div>
</div>
<div className="pt-2">
<label className="block text-xs text-zinc-500 mb-2">Monthly Cap Adjustment</label>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-zinc-300" max="100" min="1" type="range" value="84"/>
<div className="flex justify-between text-[10px] text-zinc-600 mt-2">
<span>100k</span>
<span>500k</span>
<span>1M</span>
<span>5M</span>
<span>Unlimited</span>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2023 DevMode Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Status</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Contact</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
