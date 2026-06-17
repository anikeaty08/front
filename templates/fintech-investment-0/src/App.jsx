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
      

<nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
                    EquityPandit <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-white/10 uppercase tracking-wider font-medium">Advisor</span>
</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-base font-medium text-white flex items-center gap-2 transition hover:text-blue-400" href="#">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i> Home
                </a>
<a className="text-base font-medium text-zinc-400 flex items-center gap-2 transition hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="credit-card" strokeWidth="1.5"></i> Plans &amp; Pricing
                </a>
<a className="text-base font-medium text-zinc-400 flex items-center gap-2 transition hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> Contact Us
                </a>
</div>
<div className="flex items-center gap-6">
<a className="text-base font-medium text-zinc-400 hover:text-white transition" href="#">Login</a>
<a className="bg-white text-zinc-950 px-5 py-2.5 rounded-lg text-base font-medium hover:bg-zinc-200 transition" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full text-sm font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> EP - Multibagger
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                Invest Early, Before The Stock Opportunity Becomes A Success Story.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-lg">
                Mid-term Investing, Proven Results, Real Wealth.
            </p>
<button className="flex items-center gap-3 bg-zinc-900 border border-white/10 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-zinc-800 transition">
                What You Get ? <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/50">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Get The Multibagger</h2>
<form className="space-y-4">
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Your Name" type="text"/>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Your Email" type="email"/>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Your Mobile" type="tel"/>
<p className="text-xs text-zinc-500 mt-4 mb-6">By submitting, you agree to our Terms &amp; Conditions</p>
<button className="w-full bg-white text-zinc-950 py-3.5 rounded-lg text-base font-medium hover:bg-zinc-200 transition" type="button">
                    Submit
                </button>
</form>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-900/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-white">SEBI Registered Investment Advisor</h3>
<p className="text-sm text-zinc-500 mt-1">Registration No.: INA000006688</p>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-white">Your Trusted Partner</h3>
<p className="text-sm text-zinc-500 mt-1">Chosen By 1M+ Registered Users</p>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
<i className="w-6 h-6" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-white">Recognized For Excellence</h3>
<p className="text-sm text-zinc-500 mt-1">11+ National &amp; International Awards</p>
</div>
</div>
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
<i className="w-6 h-6" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-white">Research Excellence</h3>
<p className="text-sm text-zinc-500 mt-1">20+ Years of Experience</p>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">What You'll Get</h2>
<p className="text-lg text-zinc-400">Everything you need to execute trades with precision and confidence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition duration-300">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">1 High Growth Stock Per Month</h3>
<p className="text-base text-zinc-400 leading-relaxed">Discover carefully selected high growth stock every month</p>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition duration-300">
<i className="w-6 h-6" data-lucide="file-search" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">A Detailed Research Report</h3>
<p className="text-base text-zinc-400 leading-relaxed">Expert research highlighting key trends and opportunities</p>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition duration-300">
<i className="w-6 h-6" data-lucide="calendar-clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Timely Entry &amp; Exit Guidance</h3>
<p className="text-base text-zinc-400 leading-relaxed">Maximize returns with timely entry and exit strategies</p>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition group">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition duration-300">
<i className="w-6 h-6" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Quarterly Review &amp; Updates</h3>
<p className="text-base text-zinc-400 leading-relaxed">Regular quarterly updates to refine strategy and improve performance</p>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition duration-300">
<i className="w-6 h-6" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Real Time Dashboard</h3>
<p className="text-base text-zinc-400 leading-relaxed">Monitor your portfolio performance with live market data</p>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition group">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition duration-300">
<i className="w-6 h-6" data-lucide="message-circle-question" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Priority Support</h3>
<p className="text-base text-zinc-400 leading-relaxed">Dedicated support team ensuring faster responses and solutions</p>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Who Should Avail?</h2>
<p className="text-lg text-zinc-400 mb-10">Professionals wanting expert-backed investing without daily tracking</p>
<div className="space-y-6 mb-10">
<div className="pl-6 border-l-2 border-blue-500 py-1">
<h4 className="text-lg font-medium text-white">Active Investor, Business Professionals, Salaried / Retired Person</h4>
</div>
<div className="pl-6 border-l-2 border-zinc-800 py-1">
<h4 className="text-lg font-medium text-zinc-400">Who Can Invest Min. 20,000 Or More Per Stock</h4>
</div>
<div className="pl-6 border-l-2 border-zinc-800 py-1">
<h4 className="text-lg font-medium text-zinc-400">Who Can Look For Mid To Long Term Investment</h4>
</div>
<div className="pl-6 border-l-2 border-zinc-800 py-1">
<h4 className="text-lg font-medium text-zinc-400">Who Can Invest Regularly</h4>
</div>
</div>
<button className="bg-white text-zinc-950 px-6 py-3 rounded-lg text-base font-medium hover:bg-zinc-200 transition">
                    Get Started
                </button>
</div>

<div className="relative h-[500px] w-full">
<div className="absolute top-0 right-10 w-48 h-48 rounded-full bg-zinc-800 border-4 border-zinc-950 overflow-hidden shadow-2xl z-10 flex items-center justify-center">
<i className="w-16 h-16 text-zinc-700" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="absolute top-20 left-0 w-56 h-56 rounded-full bg-zinc-800 border-4 border-zinc-950 overflow-hidden shadow-2xl z-20 flex items-center justify-center">
<i className="w-16 h-16 text-zinc-700" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-zinc-800 border-4 border-zinc-950 overflow-hidden shadow-2xl z-30 flex items-center justify-center">
<i className="w-12 h-12 text-zinc-700" data-lucide="hard-hat" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-10 right-0 w-64 h-64 rounded-full bg-zinc-800 border-4 border-zinc-950 overflow-hidden shadow-2xl z-20 flex items-center justify-center">
<i className="w-20 h-20 text-zinc-700" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">How We Identify Multibagger Opportunities?</h2>
<p className="text-lg text-zinc-400">Research-driven stock selection using fundamentals and technical insights</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<i className="w-6 h-6" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6">1. Business Strength</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Consistent sales and profit growth.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Strong operating cash flows.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Controlled and manageable debt.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Promoters with long-term vision.</span>
</li>
</ul>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
<i className="w-6 h-6" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6">2. Sector &amp; Market Position</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Sector growth cycles.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Capital flow trends.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Policy and economic tailwinds.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Company's competitive position in its industry.</span>
</li>
</ul>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6">3. Right Timing</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Avoid over-priced entries</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Identify accumulation zones.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Confirm trend strength.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Volume analysis to control risk.</span>
</li>
</ul>
</div>
</div>
<button className="bg-white text-zinc-950 px-6 py-3 rounded-lg text-base font-medium hover:bg-zinc-200 transition">
            Start Your Investment Journey
        </button>
</section>

<section className="border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Get started in 3 simple steps for Wealth Creation</h2>
<p className="text-lg text-zinc-400">Delivering value through innovation, strategy, and expertise</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-[1px] bg-white/10 z-0 w-2/3 mx-auto"></div>

<div className="relative z-10">
<div className="w-20 h-20 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 relative shadow-lg">
<i className="w-8 h-8 text-zinc-300" data-lucide="pointer" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold border-4 border-zinc-950">1</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 text-center">Risk Profiling</h3>
<p className="text-base text-zinc-400 text-center">To check the capability &amp; willingness to take a risk</p>
</div>

<div className="relative z-10">
<div className="w-20 h-20 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 relative shadow-lg">
<i className="w-8 h-8 text-zinc-300" data-lucide="file-text" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold border-4 border-zinc-950">2</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 text-center">Documentation</h3>
<p className="text-base text-zinc-400 text-center">Sign an agreement &amp; complete the payment to begin the journey</p>
</div>

<div className="relative z-10">
<div className="w-20 h-20 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 relative shadow-lg">
<i className="w-8 h-8 text-zinc-300" data-lucide="line-chart" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold border-4 border-zinc-950">3</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 text-center">Service Activation</h3>
<p className="text-base text-zinc-400 text-center">Complete the KYC to activate your service</p>
</div>
</div>
<div className="mt-12">
<button className="bg-white text-zinc-950 px-8 py-3 rounded-lg text-base font-medium hover:bg-zinc-200 transition">
                    Start Now
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-[1.2fr_1fr] gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Frequently Asked Questions</h2>
<p className="text-lg text-zinc-400 mb-8">Visit our FAQ section for answers to common queries.</p>
<div className="space-y-4">

<div className="border-b border-white/10 pb-4">
<button className="w-full flex justify-between items-center text-left py-4 text-white hover:text-blue-400 transition">
<span className="text-base font-medium">How can I choose the best package for myself ?</span>
<i className="w-5 h-5 shrink-0" data-lucide="chevron-up" strokeWidth="1.5"></i>
</button>
<div className="pb-4 text-base text-zinc-400 pr-8">
                        Yes, we don't charge for the Financial Plan. It's the most Powerful Artificial Intelligence Based Financial Plan, yet it is absolutely free.
                    </div>
</div>

<div className="border-b border-white/10 pb-4">
<button className="w-full flex justify-between items-center text-left py-4 text-zinc-300 hover:text-white transition">
<span className="text-base font-medium">Do EquityPandit provide guaranteed returns ?</span>
<i className="w-5 h-5 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>

<div className="border-b border-white/10 pb-4">
<button className="w-full flex justify-between items-center text-left py-4 text-zinc-300 hover:text-white transition">
<span className="text-base font-medium">Do EquityPandit provide guaranteed returns ?</span>
<i className="w-5 h-5 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>

<div className="border-b border-white/10 pb-4">
<button className="w-full flex justify-between items-center text-left py-4 text-zinc-300 hover:text-white transition">
<span className="text-base font-medium">Do EquityPandit provide guaranteed returns ?</span>
<i className="w-5 h-5 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>

<div className="border-b border-white/10 pb-4">
<button className="w-full flex justify-between items-center text-left py-4 text-zinc-300 hover:text-white transition">
<span className="text-base font-medium">Do EquityPandit provide guaranteed returns ?</span>
<i className="w-5 h-5 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="bg-blue-600/5 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2 uppercase">SUBSCRIBE EP MULTIBAGGER</h3>
<p className="text-base text-zinc-400 mb-8">Mid-Term Investing, Proven Results, Real Wealth</p>
<div className="bg-zinc-900/80 border border-white/5 rounded-xl mb-6 overflow-hidden">
<div className="grid grid-cols-2 p-4 border-b border-white/5 text-sm font-medium text-white uppercase tracking-wider bg-zinc-900">
<div>FEATURES</div>
<div className="text-right">What You Get</div>
</div>
<div className="p-4 space-y-4 text-base">
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Minimum Investment</div>
<div className="text-right text-white font-medium">20,000 Per Stock</div>
</div>
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Stock Recomm</div>
<div className="text-right text-white font-medium text-sm">12 High-Conviction Stock Ideas Annually</div>
</div>
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Detailed Research Report</div>
<div className="flex justify-end"><i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
</div>
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Real Time Dashboard</div>
<div className="flex justify-end"><i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
</div>
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Timely Entry &amp; Exit Guidance</div>
<div className="flex justify-end"><i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
</div>
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Quarterly Review &amp; Updates</div>
<div className="flex justify-end"><i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
</div>
<div className="grid grid-cols-2 items-center">
<div className="text-zinc-400">Priority Support</div>
<div className="flex justify-end"><i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
</div>
</div>
</div>

<div className="space-y-3 mb-8">
<label className="flex items-center justify-between p-4 border border-blue-500 bg-blue-500/10 rounded-xl cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-blue-500 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
</div>
<span className="text-base text-white font-medium">3 Months</span>
</div>
<div className="text-right">
<span className="text-sm text-zinc-500 line-through mr-2">₹20,000</span>
<span className="text-lg font-semibold text-white">₹12,000</span>
</div>
</label>
<label className="flex items-center justify-between p-4 border border-white/10 bg-zinc-900 rounded-xl cursor-pointer hover:border-white/30 transition group">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center group-hover:border-white/50 transition">

</div>
<span className="text-base text-zinc-300 font-medium">6 Months</span>
</div>
<div className="text-right">
<span className="text-sm text-zinc-500 line-through mr-2">₹30,000</span>
<span className="text-lg font-semibold text-white">₹21,000</span>
</div>
</label>
</div>
<button className="w-full bg-white text-zinc-950 py-4 rounded-xl text-base font-medium hover:bg-zinc-200 transition">
                Subscribe
            </button>
</div>
</section>

<section className="border-t border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">About EquityPandit</h2>
<p className="text-lg text-zinc-400 mb-8">
                    Founded in 2005, EquityPandit operates with a single belief: investment advice should be transparent, disciplined, and research-driven.
                </p>
<h3 className="text-xl font-medium text-white mb-6">Over the 20+ years:</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">We have worked with Retail Investors, HNIs, UHNIs, and Institutions.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">We build the community of our 10,00,000+ registered users.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">Clients across 33+ countries.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-zinc-400">350+ Research Algorithms.</span>
</li>
</ul>
<p className="text-base text-zinc-500 italic border-l-2 border-white/10 pl-4">
                    Trust is built through consistency and responsible advisory practices.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 h-[500px]">
<div className="space-y-4 h-full flex flex-col">
<div className="flex-1 bg-zinc-800 rounded-2xl border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-transparent z-10"></div>
<i className="absolute bottom-4 left-4 w-8 h-8 text-white/20 z-0" data-lucide="bar-chart" strokeWidth="1.5"></i>
</div>
<div className="h-32 bg-blue-500 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">350+</div>
<div className="text-sm text-blue-100 font-medium">Research<br/>Algorithms</div>
</div>
</div>
<div className="space-y-4 h-full flex flex-col">
<div className="grid grid-cols-2 gap-4 h-32">
<div className="bg-blue-600 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
<div className="text-2xl font-semibold tracking-tight text-white mb-1">20+</div>
<div className="text-xs text-blue-100 font-medium">Years<br/>Experience</div>
</div>
<div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
<div className="text-2xl font-semibold tracking-tight text-white mb-1">1M+</div>
<div className="text-xs text-zinc-400 font-medium">Registered<br/>users</div>
</div>
</div>
<div className="flex-1 bg-zinc-800 rounded-2xl border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
<i className="absolute bottom-4 right-4 w-12 h-12 text-white/10 z-0" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="h-32 bg-zinc-950 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">11+</div>
<div className="text-sm text-zinc-400 font-medium">Prestigious<br/>Awards</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-24 mb-12">
<div className="bg-blue-600/5 border border-blue-500/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
<i className="w-96 h-96" data-lucide="headset" strokeWidth="1"></i>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Need any help? Contact To Our Support Team!</h2>
<p className="text-lg text-zinc-400 mb-10">We are always there for you every time and will guide you at every step.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
<a className="flex items-center gap-3 text-xl font-medium text-white hover:text-blue-400 transition" href="tel:+918000816688">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i> +91 8000 816 688
                    </a>
<a className="flex items-center gap-3 text-xl font-medium text-white hover:text-blue-400 transition" href="mailto:Support@Equitypandit.Com">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i> Support@Equitypandit.Com
                    </a>
</div>
<button className="bg-white text-zinc-950 px-8 py-4 rounded-lg text-base font-medium hover:bg-zinc-200 transition shadow-xl shadow-white/5">
                    Contact us
                </button>
</div>
</div>
</section>


    </>
  );
}
