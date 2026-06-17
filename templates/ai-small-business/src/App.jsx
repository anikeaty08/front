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
      

<header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl tracking-tight font-semibold text-slate-900 flex items-center gap-2" href="#">
<span className="iconify text-[#0056b3]" data-icon="lucide:bot" data-width="24"></span>
                        AI<span className="font-normal text-slate-500">PARTNER</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#0056b3] transition-colors" href="#challenges">Challenges</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0056b3] transition-colors" href="#approach">Our Approach</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0056b3] transition-colors" href="#benefits">Benefits</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0056b3] transition-colors" href="#process">How It Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0056b3] transition-colors" href="#testimonials">Success Stories</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-sm" href="#contact">
                        Get Started
                    </a>
</div>

<div className="flex items-center md:hidden">
<button aria-controls="mobile-menu" aria-expanded="false" className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0056b3]" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#0056b3]/10 text-[#0056b3] mb-8 border border-[#0056b3]/20">
<span className="flex h-2 w-2 rounded-full bg-[#0056b3] mr-2"></span>
                    Trusted by 50+ small businesses
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-900 mb-6 max-w-4xl mx-auto">
                    Modernize Your Small Business with AI—Without the Complexity
                </h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get a clear, structured path to automation that saves time, cuts costs, and grows your business. Built specifically for small business owners.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-md hover:shadow-lg" href="#contact">
                        Schedule Your Free AI Strategy Session
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm" href="#process">
<span className="iconify mr-2" data-icon="lucide:play-circle" data-width="20"></span>
                        See How It Works
                    </a>
</div>
<p className="text-sm text-slate-400">
                    No technical expertise required. No disruption to your daily operations. <br className="hidden sm:block"/>Just practical AI solutions that work for businesses with under 10 employees.
                </p>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#0056b3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
<div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#ff7f50] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="challenges">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
                            Does This Sound Familiar?
                        </h2>
<p className="text-lg text-slate-500 mb-8">
                            You're not alone. Most small business owners face these exact challenges. You know your business needs to modernize, but:
                        </p>
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#ff7f50]" data-icon="lucide:alert-circle" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">Manual Processes Are Slowing You Down</h3>
<p className="text-slate-500">Excel spreadsheets, paper notes, and repetitive tasks consume hours every week that could be spent growing your business.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#ff7f50]" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">AI Feels Overwhelming and Confusing</h3>
<p className="text-slate-500">Everyone's talking about AI, but you're not sure where to start, what to trust, or how it fits your small operation.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#ff7f50]" data-icon="lucide:database" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">Your Data Is All Over the Place</h3>
<p className="text-slate-500">Customer information, inventory, schedules—everything's scattered across different systems, making good decisions nearly impossible.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#ff7f50]" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">You Don't Have Technical Staff</h3>
<p className="text-slate-500">Without IT support or technical expertise in-house, implementing new technology feels risky and impossible to manage.</p>
</div>
</div>
</div>
<div className="mt-10 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
<p className="font-medium text-slate-900 mb-4">These challenges hold you back from competing effectively and scaling sustainably.</p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex items-center text-[#0056b3] font-medium hover:text-[#003d7a] transition-colors group" href="#approach">
                                    Discover Your AI Roadmap
                                    <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<span className="text-sm text-slate-400">See how we solve these problems</span>
</div>
</div>
</div>
<div className="relative hidden lg:block h-full min-h-[500px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg">

<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff7f50] rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
</div>
<div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-xl shadow-sm p-8 flex flex-col gap-4 border border-slate-100">
<div className="h-4 w-1/3 bg-slate-100 rounded"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-2 w-2/3 bg-slate-50 rounded"></div>
<div className="mt-8 flex gap-4">
<div className="h-20 w-1/2 bg-slate-50 rounded border border-slate-100"></div>
<div className="h-20 w-1/2 bg-slate-50 rounded border border-slate-100"></div>
</div>
<div className="mt-auto flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
<span className="iconify text-red-500" data-icon="lucide:alert-triangle" data-width="20"></span>
<span className="text-sm text-red-700 font-medium">Process Bottleneck Detected</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="approach">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
                        Your Clear Path to AI Success
                    </h2>
<p className="text-lg text-slate-500 mb-6">
                        We've created a proven, step-by-step approach that removes the guesswork and complexity from AI adoption.
                    </p>
<p className="text-sm text-slate-500 bg-slate-50 inline-block px-4 py-2 rounded-full border border-slate-200">
                        Our structured method is designed specifically for small businesses—practical, manageable, and built around your existing operations.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#0056b3]/30 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#0056b3]" data-icon="lucide:search" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Strategic Assessment</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We start by understanding your business, identifying quick wins, and mapping AI opportunities to your actual needs.
                        </p>
</div>

<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#0056b3]/30 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#0056b3]" data-icon="lucide:map" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Custom AI Roadmap</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            You receive a clear, prioritized plan tailored to your business size, industry, and budget—no generic solutions.
                        </p>
</div>

<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#0056b3]/30 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#0056b3]" data-icon="lucide:settings-2" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Guided Implementation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We handle the technical complexity while keeping you informed and in control throughout the entire process.
                        </p>
</div>

<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#0056b3]/30 transition-colors group">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-[#0056b3]" data-icon="lucide:life-buoy" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Ongoing Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Your business evolves, and so should your automation. We provide continuous optimization and hands-on assistance.
                        </p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-slate-600 mb-6 font-medium">No jargon. No overwhelm. Just a clear plan that makes AI work for your small business.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-sm" href="#contact">
                            Get Your Custom AI Strategy
                        </a>
<span className="text-xs text-slate-400">Free consultation • No obligation</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-6">
                            What You'll Gain
                        </h2>
<p className="text-lg text-slate-300 mb-6">
                            Real results that impact your bottom line and give you time back.
                        </p>
<p className="text-sm text-slate-400 mb-10">
                            Our clients typically see these measurable improvements within the first 90 days:
                        </p>
<a className="hidden lg:inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-sm" href="#contact">
                            Unlock Your Business Potential
                        </a>
<p className="hidden lg:block mt-3 text-xs text-slate-500">Start with a free strategy session</p>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">

<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-[#29a745]" data-icon="lucide:clock" data-width="24"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#29a745] bg-[#29a745]/10 px-2 py-1 rounded">10-15 hrs/week</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Save 10-15 Hours Per Week</h3>
<p className="text-sm text-slate-400">Automate repetitive administrative tasks so you can focus on what actually grows your business.</p>
</div>

<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-[#29a745]" data-icon="lucide:trending-down" data-width="24"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#29a745] bg-[#29a745]/10 px-2 py-1 rounded">20-30% savings</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Reduce Operational Costs</h3>
<p className="text-sm text-slate-400">Eliminate errors, optimize processes, and cut unnecessary expenses through intelligent automation.</p>
</div>

<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-[#29a745]" data-icon="lucide:zap" data-width="24"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#29a745] bg-[#29a745]/10 px-2 py-1 rounded">Real-time insights</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Make Faster, Better Decisions</h3>
<p className="text-sm text-slate-400">Consolidate your data into clear insights that help you spot opportunities and solve problems quickly.</p>
</div>

<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-[#29a745]" data-icon="lucide:smile" data-width="24"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#29a745] bg-[#29a745]/10 px-2 py-1 rounded">Higher satisfaction</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Improve Customer Experience</h3>
<p className="text-sm text-slate-400">Respond faster, personalize interactions, and deliver consistency that builds loyalty and drives repeat business.</p>
</div>

<div className="sm:col-span-2 bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<span className="iconify text-[#29a745]" data-icon="lucide:shield" data-width="24"></span>
<h3 className="text-lg font-medium text-white">Stay Competitive</h3>
</div>
<p className="text-sm text-slate-400">Modernize at your own pace while keeping up with larger competitors who've already adopted automation. <span className="text-[#29a745]">Level the playing field.</span></p>
</div>
</div>
<div className="lg:hidden col-span-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-sm w-full" href="#contact">
                            Unlock Your Business Potential
                        </a>
<p className="mt-3 text-xs text-slate-500">Start with a free strategy session</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
                        How We Make AI Easy
                    </h2>
<p className="text-lg text-slate-500 mb-2">
                        A simple, transparent process designed to fit your schedule and minimize disruption.
                    </p>
<p className="text-sm text-slate-400">From first conversation to full implementation, here's exactly what to expect:</p>
</div>
<div className="relative">

<div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="order-2 md:order-1 flex-1 md:text-right">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:inline-block md:w-full md:max-w-md">
<h3 className="text-lg font-medium text-slate-900 mb-2">Free Strategy Session</h3>
<p className="text-sm text-slate-500 mb-3">We discuss your challenges, goals, and current processes in a no-pressure conversation. You'll leave with immediate insights.</p>
<span className="inline-block px-2 py-1 bg-blue-50 text-[#0056b3] text-xs font-semibold rounded">45 minutes</span>
</div>
</div>
<div className="order-1 md:order-2 z-10 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-[#0056b3] text-white flex items-center justify-center font-bold text-sm border-4 border-slate-50">01</div>
</div>
<div className="order-3 flex-1 md:block hidden"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="order-3 md:order-1 flex-1 md:block hidden"></div>
<div className="order-1 md:order-2 z-10 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm border-4 border-slate-200">02</div>
</div>
<div className="order-2 md:order-3 flex-1">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:inline-block md:w-full md:max-w-md">
<h3 className="text-lg font-medium text-slate-900 mb-2">Business Assessment</h3>
<p className="text-sm text-slate-500 mb-3">We analyze your operations, identify automation opportunities, and prioritize solutions based on impact and feasibility.</p>
<span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">1-2 weeks</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="order-2 md:order-1 flex-1 md:text-right">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:inline-block md:w-full md:max-w-md">
<h3 className="text-lg font-medium text-slate-900 mb-2">Custom AI Roadmap</h3>
<p className="text-sm text-slate-500 mb-3">You receive a clear, actionable plan with timelines, costs, and expected outcomes—tailored specifically to your business.</p>
<span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">Delivered within 2 weeks</span>
</div>
</div>
<div className="order-1 md:order-2 z-10 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm border-4 border-slate-200">03</div>
</div>
<div className="order-3 flex-1 md:block hidden"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="order-3 md:order-1 flex-1 md:block hidden"></div>
<div className="order-1 md:order-2 z-10 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm border-4 border-slate-200">04</div>
</div>
<div className="order-2 md:order-3 flex-1">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:inline-block md:w-full md:max-w-md">
<h3 className="text-lg font-medium text-slate-900 mb-2">Guided Implementation</h3>
<p className="text-sm text-slate-500 mb-3">We implement solutions in manageable phases, training your team and ensuring smooth integration without disrupting operations.</p>
<span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">Phased approach</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="order-2 md:order-1 flex-1 md:text-right">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:inline-block md:w-full md:max-w-md">
<h3 className="text-lg font-medium text-slate-900 mb-2">Optimization &amp; Support</h3>
<p className="text-sm text-slate-500 mb-3">We monitor performance, refine processes, and provide ongoing support to ensure long-term success and continuous improvement.</p>
<span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded">Ongoing</span>
</div>
</div>
<div className="order-1 md:order-2 z-10 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm border-4 border-slate-200">05</div>
</div>
<div className="order-3 flex-1 md:block hidden"></div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-slate-600 mb-6 font-medium">Every step is designed to build your confidence and deliver measurable results.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-sm" href="#contact">
                            Start Your AI Journey Today
                        </a>
<span className="text-xs text-slate-400">Schedule your free strategy session</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
                        Success Stories from Small Businesses Like Yours
                    </h2>
<p className="text-lg text-slate-500 mb-6">
                        Real results from real business owners who've transformed their operations.
                    </p>
<p className="text-sm text-slate-400">Don't just take our word for it—see how we've helped small businesses modernize and thrive:</p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-16">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
<div className="flex-1">
<div className="flex gap-1 text-[#ff7f50] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<blockquote className="text-slate-700 text-sm leading-relaxed mb-6">
                                "We went from spending 12 hours a week on scheduling and inventory to just 2 hours. The roadmap was clear, the implementation was smooth, and the results exceeded our expectations."
                            </blockquote>
</div>
<div className="border-t border-slate-100 pt-6">
<p className="font-semibold text-slate-900">Mike T.</p>
<p className="text-xs text-slate-500">Owner, Local Manufacturing</p>
<p className="text-xs text-slate-400 mt-1">8 employees</p>
<div className="mt-3 inline-flex items-center text-xs font-medium text-[#29a745]">
<span className="iconify mr-1" data-icon="lucide:check-circle" data-width="14"></span>
                                83% time savings on admin tasks
                            </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
<div className="flex-1">
<div className="flex gap-1 text-[#ff7f50] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<blockquote className="text-slate-700 text-sm leading-relaxed mb-6">
                                "I was overwhelmed by all the AI options out there. This team cut through the noise, gave me a plan I could understand, and made it all happen without disrupting my daily operations."
                            </blockquote>
</div>
<div className="border-t border-slate-100 pt-6">
<p className="font-semibold text-slate-900">Rachel K.</p>
<p className="text-xs text-slate-500">Managing Director, Specialty Retail</p>
<p className="text-xs text-slate-400 mt-1">6 employees</p>
<div className="mt-3 inline-flex items-center text-xs font-medium text-[#0056b3]">
<span className="iconify mr-1" data-icon="lucide:check-circle" data-width="14"></span>
                                Consolidated data from 5 systems
                            </div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
<div className="flex-1">
<div className="flex gap-1 text-[#ff7f50] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<blockquote className="text-slate-700 text-sm leading-relaxed mb-6">
                                "For the first time, I have real visibility into my business performance. The automation handles the tedious stuff, and I can finally focus on growth. Best investment I've made."
                            </blockquote>
</div>
<div className="border-t border-slate-100 pt-6">
<p className="font-semibold text-slate-900">Walter S.</p>
<p className="text-xs text-slate-500">Proprietor, Auto Repair Shop</p>
<p className="text-xs text-slate-400 mt-1">4 employees</p>
<div className="mt-3 inline-flex items-center text-xs font-medium text-[#29a745]">
<span className="iconify mr-1" data-icon="lucide:check-circle" data-width="14"></span>
                                25% reduction in operational costs
                            </div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
<h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">Proven Results Across Small Businesses</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<p className="text-3xl md:text-4xl font-semibold text-[#0056b3] mb-1">50+</p>
<p className="text-xs text-slate-500">Small businesses transformed</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-semibold text-[#0056b3] mb-1">12 hrs</p>
<p className="text-xs text-slate-500">Average weekly time saved</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-semibold text-[#0056b3] mb-1">25%</p>
<p className="text-xs text-slate-500">Average cost reduction</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-semibold text-[#0056b3] mb-1">90 days</p>
<p className="text-xs text-slate-500">Typical time to first results</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-sm" href="#contact">
                            See How We've Helped Others
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-[#0056b3] bg-blue-50 hover:bg-blue-100 transition-all" href="#">
                            Read More Success Stories
                        </a>
</div>
<p className="mt-4 text-xs text-slate-400">Your business could be next</p>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
                        Why Small Businesses Choose Us
                    </h2>
<p className="text-lg text-slate-500 mb-4">
                        We're not a big consulting firm. We're your dedicated AI partner, focused exclusively on small business success.
                    </p>
<p className="text-sm text-slate-400">Here's what makes us different:</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0056b3]/10 text-[#0056b3]">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Small Business Specialists</h3>
<p className="text-sm text-slate-500 leading-relaxed">We only work with businesses under 10 employees. We understand your constraints, budget realities, and what actually works at your scale.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0056b3]/10 text-[#0056b3]">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">No Technical Jargon</h3>
<p className="text-sm text-slate-500 leading-relaxed">We translate AI into plain business language. You'll always understand what we're doing, why we're doing it, and what results to expect.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0056b3]/10 text-[#0056b3]">
<span className="iconify" data-icon="lucide:tool" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Practical, Not Theoretical</h3>
<p className="text-sm text-slate-500 leading-relaxed">We focus on solutions that deliver measurable ROI quickly—no experimental projects or bleeding-edge tech that might not work.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0056b3]/10 text-[#0056b3]">
<span className="iconify" data-icon="lucide:handshake" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Hands-On Implementation</h3>
<p className="text-sm text-slate-500 leading-relaxed">We don't just hand you a report and disappear. We're with you through implementation, training, and beyond.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0056b3]/10 text-[#0056b3]">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Transparent Pricing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Clear quotes, no hidden fees, and flexible engagement models that fit small business budgets. You'll know exactly what you're investing.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0056b3]/10 text-[#0056b3]">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
</div>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Long-Term Partnership</h3>
<p className="text-sm text-slate-500 leading-relaxed">We measure our success by your success. As your business grows, we grow with you—optimizing and evolving your automation.</p>
</div>
</div>
</div>
<div className="mt-12 text-center border-t border-slate-200 pt-10">
<p className="text-slate-600 font-medium mb-6">We're invested in making AI accessible, understandable, and profitable for small businesses.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-sm" href="#contact">
                            Partner With AI Experts
                        </a>
<span className="text-xs text-slate-400">Schedule a free consultation</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
                        Your Questions Answered
                    </h2>
<p className="text-lg text-slate-500 mb-2">
                        We know you have concerns. Here are honest answers to the questions we hear most.
                    </p>
<p className="text-sm text-slate-400">Still wondering if AI is right for your small business? Let's address the common questions:</p>
</div>
<div className="space-y-2">

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>How much does this cost?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            Investment varies based on your specific needs and business size. Most small businesses start with a strategy session (free) and then invest between $5,000-$15,000 for initial implementation. We provide transparent quotes upfront and flexible payment options. The typical ROI is achieved within 6-9 months through time savings and cost reductions.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>Do I need technical knowledge or IT staff?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            Absolutely not. That's exactly why we exist. We handle all the technical complexity. You focus on running your business while we implement, train, and support. If you can use email and a web browser, you can use the solutions we implement.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>Will this disrupt my daily operations?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            No. We design implementations to work around your schedule and operations. Most automation happens in the background or during off-hours. We phase implementations carefully and provide thorough training so your team feels confident, not overwhelmed.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>How long does implementation take?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            It depends on scope, but most small businesses see their first automated processes live within 2-4 weeks. Full implementation typically takes 6-12 weeks, broken into manageable phases. You'll start seeing time savings and efficiency gains from the very first phase.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>Is my data secure?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            Yes. We follow industry-standard security practices and only work with trusted, reputable platforms. We never share your data, and you maintain full ownership and control. We're happy to discuss specific security measures during your strategy session.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>What if I'm not sure what I need?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            That's completely normal and exactly what the free strategy session is for. We'll assess your business together, identify opportunities, and help you understand what's possible. There's no obligation—many clients find value just from the insights in the initial conversation.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>What happens after implementation?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            We don't disappear. You receive ongoing support, optimization recommendations, and access to our team for questions. As your business evolves, we help you adapt and expand your automation. Think of us as your long-term AI partner, not just a one-time vendor.
                        </div>
</details>

<details className="group border-b border-slate-100 pb-4 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 hover:text-[#0056b3] transition-colors">
<span>What industries do you work with?</span>
<span className="transition group-open:rotate-180">
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed">
                            We work across many small business sectors including manufacturing, retail, professional services, workshops, and specialty trades. Our approach is customized to your specific industry challenges and workflows. If you're a small business facing manual processes and operational inefficiency, we can help.
                        </div>
</details>
</div>
<div className="mt-12 text-center bg-slate-50 rounded-xl p-6">
<p className="text-slate-900 font-medium mb-1">Don't see your question here?</p>
<p className="text-sm text-slate-500 mb-4">We're happy to address any concerns.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center text-[#0056b3] font-medium hover:text-[#003d7a] transition-colors" href="#contact">
                            Still Have Questions? Ask Us!
                            <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<span className="text-xs text-slate-400">Schedule a call or send us a message</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0056b3] text-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-6">
                            Ready to Transform Your Business?
                        </h2>
<p className="text-lg text-slate-200 mb-8">
                            Take the first step toward smarter operations, more time, and sustainable growth.
                        </p>
<div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/20">
<h3 className="font-medium text-white mb-4">Your free AI strategy session includes:</h3>
<ul className="space-y-3">
<li className="flex gap-3 text-slate-200 text-sm">
<span className="iconify text-[#ff7f50] flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
                                    A thorough assessment of your current processes and pain points
                                </li>
<li className="flex gap-3 text-slate-200 text-sm">
<span className="iconify text-[#ff7f50] flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
                                    Identification of immediate automation opportunities
                                </li>
<li className="flex gap-3 text-slate-200 text-sm">
<span className="iconify text-[#ff7f50] flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
                                    Clear recommendations tailored to your business size and budget
                                </li>
<li className="flex gap-3 text-slate-200 text-sm">
<span className="iconify text-[#ff7f50] flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
                                    Honest answers to all your questions about AI and automation
                                </li>
<li className="flex gap-3 text-slate-200 text-sm">
<span className="iconify text-[#ff7f50] flex-shrink-0" data-icon="lucide:check" data-width="20"></span>
                                    No obligation—just valuable insights you can use right away
                                </li>
</ul>
</div>
<div className="flex gap-3 items-center text-xs text-slate-300 mb-6 bg-black/20 p-3 rounded-lg inline-block">
<span className="iconify text-[#ff7f50]" data-icon="lucide:alert-circle" data-width="16"></span>
                            Limited availability: We only take on 5 new clients per month to ensure exceptional service.
                        </div>
<p className="text-sm font-medium text-white">Join 50+ small businesses who've already started their AI journey with confidence.</p>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900 mb-1">Book Your Free Strategy Session</h3>
<p className="text-sm text-slate-500">Choose a time that works for you. We'll send a calendar invite right away.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent text-sm" id="name" placeholder="John Smith" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email Address</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent text-sm" id="email" placeholder="john@yourbusiness.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number (optional)</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent text-sm" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="employees">Number of Employees</label>
<select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent text-sm bg-white" id="employees">
<option disabled="" selected="" value="">Select size</option>
<option value="1-5">1-5</option>
<option value="6-10">6-10</option>
<option value="10+">10+</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="business">Business Name</label>
<input className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent text-sm" id="business" placeholder="Your Business Name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="challenge">What's your biggest operational challenge?</label>
<textarea className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent text-sm resize-none" id="challenge" placeholder="Briefly describe your main challenge..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0056b3] hover:bg-[#003d7a] transition-all shadow-md" type="submit">
                                    Schedule Your Free Session
                                </button>
</div>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center text-[10px] text-slate-400">
<span className="iconify mr-1" data-icon="lucide:lock" data-width="12"></span>
                                    Secure form. No spam.
                                </div>
<div className="text-[10px] text-slate-400">
                                    We respect your privacy.
                                </div>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<a className="text-lg tracking-tight font-semibold text-slate-900 flex items-center gap-2 mb-4" href="#">
<span className="iconify text-[#0056b3]" data-icon="lucide:bot" data-width="20"></span>
                        AI<span className="font-normal text-slate-500">PARTNER</span>
</a>
<p className="text-sm text-slate-500">Making AI accessible, understandable, and profitable for small businesses.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#testimonials">Success Stories</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#approach">Strategy</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#approach">Implementation</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#approach">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#0056b3]" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-slate-400">© 2023 AI Partner. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-500" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-500" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
