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
      

<div className="border-b border-zinc-200 bg-white overflow-hidden py-3 marquee-container flex">
<div className="flex animate-marquee whitespace-nowrap items-center">

<div className="flex items-center gap-16 px-8">
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">ET</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">MINT</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">BUSINESS TODAY</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">FORBES</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">BLOOMBERG</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">REUTERS</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">CNBC TV18</span>
</div>

<div className="flex items-center gap-16 px-8">
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">ET</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">MINT</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">BUSINESS TODAY</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">FORBES</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">BLOOMBERG</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">REUTERS</span>
<span className="font-medium tracking-tighter text-xl text-zinc-300 hover:text-zinc-900 transition-colors cursor-default duration-300">CNBC TV18</span>
</div>
</div>
</div>

<div className="flex justify-center pt-10 pb-4 px-4">
<a className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white p-1 pr-4 shadow-sm transition-all hover:shadow-md hover:border-zinc-300" href="#">
<span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 uppercase tracking-widest group-hover:bg-zinc-200 transition-colors">Update</span>
<span className="text-sm font-medium text-zinc-700">1 Finance launches new retirement planning tool</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
<h1 className="text-4xl md:text-5xl tracking-tight font-medium text-zinc-900 mb-4">Newsroom.</h1>
<p className="text-lg text-zinc-500 max-w-2xl">The latest coverage, announcements, and expert insights shaping the future of personal finance.</p>
</div>

<div className="sticky top-0 z-10 bg-[#fafafa]/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-4">

<nav className="flex gap-8 overflow-x-auto w-full md:w-auto no-scrollbar">
<button className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 pb-1 whitespace-nowrap transition-colors">All Coverage</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 pb-1 whitespace-nowrap transition-colors">In the Media</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 pb-1 whitespace-nowrap transition-colors">Insights</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 pb-1 whitespace-nowrap transition-colors">Announcements</button>
</nav>

<div className="flex items-center gap-3 w-full md:w-auto">

<div className="relative w-full md:w-56 group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" height="18" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full pl-9 pr-3 py-1.5 bg-zinc-100/50 border border-transparent rounded-lg text-sm text-zinc-900 focus:bg-white focus:border-zinc-300 focus:ring-0 focus:outline-none transition-all placeholder-zinc-500" placeholder="Search news..." type="text"/>
</div>

<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 px-3 py-1.5 bg-zinc-100/50 hover:bg-zinc-200/50 rounded-lg transition-colors border border-transparent">
<iconify-icon height="18" icon="solar:filter-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Filters
                    </button>
</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<article className="md:col-span-2 group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-zinc-900 min-h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="relative p-8 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white uppercase tracking-wider border border-white/10">
                            Announcement
                        </span>
<button aria-label="Save article" className="text-white/70 hover:text-white transition-colors">
<iconify-icon height="22" icon="solar:bookmark-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
<div className="mt-auto">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-white mb-3 leading-tight group-hover:text-zinc-200 transition-colors">
                            Introducing the next generation of automated tax harvesting.
                        </h2>
<p className="text-base text-zinc-300 line-clamp-2 max-w-2xl mb-4 font-normal">
                            We are rolling out a comprehensive suite of tools designed to automatically optimize your portfolio's tax efficiency year-round, without lifting a finger.
                        </p>
<div className="flex items-center gap-4 text-sm text-zinc-400">
<time datetime="2023-10-24">Oct 24, 2023</time>
<span className="w-1 h-1 rounded-full bg-zinc-500"></span>
<span className="flex items-center gap-1">
<iconify-icon height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                4 min read
                            </span>
</div>
</div>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-zinc-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-zinc-200 transition-all duration-300 group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<span className="font-medium tracking-tighter text-lg text-zinc-800">FORBES</span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">In the Media</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                    How 1 Finance is rethinking wealth management for millennials.
                </h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
                    A deep dive into the platform's unique approach to combining behavioral finance with algorithmic portfolio structuring.
                </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50 mt-auto">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-700">By Sarah Jenkins</span>
<time className="text-xs text-zinc-400" datetime="2023-10-20">Oct 20, 2023</time>
</div>
<button aria-label="Save article" className="text-zinc-300 hover:text-zinc-900 transition-colors p-1">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-zinc-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-zinc-200 transition-all duration-300 group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<span className="font-medium tracking-tighter text-lg text-zinc-800">ET</span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">In the Media</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                    The rising trend of fee-only advisory in the Indian market.
                </h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
                    Industry experts discuss the shift towards transparent advisory models, featuring commentary from 1 Finance executives.
                </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50 mt-auto">
<div className="flex flex-col">
<time className="text-xs text-zinc-400" datetime="2023-10-18">Oct 18, 2023</time>
</div>
<button aria-label="Save article" className="text-zinc-300 hover:text-zinc-900 transition-colors p-1">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-zinc-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-zinc-200 transition-all duration-300 group cursor-pointer">
<div className="flex justify-between items-start mb-4">

<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-500">RK</div>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Insight</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                    Navigating market volatility: A behavioral perspective.
                </h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
                    Understanding cognitive biases is the first step to preventing emotional decisions during market downturns.
                </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50 mt-auto">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-700">Ravi Kumar, Head of Research</span>
<div className="flex items-center gap-2 mt-0.5">
<time className="text-xs text-zinc-400" datetime="2023-10-15">Oct 15, 2023</time>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-xs text-zinc-400">6 min read</span>
</div>
</div>
<button aria-label="Save article" className="text-zinc-300 hover:text-zinc-900 transition-colors p-1">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-zinc-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-zinc-200 transition-all duration-300 group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<span className="font-medium tracking-tighter text-lg text-zinc-800">MINT</span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">In the Media</span>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors leading-snug">
                    Fintech startups focusing on 'profitability' over 'growth at all costs'.
                </h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
                    A sector overview highlighting companies that are building sustainable business models in the current economic climate.
                </p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-50 mt-auto">
<div className="flex flex-col">
<time className="text-xs text-zinc-400" datetime="2023-10-10">Oct 10, 2023</time>
</div>
<button aria-label="Save article" className="text-zinc-300 hover:text-zinc-900 transition-colors p-1">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</article>
</div>

<div className="mt-16 flex flex-col items-center justify-center border-t border-zinc-200 pt-12">
<button className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-700 transition-colors group-hover:rotate-180 duration-500" height="18" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Load more stories
            </button>
</div>
</main>

<section className="bg-zinc-50 border-y border-zinc-200 py-20 mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl tracking-tight font-medium text-zinc-900 mb-2">October Highlights</h2>
<p className="text-sm text-zinc-500">Curated top mentions and defining moments this month.</p>
</div>
<div className="hidden sm:flex gap-2">
<button className="p-2 rounded-full border border-zinc-200 bg-white text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-zinc-200 bg-white text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">

<a className="min-w-[300px] md:min-w-[340px] snap-start bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group flex flex-col" href="#">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium tracking-tighter text-zinc-600">CNBC</span>
<div className="h-px bg-zinc-200 flex-grow"></div>
<span className="text-xs text-zinc-400">TV Segment</span>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors leading-snug">Live Panel: The Future of Retail Investing</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-4 flex-grow">Our CEO discusses market trends and regulatory shifts on prime time business television.</p>
<div className="mt-auto flex items-center text-xs font-medium text-zinc-900 group-hover:translate-x-1 transition-transform w-fit">
                        Watch Segment <iconify-icon className="ml-1" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</a>

<a className="min-w-[300px] md:min-w-[340px] snap-start bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group flex flex-col" href="#">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium tracking-tighter text-zinc-600">BT</span>
<div className="h-px bg-zinc-200 flex-grow"></div>
<span className="text-xs text-zinc-400">Cover Story</span>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors leading-snug">Top 50 Wealth Tech Innovators 2023</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-4 flex-grow">1 Finance recognized for pioneering transparent advisory frameworks in the annual tech issue.</p>
<div className="mt-auto flex items-center text-xs font-medium text-zinc-900 group-hover:translate-x-1 transition-transform w-fit">
                        Read Article <iconify-icon className="ml-1" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</a>

<a className="min-w-[300px] md:min-w-[340px] snap-start bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group flex flex-col" href="#">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium tracking-tighter text-zinc-600">MC</span>
<div className="h-px bg-zinc-200 flex-grow"></div>
<span className="text-xs text-zinc-400">Podcast</span>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors leading-snug">Money Matters: Episode 42</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-4 flex-grow">A deep dive into tax-saving strategies for the upcoming financial year with our lead advisor.</p>
<div className="mt-auto flex items-center text-xs font-medium text-zinc-900 group-hover:translate-x-1 transition-transform w-fit">
                        Listen Now <iconify-icon className="ml-1" height="14" icon="solar:play-circle-linear" width="14"></iconify-icon>
</div>
</a>

<a className="min-w-[200px] snap-start rounded-2xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all group" href="#">
<div className="w-10 h-10 rounded-full bg-zinc-100 group-hover:bg-zinc-50 flex items-center justify-center mb-3 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight">View All Archive</span>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-10">
<div className="text-center mb-12">
<h2 className="text-2xl tracking-tight font-medium text-zinc-900 mb-3">Moments &amp; Events</h2>
<p className="text-sm text-zinc-500">A visual timeline of key milestones.</p>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative rounded-2xl overflow-hidden bg-zinc-100 group cursor-zoom-in">

<div className="aspect-[3/4] w-full skeleton"></div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-6">
<div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<p className="text-white font-medium text-sm drop-shadow-md">Global Fintech Fest 2023</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-2xl overflow-hidden bg-zinc-100 group cursor-zoom-in">
<div className="aspect-square w-full skeleton"></div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-6">
<div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<p className="text-white font-medium text-sm drop-shadow-md">Office Expansion, Mumbai</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-2xl overflow-hidden bg-zinc-100 group cursor-zoom-in">
<div className="aspect-[4/3] w-full skeleton"></div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-6">
<div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<p className="text-white font-medium text-sm drop-shadow-md">Team Offsite 2023</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-2xl overflow-hidden bg-zinc-100 group cursor-zoom-in">
<div className="aspect-[4/5] w-full skeleton"></div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-6">
<div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
<p className="text-white font-medium text-sm drop-shadow-md">Awards Night</p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
