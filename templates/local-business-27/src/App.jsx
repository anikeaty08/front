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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">
                GROWTH<span className="text-slate-400">LOCAL</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Stories</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#get-started">
                Get Started
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="get-started">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">
<div className="inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Accepting new clients for 2024</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Scale your local business with precision.
                </h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed font-light">
                    We help home service providers and local businesses generate qualified leads, automate bookings, and build a reputation that lasts.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-medium text-slate-700">
<div className="flex items-center">
<span className="iconify text-emerald-600 mr-2" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="18"></span>
<span>No setup fees</span>
</div>
<div className="flex items-center">
<span className="iconify text-emerald-600 mr-2" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="18"></span>
<span>14-day free trial</span>
</div>
<div className="flex items-center">
<span className="iconify text-emerald-600 mr-2" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="18"></span>
<span>Cancel anytime</span>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200"></div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Get your free audit</h3>
<p className="text-sm text-slate-500 mb-6">Enter your details to receive a custom growth plan.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Work Email</label>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="website">Business Website</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="16"></span>
</span>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all" id="website" placeholder="www.yoursite.com" type="url"/>
</div>
</div>

<div className="flex items-start pt-2">
<label className="flex items-center cursor-pointer relative">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="ml-2 text-xs text-slate-500">I agree to the <a className="underline hover:text-slate-800" href="#">Terms of Service</a>.</span>
</label>
</div>
<button className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-all mt-2 group flex items-center justify-center" type="button">
                            Get Your Free Audit
                            <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</form>
</div>
<p className="mt-4 text-center text-xs text-slate-400">
                    Trusted by 500+ local businesses. Your data is secure.
                </p>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">POWERING LOCAL LEADERS ACROSS THE COUNTRY</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center space-x-2">
<span className="iconify text-slate-900" data-icon="lucide:triangle" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-bold tracking-tight text-lg text-slate-800">Acme</span>
</div>
<div className="flex items-center justify-center space-x-2">
<span className="iconify text-slate-900" data-icon="lucide:box" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-bold tracking-tight text-lg text-slate-800">Boxer</span>
</div>
<div className="flex items-center justify-center space-x-2">
<span className="iconify text-slate-900" data-icon="lucide:circle" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-bold tracking-tight text-lg text-slate-800">Orbit</span>
</div>
<div className="flex items-center justify-center space-x-2">
<span className="iconify text-slate-900" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-bold tracking-tight text-lg text-slate-800">Nexus</span>
</div>
<div className="flex items-center justify-center space-x-2">
<span className="iconify text-slate-900" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-bold tracking-tight text-lg text-slate-800">Bolt</span>
</div>
<div className="flex items-center justify-center space-x-2">
<span className="iconify text-slate-900" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-bold tracking-tight text-lg text-slate-800">Stack</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to dominate your local market.</h2>
<p className="text-slate-500 text-lg">Replace your fragmented toolset with one cohesive platform designed for conversion.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
<span className="iconify" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Real-time Analytics</h3>
<p className="text-slate-500 leading-relaxed text-sm">Track every visitor, click, and conversion. Understand exactly where your revenue is coming from.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">CRM Integration</h3>
<p className="text-slate-500 leading-relaxed text-sm">Sync leads directly to your existing workflow. We support Salesforce, HubSpot, and Pipedrive.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-900">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Reputation Management</h3>
<p className="text-slate-500 leading-relaxed text-sm">Automate review requests. Filter negative feedback and amplify your 5-star ratings.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="space-y-12">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-sm font-semibold">1</div>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Connect your channels</h3>
<p className="text-slate-500 text-sm leading-relaxed">Link your website, Google Business Profile, and social media accounts in one click.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-sm font-semibold">2</div>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Automate engagement</h3>
<p className="text-slate-500 text-sm leading-relaxed">Set up auto-responders for missed calls and form submissions to capture every opportunity.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-sm font-semibold">3</div>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Watch revenue grow</h3>
<p className="text-slate-500 text-sm leading-relaxed">Monitor your dashboard as leads convert into paying customers on autopilot.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">

<div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-3">
<div className="h-8 w-8 bg-slate-200 rounded-full"></div>
<div>
<div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
</div>
<div className="text-green-500 text-xs font-medium bg-green-50 px-2 py-1 rounded">+24%</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-3/4 bg-slate-100 rounded"></div>
</div>
<div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
<div className="h-8 w-20 bg-slate-900 rounded"></div>
<div className="h-8 w-8 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center mb-16">Trusted by local experts</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center mb-6 text-yellow-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<blockquote className="text-lg text-slate-900 font-medium mb-6 tracking-tight">"We doubled our inbound leads in the first month. The automation features alone saved us 20 hours a week in administrative work."</blockquote>
<div className="flex items-center space-x-4">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">SM</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Miller</div>
<div className="text-xs text-slate-500">Owner, Miller Dental</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center mb-6 text-yellow-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<blockquote className="text-lg text-slate-900 font-medium mb-6 tracking-tight">"The reporting dashboard is incredible. I finally know exactly which marketing channels are working and which ones are wasting money."</blockquote>
<div className="flex items-center space-x-4">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">DJ</div>
<div>
<div className="text-sm font-semibold text-slate-900">David Johnson</div>
<div className="text-xs text-slate-500">Founder, Johnson HVAC</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Ready to scale your business?</h2>
<p className="text-slate-500 text-lg mb-10">Join 500+ local businesses growing faster with our platform. Start your 14-day free trial today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20" href="#get-started">
                    Get Started Now
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all" href="#">
                    Talk to Sales
                </a>
</div>
<p className="mt-6 text-xs text-slate-400">No credit card required for audit.</p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-900 font-bold tracking-tighter text-lg">GROWTH<span className="text-slate-400">LOCAL</span></div>
<div className="flex space-x-6">
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-strokeWidth="1.5" data-width="20"></span>
</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="20"></span>
</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 GrowthLocal Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
