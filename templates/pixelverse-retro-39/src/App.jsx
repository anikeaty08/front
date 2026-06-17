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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-stone-950/80 backdrop-blur-xl h-16">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="size-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-white" icon="solar:gamepad-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">PIXELVERSE</span>
</div>

<div className="hidden md:flex items-center gap-3 w-full max-w-sm mx-8 relative group">
<iconify-icon className="absolute left-3 text-stone-500 group-focus-within:text-orange-400 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full bg-stone-900/50 border border-white/5 rounded-lg py-2 pl-10 pr-4 text-sm text-stone-300 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 placeholder:text-stone-600 transition-all" placeholder="Search games, creators..." type="text"/>
<div className="absolute right-2 flex gap-1">
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 text-stone-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 size-1.5 bg-orange-500 rounded-full"></span>
</button>
<button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-white/5 bg-stone-900/50 hover:bg-stone-800/50 transition-all group">
<span className="text-xs font-medium text-stone-300 group-hover:text-white pl-1">Jinx</span>
<div className="size-6 rounded-full bg-gradient-to-tr from-stone-700 to-stone-600 border border-white/10"></div>
</button>
</div>
</div>
</nav>
<div className="pt-20 pb-10 flex-1 flex max-w-7xl mx-auto w-full px-6 gap-8">

<aside className="w-64 hidden lg:flex flex-col gap-8 shrink-0 fixed h-[calc(100vh-6rem)] top-24">
<div>
<h3 className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3 px-2">Discover</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-lg border border-white/5 shadow-sm" href="#">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                        Store Home
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:fire-linear" width="18"></iconify-icon>
                        Trending
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
                        Top Rated
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                        New Releases
                    </a>
</nav>
</div>
<div>
<h3 className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3 px-2">Library</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
                        My Games
                        <span className="ml-auto text-xs text-stone-600 font-medium">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
                        Wishlist
                    </a>
</nav>
</div>
<div>
<h3 className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3 px-2">Genre Filter</h3>
<div className="space-y-2 px-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none size-4 rounded border border-stone-700 bg-stone-900/50 checked:bg-orange-600 checked:border-orange-600 focus:ring-2 focus:ring-orange-500/20 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">Action Platformer</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none size-4 rounded border border-stone-700 bg-stone-900/50 checked:bg-orange-600 checked:border-orange-600 focus:ring-2 focus:ring-orange-500/20 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">8-Bit RPG</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer appearance-none size-4 rounded border border-stone-700 bg-stone-900/50 checked:bg-orange-600 checked:border-orange-600 focus:ring-2 focus:ring-orange-500/20 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">Metroidvania</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none size-4 rounded border border-stone-700 bg-stone-900/50 checked:bg-orange-600 checked:border-orange-600 focus:ring-2 focus:ring-orange-500/20 transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-400 group-hover:text-stone-200 transition-colors">Puzzle</span>
</label>
</div>
</div>

<div className="mt-auto px-3 py-4 rounded-xl bg-stone-900/30 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-stone-400">Master Volume</span>
<span className="text-xs text-stone-500">80%</span>
</div>
<div className="relative w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-stone-400 w-[80%] rounded-full"></div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 min-w-0">

<div className="relative w-full rounded-2xl overflow-hidden border border-white/10 mb-10 group">
<div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent z-10 pointer-events-none"></div>

<div className="h-80 w-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"></div>
<div className="absolute bottom-0 left-0 z-20 p-8 w-full md:w-2/3">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-medium mb-4 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Featured Game
                    </div>
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3 leading-tight">Cyber Drifter <span className="text-stone-500">2049</span></h1>
<p className="text-stone-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                        Navigate a dystopian pixelated metropolis. Hack terminals, dodge neon enforcement drones, and uncover the truth behind the glitch.
                    </p>
<div className="flex items-center gap-3">
<button className="flex hover:bg-stone-200 transition-colors text-sm font-medium text-black bg-white rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="solar:play-bold" width="16"></iconify-icon>
                            Play Now
                        </button>
<button className="flex items-center gap-2 bg-stone-900/50 border border-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors backdrop-blur-sm">
<iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon>
                            Details
                        </button>
</div>
</div>
</div>

<div className="flex lg:hidden overflow-x-auto gap-2 pb-4 hide-scrollbar mb-6">
<button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium whitespace-nowrap">All</button>
<button className="px-4 py-1.5 rounded-full bg-stone-900 border border-white/10 text-stone-400 text-sm whitespace-nowrap">Action</button>
<button className="px-4 py-1.5 rounded-full bg-stone-900 border border-white/10 text-stone-400 text-sm whitespace-nowrap">RPG</button>
<button className="px-4 py-1.5 rounded-full bg-stone-900 border border-white/10 text-stone-400 text-sm whitespace-nowrap">Strategy</button>
</div>

<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-white">Recommended for you</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-stone-900 text-stone-500 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-1.5 rounded-md hover:bg-stone-900 text-stone-500 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group relative bg-stone-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-stone-900/40 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100"></div>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-xs font-medium text-white border border-white/10">
                            4.9 ★
                        </div>

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="size-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-100 group-hover:text-orange-300 transition-colors">Neon Samurai</h3>
<div className="text-[10px] uppercase tracking-wide text-stone-500 border border-stone-800 px-1.5 py-0.5 rounded bg-stone-900/50">Action</div>
</div>
<p className="text-sm text-stone-500 line-clamp-1">Slay pixel demons in Edo Tokyo.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 2k playing</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> WebGL</span>
</div>
</div>
</div>

<div className="group relative bg-stone-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-stone-900/40 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614713568397-b30b7e65ff21?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100"></div>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-xs font-medium text-white border border-white/10">
                            4.7 ★
                        </div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="size-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-100 group-hover:text-orange-300 transition-colors">Void Bastion</h3>
<div className="text-[10px] uppercase tracking-wide text-stone-500 border border-stone-800 px-1.5 py-0.5 rounded bg-stone-900/50">Strategy</div>
</div>
<p className="text-sm text-stone-500 line-clamp-1">Defend your space station.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 850 playing</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> Multiplayer</span>
</div>
</div>
</div>

<div className="group relative bg-stone-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-stone-900/40 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632213702844-1e0615781374?q=80&amp;w=1932&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100"></div>
<div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-orange-500/20">
                            New
                        </div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="size-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-100 group-hover:text-orange-300 transition-colors">Dungeon Bit</h3>
<div className="text-[10px] uppercase tracking-wide text-stone-500 border border-stone-800 px-1.5 py-0.5 rounded bg-stone-900/50">Roguelike</div>
</div>
<p className="text-sm text-stone-500 line-clamp-1">Procedural dungeons await.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 12k playing</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> Single</span>
</div>
</div>
</div>

<div className="group relative bg-stone-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-stone-900/40 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative aspect-[4/3] bg-stone-800 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:20px_20px] transition-transform duration-500 group-hover:scale-110"></div>
<iconify-icon className="text-stone-600 group-hover:text-stone-400 transition-colors" icon="solar:gamepad-old-linear" width="48"></iconify-icon>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="size-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-100 group-hover:text-orange-300 transition-colors">Retro Racer '88</h3>
<div className="text-[10px] uppercase tracking-wide text-stone-500 border border-stone-800 px-1.5 py-0.5 rounded bg-stone-900/50">Racing</div>
</div>
<p className="text-sm text-stone-500 line-clamp-1">Outrun the sunset.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 450 playing</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:gamepad-linear"></iconify-icon> Local</span>
</div>
</div>
</div>

<div className="group relative bg-stone-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-stone-900/40 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=2071&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100"></div>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-xs font-medium text-white border border-white/10">
                            4.5 ★
                        </div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="size-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-100 group-hover:text-orange-300 transition-colors">Galactic Invaders</h3>
<div className="text-[10px] uppercase tracking-wide text-stone-500 border border-stone-800 px-1.5 py-0.5 rounded bg-stone-900/50">Arcade</div>
</div>
<p className="text-sm text-stone-500 line-clamp-1">Classic shooter mechanics.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 3.1k playing</span>
</div>
</div>
</div>

<div className="group relative bg-stone-900/20 border border-white/5 rounded-xl hover:border-white/10 hover:bg-stone-900/40 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100"></div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="size-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-stone-100 group-hover:text-orange-300 transition-colors">Quest of Mana</h3>
<div className="text-[10px] uppercase tracking-wide text-stone-500 border border-stone-800 px-1.5 py-0.5 rounded bg-stone-900/50">RPG</div>
</div>
<p className="text-sm text-stone-500 line-clamp-1">Turn-based fantasy battles.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 900 playing</span>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-stone-900 hover:bg-stone-800 transition-all text-sm font-medium text-stone-300 hover:text-white">
                    Load more games
                    <iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-linear" width="16"></iconify-icon>
</button>
</div>

<div className="mt-20 border-t border-white/5 pt-10 pb-20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">Pixelverse Weekly</h3>
<p className="text-sm text-stone-500 mt-1 max-w-sm">Get the latest retro game releases and developer interviews delivered to your inbox.</p>
</div>
<div className="flex w-full md:w-auto gap-2">
<input className="bg-stone-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 w-full md:w-64" placeholder="email@domain.com" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-200 transition-colors">Subscribe</button>
</div>
</div>
<div className="flex flex-wrap gap-6 mt-10 text-xs text-stone-600">
<a className="hover:text-stone-400" href="#">Terms</a>
<a className="hover:text-stone-400" href="#">Privacy</a>
<a className="hover:text-stone-400" href="#">Developers</a>
<span className="ml-auto">© 2024 Pixelverse Inc.</span>
</div>
</div>
</main>
</div>

    </>
  );
}
