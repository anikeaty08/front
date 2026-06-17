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
      

<nav className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#0A0A0A]/90 backdrop-blur-xl shadow-sm shadow-black/20">
<div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group transition-all duration-200 active:scale-95" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A1A1A] border border-white/[0.08] text-[#F5C518] shadow-md shadow-black/20 transition-all group-hover:border-[#F5C518]/30 group-hover:-translate-y-0.5">
<span className="text-sm font-semibold tracking-tighter">GC</span>
</div>
<span className="hidden text-base font-medium tracking-tight text-zinc-100 sm:block group-hover:text-white transition-colors">GoldenChance</span>
</a>

<div className="hidden md:block">
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-100 transition-colors" href="#">Home</a>
<a className="text-sm text-zinc-500 hover:text-[#F5C518] transition-colors" href="#">Missions</a>
<a className="text-sm text-zinc-500 hover:text-[#F5C518] transition-colors" href="#">Challenges</a>
<a className="text-sm text-zinc-500 hover:text-[#F5C518] transition-colors" href="#">Rewards</a>
</div>
</div>
</div>

<div className="flex items-center gap-4">

<div className="group flex items-center gap-2 rounded-xl border border-[#F5C518]/20 bg-[#121212] py-1 pl-1 pr-3 shadow-md shadow-black/20 transition-all duration-200 hover:border-[#F5C518]/40 hover:bg-[#1A1A1A] hover:-translate-y-0.5 cursor-pointer">
<div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1A1A1A] text-[#F5C518] border border-white/[0.04]">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-numbers text-xs font-medium text-[#F5C518] leading-none mt-0.5">2,450 GC</span>
</div>
<button className="ml-1 flex items-center justify-center text-[#F5C518]/60 hover:text-[#F5C518] transition-colors focus:outline-none active:scale-95">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<button className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-[#1A1A1A] shadow-md shadow-black/20 overflow-hidden hover:border-[#F5C518]/30 hover:-translate-y-0.5 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#F5C518]/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]">
<img alt="User avatar" className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=121212"/>
</button>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">

<section className="relative mb-12 overflow-hidden rounded-2xl border border-white/[0.04] bg-[#1A1A1A] p-8 sm:p-12 lg:p-16 shadow-xl shadow-black/40 isolate">

<div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-[#F5C518]/10 blur-[100px]"></div>
<div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-[#FFD700]/5 blur-[100px]"></div>
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<div className="mb-5 inline-flex items-center gap-1.5 rounded-xl border border-[#F5C518]/20 bg-[#F5C518]/10 px-3 py-1 text-xs font-medium text-[#F5C518] shadow-sm">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
                        Weekend Special Event
                    </div>
<h1 className="mb-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        The Grand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#FFD700]">Prediction</span> Cup
                    </h1>
<p className="mb-8 text-base text-zinc-400 sm:text-lg leading-relaxed">
                        Test your skill against thousands of players. Predict match outcomes, climb the global leaderboard, and claim your share of the massive <span className="font-numbers text-[#F5C518]">100,000 GC</span> prize pool.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5C518] px-6 py-2.5 text-sm font-medium text-[#0A0A0A] shadow-lg shadow-[#F5C518]/20 transition-all duration-200 hover:bg-[#FFD700] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F5C518]/50 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]">
                            Play Now
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#121212] px-6 py-2.5 text-sm font-medium text-zinc-200 shadow-md shadow-black/20 transition-all duration-200 hover:border-[#F5C518]/30 hover:bg-[#1A1A1A] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]">
                            Claim Reward
                        </button>
</div>
</div>

<div className="relative w-full max-w-sm shrink-0 rounded-2xl border border-white/[0.08] bg-[#121212] p-6 shadow-2xl shadow-black/50 transition-transform duration-300 hover:-translate-y-1">
<div className="mb-5 flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight">Live Match</h3>
<span className="flex items-center gap-1.5 text-xs text-[#FF5252] font-medium">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5252] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF5252]"></span>
</span>
                            Live
                        </span>
</div>
<div className="mb-6 flex items-center justify-between">
<div className="text-center">
<div className="mb-2 h-12 w-12 rounded-xl border border-white/[0.04] bg-[#1A1A1A] shadow-inner mx-auto flex items-center justify-center text-xl font-semibold tracking-tight text-white">NA</div>
<span className="text-xs text-zinc-500 font-medium">Team Alpha</span>
</div>
<div className="font-numbers text-xl font-medium text-[#F5C518] px-4 py-1.5 rounded-xl bg-[#1A1A1A] border border-[#F5C518]/20 shadow-inner">2 - 1</div>
<div className="text-center">
<div className="mb-2 h-12 w-12 rounded-xl border border-white/[0.04] bg-[#1A1A1A] shadow-inner mx-auto flex items-center justify-center text-xl font-semibold tracking-tight text-white">EU</div>
<span className="text-xs text-zinc-500 font-medium">Team Beta</span>
</div>
</div>
<div className="space-y-4">
<div>
<label className="mb-3 block flex items-center justify-between text-xs text-zinc-500">
<span>Your Stake (GC)</span>
<span className="font-numbers font-medium text-[#F5C518]">250 GC</span>
</label>
<input max="1000" min="10" type="range" value="250"/>
<div className="mt-2 flex justify-between font-numbers text-xs text-zinc-600">
<span>10</span>
<span>1000</span>
</div>
</div>
<button className="w-full rounded-xl bg-[#F5C518] py-2.5 text-sm font-medium text-[#0A0A0A] shadow-lg shadow-[#F5C518]/20 transition-all duration-200 hover:bg-[#FFD700] hover:-translate-y-0.5 active:scale-95 focus:outline-none">
                            Lock Prediction
                        </button>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="lg:col-span-2 space-y-12">

<section>
<div className="mb-6 flex items-end justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-100">Daily Missions</h2>
<p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Resets in <span className="font-numbers text-zinc-400">04:12:39</span>
</p>
</div>
<a className="text-sm text-[#F5C518] hover:text-[#FFD700] transition-colors" href="#">View all</a>
</div>
<div className="grid gap-4 sm:grid-cols-2">

<div className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#1A1A1A] p-5 shadow-lg shadow-black/20 transition-all duration-200 hover:border-white/[0.1] hover:-translate-y-1">
<div>
<div className="mb-4 flex items-start justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#121212] border border-white/[0.04] text-zinc-400 group-hover:text-[#F5C518] transition-colors">
<iconify-icon className="text-xl" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-1 font-numbers text-xs font-medium text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/20 px-2 py-1 rounded-lg">
                                        +50 GC
                                    </div>
</div>
<h3 className="text-base font-semibold text-zinc-100 tracking-tight mb-1.5">Play 3 Prediction Games</h3>
<p className="text-xs text-zinc-400 line-clamp-2 mb-5">Participate in any active prediction challenge to earn progress.</p>
</div>
<div>
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-zinc-500">Progress</span>
<span className="font-numbers font-medium text-zinc-300">2 / 3</span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#121212] border border-white/[0.02] shadow-inner">
<div className="h-full rounded-full bg-[#F5C518] shadow-[0_0_8px_rgba(245,197,24,0.5)] transition-all" style={{width: '66%'}}></div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-2xl border border-[#F5C518]/20 bg-[#F5C518]/[0.03] p-5 shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#F5C518]/[0.05] hover:-translate-y-1">
<div>
<div className="mb-4 flex items-start justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518]">
<iconify-icon className="text-xl" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-1 font-numbers text-xs font-medium text-[#F5C518] bg-[#F5C518]/10 border border-[#F5C518]/20 px-2 py-1 rounded-lg shadow-sm">
                                        +100 GC
                                    </div>
</div>
<h3 className="text-base font-semibold text-zinc-100 tracking-tight mb-1.5">7-Day Login Streak</h3>
<p className="text-xs text-zinc-400 line-clamp-2 mb-5">Log in for 7 consecutive days to earn a bonus reward box.</p>
</div>
<button className="w-full rounded-xl bg-[#F5C518] py-2 text-sm font-medium text-[#0A0A0A] shadow-md shadow-[#F5C518]/20 transition-all duration-200 hover:bg-[#FFD700] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 focus:outline-none">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
                                Claim Reward
                            </button>
</div>
</div>
</section>

<section>
<div className="mb-6 flex items-end justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-100">Active Challenges</h2>
<p className="mt-1 text-sm text-zinc-500">Skill-based games and predictions</p>
</div>
<a className="text-sm text-[#F5C518] hover:text-[#FFD700] transition-colors" href="#">Browse all</a>
</div>
<div className="space-y-3">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/[0.04] bg-[#1A1A1A] p-4 shadow-md shadow-black/20 transition-all duration-200 hover:border-[#F5C518]/20 hover:-translate-y-1">
<div className="flex items-center gap-4">
<div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.04] bg-[#121212] text-[#F5C518]">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1.5">
<h3 className="text-base font-semibold tracking-tight text-zinc-100">CS:GO Major Final Predictor</h3>
<span className="rounded-lg bg-[#FF5252]/10 border border-[#FF5252]/20 px-1.5 py-0.5 text-xs font-medium text-[#FF5252]">Closing soon</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-zinc-500" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> <span className="font-numbers">1,204</span> Joined</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#F5C518]" icon="solar:money-bag-linear" strokeWidth="1.5"></iconify-icon> Pool: <span className="font-numbers text-[#F5C518]">50,000 GC</span></span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 border-t border-white/[0.04] pt-4 sm:border-0 sm:pt-0">
<div className="text-left sm:text-right">
<div className="text-xs text-zinc-500 mb-0.5">Entry</div>
<div className="font-numbers text-sm font-medium text-zinc-200">100 GC</div>
</div>
<button className="rounded-xl bg-[#F5C518] px-5 py-2 text-sm font-medium text-[#0A0A0A] shadow-md shadow-[#F5C518]/20 transition-all duration-200 hover:bg-[#FFD700] hover:-translate-y-0.5 active:scale-95 focus:outline-none">
                                    Join
                                </button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/[0.04] bg-[#1A1A1A] p-4 shadow-md shadow-black/20 transition-all duration-200 hover:border-white/[0.1] hover:-translate-y-1">
<div className="flex items-center gap-4">
<div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.04] bg-[#121212] text-zinc-400 group-hover:text-zinc-200">
<iconify-icon className="text-2xl" icon="solar:puzzle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1.5">
<h3 className="text-base font-semibold tracking-tight text-zinc-100">Weekly Crypto Trivia</h3>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-zinc-500" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> <span className="font-numbers">856</span> Joined</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#F5C518]" icon="solar:money-bag-linear" strokeWidth="1.5"></iconify-icon> Pool: <span className="font-numbers text-[#F5C518]">15,000 GC</span></span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 border-t border-white/[0.04] pt-4 sm:border-0 sm:pt-0">
<div className="text-left sm:text-right">
<div className="text-xs text-zinc-500 mb-0.5">Entry</div>
<div className="font-numbers text-sm font-medium text-[#00E676]">Free</div>
</div>
<button className="rounded-xl border border-white/[0.08] bg-[#121212] px-5 py-2 text-sm font-medium text-zinc-300 shadow-sm transition-all duration-200 hover:border-[#F5C518]/40 hover:text-[#F5C518] hover:-translate-y-0.5 active:scale-95 focus:outline-none">
                                    Join
                                </button>
</div>
</div>
</div>
</section>
</div>

<div className="space-y-8">

<section className="rounded-2xl border border-white/[0.04] bg-[#1A1A1A] p-5 shadow-lg shadow-black/20">
<h3 className="mb-4 text-sm font-semibold tracking-tight text-zinc-100">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3">
<button className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-white/[0.04] bg-[#121212] p-4 shadow-sm transition-all duration-200 hover:border-[#F5C518]/30 hover:-translate-y-1 active:scale-95 focus:outline-none">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-[#F5C518] transition-colors" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">Deposit</span>
</button>
<button className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-white/[0.04] bg-[#121212] p-4 shadow-sm transition-all duration-200 hover:border-[#F5C518]/30 hover:-translate-y-1 active:scale-95 focus:outline-none">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-[#F5C518] transition-colors" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">History</span>
</button>
</div>
</section>

<section className="flex flex-col rounded-2xl border border-white/[0.04] bg-[#1A1A1A] shadow-lg shadow-black/20 overflow-hidden">
<div className="border-b border-white/[0.04] bg-[#121212]/50 p-5">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-zinc-100">Top Players</h2>
<div className="flex gap-2 text-xs bg-[#121212] p-1 rounded-xl border border-white/[0.04]">
<button className="rounded-lg bg-[#1A1A1A] px-2.5 py-1 text-zinc-100 font-medium shadow-sm border border-white/[0.04] transition-all active:scale-95">Daily</button>
<button className="rounded-lg px-2.5 py-1 text-zinc-500 hover:text-zinc-300 transition-all active:scale-95">Weekly</button>
</div>
</div>
</div>
<div className="flex flex-col p-2 space-y-1">

<div className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-white/[0.02]">
<div className="flex items-center gap-3">
<span className="flex h-6 w-6 items-center justify-center text-xs font-semibold text-[#F5C518]">1</span>
<img alt="Avatar" className="h-8 w-8 rounded-full border border-[#F5C518]/30 bg-[#121212] opacity-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&amp;backgroundColor=121212"/>
<span className="text-sm font-medium text-zinc-200">AlexCrypto</span>
</div>
<span className="font-numbers text-sm font-medium text-[#F5C518]">14,250</span>
</div>

<div className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-white/[0.02]">
<div className="flex items-center gap-3">
<span className="flex h-6 w-6 items-center justify-center text-xs font-semibold text-zinc-300">2</span>
<img alt="Avatar" className="h-8 w-8 rounded-full border border-white/[0.04] bg-[#121212] opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&amp;backgroundColor=121212"/>
<span className="text-sm font-medium text-zinc-200">SarahBet</span>
</div>
<span className="font-numbers text-sm font-medium text-zinc-400">12,100</span>
</div>

<div className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-white/[0.02]">
<div className="flex items-center gap-3">
<span className="flex h-6 w-6 items-center justify-center text-xs font-semibold text-[#CD7F32]">3</span>
<img alt="Avatar" className="h-8 w-8 rounded-full border border-white/[0.04] bg-[#121212] opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&amp;backgroundColor=121212"/>
<span className="text-sm font-medium text-zinc-200">JohnnyWin</span>
</div>
<span className="font-numbers text-sm font-medium text-zinc-400">11,850</span>
</div>

<div className="mt-2 flex items-center justify-between rounded-xl border border-[#F5C518]/20 bg-[#F5C518]/5 p-3 shadow-sm">
<div className="flex items-center gap-3">
<span className="flex h-6 w-6 items-center justify-center text-xs font-semibold text-zinc-500">42</span>
<img alt="Avatar" className="h-8 w-8 rounded-full border border-[#F5C518]/30 bg-[#121212]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=121212"/>
<span className="text-sm font-medium text-zinc-100">You</span>
</div>
<span className="font-numbers text-sm font-medium text-[#F5C518]">3,450</span>
</div>
</div>
<a className="block border-t border-white/[0.04] p-4 text-center text-xs font-medium text-zinc-400 hover:bg-white/[0.02] hover:text-[#F5C518] transition-colors active:scale-[0.98]" href="#">
                        View Full Leaderboard
                    </a>
</section>
</div>
</div>
</main>

    </>
  );
}
