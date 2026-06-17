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
      

<aside className="w-64 border-r border-white/10 flex flex-col justify-between hidden md:flex shrink-0 bg-[#050505] z-10">
<div className="p-6">

<div className="mb-10 flex items-center gap-2 text-white">
<iconify-icon className="text-xl" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xl tracking-tighter font-semibold">FLYSIUM</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
                    Home
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
                    Play Now
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
                    Leaderboard
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                    Skins Hub
                </a>
</nav>
</div>
<div className="p-6 border-t border-white/10">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors mb-2" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings &amp; Config
            </a>

<div className="flex items-center gap-3 px-3 py-2 mt-4 bg-white/5 rounded-lg border border-white/10">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 text-[#050505]">
<span className="text-xs font-semibold">N0</span>
</div>
<div className="flex flex-col overflow-hidden">
<span className="font-medium text-white truncate text-sm">n0thing</span>
<span className="text-xs text-white/50 truncate flex items-center gap-1">
<iconify-icon className="text-xs" icon="solar:letter-linear"></iconify-icon>
                        n0thing@gmail.com
                    </span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative bg-[#050505]">
<div className="max-w-6xl mx-auto p-6 md:p-10 space-y-8 pb-24">

<header className="flex justify-between items-end">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-white">Welcome back, n0thing.</h1>
<p className="text-white/50 mt-1">Queue is active. 1,402 players online.</p>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#1A1A1A] text-xs text-white/70">
<span className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                        Gmail Synced
                    </div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white/70 hover:text-white relative">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-white rounded-full"></span>
</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<section className="lg:col-span-2 space-y-6">

<div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden flex flex-col">
<div className="p-5 border-b border-white/10 flex justify-between items-center bg-[#1A1A1A]">
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<h2 className="text-base font-medium tracking-tight">Active Lobby #8924</h2>
</div>
<span className="text-xs font-medium px-2 py-1 rounded bg-white/10 text-white">VETO PHASE</span>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Map Veto</h3>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#050505]/50 opacity-50 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
<span className="relative z-10 font-medium line-through">de_dust2</span>
<span className="relative z-10 text-xs text-white/50">Banned by Team A</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white bg-white/5 relative overflow-hidden ring-1 ring-white/20">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
<div className="relative z-10 flex items-center gap-2">
<iconify-icon className="animate-spin-slow" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-medium">de_mirage</span>
</div>
<span className="relative z-10 text-xs font-medium">Captain Voting...</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-[#050505] relative overflow-hidden">
<span className="relative z-10 text-white/70">de_inferno</span>
<span className="relative z-10 text-xs text-white/30">Available</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Roster</h3>
<div className="grid grid-cols-2 gap-4">

<div className="space-y-1">
<div className="text-xs font-medium text-white/40 mb-2">Team A</div>
<div className="flex items-center gap-2 text-white"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>n0thing <iconify-icon className="text-white/50 text-xs" icon="solar:star-linear"></iconify-icon></div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>f0rest</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>Get_RiGhT</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>shroud</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>s1mple</div>
</div>

<div className="space-y-1">
<div className="text-xs font-medium text-white/40 mb-2">Team B</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>ZywOo <iconify-icon className="text-white/50 text-xs" icon="solar:star-linear"></iconify-icon></div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>NiKo</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>device</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>ropz</div>
<div className="flex items-center gap-2 text-white/70"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>karrigan</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-white/10 bg-[#050505] flex items-center justify-between">
<div className="text-xs text-white/40 font-mono">Server: 192.168.1.100:27015 (Pending)</div>
<button className="bg-white text-[#050505] px-6 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center gap-2 opacity-50 cursor-not-allowed">
<iconify-icon icon="solar:play-linear" strokeWidth="2"></iconify-icon>
                                Launch via Flysium App
                            </button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<h2 className="text-base font-medium tracking-tight text-white">Trending Skins Hub</h2>
<a className="text-xs text-white/50 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="group cursor-pointer">
<div className="aspect-video bg-[#1A1A1A] rounded-lg border border-white/10 mb-2 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-transparent opacity-50 z-10"></div>

<div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="40"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white/90 truncate">AK-47 | Mono Black</span>
<iconify-icon className="text-white/70" icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-xs text-white/40">by volvo_designer</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-[#1A1A1A] rounded-lg border border-white/10 mb-2 overflow-hidden relative">
<div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="40"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white/90 truncate">M4A1 | Stealth</span>
</div>
<span className="text-xs text-white/40">by aimbot_user</span>
</div>

<div className="group cursor-pointer hidden md:block">
<div className="aspect-video bg-[#1A1A1A] rounded-lg border border-white/10 mb-2 overflow-hidden relative">
<div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="40"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white/90 truncate">AWP | Graphite Pro</span>
<iconify-icon className="text-white/70" icon="solar:verified-check-linear"></iconify-icon>
</div>
<span className="text-xs text-white/40">by kennys_fan</span>
</div>
</div>
</div>
</section>

<section className="space-y-6">

<div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">

<div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-medium tracking-tight">8</span>
</div>
<div>
<h2 className="text-xs font-medium text-white/50 uppercase tracking-widest">Current Rating</h2>
<div className="text-2xl font-semibold tracking-tight text-white mt-0.5">4,250 <span className="text-sm font-normal text-white/40">/ 5000</span></div>
</div>
</div>

<div className="space-y-2 relative z-10">
<div className="flex justify-between text-xs text-white/50">
<span>Level 8</span>
<span>Level 9 (4500)</span>
</div>
<div className="h-1.5 w-full bg-[#050505] rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-white rounded-full relative" style={{width: '85%'}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 animate-pulse"></div>
</div>
</div>
<p className="text-xs text-white/40 text-right mt-1">+250 ELO to next rank</p>
</div>

<div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-white/10 relative z-10">
<div className="text-center">
<div className="text-xs text-white/40 uppercase mb-1">Win Rate</div>
<div className="font-medium text-white">62.4%</div>
</div>
<div className="text-center border-x border-white/10">
<div className="text-xs text-white/40 uppercase mb-1">K/D Ratio</div>
<div className="font-medium text-white">1.34</div>
</div>
<div className="text-center">
<div className="text-xs text-white/40 uppercase mb-1">Avg ADR</div>
<div className="font-medium text-white">98.2</div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden">
<div className="p-5 border-b border-white/10 flex justify-between items-center">
<h2 className="text-base font-medium tracking-tight">Hall of Fame</h2>
<a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Top 100</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs whitespace-nowrap">
<thead className="text-white/40 bg-[#050505]/50 border-b border-white/5">
<tr>
<th className="font-medium px-5 py-3 w-10">#</th>
<th className="font-medium px-5 py-3">Player</th>
<th className="font-medium px-5 py-3 text-right">ELO</th>
<th className="font-medium px-5 py-3 text-right">HS%</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-5 py-3 text-white/50 group-hover:text-white">1</td>
<td className="px-5 py-3 font-medium text-white flex items-center gap-2">
<span>Zeus</span>
<span className="text-xs bg-white/10 text-white/70 px-1.5 py-0.5 rounded">12 W</span>
</td>
<td className="px-5 py-3 text-right font-mono text-white/90">5000</td>
<td className="px-5 py-3 text-right text-white/50">68%</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-5 py-3 text-white/50 group-hover:text-white">2</td>
<td className="px-5 py-3 font-medium text-white">NEO</td>
<td className="px-5 py-3 text-right font-mono text-white/90">4985</td>
<td className="px-5 py-3 text-right text-white/50">55%</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-5 py-3 text-white/50 group-hover:text-white">3</td>
<td className="px-5 py-3 font-medium text-white">f0rest</td>
<td className="px-5 py-3 text-right font-mono text-white/90">4950</td>
<td className="px-5 py-3 text-right text-white/50">61%</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="px-5 py-3 text-white/50 group-hover:text-white">4</td>
<td className="px-5 py-3 font-medium text-white">markeloff</td>
<td className="px-5 py-3 text-right font-mono text-white/90">4890</td>
<td className="px-5 py-3 text-right text-white/50">42%</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
</div>
</main>

<aside className="w-80 border-l border-white/10 bg-[#050505] flex flex-col hidden lg:flex shrink-0 z-10">

<div className="h-16 border-b border-white/10 flex items-center justify-between px-5 shrink-0">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-lg" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-tight">Global Chat</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
<span className="text-xs text-white/50">Live</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-5 flex flex-col justify-end">

<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-medium text-white/90 text-xs hover:underline cursor-pointer">pashaBiceps</span>
<span className="text-xs text-white/30">10:42 AM</span>
</div>
<p className="text-white/70 text-sm leading-relaxed">Anyone need a 5th for a mix? Lvl 7+, pref Dust2.</p>
</div>

<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-medium text-white/90 text-xs hover:underline cursor-pointer">toxic_player22</span>
<span className="text-xs text-white/30">10:45 AM</span>
</div>
<div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg inline-block">
<p className="text-white/40 text-xs italic flex items-center gap-2">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
                        Message hidden by AI Toxicity Filter.
                    </p>
</div>
</div>

<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-medium text-white/90 text-xs hover:underline cursor-pointer">n0thing</span>
<span className="text-xs text-white/30">10:46 AM</span>
</div>
<p className="text-white/70 text-sm leading-relaxed">Just queued up, let's see what map we get.</p>
</div>
</div>

<div className="p-5 border-t border-white/10 bg-[#050505] shrink-0">
<div className="relative flex items-center">
<input className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg py-2.5 pl-3 pr-10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 p-1 text-white/50 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</aside>

    </>
  );
}
