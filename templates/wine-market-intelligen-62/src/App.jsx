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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-rose-950 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-rose-900 transition-colors">
                    WINE SERVICES
                </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors" href="#services">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors" href="#how-it-works">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors" href="#testimonials">Clients</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-rose-900" href="#">Login</a>
<a className="px-5 py-2.5 bg-rose-950 hover:bg-rose-900 text-white text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md" href="#demo">
                    Request Demo
                </a>
</div>

<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-900 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                        Global Market Intelligence 2024
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Precision Intelligence for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-rose-700">Global Wine Market</span>.
                    </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        We provide objective field data, distribution analysis, and strategic insights for the world's leading wine and spirits brands.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 bg-rose-950 text-white rounded-xl font-medium hover:bg-rose-900 transition-all shadow-lg shadow-rose-900/10" href="#demo">
                            Request a Demo
                            <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all" href="#services">
                            Explore Services
                        </a>
</div>
</div>

<div className="relative lg:h-[500px] w-full hidden lg:block">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 overflow-hidden">

<div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="h-2 w-24 bg-slate-100 rounded-full"></div>
</div>

<div className="space-y-6">
<div className="flex justify-between items-end h-32 gap-4 px-4">
<div className="w-full bg-rose-50 rounded-t-sm h-[40%] relative group">
<div className="absolute bottom-0 w-full bg-rose-900/80 h-0 group-hover:h-full transition-all duration-700 ease-out rounded-t-sm"></div>
</div>
<div className="w-full bg-rose-50 rounded-t-sm h-[65%] relative group">
<div className="absolute bottom-0 w-full bg-rose-900/80 h-0 group-hover:h-full transition-all duration-700 ease-out delay-75 rounded-t-sm"></div>
</div>
<div className="w-full bg-rose-50 rounded-t-sm h-[45%] relative group">
<div className="absolute bottom-0 w-full bg-rose-900/80 h-0 group-hover:h-full transition-all duration-700 ease-out delay-100 rounded-t-sm"></div>
</div>
<div className="w-full bg-rose-50 rounded-t-sm h-[80%] relative group">
<div className="absolute bottom-0 w-full bg-rose-900/80 h-0 group-hover:h-full transition-all duration-700 ease-out delay-150 rounded-t-sm"></div>
</div>
<div className="w-full bg-rose-50 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full bg-rose-900/80 h-0 group-hover:h-full transition-all duration-700 ease-out delay-200 rounded-t-sm"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><i className="w-4 h-4" data-lucide="trending-up"></i></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-50 rounded-full"></div>
</div>
<div className="text-xs font-semibold text-emerald-600">+24%</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><i className="w-4 h-4" data-lucide="globe"></i></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-50 rounded-full"></div>
</div>
<div className="text-xs font-semibold text-slate-600">Global</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-slate-900 text-white p-4 rounded-xl shadow-lg w-48">
<div className="text-xs text-slate-400 mb-1">Vintage Performance</div>
<div className="text-xl font-semibold">98.4 pts</div>
<div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-amber-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Objective data from the field, transformed into strategy.</h2>
<p className="text-slate-600 mb-6">
                        At Wine Services, we bridge the gap between production and market reality. Our mission is to empower wine and spirits estates with granular, high-quality data collected directly from global markets.
                    </p>
<p className="text-slate-600">
                        Unlike generalized reports, our intelligence is built on rigorous field collection, ensuring you have the accurate pricing, distribution, and visibility metrics needed to make confident decisions.
                    </p>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">

<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="w-10 h-10 bg-rose-100 text-rose-900 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div className="text-3xl font-semibold text-slate-900 mb-1">45+</div>
<div className="text-sm text-slate-500">Countries Monitored</div>
</div>

<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="w-10 h-10 bg-rose-100 text-rose-900 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="database"></i>
</div>
<div className="text-3xl font-semibold text-slate-900 mb-1">1M+</div>
<div className="text-sm text-slate-500">Data Points / Year</div>
</div>

<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<div className="w-10 h-10 bg-rose-100 text-rose-900 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="award"></i>
</div>
<div className="text-3xl font-semibold text-slate-900 mb-1">15</div>
<div className="text-sm text-slate-500">Years Expertise</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Market Intelligence</h2>
<p className="text-slate-600">Our suite of analytical tools covers every aspect of your brand's global journey, from distribution to consumption.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-900/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 group-hover:bg-rose-50 text-slate-900 group-hover:text-rose-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Market Distribution &amp; Performance Analysis</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Track your brand's presence across key markets. Analyze depth of distribution and numerical availability against competitors.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:translate-x-1 transition-transform" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-900/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 group-hover:bg-rose-50 text-slate-900 group-hover:text-rose-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Sales Data of Intermediaries</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Gain visibility into the supply chain. Monitor stock levels and depletion rates through our intermediary data network.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:translate-x-1 transition-transform" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-900/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 group-hover:bg-rose-50 text-slate-900 group-hover:text-rose-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
<i className="w-6 h-6" data-lucide="newspaper"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Media Monitoring &amp; Tasting Notes</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Aggregate global critic scores and tasting notes. Measure brand sentiment and media impact in real-time.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:translate-x-1 transition-transform" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-900/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 group-hover:bg-rose-50 text-slate-900 group-hover:text-rose-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
<i className="w-6 h-6" data-lucide="tag"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Price &amp; Vintage Tracking</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Monitor pricing strategies across channels (on-trade vs off-trade) and track vintage evolution and value appreciation.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:translate-x-1 transition-transform" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-900/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 group-hover:bg-rose-50 text-slate-900 group-hover:text-rose-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
<i className="w-6 h-6" data-lucide="presentation"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Custom Consulting &amp; Market Studies</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Bespoke research tailored to specific strategic questions. Deep dives into emerging markets or competitor analysis.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:translate-x-1 transition-transform" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-rose-900/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 group-hover:bg-rose-50 text-slate-900 group-hover:text-rose-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">On-Trade U.S. Network Services</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Specialized focus on the complex U.S. on-trade landscape. Identify key accounts and optimize placement strategies.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-rose-900 group-hover:translate-x-1 transition-transform" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Why the world's top estates choose Wine Services.</h2>
<p className="text-slate-400 mb-8 text-lg">
                        In an industry built on tradition, we bring the clarity of data. Our platform allows you to navigate complex global markets with precision rather than intuition.
                    </p>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-white">Unmatched Data Accuracy</h4>
<p className="text-sm text-slate-400 mt-1">Manual verification processes combined with AI to ensure 99.9% data integrity.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-white">Deep Field Expertise</h4>
<p className="text-sm text-slate-400 mt-1">Our teams are wine professionals, not just data analysts. We understand the nuance of vintage and terroir.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-white">Global Presence</h4>
<p className="text-sm text-slate-400 mt-1">Offices in Bordeaux, Napa, and Hong Kong to cover all major consumption hubs.</p>
</div>
</li>
</ul>
</div>

<div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 bg-slate-700/50 p-6 rounded-xl border border-slate-600">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-slate-300">Market Penetration</span>
<span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">+12%</span>
</div>
<div className="flex items-end gap-2 h-24">
<div className="w-1/6 bg-slate-500 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-slate-500 h-[45%] rounded-t-sm"></div>
<div className="w-1/6 bg-slate-500 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-slate-500 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-slate-500 h-[55%] rounded-t-sm"></div>
<div className="w-1/6 bg-rose-500 h-[80%] rounded-t-sm shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
</div>
</div>
<div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
<div className="text-sm text-slate-300 mb-2">Price Stability</div>
<div className="text-2xl font-semibold text-white">98%</div>
</div>
<div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
<div className="text-sm text-slate-300 mb-2">Reports Generated</div>
<div className="text-2xl font-semibold text-white">12k</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">From Field to Dashboard</h2>
<p className="text-slate-600">A simplified, transparent process delivering actionable intelligence.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-slate-100 -z-10"></div>

<div className="text-center bg-white">
<div className="w-24 h-24 mx-auto bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-6 text-rose-900">
<i className="w-8 h-8" data-lucide="scan"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">1. Data Collection</h3>
<p className="text-sm text-slate-500 px-4">Our field teams and automated crawlers gather data from retailers, restaurants, and digital platforms globally.</p>
</div>

<div className="text-center bg-white">
<div className="w-24 h-24 mx-auto bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-6 text-rose-900">
<i className="w-8 h-8" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">2. Processing &amp; Analysis</h3>
<p className="text-sm text-slate-500 px-4">Raw data is cleaned, categorized, and analyzed using our proprietary algorithms to identify trends.</p>
</div>

<div className="text-center bg-white">
<div className="w-24 h-24 mx-auto bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-6 text-rose-900">
<i className="w-8 h-8" data-lucide="lightbulb"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">3. Strategic Insights</h3>
<p className="text-sm text-slate-500 px-4">Access detailed reports and dashboards to optimize your pricing, distribution, and marketing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Trusted by Industry Leaders</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 italic">"The granularity of the distribution data provided by Wine Services has allowed us to completely restructure our US export strategy."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">EL</div>
<div>
<div className="text-sm font-semibold text-slate-900">Elena Rossi</div>
<div className="text-xs text-slate-500">Export Director, Tuscany Estate</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 italic">"A vital tool for monitoring price consistency across European markets. The vintage tracking is particularly impressive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">JD</div>
<div>
<div className="text-sm font-semibold text-slate-900">Jean Dubois</div>
<div className="text-xs text-slate-500">Sales Manager, Bordeaux Grand Cru</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-6 italic">"Reliable, timely, and presented in a way that is easy to digest for our board members. Essential market intelligence."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">SW</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Williams</div>
<div className="text-xs text-slate-500">CMO, Napa Valley Vineyards</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-rose-900 transition-colors">
<span>What type of data do you collect?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-sm leading-relaxed">
                        We collect a wide range of data including retail pricing, distribution depth, restaurant wine lists (on-trade), e-commerce availability, and media sentiment/scores from major critics.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-rose-900 transition-colors">
<span>How often is the data updated?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-sm leading-relaxed">
                        Digital data is updated continuously. Field data from physical retail and on-trade locations is updated on a monthly or quarterly cycle depending on the specific market subscription package.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-rose-900 transition-colors">
<span>Can I request custom reports?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-sm leading-relaxed">
                        Yes, our Custom Consulting service allows for bespoke studies. Whether you need a deep dive into a specific competitor or an analysis of a new potential market, our analysts can build a custom report for you.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-rose-900 transition-colors">
<span>Is ongoing support provided?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-sm leading-relaxed">
                        Absolutely. Every enterprise client is assigned a dedicated account manager who helps interpret the data and provides quarterly strategic review meetings.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-rose-950 text-white relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">See the data behind the wine industry.</h2>
<p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
                Join the leading estates and groups using Wine Services to secure their position in the global market.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-white text-rose-950 rounded-xl font-semibold hover:bg-rose-50 transition-all shadow-xl" href="#">
                    Request a Demo
                </a>
<a className="px-8 py-4 bg-transparent border border-rose-800 text-white rounded-xl font-medium hover:bg-rose-900/50 transition-all" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-rose-950 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">WINE SERVICES</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Empowering the wine &amp; spirits industry with objective market data and strategic analytics.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-rose-900" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-rose-900" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-rose-900" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-900 transition-colors" href="#">Distribution Analysis</a></li>
<li><a className="hover:text-rose-900 transition-colors" href="#">Price Tracking</a></li>
<li><a className="hover:text-rose-900 transition-colors" href="#">Media Monitoring</a></li>
<li><a className="hover:text-rose-900 transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-rose-900 transition-colors" href="#">Clients</a></li>
<li><a className="hover:text-rose-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-rose-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2024 Wine Services. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Terms of Service</a>
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
