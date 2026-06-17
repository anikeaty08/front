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
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">

<div className="flex h-16 items-center border-b border-slate-100 px-6">
<div className="flex items-center gap-2 text-slate-900">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
<i className="h-5 w-5" data-lucide="bot"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Peer</span>
</div>
</div>

<nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
<div className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400 px-2">Platform</div>
<a className="group flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-slate-200/50" href="#">
<i className="h-4 w-4 text-slate-900" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4 text-slate-400 group-hover:text-slate-900" data-lucide="git-branch"></i>
                    Repositories
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4 text-slate-400 group-hover:text-slate-900" data-lucide="blocks"></i>
                    Installations
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4 text-slate-400 group-hover:text-slate-900" data-lucide="activity"></i>
                    Audit Logs
                </a>
<div className="mt-8 mb-4 text-xs font-medium uppercase tracking-wider text-slate-400 px-2">Resources</div>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4 text-slate-400 group-hover:text-slate-900" data-lucide="key"></i>
                    API Keys
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4 text-slate-400 group-hover:text-slate-900" data-lucide="credit-card"></i>
                    Subscription
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<i className="h-4 w-4 text-slate-400 group-hover:text-slate-900" data-lucide="book"></i>
                    Docs
                </a>
</nav>

<div className="border-t border-slate-200 bg-slate-50/50 p-4">
<a className="flex items-center gap-3 rounded-lg p-2 hover:bg-white hover:shadow-sm transition-all" href="#">
<img alt="User" className="h-9 w-9 rounded-full bg-slate-200 border border-slate-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="flex-1 overflow-hidden">
<p className="truncate text-sm font-medium text-slate-900">anirbansantra</p>
<p className="truncate text-xs text-slate-500">Free Plan</p>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="log-out"></i>
</a>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"><i className="h-5 w-5" data-lucide="menu"></i></button>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<i className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="h-9 w-64 rounded-full border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-0 transition-all" placeholder="Search repositories..." type="text"/>
</div>
<button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900">
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
<i className="h-5 w-5" data-lucide="bell"></i>
</button>
</div>
</header>
<div className="p-8 max-w-7xl mx-auto space-y-8">

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 fade-in">

<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:-translate-y-1 hover:shadow-lg">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Total PRs</p>
<h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">3</h3>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<i className="h-6 w-6" data-lucide="git-pull-request"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-1 text-xs font-medium text-green-600">
<i className="h-3 w-3" data-lucide="trending-up"></i>
<span>100% success rate</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:-translate-y-1 hover:shadow-lg">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Issues Found</p>
<h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">39</h3>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
<i className="h-6 w-6" data-lucide="alert-circle"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-1 text-xs font-medium text-amber-600">
<span>Requires attention</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:-translate-y-1 hover:shadow-lg">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Connected Repos</p>
<h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">29</h3>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
<i className="h-6 w-6" data-lucide="link"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-400">
<span>Last updated 2m ago</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-slate-900 bg-slate-900 p-6 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y-[-2rem] rounded-full bg-white/5 blur-2xl"></div>
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-300">Token Usage</p>
<span className="rounded bg-white/20 px-2 py-0.5 text-xs font-medium text-white">FREE</span>
</div>
<div className="mt-4">
<div className="flex items-end gap-2">
<h3 className="text-3xl font-semibold tracking-tight">0</h3>
<span className="mb-1 text-sm text-slate-400">/ 1,000</span>
</div>
<div className="mt-3 h-1.5 w-full rounded-full bg-slate-800">
<div className="h-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" style={{width: '2%'}}></div>
</div>
<p className="mt-3 text-xs text-slate-400">Resets on Feb 4, 2026</p>
</div>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3 fade-in delay-100">

<div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
<div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
<h2 className="font-semibold text-slate-900">Recent Activity</h2>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900">View All</button>
</div>
<div className="p-6">
<div className="relative space-y-8">

<div className="absolute left-3.5 top-2 h-[80%] w-0.5 bg-slate-100"></div>

<div className="relative flex gap-4">
<div className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-white bg-green-100 ring-1 ring-slate-100">
<i className="h-3.5 w-3.5 text-green-700" data-lucide="check"></i>
</div>
<div className="flex-1 rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-slate-900">anirbansantra/test #11</span>
<span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700">Completed</span>
</div>
<p className="mt-1 text-xs text-slate-500">Commit 66eb329 • Auto-Merge Enabled</p>
</div>
<span className="text-xs text-slate-400">10/22/2025</span>
</div>
<div className="mt-3 flex items-center gap-4 border-t border-slate-200/60 pt-3">
<div className="flex flex-col">
<span className="text-[10px] font-medium uppercase text-slate-400">Issues</span>
<span className="text-sm font-medium text-slate-900">13</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium uppercase text-slate-400">Severity</span>
<div className="flex gap-2 text-xs">
<span className="flex items-center gap-1 text-amber-600"><span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> 2 Med</span>
<span className="flex items-center gap-1 text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> 11 Low</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex gap-4">
<div className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-white bg-blue-100 ring-1 ring-slate-100">
<i className="h-3.5 w-3.5 text-blue-700" data-lucide="git-commit-horizontal"></i>
</div>
<div className="flex-1 rounded-lg border border-slate-100 bg-white p-4 transition-colors hover:bg-slate-50">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-slate-900">anirbansantra/test #10</span>
<span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700">Completed</span>
</div>
<p className="mt-1 text-xs text-slate-500">Commit 66eb329 • Auto-Commit</p>
</div>
<span className="text-xs text-slate-400">10/22/2025</span>
</div>
<div className="mt-3 flex items-center gap-4">
<div className="flex -space-x-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700 ring-2 ring-white">2</span>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 ring-2 ring-white">11</span>
</div>
<span className="text-xs text-slate-500">13 issues found</span>
</div>
</div>
</div>

<div className="relative flex gap-4">
<div className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-white bg-slate-100 ring-1 ring-slate-100">
<i className="h-3.5 w-3.5 text-slate-600" data-lucide="git-pull-request-draft"></i>
</div>
<div className="flex-1 rounded-lg border border-slate-100 bg-white p-4 transition-colors hover:bg-slate-50">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-slate-900">anirbansantra/test #3</span>
<span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700">Completed</span>
</div>
<p className="mt-1 text-xs text-slate-500">Commit 66eb329 • Manual Trigger</p>
</div>
<span className="text-xs text-slate-400">10/22/2025</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="mb-4 text-sm font-semibold text-slate-900">Installation Settings</h3>
<div className="mb-6 flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
<div className="flex h-10 w-10 items-center justify-center rounded bg-white shadow-sm">
<img alt="GitHub" className="h-6 w-6 opacity-80" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</div>
<div className="flex-1 overflow-hidden">
<p className="truncate text-sm font-medium text-slate-900">anirbansantra748</p>
<p className="text-xs text-slate-500">29 repositories active</p>
</div>
<button className="rounded-md border border-slate-200 bg-white p-1.5 hover:bg-slate-50">
<i className="h-4 w-4 text-slate-500" data-lucide="settings-2"></i>
</button>
</div>
<div className="space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-start gap-2">
<div className="mt-0.5">
<i className="h-4 w-4 text-purple-600" data-lucide="git-merge"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Auto-Merge</p>
<p className="text-xs text-slate-500">Merge PR if checks pass</p>
</div>
</div>

<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300 checked:bg-white" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="border-t border-slate-100 pt-4">
<p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">Auto-Fix Severities</p>
<div className="space-y-2">
<label className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 hover:bg-slate-50">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-600"></span>
<span className="text-sm text-slate-700">Critical</span>
</div>
<div className="h-4 w-4 rounded border border-slate-300 bg-slate-900 text-white flex items-center justify-center">
<i className="h-3 w-3" data-lucide="check"></i>
</div>
</label>
<label className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 hover:bg-slate-50">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-sm text-slate-700">High</span>
</div>
<div className="h-4 w-4 rounded border border-slate-300 bg-slate-900 text-white flex items-center justify-center">
<i className="h-3 w-3" data-lucide="check"></i>
</div>
</label>
<label className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 hover:bg-slate-50">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-yellow-400"></span>
<span className="text-sm text-slate-700">Medium</span>
</div>
<div className="h-4 w-4 rounded border border-slate-300 bg-white"></div>
</label>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-slate-900 p-6 text-white shadow-lg">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
<i className="h-5 w-5 text-yellow-400" data-lucide="zap"></i>
</div>
<h4 className="mt-4 text-sm font-semibold">Upgrade to Pro</h4>
<p className="mt-1 text-xs text-slate-400 leading-relaxed">Get unlimited scans, priority queue, and AI-powered fix suggestions.</p>
<button className="mt-4 w-full rounded-lg bg-white py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors">
                                View Plans
                            </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden fade-in delay-200">
<div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
<h2 className="font-semibold text-slate-900">Repository Statistics</h2>
<div className="flex gap-2">
<button className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
<i className="h-3.5 w-3.5" data-lucide="filter"></i> Filter
                            </button>
<button className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Export
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-xs font-medium uppercase text-slate-500">
<tr>
<th className="px-6 py-3">Repository</th>
<th className="px-6 py-3">Total PRs</th>
<th className="px-6 py-3">Issues Found</th>
<th className="px-6 py-3">Fix Rate</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-slate-100 p-1.5">
<i className="h-full w-full text-slate-400" data-lucide="folder"></i>
</div>
<div>
<p className="font-medium text-slate-900">anirbansantra748/test</p>
<p className="text-xs text-slate-500">Updated 2m ago</p>
</div>
</div>
</td>
<td className="px-6 py-4">3</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                                            39 issues
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 rounded-full bg-slate-100">
<div className="h-1.5 w-0 rounded-full bg-green-500"></div>
</div>
<span className="text-xs text-slate-500">0%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Active
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-slate-100 p-1.5">
<i className="h-full w-full text-slate-400" data-lucide="folder"></i>
</div>
<div>
<p className="font-medium text-slate-900">peer-platform/api</p>
<p className="text-xs text-slate-500">Updated 1h ago</p>
</div>
</div>
</td>
<td className="px-6 py-4">124</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                                            2 issues
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 rounded-full bg-slate-100">
<div className="h-1.5 w-[80%] rounded-full bg-green-500"></div>
</div>
<span className="text-xs text-slate-500">80%</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Active
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<footer className="mt-12 border-t border-slate-200 bg-white py-10 px-8">
<div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
<div className="space-y-4">
<div className="flex items-center gap-2 text-slate-900">
<i className="h-5 w-5" data-lucide="bot"></i>
<span className="text-lg font-semibold tracking-tight">Peer</span>
</div>
<p className="max-w-xs text-sm text-slate-500">AI-powered code review and automated fixes for your GitHub repositories. Ship better code faster.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="h-4 w-4" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="h-4 w-4" data-lucide="github"></i></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="h-4 w-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
<div>
<h4 className="mb-4 text-sm font-semibold text-slate-900">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Dashboard</a></li>
<li><a className="hover:text-slate-900" href="#">Repositories</a></li>
<li><a className="hover:text-slate-900" href="#">Installations</a></li>
<li><a className="hover:text-slate-900" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-sm font-semibold text-slate-900">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Documentation</a></li>
<li><a className="hover:text-slate-900" href="#">API Reference</a></li>
<li><a className="hover:text-slate-900" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-sm font-semibold text-slate-900">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
                    © 2026 Peer Platform Inc. All rights reserved.
                </div>
</footer>
</main>
</div>


    </>
  );
}
