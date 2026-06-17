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
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
navy: '#0B1220',
royal: '#2563EB',
emergency: '#F59E0B',
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
      

<div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
<a className="flex flex-1 items-center justify-center gap-2 bg-navy py-4 text-sm font-semibold text-white active:bg-slate-800 transition-colors" href="#quote">
<iconify-icon height="18" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Get Quote
        </a>
<a className="flex flex-1 items-center justify-center gap-2 bg-emergency py-4 text-sm font-bold text-white active:bg-amber-600 transition-colors" href="tel:07700130415">
<iconify-icon height="18" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Call Now
        </a>
</div>

<div className="bg-navy text-white py-2.5 px-4 text-center md:text-left relative z-20 border-b border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-medium">
<div className="flex items-center gap-2 animate-pulse text-emergency font-bold tracking-wide uppercase">
<iconify-icon icon="solar:alarm-linear" width="16"></iconify-icon>
                24/7 Emergency Callouts
            </div>
<div className="hidden md:flex items-center gap-6 text-slate-300">
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon> Gas Safe: 965338</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Edinburgh &amp; Lothians</span>
</div>
<a className="flex items-center gap-1 hover:text-emergency transition-colors" href="tel:07700130415">
<span className="opacity-75">Call Now:</span>
<span className="font-bold text-white">07700 130415</span>
</a>
</div>
</div>

<header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

<a className="text-lg font-bold tracking-tighter text-navy flex items-center gap-2 group" href="#">
<div className="bg-navy text-white p-1 rounded-md group-hover:bg-royal transition-colors">
<iconify-icon icon="solar:waterdrops-bold" width="16"></iconify-icon>
</div>
                PRONTO SERVICES
            </a>

<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="text-navy hover:text-royal transition-colors" href="#">Home</a>
<a className="hover:text-royal transition-colors" href="#services">Services</a>
<a className="hover:text-royal transition-colors" href="#areas">Coverage</a>
<a className="hover:text-royal transition-colors" href="#about">About</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2 text-sm font-medium text-white transition-all hover:bg-royal hover:shadow-lg hover:shadow-royal/20" href="#quote">
                    Get a Quote
                </a>
</div>

<button className="md:hidden text-navy p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
<div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

<div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-emergency mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emergency"></span>
</span>
                Available for dispatch now
            </div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-navy md:text-6xl mb-6">
                Fast, Reliable Plumbing &amp; <br className="hidden md:block"/> Heating in Edinburgh
            </h1>
<p className="mx-auto max-w-2xl text-lg text-slate-500 mb-10 leading-relaxed">
                Your local experts for boiler repairs, emergency leaks, and installations. We get it fixed right the first time.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emergency px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-600 hover:-translate-y-0.5" href="tel:07700130415">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Emergency: 07700 130415
                </a>
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-navy shadow-sm transition-all hover:border-royal/30 hover:text-royal hover:bg-slate-50" href="#quote">
                    Request Quote Online
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-3xl mx-auto border-t border-slate-100 pt-8">
<div className="flex flex-col items-center gap-2">
<div className="text-royal bg-blue-50 p-2 rounded-full">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-navy">Gas Safe (965338)</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="text-royal bg-blue-50 p-2 rounded-full">
<iconify-icon icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-navy">Fully Insured</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="text-royal bg-blue-50 p-2 rounded-full">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-navy">Locally Owned</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="text-emergency bg-amber-50 p-2 rounded-full">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-navy">Rapid Response</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24" id="services">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-navy mb-4">Our Services</h2>
<p className="text-lg text-slate-500">From urgent leaks to full bathroom installs — Pronto Services delivers fast, professional work.</p>
</div>
<a className="text-sm font-semibold text-royal flex items-center gap-1 hover:gap-2 transition-all" href="#quote">
                    Get a price <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-xl border border-amber-200 bg-amber-50/20 p-6 transition-all hover:border-emergency hover:shadow-lg hover:shadow-amber-500/10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-emergency">
<iconify-icon icon="solar:alarm-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Emergency Repairs</h3>
<p className="text-sm text-slate-500 leading-relaxed">24/7 rapid response for leaks, bursts, and urgent breakdown issues.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Boiler Repairs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Expert fault finding to restore your heating and hot water quickly.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Boiler Install</h3>
<p className="text-sm text-slate-500 leading-relaxed">Energy-efficient boiler upgrades supplied and fitted professionally.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Bathrooms</h3>
<p className="text-sm text-slate-500 leading-relaxed">Full bathroom renovations, shower installations and wet rooms.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:wrench-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Plumbing Repairs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fixing taps, toilets, sinks, and general household plumbing.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Leaks &amp; Pipes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tracing hidden leaks and repairing damaged pipework.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:cylinder-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Hot Water</h3>
<p className="text-sm text-slate-500 leading-relaxed">Vented and unvented cylinder repairs and replacements.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-lg hover:shadow-blue-500/5">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-navy group-hover:bg-royal group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-2-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-base font-semibold text-navy">Landlord Safety</h3>
<p className="text-sm text-slate-500 leading-relaxed">CP12 Gas Safety Certificates and annual boiler servicing.</p>
</div>
</div>
</div>
</section>

<section className="bg-navy py-16 text-white">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row items-center justify-between mb-10 border-b border-white/10 pb-8">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Trusted by your neighbors</h3>
<p className="text-slate-400 mt-1">Consistent 5-star service across Edinburgh.</p>
</div>
<div className="flex flex-col items-end mt-4 md:mt-0">
<div className="flex gap-1 text-emergency">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 mt-1">4.9/5 Average Rating</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<div className="flex gap-1 text-emergency mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-4 italic">“John has been excellent while dealing with my boiler. Highly professional and explained everything clearly.”</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-royal/20 flex items-center justify-center text-royal text-xs font-bold">SM</div>
<p className="text-xs font-semibold text-white">Sarah M.</p>
</div>
</div>

<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<div className="flex gap-1 text-emergency mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-4 italic">“Emergency call out — John came very quickly. Diagnosed the leak instantly and fixed it on the spot.”</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-royal/20 flex items-center justify-center text-royal text-xs font-bold">ER</div>
<p className="text-xs font-semibold text-white">Emma R.</p>
</div>
</div>

<div className="bg-white/5 p-6 rounded-xl border border-white/10">
<div className="flex gap-1 text-emergency mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-4 italic">“Done an amazing job both him &amp; his dad great team! Very tidy and polite throughout the install.”</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-royal/20 flex items-center justify-center text-royal text-xs font-bold">DP</div>
<p className="text-xs font-semibold text-white">David P.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-200" id="areas">
<div className="max-w-7xl mx-auto px-4 md:px-6 text-center md:text-left">
<div className="flex flex-col md:flex-row gap-10 items-center justify-between">
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight text-navy mb-4">Areas We Cover</h2>
<p className="text-slate-500 mb-6 max-w-lg">Based in Edinburgh, we cover the city and surrounding Lothians. See our primary service locations below.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Edinburgh
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Livingston
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Falkirk
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Dunfermline
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Bathgate
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Linlithgow
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Queensferry
                        </div>
<div className="flex items-center gap-2 text-sm text-navy bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-royal" icon="solar:map-point-linear"></iconify-icon> Musselburgh
                        </div>
</div>
<div className="flex items-center justify-center md:justify-start gap-4">
<span className="text-sm font-medium text-slate-500">+ Surrounding areas</span>
<button className="text-sm font-semibold text-royal hover:underline decoration-2 underline-offset-4">View full list</button>
</div>
</div>

<div className="w-full md:w-80 shrink-0">
<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-lg">
<div className="flex items-start gap-3 mb-4">
<div className="bg-blue-50 p-2 rounded-full text-royal">
<iconify-icon icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-navy font-semibold text-sm">Not sure if we cover you?</h4>
<p className="text-slate-500 text-xs mt-1">Call us and we’ll confirm instantly.</p>
</div>
</div>
<a className="w-full flex items-center justify-center gap-2 bg-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-royal transition-colors" href="tel:07700130415">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            Call to Confirm
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="quote">
<div className="max-w-xl mx-auto px-4 md:px-6">
<div className="text-center mb-10">
<span className="text-royal font-semibold text-xs tracking-wide uppercase mb-2 block">Free Estimate</span>
<h2 className="text-3xl font-semibold tracking-tight text-navy">Get a quote today</h2>
<p className="text-slate-500 mt-2">Send your details and we’ll respond within 24 hours. <br/>For emergencies, please call <strong className="text-navy">07700 130415</strong>.</p>
</div>
<form className="space-y-4 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-royal to-navy"></div>
<div>
<label className="block text-xs font-semibold text-navy mb-1.5">Full Name</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none ring-offset-0 focus:border-royal focus:ring-1 focus:ring-royal transition-all placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-navy mb-1.5">Phone Number</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none ring-offset-0 focus:border-royal focus:ring-1 focus:ring-royal transition-all placeholder:text-slate-400" placeholder="07700..." type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-navy mb-1.5">Postcode</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none ring-offset-0 focus:border-royal focus:ring-1 focus:ring-royal transition-all placeholder:text-slate-400" placeholder="EH1..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-navy mb-1.5">Service Needed</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none ring-offset-0 focus:border-royal focus:ring-1 focus:ring-royal transition-all text-slate-600">
<option>General Plumbing Repair</option>
<option>Boiler Repair</option>
<option>Boiler Installation</option>
<option>Bathroom Installation</option>
<option>Leak Detection</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-navy mb-1.5">Message / Issue</label>
<textarea className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none ring-offset-0 focus:border-royal focus:ring-1 focus:ring-royal transition-all placeholder:text-slate-400" placeholder="Describe the problem..." rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-navy py-3.5 text-sm font-semibold text-white transition-all hover:bg-royal hover:shadow-lg hover:shadow-royal/20 active:scale-[0.99]" type="button">
                    Get Free Quote
                </button>
</form>
</div>
</section>

<footer className="bg-navy pt-16 pb-24 md:pb-16 text-slate-400">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-sm">
<a className="text-lg font-bold tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-royal" icon="solar:waterdrops-bold"></iconify-icon>
                        PRONTO SERVICES
                    </a>
<p className="text-sm mb-6 leading-relaxed">
                        Professional plumbing and heating services across Edinburgh. 24/7 support when you need it most.
                    </p>
<div className="flex gap-4">
<a className="rounded-full bg-royal text-white px-5 py-2 text-xs font-semibold hover:bg-blue-600 transition-colors" href="tel:07700130415">Call Now</a>
<a className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors" href="#quote">Request Quote</a>
</div>
</div>
<div className="grid grid-cols-2 gap-16 text-sm">
<div>
<h4 className="font-semibold text-white mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#areas">Areas</a></li>
<li><a className="hover:text-white transition-colors" href="#quote">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Company Details</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Gas Safe: 965338</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:file-check-linear"></iconify-icon> Fully Insured</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> 07700 130415</li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Pronto Services. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
