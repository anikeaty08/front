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



    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

      // Simple dropdown toggles
      const toggleMenu = (btn, menu) => {
        const button = document.getElementById(btn);
        const panel = document.getElementById(menu);
        if (!button || !panel) return;

        const close = () => panel.classList.add('hidden');

        button.addEventListener('click', (e) => {
          e.stopPropagation();
          panel.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
          if (!panel.contains(e.target) && !button.contains(e.target)) {
            close();
          }
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') close();
        });
      };

      toggleMenu('marketsDropdownButton', 'marketsDropdownMenu');
      toggleMenu('accountMenuButton', 'accountMenu');

      // Tabs
      const tabTriggers = document.querySelectorAll('.tab-trigger');
      const showPanel = (id) => {
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
        const panel = document.getElementById(id);
        if (panel) panel.classList.remove('hidden');

        tabTriggers.forEach(t => {
          if (t.getAttribute('data-tab-target') === id) {
            t.classList.add('bg-white','shadow-sm','text-slate-700','font-medium');
            t.classList.remove('text-slate-600');
          } else {
            t.classList.remove('bg-white','shadow-sm','text-slate-700','font-medium');
            t.classList.add('text-slate-600');
          }
        });
      };

      tabTriggers.forEach(t => {
        t.addEventListener('click', () => showPanel(t.getAttribute('data-tab-target')));
      });

      // Default active tab
      showPanel('tab-sectors');
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
      

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a aria-label="Home" className="flex items-center gap-2 group" href="https://markets.financialcontent.com/stocks">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-xs tracking-tight font-medium">FC</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-slate-900 group-hover:text-slate-700">Markets</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 text-sm font-medium rounded-md text-slate-800 bg-slate-100 hover:bg-slate-200 hover:text-slate-900" href="http://0.0.0.0:10006/stocks/markets">Markets</a>
<a className="px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="http://0.0.0.0:10006/stocks/stocks">Stocks</a>
<a className="px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="http://0.0.0.0:10006/stocks/funds">ETFs</a>
<a className="px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900" href="http://0.0.0.0:10006/stocks/user/login">Tools</a>
</nav>

<form action="http://0.0.0.0:10006/stocks/quote" className="flex-1 max-w-md ml-4 hidden md:flex" method="get">
<label className="relative w-full">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-slate-400" data-lucide="search"></i>
<input className="w-full h-10 pl-9 pr-28 rounded-md border border-slate-300 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400 transition" name="Symbol" placeholder="Search symbol or company (e.g., AAPL, NVDA, SPY)" type="text"/>
<button className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 transition" type="submit">Get Quote</button>
</label>
</form>

<div className="flex items-center gap-2">
<form action="http://0.0.0.0:10006/stocks/quote" className="flex md:hidden items-center" method="get">
<label className="relative">
<i className="absolute left-2 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-slate-400" data-lucide="search"></i>
<input className="w-32 h-9 pl-8 pr-2 rounded-md border border-slate-300 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400 transition" name="Symbol" placeholder="Quote" type="text"/>
</label>
</form>

<div className="relative">
<button className="h-9 px-2 md:px-3 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none" id="accountMenuButton">
<i className="h-4 w-4" data-lucide="user"></i>
<span className="hidden md:inline text-sm font-medium">Account</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg hidden" id="accountMenu">
<div className="px-3 py-2 border-b border-slate-100">
<div className="text-sm font-medium text-slate-900 tracking-tight">Welcome</div>
<div className="text-xs text-slate-500">Sign in or manage your account</div>
</div>
<ul className="py-1 text-sm">
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/user/login">Sign In</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/user/watchlist">My Watchlist</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/user/recentquotes">Recent Quotes</a></li>
</ul>
</div>
</div>
</div>
</div>

<div className="py-2">
<div className="relative inline-block">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50" id="marketsDropdownButton">
<i className="h-4 w-4" data-lucide="layout-grid"></i>
<span className="font-medium">Markets</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="absolute z-10 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg hidden" id="marketsDropdownMenu">
<ul className="py-1 text-sm">
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/markets">Overview</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/markets/news">News</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/currencies">Currencies</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/markets/international">International</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/markets/treasury">Treasuries</a></li>
</ul>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-6 pb-3">

<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
            Recent Quotes
            <i className="h-4 w-4 text-slate-400 group-hover:text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-slate-200 rounded-lg shadow-lg w-80">
<ul className="py-1 text-sm">
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AGOOG">Alphabet-C</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AAAPL">Apple</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AAPLD">Applied Digital Corporation - Common Stock</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3ABB">BlackBerry Limited Common Stock</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AENOV">Enovis Corporation Common Stock</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CY%3AGOLD">Gold</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AIBKR">Interactive Brokers Group, Inc. - Class A Common Stock</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIBM">International Business Machines</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3ACOMP">Nasdaq Composite</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3ADIA">SPDR Dow Jones Industrial Average ETF</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CBOE%3ASPX">Standard &amp; Poors 500</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CIX%3AWRAL30">WRALTechWire 30</a></li>
</ul>
<div className="border-t border-slate-200">
<a className="block px-3 py-2 text-sky-700 hover:bg-slate-50 font-medium" href="http://0.0.0.0:10006/stocks/user/recentquotes">View Full List</a>
</div>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
            My Watchlist
            <i className="h-4 w-4 text-slate-400 group-hover:text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-slate-200 rounded-lg shadow-lg w-64">
<ul className="py-1 text-sm">
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/user/watchlist">Create Watchlist</a></li>
</ul>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
            Indicators
            <i className="h-4 w-4 text-slate-400 group-hover:text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-slate-200 rounded-lg shadow-lg w-56">
<ul className="py-1 text-sm">
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=DJI%3ADJI">DJI</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3ACOMP">Nasdaq Composite</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CBOE%3ASPX">Standard &amp; Poors 500</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CY%3AGOLD">Gold</a></li>
<li><a className="block px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CY%3AOIL">Crude Oil</a></li>
</ul>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<section className="lg:col-span-8 space-y-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Market Indicators</h2>
</div>
<div className="p-4 sm:p-5">
<div className="w-full overflow-hidden rounded-lg border border-slate-200">
<img alt="DJIA ETF Chart" className="w-full h-40 object-contain bg-white" src="http://chart.financialcontent.com/Chart?shcolor=BBBBBB&amp;gbcolor=FFFFFF&amp;lncolor=2466BA&amp;type=0&amp;arcolor=null&amp;fillshx=0&amp;volume=0&amp;txcolor=444444&amp;ticker=NY%3ADIA&amp;output=svg&amp;vucolor=008000&amp;Client=stocks&amp;ibcolor=null&amp;height=160&amp;grcolor=FFFFFF&amp;width=640&amp;gmcolor=DDDDDD&amp;bvcolor=FFFFFF&amp;brcolor=FFFFFF&amp;gtcolor=2466BA&amp;fillalpha=0&amp;fillshy=0&amp;interval=1&amp;bgcolor=null&amp;mkcolor=CD5252&amp;lnwidth=2&amp;itcolor=666666&amp;shwidth=3&amp;vdcolor=FF0000&amp;pvcolor=B50000"/>
</div>
<div className="mt-4 overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left text-slate-600">
<th className="py-2 pr-3 font-medium">Name</th>
<th className="py-2 px-3 font-medium text-right">Price</th>
<th className="py-2 px-3 font-medium text-right">Change</th>
<th className="py-2 pl-3 font-medium text-right">% Change</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3">
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3ADIA">DJIA ETF</a>
</td>
<td className="py-2 px-3 text-right tabular-nums">469.22</td>
<td className="py-2 px-3 text-right text-emerald-600 flex items-center justify-end gap-1">
<i className="h-4 w-4" data-lucide="trending-up"></i><span>+2.20</span>
</td>
<td className="py-2 pl-3 text-right text-emerald-600">+0.47%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3ASPY">S&amp;P ETF</a></td>
<td className="py-2 px-3 text-right tabular-nums">671.29</td>
<td className="py-2 px-3 text-right text-rose-600 flex items-center justify-end gap-1">
<i className="h-4 w-4" data-lucide="trending-down"></i><span>-0.01</span>
</td>
<td className="py-2 pl-3 text-right text-rose-600">-0.00%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AQQQ">QQQ</a></td>
<td className="py-2 px-3 text-right tabular-nums">611.38</td>
<td className="py-2 px-3 text-right text-rose-600 flex items-center justify-end gap-1">
<i className="h-4 w-4" data-lucide="trending-down"></i><span>-0.16</span>
</td>
<td className="py-2 pl-3 text-right text-rose-600">-0.03%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3">
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CY%3AGOLD">Gold</a>
<span className="ml-2 text-[10px] text-slate-500 align-middle">RT</span>
</td>
<td className="py-2 px-3 text-right tabular-nums">4,084.90</td>
<td className="py-2 px-3 text-right text-rose-600 flex items-center justify-end gap-1">
<i className="h-4 w-4" data-lucide="trending-down"></i><span>-24.20</span>
</td>
<td className="py-2 pl-3 text-right text-rose-600">-0.59%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3">
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=CY%3AOIL">Oil</a>
<span className="ml-2 text-[10px] text-slate-500 align-middle">RT</span>
</td>
<td className="py-2 px-3 text-right tabular-nums">57.82</td>
<td className="py-2 px-3 text-right text-slate-600 flex items-center justify-end gap-1">
<i className="h-4 w-4" data-lucide="minus"></i><span>+0.00</span>
</td>
<td className="py-2 pl-3 text-right text-slate-600">0.00%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3">
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=DC%3ABITCOMP">Bitcoin</a>
<span className="ml-2 text-[10px] text-slate-500 align-middle">RT</span>
</td>
<td className="py-2 px-3 text-right tabular-nums">108,215.00</td>
<td className="py-2 px-3 text-right text-rose-600 flex items-center justify-end gap-1">
<i className="h-4 w-4" data-lucide="trending-down"></i><span>-2665.00</span>
</td>
<td className="py-2 pl-3 text-right text-rose-600">-2.40%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Market News</h2>
<a className="text-sm font-medium text-sky-700 hover:text-sky-800" href="http://0.0.0.0:10006/stocks/news/library/market%20news">View More</a>
</div>
<div className="p-4 sm:p-5 space-y-4">
<a className="group flex gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition" href="https://www.fool.com/investing/2025/10/21/2-rock-solid-dividend-stocks-with-room-to-grow/?source=financialcontent&amp;utm_source=financialcontent&amp;utm_medium=feed&amp;utm_campaign=article&amp;referring_guid=de2a6941-366a-48be-aa11-0b652ace9148" target="_blank">
<img alt="Headline image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/189101?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">2 Rock-Solid Dividend Stocks With Room to Grow</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 20:24 EDT • <span className="text-slate-700">The Motley Fool</span></div>
<div className="mt-2 flex flex-wrap gap-2 text-xs">
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">CVX</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">KO</span>
</div>
</div>
</a>
<a className="group flex gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition" href="https://www.fool.com/investing/2025/10/21/think-you-missed-the-boat-on-nvidia-heres-the-no-1/?source=financialcontent&amp;utm_source=financialcontent&amp;utm_medium=feed&amp;utm_campaign=article&amp;referring_guid=cf814167-2fc2-4e7d-bcb0-91b61b61e57c" target="_blank">
<img alt="Headline image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/189098?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">Think You Missed the Boat on Nvidia? Here's the No. 1 Reason It Could Keep Climbing.</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 20:10 EDT • <span className="text-slate-700">The Motley Fool</span></div>
<div className="mt-2 flex flex-wrap gap-2 text-xs">
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">Artificial Intelligence</span>
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">Earnings</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">NVDA</span>
</div>
</div>
</a>
<a className="group flex gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition" href="https://www.fool.com/investing/2025/10/21/is-bigbearai-stock-a-buy-now/?source=financialcontent&amp;utm_source=financialcontent&amp;utm_medium=feed&amp;utm_campaign=article&amp;referring_guid=815bbb83-2ab7-4b4e-bb3d-16ce64b2e70a" target="_blank">
<img alt="Headline image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/189089?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">Is BigBear.ai Stock a Buy Now?</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 20:07 EDT • <span className="text-slate-700">The Motley Fool</span></div>
<div className="mt-2 flex flex-wrap gap-2 text-xs">
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">Artificial Intelligence</span>
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">Government</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">BBAI</span>
</div>
</div>
</a>
<a className="group flex gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition" href="https://www.fool.com/investing/2025/10/21/3-unstoppable-growth-etfs-that-could-turn-10000-in/?source=financialcontent&amp;utm_source=financialcontent&amp;utm_medium=feed&amp;utm_campaign=article&amp;referring_guid=c99c2c28-d609-4953-afc3-b227ae80037b" target="_blank">
<img alt="Headline image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/189090?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">3 Unstoppable Growth ETFs That Could Turn $10,000 Into More Than $12 million</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 20:05 EDT • <span className="text-slate-700">The Motley Fool</span></div>
<div className="mt-2 flex flex-wrap gap-2 text-xs">
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">IVZ</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">QQQ</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">VGT</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">VTV</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">VUG</span>
</div>
</div>
</a>
<a className="group flex gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition" href="https://talkmarkets.com/content/stocks--equities/q4-macro--market-outlook?post=529656" target="_blank">
<img alt="Headline image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/1757?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">Q4 Macro &amp; Market Outlook</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 19:59 EDT • <span className="text-slate-700">Talk Markets</span></div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="lg:col-span-4 space-y-6">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm">

<div className="px-4 sm:px-5 pt-3">
<div className="flex items-center gap-1 rounded-md border border-slate-200 p-1 bg-slate-50">
<button className="tab-trigger px-3 py-1.5 rounded-md text-sm font-medium text-slate-700 bg-white shadow-sm" data-tab-target="tab-sectors">Sectors</button>
<button className="tab-trigger px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-slate-800" data-tab-target="tab-currencies">Currencies</button>
<button className="tab-trigger px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-slate-800" data-tab-target="tab-world">World</button>
<button className="tab-trigger px-3 py-1.5 rounded-md text-sm text-slate-600 hover:text-slate-800" data-tab-target="tab-recent">Recent</button>
</div>
</div>
<div className="border-t border-slate-200 mt-3"></div>

<div className="p-4 sm:p-5">

<div className="tab-panel" id="tab-sectors">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Sector ETFs</h2>
<a className="text-sm font-medium text-sky-700 hover:text-sky-800" href="http://0.0.0.0:10006/stocks/sectors">More Sectors</a>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left text-slate-600">
<th className="py-2 pr-3 font-medium">Sector</th>
<th className="py-2 px-3 font-medium text-right">% Change</th>
<th className="py-2 pl-3 font-medium text-right">YTD %</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYM">Basic Materials</a></td>
<td className="py-2 px-3 text-right text-rose-600">-1.94%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+14.25%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYK">Consumer Goods</a></td>
<td className="py-2 px-3 text-right text-rose-600">-0.30%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+5.90%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYE">Energy</a></td>
<td className="py-2 px-3 text-right text-rose-600">-0.24%</td>
<td className="py-2 pl-3 text-right text-rose-600">-0.09%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYG">Financial Services</a></td>
<td className="py-2 px-3 text-right text-rose-600">-0.25%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+13.26%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYH">Healthcare</a></td>
<td className="py-2 px-3 text-right text-emerald-600">+0.20%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+4.83%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYJ">Industrial</a></td>
<td className="py-2 px-3 text-right text-emerald-600">+1.00%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+11.24%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYW">Technology</a></td>
<td className="py-2 px-3 text-right text-emerald-600">+0.02%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+25.16%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIYZ">Telecom</a></td>
<td className="py-2 px-3 text-right text-rose-600">-0.59%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+21.29%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3"><a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIDU">Utilities</a></td>
<td className="py-2 px-3 text-right text-rose-600">-1.00%</td>
<td className="py-2 pl-3 text-right text-emerald-600">+18.17%</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-panel hidden" id="tab-currencies">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Currencies</h2>
<a className="text-sm font-medium text-sky-700 hover:text-sky-800" href="http://0.0.0.0:10006/stocks/currencies">More Currencies</a>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<a className="group flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 hover:bg-slate-50 transition" href="http://0.0.0.0:10006/stocks/quote?Symbol=FOREX%3AEUR-USD">
<img alt="EU" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_eu.png"/>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-800 group-hover:text-slate-900">Euro to Dollar</div>
<div className="text-xs text-slate-500"><b className="font-medium">1</b> to <b className="font-medium">1.1605</b></div>
</div>
<i className="ml-auto h-5 w-5 text-slate-300" data-lucide="flag"></i>
<img alt="USA" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_usa.png"/>
</a>
<a className="group flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 hover:bg-slate-50 transition" href="http://0.0.0.0:10006/stocks/quote?Symbol=FOREX%3AUSD-JPY">
<img alt="USA" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_usa.png"/>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-800 group-hover:text-slate-900">Dollar to Yen</div>
<div className="text-xs text-slate-500"><b className="font-medium">1</b> to <b className="font-medium">151.644</b></div>
</div>
<i className="ml-auto h-5 w-5 text-slate-300" data-lucide="flag"></i>
<img alt="Japan" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_japan.png"/>
</a>
<a className="group flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 hover:bg-slate-50 transition" href="http://0.0.0.0:10006/stocks/quote?Symbol=FOREX%3AGBP-USD">
<img alt="UK" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_great_britain.png"/>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-800 group-hover:text-slate-900">GBP to Dollar</div>
<div className="text-xs text-slate-500"><b className="font-medium">1</b> to <b className="font-medium">1.3372</b></div>
</div>
<i className="ml-auto h-5 w-5 text-slate-300" data-lucide="flag"></i>
<img alt="USA" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_usa.png"/>
</a>
<a className="group flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 hover:bg-slate-50 transition" href="http://0.0.0.0:10006/stocks/quote?Symbol=FOREX%3AUSD-CAD">
<img alt="USA" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_usa.png"/>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-800 group-hover:text-slate-900">Dollar to CAD</div>
<div className="text-xs text-slate-500"><b className="font-medium">1</b> to <b className="font-medium">1.4014</b></div>
</div>
<i className="ml-auto h-5 w-5 text-slate-300" data-lucide="flag"></i>
<img alt="Canada" className="h-6 w-6" src="https://images.financialcontent.com/studio-5.0/flags/32x32/shadow/flag_canada.png"/>
</a>
</div>
</div>

<div className="tab-panel hidden" id="tab-world">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">World Markets</h2>
<a className="text-sm font-medium text-sky-700 hover:text-sky-800" href="http://0.0.0.0:10006/stocks/markets/international">More</a>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left text-slate-600">
<th className="py-2 pr-3 font-medium">Index</th>
<th className="py-2 px-3 font-medium text-right">Price</th>
<th className="py-2 px-3 font-medium text-right">Change</th>
<th className="py-2 pl-3 font-medium text-right">% Change</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3 flex items-center gap-2">
<img alt="UK" className="h-4 w-4" src="https://images.financialcontent.com/studio-5.0/flags/16x16/shadow/flag_great_britain.png"/>
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=IX%3AFTSE">FTSE</a>
</td>
<td className="py-2 px-3 text-right tabular-nums">9,426.99</td>
<td className="py-2 px-3 text-right text-emerald-600">+23.42</td>
<td className="py-2 pl-3 text-right text-emerald-600">+0.25%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3 flex items-center gap-2">
<img alt="EU" className="h-4 w-4" src="https://images.financialcontent.com/studio-5.0/flags/16x16/shadow/flag_eu.png"/>
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=IX%3APARI">CAC</a>
</td>
<td className="py-2 px-3 text-right tabular-nums">5,045.84</td>
<td className="py-2 px-3 text-right text-emerald-600">+15.27</td>
<td className="py-2 pl-3 text-right text-emerald-600">+0.30%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3 flex items-center gap-2">
<img alt="Japan" className="h-4 w-4" src="https://images.financialcontent.com/studio-5.0/flags/16x16/shadow/flag_japan.png"/>
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=IX%3AN225">NIKKEI</a>
</td>
<td className="py-2 px-3 text-right tabular-nums">49,316.06</td>
<td className="py-2 px-3 text-right text-emerald-600">+130.56</td>
<td className="py-2 pl-3 text-right text-emerald-600">+0.27%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3 flex items-center gap-2">
<img alt="Hong Kong" className="h-4 w-4" src="https://images.financialcontent.com/studio-5.0/flags/16x16/shadow/flag_hong_kong.png"/>
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=IX%3AHSI">HSI</a>
</td>
<td className="py-2 px-3 text-right tabular-nums">26,027.55</td>
<td className="py-2 px-3 text-right text-emerald-600">+168.72</td>
<td className="py-2 pl-3 text-right text-emerald-600">+0.65%</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2 pr-3 flex items-center gap-2">
<img alt="Canada" className="h-4 w-4" src="https://images.financialcontent.com/studio-5.0/flags/16x16/shadow/flag_canada.png"/>
<a className="text-slate-800 hover:text-sky-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=TSX%3A0000">S&amp;P/TSX</a>
</td>
<td className="py-2 px-3 text-right tabular-nums">29,888.82</td>
<td className="py-2 px-3 text-right text-rose-600">-527.62</td>
<td className="py-2 pl-3 text-right text-rose-600">-1.73%</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-panel hidden" id="tab-recent">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Recent Quotes</h2>
<a className="text-sm font-medium text-sky-700 hover:text-sky-800" href="http://0.0.0.0:10006/stocks/user/recentquotes">View Full List</a>
</div>
<ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 overflow-hidden">
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AGOOG">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      Alphabet-C
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AAAPL">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      Apple
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AAPLD">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      Applied Digital Corporation - Common Stock
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3ABB">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      BlackBerry Limited Common Stock
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AENOV">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      Enovis Corporation Common Stock
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NQ%3AIBKR">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      Interactive Brokers Group, Inc. - Class A Common Stock
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 text-slate-700" href="http://0.0.0.0:10006/stocks/quote?Symbol=NY%3AIBM">
<i className="h-4 w-4 text-slate-400" data-lucide="stock"></i>
                      International Business Machines
                      <i className="ml-auto h-4 w-4 text-slate-300" data-lucide="chevron-right"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<section className="mt-8">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">More News</h2>
<a className="text-sm font-medium text-sky-700 hover:text-sky-800" href="http://0.0.0.0:10006/stocks/markets/news?type=Press+Release">View More</a>
</div>
<div className="p-4 sm:p-5 grid gap-4">
<a className="group flex gap-4 rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition" href="https://www.fool.com/investing/2025/10/21/3-unstoppable-growth-etfs-that-could-turn-10000-in/?source=financialcontent&amp;utm_source=financialcontent&amp;utm_medium=feed&amp;utm_campaign=article&amp;referring_guid=c99c2c28-d609-4953-afc3-b227ae80037b" target="_blank">
<img alt="More news image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/189090?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">3 Unstoppable Growth ETFs That Could Turn $10,000 Into More Than $12 million</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 20:05 EDT • <span className="text-slate-700">The Motley Fool</span></div>
<p className="mt-2 text-sm text-slate-700 line-clamp-2">Turning an initial $10,000 investment into $12 million is actually easier than it sounds.</p>
<div className="mt-2 flex flex-wrap gap-2 text-xs">
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">Artificial Intelligence</span>
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">ETFs</span>
<span className="px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700">Economy</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">IVZ</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">QQQ</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">VGT</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">VTV</span>
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">VUG</span>
</div>
</div>
</a>
<a className="group flex gap-4 rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition" href="https://talkmarkets.com/content/stocks--equities/q4-macro--market-outlook?post=529656" target="_blank">
<img alt="More news image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/1757?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">Q4 Macro &amp; Market Outlook</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 19:59 EDT • <span className="text-slate-700">Talk Markets</span></div>
<p className="mt-2 text-sm text-slate-700 line-clamp-2">We discuss Q4 macro and market outlooks, as well as where the biggest opportunities are right now.</p>
</div>
</a>
<a className="group flex gap-4 rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition" href="https://talkmarkets.com/content/stocks--equities/10-high-dividend-stocks-trading-near-52-week-lows?post=529650" target="_blank">
<img alt="More news image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/190?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">10 High Dividend Stocks Trading Near 52 Week Lows</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 18:42 EDT • <span className="text-slate-700">Talk Markets</span></div>
<p className="mt-2 text-sm text-slate-700 line-clamp-2">High dividend stocks can contribute a significant portion of a stock’s total return.</p>
</div>
</a>
<a className="group flex gap-4 rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition" href="https://talkmarkets.com/content/stocks--equities/the-right-way-to-own-small-cap-stocks?post=529649" target="_blank">
<img alt="More news image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/353?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">The Right Way To Own Small Cap Stocks</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 18:33 EDT • <span className="text-slate-700">Talk Markets</span></div>
<p className="mt-2 text-sm text-slate-700 line-clamp-2">There is something exciting about owning a lot of shares of a low-priced, very small company.</p>
</div>
</a>
<a className="group flex gap-4 rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition" href="https://www.fool.com/investing/2025/10/21/should-you-buy-netflix-stock-before-this-huge-inve/?source=financialcontent&amp;utm_source=financialcontent&amp;utm_medium=feed&amp;utm_campaign=article&amp;referring_guid=be8c3008-e528-4fd7-a9ab-38427f6dd1c4" target="_blank">
<img alt="More news image" className="h-20 w-28 object-cover rounded-md border border-slate-200" src="https://cdn.newsrpm.com/image/189091?maxWidth=300"/>
<div className="min-w-0">
<div className="flex items-start justify-between gap-3">
<h3 className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 tracking-tight">Should You Buy Netflix Stock Before This Huge Investor Update?</h3>
<i className="h-4 w-4 text-slate-400 flex-shrink-0" data-lucide="external-link"></i>
</div>
<div className="mt-1 text-xs text-slate-500">Today 20:04 EDT • <span className="text-slate-700">The Motley Fool</span></div>
<p className="mt-2 text-sm text-slate-700 line-clamp-2">Netflix is scheduled to provide an investor update that could have huge implications for shareholders.</p>
<div className="mt-2 flex flex-wrap gap-2 text-xs">
<span className="px-2 py-1 rounded border border-emerald-200 bg-emerald-50 text-emerald-700">NFLX</span>
</div>
</div>
</a>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<a aria-label="FinancialContent" className="flex items-center gap-2" href="https://markets.financialcontent.com/stocks">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-xs tracking-tight font-medium">FC</div>
<span className="text-base font-medium tracking-tight text-slate-900">FinancialContent</span>
</a>
<div className="text-sm leading-6 text-slate-600">
          Stock Quote API &amp; Stock News API supplied by
          <a className="text-sky-700 hover:text-sky-800 font-medium" href="https://www.cloudquote.io">www.cloudquote.io</a><br/>
          Quotes delayed at least 20 minutes.<br/>
          By accessing this page, you agree to the
          <a className="text-sky-700 hover:text-sky-800 font-medium" href="https://www.financialcontent.com/privacy" target="_blank">Privacy Policy</a>
          and
          <a className="text-sky-700 hover:text-sky-800 font-medium" href="https://www.financialcontent.com/tos" target="_blank">Terms Of Service</a>.
        </div>
<div className="flex items-center gap-2">
<a aria-label="X" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900" href="https://x.com/fincontent" target="_blank">
<i className="h-5 w-5" data-lucide="twitter"></i>
</a>
<a aria-label="Facebook" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900" href="https://www.facebook.com/financialcontent/" target="_blank">
<i className="h-5 w-5" data-lucide="facebook"></i>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900" href="https://www.linkedin.com/company/financialcontent-inc." target="_blank">
<i className="h-5 w-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Instagram" className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900" href="https://www.instagram.com/financialcontent_com" target="_blank">
<i className="h-5 w-5" data-lucide="instagram"></i>
</a>
</div>
</div>
<div className="text-center text-xs text-slate-500">© 2025 FinancialContent. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
