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
      

<aside className="w-72 border-r border-zinc-900 flex flex-col bg-[#050505] flex-shrink-0 h-full overflow-y-auto">

<div className="p-4 space-y-4">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center text-black font-bold text-xs">S</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-100">Studios</span>
<span className="text-xs text-zinc-500">v0.1 beta</span>
</div>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-left"></i>
</div>

<div className="relative group">
<i className="absolute left-2.5 top-2.5 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md py-2 pl-9 pr-8 text-sm placeholder:text-zinc-600 text-zinc-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="Quick actions" type="text"/>
<div className="absolute right-2 top-2 flex gap-1">
<kbd className="hidden group-focus-within:inline-flex items-center justify-center h-5 w-5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700 font-sans">↵</kbd>
<kbd className="group-focus-within:hidden inline-flex items-center justify-center h-5 w-5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700 font-sans">K</kbd>
</div>
</div>
</div>

<nav className="flex-1 px-2 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-zinc-900/40 text-emerald-400 border-l-[3px] border-emerald-500" href="#">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                Command Center
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="check-square"></i>
                Tasks
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="mail"></i>
                Emails
            </a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                    Reports
                </div>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700">Soon</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="zap"></i>
                    Automations
                </div>
<span className="text-[10px] bg-emerald-900/30 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-900/50">NEW</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                Playbooks
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                Users
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="link-2"></i>
                Platform Users
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                Settings
            </a>
</nav>

<div className="p-4 border-t border-zinc-900 mt-auto space-y-6">

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="user"></i>
</div>
<div className="flex flex-col overflow-hidden">
<span className="text-xs font-medium text-zinc-200 truncate">Jayden Quaynor</span>
<span className="text-[10px] text-zinc-500 truncate">jaydenquaynor@gmail.com</span>
</div>
</div>

<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="bug"></i>
                    Debug Panel
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="wand-2"></i>
                    Setup Wizard
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="book"></i>
                    Documentation
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Invite teammates
                </a>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-300"><span className="font-semibold text-emerald-400">14</span> days left on trial</span>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-black text-xs font-semibold py-1.5 rounded transition-colors">
                    Add billing
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-y-auto bg-black relative">

<header className="flex items-center justify-between px-8 py-6 sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b border-transparent">
<div className="flex flex-col">
<div className="text-xs text-zinc-500 mb-1">Studios</div>
<h1 className="text-xl font-medium text-zinc-100 tracking-tight">Command Center</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-yellow-400 transition-colors"><i className="w-5 h-5" data-lucide="sun"></i></button>
<button className="text-zinc-500 hover:text-purple-400 transition-colors"><i className="w-5 h-5" data-lucide="triangle-alert"></i></button>
<button className="text-zinc-500 hover:text-zinc-200 transition-colors"><i className="w-5 h-5" data-lucide="share-2"></i></button>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<span className="text-xs font-semibold text-zinc-300">V</span>
</div>
</div>
</header>
<div className="px-8 pb-12 space-y-8 max-w-7xl mx-auto w-full">

<div className="relative bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-transparent opacity-80"></div>
<div className="p-6 md:p-8">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-red-500/30 bg-red-500/10 text-red-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="flame"></i> Action Required
                                </span>
<span className="text-[10px] text-zinc-500 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Updated 2m ago
                                </span>
</div>
<div className="flex items-baseline gap-2 mb-1">
<h2 className="text-4xl font-semibold text-red-500 tracking-tight">$2,196</h2>
<span className="text-xl text-zinc-400 font-light">/mo at risk</span>
</div>
<p className="text-sm text-zinc-400"><strong className="text-zinc-200 font-medium">4 paying customers</strong> showing churn signals</p>
</div>
<div className="flex gap-4">

<div className="bg-zinc-950 border border-zinc-800/50 rounded-lg p-4 min-w-[200px]">
<div className="flex items-center gap-2 text-xs font-medium text-emerald-500 mb-2">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i> POTENTIAL SAVED
                                </div>
<div className="text-2xl font-semibold text-emerald-500 tracking-tight">$1,471<span className="text-sm text-emerald-500/60 font-normal">/mo</span></div>
</div>

<div className="bg-zinc-950 border border-zinc-800/50 rounded-lg p-4 min-w-[200px]">
<div className="flex items-center gap-2 text-xs font-medium text-red-500 mb-2">
<i className="w-3.5 h-3.5" data-lucide="trending-down"></i> COST OF INACTION
                                </div>
<div className="text-2xl font-semibold text-red-500 tracking-tight">0 churns <span className="text-sm text-red-500/60 font-normal">today</span></div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/20 border border-emerald-900/50 rounded text-xs text-emerald-400">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            67% are saveable if you act today
                        </div>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-semibold py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20 group">
<i className="w-4 h-4 text-emerald-950" data-lucide="sparkles"></i>
                            SHOW ME WHO
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<div className="text-center">
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Auto-assign playbook</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4">
<div className="flex items-center gap-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
<i className="w-3 h-3" data-lucide="play-circle"></i> Active Playbooks
                    </div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">2</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4">
<div className="flex items-center gap-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
<i className="w-3 h-3" data-lucide="users"></i> Enrolled Users
                    </div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">6</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4">
<div className="flex items-center gap-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
<i className="w-3 h-3" data-lucide="trending-up"></i> MRR At Risk
                    </div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">$2,196</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-900/5"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 text-[10px] font-medium text-emerald-500 uppercase tracking-wider mb-2">
<i className="w-3 h-3" data-lucide="check"></i> Potential Saved
                        </div>
<div className="text-2xl font-semibold text-emerald-500 tracking-tight">$1,537</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-medium text-zinc-100">Active Playbooks</h3>
<p className="text-xs text-zinc-500">6 actions scheduled today</p>
</div>
<div className="flex items-center gap-2">
<button className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs px-3 py-1.5 rounded hover:border-zinc-700 transition-colors flex items-center gap-2">
                            All categories <i className="w-3 h-3" data-lucide="filter"></i>
</button>
<button className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs px-3 py-1.5 rounded hover:border-zinc-700 transition-colors flex items-center gap-2">
                            Sort: Impact <i className="w-3 h-3" data-lucide="arrow-up-down"></i>
</button>
<button className="bg-emerald-600 hover:bg-emerald-500 text-black text-xs font-semibold px-3 py-1.5 rounded transition-colors">
                            Manage Playbooks
                        </button>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-5">
<div className="flex items-start justify-between mb-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-red-500" data-lucide="alert-triangle"></i>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="text-sm font-semibold text-zinc-100">At-Risk Recovery</h4>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 border border-red-500/20">Retention</span>
</div>
<p className="text-xs text-zinc-500">Re-engage users showing churn signals</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-zinc-400">Active</span>
</div>
</div>
<div className="grid grid-cols-4 gap-6 mb-6">
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 uppercase font-medium">Enrolled</div>
<div className="text-lg font-medium text-zinc-200">3</div>
<div className="text-xs text-zinc-500">users</div>
</div>
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 uppercase font-medium">MRR at Risk</div>
<div className="text-lg font-medium text-zinc-200">$1,998</div>
<div className="text-xs text-zinc-500">/month</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-zinc-500 uppercase font-medium">Success Rate</div>
<div className="text-lg font-medium text-emerald-500">70%</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[70%] rounded-full"></div>
</div>
</div>
<div className="space-y-1 border-l border-emerald-500/20 pl-4">
<div className="text-[10px] text-zinc-500 uppercase font-medium">Potential Saved</div>
<div className="text-lg font-medium text-emerald-500">$1,399</div>
<div className="text-xs text-zinc-500">if 70% succeed</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-800">
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="zap"></i> 3 actions today</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="clock"></i> 2 steps</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="check"></i> 0 completed</span>
</div>
<button className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded transition-colors">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i> View Details
                        </button>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-5">
<div className="flex items-start justify-between mb-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-500" data-lucide="rocket"></i>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="text-sm font-semibold text-zinc-100">Onboarding Success</h4>
<span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Onboarding</span>
</div>
<p className="text-xs text-zinc-500">Guide new users through activation</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-zinc-400">Active</span>
</div>
</div>
<div className="grid grid-cols-4 gap-6 mb-6">
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 uppercase font-medium">Enrolled</div>
<div className="text-lg font-medium text-zinc-200">3</div>
<div className="text-xs text-zinc-500">users</div>
</div>
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 uppercase font-medium">MRR at Risk</div>
<div className="text-lg font-medium text-zinc-200">$198</div>
<div className="text-xs text-zinc-500">/month</div>
</div>
<div className="space-y-2">
<div className="text-[10px] text-zinc-500 uppercase font-medium">Success Rate</div>
<div className="text-lg font-medium text-emerald-500">70%</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[70%] rounded-full"></div>
</div>
</div>
<div className="space-y-1 border-l border-emerald-500/20 pl-4">
<div className="text-[10px] text-zinc-500 uppercase font-medium">Potential Saved</div>
<div className="text-lg font-medium text-emerald-500">$139</div>
<div className="text-xs text-zinc-500">if 70% succeed</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-800">
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="zap"></i> 3 actions today</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="clock"></i> 1 steps</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3" data-lucide="check"></i> 0 completed</span>
</div>
<button className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded transition-colors">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i> View Details
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-medium text-zinc-100">Your Impact This Week</h3>
<p className="text-xs text-zinc-500">Wins and problems discovered</p>
</div>
<button className="bg-emerald-600/20 text-emerald-400 text-[10px] font-medium px-2 py-1 rounded border border-emerald-500/30">Share</button>
</div>

<div className="bg-zinc-900/10 border border-emerald-500/20 rounded-lg p-4 relative h-[220px] flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-lg pointer-events-none"></div>
<div className="flex items-center justify-between mb-2 relative z-10">
<div className="flex items-center gap-2 text-emerald-500">
<i className="w-4 h-4" data-lucide="check"></i>
<span className="text-xs font-semibold">Wins</span>
</div>
<span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded border border-zinc-700">Positive</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
<i className="w-8 h-8 text-zinc-700 mb-3 stroke-[1]" data-lucide="trophy"></i>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Complete actions to track wins</h4>
<p className="text-xs text-zinc-500 max-w-[250px]">Take action on at-risk customers and we'll track your success rate here.</p>
</div>
</div>

<div className="bg-zinc-900/10 border border-amber-500/20 rounded-lg p-4 relative h-[180px] flex flex-col">
<div className="flex items-center justify-between mb-2 relative z-10">
<div className="flex items-center gap-2 text-amber-500">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
<span className="text-xs font-semibold">Needs Attention</span>
</div>
<span className="bg-amber-900/30 text-amber-500 text-[10px] px-2 py-0.5 rounded border border-amber-500/20">Warning</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="shield-check"></i>
</div>
<h4 className="text-sm font-medium text-emerald-500 mb-1">No issues detected</h4>
<p className="text-xs text-zinc-500 max-w-[280px]">Your retention metrics are looking good. Keep monitoring for changes.</p>
</div>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-5 h-full">
<div className="mb-6">
<h3 className="text-base font-medium text-zinc-100">7-Day Forecast</h3>
<p className="text-xs text-zinc-500">Churn, upgrade, and expansion signals</p>
</div>
<div className="space-y-6">

<div className="pb-6 border-b border-zinc-800/50">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="bg-red-500/20 text-red-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-red-500/20">Likely to churn</span>
<span className="text-xs text-zinc-300 font-medium">2 users <span className="text-zinc-500 font-normal">$0/mo</span></span>
</div>
<span className="text-xs font-semibold text-emerald-500">78%</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
<div className="h-full bg-red-500 w-[78%] rounded-full"></div>
</div>
<div className="text-[10px] text-zinc-500 mb-2">Next 3-5 days</div>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<button className="bg-emerald-600 hover:bg-emerald-500 text-black text-[10px] font-semibold px-2 py-1 rounded">Open list</button>
<button className="bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-[10px] px-2 py-1 rounded border border-zinc-700">Drill down</button>
</div>
<button className="text-[10px] text-zinc-500 flex items-center gap-1 hover:text-zinc-300">Collapse <i className="w-3 h-3" data-lucide="chevron-up"></i></button>
</div>
</div>

<div className="pb-6 border-b border-zinc-800/50">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-500/20">Likely to upgrade</span>
<span className="text-xs text-zinc-300 font-medium">4 users <span className="text-zinc-500 font-normal">$196/mo</span></span>
</div>
<span className="text-xs font-semibold text-emerald-500">65%</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
<div className="h-full bg-emerald-500 w-[65%] rounded-full"></div>
</div>
<div className="text-[10px] text-zinc-500 mb-2">Best timing: Next 2-3 days</div>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<button className="bg-emerald-800/50 text-emerald-400 border border-emerald-700/50 hover:bg-emerald-800 hover:text-emerald-200 text-[10px] font-medium px-2 py-1 rounded">Prioritize upsell</button>
<button className="text-zinc-400 hover:text-zinc-200 text-[10px] px-2 py-1">Drill down</button>
</div>
<button className="text-[10px] text-zinc-500 flex items-center gap-1 hover:text-zinc-300">Collapse <i className="w-3 h-3" data-lucide="chevron-up"></i></button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="bg-sky-500/20 text-sky-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-sky-500/20">Ready for expansion</span>
<span className="text-xs text-zinc-300 font-medium">2 users <span className="text-zinc-500 font-normal">$116/mo</span></span>
</div>
<span className="text-xs font-semibold text-sky-500">45%</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
<div className="h-full bg-sky-600 w-[45%] rounded-full"></div>
</div>
<div className="flex items-center justify-end">
<button className="text-[10px] text-zinc-500 flex items-center gap-1 hover:text-zinc-300">Expand <i className="w-3 h-3" data-lucide="chevron-down"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="pt-6 border-t border-zinc-900 pb-20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="activity"></i>
<h3 className="text-sm font-medium text-zinc-100">Live Intelligence</h3>
</div>
<button className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] px-2 py-1 rounded">Pause</button>
</div>
<p className="text-xs text-zinc-500 mb-6">Newest signals first</p>
<div className="space-y-6 relative border-l border-zinc-800 ml-2 pl-6">

<div className="relative">
<div className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-black"></div>
<div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">2 Mins Ago</div>
<h4 className="text-xs font-medium text-zinc-200 mb-0.5">Churn Pattern Detected</h4>
<p className="text-xs text-zinc-500 mb-2">Emma Davis: High churn risk</p>
<a className="text-xs text-emerald-500 hover:text-emerald-400 flex items-center gap-1" href="#">Personal outreach recommended <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="relative opacity-60">
<div className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-amber-600 ring-4 ring-black"></div>
<div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wide">2 Mins Ago</div>
<h4 className="text-xs font-medium text-zinc-200 mb-0.5">Churn Pattern Detected</h4>
<p className="text-xs text-zinc-500 mb-2">Emma Davis: High churn risk</p>
<a className="text-xs text-emerald-500 hover:text-emerald-400 flex items-center gap-1" href="#">Personal outreach recommended <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 w-10 h-10 bg-[#7c3aed] hover:bg-[#6d28d9] rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-900/50 transition-colors z-50">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</button>
</main>


    </>
  );
}
