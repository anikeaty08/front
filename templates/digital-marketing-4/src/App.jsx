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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2.5 group cursor-pointer">
<div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-sm">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Apex Vision</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-base font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Login</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contact">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting new growth partners
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Transforming Brands.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Driving Measurable Growth.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
                We are a results-driven Digital &amp; Performance Marketing Agency helping brands scale through paid media, content, SEO, and conversion-focused strategies.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5 group">
                    Start Your Growth Journey
                    <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all hover:border-slate-300">
                    Request a Free Consultation
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Why Choose Apex Vision?</h2>
<p className="text-xl text-slate-500 font-normal leading-relaxed">
                    We don’t run campaigns — we build growth systems. At Apex Vision, we blend creativity, analytics, and performance marketing to deliver predictable, scalable ROI.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Performance-Driven Results</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Focusing on metrics that matter to your bottom line: ROI, ROAS, and profit.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Customized Growth Strategies</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Tailored roadmaps designed specifically for your market position and goals.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="pie-chart"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Transparent Reporting</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Clear, real-time analytics dashboards so you always know where every dollar goes.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Industry-Proven Experts</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">A senior team of specialists dedicated to navigating complex digital landscapes.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Scalable Campaigns</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Systems built to handle volume as your business grows from startup to enterprise.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Core Services</h2>
<p className="text-xl text-slate-500 font-normal">We power business growth through full-funnel marketing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="mb-6 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="share-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Social Media Management</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Facebook, Instagram, YouTube &amp; LinkedIn strategies covering organic community building and paid amplification.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="mb-6 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="user-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Personal Brand Building</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Position yourself as a thought leader with high-impact short-form and long-form content strategy.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="mb-6 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Performance Marketing</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Full-funnel Google Ads &amp; Meta Ads strategies (TOFU, MOFU, BOFU) designed to capture intent.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="mb-6 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Website Design &amp; Dev</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Conversion-optimized, fast, and scalable websites that look stunning and convert traffic.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg">
<div className="mb-6 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Search Engine Optimization</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Technical SEO and content strategies to drive long-term traffic, authority, and rankings.</p>
</div>

<div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-slate-800 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Need a custom plan?</h3>
<p className="text-base text-slate-400 font-normal mb-6">Let's build a strategy specific to your goals.</p>
<span className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-blue-50 rounded-lg transition-all w-full">
                        Explore All Services
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="activity"></i>
                        Data Driven
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Performance That Speaks</h2>
<p className="text-xl text-slate-500 font-normal mb-8 leading-relaxed">
                        Every decision we make is backed by data, testing, and optimization. We move beyond vanity metrics to deliver tangible business outcomes.
                    </p>
<div className="space-y-5 mb-10">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-blue-600">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<span className="text-lg text-slate-700 font-medium">Increase qualified traffic from high-intent audiences</span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-blue-600">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<span className="text-lg text-slate-700 font-medium">Generate high-intent leads tailored to your sales cycle</span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-blue-600">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<span className="text-lg text-slate-700 font-medium">Improve conversion rates and overall revenue</span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-blue-600">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<span className="text-lg text-slate-700 font-medium">Reduce cost-per-acquisition (CPA) through optimization</span>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-blue-600">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<span className="text-lg text-slate-700 font-medium">Build long-term brand visibility and authority</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5" href="#">
                        Talk to Our Experts
                    </a>
</div>
<div className="lg:w-1/2 relative w-full">

<div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-sm">

<div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl opacity-60"></div>

<div className="relative bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 mb-6">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-500">Total Revenue</div>
<div className="text-xs text-slate-400">Last 30 Days</div>
</div>
</div>
<div className="text-xs font-medium text-green-700 bg-green-50 border border-green-100 px-2 py-1 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> 128%
                                </div>
</div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">$482,000.00</div>

<div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
<div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-6 relative">
<div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-5">
<div className="text-sm font-medium text-slate-500 mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="users"></i> Lead Vol
                                </div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">3,450</div>
<div className="text-xs text-green-600 mt-2 flex items-center gap-1 font-medium">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> 42% vs last mo
                                </div>
</div>
<div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-5">
<div className="text-sm font-medium text-slate-500 mb-2 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-500" data-lucide="target"></i> Avg CPA
                                </div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">$12.40</div>
<div className="text-xs text-green-600 mt-2 flex items-center gap-1 font-medium">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> 18% optimized
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-12">What Clients Say</h2>
<div className="relative bg-gradient-to-b from-blue-50/50 to-white p-10 md:p-14 rounded-3xl border border-blue-100 shadow-sm">
<i className="w-10 h-10 text-blue-200 absolute top-8 left-8 -z-10 fill-current opacity-50" data-lucide="quote"></i>
<blockquote className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight leading-snug mb-8">
                    “Partnering with Apex Vision transformed our digital footprint. Our leads increased by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">3× within just 90 days</span>.”
                </blockquote>
<div className="flex flex-col items-center justify-center">
<div className="w-12 h-12 bg-slate-200 rounded-full mb-3 overflow-hidden border-2 border-white shadow-sm">
<svg className="w-full h-full text-slate-400 bg-slate-100" fill="currentColor" viewbox="0 0 24 24">
<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
</div>
<cite className="not-italic">
<span className="block text-lg font-semibold text-slate-900">James Carter</span>
<span className="block text-sm text-slate-500 mt-0.5">Founder, FinTech Solutions</span>
</cite>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-200">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Ready to Scale Your Brand with<br/>Performance Marketing?
                    </h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-normal">
                        Stop guessing. Start growing. Let's discuss your custom roadmap to market dominance.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-900 bg-white hover:bg-blue-50 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                        Book a Free Strategy Call
                        <i className="w-5 h-5 ml-2" data-lucide="calendar"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Apex Vision</span>
</div>
<p className="text-base text-slate-500 mb-6 font-normal">
                        Helping ambitious brands scale through data, design, and digital strategy.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">Performance Marketing</a></li>
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">SEO Optimization</a></li>
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">Social Media</a></li>
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">Web Development</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">Case Studies</a></li>
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-slate-500 hover:text-blue-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Ready to scale?</h4>
<p className="text-base text-slate-500 mb-6 font-normal">Get your free audit today.</p>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all w-full shadow-sm" href="#">
                        Request Consultation
                    </a>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 Apex Vision Digital Marketing. All rights reserved.</p>
<div className="flex gap-8">
<a className="text-sm text-slate-400 hover:text-slate-600" href="#">Privacy</a>
<a className="text-sm text-slate-400 hover:text-slate-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
