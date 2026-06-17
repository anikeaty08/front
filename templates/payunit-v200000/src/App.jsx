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
      

<header className="fixed top-0 inset-x-0 z-50 bg-neutral-50/80 backdrop-blur-lg border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-lg font-semibold tracking-tighter text-neutral-900" href="#">
                    PAYUNIT
                </a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors flex items-center gap-1" href="#products">
                        Products <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#developers">Developers</a>
<a className="hover:text-neutral-900 transition-colors" href="#company">Company</a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Sign in</a>
<a className="bg-neutral-900 text-white hover:bg-neutral-800 text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm flex items-center gap-2" href="#contact">
                    Start building <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[8rem] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white shadow-sm text-xs font-medium text-neutral-600 mb-8 hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon className="text-teal-600" icon="solar:star-fall-linear"></iconify-icon>
                Introducing PayUnit V2.0
                <iconify-icon className="text-neutral-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-semibold tracking-tighter text-neutral-900 leading-[1.05] mb-6 max-w-4xl">
                The payment infrastructure for <span className="text-neutral-400">Africa's internet.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl font-normal leading-relaxed mb-10">
                A fully integrated suite of payments products. Accept mobile money, process cards, and scale your operations across the continent with a single API.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-neutral-900 text-white hover:bg-neutral-800 px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2" href="#contact">
                    Start integrating <iconify-icon icon="solar:code-square-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2" href="#docs">
                    Read the docs
                </a>
</div>

<div className="w-full max-w-5xl mt-20 md:mt-24">
<div className="rounded-2xl border border-neutral-200/80 bg-white/50 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-2">
<img alt="Dashboard" className="rounded-xl border border-neutral-100 w-full h-auto object-cover block" src="https://web.payunit.net/images/hero/Transactions.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs font-medium text-center text-neutral-400 tracking-tight uppercase mb-8">Trusted by innovative teams across Africa</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale">
<span className="text-xl font-semibold tracking-tighter text-neutral-800">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-800">GLOBEX</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-800">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-800">INITECH</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-800">UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Everything you need to scale</h2>
<p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">We've built a comprehensive toolset to handle the complexity of African payments so you can focus on building your product.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-8xl text-neutral-900" icon="solar:earth-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200/50">
<iconify-icon className="text-xl text-neutral-700" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Global reach, local methods</h3>
<p className="text-base text-neutral-500 max-w-md leading-relaxed">Accept Mobile Money (MoMo), Orange Money, cards, and bank transfers across multiple countries with zero friction.</p>
</div>

<div className="bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200/50">
<iconify-icon className="text-xl text-neutral-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Fraud prevention</h3>
<p className="text-base text-neutral-500 leading-relaxed">Enterprise-grade security and machine learning to detect and block fraudulent transactions instantly.</p>
</div>

<div className="bg-white rounded-3xl border border-neutral-200/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200/50">
<iconify-icon className="text-xl text-neutral-700" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Smart analytics</h3>
<p className="text-base text-neutral-500 leading-relaxed">Real-time reporting and automated reconciliation to keep your finance team happy.</p>
</div>

<div className="md:col-span-2 bg-neutral-900 rounded-3xl border border-neutral-800 p-8 md:p-12 shadow-xl relative overflow-hidden text-white">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 border border-neutral-700/50">
<iconify-icon className="text-xl text-white" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Lightning fast settlements</h3>
<p className="text-base text-neutral-400 max-w-md leading-relaxed mb-8">Get your funds faster. Our optimized banking network ensures your business cashflow remains uninterrupted with T+1 settlements.</p>
<div className="flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors cursor-pointer w-max">
                            Explore payouts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24 md:py-32 relative border-t border-neutral-800" id="developers">
<div className="absolute inset-0 dark-grid pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-400 mb-6">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> For Developers
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Designed for <br/> builder experience
                    </h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-md">
                        Drop in our pre-built UI components or use our robust API to craft completely custom payment flows. Well-documented, highly reliable.
                    </p>
<ul className="space-y-4 mb-10 text-sm font-medium text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Webhooks for real-time updates
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Idempotent API endpoints
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Comprehensive SDKs (Node, Python, PHP)
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 px-5 py-2.5 rounded-full transition-colors border border-neutral-700" href="#">
                        Read documentation <iconify-icon icon="solar:document-text-linear"></iconify-icon>
</a>
</div>

<div className="rounded-2xl border border-neutral-800 bg-[#111111] shadow-2xl overflow-hidden">
<div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#0A0A0A]">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<span className="ml-4 text-xs font-medium text-neutral-500">create-payment.js</span>
</div>
<div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-neutral-300">
<pre><code><span className="token keyword">import</span> <span className="token punctuation">{</span> PayUnit <span className="token punctuation">}</span> <span className="token keyword">from</span> <span className="token string">'@payunit/node'</span><span className="token punctuation">;</span>

<span className="token keyword">const</span> payunit <span className="token operator">=</span> <span className="token keyword">new</span> <span className="token function">PayUnit</span><span className="token punctuation">(</span><span className="token string">'sk_live_12345'</span><span className="token punctuation">)</span><span className="token punctuation">;</span>

<span className="token keyword">const</span> transaction <span className="token operator">=</span> <span className="token keyword">await</span> payunit<span className="token punctuation">.</span><span className="token property">payments</span><span className="token punctuation">.</span><span className="token function">create</span><span className="token punctuation">({</span>
  <span className="token property">amount</span><span className="token punctuation">:</span> <span className="token number">5000</span><span className="token punctuation">,</span>
  <span className="token property">currency</span><span className="token punctuation">:</span> <span className="token string">'XAF'</span><span className="token punctuation">,</span>
  <span className="token property">method</span><span className="token punctuation">:</span> <span className="token string">'momo'</span><span className="token punctuation">,</span>
  <span className="token property">customer</span><span className="token punctuation">:</span> <span className="token punctuation">{</span>
    <span className="token property">email</span><span className="token punctuation">:</span> <span className="token string">'user@example.com'</span><span className="token punctuation">,</span>
    <span className="token property">phone</span><span className="token punctuation">:</span> <span className="token string">'+237670000000'</span>
  <span className="token punctuation">}</span><span className="token punctuation">,</span>
  <span className="token property">return_url</span><span className="token punctuation">:</span> <span className="token string">'https://store.com/success'</span>
<span className="token punctuation">});</span>

<span className="token function">redirect</span><span className="token punctuation">(</span>transaction<span className="token punctuation">.</span><span className="token property">checkout_url</span><span className="token punctuation">);</span></code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center divide-x divide-neutral-100">
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">99.9%</span>
<span className="text-sm font-medium text-neutral-500">Uptime SLA</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">15+</span>
<span className="text-sm font-medium text-neutral-500">Countries</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">50M+</span>
<span className="text-sm font-medium text-neutral-500">Transactions processed</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">24/7</span>
<span className="text-sm font-medium text-neutral-500">Expert support</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-50 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Ready to upgrade your infrastructure?
                    </h2>
<p className="text-lg text-neutral-500 mb-12 leading-relaxed max-w-md">
                        Our team is ready to help you implement the perfect payment flow for your business model.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-lg text-neutral-700" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Sales inquiries</h4>
<p className="text-sm text-neutral-500">sales@payunit.net</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-lg text-neutral-700" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Headquarters</h4>
<p className="text-sm text-neutral-500">Campus SIU, Sable Akwa-nord<br/>Douala, Cameroon</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-200/60">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-600">First Name</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:bg-white transition-all" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-600">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:bg-white transition-all" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-600">Work Email</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:bg-white transition-all" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-600">Company Name</label>
<input className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:bg-white transition-all" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-600">How can we help?</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:bg-white transition-all resize-none" rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group mt-4">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-neutral-300 rounded bg-white checked:bg-neutral-900 checked:border-neutral-900 transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-700 transition-colors">
                                I agree to receive communications from PayUnit and understand I can unsubscribe at any time.
                            </span>
</label>
<button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 rounded-xl transition-colors mt-4" type="button">
                            Submit request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

<div className="col-span-2">
<a className="text-lg font-semibold tracking-tighter text-neutral-900 mb-4 block" href="#">
                        PAYUNIT
                    </a>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Building the financial infrastructure for the next billion users in Africa.
                    </p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:hashtag-square-linear"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Products</h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Payments</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Checkouts</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Payouts</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Fraud Engine</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Developers</h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Company</h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">
                    © 2024 PayUnit. All rights reserved.
                </p>
<div className="flex gap-6 text-xs text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
