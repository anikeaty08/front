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
      

<nav className="fixed top-0 w-full z-50 glass-header border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
<span className="iconify text-white" data-height="18" data-icon="lucide:flame" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-zinc-100 font-semibold tracking-tight text-lg">IGNITE<span className="text-zinc-500">CUP</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-100 hover:text-orange-500 transition-colors" href="#">Tournaments</a>
<a className="text-sm font-medium hover:text-zinc-100 transition-colors" href="#">Leaderboards</a>
<a className="text-sm font-medium hover:text-zinc-100 transition-colors" href="#">Teams</a>
<a className="text-sm font-medium hover:text-zinc-100 transition-colors" href="#">Rules</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-zinc-100 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="h-4 w-px bg-zinc-800 hidden sm:block"></div>
<button className="text-sm font-medium text-zinc-100 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 transition-all">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Season 5 Registration Live
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                    Dominate the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Battlegrounds.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                    Join the most competitive Free Fire ecosystem. Compete in daily scrims, weekly cups, and major leagues for a prize pool over $50,000.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="h-12 px-8 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition-all flex items-center justify-center gap-2">
                        Start Competing
                        <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="h-12 px-8 rounded-lg border border-zinc-800 hover:bg-zinc-900 text-zinc-100 font-medium transition-all flex items-center justify-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:play-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Watch Highlights
                    </button>
</div>
<div className="flex items-center gap-8 pt-8 border-t border-white/5">
<div>
<p className="text-2xl font-semibold text-white tracking-tight">24k+</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Players</p>
</div>
<div>
<p className="text-2xl font-semibold text-white tracking-tight">$50k</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Prize Pool</p>
</div>
<div>
<p className="text-2xl font-semibold text-white tracking-tight">150+</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Tournaments</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
<div className="flex justify-between items-start mb-8">
<div>
<span className="text-xs font-medium text-orange-400 uppercase tracking-wider mb-1 block">Live Now</span>
<h3 className="text-xl font-semibold text-white tracking-tight">Grand Finals: Bermuda</h3>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs text-white">TS</div>
<div className="w-8 h-8 rounded-full bg-orange-600 border-2 border-zinc-900 flex items-center justify-center text-xs text-white">GX</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs text-white">+2</div>
</div>
</div>

<div className="h-48 w-full bg-zinc-950 rounded-lg border border-white/5 relative overflow-hidden mb-6 group-hover:border-orange-500/30 transition-colors">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-orange-500/50 bg-orange-500/10 flex items-center justify-center animate-pulse">
<div className="w-24 h-24 rounded-full border border-white/20"></div>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 px-2 py-1 rounded text-xs text-zinc-300">
<span className="iconify text-red-500" data-icon="lucide:timer" data-width="12"></span>
                            04:20 remaining
                        </div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Current Top Fragger</span>
<span className="text-white">Ninja_07 (7 Kills)</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Teams Alive</span>
<span className="text-white">12/48</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-orange-500 h-full w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<h2 className="text-2xl font-semibold text-white tracking-tight">Active Tournaments</h2>
<div className="flex items-center gap-2 p-1 bg-zinc-900 border border-white/5 rounded-lg w-fit">
<button className="px-4 py-1.5 text-xs font-medium text-zinc-950 bg-white rounded shadow-sm">All</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">Solo</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">Squad</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">Clash Squad</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 rounded-xl overflow-hidden transition-all hover:bg-zinc-900/60">
<div className="h-40 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>

<div className="absolute inset-0 opacity-30" style={{background: 'repeating-linear-gradient(45deg, #ea580c 0, #ea580c 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}}></div>
<div className="absolute top-4 right-4 z-20 bg-zinc-950/80 backdrop-blur px-2 py-1 rounded text-xs font-medium text-white border border-white/10">
                        Squad
                    </div>
<div className="absolute bottom-4 left-4 z-20">
<h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-orange-400 transition-colors">Weekly Survival Cup</h3>
<p className="text-xs text-zinc-400">Map: Purgatory</p>
</div>
</div>
<div className="p-5">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-xs text-zinc-500 mb-1">Entry Fee</p>
<p className="text-sm font-medium text-white">Free</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Prize Pool</p>
<p className="text-sm font-medium text-orange-400">$500 USD</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Slots</p>
<p className="text-sm font-medium text-white">42/48</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Start Time</p>
<p className="text-sm font-medium text-white">20:00 EST</p>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white border border-white/5 transition-all flex items-center justify-center gap-2 group-hover:border-white/20">
                        Register Team
                        <span className="iconify" data-icon="lucide:chevron-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 hover:border-purple-500/30 rounded-xl overflow-hidden transition-all hover:bg-zinc-900/60">
<div className="h-40 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500 via-zinc-900 to-zinc-900"></div>
<div className="absolute top-4 right-4 z-20 bg-zinc-950/80 backdrop-blur px-2 py-1 rounded text-xs font-medium text-white border border-white/10">
                        Solo
                    </div>
<div className="absolute bottom-4 left-4 z-20">
<h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-purple-400 transition-colors">Lone Wolf Elite</h3>
<p className="text-xs text-zinc-400">Map: Bermuda</p>
</div>
</div>
<div className="p-5">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-xs text-zinc-500 mb-1">Entry Fee</p>
<p className="text-sm font-medium text-white">$5.00</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Prize Pool</p>
<p className="text-sm font-medium text-purple-400">$2,000 USD</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Slots</p>
<p className="text-sm font-medium text-white">96/100</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Start Time</p>
<p className="text-sm font-medium text-white">Tomorrow</p>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white border border-white/5 transition-all flex items-center justify-center gap-2 group-hover:border-white/20">
                        Register
                        <span className="iconify" data-icon="lucide:chevron-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 rounded-xl overflow-hidden transition-all hover:bg-zinc-900/60">
<div className="h-40 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-zinc-900 to-zinc-900"></div>
<div className="absolute top-4 right-4 z-20 bg-zinc-950/80 backdrop-blur px-2 py-1 rounded text-xs font-medium text-white border border-white/10">
                        CS Ranked
                    </div>
<div className="absolute bottom-4 left-4 z-20">
<h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">Clash Squad Pro</h3>
<p className="text-xs text-zinc-400">Map: Kalahari</p>
</div>
</div>
<div className="p-5">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-xs text-zinc-500 mb-1">Entry Fee</p>
<p className="text-sm font-medium text-white">Free</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Prize Pool</p>
<p className="text-sm font-medium text-blue-400">Diamonds</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Slots</p>
<p className="text-sm font-medium text-white">8/8</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Start Time</p>
<p className="text-sm font-medium text-white">Sat, 14:00</p>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-500 border border-white/5 cursor-not-allowed flex items-center justify-center gap-2">
                        Full
                        <span className="iconify" data-icon="lucide:lock" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-white tracking-tight">Global Rankings</h2>
<a className="text-xs text-orange-500 hover:text-orange-400 font-medium flex items-center gap-1" href="#">
                            View All <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-xs text-zinc-500 uppercase tracking-wider">
<th className="p-4 font-medium">Rank</th>
<th className="p-4 font-medium">Team</th>
<th className="p-4 font-medium text-right">Matches</th>
<th className="p-4 font-medium text-right">Kills</th>
<th className="p-4 font-medium text-right">PTS</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
<td className="p-4 text-white font-medium group-hover:text-orange-400">#1</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center text-white font-bold text-xs">EV</div>
<span className="text-zinc-200 font-medium">Evo Sports</span>
</div>
</td>
<td className="p-4 text-right text-zinc-400">42</td>
<td className="p-4 text-right text-zinc-400">289</td>
<td className="p-4 text-right text-white font-medium">1,240</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
<td className="p-4 text-white font-medium group-hover:text-orange-400">#2</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">TL</div>
<span className="text-zinc-200 font-medium">Team Liquid</span>
</div>
</td>
<td className="p-4 text-right text-zinc-400">40</td>
<td className="p-4 text-right text-zinc-400">256</td>
<td className="p-4 text-right text-white font-medium">1,180</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
<td className="p-4 text-white font-medium group-hover:text-orange-400">#3</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white font-bold text-xs">GD</div>
<span className="text-zinc-200 font-medium">Gods Reign</span>
</div>
</td>
<td className="p-4 text-right text-zinc-400">38</td>
<td className="p-4 text-right text-zinc-400">210</td>
<td className="p-4 text-right text-white font-medium">1,050</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group cursor-pointer">
<td className="p-4 text-white font-medium group-hover:text-orange-400">#4</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-700 flex items-center justify-center text-white font-bold text-xs">NO</div>
<span className="text-zinc-200 font-medium">Nomads</span>
</div>
</td>
<td className="p-4 text-right text-zinc-400">41</td>
<td className="p-4 text-right text-zinc-400">198</td>
<td className="p-4 text-right text-white font-medium">980</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/5">
<span className="iconify text-white" data-icon="lucide:users" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Assemble Your Squad</h3>
<p className="text-sm text-zinc-400 mb-6">Create a team, invite players via UID, and track your combined stats across all tournaments.</p>
<div className="space-y-4">
<div>
<label className="text-xs font-medium text-zinc-500 mb-1.5 block">Team Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" placeholder="e.g. Delta Force" type="text"/>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-zinc-950 peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all"></div>
<span className="iconify absolute text-zinc-950 opacity-0 peer-checked:opacity-100 top-0.5 left-0.5 pointer-events-none" data-icon="lucide:check" data-width="12" style={{strokeWidth: '3'}}></span>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-300">I agree to the competitive integrity guidelines.</span>
</label>
</div>
</div>
<button className="mt-6 w-full py-2.5 rounded-lg bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors">
                        Create Team
                    </button>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20">
<h2 className="text-center text-xl font-semibold text-white tracking-tight mb-8">Tournament Rules</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-200">How is scoring calculated?</span>
<span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                    Points are awarded based on placement and kills. 1 Kill = 1 Point. Booyah = 12 Points. 2nd Place = 9 Points. Detailed breakdown available in the rulebook.
                </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-200">Anti-Cheat Policy</span>
<span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                    We use a proprietary anti-cheat system alongside manual review. Any use of emulators (unless specified), scripts, or third-party tools results in an immediate permanent ban.
                </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-200">Prize Distribution</span>
<span className="iconify text-zinc-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">
                    Prizes are distributed via bank transfer or PayPal within 14 days of tournament conclusion. Winners must complete KYC verification.
                </div>
</details>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-orange-500" data-icon="lucide:flame" data-width="18"></span>
<span className="text-white font-semibold tracking-tight">IGNITE CUP</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs">
                    The premier destination for Free Fire esports. We build the stage; you build the legacy.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Tournaments</a></li>
<li><a className="hover:text-white transition-colors" href="#">Leaderboards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rulebook</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 Ignite Cup. Not affiliated with Garena International.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:discord" data-width="16"></span></a>
</div>
</div>
</footer>

    </>
  );
}
