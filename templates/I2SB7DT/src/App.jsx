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



        // Initialize Lucide icons
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
      
<div className="hero-bg"></div>
<header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 opacity-0 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
<nav className="flex justify-between items-center max-w-6xl mx-auto">
<a className="text-xl sm:text-2xl font-bold tracking-tighter text-gray-50" href="#">FlowCommerce</a>
<div className="hidden lg:flex items-center gap-6 text-sm">
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">Platform</a>
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">Enterprise</a>
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">Resources</a>
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">Pricing</a>
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">Developers</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm text-gray-400 hover:text-gray-50 transition-colors" href="#">Sign In</a>
<a className="text-sm bg-gray-50 text-gray-900 font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-gray-200 transition-colors" href="#">
                    Start Building
                </a>
</div>
</nav>
</header>
<main className="flex-1 flex flex-col sm:pt-12 lg:pt-16 sm:pb-20 sm:px-6 lg:px-8 pt-8 pr-4 pb-16 pl-4 items-center">
<div className="max-w-5xl text-center">
<div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm px-3 py-2 rounded-full mb-6 sm:mb-8 opacity-0 animate-slide-in-up" style={{animationDelay: '0.15s'}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Trusted by 2,500+ global brands</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-gray-50 opacity-0 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                Commerce Infrastructure <br className="hidden sm:block"/>for <span className="text-emerald-400">Global Brands</span>
</h1>
<p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed opacity-0 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                Power your international expansion with enterprise-grade commerce APIs, intelligent logistics, and unified payment processing. Built for brands scaling from millions to billions in revenue.
            </p>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-slide-in-up" style={{animationDelay: '0.35s'}}>
<a className="inline-flex items-center justify-center gap-2 bg-gray-50 text-gray-900 font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    Watch Demo
                </a>
<a className="inline-flex items-center justify-center gap-2 text-gray-300 border border-white/10 font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm hover:border-white/20 hover:text-gray-50 transition-colors" href="#">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Book a Call
                </a>
</div>
</div>
<div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-5xl">
<article className="relative col-span-1 overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1 opacity-0 animate-slide-in-up bg-[#111111] border-white/5 border rounded-xl" style={{animationDelay: '0.4s'}}>
<img alt="Global Infrastructure" className="h-24 sm:h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a0b9575-3354-4375-82b0-d9c58b57c504_800w.jpg"/>
<div className="p-3 sm:p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
<svg className="lucide lucide-globe-2 w-3.5 h-3.5 text-emerald-400" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-50">Global Infrastructure</h3>
<p className="text-xs text-gray-500">Cross-border commerce</p>
</div>
</div>
<p className="text-xs leading-relaxed text-gray-400 mb-3">
                        Deploy across 40+ countries with localized pricing, tax calculation, and compliance automation.
                    </p>
<div className="flex items-center gap-2 text-xs text-gray-500">
<span className="flex items-center gap-1">
<svg className="lucide lucide-check-circle w-3 h-3 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            99.99% uptime
                        </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-shield w-3 h-3 text-emerald-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                            SOC 2 compliant
                        </span>
</div>
</div>
</article>
<article className="relative col-span-1 rounded-xl bg-[#111111] border border-white/5 overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1 opacity-0 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
<img alt="Real-time Analytics" className="h-24 sm:h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77e52a3c-6030-4839-a4bd-7d065533e145_800w.jpg"/>
<div className="p-3 sm:p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-3.5 h-3.5 text-blue-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-50">Real-time Analytics</h3>
<p className="text-xs text-gray-500">Data-driven insights</p>
</div>
</div>
<p className="text-xs leading-relaxed text-gray-400 mb-3">
                        Advanced reporting dashboard with conversion tracking and predictive intelligence.
                    </p>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Conversion Rate</span>
<span className="text-emerald-400 font-medium">+24.5%</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Global Revenue</span>
<span className="text-emerald-400 font-medium">+156%</span>
</div>
</div>
</div>
</article>
<article className="relative col-span-1 sm:col-span-2 lg:col-span-1 rounded-xl bg-[#111111] border border-white/5 overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1 opacity-0 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
<img alt="Smart Logistics" className="h-24 sm:h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20749172-758b-42b4-aa9b-8a8488d581bd_800w.jpg"/>
<div className="p-3 sm:p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
<svg className="lucide lucide-truck w-3.5 h-3.5 text-purple-400" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-50">Smart Logistics</h3>
<p className="text-xs text-gray-500">AI-powered fulfillment</p>
</div>
</div>
<p className="text-xs leading-relaxed text-gray-400 mb-3">
                        Machine learning optimizes inventory placement across global fulfillment centers.
                    </p>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="text-center p-2 bg-white/5 rounded-lg">
<div className="text-sm font-semibold text-gray-50">150+</div>
<div className="text-gray-500">Warehouses</div>
</div>
<div className="text-center p-2 bg-white/5 rounded-lg">
<div className="text-sm font-semibold text-gray-50">2.3 days</div>
<div className="text-gray-500">Avg. delivery</div>
</div>
</div>
</div>
</article>
<article className="relative col-span-1 rounded-xl bg-[#111111] border border-white/5 overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1 opacity-0 animate-slide-in-up" style={{animationDelay: '0.7s'}}>
<img alt="Unified Payments" className="h-24 sm:h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e57c1444-1701-4b03-9ec6-e1d93cabcce6_800w.jpg"/>
<div className="p-3 sm:p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
<svg className="lucide lucide-credit-card w-3.5 h-3.5 text-orange-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-50">Unified Payments</h3>
<p className="text-xs text-gray-500">Accept payments globally</p>
</div>
</div>
<p className="text-xs leading-relaxed text-gray-400 mb-3">
                        Support 200+ payment methods with intelligent routing and fraud detection.
                    </p>
<div className="flex items-center gap-1 flex-wrap">
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">Visa</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">PayPal</span>
<span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">+198</span>
</div>
</div>
</article>
<article className="relative col-span-1 sm:col-span-2 rounded-xl bg-[#111111] border border-white/5 overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:-translate-y-1 opacity-0 animate-slide-in-up" style={{animationDelay: '0.8s'}}>
<img alt="Developer APIs" className="h-24 sm:h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2c2ab13-c6c8-44d3-8610-2836c3bffef3_1600w.jpg"/>
<div className="p-3 sm:p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
<svg className="lucide lucide-code-2 w-3.5 h-3.5 text-indigo-400" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-50">Developer-First APIs</h3>
<p className="text-xs text-gray-500">Build with modern tools</p>
</div>
</div>
<p className="text-xs leading-relaxed text-gray-400 mb-3">
                        RESTful APIs, GraphQL support, and comprehensive SDKs for all major languages.
                    </p>
<div className="flex items-center gap-3 text-xs text-gray-400">
<div className="flex items-center gap-1">
<svg className="lucide lucide-book-open w-3 h-3 text-emerald-400" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span>Docs</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-github w-3 h-3 text-emerald-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span>Open SDKs</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-3 h-3 text-emerald-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>15 min setup</span>
</div>
</div>
</div>
</article>
</div><section className="mt-16 sm:mt-20 w-full max-w-5xl opacity-0 animate-slide-in-up" style={{animationDelay: '0.9s'}}>
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-50 mb-4 sm:mb-6">
            Simple, <span className="text-emerald-400">transparent pricing</span>
</h2>
<p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Scale from startup to enterprise with pricing that grows with your business. No hidden fees, no surprises.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

<div className="relative bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300">
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-50 mb-2">Starter</h3>
<p className="text-sm text-gray-400 mb-4">Perfect for growing businesses</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-gray-50">$99</span>
<span className="text-sm text-gray-400">/month</span>
</div>
<p className="text-xs text-gray-500 mt-1">+ 2.9% per transaction</p>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Up to $100K monthly volume
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    5 countries supported
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Basic analytics dashboard
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Email support
                </li>
</ul>
<button className="w-full bg-white/5 border border-white/10 text-gray-50 font-medium py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                Start Free Trial
            </button>
</div>

<div className="relative bg-[#111111] border-2 border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-50 mb-2">Growth</h3>
<p className="text-sm text-gray-400 mb-4">For scaling companies</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-gray-50">$299</span>
<span className="text-sm text-gray-400">/month</span>
</div>
<p className="text-xs text-gray-500 mt-1">+ 2.5% per transaction</p>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Up to $1M monthly volume
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    20+ countries supported
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Advanced analytics &amp; insights
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Priority support &amp; onboarding
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Smart logistics optimization
                </li>
</ul>
<button className="w-full bg-emerald-500 text-white font-medium py-3 rounded-xl hover:bg-emerald-600 transition-colors text-sm">
                Start Free Trial
            </button>
</div>

<div className="relative bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300">
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-50 mb-2">Enterprise</h3>
<p className="text-sm text-gray-400 mb-4">For large-scale operations</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-gray-50">Custom</span>
</div>
<p className="text-xs text-gray-500 mt-1">Volume-based pricing</p>
</div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Unlimited monthly volume
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    40+ countries supported
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Custom integrations &amp; APIs
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    Dedicated success manager
                </li>
<li className="flex items-center gap-2 text-gray-300">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5"></path></svg>
                    24/7 phone support &amp; SLA
                </li>
</ul>
<button className="w-full bg-white/5 border border-white/10 text-gray-50 font-medium py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
                Contact Sales
            </button>
</div>
</div>
<div className="text-center bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
<h3 className="text-lg font-semibold text-gray-50 mb-2">All plans include</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12c.552 0 1-.448 1-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 .552.448 1 1 1"></path><path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"></path></svg>
                99.99% uptime SLA
            </div>
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                SOC 2 compliance
            </div>
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                Fraud protection
            </div>
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline></svg>
                Comprehensive docs
            </div>
</div>
</div>
</section><section className="mt-16 sm:mt-20 w-full max-w-4xl opacity-0 animate-slide-in-up" style={{animationDelay: '1.0s'}}>
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-50 mb-4 sm:mb-6">
            Frequently asked <span className="text-emerald-400">questions</span>
</h2>
<p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about FlowCommerce and how it can transform your global commerce operations.
        </p>
</div>
<div className="space-y-4">
<div className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-gray-50 font-medium">
<span>How quickly can I get started with FlowCommerce?</span>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Most businesses can integrate FlowCommerce APIs within 15 minutes using our comprehensive SDKs. Our onboarding team provides dedicated support to ensure you're live and processing orders as quickly as possible, typically within 24-48 hours.
                </div>
</details>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-gray-50 font-medium">
<span>Which countries and currencies do you support?</span>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    FlowCommerce supports 40+ countries across North America, Europe, Asia-Pacific, and Latin America. We handle 150+ currencies with real-time exchange rates, local tax calculation, and compliance automation for each market.
                </div>
</details>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-gray-50 font-medium">
<span>How does pricing work for high-volume businesses?</span>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Enterprise pricing is based on your transaction volume and specific needs. We offer significant discounts for high-volume merchants and can create custom packages that include dedicated infrastructure, priority support, and specialized integrations.
                </div>
</details>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-gray-50 font-medium">
<span>What payment methods do you support globally?</span>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    We support 200+ payment methods including major credit cards, digital wallets (PayPal, Apple Pay, Google Pay), bank transfers, BNPL solutions, and regional methods like Alipay, WeChat Pay, SEPA, and local banking systems in each market.
                </div>
</details>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-gray-50 font-medium">
<span>How do you handle international shipping and logistics?</span>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Our AI-powered logistics platform optimizes inventory placement across 150+ global fulfillment centers. We automatically route orders to the closest warehouse, calculate shipping costs in real-time, and provide end-to-end tracking with an average delivery time of 2.3 days.
                </div>
</details>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer text-gray-50 font-medium">
<span>Is there a free trial available?</span>
<svg className="text-gray-400 group-open:rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
</summary>
<div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Yes, we offer a 14-day free trial for all plans with full access to our platform features. No credit card required to start, and our team provides hands-on support during your trial period to ensure you get the most out of FlowCommerce.
                </div>
</details>
</div>
</div>
</section>
<div className="mt-16 sm:mt-20 text-center opacity-0 animate-slide-in-up" style={{animationDelay: '1.0s'}}>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-50 mb-4 sm:mb-6">Ready to scale globally?</h2>
<p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">Join brands like TechCorp, GlobalStyle, and InnovateLab who've scaled their international revenue by 400% with FlowCommerce.</p>
<a className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm transition-colors" href="#">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Start Your Global Expansion
            </a>
</div>
</main>
<footer className="py-8 sm:py-12 border-t border-white/5 opacity-0 animate-slide-in-up" style={{animationDelay: '1.1s'}}>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
<div>
<h4 className="font-semibold text-gray-50 mb-3 text-sm">Platform</h4>
<div className="space-y-2 text-xs text-gray-400">
<a className="block hover:text-gray-50 transition-colors" href="#">Commerce APIs</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Global Logistics</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Payment Processing</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Tax &amp; Compliance</a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-50 mb-3 text-sm">Solutions</h4>
<div className="space-y-2 text-xs text-gray-400">
<a className="block hover:text-gray-50 transition-colors" href="#">Enterprise</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Startups</a>
<a className="block hover:text-gray-50 transition-colors" href="#">B2B Commerce</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Marketplaces</a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-50 mb-3 text-sm">Resources</h4>
<div className="space-y-2 text-xs text-gray-400">
<a className="block hover:text-gray-50 transition-colors" href="#">Documentation</a>
<a className="block hover:text-gray-50 transition-colors" href="#">API Reference</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Case Studies</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Support</a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-50 mb-3 text-sm">Company</h4>
<div className="space-y-2 text-xs text-gray-400">
<a className="block hover:text-gray-50 transition-colors" href="#">About</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Careers</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Blog</a>
<a className="block hover:text-gray-50 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/5">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<span className="text-xs text-gray-500">© 2024 FlowCommerce. All rights reserved.</span>
</div>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 hover:text-gray-50 transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
