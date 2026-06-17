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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-1.5" href="#">
<iconify-icon className="text-slate-900 text-xl" icon="solar:scales-linear" strokeWidth="1.5"></iconify-icon>
                THEMIS
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#candidates">For Candidates</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#firms">For Law Firms</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#jobs">Jobs</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors" href="#contact">
                    Get Started
                </a>
<button className="md:hidden text-slate-500">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="pt-24 pb-20 px-6 max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                Legal careers and hiring — <br className="hidden sm:block"/>handled properly.
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                For lawyers and law firms who want precision, not noise.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-sm" href="#candidates">
                    I'm a Candidate <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm" href="#firms">
                    I'm a Law Firm <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
<a className="flex items-center gap-1.5 hover:text-slate-900 transition-colors" href="#jobs">
<iconify-icon className="text-lg" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
                    Browse Jobs
                </a>
<a className="flex items-center gap-1.5 hover:text-slate-900 transition-colors" href="#firms">
<iconify-icon className="text-lg" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
                    Submit Hiring Requirement
                </a>
</div>
</section>

<section className="py-20 border-t border-slate-100 bg-slate-50/50" id="jobs">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Explore Opportunities by Practice Area</h2>
<p className="text-sm text-slate-500 font-medium">Find your next role in your specific sector.</p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity" href="#">
                        View All Vacancies <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<a className="group flex flex-col p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-2xl text-slate-400 mb-4 group-hover:text-slate-900 transition-colors" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Clinical Negligence</h3>
<span className="mt-auto text-xs font-medium text-slate-500 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                            View Roles <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>

<a className="group flex flex-col p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-2xl text-slate-400 mb-4 group-hover:text-slate-900 transition-colors" icon="solar:case-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Corporate</h3>
<span className="mt-auto text-xs font-medium text-slate-500 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                            View Roles <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>

<a className="group flex flex-col p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-2xl text-slate-400 mb-4 group-hover:text-slate-900 transition-colors" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Family Law</h3>
<span className="mt-auto text-xs font-medium text-slate-500 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                            View Roles <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>

<a className="group flex flex-col p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-2xl text-slate-400 mb-4 group-hover:text-slate-900 transition-colors" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Real Estate</h3>
<span className="mt-auto text-xs font-medium text-slate-500 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                            View Roles <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>

<a className="group flex flex-col p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<iconify-icon className="text-2xl text-slate-400 mb-4 group-hover:text-slate-900 transition-colors" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Employment Law</h3>
<span className="mt-auto text-xs font-medium text-slate-500 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                            View Roles <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-white" id="candidates">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Your next move — handled properly</h2>
<p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">
                            We don't just collect CVs. We provide strategic guidance to place you in roles that match your ambition and expertise.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-slate-900 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                No CV sent without your prior approval
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-slate-900 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Only highly relevant roles — no spam submissions
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-slate-900 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Comprehensive interview preparation support
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-slate-900 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Full confidentiality from start to finish
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-lg text-slate-900 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Honest feedback, even if unsuccessful
                            </li>
</ul>
</div>

<div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl relative">
<div className="absolute -top-4 -right-4 w-20 h-20 bg-slate-900/5 rounded-full blur-2xl"></div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Quick CV Upload</h3>
<form className="space-y-4 relative z-10">
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" placeholder="Full Name" type="text"/>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" placeholder="Email Address" type="email"/>

<label className="block w-full border-2 border-dashed border-slate-200 rounded-xl p-6 text-center cursor-pointer hover:border-slate-300 hover:bg-white transition-all">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
<span className="block text-sm font-medium text-slate-600 mb-1">Click to upload your CV</span>
<span className="block text-xs font-medium text-slate-400">PDF or Word document</span>
<input accept=".pdf,.doc,.docx" className="hidden" type="file"/>
</label>
<button className="w-full py-3 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors" type="button">
                                Submit Your CV
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-900 text-white" id="firms">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">Hire the right legal talent — faster</h2>

<div className="space-y-6 mb-8">
<div className="flex items-start gap-6">
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-sm font-medium text-slate-400">
<iconify-icon className="text-rose-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Irrelevant CVs
                                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Pre-vetted candidates only
                                    </div>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-sm font-medium text-slate-400">
<iconify-icon className="text-rose-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Lack of specialization
                                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Legal-sector specialists
                                    </div>
</div>
</div>
<div className="flex items-start gap-6">
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-sm font-medium text-slate-400">
<iconify-icon className="text-rose-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Slow response times
                                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Faster turnaround
                                    </div>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-sm font-medium text-slate-400">
<iconify-icon className="text-rose-400" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> High agency fees
                                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Flexible approach
                                    </div>
</div>
</div>
</div>
</div>

<div className="p-8 bg-white text-slate-900 border border-slate-200 rounded-3xl">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Submit a Hiring Requirement</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" placeholder="Firm Name" type="text"/>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" placeholder="Contact Email" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all">
<option disabled="" selected="" value="">Role Type</option>
<option value="partner">Partner</option>
<option value="associate">Associate</option>
<option value="nq">NQ Solicitor</option>
<option value="paralegal">Paralegal</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all">
<option disabled="" selected="" value="">Practice Area</option>
<option value="corporate">Corporate</option>
<option value="real_estate">Real Estate</option>
<option value="family">Family Law</option>
<option value="litigation">Litigation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all resize-none" placeholder="Brief Job Description (Optional)" rows="3"></textarea>
<button className="w-full py-3 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors" type="button">
                                Submit Requirement
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-100">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">How we work</h2>
<p className="text-base text-slate-500 font-medium">A structured approach tailored to your exact needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

<div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200"></div>

<div className="relative">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-8 flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Candidates
                    </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-semibold flex items-center justify-center flex-shrink-0">1</div>
<h4 className="text-sm font-semibold text-slate-900 mt-1.5">Share your CV</h4>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-semibold flex items-center justify-center flex-shrink-0">2</div>
<h4 className="text-sm font-semibold text-slate-900 mt-1.5">Get matched with roles</h4>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-semibold flex items-center justify-center flex-shrink-0">3</div>
<h4 className="text-sm font-semibold text-slate-900 mt-1.5">Get placed with guidance</h4>
</div>
</div>
</div>

<div className="relative">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-8 flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
                        Law Firms
                    </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">1</div>
<h4 className="text-sm font-semibold text-slate-900 mt-1.5">Submit role</h4>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">2</div>
<h4 className="text-sm font-semibold text-slate-900 mt-1.5">Get shortlisted candidates</h4>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">3</div>
<h4 className="text-sm font-semibold text-slate-900 mt-1.5">Hire faster</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Not your typical recruitment agency</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
<iconify-icon className="text-xl text-slate-900" icon="solar:forbidden-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">No "Spray and Pray"</h3>
<p className="text-xs text-slate-500 font-medium">We never mass-distribute CVs. Every submission is targeted and approved.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
<iconify-icon className="text-xl text-slate-900" icon="solar:case-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Deep Legal Expertise</h3>
<p className="text-xs text-slate-500 font-medium">We exclusively serve the legal sector, understanding its exact nuances.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
<iconify-icon className="text-xl text-slate-900" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Precision Matching</h3>
<p className="text-xs text-slate-500 font-medium">Only relevant, highly-qualified profiles presented for specific roles.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
<iconify-icon className="text-xl text-slate-900" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Confidential Process</h3>
<p className="text-xs text-slate-500 font-medium">Your hiring strategy or career move stays strictly private.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Trusted by legal professionals</h2>
</div>

<div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16 pb-16 border-b border-slate-100">
<div className="flex gap-8 sm:gap-12 text-center">
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">500+</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">Placements</p>
</div>
<div className="w-px bg-slate-200"></div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">2/3</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">Placed Successfully</p>
</div>
<div className="w-px bg-slate-200"></div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">94%</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">Repeat Clients</p>
</div>
</div>
<div className="hidden lg:block w-px h-12 bg-slate-200"></div>
<div className="flex gap-8 opacity-60 grayscale items-center flex-wrap justify-center">
<span className="text-lg font-semibold tracking-tighter text-slate-800">LEGAL 500</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800">CHAMBERS</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800">SRA REGULATED</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-900"></div>
<div className="flex items-center gap-1 text-slate-300 mb-4">
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                            "Themis understood exactly what I was looking for. They didn't just fire my CV to random firms; they took the time to map out a career path and found a role that perfectly aligned with my ambitions."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-semibold">
                                S.P.
                            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah P.</p>
<p className="text-xs text-slate-500 font-medium">Senior Associate, Corporate</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-200"></div>
<div className="flex items-center gap-1 text-slate-300 mb-4">
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                            "The quality of candidates provided is exceptional. We no longer waste time filtering through irrelevant applications. Themis only sends us profiles that precisely match our brief."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-semibold">
                                M.H.
                            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Mark H.</p>
<p className="text-xs text-slate-500 font-medium">Managing Partner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100 bg-slate-50/50" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-12">Let's get started</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">

<div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-900" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">For Candidates</h3>
<div className="flex flex-col gap-3 w-full">
<a className="flex items-center justify-center w-full py-3 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors" href="#candidates">
                                Submit CV
                            </a>
<a className="flex items-center justify-center w-full py-3 text-sm font-medium text-slate-900 border border-slate-200 bg-white rounded-xl hover:bg-slate-50 transition-colors" href="#jobs">
                                Browse Roles
                            </a>
</div>
</div>

<div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-900" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">For Law Firms</h3>
<div className="flex flex-col gap-3 w-full">
<a className="flex items-center justify-center w-full py-3 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors" href="#firms">
                                Submit Vacancy
                            </a>
<a className="flex items-center justify-center w-full py-3 text-sm font-medium text-slate-900 border border-slate-200 bg-white rounded-xl hover:bg-slate-50 transition-colors" href="#">
                                Talk to Recruiter
                            </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-1.5 mb-4" href="#">
<iconify-icon className="text-slate-900 text-xl" icon="solar:scales-linear" strokeWidth="1.5"></iconify-icon>
                    THEMIS
                </a>
<p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    Exclusive legal recruitment connecting exceptional talent with the UK's leading law firms.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Candidates</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#jobs">Search Jobs</a></li>
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#candidates">Submit CV</a></li>
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#">Career Advice</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Law Firms</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#firms">Start Hiring</a></li>
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#">Our Process</a></li>
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#contact">Contact Team</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#">Insights</a></li>
<li><a className="text-sm text-slate-500 font-medium hover:text-slate-900 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400 font-medium">© 2024 Themis Recruit. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 font-medium hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 font-medium hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
