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
      

<header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-zinc-900 leading-none">NORTH SIDE</span>
<span className="text-xs font-medium tracking-widest text-cyan-600 uppercase">Air Conditioning</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#reviews">Reviews</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end mr-4">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Emergency Service</span>
<a className="text-base font-semibold tracking-tight text-zinc-900 hover:text-cyan-600 transition-colors" href="tel:9567257428">(956) 725-7428</a>
</div>
<a className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2" href="#contact">
                    Book Online
                </a>
<button className="md:hidden flex items-center text-zinc-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/50 via-zinc-50 to-zinc-50"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 mb-6">
<span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                            Same-Day Service in Laredo
                        </div>
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl mb-6">
                            Fast &amp; Reliable <span className="text-cyan-600">AC Repair</span> in Laredo, TX.
                        </h1>
<p className="text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
                            Beat the extreme Texas heat. We provide prompt, honest, and professional residential and commercial HVAC services to keep you comfortable year-round.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-rose-500 px-6 text-base font-medium text-white transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 shadow-sm shadow-rose-500/20" href="tel:9567257428">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                                Call (956) 725-7428
                            </a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white border border-zinc-200 px-6 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-50 hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 shadow-sm" href="#contact">
<iconify-icon className="text-zinc-500" icon="solar:calendar-linear" width="20"></iconify-icon>
                                Schedule Service
                            </a>
</div>
<div className="mt-10 flex items-center gap-6 border-t border-zinc-200 pt-6">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-zinc-200 border-2 border-white"></div>
<div className="h-8 w-8 rounded-full bg-zinc-300 border-2 border-white"></div>
<div className="h-8 w-8 rounded-full bg-zinc-400 border-2 border-white"></div>
</div>
<div className="text-sm">
<div className="flex text-rose-400 gap-0.5 mb-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-medium text-zinc-900">5.0</span> <span className="text-zinc-500">from 100+ Laredo Locals</span>
</div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-transparent rounded-full blur-3xl opacity-50"></div>
<div className="relative mx-auto w-full max-w-md">
<div className="rounded-3xl border border-zinc-200/50 bg-white/60 backdrop-blur-xl p-8 shadow-2xl shadow-zinc-200/50">
<div className="flex items-center justify-between mb-8">
<span className="text-sm font-medium text-zinc-500">System Status</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-600">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-600"></span>
                                        Cooling Active
                                    </span>
</div>

<div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border-[12px] border-zinc-50 bg-white shadow-inner">
<div className="absolute inset-0 rounded-full border-[12px] border-cyan-500" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'}}></div>
<div className="text-center">
<div className="text-6xl font-semibold tracking-tighter text-zinc-900">72°</div>
<div className="text-sm font-medium text-zinc-400 mt-1">Indoor Temp</div>
</div>

<div className="absolute top-[10%] right-[15%] h-4 w-4 rounded-full bg-white shadow border border-zinc-200"></div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl bg-zinc-50 p-4 border border-zinc-100">
<iconify-icon className="text-cyan-500 mb-2" icon="solar:wind-linear" width="24"></iconify-icon>
<div className="text-sm font-medium text-zinc-900">Fan Speed</div>
<div className="text-xs text-zinc-500">Auto</div>
</div>
<div className="rounded-xl bg-zinc-50 p-4 border border-zinc-100">
<iconify-icon className="text-cyan-500 mb-2" icon="solar:droplets-linear" width="24"></iconify-icon>
<div className="text-sm font-medium text-zinc-900">Humidity</div>
<div className="text-xs text-zinc-500">45%</div>
</div>
</div>
</div>

<div className="absolute -right-6 -bottom-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Fast Response</div>
<div className="text-xs text-zinc-500">Usually within 2 hours</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-zinc-200 bg-white py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-600" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-600" icon="solar:verified-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Experienced Techs</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-600" icon="solar:tag-price-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Upfront Pricing</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-600" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Local to Laredo</span>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-32" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl mb-4">Complete HVAC Services</h2>
<p className="text-base text-zinc-600">From emergency AC repairs to full system installations, our team handles all your residential and light commercial comfort needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-900/5">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wrench-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">AC Repair</h3>
<p className="text-sm text-zinc-600 mb-4">Fast diagnostics and repair for all major brands. Don't suffer in the heat when your unit breaks down.</p>
<a className="text-sm font-medium text-cyan-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Book Repair <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-900/5">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">AC Installation</h3>
<p className="text-sm text-zinc-600 mb-4">Energy-efficient system replacements and new installations tailored to your property's needs.</p>
<a className="text-sm font-medium text-cyan-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-rose-200 hover:shadow-lg hover:shadow-rose-900/5">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Heating Services</h3>
<p className="text-sm text-zinc-600 mb-4">Texas winters can be unpredictable. We offer furnace and heat pump repairs and maintenance.</p>
<a className="text-sm font-medium text-rose-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Schedule Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Maintenance</h3>
<p className="text-sm text-zinc-600 mb-4">Preventative tune-ups to extend your system's lifespan, lower energy bills, and prevent breakdowns.</p>
<a className="text-sm font-medium text-emerald-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            View Plans <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 text-center">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-zinc-900 to-zinc-900"></div>
<h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        AC not working in the Texas heat?
                    </h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
                        Don't sweat it out. Our emergency technicians are ready to restore your comfort today.
                    </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-rose-500 px-8 text-base font-medium text-white transition-colors hover:bg-rose-600" href="tel:9567257428">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                            Call (956) 725-7428
                        </a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-2 block">About Us</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl mb-6">
                            Laredo's Trusted Local HVAC Experts
                        </h2>
<div className="space-y-4 text-base text-zinc-600">
<p>Located right here in Laredo at 1401 Guatemozin St, North Side Air Conditioning understands exactly what South Texas weather demands from an HVAC system.</p>
<p>We believe in treating our customers like neighbors. That means showing up on time, diagnosing the problem honestly, and providing transparent pricing before any work begins. Whether it's a minor repair or a complex commercial installation, we bring the same level of dedication and expertise.</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="border-l-2 border-cyan-500 pl-4">
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">100%</div>
<div className="text-sm text-zinc-500 mt-1">Satisfaction Focus</div>
</div>
<div className="border-l-2 border-rose-500 pl-4">
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">24/7</div>
<div className="text-sm text-zinc-500 mt-1">Emergency Support</div>
</div>
</div>
</div>

<div className="relative rounded-3xl bg-zinc-50 border border-zinc-200 p-8 aspect-square lg:aspect-auto lg:h-full flex flex-col items-center justify-center text-center overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 flex flex-col items-center">
<div className="h-16 w-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-cyan-200">
<iconify-icon icon="solar:map-point-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-2">Proudly Serving</h3>
<p className="text-zinc-600 font-medium text-lg">Laredo, TX &amp; Surrounding Areas</p>
<div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-500 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                Dispatching now in 78040
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" id="reviews">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl mb-4">Don't just take our word for it</h2>
<p className="text-base text-zinc-600">See what your neighbors are saying about our service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-sm">
<div className="flex text-rose-400 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm leading-relaxed mb-6">"My AC went out on a 105-degree day. Called North Side and they had a tech out within hours. Very professional, found the issue fast, and the price was fair. Lifesavers!"</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium">M</div>
<div>
<div className="text-sm font-medium text-zinc-900">Michael T.</div>
<div className="text-xs text-zinc-500">Laredo Homeowner</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-sm">
<div className="flex text-rose-400 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm leading-relaxed mb-6">"We've used them for our small business and our home. They handle the maintenance beautifully and are always honest about whether to repair or replace."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium">S</div>
<div>
<div className="text-sm font-medium text-zinc-900">Sarah J.</div>
<div className="text-xs text-zinc-500">Local Business Owner</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-zinc-200 p-8 shadow-sm">
<div className="flex text-rose-400 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm leading-relaxed mb-6">"The installation crew was incredibly clean and respectful of our property. The new unit works perfectly and cools down the house way faster than the old one."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium">D</div>
<div>
<div className="text-sm font-medium text-zinc-900">David R.</div>
<div className="text-xs text-zinc-500">Laredo, TX</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-zinc-200">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50">
<h3 className="text-base font-medium text-zinc-900 mb-2">Do you offer emergency AC repair?</h3>
<p className="text-sm text-zinc-600">Yes, we understand that an AC breakdown in Laredo can be an emergency. We offer fast response times to get your system running again quickly.</p>
</div>

<div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50">
<h3 className="text-base font-medium text-zinc-900 mb-2">How often should I service my HVAC system?</h3>
<p className="text-sm text-zinc-600">We recommend preventative maintenance twice a year—once in the spring before the heavy cooling season, and once in the fall for heating.</p>
</div>

<div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50">
<h3 className="text-base font-medium text-zinc-900 mb-2">Do you work on both residential and commercial systems?</h3>
<p className="text-sm text-zinc-600">Yes, we provide comprehensive HVAC services for homeowners and light commercial businesses throughout the Laredo area.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-900 text-white pt-20 pb-10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">Ready to get comfortable?</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-cyan-400">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-400 mb-1">Call Us (24/7 Available)</div>
<a className="text-xl font-medium hover:text-cyan-400 transition-colors" href="tel:9567257428">(956) 725-7428</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-cyan-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-400 mb-1">Location</div>
<address className="text-base font-medium not-italic">
                                    1401 Guatemozin St<br/>
                                    Laredo, TX 78040
                                </address>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-cyan-400">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-400 mb-1">Hours</div>
<div className="text-base font-medium">
                                    Mon-Fri: 8:00 AM - 6:00 PM<br/>
<span className="text-rose-400 text-sm">Emergency Service Available</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white p-8">
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-6">Request Service Online</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20" id="phone" placeholder="(956) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Service Needed</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20">
<option>AC Repair</option>
<option>AC Installation/Replacement</option>
<option>Heating Service</option>
<option>Maintenance</option>
<option>Emergency Service</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="message">How can we help?</label>
<textarea className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20" id="message" placeholder="Describe your issue..." rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-cyan-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-800 pt-8 text-sm text-zinc-500">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
<span className="font-medium tracking-tight text-zinc-300">NORTH SIDE Air Conditioning</span>
</div>
<p>© 2023 North Side Air Conditioning. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
