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
      

<header className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-50">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-medium tracking-tight bg-[#1A1A1A] text-[#F5C518]">
                GC
            </div>
<span className="text-xl tracking-tight font-medium">GoldenChance</span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-base text-gray-400">
<a className="text-white relative font-medium" href="#">
                Home
                <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#F5C518] rounded-t-full"></span>
</a>
<a className="hover:text-gray-200 transition-colors" href="#">Missions</a>
<a className="hover:text-gray-200 transition-colors" href="#">Challenges</a>
<a className="hover:text-gray-200 transition-colors" href="#">Rewards</a>
</nav>

<div className="flex items-center gap-4 text-base">

<div className="hidden sm:flex items-center gap-3 bg-[#1A1A1A] rounded-full pl-3 pr-1.5 py-1.5 border border-white/[0.05]">
<iconify-icon className="w-4 h-4 text-[#F5C518]" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium">12,450 <span className="text-gray-500 font-normal">GC</span></span>
<button className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon className="w-4 h-4 text-gray-400" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<button className="relative w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/[0.05] flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon className="w-5 h-5 text-gray-400" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#FF5252] rounded-full border-2 border-[#1A1A1A]"></span>
</button>

<button className="w-10 h-10 rounded-full overflow-hidden border border-[#F5C518]/30">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</button>
</div>
</header>

<main className="flex-1 p-6 w-full max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8 flex flex-col gap-6">

<section className="relative bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 border border-white/[0.05] overflow-hidden group">

<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#F5C518]/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-[#FFD700]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-medium mb-8">
<iconify-icon className="w-3.5 h-3.5" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            WEEKEND SPECIAL EVENT
                        </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-medium leading-tight mb-6">
                            The Grand <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5C518] to-[#FFD700]">Prediction</span> Cup
                        </h1>
<p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                            Test your skill against thousands of players. Predict match outcomes, climb the global leaderboard, and claim your share of the massive <span className="text-[#F5C518] font-medium">100,000 GC</span> prize pool.
                        </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-gradient-to-r from-[#F5C518] to-[#FFD700] text-[#121212] px-6 py-3 rounded-full font-medium text-base hover:opacity-90 transition-opacity flex items-center gap-2">
                                Play Now
                                <iconify-icon className="w-4 h-4" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full font-medium text-base text-white border border-white/10 hover:bg-white/5 transition-colors">
                                Claim Reward
                            </button>
</div>
</div>
</section>

<section className="flex flex-col gap-4 mt-2">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-3">
<h2 className="text-xl tracking-tight font-medium">Daily Missions</h2>
<div className="hidden sm:flex items-center gap-1.5 text-sm text-gray-400">
<iconify-icon className="w-4 h-4" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Resets in <span className="text-[#F5C518]">04:12:39</span>
</div>
</div>
<button className="text-sm text-gray-400 hover:text-white transition-colors">View all</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/[0.05] flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-[#F5C518]/10 flex items-center justify-center text-[#F5C518]">
<iconify-icon className="w-5 h-5" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-medium">
                                        +50 GC
                                    </span>
</div>
<h3 className="text-base font-medium mb-2">Play 3 Prediction Games</h3>
<p className="text-sm text-gray-400 mb-6">Participate in any active prediction challenge to earn progress.</p>
</div>
<div>
<div className="flex justify-between text-xs text-gray-400 mb-2">
<span>Progress</span>
<span>2 / 3</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#F5C518] w-2/3 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/[0.05] flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700]">
<iconify-icon className="w-5 h-5" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-xs font-medium">
                                        +100 GC
                                    </span>
</div>
<h3 className="text-base font-medium mb-2">7-Day Login Streak</h3>
<p className="text-sm text-gray-400 mb-6">Log in for 7 consecutive days to earn a bonus reward box.</p>
</div>
<button className="relative z-10 w-full py-2.5 rounded-lg border border-[#FFD700]/30 text-[#FFD700] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#FFD700]/10 transition-colors">
<iconify-icon className="w-4 h-4" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Claim Reward
                            </button>
</div>
</div>
</section>

<section className="flex flex-col gap-4 mt-2">
<div className="flex items-center justify-between px-1">
<div>
<h2 className="text-xl tracking-tight font-medium">Active Challenges</h2>
<p className="text-sm text-gray-400 mt-1">Skill-based games and predictions</p>
</div>
<button className="text-sm text-gray-400 hover:text-white transition-colors">Browse all</button>
</div>
<div className="flex flex-col gap-3">

<div className="bg-[#1A1A1A] rounded-2xl p-4 sm:p-5 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#F5C518] border border-white/5 shrink-0">
<iconify-icon className="w-5 h-5" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-base font-medium">CS:GO Major Final Predictor</h3>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-[#FF5252]/10 text-[#FF5252]">Closing soon</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-400">
<span className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                            1,284 Joined
                                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                            Pool: <span className="text-white">50,000 GC</span>
</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t border-white/5 sm:border-0 pt-4 sm:pt-0">
<div className="text-right">
<div className="text-xs text-gray-500 mb-0.5">Entry</div>
<div className="text-base font-medium text-white">100 GC</div>
</div>
<button className="px-5 py-2 bg-white text-[#121212] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                                    Join
                                </button>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-2xl p-4 sm:p-5 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 shrink-0">
<iconify-icon className="w-5 h-5" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium mb-1">Weekly Crypto Trivia</h3>
<div className="flex items-center gap-4 text-sm text-gray-400">
<span className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                            856 Joined
                                        </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="w-3.5 h-3.5" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                            Pool: <span className="text-white">15,000 GC</span>
</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t border-white/5 sm:border-0 pt-4 sm:pt-0">
<div className="text-right">
<div className="text-xs text-gray-500 mb-0.5">Entry</div>
<div className="text-base font-medium text-[#00E676]">Free</div>
</div>
<button className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                                    Join
                                </button>
</div>
</div>
</div>
</section>
</div>

<div className="xl:col-span-4 flex flex-col gap-6">

<div className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/[0.05] flex flex-col relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5C518]/50 to-transparent"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2 text-base font-medium">
<iconify-icon className="w-4 h-4 text-gray-400" icon="solar:tv-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Live Match
                        </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF5252]/10 border border-[#FF5252]/20 text-[#FF5252] text-xs font-medium tracking-wide">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF5252] animate-pulse"></div>
                            LIVE
                        </div>
</div>

<div className="flex items-center justify-between mb-10 px-4">
<div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-base font-medium">
                                NA
                            </div>
<span className="text-xs text-gray-400">Team Alpha</span>
</div>
<div className="text-4xl tracking-tight font-medium flex items-center gap-4">
<span>2</span>
<span className="text-gray-600 text-2xl">-</span>
<span>1</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-full bg-[#121212] border border-[#F5C518]/20 flex items-center justify-center text-[#F5C518] text-base font-medium">
                                EU
                            </div>
<span className="text-xs text-gray-400">Team Beta</span>
</div>
</div>

<div className="mt-auto">
<div className="flex justify-between text-sm mb-4">
<span className="text-gray-400">Your Stake (GC)</span>
<span className="font-medium text-[#F5C518]">250 GC</span>
</div>

<div className="relative h-1.5 w-full bg-white/5 rounded-full mb-2">
<div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-[#F5C518] to-[#FFD700] rounded-full"></div>
<div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] border-2 border-[#FFD700]"></div>
</div>
<div className="flex justify-between text-xs text-gray-500 mb-8">
<span>10</span>
<span>1000</span>
</div>
<button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#FFD700] text-[#121212] font-medium text-base hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(245,197,24,0.15)]">
                            Lock Prediction
                        </button>
</div>
</div>

<div className="flex flex-col gap-4">
<h2 className="text-xl tracking-tight font-medium px-1">Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
<button className="aspect-square bg-[#1A1A1A] rounded-2xl border border-white/[0.05] flex flex-col items-center justify-center gap-3 hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5C518]/10 flex items-center justify-center text-[#F5C518] group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-5 h-5" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">Deposit</span>
</button>
<button className="aspect-square bg-[#1A1A1A] rounded-2xl border border-white/[0.05] flex flex-col items-center justify-center gap-3 hover:bg-white/[0.02] transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-5 h-5" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-300">History</span>
</button>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/[0.05] flex flex-col gap-6 mt-2">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-medium">Top Players</h2>

<div className="flex p-0.5 bg-black/40 rounded-lg border border-white/5">
<button className="px-3 py-1 rounded-md bg-[#262626] text-xs font-medium text-white shadow-sm">Daily</button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-gray-400 hover:text-white transition-colors">Weekly</button>
</div>
</div>
<div className="flex flex-col gap-1">

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<span className="w-4 text-center text-sm text-gray-500 font-medium">1</span>
<div className="flex items-center gap-3">
<img alt="AlexCrypto" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=11"/>
<span className="text-sm font-medium">AlexCrypto</span>
</div>
</div>
<span className="text-sm font-medium text-[#F5C518]">14,250</span>
</div>

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<span className="w-4 text-center text-sm text-gray-500 font-medium">2</span>
<div className="flex items-center gap-3">
<img alt="SarahBet" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=5"/>
<span className="text-sm font-medium text-gray-300">SarahBet</span>
</div>
</div>
<span className="text-sm font-medium text-gray-300">12,100</span>
</div>

<div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<span className="w-4 text-center text-sm text-gray-500 font-medium">3</span>
<div className="flex items-center gap-3">
<img alt="JohnnyWin" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=12"/>
<span className="text-sm font-medium text-gray-300">JohnnyWin</span>
</div>
</div>
<span className="text-sm font-medium text-gray-300">11,850</span>
</div>
<div className="h-px w-full bg-white/5 my-2"></div>

<div className="flex items-center justify-between p-3 rounded-xl bg-[#F5C518]/[0.03] border border-[#F5C518]/20">
<div className="flex items-center gap-4">
<span className="w-4 text-center text-sm text-[#FFD700] font-medium">42</span>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-[#F5C518]/30 overflow-hidden">
<img alt="You" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</div>
<span className="text-sm font-medium text-white">You</span>
</div>
</div>
<span className="text-sm font-medium text-[#FFD700]">3,450</span>
</div>
</div>
<a className="text-xs font-medium text-gray-500 text-center uppercase tracking-wider hover:text-white transition-colors mt-2" href="#">
                        View Full Leaderboard
                    </a>
</div>
</div>
</div>
</main>

    </>
  );
}
