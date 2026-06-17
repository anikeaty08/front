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
      

<aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-[#030303] z-10 relative">
<div className="h-16 flex items-center px-6 border-b border-white/5 relative">

<div className="absolute inset-0 bg-violet-500/10 blur-xl rounded-full"></div>
<span className="text-xl font-medium tracking-tighter text-white relative z-10 uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                N.X.S
            </span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
<div>
<h3 className="px-2 text-xs font-medium tracking-widest uppercase text-zinc-600 mb-3">Menu</h3>
<ul className="space-y-1 text-sm">
<li><a className="flex items-center gap-3 px-2 py-2 rounded-lg bg-white/5 text-white" href="#"><iconify-icon icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Dashboard</a></li>
<li><a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#"><iconify-icon icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Forums</a></li>
<li><a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#"><iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Blog</a></li>
</ul>
</div>
<div>
<h3 className="px-2 text-xs font-medium tracking-widest uppercase text-zinc-600 mb-3">Media</h3>
<ul className="space-y-1 text-sm">
<li><a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#"><iconify-icon icon="solar:music-note-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Soundtracks</a></li>
<li><a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#"><iconify-icon icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Cinematics</a></li>
<li><a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#"><iconify-icon icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Artworks</a></li>
</ul>
</div>
</nav>
<div className="p-4 border-t border-white/5">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 hover:text-zinc-200 transition-colors text-sm" href="#">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md z-20">
<div className="flex items-center gap-4 md:hidden">
<span className="text-lg font-medium tracking-tighter text-white uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                    N.X.S
                </span>
</div>
<div className="hidden md:flex items-center relative w-96">
<iconify-icon className="absolute left-3 text-zinc-500" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-zinc-200 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-600" placeholder="Search games, users, or posts..." type="text"/>
</div>
<div className="flex items-center gap-4 text-sm">
<button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</button>
<div className="h-6 w-px bg-white/10"></div>
<button className="flex items-center gap-3 hover:bg-white/5 p-1 pr-3 rounded-full border border-transparent hover:border-white/10 transition-all">
<img alt="Profile" className="w-8 h-8 rounded-full border border-white/20" src="https://i.pravatar.cc/100?img=33"/>
<div className="hidden sm:block text-left">
<div className="text-zinc-200 font-medium leading-none mb-1">Kaelthas</div>
<div className="text-xs text-violet-400 flex items-center gap-1 leading-none"><iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon> Lvl 42</div>
</div>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 z-10 space-y-8 scroll-smooth" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent'}}>

<section className="relative rounded-2xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-[#030303] to-[#030303] z-0"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] z-0 opacity-50"></div>
<div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400 mb-4 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live Event Active
                        </div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                            Cybernetic Dawn: Season V
                        </h1>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                            Join the resistance. Explore new territories, unlock exclusive neon cyber-gear, and conquer the global leaderboards before the event ends.
                        </p>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Enter the Fray
                        </button>
</div>

<div className="hidden lg:block relative w-48 h-48">
<div className="absolute inset-0 border border-violet-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 border border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-5xl text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]" icon="solar:gamepad-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="space-y-8">

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-2xl rounded-full"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="relative">
<img className="w-16 h-16 rounded-xl border border-white/20 shadow-lg" src="https://i.pravatar.cc/100?img=33"/>
<div className="absolute -bottom-2 -right-2 bg-black border border-white/10 px-2 py-0.5 rounded text-xs font-medium text-violet-400">42</div>
</div>
<div>
<h2 className="text-lg font-medium tracking-tight text-white">Kaelthas Void</h2>
<p className="text-sm text-zinc-500">Phantom Assassin</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
<div className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-zinc-500 mb-1">Win Rate</div>
<div className="text-white font-medium">68.4%</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
<div className="text-xs text-zinc-500 mb-1">Rank</div>
<div className="text-cyan-400 font-medium shadow-cyan-400/20 drop-shadow-md">Diamond II</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3 relative z-10">
<h3 className="text-sm font-medium text-white">Latest Badges</h3>
<a className="text-xs text-violet-400 hover:text-violet-300" href="#">View all</a>
</div>
<div className="flex gap-3 relative z-10">

<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 flex items-center justify-center relative group cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.1)]">
<iconify-icon className="text-amber-400 text-lg" icon="solar:flame-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center relative group cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)]">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:shield-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 flex items-center justify-center relative group cursor-pointer shadow-[0_0_10px_rgba(139,92,246,0.1)]">
<iconify-icon className="text-violet-400 text-lg" icon="solar:ghost-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<iconify-icon className="text-xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight text-white">Server Upkeep</h2>
</div>
<p className="text-xs text-zinc-500 mb-4 leading-relaxed">Support the community servers and unlock exclusive forum flairs.</p>
<div className="mb-2 flex justify-between text-xs">
<span className="text-white font-medium">$850 raised</span>
<span className="text-zinc-500">Goal: $1,000</span>
</div>
<div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden mb-5 border border-white/5">
<div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 w-[85%] relative">
<div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
</div>
</div>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
                            Contribute Now
                        </button>
</div>
</div>

<div className="lg:col-span-2 space-y-8">

<div className="flex items-center gap-6 border-b border-white/5 pb-px">
<button className="text-sm font-medium text-white border-b-2 border-violet-500 pb-2 -mb-[2px]">Forum Activity</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 pb-2 -mb-[2px] transition-colors">Latest Comm-Links</button>
</div>

<div className="space-y-3">

<div className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="hidden sm:flex flex-col items-center justify-center min-w-[3rem] p-2 rounded-lg bg-zinc-900 border border-white/5 text-xs text-zinc-400">
<iconify-icon className="text-zinc-500 hover:text-emerald-400 transition-colors text-lg mb-1" icon="solar:alt-arrow-up-linear"></iconify-icon>
                                342
                            </div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">Patch Notes</span>
<span className="text-xs text-zinc-600">• 2h ago by System</span>
</div>
<h4 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors mb-1">Update v4.2.1: Weapon rebalancing and map exploits fixed</h4>
<p className="text-sm text-zinc-500 line-clamp-1">Detailed breakdown of the stealth mechanics changes and adjustments to sniper rifles...</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-600 sm:flex-col sm:items-end sm:justify-center">
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> 89</span>
<span className="flex items-center gap-1 sm:hidden"><iconify-icon icon="solar:eye-linear"></iconify-icon> 1.2k</span>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all cursor-pointer">
<div className="hidden sm:flex flex-col items-center justify-center min-w-[3rem] p-2 rounded-lg bg-zinc-900 border border-white/5 text-xs text-zinc-400">
<iconify-icon className="text-zinc-500 hover:text-emerald-400 transition-colors text-lg mb-1" icon="solar:alt-arrow-up-linear"></iconify-icon>
                                128
                            </div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Discussion</span>
<span className="text-xs text-zinc-600">• 5h ago by NeoRider</span>
</div>
<h4 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors mb-1">Best loadout for the new orbital station map?</h4>
<p className="text-sm text-zinc-500 line-clamp-1">Struggling with close quarters in the central hub. What are you guys running?</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-600 sm:flex-col sm:items-end sm:justify-center">
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> 45</span>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium tracking-tight text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="solar:play-circle-linear"></iconify-icon>
                            Featured Media
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative group rounded-xl overflow-hidden border border-white/5 aspect-video bg-zinc-900 cursor-pointer">
<img alt="Cinematic" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon className="ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4">
<span className="text-[10px] uppercase tracking-wider font-medium text-cyan-400 mb-1 block drop-shadow-md">Cinematic Trailer</span>
<h4 className="text-sm font-medium text-white truncate">Season V: Awakening</h4>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between h-full">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-md bg-zinc-800 border border-white/10 overflow-hidden relative flex-shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-black mix-blend-overlay z-10"></div>

<div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50"></div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-white truncate mb-0.5">Neon Nights O.S.T</h4>
<p className="text-xs text-zinc-500 truncate mb-2">Synthwave Collective</p>

<div className="flex items-end h-4 gap-0.5 w-full opacity-60">
<div className="w-1 bg-violet-400 h-[30%] rounded-t-sm"></div>
<div className="w-1 bg-violet-400 h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-violet-400 h-[100%] rounded-t-sm"></div>
<div className="w-1 bg-violet-400 h-[80%] rounded-t-sm"></div>
<div className="w-1 bg-violet-400 h-[40%] rounded-t-sm"></div>
<div className="w-1 bg-zinc-700 h-[20%] rounded-t-sm"></div>
<div className="w-1 bg-zinc-700 h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-zinc-700 h-[30%] rounded-t-sm"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-4 text-zinc-400">
<span className="text-[10px]">1:24</span>
<div className="flex gap-3">
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:skip-previous-linear"></iconify-icon></button>
<button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"><iconify-icon className="text-xs" icon="solar:pause-bold"></iconify-icon></button>
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:skip-next-linear"></iconify-icon></button>
</div>
<span className="text-[10px]">4:05</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</main>


<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-none">
<div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-sm w-full relative overflow-hidden pointer-events-auto" style={{boxShadow: '0 0 40px -10px rgba(139, 92, 246, 0.4), inset 0 0 20px -10px rgba(139,92,246,0.2)'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-violet-500/10 blur-[40px] rounded-full pointer-events-none"></div>
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="text-center relative z-10 pt-2">

<div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-b from-violet-500/20 to-transparent border border-violet-500/30 flex items-center justify-center mb-4 relative shadow-[0_0_30px_rgba(139,92,246,0.3)]">
<div className="absolute inset-0 bg-violet-400/20 blur-md rounded-2xl animate-pulse"></div>
<iconify-icon className="text-4xl text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,1)] relative z-10" icon="solar:trophy-linear"></iconify-icon>
</div>
<div className="inline-block px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-zinc-400 mb-2">Achievement Unlocked</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Void Walker</h3>
<p className="text-sm text-zinc-500 mb-6">You successfully navigated the dark sector without taking damage. 500 XP added to your profile.</p>
<button className="w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    Claim Reward
                </button>
</div>
</div>
</div>

    </>
  );
}
