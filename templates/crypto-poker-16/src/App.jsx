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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center w-10 h-10 bg-black border border-pink-500/30 rounded-xl shadow-lg shadow-pink-500/10 group-hover:shadow-pink-500/30 transition-all duration-300">
<i className="text-pink-500 w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Rabby<span className="text-pink-500">AI</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Live Demo</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white" href="#">Sign In</a>
<button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-pink-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
<i className="w-4 h-4" data-lucide="chrome"></i>
                    Add to Chrome
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
<span className="text-sm font-medium text-purple-200">v2.0 Now Live: Real-time GTO Analysis</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-[1.1]">
                    Your unfair advantage <br/>
<span className="text-gradient animate-gradient">hidden in plain sight.</span>
</h1>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    The AI Assistant that calculates pot odds, opponent ranges, and GTO strategy in real-time. Dominate the table without saying a word.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-900/40">
<i className="w-4 h-4" data-lucide="download"></i>
                        Download Extension
                    </button>
<button className="w-full sm:w-auto h-12 px-8 bg-black border border-zinc-800 rounded-full text-zinc-300 font-medium hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Watch Demo
                    </button>
</div>
</div>

<div className="mt-24 max-w-5xl mx-auto">
<div className="relative bg-zinc-900/40 border border-purple-500/20 rounded-3xl p-1 backdrop-blur-md glow-effect">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
<div className="bg-black/90 rounded-[20px] p-6 md:p-10 overflow-hidden relative min-h-[500px]">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

<div className="relative z-10 flex flex-col h-full justify-between">

<div className="flex justify-center gap-8 mb-8">
<div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center gap-3 w-64 shadow-2xl">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="text-xs font-bold text-zinc-500">OPP</span>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-400">Aggression</span>
<span className="text-pink-500 font-bold">High (72%)</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full">
<div className="h-full bg-pink-600 rounded-full w-[72%]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex items-center justify-center relative">

<div className="absolute top-0 transform -translate-y-12 bg-black border border-purple-500 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                                    AI Suggestion: <span className="text-white">Raise 2.5x</span>
</div>
<div className="relative">

<div className="absolute -left-16 -top-2 w-28 h-40 bg-white rounded-lg shadow-2xl -rotate-6 border-2 border-zinc-200 flex flex-col items-center justify-center">
<span className="absolute top-1 left-2 text-lg font-bold text-black">A</span>
<i className="w-10 h-10 fill-black text-black" data-lucide="spade"></i>
<span className="absolute bottom-1 right-2 text-lg font-bold text-black rotate-180">A</span>
</div>

<div className="absolute -right-4 -top-6 w-28 h-40 bg-white rounded-lg shadow-2xl rotate-6 border-2 border-zinc-200 flex flex-col items-center justify-center z-10">
<span className="absolute top-1 left-2 text-lg font-bold text-red-600">K</span>
<i className="w-10 h-10 fill-red-600 text-red-600" data-lucide="heart"></i>
<span className="absolute bottom-1 right-2 text-lg font-bold text-red-600 rotate-180">K</span>
</div>

<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 bg-zinc-900/90 backdrop-blur border border-purple-500/50 rounded-xl p-3 shadow-2xl">
<div className="flex justify-between items-end mb-2">
<span className="text-xs text-zinc-400 uppercase tracking-wider">Win Probability</span>
<span className="text-2xl font-bold text-white">84.2%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[84%] relative">
<div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 flex justify-between items-end">
<div className="text-left">
<p className="text-xs text-zinc-500 mb-2">Analysis Mode</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded text-xs">GTO</span>
<span className="px-3 py-1 bg-zinc-800 text-zinc-500 rounded text-xs">Exploitative</span>
</div>
</div>

<div className="w-64">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Risk Tolerance</span>
<span className="text-pink-500">Aggressive</span>
</div>
<input className="w-full" type="range" value="75"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">A second brain for your game.</h2>
<p className="text-zinc-400">Rabby AI processes millions of scenarios per second to give you the optimal line for every hand.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-pink-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
<div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20 group-hover:border-pink-500/50 transition-colors">
<i className="text-pink-500 w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-zinc-100">Live Odds Calculation</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Instantly see your equity, pot odds, and implied odds overlayed directly on your table window.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
<div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
<i className="text-purple-500 w-6 h-6" data-lucide="scan-eye"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-zinc-100">Opponent Profiling</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        The AI tracks opponent tendencies (VPIP, PFR) and categorizes them as Shark, Fish, or Maniac automatically.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-pink-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
<div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20 group-hover:border-pink-500/50 transition-colors">
<i className="text-pink-400 w-6 h-6" data-lucide="history"></i>
</div>
<h3 className="text-xl font-semibold mb-3 text-zinc-100">Post-Game Study</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Flag mistakes instantly. Rabby generates a report after every session showing where you deviated from optimal play.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-zinc-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Live Analysis Feed</h2>
<p className="text-zinc-400">See Rabby AI breaking down hands in real-time across the network.</p>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
</span>
<span className="text-pink-500 text-sm font-medium">System Active</span>
</div>
</div>
<div className="glass-panel rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-zinc-400">
<thead className="bg-white/5 text-xs uppercase font-medium text-zinc-300">
<tr>
<th className="px-6 py-4">Hand ID</th>
<th className="px-6 py-4">Hole Cards</th>
<th className="px-6 py-4">Scenario</th>
<th className="px-6 py-4">AI Recommendation</th>
<th className="px-6 py-4 text-right">EV Impact</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors cursor-default">
<td className="px-6 py-4 font-mono text-zinc-500">#8X92-A</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-mono text-white">
<span className="text-white">A♠</span>
<span className="text-red-500">K♥</span>
</div>
</td>
<td className="px-6 py-4">UTG Raise vs BB 3-Bet</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-2 text-white">
<i className="w-4 h-4 text-pink-500" data-lucide="arrow-up-circle"></i>
                                        4-Bet to 24bb
                                    </span>
</td>
<td className="px-6 py-4 text-right text-emerald-400 font-mono">+$12.50</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-default">
<td className="px-6 py-4 font-mono text-zinc-500">#7B21-C</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-mono text-white">
<span className="text-red-500">7♥</span>
<span className="text-red-500">8♥</span>
</div>
</td>
<td className="px-6 py-4">Flop check-raise (Dry Board)</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-2 text-white">
<i className="w-4 h-4 text-zinc-500" data-lucide="x-circle"></i>
                                        Fold
                                    </span>
</td>
<td className="px-6 py-4 text-right text-emerald-400 font-mono">+$4.20</td>
</tr>
<tr className="hover:bg-white/5 transition-colors cursor-default">
<td className="px-6 py-4 font-mono text-zinc-500">#9Y44-Q</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-mono text-white">
<span className="text-white">J♠</span>
<span className="text-white">J♣</span>
</div>
</td>
<td className="px-6 py-4">Turn Overbet Bluff Catch</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-2 text-white">
<i className="w-4 h-4 text-purple-500" data-lucide="check-circle"></i>
                                        Call
                                    </span>
</td>
<td className="px-6 py-4 text-right text-emerald-400 font-mono">+$85.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Your pocket coach.</h2>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        Review hands on the go. Sync your session data from desktop to mobile and analyze your biggest pots while you're away from the table.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-300">
<i className="text-pink-500 w-5 h-5" data-lucide="check"></i>
<span>Cloud sync across all devices</span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="text-pink-500 w-5 h-5" data-lucide="check"></i>
<span>Instant leak detection alerts</span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="text-pink-500 w-5 h-5" data-lucide="check"></i>
<span>Pre-flop range charts in your pocket</span>
</li>
</ul>
<div className="flex items-center gap-4">
<button className="h-12 px-6 rounded-lg bg-white text-black font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
<i className="w-5 h-5 fill-current" data-lucide="apple"></i>
                            iOS App
                        </button>
<button className="h-12 px-6 rounded-lg bg-transparent border border-zinc-700 text-white font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                            Android
                        </button>
</div>
</div>
<div className="flex-1 order-1 lg:order-2 flex justify-center relative">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 blur-[90px] rounded-full"></div>

<div className="relative w-[300px] h-[600px] bg-black border-4 border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10">
<div className="absolute top-0 left-0 w-full h-full bg-zinc-950 flex flex-col">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-900">
<i className="w-5 h-5 text-zinc-400" data-lucide="menu"></i>
<span className="font-semibold text-sm text-pink-500">Rabby AI</span>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="user"></i>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6">
<div>
<p className="text-xs text-zinc-500 uppercase mb-2">Session Score</p>
<div className="text-4xl font-bold text-white mb-1">A+</div>
<p className="text-sm text-emerald-400">Perfect GTO adherence</p>
</div>

<div className="h-32 w-full bg-zinc-900/50 rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
<svg className="absolute bottom-0 left-0 right-0 h-full w-full" preserveaspectratio="none">
<path d="M0,80 Q50,70 100,40 T200,30 T300,10" fill="none" stroke="#ec4899" strokeWidth="2"></path>
</svg>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div className="text-sm">
<div className="text-white">VPIP</div>
<div className="text-zinc-500 text-xs">Voluntarily Put In Pot</div>
</div>
</div>
<span className="font-mono text-white">24.5%</span>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-pink-400">
<i className="w-4 h-4" data-lucide="swords"></i>
</div>
<div className="text-sm">
<div className="text-white">PFR</div>
<div className="text-zinc-500 text-xs">Pre-Flop Raise</div>
</div>
</div>
<span className="font-mono text-white">18.2%</span>
</div>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl open:ring-1 open:ring-purple-500/50 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-200">Is using Rabby AI considered cheating?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        Rabby AI is designed as a study and decision-support tool. It calculates mathematical probabilities based on public information. However, always check the Terms of Service of the specific poker site you are playing on, as rules vary regarding real-time assistance (RTA).
                    </div>
</details>
<details className="group glass-panel rounded-xl open:ring-1 open:ring-purple-500/50 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-200">Which poker sites are supported?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        We currently support all major browser-based poker clients and most standalone desktop applications via screen capture OCR technology.
                    </div>
</details>
<details className="group glass-panel rounded-xl open:ring-1 open:ring-purple-500/50 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-200">Does it work for Omaha?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        Yes, Rabby AI supports NLHE, PLO, and PLO5. The subscription covers all game types.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Stop guessing. Start winning.</h2>
<p className="text-xl text-zinc-400 mb-10">
                Join 10,000+ players using Rabby AI to crush the tables.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
<button className="relative bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-zinc-900 transition-colors border border-white/10">
                        Start 7-Day Free Trial
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 border border-pink-500/50 rounded-lg flex items-center justify-center bg-pink-500/10">
<i className="text-pink-500 w-4 h-4" data-lucide="brain-circuit"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Rabby<span className="text-pink-500">AI</span></span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Advanced poker analytics and decision support software. <br/>Master the math, master the game.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-zinc-500 hover:text-pink-400 transition-colors text-sm" href="#">Features</a></li>
<li><a className="text-zinc-500 hover:text-pink-400 transition-colors text-sm" href="#">Pricing</a></li>
<li><a className="text-zinc-500 hover:text-pink-400 transition-colors text-sm" href="#">Extension</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-zinc-500 hover:text-pink-400 transition-colors text-sm" href="#">Blog</a></li>
<li><a className="text-zinc-500 hover:text-pink-400 transition-colors text-sm" href="#">GTO Charts</a></li>
<li><a className="text-zinc-500 hover:text-pink-400 transition-colors text-sm" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<div className="flex gap-4 mb-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="discord"></i></a>
</div>
<a className="text-zinc-600 hover:text-zinc-400 text-xs block mb-2" href="#">Privacy Policy</a>
<a className="text-zinc-600 hover:text-zinc-400 text-xs block" href="#">Terms of Service</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2024 Rabby AI. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-zinc-500 text-xs font-medium">Engine v2.04 Online</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
