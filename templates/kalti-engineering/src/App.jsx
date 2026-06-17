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



      // Set current year in footer
      document.addEventListener('DOMContentLoaded', function () {
        var yearSpan = document.getElementById('year');
        if (yearSpan) {
          yearSpan.textContent = new Date().getFullYear();
        }
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
      

<div className="flex min-h-screen flex-col">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

<a className="flex items-center gap-2" href="https://kaltiengineering.com">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#009247] text-xs font-semibold tracking-tight text-white">
              KE
            </div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight">
                Kalti Engineering
              </span>
</div>
</a>

<nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
<a className="transition hover:text-slate-900" href="#services">Services</a>
<a className="transition hover:text-slate-900" href="#industries">Applications</a>
<a className="transition hover:text-slate-900" href="#about">About</a>
<a className="transition hover:text-slate-900" href="#projects">Projects</a>
<a className="transition hover:text-slate-900" href="#faq">FAQ</a>
<a className="transition hover:text-slate-900" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden items-center gap-2 rounded-full border border-[#F89C1C]/20 bg-[#F89C1C]/10 px-3 py-1.5 text-xs font-semibold tracking-tight text-[#F89C1C] shadow-sm transition hover:border-[#F89C1C]/30 hover:bg-[#F89C1C]/20 sm:flex" href="#contact">
<iconify-icon className="text-[0.75rem]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Get a free floor inspection</span>
</a>

<button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 md:hidden" type="button">
<iconify-icon className="text-sm" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-16">

<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#F89C1C]/20 bg-[#F89C1C]/10 px-2.5 py-1 text-[0.7rem] font-medium text-[#F89C1C]">
<span className="h-1.5 w-1.5 rounded-full bg-[#F89C1C]"></span>
<span>Specialist PU &amp; Epoxy industrial flooring contractor</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  PU &amp; Epoxy industrial flooring
                  <span className="text-[#009247]">engineered for long‑term performance</span>
</h1>
<p className="max-w-xl text-base font-medium leading-relaxed text-slate-600">
                  Kalti Engineering designs and installs PU and Epoxy Flooring Solution
                  for heavy‑duty factories, warehouses, logistics hubs, production
                  lines and clean environments across in Bangladesh, with focus on durability,
                  safety and minimal downtime.
                </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#009247] px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-sm transition hover:bg-[#007a3a]" href="#contact">
<span>Get a PU / Epoxy floor quote</span>
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold tracking-tight text-slate-800 shadow-sm transition hover:bg-slate-50" href="#services">
<iconify-icon className="text-xs" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Compare PU &amp; Epoxy Solution</span>
</a>
</div>
<div className="grid gap-4 text-sm font-medium text-slate-600 sm:grid-cols-3">
<div className="space-y-1">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                    PU Flooring 
                  </div>
<div>Heavy‑duty, hygienic, thermal shock resistant floors</div>
</div>
<div className="space-y-1">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                    Epoxy Flooring 
                  </div>
<div>Abrasion‑resistant, dust‑free industrial coatings</div>
</div>
<div className="space-y-1">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
                    SLE Flooring 
                  </div>
<div>Self‑leveling, high‑gloss and repair overlays</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="relative">
<div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-[#F89C1C]/10 via-slate-50 to-slate-100/70 blur-sm"></div>
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
<div className="border-b border-slate-200 bg-slate-50/80 px-4 py-3">
<div className="flex items-center justify-between text-xs font-medium text-slate-600">
<div className="flex items-center gap-2">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#009247]"></span>
<span>Typical PU / Epoxy flooring package</span>
</div>
<span className="text-slate-500">Design • Surface prep • Application</span>
</div>
</div>
<div className="grid gap-4 p-4 sm:grid-cols-2">
<div className="space-y-3">
<div className="space-y-1">
<div className="text-xs font-semibold uppercase tracking-tight text-slate-500">
                          Key systems
                        </div>
<ul className="space-y-1 text-sm font-medium text-slate-700">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F89C1C]"></span>
<span>PU Flooring – heavy‑duty &amp; hygienic</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F89C1C]"></span>
<span>Epoxy Flooring – coatings &amp; high‑build</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F89C1C]"></span>
<span>SLE – Self‑Leveling Epoxy Flooring</span>
</li>
</ul>
</div>
<div className="space-y-1">
<div className="text-xs font-semibold uppercase tracking-tight text-slate-500">
                          Performance focus
                        </div>
<div className="flex flex-wrap gap-1.5">
<span className="rounded-full bg-slate-50 px-2 py-1 text-[0.7rem] font-medium text-slate-700 ring-1 ring-slate-200">
                            Forklift &amp; trolley traffic
                          </span>
<span className="rounded-full bg-slate-50 px-2 py-1 text-[0.7rem] font-medium text-slate-700 ring-1 ring-slate-200">
                            Chemical &amp; abrasion resistance
                          </span>
<span className="rounded-full bg-slate-50 px-2 py-1 text-[0.7rem] font-medium text-slate-700 ring-1 ring-slate-200">
                            Hygienic &amp; dust‑free finishes
                          </span>
</div>
</div>
</div>
<div className="space-y-3">
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
<div className="flex items-center justify-between text-xs font-medium text-slate-600">
<span>Typical floor areas</span>
<span className="flex items-center gap-1 text-[#009247]">
<iconify-icon className="text-[0.75rem]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            24x7 operations
                          </span>
</div>
<ul className="mt-2 space-y-1 text-sm font-medium text-slate-700">
<li>Production &amp; packaging lines</li>
<li>Warehouses &amp; logistics hubs</li>
<li>Food, pharma &amp; clean areas</li>
</ul>
</div>
<div className="space-y-2 rounded-lg border border-dashed border-[#F89C1C]/30 bg-[#F89C1C]/5 p-3">
<div className="flex items-center gap-2 text-xs font-semibold tracking-tight text-[#F89C1C]">
<iconify-icon className="text-[0.75rem]" icon="solar:call-chat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Urgent floor repair or re‑coating?</span>
</div>
<p className="text-sm font-medium text-slate-700">
                          We handle industrial floor repairs, surface preparation and
                          rapid‑curing PU / Epoxy systems planned around shutdowns.
                        </p>
<a className="inline-flex items-center gap-1 text-xs font-semibold tracking-tight text-[#F89C1C] hover:text-[#d88316]" href="tel:+8801822258255">
<span>Call now for quick support</span>
<iconify-icon className="text-[0.75rem]" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-4 right-4 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-[0.75rem] text-[#009247]" icon="solar:medal-ribbons-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Industrial floor performance</span>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                    Optimised
                    <span className="align-middle text-[0.7rem] font-medium text-[#009247]">
                      for uptime &amp; safety
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="services">
<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Core PU &amp; Epoxy flooring services
                </h2>
<p className="max-w-2xl text-base font-medium text-slate-600">
                  End‑to‑end PU and Epoxy industrial flooring solutions for new floors,
                  upgrades and repair projects, backed by correct surface preparation
                  and application.
                </p>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold tracking-tight text-slate-800 hover:bg-slate-100" href="#contact">
<span>Request PU / Epoxy specification</span>
<iconify-icon className="text-[0.75rem]" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

<article className="flex flex-col rounded-xl border border-slate-200 bg-[#F89C1C]/5 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F89C1C]/20 text-[#F89C1C]">
<iconify-icon className="text-xs" icon="solar:drop-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      PU Flooring Solution
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Heavy‑duty &amp; hygienic
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Polyurethane (PU) Flooring solution for food, beverage, pharma and
                  heavy industry where high chemical resistance, impact resistance and
                  thermal shock performance are critical.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Handles hot washdowns &amp; temperature swings</li>
<li>Seamless, hygienic and easy to clean</li>
<li>Suitable for wet, oily and heavy traffic areas</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Epoxy Flooring Solution
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Industrial &amp; warehouse
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Epoxy Flooring for factories, warehouses, assembly areas and parking
                  zones that need abrasion‑resistant, dust‑free and easy‑to‑maintain
                  surfaces at an economical cost.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>High wear &amp; impact resistance</li>
<li>Coatings, high‑build and anti‑skid options</li>
<li>Line marking &amp; safety zoning</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:slider-vertical-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      SLE Flooring Solution
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Self‑leveling epoxy
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Self‑Leveling Epoxy (SLE) Flooring for smooth, joint‑free, high‑
                  performance surfaces in clean rooms, showrooms and precision
                  manufacturing areas.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Perfectly level, high‑gloss finish</li>
<li>Easy to clean, stain &amp; dust‑resistant</li>
<li>Ideal over prepared concrete floors</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:road-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Floor Hardener &amp; toppings
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Heavy traffic
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Metallic and non‑metallic Floor Hardener systems and topping layers
                  that can work with PU / Epoxy to build long‑life industrial floors.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Increased abrasion resistance</li>
<li>Reduced dusting &amp; surface wear</li>
<li>Ideal base for future PU / Epoxy</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:diamond-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Polished Concrete Solution
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Durable &amp; low‑maintenance
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Mechanically polished concrete floors that can be used standalone or
                  integrated with PU / Epoxy zones for cost‑optimised industrial
                  layouts.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Hard, dust‑free and attractive finish</li>
<li>Reduced life‑cycle maintenance cost</li>
<li>Good light reflectivity for interiors</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:rows-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Vinyl Flooring Solution
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Light‑duty &amp; clean rooms
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Seamless, easy‑to‑clean Vinyl Flooring for support areas where PU /
                  Epoxy industrial flooring is not required but hygiene and design
                  still matter.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Slip‑resistant, low‑maintenance surfaces</li>
<li>Multiple colours &amp; patterns</li>
<li>Can adjoin PU / Epoxy zones</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Fair Face Plaster
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    Walls &amp; surrounds
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  High‑quality Fair Face Plaster for walls and columns adjoining PU /
                  Epoxy floor areas, creating a clean, durable industrial environment.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Uniform, crack‑resistant surface</li>
<li>Improved durability &amp; aesthetics</li>
<li>Ideal for premium industrial interiors</li>
</ul>
</article>

<article className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:test-tubes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      Construction Chemicals
                    </h3>
</div>
<span className="rounded-full bg-white px-2 py-1 text-[0.7rem] font-medium text-slate-600 ring-1 ring-slate-200">
                    PU / Epoxy support
                  </span>
</div>
<p className="mt-3 text-sm font-medium text-slate-600">
                  Primers, repair mortars, bonding agents and curing compounds that
                  ensure PU and Epoxy Flooring solution perform to design life.
                </p>
<ul className="mt-3 space-y-1.5 text-sm font-medium text-slate-700">
<li>Substrate repair &amp; moisture control</li>
<li>Manufacturer‑matched primers &amp; screeds</li>
<li>Integrated with flooring specification</li>
</ul>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="industries">
<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Where our PU &amp; Epoxy floors are used
                </h2>
<p className="max-w-2xl text-base font-medium text-slate-600">
                  Industrial and commercial environments that demand durable, safe and
                  low‑maintenance floors with high uptime and cleanability.
                </p>
</div>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-3">
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:factory-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Industrial &amp; warehouse flooring
                  </h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-600">
                  PU and Epoxy Flooring, SLE and Floor Hardener for factories,
                  logistics centres, machine shops and production lines with forklift
                  and pallet truck movement.
                </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:hospital-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Food, pharma &amp; clean environments
                  </h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-600">
                  PU seamless floors for wet process areas, Epoxy / SLE for clean
                  rooms, packaging, labs and healthcare spaces needing hygienic,
                  chemical‑resistant surfaces.
                </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#009247]/20 text-[#009247]">
<iconify-icon className="text-xs" icon="solar:home-smile-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Commercial &amp; support areas
                  </h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-600">
                  Epoxy, SLE, Vinyl and Polished Concrete for showrooms, service bays,
                  corridors and utility areas that connect to PU / Epoxy production
                  zones.
                </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="about">
<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-14">
<div className="flex-1 space-y-3">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Why clients choose Kalti Engineering for PU &amp; Epoxy floors
              </h2>
<p className="text-base font-medium text-slate-600">
                We focus on the right PU / Epoxy system design, thorough surface
                preparation and skilled application so your industrial floors perform
                reliably for years, not just the first shutdown cycle.
              </p>
<div className="mt-2 grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Solution‑driven system selection
                  </h3>
<p className="text-sm font-medium text-slate-600">
                    We match each area to PU, Epoxy, SLE, Floor Hardener or Polished
                    Concrete based on load, chemicals, hygiene and budget.
                  </p>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Strong surface preparation
                  </h3>
<p className="text-sm font-medium text-slate-600">
                    Grinding, scarifying, crack treatment and moisture checks are built
                    into our flooring process to reduce failures and rework.
                  </p>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Application as per data sheets
                  </h3>
<p className="text-sm font-medium text-slate-600">
                    We follow manufacturer recommendations for PU and Epoxy mixing,
                    application thickness and curing to achieve design life and
                    warranty conditions.
                  </p>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Phased work around operations
                  </h3>
<p className="text-sm font-medium text-slate-600">
                    Work is planned around shutdowns and production schedules so PU /
                    Epoxy installation and curing impact your uptime as little as
                    possible.
                  </p>
</div>
</div>
</div>

<div className="flex-1 space-y-4">
<div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    At a glance
                  </h3>
<span className="text-xs font-medium text-slate-500">PU &amp; Epoxy flooring</span>
</div>
<dl className="mt-3 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-2">
<div className="space-y-0.5">
<dt className="text-xs font-semibold uppercase tracking-tight text-slate-500">
                      Expertise
                    </dt>
<dd>PU, Epoxy, SLE, Floor Hardener &amp; Polished Concrete</dd>
</div>
<div className="space-y-0.5">
<dt className="text-xs font-semibold uppercase tracking-tight text-slate-500">
                      Work model
                    </dt>
<dd>Turnkey supply &amp; apply, or application only</dd>
</div>
<div className="space-y-0.5">
<dt className="text-xs font-semibold uppercase tracking-tight text-slate-500">
                      Project types
                    </dt>
<dd>New build, renovation &amp; floor repair works</dd>
</div>
<div className="space-y-0.5">
<dt className="text-xs font-semibold uppercase tracking-tight text-slate-500">
                      Locations
                    </dt>
<dd>Serving key industrial &amp; Commercial area in Bangladesh</dd>
</div>
</dl>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xs text-[#009247]" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    How a typical PU / Epoxy project runs
                  </h3>
</div>
<ol className="mt-3 space-y-2 text-sm font-medium text-slate-700">
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-[#F89C1C]/20 text-center text-[0.65rem] font-semibold text-[#F89C1C]">
                      1
                    </span>
<span>Site visit, floor inspection, moisture &amp; flatness check</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-[#F89C1C]/20 text-center text-[0.65rem] font-semibold text-[#F89C1C]">
                      2
                    </span>
<span>Recommendation of PU, Epoxy or SLE system with thickness</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-[#F89C1C]/20 text-center text-[0.65rem] font-semibold text-[#F89C1C]">
                      3
                    </span>
<span>Quotation, area planning and shutdown‑aligned scheduling</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-[#F89C1C]/20 text-center text-[0.65rem] font-semibold text-[#F89C1C]">
                      4
                    </span>
<span>Surface preparation, PU / Epoxy application and QA checks</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 h-4 w-4 rounded-full bg-[#F89C1C]/20 text-center text-[0.65rem] font-semibold text-[#F89C1C]">
                      5
                    </span>
<span>Handover with curing, cleaning and maintenance guidelines</span>
</li>
</ol>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="projects">
<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Sample PU &amp; Epoxy project profiles
                </h2>
<p className="max-w-2xl text-base font-medium text-slate-600">
                  Indicative examples of the PU and Epoxy flooring projects we execute.
                  Detailed case studies can be shared during discussion.
                </p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="h-1.5 w-1.5 rounded-full bg-[#009247]"></span>
<span>References available on request</span>
</div>
</div>
<div className="mt-6 grid gap-5 md:grid-cols-3">
<article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
<span>Manufacturing plant</span>
<span>Epoxy flooring</span>
</div>
<h3 className="mt-2 text-sm font-semibold tracking-tight text-slate-900">
                  Heavy‑duty epoxy flooring for production &amp; warehouse areas
                </h3>
<p className="mt-2 text-sm font-medium text-slate-600">
                  Supply and application of abrasion‑resistant Epoxy Flooring with line
                  marking, impact‑resistant covings and anti‑skid safety zones planned
                  around production shifts.
                </p>
</article>
<article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
<span>Food &amp; beverage unit</span>
<span>PU flooring</span>
</div>
<h3 className="mt-2 text-sm font-semibold tracking-tight text-slate-900">
                  PU floors for wet processing, cold rooms &amp; packing areas
                </h3>
<p className="mt-2 text-sm font-medium text-slate-600">
                  Installation of slip‑resistant PU systems with covings and drains,
                  designed for hot water cleaning, chemical washing and thermal
                  cycling.
                </p>
</article>
<article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
<span>Pharma &amp; clean rooms</span>
<span>SLE / Epoxy</span>
</div>
<h3 className="mt-2 text-sm font-semibold tracking-tight text-slate-900">
                  Self‑leveling epoxy for clean rooms &amp; packaging halls
                </h3>
<p className="mt-2 text-sm font-medium text-slate-600">
                  Seamless SLE Flooring with high‑gloss finish, low dust, easy cleaning
                  and integrated covings for strict hygiene requirements.
                </p>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="faq">
<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                PU &amp; Epoxy flooring – FAQs
              </h2>
<p className="max-w-2xl text-base font-medium text-slate-600">
                Clear, practical answers to common questions about PU and Epoxy
                industrial flooring — written to help owners, consultants and facility
                managers take decisions faster.
              </p>
</div>
<div className="mt-6 space-y-4 text-sm font-medium text-slate-700">
<div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  What is the best floor for factories and warehouses – PU or Epoxy?
                </h3>
<p className="mt-2">
                  The best floor for factories and warehouses depends on load, traffic,
                  chemical exposure, cleaning method and temperature:
                </p>
<ul className="mt-2 list-disc space-y-1 pl-5">
<li>
<span className="font-semibold">Epoxy Flooring</span> is ideal for most
                    general industrial and warehouse floors that need abrasion‑
                    resistance and a dust‑free, easy‑to‑clean surface at an economical
                    cost.
                  </li>
<li>
<span className="font-semibold">PU Flooring</span> is preferred where
                    there is heavy impact, temperature variation, hot water cleaning or
                    aggressive chemicals, such as food, beverage and pharma units.
                  </li>
<li>
<span className="font-semibold">SLE Flooring</span> (Self‑Leveling
                    Epoxy) is used where a smooth, joint‑free, high‑gloss finish is
                    required, such as clean rooms and showrooms.
                  </li>
<li>
<span className="font-semibold">Floor Hardener and Polished Concrete</span>
                    can be combined with PU / Epoxy in selected zones to optimise cost
                    and performance.
                  </li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  How do I choose between epoxy flooring and PU flooring?
                </h3>
<p className="mt-2">
                  Choose Epoxy Flooring when you need a hard, glossy, chemical‑
                  resistant surface for normal to medium‑heavy industrial use at an
                  economical cost and relatively quick installation. Choose PU Flooring
                  when your floor faces thermal shocks, heavy impact, hot water
                  cleaning or aggressive chemicals. PU systems are slightly more
                  flexible, handle temperature swings better and are widely used in
                  food, beverage and pharma environments.
                </p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  What is SLE Flooring and where is it used?
                </h3>
<p className="mt-2">
                  SLE Flooring stands for Self‑Leveling Epoxy Flooring. It is a
                  high‑build epoxy system that spreads and levels itself to create a
                  seamless, smooth, high‑gloss surface. It is used in clean rooms,
                  electronic assembly areas, pharma facilities, showrooms and spaces
                  where appearance, cleanliness and joint‑free surfaces are important.
                </p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  How long does PU or Epoxy industrial flooring installation take?
                </h3>
<p className="mt-2">
                  PU and Epoxy flooring timelines depend mainly on the area, system
                  thickness, surface condition and curing time. As a guideline:
                </p>
<ul className="mt-2 list-disc space-y-1 pl-5">
<li>
                    Smaller areas (up to a few hundred square metres) can often be
                    completed within 2–4 days, including surface preparation.
                  </li>
<li>
                    Larger factories and warehouses require phased work to match your
                    production schedule and curing windows.
                  </li>
<li>
                    Most Epoxy and PU systems need a minimum curing period before
                    opening to pedestrian and forklift traffic, which we plan into the
                    schedule.
                  </li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Do you visit the site before recommending a PU / Epoxy system?
                </h3>
<p className="mt-2">
                  Yes. A site visit and substrate inspection are strongly recommended
                  before we finalise any PU, Epoxy or SLE Solution. During the visit we
                  check the existing floor condition, level variations, moisture
                  levels, cracks, movement joints and drainage details. This helps us
                  propose a realistic specification, accurate costing and a practical
                  work schedule.
                </p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Which cities and regions does Kalti Engineering serve?
                </h3>
<p className="mt-2">
                  Kalti Engineering serves key industrial and commercial regions in Bangladesh.
                  For larger PU / Epoxy industrial flooring or multi‑site projects we
                  can mobilise teams across states. Share your project location in the
                  enquiry form and we will confirm feasibility, timelines and support
                  options.
                </p>
</div>
</div>
</div>
</section>

<section className="bg-white" id="contact">
<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
<div className="grid gap-8 lg:grid-cols-3">
<div className="space-y-3">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Get a PU or Epoxy flooring quote
                </h2>
<p className="text-base font-medium text-slate-600">
                  Share your site details, floor area and current floor problems. Our
                  team will suggest the right PU, Epoxy, SLE, Floor Hardener, Polished
                  Concrete and supporting Construction Chemicals for your project.
                </p>
<div className="space-y-2 text-sm font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-xs text-[#009247]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-[#009247]" href="mailto:info@kaltiengineering.com">
                      info@kaltiengineering.com
                    </a>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xs text-[#009247]" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-[#009247]" href="tel:+8801822258255">
                      +88 018220258255
                    </a>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-xs text-[#009247]" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>House# 509/3, Polok Road, South Manipur, Mirpur-2, Dhaka-1216, Bangladesh.</span>
</div>
</div>
</div>
<div className="lg:col-span-2">
<form className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
<div className="grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="name">
                        Name
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="name" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="company">
                        Company
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="company" placeholder="Organization / project name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="email">
                        Email
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="email" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="phone">
                        Phone
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="phone" placeholder="+88‑" type="tel"/>
</div>
</div>
<div className="mt-3 grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="location">
                        Site location
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="location" placeholder="City / plant / project location" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="timeline">
                        Expected timeline
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="timeline" placeholder="e.g. next shutdown, this month, ASAP" type="text"/>
</div>
</div>
<div className="mt-3 space-y-1.5">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="scope">
                      Brief scope of work
                    </label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#009247] focus:outline-none focus:ring-1 focus:ring-[#009247]" id="scope" placeholder="Mention area (in sq.ft or sq.m), existing floor (concrete, tile, etc.), required solution (PU, Epoxy, SLE, Floor Hardener,Polished Concrete, Vinyl), and any known issues (dusting, cracks, water, chemicals, etc.)." rows="4"></textarea>
</div>
<div className="mt-3 space-y-1.5">
<span className="text-xs font-semibold tracking-tight text-slate-700">
                      Preferred systems
                    </span>
<div className="grid gap-2 sm:grid-cols-3">
<label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
<input className="h-3.5 w-3.5 rounded border-slate-300 text-[#009247] focus:ring-[#009247]" type="checkbox"/>
<span>Floor Hardener</span>
</label>
<label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
<input className="h-3.5 w-3.5 rounded border-slate-300 text-[#009247] focus:ring-[#009247]" type="checkbox"/>
<span>Polished Concrete</span>
</label>
<label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
<input className="h-3.5 w-3.5 rounded border-slate-300 text-[#009247] focus:ring-[#009247]" type="checkbox"/>
<span>Not sure / need guidance</span>
</label>
</div>
</div>
<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#009247] px-5 py-2 text-sm font-semibold tracking-tight text-white shadow-sm transition hover:bg-[#007a3a] focus:outline-none focus:ring-2 focus:ring-[#009247] focus:ring-offset-2 focus:ring-offset-slate-50" type="submit">
<span>Submit flooring enquiry</span>
<iconify-icon className="text-xs" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-[0.7rem] font-medium text-slate-500">
                      By submitting, you agree to be contacted regarding PU / Epoxy flooring solutions for your project.
                    </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
<div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#009247] text-xs font-semibold tracking-tight text-white">
                  KE
                </div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-white">
                    Kalti Engineering
                  </span>
<span className="text-[0.7rem] font-medium text-slate-400">
                    PU &amp; Epoxy Industrial Flooring Contractor
                  </span>
</div>
</div>
<p className="max-w-sm text-xs font-medium text-slate-400">
                Design and application of PU Flooring, Epoxy Flooring, SLE, Floor Hardener,
                Polished Concrete and supporting Construction Chemicals for factories,
                warehouses, logistics hubs and clean environments.
              </p>
</div>
<div className="grid flex-1 gap-6 text-xs font-medium text-slate-300 sm:grid-cols-3 md:max-w-xl">
<div className="space-y-2">
<h3 className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">
                  Navigation
                </h3>
<ul className="space-y-1.5">
<li><a className="hover:text-white" href="#services">Services</a></li>
<li><a className="hover:text-white" href="#industries">Applications</a></li>
<li><a className="hover:text-white" href="#projects">Projects</a></li>
<li><a className="hover:text-white" href="#faq">FAQ</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">
                  Core solutions
                </h3>
<ul className="space-y-1.5">
<li>PU Flooring Solution</li>
<li>Epoxy Flooring Solution</li>
<li>SLE Epoxy Solution</li>
<li>Floor Hardener</li>
<li>Polished Concrete</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">
                  Contact
                </h3>
<ul className="space-y-1.5">
<li>
<a className="hover:text-white" href="mailto:info@kaltiengineering.com">
                      info@kaltiengineering.com
                    </a>
</li>
<li>
<a className="hover:text-white" href="tel:+8801822258255">
                      +88 01822-258255
                    </a>
</li>
<li className="text-slate-400">
                    House# 509/3, Polok Road, South Manipur, Mirpur-2, Dhaka-1216, Bangladesh.
                  </li>
</ul>
</div>
</div>
</div>
<div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-4 text-[0.7rem] font-medium text-slate-500 sm:flex-row sm:items-center">
<p>© <span id="year"></span> Kalti Engineering. All rights reserved.</p>
<p>PU &amp; Epoxy industrial flooring • Factory, warehouse &amp; clean area solutions.</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
