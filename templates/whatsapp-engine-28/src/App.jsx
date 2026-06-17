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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl tracking-tighter font-medium text-white flex items-center gap-1" href="#">
<span className="text-emerald-400">/</span>WA.
                </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Capabilities</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 rounded-full px-3 py-1 text-xs font-medium text-emerald-400 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                v2.0 is now live. Zero markup fees.
            </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                The developer-first <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">WhatsApp Engine.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Build sophisticated marketing flows, automate support, and scale your audience without the enterprise bloat. Direct API access, visual builder, and raw performance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                    Start deploying
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-900 transition-all flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
                    View Documentation
                </button>
</div>
</div>
</header>

<section className="pb-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur overflow-hidden shadow-2xl relative group">

<div className="h-10 border-b border-zinc-800 bg-zinc-900/80 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="ml-4 h-5 w-64 bg-zinc-800 rounded text-[10px] text-zinc-500 flex items-center px-2 font-mono">
                        wa.platform/dashboard/flows
                    </div>
</div>

<div className="flex h-[500px] text-xs font-mono">

<div className="w-16 lg:w-64 border-r border-zinc-800 bg-zinc-950/50 p-4 hidden md:flex flex-col gap-6">
<div className="flex items-center gap-2 text-emerald-400">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
<span className="hidden lg:inline font-medium">Active Flows</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-2 rounded bg-zinc-800/50 text-zinc-200 border border-zinc-700/50">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="hidden lg:inline">Audience Segments</span>
</div>
<div className="flex items-center gap-2 px-2 py-2 rounded text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
<span className="hidden lg:inline">Analytics</span>
</div>
<div className="flex items-center gap-2 px-2 py-2 rounded text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
<span className="hidden lg:inline">API Keys</span>
</div>
</div>
</div>

<div className="flex-1 bg-zinc-950 relative overflow-hidden p-8">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative w-full h-full">

<div className="absolute top-10 left-10 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4 z-10 hover:border-emerald-500/50 transition-colors">
<div className="flex justify-between items-center mb-3">
<span className="text-zinc-400 font-sans font-medium">Trigger</span>
<iconify-icon className="text-emerald-400" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="bg-zinc-950 rounded p-2 text-zinc-500 border border-zinc-800">
                                    Incoming Message: "SALE"
                                </div>

<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-600 rounded-full border-2 border-zinc-900"></div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
<path d="M 160 135 L 160 180 L 400 180 L 400 220" fill="none" stroke="#3f3f46" stroke-dasharray="5,5" strokeWidth="2"></path>
<path d="M 400 335 L 400 380" fill="none" stroke="#3f3f46" strokeWidth="2"></path>
</svg>

<div className="absolute top-56 left-64 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4 z-10 hover:border-emerald-500/50 transition-colors">
<div className="flex justify-between items-center mb-3">
<span className="text-zinc-400 font-sans font-medium">Action: Send Template</span>
<iconify-icon className="text-blue-400" icon="solar:chat-line-linear"></iconify-icon>
</div>
<div className="bg-zinc-950 rounded p-2 text-zinc-500 border border-zinc-800 mb-2">
                                    Template: <span className="text-zinc-300">seasonal_promo_v2</span>
</div>
<div className="flex gap-2">
<div className="h-1.5 w-full bg-emerald-500/20 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-emerald-500"></div>
</div>
</div>
<div className="mt-1 flex justify-between text-[10px] text-zinc-500">
<span>Delivered</span>
<span>98.2%</span>
</div>

<div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-600 rounded-full border-2 border-zinc-900"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-6">
                    Radically simple pricing. <br/>
<span className="text-zinc-500">Just the engine. No added tax.</span>
</h2>
<p className="text-zinc-400 font-light mb-8 leading-relaxed">
                    Most platforms charge a markup on every message you send. We don't. You pay a flat subscription fee for the platform, and pay Meta directly for conversation costs.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Zero markup on message costs
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Unlimited contacts &amp; broadcasts
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Full API access included
                    </li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
<div className="relative glass-card rounded-2xl p-8 border border-zinc-800">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-sm font-medium text-emerald-400 mb-1">PRO LICENCE</p>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium text-white tracking-tight">$10</span>
<span className="text-zinc-500">/month</span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>
<hr className="border-zinc-800 mb-8"/>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Platform Fee</span>
<span className="text-white">$10.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Message Markup</span>
<span className="text-emerald-400 line-through decoration-zinc-500">$0.005/msg</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Hidden Fees</span>
<span className="text-white">$0.00</span>
</div>
</div>
<button className="w-full h-12 rounded bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        Subscribe Now
                    </button>
<p className="text-xs text-center text-zinc-600 mt-4">Cancel anytime. 14-day refund policy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Core Architecture</h2>
<p className="text-zinc-400 font-light max-w-2xl">Everything you need to orchestrate complex communication flows at scale.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl border border-zinc-800 group glow-hover transition-all duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Visual Logic Builder</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Design decision trees and automated responses using our node-based editor. No code required, just logic.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border border-zinc-800 group glow-hover transition-all duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time CRM Sync</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Bi-directional sync with your existing database. Webhooks for every message event: sent, delivered, read.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border border-zinc-800 group glow-hover transition-all duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        End-to-end encryption compliance. Role-based access control. Data residency options available.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border border-zinc-800 group glow-hover transition-all duration-300 md:col-span-2">
<div className="flex items-start justify-between">
<div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Granular Analytics</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                                Track delivery rates, read receipts, and button click-throughs in real-time. Export raw data as JSON or CSV.
                            </p>
</div>

<div className="hidden sm:flex gap-1 h-24 items-end opacity-50">
<div className="w-3 bg-emerald-500/20 h-8 rounded-t"></div>
<div className="w-3 bg-emerald-500/40 h-12 rounded-t"></div>
<div className="w-3 bg-emerald-500/60 h-16 rounded-t"></div>
<div className="w-3 bg-emerald-500/80 h-10 rounded-t"></div>
<div className="w-3 bg-emerald-500 h-20 rounded-t"></div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl border border-zinc-800 group glow-hover transition-all duration-300">
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">REST API</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
<code>POST /v1/messages</code><br/>
                        Simple, documented, and robust API endpoints for developers.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Technical FAQ</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer text-zinc-200 hover:bg-zinc-800/50 transition-colors font-medium">
                        Do I need a Meta Business Account?
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-800/50 mt-2">
                        Yes. Our platform acts as the interface for the WhatsApp Business API. You will connect your own Meta Business Manager account. This ensures you own your audience data completely.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer text-zinc-200 hover:bg-zinc-800/50 transition-colors font-medium">
                        How is the $10/mo billed?
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-800/50 mt-2">
                        It's a flat monthly subscription charged via Stripe. There are no volume tiers for our platform fee. Whether you send 100 or 100,000 messages, our fee remains $10.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer text-zinc-200 hover:bg-zinc-800/50 transition-colors font-medium">
                        Can I migrate from Twilio/MessageBird?
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-800/50 mt-2">
                        Absolutely. We support WABA (WhatsApp Business API) number migration. The process typically takes 15-30 minutes and results in zero downtime for your number.
                    </div>
</details>
<details className="group bg-zinc-900/30 border border-zinc-800 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer text-zinc-200 hover:bg-zinc-800/50 transition-colors font-medium">
                        Is green tick verification included?
                        <span className="text-zinc-500 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-800/50 mt-2">
                        We assist with the application process for the Official Business Account (Green Tick), but approval is solely at Meta's discretion based on your brand presence.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale?</h2>
<p className="text-zinc-400 text-lg font-light mb-10">
                Join 5,000+ developers and marketers building better connections.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                    Get Started for $10
                </button>
<button className="h-14 px-8 rounded-full border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-900 transition-colors w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl tracking-tighter font-medium text-white flex items-center gap-1 mb-6" href="#">
<span className="text-emerald-400">/</span>WA.
                    </a>
<p className="text-zinc-500 font-light max-w-xs mb-6">
                        The infrastructure layer for modern WhatsApp marketing. Precision engineered for growth.
                    </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white">Product</h4>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Features</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white">Resources</h4>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Community</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Status</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white">Company</h4>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Legal</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8 gap-4">
<p className="text-zinc-600">© 2024 WA Platform Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-zinc-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
