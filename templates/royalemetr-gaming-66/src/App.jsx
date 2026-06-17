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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-slate-100 font-medium tracking-tight text-sm">ROYALE<span className="text-slate-500">METRICS</span></span>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="text-slate-200 hover:text-indigo-400 transition-colors" href="#">Profile</a>
<a className="hover:text-slate-200 transition-colors" href="#">Decks</a>
<a className="hover:text-slate-200 transition-colors" href="#">Leaderboard</a>
<a className="hover:text-slate-200 transition-colors" href="#">Cards</a>
</div>

<div className="hidden md:block">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-600 group-focus-within:text-indigo-400 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="block w-64 pl-10 pr-3 py-1.5 border border-white/10 rounded-full leading-5 bg-white/5 text-slate-300 placeholder-slate-600 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-xs transition-all" placeholder="Search player tag #..." type="text"/>
</div>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">

<div className="relative">

<div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>
<div className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-white/5">
<div className="flex items-center gap-5">

<div className="relative">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-blue-500 to-indigo-600 p-[1px] shadow-lg shadow-indigo-500/20">
<div className="w-full h-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<span className="text-3xl font-semibold text-white tracking-tight z-10">14</span>
<div className="absolute bottom-1 text-[10px] text-indigo-300 font-medium tracking-wide uppercase">King</div>
</div>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full backdrop-blur-md">
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="10"></iconify-icon>
<span className="text-[10px] font-medium text-yellow-500">XP MAX</span>
</div>
</div>
</div>
<div>
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">Mortar_God</h1>
<div className="flex items-center gap-3 text-sm">
<span className="text-slate-500 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">#9QV8JCL</span>
<div className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Team Liquid</span>
</div>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-green-400 flex items-center gap-1 text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-slate-200 transition-all">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
                        Update
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg text-sm font-medium text-indigo-400 transition-all">
<iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
                        Share
                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-yellow-500" icon="solar:cup-star-linear" width="64"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-500 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:cup-linear" width="16"></iconify-icon>
                        Trophies
                    </h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold text-white tracking-tight">7,521</span>
<span className="text-xs text-green-400 font-medium">+24</span>
</div>
<div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
<div>
<div className="text-[10px] uppercase tracking-wider text-slate-600 mb-1">Season High</div>
<div className="text-sm text-slate-300 font-medium">7,680</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-slate-600 mb-1">Best Ever</div>
<div className="text-sm text-slate-300 font-medium text-yellow-500">8,100</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6">
<h3 className="text-sm font-medium text-slate-500 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" width="16"></iconify-icon>
                        Battle Statistics
                    </h3>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Wins</span>
<span className="text-white font-medium">5,234 (54%)</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '54%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Three Crown Wins</span>
<span className="text-white font-medium">1,890</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-purple-500 h-1.5 rounded-full" style={{width: '36%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Losses</span>
<span className="text-white font-medium">4,102</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-red-500/60 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<div className="bg-white/5 rounded-xl p-3 text-center">
<div className="text-xs text-slate-500 mb-1">Cards Found</div>
<div className="text-lg font-medium text-white">109<span className="text-slate-600 text-sm">/109</span></div>
</div>
<div className="bg-white/5 rounded-xl p-3 text-center">
<div className="text-xs text-slate-500 mb-1">Donations</div>
<div className="text-lg font-medium text-white">124k</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-0 overflow-hidden">
<div className="h-24 bg-gradient-to-r from-purple-900 to-indigo-900 relative">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="absolute bottom-4 left-6">
<div className="text-xs text-white/60 font-medium uppercase tracking-widest">Arena 21</div>
<div className="text-white font-semibold text-lg">Dragon Spa</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="text-xs text-slate-500">League: <span className="text-indigo-400">Ultimate Champion</span></div>
<iconify-icon className="text-purple-400" icon="solar:medal-ribbons-star-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-6">

<div className="glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-slate-500 flex items-center gap-2">
<iconify-icon icon="solar:gallery-wide-linear" width="16"></iconify-icon>
                            Current Deck
                        </h3>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">3.1 Elixir</span>
<button className="text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-4 sm:grid-cols-8 gap-3">

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<img alt="Knight" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Knight</div>
<div className="text-[9px] text-indigo-300">Lvl 14</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-purple-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">3</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-blue-400 transition-colors" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Zap</div>
<div className="text-[9px] text-indigo-300">Lvl 14</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-blue-500 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">2</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-orange-400 transition-colors" icon="solar:bomb-emoji-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Fireball</div>
<div className="text-[9px] text-indigo-300">Lvl 14</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-orange-500 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">4</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-cyan-400 transition-colors" icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Spirit</div>
<div className="text-[9px] text-indigo-300">Lvl 13</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-cyan-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">1</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-pink-400 transition-colors" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Archers</div>
<div className="text-[9px] text-indigo-300">Lvl 15</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-pink-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">3</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-amber-400 transition-colors" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Log</div>
<div className="text-[9px] text-indigo-300">Lvl 14</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-amber-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">2</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-gray-400 transition-colors" icon="solar:shield-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Tesla</div>
<div className="text-[9px] text-indigo-300">Lvl 14</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">4</div>
</div>

<div className="group relative aspect-[3/4] bg-slate-900 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
<iconify-icon className="text-slate-600 group-hover:text-red-400 transition-colors" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-2">
<div className="text-[10px] font-medium text-white leading-tight">Hog</div>
<div className="text-[9px] text-indigo-300">Lvl 14</div>
</div>
<div className="absolute top-1 right-1 w-4 h-4 rounded bg-orange-600 flex items-center justify-center text-[9px] font-bold text-white shadow-sm border border-white/20">4</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-500 px-1 flex items-center gap-2">
<iconify-icon icon="solar:history-linear" width="16"></iconify-icon>
                        Recent Battles
                    </h3>

<div className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-white/5 transition-colors group cursor-pointer border-l-2 border-l-green-500">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div className="flex flex-col items-center">
<span className="text-xs font-bold text-green-400 uppercase tracking-wide mb-1">Victory</span>
<span className="text-xs text-slate-500">Ladder</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<div className="text-sm font-medium text-white">Mortar_God</div>
<div className="text-xs text-slate-500">2400 HP</div>
</div>
<div className="flex flex-col items-center px-2">
<div className="text-xl font-bold text-white tracking-tight">3 - 1</div>
<div className="text-[10px] text-slate-600">3m 12s</div>
</div>
<div>
<div className="text-sm font-medium text-slate-300">Opponent_01</div>
<div className="text-xs text-slate-500">0 HP</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon className="text-yellow-500" icon="solar:cup-linear"></iconify-icon>
<span>+30</span>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full text-slate-400">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-white/5 transition-colors group cursor-pointer border-l-2 border-l-red-500">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div className="flex flex-col items-center w-12">
<span className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1">Defeat</span>
<span className="text-xs text-slate-500">Path</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<div className="text-sm font-medium text-white">Mortar_God</div>
<div className="text-xs text-slate-500">0 HP</div>
</div>
<div className="flex flex-col items-center px-2">
<div className="text-xl font-bold text-white tracking-tight">0 - 1</div>
<div className="text-[10px] text-slate-600">4m 02s</div>
</div>
<div>
<div className="text-sm font-medium text-slate-300">xX_Slayer_Xx</div>
<div className="text-xs text-slate-500">452 HP</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon className="text-slate-600" icon="solar:cup-linear"></iconify-icon>
<span>-12</span>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full text-slate-400">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-white/5 transition-colors group cursor-pointer border-l-2 border-l-green-500">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div className="flex flex-col items-center w-12">
<span className="text-xs font-bold text-green-400 uppercase tracking-wide mb-1">Victory</span>
<span className="text-xs text-slate-500">Event</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<div className="text-sm font-medium text-white">Mortar_God</div>
<div className="text-xs text-slate-500">3020 HP</div>
</div>
<div className="flex flex-col items-center px-2">
<div className="text-xl font-bold text-white tracking-tight">2 - 0</div>
<div className="text-[10px] text-slate-600">2m 45s</div>
</div>
<div>
<div className="text-sm font-medium text-slate-300">NoobMaster</div>
<div className="text-xs text-slate-500">0 HP</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon className="text-yellow-500" icon="solar:ticket-star-linear"></iconify-icon>
<span>+1 Win</span>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full text-slate-400">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<button className="w-full py-3 text-xs font-medium text-slate-500 hover:text-white border border-dashed border-white/10 hover:border-white/20 rounded-xl transition-all">
                        Load more battles
                    </button>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 mt-12 py-8 bg-black/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-500">
                © 2023 RoyaleMetrics. Data provided by Supercell API.
            </div>
<div className="flex items-center gap-6">
<a className="text-slate-500 hover:text-white transition-colors text-xs" href="#">Privacy</a>
<a className="text-slate-500 hover:text-white transition-colors text-xs" href="#">Terms</a>
<a className="text-slate-500 hover:text-white transition-colors text-xs" href="#">API</a>
<div className="flex gap-3 ml-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-discord-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
