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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-zinc-900">ONLOGIST</span>
</a>

<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">Solutions</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">Industries</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">For Drivers</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">Company</a>
</div>

<div className="hidden items-center gap-3 md:flex">
<a className="text-sm font-medium text-zinc-900 hover:text-[#BF1B22]" href="#">Login</a>
<a className="rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50" href="#">Become a Driver</a>
<a className="rounded-md bg-[#BF1B22] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#99151b] hover:shadow-md" href="#">Get Transport Solutions</a>
</div>

<button className="flex items-center justify-center p-2 text-zinc-500 md:hidden">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 mb-6">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BF1B22] opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#BF1B22]"></span>
</span>
                        Moving Logistics Forward
                    </div>
<h1 className="text-5xl font-medium leading-[1.1] tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
                        Europe’s Leading Platform for Vehicle Transfers
                    </h1>
<p className="mt-6 text-lg font-normal leading-relaxed text-zinc-500 md:text-xl md:leading-relaxed">
                        Fast, flexible, and reliable vehicle transport solutions – powered by technology and trusted by companies and professional drivers across Europe.
                    </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-md bg-[#BF1B22] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-[#99151b] hover:shadow-md" href="#">
                            Get Transport Solutions
                        </a>
<a className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-3 text-base font-medium text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50" href="#">
                            Become a Driver
                        </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200"></div>
<div className="h-8 w-8 rounded-full border-2 border-white bg-zinc-300"></div>
<div className="h-8 w-8 rounded-full border-2 border-white bg-zinc-400"></div>
</div>
<p>Trusted by 5,000+ companies</p>
</div>
</div>

<div className="relative lg:h-full lg:min-h-[500px]">

<div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 p-4 shadow-2xl lg:absolute lg:right-0 lg:top-0 lg:w-[120%]">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/4 left-12 w-64 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg ring-1 ring-black/5">
<div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<span className="iconify" data-icon="lucide:truck" data-width="16"></span>
</div>
<div>
<p className="text-xs font-medium text-zinc-900">Transfer #4092</p>
<p className="text-[10px] text-zinc-500">Berlin <span className="mx-1">→</span> Munich</p>
</div>
</div>
<span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700">Active</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
<span>Distance: 585 km</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span>
<span>ETA: 14:30 Today</span>
</div>
</div>
</div>

<div className="absolute bottom-12 right-1/4 w-56 rounded-xl border border-zinc-200 bg-zinc-900 p-4 shadow-2xl ring-1 ring-white/10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-white">New Job Offer</span>
<span className="iconify text-zinc-400" data-icon="lucide:bell" data-width="14"></span>
</div>
<div className="h-16 w-full rounded bg-zinc-800/50 mb-3 animate-pulse"></div>
<div className="flex gap-2">
<div className="h-8 flex-1 rounded bg-[#BF1B22]"></div>
<div className="h-8 flex-1 rounded bg-zinc-700"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-12">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="border-l-2 border-[#BF1B22]/20 pl-4">
<p className="text-3xl font-semibold tracking-tight text-zinc-900">100k+</p>
<p className="text-sm font-medium text-zinc-500">Vehicle transfers per year</p>
</div>
<div className="border-l-2 border-[#BF1B22]/20 pl-4">
<p className="text-3xl font-semibold tracking-tight text-zinc-900">Europe</p>
<p className="text-sm font-medium text-zinc-500">Wide coverage area</p>
</div>
<div className="border-l-2 border-[#BF1B22]/20 pl-4">
<p className="text-3xl font-semibold tracking-tight text-zinc-900">Thousands</p>
<p className="text-sm font-medium text-zinc-500">Of vetted drivers</p>
</div>
<div className="border-l-2 border-[#BF1B22]/20 pl-4">
<p className="text-3xl font-semibold tracking-tight text-zinc-900">Trusted</p>
<p className="text-sm font-medium text-zinc-500">By Leading OEMs &amp; Fleets</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">Two Powerful Ways to Move Vehicles</h2>
<p className="mt-4 text-lg text-zinc-500">Tailored to your needs. Choose between our digital marketplace or a full-service managed solution.</p>
</div>
<div className="grid gap-8 lg:grid-cols-2">

<div className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:layout-grid" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">ONLOGIST Marketplace</h3>
<p className="mt-4 flex-1 text-base text-zinc-500">A digital marketplace where companies post vehicle transfer jobs and receive competitive offers directly from vetted professional drivers.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-[#BF1B22]" data-icon="lucide:check-circle" data-width="18"></span>
                            Transparent pricing
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-[#BF1B22]" data-icon="lucide:check-circle" data-width="18"></span>
                            Flexible capacity
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-[#BF1B22]" data-icon="lucide:check-circle" data-width="18"></span>
                            Direct app communication
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-[#BF1B22]" data-icon="lucide:check-circle" data-width="18"></span>
                            Fast booking execution
                        </li>
</ul>
<div className="mt-8 pt-8 border-t border-zinc-100">
<a className="inline-flex items-center text-sm font-medium text-[#BF1B22] hover:text-[#99151b]" href="#">
                            Explore Marketplace
                            <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-200 text-zinc-900">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">ONLOGIST Transport Service</h3>
<p className="mt-4 flex-1 text-base text-zinc-500">A full-service solution where ONLOGIST manages the entire vehicle transfer process – from planning to execution.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-900" data-icon="lucide:shield-check" data-width="18"></span>
                            End-to-end management
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-900" data-icon="lucide:shield-check" data-width="18"></span>
                            Dedicated contact person
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-900" data-icon="lucide:shield-check" data-width="18"></span>
                            Complex &amp; high-volume transfers
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<span className="iconify text-zinc-900" data-icon="lucide:shield-check" data-width="18"></span>
                            Scalable across Europe
                        </li>
</ul>
<div className="mt-8 pt-8 border-t border-zinc-200">
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-700" href="#">
                            Discover Transport Service
                            <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-100 bg-white py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">Proven Vehicle Transfer Solutions Across Industries</h2>
</div>
<a className="text-sm font-medium text-[#BF1B22] hover:text-[#99151b]" href="#">View All Case Studies →</a>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm">
<span className="iconify mb-4 text-zinc-400 group-hover:text-[#BF1B22]" data-icon="lucide:factory" data-width="32"></span>
<h3 className="text-lg font-medium text-zinc-900">Automotive OEMs</h3>
<p className="mt-2 text-sm text-zinc-500">Handling factory-to-dealer logistics with precision timing.</p>
<div className="mt-4 text-xs font-medium text-zinc-900">Result: Reduced lead time by 20%</div>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm">
<span className="iconify mb-4 text-zinc-400 group-hover:text-[#BF1B22]" data-icon="lucide:key" data-width="32"></span>
<h3 className="text-lg font-medium text-zinc-900">Leasing &amp; Fleet</h3>
<p className="mt-2 text-sm text-zinc-500">Efficient vehicle returns and remarketing transport.</p>
<div className="mt-4 text-xs font-medium text-zinc-900">Result: Lower operational costs</div>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm">
<span className="iconify mb-4 text-zinc-400 group-hover:text-[#BF1B22]" data-icon="lucide:car-front" data-width="32"></span>
<h3 className="text-lg font-medium text-zinc-900">Car Rental</h3>
<p className="mt-2 text-sm text-zinc-500">Rebalancing fleets between cities and stations.</p>
<div className="mt-4 text-xs font-medium text-zinc-900">Result: Optimized fleet utilization</div>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm">
<span className="iconify mb-4 text-zinc-400 group-hover:text-[#BF1B22]" data-icon="lucide:repeat" data-width="32"></span>
<h3 className="text-lg font-medium text-zinc-900">Mobility Services</h3>
<p className="mt-2 text-sm text-zinc-500">Flexible movement for subscription and sharing models.</p>
<div className="mt-4 text-xs font-medium text-zinc-900">Result: High scalability</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Our Vehicle Transfer Services</h2>
</div>
<div className="grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative bg-white p-8 hover:z-10 hover:shadow-lg">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:car" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900">Single Vehicle Transfers</h3>
</div>
</div>

<div className="group relative bg-white p-8 hover:z-10 hover:shadow-lg">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:container" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900">Mass &amp; Volume Transport</h3>
</div>
</div>

<div className="group relative bg-white p-8 hover:z-10 hover:shadow-lg">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:globe" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900">Cross-border Transfers</h3>
</div>
</div>

<div className="group relative bg-white p-8 hover:z-10 hover:shadow-lg">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900">Driver-based Transport</h3>
</div>
</div>

<div className="group relative bg-white p-8 hover:z-10 hover:shadow-lg">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:monitor-smartphone" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900">Digital Order Management</h3>
</div>
</div>

<div className="group relative bg-white p-8 hover:z-10 hover:shadow-lg">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#BF1B22]">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="font-medium text-zinc-900">Tracking &amp; Reporting</h3>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-center">

<div className="relative flex-1">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">

<div className="absolute inset-0 grid grid-cols-2">

<div className="relative flex items-center justify-center border-r border-white/20 bg-zinc-800">
<div className="text-center">
<span className="iconify mx-auto text-zinc-500" data-icon="lucide:truck" data-width="48"></span>
<p className="mt-2 text-xs font-medium uppercase tracking-widest text-zinc-400">High Volume</p>
</div>
</div>

<div className="relative flex items-center justify-center bg-[#BF1B22]">
<div className="text-center">
<span className="iconify mx-auto text-white" data-icon="lucide:gem" data-width="48"></span>
<p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/80">Premium Care</p>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm">
<div className="flex justify-between text-xs font-medium text-zinc-900">
<span>Efficiency</span>
<span>Precision</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-zinc-100">
<div className="h-1.5 w-full rounded-full bg-gradient-to-r from-zinc-800 to-[#BF1B22]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">From High-Volume Logistics to Premium Individual Transfers</h2>
<p className="mt-6 text-lg text-zinc-500">Whether you need to move thousands of vehicles or a single premium car, ONLOGIST delivers the same reliability, care, and precision.</p>
<div className="mt-8 space-y-4 border-l border-zinc-200 pl-6">
<div className="flex flex-col">
<span className="text-lg font-medium text-zinc-900">High-volume fleet relocations</span>
<span className="text-sm text-zinc-500">Systematic processes for speed and scale.</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium text-zinc-900">Time-critical executive vehicles</span>
<span className="text-sm text-zinc-500">Guaranteed pickup and delivery windows.</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-medium text-zinc-900">Premium and luxury car handling</span>
<span className="text-sm text-zinc-500">White-glove service for high-value assets.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-900 py-24 text-white">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white mb-6">
                        For Professionals
                    </div>
<h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Drive with ONLOGIST</h2>
<p className="mt-4 text-lg text-zinc-400">Access lucrative vehicle transfer jobs across Europe with full flexibility and digital tools that make your work easier.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#BF1B22]" data-icon="lucide:coins" data-width="20"></span>
<div>
<h4 className="font-medium text-white">Fair payments</h4>
<p className="text-sm text-zinc-500">Transparent and fast payouts.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#BF1B22]" data-icon="lucide:calendar-clock" data-width="20"></span>
<div>
<h4 className="font-medium text-white">Flexible selection</h4>
<p className="text-sm text-zinc-500">Choose when and where you drive.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#BF1B22]" data-icon="lucide:smartphone" data-width="20"></span>
<div>
<h4 className="font-medium text-white">App-based</h4>
<p className="text-sm text-zinc-500">Digital job management.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-[#BF1B22]" data-icon="lucide:shield-check" data-width="20"></span>
<div>
<h4 className="font-medium text-white">Trusted partners</h4>
<p className="text-sm text-zinc-500">Work with top European companies.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-zinc-900 transition hover:bg-zinc-100" href="#">
                            Become a Driver
                        </a>
</div>
</div>

<div className="flex justify-center lg:justify-end">
<div className="relative w-72 rounded-[2rem] border-8 border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
<div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-zinc-800"></div>
<div className="h-[500px] w-full overflow-hidden rounded-xl bg-white">

<div className="bg-[#BF1B22] p-4 pt-12 text-white">
<div className="text-xs opacity-80">Welcome back</div>
<div className="font-medium">Thomas Müller</div>
</div>

<div className="p-4 space-y-4">
<div className="rounded-lg border border-zinc-100 p-3 shadow-sm">
<div className="flex justify-between text-xs text-zinc-500">
<span>Today, 10:00</span>
<span className="font-semibold text-[#BF1B22]">€180</span>
</div>
<div className="mt-2 text-sm font-semibold text-zinc-900">Hamburg → Berlin</div>
<div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:car-front" data-width="12"></span>
                                         Mercedes-Benz C-Class
                                     </div>
<button className="mt-3 w-full rounded bg-zinc-900 py-1.5 text-xs font-medium text-white">Accept Job</button>
</div>
<div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3 opacity-60">
<div className="flex justify-between text-xs text-zinc-500">
<span>Tomorrow, 08:30</span>
<span className="font-semibold text-[#BF1B22]">€210</span>
</div>
<div className="mt-2 text-sm font-semibold text-zinc-900">Munich → Frankfurt</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-white py-24">
<div className="mx-auto max-w-7xl px-6 text-center">
<h2 className="mb-16 text-3xl font-medium tracking-tight text-zinc-900">Trusted by Industry Leaders</h2>
<div className="grid gap-8 md:grid-cols-3">
<div className="flex flex-col items-center">
<div className="mb-6 h-12 w-32 rounded bg-zinc-100"></div>
<blockquote className="text-center text-lg text-zinc-600">"ONLOGIST has revolutionized how we handle fleet logistics. The scalability is unmatched."</blockquote>
<cite className="mt-4 not-italic text-sm font-medium text-zinc-900">– Fleet Manager, Major Leasing Co.</cite>
</div>
<div className="flex flex-col items-center">
<div className="mb-6 h-12 w-32 rounded bg-zinc-100"></div>
<blockquote className="text-center text-lg text-zinc-600">"Reliability was our biggest pain point. With ONLOGIST, transfers happen on time, every time."</blockquote>
<cite className="mt-4 not-italic text-sm font-medium text-zinc-900">– Logistics Director, Auto OEM</cite>
</div>
<div className="flex flex-col items-center">
<div className="mb-6 h-12 w-32 rounded bg-zinc-100"></div>
<blockquote className="text-center text-lg text-zinc-600">"The digital documentation makes audits and tracking incredibly simple for our team."</blockquote>
<cite className="mt-4 not-italic text-sm font-medium text-zinc-900">– Operations Lead, Rental Group</cite>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24">
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">Ready to Move Vehicles Smarter?</h2>
<p className="mt-4 text-lg text-zinc-500">Join the thousands of companies and drivers optimizing vehicle logistics across Europe today.</p>
<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-md bg-[#BF1B22] px-8 py-4 text-base font-medium text-white shadow-sm transition hover:bg-[#99151b] hover:shadow-md" href="#">
                    Get Started as a Company
                </a>
<a className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-8 py-4 text-base font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50" href="#">
                    Join as a Driver
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 border-b border-zinc-100 pb-12 lg:grid-cols-5">
<div className="lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-zinc-900" href="#">ONLOGIST</a>
<p className="mt-4 max-w-xs text-sm text-zinc-500">The leading cloud-based marketplace for vehicle transfers in Europe. Connecting companies with professional drivers.</p>
<div className="mt-6 flex gap-4">
<a className="text-zinc-400 hover:text-zinc-600" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Platform</h4>
<ul className="mt-4 space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-[#BF1B22]" href="#">Marketplace</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Transport Service</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Pricing</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">For Drivers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Company</h4>
<ul className="mt-4 space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-[#BF1B22]" href="#">About Us</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Careers</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Blog</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Support</h4>
<ul className="mt-4 space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-[#BF1B22]" href="#">Help Center</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Contact</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">API Docs</a></li>
<li><a className="hover:text-[#BF1B22]" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col justify-between gap-4 text-xs text-zinc-400 md:flex-row">
<p>© 2023 ONLOGIST GmbH. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
<a className="hover:text-zinc-600" href="#">Imprint</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
