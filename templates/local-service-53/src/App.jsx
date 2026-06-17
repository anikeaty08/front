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
      

<div className="fixed inset-0 -z-10 overflow-hidden bg-white pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/30 blur-[100px] animate-blob mix-blend-multiply"></div>
<div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/30 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-400/30 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
</div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2">

<div className="w-6 h-6 bg-gray-950 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="cursor-pointer font-semibold text-gray-900 tracking-tight" onclick="window.location.href='/home'" role="button">RHO Strategies</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="/home">Home</a>
<a className="hover:text-gray-900 transition-colors" href="/about">About</a>
<a className="hover:text-gray-900 transition-colors" href="/solutions">Solutions</a>
<a className="hover:text-gray-900 transition-colors" href="/get-started">Get Started</a>
</div>
</div>
</nav>

<main className="md:pt-48 md:pb-32 overflow-hidden bg-transparent pt-32 pb-20 relative">
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex gap-2 text-xs font-medium text-blue-700 bg-blue-50 border-blue-100 border rounded-full mb-8 py-1 px-3 items-center">
                Small Business Growth Engine
                <span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Turn local traffic into <br/>
<span className="text-gradient-blue">revenue on autopilot.</span>
</h1>
<p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                The all-in-one growth infrastructure for service businesses. We combine high-performance web design, automated reviews, and search dominance into a single monthly service.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-blue-700 hover:shadow-lg transition-all flex font-medium text-white bg-blue-600 w-full rounded-lg py-3.5 px-8 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] gap-2 items-center justify-center" onclick="window.location.href='/get-started'" role="button">
                    Start Scaling
                    <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl blur-lg opacity-50"></div>

<div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80 border border-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80 border border-green-500/20"></div>
</div>
<div className="flex text-[10px] text-gray-400 font-mono bg-white border border-gray-100 w-1/3 h-5 rounded-md mx-auto items-center justify-center shadow-sm">app.rhostrategies.com</div>
</div>

<div className="p-6 md:p-8 bg-gray-50/50 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
<div className="uppercase text-xs text-gray-500 tracking-wider mb-1">New Visitors</div>
<div className="text-2xl text-gray-900 font-semibold">1,284</div>
<div className="mt-2 text-xs text-emerald-600 flex items-center gap-1 font-medium">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                +12.5%
                            </div>
</div>

<div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
<div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Google Rating</div>
<div className="text-2xl text-gray-900 font-semibold flex items-center gap-2">
                                4.9 <span className="text-yellow-500 text-lg">★</span>
</div>
<div className="mt-2 text-xs text-gray-500">Based on 842 reviews</div>
</div>

<div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
<div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Search Visibility</div>
<div className="text-2xl text-gray-900 font-semibold">94%</div>
<div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[94%]"></div>
</div>
</div>

<div className="md:col-span-3 bg-white border border-gray-200 p-6 rounded-lg h-64 relative flex flex-col shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-gray-700">Revenue Attribution</h3>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-gray-500">Organic</span>
<span className="w-2 h-2 rounded-full bg-purple-500 ml-2"></span>
<span className="text-xs text-gray-500">Direct</span>
</div>
</div>
<div className="flex-1 w-full flex items-end gap-2 px-2">

<div className="w-full bg-blue-50 rounded-t-sm h-[30%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[60%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[45%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[50%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[40%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[70%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[60%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[65%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[55%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[80%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[80%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[50%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[75%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[90%] rounded-t-sm"></div></div>
<div className="w-full bg-blue-50 rounded-t-sm h-[90%] relative group"><div className="absolute bottom-0 w-full bg-blue-500 h-[75%] rounded-t-sm"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-gray-50/50 border-gray-200 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl text-gray-900 font-semibold tracking-tight mb-4">The Complete Growth Stack</h2>
<p className="text-gray-500 text-lg max-w-xl">We replaced the fragmented agency model with a unified software-enabled service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 glass-panel rounded-2xl p-8 relative overflow-hidden group bg-white border border-gray-200 shadow-sm">
<div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
<svg fill="none" height="200" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-600">
<svg className="lucide lucide-layout-template" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-xl text-gray-900 font-medium mb-2">High-Velocity Websites</h3>
<p className="text-gray-600 leading-relaxed max-w-md">Our sites aren't just brochures. They are conversion engines built on Next.js, optimized for speed, and designed to capture leads instantly.</p>
</div>

<div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4 flex gap-4 items-center">
<div className="flex-1 space-y-2">
<div className="h-2 bg-gray-200 rounded w-3/4"></div>
<div className="h-2 bg-gray-200 rounded w-1/2"></div>
</div>
<div className="px-4 py-2 bg-blue-600 rounded text-xs text-white font-medium shadow-md">Get Quote</div>
<div className="absolute right-12 bottom-16 pointer-events-none">
<svg className="w-6 h-6 text-gray-800 fill-current drop-shadow-lg" viewbox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4z"></path></svg>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group bg-white border border-gray-200 shadow-sm">
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-50 to-transparent"></div>
<div className="w-10 h-10 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center mb-6 text-yellow-500">
<svg className="lucide lucide-star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-xl text-gray-900 font-medium mb-2">Review Automation</h3>
<p className="text-gray-600 text-sm mb-8">Automatically request reviews via SMS &amp; Email after service completion.</p>

<div className="space-y-3 relative">
<div className="bg-white/80 backdrop-blur border border-gray-200 p-3 rounded-lg flex items-start gap-3 shadow-md transform translate-y-2 scale-95 opacity-50">
<div className="w-6 h-6 rounded-full bg-gray-200"></div>
<div className="flex-1">
<div className="h-2 bg-gray-200 rounded w-20 mb-1"></div>
<div className="h-2 bg-gray-100 rounded w-full"></div>
</div>
</div>
<div className="bg-white/95 backdrop-blur border border-gray-200 p-3 rounded-lg flex items-start gap-3 shadow-xl z-10 relative">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-[10px] text-gray-900 font-medium">John Doe</span>
<span className="text-[8px] text-yellow-500">★★★★★</span>
</div>
<p className="text-[10px] text-gray-500">Excellent service, highly recommend!</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 glass-panel rounded-2xl p-8 flex flex-col justify-between group bg-white border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
<div className="">
<div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 text-purple-600">
<svg className="lucide lucide-search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-xl text-gray-900 font-medium mb-2">Local SEO Dominance</h3>
<p className="text-gray-600 text-sm">We optimize your Google Business Profile to rank #1 in the "Map Pack" for local searches.</p>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="px-3 py-1 rounded bg-gray-100 border border-gray-200 text-xs text-gray-700 font-medium">#1 "landscaper near me"</div>
<div className="px-3 py-1 rounded bg-gray-100 border border-gray-200 text-xs text-gray-700 font-medium">#1 "hvac repair"</div>
</div>
</div>

<div className="md:col-span-3 glass-panel rounded-2xl p-8 flex flex-col justify-between group bg-white border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
<div className="">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-600">
<svg className="lucide lucide-bar-chart-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Growth Tracking Made Simple</h3>
<p className="text-sm text-gray-600">Clear statistics into your website traffic, review growth, and Google ranking</p>
</div>

<div className="mt-6 h-12 w-full flex items-end gap-1">
<div className="w-full bg-emerald-100 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-emerald-100 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-emerald-100 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-emerald-100 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-emerald-100 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500 h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-4xl text-gray-900 font-semibold tracking-tight mb-4">How It Works</h2>
<p className="text-gray-500 max-w-lg">A simple 3-step process to modernize your business.</p>
</div>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-12 h-12 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-xl font-bold text-gray-600 shadow-sm">1</div>
<h3 className="text-gray-900 font-medium text-lg mb-2">Onboarding</h3>
<p className="text-gray-500 text-sm leading-relaxed">We sync with your CRM and verify your Google Business Profile details in a 30-minute call.</p>
</div>

<div className="bg-white border border-blue-200 p-6 rounded-xl shadow-[0_4px_20px_-10px_rgba(37,99,235,0.15)]">
<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-xl font-bold text-white shadow-lg shadow-blue-200">2</div>
<h3 className="text-gray-900 font-medium text-lg mb-2">Deployment</h3>
<p className="text-gray-600 text-sm leading-relaxed">Our team builds your high-speed site and configures the review automation engine.</p>
</div>

<div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-12 h-12 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-xl font-bold text-gray-600 shadow-sm">3</div>
<h3 className="text-gray-900 font-medium text-lg mb-2">Growth</h3>
<p className="text-gray-500 text-sm leading-relaxed">Launch day. You start receiving leads and reviews automatically while we handle maintenance.</p>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="group flex transition-all hover:border-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm font-medium text-gray-600 hover:text-gray-900 bg-white h-10 border-gray-200 border rounded-full px-6 gap-2 items-center" onclick="window.location.href='/about'">
                    About Us
                    <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-32 bg-gray-50 border-t border-gray-200 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">

<div className="text-center mb-20">
<span className="text-[11px] font-mono text-emerald-600 uppercase tracking-widest mb-6 block">The Old Way</span>
<h2 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tighter mb-6 leading-none">
                    Most Service Websites Are Just 
                    <span className="text-gray-400">Expensive Business Cards.</span>
</h2>
<p className="text-lg text-gray-600 font-medium tracking-tight">Stop settling for "pretty." It's costing you clients.</p>
</div>

<div className="rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm overflow-hidden shadow-xl shadow-gray-200/50">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">

<div className="p-10 md:p-14 bg-white">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full border border-red-500/20 bg-red-50 text-red-600 flex items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-xs font-bold text-red-600 tracking-widest uppercase">The Liability</span>
</div>
<p className="text-base text-gray-600 leading-relaxed">
                            In a crowded digital landscape, blending in is a death sentence. Most agencies will build you a website that looks nice but does nothing. No strategy. No sales logic.
                        </p>
</div>

<div className="p-10 md:p-14 bg-gray-50/50">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full border border-emerald-500/20 bg-emerald-50 text-emerald-600 flex items-center justify-center">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">The Asset</span>
</div>
<p className="text-base text-gray-700 leading-relaxed">
                            If your site isn't actively turning visitors into booked appointments, it's not an asset—it's a liability. You don't need a brochure; you need a 24/7 sales acquisition system.
                        </p>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<button className="group flex transition-all hover:border-gray-900 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-sm font-medium text-gray-600 bg-white/50 h-10 border-gray-300 border rounded-full px-6 gap-2 items-center" onclick="window.location.href='/solutions'">
                    How We Do It
                    <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl text-gray-900 font-semibold tracking-tight text-center mb-4">Industries We Power</h2>
<p className="text-gray-500 text-center max-w-2xl mx-auto">Built for high-volume service businesses that rely on local search traffic.</p>
</div>
<div className="relative h-[600px] overflow-hidden">

<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full pause-on-hover">

<div className="space-y-6 animate-scroll-y opacity-70 md:opacity-100">

<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4 border border-green-100">
<svg className="lucide lucide-trees w-5 h-5" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Landscaping</h4>
<p className="text-sm text-gray-500">Design, installation, and maintenance services.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4 border border-yellow-100">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Electrical</h4>
<p className="text-sm text-gray-500">Residential and commercial electrical repair.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
<svg className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Plumbing</h4>
<p className="text-sm text-gray-500">Emergency plumbing and pipe services.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 border border-cyan-100">
<svg className="lucide lucide-shirt w-5 h-5" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Laundromats</h4>
<p className="text-sm text-gray-500">Wash &amp; fold delivery and self-service.</p>
</div>

<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-4 border border-green-100">
<svg className="lucide lucide-trees w-5 h-5" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Landscaping</h4>
<p className="text-sm text-gray-500">Design, installation, and maintenance services.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4 border border-yellow-100">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Electrical</h4>
<p className="text-sm text-gray-500">Residential and commercial electrical repair.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
<svg className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Plumbing</h4>
<p className="text-sm text-gray-500">Emergency plumbing and pipe services.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 border border-cyan-100">
<svg className="lucide lucide-shirt w-5 h-5" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Laundromats</h4>
<p className="text-sm text-gray-500">Wash &amp; fold delivery and self-service.</p>
</div>
</div>

<div className="hidden md:block space-y-6 animate-scroll-y-reverse">

<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 border border-sky-100">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Window Cleaning</h4>
<p className="text-sm text-gray-500">Residential and high-rise commercial.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 border border-orange-100">
<svg className="lucide lucide-thermometer w-5 h-5" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">HVAC</h4>
<p className="text-sm text-gray-500">Heating, ventilation, and air conditioning.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Roofing</h4>
<p className="text-sm text-gray-500">Repair, replacement, and inspection.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-100">
<svg className="lucide lucide-bug-off w-5 h-5" data-lucide="bug-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-8"></path><path d="M14.12 3.88 16 2"></path><path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"></path><path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3"></path><path d="m2 2 20 20"></path><path d="M21 5a4 4 0 0 1-3.55 3.97"></path><path d="M22 13h-3.34"></path><path d="M3 21a4 4 0 0 1 3.81-4"></path><path d="M6 13H2"></path><path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Pest Control</h4>
<p className="text-sm text-gray-500">Extermination and prevention services.</p>
</div>

<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 border border-sky-100">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Window Cleaning</h4>
<p className="text-sm text-gray-500">Residential and high-rise commercial.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 border border-orange-100">
<svg className="lucide lucide-thermometer w-5 h-5" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">HVAC</h4>
<p className="text-sm text-gray-500">Heating, ventilation, and air conditioning.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Roofing</h4>
<p className="text-sm text-gray-500">Repair, replacement, and inspection.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-100">
<svg className="lucide lucide-bug-off w-5 h-5" data-lucide="bug-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-8"></path><path d="M14.12 3.88 16 2"></path><path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"></path><path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3"></path><path d="m2 2 20 20"></path><path d="M21 5a4 4 0 0 1-3.55 3.97"></path><path d="M22 13h-3.34"></path><path d="M3 21a4 4 0 0 1 3.81-4"></path><path d="M6 13H2"></path><path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Pest Control</h4>
<p className="text-sm text-gray-500">Extermination and prevention services.</p>
</div>
</div>

<div className="hidden lg:block space-y-6 animate-scroll-y">

<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
<svg className="lucide lucide-spray-can w-5 h-5" data-lucide="spray-can" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01"></path><path d="M7 5h.01"></path><path d="M11 7h.01"></path><path d="M3 7h.01"></path><path d="M7 9h.01"></path><path d="M3 11h.01"></path><rect height="4" width="4" x="15" y="5"></rect><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path><path d="m13 14 8-2"></path><path d="m13 19 8-2"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Auto Detailing</h4>
<p className="text-sm text-gray-500">Mobile detailing and ceramic coating.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4 border border-teal-100">
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Moving Services</h4>
<p className="text-sm text-gray-500">Local and long-distance residential moves.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-4 border border-pink-100">
<svg className="lucide lucide-paint-bucket w-5 h-5" data-lucide="paint-bucket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 7 6 2"></path><path d="M18.992 12H2.041"></path><path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595"></path><path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Painting</h4>
<p className="text-sm text-gray-500">Interior and exterior house painting.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
<svg className="lucide lucide-hammer w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">General Contractor</h4>
<p className="text-sm text-gray-500">Home renovations and remodeling.</p>
</div>

<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
<svg className="lucide lucide-spray-can w-5 h-5" data-lucide="spray-can" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01"></path><path d="M7 5h.01"></path><path d="M11 7h.01"></path><path d="M3 7h.01"></path><path d="M7 9h.01"></path><path d="M3 11h.01"></path><rect height="4" width="4" x="15" y="5"></rect><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path><path d="m13 14 8-2"></path><path d="m13 19 8-2"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Auto Detailing</h4>
<p className="text-sm text-gray-500">Mobile detailing and ceramic coating.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4 border border-teal-100">
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Moving Services</h4>
<p className="text-sm text-gray-500">Local and long-distance residential moves.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-4 border border-pink-100">
<svg className="lucide lucide-paint-bucket w-5 h-5" data-lucide="paint-bucket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 7 6 2"></path><path d="M18.992 12H2.041"></path><path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595"></path><path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">Painting</h4>
<p className="text-sm text-gray-500">Interior and exterior house painting.</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 transition-colors shadow-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
<svg className="lucide lucide-hammer w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h4 className="text-gray-900 font-medium mb-1">General Contractor</h4>
<p className="text-sm text-gray-500">Home renovations and remodeling.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">

<div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-16 shadow-2xl shadow-gray-200 relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Got Questions?</h2>
<p className="text-gray-500 text-sm md:text-base">Here's what clients usually ask before we work together.</p>
</div>
<div className="space-y-3">

<details className="group bg-white border border-gray-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex items-center justify-between p-4 cursor-pointer text-gray-900 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors select-none">
<span className="">What exactly is included in the monthly service?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4 transition-all">
                                Everything you need to grow. We handle the custom website design, Next.js development, hosting, daily backups, and security updates. Plus, we integrate our review automation system and manage your Google Business Profile SEO.
                            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex items-center justify-between p-4 cursor-pointer text-gray-900 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors select-none">
<span className="">Will my website look generic?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4 transition-all">
                                Absolutely not. While we use a high-performance framework, every design is tailored to your brand. We don't use WordPress templates; we code custom layouts that highlight your specific services and local market presence.
                            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex items-center justify-between p-4 cursor-pointer text-gray-900 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors select-none">
<span className="">How fast can I get my project done?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4 transition-all">
                                Our streamlined process typically allows us to launch your new platform within 14-21 days of onboarding. We handle the heavy lifting so you can focus on running your business.
                            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex items-center justify-between p-4 cursor-pointer text-gray-900 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors select-none">
<span className="">Why is this better than a traditional agency?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4 transition-all">
                                Agencies charge $5k-10k upfront and bill hourly for changes. We operate on a subscription model, meaning $0 down and predictable monthly costs. We're incentivized to keep your site performing because we earn your business every month.
                            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="flex items-center justify-between p-4 cursor-pointer text-gray-900 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors select-none">
<span>What if I need changes?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4 transition-all">
                                Unlimited content updates are included. Need to change a photo, update pricing, or add a new service area? Just email our support team, and we'll handle it—usually within 24 hours.
                            </div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-white">

<div className="absolute inset-0 bg-blue-50/50"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Ready to dominate your market?</h2>
<p className="text-lg text-gray-500 mb-10">Join the high-growth local businesses using RHO to scale revenue without the headache.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-gray-800 transition-colors shadow-lg cursor-pointer text-lg font-bold text-white bg-gray-900 rounded-full pt-4 pr-8 pb-4 pl-8" onclick="window.location.href='/get-started';window.location.href='/solutions';window.location.href='/solutions';window.location.href='/solutions'" role="button">Start Scaling</button>
<button className="hover:bg-gray-50 hover:text-gray-900 transition-colors text-lg font-medium text-gray-600 bg-white border-gray-300 border rounded-full pt-4 pr-8 pb-4 pl-8" onclick="window.location.href='/about';window.location.href='/solutions';window.location.href='/solutions';window.location.href='/solutions'" role="button">About Us</button>
</div>
<p className="text-xs text-gray-500 mt-6"></p>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">

<div className="w-6 h-6 bg-gray-900 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="font-semibold text-gray-900">RHO Strategies</span>
</div>
<p className="text-gray-500 text-sm max-w-xs">Building the digital infrastructure for the next generation of service businesses.</p>
</div>
<div className="">
<h4 className="text-gray-900 font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li className="" onclick="window.location.href='/solutions'" role="button"><a className="hover:text-blue-600" href="/solutions">Websites</a></li>
<li className="" onclick="window.location.href='/solutions'" role="button"><a className="hover:text-blue-600" href="#">Reputation</a></li>
<li className="" onclick="window.location.href='/solutions'" role="button">GBP Optimization</li>
</ul>
</div>
<div className="">
<h4 className="text-gray-900 font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li className="" onclick="window.location.href='/about'" role="button"><a className="hover:text-blue-600" href="#">About</a></li>
<li className="" onclick="window.location.href='/terms-conditions'" role="button">Terms &amp; Conditions</li>
<li className="cursor-pointer" onclick="window.location.href='/privacy-policy';window.location.href='/privacy-policy'" role="button"><a className="hover:text-blue-600" href="/privacy-policy">Privacy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center md:text-left text-xs text-gray-500">
            © 2024 RHO Strategies Inc. All rights reserved.
        </div>
</footer>


    </>
  );
}
