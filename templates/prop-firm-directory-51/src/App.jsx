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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-semibold tracking-tighter text-xl text-slate-900 flex items-center gap-1" href="#">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:chart-square-linear"></iconify-icon>
                    PROPFINDER
                </a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-900 transition-colors" href="#">Top 10 Firms</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Discounts</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Guides</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Submit a Firm</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#toplist">
                    Compare Now
                </a>
</div>
</div>
</header>

<section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Updated for October 2023
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 max-w-3xl mx-auto leading-tight">
                Find the perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Prop Firm</span> for your trading style.
            </h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-medium">
                We analyze, review, and rank the top proprietary trading firms. Compare profit splits, evaluation rules, and get exclusive discounts.
            </p>

<div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center gap-2">
<div className="flex-1 w-full flex items-center px-4 h-12 bg-slate-50 rounded-xl border border-transparent focus-within:border-slate-200 focus-within:bg-white transition-colors">
<iconify-icon className="text-slate-400 text-lg" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm px-3 text-slate-900 placeholder-slate-400 outline-none" placeholder="Search by firm name..." type="text"/>
</div>
<div className="w-full sm:w-auto flex items-center gap-2">
<div className="relative w-full sm:w-40 h-12">
<select className="w-full h-full appearance-none bg-slate-50 border border-transparent rounded-xl text-sm font-medium text-slate-700 px-4 pr-10 outline-none focus:border-slate-200 focus:bg-white transition-colors cursor-pointer">
<option value="">Funding Size</option>
<option value="10k">$10,000</option>
<option value="50k">$50,000</option>
<option value="100k">$100,000</option>
<option value="200k">$200,000+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full sm:w-auto h-12 px-6 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap">
                        Search Firms
                    </button>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full overflow-hidden -z-10 pointer-events-none opacity-40">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
<div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
</div>
</section>

<main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-24" id="toplist">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Top Rated Prop Firms</h2>
<div className="flex items-center gap-6">

<label className="relative inline-flex items-center cursor-pointer group">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 group-hover:after:scale-95"></div>
<span className="ml-3 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">US Traders Allowed</span>
</label>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>

<div className="flex items-center gap-2 text-sm">
<span className="text-slate-500 font-medium">Sort by:</span>
<button className="flex items-center gap-1 font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        Rating <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-2">
<button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium whitespace-nowrap shadow-sm">All Firms</button>
<button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">1-Step Eval</button>
<button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Instant Funding</button>
<button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Crypto Allowed</button>
<button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Highest Split</button>
</div>

<div className="flex flex-col gap-4">

<div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col lg:flex-row items-start lg:items-center gap-6 relative transition-all hover:shadow-md hover:border-slate-300 group">

<div className="absolute -top-3 -left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm z-10 border-2 border-white">1</div>

<div className="flex items-center gap-4 min-w-[220px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-semibold tracking-tighter text-slate-900 shadow-sm">
                        FX
                    </div>
<div>
<h3 className="font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-1">
                            FundedX
                            <iconify-icon className="text-blue-500 text-sm" icon="solar:verified-check-circle-bold"></iconify-icon>
</h3>
<div className="flex items-center gap-1 mt-1">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-slate-500 text-xs font-medium ml-1">4.9 (1.2k reviews)</span>
</div>
</div>
</div>

<div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 w-full py-2 lg:py-0 border-y lg:border-y-0 lg:border-l border-slate-100 lg:pl-6 my-2 lg:my-0">
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Max Funding
                        </div>
<div className="text-sm font-semibold text-slate-900">$2,000,000</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon> Profit Split
                        </div>
<div className="text-sm font-semibold text-slate-900">Up to 90%</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:target-linear"></iconify-icon> Target
                        </div>
<div className="text-sm font-semibold text-slate-900">8% / 5%</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon> Minimum Days
                        </div>
<div className="text-sm font-semibold text-slate-900">0 Days</div>
</div>
</div>

<div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full lg:w-[200px] shrink-0">

<div className="w-full bg-blue-50/50 border border-blue-100 border-dashed rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors" onclick="alert('Code Copied!')">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-blue-600 uppercase tracking-tight">Exclusive Discount</span>
<span className="text-sm font-mono font-semibold text-slate-900 tracking-tight">PROPFIND20</span>
</div>
<div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</div>
</div>
<a className="w-full bg-slate-900 text-white rounded-xl py-2.5 px-4 text-sm font-medium flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm" href="#">
                        Visit Firm <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col lg:flex-row items-start lg:items-center gap-6 relative transition-all hover:shadow-md hover:border-slate-300 group">
<div className="absolute -top-3 -left-3 bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm z-10 border-2 border-white">2</div>
<div className="flex items-center gap-4 min-w-[220px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-semibold tracking-tighter text-slate-900 shadow-sm">
                        TC
                    </div>
<div>
<h3 className="font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-1">
                            TradeCapital
                            <iconify-icon className="text-blue-500 text-sm" icon="solar:verified-check-circle-bold"></iconify-icon>
</h3>
<div className="flex items-center gap-1 mt-1">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-outline"></iconify-icon>
</div>
<span className="text-slate-500 text-xs font-medium ml-1">4.2 (850 reviews)</span>
</div>
</div>
</div>
<div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 w-full py-2 lg:py-0 border-y lg:border-y-0 lg:border-l border-slate-100 lg:pl-6 my-2 lg:my-0">
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Max Funding
                        </div>
<div className="text-sm font-semibold text-slate-900">$1,000,000</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon> Profit Split
                        </div>
<div className="text-sm font-semibold text-slate-900">80% Default</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:target-linear"></iconify-icon> Target
                        </div>
<div className="text-sm font-semibold text-slate-900">10% / 5%</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon> Minimum Days
                        </div>
<div className="text-sm font-semibold text-slate-900">5 Days</div>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full lg:w-[200px] shrink-0">
<div className="w-full bg-slate-50 border border-slate-200 border-dashed rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">Apply at checkout</span>
<span className="text-sm font-mono font-semibold text-slate-900 tracking-tight">TCOFF10</span>
</div>
<div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</div>
</div>
<a className="w-full bg-slate-900 text-white rounded-xl py-2.5 px-4 text-sm font-medium flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm" href="#">
                        Visit Firm <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col lg:flex-row items-start lg:items-center gap-6 relative transition-all hover:shadow-md hover:border-slate-300 group">
<div className="absolute -top-3 -left-3 bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-sm z-10 border-2 border-white">3</div>
<div className="flex items-center gap-4 min-w-[220px]">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-semibold tracking-tighter text-slate-900 shadow-sm">
                        AP
                    </div>
<div>
<h3 className="font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-1">
                            ApexPro
                        </h3>
<div className="flex items-center gap-1 mt-1">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-outline"></iconify-icon>
</div>
<span className="text-slate-500 text-xs font-medium ml-1">4.0 (520 reviews)</span>
</div>
</div>
</div>
<div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 w-full py-2 lg:py-0 border-y lg:border-y-0 lg:border-l border-slate-100 lg:pl-6 my-2 lg:my-0 opacity-80 group-hover:opacity-100 transition-opacity">
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Max Funding
                        </div>
<div className="text-sm font-semibold text-slate-900">$300,000</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon> Profit Split
                        </div>
<div className="text-sm font-semibold text-slate-900">75%</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:target-linear"></iconify-icon> Target
                        </div>
<div className="text-sm font-semibold text-slate-900">10% (1-Step)</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon> Minimum Days
                        </div>
<div className="text-sm font-semibold text-slate-900">10 Days</div>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3 w-full lg:w-[200px] shrink-0">
<a className="w-full bg-white border border-slate-200 text-slate-700 rounded-xl py-2.5 px-4 text-sm font-medium flex justify-center items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm mt-auto" href="#">
                        View Details
                    </a>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center gap-2 shadow-sm">
                Load More Firms <iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
</main>

<section className="bg-white border-t border-slate-200 py-16 mt-auto">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">How we evaluate prop firms</h2>
<p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">Our methodology is designed to help traders find reliable funding partners, minimizing risk and maximizing payout potential.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Trust &amp; Reputation</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">We verify payout histories, read real user reviews, and check regulatory compliance to ensure the firm actually pays its traders.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:ruler-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Rule Transparency</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Hidden drawdown rules or restricted trading styles are red flags. We highlight firms with straightforward, transparent evaluation rules.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:sale-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Value for Money</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">We compare the challenge fee against the account size, profit split, and leverage to determine the true value of the evaluation.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="font-semibold tracking-tighter text-xl text-white flex items-center gap-1 mb-4" href="#">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:chart-square-linear"></iconify-icon>
                        PROPFINDER
                    </a>
<p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xs">
                        The leading directory and review platform for proprietary trading firms. Find your edge, get funded.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Compare</h4>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Top 10 Firms</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Instant Funding</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">1-Step Evaluations</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Futures Prop Firms</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Promo Codes</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Trading Guides</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Submit a Firm</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-500 font-medium max-w-3xl leading-relaxed">
<strong>Affiliate Disclosure:</strong> Some of the links on this website are affiliate links. This means if you click on the link and purchase an evaluation, we may receive an affiliate commission at no extra cost to you. 
                    <br/><br/>
<strong>Risk Warning:</strong> Trading involves significant risk and may not be suitable for all investors. Past performance is not indicative of future results. Information on this site is for educational purposes only.
                </p>
<div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                    © 2023 PROPFINDER. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
