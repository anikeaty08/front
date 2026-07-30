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
      
      document.getElementById('menuBtn')?.addEventListener('click', () => {
        const nav = document.getElementById('mobileNav');
        if (!nav) return;
        nav.classList.toggle('hidden');
      });
    
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
      

<div className="h-px w-full bg-neutral-900/10"></div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-[#f7f6f3]/70 border-b border-neutral-900/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="flex items-center">
<span className="text-[18px] sm:text-[20px] tracking-tight" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`}}>CL</span>
<span className="mx-2 h-4 w-px bg-neutral-900/20"></span>
<span className="text-[13px] text-neutral-600 group-hover:text-neutral-900 transition-colors">Atelier</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-[14px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Collection</a>
<a className="text-[14px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Bespoke</a>
<a className="text-[14px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Journal</a>
<a className="text-[14px] text-neutral-700 hover:text-neutral-900 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-900/15 bg-white/70 px-4 py-2 text-[13px] text-neutral-900 hover:bg-white hover:border-neutral-900/30 hover:-translate-y-0.5 transition-all">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-4.3-4.3"></path><circle cx="11" cy="11" r="7"></circle>
</svg>
              Search
            </button>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-[13px] hover:bg-neutral-800 hover:-translate-y-0.5 transition-all" href="#">
              Enquire
              <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M7 7h10v10"></path>
</svg>
</a>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-900/15 bg-white/70 hover:bg-white hover:border-neutral-900/30 transition-all" id="menuBtn">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-900/10" id="mobileNav">
<div className="px-4 py-4 space-y-1 bg-[#f7f6f3]/95">
<a className="block px-3 py-2 rounded-md text-[15px] text-neutral-800 hover:bg-white hover:text-neutral-900 transition" href="#">Collection</a>
<a className="block px-3 py-2 rounded-md text-[15px] text-neutral-800 hover:bg-white hover:text-neutral-900 transition" href="#">Bespoke</a>
<a className="block px-3 py-2 rounded-md text-[15px] text-neutral-800 hover:bg-white hover:text-neutral-900 transition" href="#">Journal</a>
<a className="block px-3 py-2 rounded-md text-[15px] text-neutral-800 hover:bg-white hover:text-neutral-900 transition" href="#">About</a>
<div className="pt-2">
<a className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-[13px] hover:bg-neutral-800 transition-all" href="#">Enquire</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(1200px 600px at 10% -10%, rgba(0,0,0,0.08), transparent 50%), radial-gradient(800px 400px at 90% -20%, rgba(0,0,0,0.06), transparent 50%)`}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
<div className="lg:col-span-6 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 bg-white/70 px-3 py-1 text-[12px] text-neutral-700 w-max mb-5">
<span className="h-1.5 w-1.5 rounded-full bg-[#b99a68]"></span>
              New: Spring Capsule 24/25
            </div>
<h1 className="text-[40px] leading-[1.05] sm:text-[56px] md:text-[64px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>
              Curated luxury for the quietly confident.
            </h1>
<p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-700">
              An editorial selection of objects and experiences crafted in limited numbers. Considered materials, impeccable provenance, and an understated point of view.
            </p>
<div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 hover:-translate-y-0.5 transition-all" href="#">
                Explore Collection
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M7 7h10v10"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900/15 bg-white/70 px-5 py-3 text-[14px] text-neutral-900 hover:bg-white hover:border-neutral-900/30 hover:-translate-y-0.5 transition-all" href="#">
                Our Philosophy
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="client" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=200&auto=format&fit=crop" />
<img alt="client" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<img alt="client" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" />
</div>
<p className="text-[13px] text-neutral-600">Trusted by collectors in 27+ countries</p>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden border border-neutral-900/10 bg-white">
<img alt="Hero luxury still life" className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.02]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-[12px] border border-neutral-900/10 text-neutral-800">Edition No. 08</div>
<div className="inline-flex items-center gap-3">
<button className="h-10 w-10 rounded-full bg-white/80 border border-neutral-900/10 backdrop-blur flex items-center justify-center hover:bg-white transition">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18l-6-6 6-6"></path>
</svg>
</button>
<button className="h-10 w-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[13px] text-neutral-600">Provenance: Italy, Japan, UK</div>
<div className="text-[13px] text-neutral-600">Sustainably sourced</div>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-neutral-900/10"></div>
</section>

<section className="py-12 md:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h2 className="text-[28px] sm:text-[36px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>Signature Collection</h2>
<p className="mt-2 text-[14px] text-neutral-700 max-w-xl">A seasonal edit in limited quantities. Quiet details, enduring forms.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-70 transition" href="#">
            View all
            <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-white" href="#">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Sculpted chair" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:contrast-110" src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-center justify-between rounded-xl bg-white/85 backdrop-blur px-4 py-3 border border-neutral-900/10">
<div>
<div className="text-[15px] text-neutral-900">Sculpted Chair — 01</div>
<div className="text-[12px] text-neutral-600">Oak, natural oil finish</div>
</div>
<div className="inline-flex items-center gap-2 text-[13px] text-neutral-900">
                  View
                  <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M7 7h10v10"></path></svg>
</div>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-white" href="#">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Minimal lamp" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:contrast-110" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-center justify-between rounded-xl bg-white/85 backdrop-blur px-4 py-3 border border-neutral-900/10">
<div>
<div className="text-[15px] text-neutral-900">Column Lamp — 02</div>
<div className="text-[12px] text-neutral-600">Brushed brass, linen shade</div>
</div>
<div className="inline-flex items-center gap-2 text-[13px] text-neutral-900">
                  View
                  <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M7 7h10v10"></path></svg>
</div>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-white" href="#">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Porcelain set" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:contrast-110" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="absolute inset-x-0 bottom-0 p-4">
<div className="flex items-center justify-between rounded-xl bg-white/85 backdrop-blur px-4 py-3 border border-neutral-900/10">
<div>
<div className="text-[15px] text-neutral-900">Porcelain Set — 03</div>
<div className="text-[12px] text-neutral-600">Hand-thrown, glaze no. 12</div>
</div>
<div className="inline-flex items-center gap-2 text-[13px] text-neutral-900">
                  View
                  <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M7 7h10v10"></path></svg>
</div>
</div>
</div>
</a>
</div>
<div className="mt-10 grid sm:grid-cols-3 gap-6">

<div className="rounded-2xl border border-neutral-900/10 bg-white p-6 flex items-start gap-4 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center">
<svg className="h-[18px] w-[18px] text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path><circle cx="12" cy="12" r="7"></circle></svg>
</div>
<div>
<div className="text-[15px] text-neutral-900">Craft, not haste</div>
<p className="mt-1 text-[13px] text-neutral-600">Editioned pieces with traceable origin and masterful workmanship.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-900/10 bg-white p-6 flex items-start gap-4 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center">
<svg className="h-[18px] w-[18px] text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v8m-4-4h8"></path><circle cx="12" cy="12" r="9"></circle></svg>
</div>
<div>
<div className="text-[15px] text-neutral-900">Materials with memory</div>
<p className="mt-1 text-[13px] text-neutral-600">Noble woods, natural fibers, and metals that patinate with grace.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-900/10 bg-white p-6 flex items-start gap-4 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center">
<svg className="h-[18px] w-[18px] text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10L4 12"></path></svg>
</div>
<div>
<div className="text-[15px] text-neutral-900">Considered, always</div>
<p className="mt-1 text-[13px] text-neutral-600">A quieter aesthetic—balanced proportions and lasting utility.</p>
</div>
</div>
</div>
</div>
<div className="mt-12 h-px w-full bg-neutral-900/10"></div>
</section>

<section className="py-12 md:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6">
<div className="relative rounded-2xl overflow-hidden border border-neutral-900/10 bg-white">
<img alt="Studio" className="w-full h-full object-cover transition duration-700 hover:scale-[1.02]" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 via-transparent"></div>
</div>
</div>
<div className="lg:col-span-6">
<h3 className="text-[26px] sm:text-[32px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>The Atelier Standard</h3>
<p className="mt-3 text-[15px] text-neutral-700 leading-relaxed">Each piece passes through the hands of no fewer than three specialists—from sourcing to finishing. Subtle deviations are celebrated as markers of human touch, not defects.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center">
<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10L4 12"></path></svg>
</span>
<span className="text-[14px] text-neutral-800">Small-batch production with certificate of provenance.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center">
<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10L4 12"></path></svg>
</span>
<span className="text-[14px] text-neutral-800">Timeless silhouettes—built to be repaired, not replaced.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center">
<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10L4 12"></path></svg>
</span>
<span className="text-[14px] text-neutral-800">Carbon-accounted logistics with slow, consolidated shipping.</span>
</li>
</ul>
<div className="mt-7 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 transition" href="#">
                Read the Manifesto
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M7 7h10v10"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 bg-white px-5 py-3 text-[14px] text-neutral-900 hover:border-neutral-900/30 transition" href="#">
                Studio Visit
                <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
<div className="mt-12 h-px w-full bg-neutral-900/10"></div>
</section>

<section className="py-12 md:py-16 lg:py-20">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-1">
<svg className="h-[18px] w-[18px] text-[#b99a68]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-[18px] w-[18px] text-[#b99a68]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-[18px] w-[18px] text-[#b99a68]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-[18px] w-[18px] text-[#b99a68]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-[18px] w-[18px] text-[#b99a68]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<blockquote className="mt-6">
<p className="text-[24px] sm:text-[28px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>“An invitation to slow down. Pieces that become companions rather than possessions.”</p>
</blockquote>
<figcaption className="mt-4 text-[13px] text-neutral-600">Art & Places Journal</figcaption>
</div>
<div className="mt-12 h-px w-full bg-neutral-900/10"></div>
</section>

<section className="py-12 md:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h3 className="text-[26px] sm:text-[32px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>From the Journal</h3>
<p className="mt-2 text-[14px] text-neutral-700">Field notes and studio conversations.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-[14px] text-neutral-900 hover:opacity-70 transition" href="#">
            Explore articles
            <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group rounded-2xl overflow-hidden border border-neutral-900/10 bg-white hover:-translate-y-0.5 transition" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Provenance" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
<div className="p-5">
<div className="text-[12px] text-neutral-600">Essay</div>
<h4 className="mt-1 text-[18px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>On Provenance and Patina</h4>
<p className="mt-2 text-[13px] text-neutral-700">Why origin and process matter in an age of abundance.</p>
<div className="mt-4 inline-flex items-center gap-2 text-[13px] text-neutral-900">
                Read more
                <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-neutral-900/10 bg-white hover:-translate-y-0.5 transition" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Materiality" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="text-[12px] text-neutral-600">Studio</div>
<h4 className="mt-1 text-[18px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>Material Index: Brass</h4>
<p className="mt-2 text-[13px] text-neutral-700">A deep dive into alloys, finishes, and care over decades.</p>
<div className="mt-4 inline-flex items-center gap-2 text-[13px] text-neutral-900">
                Read more
                <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-neutral-900/10 bg-white hover:-translate-y-0.5 transition" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Resonant spaces" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="text-[12px] text-neutral-600">Interview</div>
<h4 className="mt-1 text-[18px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>On Resonant Spaces</h4>
<p className="mt-2 text-[13px] text-neutral-700">A conversation with spatial designer Mira L. on calm and light.</p>
<div className="mt-4 inline-flex items-center gap-2 text-[13px] text-neutral-900">
                Read more
                <svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</div>
</div>
</a>
</div>
</div>
<div className="mt-12 h-px w-full bg-neutral-900/10"></div>
</section>

<section className="py-12 md:py-16 lg:py-20">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-neutral-900/10 bg-white p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="max-w-xl">
<h4 className="text-[22px] sm:text-[24px] tracking-tight text-neutral-900" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`, fontWeight: `500`}}>Join the list</h4>
<p className="mt-2 text-[14px] text-neutral-700">Quiet updates, twice a month. Early access to editions and studio notes.</p>
</div>
<form className="w-full sm:w-auto flex-1 sm:flex-initial">
<div className="flex items-center gap-2">
<input className="w-full sm:w-72 rounded-full border border-neutral-900/15 bg-white px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900/40" placeholder="Email address" type="email" />
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-[14px] hover:bg-neutral-800 transition" type="submit">
                  Subscribe
                  <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M7 7h10v10"></path></svg>
</button>
</div>
<p className="mt-2 text-[12px] text-neutral-600">We respect your privacy. No noise.</p>
</form>
</div>
</div>
</div>
<div className="mt-12 h-px w-full bg-neutral-900/10"></div>
</section>

<footer className="py-12 md:py-16 lg:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div>
<div className="inline-flex items-center gap-2">
<span className="text-[18px] tracking-tight" style={{fontFamily: `'Fraunces', ui-serif, Georgia, serif`}}>CL</span>
<span className="mx-2 h-4 w-px bg-neutral-900/20"></span>
<span className="text-[13px] text-neutral-600">Atelier</span>
</div>
<p className="mt-4 text-[13px] text-neutral-600 max-w-xs">Objects and experiences with an enduring, quiet beauty.</p>
<div className="mt-5 flex items-center gap-3">
<a aria-label="Instagram" className="h-9 w-9 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center hover:border-neutral-900/30 transition" href="#">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Pinterest" className="h-9 w-9 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center hover:border-neutral-900/30 transition" href="#">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 20c-.2-1.3.3-3.4.8-4.8.4-1.1.9-2.4 1.2-3.6-.3-.6-.4-1.3-.2-2 .3-1.1 1.2-1.9 2.2-2.1 1.8-.4 3.3 1.2 3 3-0.3 1.9-1.5 3.5-3.4 3.9-.6.1-1.1-.1-1.5-.4-.1.5-.3 1.3-.4 1.8-.2.9-.7 2.6-.7 2.6"></path></svg>
</a>
<a aria-label="Twitter" className="h-9 w-9 rounded-full border border-neutral-900/15 bg-white flex items-center justify-center hover:border-neutral-900/30 transition" href="#">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.8.6-2 1c-1.1-.9-2.7-1.1-4-.6-1.4.5-2.4 1.9-2.5 3.4v1C9.3 8.8 6.2 7.2 4 5c0 0-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5 0-.3 0-.7-.1-1A7.7 7.7 0 0 0 22 4z"></path></svg>
</a>
</div>
</div>
<div>
<div className="text-[13px] text-neutral-500 uppercase tracking-wide">Shop</div>
<ul className="mt-3 space-y-2">
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Furniture</a></li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Lighting</a></li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Objects</a></li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Gifting</a></li>
</ul>
</div>
<div>
<div className="text-[13px] text-neutral-500 uppercase tracking-wide">Studio</div>
<ul className="mt-3 space-y-2">
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Our Story</a></li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Craft & Process</a></li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Care Guide</a></li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-[13px] text-neutral-500 uppercase tracking-wide">Visit</div>
<ul className="mt-3 space-y-2">
<li className="text-[14px] text-neutral-800">By appointment only</li>
<li className="text-[14px] text-neutral-800">14 Savoy Row, London</li>
<li className="text-[14px] text-neutral-800">+44 20 1234 5678</li>
<li><a className="text-[14px] text-neutral-800 hover:text-neutral-900 transition underline underline-offset-4 decoration-neutral-300" href="#">Map & Hours</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-900/10 pt-6">
<div className="text-[12px] text-neutral-600">© 2025 Cluely Atelier. All rights reserved.</div>
<div className="flex items-center gap-4">
<a className="text-[12px] text-neutral-700 hover:text-neutral-900 transition" href="#">Privacy</a>
<a className="text-[12px] text-neutral-700 hover:text-neutral-900 transition" href="#">Terms</a>
<a className="text-[12px] text-neutral-700 hover:text-neutral-900 transition" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
