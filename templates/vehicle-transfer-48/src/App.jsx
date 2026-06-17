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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="text-xl font-semibold tracking-tighter text-slate-900">ONLOGIST</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Industries</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">For Drivers</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Login</a>
<a className="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium hover-bg-brand-dark transition-colors shadow-sm" href="#">
                        Get Started
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 focus:outline-none">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-grid-slate">
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-brand text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                        Now live across 20+ countries
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Europe’s Leading Platform for <span className="text-brand">Vehicle Transfers</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                        Fast, flexible, and reliable vehicle transport solutions – powered by technology and trusted by companies and professional drivers across Europe.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-brand text-white px-6 py-3.5 rounded-full text-sm font-medium hover-bg-brand-dark transition-all shadow-md hover:shadow-lg" href="#">
                            Get Transport Solutions
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex justify-center items-center bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-all" href="#">
                            Become a Driver
                        </a>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="relative w-full max-w-lg aspect-square">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-100/50 to-slate-100/50 rounded-full blur-3xl opacity-60"></div>

<div className="absolute inset-x-0 top-10 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-20">
<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:truck" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Transfer #8291</div>
<div className="text-xs text-slate-500">Berlin to Paris</div>
</div>
</div>
<div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-md">In Transit</div>
</div>

<div className="h-32 w-full bg-slate-50 rounded-lg relative overflow-hidden mb-4">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<svg className="absolute inset-0 w-full h-full" fill="none" stroke="#BF1B22" strokeWidth="2">
<path d="M50 80 Q 150 20 250 50" stroke-dasharray="4 4"></path>
<circle cx="50" cy="80" fill="white" r="4" stroke="#94a3b8"></circle>
<circle cx="250" cy="50" fill="#BF1B22" r="4" stroke="none"></circle>
</svg>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Pickup</div>
<div className="text-sm font-medium text-slate-900">Oct 24, 09:00</div>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Vehicle</div>
<div className="text-sm font-medium text-slate-900">Tesla Model 3</div>
</div>
</div>
</div>

<div className="absolute -right-4 bottom-20 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-30 w-48 animate-pulse">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Driver Assigned</div>
<div className="text-[10px] text-slate-500">2 mins ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-center lg:items-start">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">100,000+</div>
<div className="text-sm text-slate-500 font-medium">Vehicle transfers per year</div>
</div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">Europe-wide</div>
<div className="text-sm text-slate-500 font-medium">Full coverage</div>
</div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">Thousands</div>
<div className="text-sm text-slate-500 font-medium">Of vetted drivers</div>
</div>
<div className="flex flex-col items-center lg:items-start">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">Trusted</div>
<div className="text-sm text-slate-500 font-medium">By leading OEMs</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Two Powerful Ways to Move Vehicles</h2>
<p className="text-slate-600 text-lg">Tailored strategies to meet your logistics needs, whether you prefer self-service or full management.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-brand mb-6">
<span className="iconify" data-icon="lucide:layout-grid" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">ONLOGIST Marketplace</h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                        A digital marketplace where companies post vehicle transfer jobs and receive competitive offers directly from vetted professional drivers.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-brand" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Transparent pricing &amp; bidding
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-brand" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Flexible capacity on demand
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-brand" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Direct communication via app
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand hover:text-red-800 transition-colors" href="#">
                        Explore Marketplace <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">ONLOGIST Transport Service</h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                        A full-service solution where ONLOGIST manages the entire vehicle transfer process – from planning to execution.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-slate-900" data-icon="lucide:check-circle-2" data-width="18"></span>
                            End-to-end management
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-slate-900" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Dedicated contact person
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<span className="iconify text-slate-900" data-icon="lucide:check-circle-2" data-width="18"></span>
                            Ideal for complex volumes
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors" href="#">
                        Discover Transport Service <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Proven Vehicle Transfer Solutions Across Industries</h2>
<p className="text-slate-600">Tailored approaches for every sector of the automotive landscape.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-brand hover:text-red-800" href="#">
                    View All Case Studies <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand transition-colors">
<span className="iconify" data-icon="lucide:factory" data-width="24"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Automotive OEMs</h4>
<p className="text-sm text-slate-500 mb-4">Handling distribution from factory to dealership with speed.</p>
<div className="text-xs font-medium text-slate-900 bg-slate-50 inline-block px-2 py-1 rounded">High Capacity</div>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand transition-colors">
<span className="iconify" data-icon="lucide:key" data-width="24"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Leasing &amp; Fleet</h4>
<p className="text-sm text-slate-500 mb-4">Efficient defleeting and relocation of lease vehicles.</p>
<div className="text-xs font-medium text-slate-900 bg-slate-50 inline-block px-2 py-1 rounded">Cost Efficient</div>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand transition-colors">
<span className="iconify" data-icon="lucide:car-front" data-width="24"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Car Rental</h4>
<p className="text-sm text-slate-500 mb-4">Balancing fleet levels across locations dynamically.</p>
<div className="text-xs font-medium text-slate-900 bg-slate-50 inline-block px-2 py-1 rounded">Fast Response</div>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:shadow-md transition-all">
<div className="mb-4 text-slate-400 group-hover:text-brand transition-colors">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Mobility Services</h4>
<p className="text-sm text-slate-500 mb-4">Subscription delivery directly to the end customer.</p>
<div className="text-xs font-medium text-slate-900 bg-slate-50 inline-block px-2 py-1 rounded">Customer Centric</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight mb-16">Our Vehicle Transfer Services</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex gap-4">
<div className="flex-shrink-0 text-brand">
<span className="iconify" data-icon="lucide:car" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white">Single Vehicle Transfers</h4>
<p className="text-sm text-slate-400 leading-relaxed">Individual moves for specific needs with precise timing.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 text-brand">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white">Mass &amp; Volume Transport</h4>
<p className="text-sm text-slate-400 leading-relaxed">Scalable solutions for moving hundreds of units simultaneously.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 text-brand">
<span className="iconify" data-icon="lucide:globe-2" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white">Cross-border Transfers</h4>
<p className="text-sm text-slate-400 leading-relaxed">Navigating international logistics and compliance seamlessly.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 text-brand">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white">Driver-based Transport</h4>
<p className="text-sm text-slate-400 leading-relaxed">Professional drivers moving vehicles on their own wheels.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 text-brand">
<span className="iconify" data-icon="lucide:clipboard-check" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white">Digital Order Management</h4>
<p className="text-sm text-slate-400 leading-relaxed">Centralized platform for booking, tracking, and billing.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 text-brand">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white">Tracking &amp; Reporting</h4>
<p className="text-sm text-slate-400 leading-relaxed">Real-time visibility and comprehensive data insights.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        From High-Volume Logistics to Premium Individual Transfers
                    </h2>
<p className="text-lg text-slate-600 mb-8">
                        Whether you need to move thousands of vehicles or a single premium car, ONLOGIST delivers the same reliability, care, and precision.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="mt-1 bg-slate-100 p-1.5 rounded text-slate-700">
<span className="iconify" data-icon="lucide:container" data-width="18"></span>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">High-Volume Fleet Relocations</h4>
<p className="text-sm text-slate-500 mt-1">Rapid mobilization for seasonal peaks or fleet restructuring.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 bg-slate-100 p-1.5 rounded text-slate-700">
<span className="iconify" data-icon="lucide:clock-4" data-width="18"></span>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Time-Critical Vehicles</h4>
<p className="text-sm text-slate-500 mt-1">Executive deliveries where punctuality is non-negotiable.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 bg-slate-100 p-1.5 rounded text-slate-700">
<span className="iconify" data-icon="lucide:gem" data-width="18"></span>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Premium &amp; Luxury Handling</h4>
<p className="text-sm text-slate-500 mt-1">White-glove service for high-value assets.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="h-48 bg-slate-100 rounded-lg w-full flex items-center justify-center border border-slate-200">
<div className="text-center">
<span className="iconify mx-auto text-slate-300 mb-2" data-icon="lucide:truck" data-width="32"></span>
<span className="text-xs text-slate-400 font-medium">Fleet Transport</span>
</div>
</div>
<div className="h-64 bg-slate-50 rounded-lg w-full flex items-center justify-center border border-slate-200">
<div className="text-center">
<span className="iconify mx-auto text-slate-300 mb-2" data-icon="lucide:container" data-width="32"></span>
<span className="text-xs text-slate-400 font-medium">Logistics</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="h-64 bg-slate-800 rounded-lg w-full flex items-center justify-center shadow-xl">
<div className="text-center">
<span className="iconify mx-auto text-brand mb-2" data-icon="lucide:crown" data-width="32"></span>
<span className="text-xs text-slate-400 font-medium">VIP Service</span>
</div>
</div>
<div className="h-48 bg-slate-100 rounded-lg w-full flex items-center justify-center border border-slate-200">
<div className="text-center">
<span className="iconify mx-auto text-slate-300 mb-2" data-icon="lucide:car" data-width="32"></span>
<span className="text-xs text-slate-400 font-medium">Individual</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-slate-50 to-white relative border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center md:text-left relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-6">For Drivers</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Drive with ONLOGIST</h2>
<p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Access lucrative vehicle transfer jobs across Europe with full flexibility. Use our digital tools to make your workday easier and payments faster.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-white">
<span className="iconify text-brand" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm font-medium">Fair and transparent payments</span>
</div>
<div className="flex items-center gap-3 text-white">
<span className="iconify text-brand" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm font-medium">Flexible job selection via App</span>
</div>
<div className="flex items-center gap-3 text-white">
<span className="iconify text-brand" data-icon="lucide:check" data-width="20"></span>
<span className="text-sm font-medium">Trusted by thousands of pros</span>
</div>
</div>
<a className="inline-flex justify-center items-center bg-brand text-white px-8 py-3.5 rounded-full text-sm font-medium hover-bg-brand-dark transition-all" href="#">
                            Become a Driver
                        </a>
</div>
<div className="relative h-full min-h-[300px] flex items-center justify-center">

<div className="w-64 bg-white rounded-[2.5rem] p-4 border-4 border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="w-full h-full bg-slate-50 rounded-[2rem] overflow-hidden relative">
<div className="bg-white p-4 border-b border-slate-100">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-bold text-slate-900">Available Jobs</div>
<div className="iconify text-slate-400" data-icon="lucide:filter" data-width="16"></div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm mb-3">
<div className="flex justify-between items-start mb-2">
<div className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded">High Pay</div>
<div className="text-xs font-bold text-slate-900">€240</div>
</div>
<div className="text-xs font-semibold text-slate-800 mb-1">Hamburg → Munich</div>
<div className="text-[10px] text-slate-500">BMW 5 Series • Tomorrow</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Short Haul</div>
<div className="text-xs font-bold text-slate-900">€85</div>
</div>
<div className="text-xs font-semibold text-slate-800 mb-1">Berlin → Potsdam</div>
<div className="text-[10px] text-slate-500">VW Golf • Today</div>
</div>
</div>
<div className="absolute bottom-0 w-full bg-white border-t border-slate-100 p-3 flex justify-around text-slate-400">
<div className="iconify text-brand" data-icon="lucide:home" data-width="20"></div>
<div className="iconify" data-icon="lucide:map" data-width="20"></div>
<div className="iconify" data-icon="lucide:user" data-width="20"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Trusted by Europe's Mobility Leaders</h3>

<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
<span className="text-xl font-bold text-slate-800 tracking-tight">SIXT</span>
<span className="text-xl font-bold text-slate-800 tracking-tight">EUROPCAR</span>
<span className="text-xl font-bold text-slate-800 tracking-tight">AUTO1</span>
<span className="text-xl font-bold text-slate-800 tracking-tight">FINN</span>
<span className="text-xl font-bold text-slate-800 tracking-tight">HERTZ</span>
</div>
<div className="max-w-3xl mx-auto">
<div className="mb-6 text-brand">
<span className="iconify mx-auto" data-icon="lucide:quote" data-width="32"></span>
</div>
<blockquote className="text-2xl font-medium text-slate-900 leading-snug mb-6">
                    "ONLOGIST has completely transformed how we handle fleet movements. The scalability and speed are unmatched in the European market."
                </blockquote>
<div className="text-sm font-semibold text-slate-900">Head of Logistics</div>
<div className="text-sm text-slate-500">Leading Mobility Provider</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ready to Move Vehicles Smarter?</h2>
<p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Join the platform that is setting the standard for vehicle logistics in Europe.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center bg-brand text-white px-8 py-4 rounded-full text-base font-medium hover-bg-brand-dark transition-all shadow-md" href="#">
                    Get Started as a Company
                </a>
<a className="inline-flex justify-center items-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all" href="#">
                    Join as a Driver
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900 mb-4 block">ONLOGIST</span>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        Europe's leading cloud-based marketplace for vehicle transfers. Efficient, transparent, and reliable.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-400 hover:text-brand transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-400 hover:text-brand transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand transition-colors" href="#">Marketplace</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Transport Service</a></li>
<li><a className="hover:text-brand transition-colors" href="#">For Drivers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Press</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand transition-colors" href="#">API Docs</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">
                    © 2023 Onlogist GmbH. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
<a className="hover:text-slate-600" href="#">Imprint</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
