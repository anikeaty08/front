import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-[#e8e6dc] sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b border-stone-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-3 select-none">
<div className="p-2 border-2 border-stone-800 rounded-lg bg-stone-900 text-[#f4f1ea] shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="serif-title text-4xl tracking-tighter text-stone-900 font-bold leading-none">YES/NO</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold mt-1 ml-0.5">The Prediction Wall</span>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-xl mx-8">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-stone-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border-b-2 border-stone-400 bg-transparent text-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors font-serif italic" placeholder="Search the wall..." type="text"/>
</div>
</div>

<div className="flex items-center gap-5">
<button className="hidden lg:flex items-center gap-2 text-stone-600 hover:text-stone-900 text-lg transition-colors">
<iconify-icon icon="solar:info-circle-linear" width="22"></iconify-icon>
<span className="font-semibold text-base">How it works</span>
</button>
<button className="text-stone-900 font-bold text-lg hover:underline decoration-2 underline-offset-4">Log In</button>
<button className="bg-stone-900 text-[#f4f1ea] px-6 py-2 text-lg font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all border border-stone-900 rounded-sm">Join</button>
</div>
</div>
</div>

<div className="border-t border-stone-300 bg-[#ebe9e0] overflow-x-auto py-3 shadow-inner">
<div className="max-w-7xl mx-auto px-4 flex space-x-8 text-stone-600 text-lg font-serif whitespace-nowrap items-center">
<a className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-stone-900 pb-0.5" href="#">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon> Trending
                </a>
<a className="hover:text-stone-900 transition-colors" href="#">Politics</a>
<a className="hover:text-stone-900 transition-colors" href="#">Sports</a>
<a className="hover:text-stone-900 transition-colors" href="#">Crypto</a>
<a className="hover:text-stone-900 transition-colors" href="#">Business</a>
<a className="hover:text-stone-900 transition-colors" href="#">Science</a>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

<div className="flex overflow-x-auto gap-3 pb-8 scrollbar-hide">
<button className="bg-stone-800 text-[#f4f1ea] px-5 py-1.5 text-lg font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.15)] rounded-sm">All</button>
<button className="bg-[#f4f1ea] text-stone-600 px-5 py-1.5 text-lg font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.1)] border border-stone-300 hover:border-stone-500 hover:text-stone-900 hover:-translate-y-0.5 transition-all rounded-sm">Trump</button>
<button className="bg-[#f4f1ea] text-stone-600 px-5 py-1.5 text-lg font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.1)] border border-stone-300 hover:border-stone-500 hover:text-stone-900 hover:-translate-y-0.5 transition-all rounded-sm">Olympics</button>
<button className="bg-[#f4f1ea] text-stone-600 px-5 py-1.5 text-lg font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.1)] border border-stone-300 hover:border-stone-500 hover:text-stone-900 hover:-translate-y-0.5 transition-all rounded-sm">SpaceX</button>
<button className="bg-[#f4f1ea] text-stone-600 px-5 py-1.5 text-lg font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.1)] border border-stone-300 hover:border-stone-500 hover:text-stone-900 hover:-translate-y-0.5 transition-all rounded-sm">Interest Rates</button>
<button className="bg-[#f4f1ea] text-stone-600 px-5 py-1.5 text-lg font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.1)] border border-stone-300 hover:border-stone-500 hover:text-stone-900 hover:-translate-y-0.5 transition-all rounded-sm">Super Bowl</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-4">

<div className="relative group">
<div className="paper-card relative p-7 min-h-[300px] flex flex-col justify-between rounded-sm border-t border-l border-stone-200">
<div className="tape"></div>
<div className="noise"></div>
<div className="relative z-10">
<div className="flex gap-4 mb-5">
<div className="w-14 h-14 bg-[#eeece5] border border-stone-300 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-stone-700" icon="solar:bank-linear" width="32"></iconify-icon>
</div>
<h3 className="serif-title text-2xl font-bold leading-tight tracking-tight text-stone-900 pt-1">Fed decision in March?</h3>
</div>
<div className="space-y-4 mt-2">
<div className="flex items-center justify-between group/row cursor-pointer hover:bg-stone-100/50 -mx-2 px-2 py-1 rounded">
<span className="text-stone-700 text-lg font-serif">50+ bps cut</span>
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-stone-900">1%</span>
<div className="flex shadow-sm">
<button className="px-3 py-1 bg-[#dbead5] text-[#2f5e2b] text-sm font-bold border border-[#b8dcb0] hover:bg-[#cce2c4] rounded-l-sm">YES</button>
<button className="px-3 py-1 bg-[#ebd5d5] text-[#7a2e2e] text-sm font-bold border border-[#dfb0b0] border-l-0 hover:bg-[#e2c4c4] rounded-r-sm">NO</button>
</div>
</div>
</div>
<div className="h-px bg-stone-300 w-full border-b border-dashed border-stone-300"></div>
<div className="flex items-center justify-between group/row cursor-pointer hover:bg-stone-100/50 -mx-2 px-2 py-1 rounded">
<span className="text-stone-700 text-lg font-serif">25 bps cut</span>
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-stone-900">16%</span>
<div className="flex shadow-sm">
<button className="px-3 py-1 bg-[#dbead5] text-[#2f5e2b] text-sm font-bold border border-[#b8dcb0] hover:bg-[#cce2c4] rounded-l-sm">YES</button>
<button className="px-3 py-1 bg-[#ebd5d5] text-[#7a2e2e] text-sm font-bold border border-[#dfb0b0] border-l-0 hover:bg-[#e2c4c4] rounded-r-sm">NO</button>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t-2 border-stone-800/10">
<span className="text-stone-500 font-serif italic text-lg">$82m Vol.</span>
<div className="flex gap-3 text-stone-400">
<iconify-icon className="hover:text-stone-800 cursor-pointer transition-colors" icon="solar:restart-linear" width="22"></iconify-icon>
<iconify-icon className="hover:text-stone-800 cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="paper-card relative p-7 min-h-[300px] flex flex-col justify-between rounded-sm border-t border-l border-stone-200">
<div className="tape"></div>
<div className="noise"></div>
<div className="relative z-10">
<div className="flex gap-4 mb-5">
<div className="w-14 h-14 bg-[#eeece5] border border-stone-300 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
<iconify-icon className="text-stone-700" icon="solar:flag-linear" width="32"></iconify-icon>
</div>
<h3 className="serif-title text-2xl font-bold leading-tight tracking-tight text-stone-900 pt-1">US strikes Iran by...?</h3>
</div>
<div className="space-y-4 mt-2">
<div className="flex items-center justify-between hover:bg-stone-100/50 -mx-2 px-2 py-1 rounded cursor-pointer">
<span className="text-stone-700 text-lg font-serif">Feb 13</span>
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-stone-900">6%</span>
<div className="flex shadow-sm">
<button className="px-3 py-1 bg-[#dbead5] text-[#2f5e2b] text-sm font-bold border border-[#b8dcb0] rounded-l-sm">YES</button>
<button className="px-3 py-1 bg-[#ebd5d5] text-[#7a2e2e] text-sm font-bold border border-[#dfb0b0] border-l-0 rounded-r-sm">NO</button>
</div>
</div>
</div>
<div className="h-px bg-stone-300 w-full border-b border-dashed border-stone-300"></div>
<div className="flex items-center justify-between hover:bg-stone-100/50 -mx-2 px-2 py-1 rounded cursor-pointer">
<span className="text-stone-700 text-lg font-serif">Feb 20</span>
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-stone-900">14%</span>
<div className="flex shadow-sm">
<button className="px-3 py-1 bg-[#dbead5] text-[#2f5e2b] text-sm font-bold border border-[#b8dcb0] rounded-l-sm">YES</button>
<button className="px-3 py-1 bg-[#ebd5d5] text-[#7a2e2e] text-sm font-bold border border-[#dfb0b0] border-l-0 rounded-r-sm">NO</button>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t-2 border-stone-800/10">
<span className="text-stone-500 font-serif italic text-lg">$216m Vol.</span>
<div className="flex gap-3 text-stone-400">
<iconify-icon className="hover:text-stone-800 cursor-pointer transition-colors" icon="solar:restart-linear" width="22"></iconify-icon>
<iconify-icon className="hover:text-stone-800 cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="paper-card bg-[#fffdf0] relative p-7 min-h-[300px] flex flex-col justify-between rounded-sm border-t border-l border-stone-200">
<div className="tape"></div>
<div className="noise"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-5">
<div className="flex gap-4 pr-4">
<div className="w-14 h-14 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-700" icon="solar:wad-of-money-linear" width="32"></iconify-icon>
</div>
<h3 className="serif-title text-2xl font-bold leading-tight tracking-tight text-stone-900 pt-1">BTC 15 Min Up or Down</h3>
</div>
<div className="relative flex flex-col items-center justify-center w-14 h-14 border-2 border-stone-900 rounded-full bg-white shadow-sm">
<span className="font-bold text-lg text-stone-900 leading-none">51%</span>
<span className="text-[9px] uppercase font-bold text-stone-500 leading-none mt-0.5">Prob</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<button className="py-3 bg-[#dbead5] text-[#2f5e2b] text-lg font-bold border border-[#b8dcb0] shadow-sm hover:-translate-y-0.5 transition-transform rounded-sm">UP</button>
<button className="py-3 bg-[#ebd5d5] text-[#7a2e2e] text-lg font-bold border border-[#dfb0b0] shadow-sm hover:-translate-y-0.5 transition-transform rounded-sm">DOWN</button>
</div>
</div>
<div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t-2 border-stone-800/10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
<span className="text-red-700 font-bold text-sm tracking-wide">LIVE</span>
</div>
<iconify-icon className="text-stone-400 hover:text-stone-800 cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="relative group">
<div className="paper-card relative p-7 min-h-[300px] flex flex-col justify-between rounded-sm border-t border-l border-stone-200">
<div className="tape"></div>
<div className="noise"></div>
<div className="relative z-10">
<div className="flex gap-4 mb-5">
<div className="w-14 h-14 bg-[#eeece5] border border-stone-300 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-stone-700" icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="serif-title text-2xl font-bold leading-tight tracking-tight text-stone-900 pt-1">2026 Winter Olympics Gold</h3>
</div>
<div className="space-y-4 mt-2">
<div className="flex items-center justify-between hover:bg-stone-100/50 -mx-2 px-2 py-1 rounded cursor-pointer">
<span className="text-stone-700 text-lg font-serif">Norway</span>
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-stone-900">74%</span>
<div className="flex shadow-sm">
<button className="px-3 py-1 bg-[#dbead5] text-[#2f5e2b] text-sm font-bold border border-[#b8dcb0] rounded-l-sm">YES</button>
<button className="px-3 py-1 bg-[#ebd5d5] text-[#7a2e2e] text-sm font-bold border border-[#dfb0b0] border-l-0 rounded-r-sm">NO</button>
</div>
</div>
</div>
<div className="h-px bg-stone-300 w-full border-b border-dashed border-stone-300"></div>
<div className="flex items-center justify-between hover:bg-stone-100/50 -mx-2 px-2 py-1 rounded cursor-pointer">
<span className="text-stone-700 text-lg font-serif">USA</span>
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-stone-900">21%</span>
<div className="flex shadow-sm">
<button className="px-3 py-1 bg-[#dbead5] text-[#2f5e2b] text-sm font-bold border border-[#b8dcb0] rounded-l-sm">YES</button>
<button className="px-3 py-1 bg-[#ebd5d5] text-[#7a2e2e] text-sm font-bold border border-[#dfb0b0] border-l-0 rounded-r-sm">NO</button>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t-2 border-stone-800/10">
<span className="text-stone-500 font-serif italic text-lg">$5m Vol.</span>
<iconify-icon className="text-stone-400 hover:text-stone-800 cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="relative group">
<div className="paper-card relative p-7 min-h-[300px] flex flex-col justify-between rounded-sm border-t border-l border-stone-200">
<div className="tape"></div>
<div className="noise"></div>
<div className="relative z-10">
<div className="space-y-5 mb-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-[#f0f4ff]">
<iconify-icon className="text-stone-800" icon="solar:shield-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold text-stone-900 font-serif">Chelsea</span>
</div>
<span className="text-2xl font-bold text-stone-900">64%</span>
</div>
<div className="h-px bg-stone-300 w-full border-b border-dashed border-stone-300"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-[#fffce0]">
<iconify-icon className="text-stone-800" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold text-stone-900 font-serif">Leeds</span>
</div>
<span className="text-2xl font-bold text-stone-900">16%</span>
</div>
</div>
<div className="flex gap-2 mt-4">
<button className="flex-1 py-2 bg-blue-50 text-blue-900 text-lg font-bold border border-blue-200 rounded-sm shadow-sm hover:bg-blue-100">Chelsea</button>
<button className="px-4 py-2 bg-stone-100 text-stone-600 text-sm font-bold border border-stone-300 rounded-sm shadow-sm">DRAW</button>
<button className="flex-1 py-2 bg-yellow-50 text-yellow-900 text-lg font-bold border border-yellow-200 rounded-sm shadow-sm hover:bg-yellow-100">Leeds</button>
</div>
</div>
<div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t-2 border-stone-800/10">
<span className="text-stone-500 font-serif italic text-sm">Tomorrow 3:30 AM</span>
<iconify-icon className="text-stone-400 hover:text-stone-800 cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</div>
</div>

<div className="relative group">
<div className="paper-card relative p-7 min-h-[300px] flex flex-col justify-between rounded-sm border-t border-l border-stone-200">
<div className="tape"></div>
<div className="noise"></div>
<div className="relative z-10">
<div className="space-y-5 mb-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-[#f8f0f0]">
<iconify-icon className="text-stone-800" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold text-stone-900 font-serif">West Ham</span>
</div>
<span className="text-2xl font-bold text-stone-900">57%</span>
</div>
<div className="h-px bg-stone-300 w-full border-b border-dashed border-stone-300"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-[#fff0f0]">
<iconify-icon className="text-stone-800" icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold text-stone-900 font-serif">Man Utd</span>
</div>
<span className="text-2xl font-bold text-stone-900">22%</span>
</div>
</div>
<div className="flex gap-2 mt-4">
<button className="flex-1 py-2 bg-[#ebd5d5] text-[#7a2e2e] text-lg font-bold border border-[#dfb0b0] rounded-sm shadow-sm hover:bg-[#e2c4c4]">West Ham</button>
<button className="px-4 py-2 bg-stone-100 text-stone-600 text-sm font-bold border border-stone-300 rounded-sm shadow-sm">DRAW</button>
<button className="flex-1 py-2 bg-[#ebd5d5] text-[#7a2e2e] text-lg font-bold border border-[#dfb0b0] rounded-sm shadow-sm hover:bg-[#e2c4c4]">Man Utd</button>
</div>
</div>
<div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t-2 border-stone-800/10">
<span className="text-stone-500 font-serif italic text-sm">Tomorrow 4:15 AM</span>
<iconify-icon className="text-stone-400 hover:text-stone-800 cursor-pointer transition-colors" icon="solar:bookmark-linear" width="22"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
