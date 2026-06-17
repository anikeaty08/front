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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white text-lg font-semibold tracking-tighter uppercase">
                SNTNL
            </div>
<div>
<a className="text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#waitlist">
                    Join Waitlist
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-40 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-normal text-white tracking-normal font-instrument-serif mb-8">Trade with discipline. Protect your capital.<br className="hidden md:block"/> Let AI handle the noise.</h1>
<div className="space-y-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
<p className="">
                    Stop guessing. Stop overtrading. Stop risking too much when the market turns against you. This system focuses on one outcome: <strong className="text-white font-medium">consistent, risk-controlled execution without emotional mistakes.</strong>
</p>
<p className="">
                    A risk-aware AI trading sentinel built for MetaTrader 5. It scans dozens of assets 24/7, scores market confidence from 1–10, and adjusts position size automatically to protect your equity and press harder only when probability is on your side.
                </p>
</div>
<div className="mt-12 max-w-md mx-auto" id="waitlist">
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                        Join Waitlist
                    </button>
</form>
<p className="mt-4 text-xs text-zinc-500 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                    Lifetime 50% discount for early users.
                </p>
</div>
</div>
</section>

<section className="bg-zinc-950/50 border-zinc-900 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="md:text-3xl text-2xl font-normal text-white font-instrument-serif mb-6">
                        You want to trade seriously. <br/>But reality looks like this:
                    </h2>
<ul className="space-y-4 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="">You watch 2 or 3 charts and miss the best setups.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="">You hesitate on good trades and overcommit on bad ones.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span>You revenge trade after losses.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span>You stare at screens for hours.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span>You break your own rules when pressure rises.</span>
</li>
</ul>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">Most tools make this worse.</h3>
<div className="space-y-4 text-sm md:text-base">
<p className="">Some platforms like QuantConnect demand advanced coding skills.</p>
<p className="">Others like Capitalise.ai simplify execution but limit control.</p>
<p>Signal services throw alerts at you but leave risk sizing to emotion.</p>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800">
<p className="text-white font-medium text-lg tracking-tight">They focus on signals.</p>
<p className="text-white font-medium text-lg tracking-tight">They ignore discipline.</p>
<p className="mt-2 text-zinc-400">And discipline is where accounts survive or die.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-normal text-white tracking-normal font-instrument-serif mb-4">
                    A Risk-Aware Sentinel for MT5.
                </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Not a hype bot. Not a signal group. A structured system that treats trading like risk engineering.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-zinc-800 bg-zinc-900/30 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">What it is</h3>
</div>
<p className="text-base leading-relaxed">
                        An automated AI system connected to MetaTrader 5 through Python, running 24/7 on a VPS.
                        <br/><br/>
                        You act as a portfolio manager. The AI executes with discipline.
                    </p>
</div>

<div className="border border-zinc-800 bg-zinc-900/30 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">Why it's better</h3>
</div>
<div className="space-y-4">
<div className="">
<p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Most systems ask:</p>
<p className="text-base text-zinc-300">"How much can we make?"</p>
</div>
<div className="">
<p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">This one asks first:</p>
<p className="text-base font-medium text-white">"How much should we risk right now?"</p>
</div>
<p className="text-sm mt-4">That single shift changes everything.</p>
</div>
</div>
</div>

<div className="mt-8 border border-zinc-800 bg-zinc-900/30 rounded-2xl p-8">
<h3 className="text-lg font-semibold text-white tracking-tight mb-6">How it works differently</h3>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm">It scans wide watchlists across Forex, stocks, or crypto.</p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm">It identifies trend-continuation setups using structured rules.</p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm">It converts volatility and trend strength into a simple <strong className="text-white font-medium">1–10 Dynamic Risk Score</strong>.</p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm">It adjusts position size automatically based on that score.</p>
</div>
<div className="flex gap-4 sm:col-span-2">
<iconify-icon className="text-zinc-600 mt-1 shrink-0" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm">It stops trading automatically if daily loss limits are hit.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950/50 border-zinc-900 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<h2 className="md:text-3xl text-2xl font-normal text-white tracking-normal font-instrument-serif text-center mb-12">
                Systematic Architecture
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:user-cross-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-4">Eliminate Emotional Trading</h3>
<div className="space-y-3 text-sm">
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Outcome</span>
<span className="text-zinc-300">No revenge trading, no hesitation</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Mechanism</span>
<span className="text-zinc-300">Rule-based AI execution</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-white font-medium">Consistent behavior across wins and losses</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:radar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-4">See More Opportunities</h3>
<div className="space-y-3 text-sm">
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Outcome</span>
<span className="text-zinc-300">Never miss high-probability setups</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Mechanism</span>
<span className="text-zinc-300">24/7 multi-asset scanning</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-white font-medium">Broader exposure without screen addiction</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:scale-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-4">Standardize Risk Automatically</h3>
<div className="space-y-3 text-sm">
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Outcome</span>
<span className="text-zinc-300">Protect capital during volatility</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Mechanism</span>
<span className="text-zinc-300">ATR-based stops + Risk Score (1-10)</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-white font-medium">Smaller losses in chaos, larger exposure in strong trends</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors md:col-span-2 lg:col-span-1">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-5">
<iconify-icon className="text-white" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-4">Trade Without Living at Your Desk</h3>
<div className="space-y-3 text-sm">
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Outcome</span>
<span className="text-zinc-300">Freedom from constant monitoring</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Mechanism</span>
<span className="text-zinc-300">VPS-hosted automation with rules</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-white font-medium">The system works while you work</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors md:col-span-2 lg:col-span-2 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full"></div>
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-5 relative z-10">
<iconify-icon className="text-white" icon="solar:power-button-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight mb-4 relative z-10">Built-In Kill Switch</h3>
<div className="space-y-3 text-sm relative z-10">
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Outcome</span>
<span className="text-zinc-300">Prevent catastrophic drawdowns</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Mechanism</span>
<span className="text-zinc-300">Hard-coded daily equity protection</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-zinc-500 text-xs uppercase tracking-wider">Result</span>
<span className="text-white font-medium">The system stops before emotions take control</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-900 relative">
<div className="max-w-3xl mx-auto text-center">
<h2 className="md:text-4xl text-3xl font-normal text-white font-instrument-serif mb-6">
                This product is launching privately.
            </h2>
<div className="inline-block bg-zinc-900 border border-zinc-800 rounded-full px-6 py-2 mb-8">
<p className="text-sm text-white font-medium">
                    Early users receive a <strong className="text-white">Lifetime 50% discount.</strong>
</p>
</div>
<p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto">
                No future upsells. No subscription surprises.<br/><br/>
                If you believe trading should be structured, risk-first, and disciplined, join the waitlist now.
            </p>
<div className="max-w-md mx-auto">
<form className="flex flex-col gap-3">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all text-center" placeholder="Enter your email address" required="" type="email"/>
<button className="w-full bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors" type="submit">
                        Secure My Spot
                    </button>
</form>
</div>
<div className="mt-16 pt-8 border-t border-zinc-900">
<p className="text-sm font-medium text-white tracking-tight uppercase">Protect your capital.</p>
<p className="text-sm text-zinc-500 mt-1">Let the Sentinel watch the markets.</p>
</div>
</div>
</section>

    </>
  );
}
