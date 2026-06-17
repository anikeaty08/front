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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-zinc-950">
<div className="absolute top-0 left-1/2 w-full max-w-lg -translate-x-1/2 h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center text-zinc-950">
<iconify-icon height="16" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tighter text-zinc-100">MTL</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#features">Features</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#app">Mobile App</a>
<a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-zinc-100 text-zinc-900 px-3 py-1.5 rounded-full hover:bg-white transition-colors flex items-center gap-1.5" href="#">
                    Start journaling
                    <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="flex-grow pt-32 pb-24 z-10">

<section className="max-w-6xl mx-auto px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-300 mb-8 cursor-pointer hover:bg-white/10 transition-colors">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
</span>
                Introducing automated broker sync
                <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-100 mb-6 max-w-4xl mx-auto leading-tight">
                Master your edge.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Journal with precision.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The professional trading journal built for serious traders. Track, analyze, and optimize your performance with institutional-grade analytics.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2" href="#">
                    Get started for free
                </a>
<a className="w-full sm:w-auto text-sm font-medium border border-zinc-800 bg-zinc-900/50 text-zinc-300 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="" height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    View demo
                </a>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32 relative">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent blur-2xl -z-10 rounded-full"></div>
<div className="rounded-xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5 flex flex-col h-[32rem]">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-zinc-900/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/50 border border-white/5 text-xs text-zinc-500">
<iconify-icon height="12" icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
                        app.mytradelog.com
                    </div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-6 bg-zinc-900/20 hidden sm:flex">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon height="18" icon="solar:home-2-linear" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 cursor-pointer">
<iconify-icon height="18" icon="solar:chart-linear" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 cursor-pointer">
<iconify-icon height="18" icon="solar:history-linear" width="18"></iconify-icon>
</div>
<div className="mt-auto w-8 h-8 rounded flex items-center justify-center text-zinc-500 hover:text-zinc-300 cursor-pointer">
<iconify-icon height="18" icon="solar:settings-linear" width="18"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6">
<div className="flex justify-between items-center">
<div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Performance Overview</h3>
<p className="text-xs text-zinc-500 mt-1">Last 30 days metrics</p>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1 rounded bg-white/5 border border-white/5 text-xs text-zinc-300 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Account
                                </div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<p className="text-xs text-zinc-500 mb-1">Net P&amp;L</p>
<p className="text-xl font-medium tracking-tight text-emerald-400">+$4,250.00</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<p className="text-xs text-zinc-500 mb-1">Win Rate</p>
<p className="text-xl font-medium tracking-tight text-zinc-100">68.5%</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
<p className="text-xs text-zinc-500 mb-1">Profit Factor</p>
<p className="text-xl font-medium tracking-tight text-zinc-100">2.14</p>
</div>
</div>

<div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-4 flex flex-col relative overflow-hidden">
<div className="flex justify-between items-center mb-4">
<p className="text-xs text-zinc-500">Equity Curve</p>
<div className="flex gap-2">
<div className="w-6 h-1 rounded-full bg-zinc-800"></div>
<div className="w-6 h-1 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="flex-1 border-b border-l border-white/5 relative">

<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 C20,70 30,90 50,50 C70,10 80,40 100,20" fill="none" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,80 C20,70 30,90 50,50 C70,10 80,40 100,20 L100,100 L0,100 Z" fill="url(#gradient)" opacity="0.1"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#10B981"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="features">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Everything you need to scale.</h2>
<p className="text-sm text-zinc-400 font-light max-w-xl mx-auto">Stop guessing what works. Our tools provide clarity so you can focus on executing your edge perfectly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="20" icon="solar:import-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Automated Broker Sync</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Connect your accounts securely. We automatically import your trades, fees, and dividends in real-time, eliminating manual entry errors.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="20" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Deep Analytics</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Slice your data by time of day, instrument, or custom tags. Discover hidden patterns in your trading behavior to optimize your strategy.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="20" icon="solar:tag-horizontal-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Playbook &amp; Tagging</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Categorize trades by setups, mistakes, or market conditions. Build a personalized playbook of what works best for your style.</p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Risk Management</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Monitor your drawdowns, position sizing, and risk-to-reward ratios automatically. Stay within your predefined risk parameters.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="app">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Trade on the go.</h2>
<p className="text-sm text-zinc-400 font-light max-w-xl mx-auto">MyTradeLog is a powerful web application. Install it directly to your device's home screen for a seamless, native-like experience without the app store.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300">
<iconify-icon height="20" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Apple / iOS</h3>
</div>
<ol className="space-y-4 text-sm text-zinc-400 font-light list-decimal list-inside">
<li>Open <span className="text-zinc-200 font-medium">app.mytradelog.com</span> in Safari.</li>
<li>Tap the <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/5 border border-white/10 mx-1"><iconify-icon height="14" icon="solar:export-linear" width="14"></iconify-icon></span> Share icon at the bottom.</li>
<li>Scroll down the menu and select <span className="text-zinc-200 font-medium">Add to Home Screen</span>.</li>
<li>Confirm by tapping <span className="text-zinc-200 font-medium">Add</span> in the top right corner.</li>
</ol>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300">
<iconify-icon height="20" icon="solar:devices-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Android</h3>
</div>
<ol className="space-y-4 text-sm text-zinc-400 font-light list-decimal list-inside">
<li>Open <span className="text-zinc-200 font-medium">app.mytradelog.com</span> in Chrome.</li>
<li>Tap the <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-white/5 border border-white/10 mx-1"><iconify-icon height="14" icon="solar:menu-dots-circle-linear" width="14"></iconify-icon></span> Menu icon in the top right.</li>
<li>Select <span className="text-zinc-200 font-medium">Add to Home screen</span> from the list.</li>
<li>Confirm by tapping <span className="text-zinc-200 font-medium">Install</span> or <span className="text-zinc-200 font-medium">Add</span>.</li>
</ol>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32" id="pricing">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Simple, transparent pricing.</h2>
<p className="text-sm text-zinc-400 font-light max-w-xl mx-auto">Get full access to all institutional-grade features. No hidden fees, no complicated tiers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Monthly</h3>
<p className="text-sm text-zinc-400 font-light mb-6">Complete flexibility for active traders.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-zinc-100">$29</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Full access to all software features
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Automated broker sync
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Deep analytics &amp; risk management
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-zinc-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Mobile web app access
                        </li>
</ul>
<a className="w-full text-sm font-medium border border-zinc-700 bg-zinc-800 text-zinc-100 px-6 py-3 rounded-full hover:bg-zinc-700 transition-colors text-center" href="#">
                        Start monthly
                    </a>
</div>

<div className="p-8 rounded-3xl border border-emerald-500/30 bg-zinc-900/40 relative flex flex-col overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.05)]">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"></div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Annual</h3>
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Save 34%</span>
</div>
<p className="text-sm text-zinc-400 font-light mb-6">Best value for committed professionals.</p>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-zinc-100">$19</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-xs text-zinc-500 mb-8 tracking-wide">Billed annually at $228</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-emerald-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Full access to all software features
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-emerald-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Automated broker sync
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-emerald-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Deep analytics &amp; risk management
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-emerald-500 mt-0.5" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Mobile web app access
                        </li>
</ul>
<a className="w-full text-sm font-medium bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full hover:bg-white transition-colors text-center shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#">
                        Start annually
                    </a>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-16">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-100 mb-4">Start optimizing your trades today.</h2>
<p className="text-sm text-zinc-400 font-light mb-8 max-w-md mx-auto">Join thousands of professional traders who rely on MTL to manage their performance.</p>
<button className="text-sm font-medium bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full hover:bg-white transition-colors shadow-lg shadow-white/5">
                    Create free account
                </button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 z-10">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tighter text-zinc-500">MTL</span>
<span className="text-xs text-zinc-600 border-l border-zinc-800 pl-2">© 2024 MyTradeLog Inc.</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
