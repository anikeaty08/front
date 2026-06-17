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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
</nav>

<main className="md:pb-32 md:pt-12 pt-32 pb-16 relative">
<div className="absolute inset-0 z-0 bg-grid h-[800px] pointer-events-none"></div>
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

<div className="mb-8 flex justify-center fade-in">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur hover:bg-white/10 transition-colors" href="#">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="font-normal">Generator reklam AI już działa - przetestuj</span>
<iconify-icon className="" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<h1 className="bg-clip-text md:text-7xl lg:text-8xl text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white to-white/40 max-w-4xl mr-auto ml-auto pb-2">Twój klucz do sukcesu? <br/>  AI ecommerce</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 max-w-2xl mt-6 mr-auto ml-auto">
                Automate payouts, unify revenue streams, and access capital. 
                The infrastructure layer for the next generation of digital entrepreneurs.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all text-sm font-medium text-black bg-white h-10 rounded-full pr-8 pl-8 shadow-lg" href="/www.youtube.com">
                    Start Dashboard
                    <iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
<a className="flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-white hover:bg-white/5 transition-all" href="#">
                    View Documentation
                    <div className="text-xs text-neutral-500">⌘K</div>
</a>
</div>
</div>
</main>

<section className="relative z-20 -mt-12 px-2 md:-mt-20 md:px-6">
<div className="mx-auto max-w-6xl rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden backdrop-blur-sm">

<div className="flex border-white/5 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-white/10"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/10"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/10"></div>
</div>
<div className="flex items-center gap-2 rounded border border-white/5 bg-black/50 px-3 py-1 text-xs text-neutral-500">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                    cre.engine/dashboard
                </div>
<div className="h-4 w-4"></div>
</div>

<div className="grid gap-0 md:grid-cols-[240px_1fr]">

<div className="hidden border-r border-white/5 bg-black/20 p-4 md:block">
<div className="space-y-1">
<div className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2 text-sm text-white">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                            Overview
                        </div>
<div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-500 hover:bg-white/5 hover:text-neutral-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
                            Payouts
                        </div>
<div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-500 hover:bg-white/5 hover:text-neutral-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                            Analytics
                        </div>
<div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-500 hover:bg-white/5 hover:text-neutral-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                            Audience
                        </div>
</div>
<div className="mt-8 px-3">
<p className="text-xs font-medium text-neutral-600 uppercase tracking-wider mb-3">Sources</p>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div> Stripe</span>
<span>Connected</span>
</div>
<div className="flex items-center justify-between text-xs text-neutral-400">
<span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-red-500"></div> YouTube</span>
<span>Connected</span>
</div>
</div>
</div>
</div>

<div className="md:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div className="">
<p className="text-sm text-neutral-500 mb-1">Total Balance</p>
<h2 className="text-4xl font-medium text-white tracking-tight">$124,592.00</h2>
</div>
<div className="flex gap-3">
<button className="hover:bg-white/10 transition-colors text-xs font-medium text-white bg-white/5 border-white/10 border rounded-md pt-2 pr-4 pb-2 pl-4">Withdraw</button>
<button className="hover:bg-neutral-200 transition-colors text-xs font-medium text-black bg-white rounded-md pt-2 pr-4 pb-2 pl-4">Add Funds</button>
</div>
</div>

<div className="mb-8 h-48 w-full border-b border-l border-white/5 relative">

<div className="absolute bottom-0 w-full h-px bg-white/5"></div>
<div className="absolute bottom-1/4 w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="absolute bottom-2/4 w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="absolute bottom-3/4 w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>

<div className="absolute inset-0 flex items-end justify-between px-2 pt-8 gap-2">
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[30%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[45%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[35%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[60%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[50%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[75%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[65%]"></div>
<div className="w-full bg-white/5 hover:bg-white/10 transition-colors rounded-t-sm h-[85%]"></div>
<div className="w-full bg-gradient-to-t from-white/20 to-white/60 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
</div>
</div>
</div>

<div className="rounded-lg border border-white/5 bg-white/[0.02] p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:settings-linear"></iconify-icon>
                Projection Simulator
            </div>
<span className="text-xs text-neutral-500">Based on current growth</span>
</div>
<div className="mb-2 flex justify-between text-xs text-neutral-400">
<span className="">Growth Rate</span>
<span className="text-white">12.5%</span>
</div>
<input className="mb-6" max="100" min="0" type="range" value="65"/>

<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Include Sponsorships</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle-sponsors">
<input className="sr-only peer" id="toggle-sponsors" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-500 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-700 peer-checked:after:bg-white"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5">
<div className="mx-auto max-w-7xl px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-600 mb-8">Powering top earners from</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale mix-blend-screen">
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:plain-linear"></iconify-icon> ACME</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:atom-linear"></iconify-icon> KINETIC</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:box-linear"></iconify-icon> BOXER</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:crown-linear"></iconify-icon> ROYAL</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon icon="solar:infinity-linear"></iconify-icon> LOOP</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Everything you need to  run your business.</h2>
<p className="mt-4 text-neutral-400">Modular components designed for scale. Use them individually or as a complete stack.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-colors duration-300">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:card-send-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Payouts</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Stop waiting 60 days for brand checks. Get paid instantly for your work with our liquidity engine.
                    </p>
<div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-tl from-white/5 to-transparent blur-2xl group-hover:from-white/10 transition-all"></div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 md:col-span-2 hover:border-white/20 transition-colors duration-300">
<div className="flex flex-col md:flex-row h-full">
<div className="flex-1 pr-0 md:pr-8">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon className="" icon="solar:graph-new-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Unified Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Connect Stripe, AdSense, and affiliate networks. Visualize your net worth in real-time across all platforms.
                            </p>
</div>
<div className="mt-8 md:mt-0 flex-1 relative min-h-[150px]">

<div className="absolute inset-0 rounded-tl-lg border-t border-l border-white/10 bg-white/[0.02] p-4">
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="h-2 w-16 rounded bg-white/10"></div>
<div className="h-2 w-8 rounded bg-emerald-500/20"></div>
</div>
<div className="flex items-center justify-between">
<div className="h-2 w-24 rounded bg-white/10"></div>
<div className="h-2 w-12 rounded bg-white/5"></div>
</div>
<div className="mt-4 h-24 w-full rounded border border-white/5 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 md:col-span-2 hover:border-white/20 transition-colors duration-300">
<div className="flex flex-col-reverse md:flex-row h-full gap-8">
<div className="flex-1 relative min-h-[150px]">

<div className="flex absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-center">
<div className="flex text-xs text-white bg-white/5 w-12 h-12 border-white/10 border rounded-full items-center justify-center">PDF</div>
<div className="h-px w-12 bg-white/10"></div>
<div className="flex text-emerald-500 bg-emerald-500/10 w-12 h-12 border-emerald-500/20 border rounded-full items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex-1">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Automated Invoicing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Automatically generate and send tax-compliant invoices. Track views, clicks, and conversion events to trigger payments.
                            </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-colors duration-300">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Vault Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Bank-grade encryption for your financial data. SOC2 compliant and 2FA enforced by default.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/10">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 md:grid-cols-2 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Built for scale,designed for speed.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Real-time Sync</h4>
<p className="text-sm text-neutral-400 mt-1">Data refreshes every 30 seconds via webhooks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
<iconify-icon icon="solar:global-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Multi-Currency</h4>
<p className="text-sm text-neutral-400 mt-1">Hold balances in USD, EUR, GBP, and 30+ others.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
<iconify-icon icon="solar:code-scan-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Developer First</h4>
<p className="text-sm text-neutral-400 mt-1">Full API access to build your own internal tools.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-50 blur-xl"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] p-8">
<div className="space-y-4 font-mono text-xs text-neutral-400">
<div className="flex items-center gap-2">
<span className="text-purple-400">POST</span>
<span className="text-white">/v2/revenue/sync</span>
</div>
<div className="pl-4 border-l border-white/10 space-y-2">
<p><span className="text-blue-400">"source"</span>: <span className="text-orange-300">"youtube"</span>,</p>
<p><span className="text-blue-400">"period"</span>: <span className="text-orange-300">"current_month"</span>,</p>
<p><span className="text-blue-400">"webhook"</span>: <span className="text-neutral-500">true</span></p>
</div>
<div className="mt-4 pt-4 border-t border-white/5 text-emerald-400">
                                 // 200 OK - 24ms
                             </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 text-center">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Ready to professionalize your passion?</h2>
<p className="text-neutral-400 mb-10 text-lg">Join 10,000+ creators managing over $500M in annual revenue.</p>
<div className="flex flex-col justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-black hover:bg-neutral-200 transition-colors" href="#">
                    Get Started for Free
                </a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 font-medium text-white hover:bg-white/5 transition-colors" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 text-white mb-4">
<div className="flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-white/5">
<span className="font-bold text-xs">C</span>
</div>
<span className="font-medium tracking-tight">Creator Revenue Engine</span>
</div>
<p className="text-sm text-neutral-500 mb-6 max-w-xs">
                        The operating system for the creator economy. Manage finances, analytics, and operations in one place.
                    </p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<p className="text-xs text-neutral-600">© 2024 Creator Revenue Engine Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-neutral-500">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
