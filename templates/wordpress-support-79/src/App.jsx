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
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
950: '#020617',
},
orange: {
500: '#f97316',
600: '#ea580c',
50: '#fff7ed',
}
}
}
}
}

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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2.5" href="#">
<div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
</div>
                WP FIX IT
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900" href="#login">Log in</a>
<a className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-sm" href="#pricing">
                    Get Support
                </a>
</div>
</div>
</nav>

<section className="pt-36 pb-20 md:pt-48 md:pb-28 max-w-7xl mx-auto px-6 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
            Operational Reliability
        </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto">
            Reliable WordPress Support<br className="hidden md:block"/> Without the Guesswork
        </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            We manage, secure, and maintain your WordPress infrastructure so your business runs without interruptions. Clear pricing. Proactive support. No hidden surprises.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full md:w-auto bg-orange-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-orange-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#pricing">
                View Plans
            </a>
<a className="w-full md:w-auto bg-white border border-slate-200 text-slate-700 font-medium px-8 py-3.5 rounded-lg hover:bg-slate-50 transition-all hover:-translate-y-0.5" href="#pricing">
                One-Time Fix
            </a>
</div>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-slate-500 border-t border-slate-100/50 pt-10 max-w-3xl mx-auto">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>24–48h response time</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:wallet-linear" width="18"></iconify-icon>
<span>No hidden fees</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear" width="18"></iconify-icon>
<span>Cancel anytime</span>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/30 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-12">
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">500+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Sites Supported</div>
</div>
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">10+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years Experience</div>
</div>
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">99.9%</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Client Satisfaction</div>
</div>
<div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">24–48h</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Response Time</div>
</div>
</div>
<div className="text-center pt-8 border-t border-slate-200/60">
<p className="text-sm text-slate-500 font-medium">
                    Supporting WordPress sites built with <span className="text-slate-700">Elementor</span>, <span className="text-slate-700">WooCommerce</span>, <span className="text-slate-700">ACF</span>, <span className="text-slate-700">Crocoblock</span>, and custom setups.
                </p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">What Changes When You Work With Us</h2>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">From reactive fixes to structured WordPress management.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

<div className="bg-slate-50 rounded-2xl p-10 border border-slate-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">The Current Struggle</h3>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<span>Plugin conflicts causing downtime</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:lock-unlocked-linear" width="20"></iconify-icon>
<span>Security vulnerabilities &amp; risk exposure</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:hourglass-linear" width="20"></iconify-icon>
<span>Slow load times affecting conversions</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:cloud-broken-linear" width="20"></iconify-icon>
<span>No reliable backups available</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<iconify-icon className="text-red-400 mt-0.5 flex-shrink-0" icon="solar:question-circle-linear" width="20"></iconify-icon>
<span>Unclear technical decisions</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-10 border border-orange-200 shadow-xl shadow-orange-500/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full -mr-20 -mt-20 z-0"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:check-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">The WP Fix It Standard</h3>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3 text-slate-900 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span>Proactive updates applied on schedule</span>
</li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span>Continuous security monitoring</span>
</li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:rocket-linear" width="20"></iconify-icon>
<span>Optimized performance &amp; Core Web Vitals</span>
</li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:server-linear" width="20"></iconify-icon>
<span>Daily backups with one-click restore</span>
</li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span>Clear, jargon-free communication</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Core Services</h2>
<p className="text-slate-500 max-w-xl text-lg">Everything needed to keep your digital infrastructure running smoothly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors mb-6">
<iconify-icon icon="solar:bug-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Troubleshooting &amp; Fixes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert diagnosis and repair of errors, white screens, and broken functionality.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors mb-6">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Maintenance &amp; Updates</h3>
<p className="text-sm text-slate-500 leading-relaxed">Weekly updates of core, themes, and plugins to ensure compatibility and stability.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors mb-6">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Speed Optimization</h3>
<p className="text-sm text-slate-500 leading-relaxed">Performance tuning to improve load times, user experience, and Google rankings.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors mb-6">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Security &amp; Malware Removal</h3>
<p className="text-sm text-slate-500 leading-relaxed">Hardening sites against attacks and cleaning infected files immediately.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors mb-6">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Migrations &amp; Hosting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Managed WordPress hosting provided as part of our support plans. Fully monitored, maintained, and supported by the same team — no third-party blame.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all group duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors mb-6">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">WooCommerce Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialized care for checkout flows, payment gateways, and product databases.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">How It Works</h2>
<p className="text-slate-500 text-lg">Simple, streamlined, and effective.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center relative group">
<div className="w-16 h-16 mx-auto bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Describe the Issue</h3>
<p className="text-sm text-slate-500 px-4 leading-relaxed">Submit a ticket or sign up for a plan. Give us access and tell us what needs attention.</p>

<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-slate-200 -z-10"></div>
</div>
<div className="text-center relative group">
<div className="w-16 h-16 mx-auto bg-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-orange-600/20 group-hover:scale-105 transition-transform">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">We Assess &amp; Act Fast</h3>
<p className="text-sm text-slate-500 px-4 leading-relaxed">Our team analyzes the problem, creates a backup, and begins work immediately.</p>

<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-slate-200 -z-10"></div>
</div>
<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 text-slate-900 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 group-hover:border-orange-200 transition-colors">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">We Fix, Monitor, &amp; Support</h3>
<p className="text-sm text-slate-500 px-4 leading-relaxed">Issue resolved. We provide a detailed report and continue monitoring your site.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-slate-500 text-lg">Choose a one-time fix or ongoing peace of mind.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Quick Fix</h3>
<p className="text-sm text-slate-500 mt-1">One-time repair</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">$79</span>
<span className="text-slate-400 text-sm">/incident</span>
</div>
<p className="text-xs text-slate-500 mb-6 italic border-b border-slate-100 pb-4">
                        For urgent WordPress issues and troubleshooting.
                    </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> One-time repair
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Full site backup
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Detailed report
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 30-day warranty
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors" href="#">Book Fix</a>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mt-1">Structured WordPress Maintenance</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">$89</span>
<span className="text-slate-400 text-sm">/month</span>
</div>
<p className="text-xs text-slate-500 mb-6 italic border-b border-slate-100 pb-4">
                        For small business sites needing structured maintenance.
                    </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Weekly updates
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Daily backups
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Uptime monitoring
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Security scans
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors" href="#">Subscribe</a>
</div>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col h-full relative overflow-hidden transform md:-translate-y-2">
<div className="absolute top-0 right-0 p-2">
<span className="bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Recommended</span>
</div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Professional</h3>
<p className="text-sm text-slate-400 mt-1">Growth &amp; Commerce</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold text-white">$149</span>
<span className="text-slate-400 text-sm">/month</span>
</div>
<p className="text-xs text-slate-400 mb-6 italic border-b border-slate-800 pb-4">
                        For growing businesses and WooCommerce sites requiring proactive support.
                    </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Everything in Starter
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> <b>Unlimited</b> small fixes
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Proactive performance reviews
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Priority support queue
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Monthly performance summary
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Malware removal
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-500 transition-colors" href="#">Get Professional</a>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Agency</h3>
<p className="text-sm text-slate-500 mt-1">White-label Partner</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">$299</span>
<span className="text-slate-400 text-sm">/mo (starts at)</span>
</div>
<p className="text-xs text-slate-500 mb-6 italic border-b border-slate-100 pb-4">
                        For agencies needing structured white-label WordPress support.
                    </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 5+ Sites included
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> White-label reports
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated account mgr
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Bulk discount
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors" href="#">Contact Us</a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm font-medium text-slate-600 bg-white inline-block px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
<iconify-icon className="inline align-middle mr-2 text-orange-500 text-lg" icon="solar:server-square-linear"></iconify-icon>
                    Managed WordPress hosting available as an add-on or included with select plans.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<div className="inline-block text-orange-500 font-medium text-sm tracking-wide uppercase mb-4">For Agencies</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">Scale Your Agency <br/>Without Scaling Overhead</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    We act as your silent technical partner. You manage the client relationship — we handle updates, security, performance, and support under your brand.
                </p>
<a className="inline-flex items-center text-white font-medium border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors" href="#">
                    Apply for Agency Partner Program 
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="md:w-1/2 w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
<iconify-icon className="text-orange-500 mb-4" icon="solar:user-id-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">Work under your brand</h4>
<p className="text-sm text-slate-400">We remain completely invisible to your clients.</p>
</div>
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
<iconify-icon className="text-orange-500 mb-4" icon="solar:document-text-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">Branded Reports</h4>
<p className="text-sm text-slate-400">PDFs sent with your logo and colors.</p>
</div>
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
<iconify-icon className="text-orange-500 mb-4" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">Dedicated Manager</h4>
<p className="text-sm text-slate-400">Direct line to a senior tech lead.</p>
</div>
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
<iconify-icon className="text-orange-500 mb-4" icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">NDA Available</h4>
<p className="text-sm text-slate-400">Legal protection for your client list.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6" id="faq">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Common Questions</h2>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                    What is your typical response time?
                    <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    We guarantee a response within 24–48 hours for standard tickets. Emergency requests and Professional plan members receive priority handling, often within a few hours.
                </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                    What access do you need to fix my site?
                    <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    We typically need an administrator login to your WordPress dashboard. For deeper technical issues, we may require FTP/SFTP access or hosting panel credentials. All credentials are stored securely and encrypted.
                </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                    Do you support WooCommerce?
                    <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    Yes, we have extensive experience with WooCommerce. We handle checkout issues, payment gateway integration, product update errors, and database optimization specifically for e-commerce stores.
                </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                    Can I cancel my subscription?
                    <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    Absolutely. Our plans are month-to-month with no long-term contracts. You can cancel anytime from your account dashboard.
                </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                    Do you handle custom setups or non-standard themes?
                    <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    Yes, our team consists of senior developers. We can troubleshoot custom themes, bespoke plugins, and headless WordPress configurations.
                </div>
</details>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-7 h-7 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:wrench-linear" width="16"></iconify-icon>
</div>
                        WP FIX IT
                    </a>
<p className="text-sm text-slate-500 mb-6 max-w-xs">Reliable WordPress operations partner for growing businesses and agencies.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Maintenance</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Speed Optimization</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Security Fixes</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Migrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">For Agencies</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2023 WP Fix It. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line"></iconify-icon></a>
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
