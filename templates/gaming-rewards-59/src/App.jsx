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
      

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0A0A0A] to-[#0A0A0A]"></div>

<nav className="hidden md:flex sticky top-0 z-50 bg-[#0A0A0A]/60 backdrop-blur-xl border-b border-white/5 h-16 items-center px-6 lg:px-10 justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#F5C518] to-amber-300 drop-shadow-sm" href="#">
                GOLDENCHANCE
            </a>

<div className="flex items-center gap-6 text-sm font-medium text-gray-400">
<a className="text-white hover:text-white transition-colors flex items-center gap-2 drop-shadow-md" href="#">
<iconify-icon className="text-lg" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="hover:text-white transition-colors" href="#">Challenges</a>
<a className="hover:text-white transition-colors" href="#">Missions</a>
<a className="hover:text-white transition-colors" href="#">Leaderboard</a>
<a className="hover:text-white transition-colors" href="#">Rewards</a>
</div>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-3 bg-gradient-to-b from-[#1A1A1A] to-[#121212] rounded-full px-4 py-1.5 ring-1 ring-white/10 shadow-sm hover:shadow-md hover:ring-amber-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer">
<iconify-icon className="text-[#F5C518]" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-sm font-semibold tracking-tight text-white">12,450 GC</span>
<button className="bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 hover:to-white/5 text-white rounded-full p-1 transition-colors ml-2 ring-1 ring-white/10">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<button className="relative text-gray-400 hover:text-white transition-colors active:scale-95">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-br from-[#FF5252] to-red-700 rounded-full ring-2 ring-[#0A0A0A] shadow-[0_0_8px_rgba(255,82,82,0.6)]"></span>
</button>

<button className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F5C518] via-amber-400 to-orange-500 p-[2px] shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
<div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?img=11"/>
</div>
</button>
</div>
</nav>

<main className="flex-1 w-full max-w-[1440px] mx-auto p-4 sm:p-6 lg:p-8 space-y-10">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<div className="flex items-center gap-3">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Welcome back, PlayerOne</h1>
<span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500/20 to-[#F5C518]/5 ring-1 ring-[#F5C518]/30 text-[#F5C518] px-2.5 py-1 rounded-full text-xs font-semibold shadow-[0_0_12px_rgba(245,197,24,0.15)]">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                        Level 24
                    </span>
</div>
<p className="text-sm text-gray-400">Complete 2 more daily missions to unlock the Gold Tier chest.</p>
</div>
<div className="w-full md:w-64 bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-4 rounded-2xl ring-1 ring-white/5 shadow-lg shadow-black/40 space-y-3">
<div className="flex justify-between text-xs font-medium text-gray-400">
<span>XP Progress</span>
<span className="font-mono text-white">8,400 / 10K</span>
</div>
<div className="w-full h-2 bg-black/50 rounded-full overflow-hidden shadow-inner ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-orange-500 via-[#F5C518] to-yellow-300 rounded-full animate-progress relative shadow-[0_0_10px_rgba(245,197,24,0.5)]" style={{width: '84%'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
</div>
</div>
</div>
</header>

<section className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-5 rounded-2xl ring-1 ring-white/5 shadow-md shadow-black/40 hover:shadow-xl hover:ring-white/10 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col gap-3 cursor-default group">
<div className="flex items-center justify-between text-gray-400 group-hover:text-white transition-colors">
<span className="text-xs font-medium uppercase tracking-wider">Total Points</span>
<iconify-icon className="text-lg" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">45,200</span>
</div>

<div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-5 rounded-2xl ring-1 ring-white/5 shadow-md shadow-black/40 hover:shadow-xl hover:ring-emerald-500/20 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col gap-3 cursor-default group">
<div className="flex items-center justify-between text-gray-400">
<span className="text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">Win Rate</span>
<iconify-icon className="text-lg text-[#00E676] drop-shadow-[0_0_8px_rgba(0,230,118,0.4)]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">68.5%</span>
</div>

<div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-5 rounded-2xl ring-1 ring-white/5 shadow-md shadow-black/40 hover:shadow-xl hover:ring-amber-500/20 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col gap-3 cursor-default group">
<div className="flex items-center justify-between text-gray-400">
<span className="text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">Active Streak</span>
<iconify-icon className="text-lg text-[#F5C518] drop-shadow-[0_0_8px_rgba(245,197,24,0.4)]" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">12 Days</span>
</div>

<div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-5 rounded-2xl ring-1 ring-amber-500/10 shadow-md shadow-black/40 hover:shadow-xl hover:shadow-amber-500/10 hover:ring-amber-500/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col gap-3 justify-center items-center group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/5 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-amber-500/30 shadow-[0_0_15px_rgba(245,197,24,0.15)] relative z-10">
<iconify-icon className="text-[#F5C518] text-xl" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-white relative z-10">Claim Daily Reward</span>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<section className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 flex items-center gap-2">
<iconify-icon className="text-[#F5C518] drop-shadow-sm" icon="solar:gamepad-linear"></iconify-icon>
                        Live Challenges
                    </h2>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                        View All <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="relative overflow-hidden bg-gradient-to-br from-fuchsia-900/40 via-[#1A1A1A] to-[#121212] p-[1px] rounded-2xl shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-fuchsia-500/10 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group cursor-pointer ring-1 ring-fuchsia-500/30">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent opacity-50"></div>
<div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold rounded-bl-lg z-10 flex items-center gap-1 shadow-md">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_5px_white]"></span> Live
                        </div>
<div className="relative w-full h-full rounded-[15px] p-5 flex flex-col justify-between gap-6 backdrop-blur-sm">
<div className="space-y-1">
<h3 className="text-lg font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-fuchsia-100">Neon Nights Sprint</h3>
<p className="text-xs text-fuchsia-200/60">First to 10,000 points wins</p>
</div>
<div className="grid grid-cols-2 gap-4 bg-black/40 backdrop-blur-md p-3 rounded-xl shadow-inner ring-1 ring-white/5">
<div>
<span className="text-xs text-gray-400 block mb-1">Prize Pool</span>
<span className="font-mono text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-yellow-200">250,000 GC</span>
</div>
<div>
<span className="text-xs text-gray-400 block mb-1">Ends In</span>
<span className="font-mono text-sm font-semibold text-white drop-shadow-sm">02:14:59</span>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#1A1A1A] shadow-sm" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#1A1A1A] shadow-sm" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#1A1A1A] shadow-sm" src="https://i.pravatar.cc/100?img=3"/>
<div className="w-6 h-6 rounded-full ring-2 ring-fuchsia-500/30 bg-black/60 backdrop-blur-sm flex items-center justify-center text-xs text-fuchsia-200 font-medium shadow-sm">+1.2k</div>
</div>
<button className="bg-gradient-to-r from-white to-gray-200 text-[#121212] px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                                    Join - 100 GC
                                </button>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-2xl ring-1 ring-white/5 shadow-md shadow-black/40 p-5 flex flex-col justify-between gap-6 hover:shadow-xl hover:shadow-emerald-500/5 hover:ring-emerald-500/20 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="space-y-1 relative z-10">
<h3 className="text-lg font-semibold tracking-tight text-white">Weekend Multiplier</h3>
<p className="text-xs text-gray-400">Earn 2x points on all arcade modes</p>
</div>
<div className="grid grid-cols-2 gap-4 bg-black/30 p-3 rounded-xl shadow-inner ring-1 ring-white/5 relative z-10">
<div>
<span className="text-xs text-gray-500 block mb-1">Reward</span>
<span className="font-mono text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-emerald-300">Multiplier Badge</span>
</div>
<div>
<span className="text-xs text-gray-500 block mb-1">Starts In</span>
<span className="font-mono text-sm font-semibold text-white">14:00:00</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 relative z-10">
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 542 Registered
                            </span>
<button className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-white/20 hover:to-white/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                                Register Free
                            </button>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-[#00E676] drop-shadow-[0_0_5px_rgba(0,230,118,0.4)]" icon="solar:checklist-minimalistic-linear"></iconify-icon>
                        Daily Missions
                    </h2>
</div>
<div className="bg-gradient-to-b from-[#1A1A1A] to-[#121212] rounded-2xl ring-1 ring-white/5 shadow-lg shadow-black/40 flex flex-col divide-y divide-white/5 overflow-hidden">

<div className="p-4 hover:bg-white/[0.03] cursor-pointer transition-colors group">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-sm font-medium text-white group-hover:text-amber-100 transition-colors">Play 5 Arcade Games</h4>
<p className="text-xs text-gray-500 mt-0.5">Complete any arcade mode</p>
</div>
<span className="text-xs font-semibold text-[#F5C518] bg-gradient-to-r from-[#F5C518]/20 to-amber-500/5 px-2 py-1 rounded-md shadow-sm ring-1 ring-[#F5C518]/20">+500 GC</span>
</div>
<div className="flex items-center gap-3 mt-4">
<div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden shadow-inner ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full shadow-[0_0_8px_rgba(245,197,24,0.4)]" style={{width: '60%'}}></div>
</div>
<span className="font-mono text-xs text-gray-400">3/5</span>
</div>
</div>

<div className="p-4 hover:bg-white/[0.03] cursor-pointer transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00E676]/20 to-emerald-500/5 text-[#00E676] flex items-center justify-center shadow-sm ring-1 ring-[#00E676]/30">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-400 line-through decoration-gray-600">Log in for 3 days</h4>
</div>
</div>
</div>
<button className="w-full mt-3 bg-gradient-to-r from-emerald-500/10 to-green-500/5 text-emerald-400 hover:from-emerald-500/20 hover:to-green-500/10 ring-1 ring-emerald-500/20 py-2 rounded-lg text-xs font-semibold active:scale-[0.98] transition-all duration-300">
                            Claim Reward
                        </button>
</div>

<div className="p-4 hover:bg-white/[0.03] cursor-pointer transition-colors group">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-sm font-medium text-white group-hover:text-amber-100 transition-colors">Win a Challenge</h4>
<p className="text-xs text-gray-500 mt-0.5">Place 1st in any live challenge</p>
</div>
<span className="text-xs font-semibold text-[#F5C518] bg-gradient-to-r from-[#F5C518]/20 to-amber-500/5 px-2 py-1 rounded-md shadow-sm ring-1 ring-[#F5C518]/20">+2,000 GC</span>
</div>
<div className="flex items-center gap-3 mt-4">
<div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden shadow-inner ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full shadow-sm" style={{width: '0%'}}></div>
</div>
<span className="font-mono text-xs text-gray-400">0/1</span>
</div>
</div>
</div>
</section>
</div>

<section className="space-y-6 pt-4 relative z-10">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-[#F5C518] drop-shadow-[0_0_5px_rgba(245,197,24,0.4)]" icon="solar:cup-star-linear"></iconify-icon>
                    Global Top Players
                </h2>
<div className="flex bg-black/40 backdrop-blur-sm rounded-lg p-1 ring-1 ring-white/10 shadow-inner">
<button className="px-3 py-1 text-xs font-medium bg-gradient-to-b from-white/10 to-transparent text-white rounded-md shadow-sm active:scale-95 transition-all duration-300 ring-1 ring-white/5">Today</button>
<button className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white rounded-md active:scale-95 transition-all duration-300">Weekly</button>
</div>
</div>
<div className="bg-gradient-to-b from-[#1A1A1A] to-[#121212] rounded-2xl ring-1 ring-white/5 shadow-lg shadow-black/40 overflow-hidden">
<div className="grid grid-cols-[40px_1fr_100px] sm:grid-cols-[60px_1fr_120px_120px] gap-4 p-4 border-b border-white/5 text-xs font-medium text-gray-500 uppercase tracking-wider bg-black/20">
<div className="text-center">Rank</div>
<div>Player</div>
<div className="text-right sm:text-left">Points</div>
<div className="hidden sm:block text-right">Prize</div>
</div>
<div className="divide-y divide-white/5">

<div className="grid grid-cols-[40px_1fr_100px] sm:grid-cols-[60px_1fr_120px_120px] gap-4 p-4 items-center hover:bg-white/[0.03] cursor-pointer transition-colors">
<div className="text-center text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-600 font-bold drop-shadow-sm">#1</div>
<div className="flex items-center gap-3">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full shadow-sm relative z-10" src="https://i.pravatar.cc/150?img=33"/>
<div className="absolute inset-0 rounded-full bg-amber-400 blur-[6px] opacity-40 z-0"></div>
</div>
<span className="text-sm font-medium text-white">CryptoKing99</span>
</div>
<div className="font-mono text-sm text-gray-300 text-right sm:text-left">1.2M</div>
<div className="hidden sm:block text-right text-sm font-medium text-[#00E676]">$5,000</div>
</div>

<div className="grid grid-cols-[40px_1fr_100px] sm:grid-cols-[60px_1fr_120px_120px] gap-4 p-4 items-center hover:bg-white/[0.03] cursor-pointer transition-colors">
<div className="text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-500 font-bold">#2</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full shadow-sm" src="https://i.pravatar.cc/150?img=44"/>
<span className="text-sm font-medium text-white">NeonRider</span>
</div>
<div className="font-mono text-sm text-gray-300 text-right sm:text-left">980K</div>
<div className="hidden sm:block text-right text-sm font-medium text-white">$2,500</div>
</div>

<div className="grid grid-cols-[40px_1fr_100px] sm:grid-cols-[60px_1fr_120px_120px] gap-4 p-4 items-center bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-2 border-[#F5C518]">
<div className="text-center text-gray-400 font-mono">142</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full ring-2 ring-amber-500/50 shadow-[0_0_10px_rgba(245,197,24,0.2)]" src="https://i.pravatar.cc/150?img=11"/>
<span className="text-sm font-semibold text-white drop-shadow-sm">PlayerOne (You)</span>
</div>
<div className="font-mono text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-amber-300 text-right sm:text-left">45.2K</div>
<div className="hidden sm:block text-right text-sm font-medium text-gray-500">-</div>
</div>
</div>
</div>
</section>
</main>

<div className="md:hidden fixed bottom-0 w-full bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/10 pb-safe z-50">
<div className="flex justify-around items-center h-16 px-2">
<a className="flex flex-col items-center gap-1 text-white p-2 active:scale-95 transition-transform drop-shadow-md" href="#">
<iconify-icon className="text-xl" icon="solar:home-smile-bold"></iconify-icon>
<span className="text-xs font-medium scale-90">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-gray-500 hover:text-white p-2 active:scale-95 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-xs font-medium scale-90">Play</span>
</a>
<a className="flex flex-col items-center gap-1 text-gray-500 hover:text-white p-2 active:scale-95 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:gift-linear"></iconify-icon>
<span className="text-xs font-medium scale-90">Rewards</span>
</a>
<a className="flex flex-col items-center gap-1 text-gray-500 hover:text-white p-2 active:scale-95 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs font-medium scale-90">Wallet</span>
</a>
<a className="flex flex-col items-center gap-1 text-gray-500 hover:text-white p-2 active:scale-95 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
<span className="text-xs font-medium scale-90">Profile</span>
</a>
</div>
</div>

    </>
  );
}
