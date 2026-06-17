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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      
<div className="noise-overlay"></div>
<div className="bg-grid-texture"></div>
<div className="w-full max-w-6xl space-y-16 relative z-10">

<div className="space-y-10">

<header className="text-center pt-8 relative flex flex-col items-center">
<div className="flex items-center gap-4 mb-2 opacity-50">
<div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-zinc-500"></div>
<span className="text-sm text-zinc-400 uppercase tracking-widest font-normal">SYS.TEAM_DATA</span>
<div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-zinc-500"></div>
</div>
<h1 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-100 uppercase flex items-center gap-3">
<span className="text-orange-500 opacity-30 font-thin">[</span>
                    Team Competition Ranking
                    <span className="text-orange-500 opacity-30 font-thin">]</span>
</h1>
</header>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-black/20 backdrop-blur-md p-2 relative shadow-lg ring-1 ring-white/5">
<div className="flex items-center gap-1 w-full md:w-auto overflow-x-auto bg-black/40 p-1.5">
<button className="flex-shrink-0 px-6 py-2.5 text-sm font-normal tracking-widest uppercase text-black bg-gradient-to-b from-orange-400 to-orange-600 transition-all shadow-md">
                        Team Vol (USDT)
                    </button>
<button className="flex-shrink-0 px-6 py-2.5 text-sm font-normal tracking-widest uppercase text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">
                        Team PnL%
                    </button>
</div>
<div className="flex items-center gap-3 w-full md:w-auto pr-2">
<div className="relative w-full md:w-64 group">
<div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-zinc-500 group-focus-within:text-orange-400 transition-colors" data-lucide="search"></i>
</div>
<input className="w-full bg-white/5 border-none pl-10 pr-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:bg-white/10 transition-all tracking-widest uppercase shadow-inner" placeholder="SEARCH ID" type="text"/>
</div>
<button className="flex-shrink-0 flex items-center justify-center gap-2 bg-zinc-100 text-black px-5 py-2.5 text-sm font-semibold tracking-widest uppercase hover:bg-white transition-all shadow-[0_2px_10px_rgba(255,255,255,0.1)] active:scale-95">
<i className="w-4 h-4" data-lucide="plus-square"></i>
<span className="hidden sm:inline">Create Team</span>
</button>
</div>
</div>

<div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-6 pt-12 pb-8">

<div className="order-2 lg:order-1 w-full lg:w-[28%] flex flex-col items-center card-metal-base p-8 pt-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 inset-x-0 flex justify-center z-20">
<div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-t-0 border-zinc-600/30 px-6 py-1.5 flex items-baseline gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
<span className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Rank</span>
<span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-400 leading-none">2</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-500/5 to-transparent opacity-50"></div>
<div className="relative w-28 h-28 flex items-center justify-center mb-8">
<div className="absolute inset-0 bg-zinc-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="absolute inset-2 border border-zinc-500/20 bg-gradient-to-br from-zinc-800/80 to-black flex items-center justify-center shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_10px_20px_rgba(0,0,0,0.5)] z-10">
<i className="w-12 h-12 text-zinc-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" data-lucide="medal"></i>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-1 z-10 w-full">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 uppercase mb-4">Aniket</h3>
<div className="w-full space-y-3 mt-2">
<div className="flex flex-col items-center pb-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Est. Reward</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-200">12,000 USDT</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 uppercase tracking-widest">Vol (USDT)</span>
<span className="font-normal text-zinc-200 tracking-wider">783,234,323,345</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 uppercase tracking-widest">Members</span>
<span className="font-normal text-zinc-400 tracking-wider">980</span>
</div>
</div>
</div>
<button className="mt-8 w-full py-3 bg-white/5 hover:bg-white/10 text-zinc-300 text-sm uppercase tracking-widest font-medium transition-all active:scale-[0.98]">
                        Join Team
                    </button>
</div>

<div className="order-1 lg:order-2 w-full lg:w-[36%] flex flex-col items-center card-metal-orange p-10 pt-12 relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 lg:-translate-y-6 z-10 shadow-[0_0_50px_rgba(249,115,22,0.1)] ring-1 ring-orange-500/20">
<div className="absolute top-0 inset-x-0 flex justify-center z-20">
<div className="bg-gradient-to-b from-orange-900/80 to-black border border-t-0 border-orange-500/30 px-8 py-2 flex items-baseline gap-2 shadow-[0_4px_15px_rgba(249,115,22,0.2)]">
<span className="text-sm text-orange-400 uppercase tracking-widest font-semibold">Rank</span>
<span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-orange-100 to-orange-400 leading-none">1</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-60"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
<div className="relative w-36 h-36 flex items-center justify-center mb-10">
<div className="absolute inset-0 bg-orange-500 blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="absolute inset-1 border border-orange-400/30 bg-gradient-to-br from-orange-950/80 to-black flex items-center justify-center shadow-[inset_0_2px_20px_rgba(249,115,22,0.15),0_15px_30px_rgba(0,0,0,0.8)] z-10">
<i className="w-16 h-16 text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" data-lucide="crown"></i>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-1 z-10 w-full">
<h3 className="text-3xl font-semibold tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(249,115,22,0.5)] mb-4">To Moon</h3>
<div className="w-full bg-black/20 p-5 space-y-4 mt-2 ring-1 ring-white/5">
<div className="flex flex-col items-center">
<span className="text-sm text-orange-500/60 uppercase tracking-widest mb-1">Est. Reward</span>
<span className="text-4xl font-semibold tracking-tight text-orange-50 drop-shadow-[0_2px_15px_rgba(249,115,22,0.4)]">24,000 USDT</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
<div className="flex justify-between items-center text-sm px-2">
<span className="text-zinc-400 uppercase tracking-widest">Vol (USDT)</span>
<span className="font-normal text-orange-200 tracking-wider">985,467,575,571</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
<div className="flex justify-between items-center text-sm px-2">
<span className="text-zinc-400 uppercase tracking-widest">Members</span>
<span className="font-normal text-orange-200 tracking-wider">980</span>
</div>
</div>
</div>
<button className="mt-10 w-full py-3.5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-black text-sm uppercase tracking-widest font-semibold transition-all shadow-[0_8px_20px_rgba(249,115,22,0.3)] active:scale-[0.98]">
                        Join Team
                    </button>
</div>

<div className="order-3 lg:order-3 w-full lg:w-[28%] flex flex-col items-center card-metal-bronze p-8 pt-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 inset-x-0 flex justify-center z-20">
<div className="bg-gradient-to-b from-[#3a2012] to-black border border-t-0 border-[#8a471c]/30 px-6 py-1.5 flex items-baseline gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
<span className="text-sm text-[#b07d57] uppercase tracking-widest font-semibold">Rank</span>
<span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#e3c1a0] to-[#b07d57] leading-none">3</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#8a471c]/10 to-transparent opacity-40"></div>
<div className="relative w-28 h-28 flex items-center justify-center mb-8">
<div className="absolute inset-0 bg-[#d4a373] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="absolute inset-2 border border-[#8a471c]/30 bg-gradient-to-br from-[#2a1a12] to-black flex items-center justify-center shadow-[inset_0_2px_15px_rgba(212,163,115,0.05),0_10px_20px_rgba(0,0,0,0.5)] z-10">
<i className="w-12 h-12 text-[#d4a373] drop-shadow-[0_0_10px_rgba(212,163,115,0.2)]" data-lucide="trophy"></i>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-1 z-10 w-full">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 uppercase mb-4">Crocodile</h3>
<div className="w-full space-y-3 mt-2">
<div className="flex flex-col items-center pb-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Est. Reward</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-200">8,000 USDT</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-[#8a471c]/20 to-transparent"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 uppercase tracking-widest">Vol (USDT)</span>
<span className="font-normal text-zinc-200 tracking-wider">98,322,332,233</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-[#8a471c]/20 to-transparent"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 uppercase tracking-widest">Members</span>
<span className="font-normal text-[#b07d57] tracking-wider">980</span>
</div>
</div>
</div>
<button className="mt-8 w-full py-3 bg-white/5 hover:bg-white/10 text-[#d4a373] text-sm uppercase tracking-widest font-medium transition-all active:scale-[0.98]">
                        Join Team
                    </button>
</div>
</div>

<div className="w-full mt-4">
<div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 text-sm uppercase tracking-widest text-zinc-500 font-normal border-b border-white/5 mb-2">
<div className="col-span-1 text-center">Ranking</div>
<div className="col-span-3">Team Name</div>
<div className="col-span-2">Members</div>
<div className="col-span-3">Team Trading Vol (USDT)</div>
<div className="col-span-2">Est. Rewards</div>
<div className="col-span-1 text-right">Action</div>
</div>
<div className="space-y-1">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-4 hover:bg-white/[0.02] border-b border-white/[0.02] items-center transition-colors group relative">
<div className="col-span-1 flex md:block justify-between items-center md:text-center">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rank</span>
<span className="font-normal text-zinc-500 text-base">4</span>
</div>
<div className="col-span-3 flex flex-col">
<span className="text-base font-medium tracking-widest text-zinc-200 uppercase group-hover:text-white transition-colors">Las vegas</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start gap-2">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Members</span>
<div className="flex items-center gap-2 text-zinc-400">
<span className="text-sm font-normal tracking-wider">89</span>
</div>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-normal tracking-wider text-zinc-300">65,676.68</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-medium text-orange-400 tracking-wider">1,000</span>
</div>
<div className="col-span-1 flex justify-end mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-sm text-zinc-400 hover:text-white uppercase tracking-widest font-medium flex items-center gap-1 border border-zinc-700 px-3 py-1 hover:border-zinc-400 transition-colors">
                                Join
                            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-4 hover:bg-white/[0.02] border-b border-white/[0.02] items-center transition-colors group relative">
<div className="col-span-1 flex md:block justify-between items-center md:text-center">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rank</span>
<span className="font-normal text-zinc-500 text-base">5</span>
</div>
<div className="col-span-3 flex flex-col">
<span className="text-base font-medium tracking-widest text-zinc-200 uppercase group-hover:text-white transition-colors">super man</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start gap-2">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Members</span>
<div className="flex items-center gap-2 text-zinc-400">
<span className="text-sm font-normal tracking-wider">10,234</span>
</div>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-normal tracking-wider text-zinc-300">243,454,465,676.68</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-medium text-orange-400 tracking-wider">10,000,000</span>
</div>
<div className="col-span-1 flex justify-end mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-sm text-zinc-400 hover:text-white uppercase tracking-widest font-medium flex items-center gap-1 border border-zinc-700 px-3 py-1 hover:border-zinc-400 transition-colors">
                                Join
                            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-4 hover:bg-white/[0.02] border-b border-white/[0.02] items-center transition-colors group relative">
<div className="col-span-1 flex md:block justify-between items-center md:text-center">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rank</span>
<span className="font-normal text-zinc-500 text-base">6</span>
</div>
<div className="col-span-3 flex flex-col">
<span className="text-base font-medium tracking-widest text-zinc-200 uppercase group-hover:text-white transition-colors">CAT BOY</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start gap-2">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Members</span>
<div className="flex items-center gap-2 text-zinc-400">
<span className="text-sm font-normal tracking-wider">9,343</span>
</div>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-normal tracking-wider text-zinc-300">243,454,465,676.68</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-medium text-orange-400 tracking-wider">900,000</span>
</div>
<div className="col-span-1 flex justify-end mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-sm text-zinc-400 hover:text-white uppercase tracking-widest font-medium flex items-center gap-1 border border-zinc-700 px-3 py-1 hover:border-zinc-400 transition-colors">
                                Join
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-5 bg-orange-500/[0.03] hover:bg-orange-500/[0.05] items-center transition-all group relative mt-4 ring-1 ring-orange-500/20">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
<div className="col-span-1 flex md:block justify-between items-center md:text-center pl-4 md:pl-0">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Rank</span>
<div className="flex flex-col items-end md:items-center">
<span className="text-xs text-orange-500/80 uppercase tracking-widest font-normal mb-0.5">My Ranking</span>
<span className="font-semibold text-orange-400 text-base">23</span>
</div>
</div>
<div className="col-span-3 flex flex-col pl-2 md:pl-0">
<span className="text-base font-semibold tracking-widest text-orange-100 uppercase">To Da moon</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start gap-2">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Members</span>
<div className="flex items-center gap-2 text-orange-300/80">
<span className="text-sm font-normal tracking-wider">989</span>
</div>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-semibold tracking-wider text-orange-100">243,454,465,676.68</span>
</div>
<div className="col-span-2 flex items-center justify-between md:justify-start gap-2">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-semibold text-orange-400 tracking-wider">500,000</span>
</div>
<div className="col-span-1 flex justify-end mt-2 md:mt-0 relative z-10"></div>
</div>
</div>
</div>
</div>

<div className="py-16 flex items-center justify-center opacity-30">
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></div>
</div>

<div className="space-y-10">

<header className="text-center relative flex flex-col items-center">
<div className="flex items-center gap-4 mb-2 opacity-50">
<div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-zinc-500"></div>
<span className="text-sm text-zinc-400 uppercase tracking-widest font-normal">SYS.INDIVIDUAL_DATA</span>
<div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-zinc-500"></div>
</div>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-100 uppercase flex items-center gap-3">
<span className="text-orange-500 opacity-30 font-thin">[</span>
                    Individual Competition Ranking
                    <span className="text-orange-500 opacity-30 font-thin">]</span>
</h2>
</header>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-black/20 backdrop-blur-md p-2 relative shadow-lg ring-1 ring-white/5">
<div className="flex items-center gap-1 w-full md:w-auto overflow-x-auto bg-black/40 p-1.5">
<button className="flex-shrink-0 px-6 py-2.5 text-sm font-normal tracking-widest uppercase text-black bg-gradient-to-b from-orange-400 to-orange-600 transition-all shadow-md">
                        Individual Vol (USDT)
                    </button>
<button className="flex-shrink-0 px-6 py-2.5 text-sm font-normal tracking-widest uppercase text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all">
                        Individual PnL%
                    </button>
</div>
<div className="flex items-center gap-3 w-full md:w-auto pr-2">
<div className="relative w-full md:w-64 group">
<div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-zinc-500 group-focus-within:text-orange-400 transition-colors" data-lucide="search"></i>
</div>
<input className="w-full bg-white/5 border-none pl-10 pr-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-orange-500/50 focus:bg-white/10 transition-all tracking-widest uppercase shadow-inner" placeholder="SEARCH UID" type="text"/>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-6 pt-12 pb-8">

<div className="order-2 lg:order-1 w-full lg:w-[28%] flex flex-col items-center card-metal-base p-8 pt-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 inset-x-0 flex justify-center z-20">
<div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-t-0 border-zinc-600/30 px-6 py-1.5 flex items-baseline gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
<span className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Rank</span>
<span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-400 leading-none">2</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-500/5 to-transparent opacity-50"></div>
<div className="relative w-28 h-28 flex items-center justify-center mb-8">
<div className="absolute inset-0 bg-zinc-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="absolute inset-2 border border-zinc-500/20 bg-gradient-to-br from-zinc-800/80 to-black flex items-center justify-center shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_10px_20px_rgba(0,0,0,0.5)] z-10">
<i className="w-12 h-12 text-zinc-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" data-lucide="medal"></i>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-1 z-10 w-full">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 uppercase mb-4">2344****7299</h3>
<div className="w-full space-y-3 mt-2">
<div className="flex flex-col items-center pb-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Est. Reward</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-200">20,000 USDT</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 uppercase tracking-widest">Vol (USDT)</span>
<span className="font-normal text-zinc-200 tracking-wider">80,284,780</span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 w-full lg:w-[36%] flex flex-col items-center card-metal-orange p-10 pt-12 relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 lg:-translate-y-6 z-10 shadow-[0_0_50px_rgba(249,115,22,0.1)] ring-1 ring-orange-500/20">
<div className="absolute top-0 inset-x-0 flex justify-center z-20">
<div className="bg-gradient-to-b from-orange-900/80 to-black border border-t-0 border-orange-500/30 px-8 py-2 flex items-baseline gap-2 shadow-[0_4px_15px_rgba(249,115,22,0.2)]">
<span className="text-sm text-orange-400 uppercase tracking-widest font-semibold">Rank</span>
<span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-orange-100 to-orange-400 leading-none">1</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-60"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
<div className="relative w-36 h-36 flex items-center justify-center mb-10">
<div className="absolute inset-0 bg-orange-500 blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="absolute inset-1 border border-orange-400/30 bg-gradient-to-br from-orange-950/80 to-black flex items-center justify-center shadow-[inset_0_2px_20px_rgba(249,115,22,0.15),0_15px_30px_rgba(0,0,0,0.8)] z-10">
<i className="w-16 h-16 text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" data-lucide="crown"></i>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-1 z-10 w-full">
<h3 className="text-3xl font-semibold tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(249,115,22,0.5)] mb-4">8ery****4349</h3>
<div className="w-full bg-black/20 p-5 space-y-4 mt-2 ring-1 ring-white/5">
<div className="flex flex-col items-center">
<span className="text-sm text-orange-500/60 uppercase tracking-widest mb-1">Est. Reward</span>
<span className="text-4xl font-semibold tracking-tight text-orange-50 drop-shadow-[0_2px_15px_rgba(249,115,22,0.4)]">30,000 USDT</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
<div className="flex justify-between items-center text-sm px-2">
<span className="text-zinc-400 uppercase tracking-widest">Vol (USDT)</span>
<span className="font-normal text-orange-200 tracking-wider">98,893,780</span>
</div>
</div>
</div>
</div>

<div className="order-3 lg:order-3 w-full lg:w-[28%] flex flex-col items-center card-metal-bronze p-8 pt-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 inset-x-0 flex justify-center z-20">
<div className="bg-gradient-to-b from-[#3a2012] to-black border border-t-0 border-[#8a471c]/30 px-6 py-1.5 flex items-baseline gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
<span className="text-sm text-[#b07d57] uppercase tracking-widest font-semibold">Rank</span>
<span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#e3c1a0] to-[#b07d57] leading-none">3</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#8a471c]/10 to-transparent opacity-40"></div>
<div className="relative w-28 h-28 flex items-center justify-center mb-8">
<div className="absolute inset-0 bg-[#d4a373] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="absolute inset-2 border border-[#8a471c]/30 bg-gradient-to-br from-[#2a1a12] to-black flex items-center justify-center shadow-[inset_0_2px_15px_rgba(212,163,115,0.05),0_10px_20px_rgba(0,0,0,0.5)] z-10">
<i className="w-12 h-12 text-[#d4a373] drop-shadow-[0_0_10px_rgba(212,163,115,0.2)]" data-lucide="trophy"></i>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-1 z-10 w-full">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 uppercase mb-4">2324****9976</h3>
<div className="w-full space-y-3 mt-2">
<div className="flex flex-col items-center pb-2">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Est. Reward</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-200">10,000 USDT</span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-[#8a471c]/20 to-transparent"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500 uppercase tracking-widest">Vol (USDT)</span>
<span className="font-normal text-zinc-200 tracking-wider">60,465,780</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full mt-4">
<div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 text-sm uppercase tracking-widest text-zinc-500 font-normal border-b border-white/5 mb-2">
<div className="col-span-1 text-center">Ranking</div>
<div className="col-span-4">UID</div>
<div className="col-span-4">Individual Trading Vol (USDT)</div>
<div className="col-span-3 text-right">Est. Rewards</div>
</div>
<div className="space-y-1">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-4 hover:bg-white/[0.02] border-b border-white/[0.02] items-center transition-colors group relative">
<div className="col-span-1 flex md:block justify-between items-center md:text-center">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rank</span>
<span className="font-normal text-zinc-500 text-base">4</span>
</div>
<div className="col-span-4 flex flex-col">
<span className="text-base font-medium tracking-widest text-zinc-200 uppercase group-hover:text-white transition-colors">efoi****23i0</span>
</div>
<div className="col-span-4 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-normal tracking-wider text-zinc-300">243,454,465,676.68</span>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-end">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-medium text-orange-400 tracking-wider">20,000,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-4 hover:bg-white/[0.02] border-b border-white/[0.02] items-center transition-colors group relative">
<div className="col-span-1 flex md:block justify-between items-center md:text-center">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rank</span>
<span className="font-normal text-zinc-500 text-base">5</span>
</div>
<div className="col-span-4 flex flex-col">
<span className="text-base font-medium tracking-widest text-zinc-200 uppercase group-hover:text-white transition-colors">efoi****23i0</span>
</div>
<div className="col-span-4 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-normal tracking-wider text-zinc-300">243,454,465,676.68</span>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-end">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-medium text-orange-400 tracking-wider">10,000,000</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-4 hover:bg-white/[0.02] border-b border-white/[0.02] items-center transition-colors group relative">
<div className="col-span-1 flex md:block justify-between items-center md:text-center">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rank</span>
<span className="font-normal text-zinc-500 text-base">6</span>
</div>
<div className="col-span-4 flex flex-col">
<span className="text-base font-medium tracking-widest text-zinc-200 uppercase group-hover:text-white transition-colors">efoi****23i0</span>
</div>
<div className="col-span-4 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-normal tracking-wider text-zinc-300">243,454,465,676.68</span>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-end">
<span className="md:hidden text-sm text-zinc-600 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-medium text-orange-400 tracking-wider">900,000</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-6 py-5 bg-orange-500/[0.03] hover:bg-orange-500/[0.05] items-center transition-all group relative mt-4 ring-1 ring-orange-500/20">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
<div className="col-span-1 flex md:block justify-between items-center md:text-center pl-4 md:pl-0">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Rank</span>
<div className="flex flex-col items-end md:items-center">
<span className="text-xs text-orange-500/80 uppercase tracking-widest font-normal mb-0.5">My Ranking</span>
<span className="font-semibold text-orange-400 text-base">3</span>
</div>
</div>
<div className="col-span-4 flex flex-col pl-2 md:pl-0">
<span className="text-base font-semibold tracking-widest text-orange-100 uppercase">efoi****23i0</span>
</div>
<div className="col-span-4 flex items-center justify-between md:justify-start">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Vol</span>
<span className="text-base font-semibold tracking-wider text-orange-100">243,454,465,676.68</span>
</div>
<div className="col-span-3 flex items-center justify-between md:justify-end gap-2">
<span className="md:hidden text-sm text-orange-500/80 uppercase tracking-widest font-normal">Rewards</span>
<span className="text-sm font-semibold text-orange-400 tracking-wider">600,000</span>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-2 pt-16 pb-4">
<button className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:bg-white/5 transition-all disabled:opacity-30 active:scale-95" disabled="">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-8 h-8 bg-orange-500 text-sm font-semibold text-black shadow-sm active:scale-95">1</button>
<button className="w-8 h-8 flex items-center justify-center text-sm font-normal text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all active:scale-95">2</button>
<button className="w-8 h-8 flex items-center justify-center text-sm font-normal text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all active:scale-95">3</button>
<span className="text-zinc-700 px-2 font-semibold tracking-widest">...</span>
<button className="w-8 h-8 flex items-center justify-center text-sm font-normal text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-all active:scale-95">99</button>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-all active:scale-95">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
