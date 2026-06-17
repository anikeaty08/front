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
      

<div className="fixed inset-0 z-[-1]">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-zinc-900/30 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid"></div>
</div>

<header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
<nav className="nav-glass w-full max-w-5xl rounded-full pl-6 pr-2 py-2 flex items-center justify-between transition-all duration-300">
<a className="flex items-center gap-2.5 group mr-8" href="#">

<div className="relative w-9 h-9 flex items-center justify-center">
<svg className="transform group-hover:scale-110 transition-transform duration-500 ease-out" fill="none" height="36" viewbox="0 0 32 32" width="36" xmlns="http://www.w3.org/2000/svg">

<path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="url(#logo_grad)" fillOpacity="0.15"></path>
<path d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H22C27.2467 0.5 31.5 4.75329 31.5 10V22C31.5 27.2467 27.2467 31.5 22 31.5H10C4.75329 31.5 0.5 27.2467 0.5 22V10Z" stroke="url(#logo_stroke)" stroke-opacity="0.2"></path>

<path d="M7 11.5L10.7936 21.0544C11.1399 21.9267 12.3835 21.8906 12.6789 20.9996L15.5 12.5L18.3211 20.9996C18.6165 21.8906 19.8601 21.9267 20.2064 21.0544L23 14" stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<circle cx="23" cy="14" fill="#FB923C" r="2"></circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logo_grad" x1="0" x2="32" y1="0" y2="32">
<stop stop-color="#F97316"></stop>
<stop offset="1" stop-color="#EA580C" stop-opacity="0"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="logo_stroke" x1="0" x2="32" y1="0" y2="32">
<stop stop-color="#F97316"></stop>
<stop offset="1" stop-color="#fff" stop-opacity="0.1"></stop>
</lineargradient>
</defs>
</svg>
</div>

<span className="font-display font-bold text-lg tracking-tight text-white flex gap-[1px]">
                    What<span className="text-orange-200 font-extrabold">CPA</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 bg-white/5 rounded-full px-8 py-2 border border-white/5">
<a className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide" href="#about">About Us</a>
<a className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide" href="#commission">Commission</a>
<a className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide" href="#testimonials">Testimonials</a>
<a className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide" href="#faq">FAQ</a>
</div>
<a className="shiny-button rounded-full px-6 py-2.5 text-xs font-semibold text-white tracking-wide shadow-lg shadow-orange-900/20" href="#get-started">
                Get Started
            </a>
</nav>
</header>
<main className="relative z-10 pt-40 pb-20 px-6">

<section className="max-w-7xl mx-auto text-center mb-24">
<div className="animate-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
<span className="text-xs font-medium text-orange-200 tracking-wide uppercase">Most Trusted Forex Affiliate Network</span>
</div>
<h1 className="animate-reveal delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Skyrocket Your <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">Earnings with WhatCPA</span>
</h1>
<p className="animate-reveal delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Supercharge your Forex commissions with the best brokers and smartest tools. Where transparency meets top-tier payouts.
            </p>
<div className="animate-reveal delay-300 flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<a className="shiny-button rounded-full px-8 py-4 text-sm font-medium text-white tracking-wide w-full md:w-auto hover:text-orange-100" href="#get-started">
                    Start Earning Now
                </a>
<div className="flex items-center gap-2 px-6 py-4 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>No hidden fees</span>
</div>
</div>

<div className="animate-reveal delay-500 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center">
<span className="font-display text-3xl font-medium text-white mb-1 tracking-tight">$800</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Max CPA</span>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center">
<span className="font-display text-3xl font-medium text-white mb-1 tracking-tight">10k+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">FTDs Generated</span>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center">
<span className="font-display text-3xl font-medium text-white mb-1 tracking-tight">24h</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Account Setup</span>
</div>
<div className="glass-panel rounded-2xl p-6 flex flex-col items-center">
<div className="flex items-center gap-1 mb-1">
<svg aria-hidden="true" className="iconify text-orange-400 text-2xl iconify--lucide" data-icon="lucide:globe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-wider">Global Traffic</span>
</div>
</div>
</section>

<section className="w-full mb-32 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-full overflow-hidden marquee-mask py-4">
<div className="flex whitespace-nowrap animate-scroll items-center">

<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Licensed
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Multiple Broker
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Top Brands
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Global Traffic
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Fast Payout
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Expert Guidance
                    </span>

<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Licensed
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Multiple Broker
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Top Brands
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Global Traffic
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Fast Payout
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Expert Guidance
                    </span>

<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Licensed
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Multiple Broker
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Top Brands
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Global Traffic
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Fast Payout
                    </span>
<span className="mx-8 font-display text-sm font-semibold tracking-widest text-zinc-400 uppercase flex items-center gap-2">
<span className="text-orange-500">•</span> Expert Guidance
                    </span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32" id="about">
<div className="mb-12">
<h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Transforming the Forex <br/> Affiliate Landscape.
                </h2>
<p className="text-zinc-400 max-w-2xl text-lg font-light">
                    We're building a powerful, community-first network grounded in trust. Affiliates are more than just partners — they're part of a movement.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-[2rem] p-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
<svg aria-hidden="true" className="iconify text-8xl text-orange-500 iconify--lucide" data-icon="lucide:layout-dashboard" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:layers" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-3">One Platform, Many Brokers</h3>
<p className="text-zinc-400 leading-relaxed max-w-md">
                                With our advanced CellXpert optimization, manage multiple broker partnerships effortlessly. Direct leads to the most suitable brokers, overcoming regional restrictions.
                            </p>
</div>
<div className="mt-8 flex gap-3 flex-wrap">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Smart Referrals</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">High Conversions</span>
</div>
</div>
</div>

<div className="md:row-span-2 glass-panel rounded-[2rem] p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify text-2xl iconify--lucide" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-3">Expert Guidance</h3>
<p className="text-zinc-400 leading-relaxed mb-8">
                            Backed by a powerhouse team. Our coaches have generated over 10,000 FTDs through their own brands.
                        </p>
<ul className="space-y-4 mt-auto">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Strategic guidance
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Content creation support
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Scaling marketing support
                            </li>
</ul>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-8 flex flex-col justify-center group hover:bg-white/[0.02] transition-colors">
<svg aria-hidden="true" className="iconify text-orange-400 text-3xl mb-4 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h3 className="font-display text-xl font-medium text-white mb-2">Fully Compliant</h3>
<p className="text-sm text-zinc-400">
                        Operate legally with our license at no additional cost. Trusted foundation.
                    </p>
</div>

<div className="glass-panel rounded-[2rem] p-8 flex flex-col justify-center group hover:bg-white/[0.02] transition-colors">
<svg aria-hidden="true" className="iconify text-orange-400 text-3xl mb-4 iconify--lucide" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-display text-xl font-medium text-white mb-2">Instant Insights</h3>
<p className="text-sm text-zinc-400">
                        Track ROI in real-time. Full transparency through our intuitive dashboard.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mb-32">
<div className="text-center mb-16">
<span className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-2 block">Process</span>
<h2 className="font-display text-4xl font-medium text-white tracking-tight">Get Started in 3 Easy Steps</h2>
</div>
<div className="space-y-12 relative">

<div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-orange-500/50 via-zinc-800 to-transparent md:left-1/2 md:-ml-[0.5px]"></div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2">Onboarding Chat</h3>
<p className="text-sm text-zinc-400">Personalized call to uncover strategies and craft a competitive CPA deal fitting your traffic.</p>
</div>
<div className="relative z-10 w-14 h-14 rounded-full bg-black border border-orange-500/50 flex items-center justify-center shrink-0 order-1 md:order-2 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<span className="font-display text-orange-400 font-bold">1</span>
</div>
<div className="flex-1 order-3 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1 hidden md:block order-1"></div>
<div className="relative z-10 w-14 h-14 rounded-full bg-black border border-zinc-700 flex items-center justify-center shrink-0 order-1 md:order-2">
<span className="font-display text-white font-bold">2</span>
</div>
<div className="flex-1 order-2 md:order-3">
<h3 className="text-xl font-medium text-white mb-2">Account Setup</h3>
<p className="text-sm text-zinc-400">Sign the contract and get set up within 24 hours. Start earning without delay.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1 md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2">Start Earning</h3>
<p className="text-sm text-zinc-400">Receive your unique link and start sending traffic, supported by your dedicated manager.</p>
</div>
<div className="relative z-10 w-14 h-14 rounded-full bg-black border border-zinc-700 flex items-center justify-center shrink-0 order-1 md:order-2">
<span className="font-display text-white font-bold">3</span>
</div>
<div className="flex-1 order-3 hidden md:block"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32 glass-panel rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative" id="commission">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-4 block">Payouts</span>
<h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        Commission &amp; <br/> Payment System
                    </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Whether you're a seasoned pro or just launching, access competitive rates and performance-driven offers.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-orange-400">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:badge-dollar-sign" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"></path></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Personalized Commission</h4>
<p className="text-sm text-zinc-400">Offers up to <span className="text-white font-semibold">$800 CPA</span> tailored to your traffic profile.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-orange-400">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:calendar-clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Reliable Payouts</h4>
<p className="text-sm text-zinc-400">Consistent income stream with a transparent schedule.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-orange-400">
<svg aria-hidden="true" className="iconify text-xl iconify--lucide" data-icon="lucide:wallet" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Flexible Options</h4>
<p className="text-sm text-zinc-400">Bank transfers and popular cryptocurrencies.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="glass-panel rounded-2xl p-6 border border-orange-500/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-700"></div>
<div className="h-2 w-24 bg-zinc-700 rounded"></div>
</div>
<span className="text-xs text-orange-400 font-mono">+$4,250.00</span>
</div>
<div className="space-y-3">
<div className="h-12 w-full bg-zinc-800/50 rounded-lg flex items-center px-4 justify-between">
<div className="h-2 w-20 bg-zinc-700 rounded"></div>
<div className="h-2 w-12 bg-zinc-600 rounded"></div>
</div>
<div className="h-12 w-full bg-zinc-800/50 rounded-lg flex items-center px-4 justify-between">
<div className="h-2 w-24 bg-zinc-700 rounded"></div>
<div className="h-2 w-12 bg-zinc-600 rounded"></div>
</div>
<div className="h-12 w-full bg-zinc-800/50 rounded-lg flex items-center px-4 justify-between">
<div className="h-2 w-16 bg-zinc-700 rounded"></div>
<div className="h-2 w-12 bg-zinc-600 rounded"></div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-500">Total Balance</span>
<span className="text-xl font-display font-medium text-white">$12,450.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32" id="testimonials">
<h2 className="font-display text-4xl font-medium text-center text-white mb-16 tracking-tight">Client Results That Prove Our Promise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-6 text-orange-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">"WhatCPA transformed my affiliate business. The transparency and support from their team is unmatched. I've tripled my earnings in just 6 months!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-white">JM</div>
<div>
<p className="text-sm font-medium text-white">John Martinez</p>
<p className="text-xs text-zinc-500">Affiliate Marketer, Spain</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 bg-white/[0.02]">
<div className="flex gap-1 mb-6 text-orange-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">"The CellXpert platform integration is a game-changer. Managing multiple brokers has never been this easy. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-white">SC</div>
<div>
<p className="text-sm font-medium text-white">Sarah Chen</p>
<p className="text-xs text-zinc-500">Digital Entrepreneur, Singapore</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-6 text-orange-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">"Fast payouts, dedicated support, and the best CPA rates in the industry. This is the affiliate network I wish I found years ago!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-white">MR</div>
<div>
<p className="text-sm font-medium text-white">Michael Roberts</p>
<p className="text-xs text-zinc-500">Performance Marketer, UK</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-32" id="faq">
<h2 className="font-display text-3xl font-medium text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        How to join WhatCPA Affiliation?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        Joining is simple! Click the "Get Started" button, fill out the registration form, and schedule your personalized onboarding call. Our team will guide you through the process and have your account ready within 24 hours.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        What Kind of Support Does WhatCPA Affiliation Provide?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        You get a dedicated account manager and expert coach who have generated over 10,000 FTDs. We provide strategic guidance, content creation support, marketing assistance, and 24/7 technical support to ensure your success.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        How Are Commissions Calculated and Paid?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        Commissions are personalized based on your traffic profile and can reach up to $800 CPA. Payments are made on a transparent schedule via bank transfer or cryptocurrency, with real-time tracking through your dashboard.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        Can I Promote Multiple Brokers Through WhatCPA Affiliation?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        Absolutely! Our CellXpert platform allows you to manage multiple broker partnerships from one unified dashboard, directing leads to the most suitable brokers based on geo-location and other factors.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        Is There a Minimum Requirement for Joining WhatCPA Affiliation?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        Whether you're a seasoned affiliate pro or just starting your marketing journey, we welcome you. We tailor our offers to match your unique traffic profile and help you grow from wherever you are.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        Can I Track My Performance as an Affiliate?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        Yes! Our intuitive dashboard provides real-time insights into all key metrics, including your personal ROI, conversions, earnings, and payment milestones. Full transparency at your fingertips.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        Are There Any Restrictions on Marketing Methods?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        We encourage ethical marketing practices that comply with industry regulations. Your account manager will guide you on approved marketing methods during onboarding to ensure compliance.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        How Do I Contact the WhatCPA Affiliation Support Team?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        You can reach us via email at gethelp@whatcpa.com, through your dedicated account manager, or via our contact form. We're available 24/7 to assist you.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        What is the benefit of working under the WhatCPA Affiliation license?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        You gain access to our fully licensed platform at no additional cost, ensuring complete compliance with all industry regulations. This allows you to operate confidently and legally from day one.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        How does WhatCPA Affiliation help affiliates stay compliant?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        Our platform is fully licensed and compliant with all industry regulations. We provide guidance, approved marketing materials, and ongoing support to ensure you maintain compliance throughout your partnership.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        Can WhatCPA Affiliation help if I face legal trouble?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        While we provide a compliant framework and guidance, we recommend consulting with legal professionals for specific legal matters. Our licensing and compliance support significantly reduces legal risks.
                    </div>
</details>
<details className="glass-panel rounded-xl group p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200">
                        Is it difficult to qualify for the WhatCPA Affiliation license?
                        <svg aria-hidden="true" className="iconify text-zinc-500 group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed pl-1">
                        No! By partnering with us, you automatically benefit from our license at no additional cost. There's no separate qualification process—just complete your onboarding and you're covered.
                    </div>
</details>
</div>
</section>

<section className="max-w-6xl mx-auto glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden" id="get-started">

<div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                        Let's Start Your <br/>
<span className="text-orange-400">Success Story</span>
</h2>
<p className="text-zinc-400 text-lg mb-10">
                        Ready to supercharge your Forex commissions? Our team is here to help you get started today.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium">Location</h4>
<p className="text-sm text-zinc-500">Dubai Silicon Oasis, DDP, Building A1, Dubai, UAE</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="text-white font-medium">Email</h4>
<p className="text-sm text-zinc-500">gethelp@whatcpa.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium">Support Hours</h4>
<p className="text-sm text-zinc-500">24/7 Available</p>
</div>
</div>
</div>
</div>
<form className="space-y-8 bg-zinc-900/40 p-8 rounded-3xl border border-white/5">
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-medium">Full Name</label>
<input className="w-full custom-input py-2 text-white placeholder-zinc-700" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-medium">Email Address</label>
<input className="w-full custom-input py-2 text-white placeholder-zinc-700" placeholder="your@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-medium">Subject</label>
<input className="w-full custom-input py-2 text-white placeholder-zinc-700" placeholder="Select a topic" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-medium">Message</label>
<textarea className="w-full custom-input py-2 text-white placeholder-zinc-700 resize-none" placeholder="Tell us how we can help..." rows="3"></textarea>
</div>
</div>
<button className="shiny-button w-full py-4 rounded-xl text-sm font-medium text-white flex justify-center items-center gap-2 group" type="button">
                        Send Message
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-20 pb-10 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-3 mb-6">

<div className="relative w-7 h-7 flex items-center justify-center">
<svg fill="none" height="28" viewbox="0 0 32 32" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="url(#logo_grad_footer)" fillOpacity="0.15"></path>
<path d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H22C27.2467 0.5 31.5 4.75329 31.5 10V22C31.5 27.2467 27.2467 31.5 22 31.5H10C4.75329 31.5 0.5 27.2467 0.5 22V10Z" stroke="url(#logo_stroke_footer)" stroke-opacity="0.2"></path>
<path d="M7 11.5L10.7936 21.0544C11.1399 21.9267 12.3835 21.8906 12.6789 20.9996L15.5 12.5L18.3211 20.9996C18.6165 21.8906 19.8601 21.9267 20.2064 21.0544L23 14" stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<circle cx="23" cy="14" fill="#FB923C" r="2"></circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logo_grad_footer" x1="0" x2="32" y1="0" y2="32">
<stop stop-color="#F97316"></stop>
<stop offset="1" stop-color="#EA580C" stop-opacity="0"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="logo_stroke_footer" x1="0" x2="32" y1="0" y2="32">
<stop stop-color="#F97316"></stop>
<stop offset="1" stop-color="#fff" stop-opacity="0.1"></stop>
</lineargradient>
</defs>
</svg>
</div>
<span className="font-display font-bold text-xl text-white flex gap-[1px]">What<span className="text-orange-200">CPA</span></span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Most trusted Forex Affiliate network today. Earn with confidence, security, and real results.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-400 transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Cookies Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Connect With Us</h4>
<p className="text-sm text-zinc-500 mb-4">Dubai Silicon Oasis, DDP, Building A1, Dubai, UAE</p>
<a className="text-sm text-orange-400 hover:text-orange-300" href="mailto:gethelp@whatcpa.com">gethelp@whatcpa.com</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 WhatCPA Affiliates. All rights reserved.</p>
<div className="text-xs text-zinc-600">Built for affiliate success.</div>
</div>
</div>
</footer>

    </>
  );
}
