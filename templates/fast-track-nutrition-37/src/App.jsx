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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
<iconify-icon className="text-white text-lg" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-lg">FdX<span className="text-orange-500">IC</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#flavors">Flavors</a>
<a className="hover:text-white transition-colors" href="#nutrition">Nutrition</a>
<a className="hover:text-white transition-colors" href="#delivery">Delivery</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                    Log in
                </button>
<button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Order Now
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-6 backdrop-blur-sm">
<iconify-icon className="text-orange-400" icon="solar:bolt-linear"></iconify-icon>
                    Now delivering in under 30 minutes
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-[1.1] mb-6">
                    Guilt-free indulgence. <br/>
                    Delivered in a flash.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 font-medium max-w-lg mb-10 leading-relaxed">
                    Mini-sized, sugar-free, and packed with protein. Premium ice cream brought straight to your door with the speed and reliability of FedEx.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] inset-ring-1 inset-ring-white/20">
                        Start your order
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex items-center gap-3 text-sm font-medium text-neutral-400 px-4 py-2">
<iconify-icon className="text-lg text-neutral-500" icon="solar:clock-circle-linear"></iconify-icon>
                        Est. arrival: 28 mins
                    </div>
</div>
</div>

<div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center animate-float lg:ml-10">

<div className="relative w-64 h-80 z-10">

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[50%] border-2 border-neutral-700 shadow-[inset_0_4px_10px_rgba(255,255,255,0.1)] flex items-center justify-center z-20">
<span className="tracking-tighter font-semibold text-neutral-600 text-2xl opacity-50">FdX</span>
</div>

<div className="absolute top-12 left-0 w-full h-64 bg-gradient-to-b from-neutral-900 to-[#0a0a0a] rounded-b-3xl border-x-2 border-b-2 border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-end">

<div className="w-full h-32 bg-gradient-to-br from-purple-600/80 to-purple-900/80 blur-xl absolute top-1/2 -translate-y-1/2"></div>

<div className="w-full h-2 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-10 mb-8"></div>
</div>
</div>

<div className="absolute top-10 right-10 w-20 h-20 bg-orange-500/10 border border-orange-500/20 rounded-2xl rotate-12 backdrop-blur-md"></div>
<div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-full -rotate-12 backdrop-blur-md"></div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm px-6" id="nutrition">
<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="flex flex-col items-center text-center md:px-8 first:pt-0 pt-8 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Guilt-Free Indulgence</h3>
<p className="text-sm text-neutral-400 font-medium leading-relaxed">Zero added sugar and under 100 calories per mini-pint. Sweetened naturally so you can enjoy every bite without the crash.</p>
</div>
<div className="flex flex-col items-center text-center md:px-8 pt-8 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<iconify-icon className="text-2xl text-purple-400" icon="solar:dumbbell-large-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Packed with Protein</h3>
<p className="text-sm text-neutral-400 font-medium leading-relaxed">15g of premium whey protein isolate in every serving. The perfect post-workout recovery treat that actually tastes like dessert.</p>
</div>
<div className="flex flex-col items-center text-center md:px-8 pt-8 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<iconify-icon className="text-2xl text-orange-400" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">FedEx Speed</h3>
<p className="text-sm text-neutral-400 font-medium leading-relaxed">Our micro-fulfillment centers are powered by FedEx logistics, ensuring your ice cream arrives frozen solid in under 30 minutes.</p>
</div>
</div>
</section>

<section className="py-32 px-6" id="flavors">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Choose your fuel.</h2>
<p className="text-neutral-400 font-medium">Available in single pints or money-saving bundles.</p>
</div>

<div className="flex items-center gap-3 bg-neutral-900/50 p-2 rounded-xl border border-white/10 backdrop-blur-md">
<span className="text-xs font-medium text-neutral-400 pl-2">One-time</span>
<button className="relative w-11 h-6 bg-purple-600 rounded-full transition-colors focus:outline-none ring-2 ring-transparent focus:ring-purple-500/50">
<span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform shadow-sm"></span>
</button>
<span className="text-xs font-medium text-white pr-2 flex items-center gap-1">
                        Subscribe <span className="text-orange-400">-20%</span>
</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full group-hover:bg-purple-600/30 transition-colors"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-16 group-hover:scale-110 transition-transform duration-500">
<div className="w-8 h-8 rounded-full bg-purple-900 border-2 border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight text-white">Midnight Dark</h3>
<span className="text-sm font-medium text-neutral-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">$6.99</span>
</div>
<p className="text-sm text-neutral-500 font-medium mb-6">Rich, Dutch-processed cocoa with dark chocolate flakes.</p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-400 mb-8 border-t border-white/5 pt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:fire-linear"></iconify-icon> 90 cal</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:dumbbell-minimalistic-linear"></iconify-icon> 15g pro</span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full group-hover:bg-orange-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-16 group-hover:scale-110 transition-transform duration-500">
<div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight text-white">Velocity Vanilla</h3>
<span className="text-sm font-medium text-neutral-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">$6.99</span>
</div>
<p className="text-sm text-neutral-500 font-medium mb-6">Madagascar vanilla bean with a creamy, rich texture.</p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-400 mb-8 border-t border-white/5 pt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:fire-linear"></iconify-icon> 85 cal</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:dumbbell-minimalistic-linear"></iconify-icon> 15g pro</span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>

<div className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(236,72,153,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full group-hover:bg-pink-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center mb-16 group-hover:scale-110 transition-transform duration-500">
<div className="w-8 h-8 rounded-full bg-pink-900 border-2 border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight text-white">Strawberry Sprint</h3>
<span className="text-sm font-medium text-neutral-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">$6.99</span>
</div>
<p className="text-sm text-neutral-500 font-medium mb-6">Real strawberry chunks folded into a smooth berry base.</p>
<div className="flex items-center gap-4 text-xs font-medium text-neutral-400 mb-8 border-t border-white/5 pt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:fire-linear"></iconify-icon> 80 cal</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:dumbbell-minimalistic-linear"></iconify-icon> 15g pro</span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="delivery">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">From our freezer to yours.</h2>
<p className="text-neutral-400 font-medium">Real-time tracking powered by FedEx infrastructure.</p>
</div>
<div className="relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">

<div className="absolute top-1/2 left-12 right-12 h-0.5 bg-neutral-800 -translate-y-1/2 hidden md:block"></div>

<div className="absolute top-1/2 left-12 h-0.5 bg-gradient-to-r from-purple-600 to-orange-500 -translate-y-1/2 hidden md:block animate-progress shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">

<div className="flex flex-col items-center text-center relative">
<div className="w-12 h-12 rounded-full bg-purple-900/50 border-2 border-purple-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
<iconify-icon className="text-white text-xl" icon="solar:cursor-square-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-1">Order Placed</h4>
<p className="text-xs text-neutral-500 font-medium">12:00 PM</p>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="w-12 h-12 rounded-full bg-purple-900/50 border-2 border-purple-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
<iconify-icon className="text-white text-xl" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-1">Packed Cold</h4>
<p className="text-xs text-neutral-500 font-medium">12:05 PM</p>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="w-12 h-12 rounded-full bg-orange-900/50 border-2 border-orange-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
<iconify-icon className="text-white text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-1">Out for Delivery</h4>
<p className="text-xs text-orange-400 font-medium">Right Now</p>
</div>

<div className="flex flex-col items-center text-center relative">
<div className="w-12 h-12 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center mb-4">
<iconify-icon className="text-neutral-500 text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-neutral-400 mb-1">At Your Door</h4>
<p className="text-xs text-neutral-600 font-medium">Est. 12:28 PM</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300 leading-relaxed mb-8">"I ordered this right after my workout and it arrived before I even finished showering. The Midnight Dark flavor is insanely good for having zero sugar."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-400 border border-white/10">JD</div>
<div>
<div className="text-sm font-medium text-white">James D.</div>
<div className="text-xs text-neutral-500">Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300 leading-relaxed mb-8">"The packaging is genius. Arrived completely frozen solid in the middle of summer. Velocity Vanilla is my new nightly staple."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-400 border border-white/10">SA</div>
<div>
<div className="text-sm font-medium text-white">Sarah A.</div>
<div className="text-xs text-neutral-500">Subscribed</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300 leading-relaxed mb-8">"Finally a high-protein treat that doesn't taste like chalk. Plus, the FedEx delivery tracking makes it super easy to know exactly when to open the door."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-400 border border-white/10">MK</div>
<div>
<div className="text-sm font-medium text-white">Mike K.</div>
<div className="text-xs text-neutral-500">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready for a treat?</h2>
<p className="text-lg text-neutral-400 font-medium mb-10">Order now and your ice cream will be at your door in approx. 28 minutes.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                    Order Delivery Now
                </button>
</div>
<p className="mt-6 text-xs text-neutral-500 font-medium">Free delivery on orders over $30. 30-minute guarantee applies to eligible zones.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
<iconify-icon className="text-white text-xs" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-base text-white">FdX<span className="text-orange-500">IC</span></span>
</div>
<p className="text-xs text-neutral-500 font-medium max-w-xs leading-relaxed">The intersection of premium nutrition and lightning-fast logistics. Not affiliated with actual FedEx Corporation. Just a conceptual design.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<h5 className="text-xs font-semibold text-white mb-2 uppercase tracking-widest">Product</h5>
<a className="text-sm text-neutral-500 hover:text-white transition-colors font-medium" href="#">Flavors</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors font-medium" href="#">Ingredients</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors font-medium" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<h5 className="text-xs font-semibold text-white mb-2 uppercase tracking-widest">Company</h5>
<a className="text-sm text-neutral-500 hover:text-white transition-colors font-medium" href="#">About</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors font-medium" href="#">Logistics</a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors font-medium" href="#">Contact</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600 font-medium">© 2024 FdX Ice Cream Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
