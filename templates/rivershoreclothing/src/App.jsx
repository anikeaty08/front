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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-[#fafafa]/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 flex items-center gap-2" href="/">
<span className="sr-only">RSC</span>
<span className="text-sm font-semibold tracking-widest text-zinc-900">R S C</span>
</a>
</div>
<div className="hidden lg:flex lg:gap-x-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="https://rivershoreclothing.com/sports-wears/">Apparel</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#uniforms">Team Uniforms</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#capabilities">Capabilities</a>
</div>
<div className="flex flex-1 justify-end">
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Contact <span aria-hidden="true">→</span></a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative isolate overflow-hidden px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:px-8 border-b border-zinc-200 bg-white">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.100),white)] opacity-20"></div>
<div className="mx-auto max-w-3xl text-center">
<div className="mb-8 flex justify-center">
<div className="relative rounded-full px-3 py-1 text-xs leading-6 text-zinc-600 ring-1 ring-zinc-200 hover:ring-zinc-300 transition-all bg-zinc-50">
                        View our latest <a className="font-medium text-zinc-900" href="#"><span aria-hidden="true" className="absolute inset-0"></span>sportswear catalogue <span aria-hidden="true">→</span></a>
</div>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                    Premium <a className="text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 transition-all underline-offset-4" href="https://rivershoreclothing.com/sports-wears/">street wear manufacturer in Pakistan</a>
</h1>
<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl mx-auto">
                    Elevate your brand with precision-engineered apparel. From high sportswear to private label collections, we bring complex designs to life with unparalleled quality.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all" href="#">Start a Project</a>
<a className="text-sm font-medium leading-6 text-zinc-900 hover:text-zinc-600 transition-colors" href="#capabilities">Learn more <span aria-hidden="true">→</span></a>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-[#fafafa]" id="uniforms">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-base font-medium leading-7 text-zinc-500 tracking-tight uppercase">Specialized Gear</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Professional Team Uniforms</p>
<p className="mt-4 text-base text-zinc-600">Engineered for durability, flexibility, and peak performance on the field.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-zinc-300" href="https://rivershoreclothing.com/sports-wear/american-football-uniform/">
<div>
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:football-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium text-zinc-900 tracking-tight">American Football Uniform</h3>
<p className="mt-2 text-sm text-zinc-600 leading-relaxed">Heavy-duty fabrics with strategic stretch panels designed to withstand rigorous gridiron impact.</p>
</div>
<div className="mt-8 flex items-center text-sm font-medium text-zinc-900">
                            Explore specs <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-zinc-300" href="https://rivershoreclothing.com/sports-wear/soccer-uniform/">
<div>
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 group-hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:ball-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium text-zinc-900 tracking-tight">Soccer Uniform</h3>
<p className="mt-2 text-sm text-zinc-600 leading-relaxed">Lightweight, moisture-wicking kits crafted for maximum agility and breathability on the pitch.</p>
</div>
<div className="mt-8 flex items-center text-sm font-medium text-zinc-900">
                            Explore specs <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-zinc-300 sm:col-span-2 lg:col-span-1" href="https://rivershoreclothing.com/sports-wear/baseball-uniform/">
<div>
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 group-hover:text-zinc-900 transition-colors">
<iconify-icon className="text-zinc-400" height="24" icon="solar:t-shirt-bold-duotone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium text-zinc-900 tracking-tight">Baseball Uniform</h3>
<p className="mt-2 text-sm text-zinc-600 leading-relaxed">Classic tailoring meets modern performance fabrics for optimal movement and comfort on the diamond.</p>
</div>
<div className="mt-8 flex items-center text-sm font-medium text-zinc-900">
                            Explore specs <iconify-icon className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white border-t border-zinc-200" id="capabilities">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl mb-6">Comprehensive Manufacturing</h2>
<div className="space-y-6 text-base text-zinc-600 leading-relaxed">
<p>
                                Beyond standard team wear, our facility operates as a leading <a className="font-medium text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 transition-all underline-offset-2" href="https://rivershoreclothing.com/sports-wears/">street wear manufacturer in Pakistan</a>, capable of scaling from boutique capsule collections to full-scale global distribution.
                            </p>
<p>
                                Whether you are developing <strong>gym street clothing</strong> that bridges the gap between lifestyle and performance, or require technical <strong>custom padel shirts</strong> engineered for specific racket sports, we provide end-to-end solutions.
                            </p>
<p>
                                We empower brands to launch lines of <strong>private label sportswear</strong> with confidence. Our diverse capabilities allow us to produce everything from luxury <strong>high sportswear</strong> to specialized, inclusive garments like <strong>modest workout sets</strong> and functional <strong>modest running outfits</strong>.
                            </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-6 flex flex-col justify-center">
<iconify-icon className="text-zinc-800 mb-4" icon="solar:t-shirt-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Gym Street Clothing</h4>
<p className="text-xs text-zinc-500">Urban aesthetics paired with performance fabrics.</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-6 flex flex-col justify-center">
<iconify-icon className="text-zinc-800 mb-4" icon="solar:hanger-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Private Label</h4>
<p className="text-xs text-zinc-500">White-label manufacturing tailored to your brand identity.</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-6 flex flex-col justify-center">
<iconify-icon className="text-zinc-800 mb-4" icon="solar:running-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Modest Activewear</h4>
<p className="text-xs text-zinc-500">Inclusive designs: modest workout sets &amp; running outfits.</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-6 flex flex-col justify-center">
<iconify-icon className="text-zinc-800 mb-4" icon="solar:star-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900 mb-1">High Sportswear</h4>
<p className="text-xs text-zinc-500">Premium materials and technical finishing for luxury activewear.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
<div className="flex justify-center space-x-6 md:order-2">
<a className="text-zinc-400 hover:text-zinc-500" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-500" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="mt-8 md:order-1 md:mt-0 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
<span className="text-sm font-semibold tracking-widest text-zinc-900">R S C</span>
<p className="text-xs leading-5 text-zinc-500">© 2023 Rivershore Clothing. All rights reserved.</p>
<div className="flex gap-4 text-xs text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="https://rivershoreclothing.com/sports-wears/">Sports Wear</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
