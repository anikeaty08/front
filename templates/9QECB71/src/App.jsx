import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize lucide icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-slate-50 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-center gap-3 py-2 text-sm text-slate-600" style={{animation: 'fadeIn 0.7s ease-out both', animationDelay: '.05s'}}>
<i className="h-4 w-4 text-indigo-600" data-lucide="megaphone"></i>
<span className="truncate">Now booking October/November retainers. Limited spots available.</span>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.1s'}}>
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-indigo-700 font-semibold tracking-tighter group-hover:border-slate-300 transition-colors">NL</div>
<div className="text-slate-900 font-medium tracking-tight">Next Level MSP Consulting</div>
</a>

<nav className="hidden md:flex items-center gap-8" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.12s'}}>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#approach">Approach</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#case-study">Case Studies</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.14s'}}>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors" href="#contact">
<i className="h-4 w-4 text-slate-700" data-lucide="calendar"></i>
              Book a Call
            </a>
<button aria-label="Open menu" className="inline-flex md:hidden items-center justify-center rounded-md border border-slate-300 p-2 hover:bg-slate-50 transition-colors">
<i className="h-5 w-5 text-slate-700" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-x-0 -top-16 -z-10 h-[420px] bg-gradient-to-b from-slate-50 to-white"></div>
<div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>
<i className="h-4 w-4 text-indigo-600" data-lucide="target"></i>
              Fractional Product Marketing for MSPs
            </div>
<h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.1s'}}>
              Define, package, and position your MSP offerings to grow MRR.
            </h1>
<p className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.16s'}}>
              Partner with a seasoned Product Marketing Manager to craft clear positioning, compelling packaging, and repeatable go‑to‑market playbooks—without the full‑time overhead.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.22s'}}>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 transition-all" href="#contact">
<i className="h-4 w-4 text-white" data-lucide="sparkles"></i>
                Book a Strategy Call
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all" href="#case-study">
<i className="h-4 w-4 text-slate-700" data-lucide="file-chart-column-increasing"></i>
                See a Case Study
              </a>
</div>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.28s'}}>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">+38%</div>
<div className="text-xs text-slate-600 mt-1">ARPU after repackaging</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">2.4x</div>
<div className="text-xs text-slate-600 mt-1">Pipeline velocity</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">-32%</div>
<div className="text-xs text-slate-600 mt-1">Sales cycle length</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">+21%</div>
<div className="text-xs text-slate-600 mt-1">Attach rate</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm" style={{animation: 'slideInRight 0.7s ease-out both', animationDelay: '.18s'}}>
<div aria-hidden="true" className="absolute inset-0 -z-10 rounded-2xl"></div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg border border-slate-200 grid place-items-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="package-open"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Offer Builder Snapshot</div>
<div className="text-xs text-slate-600">Quick view of a packaging revamp</div>
</div>
</div>
<div className="mt-5 space-y-4">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Core Plan</div>
<span className="text-sm text-slate-700">$79/seat</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Proactive monitoring</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Patch management</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Ticket SLA 4h</li>
</ul>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Secure Plan</div>
<span className="text-sm text-slate-700">$119/seat</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> EDR + email security</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> MFA everywhere</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Ticket SLA 2h</li>
</ul>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Complete Plan</div>
<span className="text-sm text-slate-700">$159/seat</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> vCIO + roadmap</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Quarterly security review</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Priority support</li>
</ul>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-800" href="#contact">
<i className="h-4 w-4" data-lucide="file-text"></i>
                  Get the Offer Builder template
                </a>
<a className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#services">
<span>How it works</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="mt-6 grid grid-cols-5 gap-3 text-slate-500" style={{animation: 'fadeIn 0.7s ease-out both', animationDelay: '.3s'}}>
<div className="col-span-5 text-xs text-slate-500 mb-2">Trusted by MSPs across North America &amp; Europe</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-slate-700 font-medium tracking-tighter">AE</div>
<span className="hidden lg:inline text-xs">ApexEdge</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-slate-700 font-medium tracking-tighter">CT</div>
<span className="hidden lg:inline text-xs">CoreTech</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-slate-700 font-medium tracking-tighter">RX</div>
<span className="hidden lg:inline text-xs">RedX MSP</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-slate-700 font-medium tracking-tighter">VU</div>
<span className="hidden lg:inline text-xs">VentureUp</span>
</div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-slate-700 font-medium tracking-tighter">LM</div>
<span className="hidden lg:inline text-xs">Lumen MSP</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="services">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>Where MSPs get leverage</h2>
<p className="mt-3 text-slate-600 max-w-2xl" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>High‑impact, low‑friction initiatives designed to improve clarity, elevate perceived value, and accelerate revenue.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors" href="#contact" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.12s'}}>
<i className="h-4 w-4 text-slate-700" data-lucide="handshake"></i>
            Let’s collaborate
          </a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.12s'}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 grid place-items-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="message-square-text"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Messaging &amp; Positioning</h3>
<p className="mt-2 text-sm text-slate-600">Turn “we do IT” into a differentiated promise customers remember and buy.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> ICP &amp; pains mapping</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Value prop &amp; proof</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Messaging hierarchy</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.16s'}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 grid place-items-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="package"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Pricing &amp; Packaging</h3>
<p className="mt-2 text-sm text-slate-600">Create tiered offers that increase ARPU and reduce scope creep.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Good/Better/Best tiers</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Attach rate strategy</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Pricing narrative</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.2s'}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 grid place-items-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="rocket"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Go‑to‑Market</h3>
<p className="mt-2 text-sm text-slate-600">Channel‑ready campaigns, launch plans, and enablement that convert.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Launch playbooks</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Email &amp; landing pages</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Partner co‑marketing</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-sm transition-shadow" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.24s'}}>
<div className="h-10 w-10 rounded-lg border border-slate-200 grid place-items-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="clipboard-list"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Sales Enablement</h3>
<p className="mt-2 text-sm text-slate-600">Equip your team with crisp talk tracks and objection handling.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Decks &amp; one‑pagers</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Demo/Discovery scripts</li>
<li className="flex gap-2"><i className="h-5 w-5" data-lucide="dot"></i> Case study library</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="approach">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>A clear, collaborative approach</h2>
<p className="mt-3 text-slate-600" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>Engagements typically run 6–12 weeks with measurable outcomes delivered every sprint.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl border border-slate-200 bg-white p-6" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.12s'}}>
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-md bg-indigo-600 text-white grid place-items-center text-sm">1</span>
<div className="text-sm font-medium">Discovery</div>
</div>
<p className="mt-3 text-sm text-slate-600">ICP, win/loss, and current offer analysis to diagnose gaps and opportunities.</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.16s'}}>
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-md bg-indigo-600 text-white grid place-items-center text-sm">2</span>
<div className="text-sm font-medium">Strategy</div>
</div>
<p className="mt-3 text-sm text-slate-600">Positioning, packaging model, and pricing narrative aligned to your goals.</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.2s'}}>
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-md bg-indigo-600 text-white grid place-items-center text-sm">3</span>
<div className="text-sm font-medium">Build</div>
</div>
<p className="mt-3 text-sm text-slate-600">Messaging kits, sales assets, and launch playbooks your team can run.</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.24s'}}>
<div className="flex items-center gap-3">
<span className="h-7 w-7 rounded-md bg-indigo-600 text-white grid place-items-center text-sm">4</span>
<div className="text-sm font-medium">Enable</div>
</div>
<p className="mt-3 text-sm text-slate-600">Training, measurement, and iteration to lock in results and scale.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="case-study">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>Case study: Packaging that sells itself</h2>
<p className="mt-3 text-slate-600" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>A 35‑person MSP selling “a la carte” services moved to a 3‑tier model with a clear security narrative. In 90 days, average deal size grew and win rates improved—without discounting.</p>
<div className="mt-6 grid grid-cols-2 gap-4" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.15s'}}>
<div className="rounded-xl border border-slate-200 p-5 bg-white">
<div className="text-2xl font-semibold tracking-tight">+38%</div>
<div className="text-xs text-slate-600 mt-1">Average revenue per seat</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 bg-white">
<div className="text-2xl font-semibold tracking-tight">+19 pts</div>
<div className="text-xs text-slate-600 mt-1">Win rate increase</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 bg-white">
<div className="text-2xl font-semibold tracking-tight">-32%</div>
<div className="text-xs text-slate-600 mt-1">Sales cycle time</div>
</div>
<div className="rounded-xl border border-slate-200 p-5 bg-white">
<div className="text-2xl font-semibold tracking-tight">+24%</div>
<div className="text-xs text-slate-600 mt-1">Security add‑on attach</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors" href="#contact" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.2s'}}>
<i className="h-4 w-4 text-slate-700" data-lucide="download"></i>
                Download the full breakdown
              </a>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50" style={{animation: 'slideInRight 0.6s ease-out both', animationDelay: '.12s'}}>
<div className="aspect-video bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&amp'}}></div>
<div className="p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-emerald-600" data-lucide="badge-check"></i>
<div className="text-sm font-medium">Client quote</div>
</div>
<blockquote className="mt-3 text-slate-700 text-sm">
                  “We finally stopped selling hours and started selling outcomes. The new packaging and messaging transformed our sales conversations.”
                </blockquote>
<div className="mt-2 text-xs text-slate-500">COO, 35‑person MSP, US Midwest</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 py-14">
<div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col md:flex-row items-center md:items-stretch gap-6" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.08s'}}>
<div className="flex-1">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
<i className="h-4 w-4 text-indigo-600" data-lucide="wand-2"></i>
              Free resource
            </div>
<h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">MSP Offer Audit Checklist</h3>
<p className="mt-2 text-slate-600 text-sm md:text-base">A 15‑point checklist to benchmark clarity, value communication, and pricing power in your current offers.</p>
</div>
<form className="w-full md:w-auto md:min-w-[380px] flex flex-col sm:flex-row gap-3">
<input className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500" placeholder="Work email" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 transition-all" type="submit">
<i className="h-4 w-4 text-white" data-lucide="inbox"></i>
              Get the checklist
            </button>
</form>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="about">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.08s'}}>
<div className="rounded-2xl border border-slate-200 overflow-hidden">
<img alt="Founder portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-7">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>Hi, I’m Alex — your fractional PMM</h2>
<p className="mt-3 text-slate-600" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>I’ve helped MSPs and B2B SaaS providers scale ARR from &lt;$2M to $25M+ by clarifying offers, sharpening positioning, and building repeatable go‑to‑market engines. I partner closely with founders, sales leaders, and delivery to align the story with the service.</p>
<ul className="mt-6 grid sm:grid-cols-2 gap-3">
<li className="flex items-center gap-3 text-sm text-slate-700" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.12s'}}>
<i className="h-5 w-5 text-indigo-600" data-lucide="trophy"></i>
                Ex‑Head of Product Marketing at growth‑stage MSP platform
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.16s'}}>
<i className="h-5 w-5 text-indigo-600" data-lucide="users"></i>
                60+ launches across security, cloud, and managed services
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.2s'}}>
<i className="h-5 w-5 text-indigo-600" data-lucide="line-chart"></i>
                Operator mindset with measurable outcomes every sprint
              </li>
<li className="flex items-center gap-3 text-sm text-slate-700" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.24s'}}>
<i className="h-5 w-5 text-indigo-600" data-lucide="clock"></i>
                Flexible retainers: 10–40 hrs/mo
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>Let’s map your next 90 days</h2>
<p className="mt-3 text-slate-600" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>Tell me a bit about your MSP. I’ll respond within 1 business day with next steps and a sample plan.</p>
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-6" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.14s'}}>
<form className="grid grid-cols-1 gap-4">
<div className="grid gap-2">
<label className="text-sm text-slate-700">Full name</label>
<input className="rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500" placeholder="Jane Doe" type="text"/>
</div>
<div className="grid gap-2">
<label className="text-sm text-slate-700">Work email</label>
<input className="rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500" placeholder="jane@yourmsp.com" type="email"/>
</div>
<div className="grid gap-2">
<label className="text-sm text-slate-700">Company</label>
<input className="rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500" placeholder="Your MSP LLC" type="text"/>
</div>
<div className="grid gap-2">
<label className="text-sm text-slate-700">Website</label>
<input className="rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500" placeholder="https://yourmsp.com" type="url"/>
</div>
<div className="grid gap-2">
<label className="text-sm text-slate-700">What’s your top priority?</label>
<textarea className="rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500" placeholder="e.g., Rework packaging to improve margins; tighten messaging for healthcare ICP; launch MDR add‑on..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between gap-4 pt-2">
<div className="text-xs text-slate-500">By submitting, you agree to be contacted about your request.</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 transition-all" type="submit">
<i className="h-4 w-4 text-white" data-lucide="send"></i>
                    Send
                  </button>
</div>
</form>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24" style={{animation: 'fadeIn 0.6s ease-out both', animationDelay: '.12s'}}>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="calendar-clock"></i>
<div className="text-sm font-medium">Typical availability</div>
</div>
<ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
<li className="flex items-center gap-2 text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="clock-4"></i> Kickoff in 2–3 weeks</li>
<li className="flex items-center gap-2 text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="briefcase"></i> Retainers: 10–40 hrs/mo</li>
<li className="flex items-center gap-2 text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="dollar-sign"></i> Projects from $6.5k</li>
<li className="flex items-center gap-2 text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="map-pin"></i> Remote, US/EU timezones</li>
</ul>
<div className="mt-6 rounded-lg border border-slate-200 p-4 bg-slate-50">
<div className="text-sm font-medium">What you get every month</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Prioritized roadmap &amp; sprint plan</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> 1–2 major deliverables shipped</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i> Metrics review &amp; next steps</li>
</ul>
</div>
<div className="mt-6 rounded-lg border border-slate-200 p-4">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="mail"></i>
<div>
<div className="text-sm font-medium">Prefer email?</div>
<a className="text-sm text-indigo-700 hover:text-indigo-800" href="mailto:hello@nextlevelmsp.co">hello@nextlevelmsp.co</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-slate-200 grid place-items-center text-indigo-700 font-semibold tracking-tighter">NL</div>
<div className="text-slate-900 font-medium tracking-tight">Next Level MSP Consulting</div>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-xs">Fractional Product Marketing for MSPs. Define, package, and position your offerings to grow MRR.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#about">About</a></li>
<li><a className="hover:text-slate-900" href="#services">Services</a></li>
<li><a className="hover:text-slate-900" href="#approach">Approach</a></li>
<li><a className="hover:text-slate-900" href="#case-study">Case Studies</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">Offer Audit Checklist</a></li>
<li><a className="hover:text-slate-900" href="#">Packaging Templates</a></li>
<li><a className="hover:text-slate-900" href="#">Messaging Guide</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Contact</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-slate-500" data-lucide="mail"></i><a className="hover:text-slate-900" href="mailto:hello@nextlevelmsp.co">hello@nextlevelmsp.co</a></li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-slate-500" data-lucide="map-pin"></i>Remote, US/EU</li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-6">
<div className="text-xs text-slate-500">© <span id="year"></span> Next Level MSP Consulting. All rights reserved.</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-700" href="#">Privacy</a>
<a className="hover:text-slate-700" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
