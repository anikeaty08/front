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
      

<div className="bg-[#00ff66] text-black text-xs font-semibold py-2 text-center tracking-wide uppercase">
<span className="inline-flex items-center gap-2">
<iconify-icon icon="lucide:alert-triangle" width="14"></iconify-icon>
            Warning: Registration closes when 500 member cap is reached
        </span>
</div>

<nav className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center">
<iconify-icon className="text-[#00ff66]" icon="lucide:bar-chart-2" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm uppercase">Arbitrage<span className="text-zinc-500">Insiders</span></span>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#00ff66] bg-[#00ff66]/10 px-3 py-1 rounded-full border border-[#00ff66]/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
</span>
            SYSTEM ONLINE
        </div>
</nav>

<main className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff66] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm px-3 py-1 rounded-full mb-8">
<iconify-icon className="text-[#00ff66]" icon="lucide:lock" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Confidential Report • Leaked Strategy</span>
</div>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                The Mathematical Loophole Letting Australians Extract <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00cc52] text-glow">$2,000-$8,000/Mo</span> From Bookmakers.
            </h1>
<p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                This is <span className="text-white font-medium">not gambling</span>. It's a risk-free arbitrage system that exploits pricing errors in real-time. Guaranteed by mathematics, not luck.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto bg-[#00ff66] hover:bg-[#00dd55] text-black text-lg font-semibold py-4 px-8 rounded-lg btn-glow flex items-center justify-center gap-2 transition-transform active:scale-95" href="#training">
<iconify-icon icon="lucide:play-circle" width="20"></iconify-icon>
                    WATCH THE FREE TRAINING
                </a>
<div className="flex items-center gap-3 px-4 text-sm text-zinc-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-xs font-medium text-white">JD</div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-950 flex items-center justify-center text-xs font-medium text-white">MK</div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-950 flex items-center justify-center text-xs font-medium text-white">AS</div>
</div>
<p>Join 2,542+ Members</p>
</div>
</div>

<div className="relative max-w-3xl mx-auto mt-12 glass-panel rounded-xl p-1 shadow-2xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-[#00ff66]/5 to-transparent opacity-50"></div>

<div className="bg-[#0a0a0a] rounded-lg p-6 sm:p-8 border border-zinc-800/50">
<div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
<div className="flex gap-2 items-center">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs font-mono text-zinc-500">PROFIT_DASHBOARD_V2.EXE</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
<div className="p-4 bg-zinc-900/50 rounded border border-zinc-800">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Daily Profit</div>
<div className="text-2xl font-mono text-white flex items-center gap-2">
                                +$342.50
                                <iconify-icon className="text-[#00ff66]" icon="lucide:trending-up" width="16"></iconify-icon>
</div>
</div>
<div className="p-4 bg-zinc-900/50 rounded border border-zinc-800">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Monthly Yield</div>
<div className="text-2xl font-mono text-white">+$8,420.00</div>
</div>
<div className="p-4 bg-zinc-900/50 rounded border border-zinc-800">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Risk Factor</div>
<div className="text-2xl font-mono text-[#00ff66]">0.00%</div>
</div>
</div>

<div className="mt-8 space-y-3 font-mono text-xs sm:text-sm">
<div className="flex justify-between items-center text-zinc-400 py-2 border-b border-zinc-900">
<span className="flex items-center gap-2"><iconify-icon className="text-[#00ff66]" icon="lucide:check-circle"></iconify-icon> Sportsbet vs Ladbrokes (AFL)</span>
<span className="text-[#00ff66] font-semibold">+$42.50 LOCKED</span>
</div>
<div className="flex justify-between items-center text-zinc-400 py-2 border-b border-zinc-900">
<span className="flex items-center gap-2"><iconify-icon className="text-[#00ff66]" icon="lucide:check-circle"></iconify-icon> Bet365 Bonus Extraction</span>
<span className="text-[#00ff66] font-semibold">+$200.00 LOCKED</span>
</div>
<div className="flex justify-between items-center text-zinc-400 py-2">
<span className="flex items-center gap-2"><iconify-icon className="text-zinc-500 animate-spin" icon="lucide:loader"></iconify-icon> Scanning Markets...</span>
<span className="text-zinc-600">PENDING</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-20 border-t border-zinc-900 bg-[#080808]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">Results Don't Lie.</h2>
<p className="text-zinc-400">Ordinary Australians beating the bookies at their own game.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">S</div>
<div>
<div className="text-white font-medium text-sm">Sarah Jenkins</div>
<div className="text-zinc-500 text-xs">Melbourne, VIC</div>
</div>
</div>
<p className="text-zinc-300 text-sm mb-4">"I was skeptical. I hate gambling. But the math made sense. My first month I cleared <span className="text-white font-medium">$2,800</span> just doing this on weekends."</p>
<div className="bg-black/50 p-3 rounded border border-zinc-800 flex items-center justify-between">
<span className="text-xs text-zinc-500 font-mono">WITHDRAWAL</span>
<span className="text-[#00ff66] font-mono text-sm">+$2,842.00</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20">
<iconify-icon icon="lucide:quote" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">M</div>
<div>
<div className="text-white font-medium text-sm">Mike T.</div>
<div className="text-zinc-500 text-xs">Brisbane, QLD</div>
</div>
</div>
<p className="text-zinc-300 text-sm mb-4">"The software does 90% of the work. I just place the bets it tells me to. It's literally printing money from bonuses."</p>
<div className="bg-black/50 p-3 rounded border border-zinc-800 flex items-center justify-between">
<span className="text-xs text-zinc-500 font-mono">TOTAL PROFIT</span>
<span className="text-[#00ff66] font-mono text-sm">+$12,450.00</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">D</div>
<div>
<div className="text-white font-medium text-sm">David Chen</div>
<div className="text-zinc-500 text-xs">Sydney, NSW</div>
</div>
</div>
<p className="text-zinc-300 text-sm mb-4">"Used to lose money on footy every weekend. Now I make guaranteed profit regardless of who wins. The mindset shift is crazy."</p>
<div className="flex gap-2 mt-4">
<span className="bg-[#00ff66]/10 text-[#00ff66] text-xs px-2 py-1 rounded border border-[#00ff66]/20">Verified Member</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative" id="details">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">What You'll Discover Inside</h2>
<div className="h-1 w-20 bg-[#00ff66] rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00ff66]/50 transition-colors shrink-0">
<iconify-icon className="text-zinc-400 group-hover:text-[#00ff66] transition-colors" icon="lucide:eye-off" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2">The Bookmaker Blind Spot</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Why multi-billion dollar betting companies accidentally give away free money while competing for customers—and how to collect it.</p>
</div>
</div>
</div>

<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00ff66]/50 transition-colors shrink-0">
<iconify-icon className="text-zinc-400 group-hover:text-[#00ff66] transition-colors" icon="lucide:scales" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2">The 100% Win Method</h3>
<p className="text-zinc-400 text-sm leading-relaxed">How to place bets on BOTH sides of a match using different bookies to profit regardless of the outcome. Zero gambling involved.</p>
</div>
</div>
</div>

<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00ff66]/50 transition-colors shrink-0">
<iconify-icon className="text-zinc-400 group-hover:text-[#00ff66] transition-colors" icon="lucide:zap" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2">The AI Edge Finder</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Access the exact software that scans odds across 20+ Australian bookies in real-time, alerting you to profit opportunities instantly.</p>
</div>
</div>
</div>

<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00ff66]/50 transition-colors shrink-0">
<iconify-icon className="text-zinc-400 group-hover:text-[#00ff66] transition-colors" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2">Account Longevity Secrets</h3>
<p className="text-zinc-400 text-sm leading-relaxed">How to look like a "Mug Punter" so bookies keep sending you deposit bonuses and don't limit your accounts.</p>
</div>
</div>
</div>

<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00ff66]/50 transition-colors shrink-0">
<iconify-icon className="text-zinc-400 group-hover:text-[#00ff66] transition-colors" icon="lucide:banknote" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2">The Bonus Extraction System</h3>
<p className="text-zinc-400 text-sm leading-relaxed">A step-by-step guide to turning sign-up bonuses and "bonus bets" into real, withdrawable cash in your bank account.</p>
</div>
</div>
</div>

<div className="group">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#00ff66]/50 transition-colors shrink-0">
<iconify-icon className="text-zinc-400 group-hover:text-[#00ff66] transition-colors" icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2">The $10K Month Blueprint</h3>
<p className="text-zinc-400 text-sm leading-relaxed">The exact scaling roadmap our top members use to turn this from a side hustle into a 5-figure monthly income.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-red-900/10 border-y border-red-900/20">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 text-red-400 mb-4 bg-red-900/20 px-4 py-1 rounded-full border border-red-900/30">
<iconify-icon icon="lucide:clock" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Time Sensitive</span>
</div>
<h2 className="text-3xl font-semibold text-white mb-6">Why This Window Is Closing Fast</h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                Australian bookmakers are consolidating and tightening their algorithms. The easy money promos are drying up for the public. 
                <br/><br/>
                Only those with the <span className="text-white">right systems</span> and <span className="text-white">account protection</span> strategies will continue to profit. Early movers are banking huge sums while others wait on the sidelines.
            </p>
<div className="flex justify-center">
<div className="w-full max-w-md bg-zinc-950 rounded-lg p-4 border border-zinc-800">
<div className="flex justify-between text-xs text-zinc-500 mb-2 uppercase tracking-wider">
<span>Spots Remaining</span>
<span className="text-red-400">Low Availability</span>
</div>
<div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#050505]">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white">How The System Works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0"></div>

<div className="relative z-10 bg-[#050505] p-4 text-center">
<div className="w-24 h-24 mx-auto bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
<span className="font-mono text-3xl font-semibold text-white">01</span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Watch The Training</h3>
<p className="text-zinc-500 text-sm">Absorb the mathematical principles in our video series. Understand exactly why this is risk-free.</p>
</div>

<div className="relative z-10 bg-[#050505] p-4 text-center">
<div className="w-24 h-24 mx-auto bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
<span className="font-mono text-3xl font-semibold text-white">02</span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Use The Software</h3>
<p className="text-zinc-500 text-sm">Let our AI find the arbitrage opportunities for you. No manual searching required.</p>
</div>

<div className="relative z-10 bg-[#050505] p-4 text-center">
<div className="w-24 h-24 mx-auto bg-zinc-900 rounded-full border border-[#00ff66] flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(0,255,102,0.3)]">
<span className="font-mono text-3xl font-semibold text-[#00ff66]">03</span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Withdraw Profits</h3>
<p className="text-zinc-500 text-sm">Transfer your winnings from the bookies directly to your bank account. Rinse and repeat.</p>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 relative overflow-hidden" id="training">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-[#050505]"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-8">Stop Gambling. <br/>Start Investing.</h2>
<p className="text-zinc-400 text-lg mb-10">
                You have two choices: Keep donating money to Sportsbet, or learn the mathematical method to take it back. <br/>The training is free, but the spots are limited.
            </p>
<div className="glass-panel p-8 rounded-2xl border border-zinc-700 mb-8">
<div className="flex flex-col gap-4">
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00ff66] transition-colors" placeholder="Enter your email address..." type="email"/>
<button className="w-full bg-[#00ff66] hover:bg-[#00dd55] text-black text-lg font-bold py-4 rounded-lg btn-glow uppercase tracking-wide">
                        Reveal The Strategy Now
                    </button>
</div>
<div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-400" icon="lucide:shield-check"></iconify-icon>
<span>100% Secure. No Spam. Unsubscribe Anytime.</span>
</div>
</div>
<p className="text-zinc-600 text-xs text-center max-w-lg mx-auto leading-relaxed">
                DISCLAIMER: Results vary. The examples shown are from real members using our strategies. This is an educational product on mathematical arbitrage, not financial advice.
            </p>
</div>
</footer>

    </>
  );
}
