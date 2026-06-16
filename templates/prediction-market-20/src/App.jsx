import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151b23',
900: '#0f1419',
950: '#0a0d10',
},
brand: {
blue: '#2E90FA',
purple: '#9B8AFB',
red: '#F97066',
}
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
      

<nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="px-6 h-16 flex items-center justify-between gap-6">

<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
<i className="w-5 h-5 fill-white rotate-90" data-lucide="triangle" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight">Polymarket</span>
</div>
<div className="hidden md:flex items-center gap-1">
<button className="flex items-center gap-2 px-4 py-2 text-sm text-blue-400 bg-blue-500/10 rounded-lg font-medium transition-colors">
<i className="w-4 h-4" data-lucide="layout-grid" strokeWidth="1.5"></i>
                        Markets
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
<i className="w-4 h-4" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
                        Dashboards
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
                        Activity
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
<i className="w-4 h-4" data-lucide="trophy" strokeWidth="1.5"></i>
                        Ranks
                    </button>
</div>
</div>

<div className="flex items-center gap-4 flex-1 justify-end">
<div className="relative hidden lg:block w-full max-w-md group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-slate-300 transition-colors" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-slate-900 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" placeholder="Search everything..." type="text"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-600 border border-white/10 px-1.5 py-0.5 rounded bg-white/5">/</span>
</div>
<div className="h-6 w-px bg-white/10 mx-2 hidden sm:block"></div>
<button className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
</button>
<button className="hidden sm:block text-sm font-medium hover:text-white transition-colors">Log In</button>
<button className="bg-amber-100 hover:bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">Sign Up</button>
<button className="lg:hidden p-2"><i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i></button>
</div>
</div>

<div className="px-6 border-t border-white/5 h-12 flex items-center overflow-x-auto no-scrollbar gap-6 text-sm">
<div className="flex items-center gap-2 text-blue-400 border-b-2 border-blue-400 h-full px-1">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="font-medium">Live</span>
</div>
<a className="text-white font-medium hover:text-blue-400 whitespace-nowrap" href="#">All</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">For You</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">Politics</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">Sports</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">Crypto</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">Global Elections</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">Science</a>
<a className="hover:text-slate-100 whitespace-nowrap transition-colors" href="#">Pop Culture</a>
</div>
</nav>

<main className="p-6 max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

<div className="xl:col-span-9 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-80">

<div className="md:col-span-2 relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-blue-900/10">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-blue-700 to-slate-900 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-grid-white/[0.05]"></div>

<div className="relative h-full flex flex-col justify-between p-8 z-10">
<div className="space-y-2 max-w-md">
<h1 className="text-3xl font-semibold text-white tracking-tight drop-shadow-md">NFL Playoffs</h1>
<p className="text-blue-100 text-lg">Super Wildcard Weekend is here! Predict the winners.</p>
</div>
<div className="flex items-end justify-between">
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 border border-white/10 transition-all group/btn">
                                    Games
                                    <i className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>

<div className="opacity-80 group-hover:opacity-100 transition-opacity transform translate-y-4 translate-x-4">
<i className="w-32 h-32 text-white stroke-1 fill-white/10" data-lucide="shield"></i>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 h-full">

<div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-900 transition-transform duration-500 group-hover:scale-105"></div>
<div className="relative p-5 h-full flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">2025 Predictions</h3>
<p className="text-purple-200 text-sm mt-1">What's in store for '25?</p>
</div>
<div className="flex justify-between items-end">
<span className="bg-black/20 hover:bg-black/30 text-xs font-medium px-3 py-1.5 rounded-full text-white backdrop-blur-sm border border-white/10 transition-colors flex items-center gap-1">
                                        Markets <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
<span className="text-4xl font-bold text-white/20">2025</span>
</div>
</div>
</div>

<div className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-red-900 transition-transform duration-500 group-hover:scale-105"></div>
<div className="relative p-5 h-full flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Trump Admin</h3>
<p className="text-rose-200 text-sm mt-1">Track promises &amp; more</p>
</div>
<div className="flex justify-between items-end">
<span className="bg-black/20 hover:bg-black/30 text-xs font-medium px-3 py-1.5 rounded-full text-white backdrop-blur-sm border border-white/10 transition-colors flex items-center gap-1">
                                        Dashboard <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</span>
<div className="w-12 h-12 bg-rose-500 rounded-full opacity-50 blur-xl"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar">
<button className="bg-white/10 text-white border border-white/5 px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap">All</button>
<button className="hover:bg-white/5 text-slate-400 hover:text-white px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Wildfire</button>
<button className="hover:bg-white/5 text-slate-400 hover:text-white px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Breaking News</button>
<button className="hover:bg-white/5 text-slate-400 hover:text-white px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Canada</button>
<button className="hover:bg-white/5 text-slate-400 hover:text-white px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Trump Inauguration</button>
</div>
<div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
<div className="flex items-center gap-2 bg-slate-900 border border-white/10 rounded-lg p-1">
<div className="flex items-center gap-2 px-2">
<i className="w-4 h-4 text-slate-500" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-slate-400">Animations</span>
</div>
<button className="bg-blue-600 w-9 h-5 rounded-full relative p-0.5 cursor-pointer">
<span className="block w-4 h-4 bg-white rounded-full shadow-sm translate-x-4 transition-transform"></span>
</button>
</div>
<div className="flex gap-1 bg-slate-900 border border-white/10 rounded-lg p-1">
<button className="px-3 py-1.5 text-sm font-medium text-white bg-white/10 rounded flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
                                Newest
                                <i className="w-3.5 h-3.5 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="p-1.5 hover:bg-white/5 rounded text-white">
<i className="w-5 h-5" data-lucide="layout-grid" strokeWidth="1.5"></i>
</button>
<button className="p-1.5 hover:bg-white/5 rounded text-slate-500">
<i className="w-5 h-5" data-lucide="list" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-slate-900/50 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 p-5 transition-all duration-300">

<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
<div className="relative space-y-5">
<div className="flex gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-xl bg-slate-800 object-cover shadow-inner" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Yoon"/>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight leading-tight">Yoon arrested by January 31?</h3>
<p className="text-slate-500 text-sm mt-1">South Korea Politics</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-slate-800/50 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 group/opt hover:border-emerald-500/30 transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500/20">
<div className="h-full w-[60%] bg-emerald-500"></div>
</div>
<div className="relative w-20 h-20 mb-2">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="60, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-lg font-bold text-white">60%</span>
<span className="text-[10px] text-emerald-400">+6.6%</span>
</div>
</div>
<span className="text-emerald-400 font-semibold text-lg">Yes</span>
</div>

<div className="bg-slate-800/50 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 group/opt hover:border-rose-500/30 transition-colors cursor-pointer relative overflow-hidden">
<div className="absolute inset-x-0 bottom-0 h-1 bg-rose-500/20">
<div className="h-full w-[40%] bg-rose-500"></div>
</div>
<div className="relative w-20 h-20 mb-2">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-rose-500 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="40, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-lg font-bold text-white">40%</span>
<span className="text-[10px] text-rose-400">-3.2%</span>
</div>
</div>
<span className="text-rose-400 font-semibold text-lg">No</span>
</div>
</div>
<div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-white/5">
<div className="flex gap-4">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="activity" strokeWidth="1.5"></i> $2.4M Vol</span>
<span className="text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Trending</span>
</div>
<div className="flex gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-circle" strokeWidth="1.5"></i> 501</span>
<i className="w-3 h-3 hover:text-yellow-400 cursor-pointer" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors flex flex-col">
<div className="flex gap-3 mb-4">
<img alt="SpaceX" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">SpaceX Starship Flight Test 7</h3>
<p className="text-slate-500 text-xs mt-1">Multiple Outcomes</p>
</div>
</div>
<div className="space-y-3 flex-1">
<div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
<span className="text-slate-300 text-sm font-medium">Launch by Jan 10?</span>
<div className="flex gap-2 text-sm font-medium">
<span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Yes 76%</span>
<span className="text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded">No 24%</span>
</div>
</div>
<div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
<span className="text-slate-300 text-sm font-medium">Launch before Feb?</span>
<div className="flex gap-2 text-sm font-medium">
<span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Yes 98%</span>
<span className="text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded">No 2%</span>
</div>
</div>
<div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
<span className="text-slate-300 text-sm font-medium">Reaches Space?</span>
<div className="flex gap-2 text-sm font-medium">
<span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Yes 95%</span>
<span className="text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded">No 5%</span>
</div>
</div>
</div>
<div className="flex justify-between items-center text-xs text-slate-500 mt-4 pt-3 border-t border-white/5">
<span className="bg-amber-400 text-slate-900 font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wider">NEW</span>
<div className="flex gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="bar-chart-2" strokeWidth="1.5"></i> 344K</span>
<i className="w-3 h-3" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-slate-900 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
<div className="flex gap-3 mb-5">
<div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center border border-white/10">
<svg className="w-7 h-7 fill-white" viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight leading-tight">TikTok banned in the US before May 2025?</h3>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-slate-800/30 rounded-lg p-3 flex flex-col items-center border border-white/5 relative group cursor-pointer hover:bg-slate-800/50 transition-all">
<div className="relative w-14 h-14 mb-1">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<path className="text-emerald-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="59, 100" strokeWidth="2.5"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-bold text-white">59%</span>
</div>
</div>
<span className="text-emerald-400 font-semibold text-sm">Yes</span>
</div>

<div className="bg-slate-800/30 rounded-lg p-3 flex flex-col items-center border border-white/5 relative group cursor-pointer hover:bg-slate-800/50 transition-all">
<div className="relative w-14 h-14 mb-1">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<path className="text-rose-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="41, 100" strokeWidth="2.5"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-sm font-bold text-white">41%</span>
</div>
</div>
<span className="text-rose-400 font-semibold text-sm">No</span>
</div>
</div>
<div className="flex justify-between items-center text-xs text-slate-500 mt-4 pt-3 border-t border-white/5">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="bar-chart" strokeWidth="1.5"></i> 2M</span>
<div className="flex gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-circle" strokeWidth="1.5"></i> 501</span>
<i className="w-3 h-3" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-slate-900 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors">
<div className="flex gap-3 mb-4">
<div className="w-12 h-12 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
<i className="w-7 h-7 text-orange-500" data-lucide="bitcoin" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">What price will bitcoin in January?</h3>
<p className="text-slate-500 text-xs mt-1">Crypto Market</p>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/30 border border-white/5">
<span className="text-white text-sm font-medium">$200,000</span>
<div className="flex gap-3 text-sm font-medium">
<span className="text-emerald-400">Yes 76%</span>
<span className="text-rose-400">No 24%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-3 space-y-6">

<div className="bg-slate-900 rounded-2xl p-5 border border-white/5">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-3">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<i className="w-5 h-5" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-white">Portfolio</h3>
<p className="text-xs text-slate-500 mt-0.5">Deposit cash to start betting</p>
</div>
</div>
</div>
<button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm font-medium transition-colors border border-white/5 flex items-center justify-between px-4 group">
<span>Deposit Funds</span>
<i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-slate-900 rounded-2xl p-5 border border-white/5">
<div className="flex items-start gap-3 mb-2">
<div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-white">Watchlist</h3>
<p className="text-xs text-slate-500 mt-0.5 max-w-[200px]">Click the star on any market to add it to your watchlist</p>
</div>
</div>
<div className="mt-4 flex justify-end">
<button className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1">
                            Trending <i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-5 border border-white/5">
<div className="flex justify-between items-center mb-4">
<h3 className="font-medium text-white">Trending Topics</h3>
<button className="text-xs text-slate-500 hover:text-white">See all</button>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Wildfire</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Breaking News</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Canada</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Trump Inauguration</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Elon Musk</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">NFL Draft</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Bitcoin</span>
<span className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-md text-slate-300 cursor-pointer border border-white/5 transition-colors">Cyber Truck</span>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-5 border border-white/5">
<div className="flex justify-between items-center mb-4">
<h3 className="font-medium text-white">Recent Activity</h3>
<button className="text-xs text-slate-500 hover:text-white">See all</button>
</div>
<div className="space-y-4">

<div className="flex gap-3 items-start">
<img alt="" className="w-8 h-8 rounded-full bg-slate-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chiefs"/>
<div className="text-sm">
<p className="text-slate-300 line-clamp-1">Will the Chiefs win AFC championship?</p>
<p className="text-slate-500 text-xs mt-0.5"><span className="text-blue-400">fmichael</span> bought <span className="text-rose-400">No</span> at 58¢ <span className="text-slate-600">$30.53</span></p>
</div>
</div>

<div className="flex gap-3 items-start">
<img alt="" className="w-8 h-8 rounded-full bg-slate-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elon"/>
<div className="text-sm">
<p className="text-slate-300 line-clamp-1">Will Elon tweet 600 times Jan 3-10?</p>
<p className="text-slate-500 text-xs mt-0.5"><span className="text-blue-400">0xF1jk...</span> bought <span className="text-emerald-400">Yes</span> at 1¢ <span className="text-slate-600">$24.43</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
