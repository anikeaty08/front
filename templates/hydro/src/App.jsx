import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col justify-between flex-shrink-0">
<div className="p-6">
<div className="flex items-center gap-2 mb-10">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">HYDRO</span>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg transition-colors" href="#">
<i className="w-4 h-4 text-zinc-900" data-lucide="layout-dashboard"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                    Statistics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="trophy"></i>
                    Achievements
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="history"></i>
                    History
                </a>
</div>
</div>
<div className="p-6 border-t border-zinc-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                Settings
            </a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">John Doe</span>
<span className="text-xs text-zinc-400">Pro Plan</span>
</div>
</div>
</div>
</nav>

<main className="flex-1 overflow-y-auto relative">

<div className="md:hidden flex items-center justify-between p-4 border-b border-zinc-200 bg-white sticky top-0 z-20">
<span className="text-sm font-semibold tracking-tight">HYDRO</span>
<button className="text-zinc-500">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="max-w-5xl mx-auto p-6 md:p-12">

<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Hydration</h1>
<p className="text-sm text-zinc-500 mt-1">Tuesday, October 24</p>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 hover:border-zinc-300 transition-colors shadow-sm">
                        Export Data
                    </button>
<button className="h-9 w-9 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

<div className="col-span-1 lg:col-span-2 space-y-6">

<div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm relative overflow-hidden group">

<div className="absolute top-0 right-0 p-8 opacity-5">
<i className="w-64 h-64 text-zinc-900" data-lucide="droplet"></i>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-medium mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                                    On Track
                                </span>
<div className="flex items-baseline gap-1">
<span className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900">1,250</span>
<span className="text-xl text-zinc-400 font-normal">/ 2,500 ml</span>
</div>
<p className="text-sm text-zinc-500 mt-2">You've reached 50% of your daily goal.</p>
</div>

<div className="relative w-32 h-32 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-100" cx="64" cy="64" fill="transparent" r="60" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-zinc-900" cx="64" cy="64" fill="transparent" r="60" stroke="currentColor" stroke-dasharray="377" stroke-dashoffset="188" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-8 h-8 text-cyan-500 fill-cyan-500" data-lucide="droplet"></i>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-zinc-100">
<div className="flex justify-between items-center mb-3">
<label className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Quick Add</label>
<span className="text-xs font-medium text-zinc-400">250 ml selected</span>
</div>
<div className="relative w-full h-12 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center px-4 cursor-pointer hover:border-zinc-300 transition-colors">
<div className="absolute left-0 top-0 bottom-0 bg-zinc-100 w-1/4 rounded-l-lg border-r border-zinc-200"></div>
<div className="absolute left-[25%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-8 bg-white border border-zinc-200 rounded shadow-sm flex items-center justify-center z-10 slider-thumb">
<div className="w-0.5 h-3 bg-zinc-300 rounded-full"></div>
</div>
<div className="w-full flex justify-between px-2 text-[10px] text-zinc-400 font-medium z-0 select-none">
<span>0ml</span>
<span>250ml</span>
<span>500ml</span>
<span>750ml</span>
<span>1L</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-cyan-200 hover:ring-1 hover:ring-cyan-100 hover:bg-cyan-50/30 transition-all group">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-white group-hover:border-cyan-100">
<i className="w-5 h-5 text-zinc-400 group-hover:text-cyan-600" data-lucide="coffee"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-zinc-900">Small Cup</span>
<span className="block text-xs text-zinc-400 group-hover:text-cyan-600/70">200ml</span>
</div>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-cyan-200 hover:ring-1 hover:ring-cyan-100 hover:bg-cyan-50/30 transition-all group">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-white group-hover:border-cyan-100">
<i className="w-5 h-5 text-zinc-400 group-hover:text-cyan-600" data-lucide="glass-water"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-zinc-900">Glass</span>
<span className="block text-xs text-zinc-400 group-hover:text-cyan-600/70">350ml</span>
</div>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-cyan-200 hover:ring-1 hover:ring-cyan-100 hover:bg-cyan-50/30 transition-all group">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-white group-hover:border-cyan-100">
<i className="w-5 h-5 text-zinc-400 group-hover:text-cyan-600" data-lucide="flask-conical"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-zinc-900">Bottle</span>
<span className="block text-xs text-zinc-400 group-hover:text-cyan-600/70">500ml</span>
</div>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl border border-dashed border-zinc-300 shadow-sm hover:border-zinc-400 hover:bg-zinc-50 transition-all">
<div className="w-10 h-10 rounded-full bg-transparent border border-zinc-200 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="plus"></i>
</div>
<div className="text-center">
<span className="block text-sm font-medium text-zinc-900">Custom</span>
<span className="block text-xs text-zinc-400">Set amount</span>
</div>
</button>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-900">Weekly Intake</h3>
<div className="flex gap-2">
<button className="w-6 h-6 flex items-center justify-center rounded bg-zinc-100 text-zinc-500 hover:text-zinc-900"><i className="w-3 h-3" data-lucide="chevron-left"></i></button>
<button className="w-6 h-6 flex items-center justify-center rounded bg-zinc-100 text-zinc-500 hover:text-zinc-900"><i className="w-3 h-3" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="h-48 flex items-end justify-between gap-2">

<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-900 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '60%'}}></div>
</div>
<span className="text-xs text-zinc-400 font-medium">M</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-900 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '85%'}}></div>
</div>
<span className="text-xs text-zinc-900 font-medium">T</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-300 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '45%'}}></div>
</div>
<span className="text-xs text-zinc-400 font-medium">W</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-300 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '70%'}}></div>
</div>
<span className="text-xs text-zinc-400 font-medium">T</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-300 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '50%'}}></div>
</div>
<span className="text-xs text-zinc-400 font-medium">F</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-300 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '30%'}}></div>
</div>
<span className="text-xs text-zinc-400 font-medium">S</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group">
<div className="relative w-full rounded-t bg-zinc-100 h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-zinc-300 rounded-t transition-all duration-500 group-hover:bg-cyan-600" style={{height: '90%'}}></div>
</div>
<span className="text-xs text-zinc-400 font-medium">S</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 space-y-6">

<div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
<h3 className="text-sm font-medium text-zinc-900 mb-4">Conditions</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="sun"></i>
</div>
<div>
<span className="block text-sm font-medium text-zinc-900">Sunny</span>
<span className="block text-xs text-zinc-400">High UV Index</span>
</div>
</div>
<span className="text-lg font-semibold text-zinc-900 tracking-tight">28°C</span>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100">
<p className="text-xs text-zinc-500 leading-relaxed">
                                Warm weather detected. Your daily goal has been increased by <span className="font-medium text-zinc-900">300ml</span>.
                            </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm h-auto flex-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-900">Today's Log</h3>
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-900">View All</button>
</div>
<div className="relative space-y-0">

<div className="absolute left-3.5 top-2 bottom-4 w-px bg-zinc-100"></div>

<div className="relative flex gap-4 pb-6 group">
<div className="relative z-10 w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-cyan-500 group-hover:text-cyan-500 transition-colors">
<i className="w-3 h-3 text-zinc-400 group-hover:text-cyan-500" data-lucide="check"></i>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-zinc-900">Glass of Water</p>
<span className="text-xs text-zinc-400 font-mono">14:30</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">250 ml</p>
</div>
</div>

<div className="relative flex gap-4 pb-6 group">
<div className="relative z-10 w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-cyan-500 group-hover:text-cyan-500 transition-colors">
<i className="w-3 h-3 text-zinc-400 group-hover:text-cyan-500" data-lucide="check"></i>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-zinc-900">Coffee</p>
<span className="text-xs text-zinc-400 font-mono">10:15</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">200 ml</p>
</div>
</div>

<div className="relative flex gap-4 pb-2 group">
<div className="relative z-10 w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-cyan-500 group-hover:text-cyan-500 transition-colors">
<i className="w-3 h-3 text-zinc-400 group-hover:text-cyan-500" data-lucide="check"></i>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-zinc-900">Morning Hydration</p>
<span className="text-xs text-zinc-400 font-mono">08:00</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">500 ml</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-sm text-white">
<h3 className="text-sm font-medium text-zinc-100 mb-4">Reminders</h3>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium">Smart Notifications</span>
<span className="text-xs text-zinc-500">Adapt to your activity</span>
</div>

<button className="relative w-10 h-5 bg-zinc-700 rounded-full transition-colors hover:bg-zinc-600 focus:outline-none">
<span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-transform"></span>
</button>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium">Wearable Sync</span>
<span className="text-xs text-zinc-500">Connect to Health</span>
</div>

<button className="relative w-10 h-5 bg-cyan-600 rounded-full transition-colors hover:bg-cyan-500 focus:outline-none">
<span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></span>
</button>
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
