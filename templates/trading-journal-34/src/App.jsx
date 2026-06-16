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
dark: {
950: '#0a0a0c', // Deepest background
900: '#121216', // Sidebar/Card background
800: '#1c1c21', // Border/Hover
700: '#2a2a30',
},
primary: {
500: '#6366f1',
600: '#4f46e5',
},
profit: '#34d399',
loss: '#f87171'
},
fontSize: {
xxs: '0.65rem',
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
      

<aside className="w-64 flex-shrink-0 bg-dark-900 border-r border-dark-800 flex flex-col hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-dark-800/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    T
                </div>
<span className="text-lg font-medium tracking-tight text-white">TradeZync</span>
</div>
</div>

<div className="p-4">
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all shadow-lg shadow-indigo-900/20 flex items-center justify-center gap-2 text-sm group">
<i className="size-4 group-hover:rotate-90 transition-transform" data-lucide="plus"></i>
                Add Trade
            </button>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-slate-500 uppercase tracking-wider">Main</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-dark-800 text-white text-sm font-medium" href="#">
<i className="size-4 text-indigo-400" data-lucide="layout-dashboard"></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors" href="#">
<i className="size-4" data-lucide="book"></i>
                Daily Journal
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors" href="#">
<i className="size-4" data-lucide="bar-chart-2"></i>
                Trades
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors" href="#">
<i className="size-4" data-lucide="notebook-pen"></i>
                Notebook
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-slate-500 uppercase tracking-wider">Analytics</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors" href="#">
<i className="size-4" data-lucide="pie-chart"></i>
                Reports
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors" href="#">
<i className="size-4" data-lucide="zap"></i>
                Insights
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors group" href="#">
<i className="size-4" data-lucide="history"></i>
                Backtesting
                <span className="ml-auto bg-indigo-500/10 text-indigo-400 text-xxs px-1.5 py-0.5 rounded border border-indigo-500/20">NEW</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-dark-800/50 text-slate-400 hover:text-slate-200 text-sm transition-colors" href="#">
<i className="size-4" data-lucide="play-circle"></i>
                Trade Replay
            </a>
</nav>

<div className="p-4 border-t border-dark-800">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-dark-800/50 transition-colors text-left">
<div className="size-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">TQ</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Trading Queen</p>
<p className="text-xs text-slate-500 truncate">Pro Plan</p>
</div>
<i className="size-4 text-slate-500" data-lucide="chevron-up"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 border-b border-dark-800 bg-dark-950/80 backdrop-blur-md flex items-center justify-between px-6 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400"><i className="size-5" data-lucide="menu"></i></button>
<div className="flex items-center gap-2 text-sm text-slate-400">
<span className="hover:text-white cursor-pointer transition-colors">Dashboard</span>
</div>
<span className="text-slate-600">/</span>
<h1 className="text-sm font-medium text-white">Overview</h1>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-dark-900 border border-dark-800 rounded-md p-1">
<button className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-dark-800 rounded transition-colors flex items-center gap-2">
<i className="size-3" data-lucide="filter"></i> Filters
                    </button>
<div className="w-px h-4 bg-dark-800"></div>
<button className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-dark-800 rounded transition-colors flex items-center gap-2">
<i className="size-3" data-lucide="calendar"></i> June 2024
                    </button>
</div>
<button className="relative p-2 text-slate-400 hover:text-white transition-colors">
<i className="size-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full border-2 border-dark-950"></span>
</button>
<button className="hidden sm:flex items-center gap-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 text-indigo-400 text-xs font-medium px-4 py-2 rounded-md transition-all">
<i className="size-3.5" data-lucide="upload-cloud"></i>
                    Import Trades
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row items-end justify-between gap-4 mb-2">
<div>
<h2 className="text-xl font-medium text-white tracking-tight">Good morning, Trader!</h2>
<p className="text-sm text-slate-500 mt-1">Here's what's happening with your portfolio today.</p>
</div>
<div className="text-xs text-slate-500 flex items-center gap-2 bg-dark-900 px-3 py-1.5 rounded-full border border-dark-800">
<i className="size-3" data-lucide="refresh-ccw"></i> Last synced: Jun 26, 11:03 PM
                    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-dark-900 border border-dark-800 rounded-xl p-5 relative overflow-hidden group hover:border-dark-700 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Net P&amp;L</span>
<span className="bg-dark-800 text-slate-400 text-xxs px-1.5 py-0.5 rounded">35 Trades</span>
</div>
<div className="text-2xl font-semibold text-emerald-400 tracking-tight flex items-baseline gap-1">
                            $7,032.50
                        </div>
<div className="absolute right-0 bottom-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="size-12 text-emerald-400" data-lucide="trending-up"></i>
</div>
</div>

<div className="bg-dark-900 border border-dark-800 rounded-xl p-5 relative overflow-hidden group hover:border-dark-700 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Profit Factor</span>
<i className="size-3.5 text-slate-600" data-lucide="info"></i>
</div>
<div className="flex items-center justify-between">
<div className="text-2xl font-semibold text-white tracking-tight">2.10</div>

<div className="relative size-10">
<svg className="size-full -rotate-90" viewbox="0 0 36 36">
<path className="text-dark-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-emerald-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="70, 100" strokeWidth="4"></path>
</svg>
</div>
</div>
</div>

<div className="bg-dark-900 border border-dark-800 rounded-xl p-5 relative overflow-hidden group hover:border-dark-700 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Win Rate</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">42.42%</div>
<div className="text-xs text-slate-500 mt-1"><span className="text-emerald-400">14W</span> - <span className="text-rose-400">19L</span></div>
</div>

<div className="relative w-16 h-8 overflow-hidden">
<div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-dark-800 border-b-transparent border-l-transparent -rotate-45"></div>
<div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-emerald-500 border-b-transparent border-r-transparent border-l-transparent rotate-[45deg]" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', transform: 'rotate(-20deg)'}}></div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-900/40 to-dark-900 border border-indigo-500/20 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-indigo-200 uppercase tracking-wider">Balance</span>
<i className="size-3.5 text-indigo-400" data-lucide="wallet"></i>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">
                            $32,032.50
                        </div>
<div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
<i className="size-3" data-lucide="arrow-up-right"></i> +$7,032.50 (YTD)
                        </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="p-1 hover:bg-dark-800 rounded-full text-slate-400 transition-colors"><i className="size-5" data-lucide="chevron-left"></i></button>
<span className="text-lg font-medium text-white tracking-tight">June 2024</span>
<button className="p-1 hover:bg-dark-800 rounded-full text-slate-400 transition-colors"><i className="size-5" data-lucide="chevron-right"></i></button>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">+$5.13K Profit</span>
<span className="text-xs font-medium text-slate-400 bg-dark-800 px-2 py-1 rounded border border-dark-700">13 Days</span>
</div>
</div>

<div className="bg-dark-900 border border-dark-800 rounded-xl overflow-hidden">

<div className="grid grid-cols-7 border-b border-dark-800 bg-dark-950/30">
<div className="py-3 text-center text-xs font-medium text-slate-500">Sun</div>
<div className="py-3 text-center text-xs font-medium text-slate-500">Mon</div>
<div className="py-3 text-center text-xs font-medium text-slate-500">Tue</div>
<div className="py-3 text-center text-xs font-medium text-slate-500">Wed</div>
<div className="py-3 text-center text-xs font-medium text-slate-500">Thu</div>
<div className="py-3 text-center text-xs font-medium text-slate-500">Fri</div>
<div className="py-3 text-center text-xs font-medium text-slate-500">Sat</div>
</div>

<div className="grid grid-cols-7 auto-rows-[100px] lg:auto-rows-[110px] bg-dark-800 gap-px border-b border-dark-800">

<div className="bg-dark-900"></div><div className="bg-dark-900"></div><div className="bg-dark-900"></div><div className="bg-dark-900"></div><div className="bg-dark-900"></div>
<div className="bg-dark-900 p-2 relative text-right group hover:bg-dark-800 transition-colors cursor-pointer">
<span className="text-xs text-slate-600 block mb-1">1</span>
</div>
<div className="bg-dark-900 p-2 relative text-right group hover:bg-dark-800 transition-colors cursor-pointer">
<span className="text-xs text-slate-600 block mb-1">2</span>
</div>

<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">3</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">4</span></div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50 hover:bg-emerald-500/10 cursor-pointer transition-colors">
<span className="text-xs text-slate-400">5</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$1.05K</div>
<div className="text-xxs text-emerald-500/70">1 trade</div>
</div>
</div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">6</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">7</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">8</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">9</span></div>


<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50 hover:bg-emerald-500/10 cursor-pointer transition-colors">
<span className="text-xs text-slate-400">10</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$600</div>
<div className="text-xxs text-emerald-500/70">1 trade</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50 hover:bg-emerald-500/10 cursor-pointer transition-colors">
<span className="text-xs text-slate-400">11</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$1.09K</div>
<div className="text-xxs text-emerald-500/70">2 trades</div>
</div>
</div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">12</span></div>

<div className="bg-rose-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-rose-500/50 hover:bg-rose-500/10 cursor-pointer transition-colors relative">
<span className="text-xs text-slate-400">13</span>
<div className="text-right">
<div className="text-sm font-semibold text-rose-400">-$638</div>
<div className="text-xxs text-rose-500/70">2 trades</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50 hover:bg-emerald-500/10 cursor-pointer transition-colors relative">
<div className="w-full flex justify-between">
<i className="size-3 text-slate-500" data-lucide="notebook-pen"></i>
<span className="text-xs text-slate-400">14</span>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$556</div>
<div className="text-xxs text-emerald-500/70">3 trades</div>
</div>
</div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">15</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">16</span></div>


<div className="bg-rose-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-rose-500/50 hover:bg-rose-500/10 cursor-pointer transition-colors">
<span className="text-xs text-slate-400">17</span>
<div className="text-right">
<div className="text-sm font-semibold text-rose-400">-$788</div>
<div className="text-xxs text-rose-500/70">3 trades</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50">
<span className="text-xs text-slate-400">18</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$875</div>
<div className="text-xxs text-emerald-500/70">2 trades</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50 relative">
<div className="w-full flex justify-between">
<i className="size-3 text-slate-500" data-lucide="notebook-pen"></i>
<span className="text-xs text-slate-400">19</span>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$608</div>
<div className="text-xxs text-emerald-500/70">1 trade</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50">
<span className="text-xs text-slate-400">20</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$1.18K</div>
<div className="text-xxs text-emerald-500/70">5 trades</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50">
<span className="text-xs text-slate-400">21</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$113</div>
<div className="text-xxs text-emerald-500/70">3 trades</div>
</div>
</div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">22</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">23</span></div>


<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50">
<span className="text-xs text-slate-400">24</span>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$225</div>
<div className="text-xxs text-emerald-500/70">3 trades</div>
</div>
</div>

<div className="bg-emerald-500/5 p-2 flex flex-col justify-between items-end border-l-2 border-emerald-500/50 relative">
<div className="w-full flex justify-between">
<i className="size-3 text-slate-500" data-lucide="notebook-pen"></i>
<span className="text-xs text-slate-400">25</span>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-400">+$301</div>
<div className="text-xxs text-emerald-500/70">3 trades</div>
</div>
</div>

<div className="bg-rose-500/20 p-2 flex flex-col justify-between items-end border-l-2 border-rose-500 shadow-[inset_0_0_20px_rgba(244,63,94,0.1)] relative ring-2 ring-rose-500/30 z-10 rounded-sm">
<div className="w-full flex justify-between">
<i className="size-3 text-rose-400" data-lucide="notebook-pen"></i>
<span className="text-xs text-white font-bold">26</span>
</div>
<div className="text-right">
<div className="text-sm font-bold text-white shadow-black drop-shadow-sm">-$37.5</div>
<div className="text-xxs text-rose-300">2 trades</div>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
<div className="bg-rose-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-rose-900/40 animate-bounce">
                                            Review Performance
                                        </div>
</div>
</div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">27</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">28</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">29</span></div>
<div className="bg-dark-900 p-2 text-right"><span className="text-xs text-slate-600">30</span></div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-4">

<div className="bg-dark-900 border border-dark-800 rounded-xl p-4">
<h3 className="text-sm font-medium text-white mb-3">Weekly Breakdown</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded hover:bg-dark-800 transition-colors">
<span className="text-xs text-slate-400">Week 1</span>
<div className="text-right">
<div className="text-sm font-medium text-slate-500">$0.00</div>
<div className="text-xxs text-slate-600">0 days</div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-dark-800/50">
<span className="text-xs text-slate-400">Week 2</span>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+$1,050.00</div>
<div className="text-xxs text-slate-500">1 day</div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-dark-800 transition-colors">
<span className="text-xs text-slate-400">Week 3</span>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+$1,612.50</div>
<div className="text-xxs text-slate-500">4 days</div>
</div>
</div>
</div>
</div>

<div className="bg-dark-900 border border-dark-800 rounded-xl p-5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Trade Expectancy</span>
<i className="size-3.5 text-slate-600" data-lucide="info"></i>
</div>
<div className="flex items-center justify-between mt-2">
<div className="text-3xl font-semibold text-white tracking-tight">$213.11</div>
<div className="p-2 bg-indigo-500/10 rounded-md">
<i className="size-5 text-indigo-400" data-lucide="crosshair"></i>
</div>
</div>
</div>

<div className="bg-dark-900 border border-dark-800 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">AI Agent Score</span>
<i className="size-3.5 text-slate-500" data-lucide="info"></i>
</div>
<span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 text-xxs font-bold px-1.5 py-0.5 rounded">BETA</span>
</div>
<div className="h-48 relative flex items-center justify-center">

<svg className="size-full p-2" viewbox="0 0 200 160">

<polygon fill="none" points="100,20 180,140 20,140" stroke="#334155" strokeWidth="1"></polygon>
<polygon fill="none" points="100,50 160,140 40,140" stroke="#1e293b" strokeWidth="1"></polygon>

<polygon fill="rgba(99, 102, 241, 0.2)" points="100,30 165,135 45,130" stroke="#6366f1" strokeLinejoin="round" strokeWidth="2"></polygon>

<circle cx="100" cy="30" fill="#818cf8" r="3"></circle>
<circle cx="165" cy="135" fill="#818cf8" r="3"></circle>
<circle cx="45" cy="130" fill="#818cf8" r="3"></circle>

<text fill="#94a3b8" fontSize="10" text-anchor="middle" x="100" y="15">Win %</text>
<text fill="#94a3b8" fontSize="10" text-anchor="start" x="10" y="145">Avg Win/Loss</text>
<text fill="#94a3b8" fontSize="10" text-anchor="end" x="190" y="145">Profit Factor</text>
</svg>
</div>
<div className="flex justify-center mt-2 pb-2">
<div className="text-sm text-slate-400">Your Score: <span className="text-emerald-400 font-bold text-lg">81.25</span></div>
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
