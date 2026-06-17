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
      

<nav className="w-full border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-white text-black p-1.5 rounded-md flex items-center justify-center">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-white group-hover:text-yellow-400 transition-colors">BugHunt</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-400">
<a className="hover:text-white transition-colors" href="#">Bounties</a>
<a className="hover:text-white transition-colors" href="#">Hunters</a>
<a className="hover:text-white transition-colors" href="#">Leaderboard</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-white hover:text-gray-300 transition-colors" href="#">Log In</a>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" href="#">
                    Start Hunting
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex items-center relative overflow-hidden pt-12 lg:pt-0">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col gap-8 z-10 py-10 lg:py-20">

<div className="flex items-center gap-2 text-green-400 w-fit">
<iconify-icon className="opacity-80" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Trusted by 500+ Security Teams</span>
<span className="text-gray-600">|</span>
<span className="text-gray-400 text-sm border-b border-gray-700">Read Case Study</span>
</div>

<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                    Gamify your <br/>
<span className="text-gray-500">Security</span>
<span className="relative inline-block">
                        Audit
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-dasharray="10 5" strokeWidth="3"></path>
</svg>
</span>
</h1>

<p className="text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                    Join the world's fastest bounty platform. Complete tasks, submit findings, and earn crypto rewards instantly.
                </p>

<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="bg-[#FCD34D] text-black px-8 py-4 rounded-full text-base font-medium hover:bg-[#fbbf24] transition-colors flex items-center gap-2" href="#">
                        Get Started <span className="opacity-60">— It's Free</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/5 transition-colors" href="#">
                        Browse Tasks
                    </a>
</div>

<div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-4">
<div>
<div className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-1">288%</div>
<div className="text-sm text-gray-500 font-light">More Vulnerabilities</div>
</div>
<div>
<div className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-1">20X</div>
<div className="text-sm text-gray-500 font-light">Faster Triage</div>
</div>
<div>
<div className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-1">$4M+</div>
<div className="text-sm text-gray-500 font-light">Rewards Paid</div>
</div>
</div>
</div>

<div className="relative h-[600px] lg:h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
<div className="grid grid-cols-2 gap-6 h-full w-full">

<div className="flex flex-col gap-6 animate-scroll-vertical">

<div className="bg-[#FCD34D] p-6 rounded-3xl flex flex-col justify-between h-64 shadow-lg group hover:scale-[1.02] transition-transform duration-500">
<div className="flex justify-between items-start">
<span className="text-black/60 text-xs font-semibold uppercase tracking-wider">Available for Payout</span>
<iconify-icon className="text-black/60" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-5xl font-medium text-black tracking-tight mb-2">$8,450</h3>
<div className="flex items-center gap-2">
<span className="bg-black/10 px-2 py-0.5 rounded text-xs font-medium text-black/80">+ $1,200 this week</span>
</div>
</div>
</div>

<div className="relative h-80 rounded-3xl overflow-hidden group border border-white/10">
<img alt="Hacker" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
<div className="flex items-center gap-2 mb-2">
<span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Elite Hunter</span>
</div>
<h4 className="text-xl font-medium text-white">Alex Chen</h4>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1 text-xs text-gray-300">
<iconify-icon icon="solar:cup-star-linear" width="14"></iconify-icon>
                                        Rank #3
                                    </div>
<div className="flex items-center gap-1 text-xs text-gray-300">
<iconify-icon icon="solar:bug-linear" width="14"></iconify-icon>
                                        142 Solved
                                    </div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] p-6 rounded-3xl border border-white/10 h-64 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
<iconify-icon className="text-red-400" icon="solar:danger-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">OAuth Bypass</div>
<div className="text-xs text-gray-500">High Severity</div>
</div>
</div>
<span className="text-green-400 font-mono text-sm">$3,000</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-red-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>23 Hunters Active</span>
<span>4h Left</span>
</div>
</div>
<button className="w-full py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                Submit Report
                            </button>
</div>

<div className="bg-[#FCD34D] p-6 rounded-3xl flex flex-col justify-between h-64 shadow-lg">
<div className="flex justify-between items-start">
<span className="text-black/60 text-xs font-semibold uppercase tracking-wider">Available for Payout</span>
<iconify-icon className="text-black/60" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-5xl font-medium text-black tracking-tight mb-2">$8,450</h3>
<div className="flex items-center gap-2">
<span className="bg-black/10 px-2 py-0.5 rounded text-xs font-medium text-black/80">+ $1,200 this week</span>
</div>
</div>
</div>
<div className="relative h-80 rounded-3xl overflow-hidden group border border-white/10">
<img alt="Hacker" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
<h4 className="text-xl font-medium text-white">Alex Chen</h4>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1 text-xs text-gray-300">
<iconify-icon icon="solar:cup-star-linear" width="14"></iconify-icon>
                                        Rank #3
                                    </div>
<div className="flex items-center gap-1 text-xs text-gray-300">
<iconify-icon icon="solar:bug-linear" width="14"></iconify-icon>
                                        142 Solved
                                    </div>
</div>
</div>
</div>
<div className="bg-[#1A1A1A] p-6 rounded-3xl border border-white/10 h-64 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
<iconify-icon className="text-red-400" icon="solar:danger-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">OAuth Bypass</div>
<div className="text-xs text-gray-500">High Severity</div>
</div>
</div>
<span className="text-green-400 font-mono text-sm">$3,000</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-red-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>23 Hunters Active</span>
<span>4h Left</span>
</div>
</div>
<button className="w-full py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                Submit Report
                            </button>
</div>
</div>

<div className="flex flex-col gap-6 animate-scroll-vertical-delayed pt-12">

<div className="relative h-72 bg-[#EA580C] rounded-3xl overflow-hidden p-6 flex flex-col justify-between">
<div className="absolute -right-6 -top-6 text-white/10 rotate-12">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="180"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<div className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Current Status</div>
<h3 className="text-3xl font-medium text-white tracking-tight">Level 42</h3>
<div className="mt-4 bg-black/20 rounded-full h-2 w-full overflow-hidden">
<div className="bg-white h-full w-[85%]"></div>
</div>
<p className="text-white/60 text-xs mt-2 text-right">850/1000 XP to Level 43</p>
</div>
</div>

<div className="bg-[#86efac] p-6 rounded-3xl flex flex-col justify-between h-64">
<div className="flex justify-between items-start">
<span className="text-black/60 text-xs font-semibold uppercase tracking-wider">Acceptance Rate</span>
<iconify-icon className="text-black/60" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<div className="flex items-end gap-2 mb-2">
<h3 className="text-5xl font-medium text-black tracking-tight">92%</h3>
<iconify-icon className="text-black mb-2" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<p className="text-black/80 text-sm">Top 1% of contributors</p>
</div>
</div>

<div className="bg-[#1A1A1A] p-6 rounded-3xl border border-white/10 h-72 group relative overflow-hidden flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20">
                                    Smart Contract
                                </div>
<iconify-icon className="text-gray-500 hover:text-white cursor-pointer transition-colors" icon="solar:bookmark-linear" width="20"></iconify-icon>
</div>
<div className="flex-grow">
<h4 className="text-xl font-medium text-white mb-2">DeFi Protocol Audit</h4>
<p className="text-sm text-gray-400 line-clamp-2">Audit the staking mechanism for re-entrancy vulnerabilities in the liquidity pool...</p>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="flex justify-between items-center">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Bounty Pool</div>
<div className="text-lg font-medium text-white">$50,000</div>
</div>
<button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                                        View Details
                                    </button>
</div>
</div>
</div>

<div className="relative h-72 bg-[#EA580C] rounded-3xl overflow-hidden p-6 flex flex-col justify-between">
<div className="absolute -right-6 -top-6 text-white/10 rotate-12">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="180"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
<iconify-icon className="text-white" icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<div className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Current Status</div>
<h3 className="text-3xl font-medium text-white tracking-tight">Level 42</h3>
<div className="mt-4 bg-black/20 rounded-full h-2 w-full overflow-hidden">
<div className="bg-white h-full w-[85%]"></div>
</div>
<p className="text-white/60 text-xs mt-2 text-right">850/1000 XP to Level 43</p>
</div>
</div>
<div className="bg-[#86efac] p-6 rounded-3xl flex flex-col justify-between h-64">
<div className="flex justify-between items-start">
<span className="text-black/60 text-xs font-semibold uppercase tracking-wider">Acceptance Rate</span>
<iconify-icon className="text-black/60" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<div className="flex items-end gap-2 mb-2">
<h3 className="text-5xl font-medium text-black tracking-tight">92%</h3>
<iconify-icon className="text-black mb-2" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<p className="text-black/80 text-sm">Top 1% of contributors</p>
</div>
</div>
<div className="bg-[#1A1A1A] p-6 rounded-3xl border border-white/10 h-72 group relative overflow-hidden flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20">
                                    Smart Contract
                                </div>
<iconify-icon className="text-gray-500 hover:text-white cursor-pointer transition-colors" icon="solar:bookmark-linear" width="20"></iconify-icon>
</div>
<div className="flex-grow">
<h4 className="text-xl font-medium text-white mb-2">DeFi Protocol Audit</h4>
<p className="text-sm text-gray-400 line-clamp-2">Audit the staking mechanism for re-entrancy vulnerabilities in the liquidity pool...</p>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="flex justify-between items-center">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Bounty Pool</div>
<div className="text-lg font-medium text-white">$50,000</div>
</div>
<button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                                        View Details
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white py-10 w-full mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-between items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tight text-black font-serif">THEVERGE</div>
<div className="text-xl font-extrabold tracking-tighter text-black italic">TOZO</div>
<div className="text-xl font-medium tracking-tight text-black">HELLBABES</div>
<div className="text-xl font-semibold tracking-wide text-black lowercase">cocokind</div>
<div className="text-xl font-serif text-black">Oxyfresh</div>
<div className="text-lg font-bold text-black border-2 border-black p-1">DOT &amp; KEY</div>
<div className="text-xl font-black tracking-tighter text-black">Bellefit</div>
</div>
</div>
</footer>

    </>
  );
}
