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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-gray-50 to-transparent opacity-60 pointer-events-none -z-10 rounded-full blur-3xl"></div>

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-1 group" href="#">
<span className="tracking-tighter font-medium text-xl text-gray-900 group-hover:opacity-70 transition-opacity duration-300">D-Code</span>
<span className="tracking-tighter font-medium text-xl text-gray-400">.</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#services">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#process">Process</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200" href="https://wa.me/917020503794" target="_blank">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                    WhatsApp
                </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm active:scale-95" href="#contact">
                    Free Strategy Call
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mb-8 animate-fade-in-up">
<iconify-icon className="text-gray-500" height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-600">Trusted D2C Growth Partner in Nagpur</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
                    From Brand to Sales — <br className="hidden md:block"/>
<span className="text-gray-400">End-to-End D2C Growth.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 font-light leading-relaxed">
                    We help D2C brands launch, grow, and scale profitably using high-converting websites, performance marketing, automation, and smart execution — all under one roof.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm active:scale-95 group" href="#contact">
                        Get Free Strategy Call
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform duration-300" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 active:scale-95" href="https://wa.me/917020503794" target="_blank">
<iconify-icon className="mr-2" height="18" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                        WhatsApp Us
                    </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-gray-50" id="services">
<div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Our D2C Services.</h2>
<p className="text-base text-gray-500 font-light">Everything you need to build, scale, and sell. We handle the technical and marketing heavy lifting so you can focus on your product.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-gray-900" height="24" icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Website &amp; Store Dev</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Shopify &amp; custom websites with high-conversion UI/UX, mobile-first design, and seamless payment &amp; logistics integration.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-gray-900" height="24" icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Performance Marketing</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Meta &amp; Google Ads focusing on ROAS. We handle creative strategy, ad copies, and funnel-based campaigns for scaling.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-gray-900" height="24" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">WhatsApp &amp; CRM</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light mb-4">WhatsApp API setup, auto-replies, lead management, abandoned cart recovery, and automated customer follow-ups.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-gray-900" height="24" icon="solar:funnel-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Lead Gen &amp; Funnels</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Conversion-optimized landing pages, retargeting funnels, and custom audience strategies for maximum lead generation.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-gray-900" height="24" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Order &amp; Backend Setup</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Comprehensive backend management including order tracking, delivery workflows, RTO handling, and analytics dashboards.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
<iconify-icon className="text-gray-900" height="24" icon="solar:gallery-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Creatives &amp; Brand Assets</h3>
<p className="text-sm text-gray-500 leading-relaxed font-light mb-4">High-converting ad creatives, product posters, promotional reels, and cohesive social media brand visuals.</p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-6">
<iconify-icon className="text-gray-900" height="14" icon="solar:bolt-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-600">End-to-End Solution</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">One Partner. <br/>Complete D2C Growth.</h2>
<p className="text-base text-gray-500 mb-8 font-light leading-relaxed">
                            We don’t just run ads — we handle everything. From building your brand foundation to automating your backend, you focus on creating a great product, and we handle the growth.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Brand Setup</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Automation</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Website &amp; Store</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Tracking &amp; Opt.</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Ads &amp; Sales</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Scale Strategy</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-3xl transform rotate-3 scale-105 border border-gray-200/50 -z-10"></div>
<div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_20px_40px_rgb(0,0,0,0.04)] relative z-10">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>
<div className="h-4 w-32 bg-gray-50 rounded-full"></div>
<div className="w-4 h-4 rounded-full bg-gray-100"></div>
</div>

<div className="space-y-6">
<div className="flex items-end gap-4 h-32 w-full pt-4">
<div className="w-1/6 bg-gray-50 rounded-t-md h-[40%] hover:bg-gray-100 transition-colors"></div>
<div className="w-1/6 bg-gray-50 rounded-t-md h-[60%] hover:bg-gray-100 transition-colors"></div>
<div className="w-1/6 bg-gray-100 rounded-t-md h-[50%] hover:bg-gray-200 transition-colors"></div>
<div className="w-1/6 bg-gray-50 rounded-t-md h-[80%] hover:bg-gray-100 transition-colors"></div>
<div className="w-1/6 bg-gray-900 rounded-t-md h-[100%] shadow-lg shadow-gray-900/10 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Scaled</div>
</div>
<div className="w-1/6 bg-gray-50 rounded-t-md h-[90%] hover:bg-gray-100 transition-colors"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 border border-gray-50 rounded-xl bg-gray-50/50">
<div className="text-xs text-gray-400 mb-1 font-medium">Conversion Rate</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">4.8%</div>
</div>
<div className="p-4 border border-gray-50 rounded-xl bg-gray-50/50">
<div className="text-xs text-gray-400 mb-1 font-medium">ROAS</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">3.2x</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-50" id="process">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Our 5-Step D2C Growth Process</h2>
<p className="text-base text-gray-500 font-light max-w-2xl mx-auto">A systematic, battle-tested approach to launching and scaling profitable e-commerce operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
<div className="p-6 rounded-2xl border border-gray-100 bg-white">
<div className="text-xs font-semibold text-gray-400 mb-4 tracking-widest">01</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Brand &amp; Market Analysis</h3>
<p className="text-xs text-gray-500 font-light">Audience research, competitor breakdown, and offer creation.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-100 bg-white">
<div className="text-xs font-semibold text-gray-400 mb-4 tracking-widest">02</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Website &amp; Funnel Setup</h3>
<p className="text-xs text-gray-500 font-light">Building high-speed, conversion-focused infrastructure.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-100 bg-white">
<div className="text-xs font-semibold text-gray-400 mb-4 tracking-widest">03</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Ads &amp; Traffic Launch</h3>
<p className="text-xs text-gray-500 font-light">Deploying targeted creative assets across Meta and Google.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-100 bg-white">
<div className="text-xs font-semibold text-gray-400 mb-4 tracking-widest">04</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Automation &amp; Tracking</h3>
<p className="text-xs text-gray-500 font-light">Connecting WhatsApp CRM, analytics, and retention flows.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
<div className="text-xs font-semibold text-gray-900 mb-4 tracking-widest">05</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Scaling &amp; Opt.</h3>
<p className="text-xs text-gray-500 font-light">Aggressively scaling winning campaigns to maximize ROAS.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-12">Why D-Code Studio?</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-16">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-gray-900 mb-2" height="24" icon="solar:target-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">D2C-Focused Strategy</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-gray-900 mb-2" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Sales-Driven Approach</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-gray-900 mb-2" height="24" icon="solar:tag-price-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Transparent Pricing</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-gray-900 mb-2" height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Fast Execution</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-gray-900 mb-2" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Local Support (Nagpur)</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-gray-900 mb-2" height="24" icon="solar:server-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Scalable Systems</span>
</div>
</div>
<div className="max-w-3xl mx-auto text-center">
<p className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 leading-snug italic">
                    "We work like your in-house growth team, not just an agency."
                </p>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-50" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Flexible Plans for Every D2C Brand</h2>
<p className="text-base text-gray-500 font-light max-w-2xl mx-auto">No one-size-fits-all. We build engagements tailored to your current stage of growth.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
<h3 className="text-lg font-medium text-gray-900 mb-1">Starter</h3>
<p className="text-xs text-gray-500 font-light mb-6">For New Brands</p>
<div className="h-px w-full bg-gray-50 mb-6"></div>
<p className="text-sm text-gray-600 font-light">Perfect for getting your store live and launching your first data-gathering ad campaigns.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 relative">
<div className="absolute -top-3 left-6 px-2 py-0.5 bg-gray-900 text-white text-[10px] font-medium rounded-full tracking-wide uppercase">Most Popular</div>
<h3 className="text-lg font-medium text-gray-900 mb-1">Growth</h3>
<p className="text-xs text-gray-500 font-light mb-6">For Running Ads</p>
<div className="h-px w-full bg-gray-200 mb-6"></div>
<p className="text-sm text-gray-600 font-light">Optimized funnels and aggressive ROAS targets for brands ready to step on the gas.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
<h3 className="text-lg font-medium text-gray-900 mb-1">Scale</h3>
<p className="text-xs text-gray-500 font-light mb-6">For High Volume Sales</p>
<div className="h-px w-full bg-gray-50 mb-6"></div>
<p className="text-sm text-gray-600 font-light">Advanced retention, A/B testing, and heavy ad spend management.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors">
<h3 className="text-lg font-medium text-gray-900 mb-1">Custom</h3>
<p className="text-xs text-gray-500 font-light mb-6">Enterprise / Auto Heavy</p>
<div className="h-px w-full bg-gray-50 mb-6"></div>
<p className="text-sm text-gray-600 font-light">Bespoke headless architectures and complex backend automation systems.</p>
</div>
</div>
<div className="text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
<iconify-icon className="text-gray-400" height="16" icon="solar:info-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-gray-600">Exact pricing shared after free strategy call.</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="contact">
<div className="max-w-4xl mx-auto bg-gray-900 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 opacity-50 pointer-events-none rounded-full blur-3xl"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 relative z-10">Ready to Scale Your D2C Brand?</h2>
<p className="text-base text-gray-400 mb-10 max-w-xl mx-auto font-light relative z-10">
                    Let’s build something profitable together. Serving brands across India, based in Nagpur.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-10">
<a className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors" href="tel:+917020503794">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                        7020503794
                    </a>
<span className="hidden sm:block text-white/20">|</span>
<a className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors" href="mailto:dcodestudio.agency@gmail.com">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                        dcodestudio.agency@gmail.com
                    </a>
</div>
<div className="relative z-10">
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300 active:scale-95 whitespace-nowrap" href="https://wa.me/917020503794" target="_blank">
                        Book Free Consultation
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-gray-100 bg-white pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-1 mb-4" href="#">
<span className="tracking-tighter font-medium text-xl text-gray-900">D-Code</span>
<span className="tracking-tighter font-medium text-xl text-gray-400">.</span>
</a>
<p className="text-sm text-gray-500 font-light max-w-xs mb-6">
                    End-to-End D2C Growth Agency.<br/>
                    Nagpur | India
                </p>
<div className="flex flex-col gap-2 mb-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2" href="tel:+917020503794">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                        +91 7020503794
                    </a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2" href="mailto:dcodestudio.agency@gmail.com">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                        dcodestudio.agency@gmail.com
                    </a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#services">Website &amp; Store Dev</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#services">Performance Marketing</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#services">WhatsApp &amp; CRM</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#services">Lead Gen &amp; Funnels</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#process">Process</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
<p className="text-xs text-gray-400 font-light">© 2026 D-Code Studio. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-gray-500 font-medium">Accepting New Brands</span>
</div>
</div>
</footer>

    </>
  );
}
