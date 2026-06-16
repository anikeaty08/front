import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-emerald-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-emerald-100 shrink-0">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded bg-emerald-900 text-white flex items-center justify-center text-xs font-semibold tracking-tighter">
                    P
                </div>
<span className="text-sm font-semibold tracking-tighter">PvsC</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto pt-4 pr-4 pb-4 pl-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-emerald-100/80 text-emerald-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-emerald-500 hover:text-emerald-900 hover:bg-emerald-50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                My Cafés
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-emerald-500 hover:text-emerald-900 hover:bg-emerald-50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Coffee Map
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-emerald-500 hover:text-emerald-900 hover:bg-emerald-50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:scale-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Head to Head
            </a>
</nav>
<div className="p-4 border-t border-emerald-100">
<a className="flex items-center gap-3 px-3 py-2 text-emerald-500 hover:text-emerald-900 hover:bg-emerald-50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-emerald-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-emerald-500 hover:text-emerald-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Overview</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-emerald-400 hover:text-emerald-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="bg-emerald-900 text-white px-3.5 py-1.5 rounded-md text-xs font-medium hover:bg-emerald-800 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon className="text-base" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    New Review
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white border border-emerald-200 p-5 rounded-xl shadow-sm">
<p className="text-xs font-medium text-emerald-500 mb-1">Total Visited</p>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-semibold tracking-tight">142</h2>
<span className="text-xs text-cyan-600 font-medium bg-cyan-50 px-1.5 py-0.5 rounded">+4 this week</span>
</div>
</div>
<div className="bg-white border border-emerald-200 p-5 rounded-xl shadow-sm">
<p className="text-xs font-medium text-emerald-500 mb-1">Average Score</p>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-semibold tracking-tight">8.4</h2>
<span className="text-xs text-emerald-400 font-medium">/ 10</span>
</div>
</div>
<div className="bg-white border border-emerald-200 p-5 rounded-xl shadow-sm">
<p className="text-xs font-medium text-emerald-500 mb-1">Top Rated Vibe</p>
<div className="flex items-baseline gap-2 mt-1">
<h2 className="text-lg font-semibold tracking-tight text-emerald-900 truncate">Ozone Coffee Roasters</h2>
</div>
</div>
</div>

<section className="bg-white border border-emerald-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-emerald-100 flex items-center justify-between bg-emerald-50/50">
<h2 className="text-lg font-semibold tracking-tight text-emerald-900">Matchup of the Week</h2>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Featured
                        </span>
</div>
<div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative">

<div className="flex-1 w-full space-y-5">
<div>
<h3 className="text-xl font-semibold tracking-tight">Ozone Coffee</h3>
<p className="text-xs text-emerald-500 mt-0.5">Shoreditch, London</p>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-emerald-600">Espresso Quality</span>
<span className="text-emerald-900">9.5</span>
</div>
<div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-900 rounded-full w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-emerald-600">Atmosphere</span>
<span className="text-emerald-900">8.0</span>
</div>
<div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[80%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-emerald-600">Pastries</span>
<span className="text-emerald-900">8.5</span>
</div>
<div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[85%]"></div>
</div>
</div>
</div>
</div>

<div className="w-12 h-12 rounded-full border border-emerald-200 bg-white shadow-sm flex items-center justify-center shrink-0 z-10 my-4 md:my-0">
<span className="text-xs font-semibold tracking-tighter text-emerald-400">VS</span>
</div>

<div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-emerald-100 -translate-x-1/2"></div>

<div className="flex-1 w-full space-y-5">
<div>
<h3 className="text-xl font-semibold tracking-tight">Origin Coffee</h3>
<p className="text-xs text-emerald-500 mt-0.5">Southwark, London</p>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-emerald-600">Espresso Quality</span>
<span className="text-emerald-900">9.0</span>
</div>
<div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[90%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-emerald-600">Atmosphere</span>
<span className="text-emerald-900">9.5</span>
</div>
<div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-900 rounded-full w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-emerald-600">Pastries</span>
<span className="text-emerald-900">7.5</span>
</div>
<div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full w-[75%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h2 className="text-lg font-semibold tracking-tight">Recent Visits</h2>

<div className="flex items-center gap-6 bg-white border border-emerald-200 px-4 py-2.5 rounded-lg shadow-sm">

<div className="flex items-center gap-2">
<span className="text-xs font-medium text-emerald-600">Show Map</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-emerald-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-emerald-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-900 peer-checked:after:border-emerald-900"></div>
</label>
</div>
<div className="w-[1px] h-4 bg-emerald-200"></div>

<div className="flex items-center gap-3 w-32">
<span className="text-xs font-medium text-emerald-600 shrink-0">Min 8.0</span>
<div className="relative w-full flex items-center h-4">
<input className="w-full appearance-none bg-emerald-200 h-1 rounded-full outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:border [&amp;::-webkit-slider-thumb]:border-emerald-300 [&amp;::-webkit-slider-thumb]:shadow-sm cursor-pointer" max="10" min="1" type="range" value="8"/>
</div>
</div>
</div>
</div>

<div className="bg-white border border-emerald-200 rounded-xl shadow-sm overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-emerald-200 bg-emerald-50/50">
<th className="px-5 py-3 text-xs font-medium text-emerald-500 w-12 text-center">

<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-emerald-300 rounded bg-white peer-checked:bg-emerald-900 peer-checked:border-emerald-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</label>
</th>
<th className="px-5 py-3 text-xs font-medium text-emerald-500">Café</th>
<th className="px-5 py-3 text-xs font-medium text-emerald-500">Location</th>
<th className="px-5 py-3 text-xs font-medium text-emerald-500">Rating</th>
<th className="px-5 py-3 text-xs font-medium text-emerald-500">Drink</th>
<th className="px-5 py-3 text-xs font-medium text-emerald-500"></th>
</tr>
</thead>
<tbody className="divide-y divide-emerald-100">
<tr className="hover:bg-emerald-50/50 transition-colors group">
<td className="px-5 py-3.5 text-center">

<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-emerald-300 rounded bg-white peer-checked:bg-emerald-900 peer-checked:border-emerald-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</label>
</td>
<td className="px-5 py-3.5">
<span className="text-sm font-medium text-emerald-900">WatchHouse</span>
</td>
<td className="px-5 py-3.5">
<span className="text-sm text-emerald-500">Bermondsey</span>
</td>
<td className="px-5 py-3.5">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-900 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-emerald-900">9.2</span>
</div>
</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-600">
                                            Flat White
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-emerald-400 hover:text-emerald-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-emerald-50/50 transition-colors group">
<td className="px-5 py-3.5 text-center">
<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-emerald-300 rounded bg-white peer-checked:bg-emerald-900 peer-checked:border-emerald-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</label>
</td>
<td className="px-5 py-3.5">
<span className="text-sm font-medium text-emerald-900">Prufrock Coffee</span>
</td>
<td className="px-5 py-3.5">
<span className="text-sm text-emerald-500">Clerkenwell</span>
</td>
<td className="px-5 py-3.5">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-900 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-emerald-900">8.8</span>
</div>
</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-600">
                                            Filter
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-emerald-400 hover:text-emerald-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-emerald-50/50 transition-colors group">
<td className="px-5 py-3.5 text-center">
<label className="relative flex items-center justify-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-emerald-300 rounded bg-white peer-checked:bg-emerald-900 peer-checked:border-emerald-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</label>
</td>
<td className="px-5 py-3.5">
<span className="text-sm font-medium text-emerald-900">Rosslyn Coffee</span>
</td>
<td className="px-5 py-3.5">
<span className="text-sm text-emerald-500">City of London</span>
</td>
<td className="px-5 py-3.5">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-900 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-emerald-900">9.4</span>
</div>
</td>
<td className="px-5 py-3.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-600">
                                            Espresso
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-emerald-400 hover:text-emerald-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<footer className="mt-12 text-center pb-8">
<p className="text-xs text-emerald-400 font-medium">Pauline vs Café © Tracker</p>
</footer>
</div>
</main>

    </>
  );
}
