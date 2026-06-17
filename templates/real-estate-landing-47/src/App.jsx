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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="PeakNova" className="w-auto h-10 object-contain" src="https://peaknova.instawp.site/wp-content/uploads/2026/02/Logo-Regular.svg"/>
</a>
<div className="hidden md:flex items-center gap-8">

<div className="relative group py-8 -my-8 flex items-center">
<button className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">
                        Estates
                        <iconify-icon className="text-sm transition-transform duration-300 group-hover:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 w-[640px] z-50">
<div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-zinc-200/80 shadow-2xl p-3">
<div className="grid grid-cols-2 gap-2">

<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50/80 transition-colors group/item" href="#estates">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-zinc-100 border border-zinc-100">
<img alt="The Sovereign Reserve" className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col pt-0.5">
<span className="text-sm font-medium text-zinc-900 mb-1">The Sovereign Reserve</span>
<span className="text-xs text-zinc-500 leading-relaxed">Ultra-luxury residential enclave with private lake access.</span>
</div>
</a>

<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50/80 transition-colors group/item" href="#estates">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-zinc-100 border border-zinc-100">
<img alt="Nova Meadows" className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=2960&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col pt-0.5">
<span className="text-sm font-medium text-zinc-900 mb-1">Nova Meadows</span>
<span className="text-xs text-zinc-500 leading-relaxed">Perfect blend of nature and modern smart infrastructure.</span>
</div>
</a>

<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50/80 transition-colors group/item" href="#estates">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-zinc-100 border border-zinc-100">
<img alt="Ascent Heights" className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col pt-0.5">
<span className="text-sm font-medium text-zinc-900 mb-1">Ascent Heights</span>
<span className="text-xs text-zinc-500 leading-relaxed">Elevated topography offering panoramic corridor views.</span>
</div>
</a>

<a className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-50/80 transition-colors group/item" href="#register">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-zinc-100 border border-zinc-100 relative">
<div className="absolute inset-0 bg-zinc-900/20 z-10"></div>
<img alt="Horizon Phase 2" className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col pt-0.5">
<span className="text-sm font-medium text-zinc-900 mb-1 flex items-center gap-2">
                                            Horizon Phase 2
                                            <span className="px-1.5 py-0.5 rounded-md bg-zinc-100 text-xs font-medium text-zinc-600 tracking-tight">Waitlist</span>
</span>
<span className="text-xs text-zinc-500 leading-relaxed">Exclusive pre-launch access to our upcoming commercial hub.</span>
</div>
</a>
</div>

<div className="mt-2 pt-3 border-t border-zinc-100/80 px-4 pb-2 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    Phase 2 allocations now open
                                </div>
<a className="text-xs font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition-colors group/link" href="#estates">
                                    View full portfolio 
                                    <iconify-icon className="transition-transform group-hover/link:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#investment">Investment</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#team">Team</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-colors rounded-full bg-zinc-900 text-white hover:bg-zinc-800" href="#register">
                    Register Interest
                </a>
<button className="md:hidden text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-900">

<img alt="Premium Estate" className="absolute inset-0 w-full h-full object-cover opacity-50 select-none pointer-events-none" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2938&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center 60%'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center h-full pt-20 pb-32">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium text-zinc-200 tracking-wide uppercase">Phase 2 Now Selling</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-tight mb-6">
                    Secure your legacy in prime gated estates.
                </h1>
<p className="text-lg md:text-xl text-zinc-300 font-light mb-10 max-w-2xl leading-relaxed">
                    PeakNova curates exclusive land parcels within fully serviced, high-security communities. Built for discerning investors and future homeowners.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2" href="#register">
                        View Availability
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-white border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center" href="#estates">
                        Explore Portfolio
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full z-20">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-4 text-white/70">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white tracking-tight">01</span>
<div className="w-24 h-px bg-white/20 relative">
<div className="absolute top-0 left-0 h-full w-1/3 bg-white"></div>
</div>
<span className="text-sm font-medium text-white/50 tracking-tight">03</span>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">The PeakNova Standard.</h2>
<p className="text-base text-zinc-500 leading-relaxed">
                        We specialize exclusively in premium land acquisitions within planned developments. Every plot we list undergoes rigorous legal verification and infrastructure planning.
                    </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
<div className="group cursor-default">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Verified Titles</h3>
<p className="text-sm text-zinc-500 leading-relaxed">All properties possess verifiable documentation (C of O, Governor's Consent), ensuring zero encumbrances for your investment.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Prime Locations</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Strategically selected corridors with projected high appreciation rates, positioned in the path of rapid urban development.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Infrastructure Guarantee</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Estates feature paved roads, central sewage, perimeter fencing, and reliable power distribution networks.</p>
</div>
<div className="group cursor-default">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Gated Security</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Controlled access points, 24/7 surveillance, and uniformed personnel ensure absolute peace of mind.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200/50" id="estates">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Exclusive Enclaves.</h2>
<p className="text-base text-zinc-500 leading-relaxed">
                        Discover our current portfolio of premium estate lands available for acquisition.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors group" href="#">
                    View full portfolio
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="#register">
<div className="relative h-64 overflow-hidden bg-zinc-100">
<img alt="Estate Land" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-medium text-zinc-900 tracking-tight">Phase 1</span>
<span className="px-2.5 py-1 rounded-md bg-emerald-500/90 backdrop-blur-md text-xs font-medium text-white tracking-tight">Selling Fast</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">The Sovereign Reserve</h3>
<p className="text-sm text-zinc-500 mb-6">A prestigious enclave designed for ultra-luxury residential development. Features private lake access.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:ruler-angular-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">600 SQM</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">C of O</span>
</div>
<div className="flex items-center gap-2 col-span-2">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Victoria Island Extension</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Starting from</span>
<span className="text-lg font-medium tracking-tight text-zinc-900">Custom Pricing</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="#register">
<div className="relative h-64 overflow-hidden bg-zinc-100">
<img alt="Estate Land" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=2960&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-medium text-zinc-900 tracking-tight">Phase 3</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Nova Meadows</h3>
<p className="text-sm text-zinc-500 mb-6">Perfect blend of nature and modern infrastructure. Ideal for family homes and long-term land banking.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:ruler-angular-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">500 SQM</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Gov. Consent</span>
</div>
<div className="flex items-center gap-2 col-span-2">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Lekki Free Trade Zone</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Starting from</span>
<span className="text-lg font-medium tracking-tight text-zinc-900">Contact Sales</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500" href="#register">
<div className="relative h-64 overflow-hidden bg-zinc-100">
<img alt="Estate Land" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-medium text-zinc-900 tracking-tight">Pre-Launch</span>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Ascent Heights</h3>
<p className="text-sm text-zinc-500 mb-6">Elevated topography offering panoramic views. Highly anticipated smart-estate integration.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:ruler-angular-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">800 SQM</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">In Process</span>
</div>
<div className="flex items-center gap-2 col-span-2">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Epe Corridor</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Waitlist Deposit</span>
<span className="text-lg font-medium tracking-tight text-zinc-900">Enquire Now</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-t border-zinc-200/50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Seamless Acquisition.</h2>
<p className="text-base text-zinc-500 leading-relaxed">A transparent, fully documented procedure designed to secure your asset with absolute clarity and zero friction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">

<div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-zinc-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium text-sm flex items-center justify-center mb-6 shadow-sm">01</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Consultation</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">Speak with our investment advisors to align your portfolio goals with our available estate options.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium text-sm flex items-center justify-center mb-6 shadow-sm">02</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Site Inspection</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">Schedule a physical or comprehensive virtual tour of the estate layout and ongoing infrastructure.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium text-sm flex items-center justify-center mb-6 shadow-sm">03</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Documentation</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">Review the Contract of Sale and verify the registered global title with your legal representatives.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-900 text-white font-medium text-sm flex items-center justify-center mb-6 shadow-sm">04</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Allocation</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">Upon payment clearance, receive your physical plot allocation, Deed of Assignment, and Survey Plan.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-900 text-white relative overflow-hidden" id="investment">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="flex flex-col items-center md:items-start pt-8 md:pt-0 first:pt-0 px-0 md:px-8 first:pl-0">
<span className="text-5xl lg:text-6xl font-medium tracking-tight mb-2">12+</span>
<span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Premium Estates</span>
<p className="text-sm text-zinc-500 mt-4 text-center md:text-left">Successfully launched and actively managed communities across primary growth corridors.</p>
</div>
<div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8">
<span className="text-5xl lg:text-6xl font-medium tracking-tight mb-2">45%</span>
<span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Avg. Annual Yield</span>
<p className="text-sm text-zinc-500 mt-4 text-center md:text-left">Conservative capital appreciation rate for early-phase investors in our flagship developments.</p>
</div>
<div className="flex flex-col items-center md:items-start pt-8 md:pt-0 px-0 md:px-8">
<span className="text-5xl lg:text-6xl font-medium tracking-tight mb-2">100%</span>
<span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Title Security</span>
<p className="text-sm text-zinc-500 mt-4 text-center md:text-left">Every square meter is backed by government-approved, universally verifiable documentation.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-50 border-zinc-200/50 border-t pt-24 pb-24" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Leadership.</h2>
<p className="text-base text-zinc-500 leading-relaxed">
                        Guided by industry veterans with decades of combined experience in premium real estate acquisition, strategic development, and high-yield portfolio management.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col cursor-default">
<div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-zinc-200">
<img alt="Marcus Thorne" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">Marcus Thorne</h3>
<p className="text-sm text-zinc-500 mb-4">Founder &amp; Chief Executive</p>
<div className="flex items-center gap-3 mt-auto">
<a className="flex items-center justify-center hover:text-zinc-900 hover:border-zinc-300 transition-colors text-zinc-400 w-8 h-8 border-zinc-200 border rounded-full" href="#"><iconify-icon className="text-sm" icon="solar:briefcase-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div className="group flex flex-col cursor-default">
<div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-zinc-200">
<img alt="Elena Rostova" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2788&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">Elena Rostova</h3>
<p className="text-sm text-zinc-500 mb-4">Head of Investments</p>
<div className="flex items-center gap-3 mt-auto">
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:briefcase-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div className="group flex flex-col cursor-default">
<div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-zinc-200">
<img alt="David Chen" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">David Chen</h3>
<p className="text-sm text-zinc-500 mb-4">Lead Architect &amp; Planning</p>
<div className="flex items-center gap-3 mt-auto">
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:briefcase-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div className="group flex flex-col cursor-default">
<div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-zinc-200">
<img alt="Sarah Jenkins" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=2861&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">Sarah Jenkins</h3>
<p className="text-sm text-zinc-500 mb-4">Director of Client Relations</p>
<div className="flex items-center gap-3 mt-auto">
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:briefcase-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-t border-zinc-200/50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Common inquiries.</h2>
<p className="text-base text-zinc-500 leading-relaxed">Everything you need to know about investing with PeakNova.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-base text-zinc-900 select-none">
                        What legal documents do I receive after payment?
                        <span className="ml-4 w-6 h-6 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                        Upon completion of your payment (including statutory fees), you are issued a Receipt of Payment, an executed Contract of Sales, a Deed of Assignment, and a Registered Survey Plan showing the exact coordinates of your allocated plot.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-base text-zinc-900 select-none">
                        Are there hidden charges or developmental fees?
                        <span className="ml-4 w-6 h-6 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                        We maintain absolute transparency. Alongside the land cost, clients are required to pay a one-time Statutory Fee which covers the Registered Survey, Deed of Assignment, and the Estate Development Levy (infrastructure). All fees are clearly outlined in your initial offer letter.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-base text-zinc-900 select-none">
                        Can I pay in installments?
                        <span className="ml-4 w-6 h-6 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                        Yes, we offer flexible payment plans spanning 3, 6, and 12 months for select estates. Please note that installment plans may incur a slight administrative premium compared to outright purchases. Physical allocation occurs after full payment.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-base text-zinc-900 select-none">
                        When can I start building on my plot?
                        <span className="ml-4 w-6 h-6 flex items-center justify-center text-zinc-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed">
                        You can commence construction immediately after you receive physical allocation of your plot, provided you have paid all statutory fees and your architectural designs conform to the estate's approved building guidelines.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-t border-zinc-200/50" id="register">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-zinc-900 rounded-[2rem] overflow-hidden relative border border-zinc-800 shadow-2xl">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
<div className="p-10 md:p-16 flex flex-col justify-center">
<span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 w-fit mb-6 tracking-wide">Client Relations</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">Request an inspection or brochure.</h2>
<p className="text-zinc-400 text-base leading-relaxed mb-10">
                            Our investment advisors are ready to guide you through property selection, site tours, and acquisition procedures. Join our priority list.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
<iconify-icon className="text-zinc-300" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Direct Line</span>
<span className="text-sm font-medium text-zinc-200">+1 (800) PEAK-NOVA</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
<iconify-icon className="text-zinc-300" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Email Inquiries</span>
<span className="text-sm font-medium text-zinc-200">invest@peaknova.com</span>
</div>
</div>
</div>
</div>
<div className="bg-zinc-950/50 p-10 md:p-16 border-l border-white/5">
<form className="flex flex-col gap-5">
<div className="flex flex-col sm:flex-row gap-5">
<div className="flex flex-col gap-1.5 w-full">
<label className="text-xs font-medium text-zinc-400" htmlFor="firstName">First Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800/50 transition-colors" id="firstName" placeholder="John" type="text"/>
</div>
<div className="flex flex-col gap-1.5 w-full">
<label className="text-xs font-medium text-zinc-400" htmlFor="lastName">Last Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800/50 transition-colors" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="email">Work Email</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800/50 transition-colors" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="phone">Phone Number</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800/50 transition-colors" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="interest">Estate of Interest</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800/50 transition-colors cursor-pointer" id="interest">
<option className="text-zinc-600" disabled="" selected="" value="">Select an estate...</option>
<option value="sovereign">The Sovereign Reserve</option>
<option value="nova">Nova Meadows</option>
<option value="ascent">Ascent Heights (Waitlist)</option>
<option value="general">General Inquiry</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="mt-4 w-full bg-white text-zinc-900 rounded-xl px-4 py-3.5 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                                Submit Request
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-zinc-500 text-center mt-2">By submitting, you agree to our privacy policy regarding data usage.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200/50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<img alt="PeakNova" className="w-auto h-10 object-contain" src="https://peaknova.instawp.site/wp-content/uploads/2026/02/Logo-Regular.svg"/>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Curating Africa's finest real estate investments. Corporate land acquisition, secure titles, and premium gated communities.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-6">Estates</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">The Sovereign Reserve</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Nova Meadows</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Ascent Heights</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Future Developments</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4">
<li className=""><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#team">Our Team</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#process">Acquisition Process</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#investment">Investment ROI</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Verification Process</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2024 PeakNova Real Estate Limited. All rights reserved.</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
