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
      

<nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight">EquityPandit</span>
<div className="flex flex-col border border-green-500 rounded px-1.5 py-0.5">
<span className="text-[0.5rem] font-semibold leading-none text-green-700 uppercase">Investment</span>
<span className="text-[0.5rem] font-semibold leading-none text-green-700 uppercase mt-0.5">Advisor</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 text-base font-medium text-gray-900 hover:text-green-600 transition-colors" href="#">
<i className="w-4 h-4 [stroke-width:1.5]" data-lucide="home"></i> Home
                </a>
<a className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 [stroke-width:1.5]" data-lucide="briefcase"></i> Services
                </a>
<a className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4 [stroke-width:1.5]" data-lucide="phone"></i> Contact Us
                </a>
</div>

<div className="flex items-center gap-6">
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Login</a>
<a className="text-base font-medium px-6 py-2.5 rounded-lg transition-colors bg-black text-white hover:bg-gray-800" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="relative bg-[#EAF7F2] pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden rounded-b-[3rem] border-b border-green-100">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-white/50 text-xs font-semibold uppercase tracking-wide text-gray-700 mb-8 shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    EP Midcap Pro
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.15] font-semibold tracking-tight mb-6 text-gray-900">
                    3-4 High Growth Stocks<br/>Every Month
                </h1>
<p className="text-lg mb-10 text-gray-700 max-w-lg leading-relaxed">
                    We identify strong stocks early and tell you when to buy.
                    <br/><br/>
                    Midcap stocks are showing strength after a deep correction from 52-week highs. This phase rewards discipline, timing, and quality selection.
                </p>
<button className="font-medium px-8 py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-800 shadow-lg">
                    What You Get?
                    <i className="w-5 h-5 [stroke-width:1.5]" data-lucide="chevron-down"></i>
</button>
</div>

<div className="relative max-w-md mx-auto w-full lg:ml-auto">
<div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 border border-gray-100 relative z-20">
<h3 className="text-2xl font-semibold tracking-tight mb-6 text-gray-900">Get The Next Midcap</h3>
<form className="space-y-5">
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400" placeholder="Name" type="text"/>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400" placeholder="Email" type="email"/>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder-gray-400" placeholder="Mobile" type="tel"/>
<p className="text-xs text-gray-500 pt-1">By submitting, you agree to our Terms &amp; Conditions</p>
<button className="w-full font-medium px-6 py-4 rounded-xl text-base transition-colors bg-black text-white hover:bg-gray-800 shadow-md" type="submit">
                            Submit
                        </button>
</form>
</div>

<div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full blur-2xl z-0"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-2xl z-0"></div>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-6 relative z-20 -mt-16 mb-24">
<div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col items-center text-center w-full md:w-1/4 pt-4 md:pt-0 first:pt-0">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3">
<i className="w-6 h-6 text-green-500 [stroke-width:1.5]" data-lucide="shield-check"></i>
</div>
<h4 className="font-semibold text-base tracking-tight text-gray-900 mb-1">SEBI Registered Investment Advisor</h4>
<p className="text-xs text-gray-500">Registration No.: INA000006688</p>
</div>
<div className="flex flex-col items-center text-center w-full md:w-1/4 pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
<i className="w-6 h-6 text-blue-500 [stroke-width:1.5]" data-lucide="users"></i>
</div>
<h4 className="font-semibold text-base tracking-tight text-gray-900 mb-1">Your Trusted Partner</h4>
<p className="text-xs text-gray-500">Chosen by 1M+ Registered Users</p>
</div>
<div className="flex flex-col items-center text-center w-full md:w-1/4 pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-3">
<i className="w-6 h-6 text-yellow-500 [stroke-width:1.5]" data-lucide="trophy"></i>
</div>
<h4 className="font-semibold text-base tracking-tight text-gray-900 mb-1">Recognized For Excellence</h4>
<p className="text-xs text-gray-500">11+ National &amp; International Awards</p>
</div>
<div className="flex flex-col items-center text-center w-full md:w-1/4 pt-4 md:pt-0">
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-3">
<i className="w-6 h-6 text-purple-500 [stroke-width:1.5]" data-lucide="medal"></i>
</div>
<h4 className="font-semibold text-base tracking-tight text-gray-900 mb-1">Research Excellence</h4>
<p className="text-xs text-gray-500">20+ Years of Experience</p>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">

<div>
<h2 className="text-4xl font-semibold tracking-tight mb-10 text-gray-900">What You Get?</h2>
<ul className="space-y-5">
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">3-4 Midcap Stock Recommendations per month</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Fundamental business analysis</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Defined review &amp; action levels</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Timely Alerts for Quick Action</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Precise Entry &amp; Exit Guidance</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Dedicated Client Support</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Continuous Monitoring &amp; Real-Time Updates</span>
</li>
<li className="flex items-center gap-4">
<i className="w-6 h-6 text-emerald-500 shrink-0 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Recommendations via Web Platform &amp; Mobile App</span>
</li>
</ul>
</div>

<div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden w-full max-w-md mx-auto">

<div className="bg-[#F4F6F9] pt-12 pb-8 relative flex flex-col items-center border-b border-gray-200">
<div className="absolute -top-0 bg-[#283256] text-white text-xs font-semibold px-6 py-1.5 rounded-b-xl tracking-wider uppercase">
                        Limited Time Offer
                    </div>
<h3 className="text-3xl font-semibold tracking-tight mb-6 text-gray-900">45% OFF</h3>
<div className="flex items-center gap-3">
<div className="flex flex-col items-center">
<div className="bg-[#283256] text-white rounded-lg p-3 text-2xl font-semibold tracking-tight w-14 text-center shadow-inner">17</div>
<span className="text-[0.65rem] font-medium text-gray-500 mt-2 uppercase tracking-wide">Hours</span>
</div>
<div className="text-2xl font-semibold text-gray-400 pb-5">:</div>
<div className="flex flex-col items-center">
<div className="bg-[#283256] text-white rounded-lg p-3 text-2xl font-semibold tracking-tight w-14 text-center shadow-inner">21</div>
<span className="text-[0.65rem] font-medium text-gray-500 mt-2 uppercase tracking-wide">Minutes</span>
</div>
<div className="text-2xl font-semibold text-gray-400 pb-5">:</div>
<div className="flex flex-col items-center">
<div className="bg-[#283256] text-white rounded-lg p-3 text-2xl font-semibold tracking-tight w-14 text-center shadow-inner">49</div>
<span className="text-[0.65rem] font-medium text-gray-500 mt-2 uppercase tracking-wide">Seconds</span>
</div>
</div>
<p className="text-sm font-medium mt-6 text-gray-700">Special Discount – Available for a Short Time!</p>
</div>

<div className="p-8">
<h4 className="text-3xl font-semibold tracking-tight mb-1 text-gray-900">Midcap Pro</h4>
<p className="text-base text-gray-500 mb-8">Midcap PRO</p>

<label className="flex items-center justify-between border-2 border-gray-100 rounded-xl p-5 cursor-pointer hover:border-black transition-colors bg-white mb-8 group">
<div className="flex items-center gap-4">

<div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-black"></div>
</div>
<span className="font-semibold text-base text-gray-900">3 Months</span>
</div>
<div className="text-right flex items-center gap-3">
<span className="text-sm text-gray-400 line-through font-medium">₹ 35,000</span>
<span className="font-semibold text-xl tracking-tight text-gray-900">₹ 1,999</span>
</div>
</label>
<button className="w-full font-medium px-6 py-4 rounded-xl text-base transition-colors bg-black text-white hover:bg-gray-800 shadow-md">
                        Get Instant Access
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-12">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">How We Identify Midcap Opportunities?</h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">Our research team evaluates midcap stocks using a structured process that includes fundamental analysis, market conditions and technical analysis.</p>
<button className="font-medium px-8 py-3.5 rounded-xl text-base transition-colors bg-black text-white hover:bg-gray-800">
                Get Started
            </button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
<i className="w-6 h-6 [stroke-width:1.5]" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-6 text-gray-900">1. Fundamental Strength</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Consistent revenue &amp; margin expansion</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Healthy balance sheet with controlled debt</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Strong cash flow visibility</span>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center mb-6">
<i className="w-6 h-6 [stroke-width:1.5]" data-lucide="pie-chart"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-6 text-gray-900">2. Valuation Comfort</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Check P/E, P/B vs industry averages</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Downside Risk Assessment</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Strong volume participation</span>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
<i className="w-6 h-6 [stroke-width:1.5]" data-lucide="globe-2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-6 text-gray-900">3. Market Conditions</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Current top performing sector</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Raise in demand in near future</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600">Analyse Greed and Fear of current market</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Get started in 3 simple steps</h2>
<p className="text-lg text-gray-500 mb-20">Get started with professional financial advisory in four simple steps.</p>
<div className="flex flex-col md:flex-row justify-center items-start gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-gray-200 z-0"></div>

<div className="flex-1 flex flex-col items-center relative z-10 w-full">
<div className="relative w-24 h-24 bg-[#1e40af] rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-900/20">
<i className="w-10 h-10 [stroke-width:1.5]" data-lucide="target"></i>
<div className="absolute 0 -right-2 top-0 w-8 h-8 bg-white text-[#1e40af] border-2 border-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">1</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-gray-900">Risk Profiling</h3>
<p className="text-base text-gray-500 max-w-xs mx-auto">To check the capability &amp; willingness to take a risk</p>
</div>

<div className="flex-1 flex flex-col items-center relative z-10 w-full">
<div className="relative w-24 h-24 bg-[#1e40af] rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-900/20">
<i className="w-10 h-10 [stroke-width:1.5]" data-lucide="file-text"></i>
<div className="absolute 0 -right-2 top-0 w-8 h-8 bg-white text-[#1e40af] border-2 border-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">2</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-gray-900">Documentation</h3>
<p className="text-base text-gray-500 max-w-xs mx-auto">Sign an agreement &amp; complete the payment to begin the journey</p>
</div>

<div className="flex-1 flex flex-col items-center relative z-10 w-full">
<div className="relative w-24 h-24 bg-[#1e40af] rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-900/20">
<i className="w-10 h-10 [stroke-width:1.5]" data-lucide="line-chart"></i>
<div className="absolute 0 -right-2 top-0 w-8 h-8 bg-white text-[#1e40af] border-2 border-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">3</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-gray-900">Service Activation</h3>
<p className="text-base text-gray-500 max-w-xs mx-auto">Complete the KYC to activate your service</p>
</div>
</div>
<button className="mt-16 font-medium px-10 py-4 rounded-xl text-base transition-colors bg-black text-white hover:bg-gray-800 shadow-md">
            Start Now
        </button>
</section>

<section className="bg-[#F8FAFC] py-24 border-y border-gray-100 mt-12">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-2">20+</div>
<div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Years Experience</div>
<div className="text-sm text-gray-700">Retail, HNIs, UHNIs &amp; Institutions</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-2">1M+</div>
<div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Community</div>
<div className="text-sm text-gray-700">Registered users</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-2">33+</div>
<div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Countries</div>
<div className="text-sm text-gray-700">Client presence</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-2">350+</div>
<div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Algorithms</div>
<div className="text-sm text-gray-700">Research Models</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">India's Leading Equity Research Company</h2>
<p className="text-base text-gray-500 mb-8">Leading the way in research-driven investment advisory</p>
<p className="text-base text-gray-700 mb-6 leading-relaxed">
                        Founded in 2005, EquityPandit operates with a single belief: investment advice should be transparent, disciplined, and research-driven.
                    </p>
<p className="text-base font-semibold text-gray-900 mb-6">Over the 20+ years:</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">We have worked with Retail Investors, HNIs, UHNIs, and Institutions.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">We build the community of our 10,00,000+ registered users.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Clients across 33+ countries.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 [stroke-width:1.5]" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">350+ Research Algorithms.</span>
</li>
</ul>
<p className="text-base font-medium text-gray-900">Trust is built through consistency and responsible</p>
</div>
<div className="relative">
<img alt="Research Professional" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-50 rounded-3xl -z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Frequently Asked Questions</h2>
<p className="text-lg text-gray-500">Visit our FAQ section for answers to common queries.</p>
</div>
<div className="divide-y divide-gray-200">
<details className="group bg-white" open="">
<summary className="flex items-center justify-between py-6 cursor-pointer text-base font-medium select-none text-gray-900 list-none [&amp;::-webkit-details-marker]:hidden hover:text-green-600 transition-colors">
                    How can I choose the best package for myself ?
                    <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-green-600">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-base text-gray-600 leading-relaxed">
                    Our experts analyze your risk profile, capital, and financial goals to recommend the most suitable plan. You can start by connecting with our support team.
                </div>
</details>
<details className="group bg-white">
<summary className="flex items-center justify-between py-6 cursor-pointer text-base font-medium select-none text-gray-900 list-none [&amp;::-webkit-details-marker]:hidden hover:text-green-600 transition-colors">
                    Do EquityPandit provide guaranteed returns ?
                    <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-green-600">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-base text-gray-600 leading-relaxed">
                    No. We strictly follow a disciplined research-based strategy. Markets carry inherent risks, and our focus is on building probability, structure, and risk management—not making guaranteed return claims.
                </div>
</details>
<details className="group bg-white">
<summary className="flex items-center justify-between py-6 cursor-pointer text-base font-medium select-none text-gray-900 list-none [&amp;::-webkit-details-marker]:hidden hover:text-green-600 transition-colors">
                    Do EquityPandit provide guaranteed returns ?
                    <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-green-600">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-base text-gray-600 leading-relaxed">
                    As an advisory firm, we focus on high probability setups and strong fundamentals. We do not offer guaranteed return products.
                </div>
</details>
<details className="group bg-white">
<summary className="flex items-center justify-between py-6 cursor-pointer text-base font-medium select-none text-gray-900 list-none [&amp;::-webkit-details-marker]:hidden hover:text-green-600 transition-colors">
                    Do EquityPandit provide guaranteed returns ?
                    <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-green-600">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-base text-gray-600 leading-relaxed">
                    (Repeated question for layout accuracy). We prioritize risk management over unrealistic guarantees.
                </div>
</details>
<details className="group bg-white">
<summary className="flex items-center justify-between py-6 cursor-pointer text-base font-medium select-none text-gray-900 list-none [&amp;::-webkit-details-marker]:hidden hover:text-green-600 transition-colors">
                    Can you execute the trade or investment on my behalf ?
                    <span className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-hover:text-green-600">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="pb-6 text-base text-gray-600 leading-relaxed">
                    No. As a SEBI registered investment advisor, we only provide recommendations. The final execution and control of funds remain entirely with you.
                </div>
</details>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24">
<div className="bg-[#111827] text-white rounded-[2rem] p-12 md:p-16 text-center shadow-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Need any help? Contact To Our Support Team!</h2>
<p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">We are always there for you every time and will guide you at every step.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-10 text-base font-medium">
<a className="flex items-center gap-3 hover:text-gray-300 transition-colors" href="tel:+918000816688">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="phone"></i> +91 8000 816 688
                </a>
<a className="flex items-center gap-3 hover:text-gray-300 transition-colors" href="mailto:Support@Equitypandit.com">
<i className="w-5 h-5 [stroke-width:1.5]" data-lucide="mail"></i> Support@Equitypandit.com
                </a>
</div>
<button className="font-medium px-8 py-4 rounded-xl text-base transition-colors bg-white text-gray-900 hover:bg-gray-100 shadow-md">
                Contact us
            </button>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-semibold tracking-tight text-gray-900">EquityPandit</span>
<div className="flex flex-col border border-green-500 rounded px-1.5 py-0.5">
<span className="text-[0.4rem] font-semibold leading-none text-green-700 uppercase">Investment</span>
<span className="text-[0.4rem] font-semibold leading-none text-green-700 uppercase mt-0.5">Advisor</span>
</div>
</div>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Address: A-488, Vidhyut Nagar, Ajmer Road, Jaipur, Rajasthan - 302019
                    </p>
<p className="text-sm text-gray-600 mb-2">Phone: +91 8000 816 688</p>
<p className="text-sm text-gray-600 mb-6">Email: support@equitypandit.com</p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-100 transition-colors" href="#">
<i className="w-4 h-4 [stroke-width:1.5]" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors" href="#">
<i className="w-4 h-4 [stroke-width:1.5]" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-100 transition-colors" href="#">
<i className="w-4 h-4 [stroke-width:1.5]" data-lucide="instagram"></i>
</a>
</div>
</div>

<div>
<h5 className="text-base font-semibold text-gray-900 mb-6">Company</h5>
<ul className="space-y-4 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h5 className="text-base font-semibold text-gray-900 mb-6">Services</h5>
<ul className="space-y-4 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Plan &amp; Pricing</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Investing &amp; Trading</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">HNI Services</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Institutional Investors</a></li>
</ul>
</div>

<div>
<h5 className="text-base font-semibold text-gray-900 mb-6">Download App</h5>
<ul className="space-y-4 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Android</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">iOS</a></li>
</ul>
</div>

<div>
<h5 className="text-base font-semibold text-gray-900 mb-6">Legal &amp; Privacy</h5>
<ul className="space-y-4 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms and Conditions</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Grievance Redressal / Escalation Matrix</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Disclosure</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Investor Charter</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Investor Grievance</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Compliance Audit</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-200 pt-8 mt-8">
<p className="text-sm text-gray-700 mb-8">
                    For any grievances/support, contact our support team at <strong className="font-semibold text-gray-900">support@equitypandit.com</strong> or call us at <strong className="font-semibold text-gray-900">8000 816 688</strong>
</p>
<div className="grid md:grid-cols-3 gap-8 text-xs text-gray-500 leading-relaxed">
<div className="md:col-span-1">
<p className="font-semibold text-gray-900 mb-2">SEBI Registered Investment Advisor Details:</p>
<p>Registered Name: Equitypandit Financial Services Private Limited</p>
<p>Type of registration: Non-Individual</p>
<p>Registration No.: INA000006688</p>
<p>Validity: Perpetual</p>
</div>
<div className="md:col-span-2">
<p className="mb-4">
                            Principal Officer: Kamlesh Sachar | Email: po@equitypandit.in | Contact No.: +91 8000816688 | SEBI LO.: Ground Floor, Jeevan Nidhi 2 LIC Building, Ambedkar Circle, Bhawani Singh Rd, Jaipur, Rajasthan 302005
                        </p>
<p className="font-semibold text-gray-900 mb-2">Disclaimers:</p>
<ol className="list-decimal pl-4 space-y-2">
<li>Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</li>
<li>The securities quoted, if any are for illustration only and are not recommendatory.</li>
<li>Investments in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
</ol>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
