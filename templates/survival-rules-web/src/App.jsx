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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]">
<iconify-icon icon="lucide:swords" width="18"></iconify-icon>
</div>
<span className="font-display font-semibold text-white tracking-tight text-sm">生存法则</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Wiki</a>
<a className="hover:text-white transition-colors" href="#">Rules</a>
<a className="hover:text-white transition-colors" href="#">Map</a>
<a className="hover:text-white transition-colors" href="#">Store</a>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md text-rose-400">
<span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
<span className="text-xs font-mono font-semibold">42 ONLINE</span>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-28 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-600/20 rounded-full blur-[100px] -z-10"></div>
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-zinc-300 text-[10px] font-semibold uppercase tracking-wider mb-6 hover:border-rose-500/50 transition-colors cursor-default">
<iconify-icon className="text-rose-500" icon="lucide:flame" width="12"></iconify-icon>
                    Season 5: Warlords Update
                </div>
<h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    生存法则 <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-rose-400">Survival Server</span>
</h1>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                    Experience the most advanced Bloxd.io survival server. Featuring custom economy, clan wars, protected land claims, and a player-driven marketplace.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-lg font-semibold text-xs tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] group">
<iconify-icon className="text-zinc-500 group-hover:text-black transition-colors" icon="lucide:copy" width="14"></iconify-icon>
<span>survival-rules.bloxd.gg</span>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-white/10 text-white rounded-lg font-medium text-xs tracking-wide hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:message-circle" width="14"></iconify-icon>
                        Join Discord
                    </button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="relative rounded-xl border border-white/10 bg-zinc-950/50 backdrop-blur-sm shadow-2xl overflow-hidden">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono">server-dashboard.tsx</div>
<div className="w-12"></div>
</div>
<div className="flex flex-col md:flex-row h-[450px]">

<div className="w-full md:w-64 border-r border-white/5 bg-zinc-900/30 p-4">
<div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-3 px-3">Main Menu</div>
<div className="space-y-1">
<button className="w-full text-left px-3 py-2 rounded-md bg-rose-500/10 text-rose-400 text-xs font-medium border border-rose-500/20 flex items-center gap-3">
<iconify-icon icon="lucide:bar-chart-2" width="14"></iconify-icon>
                                Statistics
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors flex items-center gap-3">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
                                Factions
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors flex items-center gap-3">
<iconify-icon icon="lucide:shopping-bag" width="14"></iconify-icon>
                                Economy
                            </button>
<button className="w-full text-left px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors flex items-center gap-3">
<iconify-icon icon="lucide:shield-alert" width="14"></iconify-icon>
                                Bans
                            </button>
</div>
<div className="mt-auto pt-40">
<div className="p-3 rounded-lg bg-zinc-900 border border-white/5">
<div className="flex justify-between items-center mb-1">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">TPS Status</div>
<div className="text-[10px] text-emerald-400 font-mono">20.0</div>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1">
<div className="bg-emerald-500 h-1 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-8 bg-black/20 overflow-y-auto scrollbar-hide">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-display font-medium text-white">Live Server Metrics</h2>
<p className="text-xs text-zinc-500 mt-1">Real-time data from Lobby #1</p>
</div>
<div className="flex items-center gap-2 text-[10px] text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                System Operational
                            </div>
</div>
<div className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:users" width="14"></iconify-icon>
<label className="text-xs font-medium text-zinc-300">Player Capacity</label>
</div>
<span className="text-[10px] font-mono text-zinc-400">42 / 100</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-gradient-to-r from-rose-500 to-orange-500 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:clock" width="14"></iconify-icon>
<label className="text-xs font-medium text-zinc-300">Uptime</label>
</div>
<span className="text-[10px] font-mono text-zinc-400">14d 2h</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
</div>
<hr className="border-white/5"/>

<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-2 mb-4">Active Events</h3>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-gradient-to-r from-rose-500/5 to-transparent">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-rose-500/20 flex items-center justify-center text-rose-400">
<iconify-icon icon="lucide:swords" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">PvP Arena Event</div>
<div className="text-[10px] text-zinc-500">2x Kill Rewards Active</div>
</div>
</div>
<div className="px-2 py-1 rounded bg-rose-500 text-white text-[10px] font-bold tracking-wide">LIVE</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-amber-500/20 flex items-center justify-center text-amber-400">
<iconify-icon icon="lucide:coins" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Market Weekend</div>
<div className="text-[10px] text-zinc-500">Zero tax on transactions</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer pointer-events-none">
<input className="sr-only peer" disabled="" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer-checked:bg-emerald-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-500 after:rounded-full after:h-4 after:w-4"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/50 backdrop-blur-sm mb-24">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-8 text-center">
<div className="text-3xl font-display font-semibold text-white tracking-tight mb-1">500+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Daily Users</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-display font-semibold text-white tracking-tight mb-1">20x20</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Spawn Size</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-display font-semibold text-white tracking-tight mb-1">1.2M</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Blocks Mined</div>
</div>
<div className="p-8 text-center">
<div className="text-3xl font-display font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Uptime</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="mb-16">
<h2 className="font-display text-2xl font-semibold text-white tracking-tight mb-4">Game Features</h2>
<div className="h-px w-24 bg-rose-600"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:landmark" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Advanced Economy</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Earn coins by mining, farming, and trading. Buy land protection blocks to secure your base from raiders.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Land Claims</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Claim your territory with the Golden Shovel system. Prevent griefing and manage permissions for your team.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trophy" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Weekly Tournaments</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Participate in PvP arena battles and parkour races every Saturday for exclusive ranks and loot.
                    </p>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-zinc-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-6 h-6 bg-rose-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:swords" width="14"></iconify-icon>
</div>
<span className="font-display font-bold text-white tracking-tight">生存法则</span>
</div>
<p className="text-sm text-zinc-500 max-w-sm">
                            The premier Chinese Bloxd.io survival community. Fair play, active staff, and zero lag.
                        </p>
</div>
<div className="flex gap-4">
<a className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="lucide:map" width="14"></iconify-icon>
                            Live Map
                        </a>
<a className="px-5 py-2 rounded-lg bg-rose-600 text-xs font-medium text-white hover:bg-rose-500 transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)]" href="#">
                            Vote for Server
                        </a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Server</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-rose-400 transition-colors" href="#">How to Join</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Server Rules</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Staff List</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Community</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-rose-400 transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Forum</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Ban Appeals</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-rose-400 transition-colors" href="#">Ranks</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Crate Keys</a></li>
<li><a className="hover:text-rose-400 transition-colors" href="#">Coins</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-mono">
<div>© 2024 生存法则 (SURVIVAL RULES). Not affiliated with Bloxd.io.</div>
<div className="flex items-center gap-2 mt-2 md:mt-0">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span>SERVER ONLINE</span>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
