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
      

<aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col justify-between shrink-0 z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-zinc-100/50">
<span className="text-lg font-medium tracking-tighter text-zinc-900">MOOD.</span>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
                    History
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="18"></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="18"></iconify-icon>
                    Journal
                </a>
</nav>
</div>
<div className="p-4 border-t border-zinc-100">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">JD</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-zinc-900">John Doe</span>
<span className="text-[10px] text-zinc-400">Free Plan</span>
</div>
<iconify-icon className="ml-auto text-zinc-400" icon="lucide:more-vertical" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-4 md:hidden sticky top-0 z-30">
<span className="text-base font-medium tracking-tighter">MOOD.</span>
<button className="text-zinc-500 p-2">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 scroll-smooth">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Today, Oct 24</p>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">Good morning, Alex</h1>
<p className="text-sm text-zinc-500 mt-1 font-normal">Track your mental wellbeing and identify patterns.</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-md hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="14"></iconify-icon>
                            Export Data
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 text-white border border-zinc-900 text-xs font-medium rounded-md hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-200">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="14"></iconify-icon>
                            New Entry
                        </button>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] p-6 md:p-8">
<h2 className="text-sm font-medium text-zinc-900 mb-6">How are you feeling right now?</h2>

<div className="grid grid-cols-5 gap-2 md:gap-4 mb-8">

<label className="group cursor-pointer">
<input className="peer sr-only" name="mood" type="radio"/>
<div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:bg-zinc-50 peer-checked:bg-red-50 peer-checked:border-red-100 transition-all duration-200">
<div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 peer-checked:grayscale-0 transition-all transform peer-checked:scale-110">😫</div>
<span className="text-[10px] font-medium text-zinc-400 peer-checked:text-red-600">Rough</span>
</div>
</label>

<label className="group cursor-pointer">
<input className="peer sr-only" name="mood" type="radio"/>
<div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:bg-zinc-50 peer-checked:bg-orange-50 peer-checked:border-orange-100 transition-all duration-200">
<div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 peer-checked:grayscale-0 transition-all transform peer-checked:scale-110">😕</div>
<span className="text-[10px] font-medium text-zinc-400 peer-checked:text-orange-600">Bad</span>
</div>
</label>

<label className="group cursor-pointer">
<input className="peer sr-only" name="mood" type="radio"/>
<div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:bg-zinc-50 peer-checked:bg-yellow-50 peer-checked:border-yellow-100 transition-all duration-200">
<div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 peer-checked:grayscale-0 transition-all transform peer-checked:scale-110">😐</div>
<span className="text-[10px] font-medium text-zinc-400 peer-checked:text-yellow-600">Okay</span>
</div>
</label>

<label className="group cursor-pointer">
<input checked="" className="peer sr-only" name="mood" type="radio"/>
<div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:bg-zinc-50 peer-checked:bg-emerald-50 peer-checked:border-emerald-100 transition-all duration-200">
<div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 peer-checked:grayscale-0 transition-all transform peer-checked:scale-110">🙂</div>
<span className="text-[10px] font-medium text-zinc-400 peer-checked:text-emerald-600">Good</span>
</div>
</label>

<label className="group cursor-pointer">
<input className="peer sr-only" name="mood" type="radio"/>
<div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:bg-zinc-50 peer-checked:bg-blue-50 peer-checked:border-blue-100 transition-all duration-200">
<div className="text-3xl md:text-4xl filter grayscale group-hover:grayscale-0 peer-checked:grayscale-0 transition-all transform peer-checked:scale-110">🤩</div>
<span className="text-[10px] font-medium text-zinc-400 peer-checked:text-blue-600">Great</span>
</div>
</label>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-zinc-500" htmlFor="note">Add a note (optional)</label>
<div className="relative">
<textarea className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg p-3 focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 outline-none resize-none transition-all placeholder:text-zinc-400" id="note" placeholder="What's on your mind today?" rows="2"></textarea>
<div className="absolute bottom-3 right-3 flex items-center gap-2">
<button className="text-zinc-400 hover:text-zinc-600 transition-colors" type="button">
<iconify-icon icon="lucide:mic" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors" type="button">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<button className="px-2.5 py-1 text-xs font-medium bg-zinc-100 text-zinc-600 rounded-full hover:bg-zinc-200 transition-colors">#work</button>
<button className="px-2.5 py-1 text-xs font-medium bg-zinc-100 text-zinc-600 rounded-full hover:bg-zinc-200 transition-colors">#family</button>
<button className="px-2.5 py-1 text-xs font-medium bg-zinc-100 text-zinc-600 rounded-full hover:bg-zinc-200 transition-colors">#sleep</button>
<button className="px-2.5 py-1 text-xs font-medium border border-dashed border-zinc-300 text-zinc-400 rounded-full hover:border-zinc-400 hover:text-zinc-500 transition-colors flex items-center gap-1">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon> Tag
                        </button>
</div>
<div className="mt-6 flex justify-end">
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all shadow-md shadow-zinc-900/10 active:scale-95 transform">
                            Log Mood
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-900">Mood Flow</h3>
<select className="text-xs font-medium text-zinc-500 bg-transparent border-none outline-none cursor-pointer hover:text-zinc-800">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
</select>
</div>

<div className="h-48 flex items-end justify-between gap-2 sm:gap-4 w-full">

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden">
<div className="w-full bg-orange-200 h-[30%] group-hover:bg-orange-300 transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-400">Mon</span>
</div>

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden">
<div className="w-full bg-yellow-200 h-[55%] group-hover:bg-yellow-300 transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-400">Tue</span>
</div>

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden">
<div className="w-full bg-emerald-200 h-[80%] group-hover:bg-emerald-300 transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-400">Wed</span>
</div>

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden">
<div className="w-full bg-red-200 h-[20%] group-hover:bg-red-300 transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-400">Thu</span>
</div>

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden">
<div className="w-full bg-emerald-200 h-[90%] group-hover:bg-emerald-300 transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-400">Fri</span>
</div>

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden">
<div className="w-full bg-blue-200 h-[95%] group-hover:bg-blue-300 transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-400">Sat</span>
</div>

<div className="group flex flex-col items-center gap-2 flex-1 cursor-pointer">
<div className="w-full bg-zinc-100 rounded-t-sm relative h-40 flex items-end overflow-hidden border-b-2 border-zinc-900">
<div className="w-full bg-emerald-300 h-[70%] transition-all duration-300 relative"></div>
</div>
<span className="text-[10px] font-medium text-zinc-900">Sun</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] p-6 flex flex-col">
<h3 className="text-sm font-medium text-zinc-900 mb-4">October</h3>
<div className="grid grid-cols-7 gap-1 flex-1 content-start">
<div className="text-[10px] text-zinc-400 text-center py-1">M</div>
<div className="text-[10px] text-zinc-400 text-center py-1">T</div>
<div className="text-[10px] text-zinc-400 text-center py-1">W</div>
<div className="text-[10px] text-zinc-400 text-center py-1">T</div>
<div className="text-[10px] text-zinc-400 text-center py-1">F</div>
<div className="text-[10px] text-zinc-400 text-center py-1">S</div>
<div className="text-[10px] text-zinc-400 text-center py-1">S</div>


<div></div><div></div><div></div>

<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">1</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-red-50 rounded-md text-red-600">2</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">3</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-emerald-50 rounded-md text-emerald-600">4</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-emerald-50 rounded-md text-emerald-600">5</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">6</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">7</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-yellow-50 rounded-md text-yellow-600">8</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">9</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-blue-50 rounded-md text-blue-600">10</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">11</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">12</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">13</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-orange-50 rounded-md text-orange-600">14</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">15</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">16</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-emerald-50 rounded-md text-emerald-600">17</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">18</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">19</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">20</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">21</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">22</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400 bg-emerald-50 rounded-md text-emerald-600">23</div>
<div className="aspect-square flex items-center justify-center text-xs text-white bg-zinc-900 rounded-md font-medium">24</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">25</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">26</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">27</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">28</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">29</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">30</div>
<div className="aspect-square flex items-center justify-center text-xs text-zinc-400">31</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900">Recent Entries</h3>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">View All</a>
</div>
<div className="bg-white border border-zinc-200 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] overflow-hidden">
<table className="w-full text-left">
<thead className="bg-zinc-50 border-b border-zinc-100">
<tr>
<th className="px-6 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider w-32">Date</th>
<th className="px-6 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider w-24">Mood</th>
<th className="px-6 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Note</th>
<th className="px-6 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider w-16"></th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 text-xs text-zinc-500 font-medium">Oct 23, 8:45 PM</td>
<td className="px-6 py-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100/50">
<span className="text-sm">🙂</span>
<span className="text-[10px] font-medium">Good</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-zinc-700 font-normal truncate max-w-xs md:max-w-md">Productive day at work, felt energetic.</p>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 text-xs text-zinc-500 font-medium">Oct 22, 9:30 PM</td>
<td className="px-6 py-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md border border-yellow-100/50">
<span className="text-sm">😐</span>
<span className="text-[10px] font-medium">Okay</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-zinc-700 font-normal truncate max-w-xs md:max-w-md">Tired, slept poorly last night.</p>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4 text-xs text-zinc-500 font-medium">Oct 21, 10:15 PM</td>
<td className="px-6 py-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100/50">
<span className="text-sm">🤩</span>
<span className="text-[10px] font-medium">Great</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-zinc-700 font-normal truncate max-w-xs md:max-w-md">Family dinner was amazing!</p>
</td>
<td className="px-6 py-4 text-right">
<button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<footer className="mt-12 mb-4 text-center">
<p className="text-[10px] text-zinc-400">© 2023 Mood Tracker App. All rights reserved.</p>
</footer>
</div>
</main>

    </>
  );
}
