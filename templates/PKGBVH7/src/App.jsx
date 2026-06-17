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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui'],
}
}
}



    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<header className="relative z-20 opacity-0 animate-pulse" style={{animation: 'fadeInDown 0.8s ease-out 0.1s forwards'}}>
<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight font-sans">Nexus AI</span>
</div>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li><a className="hover:text-violet-300 transition-colors font-sans" href="#">Platform</a></li>
<li><a className="hover:text-violet-300 transition-colors font-sans" href="#">Solutions</a></li>
<li><a className="hover:text-violet-300 transition-colors font-sans" href="#">Developers</a></li>
<li><a className="text-violet-400 font-sans" href="#">Pricing</a></li>
<li><a className="hover:text-violet-300 transition-colors font-sans" href="#">Enterprise</a></li>
</ul>
<div className="flex items-center gap-4">
<button className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="text-sm font-medium hover:text-violet-300 transition-colors hidden md:inline font-sans" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all font-sans" href="#">
          
          Schedule demo
        </a>
</div>
</nav>
</header>

<section className="relative isolate overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cce953ba-bb14-489b-b395-4f22267673e1_3840w.jpg)] bg-cover mt-0 mb-16 pt-16 pb-48">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-purple-900/20 to-transparent"></div>
<div %3e%3c="" %3e%3ccircle="" %3e%3cg="" 60"="" className="absolute inset-0 -z-10 width=" cx="30" cy="30" fill="none" fillOpacity="0.05" fill-rule="evenodd" g%3e%3c="" height="60" opacity-40"="" r="1" svg%3e')]="" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>
<div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
<div className="opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 0.3s forwards'}}>
<h1 className="text-5xl tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent font-instrument-serif font-normal">
          Scale your AI workforce
        </h1>
<p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Transparent pricing designed to grow with your business. Deploy intelligent agents that work 24/7 to accelerate your revenue operations.
        </p>
</div>
<div className="mt-10 flex flex-wrap justify-center gap-3 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 0.5s forwards'}}>
<div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 font-sans">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Enterprise security
        </div>
<div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 font-sans">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
          ROI guarantee
        </div>
<div className="flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 font-sans">
<svg className="lucide lucide-infinity h-4 w-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
          No usage limits
        </div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-32 lg:px-8">
<div className="grid gap-8 lg:grid-cols-3 lg:gap-6">

<div className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl hover:border-teal-500/30 transition-all duration-500 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 0.7s forwards'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-teal-500/10 p-3">
<svg className="lucide lucide-play h-6 w-6 text-teal-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-teal-400 font-sans">Starter</h3>
<p className="text-sm text-gray-400 font-sans">Perfect for small teams</p>
</div>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-instrument-serif font-normal">$299</span>
<span className="text-gray-400 text-sm font-sans">/month</span>
</div>
<p className="text-sm text-gray-400 mt-1 font-sans">Billed annually or $349/month</p>
</div>
<button className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-teal-500/25 hover:scale-105 transition-all duration-200 mb-8 font-sans">
          Start free trial
        </button>
<div className="space-y-5 text-sm">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-sans" classname="text-white">Up to 3 AI agents</span>
<p className="font-sans" classname="text-gray-400 text-xs mt-1">Revenue, Support &amp; Marketing</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-sans" classname="text-white">50,000 credits included</span>
<p className="font-sans" classname="text-gray-400 text-xs mt-1">~2,500 interactions per month</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Standard integrations (Salesforce, HubSpot, Slack)</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Email &amp; chat support</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Basic analytics dashboard</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl border-2 border-violet-500/40 bg-gradient-to-b from-violet-500/5 to-purple-500/5 p-8 backdrop-blur-xl shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20 transition-all duration-500 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 0.9s forwards'}}>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-1 text-xs font-semibold text-white font-sans">Most Popular</span>
</div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-violet-500/10 p-3">
<svg className="lucide lucide-rocket h-6 w-6 text-violet-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-violet-400 font-sans">Growth</h3>
<p className="text-sm text-gray-400 font-sans">For scaling businesses</p>
</div>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-instrument-serif font-normal">$799</span>
<span className="text-gray-400 text-sm font-sans">/month</span>
</div>
<p className="text-sm text-gray-400 mt-1 font-sans">Billed annually or $899/month</p>
</div>
<button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-200 mb-8 font-sans">
          Start free trial
        </button>
<div className="space-y-5 text-sm">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-sans" classname="text-white">Up to 10 AI agents</span>
<p className="font-sans" classname="text-gray-400 text-xs mt-1">Full suite + custom workflows</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-sans" classname="text-white">200,000 credits included</span>
<p className="font-sans" classname="text-gray-400 text-xs mt-1">~10,000 interactions per month</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Premium integrations + API access</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Priority support &amp; dedicated success manager</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Advanced analytics &amp; reporting</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">SSO &amp; team management</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 1.1s forwards'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-emerald-500/10 p-3">
<svg className="lucide lucide-building-2 h-6 w-6 text-emerald-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-emerald-400 font-sans">Enterprise</h3>
<p className="text-sm text-gray-400 font-sans">For large organizations</p>
</div>
</div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-instrument-serif font-normal">Custom</span>
</div>
<p className="text-sm text-gray-400 mt-1 font-sans">Tailored to your needs</p>
</div>
<button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-200 mb-8 font-sans">
          Contact sales
        </button>
<div className="space-y-5 text-sm">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-sans" classname="text-white">Unlimited AI agents</span>
<p className="font-sans" classname="text-gray-400 text-xs mt-1">Custom-built for your use cases</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-sans" classname="text-white">Custom credit allocation</span>
<p className="font-sans" classname="text-gray-400 text-xs mt-1">Volume discounts available</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Custom integrations &amp; white-label options</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">24/7 dedicated support &amp; SLA</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Advanced security &amp; compliance</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">On-premise deployment options</span>
</div>
</div>
</div>
</div><section className="mx-auto max-w-7xl px-4 pb-32 lg:px-8 mt-24 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 1.4s forwards'}}>
<h2 className="text-3xl tracking-tight font-instrument-serif font-normal mb-10 text-white text-center">Compare Plans</h2>
<div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
<table className="w-full table-fixed border-collapse text-sm font-sans text-gray-300">
<thead>
<tr className="border-b border-white/20">
<th className="w-1/3 px-6 py-4 text-left font-semibold text-white">Features</th>
<th className="w-1/6 px-6 py-4 text-center font-semibold text-teal-400">Starter</th>
<th className="w-1/6 px-6 py-4 text-center font-semibold text-violet-400">Growth</th>
<th className="w-1/6 px-6 py-4 text-center font-semibold text-emerald-400">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr>
<td className="px-6 py-4">AI Agents Included</td>
<td className="px-6 py-4 text-center">Up to 3</td>
<td className="px-6 py-4 text-center">Up to 10</td>
<td className="px-6 py-4 text-center">Unlimited</td>
</tr>
<tr>
<td className="px-6 py-4">Monthly Credits</td>
<td className="px-6 py-4 text-center">50,000</td>
<td className="px-6 py-4 text-center">200,000</td>
<td className="px-6 py-4 text-center">Custom</td>
</tr>
<tr>
<td className="px-6 py-4">Integrations</td>
<td className="px-6 py-4 text-center">Standard (Salesforce, HubSpot, Slack)</td>
<td className="px-6 py-4 text-center">Premium + API Access</td>
<td className="px-6 py-4 text-center">Custom &amp; White-label</td>
</tr>
<tr>
<td className="px-6 py-4">Support</td>
<td className="px-6 py-4 text-center">Email &amp; chat support</td>
<td className="px-6 py-4 text-center">Priority &amp; Success Manager</td>
<td className="px-6 py-4 text-center">24/7 Dedicated &amp; SLA</td>
</tr>
<tr>
<td className="px-6 py-4">Analytics</td>
<td className="px-6 py-4 text-center">Basic dashboard</td>
<td className="px-6 py-4 text-center">Advanced reporting</td>
<td className="px-6 py-4 text-center">Custom analytics &amp; reporting</td>
</tr>
<tr>
<td className="px-6 py-4">Security</td>
<td className="px-6 py-4 text-center">Standard</td>
<td className="px-6 py-4 text-center">Enhanced</td>
<td className="px-6 py-4 text-center">Advanced compliance &amp; on-prem options</td>
</tr>
<tr>
<td className="px-6 py-4">Team Management</td>
<td className="px-6 py-4 text-center">Basic</td>
<td className="px-6 py-4 text-center">SSO &amp; team mgmt</td>
<td className="px-6 py-4 text-center">Enterprise-grade controls</td>
</tr>
<tr className="">
<td className="px-6 py-4">Pricing</td>
<td className="px-6 py-4 text-center font-instrument-serif text-white">$299/mo</td>
<td className="px-6 py-4 text-center font-instrument-serif text-white">$799/mo</td>
<td className="px-6 py-4 text-center font-instrument-serif text-white">Custom</td>
</tr>
<tr className="">
<td className="px-6 py-4"></td>
<td className="px-6 py-4 text-center">
<button className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-teal-500/25 hover:scale-105 transition-all duration-200 font-sans">
              Start free trial
            </button>
</td>
<td className="px-6 py-4 text-center">
<button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-200 font-sans">
              Start free trial
            </button>
</td>
<td className="px-6 py-4 text-center">
<button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-200 font-sans">
              Contact sales
            </button>
</td>
</tr>
</tbody>
</table>
</div>
</section><section className="mx-auto max-w-7xl px-4 pb-32 lg:px-8 mt-24 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 1.6s forwards'}}>
<h2 className="text-3xl tracking-tight font-instrument-serif font-normal mb-12 text-white text-center">Product Roadmap</h2>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto font-sans text-gray-300">
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center mb-3 w-14 h-14 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-600 text-white font-semibold tracking-tight font-sans shadow-lg">
        Q3 '24
      </div>
<h3 className="mb-2 text-lg font-semibold text-white font-sans tracking-tight">AI Agent Expansion</h3>
<ul className="space-y-2 text-sm">
<li className="">Increase AI agents limit for Growth plan</li>
<li className="">New industry-specific agents</li>
<li className="">Improved natural language understanding</li>
</ul>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center mb-3 w-14 h-14 rounded-full bg-gradient-to-tr from-violet-500 to-purple-600 text-white font-semibold tracking-tight font-sans shadow-lg">
        Q4 '24
      </div>
<h3 className="mb-2 text-lg font-semibold text-white font-sans tracking-tight">Integrations &amp; APIs</h3>
<ul className="space-y-2 text-sm">
<li>Launch API marketplace</li>
<li className="">More third-party CRM &amp; ERP integrations</li>
<li className="">Webhook automation improvements</li>
</ul>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center mb-3 w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-semibold tracking-tight font-sans shadow-lg">
        Q1 '25
      </div>
<h3 className="mb-2 text-lg font-semibold text-white font-sans tracking-tight">Enterprise Features</h3>
<ul className="space-y-2 text-sm">
<li>Advanced security &amp; compliance options</li>
<li>On-premise deployment support</li>
<li>Enterprise-grade analytics dashboard</li>
</ul>
</div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center justify-center mb-3 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-semibold tracking-tight font-sans shadow-lg">
        Q2 '25
      </div>
<h3 className="mb-2 text-lg font-semibold text-white font-sans tracking-tight">User Experience &amp; Support</h3>
<ul className="space-y-2 text-sm">
<li>Comprehensive onboarding platform</li>
<li>AI-driven support chat</li>
<li>Custom training modules</li>
</ul>
</div>
<div aria-hidden="true" className="absolute top-10 left-0 right-0 border-t border-white/10 hidden md:block"></div>
</div>
</section>

<div className="mt-32 opacity-0" style={{animation: 'fadeInUp 0.8s ease-out 1.3s forwards'}}>
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight mb-4 font-instrument-serif font-normal">Frequently asked questions</h2>
<p className="text-gray-400 max-w-2xl mx-auto font-sans">Get answers to common questions about our AI agent platform and pricing.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
<div className="space-y-3">
<h3 className="text-lg font-semibold flex items-center gap-2 font-sans">
<svg className="lucide lucide-help-circle h-5 w-5 text-violet-400" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
            What are credits and how do they work?
          </h3>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Credits are consumed when your AI agents perform actions like sending emails, making API calls, or processing data. Each interaction typically uses 10-50 credits depending on complexity.</p>
</div>
<div className="space-y-3">
<h3 className="text-lg font-semibold flex items-center gap-2 font-sans">
<svg className="lucide lucide-shield h-5 w-5 text-violet-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Is my data secure?
          </h3>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Yes, we use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and data residency controls. Your data never leaves your designated region.</p>
</div>
<div className="space-y-3">
<h3 className="text-lg font-semibold flex items-center gap-2 font-sans">
<svg className="lucide lucide-refresh-cw h-5 w-5 text-violet-400" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
            Can I change plans anytime?
          </h3>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
</div>
<div className="space-y-3">
<h3 className="text-lg font-semibold flex items-center gap-2 font-sans">
<svg className="lucide lucide-users h-5 w-5 text-violet-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Do you offer training and onboarding?
          </h3>
<p className="text-gray-400 text-sm leading-relaxed font-sans">Yes, all plans include comprehensive onboarding. Growth and Enterprise customers get dedicated success managers and custom training sessions.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-white/[0.01] backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight font-sans">Nexus AI</span>
</div>
<div className="flex items-center gap-8 text-sm text-gray-400">
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors font-sans" href="#">Documentation</a>
<a className="hover:text-white transition-colors font-sans" href="#">Support</a>
</div>
<p className="text-sm text-gray-400 font-sans">
          © <span className="font-sans" id="year">2025</span> Nexus AI, Inc. All rights reserved.
        </p>
</div>
</div>
</footer>

<style>
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>

    </>
  );
}
