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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:gamepad-2" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg">ARCADE.</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Games</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Avatars</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Friends</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Leaderboard</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 bg-slate-900 rounded-full px-3 py-1.5 border border-white/10">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-white">12k Online</span>
</div>
<button className="bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
<span>Sign In</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                New Season: Space Odyssey
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Play, Create, and <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">Level Up Together.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                Explore thousands of kid-safe games, customize your 3D avatar, and challenge your friends in a universe built for fun.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
<iconify-icon icon="lucide:play" width="16"></iconify-icon>
                    Start Playing Now
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800/50 border border-white/10 text-white font-medium text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
                    View Top Games
                </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 border-y border-white/5 py-8">
<div className="flex flex-col items-center justify-center text-center gap-1">
<div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 mb-2">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Kid Safe</h3>
<p className="text-xs text-slate-500">Verified Content</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 mb-2">
<iconify-icon icon="lucide:trophy" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Rewards</h3>
<p className="text-xs text-slate-500">Earn Daily Loot</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 mb-2">
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Multiplayer</h3>
<p className="text-xs text-slate-500">Play with Friends</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mb-2">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium">Any Device</h3>
<p className="text-xs text-slate-500">Mobile &amp; Desktop</p>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="lucide:flame" width="24"></iconify-icon>
                Trending Now
            </h2>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1" href="#">
                View All <iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">

<div className="group relative rounded-3xl bg-slate-900 border border-white/5 overflow-hidden card-hover transition-all duration-300">
<div className="aspect-[4/3] w-full bg-slate-800 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wide border border-white/10">Action</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white">Cosmic Racers</h3>
<div className="flex items-center gap-1 text-amber-400">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-300">4.9</span>
</div>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Race through the galaxy in customizable spaceships. Dodge asteroids and beat the clock!</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-sky-500 border-2 border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold text-slate-900">+5</div>
</div>
<span className="text-xs text-slate-500">1.2k playing</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-slate-900 border border-white/5 overflow-hidden card-hover transition-all duration-300">
<div className="aspect-[4/3] w-full bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wide border border-white/10">Puzzle</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white">Block Masters</h3>
<div className="flex items-center gap-1 text-amber-400">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-300">4.8</span>
</div>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Build your dream world block by block. Collaborate with friends or create solo masterpieces.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-slate-900"></div>
</div>
<span className="text-xs text-slate-500">850 playing</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-slate-900 border border-white/5 overflow-hidden card-hover transition-all duration-300">
<div className="aspect-[4/3] w-full bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-orange-600 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wide border border-white/10">Adventure</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white">Dino Run 3D</h3>
<div className="flex items-center gap-1 text-amber-400">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-300">4.7</span>
</div>
</div>
<p className="text-sm text-slate-400 mb-4 line-clamp-2">Escape the volcano! Run, jump, and slide through prehistoric jungles.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-fuchsia-500 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold text-slate-900">+12</div>
</div>
<span className="text-xs text-slate-500">2k playing</span>
</div>
</div>
</div>
</div>

<div className="relative rounded-[2rem] bg-slate-900 border border-white/5 overflow-hidden p-8 md:p-12 mb-24">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/20 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-semibold mb-4 border border-pink-500/20">
                        Avatar Builder
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Be Who You Want To Be.</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Create a unique character that represents you. Unlock legendary outfits, cool accessories, and rare items as you play and level up.
                    </p>
<div className="flex flex-col gap-4">

<div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-800 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:shirt" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Customize Gear</h4>
<p className="text-xs text-slate-500">Over 500+ items</p>
</div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 border border-white/5 hover:bg-slate-800 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:wand-2" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Special Abilities</h4>
<p className="text-xs text-slate-500">Unlock powers</p>
</div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 blur-[80px] opacity-20 rounded-full"></div>
<div className="relative bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

<div className="flex justify-between items-center mb-6">
<div className="text-sm font-medium text-white">My Hero</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>

<div className="flex justify-center mb-6">
<div className="w-32 h-32 rounded-full bg-gradient-to-b from-slate-700 to-slate-800 border-4 border-slate-600 flex items-center justify-center relative shadow-inner">
<iconify-icon className="text-slate-400" icon="lucide:smile" width="64"></iconify-icon>
<div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-800"></div>
</div>
</div>

<div className="space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-xs text-slate-400">
<span>Speed</span>
<span>85%</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[85%] rounded-full"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs text-slate-400">
<span>Power</span>
<span>60%</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-fuchsia-500 w-[60%] rounded-full"></div>
</div>
</div>
</div>
<div className="mt-6">
<button className="w-full py-2 bg-white text-slate-950 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">Edit Character</button>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-1">
<h3 className="text-xl font-semibold text-white mb-2">Weekly Top Players</h3>
<p className="text-sm text-slate-400 mb-6">Compete to get your name on the Wall of Fame.</p>
<div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-lg">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-xs font-medium text-white/70">Your Rank</p>
<p className="text-2xl font-bold">#428</p>
</div>
<div className="p-2 bg-white/10 rounded-lg">
<iconify-icon icon="lucide:crown" width="24"></iconify-icon>
</div>
</div>
<div className="w-full bg-black/20 rounded-full h-1.5 mb-2">
<div className="bg-white h-1.5 rounded-full w-[65%]"></div>
</div>
<p className="text-xs text-white/70">1,250 points to next rank</p>
</div>
</div>
<div className="md:col-span-2">
<div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
<table className="w-full text-left">
<thead className="bg-slate-950/50 text-xs uppercase text-slate-500 font-medium">
<tr>
<th className="px-6 py-4">Rank</th>
<th className="px-6 py-4">Player</th>
<th className="px-6 py-4">Game</th>
<th className="px-6 py-4 text-right">Score</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="w-6 h-6 rounded bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold text-xs">1</div>
</td>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="font-medium text-white">SuperStar99</span>
</td>
<td className="px-6 py-4 text-slate-400">Cosmic Racers</td>
<td className="px-6 py-4 text-right font-medium text-emerald-400">98,500</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="w-6 h-6 rounded bg-slate-700 text-slate-400 flex items-center justify-center font-bold text-xs">2</div>
</td>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="font-medium text-white">PixelNinja</span>
</td>
<td className="px-6 py-4 text-slate-400">Block Masters</td>
<td className="px-6 py-4 text-right font-medium text-emerald-400">94,200</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="w-6 h-6 rounded bg-slate-700 text-slate-400 flex items-center justify-center font-bold text-xs">3</div>
</td>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<span className="font-medium text-white">GalaxyGirl</span>
</td>
<td className="px-6 py-4 text-slate-400">Dino Run</td>
<td className="px-6 py-4 text-right font-medium text-emerald-400">89,950</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-slate-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white">
<iconify-icon icon="lucide:gamepad-2" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">ARCADE.</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Parents Guide</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:youtube" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 text-center">
<p className="text-xs text-slate-600">© 2023 Arcade Kids Gaming Platform. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
