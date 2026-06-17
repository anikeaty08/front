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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold text-xl tracking-tighter text-slate-900 uppercase">
                RECLAIM
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#tools">Estimator</a>
<a className="hover:text-slate-900 transition-colors" href="#ethics">Our Model</a>
</div>
<a className="bg-slate-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-slate-800 transition-colors shadow-sm" href="#contact">
                Get Started
            </a>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
</span>
                    Recovering ₹5,000+ Crore in Unclaimed Assets
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Reclaim Your Family’s Legacy. Recover Your Forgotten Wealth.
                </h1>
<p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                    We help Indian retail investors and legal heirs recover unclaimed dividends and shares from the IEPF through an ethical, documentation-first approach.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/10" href="#contact">
                        Start Your Free Preliminary Check
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 border border-slate-200 text-sm font-medium px-6 py-3 rounded-md hover:bg-slate-50 transition-colors" href="#tools">
                        Estimate Value
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex items-center justify-center p-8">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

<div className="relative z-10 w-full max-w-sm space-y-4">
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 transform translate-x-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon className="text-xl" icon="solar:lock-unlocked-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">IEPF Status</div>
<div className="text-xs text-slate-500">Asset Unlocked</div>
</div>
<div className="ml-auto text-sm font-medium text-slate-900">₹12,45,000</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 transform -translate-x-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Legal Heir</div>
<div className="text-xs text-slate-500">Verification Complete</div>
</div>
<div className="ml-auto flex gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-slate-900"></div>
<div className="h-1.5 w-1.5 rounded-full bg-slate-900"></div>
<div className="h-1.5 w-1.5 rounded-full bg-slate-900"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Navigating the bureaucratic maze shouldn't cost you your legacy.</h2>
<p className="text-slate-600 text-sm md:text-base">Over ₹5,000+ crore sits idle in the Investor Education and Protection Fund (IEPF). Processes are complex, document-heavy, and unforgiving of errors.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:file-corrupted-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Physical Certificates</h3>
<p className="text-sm text-slate-600">Lost, damaged, or un-dematerialized physical share certificates spanning decades.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:danger-circle-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Complex Form-5</h3>
<p className="text-sm text-slate-600">Struggling with complex IEPF Form-5 filings and endless rejection loops.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Legal Heir Disputes</h3>
<p className="text-sm text-slate-600">Deceased investor cases lacking handholding from RTAs for transmission.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:global-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">NRI Disconnection</h3>
<p className="text-sm text-slate-600">Living abroad and unable to locally track or claim old Indian investments.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="tools">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Discover what belongs to you.</h2>
<p className="text-slate-600 text-sm">Use our preliminary tools to estimate historical value or check IEPF databases.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-900" icon="solar:calculator-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">The Wealth Estimator</h3>
</div>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Company Name (Historical)</label>
<input className="w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors placeholder:text-slate-400" placeholder="e.g., Reliance Industries" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Year of Purchase</label>
<select className="custom-select w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors text-slate-700">
<option>Select Year</option>
<option>Before 1990</option>
<option>1990 - 2000</option>
<option>2000 - 2010</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Original Quantity</label>
<input className="w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors placeholder:text-slate-400" placeholder="0" type="number"/>
</div>
</div>
<button className="w-full bg-slate-900 text-white text-sm font-medium py-2.5 rounded-md hover:bg-slate-800 transition-colors mt-2" type="button">Calculate Projection</button>
</form>
</div>

<div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon className="text-9xl text-white" icon="solar:database-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">Am I on the IEPF List?</h3>
</div>
<p className="text-slate-400 text-sm mb-6">Search public records to see if your name or your ancestor's name appears in the unclaimed dividend database.</p>
<form className="space-y-4">
<div>
<input className="w-full text-sm px-4 py-3 rounded-md border border-slate-700 bg-slate-800 text-white focus:bg-slate-800 focus:outline-none focus:border-slate-500 transition-colors placeholder:text-slate-500" placeholder="Enter Full Name or Folio Number" type="text"/>
</div>
<button className="w-full bg-white text-slate-900 text-sm font-medium py-3 rounded-md hover:bg-slate-100 transition-colors" type="button">Search Records</button>
</form>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                            Secure, confidential search.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Tailored recovery journeys.</h2>
<div className="grid md:grid-cols-3 gap-6">

<a className="group block bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all" href="#contact">
<div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-white transition-colors" icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">The Senior Citizen</h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-2">Focusing on physical-to-demat conversion, KYC updates, and signature corrections without the runaround.</p>
<div className="flex items-center text-sm font-medium text-slate-900 gap-1">
                        Explore process <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all" href="#contact">
<div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-white transition-colors" icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">The Legal Heir</h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-2">Navigating transmission of shares, Succession Certificates, NOCs, and probate processes seamlessly.</p>
<div className="flex items-center text-sm font-medium text-slate-900 gap-1">
                        Explore process <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all" href="#contact">
<div className="h-12 w-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-white transition-colors" icon="solar:plain-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">The NRI Investor</h3>
<p className="text-sm text-slate-600 mb-6 line-clamp-2">Remote documentation management, apostille coordination, and legacy asset recovery from overseas.</p>
<div className="flex items-center text-sm font-medium text-slate-900 gap-1">
                        Explore process <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Institutional-grade recovery services.</h2>
<p className="text-slate-600 text-sm md:text-base">We handle the paperwork, compliance, and follow-ups. You maintain 100% ownership.</p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:file-check-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">IEPF Claim Filing</h3>
<p className="text-sm text-slate-600 leading-relaxed">End-to-end handling of Form-5 filings, nodal officer coordination, and discrepancy resolution for shares and dividends.</p>
</div>
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:refresh-circle-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Physical to Demat</h3>
<p className="text-sm text-slate-600 leading-relaxed">Seamless conversion of old, brittle paper certificates into secure electronic formats, handling ISR forms and RTA hurdles.</p>
</div>
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:round-transfer-horizontal-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Transmission of Shares</h3>
<p className="text-sm text-slate-600 leading-relaxed">Specialized legal support for heirs, managing affidavit creation, indemnity bonds, and succession documentation.</p>
</div>
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Portfolio Hygiene</h3>
<p className="text-sm text-slate-600 leading-relaxed">Regularization of mismatched names, outdated signatures, and obsolete addresses with respective Registrars.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="ethics">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">An Ethics-First Revenue Model</h2>
<div className="space-y-8">
<div className="flex gap-4">
<iconify-icon className="text-2xl text-slate-400 shrink-0" icon="solar:wad-of-money-linear"></iconify-icon>
<div>
<h4 className="text-base font-medium mb-1">Success-Based Recovery</h4>
<p className="text-sm text-slate-400 leading-relaxed">We only get paid when you do. For qualifying cases, we operate on a strict success fee structure (typically 20-25%) with zero upfront consultation charges.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-2xl text-slate-400 shrink-0" icon="solar:pie-chart-2-linear"></iconify-icon>
<div>
<h4 className="text-base font-medium mb-1">No Shares as Fees</h4>
<p className="text-sm text-slate-400 leading-relaxed">We never take equity or shares as payment. Your assets remain 100% yours, transferred directly to your designated Demat account.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-2xl text-slate-400 shrink-0" icon="solar:sort-vertical-linear"></iconify-icon>
<div>
<h4 className="text-base font-medium mb-1">Milestone Transparency</h4>
<p className="text-sm text-slate-400 leading-relaxed">For complex legal or transmission cases requiring out-of-pocket expenses, we provide clear, stage-wise invoicing.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-700">
<h3 className="text-xl font-semibold tracking-tight mb-6">Our Institutional Moat</h3>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-300"><strong className="text-white font-medium">Deep Process Knowledge:</strong> Direct experience resolving edge cases with RTAs, company secretaries, and IEPF authorities.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-300"><strong className="text-white font-medium">Documentation-First approach:</strong> We pre-audit every signature, stamp, and affidavit to prevent rejection loops.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-300"><strong className="text-white font-medium">Honest Timelines:</strong> No false promises. We provide realistic ETAs based on current bureaucratic processing speeds.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-center">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Don't let your family's hard-earned wealth expire.</h2>
<p className="text-slate-600 mb-8">Start the recovery process today with a confidential, no-obligation preliminary assessment.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-700 font-medium border border-slate-200 py-3 px-4 rounded-md w-max bg-slate-50">
<iconify-icon className="text-lg text-slate-900" icon="solar:shield-keyhole-linear"></iconify-icon>
                        Strict Confidentiality Maintained
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-700 font-medium border border-slate-200 py-3 px-4 rounded-md w-max bg-slate-50">
<iconify-icon className="text-lg text-slate-900" icon="solar:pen-linear"></iconify-icon>
                        Written Consent Required for Every Case
                    </div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Request Assessment</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">First Name</label>
<input className="w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Last Name</label>
<input className="w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">WhatsApp Number</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-200 bg-slate-50 text-slate-500 sm:text-sm">+91</span>
<input className="w-full text-sm px-4 py-2.5 rounded-none rounded-r-md border border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Company Name of Investment</label>
<input className="w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="Optional" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Estimated Value Range</label>
<select className="custom-select w-full text-sm px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-slate-700">
<option>Not sure</option>
<option>Below ₹1 Lakh</option>
<option>₹1 Lakh - ₹10 Lakhs</option>
<option>Above ₹10 Lakhs</option>
</select>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="custom-checkbox mt-0.5 cursor-pointer" id="consent" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer select-none leading-relaxed" htmlFor="consent">
                            I consent to being contacted via WhatsApp/Phone for assessment purposes. Information shared is confidential.
                        </label>
</div>
<button className="w-full bg-slate-900 text-white text-sm font-medium py-3 rounded-md hover:bg-slate-800 transition-colors shadow-sm mt-4" type="button">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-slate-100 py-8 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-semibold text-lg tracking-tighter text-slate-900 uppercase">
                RECLAIM
            </div>
<div className="text-xs text-slate-500">
                © 2024 Reclaim Financial Services. All rights reserved. Not affiliated with IEPF Authority.
            </div>
<div className="flex gap-4 text-xs font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
