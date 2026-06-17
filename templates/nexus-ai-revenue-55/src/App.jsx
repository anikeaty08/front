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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="w-64 flex-shrink-0 border-r border-slate-800/60 bg-[#0B1120] hidden md:flex flex-col justify-between h-full">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-800/60">
<div className="flex items-center gap-2 text-slate-100">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-lg">NEXUS AI</span>
</div>
</div>

<nav className="px-3 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-slate-800/50 rounded-lg border border-slate-700/50" href="#">
<iconify-icon className="text-blue-500" icon="solar:widget-2-linear"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-slate-300" icon="solar:phone-calling-linear"></iconify-icon>
<span>Conversations</span>
<span className="ml-auto text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded-full">24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-slate-300" icon="solar:chart-square-linear"></iconify-icon>
<span>Deal Board</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-slate-300" icon="solar:target-linear"></iconify-icon>
<span>Pipeline</span>
</a>
<div className="pt-4 pb-2 px-3 text-xs font-medium uppercase tracking-wider text-slate-600">Intelligence</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-slate-300" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Team Performance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-violet-200 hover:bg-violet-500/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="text-violet-500" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-medium">AI Coaching</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-slate-300" icon="solar:graph-new-up-linear"></iconify-icon>
<span>Forecasting</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-slate-800/60">
<div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-300">Q4 Health</span>
<span className="text-xs text-amber-500 font-medium">78%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
</div>
<div className="text-[10px] text-slate-500">$2.4M at risk</div>
</div>
<div className="mt-4 flex items-center gap-3 px-1">
<div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
<img alt="User" src="https://ui-avatars.com/api/?name=Marcus+Johnson&amp;background=0F172A&amp;color=fff"/>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-200 truncate">Marcus Johnson</div>
<div className="text-xs text-slate-500 truncate">VP of Sales</div>
</div>
<iconify-icon className="text-slate-500 cursor-pointer hover:text-slate-300" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto bg-[#0F172A] scroll-smooth">

<header className="h-16 sticky top-0 z-30 glass-panel border-b border-slate-800/60 flex items-center justify-between px-8">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-800/50 border border-slate-700 text-sm text-slate-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-600" placeholder="Search deals, reps, or ask AI..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-md border border-slate-700/50">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>Q4 2024</span>
<iconify-icon className="text-xs ml-2" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="relative text-slate-400 hover:text-slate-200 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full border border-[#0F172A]"></span>
</button>
</div>
</header>
<div className="p-8 max-w-[1600px] mx-auto space-y-8">

<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<h1 className="text-2xl font-semibold text-slate-100 tracking-tight">Good morning, Marcus 👋</h1>
<p className="text-slate-500 mt-1">Here's what's happening with your revenue today.</p>
</div>
<div className="flex-1 ai-glow bg-slate-900/50 rounded-xl p-4 border border-violet-500/20 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-violet-500" icon="solar:stars-minimalistic-linear" width="60"></iconify-icon>
</div>
<div className="flex gap-3 items-start relative z-10">
<div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-violet-200">AI Priority Alert</h3>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">3 enterprise deals show buying signals but lack follow-up. Estimated revenue at risk: <span className="text-slate-200 font-medium">$890K</span>. Assign action now →</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Pipeline</span>
<iconify-icon className="text-slate-500" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100 font-grotesk tracking-tight">$8.2M</div>
<div className="flex items-center gap-1 mt-2 text-xs text-emerald-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span>12% vs last qtr</span>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Forecast</span>
<iconify-icon className="text-slate-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100 font-grotesk tracking-tight">$2.1M</div>
<div className="flex items-center gap-1 mt-2 text-xs text-emerald-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span>8% commit inc.</span>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Win Rate</span>
<iconify-icon className="text-slate-500" icon="solar:cup-first-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100 font-grotesk tracking-tight">68%</div>
<div className="flex items-center gap-1 mt-2 text-xs text-emerald-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span>5% above avg</span>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Calls Analyzed</span>
<iconify-icon className="text-slate-500" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100 font-grotesk tracking-tight">342</div>
<div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
<span>This week</span>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Avg Cycle</span>
<iconify-icon className="text-slate-500" icon="solar:hourglass-linear"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-100 font-grotesk tracking-tight">24d</div>
<div className="flex items-center gap-1 mt-2 text-xs text-emerald-400">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
<span>3 days faster</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-medium text-slate-200">Revenue Forecast — Q4 2024</h3>
<button className="text-xs text-slate-400 hover:text-white flex items-center gap-1">Weekly <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>

<div className="h-48 flex items-end gap-8 relative px-4">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-600 pointer-events-none pb-6">
<div className="border-b border-slate-700/30 w-full">3M</div>
<div className="border-b border-slate-700/30 w-full">2M</div>
<div className="border-b border-slate-700/30 w-full">1M</div>
<div className="border-b border-slate-700/30 w-full">0</div>
</div>

<div className="flex-1 flex flex-col justify-end h-full z-10 group relative">
<div className="w-full bg-slate-700/30 h-[30%] rounded-t-sm mb-0.5 opacity-50"></div> 
<div className="w-full bg-blue-500/30 h-[15%] mb-0.5"></div> 
<div className="w-full bg-blue-600 h-[12%] mb-0.5"></div> 
<div className="w-full bg-emerald-500 h-[28%] rounded-b-sm relative"> 
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-20 shadow-xl">$2.4M Total</div>
</div>
<div className="text-center text-xs text-slate-500 mt-2">Oct</div>
</div>

<div className="flex-1 flex flex-col justify-end h-full z-10 group relative">
<div className="w-full bg-slate-700/30 h-[40%] rounded-t-sm mb-0.5 opacity-50"></div>
<div className="w-full bg-blue-500/30 h-[20%] mb-0.5"></div>
<div className="w-full bg-blue-600 h-[18%] rounded-b-sm mb-0.5 relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-20 shadow-xl">$2.4M Proj.</div>
</div>
<div className="text-center text-xs text-slate-500 mt-2">Nov</div>
</div>

<div className="flex-1 flex flex-col justify-end h-full z-10 group relative">
<div className="w-full bg-slate-700/30 h-[50%] rounded-t-sm mb-0.5 opacity-50"></div>
<div className="w-full bg-blue-500/30 h-[15%] mb-0.5"></div>
<div className="w-full bg-blue-600 h-[10%] rounded-b-sm mb-0.5 relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-20 shadow-xl">$3.6M Proj.</div>
</div>
<div className="text-center text-xs text-slate-500 mt-2">Dec</div>
</div>
</div>

<div className="flex items-center gap-4 justify-center mt-6">
<div className="flex items-center gap-2 text-xs text-slate-400"><div className="w-2 h-2 rounded-full bg-emerald-500"></div>Won</div>
<div className="flex items-center gap-2 text-xs text-slate-400"><div className="w-2 h-2 rounded-full bg-blue-600"></div>Commit</div>
<div className="flex items-center gap-2 text-xs text-slate-400"><div className="w-2 h-2 rounded-full bg-blue-500/30"></div>Best Case</div>
<div className="flex items-center gap-2 text-xs text-slate-400"><div className="w-2 h-2 rounded-full bg-slate-600"></div>Pipeline</div>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-0 overflow-hidden flex flex-col">
<div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-rose-500/5">
<h3 className="font-medium text-rose-200">⚠️ Deals at Risk</h3>
<span className="text-xs font-medium text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">$2.4M Total</span>
</div>
<div className="p-4 space-y-3 flex-1 overflow-y-auto">

<div className="p-3 bg-slate-900/50 border border-rose-900/30 rounded-lg hover:border-rose-500/30 transition-colors cursor-pointer group">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">Acme Corp</span>
<span className="text-sm font-grotesk text-slate-200">$180K</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] text-slate-500">Owner: Tom Wilson</span>
<span className="text-[10px] text-rose-400 bg-rose-500/10 px-1 rounded">No contact 12d</span>
</div>
<div className="text-[11px] text-slate-400 italic border-l-2 border-violet-500 pl-2">
                                    "AI Suggestion: Send value-focused ROI email."
                                </div>
</div>

<div className="p-3 bg-slate-900/50 border border-amber-900/30 rounded-lg hover:border-amber-500/30 transition-colors cursor-pointer group">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">Wayne Ent.</span>
<span className="text-sm font-grotesk text-slate-200">$95K</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] text-slate-500">Owner: Emily Park</span>
<span className="text-[10px] text-amber-400 bg-amber-500/10 px-1 rounded">Single threaded</span>
</div>
<div className="text-[11px] text-slate-400 italic border-l-2 border-violet-500 pl-2">
                                    "Request finance intro."
                                </div>
</div>
</div>
<div className="p-3 border-t border-slate-700/50 bg-slate-800/30 text-center">
<button className="text-xs text-slate-400 hover:text-white font-medium">View all 8 at-risk deals</button>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<h3 className="font-medium text-lg text-slate-200">Deal Pipeline</h3>
<span className="text-xs text-slate-500 border border-slate-700 rounded px-2 py-0.5">47 Deals</span>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"><iconify-icon icon="solar:filter-linear" width="18"></iconify-icon></button>
<button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-md flex items-center gap-1">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Deal
                            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-slate-800/20 rounded-xl p-3 border border-slate-800/60 min-h-[300px]">
<div className="flex justify-between items-center mb-3 px-1">
<span className="text-xs font-medium text-slate-400">Discovery</span>
<span className="text-[10px] text-slate-500">$1.2M</span>
</div>

<div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm mb-3 hover:border-blue-500/50 transition-colors cursor-pointer group">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200">Acme Corp</span>
<iconify-icon className="text-slate-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="text-xs text-slate-400 mb-2">$180,000</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mb-2">
<div className="bg-gradient-to-r from-red-500 to-orange-500 h-full w-1/3"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-5 h-5 rounded-full bg-slate-600 text-[9px] flex items-center justify-center text-white">TW</div>
<span className="text-[10px] text-red-400 flex items-center gap-1"><iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> Risk</span>
</div>
</div>
</div>

<div className="bg-slate-800/20 rounded-xl p-3 border border-slate-800/60 min-h-[300px]">
<div className="flex justify-between items-center mb-3 px-1">
<span className="text-xs font-medium text-slate-400">Qualified</span>
<span className="text-[10px] text-slate-500">$2.4M</span>
</div>

<div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm mb-3 hover:border-blue-500/50 transition-colors cursor-pointer">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200">Globex Sys</span>
<iconify-icon className="text-slate-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="text-xs text-slate-400 mb-2">$240,000</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mb-2">
<div className="bg-emerald-500 h-full w-[84%]"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-5 h-5 rounded-full bg-indigo-600 text-[9px] flex items-center justify-center text-white">SC</div>
<span className="text-[10px] text-emerald-400">84/100</span>
</div>
</div>

<div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm mb-3 hover:border-blue-500/50 transition-colors cursor-pointer">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200">Oscorp Inc</span>
<iconify-icon className="text-slate-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="text-xs text-slate-400 mb-2">$185,000</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mb-2">
<div className="bg-amber-500 h-full w-[60%]"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-5 h-5 rounded-full bg-pink-600 text-[9px] flex items-center justify-center text-white">EP</div>
<span className="text-[10px] text-slate-500">2d ago</span>
</div>
</div>
</div>

<div className="bg-slate-800/20 rounded-xl p-3 border border-slate-800/60 min-h-[300px]">
<div className="flex justify-between items-center mb-3 px-1">
<span className="text-xs font-medium text-slate-400">Proposal</span>
<span className="text-[10px] text-slate-500">$1.8M</span>
</div>

<div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm mb-3 hover:border-blue-500/50 transition-colors cursor-pointer">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200">Initech Ltd</span>
<iconify-icon className="text-slate-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="text-xs text-slate-400 mb-2">$320,000</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mb-2">
<div className="bg-yellow-500 h-full w-[72%]"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-5 h-5 rounded-full bg-blue-600 text-[9px] flex items-center justify-center text-white">MR</div>
<span className="text-[10px] text-slate-500">Viewed 3x</span>
</div>
</div>
</div>

<div className="bg-slate-800/20 rounded-xl p-3 border border-slate-800/60 min-h-[300px]">
<div className="flex justify-between items-center mb-3 px-1">
<span className="text-xs font-medium text-slate-400">Negotiation</span>
<span className="text-[10px] text-slate-500">$980K</span>
</div>

<div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-sm mb-3 hover:border-blue-500/50 transition-colors cursor-pointer">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200">Umbrella</span>
<iconify-icon className="text-slate-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="text-xs text-slate-400 mb-2">$280,000</div>
<div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden mb-2">
<div className="bg-emerald-500 h-full w-[91%]"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-5 h-5 rounded-full bg-indigo-600 text-[9px] flex items-center justify-center text-white">SC</div>
<span className="text-[10px] text-emerald-400">Hot 🔥</span>
</div>
</div>
</div>

<div className="bg-emerald-900/10 rounded-xl p-3 border border-emerald-900/30 min-h-[300px]">
<div className="flex justify-between items-center mb-3 px-1">
<span className="text-xs font-medium text-emerald-400">Closed Won</span>
<span className="text-[10px] text-emerald-500">$780K</span>
</div>

<div className="bg-slate-800/80 p-3 rounded-lg border border-emerald-800/50 shadow-sm mb-3">
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-slate-200">Stark Ind.</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="text-xs text-slate-400 mb-2">$195,000</div>
<div className="flex justify-between items-center">
<div className="w-5 h-5 rounded-full bg-indigo-600 text-[9px] flex items-center justify-center text-white">SC</div>
<span className="text-[10px] text-slate-500">Today</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
<div className="p-4 border-b border-slate-700/50 flex justify-between items-center">
<h3 className="font-medium text-slate-200">Recent Conversations</h3>
<button className="text-xs text-blue-400 hover:text-blue-300">View All</button>
</div>
<div className="divide-y divide-slate-800/60">

<div className="p-4 hover:bg-slate-800/50 transition-colors flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<h4 className="text-sm font-medium text-slate-200 truncate">Globex Systems - Discovery</h4>
<span className="text-xs text-slate-500">34 min ago</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Sarah Chen</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span>John Martinez (VP Sales)</span>
</div>
<div className="mt-2 text-xs bg-slate-800/80 p-2 rounded border border-slate-700/50 text-slate-300">
<span className="text-violet-400 font-medium"><iconify-icon className="inline align-middle mr-1" icon="solar:magic-stick-3-linear"></iconify-icon>Insight:</span> Budget of $200-250K confirmed. Competitor Gong mentioned.
                                    </div>
</div>
<div className="text-center w-16">
<div className="text-lg font-bold text-emerald-400 font-grotesk">84</div>
<div className="text-[10px] text-slate-500">Score</div>
</div>
</div>

<div className="p-4 hover:bg-slate-800/50 transition-colors flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700/30 flex items-center justify-center text-slate-400 border border-slate-700/50">
<iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<h4 className="text-sm font-medium text-slate-200 truncate">Initech - Proposal Review</h4>
<span className="text-xs text-slate-500">2 hrs ago</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Mike Rodriguez</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span>Lisa (CTO)</span>
</div>
</div>
<div className="text-center w-16">
<div className="text-lg font-bold text-amber-400 font-grotesk">72</div>
<div className="text-[10px] text-slate-500">Score</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-violet-900/20 to-slate-900 border border-violet-500/20 rounded-xl p-4 flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-violet-400" icon="solar:robot-2-linear" width="24"></iconify-icon>
<h3 className="font-medium text-slate-200">AI Coaching Hub</h3>
</div>
<div className="space-y-3 flex-1">
<div className="bg-slate-900/80 p-3 rounded-lg border border-violet-500/20 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-violet-400 font-semibold">For Sarah Chen</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-2">
                                    "Excellent discovery questions. Try introducing pricing earlier (before min 15) to filter quicker."
                                </p>
<button className="text-[10px] bg-violet-600 hover:bg-violet-500 text-white px-2 py-1 rounded transition-colors">View Playbook</button>
</div>
<div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold">Team Insight</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-2">
                                    Deals where 'decision process' is asked in call #1 close 34% faster. Only 40% of team does this.
                                </p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
