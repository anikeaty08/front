import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
  theme: {
    extend: {
      fontFamily:{ inter:['Inter','ui-sans-serif','system-ui']},
      colors:{ brand:'#E992C5', 'brand-light':'#60a5fa'}
    }
  }
}



lucide.createIcons();

const riskRange=document.getElementById('riskRange');
const riskValue=document.getElementById('riskValue');
riskRange.addEventListener('input',()=>riskValue.textContent=riskRange.value);

const dropdownBtn=document.getElementById('dropdownButton');
const dropdownMenu=document.getElementById('dropdownMenu');
const dropdownLabel=document.getElementById('dropdownLabel');
dropdownBtn.addEventListener('click',e=>{
  e.stopPropagation();
  dropdownMenu.classList.toggle('hidden');
});
dropdownMenu.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    dropdownLabel.textContent=btn.dataset.value;
    dropdownMenu.classList.add('hidden');
  });
});
document.addEventListener('click',()=>dropdownMenu.classList.add('hidden'));

document.getElementById('downloadHtml').addEventListener('click',()=>{
  const html= '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  const blob=new Blob([html],{type:'text/html'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download='wealthtracker-portfolio.html';
  a.click();
  URL.revokeObjectURL(url);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="w-full sm:px-6 sm:pt-12 text-center pt-8 pr-4 pl-4 justify-center max-w-5xl mx-auto">
<div className="flex gap-3 text-center mb-6 items-center justify-center">
<div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up w-5 h-5 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xl font-bold text-brand">WealthTracker Pro</span>
</div>
<h1 className="sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text leading-tight text-3xl font-extrabold text-transparent tracking-tight text-center bg-gradient-to-br from-stone-200 to-stone-400">Your wealth, unified and optimized.</h1>
<p className="text-stone-400 text-lg mt-4 w-full">Track, analyze, and grow your investment portfolio across multiple brokers with real-time insights and AI-powered recommendations.</p>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-24">

<section className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 lg:gap-8 items-center">

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="darkToggle" type="checkbox"/>
<div className="w-11 h-6 bg-stone-700 rounded-full peer peer-checked:bg-brand after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
<span className="ml-3 text-sm select-none hidden sm:inline">Real-time alerts</span>
<span className="ml-3 text-sm select-none sm:hidden">Alerts</span>
</label>

<label className="inline-flex items-center cursor-pointer">
<input checked="" className="peer sr-only" id="cb-news" type="checkbox"/>
<div className="w-5 h-5 rounded-md border border-stone-600 flex items-center justify-center peer-checked:bg-brand peer-checked:border-brand transition">
<svg className="lucide lucide-check w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="ml-2 text-sm select-none hidden sm:inline">Market notifications</span>
<span className="ml-2 text-sm select-none sm:hidden">Notifications</span>
</label>

<div className="flex items-center gap-3">
<svg className="lucide lucide-shield w-4 h-4 text-stone-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<label className="text-sm select-none hidden sm:inline" htmlFor="riskRange">Risk tolerance</label>
<label className="text-sm select-none sm:hidden" htmlFor="riskRange">Risk</label>
<input className="appearance-none w-20 sm:w-32 h-2 bg-stone-700 rounded-lg outline-none accent-brand" id="riskRange" max="10" min="1" type="range" value="7"/>
<span className="text-sm font-medium text-brand" id="riskValue">7</span>
</div>

<div className="relative">
<button className="flex items-center gap-2 px-3 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-sm border border-stone-700 transition-colors" id="dropdownButton">
<svg className="lucide lucide-dollar-sign w-4 h-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="" id="dropdownLabel">USD</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="absolute z-10 mt-2 w-32 bg-stone-800 border border-stone-700 rounded-lg shadow-xl hidden" id="dropdownMenu">
<li><button className="w-full text-left px-4 py-2 hover:bg-stone-700 text-sm rounded-t-lg flex items-center gap-2" data-value="USD"><span>🇺🇸</span>USD</button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-stone-700 text-sm flex items-center gap-2" data-value="EUR"><span>🇪🇺</span>EUR</button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-stone-700 text-sm flex items-center gap-2" data-value="GBP"><span>🇬🇧</span>GBP</button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-stone-700 text-sm rounded-b-lg flex items-center gap-2" data-value="JPY"><span>🇯🇵</span>JPY</button></li>
</ul>
</div>

<button className="ml-auto flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand-light text-white rounded-lg text-sm transition-colors" id="downloadHtml">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="hidden sm:inline">Export Report</span>
<span className="sm:hidden">Export</span>
</button>
</section>

<section className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
<div className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl p-4 sm:p-6">
<div className="flex gap-2 mb-2 items-center">
<svg className="lucide lucide-wallet w-4 h-4 text-emerald-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="text-xs sm:text-sm text-stone-400">Total Value</span>
</div>
<div className="text-xl sm:text-2xl font-bold text-emerald-400">$847,291</div>
<div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
        +12.4%
      </div>
</div>
<div className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl p-4 sm:p-6">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-percent w-4 h-4 text-stone-400" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
<span className="text-xs sm:text-sm text-stone-400">Today's Gain</span>
</div>
<div className="text-xl sm:text-2xl font-bold text-stone-400">+$4,821</div>
<div className="text-xs text-stone-400 flex items-center gap-1 mt-1">
<svg className="lucide lucide-arrow-up w-3 h-3" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
        +0.57%
      </div>
</div>
<div className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl p-4 sm:p-6">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-pie-chart w-4 h-4 text-purple-400" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="text-xs sm:text-sm text-stone-400">Positions</span>
</div>
<div className="text-xl sm:text-2xl font-bold">47</div>
<div className="text-xs text-stone-400 mt-1">Across 3 accounts</div>
</div>
<div className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl p-4 sm:p-6">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-activity w-4 h-4 text-orange-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="sm:text-sm text-xs text-stone-400">Performance</span>
</div>
<div className="text-xl sm:text-2xl font-bold text-orange-400">A+</div>
<div className="text-xs text-orange-400 mt-1">vs S&amp;P 500</div>
</div>
</section>

<section className="relative mt-8 sm:mt-14 bg-stone-900/60 backdrop-blur-sm border border-stone-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 overflow-hidden">
<span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand to-brand-light rounded-bl-2xl sm:rounded-bl-3xl rounded-tl-2xl sm:rounded-tl-3xl"></span>

<div className="space-y-8 sm:space-y-12">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layers w-5 h-5 text-brand" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold">Multi-Broker Consolidation</h3>
</div>
<p className="text-stone-400 text-sm sm:text-base leading-relaxed">Connect Fidelity, Charles Schwab, E*TRADE, and Robinhood accounts. Drag and drop positions, set custom allocations, and see your complete financial picture in one unified dashboard.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold">Real-Time Market Data</h3>
</div>
<p className="text-stone-400 text-sm sm:text-base leading-relaxed">Level 2 market data with millisecond precision. Advanced charting, technical indicators, and AI-powered alerts ensure you never miss market-moving events.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-calendar w-5 h-5 text-purple-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold">Earnings Intelligence</h3>
</div>
<p className="text-stone-400 text-sm sm:text-base leading-relaxed">Comprehensive earnings calendar with analyst estimates, historical surprises, and post-earnings momentum analysis. Set custom reminders for key earnings dates.</p>
</div>
</div>

<div className="w-full overflow-x-auto">
<div className="space-y-8 sm:space-y-10 min-w-[400px]">

<div className="">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs uppercase text-stone-400 font-medium tracking-wide">Fidelity 401(k) • $457,892</span>
</div>
<div className="divide-y divide-stone-800">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="AAPL" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/apple.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">AAPL</span>
<span className="text-xs text-stone-500">Apple Inc.</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$184,312</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$228.45</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$23,891</span>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="MSFT" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/microsoft.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">MSFT</span>
<span className="text-xs text-stone-500">Microsoft Corp.</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$156,789</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$421.33</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$18,432</span>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="NVDA" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/nvidia.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">NVDA</span>
<span className="text-xs text-stone-500">NVIDIA Corp.</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$116,791</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$875.92</span>
<span className="w-16 sm:w-20 font-semibold text-emerald-400 text-right">+$45,233</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-rocket w-4 h-4 text-stone-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-xs uppercase text-stone-400 font-medium tracking-wide">Charles Schwab Growth • $289,421</span>
</div>
<div className="divide-y divide-stone-800">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="TSLA" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/tesla.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">TSLA</span>
<span className="text-xs text-stone-500">Tesla Inc.</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$87,423</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$248.91</span>
<span className="w-16 sm:w-20 text-right font-semibold text-red-400">-$12,345</span>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="AMZN" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/amazon.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">AMZN</span>
<span className="text-xs text-stone-500">Amazon Inc.</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$94,832</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$186.42</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$8,921</span>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="GOOGL" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/alphabet.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">GOOGL</span>
<span className="text-xs text-stone-500">Alphabet Inc.</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$67,891</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$172.38</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$5,432</span>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-800"><img alt="META" className="w-5 h-5 rounded-full" src="https://logo.clearbit.com/meta.com"/></span>
<div className="flex flex-col">
<span className="text-sm font-medium">META</span>
<span className="text-xs text-stone-500">Meta Platforms</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$39,275</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$521.83</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$7,291</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-coins w-4 h-4 text-orange-400" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-xs uppercase text-stone-400 font-medium tracking-wide">Coinbase Pro • $99,978</span>
</div>
<div className="divide-y divide-stone-800">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm">₿</span>
<div className="flex flex-col">
<span className="text-sm font-medium">BTC</span>
<span className="text-xs text-stone-500">Bitcoin</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$67,432</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$67,432</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$15,891</span>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-500 text-white font-bold text-sm">Ξ</span>
<div className="flex flex-col">
<span className="text-sm font-medium">ETH</span>
<span className="text-xs text-stone-500">Ethereum</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 text-sm">
<span className="w-20 sm:w-24 text-right">$32,546</span>
<span className="w-16 sm:w-20 text-right text-stone-400">$3,891.23</span>
<span className="w-16 sm:w-20 text-right font-semibold text-emerald-400">+$8,234</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
