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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-slate-900 hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">MidWest Smart Logistics</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-slate-900 transition-colors text-xs font-medium text-slate-500" href="/#1">Home</a>
<a className="hover:text-slate-900 transition-colors text-xs font-medium text-slate-500" href="/#about">About Us</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="inline-flex items-center justify-center h-8 px-4 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#contact">
                    Contact Us
                </a>
</nav>

<button className="md:hidden text-slate-900">
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{color: 'rgb(15, 23, 42)'}} width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 bg-grid -z-10 h-[600px]"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] uppercase tracking-wider font-semibold mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="12"></iconify-icon>
                Logistics Intelligence
            </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Optimizing transportation networks for smarter decisions.
            </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
                Technology‑driven supply‑chain consulting, analytics, and freight strategy for modern enterprises across the Midwest.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="#contact">
                    Get in Touch
                </a>
<a className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="border-slate-100 border-t pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Data-driven logistics for the modern age.</h2>
<div className="h-1 w-12 bg-blue-600 rounded-full"></div>
</div>
<div className="space-y-6 text-base leading-7 text-slate-500">
<p className="">
                        MidWest Smart Logistics (MSL) specializes in leveraging data, advanced analytics, and supply‑chain engineering
                        to streamline transportation networks across the Midwest. Our mission is to help companies reduce cost, improve
                        efficiency, and increase operational transparency through smart logistics decision‑making.
                    </p>
<p className="">
                        We partner with manufacturers, distributors, and retail organizations to optimize freight operations,
                        modernize logistics workflows, and provide ongoing analytics visibility.
                    </p>
<div className="pt-4 flex gap-8">
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">18%</span>
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Avg Cost Reduction</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">24/7</span>
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Analytics Uptime</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Core Services</h2>
<p className="mt-2 text-slate-500">Comprehensive solutions for supply chain excellence.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:route-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Supply‑Chain Optimization</h3>
<p className="text-sm text-slate-500 leading-relaxed">End‑to‑end analysis of routing, warehousing, carrier selection, and network strategy.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Freight Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Interactive performance dashboards, KPI tracking, and predictive analytics tools.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Transportation Consulting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Carrier negotiations, fleet strategy, load consolidation, and cost‑reduction programs.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Tech Integration</h3>
<p className="text-sm text-slate-500 leading-relaxed">WMS, TMS, and ERP system integration to streamline digital operations.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Transparent Pricing</h2>
<p className="mt-3 text-slate-500">Flexible options designed for small businesses to enterprise clients.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="relative p-8 rounded-2xl border border-slate-200 bg-white">
<div className="mb-4">
<h3 className="text-sm font-medium text-slate-900">Analytics Dashboard</h3>
<p className="text-xs text-slate-500 mt-1">Real-time visibility</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">$499</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Access to real‑time dashboards
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            KPI tracking &amp; automated reports
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Predictive freight insights
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors text-center" href="#contact">Get Started</a>
</div>

<div className="relative p-8 rounded-2xl border border-blue-200 bg-blue-50/30 ring-1 ring-blue-100">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-[10px] font-semibold uppercase tracking-wide rounded-full">Most Popular</div>
<div className="mb-4">
<h3 className="text-sm font-medium text-blue-900">Logistics Consulting</h3>
<p className="text-xs text-blue-700/70 mt-1">Optimization reviews</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">$2,500</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Monthly optimization reviews
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Routing &amp; cost analysis
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Carrier benchmarking
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-500 transition-colors text-center shadow-sm" href="#contact">Contact Sales</a>
</div>

<div className="relative p-8 rounded-2xl border border-slate-200 bg-white">
<div className="mb-4">
<h3 className="text-sm font-medium text-slate-900">Enterprise Partnership</h3>
<p className="text-xs text-slate-500 mt-1">Full transformation</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Full network redesign
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Digital transformation support
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Dedicated consulting team
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors text-center" href="#contact">Talk to Experts</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Trusted by Industry Leaders</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">"MSL helped us reduce transportation costs by 18% within the first quarter. Their data‑driven approach was unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Regional Manufacturing CEO</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">"Their analytics dashboards transformed the way we monitor freight performance. Clear, actionable, and accurate."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-900">Distribution Center Manager</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">"The most professional logistics consulting team we've ever worked with. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Retail Logistics Director</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="contact">
<div className="text-center max-w-3xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Ready to optimize?</h2>
<p className="text-slate-500 mb-10">We’d love to help you optimize your logistics operations. Reach out anytime.</p>
<div className="inline-block bg-slate-50 w-full max-w-lg border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 group p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors shadow-sm" href="mailto:info@midwestsmartlogistics.com">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Us</p>
<p className="text-sm font-medium text-slate-900">d497a568@wichita.edu</p>
</div>
</a>
<a className="flex items-center gap-4 group p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors shadow-sm" href="tel:5555555555">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Call Us</p>
<p className="text-sm font-medium text-slate-900">(555) 555-5555</p>
</div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-slate-800 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-6 text-white">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">MSL</span>
</div>
<p className="text-xs text-slate-500">
                This is not a real commercial website but part of MIS 395 class requirements at Wichita State University.
            </p>
<p className="text-xs text-slate-600 mt-8">
                © 2023 MidWest Smart Logistics. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
