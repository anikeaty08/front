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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-black">
<iconify-icon icon="lucide:sparkles" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">VISIONBET AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#how-it-works">Methodology</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Get the App</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid mask-gradient -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] uppercase tracking-wider font-medium text-emerald-400">v2.0 Model Live</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                Beat the books with <br/>
<span className="accent-text">institutional-grade data.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Stop guessing. Start investing. VisionBet uses advanced neural networks to process millions of variables—from weather patterns to player biometrics—delivering probability scores that give you the edge.
            </p>
<div className="flex flex-col md:flex-row items-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:apple" width="18"></iconify-icon>
                    Download for iOS
                </button>
<button className="h-12 px-8 rounded-full glass text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                    View Web Dashboard
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="relative w-[300px] md:w-[360px] h-[600px] md:h-[720px] rounded-[3rem] border-[6px] border-[#1a1a1a] bg-black shadow-2xl shadow-emerald-500/20 animate-float overflow-hidden mx-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20"></div>

<div className="relative w-full h-full bg-slate-950 flex flex-col pt-12 px-6">

<div className="flex justify-between items-center mb-8">
<iconify-icon className="text-slate-500" icon="lucide:menu" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-slate-500">NBA • LIVE</span>
<iconify-icon className="text-slate-500" icon="lucide:bell" width="20"></iconify-icon>
</div>

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 border border-white/5 mb-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-[10px] text-purple-300 font-bold">LAL</div>
<span className="text-xs text-slate-400">vs</span>
<div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center text-[10px] text-emerald-300 font-bold">BOS</div>
</div>
<span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full animate-pulse">Q4 2:14</span>
</div>
<div className="flex flex-col items-center py-4">
<span className="text-xs text-slate-400 mb-1">Win Probability</span>
<div className="text-4xl font-medium text-white tracking-tighter flex items-start gap-1">
                                84.2<span className="text-sm mt-1 text-emerald-400">%</span>
</div>
<div className="w-full h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-[84%]"></div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-[10px] text-slate-500">Pick: Celtics -4.5</span>
<span className="text-[10px] font-medium text-emerald-400">+EV High Confidence</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2 text-slate-500">
<iconify-icon icon="lucide:trending-up" width="14"></iconify-icon>
<span className="text-[10px] uppercase">Sharp Money</span>
</div>
<span className="text-lg font-medium text-white">72%</span>
</div>
<div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2 text-slate-500">
<iconify-icon icon="lucide:activity" width="14"></iconify-icon>
<span className="text-[10px] uppercase">Injury Impact</span>
</div>
<span className="text-lg font-medium text-white">Low</span>
</div>
</div>

<div className="mt-auto mb-6 bg-slate-900/80 backdrop-blur rounded-full p-2 flex justify-between px-6 border border-white/5">
<iconify-icon className="text-white" icon="lucide:home" width="20"></iconify-icon>
<iconify-icon className="text-slate-600" icon="lucide:search" width="20"></iconify-icon>
<iconify-icon className="text-slate-600" icon="lucide:pie-chart" width="20"></iconify-icon>
<iconify-icon className="text-slate-600" icon="lucide:user" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-slate-600 uppercase tracking-widest mb-8">Analyzed Data Sources &amp; Partners</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-2"><iconify-icon icon="lucide:trophy" width="18"></iconify-icon> NBA DATA</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-2"><iconify-icon icon="lucide:shield" width="18"></iconify-icon> NFL STATS</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-2"><iconify-icon icon="lucide:globe" width="18"></iconify-icon> EPL</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-2"><iconify-icon icon="lucide:activity" width="18"></iconify-icon> SPORTRADAR</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-2"><iconify-icon icon="lucide:database" width="18"></iconify-icon> AWS</div>
</div>
</div>
</section>

<section className="py-24 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Inside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Black Box.</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                        Human intuition has limits. Our algorithm doesn't. VisionBet ingests over 1.2 million data points daily, identifying non-obvious correlations that Vegas overlooks.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 border-purple-500/20">
<iconify-icon className="text-purple-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Multivariate Analysis</h3>
<p className="text-sm text-slate-500">Weather, referee tendencies, player sleep schedules, and crowd sentiment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 border-pink-500/20">
<iconify-icon className="text-pink-400" icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Real-Time Regression</h3>
<p className="text-sm text-slate-500">Models update every 300ms as lines shift and news breaks.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full glass rounded-3xl border-0 overflow-hidden flex items-center justify-center bg-black/40">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black/0 to-black/0"></div>

<div className="relative w-64 h-64">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>

<div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

<div className="absolute top-10 left-10 bg-slate-900 border border-white/10 px-2 py-1 rounded text-[10px] text-purple-300 shadow-lg">ERA: 2.45</div>
<div className="absolute bottom-12 right-8 bg-slate-900 border border-white/10 px-2 py-1 rounded text-[10px] text-pink-300 shadow-lg">Wind: 12mph</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white tracking-tighter mix-blend-overlay">AI</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white mb-4">Precision Engineered</h2>
<p className="text-slate-400">Everything you need to identify value before the line moves.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-white" icon="lucide:line-chart" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="lucide:crosshair" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Positive EV Detection</h3>
<p className="text-slate-400 text-sm max-w-sm">Our system automatically highlights bets where the implied probability is lower than the actual probability. The holy grail of sports investing.</p>
</div>

<div className="mt-8 bg-slate-950/50 rounded-xl border border-white/5 p-4 max-w-md backdrop-blur-sm">
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-slate-400">Implied Odds (-110)</span>
<span className="text-slate-400">52.4%</span>
</div>
<div className="w-full bg-slate-800 h-2 rounded-full mb-4">
<div className="w-[52.4%] h-full bg-slate-600 rounded-full"></div>
</div>
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-emerald-400 font-medium">VisionBet AI Model</span>
<span className="text-emerald-400 font-medium">61.8%</span>
</div>
<div className="w-full bg-slate-800 h-2 rounded-full relative">
<div className="w-[61.8%] h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 glass rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all flex flex-col">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Injury Impact</h3>
<p className="text-slate-400 text-sm mb-8">Instant alerts on roster changes and how they shift the win probability.</p>
<div className="space-y-3 mt-auto">
<div className="bg-slate-950/50 p-3 rounded-lg border-l-2 border-red-500 flex gap-3 items-start">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:alert-circle" width="16"></iconify-icon>
<div>
<div className="text-xs text-white font-medium">LeBron James (OUT)</div>
<div className="text-[10px] text-slate-400">LAL Win Prob: -12%</div>
</div>
</div>
<div className="bg-slate-950/50 p-3 rounded-lg border-l-2 border-yellow-500 flex gap-3 items-start">
<iconify-icon className="text-yellow-500 mt-0.5" icon="lucide:alert-triangle" width="16"></iconify-icon>
<div>
<div className="text-xs text-white font-medium">Weather: Heavy Rain</div>
<div className="text-[10px] text-slate-400">Total Score proj: -4.5</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 glass rounded-3xl p-8 hover:border-white/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
<iconify-icon icon="lucide:history" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Backtesting</h3>
<p className="text-slate-400 text-sm">Verify strategies against 10 years of historical data.</p>
</div>

<div className="md:col-span-2 glass rounded-3xl p-8 hover:border-white/20 transition-all flex items-center justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Live Line Shopping</h3>
<p className="text-slate-400 text-sm">We compare odds across 50+ books to find you the best price.</p>
</div>
<div className="hidden md:flex gap-2">
<div className="px-4 py-2 rounded bg-slate-900 border border-emerald-500/50 text-emerald-400 text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">-105</div>
<div className="px-4 py-2 rounded bg-slate-900 border border-white/5 text-slate-500 text-sm decoration-line-through">-115</div>
<div className="px-4 py-2 rounded bg-slate-900 border border-white/5 text-slate-500 text-sm decoration-line-through">-120</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-center text-white mb-16 tracking-tight">Don't bet with your heart.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-slate-500" icon="lucide:user" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-slate-300">The Average Bettor</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-400 text-sm">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="lucide:x" width="16"></iconify-icon>
                            Relies on "gut feeling" and fandom.
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="lucide:x" width="16"></iconify-icon>
                            Ignores statistical variance.
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="lucide:x" width="16"></iconify-icon>
                            Chases losses emotionally.
                        </li>
<li className="flex items-start gap-3 text-slate-400 text-sm">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="lucide:x" width="16"></iconify-icon>
                            Checks 1 sportsbook.
                        </li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] relative">
<div className="absolute inset-0 bg-emerald-500/5 blur-3xl -z-10"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-black">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">VisionBet AI User</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-200 text-sm">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Data-driven decisions based on 10k+ simulations.
                        </li>
<li className="flex items-start gap-3 text-slate-200 text-sm">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Bankroll management built-in.
                        </li>
<li className="flex items-start gap-3 text-slate-200 text-sm">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Removes emotion from the equation.
                        </li>
<li className="flex items-start gap-3 text-slate-200 text-sm">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Lineshopped across all major books.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="pricing">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black/0 to-black/0"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white mb-4">Invest in your edge.</h2>
<p className="text-slate-400 mb-12">One winning pick pays for the month.</p>
<div className="flex flex-wrap justify-center gap-6">

<div className="w-full md:w-80 p-8 rounded-3xl glass text-left flex flex-col">
<h3 className="text-lg font-medium text-slate-300">Rookie</h3>
<div className="my-4">
<span className="text-4xl font-bold text-white">$29</span><span className="text-slate-500">/mo</span>
</div>
<p className="text-xs text-slate-500 mb-6">For casual bettors looking for guidance.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-2 text-sm text-slate-300"><iconify-icon className="text-slate-500" icon="lucide:check"></iconify-icon> 5 AI Picks / Day</li>
<li className="flex gap-2 text-sm text-slate-300"><iconify-icon className="text-slate-500" icon="lucide:check"></iconify-icon> Basic Trends</li>
<li className="flex gap-2 text-sm text-slate-300"><iconify-icon className="text-slate-500" icon="lucide:check"></iconify-icon> iOS App Access</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Start Trial</button>
</div>

<div className="w-full md:w-80 p-8 rounded-3xl bg-slate-900 border border-emerald-500/30 text-left flex flex-col relative shadow-[0_0_50px_-10px_rgba(16,185,129,0.15)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-lg font-medium text-white">Sharp</h3>
<div className="my-4">
<span className="text-4xl font-bold text-white">$79</span><span className="text-slate-500">/mo</span>
</div>
<p className="text-xs text-slate-400 mb-6">For serious bettors wanting full data access.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-2 text-sm text-white"><iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> Unlimited AI Picks</li>
<li className="flex gap-2 text-sm text-white"><iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> +EV Dashboard</li>
<li className="flex gap-2 text-sm text-white"><iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> Real-time Line Movement</li>
<li className="flex gap-2 text-sm text-white"><iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> Injury Impact Models</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors">Get Started</button>
</div>

<div className="w-full md:w-80 p-8 rounded-3xl glass text-left flex flex-col">
<h3 className="text-lg font-medium text-slate-300">Whale</h3>
<div className="my-4">
<span className="text-4xl font-bold text-white">$199</span><span className="text-slate-500">/mo</span>
</div>
<p className="text-xs text-slate-500 mb-6">For high-volume syndicates.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-2 text-sm text-slate-300"><iconify-icon className="text-slate-500" icon="lucide:check"></iconify-icon> Everything in Sharp</li>
<li className="flex gap-2 text-sm text-slate-300"><iconify-icon className="text-slate-500" icon="lucide:check"></iconify-icon> API Access</li>
<li className="flex gap-2 text-sm text-slate-300"><iconify-icon className="text-slate-500" icon="lucide:check"></iconify-icon> 1-on-1 Strategy Call</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
<h3 className="font-medium">Is this considered gambling?</h3>
<span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" icon="lucide:minus" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-400 text-sm font-light">
                    VisionBet AI is a data analytics tool. We do not accept bets or handle money for wagering. We provide information to help you make smarter decisions on legal sportsbooks.
                </p>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
<h3 className="font-medium">How accurate is the AI model?</h3>
<span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" icon="lucide:minus" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-400 text-sm font-light">
                    Our model's accuracy varies by sport and season, but our "High Confidence" picks (marked +EV) have historically outperformed the closing line by 4-6%. We publish a transparent monthly report of all model predictions.
                </p>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
<h3 className="font-medium">Which sports do you cover?</h3>
<span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" icon="lucide:minus" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-400 text-sm font-light">
                    Currently we cover NFL, NBA, MLB, NHL, and major European Soccer leagues (EPL, La Liga). NCAA Football and Basketball are added during their respective seasons.
                </p>
</details>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-black">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">VISIONBET AI</span>
</div>
<p className="text-xs text-slate-600">
                © 2024 VisionBet Analytics Inc. All rights reserved. <br className="md:hidden"/> Please bet responsibly. 1-800-GAMBLER.
            </p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
