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
      

<aside className="hidden md:flex w-64 flex-col justify-between border-r border-white/5 bg-zinc-950/50 pt-6 pb-6 pl-6 pr-4">
<div>

<div className="flex items-center gap-3 mb-10 pl-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black font-semibold tracking-tighter text-sm">
                    ET
                </div>
<span className="text-sm font-medium text-zinc-100 tracking-tight">ExpenseAI</span>
</div>

<nav className="space-y-1">
<a className="group flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-100 ring-1 ring-white/5 transition-all" href="#">
<iconify-icon className="text-zinc-100" icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
<span className="font-medium tracking-tight">Dashboard</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:wallet-money-linear" width="18"></iconify-icon>
<span className="font-normal tracking-tight">Transactions</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:graph-up-linear" width="18"></iconify-icon>
<span className="font-normal tracking-tight">Analytics</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-all" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<span className="font-normal tracking-tight">AI Insights</span>
</a>
</nav>
</div>

<div className="flex items-center gap-3 px-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 ring-1 ring-white/10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Alex Morgan</span>
<span className="text-xs text-zinc-500">Pro Plan</span>
</div>
<button className="ml-auto text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none z-0"></div>

<header className="flex items-center justify-between border-b border-white/5 bg-zinc-950/80 backdrop-blur-md px-8 py-4 z-10">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h1 className="text-lg font-medium tracking-tight text-white">Dashboard</h1>
<span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot"></span>
                        Live
                    </span>
</div>
<p className="text-xs text-zinc-500 font-normal">October 24, 2023</p>
</div>
<div className="flex items-center gap-4">
<button className="relative rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-red-500"></span>
</button>
<button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:border-white/20 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
<span>Add Expense</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth">
<div className="mx-auto max-w-6xl space-y-8">

<div className="relative group">
<div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
<div className="relative flex items-center rounded-xl bg-zinc-900 border border-white/10 px-4 shadow-2xl">
<iconify-icon className="text-indigo-400 mr-3" icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<input className="h-14 w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none font-light tracking-wide" placeholder='Ask AI: "How much did I spend on cloud services?" or "Add $20 Vercel deployment"' type="text"/>
<div className="flex items-center gap-2 text-xs text-zinc-600 border border-white/5 px-2 py-1 rounded bg-zinc-800/50">
<span className="font-sans">⌘</span>
<span>K</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="ai-gradient-border p-6 flex flex-col justify-between h-40 group hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Total Spend</span>
<span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                                +12.5%
                                <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight flex items-baseline gap-1">
                                $2,840<span className="text-lg text-zinc-500">.50</span>
</div>
<p className="text-xs text-zinc-500 mt-2 font-light">vs $2,524 last month</p>
</div>
</div>

<div className="ai-gradient-border p-6 flex flex-col justify-between h-40 hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Predicted End</span>
<iconify-icon className="text-zinc-600" icon="solar:chart-2-linear" width="18"></iconify-icon>
</div>
<div className="w-full">
<div className="flex justify-between items-end mb-2">
<span className="text-2xl font-medium text-white tracking-tight">$3,200</span>
<span className="text-xs text-zinc-400">Budget: $3,500</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[80%] rounded-full"></div>
</div>
<p className="text-xs text-indigo-400/80 mt-2 flex items-center gap-1 font-light">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                                Safe zone maintained
                            </p>
</div>
</div>

<div className="ai-gradient-border p-6 flex flex-col justify-between h-40 hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Top Category</span>
<iconify-icon className="text-zinc-600" icon="solar:bag-3-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight mb-1">Infrastructure</div>
<div className="flex items-center gap-2 mt-2">
<div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden flex gap-0.5">
<div className="h-full bg-zinc-200 w-[45%]"></div>
<div className="h-full bg-zinc-600 w-[25%]"></div>
<div className="h-full bg-zinc-800 w-[30%]"></div>
</div>
</div>
<p className="text-xs text-zinc-500 mt-2 font-light">45% of total expenses</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-200 tracking-tight">Spending Trends</h2>
<div className="flex bg-zinc-900 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 text-xs text-white bg-white/10 rounded-md shadow-sm font-medium">Week</button>
<button className="px-3 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-medium">Month</button>
</div>
</div>

<div className="h-64 w-full flex items-end justify-between gap-2 pt-8 pb-2 border-b border-white/5 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
<div className="w-full border-t border-dashed border-white/5"></div>
</div>

<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[40%] min-w-[20px]">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded shadow-xl transition-opacity">
                                    $140
                                </div>
</div>
<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[65%] min-w-[20px]"></div>
<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[35%] min-w-[20px]"></div>
<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[85%] min-w-[20px]">

<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-indigo-500/50"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded shadow-xl transition-opacity">
                                    $420
                                </div>
</div>
<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[55%] min-w-[20px]"></div>
<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[45%] min-w-[20px]"></div>
<div className="group relative flex-1 bg-zinc-800/50 hover:bg-zinc-700 transition-all rounded-t-sm h-[70%] min-w-[20px]"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 font-mono uppercase tracking-wider">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="lg:col-span-1 border border-white/5 rounded-2xl bg-zinc-900/30 p-1">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight">Recent</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View All</button>
</div>
<div className="flex flex-col">

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 border border-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/10 transition-colors">
<iconify-icon icon="solar:cup-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 font-medium">Starbucks</span>
<span className="text-[10px] text-zinc-500">Today, 9:41 AM</span>
</div>
</div>
<span className="text-sm text-zinc-200 font-medium">-$5.40</span>
</div>

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 border border-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/10 transition-colors">
<iconify-icon icon="solar:server-square-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 font-medium">Vercel Deployment</span>
<span className="text-[10px] text-zinc-500">Yesterday, 4:20 PM</span>
</div>
</div>
<span className="text-sm text-zinc-200 font-medium">-$49.00</span>
</div>

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 border border-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/10 transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 font-medium">Whole Foods</span>
<span className="text-[10px] text-zinc-500">Oct 22</span>
</div>
</div>
<span className="text-sm text-zinc-200 font-medium">-$84.32</span>
</div>

<div className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 border border-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/10 transition-colors">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-200 font-medium">Refund</span>
<span className="text-[10px] text-zinc-500">Oct 21</span>
</div>
</div>
<span className="text-sm text-emerald-400 font-medium">+$12.00</span>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/10 p-4 flex items-start gap-4">
<div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-indigo-100">AI Spending Analysis</h4>
<p className="mt-1 text-xs text-indigo-200/60 font-light leading-relaxed max-w-2xl">
                            Your <span className="text-indigo-200 font-medium">Infrastructure</span> spending has increased by 15% this month due to added seats on <span className="text-indigo-200 font-medium">Figma</span> and <span className="text-indigo-200 font-medium">Vercel</span>. Consider reviewing idle seats.
                        </p>
<div className="mt-3 flex gap-3">
<button className="text-xs bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded border border-indigo-500/20 transition-colors">Review Subscriptions</button>
<button className="text-xs text-indigo-400/60 hover:text-indigo-400 px-2 py-1.5 transition-colors">Dismiss</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
