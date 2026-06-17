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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }

        // Optional: Refresh button subtle feedback
        const refreshBtn = document.querySelector('button i[data-lucide="refresh-ccw"]')?.parentElement;
        if (refreshBtn) {
          refreshBtn.addEventListener('click', () => {
            refreshBtn.classList.add('ring-4','ring-blue-100');
            setTimeout(() => refreshBtn.classList.remove('ring-4','ring-blue-100'), 350);
          });
        }
      });
    
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
      

<header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-200/80 bg-white/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white font-semibold tracking-tight">FC</div>
<span className="text-neutral-800 text-lg sm:text-xl tracking-tight" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope, ui-sans-serif', fontWeight: '600'}}>
              Markets
            </span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-layout-grid" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg><span>Markets</span>
</a>
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-line-chart" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg><span>Stocks</span>
</a>
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-boxes" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg><span>ETFs</span>
</a>
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-wrench" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg><span>Tools</span>
</a>
</nav>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center">
<label className="sr-only">Get Quote</label>
<div className="relative group">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-56 md:w-72 pl-10 pr-3 h-9 rounded-md bg-white border border-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" placeholder="Search symbol (e.g., AAPL)" type="text"/>
</div>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 active:bg-blue-700 transition-colors">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg><span>Sign In</span>
</button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 hover:border-neutral-300 bg-white">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

<div className="mb-6 sm:mb-8">
<div className="flex items-center gap-2 text-sm text-neutral-500">
<a className="hover:text-neutral-700" href="#">Home</a>
<span>/</span>
<a className="hover:text-neutral-700" href="#">Markets</a>
<span>/</span>
<span className="text-neutral-700">Overview</span>
</div>
<div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="">
<h1 className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope, ui-sans-serif', fontWeight: '600'}}>
              Markets Overview
            </h1>
<p className="text-sm text-neutral-600 mt-1">
              Real-time quotes, news, and indicators across major indices, sectors, and currencies.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-neutral-900 transition-colors">
<svg className="lucide lucide-refresh-ccw" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg><span className="text-sm">Refresh</span>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition-colors">
<svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg><span className="text-sm">Alerts</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_28rem] gap-6">

<section className="space-y-6">

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm" id="major-indices-widget">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-start sm:items-center justify-between gap-4">
<div className="">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope, ui-sans-serif', fontWeight: '600'}}>
                  Major Indices
                </h2>
<div className="mt-1 flex items-center gap-3 text-xs text-neutral-500">
<span className="inline-flex items-center gap-1 text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Market open
                  </span>
<span className="">Updated 1m ago</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex items-center rounded-md bg-neutral-100 p-0.5">
<button className="h-8 px-2.5 rounded-[6px] text-xs font-medium bg-blue-600 text-white" data-timeframe="1D">1D</button>
<button className="h-8 px-2.5 rounded-[6px] text-xs font-medium text-neutral-700" data-timeframe="1W">1W</button>
<button className="h-8 px-2.5 rounded-[6px] text-xs font-medium text-neutral-700" data-timeframe="1M">1M</button>
</div>
<a className="hidden sm:inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700" href="#">
                  Heatmap <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
<div className="sm:p-5 pt-4 pr-4 pb-4 pl-4" id="aura-emfn8go1w">
<div className="divide-y divide-neutral-200">

<div className="py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap" data-change="-0.06" data-high="451.0" data-low="446.5" data-price="449.16" data-symbol="DIA" id="aura-emfn8gl02">
<div className="min-w-[180px] flex-1">
<div className="inline-flex items-center gap-2">
<div className="text-sm font-medium text-neutral-800">DJIA ETF</div>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-600">DIA</span>
</div>
<div className="mt-1 sm:hidden text-[11px] text-neutral-500 inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg> Delayed 20m
        </div>
</div>
<div className="flex items-baseline gap-2 min-w-[132px]">
<div className="text-lg sm:text-xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>449.16</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-0.26</span>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 min-w-[72px]">
<svg className="h-4 w-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>-0.06%
      </div>
<div className="hidden sm:flex sm:flex-col flex-1 min-w-[200px]">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>446.5</span><span>Day</span><span>451.0</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
<div className="hidden sm:block w-28">
<canvas className="sparkline h-12 w-full"></canvas>
</div>
<div className="w-full sm:hidden mt-2">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>446.5</span><span>Day</span><span>451.0</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
</div>

<div className="py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap" data-change="0.01" data-high="647.2" data-low="640.0" data-price="644.95" data-symbol="SPY">
<div className="min-w-[180px] flex-1">
<div className="inline-flex items-center gap-2">
<div className="text-sm font-medium text-neutral-800">S&amp;P 500 ETF</div>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-600">SPY</span>
</div>
<div className="mt-1 sm:hidden text-[11px] text-neutral-500 inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg> Delayed 20m
        </div>
</div>
<div className="flex items-baseline gap-2 min-w-[132px]">
<div className="text-lg sm:text-xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>644.95</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-100">+0.06</span>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-green-600 min-w-[72px]">
<svg className="h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>+0.01%
      </div>
<div className="hidden sm:flex sm:flex-col flex-1 min-w-[200px]">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>640.0</span><span>Day</span><span>647.2</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-emerald-500/80" style={{width: '50%'}}></div>
</div>
</div>
<div className="hidden sm:block w-28">
<canvas className="sparkline h-12 w-full"></canvas>
</div>
<div className="w-full sm:hidden mt-2">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>640.0</span><span>Day</span><span>647.2</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-emerald-500/80" style={{width: '50%'}}></div>
</div>
</div>
</div>

<div className="py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap" data-change="-0.08" data-high="582.4" data-low="574.0" data-price="579.89" data-symbol="QQQ">
<div className="min-w-[180px] flex-1">
<div className="inline-flex items-center gap-2">
<div className="text-sm font-medium text-neutral-800">NASDAQ QQQ</div>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-600">QQQ</span>
</div>
<div className="mt-1 sm:hidden text-[11px] text-neutral-500 inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg> Delayed 20m
        </div>
</div>
<div className="flex items-baseline gap-2 min-w-[132px]">
<div className="text-lg sm:text-xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>579.89</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-0.45</span>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 min-w-[72px]">
<svg className="h-4 w-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>-0.08%
      </div>
<div className="hidden sm:flex sm:flex-col flex-1 min-w-[200px]">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>574.0</span><span>Day</span><span>582.4</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
<div className="hidden sm:block w-28">
<canvas className="sparkline h-12 w-full"></canvas>
</div>
<div className="w-full sm:hidden mt-2">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>574.0</span><span>Day</span><span>582.4</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
</div>

<div className="py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap" data-change="-0.08" data-high="3391.4" data-low="3375.1" data-price="3380.50" data-symbol="XAU">
<div className="min-w-[180px] flex-1">
<div className="inline-flex items-center gap-2">
<div className="text-sm font-medium text-neutral-800">Gold</div>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-600">XAU</span>
</div>
</div>
<div className="flex items-baseline gap-2 min-w-[132px]">
<div className="text-lg sm:text-xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>3,380.50</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-2.70</span>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 min-w-[72px]">
<svg className="h-4 w-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>-0.08%
      </div>
<div className="hidden sm:flex sm:flex-col flex-1 min-w-[200px]">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>3375.1</span><span>Day</span><span>3391.4</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
<div className="hidden sm:block w-28">
<canvas className="sparkline h-12 w-full"></canvas>
</div>
<div className="w-full sm:hidden mt-2">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>3375.1</span><span>Day</span><span>3391.4</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
</div>

<div className="py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap" data-change="-0.11" data-high="64.3" data-low="63.2" data-price="63.89" data-symbol="CL">
<div className="min-w-[180px] flex-1">
<div className="inline-flex items-center gap-2">
<div className="text-sm font-medium text-neutral-800">Crude Oil</div>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-600">CL</span>
</div>
</div>
<div className="flex items-baseline gap-2 min-w-[132px]">
<div className="text-lg sm:text-xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>63.89</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-0.07</span>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 min-w-[72px]">
<svg className="h-4 w-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>-0.11%
      </div>
<div className="hidden sm:flex sm:flex-col flex-1 min-w-[200px]">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>63.2</span><span>Day</span><span>64.3</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
<div className="hidden sm:block w-28">
<canvas className="sparkline h-12 w-full"></canvas>
</div>
<div className="w-full sm:hidden mt-2">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>63.2<span>Day</span><span>64.3</span>
</span></div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-red-500/70" style={{width: '50%'}}></div>
</div>
</div>
</div>

<div className="py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap" data-change="0.52" data-high="119300" data-low="117100" data-price="118589" data-symbol="BTC">
<div className="min-w-[180px] flex-1">
<div className="inline-flex items-center gap-2">
<div className="text-sm font-medium text-neutral-800">Bitcoin</div>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-600">BTC</span>
</div>
</div>
<div className="flex items-baseline gap-2 min-w-[132px]">
<div className="text-lg sm:text-xl tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>118,589.00</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-100">+614.00</span>
</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-green-600 min-w-[72px]">
<svg className="h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>+0.52%
      </div>
<div className="hidden sm:flex sm:flex-col flex-1 min-w-[200px]">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>117.1k</span><span>Day</span><span>119.3k</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-emerald-500/80" style={{width: '50%'}}></div>
</div>
</div>
<div className="hidden sm:block w-28">
<canvas className="sparkline h-12 w-full"></canvas>
</div>
<div className="w-full sm:hidden mt-2">
<div className="flex items-center justify-between text-[11px] text-neutral-500">
<span>117.1k</span><span>Day</span><span>119.3k</span>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-1.5 rounded-full bg-emerald-500/80" style={{width: '50%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>Market News</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                View more <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<ul className="divide-y divide-neutral-200">

<li className="p-4 sm:p-5 hover:bg-neutral-50 transition-colors">
<a className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4" href="#">
<div className="">
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Today</span>
<span className="text-xs text-neutral-500">19:25 EDT</span>
</div>
<h3 className="mt-2 text-base sm:text-lg tracking-tight text-neutral-900 line-clamp-2" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>
                      Why Kratos Stock Bumped Higher Today
                    </h3>
<div className="mt-1 text-sm text-neutral-600 line-clamp-2">Defense contractor gains after upbeat guidance and bookings momentum.</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-500">
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-tags" data-lucide="tags" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"></path><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path><circle cx="10.5" cy="6.5" fill="currentColor" r=".5"></circle></svg><span>Ticker:</span>
<span className="text-neutral-700">KTOS</span>
</div>
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-newspaper" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg><span>Source:</span>
<span className="text-neutral-700">The Motley Fool</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
<img alt="Stock news thumbnail" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=1120&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</a>
</li>

<li className="p-4 sm:p-5 hover:bg-neutral-50 transition-colors">
<a className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4" href="#">
<div className="">
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Today</span>
<span className="text-xs text-neutral-500">19:09 EDT</span>
</div>
<h3 className="mt-2 text-base sm:text-lg tracking-tight text-neutral-900 line-clamp-2" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>
                      Texas Pacific Land Zooms 4% Higher on Royalty Upside
                    </h3>
<div className="mt-1 text-sm text-neutral-600 line-clamp-2">Higher energy volumes and strong pricing drive upside surprise.</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-500">
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-tags" data-lucide="tags" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"></path><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path><circle cx="10.5" cy="6.5" fill="currentColor" r=".5"></circle></svg><span>Ticker:</span>
<span className="text-neutral-700">TPL</span>
</div>
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-newspaper" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg><span>Source:</span>
<span className="text-neutral-700">The Motley Fool</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
<img alt="Market headline image" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</a>
</li>

<li className="p-4 sm:p-5 hover:bg-neutral-50 transition-colors">
<a className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4" href="#">
<div className="">
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Today</span>
<span className="text-xs text-neutral-500">19:05 EDT</span>
</div>
<h3 className="mt-2 text-base sm:text-lg tracking-tight text-neutral-900 line-clamp-2" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>
                      Invivyd Revenue Jumps 413% in Q2
                    </h3>
<div className="mt-1 text-sm text-neutral-600 line-clamp-2">Therapeutics maker surges on stronger commercial ramp and guidance hike.</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-500">
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-tags" data-lucide="tags" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"></path><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path><circle cx="10.5" cy="6.5" fill="currentColor" r=".5"></circle></svg><span>Ticker:</span>
<span className="text-neutral-700">IVVD</span>
</div>
<div className="inline-flex items-center gap-1">
<svg className="lucide lucide-newspaper" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg><span>Source:</span>
<span className="text-neutral-700">The Motley Fool</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
<img alt="Financial chart image" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&amp;w=1120&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</a>
</li>
</ul>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>Sector ETFs</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                More sectors <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="p-4 sm:p-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-neutral-600">
<tr className="border-b border-neutral-200">
<th className="py-2 pr-4 font-medium">Sector</th>
<th className="py-2 pr-4 font-medium">% Change</th>
<th className="py-2 font-medium">YTD %</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Basic Materials (IYM)</td>
<td className="py-2 pr-4 text-red-600">-0.58%</td>
<td className="py-2 text-green-700">+13.50%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Consumer Goods (IYK)</td>
<td className="py-2 pr-4 text-red-600">-0.65%</td>
<td className="py-2 text-green-700">+7.09%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Energy (IYE)</td>
<td className="py-2 pr-4 text-red-600">-0.11%</td>
<td className="py-2 text-red-600">-1.30%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Financial Services (IYG)</td>
<td className="py-2 pr-4 text-green-700">+0.62%</td>
<td className="py-2 text-green-700">+13.37%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Healthcare (IYH)</td>
<td className="py-2 pr-4 text-green-700">+0.46%</td>
<td className="py-2 text-red-600">-3.19%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Industrial (IYJ)</td>
<td className="py-2 pr-4 text-red-600">-0.73%</td>
<td className="py-2 text-green-700">+8.89%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Technology (IYW)</td>
<td className="py-2 pr-4 text-red-600">-0.23%</td>
<td className="py-2 text-green-700">+15.89%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Telecom (IYZ)</td>
<td className="py-2 pr-4 text-red-600">-1.36%</td>
<td className="py-2 text-green-700">+13.35%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Utilities (IDU)</td>
<td className="py-2 pr-4 text-red-600">-0.70%</td>
<td className="py-2 text-green-700">+13.08%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>World Markets</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                  More <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="p-4 sm:p-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-neutral-600">
<tr className="border-b border-neutral-200">
<th className="py-2 pr-4 font-medium">Index</th>
<th className="py-2 pr-4 font-medium">Price</th>
<th className="py-2 pr-4 font-medium">Change</th>
<th className="py-2 font-medium">% Chg</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">FTSE 100</td>
<td className="py-2 pr-4">9,177.24</td>
<td className="py-2 pr-4 text-green-700">+12.01</td>
<td className="py-2 text-green-700">+0.13%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">CAC 40</td>
<td className="py-2 pr-4">4,779.13</td>
<td className="py-2 pr-4 text-green-700">+32.98</td>
<td className="py-2 text-green-700">+0.69%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Nikkei 225</td>
<td className="py-2 pr-4">42,649.26</td>
<td className="py-2 pr-4 text-red-600">-625.41</td>
<td className="py-2 text-red-600">-1.45%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Hang Seng</td>
<td className="py-2 pr-4">25,519.32</td>
<td className="py-2 pr-4 text-red-600">-94.35</td>
<td className="py-2 text-red-600">-0.37%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">S&amp;P/TSX</td>
<td className="py-2 pr-4">27,915.99</td>
<td className="py-2 pr-4 text-red-600">-77.44</td>
<td className="py-2 text-red-600">-0.28%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>Currencies</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                  More currencies <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="p-4 sm:p-5">
<div className="grid grid-cols-1 gap-3">
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇪🇺</span>
<svg className="lucide lucide-arrow-right-left text-neutral-400" data-lucide="arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
<span className="text-xl">🇺🇸</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">Euro to Dollar</div>
<div className="text-xs text-neutral-500">1 → 1.1651</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇺🇸</span>
<svg className="lucide lucide-arrow-right-left text-neutral-400" data-lucide="arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
<span className="text-xl">🇯🇵</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">Dollar to Yen</div>
<div className="text-xs text-neutral-500">1 → 147.75</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇬🇧</span>
<svg className="lucide lucide-arrow-right-left text-neutral-400" data-lucide="arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
<span className="text-xl">🇺🇸</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">GBP to Dollar</div>
<div className="text-xs text-neutral-500">1 → 1.3529</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇺🇸</span>
<svg className="lucide lucide-arrow-right-left text-neutral-400" data-lucide="arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
<span className="text-xl">🇨🇦</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">Dollar to CAD</div>
<div className="text-xs text-neutral-500">1 → 1.3814</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="space-y-6">
<div className="bg-white border border-neutral-200 rounded-xl shadow-sm h-[92vh] lg:sticky lg:top-20 flex flex-col">
<div className="p-4 sm:p-5 border-b border-neutral-200">
<div className="flex items-start justify-between gap-3">
<div className="">
<h2 className="text-lg tracking-tight text-neutral-900 inline-flex items-center gap-2" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope', fontWeight: '600'}}>
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Market Timeline
                  </h2>
<p className="mt-1 text-xs text-neutral-500">AI stream of events, insights, and sponsored content personalized for you.</p>
<div className="mt-2 flex flex-wrap items-center gap-1.5">
<span className="text-[11px] px-2 py-0.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700">Based on: Tech</span>
<span className="text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">Growth</span>
<span className="text-[11px] px-2 py-0.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700">AI</span>
</div>

<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-blue-600 text-white text-xs">
<svg className="lucide lucide-asterisk" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg> All
                    </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 text-xs">
<svg className="lucide lucide-newspaper" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg> News
                    </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 text-xs">
<svg className="lucide lucide-bell-dot" data-lucide="bell-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path><circle cx="18" cy="8" r="3"></circle></svg> Alerts
                    </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 text-xs">
<svg className="lucide lucide-activity" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Macro
                    </button>
<button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 text-xs">
<svg className="lucide lucide-badge-dollar-sign" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg> Sponsored
                    </button>
</div>
</div>
<button className="shrink-0 inline-flex items-center gap-1 h-8 px-2.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-neutral-900 text-xs">
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg> Edit
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 sm:p-5">
<div className="space-y-4">

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-blue-500/10 border border-blue-200 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="max-w-full">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="text-sm text-neutral-800">
                        Good morning! Here’s what’s moving your watchlist right now.
                      </div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> NVDA +1.9%
                        </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-red-50 text-red-600 border border-red-100">
<svg className="lucide lucide-trending-down h-3.5 w-3.5" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg> TSLA -0.8%
                        </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> CPI at 8:30a ET
                        </span>
</div>
</div>
<div className="mt-1 text-xs text-neutral-500">2m ago</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-500/10 border border-emerald-200 text-emerald-600 flex items-center justify-center">
<svg className="lucide lucide-bell-dot" data-lucide="bell-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"></path><circle cx="18" cy="8" r="3"></circle></svg>
</div>
<div className="max-w-full">
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between gap-3">
<div className="text-sm text-neutral-900">
                          AAPL crossed above 50-DMA
                        </div>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">+2.1%</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Momentum building on above-average volume. Next level to watch: 195.30.</p>
<div className="mt-2 flex items-center gap-2">
<a className="text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                          View chart <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<button className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded-md border border-neutral-200 hover:border-neutral-300">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="M12 5v14"></path></svg> Alert
                        </button>
</div>
</div>
<div className="mt-1 text-xs text-neutral-500">8m ago • Based on your AAPL preference</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-violet-500/10 border border-violet-200 text-violet-600 flex items-center justify-center">
<svg className="lucide lucide-newspaper" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
</div>
<div className="max-w-full">
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="grid grid-cols-1 gap-3">
<div className="">
<div className="text-sm text-neutral-900">Chipmakers tick higher after upbeat AI server demand note</div>
<div className="mt-1 text-xs text-neutral-500">Source: Bloomberg • Tickers: NVDA, AMD, AVGO</div>
</div>
<div className="flex items-center gap-3">
<div className="aspect-[4/3] w-28 overflow-hidden rounded-md border border-neutral-200">
<img alt="Semiconductor news" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=840&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-neutral-600">Analysts highlight sustained order backlogs into next quarter; pricing remains firm.</p>
</div>
<div className="flex items-center gap-2">
<a className="text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">Read more <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>
</div>
<div className="mt-1 text-xs text-neutral-500">15m ago</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-amber-500/10 border border-amber-200 text-amber-600 flex items-center justify-center">
<svg className="lucide lucide-badge-dollar-sign" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div className="max-w-full">
<div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
<div className="flex items-center justify-between gap-2">
<div className="text-xs uppercase tracking-wide text-amber-700">Sponsored</div>
<span className="text-[11px] text-amber-700/80">Personalized</span>
</div>
<div className="mt-2 grid grid-cols-1 gap-3">
<div className="text-sm text-neutral-900">Get zero-commission options with advanced risk tools</div>
<div className="aspect-[16/9] w-full overflow-hidden rounded-md border border-amber-200">
<img alt="Broker promo" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-600">Suggested because you follow NVDA, TSLA</div>
<a className="inline-flex items-center gap-1 h-8 px-3 rounded-md bg-amber-600 text-white text-xs hover:bg-amber-700" href="#">
                            Learn more <i className="h-4 w-4" datai-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
<div className="mt-1 text-xs text-neutral-500">22m ago • Ad</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-cyan-500/10 border border-cyan-200 text-cyan-700 flex items-center justify-center">
<svg className="lucide lucide-activity" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="max-w-full">
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between gap-3">
<div className="text-sm text-neutral-900">US CPI data in 10 minutes</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-100">Macro</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Consensus: +0.2% m/m headline, +0.3% m/m core. Watch 10Y yields and USD reaction.</p>
<div className="mt-2 flex items-center gap-2">
<a className="text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                          Open calendar <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<button className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded-md border border-neutral-200 hover:border-neutral-300">
<svg className="lucide lucide-bell-plus" data-lucide="bell-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M15 8h6"></path><path d="M18 5v6"></path><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"></path></svg> Remind me
                        </button>
</div>
</div>
<div className="mt-1 text-xs text-neutral-500">28m ago</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-indigo-500/10 border border-indigo-200 text-indigo-700 flex items-center justify-center">
<svg className="lucide lucide-calendar-days" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<div className="max-w-full">
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between gap-3">
<div className="text-sm text-neutral-900">MSFT reports after the close</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">Earnings</span>
</div>
<div className="mt-1 text-sm text-neutral-600">Implied move: 4.1%. Key focus: Azure growth, AI attach, opex discipline.</div>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-neutral-50 text-neutral-700 border border-neutral-200">
<svg className="lucide lucide-ticket-percent h-3.5 w-3.5" data-lucide="ticket-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M9 9h.01"></path><path d="m15 9-6 6"></path><path d="M15 15h.01"></path></svg> IV: 32%
                        </span>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-100">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Est. Rev +12%
                        </span>
<a className="ml-auto text-xs text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                          Preview <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-1 text-xs text-neutral-500">43m ago</div>
</div>
</div>

<button className="w-full mt-2 inline-flex items-center justify-center gap-2 h-9 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 text-sm">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Load older updates
                </button>
</div>
</div>
</div>
</aside>
</div>

<footer className="mt-10 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white font-semibold tracking-tight">FC</div>
<div>
<div className="text-sm font-semibold text-neutral-900" style={{fontFamily: 'Geist, \'Geist Sans\', GeistSans, Manrope'}}>FinancialContent Markets</div>
<p className="text-xs text-neutral-500">Data delayed 15–20 minutes unless otherwise indicated.</p>
</div>
</div>
<nav className="flex flex-wrap items-center gap-4 text-sm">
<a className="text-neutral-600 hover:text-neutral-900" href="#">About</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#">Privacy</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#">Terms</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#">Disclaimers</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#">Contact</a>
</nav>
</div>
<div className="mt-6 text-xs text-neutral-500">
            This site is for informational purposes only and should not be considered investment advice. All investments involve risk, including loss of principal.
          </div>
</div>
</footer>
</main>



    </>
  );
}
