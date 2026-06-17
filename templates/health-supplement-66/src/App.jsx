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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<iconify-icon className="text-xl text-emerald-600" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                VITALFORM
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#products">Products</a>
<a className="hover:text-zinc-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-zinc-900 transition-colors" href="#benefits">Benefits</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-block text-sm text-zinc-600 hover:text-zinc-900 transition-colors" href="#contact">Log in</a>
<a className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#contact">
                    Request Info
                </a>
</div>
</div>
</nav>
<main className="pt-16">

<section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Now accepting new enterprise partners
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 max-w-4xl leading-tight">
                Premium white-label supplements, formulated for scale.
            </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">
                We handle R&amp;D, compliance, manufacturing, and fulfillment so you can focus on building your brand. The complete infrastructure for modern health brands.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-emerald-600 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Start Manufacturing
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="bg-white text-zinc-900 border border-zinc-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-colors flex items-center justify-center" href="#products">
                    Explore Catalog
                </a>
</div>
</section>

<section className="bg-zinc-50 py-24 border-y border-zinc-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">From concept to delivery in 3 steps</h2>
<p className="mt-4 text-base text-zinc-500">Our streamlined process reduces time-to-market by up to 40% compared to traditional manufacturers.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:flask-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">1. Formulate</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Choose from our catalog of proven, clinically-dosed formulas or work with our biochemists to create a custom blend unique to your brand.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">2. Manufacture</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Production begins in our cGMP-certified, FDA-registered facility. We handle all QA/QC testing, bottling, and label application.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">3. Fulfill</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We ship directly to your warehouse, Amazon FBA, or utilize our 3PL network to drop-ship directly to your end customers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="products">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Extensive product capabilities</h2>
<p className="mt-4 text-base text-zinc-500">High-margin categories ready for your label.</p>
</div>
<a className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors" href="#">
                    Download full catalog
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block border border-zinc-200 p-8 rounded-3xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300" href="#">
<div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors mb-6">
<iconify-icon className="text-xl" icon="solar:dumbbell-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Sports Performance</h3>
<p className="text-sm text-zinc-500 mb-6">Pre-workouts, BCAA blends, and recovery formulas engineered for athletes.</p>
<span className="text-sm font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                        View details <iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>

<a className="group block border border-zinc-200 p-8 rounded-3xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300" href="#">
<div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors mb-6">
<iconify-icon className="text-xl" icon="solar:jar-of-pills-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Vitamins &amp; Wellness</h3>
<p className="text-sm text-zinc-500 mb-6">Multivitamins, single-ingredient isolates, and immune support capsules.</p>
<span className="text-sm font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                        View details <iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>

<a className="group block border border-zinc-200 p-8 rounded-3xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300" href="#">
<div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors mb-6">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Proteins &amp; Powders</h3>
<p className="text-sm text-zinc-500 mb-6">Whey isolate, plant-based proteins, and meal replacement shakes.</p>
<span className="text-sm font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                        View details <iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white" id="benefits">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Why top brands choose VitalForm</h2>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                        We don't just manufacture products; we build long-term infrastructure for health and wellness brands. Our strict quality control ensures every batch meets label claims.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-400">
<iconify-icon className="text-xl" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium">cGMP Certified Facility</h4>
<p className="text-sm text-zinc-400 mt-1">Operating under the highest FDA regulatory standards.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-400">
<iconify-icon className="text-xl" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium">Third-Party Tested</h4>
<p className="text-sm text-zinc-400 mt-1">Rigorous raw material and finished product testing.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-400">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium">Low Minimums (MOQs)</h4>
<p className="text-sm text-zinc-400 mt-1">Scale flexibly from 500 units up to millions.</p>
</div>
</li>
</ul>
</div>
<div className="relative bg-zinc-800 rounded-3xl p-8 lg:p-12 border border-zinc-700/50">

<div className="w-full aspect-[4/3] bg-zinc-900/50 rounded-xl border border-zinc-700 p-6 flex flex-col justify-between">
<div className="flex justify-between items-center pb-4 border-b border-zinc-800">
<div className="w-24 h-4 bg-zinc-800 rounded"></div>
<div className="w-12 h-4 bg-emerald-900/50 rounded text-xs text-emerald-400 flex items-center justify-center font-medium tracking-widest">PASS</div>
</div>
<div className="space-y-4">
<div className="w-3/4 h-3 bg-zinc-800 rounded"></div>
<div className="w-full h-3 bg-zinc-800 rounded"></div>
<div className="w-5/6 h-3 bg-zinc-800 rounded"></div>
</div>
<div className="flex items-center gap-3 mt-8 pt-4 border-t border-zinc-800">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-lg" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-32 h-3 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="contact">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Let's discuss your project</h2>
<p className="mt-4 text-base text-zinc-500">Fill out the form below and our partnerships team will reach out within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-900 mb-2">First Name</label>
<input className="w-full bg-white border border-zinc-200 text-zinc-900 text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-zinc-400" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-2">Last Name</label>
<input className="w-full bg-white border border-zinc-200 text-zinc-900 text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-zinc-400" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-2">Work Email</label>
<input className="w-full bg-white border border-zinc-200 text-zinc-900 text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-zinc-400" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-2">Project Details</label>
<textarea className="w-full bg-white border border-zinc-200 text-zinc-900 text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-zinc-400 resize-none" placeholder="Tell us about the products you want to create..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors" type="button">
                    Submit Request
                </button>
</form>
</section>
</main>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-base font-medium tracking-tighter text-zinc-900 flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-lg text-emerald-600" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        VITALFORM
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        The manufacturing backbone for modern health and wellness brands.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Capabilities</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Formulation</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fulfillment</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Certifications</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 VitalForm Manufacturing. All rights reserved.</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
