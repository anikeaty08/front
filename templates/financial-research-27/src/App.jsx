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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center transition-transform group-active:scale-95">
<span className="text-white font-semibold tracking-tighter text-sm">RC</span>
</div>
<span className="font-medium tracking-tight text-lg">Research</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
<a className="text-gray-900 hover:text-gray-900 transition-colors" href="#">Overview</a>
<a className="hover:text-gray-900 transition-colors" href="#">Wealth Design</a>
<a className="hover:text-gray-900 transition-colors" href="#">Reports</a>
<a className="hover:text-gray-900 transition-colors" href="#">Markets</a>
<a className="hover:text-gray-900 transition-colors" href="#">Videos</a>
</nav>
</div>

<div className="flex items-center gap-3 md:gap-5 text-gray-500">
<div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 focus-within:ring-2 ring-gray-200 transition-all">
<iconify-icon className="text-lg text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-transparent border-none focus:outline-none text-sm ml-2 w-48 placeholder-gray-400 text-gray-900" placeholder="Search ticker, sector..." type="text"/>
<div className="flex items-center gap-1 ml-2">
<kbd className="text-[0.65rem] font-medium font-sans bg-white border border-gray-200 rounded px-1.5 py-0.5 text-gray-400">⌘</kbd>
<kbd className="text-[0.65rem] font-medium font-sans bg-white border border-gray-200 rounded px-1.5 py-0.5 text-gray-400">K</kbd>
</div>
</div>
<button className="md:hidden relative p-1">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="relative p-1 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="hidden md:block w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden ml-2">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</button>
<button className="md:hidden p-1">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 min-w-0 flex flex-col gap-8">

<section>
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar snap-container gap-4 pb-2 md:pb-0 md:grid md:grid-cols-2">

<div className="snap-center shrink-0 w-[90%] md:w-full bg-gray-900 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[12rem] md:min-h-[14rem] border border-gray-800 shadow-sm">
<div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="relative z-10">
<span className="inline-block bg-white/10 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-3 backdrop-blur-sm border border-white/5">Featured Strategy</span>
<h2 className="text-white font-medium text-xl md:text-2xl tracking-tight leading-snug md:max-w-[80%]">Q3 Technology Sector Earnings Preview</h2>
</div>
<div className="relative z-10 mt-6 flex items-center gap-1.5 text-white text-sm font-medium group w-max cursor-pointer">
<span>Read Full Report</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="snap-center shrink-0 w-[90%] md:w-full bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border border-blue-100/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[12rem] md:min-h-[14rem] shadow-sm">
<div>
<span className="inline-block bg-blue-100/50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3 border border-blue-200/50">New Model Portfolio</span>
<h2 className="text-gray-900 font-medium text-xl md:text-2xl tracking-tight leading-snug">Dividend Champions 2024</h2>
<p className="text-gray-500 text-sm mt-2 line-clamp-1 md:line-clamp-2">High-yield defensive plays positioned to outperform in the current macro environment.</p>
</div>
<div className="mt-6 flex items-center gap-1.5 text-blue-600 text-sm font-medium group w-max cursor-pointer">
<span>Explore List</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-base md:text-lg tracking-tight text-gray-900">Market Snapshot</h3>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center transition-colors" href="#">
                            View All Markets <iconify-icon className="ml-0.5 text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex overflow-x-auto snap-x hide-scrollbar snap-container gap-3 pb-2 md:pb-0 md:grid md:grid-cols-4">

<div className="snap-start shrink-0 w-[45%] md:w-full bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="text-xs font-medium text-gray-500">SET Index</div>
<iconify-icon className="text-gray-400" icon="solar:chart-line-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-xl tracking-tight text-gray-900">1,412.50</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon icon="solar:trend-up-linear" strokeWidth="2"></iconify-icon>
<span>+8.45 (0.6%)</span>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[45%] md:w-full bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="text-xs font-medium text-gray-500">Volume (MB)</div>
<iconify-icon className="text-gray-400" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-xl tracking-tight text-gray-900">42,150</div>
<div className="flex items-center gap-1 mt-1 text-gray-400 text-xs font-medium">
<span>vs avg. 38k</span>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[45%] md:w-full bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="text-xs font-medium text-gray-500">Foreign (MB)</div>
<iconify-icon className="text-gray-400" icon="solar:earth-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-xl tracking-tight text-gray-900">-1,240</div>
<div className="flex items-center gap-1 mt-1 text-rose-500 text-xs font-medium">
<iconify-icon icon="solar:trend-down-linear" strokeWidth="2"></iconify-icon>
<span>Net Sell</span>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[45%] md:w-full bg-white border border-gray-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="text-xs font-medium text-gray-500">Brent Crude</div>
<iconify-icon className="text-gray-400" icon="solar:gas-station-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-xl tracking-tight text-gray-900">$84.20</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon icon="solar:trend-up-linear" strokeWidth="2"></iconify-icon>
<span>+1.12 (1.3%)</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<h3 className="font-medium text-base md:text-lg tracking-tight text-gray-900">Latest Insights</h3>

<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium">All</button>
<button className="px-3 py-1 rounded-full bg-transparent text-gray-500 hover:bg-gray-100 text-xs font-medium transition-colors">Equities</button>
<button className="px-3 py-1 rounded-full bg-transparent text-gray-500 hover:bg-gray-100 text-xs font-medium transition-colors">Technical</button>
<button className="px-3 py-1 rounded-full bg-transparent text-gray-500 hover:bg-gray-100 text-xs font-medium transition-colors">Derivatives</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<article className="group p-5 bg-white border border-gray-100 hover:border-gray-200 rounded-2xl flex flex-col justify-between transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] h-full">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="bg-indigo-50/80 text-indigo-700 text-[0.65rem] uppercase tracking-widest font-semibold px-2 py-0.5 rounded">Single Stock</span>
<span className="text-xs font-medium text-gray-400">10m ago</span>
</div>
<button className="text-gray-300 hover:text-gray-900 transition-colors p-1">
<iconify-icon className="text-lg" icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<h4 className="font-medium text-base md:text-lg tracking-tight text-gray-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">CPALL: Margins expand faster than expected</h4>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Q2 results beat consensus by 8% driven by stronger convenience store margins and aggressive cost control initiatives.</p>
</div>
<div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
<img alt="Analyst" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
</div>
<span className="text-xs font-medium text-gray-600">John D.</span>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">CPALL</span>
</div>
</article>

<article className="group p-5 bg-white border border-gray-100 hover:border-gray-200 rounded-2xl flex flex-col justify-between transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] h-full">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="bg-emerald-50/80 text-emerald-700 text-[0.65rem] uppercase tracking-widest font-semibold px-2 py-0.5 rounded">Technical</span>
<span className="text-xs font-medium text-gray-400">1h ago</span>
</div>
<button className="text-gray-300 hover:text-gray-900 transition-colors p-1">
<iconify-icon className="text-lg" icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<h4 className="font-medium text-base md:text-lg tracking-tight text-gray-900 leading-snug mb-2 group-hover:text-emerald-600 transition-colors">SET index approaches key resistance at 1420</h4>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Momentum indicators suggest a short-term pullback before attempting to break the resistance zone. Watch support at 1395.</p>
</div>
<div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
<img alt="Analyst" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<span className="text-xs font-medium text-gray-600">Sarah M.</span>
</div>
<div className="flex items-center gap-1 text-gray-400">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
</article>

<article className="group p-5 bg-white border border-gray-100 hover:border-gray-200 rounded-2xl flex flex-col justify-between transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] h-full">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="bg-orange-50/80 text-orange-700 text-[0.65rem] uppercase tracking-widest font-semibold px-2 py-0.5 rounded">Strategy</span>
<span className="text-xs font-medium text-gray-400">08:30 AM</span>
</div>
<button className="text-gray-300 hover:text-gray-900 transition-colors p-1">
<iconify-icon className="text-lg" icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<h4 className="font-medium text-base md:text-lg tracking-tight text-gray-900 leading-snug mb-2 group-hover:text-orange-600 transition-colors">Daily Wealth: Defensive positioning ahead of Fed</h4>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Recommend shifting weights to healthcare and utilities as macroeconomic uncertainty remains elevated globally.</p>
</div>
<div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
<img alt="Analyst" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"/>
</div>
<span className="text-xs font-medium text-gray-600">Mike R.</span>
</div>
<div className="flex items-center gap-1 text-gray-400">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
</div>
</article>

<article className="group p-5 bg-white border border-gray-100 hover:border-gray-200 rounded-2xl flex flex-col justify-between transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] h-full">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="bg-blue-50/80 text-blue-700 text-[0.65rem] uppercase tracking-widest font-semibold px-2 py-0.5 rounded">Sector</span>
<span className="text-xs font-medium text-gray-400">Yesterday</span>
</div>
<button className="text-gray-300 hover:text-gray-900 transition-colors p-1">
<iconify-icon className="text-lg" icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<h4 className="font-medium text-base md:text-lg tracking-tight text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">Banks: NIM peak confirmed, asset quality in focus</h4>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Sector downgrade to neutral. We believe the rate hike cycle is fully priced in, shifting focus entirely to NPL formation.</p>
</div>
<div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
<img alt="Analyst" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"/>
</div>
<span className="text-xs font-medium text-gray-600">Anna K.</span>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">BANK</span>
</div>
</article>
</div>
<button className="w-full mt-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                        View All Reports Archive
                    </button>
</section>
</div>

<aside className="w-full lg:w-80 xl:w-96 flex flex-col gap-8">

<div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
<div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
<h3 className="font-medium text-sm md:text-base tracking-tight text-gray-900">Analyst Hub</h3>
<div className="flex items-center gap-1.5 bg-red-50 border border-red-100/50 text-red-600 px-2 py-0.5 rounded-full">
<span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-live"></span>
<span className="text-[0.65rem] font-semibold tracking-widest">LIVE</span>
</div>
</div>
<div className="p-4">
<div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer shadow-inner">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-105 transition-transform border border-white/20">
<iconify-icon className="text-white text-xl ml-0.5" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<p className="text-white font-medium text-sm leading-tight drop-shadow-sm">Morning Market Wrap &amp; Trade Setup</p>
<div className="flex items-center gap-3 mt-1.5">
<p className="text-red-400 text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:eye-linear"></iconify-icon> 2.4k watching
                                    </p>
</div>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<div className="w-16 aspect-video bg-gray-100 rounded-md overflow-hidden relative shrink-0">
<div className="absolute inset-0 flex items-center justify-center bg-black/10">
<iconify-icon className="text-gray-600 text-xs" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900 leading-tight">TFEX Strategy: Short-term volatility</h5>
<p className="text-[0.65rem] text-gray-500 mt-1 uppercase tracking-wider font-medium">Starts in 2h</p>
</div>
</div>
<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
<div className="w-16 aspect-video bg-gray-100 rounded-md overflow-hidden relative shrink-0">
<div className="absolute inset-0 flex items-center justify-center bg-black/10">
<iconify-icon className="text-gray-600 text-xs" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900 leading-tight">Monthly Economic Outlook</h5>
<p className="text-[0.65rem] text-gray-500 mt-1 font-medium">Recorded Yesterday</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
<h3 className="font-medium text-sm md:text-base tracking-tight text-gray-900 mb-4">Trending Topics</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">#EarningsSeason</span>
<span className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">#EVSupplyChain</span>
<span className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">#DividendYield</span>
<span className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">#InterestRates</span>
<span className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">#TourismRecovery</span>
</div>
<hr className="border-gray-100 my-5"/>
<h3 className="font-medium text-sm md:text-base tracking-tight text-gray-900 mb-3">Quick Resources</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center justify-between p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm font-medium" href="#">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon> Economic Calendar</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex items-center justify-between p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm font-medium" href="#">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon> Model Portfolios</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex items-center justify-between p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm font-medium" href="#">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Analyst Directory</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</aside>
</div>
</main>

    </>
  );
}
