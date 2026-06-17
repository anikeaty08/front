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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-slate-950 flex items-center gap-2" href="#">
<span className="w-5 h-5 bg-slate-900 rounded-sm flex items-center justify-center text-white text-[10px] font-bold">L</span>
                LUMINARY
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#collections">Collections</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Membership</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.2)]" href="#">
                    Apply for Wholesale
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-mask z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide">ACCEPTING NEW RETAIL PARTNERS</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-950 mb-6 leading-[1.1]">
                    Scale your beauty brand with <br className="hidden md:block"/>
<span className="text-slate-400">factory-direct</span> precision.
                </h1>
<p className="text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed font-light">
                    Sourcing premium raw hair, HD lace, and custom units for salons and distributors. Consistent quality, ethical sourcing, and private labeling infrastructure built for scale.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-8 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
                        Start Wholesale Application
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 h-12 px-8 rounded-full font-medium transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i>
                        Download Catalog
                    </button>
</div>

<div className="mt-20 pt-10 border-t border-slate-100 w-full">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Trusted by 500+ Top Salons</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">

<div className="text-lg font-bold tracking-tighter">VOGUE<span className="font-light">STYLES</span></div>
<div className="text-lg font-serif italic">Velvet &amp; Co.</div>
<div className="text-lg font-medium tracking-wide">MANE</div>
<div className="text-lg font-bold font-mono">ROOTS/LAB</div>
<div className="text-lg font-semibold tracking-tighter">ELITE HAIR</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Engineered for your margins.</h2>
<p className="text-slate-500 text-lg max-w-2xl">We remove the inconsistency of overseas vendors. You get a reliable supply chain that acts as an extension of your brand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-48 h-48 stroke-1" data-lucide="box"></i>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900 border border-slate-200">
<i className="w-5 h-5" data-lucide="package-check"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Private Label Ready</h3>
<p className="text-slate-500 leading-relaxed max-w-md">Complete branding solutions. We design and print your tags, wraps, and silk bags. Orders arrive ready to sell, so you focus on marketing, not packaging.</p>
<div className="mt-8 flex gap-3">
<div className="h-8 px-3 rounded border border-slate-200 bg-slate-50 text-xs font-medium flex items-center text-slate-500">Custom Tags</div>
<div className="h-8 px-3 rounded border border-slate-200 bg-slate-50 text-xs font-medium flex items-center text-slate-500">Satin Bags</div>
<div className="h-8 px-3 rounded border border-slate-200 bg-slate-50 text-xs font-medium flex items-center text-slate-500">Box Branding</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
<div>
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900 border border-slate-200">
<i className="w-5 h-5" data-lucide="gem"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Raw Temple Hair</h3>
<p className="text-slate-500 text-sm leading-relaxed">Single-donor, cuticle-aligned hair sourced directly from temples in South India. No acid baths, no synthetic fillers.</p>
</div>
<div className="mt-8">
<div className="flex items-center gap-2 text-sm text-slate-900 font-medium">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Double Drawn
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-900 font-medium mt-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Can Bleach to #613
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
<div>
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900 border border-slate-200">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Fast Logistics</h3>
<p className="text-slate-500 text-sm leading-relaxed">US-based warehousing for top SKUs. Next-day shipping available for samples. 5-7 day turnaround for bulk custom orders.</p>
</div>
<div className="mt-6 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-900 h-full w-3/4"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2">
<span>Processing</span>
<span>Shipping</span>
<span className="text-slate-900 font-medium">Delivered</span>
</div>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-sm relative overflow-hidden text-white">
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="max-w-md">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-white border border-slate-700">
<i className="w-5 h-5" data-lucide="chart-line"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Scalable Inventory</h3>
<p className="text-slate-400 leading-relaxed">Whether you need 10 bundles or 10,000, our manufacturing capacity scales with you. Low MOQs to start, tier-based discounts as you grow.</p>
</div>
<div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 backdrop-blur-sm min-w-[200px]">
<div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Current Stock</div>
<div className="flex items-end gap-2 mb-1">
<span className="text-3xl font-medium">14,205</span>
<span className="text-emerald-400 text-sm mb-1">Units</span>
</div>
<div className="text-xs text-slate-500">Available for immediate ship</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="collections">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Curated Collections</h2>
<p className="text-slate-500 mt-2">High-fidelity textures for discerning clientele.</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View Full Catalog <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Straight Hair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-900">12" - 30" Available</span>
<span className="text-xs text-slate-500">$35+ / bundle</span>
</div>
</div>
</div>
</div>
<h3 className="font-medium text-slate-900">Sleek Straight</h3>
<p className="text-sm text-slate-500">Raw Indian, Natural Black</p>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Body Wave" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-900">HD Lace Available</span>
<span className="text-xs text-slate-500">$42+ / bundle</span>
</div>
</div>
</div>
</div>
<h3 className="font-medium text-slate-900">Lux Body Wave</h3>
<p className="text-sm text-slate-500">Virgin Brazilian, High Luster</p>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Curly Hair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-slate-900">Steam Processed</span>
<span className="text-xs text-slate-500">$38+ / bundle</span>
</div>
</div>
</div>
</div>
<h3 className="font-medium text-slate-900">Exotic Deep Curly</h3>
<p className="text-sm text-slate-500">Burmese, Low Luster</p>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Blonde" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-sm">HOT SELLER</span>
</div>
</div>
<h3 className="font-medium text-slate-900">613 Blonde Series</h3>
<p className="text-sm text-slate-500">Russian, Double Drawn</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Streamlined sourcing workflow.</h2>
<p className="text-slate-500">From application to delivery in 4 simple steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-slate-200 -z-0 transform translate-y-1/2"></div>

<div className="relative z-10 bg-slate-50 pr-4">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-medium shadow-sm mb-6 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Apply</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Submit your business license and tax ID for verification. Approvals within 24 hours.</p>
</div>

<div className="relative z-10 bg-slate-50 pr-4 pl-4">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-medium shadow-sm mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Sample</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Order a sample kit to test texture, weft construction, and lace quality firsthand.</p>
</div>

<div className="relative z-10 bg-slate-50 pr-4 pl-4">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-medium shadow-sm mb-6 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Customize</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Upload your logo. Select packaging. Define your private label requirements.</p>
</div>

<div className="relative z-10 bg-slate-50 pl-4">
<div className="w-12 h-12 bg-slate-900 border border-slate-900 rounded-full flex items-center justify-center text-white font-medium shadow-sm mb-6 mx-auto md:mx-0">4</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 text-center md:text-left">Scale</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Place bulk orders via our portal. Track shipments. Reorder with one click.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Membership Tiers</h2>
<p className="text-slate-500">Choose the level that fits your business volume. No hidden fees.</p>

<div className="flex items-center justify-center mt-8 gap-3">
<span className="text-sm font-medium text-slate-900">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="billing-toggle">
<input className="sr-only toggle-checkbox peer" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900 toggle-label"></div>
</label>
<span className="text-sm font-medium text-slate-500">Yearly <span className="text-emerald-500 text-xs ml-1 font-semibold">-15%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative">
<h3 className="font-medium text-slate-900 text-lg mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-slate-900 tracking-tight">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">Perfect for independent stylists testing the waters.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Wholesale Pricing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> MOQ: 5 Bundles
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Standard Support
                        </li>
</ul>
<button className="w-full py-3 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Apply Now</button>
</div>

<div className="border border-slate-900 bg-slate-900 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 relative transform md:-translate-y-4 text-white">
<div className="absolute top-0 right-0 -mt-3 mr-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">Most Popular</div>
<h3 className="font-medium text-white text-lg mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white tracking-tight">$49</span>
<span className="text-slate-400">/mo</span>
</div>
<p className="text-sm text-slate-400 mb-8 border-b border-slate-800 pb-8">For salons and boutiques scaling operations.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Tier 2 Pricing (-10%)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> No MOQ
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Free Private Labeling
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Priority Shipping
                        </li>
</ul>
<button className="w-full py-3 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">Start Trial</button>
</div>

<div className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative">
<h3 className="font-medium text-slate-900 text-lg mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-slate-900 tracking-tight">Custom</span>
</div>
<p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">For large distributors and chain salons.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Factory Direct Pricing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Dedicated Account Manager
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Custom Manufacturing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Net 30 Terms
                        </li>
</ul>
<button className="w-full py-3 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>What is the Minimum Order Quantity (MOQ)?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        For our Starter tier, the MOQ is 5 bundles or 2 wigs. For Professional and Enterprise members, there is no MOQ after the initial qualifying order.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>How does private labeling work?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        Once you upload your brand assets in the portal, we create custom hang tags, bundle wraps, and satin bags. These are stored in our warehouse and applied to your orders before shipping.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>What is the return policy for wholesale orders?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        We offer a 7-day inspection period for all wholesale orders. If the hair has not been altered, washed, or installed, it can be returned or exchanged. Manufacturing defects are covered for 30 days.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Ready to upgrade your inventory?</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">Join 500+ salons sourcing superior hair with reliable logistics.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-slate-900 hover:bg-slate-800 text-white h-14 px-8 rounded-full font-medium transition-all shadow-xl shadow-slate-900/10 text-lg">
                    Apply for Access
                </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-slate-200 to-slate-50 rounded-full opacity-50 blur-3xl -z-10"></div>
</section>

<footer className="border-t border-slate-100 bg-white pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-slate-950 flex items-center gap-2 mb-6" href="#">
<span className="w-5 h-5 bg-slate-900 rounded-sm flex items-center justify-center text-white text-[10px] font-bold">L</span>
                        LUMINARY
                    </a>
<p className="text-sm text-slate-500 leading-relaxed">Redefining the standard for B2B hair extension wholesale supply chains.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Products</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Raw Indian</a></li>
<li><a className="hover:text-slate-900" href="#">Virgin Brazilian</a></li>
<li><a className="hover:text-slate-900" href="#">HD Lace Frontals</a></li>
<li><a className="hover:text-slate-900" href="#">Sample Kits</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About Us</a></li>
<li><a className="hover:text-slate-900" href="#">Our Factory</a></li>
<li><a className="hover:text-slate-900" href="#">Private Label</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Subscribe</h4>
<p className="text-sm text-slate-500 mb-4">Market trends and inventory alerts.</p>
<div className="flex gap-2">
<input className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-slate-400" placeholder="Email address" type="email"/>
<button className="bg-slate-900 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-800"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">
                    © 2024 Luminary Wholesale. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
