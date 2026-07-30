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



    // Light/Dark mode toggle
    function toggleTheme() {
      const html = document.documentElement;
      if (html.dataset.theme === 'dark') {
        html.classList.remove('bg-[#0F172A]', 'text-gray-200');
        html.classList.add('bg-white', 'text-gray-900');
        html.dataset.theme = 'light';
      } else {
        html.classList.remove('bg-white', 'text-gray-900');
        html.classList.add('bg-[#0F172A]', 'text-gray-200');
        html.dataset.theme = 'dark';
      }
    }
    // Mobile menu toggle
    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }
  
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
      

<nav className="w-full border-b border-[#1E293B] bg-[#0F172A] fixed top-0 z-40">
<div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
<div className="flex items-center">
<span className="heading-tight text-xl text-[#FACC15] tracking-tight">ForexIntel</span>
<div className="hidden md:flex ml-10 space-x-6">
<a className="hover:text-[#FACC15] transition" href="#features">Features</a>
<a className="hover:text-[#FACC15] transition" href="#news">News</a>
<a className="hover:text-[#FACC15] transition" href="#calendar">Calendar</a>
<a className="hover:text-[#FACC15] transition" href="#charts">Charts</a>
</div>
</div>
<div className="flex items-center space-x-3">
<button aria-label="Toggle Theme" className="p-2 rounded hover:bg-[#1E293B] text-[#FACC15] focus:outline-none" onClick={(e) => { toggleTheme() }}>
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v1m0 16v1m8.66-13.66l-.7.7m-13.44 13.44l-.7.7M21 12h-1M4 12H3m16.66 5.66l-.7-.7m-13.44-13.44l-.7-.7" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</button>
<a className="hidden md:inline-block px-4 py-2 rounded bg-[#FACC15] text-[#0F172A] font-medium hover:bg-[#e2b10a] transition" href="#login">Log In</a>
<a className="hidden md:inline-block px-4 py-2 rounded border border-[#FACC15] text-[#FACC15] font-medium hover:bg-[#1E293B] transition" href="#signup">Join Free</a>
<button aria-label="Toggle Menu" className="md:hidden p-2" onClick={(e) => { toggleMenu() }}>
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="hidden md:hidden bg-[#0F172A] px-4 pb-4 pt-2" id="mobile-menu">
<a className="block py-2" href="#features">Features</a>
<a className="block py-2" href="#news">News</a>
<a className="block py-2" href="#calendar">Calendar</a>
<a className="block py-2" href="#charts">Charts</a>
<a className="block py-2" href="#login">Log In</a>
<a className="block py-2 text-[#FACC15] font-bold" href="#signup">Join Free</a>
</div>

<div className="w-full bg-[#1E293B] py-2 border-t border-[#334155] overflow-x-auto no-scrollbar">
<div className="flex space-x-8 px-4 mono text-sm animate-pulse">
<span>BTC/USD <span className="text-[#22C55E]">+1.2%</span> 43,150</span>
<span>EUR/USD <span className="text-[#22C55E]">1.0850</span></span>
<span>GBP/USD <span className="text-[#EF4444]">-0.15%</span> 1.2450</span>
<span>USD/JPY <span className="text-[#22C55E]">+0.07%</span> 143.20</span>
<span>XAU/USD <span className="text-[#EF4444]">-0.8%</span> 1915.00</span>
</div>
</div>
</nav>

<section className="flex flex-col justify-center items-center pt-32 pb-16 px-4 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]" id="hero">
<h1 className="heading-tight text-3xl md:text-5xl text-center mb-4 font-bold tracking-tight">
      All-in-One <span className="text-[#FACC15]">Forex Intelligence</span> Platform
    </h1>
<p className="text-lg md:text-2xl text-center max-w-2xl mb-8 font-medium text-gray-300">
      Power your trading edge with live news, economic events, market sentiment, and pro charts—packed into a single, intuitive workspace.
    </p>
<div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
<a className="px-8 py-3 rounded bg-[#FACC15] text-[#0F172A] heading-tight font-bold text-lg shadow hover:bg-[#e2b10a] transition" href="#signup">Get Started Free</a>
<a className="px-8 py-3 rounded border border-[#FACC15] text-[#FACC15] heading-tight font-bold text-lg hover:bg-[#1E293B] transition" href="#dashboard">Live Demo</a>
</div>
</section>

<section className="py-12 px-4 max-w-7xl mx-auto" id="features">
<div className="grid md:grid-cols-4 gap-8">
<div className="bg-[#1E293B] rounded-xl p-6 shadow flex flex-col items-center">
<svg className="h-9 w-9 text-[#FACC15] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l2 2h5a2 2 0 0 1 2 2v7"></path>
</svg>
<h3 className="heading-tight text-xl mb-2">Live News Feed</h3>
<p className="text-gray-400 text-center">Real-time market headlines, curated by category and currency. Stay ahead of major moves.</p>
</div>
<div className="bg-[#1E293B] rounded-xl p-6 shadow flex flex-col items-center">
<svg className="h-9 w-9 text-[#FACC15] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
<h3 className="heading-tight text-xl mb-2">Economic Calendar</h3>
<p className="text-gray-400 text-center">Pinpoint key events with color-coded impact and instant notifications across devices.</p>
</div>
<div className="bg-[#1E293B] rounded-xl p-6 shadow flex flex-col items-center">
<svg className="h-9 w-9 text-[#FACC15] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
<h3 className="heading-tight text-xl mb-2">Market Sentiment</h3>
<p className="text-gray-400 text-center">Gauge crowd positioning with visual gauges for long/short ratios on major pairs.</p>
</div>
<div className="bg-[#1E293B] rounded-xl p-6 shadow flex flex-col items-center">
<svg className="h-9 w-9 text-[#FACC15] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M3 17l6-6 4 4 8-8"></path>
<circle cx="21" cy="21" r="1"></circle>
</svg>
<h3 className="heading-tight text-xl mb-2">Pro Charts</h3>
<p className="text-gray-400 text-center">Analyze with TradingView charts, pair switcher, and custom indicators—save your layout.</p>
</div>
</div>
</section>

<section className="py-14 px-2 md:px-0 bg-[#0F172A]" id="dashboard">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-center mb-4">
<h2 className="heading-tight text-2xl md:text-3xl">Your Trading Dashboard</h2>
<a className="text-[#FACC15] font-medium hover:underline hidden md:inline" href="#customize">Customize Layout</a>
</div>
<div className="grid md:grid-cols-6 gap-6">

<div className="md:col-span-2 bg-[#1E293B] rounded-xl p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="heading-tight text-lg">Market Sentiment</h3>
<select className="rounded bg-[#0F172A] text-gray-300 px-2 py-1 text-xs">
<option>EUR/USD</option>
<option>GBP/USD</option>
<option>USD/JPY</option>
</select>
</div>
<div className="flex justify-center items-center mt-2">

<svg className="mr-4" height="72" viewBox="0 0 36 36" width="72">
<circle cx="18" cy="18" fill="none" r="16" stroke="#334155" strokeWidth="4"></circle>
<path d="M18 2
                a 16 16 0 1 1 0 32
                a 16 16 0 1 1 0 -32" fill="none" stroke="#22C55E" strokeDasharray="60 100" strokeDashoffset="0" strokeWidth="4"></path>
<path d="M18 2
                a 16 16 0 1 1 0 32
                a 16 16 0 1 1 0 -32" fill="none" stroke="#EF4444" strokeDasharray="40 100" strokeDashoffset="60" strokeWidth="4"></path>
</svg>
<div>
<div className="flex items-center mb-1">
<span className="w-3 h-3 rounded-full bg-[#22C55E] mr-2"></span>
<span className="font-medium">Long</span>
<span className="ml-2 text-[#22C55E] mono">60%</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-[#EF4444] mr-2"></span>
<span className="font-medium">Short</span>
<span className="ml-2 text-[#EF4444] mono">40%</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 bg-[#1E293B] rounded-xl p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center space-x-2">
<select className="rounded bg-[#0F172A] text-gray-300 px-2 py-1 text-xs">
<option>EUR/USD</option>
<option>GBP/USD</option>
<option>USD/JPY</option>
<option>BTC/USD</option>
</select>
<select className="rounded bg-[#0F172A] text-gray-300 px-2 py-1 text-xs">
<option>1H</option>
<option>4H</option>
<option>Daily</option>
</select>
</div>
<button className="text-xs text-[#FACC15] hover:underline">Add Indicator</button>
</div>

<div className="w-full h-48 md:h-64 bg-[#0F172A] rounded flex items-center justify-center text-gray-500 text-sm">
            [TradingView Chart Embed]
          </div>
</div>

<div className="md:col-span-3 bg-[#1E293B] rounded-xl p-4 flex flex-col mt-4 md:mt-0">
<div className="flex items-center justify-between mb-2">
<h3 className="heading-tight text-lg">Live News</h3>
<div className="flex items-center space-x-2">
<select className="rounded bg-[#0F172A] text-gray-300 px-2 py-1 text-xs">
<option>All</option>
<option>Central Banks</option>
<option>Technical Analysis</option>
<option>Macro</option>
</select>
<button className="text-xs text-[#FACC15] hover:underline">+ Add News</button>
</div>
</div>
<div className="space-y-3">
<div className="bg-[#334155] rounded p-3 hover:bg-[#475569] transition cursor-pointer" onClick={(e) => { alert('News expands to full story with related pairs highlighted.') }}>
<div className="flex items-center justify-between">
<span className="font-medium">ECB signals potential July rate hike</span>
<span className="mono text-xs text-gray-400">2 min ago</span>
</div>
<div className="flex items-center mt-1 space-x-2">
<span className="bg-[#0F172A] text-[#FACC15] px-2 py-0.5 rounded text-xs mono">EUR/USD</span>
<span className="bg-[#0F172A] text-[#22C55E] px-2 py-0.5 rounded text-xs mono">Macro</span>
</div>
</div>
<div className="bg-[#334155] rounded p-3 hover:bg-[#475569] transition cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-medium">USD/JPY spikes as BOJ maintains policy</span>
<span className="mono text-xs text-gray-400">8 min ago</span>
</div>
<div className="flex items-center mt-1 space-x-2">
<span className="bg-[#0F172A] text-[#FACC15] px-2 py-0.5 rounded text-xs mono">USD/JPY</span>
<span className="bg-[#0F172A] text-[#EF4444] px-2 py-0.5 rounded text-xs mono">Central Banks</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 bg-[#1E293B] rounded-xl p-4 flex flex-col mt-4 md:mt-0">
<div className="flex items-center justify-between mb-2">
<h3 className="heading-tight text-lg">Economic Calendar</h3>
<div className="flex items-center space-x-2">
<input className="rounded bg-[#0F172A] text-gray-300 text-xs px-2 py-1" type="date" />
<select className="rounded bg-[#0F172A] text-gray-300 px-2 py-1 text-xs">
<option>All Pairs</option>
<option>EUR/USD</option>
<option>GBP/USD</option>
</select>
<select className="rounded bg-[#0F172A] text-gray-300 px-2 py-1 text-xs">
<option>All</option>
<option>High</option>
<option>Medium</option>
<option>Low</option>
</select>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-xs text-left">
<thead>
<tr className="text-gray-400">
<th className="py-1">Time</th>
<th className="py-1">Currency</th>
<th className="py-1">Event</th>
<th className="py-1">Impact</th>
<th className="py-1">Forecast</th>
<th className="py-1">Actual</th>
<th></th>
</tr>
</thead>
<tbody>
<tr className="border-t border-[#334155] hover:bg-[#334155] transition">
<td className="py-1">08:30</td>
<td className="font-bold">USD</td>
<td>Nonfarm Payrolls</td>
<td><span className="bg-[#EF4444] text-white px-2 py-0.5 rounded">High</span></td>
<td>180K</td>
<td className="font-bold text-[#22C55E]">195K</td>
<td>
<button className="text-[#FACC15] hover:underline" onClick={(e) => { alert('Choose alert method: Telegram, Discord, Email') }}>Notify Me</button>
</td>
</tr>
<tr className="border-t border-[#334155] hover:bg-[#334155] transition">
<td className="py-1">09:00</td>
<td className="font-bold">EUR</td>
<td>German CPI</td>
<td><span className="bg-[#FACC15] text-[#0F172A] px-2 py-0.5 rounded">Med</span></td>
<td>2.7%</td>
<td className="font-bold text-[#EF4444]">2.5%</td>
<td>
<button className="text-[#FACC15] hover:underline" onClick={(e) => { alert('Choose alert method: Telegram, Discord, Email') }}>Notify Me</button>
</td>
</tr>
<tr className="border-t border-[#334155] hover:bg-[#334155] transition">
<td className="py-1">10:00</td>
<td className="font-bold">JPY</td>
<td>BoJ Statement</td>
<td><span className="bg-gray-400 text-[#0F172A] px-2 py-0.5 rounded">Low</span></td>
<td>-</td>
<td>-</td>
<td>
<button className="text-[#FACC15] hover:underline" onClick={(e) => { alert('Choose alert method: Telegram, Discord, Email') }}>Notify Me</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="md:col-span-6 mt-4 bg-[#1E293B] rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
<div className="heading-tight text-lg mb-2 md:mb-0">Quick View</div>
<div className="flex flex-wrap md:flex-nowrap space-x-4 mono text-base">
<span>EUR/USD <span className="text-[#22C55E]">1.0850</span></span>
<span>GBP/USD <span className="text-[#EF4444]">1.2450</span></span>
<span>USD/JPY <span className="text-[#22C55E]">143.20</span></span>
<span>XAU/USD <span className="text-[#EF4444]">1915.00</span></span>
</div>
</div>
</div>
</div>
</section>

<section className="md:hidden py-10 px-2 bg-[#0F172A]">
<div className="space-y-4">

<details className="bg-[#1E293B] rounded-xl p-3" open="">
<summary className="heading-tight text-lg cursor-pointer">Ticker</summary>
<div className="mono mt-2 flex space-x-4 overflow-x-auto no-scrollbar text-base py-1">
<span>BTC/USD <span className="text-[#22C55E]">+1.2%</span></span>
<span>EUR/USD <span className="text-[#22C55E]">1.0850</span></span>
<span>USD/JPY <span className="text-[#22C55E]">143.20</span></span>
</div>
</details>
<details className="bg-[#1E293B] rounded-xl p-3">
<summary className="heading-tight text-lg cursor-pointer">Charts</summary>
<div className="mt-2 w-full h-40 bg-[#0F172A] rounded flex items-center justify-center text-gray-500 text-sm">
          [TradingView Chart Embed]
        </div>
</details>
<details className="bg-[#1E293B] rounded-xl p-3">
<summary className="heading-tight text-lg cursor-pointer">News</summary>
<div className="mt-2 space-y-2">
<div className="bg-[#334155] rounded p-2">
<div className="flex items-center justify-between">
<span className="font-medium">ECB signals potential July rate hike</span>
<span className="mono text-xs text-gray-400">2 min ago</span>
</div>
<div className="flex items-center mt-1 space-x-2">
<span className="bg-[#0F172A] text-[#FACC15] px-2 py-0.5 rounded text-xs mono">EUR/USD</span>
<span className="bg-[#0F172A] text-[#22C55E] px-2 py-0.5 rounded text-xs mono">Macro</span>
</div>
</div>
</div>
</details>
<details className="bg-[#1E293B] rounded-xl p-3">
<summary className="heading-tight text-lg cursor-pointer">Calendar</summary>
<div className="mt-2">
<table className="w-full text-xs text-left">
<thead>
<tr className="text-gray-400">
<th>Time</th>
<th>Cur</th>
<th>Event</th>
<th>Im.</th>
</tr>
</thead>
<tbody>
<tr>
<td>08:30</td>
<td className="font-bold">USD</td>
<td>Nonfarm Payrolls</td>
<td><span className="bg-[#EF4444] text-white px-2 py-0.5 rounded">H</span></td>
</tr>
<tr>
<td>09:00</td>
<td className="font-bold">EUR</td>
<td>German CPI</td>
<td><span className="bg-[#FACC15] text-[#0F172A] px-2 py-0.5 rounded">M</span></td>
</tr>
</tbody>
</table>
</div>
</details>
</div>
</section>

<footer className="mt-auto py-8 text-center text-gray-400 text-xs bg-[#1E293B]">
    © 2024 ForexIntel Platform — All rights reserved.
  </footer>

    </>
  );
}
