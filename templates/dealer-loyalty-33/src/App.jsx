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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="trophy"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Dealer<span className="text-orange-500">Wise</span></span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Partners</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden lg:block text-sm font-medium text-slate-600 hover:text-slate-900">Log In</button>
<button className="hidden lg:block bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                        Get Started
                    </button>

<button className="lg:hidden text-slate-900 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-12 pb-16 lg:pt-24 lg:pb-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-6 text-center lg:text-left">
<h1 className="text-3xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.2]">
<span className="text-orange-500">Dealer Loyalty</span> &amp; Incentive Platform for Sales Growth
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Motivate Dealers. Increase Sales. Build Long-Term Loyalty with an automated suite designed for high-performance brands.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
<button className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white h-12 lg:h-14 px-8 rounded-lg font-medium shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                            Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 h-12 lg:h-14 px-8 rounded-lg font-medium shadow-sm transition-colors">
                            View Demo
                        </button>
</div>
</div>

<div className="w-full relative">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-teal-50 rounded-2xl blur opacity-30"></div>

<div className="relative bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">

<details className="lg:hidden group w-full" open="">
<summary className="flex items-center justify-between p-4 cursor-pointer bg-slate-50 border-b border-slate-100 list-none">
<span className="font-semibold text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="mail"></i>
                                    Get In Touch
                                </span>
<i className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>

<div className="p-6 lg:p-8 space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Your Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Work Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg shadow-sm shadow-orange-500/30 transition-all mt-2">
                                    Let's Connect
                                </button>
</div>
</details>

<div className="hidden lg:block p-8 space-y-5">
<div className="border-l-4 border-orange-500 pl-4 mb-6">
<h3 className="text-lg font-semibold text-slate-900">Talk To A Loyalty Expert</h3>
<p className="text-sm text-slate-500">Get a custom plan for your brand.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="Your Name" type="text"/>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="Company Name" type="text"/>
</div>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="Work Email" type="email"/>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" placeholder="Phone Number" type="tel"/>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg shadow-md shadow-orange-500/20 transition-all">
                                Let's Connect
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-2xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
<span className="text-orange-500">Market Shift</span> In Dealer Engagement
                </h2>
<p className="text-slate-500">Why traditional methods are failing modern brands.</p>
</div>

<div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-4 pb-8 lg:pb-0 no-scrollbar px-4 lg:px-0 -mx-4 lg:mx-0">

<div className="min-w-[280px] lg:min-w-0 snap-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
<i className="w-6 h-6" data-lucide="trending-down"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Motivation Slumps</h3>
<p className="text-sm text-slate-500 leading-relaxed">Late or unclear rewards weaken dealer engagement and loyalty over time.</p>
</div>

<div className="min-w-[280px] lg:min-w-0 snap-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
<i className="w-6 h-6" data-lucide="shuffle"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Operational Chaos</h3>
<p className="text-sm text-slate-500 leading-relaxed">Manual &amp; fragmented incentive programs lead to inefficiency &amp; errors.</p>
</div>

<div className="min-w-[280px] lg:min-w-0 snap-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
<i className="w-6 h-6" data-lucide="eye-off"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Low Data Visibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Limited insight into dealer performance makes optimization impossible.</p>
</div>

<div className="min-w-[280px] lg:min-w-0 snap-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Scaling Issues</h3>
<p className="text-sm text-slate-500 leading-relaxed">Difficulty expanding engagement programs across multiple regions.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-2xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
<span className="text-orange-500">One</span> Platform. <span className="text-orange-500">Complete</span> Engagement.
                </h2>
<p className="text-slate-500">A complete dealer loyalty &amp; incentive management platform for brands.</p>
</div>

<div className="lg:hidden space-y-8 pl-2">

<div className="relative pl-8 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal-500 ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Fully Digital &amp; White-Labeled</h3>
<p className="text-sm text-slate-500 mb-2"><span className="text-orange-500 font-medium">No Hardware Needed.</span> Launch in days, not months.</p>
</div>

<div className="relative pl-8 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">AI-Powered Schemes</h3>
<p className="text-sm text-slate-500">Predictive AI schemes customized by <span className="text-orange-500 font-medium">Tier &amp; Region</span>.</p>
</div>

<div className="relative pl-8 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">WhatsApp Integration</h3>
<p className="text-sm text-slate-500">Instant onboarding with "Hi". <span className="text-orange-500 font-medium">Zero Learning Curve</span>.</p>
</div>

<div className="relative pl-8 border-l-2 border-slate-100">
<div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-orange-500 ring-4 ring-white"></div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Real-Time Payouts</h3>
<p className="text-sm text-slate-500">Seamless integration with banking APIs for <span className="text-orange-500 font-medium">Instant Rewards</span>.</p>
</div>
</div>

<div className="hidden lg:grid grid-cols-3 gap-12 items-center">

<div className="space-y-12 text-right">
<div className="group">
<h3 className="text-lg font-semibold text-teal-700">Fully Digital &amp; White-Labeled</h3>
<p className="text-sm text-slate-500 mt-1">No Hardware Needed. Launch in Days.</p>
</div>
<div className="group">
<h3 className="text-lg font-semibold text-blue-700">AI-Powered Schemes</h3>
<p className="text-sm text-slate-500 mt-1">Predictive AI Schemes, Customized.</p>
</div>
<div className="group">
<h3 className="text-lg font-semibold text-purple-700">AI Surveys &amp; Feedback</h3>
<p className="text-sm text-slate-500 mt-1">Happiness Insights with Real-Time Reporting.</p>
</div>
</div>

<div className="relative flex items-center justify-center">
<div className="h-64 w-64 rounded-full border-[3px] border-slate-100 flex items-center justify-center relative bg-white z-10 shadow-2xl shadow-slate-200">
<div className="text-center">
<span className="block text-4xl font-bold text-slate-900 tracking-tight">One</span>
<span className="block text-sm text-slate-400 font-medium tracking-wide uppercase mt-1">Platform</span>
</div>
</div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-0"></div>
<div className="absolute top-0 left-1/2 h-full w-[1px] bg-slate-200 -z-0"></div>
</div>

<div className="space-y-12 text-left">
<div className="group">
<h3 className="text-lg font-semibold text-teal-700">Multilingual &amp; Accessible</h3>
<p className="text-sm text-slate-500 mt-1">9+ Regional Language Support.</p>
</div>
<div className="group">
<h3 className="text-lg font-semibold text-blue-700">WhatsApp Integration</h3>
<p className="text-sm text-slate-500 mt-1">Works on Low-End Devices.</p>
</div>
<div className="group">
<h3 className="text-lg font-semibold text-purple-700">Seamless Integration</h3>
<p className="text-sm text-slate-500 mt-1">Compatible with SAP, Zoho, Tally.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                    Beyond Cash <span className="text-orange-500">Incentives</span>
</h2>
<p className="text-slate-500 mt-2">Flexible dealer reward options that increase participation.</p>
</div>

<div className="flex overflow-x-auto no-scrollbar gap-3 pb-6 -mx-4 px-4 justify-start lg:justify-center">
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-teal-700 text-white text-sm font-medium shadow-sm transition-transform active:scale-95">UPI Payout</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300">Health &amp; Wellness</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300">Insurance</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300">Vouchers</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300">Merchandise</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300">Travel</button>
</div>

<div className="mt-4 bg-white border border-slate-100 rounded-2xl p-6 lg:p-12 shadow-lg shadow-slate-100 max-w-5xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-10">
<div className="flex-1 space-y-6">
<h3 className="text-2xl font-semibold text-slate-900">UPI Payout</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600">Instantly convert reward points into direct dealer bank payouts.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600">Enable lightning-fast payouts via UPI.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600">Ensure Secure, RBI-Compliant payouts with AML controls.</span>
</li>
</ul>
</div>

<div className="flex-1 w-full max-w-[280px] lg:max-w-md">
<div className="aspect-square bg-teal-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-200 to-transparent"></div>
<i className="w-24 h-24 text-teal-600 relative z-10" data-lucide="smartphone"></i>
<div className="absolute bottom-6 right-6 h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
<i className="w-6 h-6" data-lucide="indian-rupee"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted By Leading Brands &amp; Platforms</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 items-center opacity-70 grayscale">
<div className="flex items-center justify-center font-bold text-2xl text-slate-400">AJIO</div>
<div className="flex items-center justify-center font-bold text-2xl text-slate-400">zomato</div>
<div className="flex items-center justify-center font-bold text-2xl text-slate-400">bigbasket</div>
<div className="flex items-center justify-center font-bold text-2xl text-slate-400">DECATHLON</div>
<div className="flex items-center justify-center font-bold text-2xl text-slate-400">amazon</div>
<div className="flex items-center justify-center font-bold text-2xl text-slate-400">Cromā</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl lg:text-4xl font-semibold text-slate-900 text-center mb-10 tracking-tight">
                Frequently <span className="text-orange-500">Asked</span> Questions
            </h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-4 lg:p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="font-semibold text-slate-900">About BenefitWise</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                        BenefitWise is an all-in-one platform for employee benefits, engagement, and rewards, helping companies build better workplaces through technology.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-4 lg:p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="font-semibold text-slate-900">How we are helpful to you</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                        We streamline your incentive programs, automate payouts, and provide actionable insights into your dealer network's performance.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-4 lg:p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="font-semibold text-slate-900">Channel Incentivization</span>
<i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                        Create tiered structures, region-specific goals, and real-time leaderboards to gamify sales and boost engagement.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#0f4c3f] py-16 lg:py-24">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-2xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
                Ready To Transform Your Dealer Loyalty?
            </h2>
<p className="text-teal-100 mb-10 max-w-2xl mx-auto">
                Schedule a personalized demo to see how DealerWise can boost engagement, simplify administration &amp; maximize your ROI.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-teal-900 hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                    Schedule A Demo
                </button>
<button className="w-full sm:w-auto bg-transparent border border-teal-400 text-white hover:bg-teal-900/50 font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i> Download Brochure
                </button>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 bg-teal-700 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="trophy"></i>
</div>
<span className="text-lg font-bold text-slate-900">DealerWise</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        The All-In-One Platform For Employee Benefits, Engagement &amp; Rewards. Helping Companies Build Better Workplaces.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Solutions</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-500" href="#">DealerWise</a></li>
<li><a className="hover:text-orange-500" href="#">GrowthWise</a></li>
<li><a className="hover:text-orange-500" href="#">ExpenseWise</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">About</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-500" href="#">About Us</a></li>
<li><a className="hover:text-orange-500" href="#">Careers</a></li>
<li><a className="hover:text-orange-500" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Socials</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-pink-600" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-red-600" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-400">
                © 2024 Earnest Data Analytics Private Limited. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
