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
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">DECK<span className="text-orange-600">RESTORE</span></span>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#quote">
                Get Free Estimate
            </a>
</div>
</nav>

<div className="pt-24 pb-4 border-b border-slate-100 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
<div className="flex text-orange-400">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<span>Rated by Local Homeowners</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
<iconify-icon className="text-slate-900" icon="solar:home-smile-linear" width="14"></iconify-icon>
<span>Serving Pasadena &amp; SGV</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
<iconify-icon className="text-green-600" icon="solar:leaf-linear" width="14"></iconify-icon>
<span>Refinishing Specialists</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
<iconify-icon className="text-blue-600" icon="solar:wallet-money-linear" width="14"></iconify-icon>
<span>Save Thousands vs Replacement</span>
</div>
</div>
</div>
</div>

<section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-orange-700 bg-orange-50 rounded-full border border-orange-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Limited Availability in Pasadena Area
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Deck Refinishing near <br className="hidden md:block"/> Pasadena &amp; SGV.
                </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                    Is your deck faded, weathered, or worn from the sun? Most decks don't need replacement—they need professional refinishing. Restore the wood and save thousands.
                </p>
<div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600 mb-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        High-Quality Materials
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        No Pushy Sales
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Proper Prep Work
                    </div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm inline-block">
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Proudly Serving</p>
<p className="text-sm font-medium text-slate-800">
                        📍 Pasadena, Monrovia, Arcadia, Sierra Madre, Duarte, Bradbury &amp; nearby areas.
                    </p>
</div>
</div>

<div className="relative fade-in-up delay-100" id="quote">

<div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute -bottom-10 -left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<span className="text-sm font-semibold text-slate-900">Get Your Free Evaluation</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
</div>
<div className="p-6 md:p-8">
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">What is the condition of your deck?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer border border-slate-200 rounded-lg p-3 hover:border-orange-500 hover:bg-orange-50 transition-colors group">
<input className="hidden" name="condition" type="radio"/>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 group-hover:text-orange-500" icon="solar:sun-fog-linear"></iconify-icon>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Faded / Gray</span>
</div>
</label>
<label className="cursor-pointer border border-slate-200 rounded-lg p-3 hover:border-orange-500 hover:bg-orange-50 transition-colors group">
<input className="hidden" name="condition" type="radio"/>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 group-hover:text-orange-500" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Splintering</span>
</div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Zip Code</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm placeholder:text-slate-400" placeholder="e.g. 91101" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Est. Size (sq ft)</label>
<select className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm text-slate-600">
<option>Not sure</option>
<option>Small (&lt; 200 sq ft)</option>
<option>Medium (200-500 sq ft)</option>
<option>Large (500+ sq ft)</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm placeholder:text-slate-400" placeholder="name@example.com" type="email"/>
</div>
<button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 group" type="button">
                                Schedule Free Evaluation
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-400">
                                No credit card required. No obligation.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Sun damage is the #1 reason <br/> decks fail in Southern California.</h2>
<p className="text-slate-500">When decks are left untreated, UV rays dry out and weaken the wood. Small cracks turn into structural damage, and refinishing stops being an option.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-orange-500 mb-4 shadow-sm">
<iconify-icon icon="solar:sun-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">UV Damage</h3>
<p className="text-sm text-slate-500 leading-relaxed">Constant Pasadena sun exposure breaks down lignin, causing wood to turn gray and loose structural integrity.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-red-500 mb-4 shadow-sm">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Structural Decay</h3>
<p className="text-sm text-slate-500 leading-relaxed">Untreated cracks allow moisture to seep deep into the planks, leading to rot, warping, and dangerous splinters.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-500 mb-4 shadow-sm">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Loss of Value</h3>
<p className="text-sm text-slate-500 leading-relaxed">A weathered deck is an eyesore that reduces your home's value. Refinishing early extends life by 5–10 years.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-orange-600 font-semibold tracking-wider text-xs uppercase mb-2 block">The Cost Difference</span>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Save thousands by refinishing before it's too late.</h2>
</div>
<div className="grid md:grid-cols-2 gap-0 md:gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900">Full Replacement</h3>
</div>
<div className="text-2xl font-medium text-slate-900 mb-6">$15k – $30k+</div>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-square-linear"></iconify-icon>
                            Demolition &amp; permit headaches
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-square-linear"></iconify-icon>
                            Long construction timelines
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-square-linear"></iconify-icon>
                            Major disruption to your home
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-orange-500/20 shadow-xl shadow-orange-500/5 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Smart Choice</div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
<h3 className="font-semibold text-slate-900">Professional Refinishing</h3>
</div>
<div className="text-2xl font-medium text-green-600 mb-6">A Fraction of the Cost</div>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            No demolition required
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Restores existing wood beauty
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:check-square-linear"></iconify-icon>
                            Completed in days, not weeks
                        </li>
</ul>
</div>
</div>
<p className="text-center text-sm text-slate-500 mt-8 italic">
                By refinishing early, many Pasadena-area homeowners save $10,000+ and extend their deck’s life.
            </p>
</div>
</section>

<section className="py-12 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<div className="inline-flex items-center gap-2 mb-2 text-orange-400 font-medium text-sm">
<iconify-icon icon="solar:gift-linear" width="18"></iconify-icon>
                    Limited-Time Offer
                </div>
<h3 className="text-2xl font-medium tracking-tight mb-2">FREE Power Wash &amp; Surface Prep</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">
<span className="text-white font-semibold">($350 Value)</span> included with deck refinishing. We don't skip this step because prep determines how long your finish lasts.
                </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 transition-all bg-white rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white" href="#quote">
                    Claim Offer
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Why Pasadena Area Homeowners Choose Us</h2>
<p className="text-slate-500 mb-8">We understand the specific micro-climates of the San Gabriel Valley. We don't cut corners, and we treat your home investment with respect.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-slate-700" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Local Climate Expertise</h4>
<p className="text-sm text-slate-500 mt-1">We understand local sun exposure &amp; heat.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-slate-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Premium Finishes</h4>
<p className="text-sm text-slate-500 mt-1">Finishes designed specifically for Southern California conditions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-slate-700" icon="solar:user-heart-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Honest Recommendations</h4>
<p className="text-sm text-slate-500 mt-1">We give honest advice—no unnecessary upsells.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
<h3 className="text-xl font-medium text-slate-900 mb-6 relative z-10">Don’t Replace Your Deck — Restore It.</h3>
<div className="space-y-3 relative z-10">
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="text-sm text-slate-600">Structurally Sound</span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="text-sm text-slate-600">Faded or Gray</span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<span className="text-sm text-slate-600">Splintering Surface</span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 relative z-10">
<p className="text-sm text-slate-500 mb-4">Ready to start?</p>
<a className="text-orange-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#quote">
                        Book your free evaluation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-12 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 text-sm tracking-tight">DECK<span className="text-orange-600">RESTORE</span></span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Professional deck refinishing protecting investments across the San Gabriel Valley.
                    </p>
</div>
<div className="grid grid-cols-1 gap-8 text-sm">
<div>
<h4 className="font-medium text-slate-900 mb-3">Service Areas</h4>
<div className="text-slate-500 flex flex-wrap gap-x-4 gap-y-2 max-w-md">
<span>Pasadena</span> • <span>Monrovia</span> • <span>Arcadia</span> • <span>Sierra Madre</span> • <span>Duarte</span> • <span>Bradbury</span> • <span>San Gabriel Valley</span>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Deck Restore SGV. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
