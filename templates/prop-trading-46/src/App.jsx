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
      

<header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-white" href="#">FTMO</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">How it works</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">FAQ</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Trading</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Academy</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Client Area</a>
<a className="bg-white text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">
                    FTMO Challenge
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)] opacity-20 z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                    Over $130M+ Paid Out in 2023
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                    Funding Traders <br className="hidden sm:block"/>Worldwide.
                </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Discover your trading potential. Pass our evaluation course and trade up to $200,000 on an FTMO Account. Keep up to 90% of the profits.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-zinc-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
                        Start FTMO Challenge
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border border-zinc-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-900 transition-colors flex items-center justify-center" href="#">
                        Try Free Trial
                    </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
<div className="border border-zinc-800/80 rounded-2xl bg-zinc-900/40 backdrop-blur-xl p-4 overflow-hidden">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800/50 pb-4">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-6">
<div className="text-xs text-zinc-500 mb-2">Account Balance</div>
<div className="text-2xl font-semibold tracking-tight text-white">$108,450.00</div>
<div className="mt-4 h-16 w-full flex items-end gap-1 opacity-60">
<div className="w-full bg-zinc-800 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-blue-500/50 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-blue-500/50 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[90%]"></div>
</div>
</div>

<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-6">
<div className="text-xs text-zinc-500 mb-2">Max Daily Loss</div>
<div className="text-2xl font-semibold tracking-tight text-white">$2,100 / $5,000</div>
<div className="mt-6 w-full bg-zinc-900 rounded-full h-1.5">
<div className="bg-white h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>

<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-6">
<div className="text-xs text-zinc-500 mb-2">Profit Target</div>
<div className="text-2xl font-semibold tracking-tight text-white">$8,450 / $10,000</div>
<div className="mt-6 w-full bg-zinc-900 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '84.5%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">The Evaluation Process</h2>
<p className="text-sm text-zinc-400 max-w-2xl mx-auto">A transparent, two-step evaluation course designed to discover trading talent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors group">
<div className="absolute top-8 right-8 text-4xl font-semibold tracking-tighter text-zinc-800 group-hover:text-zinc-700 transition-colors">01</div>
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">FTMO Challenge</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Prove your skills. Trade according to our rules, hit the profit target, and respect the drawdown limits.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                                Trading Period: Unlimited
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                                Profit Target: 10%
                            </li>
</ul>
</div>

<div className="relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors group">
<div className="absolute top-8 right-8 text-4xl font-semibold tracking-tighter text-zinc-800 group-hover:text-zinc-700 transition-colors">02</div>
<div className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Verification</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Confirm your consistency. The rules are easier, and the profit target is cut in half. Show us you can sustain your success.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                                Trading Period: Unlimited
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                                Profit Target: 5%
                            </li>
</ul>
</div>

<div className="relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors group">
<div className="absolute top-8 right-8 text-4xl font-semibold tracking-tighter text-zinc-800 group-hover:text-blue-900/30 transition-colors">03</div>
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-xl text-zinc-950" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">FTMO Trader</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            You are funded. Trade with up to $200,000 responsibly. There are no profit targets anymore, just keep the drawdown limits.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                                Profit Split: Up to 90%
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                                Refund of initial fee
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-[#0a0a0c]">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Evaluation Objectives</h2>
<p className="text-sm text-zinc-400">Review the rules before you start.</p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

<div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-full p-1">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-zinc-800 text-white shadow-sm">Normal</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200">Aggressive</button>
</div>

<div className="relative group cursor-pointer">
<div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white">
<span>USD</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-zinc-800/50">
<button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">10k</button>
<button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">25k</button>
<button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">50k</button>
<button className="px-4 py-2 text-sm font-medium bg-white text-zinc-950 rounded-lg shadow-sm">100k</button>
<button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">200k</button>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="py-4 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-800 w-1/3">Criteria</th>
<th className="py-4 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-800 bg-zinc-900/20 w-1/3 rounded-t-lg">Step 1: Challenge</th>
<th className="py-4 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-800 w-1/3">Step 2: Verification</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<td className="py-4 px-4 text-zinc-300">Trading Period</td>
<td className="py-4 px-4 text-white font-medium bg-zinc-900/20">Unlimited</td>
<td className="py-4 px-4 text-zinc-400">Unlimited</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<td className="py-4 px-4 text-zinc-300">Minimum Trading Days</td>
<td className="py-4 px-4 text-white font-medium bg-zinc-900/20">4 days</td>
<td className="py-4 px-4 text-zinc-400">4 days</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<td className="py-4 px-4 text-zinc-300">Max Daily Loss</td>
<td className="py-4 px-4 text-white font-medium bg-zinc-900/20">$5,000</td>
<td className="py-4 px-4 text-zinc-400">$5,000</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<td className="py-4 px-4 text-zinc-300">Max Loss</td>
<td className="py-4 px-4 text-white font-medium bg-zinc-900/20">$10,000</td>
<td className="py-4 px-4 text-zinc-400">$10,000</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
<td className="py-4 px-4 text-zinc-300">Profit Target</td>
<td className="py-4 px-4 text-white font-medium bg-zinc-900/20">$10,000 (10%)</td>
<td className="py-4 px-4 text-zinc-400">$5,000 (5%)</td>
</tr>
<tr>
<td className="py-6 px-4 text-zinc-300 font-medium">Refundable Fee</td>
<td className="py-6 px-4 text-xl font-semibold tracking-tight text-white bg-zinc-900/20 rounded-b-lg">€ 540</td>
<td className="py-6 px-4 text-zinc-500 text-xs">Free</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<iconify-icon className="text-2xl text-white mb-4" icon="solar:chart-square-linear"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Premium Conditions</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Trade on an institutional grade account with raw spreads and low commissions.</p>
</div>
<div>
<iconify-icon className="text-2xl text-white mb-4" icon="solar:laptop-linear"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Custom Apps</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Enhance your trading with our bespoke applications like the Account MetriX and Trading Journal.</p>
</div>
<div>
<iconify-icon className="text-2xl text-white mb-4" icon="solar:wallet-linear"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Bi-weekly Payouts</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Process your profit split every 14 days. Choose between regular fiat or crypto.</p>
</div>
<div>
<iconify-icon className="text-2xl text-white mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Performance Coach</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Access our in-house performance coaches to help overcome psychological hurdles.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white mb-4 block" href="#">FTMO</a>
<p className="text-xs text-zinc-500 max-w-sm mb-6 leading-relaxed">
                        We provide funding to successful traders. Pass our evaluation, get an FTMO Account, and keep up to 90% of your simulated profits.
                    </p>
</div>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Evaluation</h5>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">FTMO Challenge</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Verification</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Scaling Plan</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Free Trial</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h5>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h5>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Risk Disclosure</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600 leading-relaxed max-w-4xl">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. FTMO only provides services of simulated trading and educational tools for traders.
                </p>
<div className="text-xs text-zinc-600 shrink-0">
                    © 2024 FTMO. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
