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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 text-lg font-medium tracking-tighter uppercase flex items-center gap-2" href="#">
                OOVACHA
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#platform">Platform</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#use-cases">Use Cases</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#impact">Impact</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition-colors shadow-sm shadow-blue-600/20" href="#demo">
                    Book a Demo
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-grid">
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                        The Prediction Engine for Life Sciences
                    </h1>
<p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
                        Forecast clinical outcomes. Optimize trial design. Expand commercial opportunity.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors shadow-sm shadow-blue-600/20" href="#demo">
                            Book a Demo
                        </a>
<a className="inline-flex items-center justify-center text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-full transition-colors" href="#platform">
                            Explore Platform
                        </a>
</div>
</div>

<div className="relative w-full aspect-[4/3] bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Simulation Output</span>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> Treated
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="w-2 h-2 rounded-full bg-slate-300"></span> Untreated
                            </div>
</div>
</div>
<div className="relative flex-grow w-full h-full mt-4 border-l border-b border-slate-200">

<div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-slate-400 whitespace-nowrap origin-center">
                            Patient Outcome
                        </div>

<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">

<line stroke="#f1f5f9" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25"></line>
<line stroke="#f1f5f9" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line stroke="#f1f5f9" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="75" y2="75"></line>


<path d="M 0 60 Q 40 70 100 95 L 100 75 Q 40 55 0 50 Z" fill="#cbd5e1" opacity="0.3"></path>

<path d="M 0 55 Q 40 62.5 100 85" fill="none" stroke="#94a3b8" stroke-dasharray="2 2" strokeWidth="0.75"></path>


<path d="M 0 50 Q 30 35 100 25 L 100 5 Q 30 15 0 40 Z" fill="#3b82f6" opacity="0.15"></path>

<path d="M 0 45 Q 30 25 100 15" fill="none" stroke="#2563eb" strokeWidth="1.5"></path>


<line stroke="#cbd5e1" stroke-dasharray="1 3" strokeWidth="0.5" x1="65" x2="65" y1="0" y2="100"></line>

<path d="M 35 20 Q 40 20 40 25 L 40 60 Q 40 65 35 65" fill="none" stroke="#94a3b8" strokeWidth="0.5"></path>
</svg>

<div className="absolute left-[65%] -top-5 -translate-x-1/2 flex flex-col items-center">
<span className="text-[10px] text-slate-400 whitespace-nowrap">Optimal duration</span>
<iconify-icon className="text-slate-300 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="absolute left-[42%] top-[42%] text-[10px] text-slate-500 leading-tight">
                            Effect<br/>detectable
                        </div>

<div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-slate-400 px-1">
<span>0</span>
<span>12</span>
<span>24</span>
<span>36</span>
<span>48</span>
</div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-400">
                            Time (months)
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50 border-y border-slate-100" id="platform">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 text-center max-w-3xl mx-auto leading-snug">
                    Reveal Clinical translates teams' trial data into predictive models which optimize each stage of the development lifecycle.
                </h2>

<div className="mt-20 max-w-4xl mx-auto relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2"></div>
<div className="grid md:grid-cols-3 gap-8 md:gap-0 relative z-10">

<div className="flex flex-col items-center text-center px-4">
<div className="w-3 h-3 rounded-full bg-blue-600 mb-4 ring-4 ring-white shadow-sm"></div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Preclinical &amp; Early Clinical</h3>
<p className="text-xs text-slate-500 mt-2">Optimize candidate selection</p>
</div>

<div className="flex flex-col items-center text-center px-4">
<div className="w-3 h-3 rounded-full bg-blue-600 mb-4 ring-4 ring-white shadow-sm"></div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Late Stage</h3>
<p className="text-xs text-slate-500 mt-2">Design faster, successful efficacy trials</p>
</div>

<div className="flex flex-col items-center text-center px-4">
<div className="w-3 h-3 rounded-full bg-blue-600 mb-4 ring-4 ring-white shadow-sm"></div>
<h3 className="text-sm font-medium text-slate-900 tracking-tight">Launch &amp; Post-Market</h3>
<p className="text-xs text-slate-500 mt-2">Expand addressable market</p>
</div>
</div>
</div>

<div className="mt-24 grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/20">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">AI-Powered Data Cleaning</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            AI agents clean and harmonize trial data, establishing a pristine foundation for analysis.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/20">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-blue-600" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Predictive Modeling</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Build validated models of your disease and drug using internal and external trial data.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/20">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Evidence Generation</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Generate high-quality clinical evidence to secure broad reimbursement coverage globally.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="use-cases">
<div className="max-w-4xl mx-auto px-6">

<div className="mb-32">
<div className="mb-12">
<h2 className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">Clinical Development</h2>
<h3 className="text-3xl font-medium tracking-tight text-slate-900">Optimize trial design before the first patient enrolls.</h3>
</div>
<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center border-b border-slate-100 pb-4 mb-4">
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium pl-4">Standard Approach</div>
<div></div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium pl-4">With Predictive Models</div>
</div>
<div className="flex flex-col gap-2">

<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group">
<div className="p-4 md:p-5 rounded-xl bg-slate-50 text-slate-500 text-sm transition-colors">
                                Static historical analysis
                            </div>
<div className="text-slate-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 md:p-5 rounded-xl bg-blue-50/50 text-blue-900 font-medium text-sm border border-blue-100/50 transition-colors shadow-sm shadow-blue-100/20">
                                Dynamic trial simulations
                            </div>
</div>

<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group">
<div className="p-4 md:p-5 rounded-xl bg-slate-50 text-slate-500 text-sm transition-colors">
                                Broad patient enrollment
                            </div>
<div className="text-slate-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 md:p-5 rounded-xl bg-blue-50/50 text-blue-900 font-medium text-sm border border-blue-100/50 transition-colors shadow-sm shadow-blue-100/20">
                                Targeted responder profiles
                            </div>
</div>

<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group">
<div className="p-4 md:p-5 rounded-xl bg-slate-50 text-slate-500 text-sm transition-colors">
                                Arbitrary study duration
                            </div>
<div className="text-slate-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 md:p-5 rounded-xl bg-blue-50/50 text-blue-900 font-medium text-sm border border-blue-100/50 transition-colors shadow-sm shadow-blue-100/20">
                                Mathematically optimal endpoints
                            </div>
</div>
</div>
</div>

<div>
<div className="mb-12">
<h2 className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">Market Access</h2>
<h3 className="text-3xl font-medium tracking-tight text-slate-900">Build economic evidence on a stronger foundation.</h3>
</div>
<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center border-b border-slate-100 pb-4 mb-4">
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium pl-4">Standard Approach</div>
<div></div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium pl-4">With Predictive Models</div>
</div>
<div className="flex flex-col gap-2">

<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group">
<div className="p-4 md:p-5 rounded-xl bg-slate-50 text-slate-500 text-sm transition-colors">
                                Rough statistical projections
                            </div>
<div className="text-slate-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 md:p-5 rounded-xl bg-blue-50/50 text-blue-900 font-medium text-sm border border-blue-100/50 transition-colors shadow-sm shadow-blue-100/20">
                                Defensible, validated models
                            </div>
</div>

<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group">
<div className="p-4 md:p-5 rounded-xl bg-slate-50 text-slate-500 text-sm transition-colors">
                                Population average arguments
                            </div>
<div className="text-slate-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 md:p-5 rounded-xl bg-blue-50/50 text-blue-900 font-medium text-sm border border-blue-100/50 transition-colors shadow-sm shadow-blue-100/20">
                                Sub-group specific benefit modeling
                            </div>
</div>

<div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group">
<div className="p-4 md:p-5 rounded-xl bg-slate-50 text-slate-500 text-sm transition-colors">
                                Point-in-time snapshot data
                            </div>
<div className="text-slate-300">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 md:p-5 rounded-xl bg-blue-50/50 text-blue-900 font-medium text-sm border border-blue-100/50 transition-colors shadow-sm shadow-blue-100/20">
                                Longitudinal outcome projections
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-900 text-white" id="impact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
<div className="pt-8 md:pt-0 md:px-8 first:pt-0 first:px-0 flex flex-col justify-center">
<div className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-4">
                            15-25<span className="text-blue-400">%</span>
</div>
<p className="text-sm md:text-base text-slate-400 font-medium">Smaller trials</p>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Fewer patients required, saving millions and accelerating timelines.</p>
</div>
<div className="pt-8 md:pt-0 md:px-8 flex flex-col justify-center">
<div className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-4">
                            40<span className="text-blue-400">%</span>
</div>
<p className="text-sm md:text-base text-slate-400 font-medium">Increase in data quality coverage</p>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">AI comprehensively identifies errors that derail critical trials.</p>
</div>
<div className="pt-8 md:pt-0 md:px-8 flex flex-col justify-center">
<div className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-4">
                            $100M<span className="text-blue-400">+</span>
</div>
<p className="text-sm md:text-base text-slate-400 font-medium">Incremental addressable market</p>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Broader insurance coverage secured through stronger economic evidence.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Proven science, automated.</h2>
<p className="text-base text-slate-500 leading-relaxed">
                        Our predictive models are built on Model-Informed Drug Development (MIDD) — a set of well-established techniques endorsed by the FDA and EMA. AI agents handle the technical heavy lifting so your team doesn't need to.
                    </p>
</div>

<div className="mt-20 relative">

<div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-slate-200"></div>
<div className="grid lg:grid-cols-5 gap-8 items-start relative z-10">

<div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="h-24 w-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-3xl text-slate-400" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Raw Trial Data</h4>
<p className="text-xs text-slate-500 mt-2">Internal EDC &amp; Real-World Evidence</p>
</div>

<div className="lg:col-span-3 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/40 relative">
<div className="absolute -top-3 left-8 bg-blue-50 text-blue-700 text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-blue-100">
                                Oovacha AI Agents
                            </div>
<div className="grid md:grid-cols-3 gap-8 md:gap-4 mt-4">

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-slate-600 border border-slate-100">1</div>
<h5 className="text-sm font-medium text-slate-900 mb-2">Harmonize Data</h5>
<p className="text-xs text-slate-500">Integrate internal data with published literature.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600 border border-blue-100">2</div>
<h5 className="text-sm font-medium text-slate-900 mb-2">Build Models</h5>
<p className="text-xs text-slate-500">Construct and validate disease progression models.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-slate-600 border border-slate-100">3</div>
<h5 className="text-sm font-medium text-slate-900 mb-2">Run Simulations</h5>
<p className="text-xs text-slate-500">Simulate designs and project clinical outcomes.</p>
</div>
</div>
</div>

<div className="lg:col-span-1 flex flex-col items-center lg:items-end text-center lg:text-right">
<div className="h-24 w-24 rounded-2xl bg-blue-600 border border-blue-700 flex items-center justify-center mb-6 shadow-md shadow-blue-600/20 text-white">
<iconify-icon className="text-3xl" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Strategic Decisions</h4>
<p className="text-xs text-slate-500 mt-2">Optimized protocols &amp; market access dossiers</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="divide-y divide-slate-200/70">
<details className="group py-5" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>What is Reveal Clinical?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            An AI-powered platform that translates clinical trial data into validated predictive models. It combines data cleaning, predictive modeling, and evidence generation in a single platform — optimizing clinical development and strengthening market access.
                        </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>Who uses the platform?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            Clinical development leads, biostatisticians, HEOR teams, and market access leads. The platform is designed for decision-makers, not just technical specialists.
                        </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>Do we need pharmacometricians on staff?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            No. AI agents handle the pharmacometric work. When pharmacometricians are available, they get full transparency into model internals for review and validation.
                        </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>What data do we need to get started?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            Internal trial data (EDC exports). The platform integrates external data — published literature, competitor trials, real-world evidence — automatically.
                        </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>How does this differ from standard CRO analytics?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            CROs typically provide point solutions — separate engagements for data cleaning, statistical analysis, and HEOR modeling. Reveal Clinical is a single platform with one validated model serving all three.
                        </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>Is the platform compliant with regulatory standards?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            Yes. Regulatory documentation (ICH M15, ASME V&amp;V 40) is generated as a byproduct of the modeling workflow, not as a separate manual effort.
                        </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-slate-900 list-none text-base">
<span>How does market access evidence generation work?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 mt-3 text-sm leading-relaxed pr-8">
                            The same predictive model that informs trial design feeds directly into cost-effectiveness and budget impact analyses. When new data arrives, evidence updates propagate across all markets automatically.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-slate-900"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    See what a prediction engine can do for your program.
                </h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                    We'll walk through your disease area, your data, and how Reveal Clinical fits into your development timeline.
                </p>
<button className="inline-flex items-center justify-center text-base font-medium text-slate-900 bg-white hover:bg-slate-50 px-8 py-4 rounded-full transition-colors shadow-lg shadow-white/10">
                    Book a Demo
                </button>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-900 text-lg font-medium tracking-tighter uppercase">
                OOVACHA
            </div>
<div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Blog</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms &amp; Conditions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
</div>
<div className="text-xs text-slate-400">
                © 2026 Oovacha
            </div>
</div>
</footer>

    </>
  );
}
