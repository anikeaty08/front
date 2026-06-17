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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 border-r border-slate-800 bg-slate-900/30 flex flex-col hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-slate-800">
<span className="text-xl font-medium tracking-tighter text-white">NEXUS</span>
</div>
<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
<div className="text-xs font-medium text-slate-500 mb-2 mt-4 px-2 uppercase tracking-widest">User Panel</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50 text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Mini Games</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Transactions</span>
</a>
<div className="text-xs font-medium text-slate-500 mb-2 mt-8 px-2 uppercase tracking-widest">Admin Control</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">User Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors justify-between" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Requests</span>
</div>
<span className="bg-indigo-500/20 text-indigo-400 text-xs px-1.5 py-0.5 rounded">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Game Settings</span>
</a>
</nav>
<div className="p-4 border-t border-slate-800">
<button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:logout-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Sign Out</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 border-b border-slate-800 bg-slate-900/20 backdrop-blur-md flex items-center justify-between px-6 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-sm text-slate-400 hidden sm:block">Dashboard <span className="mx-2 text-slate-600">/</span> Overview</div>
</div>
<div className="flex items-center gap-5">
<button className="text-slate-400 hover:text-white relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-slate-950"></span>
</button>
<div className="flex items-center gap-3 pl-5 border-l border-slate-800 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
                        AK
                    </div>
<div className="hidden sm:block">
<div className="text-sm text-white group-hover:text-indigo-400 transition-colors">Alex Knight</div>
<div className="text-xs text-slate-500">Demo User</div>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:bg-indigo-500/10"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-6">
<div className="flex justify-between items-start">
<div>
<h2 className="text-sm text-slate-400 mb-1">Virtual Balance</h2>
<div className="text-3xl font-medium text-white tracking-tight">24,500.00 <span className="text-lg text-slate-500 font-normal">VC</span></div>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-xl" icon="solar:wallet-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white text-slate-950 hover:bg-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon> Request Withdraw
                                </button>
<button className="flex-1 bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:arrow-left-down-linear" strokeWidth="1.5"></iconify-icon> Add Funds
                                </button>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:bg-emerald-500/10"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-6">
<div className="flex justify-between items-start">
<div>
<h2 className="text-sm text-slate-400 mb-1">Reward Gems</h2>
<div className="text-3xl font-medium text-white tracking-tight">1,250 <span className="text-lg text-slate-500 font-normal">Gems</span></div>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<iconify-icon className="text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm">Daily bonus available</span>
</div>
<button className="text-xs bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 px-3 py-1.5 rounded font-medium transition-colors">
                                    Claim 50 Gems
                                </button>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-medium text-white tracking-tight">Mini Games</h2>
<span className="text-xs text-slate-400 border border-slate-800 bg-slate-900 px-2 py-1 rounded">2/3 Daily Plays Left</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-all cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Multi</span>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">Flight Crash</h3>
<p className="text-xs text-slate-500">Multiply your bet before the crash.</p>
</div>
</div>

<div className="group relative p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-all cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
<iconify-icon className="text-xl" icon="solar:three-squares-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Chance</span>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1 group-hover:text-amber-400 transition-colors">Neon Slots</h3>
<p className="text-xs text-slate-500">Match symbols to win gems.</p>
</div>
</div>

<div className="group relative p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-all cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20">
<iconify-icon className="text-xl" icon="solar:bomb-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Logic</span>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1 group-hover:text-rose-400 transition-colors">Mine Sweeper</h3>
<p className="text-xs text-slate-500">Find gems, avoid the hidden mines.</p>
</div>
</div>

<div className="group relative p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-all cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<iconify-icon className="text-xl" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Daily</span>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1 group-hover:text-emerald-400 transition-colors">Fortune Wheel</h3>
<p className="text-xs text-slate-500">Spin daily for free rewards.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border border-slate-800 bg-slate-900/30 rounded-2xl overflow-hidden flex flex-col">
<div className="p-5 border-b border-slate-800 flex justify-between items-center">
<h2 className="text-base font-medium text-white tracking-tight">Recent Activity</h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors">View All</button>
</div>
<div className="flex-1 overflow-y-auto">
<div className="divide-y divide-slate-800/50">

<div className="p-4 flex items-center justify-between hover:bg-slate-800/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Won Flight Crash</div>
<div className="text-xs text-slate-500">Multiplier x2.4</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+240 VC</div>
<div className="text-xs text-slate-500">Today, 10:42 AM</div>
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-800/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Withdrawal Request</div>
<div className="text-xs text-slate-500">Pending admin approval</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">-1,000 VC</div>
<div className="text-xs text-amber-500">Pending</div>
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-800/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Lost Mine Sweeper</div>
<div className="text-xs text-slate-500">Hit mine on 3rd tap</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-400">-50 VC</div>
<div className="text-xs text-slate-500">Yesterday</div>
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-800/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Daily Bonus Claimed</div>
<div className="text-xs text-slate-500">System Reward</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+50 Gems</div>
<div className="text-xs text-slate-500">Yesterday</div>
</div>
</div>
</div>
</div>
</div>

<div className="border border-indigo-500/20 bg-indigo-500/5 rounded-2xl overflow-hidden flex flex-col relative">

<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">Admin View</div>
<div className="p-5 border-b border-indigo-500/10 flex justify-between items-center mt-2">
<h2 className="text-base font-medium text-indigo-100 tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                                Pending Requests
                            </h2>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3">

<div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-white">JD</div>
<span className="text-sm text-slate-300">John Doe</span>
</div>
<span className="text-xs text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">Withdrawal</span>
</div>
<div className="text-lg font-medium text-white mb-3">2,500 VC</div>
<div className="flex gap-2">
<button className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs py-1.5 rounded transition-colors">Approve</button>
<button className="flex-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-xs py-1.5 rounded transition-colors">Reject</button>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-white">MR</div>
<span className="text-sm text-slate-300">Mike Ross</span>
</div>
<span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Deposit</span>
</div>
<div className="text-lg font-medium text-white mb-3">1,000 VC</div>
<div className="flex gap-2">
<button className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs py-1.5 rounded transition-colors">Approve</button>
<button className="flex-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-xs py-1.5 rounded transition-colors">Reject</button>
</div>
</div>
</div>
<div className="p-3 border-t border-indigo-500/10 text-center">
<a className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors" href="#">Open Full Admin Panel →</a>
</div>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</main>

    </>
  );
}
