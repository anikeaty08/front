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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center bg-slate-900 text-white" style={{borderRadius: '6px'}}>
<iconify-icon icon="solar:layers-minimalistic-bold" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">BUILDSMORE</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-slate-900 transition-colors" href="#">Projects</a>
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-slate-900 transition-colors" href="#">Process</a>
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-slate-900 transition-colors" href="#">Guarantee</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium hover:text-slate-900 md:block" href="#">Sign In</a>
<a className="group flex items-center gap-2 bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-slate-800" href="#" style={{borderRadius: '6px'}}>
                    Start Project
                    <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-grid">

<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 relative">
<div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

<div className="flex flex-col justify-center">
<div className="mb-8 flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span>Now booking for next month</span>
</div>
<h1 className="text-4xl font-semibold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
                        Precision renovations.<br/>
<span className="text-slate-400">Zero guesswork.</span>
</h1>
<p className="mt-6 max-w-lg text-lg text-slate-500 font-light leading-relaxed">
                        Buildsmore connects you with elite constructors for a seamless renovation experience. Fixed timelines, transparent costs, and a warranty you can trust.
                    </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<div className="relative flex-grow sm:max-w-xs">
<input className="block w-full border border-slate-200 bg-white py-3 pl-4 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-0 transition-all shadow-sm hover:border-slate-300" placeholder="Enter postcode to check availability" style={{borderRadius: '6px'}} type="text"/>
</div>
<button className="inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:translate-y-px active:translate-y-0" style={{borderRadius: '6px'}}>
                            Check Coverage
                        </button>
</div>
<div className="mt-12 flex gap-8 border-t border-slate-200/60 pt-8">
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-900">450+</p>
<p className="text-xs text-slate-500 mt-1">Completed Builds</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-900">10yr</p>
<p className="text-xs text-slate-500 mt-1">Structural Warranty</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-slate-900">100%</p>
<p className="text-xs text-slate-500 mt-1">Fixed Price</p>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -right-8 top-10 h-full w-[1px] bg-slate-100 hidden lg:block"></div>
<div className="absolute -left-8 top-10 h-full w-[1px] bg-slate-100 hidden lg:block"></div>

<div className="relative overflow-hidden bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200" style={{borderRadius: '12px'}}>
<div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wide">COST ESTIMATOR V2.0</span>
</div>
<span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
</div>
<div className="p-6 space-y-8">

<div>
<label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-400">Select Project</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="radio-card hidden" name="project_type" type="radio"/>
<div className="relative flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-all hover:border-slate-300">
<div className="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-600">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Bathroom</span>
<span className="text-[10px] text-slate-400">Avg. 12 days</span>
</div>
<div className="check-icon absolute top-2 right-2 opacity-0 transition-all scale-75 text-slate-900">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
<label className="cursor-pointer">
<input className="radio-card hidden" name="project_type" type="radio"/>
<div className="relative flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-all hover:border-slate-300">
<div className="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-600">
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Kitchen</span>
<span className="text-[10px] text-slate-400">Avg. 18 days</span>
</div>
<div className="check-icon absolute top-2 right-2 opacity-0 transition-all scale-75 text-slate-900">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
</div>
</div>

<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Room Size</label>
<span className="text-xs font-medium text-slate-900">6 m²</span>
</div>
<input max="20" min="2" step="1" type="range" value="6"/>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Material Grade</label>
<span className="text-xs font-medium text-slate-900">Premium</span>
</div>
<input max="3" min="1" step="1" type="range" value="2"/>
<div className="flex justify-between text-[10px] text-slate-400 mt-2">
<span>Basic</span>
<span>Premium</span>
<span>Luxury</span>
</div>
</div>
</div>

<div>
<label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-400">Add-ons</label>
<div className="space-y-2">
<div className="flex items-center justify-between py-2 border-b border-dashed border-slate-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:trash-bin-trash-linear"></iconify-icon>
<span className="text-xs text-slate-600">Demolition &amp; Disposal</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-slate-200 appearance-none cursor-pointer transition-all duration-300 checked:translate-x-full" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-100 cursor-pointer border border-slate-200" htmlFor="toggle"></label>
</input></div>
</div>
<div className="flex items-center justify-between py-2 border-b border-dashed border-slate-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<span className="text-xs text-slate-600">Recessed Lighting</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-slate-200 appearance-none cursor-pointer transition-all duration-300 checked:translate-x-full" name="toggle2" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-100 cursor-pointer border border-slate-200" htmlFor="toggle2"></label>
</input></div>
</div>
</div>
</div>

<div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Estimated Total</span>
<span className="text-lg font-semibold tracking-tight text-slate-900">£5,800</span>
</div>
<div className="mt-3 w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 rounded text-center cursor-pointer transition-colors">
                                    Download Quote PDF
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-100 bg-white py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why Buildsmore is different</h2>
<p className="mt-4 text-sm text-slate-500">We've re-engineered the renovation process to remove the common friction points of traditional construction.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center gap-1" href="#">
                    View our standards
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
<div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded bg-white border border-slate-200 text-slate-900">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Architectural Precision</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Every project starts with digital plans. We don't just "figure it out on site". Precision planning means zero wasted materials.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
<div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded bg-white border border-slate-200 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Total Liability Cover</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Our £5M public liability insurance covers your home from the moment we step through the door until the final sign-off.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
<div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded bg-white border border-slate-200 text-slate-900">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Digital Tracking</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Monitor your build daily via our dashboard. Approve milestones, check photos, and chat with your project manager instantly.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">The Buildsmore Method</h2>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        We don't just connect you to builders; we manage the entire lifecycle of the construction.
                    </p>
<div className="space-y-0 relative">

<div className="absolute left-[19px] top-2 bottom-4 w-px bg-slate-100"></div>
<div className="relative flex gap-6 pb-12">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm">
<iconify-icon icon="solar:document-add-linear" width="18"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-sm font-semibold text-slate-900">Spec &amp; Quote</h4>
<p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-sm">Use our online tools to define your spec. Receive a fixed-price quote within 24 hours guaranteed.</p>
</div>
</div>
<div className="relative flex gap-6 pb-12">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm">
<iconify-icon icon="solar:user-id-linear" width="18"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-sm font-semibold text-slate-900">Match &amp; Schedule</h4>
<p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-sm">We assign a dedicated project manager and the best-suited construction team for your specific needs.</p>
</div>
</div>
<div className="relative flex gap-6">
<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm ring-4 ring-slate-50">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
</div>
<div className="pt-2">
<h4 className="text-sm font-semibold text-slate-900">Build &amp; Warranty</h4>
<p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-sm">Construction begins. Payments are milestone-based. We finish with a 120-point quality check.</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-2xl border border-slate-100 bg-slate-50 p-8 overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 space-y-3">
<div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100 flex items-center gap-3">
<div className="h-8 w-8 rounded bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 bg-slate-100 rounded mb-1"></div>
<div className="h-1.5 w-16 bg-slate-50 rounded"></div>
</div>
</div>
<div className="rounded-lg bg-white p-4 shadow-xl border border-slate-200 flex items-center gap-3 scale-110 relative z-10">
<div className="h-8 w-8 rounded bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:hammer-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Construction Phase</p>
<p className="text-[10px] text-slate-400">Week 2 of 4 • On Track</p>
</div>
</div>
<div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100 flex items-center gap-3 opacity-60">
<div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 bg-slate-100 rounded mb-1"></div>
<div className="h-1.5 w-16 bg-slate-50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-100 py-16">
<div className="mx-auto max-w-7xl px-6 text-center">
<p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Trusted by property developers across the UK</p>
<div className="flex flex-wrap justify-center gap-12 text-slate-300 grayscale opacity-70">

<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon className="text-slate-300" icon="solar:buildings-bold"></iconify-icon> METRO</span>
<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon className="text-slate-300" icon="solar:city-bold"></iconify-icon> URBANSIDE</span>
<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon className="text-slate-300" icon="solar:home-bold"></iconify-icon> HAVEN</span>
<span className="text-lg font-bold tracking-tighter flex items-center gap-1"><iconify-icon className="text-slate-300" icon="solar:shop-bold"></iconify-icon> LOFT.CO</span>
</div>
</div>
</section>

<section className="bg-white pb-24 pt-10">
<div className="mx-auto max-w-5xl px-6">
<div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-16 text-center shadow-2xl shadow-slate-900/20 sm:px-16">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 bg-slate-800 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Build more. Stress less.
                    </h2>
<p className="mx-auto mt-4 max-w-lg text-sm text-slate-400">
                        Join hundreds of homeowners who have upgraded their living space with Buildsmore. Get your fixed-price proposal today.
                    </p>
<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-all hover:bg-slate-50">
                            Start My Project
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800">
                            Book Consultation
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-100 bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-slate-900" icon="solar:layers-minimalistic-bold" width="20"></iconify-icon>
<span className="text-sm font-bold tracking-tighter text-slate-900 uppercase">BUILDSMORE</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                        The modern standard for residential construction and renovation. Data-driven, transparent, and built for you.
                    </p>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Cost Estimator</a></li>
<li><a className="hover:text-slate-900" href="#">Find Trades</a></li>
<li><a className="hover:text-slate-900" href="#">Project Dashboard</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">About Us</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900" href="#">Warranty T&amp;Cs</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400">© 2023 Buildsmore Construction Technologies. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="18"></iconify-icon></a> 
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:earth-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
