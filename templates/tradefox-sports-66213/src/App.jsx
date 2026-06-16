import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
bg: {
main: '#050607', // Darker black for main
sidebar: '#0B0E11', // Slightly lighter for sidebar
card: '#0D0F12', // Card background
hover: '#181B21'
},
border: {
light: 'rgba(255,255,255,0.06)'
},
trade: {
green: '#10b981',
red: '#ef4444',
cyan: '#22d3ee',
},
price: {
redbg: 'rgba(239, 68, 68, 0.1)',
redtext: '#F87171',
greenbg: 'rgba(16, 185, 129, 0.1)',
greentext: '#34D399'
}
},
fontSize: {
xxs: '0.65rem'
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[280px] hidden md:flex flex-col bg-bg-sidebar border-r border-border-light shrink-0">

<div className="p-5 pb-2">
<div className="flex items-center gap-2 mb-6 text-base">
<span className="text-gray-600 font-medium">New Markets</span>
<span className="text-white font-medium">Sports Mode</span>
</div>

<div className="bg-black/40 p-1 rounded-lg flex items-center mb-6 border border-border-light">
<button className="flex-1 py-1.5 text-xs font-medium text-white bg-bg-hover rounded shadow-sm border border-white/5">Fixtures</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-trade-red shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div> 
                    Live
                </button>
</div>
<div className="text-xs font-medium text-gray-500 mb-2 px-1">Trending</div>
</div>

<div className="flex-1 overflow-y-auto px-3 pb-4 space-y-0.5 no-scrollbar">

<a className="flex items-center justify-between p-2 rounded-md bg-white/5 text-white border border-white/5 group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] text-gray-400 font-bold border border-white/10">U</div>
<span className="text-xs font-medium">UFC</span>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">12</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="circle"></i></div>
<span className="text-xs font-medium">NBA</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">27</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="shield"></i></div>
<span className="text-xs font-medium">NHL</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">192</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="trophy"></i></div>
<span className="text-xs font-medium">NFL</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">30</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">E</div>
<span className="text-xs font-medium">EPL</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">34</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">L</div>
<span className="text-xs font-medium">Ligue 1</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">28</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">c</div>
<span className="text-xs font-medium">Cricket Test</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">2</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="globe"></i></div>
<span className="text-xs font-medium">Liga MX</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">5</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">B</div>
<span className="text-xs font-medium">Bundesliga</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">31</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="star"></i></div>
<span className="text-xs font-medium">UCL</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">36</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="waves"></i></div>
<span className="text-xs font-medium">Sea</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">37</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">L</div>
<span className="text-xs font-medium">League of legends</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">18</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">S</div>
<span className="text-xs font-medium">Süper Lig</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">14</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50"><i className="w-3 h-3" data-lucide="dollar-sign"></i></div>
<span className="text-xs font-medium">Eredivisie</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">36</span>
</a>

<a className="flex items-center justify-between p-2 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-all group" href="#">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-transparent rounded flex items-center justify-center text-[10px] text-gray-500 border border-gray-700/50">F</div>
<span className="text-xs font-medium">FA Cup</span>
</div>
<span className="text-xs text-gray-600 group-hover:text-gray-400">15</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col bg-bg-main min-w-0">

<div className="px-8 pt-8 pb-0">
<div className="flex items-end border-b border-border-light">
<button className="bg-[#1C2329] text-white px-5 py-2 text-xs font-medium rounded-t border-t border-x border-border-light relative top-px z-10">
                    Sun Dec 14 2025
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 pt-6">

<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white tracking-tight">Fixtures</h2>
<div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
<span>Sun Dec 14 2025</span>
<i className="w-4 h-4 text-gray-600" data-lucide="calendar"></i>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-5 pb-10">

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
</div>

<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">ALMEIDA</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">ALMEIDA</span>
<span>45.5¢</span>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">OLEKSIEJCZUK</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">OLEKSIEJCZUK</span>
<span>54.5¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
<span className="text-[10px] text-gray-500 font-medium">$7.89 Vol.</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">KAPE</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">KAPE</span>
<span>66.0¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">ROYVAL</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">ROYVAL</span>
<span>34.0¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
<span className="text-[10px] text-gray-500 font-medium">$1.69 Vol.</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">NZECHUKWU</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">NZECHUKWU</span>
<span>52.5¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">BUCHECHA</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">BUCHECHA</span>
<span>47.5¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
<span className="text-[10px] text-gray-500 font-medium">$3k Vol.</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">MAGNY</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">MAGNY</span>
<span>19.5¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">AMOSOV</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">AMOSOV</span>
<span>80.5¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">CHARRIÈRE</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">CHARRIÈRE</span>
<span>45.0¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">COSTA</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">COSTA</span>
<span>55.0¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">CHIKADZE</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">CHIKADZE</span>
<span>37.5¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">VALLEJOS</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">VALLEJOS</span>
<span>62.5¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
<span className="text-[10px] text-gray-500 font-medium">$9k Vol.</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">ROBERTSON</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">ROBERTSON</span>
<span>53.0¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">LEMOS</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">LEMOS</span>
<span>47.0¢</span>
</button>
</div>
</div>

<div className="bg-bg-card border border-border-light rounded-lg p-4 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-5">
<span className="text-[10px] font-semibold text-trade-cyan bg-[#16222C] px-1.5 py-0.5 rounded border border-[#22d3ee]/20">Starts at 02:00 AM</span>
<span className="text-[10px] text-gray-500 font-medium">$8.44 Vol.</span>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">CRODEN</span>
</div>
<button className="bg-price-redbg hover:bg-red-500/20 text-price-redtext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">CRODEN</span>
<span>39.0¢</span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gray-700/50 rounded text-[9px] flex items-center justify-center text-gray-500 font-bold tracking-wider">NA</div>
<span className="text-gray-200 font-medium text-sm tracking-tight">SANTOS</span>
</div>
<button className="bg-price-greenbg hover:bg-emerald-500/20 text-price-greentext px-3 py-1.5 rounded text-xs font-mono font-medium flex gap-3 transition-colors min-w-[120px] justify-between">
<span className="uppercase">SANTOS</span>
<span>61.0¢</span>
</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
