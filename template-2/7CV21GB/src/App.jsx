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
      

<div className="relative z-50 hidden md:block">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-center justify-between text-xs text-slate-300 border-b border-white/10 py-2">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<i className="size-4 textky-400" data-lucide="award"></i>
<span className="tracking-tight">BBBEE Level 2</span>
</div>
<div className="h-3 w-px bg-white/10"></div>
<div className="flex items-center gap-1.5">
<i className="size-4 text-sky-400" data-lucide="shield-check"></i>
<span className="tracking-tight">ISO-aligned processes</span>
</div>
<div className="h-3 w-px bg-white/10"></div>
<div className="flex items-center gap-1.5">
<i className="size-4 text-sky-400" data-lucide="globe-2"></i>
<span className="tracking-tight">Nationwide Installation</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-slate-300 hover:text-white transition" href="tel:+27110000000">+27 (0)11 000 0000</a>
<a className="text-slate-300 hover:text-white transition" href="mailto:hello@compucut.co.za">hello@compucut.co.za</a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3" href="#top">
<div className="flex items-center justify-center size-9 rounded-md bg-white/5 border border-white/10">
<span className="text-white font-semibold tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>CC</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Compucut Signs</span>
<span className="text-[11px] text-slate-400">Premium Signage & Branding</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-6">

<div className="relative group">
<button className="flex items-center gap-2 text-sm text-slate-200 hover:text-white transition">
              Products
              <i className="size-4" data-lucide="chevron-down"></i>
</button>

<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 absolute left-1/2 -translate-x-1/2 mt-3 w-[820px]">
<div className="rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl p-6">
<div className="grid grid-cols-3 gap-4">
<a className="group/product flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" data-product="Light Boxes" href="#products">
<i className="size-5 text-sky-400" data-lucide="square"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Light Boxes</div>
<div className="text-slate-400 text-xs">Edge-lit, double-sided, custom</div>
</div>
</a>
<a className="group/product flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" data-product="Fabricated Letters" href="#products">
<i className="size-5 text-sky-400" data-lucide="type"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Fabricated Letters</div>
<div className="text-slate-400 text-xs">Acrylic, stainless steel, halo-lit</div>
</div>
</a>
<a className="group/product flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" data-product="Pylons & Totems" href="#products">
<i className="size-5 text-sky-400" data-lucide="landmark"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Pylons & Totems</div>
<div className="text-slate-400 text-xs">Retail & corporate wayfinding</div>
</div>
</a>
<a className="group/product flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" data-product="LED Systems" href="#products">
<i className="size-5 text-sky-400" data-lucide="lightbulb"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>LED Systems</div>
<div className="text-slate-400 text-xs">Energy-efficient, outdoor-rated</div>
</div>
</a>
<a className="group/product flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" data-product="Vinyl & Graphics" href="#products">
<i className="size-5 text-sky-400" data-lucide="layout"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Vinyl & Graphics</div>
<div className="text-slate-400 text-xs">Fleet, walls, glazing, floor</div>
</div>
</a>
<a className="group/product flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" data-product="CNC & Routing" href="#products">
<i className="size-5 text-sky-400" data-lucide="box"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>CNC & Routing</div>
<div className="text-slate-400 text-xs">Precision-cut components</div>
</div>
</a>
</div>
<div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
<div className="text-xs text-slate-400">End-to-end fabrication. Lead times as fast as 7–14 days.</div>
<a className="inline-flex items-center gap-2 text-xs text-sky-400 hover:text-sky-300 transition" href="#contact">
                    Request a free quote
                    <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-2 text-sm text-slate-200 hover:text-white transition">
              Services
              <i className="size-4" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 absolute left-1/2 -translate-x-1/2 mt-3 w-[680px]">
<div className="rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl p-6">
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#services">
<i className="size-5 text-sky-400" data-lucide="box"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>3D Renderings</div>
<div className="text-slate-400 text-xs">Visualize before we build</div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#services">
<i className="size-5 text-sky-400" data-lucide="image"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Artistic Impressions</div>
<div className="text-slate-400 text-xs">Pitch-ready visuals</div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#services">
<i className="size-5 text-sky-400" data-lucide="map-pin"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Nationwide Installation</div>
<div className="text-slate-400 text-xs">Certified crews across SA</div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#services">
<i className="size-5 text-sky-400" data-lucide="wrench"></i>
<div>
<div className="text-slate-100 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Maintenance</div>
<div className="text-slate-400 text-xs">Uptime, warranty, SLA options</div>
</div>
</a>
</div>
<div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400">Compliance, risk assessments, and H&S documentation included.</div>
</div>
</div>
</div>
<a className="text-sm text-slate-200 hover:text-white transition" href="#portfolio">Portfolio</a>
<a className="text-sm text-slate-200 hover:text-white transition" href="#about">About</a>
<a className="text-sm text-slate-200 hover:text-white transition" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 px-4 py-2 text-sm transition" href="#contact">
<i className="size-4" data-lucide="send"></i>
            Request a Free Quote
          </a>
<button aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="openMenu">
<i className="size-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-[84%] max-w-sm translate-x-full transition-transform duration-300 z-50 bg-black/90 backdrop-blur-xl border-l border-white/10" id="mobileMenu">
<div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
<span className="text-slate-200" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Menu</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="closeMenu">
<i className="size-5" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-4">
<a className="flex items-center justify-between py-3 text-slate-200 border-b border-white/5" href="#products">
          Products
          <i className="size-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between py-3 text-slate-200 border-b border-white/5" href="#services">
          Services
          <i className="size-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between py-3 text-slate-200 border-b border-white/5" href="#portfolio">
          Portfolio
          <i className="size-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between py-3 text-slate-200 border-b border-white/5" href="#about">
          About
          <i className="size-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="mt-4 inline-flex items-center gap-2 w-full justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 px-4 py-3 text-sm transition" href="#contact">
<i className="size-4" data-lucide="send"></i>
          Request a Free Quote
        </a>
</div>
</div>
<div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 opacity-0 pointer-events-none transition-opacity" id="mobileBackdrop"></div>
</header>

<section className="relative min-h-[92vh] flex items-center">

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
<div className="absolute inset-0" id="heroSlides">
<img alt="Exterior signage installation at a corporate HQ" className="w-full h-full object-cover opacity-100 transition-opacity duration-[1200ms] ease-out" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="Retail mall pylon signage with LED illumination" className="w-full h-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out absolute inset-0" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="Wayfinding and branded interiors signage" className="w-full h-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out absolute inset-0" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2000&auto=format&fit=crop" />
</div>
</div>
<div className="mx-auto max-w-7xl px-4">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl tracking-tight text-white font-semibold" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>
          Premium Signage Solutions Since 1985
        </h1>
<p className="mt-5 text-lg md:text-xl text-slate-300" style={{fontFamily: `'Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`}}>
          Nearly three decades of craftsmanship, innovation, and nationwide delivery. Trusted by leading brands for quality, speed, and reliability.
        </p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 px-5 py-3 text-sm transition" href="#contact">
<i className="size-4" data-lucide="send"></i>
            Request a Free Quote
          </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-5 py-3 text-sm transition" href="#portfolio">
<i className="size-4" data-lucide="play"></i>
            View Portfolio
          </a>
</div>

<div className="mt-12">
<div className="text-xs uppercase tracking-wider text-slate-400">Trusted by teams at</div>
<div className="mt-4 relative overflow-hidden">
<div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent"></div>
<div className="flex items-center gap-4 py-1 will-change-transform" id="logoMarquee">

<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>AB</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>DB</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>WM</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>SP</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>MTN</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>SBK</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>VW</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>BP</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>NED</span>
</div>
<div className="flex items-center justify-center rounded-md bg-white/5 border border-white/10 h-12 w-24 sm:w-28">
<span className="text-slate-300 font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>VOD</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="about">
<div className="mx-auto max-w-7xl px-4">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Compucut team fabricating signage components in workshop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1800&auto=format&fit=crop" />
</div>
<div className="absolute -bottom-6 -right-6 hidden md:block">
<div className="rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 p-5">
<div className="flex items-center gap-4">
<div className="size-10 rounded-md bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
<i className="size-5 text-sky-400" data-lucide="calendar"></i>
</div>
<div>
<div className="text-slate-200 text-sm" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Est. 1985</div>
<div className="text-slate-400 text-xs">Nearly 30 years of excellence</div>
</div>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-semibold" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Heritage, precision, and scale</h2>
<p className="mt-4 text-slate-300" style={{fontFamily: `'Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`}}>
            From bespoke illuminated letters to nationwide rollouts, Compucut Signs blends master craftsmanship with modern manufacturing. Our process is engineered for quality, speed, and consistency.
          </p>
<ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
<li className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>30+</div>
<div className="text-xs text-slate-400 mt-1">Years of experience</div>
</li>
<li className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>1,200+</div>
<div className="text-xs text-slate-400 mt-1">Projects delivered</div>
</li>
<li className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>100%</div>
<div className="text-xs text-slate-400 mt-1">Nationwide coverage</div>
</li>
</ul>
<div className="mt-8 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-5 py-3 text-sm transition" href="#products">
<i className="size-4" data-lucide="grid"></i>
              Explore Products
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 px-5 py-3 text-sm transition" href="#contact">
<i className="size-4" data-lucide="phone"></i>
              Speak to a Specialist
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="products">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Products</h2>
<p className="mt-2 text-slate-400">Engineered for impact. Built to last.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-sky-300 hover:text-white transition" href="#contact">
          Request a spec sheet
          <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<button className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:to-white/[0.06] transition" data-open-product="Light Boxes">
<div className="relative">
<img alt="Illuminated light box signage in a retail environment" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Light Boxes</div>
<div className="text-xs text-slate-300">Edge-lit, double-sided, tension fabric</div>
</div>
<div className="size-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:translate-x-1 transition">
<i className="size-4 text-sky-300" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</button>
<button className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:to-white/[0.06] transition" data-open-product="Fabricated Letters">
<div className="relative">
<img alt="Fabricated metal letters with halo LED illumination on a facade" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Fabricated Letters</div>
<div className="text-xs text-slate-300">Acrylic, stainless steel, halo-lit</div>
</div>
<div className="size-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:translate-x-1 transition">
<i className="size-4 text-sky-300" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</button>
<button className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:to-white/[0.06] transition" data-open-product="Pylons & Totems">
<div className="relative">
<img alt="Outdoor pylon totem signage at business park" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Pylons & Totems</div>
<div className="text-xs text-slate-300">Wayfinding & brand presence</div>
</div>
<div className="size-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:translate-x-1 transition">
<i className="size-4 text-sky-300" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</button>
<button className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:to-white/[0.06] transition" data-open-product="LED Systems">
<div className="relative">
<img alt="LED signage and architectural lighting detail" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>LED Systems</div>
<div className="text-xs text-slate-300">High-efficiency modules</div>
</div>
<div className="size-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:translate-x-1 transition">
<i className="size-4 text-sky-300" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</button>
<button className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:to-white/[0.06] transition" data-open-product="Vinyl & Graphics">
<div className="relative">
<img alt="Large format vinyl graphics on interior glass walls" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Vinyl & Graphics</div>
<div className="text-xs text-slate-300">Walls, glazing, vehicles</div>
</div>
<div className="size-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:translate-x-1 transition">
<i className="size-4 text-sky-300" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</button>
<button className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:to-white/[0.06] transition" data-open-product="CNC & Routing">
<div className="relative">
<img alt="CNC router cutting acrylic letterforms" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>CNC & Routing</div>
<div className="text-xs text-slate-300">Precision-cut components</div>
</div>
<div className="size-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:translate-x-1 transition">
<i className="size-4 text-sky-300" data-lucide="maximize-2"></i>
</div>
</div>
</div>
</button>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="productModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-5xl h-[88vh] mt-6 rounded-2xl border border-white/10 bg-black/90 overflow-hidden">
<div className="flex items-center justify-between px-5 h-14 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="size-8 rounded-md bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
<i className="size-4 text-sky-300" data-lucide="layers"></i>
</div>
<div className="text-slate-100 text-sm" id="modalTitle" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Product</div>
</div>
<button className="inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="closeProductModal">
<i className="size-5" data-lucide="x"></i>
</button>
</div>
<div className="grid md:grid-cols-2 h-[calc(88vh-56px)]">
<div className="relative">
<div className="size-full relative" id="modalImageWrap">
<img alt="Product image preview" className="absolute inset-0 w-full h-full object-cover" id="modalImage" src="" />
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<button className="inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/10 hover:bg-white/20 transition" id="prevImage">
<i className="size-4" data-lucide="chevron-left"></i>
</button>
<div className="flex items-center gap-2" id="modalImageDots"></div>
<button className="inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/10 hover:bg-white/20 transition" id="nextImage">
<i className="size-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="p-6 overflow-y-auto">
<h3 className="text-xl font-semibold tracking-tight text-white" id="modalHeadline" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}></h3>
<p className="mt-3 text-slate-300" id="modalDescription"></p>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">Lead Time</div>
<div className="text-sm text-slate-200">7–14 days</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">Warranty</div>
<div className="text-sm text-slate-200">12–24 months</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">Illumination</div>
<div className="text-sm text-slate-200" id="modalSpecIllumination">LED</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="text-xs text-slate-400">Materials</div>
<div className="text-sm text-slate-200" id="modalSpecMaterials">Acrylic, Aluminum</div>
</div>
</div>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 px-4 py-2 text-sm transition" href="#contact">
<i className="size-4" data-lucide="file-input"></i>
                Request a Quote for this Product
              </a>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-2 text-sm transition" id="downloadSpec">
<i className="size-4" data-lucide="download"></i>
                Download Spec
              </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="services">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Services</h2>
<p className="mt-2 text-slate-400">End-to-end capability, from concept to installation.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="servicesPrev">
<i className="size-4" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex items-center justify-center size-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="servicesNext">
<i className="size-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-8 overflow-x-auto [-webkit-overflow-scrolling:touch] scroll-smooth" id="servicesRail">
<div className="grid grid-flow-col auto-cols-[78%] sm:auto-cols-[42%] lg:auto-cols-[28%] gap-5 snap-x snap-mandatory">

<div className="snap-start rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
<div>
<div className="size-10 rounded-md bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
<i className="size-5 text-sky-400" data-lucide="box"></i>
</div>
<div className="mt-4 text-lg text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>3D Renderings</div>
<p className="mt-2 text-sm text-slate-300">See your signage in context before fabrication—accelerate approvals.</p>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="sparkles"></i> Photorealistic outputs
              </span>
</div>
</div>
<div className="snap-start rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
<div>
<div className="size-10 rounded-md bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
<i className="size-5 text-sky-400" data-lucide="image"></i>
</div>
<div className="mt-4 text-lg text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Artistic Impressions</div>
<p className="mt-2 text-sm text-slate-300">Campaign-ready visuals, elevations, and branded mockups.</p>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="file-text"></i> Presentation packs
              </span>
</div>
</div>
<div className="snap-start rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
<div>
<div className="size-10 rounded-md bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
<i className="size-5 text-sky-400" data-lucide="map-pin"></i>
</div>
<div className="mt-4 text-lg text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Nationwide Installation</div>
<p className="mt-2 text-sm text-slate-300">Skilled crews, method statements, and H&S documentation.</p>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="truck"></i> Rapid deployment
              </span>
</div>
</div>
<div className="snap-start rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between">
<div>
<div className="size-10 rounded-md bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
<i className="size-5 text-sky-400" data-lucide="wrench"></i>
</div>
<div className="mt-4 text-lg text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Maintenance</div>
<p className="mt-2 text-sm text-slate-300">Proactive servicing, cleaning, and LED replacements.</p>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="timer"></i> SLA support
              </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="portfolio">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Featured Case Studies</h2>
<p className="mt-2 text-slate-400">From corporate HQ to retail rollouts—high-impact signage at scale.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-sky-300 hover:text-white transition" href="#contact">
          Start your project
          <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-2">

<div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-5 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Corporate Facade Upgrade</div>
<div className="text-xs text-slate-400 mt-1">Fabricated letters with halo LED</div>
</div>
<div className="inline-flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="map-pin"></i> Sandton, Johannesburg
            </div>
</div>
<div className="px-5 pb-5">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10" data-beforeafter="">
<img alt="Before facade signage" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=1600&auto=format&fit=crop" />
<img alt="After facade signage with illuminated letters" className="absolute inset-0 w-full h-full object-cover [clip-path:inset(0_0_0_50%)]" data-after="" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-sky-400/80"></div>
</div>
<button aria-label="Drag handle" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-10 rounded-full bg-sky-500/20 border border-sky-500/40 backdrop-blur-md flex items-center justify-center">
<i className="size-5 text-sky-300" data-lucide="grip-vertical"></i>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-5 flex items-center justify-between">
<div>
<div className="text-white font-medium tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Retail Pylon Modernisation</div>
<div className="text-xs text-slate-400 mt-1">LED retrofits, wayfinding refresh</div>
</div>
<div className="inline-flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="map-pin"></i> Durban, KZN
            </div>
</div>
<div className="px-5 pb-5">
<div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10" data-beforeafter="">
<img alt="Before pylon signage" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop" />
<img alt="After upgraded LED pylon signage" className="absolute inset-0 w-full h-full object-cover [clip-path:inset(0_0_0_50%)]" data-after="" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-sky-400/80"></div>
</div>
<button aria-label="Drag handle" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-10 rounded-full bg-sky-500/20 border border-sky-500/40 backdrop-blur-md flex items-center justify-center">
<i className="size-5 text-sky-300" data-lucide="grip-vertical"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<div className="group rounded-xl overflow-hidden border border-white/10">
<div className="relative">
<img alt="Interior wayfinding and brand wall" className="h-56 w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 text-sm text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Interior Wayfinding</div>
</div>
</div>
<div className="group rounded-xl overflow-hidden border border-white/10">
<div className="relative">
<img alt="Shopping centre external signage" className="h-56 w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 text-sm text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Retail Exteriors</div>
</div>
</div>
<div className="group rounded-xl overflow-hidden border border-white/10">
<div className="relative">
<img alt="Office reception illuminated logo" className="h-56 w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 text-sm text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Reception Logos</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="h-[42vh] bg-fixed bg-center bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2000&auto=format&fit=crop')`}}>
<div className="w-full h-full bg-black/60 flex items-center justify-center">
<div className="text-center px-6">
<h3 className="text-2xl md:text-3xl text-white font-semibold tracking-tight" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Built for scale. Delivered with care.</h3>
<p className="mt-2 text-slate-300">Complex rollouts, tight deadlines, consistent quality.</p>
</div>
</div>
</div>
</section>

<section className="relative py-20" id="contact">
<div className="mx-auto max-w-7xl px-4">
<div className="grid lg:grid-cols-2 gap-8">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-white" style={{fontFamily: `'Montserrat','Helvetica Neue',Arial,sans-serif`}}>Request a Free Quote</h2>
<p className="mt-1 text-slate-400 text-sm">We’ll reply within one business day.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-sky-300">
<i className="size-4" data-lucide="message-circle"></i>
              +27 (0)82 000 0000
            </div>
</div>

<div className="mt-6 flex items-center gap-3">
<div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-1/3 bg-sky-500/60" id="progressBar"></div>
</div>
<div className="text-xs text-slate-400"><span id="stepLabel">Step 1 of 3</span></div>
</div>
<form className="mt-6 space-y-5" id="quoteForm">

<div className="grid sm:grid-cols-2 gap-4" data-step="1">
<div className="space-y-2">
<label className="text-xs text-slate-300">Full Name</label>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50" name="name" placeholder="Jane Doe" required type="text" />
</div>
<div className="space-y-2">
<label className="text-xs text-slate-300">Company</label>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50" name="company" placeholder="Your Company" type="text" />
</div>
<div className="space-y-2 sm:col-span-2">
<label className="text-xs text-slate-300">Email</label>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50" name="email" placeholder="you@company.com" required type="email" />
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4 hidden" data-step="2">
<div className="space-y-2 sm:col-span-2">
<label className="text-xs text-slate-300">Type of Sign</label>
<select className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50" name="type">
<option>Light Boxes</option>
<option>Fabricated Letters</option>
<option>Pylons & Totems</option>
<option>LED Systems</option>
<option>Vinyl & Graphics</option>
<option>CNC & Routing</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-300">Quantity</label>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50" min="1" name="qty" type="number" value="1" />
</div>
<div className="space-y-2">
<label className="text-xs text-slate-300">Site Location</label>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50" name="location" placeholder="City / Site" type="text" />
</div>
<div className="space-y-2 sm:col-span-2">
<label className="text-xs text-slate-300">Details</label>
<textarea className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50" name="details" placeholder="Dimensions, materials, illumination, deadline..." rows="3"></textarea>
</div>
</div>

<div className="grid gap-4 hidden" data-step="3">
<div className="space-y-2">
<label className="text-xs text-slate-300">Upload Artwork (PDF/AI/SVG/JPG)</label>
<input accept=".pdf,.ai,.svg,.jpg,.jpeg,.png" className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 file:mr-4 file:rounded-md file:border-0 file:bg-sky-500/20 file:text-sky-200 file:px-3 file:py-1.5" name="artwork" type="file" />
</div>
<div className="space-y-2">
<label className="text-xs text-slate-300">Preferred Contact</label>
<div className="grid grid-cols-2 gap-3">
<button className="contactPref inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-2 text-sm transition" data-contact="call" type="button">
<i className="size-4" data-lucide="phone"></i> Call
                  </button>
<button className="contactPref inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-2 text-sm transition" data-contact="whatsapp" type="button">
<i className="size-4" data-lucide="message-circle"></i> WhatsApp
                  </button>
</div>
</div>
</div>

<div className="pt-2 flex items-center justify-between border-t border-white/10">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-2 text-sm transition" id="prevStep" type="button">
<i className="size-4" data-lucide="chevron-left"></i> Back
              </button>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-2 text-sm transition" href="tel:+27110000000">
<i className="size-4" data-lucide="phone"></i> Call Us
                </a>
<button className="inline-flex items-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 px-4 py-2 text-sm transition" id="nextStep" type="button">
                  Next <i className="size-4" data-lucide="chevron-right"></i>
</button>
<button className="hidden inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 px-4 py-2 text-sm transition" id="submitForm" type="submit">
                  Submit <i className="size-4" data-lucide="check"></i>
</button>
</div>
</div>
</form>
</div>

<div className="space-y-5">
<div className="rounded-2xl overflow-hidden border border-white/10">
<iframe className="w-full h-[360px]" src="https://maps.google.com/maps?q=Sandton%20Johannesburg&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Compucut Signs Location"></iframe>
</div>
<div className="grid sm:grid-cols-3 gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 px-4 py-3 text-sm transition" href="https://wa.me/27820000000" rel="noopener" target="_blank">
<i className="size-4" data-lucide="message-circle"></i> WhatsApp
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-3 text-sm transition" href="tel:+27110000000">
<i className="size-4" data-lucide="phone"></i> Click-to-Call
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 px-4 py-3 text-sm transition" href="mailto:hello@compucut.co.za">
<i className="size-4" data-lucide="mail"></i> Email Us
            </a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
              {"<"}

You've reached your daily limit of 5 prompts. Upgrade to Pro for unlimited daily usage.</div></div></div></div></div></section>
    </>
  );
}
