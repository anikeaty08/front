import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    // Current year in footer
    document.getElementById('yl-year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 shadow-md">
<span className="iconify text-white" data-icon="solar:buildings-3-bold-duotone" data-width="24"></span>
</span>
<div className="flex flex-col">
<span className="font-manrope text-xl tracking-tight font-semibold text-slate-900">
                Yun Leong Engineering
              </span>
<span className="text-sm text-slate-500">
                Factory Renovation &amp; Maintenance
              </span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-base">
<a className="text-slate-700 hover:text-slate-900" href="#hero">Home</a>
<a className="text-slate-700 hover:text-slate-900" href="#feature">Services</a>
<a className="text-slate-700 hover:text-slate-900" href="#testimonial">Clients</a>
<a className="text-slate-700 hover:text-slate-900" href="#pricing">Plans</a>
<a className="text-slate-700 hover:text-slate-900" href="#footer">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-base text-slate-800 shadow-sm hover:border-slate-300">
<span className="iconify" data-icon="solar:phone-calling-bold-duotone" data-width="18"></span>
<span>Request a Call</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-base font-medium text-white shadow-md hover:bg-red-600">
<span>Get Quote</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold-duotone" data-width="18"></span>
</button>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative overflow-hidden" id="hero">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div className="fade-up space-y-8">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-sm shadow-md">
<span className="inline-flex h-2 w-2 rounded-full bg-red-500"></span>
<span>Precision upgrades for production-critical facilities</span>
</div>
<h1 className="font-manrope text-6xl md:text-7xl lg:text-8xl tracking-tight font-semibold text-slate-900">
                Renovate once.<br className="hidden sm:block"/>
                Run reliably for years.
              </h1>
<p className="text-xl md:text-2xl text-slate-600 max-w-xl">
                Yun Leong Engineering modernises and maintains factories so your lines stay safer, leaner and online.
              </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-lg font-medium text-white shadow-md hover:bg-red-600">
<span>Schedule a Site Walk</span>
<span className="iconify" data-icon="solar:route-square-bold-duotone" data-width="20"></span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-lg text-slate-900 shadow-sm hover:border-slate-400">
<span className="iconify" data-icon="solar:play-circle-bold-duotone" data-width="20"></span>
<span>View recent projects</span>
</button>
</div>
<dl className="grid grid-cols-3 gap-4 max-w-lg pt-4">
<div className="rounded-2xl bg-white p-4 shadow-md">
<dt className="text-xs uppercase tracking-wide text-slate-500">Factories upgraded</dt>
<dd className="mt-2 text-2xl font-semibold text-slate-900">180+</dd>
</div>
<div className="rounded-2xl bg-white p-4 shadow-md">
<dt className="text-xs uppercase tracking-wide text-slate-500">Average downtime saved</dt>
<dd className="mt-2 text-2xl font-semibold text-slate-900">26%</dd>
</div>
<div className="rounded-2xl bg-white p-4 shadow-md">
<dt className="text-xs uppercase tracking-wide text-slate-500">Years in heavy industry</dt>
<dd className="mt-2 text-2xl font-semibold text-slate-900">20+</dd>
</div>
</dl>
</div>
<div className="fade-up lg:justify-self-end">
<div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-md">
<img alt="Modernised factory interior" className="h-full w-full object-cover opacity-95" src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-sm text-slate-100">
<span className="iconify" data-icon="solar:shield-check-bold-duotone" data-width="18"></span>
<span>Certified safety-led upgrades</span>
</div>
<div className="flex flex-wrap gap-4">
<div className="rounded-2xl bg-white/10 backdrop-blur px-4 py-3 text-sm text-slate-100 flex-1 min-w-[8rem]">
<div className="flex items-center justify-between">
<span>Production Line A</span>
<span className="iconify" data-icon="solar:chart-bold-duotone" data-width="18"></span>
</div>
<p className="mt-1 text-lg font-medium text-emerald-300">+18% throughput</p>
</div>
<div className="rounded-2xl bg-white/10 backdrop-blur px-4 py-3 text-sm text-slate-100 flex-1 min-w-[8rem]">
<div className="flex items-center justify-between">
<span>Unexpected stops</span>
<span className="iconify" data-icon="solar:alarm-bold-duotone" data-width="18"></span>
</div>
<p className="mt-1 text-lg font-medium text-red-300">-32% incidents</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-slate-300 pt-1">
<span>Snapshot: Johor electronic components plant, 2024 upgrade</span>
<span className="hidden sm:inline-flex items-center gap-1">
<span className="iconify" data-icon="solar:clock-circle-bold-duotone" data-width="16"></span>
<span>3-week shutdown</span>
</span>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center justify-between gap-4">
<p className="text-sm text-slate-600 max-w-xs">
                  Trusted by regional manufacturers across electronics, food processing and precision metalworks.
                </p>
<div className="flex items-center gap-5">
<span className="iconify text-slate-400" data-icon="logos:siemens" data-width="64"></span>
<span className="iconify text-slate-400" data-icon="logos:bosch-icon" data-width="64"></span>
<span className="iconify text-slate-400" data-icon="logos:unilever" data-width="64"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="feature">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
<div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-red-500">Services</p>
<h2 className="mt-2 font-manrope text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-slate-900">
                End-to-end factory renewal.
              </h2>
<p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
                From structural retrofits and cleanroom builds to utilities, cabling and predictive maintenance, we deliver projects without surprises.
              </p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 shadow-sm hover:border-slate-400">
<span className="iconify" data-icon="solar:document-text-bold-duotone" data-width="18"></span>
<span>Download capability sheet</span>
</button>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">
<article className="fade-up rounded-3xl bg-white p-6 md:p-7 shadow-md flex flex-col">
<div className="flex items-center justify-between">
<div className="rounded-2xl bg-red-500/10 p-3 text-red-500">
<span className="iconify" data-icon="solar:buildings-2-bold-duotone" data-width="26"></span>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Project</span>
</div>
<h3 className="mt-5 font-manrope text-2xl md:text-3xl tracking-tight font-semibold text-slate-900">
                Heavy-duty structural upgrades
              </h3>
<p className="mt-4 text-lg text-slate-600 flex-1">
                Strengthen floors, mezzanines and support frames to accommodate new machinery, cranes and higher loads—without disrupting adjacent lines.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Seismic and vibration assessments</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Phased construction in live plants</span>
</li>
</ul>
</article>
<article className="fade-up rounded-3xl bg-white p-6 md:p-7 shadow-md flex flex-col">
<div className="flex items-center justify-between">
<div className="rounded-2xl bg-red-500/10 p-3 text-red-500">
<span className="iconify" data-icon="solar:temperature-bold-duotone" data-width="26"></span>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Environment</span>
</div>
<h3 className="mt-5 font-manrope text-2xl md:text-3xl tracking-tight font-semibold text-slate-900">
                Cleanrooms &amp; controlled utilities
              </h3>
<p className="mt-4 text-lg text-slate-600 flex-1">
                Build or upgrade clean manufacturing zones, compressed air, chilled water, exhaust and power distribution with full commissioning support.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>ISO cleanroom compliance ready</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Integrated BMS and monitoring</span>
</li>
</ul>
</article>
<article className="fade-up rounded-3xl bg-white p-6 md:p-7 shadow-md flex flex-col">
<div className="flex items-center justify-between">
<div className="rounded-2xl bg-red-500/10 p-3 text-red-500">
<span className="iconify" data-icon="solar:wrench-bold-duotone" data-width="26"></span>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Lifecycle</span>
</div>
<h3 className="mt-5 font-manrope text-2xl md:text-3xl tracking-tight font-semibold text-slate-900">
                Preventive &amp; predictive maintenance
              </h3>
<p className="mt-4 text-lg text-slate-600 flex-1">
                Planned shutdowns, condition monitoring and rapid-response repairs that keep your critical assets reliable and audit-ready.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>24/7 breakdown support options</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Asset health dashboards &amp; reporting</span>
</li>
</ul>
</article>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-900 text-slate-100" id="testimonial">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
<div className="fade-up flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-red-400">Results</p>
<h2 className="mt-2 font-manrope text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
                Built for production managers, not showrooms.
              </h2>
</div>
<p className="text-lg md:text-xl text-slate-300 max-w-xl">
              We speak OEE, MTTR and shift schedules. Our teams plan around your takt time, not the other way around.
            </p>
</div>
<div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
<article className="fade-up rounded-3xl bg-slate-800 p-8 md:p-10 shadow-md flex flex-col gap-6">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="rounded-2xl bg-slate-700 p-3">
<span className="iconify" data-icon="solar:factory-bold-duotone" data-width="26"></span>
</span>
<div>
<p className="text-sm text-slate-300">Electronics Manufacturer, Penang</p>
<p className="text-xs text-slate-400">Cleanroom expansion &amp; utility re-routing</p>
</div>
</div>
<span className="iconify text-slate-500" data-icon="logos:intel" data-width="52"></span>
</div>
<p className="text-2xl md:text-3xl font-manrope tracking-tight font-semibold text-slate-50">
                “Yun Leong executed a full line relocation and cleanroom upgrade in 19 days. We hit the restart button once—and everything just ran.”
              </p>
<div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="solar:graph-new-bold-duotone" data-width="18"></span>
<span>+14% line capacity</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="solar:shield-check-bold-duotone" data-width="18"></span>
<span>Zero safety incidents</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="solar:calendar-bold-duotone" data-width="18"></span>
<span>Delivered 3 days ahead</span>
</div>
</div>
</article>
<div className="fade-up space-y-6">
<div className="rounded-3xl bg-slate-800/80 p-6 shadow-md">
<h3 className="font-manrope text-xl tracking-tight font-semibold text-slate-50">
                  Maintenance plans that scale with you
                </h3>
<p className="mt-3 text-base text-slate-300">
                  Start with quarterly audits and ramp to full embedded teams as your facility grows. We work under your CMMS or deploy one for you.
                </p>
<dl className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-200">
<div>
<dt className="text-xs uppercase tracking-wide text-slate-400">Average response</dt>
<dd className="mt-1 text-lg font-semibold">2.4 hours</dd>
</div>
<div>
<dt className="text-xs uppercase tracking-wide text-slate-400">Planned vs unplanned</dt>
<dd className="mt-1 text-lg font-semibold">78% planned</dd>
</div>
</dl>
</div>
<div className="rounded-3xl border border-dashed border-slate-600 p-6">
<div className="flex items-start gap-3">
<span className="rounded-xl bg-slate-700 p-2 text-slate-100">
<span className="iconify" data-icon="solar:message-text-bold-duotone" data-width="20"></span>
</span>
<div>
<p className="text-base text-slate-200">
                      Share your layout, utilities list and production windows. We return a phased upgrade plan with budget ranges within 3 working days.
                    </p>
<button className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-base font-medium text-white shadow-md hover:bg-red-600">
<span>Start the brief</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold-duotone" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="pricing">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
<div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-red-500">Plans</p>
<h2 className="mt-2 font-manrope text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-slate-900">
                Simple models for complex plants.
              </h2>
<p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
                Choose a framework that matches your risk appetite and production intensity. All plans include dedicated project engineers and safety leads.
              </p>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-amber-500" data-icon="solar:info-circle-bold-duotone" data-width="18"></span>
<span>Custom turnkey pricing available for greenfield or multi-site programmes.</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,0.9fr)] items-stretch">

<div className="fade-up rounded-3xl bg-white p-7 md:p-8 shadow-md flex flex-col">
<div className="flex items-center justify-between gap-4">
<h3 className="font-manrope text-2xl md:text-3xl tracking-tight font-semibold text-slate-900">
                  Essential Care
                </h3>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  For stable facilities
                </span>
</div>
<p className="mt-3 text-lg text-slate-600 flex-1">
                Annual structural and utilities audit with scheduled maintenance and priority breakdown support during office hours.
              </p>
<p className="mt-5 text-sm text-slate-500">From</p>
<p className="text-3xl md:text-4xl font-manrope tracking-tight font-semibold text-slate-900">
                RM 6k<span className="text-base font-normal text-slate-500">/month</span>
</p>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Quarterly site inspections &amp; reports</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Planned maintenance for utilities &amp; structure</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Next-business-day response for breakdowns</span>
</li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-base text-slate-900 shadow-sm hover:border-slate-400">
<span>Select Essential</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold-duotone" data-width="18"></span>
</button>
</div>

<div className="fade-up rounded-3xl bg-slate-900 p-7 md:p-8 shadow-md flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-slate-900/60 pointer-events-none"></div>
<div className="relative flex items-center justify-between gap-4">
<h3 className="font-manrope text-2xl md:text-3xl tracking-tight font-semibold text-white">
                  Production Shield
                </h3>
<span className="rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                  Most selected
                </span>
</div>
<p className="relative mt-3 text-lg text-slate-200 flex-1">
                Comprehensive renovation roadmap plus embedded maintenance team and 24/7 support to protect critical lines.
              </p>
<p className="relative mt-5 text-sm text-slate-300">From</p>
<p className="relative text-3xl md:text-4xl font-manrope tracking-tight font-semibold text-white">
                RM 14k<span className="text-base font-normal text-slate-300">/month</span>
</p>
<ul className="relative mt-5 space-y-2 text-sm text-slate-100">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-300" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Dedicated on-site maintenance technicians</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-300" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>24/7 hotline with 4-hour critical response</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-300" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Digital asset registry &amp; inspection history</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-300" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Annual renovation budget &amp; phasing roadmap</span>
</li>
</ul>
<button className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-base font-medium text-white shadow-md hover:bg-red-600">
<span>Talk about Production Shield</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold-duotone" data-width="18"></span>
</button>
</div>

<div className="fade-up rounded-3xl bg-white p-7 md:p-8 shadow-md flex flex-col">
<div className="flex items-center justify-between gap-4">
<h3 className="font-manrope text-2xl md:text-3xl tracking-tight font-semibold text-slate-900">
                  Project-based
                </h3>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  CAPEX focused
                </span>
</div>
<p className="mt-3 text-lg text-slate-600 flex-1">
                Fixed-scope renovation, expansion or line-relocation projects with milestone billing and clear change control.
              </p>
<p className="mt-5 text-sm text-slate-500">Typical range</p>
<p className="text-3xl md:text-4xl font-manrope tracking-tight font-semibold text-slate-900">
                RM 250k–3m
              </p>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Design &amp; build with PE endorsement</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Detailed shutdown &amp; cutover planning</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-emerald-500" data-icon="solar:check-circle-bold-duotone" data-width="16"></span>
<span>Commissioning, testing &amp; as-built drawings</span>
</li>
</ul>
<button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-base text-slate-900 shadow-sm hover:border-slate-400">
<span>Share project brief</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold-duotone" data-width="18"></span>
</button>
</div>
</div>
</div>
</section>

<section className="pb-16 md:pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="fade-up relative overflow-hidden rounded-3xl bg-slate-900 shadow-md">
<img alt="Industrial plant exterior" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
<div className="relative grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center px-6 py-10 md:px-10 md:py-12">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-red-400">Next step</p>
<h2 className="mt-2 font-manrope text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
                  Walk your factory with our engineers within 7 days.
                </h2>
<p className="mt-4 text-lg text-slate-200 max-w-xl">
                  We document risks, bottlenecks and quick wins in a concise report your leadership team can act on immediately.
                </p>
</div>
<div className="rounded-2xl bg-white/95 p-6 md:p-7 shadow-md">
<div className="flex items-center gap-3">
<span className="rounded-xl bg-red-500/10 p-2 text-red-500">
<span className="iconify" data-icon="solar:calendar-bold-duotone" data-width="22"></span>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Book a site assessment</p>
<p className="text-xs text-slate-500">Typical session 90–120 minutes</p>
</div>
</div>
<form className="mt-5 space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Work email</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="you@company.com" type="email"/>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Plant location</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="e.g. Shah Alam" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Production type</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Food, electronics, etc." type="text"/>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-4 py-2.5 text-base font-medium text-white shadow-md hover:bg-red-600" type="submit">
<span>Submit request</span>
<span className="iconify" data-icon="solar:arrow-right-up-bold-duotone" data-width="18"></span>
</button>
<p className="text-xs text-slate-500">
                    We respond within one working day with proposed dates and a short list of information to prepare.
                  </p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white" id="footer">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
<div className="fade-up space-y-4 max-w-md">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 shadow-md">
<span className="iconify text-white" data-icon="solar:buildings-3-bold-duotone" data-width="20"></span>
</span>
<div>
<p className="font-manrope text-lg tracking-tight font-semibold text-slate-900">
                  Yun Leong Engineering
                </p>
<p className="text-xs text-slate-500">Factory Renovation &amp; Maintenance</p>
</div>
</div>
<p className="text-base text-slate-600">
              Serving manufacturers across Malaysia and the wider region with renovation, expansion and lifecycle maintenance for mission-critical facilities.
            </p>
<div className="flex items-center gap-4 text-sm text-slate-600">
<div className="flex items-center gap-2">
<span className="iconify text-red-500" data-icon="solar:map-point-bold-duotone" data-width="18"></span>
<span>Johor Bahru · Klang Valley · Penang</span>
</div>
</div>
</div>
<div className="fade-up grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
<div>
<h4 className="text-xs font-medium uppercase tracking-wide text-slate-500">Company</h4>
<ul className="mt-3 space-y-2 text-slate-700">
<li><a className="hover:text-slate-900" href="#hero">About</a></li>
<li><a className="hover:text-slate-900" href="#feature">Services</a></li>
<li><a className="hover:text-slate-900" href="#testimonial">Case studies</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wide text-slate-500">Support</h4>
<ul className="mt-3 space-y-2 text-slate-700">
<li><a className="hover:text-slate-900" href="#pricing">Plans</a></li>
<li><a className="hover:text-slate-900" href="#footer">Maintenance hotline</a></li>
<li><a className="hover:text-slate-900" href="#">Safety documentation</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wide text-slate-500">Contact</h4>
<ul className="mt-3 space-y-2 text-slate-700">
<li>
<div className="flex items-center gap-2">
<span className="iconify text-red-500" data-icon="solar:phone-calling-bold-duotone" data-width="18"></span>
<span>+60 (0)7-000 0000</span>
</div>
</li>
<li>
<div className="flex items-center gap-2">
<span className="iconify text-red-500" data-icon="solar:letter-bold-duotone" data-width="18"></span>
<span>projects@yunleong.com</span>
</div>
</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
<p>© <span id="yl-year"></span> Yun Leong Engineering Sdn. Bhd. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="hover:text-slate-700" href="#">Privacy</a>
<span>·</span>
<a className="hover:text-slate-700" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
