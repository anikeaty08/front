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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
                    AUTO/MKT
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#marketplace">Marketplace</a>
<a className="hover:text-white transition-colors duration-200" href="#business">Business API</a>
<a className="hover:text-white transition-colors duration-200" href="#automation">Automation</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-sm font-medium hover:text-white transition-colors">Log in</button>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Start Selling
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[20%] left-[10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
<div className="absolute top-[30%] right-[10%] w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                v2.0: Automated Business Logic Live
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Buy, sell, and automate <br/> digital services.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The first decentralized marketplace for marketing services powered by business logic. Connect your brand to automated growth workflows.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Buy Services
                </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-transparent text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    List Service
                </button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32" id="automation">
<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-1 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#050505]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="ml-4 text-xs font-mono text-neutral-600">business-logic.js</div>
</div>

<div className="p-4 md:p-8 grid md:grid-cols-3 gap-6">

<div className="hidden md:block col-span-1 space-y-6 border-r border-white/5 pr-6">
<div className="space-y-1">
<p className="text-xs font-medium text-white uppercase tracking-wider mb-3">Active Workflows</p>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:graph-new-up-linear"></iconify-icon>
<span className="text-sm text-white">SEO Audit</span>
</div>
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm">Lead Gen</span>
</div>
<span className="text-xs text-neutral-600">Paused</span>
</div>
</div>
<div className="space-y-3">
<p className="text-xs font-medium text-white uppercase tracking-wider">Parameters</p>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Budget Cap</span>
<span className="text-white">$5,000/mo</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full">
<div className="w-3/4 bg-white h-full rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span>Auto-Approve</span>
<span className="text-white">Enabled</span>
</div>

<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-[#0A0A0A] appearance-none cursor-pointer checked:right-0 right-4 transition-all duration-200" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 relative min-h-[300px] flex flex-col justify-center items-center">
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<iconify-icon className="text-white" icon="solar:network-linear" width="200"></iconify-icon>
</div>

<div className="relative z-10 w-full max-w-md">
<div className="flex items-center justify-between mb-8 relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
<div className="w-24 p-3 rounded-xl border border-white/10 bg-[#0A0A0A] flex flex-col items-center gap-2 shadow-lg">
<iconify-icon className="text-white text-xl" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-xs">Purchase</span>
</div>
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center z-10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="w-24 p-3 rounded-xl border border-indigo-500/30 bg-indigo-500/5 flex flex-col items-center gap-2 shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs text-indigo-200">Execute</span>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center z-10 border border-white/10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="w-24 p-3 rounded-xl border border-white/10 bg-[#0A0A0A] flex flex-col items-center gap-2 shadow-lg">
<iconify-icon className="text-white text-xl" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs">Report</span>
</div>
</div>
<div className="text-center">
<div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-green-400">
                                Status: Operational (99.9% Uptime)
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5" id="marketplace">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium text-white mb-2">Curated Services</h2>
<p className="text-neutral-500 font-light">High-performance marketing tasks, ready to deploy.</p>
</div>

<div className="inline-flex p-1 bg-neutral-900 rounded-lg border border-white/5">
<button className="px-4 py-1.5 text-sm font-medium text-black bg-white rounded-md shadow-sm transition-all">All</button>
<button className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-all">SEO</button>
<button className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-all">Ads</button>
<button className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-all">Social</button>
<button className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-all">Content</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 overflow-hidden">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">Auto-Delivery</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">Technical SEO Audit</h3>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Comprehensive crawl of your website architecture, core web vitals check, and actionable JSON report.</p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500"></div>
<span className="text-xs text-neutral-400">By RankLogic</span>
</div>
<span className="text-white font-medium">$450</span>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 overflow-hidden">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">48h TAT</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">Blog Post Generation</h3>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">High-quality, human-edited content based on your keywords. Optimized for readability and engagement.</p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-500 to-red-500"></div>
<span className="text-xs text-neutral-400">By WriteFlow</span>
</div>
<span className="text-white font-medium">$0.12/word</span>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 overflow-hidden">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-300">Subscription</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">PPC Campaign Management</h3>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Continuous optimization of Google Ads and Meta Ads. ROI tracking and automated bid adjustments.</p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
<span className="text-xs text-neutral-400">By AdScale</span>
</div>
<span className="text-white font-medium">$1,200/mo</span>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                View all 142 services
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#050505] to-[#0A0A0A] border-t border-white/5" id="business">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="space-y-4 mb-8">
<div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
<span>For Businesses &amp; Agencies</span>
</div>
<h2 className="text-4xl font-medium text-white tracking-tight">Scale your agency with<br/>automated infrastructure.</h2>
<p className="text-neutral-500 leading-relaxed font-light">
                        Don't just sell time. Sell outcomes. Our API allows you to list standardized services that execute automatically upon purchase. Receive funds instantly.
                    </p>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<div className="mt-1 text-white"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<span className="text-white text-sm font-medium block">Instant Settlement</span>
<span className="text-neutral-500 text-xs">Funds released to your connected Stripe account immediately.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-white"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<span className="text-white text-sm font-medium block">Webhook Integration</span>
<span className="text-neutral-500 text-xs">Trigger internal workflows as soon as an order is placed.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-white"><iconify-icon icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<span className="text-white text-sm font-medium block">Standardized Deliverables</span>
<span className="text-neutral-500 text-xs">Define clear inputs and outputs for dispute-free transactions.</span>
</div>
</li>
</ul>
<button className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors">
                    Create Business Account
                </button>
</div>

<div className="order-1 lg:order-2 bg-[#080808] border border-white/10 rounded-xl p-6 relative">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[80px]"></div>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
<span className="text-xs font-mono text-neutral-500">POST /v1/services/create</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
<pre className="font-mono text-xs leading-6 text-neutral-400 overflow-x-auto"><span className="text-purple-400">const</span> <span className="text-blue-300">service</span> = <span className="text-purple-400">await</span> automkt.<span className="text-blue-300">create</span>({
  <span className="text-white">name</span>: <span className="text-green-400">"Social Media Audit"</span>,
  <span className="text-white">price</span>: <span className="text-orange-300">29900</span>, <span className="text-neutral-600">// in cents</span>
  <span className="text-white">fulfillment_type</span>: <span className="text-green-400">"api_webhook"</span>,
  <span className="text-white">schema</span>: {
    <span className="text-white">input</span>: [<span className="text-green-400">"url"</span>, <span className="text-green-400">"competitors"</span>],
    <span className="text-white">delivery_time</span>: <span className="text-green-400">"24h"</span>
  },
  <span className="text-white">on_purchase</span>: <span className="text-purple-400">async</span> (order) =&gt; {
    <span className="text-neutral-600">// Trigger your internal agent</span>
    <span className="text-purple-400">await</span> <span className="text-blue-300">myAgent</span>.<span className="text-blue-300">run</span>(order);
  }
});</pre>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-full"></div>
</div>
                        AUTO/MKT
                    </a>
<p className="text-xs text-neutral-500">
                        The operating system for modern digital agencies.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Browse Services</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Business API</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<span className="text-xs text-neutral-600">© 2024 AutoMkt Inc. All rights reserved.</span>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
