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
      
<div className="min-h-screen lg:grid lg:grid-cols-2">

<div className="p-6 lg:p-16 xl:p-24 flex flex-col justify-between bg-white border-r border-zinc-100 relative overflow-hidden">

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="relative z-10 max-w-xl">

<div className="mb-12 flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-sm flex items-center justify-center text-white text-xs font-semibold">B</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">BENCHMARK</span>
</div>

<header className="mb-12">
<h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Integrated Behavioral Health Benchmark Report
                    </h1>
<p className="text-lg text-zinc-500 leading-relaxed font-normal mb-6">
                        How primary care practices and IPAs are performing across access, engagement, clinical continuity, and financial sustainability — and what it takes to be VBC-ready.
                    </p>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<span className="iconify text-indigo-600" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
<p className="font-normal">Based on aggregated, de-identified practice data. Includes ROI indicators without reducing care to revenue.</p>
</div>
<div className="mt-8 lg:hidden">
<a className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-all bg-zinc-900 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900" href="#download-form">
                            Get the report
                        </a>
</div>
</header>
<hr className="border-zinc-100 mb-12"/>

<section className="mb-16">
<h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-6">Inside the Report</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<span className="iconify text-indigo-500 mt-0.5 group-hover:text-indigo-600 transition-colors" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="20"></span>
<div>
<span className="block text-zinc-700 font-medium text-sm">Performance ranges across key IBH metrics</span>
<span className="block text-zinc-400 text-xs mt-1">Realistic benchmarks, not point estimates</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<span className="iconify text-indigo-500 mt-0.5 group-hover:text-indigo-600 transition-colors" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
<div>
<span className="block text-zinc-700 font-medium text-sm">Maturity tiers framework</span>
<span className="block text-zinc-400 text-xs mt-1">Foundational → Operational → VBC-Ready</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<span className="iconify text-indigo-500 mt-0.5 group-hover:text-indigo-600 transition-colors" data-icon="lucide:alert-circle" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-zinc-600 text-sm font-normal">Common failure points that stall scale</span>
</li>
<li className="flex items-start gap-3 group">
<span className="iconify text-indigo-500 mt-0.5 group-hover:text-indigo-600 transition-colors" data-icon="lucide:users" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-zinc-600 text-sm font-normal">How leading practices structure staffing and workflows</span>
</li>
<li className="flex items-start gap-3 group">
<span className="iconify text-indigo-500 mt-0.5 group-hover:text-indigo-600 transition-colors" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-zinc-600 text-sm font-normal">The role of AI in moving from episodic care to population management</span>
</li>
</ul>
</section>

<section className="relative rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 overflow-hidden">
<div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
<div className="bg-white/80 backdrop-blur-md border border-zinc-200 shadow-sm px-4 py-2 rounded-full flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-xs font-medium text-zinc-600">Download to view full data</span>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
                        Preview Findings
                    </h3>
<div className="space-y-6 opacity-40 grayscale">

<div>
<div className="flex justify-between text-xs text-zinc-500 mb-2">
<span>Engagement Rate</span>
<span>Time to Contact</span>
</div>
<div className="h-2 w-full bg-zinc-200 rounded-full mb-2 overflow-hidden">
<div className="h-full bg-zinc-800 w-3/4"></div>
</div>
<p className="text-xs text-zinc-400">Practices with &lt;7-day time-to-first-contact show materially higher engagement.</p>
</div>
<div className="flex gap-4">
<div className="w-1/2">
<div className="h-24 bg-zinc-200 rounded-md mb-2"></div>
<div className="h-2 w-12 bg-zinc-300 rounded mb-1"></div>
</div>
<div className="w-1/2">
<div className="h-24 bg-zinc-200 rounded-md mb-2"></div>
<div className="h-2 w-20 bg-zinc-300 rounded mb-1"></div>
</div>
</div>
<p className="text-xs text-zinc-400">Registry completeness is more predictive of sustainability than visit volume.</p>
</div>
</section>
</div>
<footer className="mt-16 text-xs text-zinc-400 space-y-2">
<p>Benchmark ranges reflect aggregated, de-identified data.</p>
<p>Programs may be reimbursed through Collaborative Care and other models. Results vary by organization and population.</p>
</footer>
</div>

<div className="bg-zinc-50 p-6 lg:p-16 xl:p-24 flex flex-col justify-center min-h-[50vh] lg:min-h-screen" id="download-form">
<div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200/60 p-8 lg:p-10">
<div className="mb-8">
<h2 className="text-xl font-medium text-zinc-900 tracking-tight mb-2">Get the Report</h2>
<p className="text-sm text-zinc-500">Enter your details to access the full benchmark analysis immediately.</p>
</div>
<form className="space-y-5">

<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700" htmlFor="email">Work email</label>
<input className="block w-full rounded-md border-zinc-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-3 text-zinc-900 placeholder:text-zinc-400 transition-all outline-none ring-1 ring-zinc-200 hover:ring-zinc-300 focus:ring-2 focus:ring-offset-1" id="email" placeholder="name@organization.com" required="" type="email"/>
</div>

<div className="space-y-1.5 relative">
<label className="block text-xs font-medium text-zinc-700" htmlFor="role">Role</label>
<div className="relative">
<select className="appearance-none block w-full rounded-md border-zinc-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-3 text-zinc-900 bg-white transition-all outline-none ring-1 ring-zinc-200 hover:ring-zinc-300 focus:ring-2 focus:ring-offset-1 pr-10 cursor-pointer" id="role" required="">
<option disabled="" selected="" value="">Select your role</option>
<option value="owner">Practice Owner</option>
<option value="coo">COO / Operations</option>
<option value="medical-director">Medical Director</option>
<option value="pop-health">Population Health / VBC</option>
<option value="payer">Payer</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="iconify text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="2" data-width="16"></span>
</span>
</div>
</div>

<div className="space-y-1.5 relative">
<label className="block text-xs font-medium text-zinc-700" htmlFor="org-type">Organization type</label>
<div className="relative">
<select className="appearance-none block w-full rounded-md border-zinc-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-3 text-zinc-900 bg-white transition-all outline-none ring-1 ring-zinc-200 hover:ring-zinc-300 focus:ring-2 focus:ring-offset-1 pr-10 cursor-pointer" id="org-type" required="">
<option disabled="" selected="" value="">Select type</option>
<option value="independent">Independent PCP</option>
<option value="ipa-aco">IPA / ACO</option>
<option value="health-system">Health System</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="iconify text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="2" data-width="16"></span>
</span>
</div>
</div>

<div className="space-y-1.5 relative">
<label className="block text-xs font-medium text-zinc-700" htmlFor="practice-size">Practice size (Providers)</label>
<div className="relative">
<select className="appearance-none block w-full rounded-md border-zinc-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-3 text-zinc-900 bg-white transition-all outline-none ring-1 ring-zinc-200 hover:ring-zinc-300 focus:ring-2 focus:ring-offset-1 pr-10 cursor-pointer" id="practice-size" required="">
<option disabled="" selected="" value="">Select size</option>
<option value="1-5">1 - 5</option>
<option value="6-20">6 - 20</option>
<option value="21-50">21 - 50</option>
<option value="50+">50+</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span className="iconify text-zinc-400" data-icon="lucide:chevron-down" data-strokeWidth="2" data-width="16"></span>
</span>
</div>
</div>

<div className="relative flex items-start py-2">
<div className="flex h-5 items-center">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-zinc-300 bg-white transition-all peer-checked:bg-indigo-600 peer-checked:border-indigo-600 peer-focus:ring-2 peer-focus:ring-indigo-500 peer-focus:ring-offset-2 flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
</label>
</div>
<div className="ml-3 text-xs">
<label className="font-normal text-zinc-600">I’d like help interpreting our benchmark results</label>
</div>
</div>

<div className="pt-2">
<button className="group flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all" type="submit">
                            Send me the report
                            <span className="iconify ml-2 text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
</form>

<div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-400">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
<span>Secure &amp; Confidential</span>
</div>
</div>
</div>
</div>

    </>
  );
}
