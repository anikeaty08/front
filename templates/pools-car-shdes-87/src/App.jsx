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
      

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 group" href="#quote">
<iconify-icon className="text-3xl" icon="solar:whatsapp-linear"></iconify-icon>
<span className="absolute right-16 bg-white text-slate-800 text-sm font-medium py-1.5 px-3 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">Message Us</span>
</a>

<header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-slate-900 uppercase">POOLS &amp; CAR SHADES</span>
</a>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2" href="tel:#">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    Call Now
                </a>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-colors shadow-sm flex items-center gap-2" href="#quote">
<iconify-icon icon="solar:whatsapp-linear"></iconify-icon>
                    WhatsApp Quote
                </a>
</div>

<button className="md:hidden text-slate-600 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Modern pool with spa and firepit in Johannesburg" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/70"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
<div className="max-w-3xl">
<span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-medium tracking-wide mb-6 uppercase">Johannesburg &amp; Surrounds</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Upgrade Your Home Outside: Pools, Shadeports &amp; Paving.
                </h1>
<p className="text-lg text-slate-200 mb-10 max-w-2xl leading-relaxed">
                    We install shadeports and carports, build and renovate swimming pools, and do professional paving across Johannesburg. Clean work, honest pricing, and fast quotes.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20" href="#quote">
<iconify-icon className="text-xl" icon="solar:whatsapp-linear"></iconify-icon>
                        WhatsApp Us for a Quote
                    </a>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base font-medium py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#quote">
                        Request a Free Quote
                    </a>
</div>

<div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-slate-300 font-medium">
<div className="flex items-center gap-1.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Free quote</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> On-site measurement</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Quality materials</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Neat workmanship</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Johannesburg &amp; surrounds</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Services in Johannesburg</h2>
<p className="text-base text-slate-600">Premium builds and installations to upgrade your outdoor space. Done properly, every time.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="h-64 overflow-hidden relative">
<img alt="Modern shadeport and carport structures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Carports &amp; Shadeports</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Single, double, and custom sizes
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Strong steel frame + durable cover options
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Protection from sun, hail, and weather
                            </li>
</ul>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#gallery">
                            View Gallery <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="h-64 overflow-hidden relative">
<img alt="Swimming pool builders and renovations Johannesburg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:water-drop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Swimming Pools</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                New pools from scratch
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Renovations and repairs
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Modern finishes and clean edges
                            </li>
</ul>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#gallery">
                            View Gallery <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
<div className="h-64 overflow-hidden relative">
<img alt="Driveway and patio paving under carport" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Paving</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Driveways, patios, walkways, pool surrounds
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Solid base prep + neat edging
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Clean job site after we finish
                            </li>
</ul>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#gallery">
                            View Gallery <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 px-6 rounded-full transition-colors" href="#quote">
                    Request a Custom Quote
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Why Homeowners in Johannesburg Trust Us.</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        We know dealing with contractors can be stressful. We focus on doing exactly what we promised, turning up on time, and leaving your property neat.
                    </p>
<a className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3 px-6 rounded-full transition-colors" href="#quote">
<iconify-icon icon="solar:whatsapp-linear"></iconify-icon> Get a WhatsApp Quote
                    </a>
</div>
<div className="grid sm:grid-cols-2 gap-y-8 gap-x-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Fast response on WhatsApp</h4>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Clear communication</h4>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Strong, lasting builds</h4>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:broom-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Neat finish and tidy site</h4>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Fair quotes, no surprises</h4>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Local Johannesburg team</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How It Works</h2>
<p className="text-base text-slate-600">A simple, stress-free process from first message to final handover.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<div className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-full mb-3">Step 1</div>
<h3 className="text-lg font-semibold text-slate-900">Message us on WhatsApp</h3>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:ruler-linear"></iconify-icon>
</div>
<div className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-full mb-3">Step 2</div>
<h3 className="text-lg font-semibold text-slate-900">We come measure and discuss options</h3>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-full mb-3">Step 3</div>
<h3 className="text-lg font-semibold text-slate-900">You get a clear quote</h3>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-3xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-full mb-3">Step 4</div>
<h3 className="text-lg font-semibold text-slate-900">We build, install, and hand over clean</h3>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3.5 px-8 rounded-full transition-colors shadow-md" href="#quote">
                    Start Step 1 Now
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Recent Projects</h2>
<p className="text-base text-slate-600">Take a look at some of the pools, car shades, and paving jobs we've completed in Johannesburg.</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="gallery-filter-active px-5 py-2 rounded-full border text-sm font-medium transition-colors">All</button>
<button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 bg-white text-sm font-medium transition-colors">Pools</button>
<button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 bg-white text-sm font-medium transition-colors">Car Shades</button>
<button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 bg-white text-sm font-medium transition-colors">Paving</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Clean rectangle pool with raised spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Modern flat-roof carport" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Paving driveway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group md:col-span-2">
<img alt="Pool with stone waterfall wall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Shade sail over patio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Paving blocks under structure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Pool renovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Long parking shade structure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Happy Clients Across Joburg</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed">"Got a double shadeport installed. The team was quick to quote on WhatsApp, arrived on time, and the structure is very solid. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold">M</div>
<div>
<p className="text-sm font-semibold text-slate-900">Mark D.</p>
<p className="text-xs text-slate-500">Sandton</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed">"They completely renovated our old pool and repaved the surround. Site was kept surprisingly clean and the final result is beautiful."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold">S</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah P.</p>
<p className="text-xs text-slate-500">Randburg</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 leading-relaxed">"Excellent paving job for our driveway. Honest pricing, no hidden costs. The neat edging makes a huge difference."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold">J</div>
<div>
<p className="text-sm font-semibold text-slate-900">Jaco V.</p>
<p className="text-xs text-slate-500">Roodepoort</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="quote">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl overflow-hidden shadow-xl lg:flex">

<div className="lg:w-5/12 p-10 lg:p-16 bg-blue-600 text-white flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Get a Free Quote in Johannesburg</h2>
<p className="text-blue-100 text-base mb-8 leading-relaxed">
                            Fill out the form to get started. We cover Sandton, Randburg, Roodepoort, Fourways, Midrand, and surrounds.
                        </p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-blue-300" icon="solar:phone-linear"></iconify-icon>
<div>
<p className="text-xs text-blue-200 font-medium uppercase tracking-wider mb-1">Call Us</p>
<p className="text-lg font-medium">011 000 0000</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-blue-300" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-xs text-blue-200 font-medium uppercase tracking-wider mb-1">Service Area</p>
<p className="text-base font-medium">Johannesburg &amp; surrounds</p>
</div>
</div>
</div>
</div>
<div className="bg-blue-700/50 p-6 rounded-2xl border border-blue-500/30">
<p className="text-sm font-medium mb-3">Prefer WhatsApp? Tap here for a quick quote.</p>
<a className="inline-flex items-center justify-center w-full gap-2 bg-green-500 hover:bg-green-600 text-white text-base font-medium py-3 rounded-xl transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:whatsapp-linear"></iconify-icon> WhatsApp Us Now
                        </a>
</div>
</div>

<div className="lg:w-7/12 p-10 lg:p-16 bg-white">
<form action="#" className="space-y-6" method="POST">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Your Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" id="phone" placeholder="082 000 0000" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="suburb">Suburb</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" id="suburb" placeholder="e.g. Randburg" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="service">Service Needed</label>
<div className="relative select-wrapper">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors cursor-pointer" id="service">
<option disabled="" selected="" value="">Select a service</option>
<option value="carshade">Car Shade / Carport</option>
<option value="pool">Swimming Pool</option>
<option value="paving">Paving</option>
<option value="multiple">Multiple Services</option>
</select>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors resize-none" id="message" placeholder="Tell us roughly what you need..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-base font-medium py-4 rounded-xl transition-colors" type="submit">
                            Send My Quote Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="bg-white border border-slate-200 rounded-2xl p-6">
<h3 className="text-base font-semibold text-slate-900 mb-2">Do you do custom sizes?</h3>
<p className="text-sm text-slate-600 leading-relaxed">Yes, whether it's an odd-shaped driveway for paving, a specific size shadeport, or a custom pool layout, we measure and build to fit your exact space.</p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6">
<h3 className="text-base font-semibold text-slate-900 mb-2">How long does installation take?</h3>
<p className="text-sm text-slate-600 leading-relaxed">Carports and shadeports typically take 1-2 days to install depending on the size. Pool renovations and new builds vary significantly based on scope. We will give you a clear timeline with your quote.</p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6">
<h3 className="text-base font-semibold text-slate-900 mb-2">Do you offer free quotes?</h3>
<p className="text-sm text-slate-600 leading-relaxed">Yes, all our initial quotes and on-site measurements are completely free and carry no obligation.</p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6">
<h3 className="text-base font-semibold text-slate-900 mb-2">Which areas do you cover?</h3>
<p className="text-sm text-slate-600 leading-relaxed">We cover the greater Johannesburg area, including Sandton, Randburg, Roodepoort, Fourways, Midrand, and surrounding suburbs.</p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6">
<h3 className="text-base font-semibold text-slate-900 mb-2">Do you do renovations and repairs?</h3>
<p className="text-sm text-slate-600 leading-relaxed">Absolutely. We specialize in swimming pool renovations and repairs, as well as fixing or recovering existing shadeports.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12 lg:gap-8 mb-12">

<div>
<span className="text-xl font-semibold tracking-tighter text-white uppercase block mb-4">POOLS &amp; CAR SHADES</span>
<p className="text-sm mb-6 max-w-xs">Upgrading outdoor spaces across Johannesburg with premium pools, durable shadeports, and expert paving.</p>
<p className="text-sm font-medium text-blue-400">Quality builds. Neat finish. Fast quotes.</p>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Contact Info</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 011 000 0000
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear"></iconify-icon> 082 000 0000
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> quotes@poolsandcarshades.co.za
                        </li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Service Details</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon> Johannesburg &amp; surrounds
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon> Mon - Fri: 08:00 - 17:00
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg text-transparent" icon="solar:clock-circle-linear"></iconify-icon> Sat: 08:00 - 13:00
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>© 2023 Pools and Car Shades Johannesburg. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
