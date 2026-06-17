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



        lucide.createIcons();
    
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
      

<nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2.5">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
<i className="h-5 w-5 fill-white/20" data-lucide="zap"></i>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">EliteReality</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-xs font-medium text-slate-500 transition hover:text-slate-900" href="#features">Features</a>
<a className="text-xs font-medium text-slate-500 transition hover:text-slate-900" href="#results">Performance</a>
<a className="text-xs font-medium text-slate-500 transition hover:text-slate-900" href="#testimonials">Reviews</a>
<a className="text-xs font-medium text-slate-500 transition hover:text-slate-900" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-xs font-semibold text-slate-600 transition hover:text-slate-900 sm:block" href="#">Log in</a>
<a className="group relative flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-slate-900/30" href="#">
                    Get Access
                    <i className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 -left-4 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
<div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/50 px-3 py-1 text-xs font-medium text-violet-700 backdrop-blur-sm shadow-sm mb-8 transition hover:bg-white/80 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                Now accepting new VIP members
            </div>
<h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
                Master the markets <br/>
<span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">without the stress.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Copy high-probability trades from top-tier analysts. 85% win rate. Zero experience required. Join 10,000+ traders profiting daily.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-semibold text-white shadow-xl shadow-violet-200 transition-all hover:bg-violet-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2" href="#">
                    Start Trading Free
                </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300" href="#">
                    View Live Results
                </a>
</div>

<div className="relative mt-20">
<div className="absolute inset-0 flex items-center justify-center bg-slate-50/0 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
<div className="mx-auto max-w-5xl">
<div className="relative rounded-2xl border border-slate-200/60 bg-white/40 p-2 shadow-2xl shadow-slate-200/50 backdrop-blur-xl ring-1 ring-slate-900/5">
<div className="rounded-xl border border-slate-100 bg-white shadow-sm overflow-hidden">

<div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-rose-400/80"></div>
<div className="h-3 w-3 rounded-full bg-amber-400/80"></div>
<div className="h-3 w-3 rounded-full bg-emerald-400/80"></div>
</div>
<div className="flex items-center gap-2 rounded-md bg-white px-2 py-1 shadow-sm border border-slate-100">
<i className="h-3 w-3 text-slate-400" data-lucide="lock"></i>
<span className="text-[10px] font-medium text-slate-500">elitereality.com/dashboard</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="p-6 hidden md:block">
<div className="space-y-4">
<div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center text-orange-600"><i className="h-4 w-4" data-lucide="bitcoin"></i></div>
<div><div className="text-xs font-bold text-slate-900">BTCUSD</div><div className="text-[10px] text-slate-400">Bitcoin</div></div>
</div>
<div className="text-right"><div className="text-xs font-bold text-slate-900">43,205.00</div><div className="text-[10px] text-emerald-500">+2.4%</div></div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-yellow-100 flex items-center justify-center text-yellow-600"><i className="h-4 w-4" data-lucide="coins"></i></div>
<div><div className="text-xs font-bold text-slate-900">XAUUSD</div><div className="text-[10px] text-slate-400">Gold</div></div>
</div>
<div className="text-right"><div className="text-xs font-bold text-slate-900">2,034.50</div><div className="text-[10px] text-emerald-500">+0.8%</div></div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-blue-600"><i className="h-4 w-4" data-lucide="dollar-sign"></i></div>
<div><div className="text-xs font-bold text-slate-900">EURUSD</div><div className="text-[10px] text-slate-400">Euro</div></div>
</div>
<div className="text-right"><div className="text-xs font-bold text-slate-900">1.0924</div><div className="text-[10px] text-rose-500">-0.1%</div></div>
</div>
</div>
</div>

<div className="col-span-2 p-6 relative">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-bold text-slate-900">$12,450.20</h3>
<p className="text-xs font-medium text-emerald-600 flex items-center gap-1">
<i className="h-3 w-3" data-lucide="trending-up"></i> +$1,240 (Today)
                                            </p>
</div>
<button className="bg-slate-900 text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg shadow-slate-200">New Trade</button>
</div>

<div className="h-32 w-full flex items-end justify-between gap-1">
<div className="w-full bg-slate-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-violet-100 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-violet-200 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-violet-500 rounded-t-sm h-[60%] animate-pulse"></div>
<div className="w-full bg-violet-600 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(124,58,237,0.5)]"></div>
</div>

<div className="absolute bottom-6 right-6 bg-white border border-slate-100 shadow-xl rounded-xl p-4 w-48 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-bold text-slate-400 uppercase">Signal</span>
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
</div>
<div className="text-sm font-bold text-slate-900">Buy XAUUSD</div>
<div className="flex justify-between mt-2 text-[10px]">
<span className="text-slate-500">TP: 2045.00</span>
<span className="text-emerald-600 font-bold">+50 pips</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-200 bg-white py-8">
<div className="text-center mb-6">
<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Trusted by over 10,000 traders globally</p>
</div>
<div className="marquee-container">
<div className="marquee-content gap-16 px-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<i className="h-8 w-8" data-lucide="gem"></i>
<i className="h-8 w-8" data-lucide="anchor"></i>
<i className="h-8 w-8" data-lucide="aperture"></i>
<i className="h-8 w-8" data-lucide="atom"></i>
<i className="h-8 w-8" data-lucide="award"></i>
<i className="h-8 w-8" data-lucide="axe"></i>
<i className="h-8 w-8" data-lucide="banana"></i>
<i className="h-8 w-8" data-lucide="beaker"></i>

<i className="h-8 w-8" data-lucide="gem"></i>
<i className="h-8 w-8" data-lucide="anchor"></i>
<i className="h-8 w-8" data-lucide="aperture"></i>
<i className="h-8 w-8" data-lucide="atom"></i>
<i className="h-8 w-8" data-lucide="award"></i>
<i className="h-8 w-8" data-lucide="axe"></i>
<i className="h-8 w-8" data-lucide="banana"></i>
<i className="h-8 w-8" data-lucide="beaker"></i>
</div>
</div>
</div>

<section className="py-24 lg:py-32" id="features">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-base font-semibold leading-7 text-violet-600">Why Elite Reality?</h2>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to trade <br/>like a professional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-violet-50 to-transparent opacity-50"></div>
<div className="relative z-10 flex h-full flex-col justify-between">
<div>
<div className="inline-flex rounded-lg bg-violet-100 p-3 text-violet-600 mb-4">
<i className="h-6 w-6" data-lucide="target"></i>
</div>
<h3 className="text-xl font-bold text-slate-900">Precision Signals</h3>
<p className="mt-2 text-slate-500 max-w-sm">Our AI-assisted analysts provide entry, stop-loss, and take-profit levels with extreme accuracy. Stop guessing, start executing.</p>
</div>
<div className="mt-8 flex items-end gap-2">
<div className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 shadow-sm transform group-hover:-translate-y-1 transition duration-300">
<div className="flex justify-between text-xs mb-1">
<span className="font-bold text-slate-700">GOLD BUY</span>
<span className="text-slate-400">12:30 PM</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-3/4"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 shadow-sm transition hover:shadow-md">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent"></div>
<div className="relative z-10 flex h-full flex-col">
<div className="inline-flex rounded-lg bg-white/10 p-3 text-white mb-4">
<i className="h-6 w-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-bold text-white">Risk Managed</h3>
<p className="mt-2 text-slate-400 text-sm">Every trade comes with strict risk management guidelines to protect your capital.</p>
<div className="mt-auto pt-8">
<div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
<i className="h-4 w-4" data-lucide="check-circle-2"></i> 1:3 Risk Ratio
                            </div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
<div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-emerald-50 blur-2xl"></div>
<div className="relative z-10">
<div className="inline-flex rounded-lg bg-emerald-100 p-3 text-emerald-600 mb-4">
<i className="h-6 w-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-bold text-slate-900">85% Win Rate</h3>
<p className="mt-2 text-sm text-slate-500">Verified historical performance over 3 years of market data.</p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
<svg className="h-full w-full stroke-emerald-500 fill-emerald-500/10" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 30 Q20 35 40 10 T100 5 L100 40 Z"></path>
<path d="M0 30 Q20 35 40 10 T100 5" fill="none" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
<div className="absolute left-0 top-0 h-full w-1/3 bg-slate-50 skew-x-12 -ml-10"></div>
<div className="relative z-10 flex h-full flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 mb-4">
<i className="h-6 w-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-bold text-slate-900">Vibrant Community</h3>
<p className="mt-2 text-slate-500">Join a private Discord of winners. Share charts, discuss strategies, and grow together.</p>
</div>
<div className="flex-1 w-full">

<div className="space-y-3">
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-violet-200 flex-shrink-0"></div>
<div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-xs text-slate-600">Just caught that Gold move! 🚀 +50 pips secured.</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="h-8 w-8 rounded-full bg-slate-800 flex-shrink-0"></div>
<div className="bg-violet-600 rounded-2xl rounded-tr-none p-3 text-xs text-white">Nice work! Waiting for the retest on GJ now.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-950 py-24 text-white overflow-hidden" id="results">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Live Performance</h2>
<p className="mt-4 text-slate-400 max-w-lg">We value transparency. Here are the results from our latest trading week. Numbers don't lie.</p>
</div>
<div>
<div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-emerald-400 font-mono text-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        System Operational: 99.9%
                    </div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Profit (Week)</div>
<div className="mt-2 text-4xl font-mono font-bold tracking-tight text-white">+1,245 <span className="text-base text-slate-500">pips</span></div>
</div>
<div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Win Rate</div>
<div className="mt-2 text-4xl font-mono font-bold tracking-tight text-emerald-400">87.5%</div>
</div>
<div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Traders</div>
<div className="mt-2 text-4xl font-mono font-bold tracking-tight text-white">10.4k</div>
</div>
<div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Avg. Risk/Reward</div>
<div className="mt-2 text-4xl font-mono font-bold tracking-tight text-violet-400">1:3.5</div>
</div>
</div>

<div className="mt-16 h-48 w-full relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 100 L0 80 L100 70 L200 85 L300 40 L400 50 L500 20 L600 30 L700 10 L800 25 L900 5 L1000 0 V100 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0 80 L100 70 L200 85 L300 40 L400 50 L500 20 L600 30 L700 10 L800 25 L900 5 L1000 0" fill="none" stroke="#8b5cf6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="300" cy="40" fill="#fff" r="3"></circle>
<circle cx="500" cy="20" fill="#fff" r="3"></circle>
<circle cx="700" cy="10" fill="#fff" r="3"></circle>
<circle cx="900" cy="5" fill="#fff" r="3"></circle>
</svg>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 text-center">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Start Profiting in 3 Steps</h2>
<p className="mt-4 text-slate-500">No complicated setup. We made it effortless.</p>
</div>
<div className="relative mx-auto max-w-4xl">

<div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100 md:left-1/2 md:-ml-0.5"></div>
<div className="space-y-12">

<div className="relative flex flex-col gap-8 md:flex-row md:items-center">
<div className="flex-1 md:text-right">
<h3 className="text-xl font-bold text-slate-900">Create Broker Account</h3>
<p className="mt-2 text-slate-500">Sign up with our trusted partner broker to ensure you get raw spreads and zero commissions.</p>
</div>
<div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-violet-600 text-xl font-bold text-white shadow-lg">1</div>
<div className="flex-1 md:hidden"></div> 
<div className="hidden flex-1 md:block"></div> 
</div>

<div className="relative flex flex-col gap-8 md:flex-row md:items-center">
<div className="hidden flex-1 md:block"></div>
<div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-slate-900 text-xl font-bold text-white shadow-lg">2</div>
<div className="flex-1">
<h3 className="text-xl font-bold text-slate-900">Fund Your Account</h3>
<p className="mt-2 text-slate-500">Deposit a minimum of $400. We recommend $1,000+ for optimal risk management.</p>
</div>
</div>

<div className="relative flex flex-col gap-8 md:flex-row md:items-center">
<div className="flex-1 md:text-right">
<h3 className="text-xl font-bold text-slate-900">Join the VIP Channel</h3>
<p className="mt-2 text-slate-500">Send us a screenshot of your funded account, and you'll get instant access to the signals.</p>
</div>
<div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-emerald-500 text-xl font-bold text-white shadow-lg">3</div>
<div className="hidden flex-1 md:block"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="testimonials">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 mb-16">Don't just take our word for it</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:-translate-y-1 transition duration-300">
<div className="flex text-amber-400 mb-4">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"I've tried 5 different signal groups before this one. Elite Reality is the only one that is actually profitable. The transparency is unmatched."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<div className="font-bold text-slate-900 text-sm">Sarah Jenkins</div>
<div className="text-slate-400 text-xs">Member since 2023</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:-translate-y-1 transition duration-300">
<div className="flex text-amber-400 mb-4">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Doubled my small account in 3 weeks following the Gold signals. The support team helped me set up my risk correctly. 10/10."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"/>
</div>
<div>
<div className="font-bold text-slate-900 text-sm">Michael Chang</div>
<div className="text-slate-400 text-xs">Full-time Trader</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:-translate-y-1 transition duration-300">
<div className="flex text-amber-400 mb-4">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The community alone is worth it. Everyone is so helpful, and the analysis explaining WHY we take trades is a game changer."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=23"/>
</div>
<div>
<div className="font-bold text-slate-900 text-sm">David Miller</div>
<div className="text-slate-400 text-xs">Member since 2024</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold">
<span>Is this suitable for complete beginners?</span>
<span className="relative h-5 w-5 shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-slate-500 leading-relaxed text-sm">Absolutely. 60% of our members started with zero experience. We provide a full onboarding video course explaining how to place trades, calculate lots, and manage risk.</p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold">
<span>What is the win rate?</span>
<span className="relative h-5 w-5 shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-slate-500 leading-relaxed text-sm">Our historical win rate hovers between 82% and 88%. We focus on high Risk-to-Reward setups (1:3 average), meaning even with a lower win rate, you would still be profitable.</p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-semibold">
<span>Is there a monthly fee?</span>
<span className="relative h-5 w-5 shrink-0">
<i className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus"></i>
<i className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-slate-500 leading-relaxed text-sm">No. Access to the VIP group is free when you sign up under our partner broker. This allows us to keep the community exclusive to serious traders.</p>
</details>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-slate-900 py-24 text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/30 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-8">
                Ready to transform your <br/> financial reality?
            </h2>
<p className="mx-auto max-w-2xl text-lg text-slate-400 mb-12">
                Stop watching from the sidelines. Join the Elite Reality VIP channel today and start your journey to financial independence.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="h-14 rounded-full bg-white px-8 text-lg font-bold text-slate-900 transition-all hover:bg-slate-200 hover:scale-105">
                    Get VIP Access Now
                </button>
<button className="h-14 rounded-full border border-slate-700 px-8 text-lg font-bold text-white transition-all hover:bg-slate-800">
                    Contact Support
                </button>
</div>
<div className="mt-24 border-t border-slate-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-violet-600 text-white">
<i className="h-4 w-4" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold text-white">EliteReality</span>
</div>
<div className="text-sm text-slate-500">
                    © 2025 Elite Reality Trading. All rights reserved. <br className="md:hidden"/> Trading involves risk.
                </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white" href="#"><i className="h-5 w-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
