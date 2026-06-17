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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<a className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-white group-hover:bg-blue-900 transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">BV CAPITAL</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#about">Our Firm</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#facilities">Key Terms</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#sectors">Sectors</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#partners">Intermediaries</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950" href="#contact">
                    Contact CFO
                </a>
<button className="md:hidden p-2 text-slate-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                        Accepting New Mandates: 2024 Allocation
                    </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        Dutch-Based Alternative Investment &amp; Private Debt Manager
                    </h1>
<p className="text-lg leading-8 text-slate-600 mb-8 max-w-2xl">
                        Providing institutional-grade capital solutions for infrastructure, energy, and real estate. We structure senior secured debt with competitive rates from <span className="text-slate-900 font-medium">4-6%</span> and ticket sizes up to <span className="text-slate-900 font-medium">$800M</span>.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-11 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950" href="#guidelines">
                            View Funding Guidelines
                        </a>
<a className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900" href="#about">
                            Explore Our Firm
                        </a>
</div>
</div>

<div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-100 pt-10">
<div className="flex flex-col border-l-2 border-slate-100 pl-4">
<dt className="text-sm font-medium text-slate-500">Assets Under Management</dt>
<dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">€8 Billion</dd>
</div>
<div className="flex flex-col border-l-2 border-slate-100 pl-4">
<dt className="text-sm font-medium text-slate-500">Core Interest Rate</dt>
<dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">4% - 6%</dd>
</div>
<div className="flex flex-col border-l-2 border-slate-100 pl-4">
<dt className="text-sm font-medium text-slate-500">Loan Capacity</dt>
<dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">$1M - $800M</dd>
</div>
<div className="flex flex-col border-l-2 border-slate-100 pl-4">
<dt className="text-sm font-medium text-slate-500">Regulatory Status</dt>
<dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">DNB/AFM</dd>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 sm:py-32" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-base font-semibold leading-7 text-blue-900">Corporate Identity</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Regulated Institutional Leadership</p>
<p className="mt-6 text-base leading-7 text-slate-600">
                            BV Capital Partners operates as a premier Dutch-regulated financial institution under the strict oversight of the <strong>Dutch Central Bank (DNB)</strong> and the <strong>Netherlands Authority for the Financial Markets (AFM)</strong>. We act as the lead mandate arranger for a robust syndicate of institutional lenders, sovereign wealth funds, and single-family offices.
                        </p>
<p className="mt-4 text-base leading-7 text-slate-600">
                            Our multi-asset focus allows us to provide liquidity where traditional banking constricts, offering bespoke Structured Credit and Project Finance solutions that align with the long-term horizons of major development projects in Europe and globally.
                        </p>
<div className="mt-8 flex gap-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-blue-900" data-icon="lucide:shield-check" data-width="20"></span>
                                Fully Compliant (AML/CFT)
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-blue-900" data-icon="lucide:landmark" data-width="20"></span>
                                Syndicate Arranger
                            </div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Compliance &amp; Structure</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
<span className="iconify text-slate-700" data-icon="lucide:file-badge" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Dutch Regulatory Oversight</h4>
<p className="mt-1 text-sm text-slate-500">Adhering to the highest standards of financial transparency required by EU law.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
<span className="iconify text-slate-700" data-icon="lucide:network" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Syndicated Lending Model</h4>
<p className="mt-1 text-sm text-slate-500">Pooling capital from diverse institutional sources to fund large-cap requirements.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white" id="facilities">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-base font-semibold leading-7 text-blue-900">Our Facilities</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Project Finance Terms</p>
<p className="mt-4 text-base leading-7 text-slate-600">
                        We offer Senior Secured Debt, Project Finance, and Structured Credit designed for scalability and capital efficiency.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-900/30">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 group-hover:bg-blue-50 group-hover:text-blue-900">
<span className="iconify" data-icon="lucide:percent" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Interest Rate</h3>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">4% - 6%</p>
<p className="mt-2 text-sm text-slate-500">Fixed annual rate, ensuring predictable cost of capital.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-900/30">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 group-hover:bg-blue-50 group-hover:text-blue-900">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">LTV / LTC</h3>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">100%</p>
<p className="mt-2 text-sm text-slate-500">Coverage of Project Costs, minimizing equity requirements.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-900/30">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 group-hover:bg-blue-50 group-hover:text-blue-900">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Loan Term</h3>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">15 Years</p>
<p className="mt-2 text-sm text-slate-500">Flexible tenures up to 15 years with grace periods available.</p>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-900/30">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900 group-hover:bg-blue-50 group-hover:text-blue-900">
<span className="iconify" data-icon="lucide:coins" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Loan Size</h3>
<p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">$1M - $800M</p>
<p className="mt-2 text-sm text-slate-500">Scalable tranches for mid-market to large-cap projects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="sectors">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="border-b border-slate-800 pb-8 mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Core Sectors &amp; Expertise</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-4">
<span className="iconify text-blue-400" data-icon="lucide:factory" data-width="32"></span>
<h3 className="text-xl font-medium">Infrastructure</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Essential financing for large-scale municipal and private infrastructure, including Water Treatment, Transportation hubs, and Utilities.
                        </p>
</div>

<div className="space-y-4">
<span className="iconify text-blue-400" data-icon="lucide:zap" data-width="32"></span>
<h3 className="text-xl font-medium">Energy</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Capital for the energy transition. Focusing on Renewables (Solar, Wind, Hydro) as well as strategic Oil &amp; Gas downstream projects.
                        </p>
</div>

<div className="space-y-4">
<span className="iconify text-blue-400" data-icon="lucide:building" data-width="32"></span>
<h3 className="text-xl font-medium">Commercial Real Estate</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Debt capital for developments, hospitality, and mixed-use complexes. Focus on asset appreciation and prime locations.
                        </p>
</div>

<div className="space-y-4">
<span className="iconify text-blue-400" data-icon="lucide:container" data-width="32"></span>
<h3 className="text-xl font-medium">Industrial &amp; Logistics</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Supporting global supply chains with financing for warehousing, ports, manufacturing plants, and heavy industry.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-slate-50" id="process">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-base font-semibold leading-7 text-blue-900">The Roadmap</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Loan Origination Process</p>
<p className="mt-4 text-base leading-7 text-slate-600">
                            Our streamlined 6-step underwriting process ensures transparency and speed of execution from initial inquiry to disbursement.
                        </p>
<a className="mt-8 inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50" href="#contact">
                            Start Application
                        </a>
</div>
<div className="lg:col-span-2">
<div className="relative pl-8 border-l border-slate-200 space-y-12">

<div className="relative">
<span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white ring-4 ring-slate-50">1</span>
<h3 className="text-lg font-semibold text-slate-900">Submission of Executive Summary</h3>
<p className="mt-2 text-slate-600">Client submits a high-level project overview outlining capital requirements and project scope.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 ring-4 ring-slate-50">2</span>
<h3 className="text-lg font-semibold text-slate-900">NDA &amp; Preliminary Assessment</h3>
<p className="mt-2 text-slate-600">We execute a Non-Disclosure Agreement and conduct an initial feasibility check.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 ring-4 ring-slate-50">3</span>
<h3 className="text-lg font-semibold text-slate-900">Loan Application &amp; Due Diligence</h3>
<p className="mt-2 text-slate-600">Formal application submission followed by rigorous technical, financial, and legal due diligence.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 ring-4 ring-slate-50">4</span>
<h3 className="text-lg font-semibold text-slate-900">Final Underwriting &amp; Approval</h3>
<p className="mt-2 text-slate-600">Investment committee review and issuance of the formal Term Sheet.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 ring-4 ring-slate-50">5</span>
<h3 className="text-lg font-semibold text-slate-900">In-Person Closing</h3>
<p className="mt-2 text-slate-600">Signing of definitive agreements at our headquarters or designated legal counsel.</p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-600 ring-4 ring-slate-50">6</span>
<h3 className="text-lg font-semibold text-slate-900">Disbursement</h3>
<p className="mt-2 text-slate-600">Capital release according to the agreed drawdown schedule.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="partners">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="rounded-xl bg-slate-50 p-8 border border-slate-100">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-slate-900" data-icon="lucide:lock" data-width="24"></span>
<h3 className="text-xl font-semibold text-slate-900">Security &amp; Compliance</h3>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            As a regulated entity, we enforce strict collateral protocols. Standard security requirements include a <strong>First Rank Charge over Assets</strong> and Corporate Guarantee.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="16"></span>
                                Insurance Wrap / Premium Bond Facilitation
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="16"></span>
                                Full AML/CFT Compliance
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-emerald-500" data-icon="lucide:check" data-width="16"></span>
                                Transparent KYC Procedures
                            </li>
</ul>
</div>

<div className="rounded-xl bg-slate-900 p-8 text-white">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-blue-400" data-icon="lucide:users" data-width="24"></span>
<h3 className="text-xl font-semibold text-white">Brokers &amp; Intermediaries</h3>
</div>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">
                            We value our network of global introducers. We offer a transparent fee structure for brokers bringing qualified mandates.
                        </p>
<div className="mb-6 p-4 rounded bg-white/10 border border-white/10">
<p className="text-lg font-medium text-white">2% Success Fee</p>
<p className="text-xs text-slate-400">Paid upon successful closing and disbursement.</p>
</div>
<p className="text-sm text-slate-300">
                            We also support <strong>EPC+F</strong> (Engineering, Procurement, Construction &amp; Finance) models for contractors seeking integrated project funding.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 bg-slate-50" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Contact Us</h2>
<p className="mt-2 text-slate-600">Get in touch to discuss your funding requirements.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="rounded-xl bg-white p-8 shadow-sm border border-slate-200">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium leading-6 text-slate-900" htmlFor="first-name">First name</label>
<input className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6" id="first-name" name="first-name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900" htmlFor="last-name">Last name</label>
<input className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6" id="last-name" name="last-name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900" htmlFor="email">Work Email</label>
<input className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6" id="email" name="email" type="email"/>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900" htmlFor="amount">Loan Amount Required</label>
<select className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6" id="amount" name="amount">
<option>$1M - $10M</option>
<option>$10M - $50M</option>
<option>$50M - $200M</option>
<option>$200M+</option>
</select>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-slate-900" htmlFor="message">Executive Summary Brief</label>
<textarea className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6" id="message" name="message" rows="4"></textarea>
</div>
<button className="w-full rounded-md bg-slate-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600" type="submit">Submit Application</button>
</form>
</div>

<div className="flex flex-col justify-between">
<div className="space-y-8">
<div>
<h3 className="text-lg font-semibold text-slate-900">Headquarters</h3>
<p className="mt-2 text-slate-600">Bilthoven, The Netherlands</p>
<div className="mt-4 flex items-start gap-3 text-sm text-slate-600">
<span className="iconify mt-0.5 shrink-0" data-icon="lucide:map-pin" data-width="18"></span>
<span>
                                        Registered Address:<br/>
                                        [Insert Full Bilthoven Address Here]<br/>
                                        Utrecht Province, Netherlands
                                    </span>
</div>
<div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
<span className="iconify shrink-0" data-icon="lucide:mail" data-width="18"></span>
<a className="hover:text-slate-900 hover:underline" href="mailto:info@bvcapitalpartners.nl">info@bvcapitalpartners.nl</a>
</div>
</div>

<div className="h-64 w-full overflow-hidden rounded-xl bg-slate-200 relative group">
<div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
<div className="text-center">
<span className="iconify mx-auto mb-2 text-slate-300" data-icon="lucide:map" data-width="48"></span>
<p className="text-sm font-medium">Google Maps API Embed</p>
<p className="text-xs">Bilthoven, NL Location</p>
</div>
</div>

<div className="absolute inset-0 border-2 border-transparent group-hover:border-slate-300 transition-colors rounded-xl pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
<span className="iconify" data-icon="lucide:building-2" data-width="14"></span>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">BV CAPITAL</span>
</a>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        Regulated Dutch investment manager providing private debt and structured credit solutions to the global market.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Services</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">Project Finance</a></li>
<li><a className="hover:text-slate-900" href="#">Senior Secured Debt</a></li>
<li><a className="hover:text-slate-900" href="#">Structured Credit</a></li>
<li><a className="hover:text-slate-900" href="#">EPC+F</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Legal</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">AML/CFT Compliance</a></li>
<li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 BV Capital Partners. All rights reserved. Registered in The Netherlands.</p>
<div className="flex gap-4">

<span className="text-xs text-slate-400 font-medium">DNB Regulated</span>
<span className="text-xs text-slate-400 font-medium">AFM Oversight</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
