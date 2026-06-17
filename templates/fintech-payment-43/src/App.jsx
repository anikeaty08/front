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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase" href="#">FLWNT</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Contact Sales</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors" href="#">Start Integration</a>
</div>

<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="pt-32 pb-16 md:pt-48 md:pb-24">
<div className="max-w-5xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[1.05] text-zinc-950">
                Global payment infrastructure <br className="hidden lg:block"/>
<span className="text-zinc-400">for fiat and stablecoins</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                Unified APIs for payments, treasury, and FX routing across global markets with bank-grade compliance.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#">
                    Start Integration
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors" href="#">
                    Contact Sales
                </a>
</div>
</div>
</main>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="pt-8 md:pt-0">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-950">99.99%</div>
<div className="text-sm font-medium text-zinc-500 mt-2">Settlement success rate</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-950">&lt;5s</div>
<div className="text-sm font-medium text-zinc-500 mt-2">Cross-border processing</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-950">50+</div>
<div className="text-sm font-medium text-zinc-500 mt-2">Countries supported</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Financial infrastructure APIs</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-zinc-50 rounded-[2rem] p-8 md:p-10 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:card-send-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-3">Payments</h3>
<p className="text-zinc-600 mb-8 leading-relaxed">Accept global payments across cards, bank transfers, and crypto.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Multi-currency checkout</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Smart routing for higher approval rates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Local payment methods worldwide</span>
</li>
</ul>
</div>

<div className="bg-zinc-50 rounded-[2rem] p-8 md:p-10 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-3">Payouts</h3>
<p className="text-zinc-600 mb-8 leading-relaxed">Send funds globally with real-time settlement.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Instant payouts to bank accounts and wallets</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Support for fiat and stablecoins</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Optimized cross-border transfers</span>
</li>
</ul>
</div>

<div className="bg-zinc-50 rounded-[2rem] p-8 md:p-10 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:safe-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-3">Treasury</h3>
<p className="text-zinc-600 mb-8 leading-relaxed">Manage and move funds across currencies with full control.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Multi-currency accounts</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Real-time balance visibility</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Automated fund routing</span>
</li>
</ul>
</div>

<div className="bg-zinc-50 rounded-[2rem] p-8 md:p-10 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:transfer-horizontal-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-3">FX &amp; Conversion</h3>
<p className="text-zinc-600 mb-8 leading-relaxed">Optimize currency conversion with intelligent routing.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Competitive FX rates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Real-time conversion</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-zinc-700">Liquidity aggregation</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 md:px-6 mb-24 md:mb-32">
<div className="bg-zinc-950 text-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-24 overflow-hidden relative">
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 max-w-xl">Built for global financial operations</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
<div>
<iconify-icon className="text-zinc-400 mb-6" icon="solar:bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight mb-3">Real-time settlement</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Move funds instantly with minimal delay across major currencies and rails.</p>
</div>
<div>
<iconify-icon className="text-zinc-400 mb-6" icon="solar:tag-price-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight mb-3">Lower cross-border costs</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Reduce fees with optimized routing and aggregated deep liquidity.</p>
</div>
<div>
<iconify-icon className="text-zinc-400 mb-6" icon="solar:chart-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight mb-3">Higher acceptance rates</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Improve payment success globally with smart, localized processing.</p>
</div>
<div>
<iconify-icon className="text-zinc-400 mb-6" icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight mb-3">Built-in compliance</h4>
<p className="text-sm text-zinc-400 leading-relaxed">KYT, AML, and KYC compliance protocols integrated by default.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-100 bg-zinc-50/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
<div className="lg:w-1/3">
<div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900" icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">Regulatory &amp; compliance ready</h2>
<p className="text-zinc-500 leading-relaxed">Licensed and aligned with global regulatory standards to ensure secure and uninterrupted operations.</p>
</div>
<div className="lg:w-2/3 w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
<div className="border-t border-zinc-200 pt-6">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2 uppercase tracking-widest text-xs">European Union</h4>
<p className="text-sm text-zinc-600">EMI-aligned operations</p>
</div>
<div className="border-t border-zinc-200 pt-6">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2 uppercase tracking-widest text-xs">Canada</h4>
<p className="text-sm text-zinc-600">MSB registration</p>
</div>
<div className="border-t border-zinc-200 pt-6">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2 uppercase tracking-widest text-xs">Global</h4>
<p className="text-sm text-zinc-600">KYT / AML / KYC compliance</p>
</div>
<div className="border-t border-zinc-200 pt-6">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2 uppercase tracking-widest text-xs">Security</h4>
<p className="text-sm text-zinc-600">Bank-grade infrastructure and controls</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Built for modern platforms</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm">
<iconify-icon className="text-zinc-900 mb-8" icon="solar:cart-large-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Cross-border commerce</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Accept and settle payments globally with local payment methods favored by your customers.</p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm">
<iconify-icon className="text-zinc-900 mb-8" icon="solar:star-fall-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Creator economy</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Enable instant, low-cost payouts to creators and freelancers anywhere in the world.</p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm">
<iconify-icon className="text-zinc-900 mb-8" icon="solar:plane-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight mb-3">Travel &amp; mobility</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Power complex real-time payments and routing for global users, drivers, and services.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-zinc-100">
<iconify-icon className="text-zinc-900" icon="solar:earth-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-8">Operate without borders</h2>
<p className="text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed">
                Connect to global payment rails across <span className="text-zinc-900 font-medium">Europe, Latin America, Africa, and Asia-Pacific.</span>
</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<div className="px-6 py-3 bg-white rounded-full border border-zinc-200 shadow-sm text-sm font-medium text-zinc-800">50+ countries</div>
<div className="px-6 py-3 bg-white rounded-full border border-zinc-200 shadow-sm text-sm font-medium text-zinc-800">120+ payment methods</div>
<div className="px-6 py-3 bg-white rounded-full border border-zinc-200 shadow-sm text-sm font-medium text-zinc-800">30+ currencies</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-950 mb-10">Build your global payment stack</h2>
<a className="inline-flex items-center justify-center px-10 py-5 bg-zinc-950 text-white rounded-full font-medium text-base hover:bg-zinc-800 transition-colors gap-2" href="#">
                Start Integration
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-zinc-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-semibold tracking-tighter uppercase text-zinc-950">FLWNT</div>
<p className="text-xs text-zinc-500">© 2024 FlowNet Infrastructure. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
